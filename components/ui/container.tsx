interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="mx-auto max-w-7xl">

        </div>
    )
}

export default Container