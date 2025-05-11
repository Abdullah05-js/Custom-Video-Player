import { useState, useRef, useEffect } from 'react';
import Hls from "hls.js"
import { Button } from '@heroui/button';
import { MutedSpeakerIcon, ReLoadIcom, PlayIcon, SpeakerIcon, PictureInPictureIcon, FullScreenIcon, ResSizeScreenIcon } from "./svgs/icon.js";
import { PauseIcon } from './svgs/icon.js';
const handleDuration = (time) => {

    const format = new Intl.NumberFormat(undefined, {
        minimumIntegerDigits: 2
    })
    const m = Math.floor(time / 60) % 60
    const s = Math.floor(time % 60)
    const h = Math.floor(time / 3600)
    if (h === 0)
        return `${m}:${format.format(s)}`;
    else
        return `${h}:${format.format(h)}:${format.format(s)}`;
}

const isHls = (link) => {
    if (link.includes(".m3u8") || link.includes(".ts")) return true;
    return false
}

const Video = ({ SRC }) => {
    const VideoRef = useRef();

    const VideoContinerRef = useRef();
    const [Play, setPlay] = useState(false);
    const [isMuted, setisMuted] = useState(false);
    const [hls, setHls] = useState();
    const [isFullScreen, SetisFullScreen] = useState(false);
    const [VideoDuration, setVideoDuration] = useState(0);
    const [MainTimeLine, setMainTimeLine] = useState(handleDuration(0));
    const [HideHeader, setHideHeader] = useState(false)


    useEffect(() => {
        let localHls;

        if (isHls(SRC)) {

            if (VideoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
                VideoRef.current.src = SRC
            }
            else if (Hls.isSupported()) {
                localHls = new Hls({
                    "debug": true
                });

                localHls.log = true;
                localHls.loadSource(SRC);
                localHls.attachMedia(VideoRef.current)
                localHls.on(Hls.Events.ERROR, (err) => {
                    console.log(err)
                });
                localHls.on(Hls.Events.MANIFEST_PARSED, () => {
                    VideoRef.current.play()
                    setPlay(true)
                });
                setHls(localHls)

            } else {
                console.log('hls not supported')
                alert("hls not supported")
            }

        } else {
            VideoRef.current.src = SRC
        }
        return () => {
            if (localHls) {
                localHls.destroy();
            }
        };

    }, [SRC])

    const handleTimeUpdate = () => {
        setMainTimeLine(handleDuration(VideoRef.current.currentTime))
    }

    const handlePictureInPicture = () => {

        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else if (document.pictureInPictureEnabled) {
            handPlay();
            VideoRef.current.requestPictureInPicture();
        }

    }

    const handMute = () => {
        setisMuted(e => {
            VideoRef.current.muted = !e
            return !e
        })
    }

    const handPlay = () => {
        setPlay(prev => {
            const newState = !prev;
            if (newState) {
                VideoRef.current.play();
            } else {
                VideoRef.current.pause();
            }
            return newState;
        });
    }

    const handFullScreen = () => {
        SetisFullScreen((e) => !e)
        isFullScreen ? setHideHeader(!isFullScreen) : setHideHeader(!isFullScreen)
        isFullScreen ? document.exitFullscreen() : VideoContinerRef.current.requestFullscreen();
    }

    const handReload = () => {
        setPlay(false)
        if (hls) {
            const newHls = new Hls();

            newHls.loadSource(SRC);
            newHls.attachMedia(VideoRef.current);

            newHls.on(Hls.Events.MANIFEST_PARSED, () => {
                VideoRef.current.currentTime = 0;
                VideoRef.current.play();
                setPlay(true);
            });

            newHls.on(Hls.Events.ERROR, (event, data) => {
                console.error("HLS reload error", data);
            });

            setHls(newHls);
        }
        else {
            VideoRef.current.load()
        }
    }

    return (
        <div ref={VideoContinerRef} onClick={handPlay} onDoubleClick={handFullScreen} className={`text-primary group  w-full h-full relative rounded-3xl ${isFullScreen ? "w-screen h-screen" : ""} shadow-green-300 shadow-md `}>
            <div className={`z-50 -translate-y-6 absolute invisible group-hover:visible  p-2 flex flex-row justify-center items-center bg-opacity-35 bg-black w-1/3 m-1 transform  group-hover:translate-y-1 transition duration-500 ease-in-out rounded-3xl ${HideHeader && "hidden"}`} color='success'>
                Powered by THODEX.live
            </div>
            <div className='flex flex-row justify-between bg-black bg-opacity-30 translate-y-6 items-center absolute invisible group-hover:visible transform  group-hover:translate-y-1 transition duration-500 ease-in-out bottom-0 left-0 right-0 z-50 p-2 rounded-xl'>
                <div className='flex flex-row justify-center items-center'>
                    <Button isIconOnly onPress={handPlay} className='bg-transparent  ml-2 flex  justify-center items-center'>
                        {Play ? <PauseIcon /> : <PlayIcon />}
                    </Button>

                    {!hls && <p className='flex  justify-center items-center'>{`${MainTimeLine}/${handleDuration(VideoDuration)}`}</p>}

                </div>

                <div className='flex flex-row max-sm:gap-0 gap-7 justify-center items-center'>

                    <Button onPress={handReload} isIconOnly color='success' className='bg-transparent'>
                        <ReLoadIcom />
                    </Button>

                    <Button isIconOnly onPress={handMute} className='bg-transparent flex  justify-center items-center'>
                        {isMuted ? <MutedSpeakerIcon /> : <SpeakerIcon />}

                    </Button>


                    <Button isIconOnly onPress={handlePictureInPicture} className='bg-transparent text-primary flex  justify-center items-center'>
                        <PictureInPictureIcon />
                    </Button>
                    <Button isIconOnly onPress={handFullScreen} className='bg-transparent text-primary mr-2 flex  justify-center items-center'>
                        {isFullScreen ? <ResSizeScreenIcon /> : <FullScreenIcon />}

                    </Button>
                </div>
            </div>
            {/* here we used oncanplay to avoid error when the media is not loaded bc if its not the duration will be undifend */}
            <video loop onTimeUpdate={handleTimeUpdate} onCanPlay={() => setVideoDuration(VideoRef.current.duration)} ref={VideoRef} className={` object-cover rounded-3xl w-full h-full ${isFullScreen ? "w-screen h-screen" : ""}`}></video>
        </div>
    );
}

export default Video;
