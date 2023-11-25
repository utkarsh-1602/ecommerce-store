
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

const HomePage = async () => {

    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboards("9f456f96-0706-4ed6-a4bf-9c3173a6d82b")

    return (
        <Container>
            <div className="space-y-10 pb-10 text-white" >
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 text-black">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage;