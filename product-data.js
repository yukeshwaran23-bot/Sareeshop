const products = [

    {
        id: 1,
        name: "Elegant Silk Saree 01",
        type: "Silk Sarees",
        price: 2999,
        image: "images/saree-01.jpg"
    },

    {
        id: 2,
        name: "Classic Silk Saree 02",
        type: "Silk Sarees",
        price: 3299,
        image: "images/saree-02.jpg"
    },

    {
        id: 3,
        name: "Traditional Silk Saree 03",
        type: "Wedding Sarees",
        price: 3999,
        image: "images/saree-03.jpg"
    },

    {
        id: 4,
        name: "Royal Silk Saree 04",
        type: "Wedding Sarees",
        price: 4499,
        image: "images/saree-04.jpg"
    },

    {
        id: 5,
        name: "Designer Silk Saree 05",
        type: "Designer Sarees",
        price: 3699,
        image: "images/saree-05.jpg"
    },

    {
        id: 6,
        name: "Elegant Pink Saree 06",
        type: "Designer Sarees",
        price: 2899,
        image: "images/saree-06.jpg"
    },

    {
        id: 7,
        name: "Blue Zari Saree 07",
        type: "Silk Sarees",
        price: 3499,
        image: "images/saree-07.jpg"
    },

    {
        id: 8,
        name: "Classic Handloom Saree 08",
        type: "Silk Sarees",
        price: 3199,
        image: "images/saree-08.jpg"
    },

    {
        id: 9,
        name: "Green Designer Saree 09",
        type: "Designer Sarees",
        price: 3799,
        image: "images/saree-09.jpg"
    },

    {
        id: 10,
        name: "Pink Gold Saree 10",
        type: "Wedding Sarees",
        price: 4299,
        image: "images/saree-10.jpg"
    },

    {
        id: 11,
        name: "Pink Green Silk Saree 11",
        type: "Silk Sarees",
        price: 3599,
        image: "images/saree-11.jpg"
    },

    {
        id: 12,
        name: "Turquoise Pink Saree 12",
        type: "Designer Sarees",
        price: 3399,
        image: "images/saree-12.jpg"
    },

    {
        id: 13,
        name: "Mint Maroon Saree 13",
        type: "Designer Sarees",
        price: 3699,
        image: "images/saree-13.jpg"
    },

    {
        id: 14,
        name: "Purple Zari Saree 14",
        type: "Silk Sarees",
        price: 3899,
        image: "images/saree-14.jpg"
    },

    {
        id: 15,
        name: "Teal Maroon Saree 15",
        type: "Wedding Sarees",
        price: 4199,
        image: "images/saree-15.jpg"
    },

    {
        id: 16,
        name: "Pastel Purple Saree 16",
        type: "Silk Sarees",
        price: 3299,
        image: "images/saree-16.jpg"
    },

    {
        id: 17,
        name: "Cream Purple Saree 17",
        type: "Wedding Sarees",
        price: 4599,
        image: "images/saree-17.jpg"
    },

    {
        id: 18,
        name: "Pink Silver Saree 18",
        type: "Designer Sarees",
        price: 3499,
        image: "images/saree-18.jpg"
    },

    {
        id: 19,
        name: "Mustard Silver Saree 19",
        type: "Designer Sarees",
        price: 2999,
        image: "images/saree-19.jpg"
    },

    {
        id: 20,
        name: "Wine Silver Saree 20",
        type: "Silk Sarees",
        price: 3799,
        image: "images/saree-20.jpg"
    }

];


function formatPrice(price) {

    return "₹" +
        Number(price).toLocaleString("en-IN");

}