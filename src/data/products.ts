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
        image: "https://placehold.co/600x400?text=Groundnut+Oil",
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
        image: "https://placehold.co/600x400?text=Sesame+Oil",
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
        image: "https://placehold.co/600x400?text=Coconut+Oil",
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
];
