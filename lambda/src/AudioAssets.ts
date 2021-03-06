'use strict';

import { Request, IntentRequest, LaunchRequest } from 'ask-sdk-model';
let en = {
    card: {
        title: 'White Label Radio',
        text: 'Less bla bla bla, more la la la',
        image: {
            largeImageUrl: 'https://alexademo.ninja/skills/logo-512.png',
            smallImageUrl: 'https://alexademo.ninja/skills/logo-108.png'
        }
    },
    url: 'https://play.adtonos.com/radio-net',
};

let fr = {
    card: {
        title: 'Marque Blanche Radio',
        text: 'Moins de bla bla bla, plus de la la la',
        image: {
            image: {
                largeImageUrl: 'https://alexademo.ninja/skills/logo-512.png',
                smallImageUrl: 'https://alexademo.ninja/skills/logo-108.png'
            }
    
        }
    },
    url: 'https://play.adtonos.com/radio-net',
};

let it = {
    card: {
        title: 'La Etichetta Bianca Radio',
        text: 'Meno parlare, più musica',
        image: {
            image: {
                largeImageUrl: 'https://alexademo.ninja/skills/logo-512.png',
                smallImageUrl: 'https://alexademo.ninja/skills/logo-108.png'
            }
    
        }
    },
    url: 'https://play.adtonos.com/radio-net',
};

let es = {
    card: {
        title: 'Etiqueta Blanca Radio',
        text: 'Menos conversación, más música',
        image: {
            image: {
                largeImageUrl: 'https://alexademo.ninja/skills/logo-512.png',
                smallImageUrl: 'https://alexademo.ninja/skills/logo-108.png'
            }
    
        }
    },
    url: 'https://play.adtonos.com/radio-net',
};

let globalAudioData = {
        'en-US': en,
        'en-GB': en,
        'en-CA': en,
        'en-IN': en,
        'en-AU': en,
        'fr-FR': fr,
        'fr-CA': fr,
        'it-IT': it,
        'es-ES': es,
        'es-MX': es
};

export function audioData(request : Request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = (<IntentRequest | LaunchRequest>request).locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

