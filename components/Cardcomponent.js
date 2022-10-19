export const CardComponent = {
    
    render(arr) { 
        arr.map(item => {
            console.log(item);
            console.log(item.id);
            return `
        <div id="item.id">
        <img src="${item.src}" alt="${item.alt}">
        </div>
        `})  
    }
}
