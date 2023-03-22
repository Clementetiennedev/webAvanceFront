export default function Title(props: any)
{
    const startOrNot = props.isPlayerToPlay;
    if (startOrNot == true) {
        return <p>A vous de jouez</p>;
    }else{
        return <p>Vous pouvez commencez une partie en appuyant sur start</p>;
    }
}