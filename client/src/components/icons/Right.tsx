interface ShowType {
    show: boolean;
}

function Right ({show}:ShowType) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className={show? 'rotate':''}>
            <path fill="currentColor" d="M8.465 20.485L16.95 12L8.465 3.515L7.05 4.929L14.122 12L7.05 19.071l1.415 1.414Z"/>
            </svg>
    )
}

export default Right;