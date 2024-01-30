import * as React from "react";

export function DocIcon(props) {
  return (
    <svg
      viewBox="0 0 700 1000"
      fill="currentColor"
      
      {...props}
    >
      <path d="M600 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H100c-26.667 0-50-10-70-30S0 876.667 0 850V150c0-28 10-51.667 30-71s43.333-29 70-29h500M140 258v88h420v-88H140m420 480v-88H140v88h420m0-196v-90H142v90h418" />
    </svg>
  );
}

export function ProfileIcon(props) {
    return (
      <svg
        viewBox="0 0 448 512"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9 24.6 56.6 81 96.1 146.7 96.1s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9v-64c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96h-32c-53 0-96-43-96-96v-16c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48zm-146.7 18.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3.9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zm-76.6 153.8C46.7 342.6 0 407 0 482.3 0 498.7 13.3 512 29.7 512H128v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h98.3c16.4 0 29.7-13.3 29.7-29.7 0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16zm96 32c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z" />
      </svg>
    );
  }

export function MailIcon(props) {
    return (
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
      </svg>
    );
  }

  export function BlogIcon(props) {
    return (
      <svg
        viewBox="0 0 448 512"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm261.8 107.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289l105.2-105.2 71 71-105.2 105.1c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" />
      </svg>
    );
  }

  export function SkillsIcon(props) {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
      </svg>
    );
  }
