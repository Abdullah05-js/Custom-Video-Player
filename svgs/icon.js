import React from 'react'

const Svg = ({width=48,height=48,children}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  width={width} height={height}>
        {children}
    </svg>
  )
}

export const PlayIcon = ({width=38,height=38}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  viewBox="0 0 24 24"  ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" ></rect> <path d="M16.7519 11.1679L10.5547 7.03647C9.89015 6.59343 9 7.06982 9 7.86852V16.1315C9 16.9302 9.89015 17.4066 10.5547 16.9635L16.7519 12.8321C17.3457 12.4362 17.3457 11.5638 16.7519 11.1679Z" stroke="#00ff9d" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Svg>
  )
}


export const PauseIcon = ({width=28,height=28}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  viewBox="0 0 24 24" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#86efac" d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M8.05611421,5.45454545 C8.43267199,5.45454545 8.73793239,5.75980585 8.73793239,6.13636364 L8.73793239,13.4084582 C8.73793239,13.7850159 8.43267199,14.0902763 8.05611421,14.0902763 C7.67955643,14.0902763 7.37429603,13.7850159 7.37429603,13.4084582 L7.37429603,6.13636364 C7.37429603,5.75980585 7.67955643,5.45454545 8.05611421,5.45454545 Z M12.6015688,5.45454545 C12.9781265,5.45454545 13.2833869,5.75980585 13.2833869,6.13636364 L13.2833869,13.4084582 C13.2833869,13.7850159 12.9781265,14.0902763 12.6015688,14.0902763 C12.225011,14.0902763 11.9197506,13.7850159 11.9197506,13.4084582 L11.9197506,6.13636364 C11.9197506,5.75980585 12.225011,5.45454545 12.6015688,5.45454545 Z"></path> </g></svg>
    </Svg>
  )
}

export const SpeakerIcon = ({width=28,height=28}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#86efac" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Svg>
  )
}

export const MutedSpeakerIcon = ({width=28,height=28}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8.14307C3.4148 8.66137 3 9.49393 3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C12.6098 21 13.0337 19.3265 13.2717 17M3 3L21 21M9 4.60756C9.84604 3.71548 10.8038 3 12 3C12.7739 3 13.2484 5.69533 13.4233 9" stroke="#86efac" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Svg>
  )
}


export const  PictureInPictureIcon = ({width=28,height=28}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg viewBox="0 0 24 24" fill="#86efac"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4zm-8.5-8L9.457 9.043l2.25 2.25-1.414 1.414-2.25-2.25L6 12.5V7h5.5z"></path> </g> </g></svg>
    </Svg>
  )
}

export const  FullScreenIcon = ({width=22,height=22}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg fill="#6ee7b7" viewBox="0 0 1920 1920"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1146.616-.012V232.38h376.821L232.391 1523.309v-376.705H0V1920h773.629v-232.39H396.69L1687.737 396.68V773.5h232.275V-.011z" fill-rule="evenodd"></path> </g></svg>
    </Svg>
  )
}


export const  ResSizeScreenIcon = ({width=30,height=30}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  fill="#86efac" viewBox="0 0 36 36" version="1.1" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>resize-down-line</title> <path class="clr-i-outline clr-i-outline-path-1" d="M32,15H22.41l9.25-9.25a1,1,0,0,0-1.41-1.41L21,13.59V4a1,1,0,0,0-2,0V17H32a1,1,0,0,0,0-2Z"></path><path  d="M4,19a1,1,0,0,0,0,2h9.59L4.33,30.25a1,1,0,1,0,1.41,1.41L15,22.41V32a1,1,0,0,0,2,0V19Z"></path> </g></svg>
 </Svg>
  )
}


