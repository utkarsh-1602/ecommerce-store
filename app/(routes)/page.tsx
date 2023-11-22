
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

const HomePage = async () => {

    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboards("defc42b7-013c-4cff-a1a1-4eabffbe084b")

    return (
        <Container>
            <div className="space-y-10 pb-10 text-white" >
                <Billboard data={billboard} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>
    )
}

export default HomePage;