import getColors from "@/actions/get-colors";
import getIndividualCategory from "@/actions/get-individualCategory";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import { Container } from "postcss";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getIndividualCategory(params.categoryId)

    return (
        <div className="bg-white"
        >CategoryPage</div>
        <Container>
            <Billboard/>
        </Container>
    )
}

export default CategoryPage