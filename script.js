// ==================== KESOR PET GROOMING - APPLICATION LOGIC ====================

// 1. Official 6 Main Services Data (Bilingual: Khmer & English)
const servicesData = [
    {
        id: 1,
        title_km: "ងូតទឹកជម្រះជាតិកខ្វក់ និងបំបាត់ក្លិន",
        title_en: "Deep Cleansing & Odor Removal Bath",
        category: ["hygiene"],
        badge_km: "ងូតទឹកស្អាតក្រអូប",
        badge_en: "Deep Clean & Fresh",
        duration_km: "45 - 60 នាទី",
        duration_en: "45 - 60 mins",
        icon: "fa-shower",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=700&q=80",
        shortDesc_km: "ងូតទឹកសម្អាតជម្រះជាតិកខ្វក់លើស្បែក និងរោម បំបាត់ក្លិនមិនល្អ ឱ្យក្រអូបស្រស់ថ្លា។",
        shortDesc_en: "Thorough bath to wash away dirt and pet odor, leaving coat fresh, fluffy, and clean.",
        fullDesc_km: "សេវាកម្មងូតទឹកសម្អាតខ្លួនប្រាណដោយទឹកក្ដៅឧណ្ហៗ និងសាប៊ូធម្មជាតិគុណភាពខ្ពស់ ជួយជម្រះជាតិកខ្វក់ បំបាត់ក្លិនខ្លួនសត្វចិញ្ចឹម និងធ្វើឱ្យរោមទន់ភ្លឺរលោង។",
        fullDesc_en: "Warm hydro-bath with natural pet shampoo and conditioner. Eliminates stubborn dirt, soothes skin, removes odor, and restores healthy coat shine.",
        includes_km: [
            "ងូតទឹកសាប៊ូធម្មជាតិជម្រះជាតិកខ្វក់ និងអប់ក្រែមបន្ទន់រោម",
            "ម៉ាស្សាខ្លួនប្រាណថ្នមៗឱ្យសត្វចិញ្ចឹមស្រួលខ្លួន",
            "ផ្លុំសម្ងួតរោម សិតរោម និងបាញ់ទឹកអប់បំបាត់ក្លិនក្រអូបជាប់បានយូរ"
        ],
        includes_en: [
            "Organic deep clean shampoo & conditioning coat treatment",
            "Relaxing and gentle body massage during bath",
            "Blow-dry, thorough coat de-shedding brush, and long-lasting pet perfume"
        ]
    },
    {
        id: 2,
        title_km: "កាត់រោមម៉ូដស្អាតៗតាមទម្រង់មុខ និងពូជ",
        title_en: "Custom Breed & Face Styling",
        category: ["styling"],
        badge_km: "កាត់តម្រឹមម៉ូដស្អាត",
        badge_en: "Custom Styling",
        duration_km: "90 - 120 នាទី",
        duration_en: "90 - 120 mins",
        icon: "fa-scissors",
        image: "https://web.facebook.com/6922dd5f-8176-49b2-b09f-e484016e16a3",
        shortDesc_km: "កាត់តម្រឹមរោមម៉ូដស្អាតៗឱ្យសមនឹងទម្រង់មុខ និងពូជសត្វចិញ្ចឹមរបស់លោកអ្នក។",
        shortDesc_en: "Precision haircut and artistic styling tailored to your pet's face shape and breed.",
        fullDesc_km: "ផ្លាស់ប្តូររូបរាងសត្វចិញ្ចឹមឱ្យកាន់តែគួរឱ្យស្រឡាញ់! ជាងជំនាញរបស់យើងនឹងជួយកាត់តម្រឹមរោមម៉ូដស្អាតៗ (ដូចជាម៉ូដ Teddy Bear ម៉ូដមុខមូល ឬម៉ូដតាមពូជសត្វ) ដោយយកចិត្តទុកដាក់បំផុត។",
        fullDesc_en: "Transform your pet into the cutest version of themselves! Our groomers shape adorable teddy-bear, rounded face, or breed-standard styles with immense patience.",
        includes_km: [
            "ពិភាក្សាជ្រើសរើសម៉ូដរោមឱ្យសមនឹងទម្រង់មុខ និងពូជ",
            "កាត់តម្រឹមរោមមួយតួខ្លួន និងតម្រឹមរោមមុខឱ្យមូលស្អាត",
            "សិតរោមឱ្យឡើងហ្វូងស្អាត និងថែមជូនបូតុបតែងគួរឱ្យស្រឡាញ់"
        ],
        includes_en: [
            "Consultation to select the best haircut for your pet's face & breed",
            "Full body haircut with precision hand-scissoring round head",
            "Fluffing brush-out and complimentary cute accessory bow"
        ]
    },
    {
        id: 3,
        title_km: "លាបពណ៌រោម",
        title_en: "Pet-Safe Creative Fur Coloring",
        category: ["styling"],
        badge_km: "ពណ៌រោម Cute Cute",
        badge_en: "Creative Color",
        duration_km: "60 - 90 នាទី",
        duration_en: "60 - 90 mins",
        icon: "fa-palette",
        image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=700&q=80",
        shortDesc_km: "លាបពណ៌រោមតុបតែងត្រចៀក កន្ទុយ ឬប្រអប់ជើង ដោយប្រើថ្នាំពណ៌សុវត្ថិភាពសម្រាប់សត្វចិញ្ចឹម។",
        shortDesc_en: "Highlight ears, tail, or paws with 100% pet-safe, non-toxic vibrant colors.",
        fullDesc_km: "បន្ថែមភាពលេចធ្លោ និងគួរឱ្យស្រឡាញ់ដល់សត្វចិញ្ចឹមរបស់អ្នក ជាមួយការលាបពណ៌រោមបែប Cute Cute ដោយប្រើប្រាស់ផលិតផលពណ៌ធម្មជាតិសម្រាប់សត្វចិញ្ចឹម មិនប៉ះពាល់ដល់ស្បែក និងរោម។",
        fullDesc_en: "Add charming artistic flair! Using plant-derived, hypoallergenic pet dyes that are safe for licking and completely gentle on delicate skin and fur.",
        includes_km: [
            "ប្រើប្រាស់ថ្នាំលាបពណ៌រោមសុវត្ថិភាពសម្រាប់សត្វចិញ្ចឹម (Pet-Safe Dye)",
            "អាចជ្រើសរើសលាបពណ៌ត្រចៀក កន្ទុយ ឬប្រអប់ជើងតាមចំណូលចិត្ត",
            "លាងសម្អាត និងអប់បំប៉នរោមឱ្យទន់រលោងក្រោយពេលលាបពណ៌"
        ],
        includes_en: [
            "Non-toxic, FDA-compliant pet-safe vegetable dye formulas",
            "Choice of coloring ears, tail tip, or paw highlights",
            "Post-color deep rinse and nourishing conditioning wash"
        ]
    },
    {
        id: 4,
        title_km: "សម្អាតត្រចៀក និងតំបន់អនាម័យ",
        title_en: "Ear Cleaning & Sanitary Care",
        category: ["hygiene"],
        badge_km: "ថែទាំអនាម័យ",
        badge_en: "Hygiene Care",
        duration_km: "20 - 30 នាទី",
        duration_en: "20 - 30 mins",
        icon: "fa-hand-sparkles",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80",
        shortDesc_km: "ជូតសម្អាតរន្ធត្រចៀកបំបាត់ក្លិន និងកោរសម្អាតរោមតំបន់អនាម័យឱ្យស្អាតជានិច្ច។",
        shortDesc_en: "Ear canal cleaning to remove wax and bacteria, plus sanitary area hygiene trimming.",
        fullDesc_km: "ការសម្អាតត្រចៀក និងតំបន់អនាម័យជួយការពារសត្វចិញ្ចឹមពីការឆ្លងមេរោគ ការរមាស់ត្រចៀក និងជួយឱ្យសត្វចិញ្ចឹមមានអនាម័យល្អពេលបន្ទោរបង់។",
        fullDesc_en: "Protects against ear mites, yeast, infections, and maintains hygienic bathroom habits by keeping sensitive belly and sanitary regions cleanly trimmed.",
        includes_km: [
            "ដករោមត្រចៀក និងជូតសម្អាតរន្ធត្រចៀកដោយទឹកថ្នាំជំនាញ",
            "កោរសម្អាតរោមតំបន់ពោះ និងតំបន់អនាម័យ (Sanitary Trim)",
            "ការពារក្លិនមិនល្អ និងការទុំជាប់នៃភាពកខ្វក់"
        ],
        includes_en: [
            "Ear hair plucking and gentle antiseptic cleansing",
            "Sanitary and lower belly hygiene shave (Sanitary Trim)",
            "Anti-odor check and prevention of dirt accumulation"
        ]
    },
    {
        id: 5,
        title_km: "កាត់ក្រចក និងសម្អាតបាតជើង",
        title_en: "Nail Trimming & Paw Pad Cleaning",
        category: ["paws"],
        badge_km: "ថែទាំក្រចក & បាតជើង",
        badge_en: "Paw & Nail Care",
        duration_km: "20 - 30 នាទី",
        duration_en: "20 - 30 mins",
        icon: "fa-paw",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=80",
        shortDesc_km: "កាត់ និងឆាបក្រចកឱ្យរលោង ព្រមទាំងកោររោមបាតជើងការពារការរអិលពេលដើរ។",
        shortDesc_en: "Nail clipping, smoothing filing, and clearing paw pad fur to prevent slipping.",
        fullDesc_km: "ក្រចកវែង និងរោមដុះគ្របបាតជើងអាចធ្វើឱ្យសត្វចិញ្ចឹមរអិលដួល ឬឈឺជើង។ យើងខ្ញុំជួយកាត់ក្រចក ឆាបឱ្យរលោង និងសម្អាតបាតជើងយ៉ាងហ្មត់ចត់។",
        fullDesc_en: "Overgrown nails and slippery paw pads can hurt posture and cause slipping on smooth floors. We trim, file, and clean pads safely without pain.",
        includes_km: [
            "កាត់ក្រចក និងឆាបក្រចកឱ្យរលោងមិនមុត",
            "កោរសម្អាតរោមចន្លោះបាតជើងឱ្យស្អាតមានអនាម័យ",
            "ជូតសម្អាត និងពិនិត្យសុខភាពបាតជើង"
        ],
        includes_en: [
            "Precision nail clipping and smooth emery filing",
            "Shaving excess fur between paw pads to restore traction",
            "Moisturizing paw balm application & pad inspection"
        ]
    },
    {
        id: 6,
        title_km: "កោរប្រអប់ជើង",
        title_en: "Clean Feet / Poodle Feet Shaving",
        category: ["paws", "styling"],
        badge_km: "ម៉ូដប្រអប់ជើងស្អាត",
        badge_en: "Clean Feet Style",
        duration_km: "25 - 35 នាទី",
        duration_en: "25 - 35 mins",
        icon: "fa-wand-magic-sparkles",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=80",
        shortDesc_km: "កោររោមប្រអប់ជើងឱ្យស្អាតមានរបៀប ងាយស្រួលសម្អាត និងមើលទៅស្រស់ស្អាត។",
        shortDesc_en: "Clean shaved feet style for easy maintenance and a crisp show-dog look.",
        fullDesc_km: "សេវាកម្មកោរប្រអប់ជើង (Clean Feet) ជួយឱ្យប្រអប់ជើងសត្វចិញ្ចឹមមើលទៅស្អាតមានរបៀប មិនងាយប្រឡាក់ដី ឬទឹក និងងាយស្រួលជូតសម្អាតប្រចាំថ្ងៃ។",
        fullDesc_en: "Poodle feet / clean feet shaving creates an immaculate, tidy look that prevents outdoor mud, water, and debris from clinging to toes after walks.",
        includes_km: [
            "កោររោមប្រអប់ជើង និងម្រាមជើងឱ្យស្អាតរលោង",
            "តម្រឹមរោមកជើងឱ្យមូលស្អាតស៊ីគ្នាជាមួយតួខ្លួន",
            "កាត់បន្ថយការជាប់ដី និងសំណើមនៅតាមម្រាមជើង"
        ],
        includes_en: [
            "Clean shaving of all toe joints and pads",
            "Sculpting ankle cuffs to blend harmoniously with legs",
            "Significantly reduces mud and moisture trapping after walks"
        ]
    }
];

// 2. Activities / Gallery Data (Bilingual: Khmer & English)
const galleryData = [
    {
        id: 1,
        title_km: "កាត់រោមម៉ូដស្អាតៗតាមទម្រង់មុខ",
        title_en: "Teddy-Bear Face & Breed Styling",
        desc_km: "ប្អូន Poodle ក្រោយពេលងូតទឹក និងកាត់តម្រឹមរោមម៉ូដមុខមូលស្អាតរួចរាល់។",
        desc_en: "Adorable Poodle puppy sporting a fresh rounded face trim after a luxury bath.",
        breed_km: "Poodle (កូនឆ្កែភូដឺល)",
        breed_en: "Toy Poodle",
        category: "styling",
        catLabel_km: "កាត់រោមម៉ូដ",
        catLabel_en: "Styling",
        image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title_km: "ងូតទឹកជម្រះជាតិកខ្វក់ និងបំបាត់ក្លិន",
        title_en: "Deep Odor Removal & Bubble Bath",
        desc_km: "ងូតទឹកពពុះសាប៊ូធម្មជាតិក្រអូបៗ ជួយឱ្យរោមទន់ភ្លឺរលោង និងបំបាត់ក្លិនខ្លួន។",
        desc_en: "Deep-cleaning herbal bubble bath leaving coat soft, silky, and smelling amazing.",
        breed_km: "French Bulldog",
        breed_en: "French Bulldog",
        category: "bath",
        catLabel_km: "ងូតទឹកបំបាត់ក្លិន",
        catLabel_en: "Odor Removal Bath",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title_km: "លាបពណ៌រោមបែប Cute Cute",
        title_en: "Pet-Safe Creative Fur Coloring",
        desc_km: "បន្ថែមពណ៌ស្រស់ស្អាតលើត្រចៀក និងកន្ទុយដោយប្រើថ្នាំពណ៌សុវត្ថិភាពសម្រាប់សត្វចិញ្ចឹម។",
        desc_en: "Creative ear and tail pastel highlights with safe, natural pet dyes.",
        breed_km: "Pomeranian (ផមមឺរ៉ានៀន)",
        breed_en: "Pomeranian",
        category: "coloring",
        catLabel_km: "លាបពណ៌រោម",
        catLabel_en: "Fur Coloring",
        image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title_km: "សម្អាតត្រចៀក និងតំបន់អនាម័យ",
        title_en: "Cat Ear Cleaning & Sanitary Care",
        desc_km: "ប្អូនឆ្មាគេងស្ងៀមឱ្យបងៗសម្អាតត្រចៀក និងផ្លុំសម្ងួតរោមយ៉ាងថ្នមៗ។",
        desc_en: "Quiet, stress-free ear cleansing and gentle grooming session for a sweet cat.",
        breed_km: "British Shorthair (ឆ្មា)",
        breed_en: "British Shorthair",
        category: "paws",
        catLabel_km: "សម្អាតត្រចៀក & អនាម័យ",
        catLabel_en: "Ears & Sanitary",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title_km: "កាត់ក្រចក សម្អាតបាតជើង និងកោរប្រអប់ជើង",
        title_en: "Nail Care & Clean Paws",
        desc_km: "កាត់ក្រចក និងកោរប្រអប់ជើងឱ្យស្អាតមានរបៀប ងាយស្រួលដើរមិនរអិល។",
        desc_en: "Clean paw pad shave and nail filing to restore traction on indoor floors.",
        breed_km: "Bichon Frise",
        breed_en: "Bichon Frise",
        category: "paws",
        catLabel_km: "ក្រចក & ប្រអប់ជើង",
        catLabel_en: "Nails & Paws",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title_km: "ស្នាមញញឹមក្រោយពេលងូតទឹកសម្អាតរួច",
        title_en: "Post-Bath Happy Smiles",
        desc_km: "ប្អូន Lucky ស្អាតក្រអូបពេញមួយតួខ្លួន ត្រៀមខ្លួនត្រឡប់ទៅផ្ទះវិញ។",
        desc_en: "Big happy smiles after a fresh wash, blow dry, and lavender spritz.",
        breed_km: "Golden Retriever",
        breed_en: "Golden Retriever",
        category: "bath",
        catLabel_km: "ងូតទឹកបំបាត់ក្លិន",
        catLabel_en: "Fresh Bath",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        title_km: "សម្ងួត និងសិតរោមឆ្មាពូជរោមវែង",
        title_en: "Persian Cat Blow-Dry & Fluff",
        desc_km: "ជម្រះរោមជ្រុះ និងធ្វើឱ្យរោមប្អូនឆ្មាឡើងទន់រលោងគួរឱ្យចង់ឱប។",
        desc_en: "Removing tangles and loose fur to leave the long coat silky and cloud-soft.",
        breed_km: "Persian Cat (ឆ្មាភឺសៀន)",
        breed_en: "Persian Cat",
        category: "styling",
        catLabel_km: "កាត់រោមម៉ូដ",
        catLabel_en: "De-shed & Style",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        title_km: "តុបតែងម៉ូដ និងលាបពណ៌រោមថ្ងៃចុងសប្ដាហ៍",
        title_en: "Weekend Paw-ty Styling & Colors",
        desc_km: "អតិថិជនតូចៗមកទទួលសេវាកម្មថែទាំ និងតុបតែងខ្លួននៅ Kesor Pet Grooming បាត់ដំបង។",
        desc_en: "Energetic Corgi looking fabulous after an ear-styling and paw-pampering day.",
        breed_km: "Corgi (កូនឆ្កែកូគី)",
        breed_en: "Pembroke Welsh Corgi",
        category: "coloring",
        catLabel_km: "លាបពណ៌រោម",
        catLabel_en: "Creative Colors",
        image: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&w=800&q=80"
    }
];

// 3. Complete Bilingual UI Dictionary
const translations = {
    km: {
        page_title: "Kesor Pet Grooming | កេសរ ថែទាំសត្វចិញ្ចឹម",
        brand_name: "Kesor",
        brand_grooming: "Pet Grooming",
        brand_sub: "កេសរ ថែទាំសត្វចិញ្ចឹមដោយក្ដីស្រឡាញ់",
        
        nav_home: "ទំព័រដើម",
        nav_services: "សេវាកម្ម",
        nav_process: "ដំណើរការថែទាំ",
        nav_activities: "សកម្មភាព",
        nav_location: "ទីតាំងហាង",
        nav_booking: "កក់ម៉ោងទុកមុន",
        cta_telegram: "កក់ម៉ោងតាម Telegram",
        
        mob_nav_home: "ទំព័រដើម (Home)",
        mob_nav_services: "សេវាកម្មចម្បង (Services)",
        mob_nav_process: "ដំណើរការថែទាំ (Process)",
        mob_nav_activities: "សកម្មភាព (Activities)",
        mob_nav_location: "ទីតាំងហាង (Location)",
        mob_nav_booking: "កក់ម៉ោងទុកមុន (Booking)",
        
        hero_badge: "កេសរ ថែទាំសត្វចិញ្ចឹម • ក្រុងបាត់ដំបង (ខាងត្បូងរង្វង់មូលព្រាបស 50m)",
        hero_title_1: "ថែទាំ និងតុបតែងសត្វចិញ្ចឹមរបស់អ្នក ឱ្យ ",
        hero_title_hl: "ស្អាតក្រអូប មានម៉ូដស្អាត និងអនាម័យខ្ពស់",
        hero_desc: "ស្វាគមន៍មកកាន់ <strong>Kesor Pet Grooming</strong>! យើងខ្ញុំផ្តល់ជូននូវសេវាកម្មងូតទឹកជម្រះជាតិកខ្វក់ និងបំបាត់ក្លិន កាត់រោមម៉ូដស្អាតៗតាមទម្រង់មុខ និងពូជ លាបពណ៌រោម សម្អាតត្រចៀក និងតំបន់អនាម័យ កាត់ក្រចក សម្អាតបាតជើង និងកោរប្រអប់ជើងដោយយកចិត្តទុកដាក់បំផុត។",
        hero_btn_services: "មើលសេវាកម្មទាំង ៦",
        hero_btn_telegram: "កក់ម៉ោងតាម Telegram",
        hero_btn_maps: "ផែនទី Google Maps",
        hero_phone_lbl: "ទូរស័ព្ទ៖",
        hero_feat_1_title: "អ្នកជំនាញមានបទពិសោធន៍",
        hero_feat_1_sub: "Experienced Groomers",
        hero_feat_2_title: "ផលិតផលសុវត្ថិភាព",
        hero_feat_2_sub: "Safe & Organic Products",
        hero_feat_3_title: "ស្អាត និងផាសុកភាព",
        hero_feat_3_sub: "Clean & Comfy Space",
        hero_tag_gentle: "ថ្នមៗ ស្អាតក្រអូប និងមានសុវត្ថិភាព ១០០%",
        hero_trust_title: "ទំនុកចិត្តខ្ពស់ 4.9/5",
        hero_trust_sub: "អតិថិជនពេញចិត្ត ៥០០+ គ្រួសារ",
        hero_pets_tag: "ទទួលថែទាំទាំងសុនខ និងឆ្មាគ្រប់ពូជ",

        services_badge: "សេវាកម្មចម្បងទាំង ៦",
        services_title: "សេវាកម្មចម្បងរបស់យើងរួមមាន",
        services_desc: "យើងខ្ញុំផ្តល់ជូននូវសេវាកម្មថែទាំ សម្អាត និងតុបតែងសត្វចិញ្ចឹមយ៉ាងហ្មត់ចត់ ដើម្បីឱ្យសត្វចិញ្ចឹមរបស់លោកអ្នកស្អាត ក្រអូប និងមានសុខភាពល្អ។",
        tab_all: "សេវាកម្មទាំងអស់ (All 6)",
        tab_styling: "កាត់រោមម៉ូដ & លាបពណ៌ (Styling & Color)",
        tab_hygiene: "ងូតទឹក & អនាម័យ (Bath & Hygiene)",
        tab_paws: "ក្រចក & ប្រអប់ជើង (Paws & Nails)",
        btn_view_details: "មើលលម្អិត",
        btn_book_now: "កក់ម៉ោង",

        process_badge: "ដំណើរការ ៤ ជំហាន",
        process_title: "ដំណើរការថែទាំ ៤ ជំហានងាយៗ និងហ្មត់ចត់",
        process_desc: "គ្រប់សត្វចិញ្ចឹមទាំងអស់ត្រូវបានមើលថែតាមស្តង់ដារអនាម័យ និងសុវត្ថិភាពខ្ពស់នៅ Kesor Pet Grooming",
        step1_title: "ពិនិត្យសុខភាពស្បែក និងរោម",
        step1_sub: "Skin & Coat Checkup",
        step1_desc: "ពិនិត្យមើលស្ថានភាពស្បែក រោម ត្រចៀក និងក្រចក ដើម្បីជ្រើសរើសសាប៊ូឱ្យសមស្របតាមប្រភេទសត្វចិញ្ចឹម។",
        step2_title: "ងូតទឹកដោយសាប៊ូធម្មជាតិ",
        step2_sub: "Warm Bath & Gentle Massage",
        step2_desc: "ងូតទឹកក្ដៅឧណ្ហៗជាមួយសាប៊ូធម្មជាតិ អមដោយការម៉ាស្សាថ្នមៗ និងសម្ងួតរោមឱ្យទន់រលោងមិនភ័យខ្លាច។",
        step3_title: "កាត់តម្រឹម និងតុបតែងម៉ូត",
        step3_sub: "Styling & Grooming",
        step3_desc: "កាត់ក្រចក សម្អាតត្រចៀក និងកាត់តម្រឹមរោមតាមម៉ូតស្អាតៗ ដែលស័ក្តិសមនឹងទម្រង់មុខសត្វចិញ្ចឹម។",
        step4_title: "ត្រួតពិនិត្យ និងបាញ់ទឹកអប់",
        step4_sub: "Final Touch & Pet Perfume",
        step4_desc: "ត្រួតពិនិត្យភាពស្អាតចុងក្រោយ ពាក់បូតុបតែងដ៏ស្រស់ស្អាត និងបាញ់ទឹកអប់ក្លិនក្រអូបស្រទន់។",

        gallery_badge: "សកម្មភាពរីករាយ",
        gallery_title: "សកម្មភាព និងស្នាមញញឹមអតិថិជនតូចៗរបស់យើង",
        gallery_desc: "ទស្សនាសកម្មភាពថែទាំប្រចាំថ្ងៃនៅ Kesor Pet Grooming។ ចុចលើរូបភាពណាមួយដើម្បីមើលព័ត៌មានលម្អិត។",
        gtab_all: "ទាំងអស់ (All)",
        gtab_bath: "ងូតទឹកបំបាត់ក្លិន (Bath)",
        gtab_styling: "កាត់រោមម៉ូដស្អាតៗ (Styling)",
        gtab_coloring: "លាបពណ៌រោម (Fur Coloring)",
        gtab_paws: "សម្អាតត្រចៀក & ប្រអប់ជើង (Ears & Paws)",
        gallery_zoom: "ចុចមើលរូបភាពធំ",

        loc_badge: "ទីតាំងហាងយើងខ្ញុំ • Battambang Location",
        loc_title: "ខាងត្បូងរង្វង់មូលព្រាបស ប្រហែល 50ម៉ែត្រ ខេត្តបាត់ដំបង",
        loc_desc: "ងាយស្រួលស្វែងរក! លោកអ្នកអាចធ្វើដំណើរមកកាន់ហាង <strong>Kesor Pet Grooming</strong> ផ្ទាល់ ឬចុចប៊ូតុងផែនទី Google Maps ខាងក្រោមដើម្បីមើលផ្លូវមកកាន់ហាងយើងខ្ញុំ។",
        loc_btn_maps: "បើកមើលទីតាំងលើ Google Maps",
        loc_btn_telegram: "ឆាតកក់ម៉ោងតាម Telegram",

        booking_badge: "កក់ម៉ោងទុកមុន • Pre-Book Slot",
        booking_title: "កក់ម៉ោងទុកមុនសម្រាប់សត្វចិញ្ចឹម",
        booking_desc: "សូមជ្រើសរើសសេវាកម្មដែលលោកអ្នកត្រូវការខាងក្រោម រួចបង្កើតសារដើម្បីផ្ញើទៅកាន់ប្រអប់សារ ឬ Telegram <strong>@Kesor_Pet_Grooming</strong>។",
        lbl_owner_name: "ឈ្មោះរបស់អ្នក (Your Name)",
        ph_owner_name: "ឧ. បងស្រី ម៉ាលី",
        lbl_owner_phone: "លេខទូរស័ព្ទ (Phone Number)",
        ph_owner_phone: "ឧ. 086 46 22 20",
        lbl_pet_type: "ប្រភេទសត្វចិញ្ចឹម",
        opt_dog: "🐶 ឆ្កែ (Dog)",
        opt_cat: "🐱 ឆ្មា (Cat)",
        lbl_pet_breed: "ពូជ / ឈ្មោះសត្វចិញ្ចឹម",
        ph_pet_breed: "ឧ. Poodle / ឆ្មា Persian",
        lbl_booking_date: "ថ្ងៃណាត់ជួប",
        lbl_select_services: "ជ្រើសរើសសេវាកម្មដែលត្រូវការ (អាចជ្រើសរើសលើសពី ១)៖",
        btn_generate_message: "បង្កើតសារសម្រាប់កក់ម៉ោងទុកមុន",
        box_message_title: "សារសម្រាប់កក់ម៉ោង (Ready to Send)",
        status_copied: "បានចម្លងរួចរាល់ (Copied!)",
        btn_copy_message: "ចម្លងសារ (Copy Message)",
        btn_send_telegram: "ផ្ញើទៅ Telegram (@Kesor_Pet_Grooming)",

        contact_badge: "ព័ត៌មានទំនាក់ទំនង • Contact",
        contact_title: "ព័ត៌មានទំនាក់ទំនង និងទីតាំងហាង",
        contact_desc: "កក់ម៉ោងទុកមុនតាមរយៈប្រអប់សារ ឬទំនាក់ទំនងមកកាន់យើងខ្ញុំផ្ទាល់តាមរយៈ៖",
        card_phone_title: "លេខទូរស័ព្ទទំនាក់ទំនង",
        btn_copy_phone: "ចម្លងលេខ",
        card_telegram_title: "តេឡេក្រាម (Telegram)",
        card_telegram_desc: "ឆាតកក់ម៉ោង ឬសាកសួរព័ត៌មានរហ័សទាន់ចិត្ត",
        card_loc_title: "ទីតាំងហាង (Location)",
        card_loc_addr: "ខាងត្បូងរង្វង់មូលព្រាបស ប្រហែល 50ម៉ែត្រ ខេត្តបាត់ដំបង",
        card_loc_btn: "ស្វែងរកយើងតាមរយៈ Google Maps",

        footer_desc: "កេសរ ថែទាំសត្វចិញ្ចឹម (ខេត្តបាត់ដំបង) ផ្តល់ជូននូវសេវាកម្មងូតទឹកជម្រះជាតិកខ្វក់ និងបំបាត់ក្លិន កាត់រោមម៉ូដស្អាតៗ លាបពណ៌រោម សម្អាតត្រចៀក កាត់ក្រចក និងកោរប្រអប់ជើងដោយក្ដីស្រឡាញ់។",
        footer_loc: "ទីតាំង៖ ខាងត្បូងរង្វង់មូលព្រាបស ប្រហែល 50ម៉ែត្រ ខេត្តបាត់ដំបង",
        footer_quicklinks: "តំណភ្ជាប់រហ័ស",
        footer_rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
        footer_made_with: "រចនាឡើងដោយក្ដីស្រឡាញ់សម្រាប់សត្វចិញ្ចឹម 🐾",

        mob_call: "ហៅទូរស័ព្ទ",
        mob_map: "ផែនទីហាង",

        modal_inc_title: "អ្វីដែលរួមបញ្ចូលក្នុងសេវាកម្មនេះ៖",
        modal_duration_label: "រយៈពេលប៉ាន់ស្មាន",
        modal_book_btn: "កក់សេវាកម្មនេះឥឡូវ",
        lightbox_breed_label: "ពូជសត្វចិញ្ចឹម (Breed)",

        srv_1_name: "ងូតទឹកជម្រះជាតិកខ្វក់ និងបំបាត់ក្លិន",
        srv_2_name: "កាត់រោមម៉ូដស្អាតៗតាមទម្រង់មុខ និងពូជ",
        srv_3_name: "លាបពណ៌រោម",
        srv_4_name: "សម្អាតត្រចៀក និងតំបន់អនាម័យ",
        srv_5_name: "កាត់ក្រចក និងសម្អាតបាតជើង",
        srv_6_name: "កោរប្រអប់ជើង"
    },
    en: {
        page_title: "Kesor Pet Grooming | Professional Pet Care",
        brand_name: "Kesor",
        brand_grooming: "Pet Grooming",
        brand_sub: "Loving & Gentle Pet Grooming Service",
        
        nav_home: "Home",
        nav_services: "Services",
        nav_process: "Process",
        nav_activities: "Activities",
        nav_location: "Location",
        nav_booking: "Book Now",
        cta_telegram: "Book on Telegram",
        
        mob_nav_home: "Home",
        mob_nav_services: "Our Services",
        mob_nav_process: "Grooming Process",
        mob_nav_activities: "Activities Gallery",
        mob_nav_location: "Store Location",
        mob_nav_booking: "Book Appointment",
        
        hero_badge: "Kesor Pet Grooming • Battambang (50m South of White Dove Roundabout)",
        hero_title_1: "Care & Style Your Beloved Pet to Be ",
        hero_title_hl: "Fresh, Stylish, Fragrant & Healthy",
        hero_desc: "Welcome to <strong>Kesor Pet Grooming</strong>! We provide deep cleansing & odor removal baths, face & breed-specific haircuts, pet-safe fur coloring, ear & sanitary care, nail trimming, and paw shaving with gentle, loving care.",
        hero_btn_services: "View All 6 Services",
        hero_btn_telegram: "Book via Telegram",
        hero_btn_maps: "Google Maps",
        hero_phone_lbl: "Call Us:",
        hero_feat_1_title: "Experienced Groomers",
        hero_feat_1_sub: "Gentle & caring touch",
        hero_feat_2_title: "Safe & Organic Products",
        hero_feat_2_sub: "Hypoallergenic formulas",
        hero_feat_3_title: "Clean & Comfy Space",
        hero_feat_3_sub: "Sanitized & stress-free",
        hero_tag_gentle: "Gentle, Fresh, Fragrant & 100% Safe",
        hero_trust_title: "High Trust 4.9/5",
        hero_trust_sub: "500+ Happy pet families",
        hero_pets_tag: "Dogs & Cats of all breeds welcomed",

        services_badge: "Our 6 Main Services",
        services_title: "Our Core Grooming Services",
        services_desc: "We provide comprehensive pet grooming, hygienic care, and creative styling to make sure your beloved pet is healthy, clean, and happy.",
        tab_all: "All Services (6)",
        tab_styling: "Styling & Color",
        tab_hygiene: "Bath & Hygiene",
        tab_paws: "Paws & Nails",
        btn_view_details: "View Details",
        btn_book_now: "Book Now",

        process_badge: "4 Simple Steps",
        process_title: "Our 4-Step Grooming Process",
        process_desc: "Every pet receives dedicated care adhering to high hygiene and safety standards at Kesor Pet Grooming",
        step1_title: "Skin & Coat Checkup",
        step1_sub: "Initial Examination",
        step1_desc: "Inspecting skin, fur, ears, and nails to choose the most suitable gentle shampoo and treatment for your pet.",
        step2_title: "Warm Bath & Gentle Massage",
        step2_sub: "Hydrotherapy Bath",
        step2_desc: "Warm water wash using organic gentle shampoo with relaxing massage, followed by fluffy blow-drying without fear.",
        step3_title: "Styling & Grooming",
        step3_sub: "Precision Trimming",
        step3_desc: "Careful nail clipping, ear cleansing, and custom haircut styling shaped to complement your pet's face and breed.",
        step4_title: "Final Touch & Pet Perfume",
        step4_sub: "Finishing Touches",
        step4_desc: "Final thorough check, complimentary cute styling bow accessory, and a gentle spritz of pleasant pet cologne.",

        gallery_badge: "Our Happy Moments",
        gallery_title: "Happy Moments & Smiling Pets",
        gallery_desc: "Explore daily grooming moments at Kesor Pet Grooming. Click any picture to view full photo and details.",
        gtab_all: "All Moments",
        gtab_bath: "Deodorizing Bath",
        gtab_styling: "Styling & Cut",
        gtab_coloring: "Fur Coloring",
        gtab_paws: "Ears & Paws",
        gallery_zoom: "Click to enlarge",

        loc_badge: "Store Location • Battambang",
        loc_title: "Approx. 50m South of White Dove Roundabout, Battambang",
        loc_desc: "Convenient to reach! Visit <strong>Kesor Pet Grooming</strong> directly or tap the Google Maps button below for turn-by-turn directions.",
        loc_btn_maps: "Open in Google Maps",
        loc_btn_telegram: "Chat on Telegram",

        booking_badge: "Pre-Book Slot",
        booking_title: "Book an Appointment for Your Pet",
        booking_desc: "Select your desired services below and generate a ready-to-send booking message to our Telegram <strong>@Kesor_Pet_Grooming</strong>.",
        lbl_owner_name: "Your Name",
        ph_owner_name: "e.g. Sreymom / John",
        lbl_owner_phone: "Phone Number",
        ph_owner_phone: "e.g. 086 46 22 20",
        lbl_pet_type: "Pet Type",
        opt_dog: "🐶 Dog",
        opt_cat: "🐱 Cat",
        lbl_pet_breed: "Breed / Pet's Name",
        ph_pet_breed: "e.g. Poodle / Persian Cat",
        lbl_booking_date: "Appointment Date",
        lbl_select_services: "Select Services Needed (Multiple allowed):",
        btn_generate_message: "Generate Booking Message",
        box_message_title: "Ready-to-Send Message",
        status_copied: "Copied to Clipboard!",
        btn_copy_message: "Copy Message",
        btn_send_telegram: "Send to Telegram (@Kesor_Pet_Grooming)",

        contact_badge: "Contact & Store Info",
        contact_title: "Contact Information & Location",
        contact_desc: "Book your appointment ahead of time via direct message or reach us through:",
        card_phone_title: "Phone Numbers",
        btn_copy_phone: "Copy",
        card_telegram_title: "Telegram Chat",
        card_telegram_desc: "Fast responses for appointment booking and questions",
        card_loc_title: "Store Location",
        card_loc_addr: "Approx. 50m South of White Dove Roundabout, Battambang",
        card_loc_btn: "Find Us on Google Maps",

        footer_desc: "Kesor Pet Grooming (Battambang Province) provides warm bathing, odor cleansing, custom face & breed haircuts, fur coloring, ear care, nail trimming, and paw shaving with love.",
        footer_loc: "Location: Approx. 50m South of White Dove Roundabout, Battambang",
        footer_quicklinks: "Quick Navigation",
        footer_rights: "All rights reserved.",
        footer_made_with: "Crafted with love for beloved pets 🐾",

        mob_call: "Call",
        mob_map: "Map",

        modal_inc_title: "What's Included in This Service:",
        modal_duration_label: "Estimated Duration",
        modal_book_btn: "Book This Service Now",
        lightbox_breed_label: "Pet Breed",

        srv_1_name: "Deep Cleansing & Odor Removal Bath",
        srv_2_name: "Custom Breed & Face Styling",
        srv_3_name: "Pet-Safe Creative Fur Coloring",
        srv_4_name: "Ear Cleaning & Sanitary Care",
        srv_5_name: "Nail Trimming & Paw Pad Cleaning",
        srv_6_name: "Clean Feet / Poodle Feet Shaving"
    }
};

// State Variables
let currentLang = localStorage.getItem('kesor-lang') || 'km';
let currentTheme = localStorage.getItem('kesor-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let currentServiceFilter = 'all';
let currentGalleryFilter = 'all';

// ==================== THEME MANAGEMENT ====================
function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('kesor-theme', theme);

    const htmlEl = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const mobThemeIcon = document.getElementById('mob-theme-icon');

    if (theme === 'dark') {
        htmlEl.classList.add('dark');
        if (themeIcon) {
            themeIcon.className = "fa-solid fa-sun text-amber-400 text-sm sm:text-base";
        }
        if (mobThemeIcon) {
            mobThemeIcon.className = "fa-solid fa-sun text-amber-400";
        }
    } else {
        htmlEl.classList.remove('dark');
        if (themeIcon) {
            themeIcon.className = "fa-solid fa-moon text-slate-700 text-sm sm:text-base";
        }
        if (mobThemeIcon) {
            mobThemeIcon.className = "fa-solid fa-moon text-slate-700";
        }
    }
}

function toggleTheme() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
}

// ==================== LANGUAGE MANAGEMENT ====================
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('kesor-lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang] || translations.km;

    // 1. Update Document Title
    if (t.page_title) {
        document.title = t.page_title;
    }

    // 2. Update text content for [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // 3. Update placeholder for [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // 4. Update Language Buttons in Navbar
    const kmBtns = [document.getElementById('lang-btn-km'), document.getElementById('mob-lang-btn-km')];
    const enBtns = [document.getElementById('lang-btn-en'), document.getElementById('mob-lang-btn-en')];

    if (lang === 'km') {
        kmBtns.forEach(btn => {
            if (btn) btn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm bg-sky-500 text-white";
        });
        enBtns.forEach(btn => {
            if (btn) btn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400";
        });
    } else {
        enBtns.forEach(btn => {
            if (btn) btn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm bg-sky-500 text-white";
        });
        kmBtns.forEach(btn => {
            if (btn) btn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400";
        });
    }

    // 5. Update Checkboxes in Booking Form
    updateBookingCheckboxes(lang);

    // 6. Re-render dynamic sections
    renderServices(currentServiceFilter);
    renderGallery(currentGalleryFilter);
}

function switchLanguage(lang) {
    applyLanguage(lang);
}

// Update Booking Checkboxes with Bilingual Labels
function updateBookingCheckboxes(lang) {
    const t = translations[lang] || translations.km;
    const items = [
        { id: "cb-1", key: "srv_1_name" },
        { id: "cb-2", key: "srv_2_name" },
        { id: "cb-3", key: "srv_3_name" },
        { id: "cb-4", key: "srv_4_name" },
        { id: "cb-5", key: "srv_5_name" },
        { id: "cb-6", key: "srv_6_name" }
    ];

    items.forEach(item => {
        const textEl = document.getElementById(`${item.id}-text`);
        const inputEl = document.getElementById(item.id);
        if (textEl && t[item.key]) {
            textEl.textContent = t[item.key];
        }
        if (inputEl && t[item.key]) {
            inputEl.value = t[item.key];
        }
    });
}

// ==================== SERVICES SECTION ====================
function renderServices(filter = currentServiceFilter) {
    currentServiceFilter = filter;
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    const filtered = filter === 'all' 
        ? servicesData 
        : servicesData.filter(s => s.category.includes(filter));

    const t = translations[currentLang] || translations.km;

    grid.innerHTML = filtered.map(service => {
        const title = currentLang === 'en' ? service.title_en : service.title_km;
        const subTitle = currentLang === 'en' ? service.title_km : service.title_en;
        const badge = currentLang === 'en' ? service.badge_en : service.badge_km;
        const duration = currentLang === 'en' ? service.duration_en : service.duration_km;
        const shortDesc = currentLang === 'en' ? service.shortDesc_en : service.shortDesc_km;

        return `
            <div class="bg-white dark:bg-slate-800/90 rounded-3xl border border-sky-100 dark:border-slate-700/80 shadow-soft hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-500 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
                <div>
                    <div class="relative h-52 overflow-hidden bg-sky-100 dark:bg-slate-700">
                        <img src="${service.image}" 
                             alt="${title}" 
                             onerror="this.src='https://placehold.co/600x400/e0f2fe/0284c7?text=Kesor+Service'"
                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-3.5 left-3.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sky-600 dark:text-sky-400 font-en shadow-sm">
                            ${badge}
                        </div>
                        <div class="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow">
                            <i class="fa-solid ${service.icon}"></i>
                        </div>
                    </div>

                    <div class="p-6">
                        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                            <span class="font-en font-semibold text-sky-600 dark:text-sky-400 truncate max-w-[60%]">${subTitle}</span>
                            <span><i class="fa-regular fa-clock text-sky-500 mr-1"></i>${duration}</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            ${title}
                        </h3>
                        <p class="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                            ${shortDesc}
                        </p>
                    </div>
                </div>

                <div class="px-6 pb-6 pt-2 flex items-center gap-3">
                    <button onclick="openServiceModal(${service.id})" class="flex-1 py-2.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-500 text-sky-600 hover:text-white dark:bg-slate-700/80 dark:text-sky-300 dark:hover:bg-sky-500 dark:hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                        <i class="fa-regular fa-eye"></i>
                        <span>${t.btn_view_details}</span>
                    </button>
                    <a href="#contact" onclick="selectPackageForBooking('${title}')" class="py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm transition-colors">
                        ${t.btn_book_now}
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

// Filter Services Tab Click
function filterServices(filter) {
    currentServiceFilter = filter;
    document.querySelectorAll('.service-tab').forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.className = "service-tab active shrink-0 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all bg-sky-500 text-white shadow-md shadow-sky-200 dark:shadow-none";
        } else {
            btn.className = "service-tab shrink-0 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all bg-sky-50 text-slate-700 hover:bg-sky-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700";
        }
    });
    renderServices(filter);
}

// Open Service Modal
function openServiceModal(id) {
    const service = servicesData.find(s => s.id === id);
    if (!service) return;

    const title = currentLang === 'en' ? service.title_en : service.title_km;
    const enTitle = currentLang === 'en' ? service.title_km : service.title_en;
    const badge = currentLang === 'en' ? service.badge_en : service.badge_km;
    const duration = currentLang === 'en' ? service.duration_en : service.duration_km;
    const fullDesc = currentLang === 'en' ? service.fullDesc_en : service.fullDesc_km;
    const includes = currentLang === 'en' ? service.includes_en : service.includes_km;

    document.getElementById('modal-service-img').src = service.image;
    document.getElementById('modal-service-badge').textContent = badge;
    document.getElementById('modal-service-title').textContent = title;
    document.getElementById('modal-service-en').textContent = enTitle;
    document.getElementById('modal-service-desc').textContent = fullDesc;
    document.getElementById('modal-service-duration').textContent = duration;

    const includesList = document.getElementById('modal-service-includes');
    includesList.innerHTML = includes.map(item => `
        <li class="flex items-start gap-2.5">
            <i class="fa-solid fa-circle-check text-sky-500 mt-1 shrink-0"></i>
            <span>${item}</span>
        </li>
    `).join('');

    const bookBtn = document.getElementById('modal-book-btn');
    bookBtn.onclick = () => {
        closeServiceModal();
        selectPackageForBooking(title);
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    document.getElementById('service-modal').classList.remove('hidden');
}

function closeServiceModal() {
    document.getElementById('service-modal').classList.add('hidden');
}

// ==================== GALLERY SECTION ====================
function renderGallery(filter = currentGalleryFilter) {
    currentGalleryFilter = filter;
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    const filtered = filter === 'all'
        ? galleryData
        : galleryData.filter(item => item.category === filter);

    const t = translations[currentLang] || translations.km;

    grid.innerHTML = filtered.map(item => {
        const title = currentLang === 'en' ? item.title_en : item.title_km;
        const desc = currentLang === 'en' ? item.desc_en : item.desc_km;
        const breed = currentLang === 'en' ? item.breed_en : item.breed_km;
        const catLabel = currentLang === 'en' ? item.catLabel_en : item.catLabel_km;

        return `
            <div onclick="openLightbox(${item.id})" class="group cursor-pointer rounded-3xl overflow-hidden bg-sky-50 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div class="relative aspect-square overflow-hidden bg-sky-100 dark:bg-slate-700">
                    <img src="${item.image}" 
                         alt="${title}" 
                         onerror="this.src='https://placehold.co/500x500/e0f2fe/0284c7?text=Happy+Pet'"
                         class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span class="text-white text-xs font-medium flex items-center gap-1.5">
                            <i class="fa-solid fa-magnifying-glass-plus text-sky-300"></i> ${t.gallery_zoom}
                        </span>
                    </div>
                    <span class="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-bold text-sky-600 dark:text-sky-400 shadow-sm">
                        ${catLabel}
                    </span>
                </div>
                <div class="p-4 bg-white dark:bg-slate-800 flex-1 flex flex-col justify-between">
                    <div>
                        <h4 class="font-bold text-slate-900 dark:text-white text-sm group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-1">${title}</h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${desc}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-sky-50 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-sky-600 dark:text-sky-400 font-semibold">
                        <span><i class="fa-solid fa-paw mr-1"></i>${breed}</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-slate-400 group-hover:text-sky-500"></i>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filter Gallery Tab Click
function filterGallery(filter) {
    currentGalleryFilter = filter;
    document.querySelectorAll('.gallery-tab').forEach(btn => {
        if (btn.dataset.gfilter === filter) {
            btn.className = "gallery-tab active shrink-0 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all bg-sky-500 text-white shadow-md shadow-sky-200 dark:shadow-none";
        } else {
            btn.className = "gallery-tab shrink-0 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all bg-sky-50 text-slate-700 hover:bg-sky-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700";
        }
    });
    renderGallery(filter);
}

// Lightbox Modal
function openLightbox(id) {
    const item = galleryData.find(g => g.id === id);
    if (!item) return;

    const title = currentLang === 'en' ? item.title_en : item.title_km;
    const desc = currentLang === 'en' ? item.desc_en : item.desc_km;
    const breed = currentLang === 'en' ? item.breed_en : item.breed_km;
    const catLabel = currentLang === 'en' ? item.catLabel_en : item.catLabel_km;

    document.getElementById('lightbox-img').src = item.image;
    document.getElementById('lightbox-category').textContent = catLabel;
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-desc').textContent = desc;
    document.getElementById('lightbox-breed').textContent = breed;

    document.getElementById('lightbox-modal').classList.remove('hidden');
}

function closeLightbox() {
    document.getElementById('lightbox-modal').classList.add('hidden');
}

// Select Service Checkbox helper when clicking "កក់ម៉ោង" / "Book Now" on a service card
function selectPackageForBooking(serviceTitle) {
    const checkboxes = document.querySelectorAll('input[name="service-item"]');
    checkboxes.forEach(cb => {
        cb.checked = (cb.value === serviceTitle);
    });
}

// Copy Phone Number helper
function copyPhoneNumber(phoneStr, btnEl) {
    const tempInput = document.createElement('textarea');
    tempInput.value = phoneStr;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const originalHtml = btnEl.innerHTML;
    const copiedText = currentLang === 'en' ? 'Copied' : 'បានចម្លង';
    btnEl.innerHTML = `<i class="fa-solid fa-check mr-1 text-emerald-500"></i> ${copiedText}`;
    setTimeout(() => {
        btnEl.innerHTML = originalHtml;
    }, 2000);
}

// Generate Booking Message (Bilingual support)
function handleGenerateMessage(e) {
    e.preventDefault();
    const name = document.getElementById('owner-name').value.trim();
    const phone = document.getElementById('owner-phone').value.trim();
    const petTypeSelect = document.getElementById('pet-type');
    const petType = petTypeSelect.options[petTypeSelect.selectedIndex].text;
    const petBreed = document.getElementById('pet-breed').value.trim() || (currentLang === 'en' ? 'Not specified' : 'មិនបានបញ្ជាក់');
    const date = document.getElementById('booking-date').value;

    const checkedServices = Array.from(document.querySelectorAll('input[name="service-item"]:checked'))
        .map(cb => cb.value);

    let message = "";
    if (currentLang === 'en') {
        const servicesListText = checkedServices.length > 0
            ? checkedServices.map(s => `  - ${s}`).join('\n')
            : '  - Deep Cleansing & Odor Removal Bath';

        message = `Hello Kesor Pet Grooming! 🐾\nI would like to book an appointment for my pet:\n• Owner Name: ${name}\n• Phone Number: ${phone}\n• Pet Type: ${petType} (${petBreed})\n• Preferred Date: ${date}\n• Selected Services:\n${servicesListText}\nThank you!`;
    } else {
        const servicesListText = checkedServices.length > 0
            ? checkedServices.map(s => `  - ${s}`).join('\n')
            : '  - ងូតទឹកជម្រះជាតិកខ្វក់ និងបំបាត់ក្លិន';

        message = `សួស្តី Kesor Pet Grooming! 🐾\nខ្ញុំចង់កក់ម៉ោងទុកមុនសម្រាប់ថែទាំសត្វចិញ្ចឹម៖\n• ឈ្មោះអតិថិជន៖ ${name}\n• លេខទូរស័ព្ទ៖ ${phone}\n• ប្រភេទសត្វ៖ ${petType} (${petBreed})\n• ថ្ងៃណាត់ជួប៖ ${date}\n• សេវាកម្មដែលជ្រើសរើស៖\n${servicesListText}\nសូមអរគុណ!`;
    }

    const box = document.getElementById('generated-box');
    const textArea = document.getElementById('generated-text');
    textArea.value = message;
    box.classList.remove('hidden');
    document.getElementById('copy-status').classList.add('hidden');
}

// Copy Message using execCommand for iframe compatibility
function copyBookingMessage() {
    const textArea = document.getElementById('generated-text');
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    document.execCommand('copy');

    const status = document.getElementById('copy-status');
    status.classList.remove('hidden');
}

// Mobile Menu Toggle & Initialization
window.onload = function() {
    // 1. Initialize Theme
    applyTheme(currentTheme);

    // 2. Initialize Language
    applyLanguage(currentLang);

    // 3. Set default booking date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        dateInput.valueAsDate = tomorrow;
    }

    // 4. Set current year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 5. Mobile Hamburger Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenuBtn && mobileMenu && menuIcon) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });
    }

    // 6. Close modals when clicking outside content
    const serviceModal = document.getElementById('service-modal');
    if (serviceModal) {
        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) closeServiceModal();
        });
    }

    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }
};
