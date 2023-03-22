export default function SimonButton(props: any){
    return <button
        onClick={props.handleClick}
        className={'btn-color-' + props.color + '-' + (props.active ? 'active' : 'not-active')}
    ></button>
}