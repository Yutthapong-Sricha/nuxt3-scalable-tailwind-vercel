// Wordpress composables
import{ Post } from '~~/types/post'

export default () => {
    const config = useRuntimeConfig()
    const WP_URL: string = config.wpUri

    const get = async <T>(endpoint: string) =>{
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`)
    }

    // get all posts
    const getPosts = async(
        category?: number,
        page: number = 1,
        perPage: number = 10,
        fields: string = 'id,title,slug,excerpt,title,link,slug,date',

    ) => {
        let query: string = `posts?page=${page}&per_page=${perPage}&_embed=1`;
        if (category) {
            query += `&categories=${category}`;
        } 
        return get<Post[]>(query)
    }

    // get a single post
    const getPost = async( slug: string ) => {
        return get<Post[]>(`posts?slug=${slug}&_embed=1`);
    }

    // get all categories
    const getCategories = async( fields: string = "name,slug,count") =>{
        return get<any>(`categories`)
    }

    // get a single category
    const getCategory = async (slug: string) => {
        return get<any>(`categories?slug=${slug}`);
    }

    return {
        get,
        getPosts,
        getPost,
        getCategories,
        getCategory,
    }
}