
import getBillboards from "@/actions/get-billboards";
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

const HomePage = async () => {

    const billboard = await getBillboards("defc42b7-013c-4cff-a1a1-4eabffbe084b")

    return (
        <Container>
            <div className="space-y-10 pb-10 text-white shadow-md" >
                <Billboard data={billboard} />
            </div>
        </Container>
    )
}

export default HomePage;