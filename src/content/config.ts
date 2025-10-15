import { defineCollection, z } from "astro:content";

const cards = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(), 
        icon: z.string()
    })
});

const planCards = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(), 
        price: z.string(),
        mbps: z.number(),
        featured: z.boolean()
    })
});

const contactCards = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(), 
        icon: z.string(),
        iconFill: z.string(),
        link: z.string(),
    })
});

export const collections = { cards, planCards, contactCards }