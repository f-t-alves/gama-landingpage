import CardOverlay from './CardOverlay'


const ShirtCard = () => {
    const shirt = {
        name: "Shirt",
        image: '/shirt.png',
        description: "The most Furreca of shirts!",
        price: "$3.00"
    }

    return <CardOverlay item={shirt}/>
}

export default ShirtCard;