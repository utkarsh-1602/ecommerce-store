import Link from "next/link"

import Container from "@/components/ui/container"
import MainNav from "@/components/main-nav"
import getCategories from "@/actions/get-categories"
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;
// hard refresh : ctrl + shift + R 

const Navbar = async () => {

    try {
        const categories = await getCategories();
        console.log("Categories==========> ", categories)

        return (
            <div>
                <Container>
                    <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                            <p className="font-bold text-xl">STORE</p>
                        </Link>
                        <MainNav data={categories} />
                        <NavbarActions />
                    </div>
                </Container>
            </div>
        )
    } catch (error) {
        console.error('Error fetching categories:', error);
        return <div>Error fetching categories</div>;

    }
}

export default Navbar