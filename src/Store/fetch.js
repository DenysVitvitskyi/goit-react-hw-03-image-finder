const key = '22674819-1c6648e1bd9ba2423cbcfb506';

export const searchImg = (input, page) => {
    const response = fetch(`https://pixabay.com/api/?q=${input}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
    return response;
}