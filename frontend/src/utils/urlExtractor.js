export function urlExtractor(baseUrl, fullUrl) {
    const regex = new RegExp(`^${baseUrl}`, 'i');
    const result = fullUrl.replace(regex, '');
    console.log(result);
    return result;
}