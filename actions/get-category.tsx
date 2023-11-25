import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    try {
        const res = await fetch(`${URL}/${id}`);

        console.log(res)


        if (!res.ok) {
            // Handle the case where the server returns an error status
            throw new Error(`Failed to fetch category. Status: ${res.status}`);
        }

        // Log the status and headers
        console.log('[getIndividualCategory] Status:', res.status);
        console.log('[getIndividualCategory] Headers:', res.headers);

        const data = await res.json();
        console.log('[getIndividualCategory] Data:', data);

        // // Check if data is null and handle it appropriately
        // if (data === null) {
        //     console.warn('Category not found:', id);
        //     return null;
        // }


        return data;
    } catch (error) {
        // Handle other errors, such as network errors
        console.error('Error fetching category:', error);
        throw error;
    }
};

export default getCategory;
