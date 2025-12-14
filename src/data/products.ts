export interface Product {
    id: string;
    price: string;
    image: string;
    name: {
        en: string;
        mr: string;
    };
    description: {
        en: string;
        mr: string;
    };
    whatsappMessage: {
        en: string;
        mr: string;
    };
}

export const products: Product[] = [
    {
        id: "groundnut-oil",
        price: "₹250/L",
        image: "/woodpressoil/groundnut-oil.jpg",
        name: {
            en: "Groundnut Oil",
            mr: "शेंगदाणा तेल",
        },
        description: {
            en: "Pure and healthy wood pressed Groundnut Oil. Best for daily cooking.",
            mr: "शुद्ध आणि आरोग्यदायी लाकडी घाण्याचे शेंगदाणा तेल. रोजच्या स्वयंपाकासाठी सर्वोत्तम.",
        },
        whatsappMessage: {
            en: "I want to order Groundnut Oil.",
            mr: "मला शेंगदाणा तेल ऑर्डर करायचे आहे.",
        },
    },
    {
        id: "sesame-oil",
        price: "₹300/L",
        image: "/woodpressoil/sesame-oil.jpg",
        name: {
            en: "Sesame Oil",
            mr: "तीळ तेल",
        },
        description: {
            en: "Natural wood pressed Sesame Oil. Rich in antioxidants.",
            mr: "नैसर्गिक लाकडी घाण्याचे तीळ तेल. अँटीऑक्सिडंट्सने समृद्ध.",
        },
        whatsappMessage: {
            en: "I want to order Sesame Oil.",
            mr: "मला तीळ तेल ऑर्डर करायचे आहे.",
        },
    },
    {
        id: "coconut-oil",
        price: "₹280/L",
        image: "/woodpressoil/coconut-oil.jpg",
        name: {
            en: "Coconut Oil",
            mr: "खोबरेल तेल",
        },
        description: {
            en: "Organic wood pressed Coconut Oil. Perfect for hair and cooking.",
            mr: "सेंद्रिय लाकडी घाण्याचे खोबरेल तेल. केस आणि स्वयंपाकासाठी उत्तम.",
        },
        whatsappMessage: {
            en: "I want to order Coconut Oil.",
            mr: "मला खोबरेल तेल ऑर्डर करायचे आहे.",
        },
    },
    {
        id: "flaxseed-oil",
        price: "₹250/L",
        image: "/woodpressoil/flaxseed-oil.jpg",
        name: {
            en: "Flaxseed Oil",
            mr: "जवस तेल",
        },
        description: {
            en: "Pure and healthy wood pressed Flaxseed Oil. Best for daily cooking.",
            mr: "शुद्ध आणि आरोग्यदायी लाकडी घाण्याचे जवस तेल. रोजच्या स्वयंपाकासाठी सर्वोत्तम.",
        },
        whatsappMessage: {
            en: "I want to order Flaxseed Oil.",
            mr: "मला जवस तेल ऑर्डर करायचे आहे.",
        },
    },
    {
        id: "safflower-oil",
        price: "₹300/L",
        image: "/woodpressoil/safflower-oil.jpg",
        name: {
            en: "Safflower Oil",
            mr: "करडई तेल",
        },
        description: {
            en: "Natural wood pressed Safflower Oil. Rich in antioxidants.",
            mr: "नैसर्गिक लाकडी घाण्याचे करडई तेल. अँटीऑक्सिडंट्सने समृद्ध.",
        },
        whatsappMessage: {
            en: "I want to order Safflower Oil.",
            mr: "मला करडई तेल ऑर्डर करायचे आहे.",
        },
    },
    {
        id: "sunflower-oil",
        price: "₹280/L",
        image: "/woodpressoil/sunflower-oil.jpg",
        name: {
            en: "Sunflower Oil",
            mr: "सूर्यफूल तेल",
        },
        description: {
            en: "Organic wood pressed Sunflower Oil. Perfect for hair and cooking.",
            mr: "सेंद्रिय लाकडी घाण्याचे सूर्यफूल तेल. केस आणि स्वयंपाकासाठी उत्तम.",
        },
        whatsappMessage: {
            en: "I want to order Sunflower Oil.",
            mr: "मला सूर्यफूल तेल ऑर्डर करायचे आहे.",
        },
    },
];
