// import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";
// i18n.use(LanguageDetector)
// 	.use(initReactI18next)
// 	.init({
// 		debug: true,
// 		lng: "en", // Default Language
// 		fallbackLng: "en",
// 		returnObjects: true,
// 		resources: {
// 			// The Key has to be the exactly the same in all the languages, or else can't match
// 			en: {
// 				translation: {
// 					greeting: "Hello World",
// 					description: {
// 						line1: "You're watching a <1>{{channel}}</1>",
// 						line2: "This is a multi-lingual demo",
// 					},
// 				},
// 			},
// 			fr: {
// 				translation: {
// 					greeting: "Bonjour le monde",
// 					description: {
// 						line1: "Vous regardez une démo multilingue <1>{{channel}}</1>",
// 						line2: "C'est une démo multilingue",
// 					},
// 				},
// 			},
// 			hi: {
// 				translation: {
// 					greeting: "नमस्ते दुनिया",
// 					description: {
// 						line1: "आप एक <1>{{channel}}</1> के मल्टीलिंग डेमो देख रहे हैं",
// 						line2: "यह एक मल्टीलिंग डेमो है",
// 					},
// 				},
// 			},

// 			ar: {
// 				translation: {
// 					greeting: "مرحبا بالعالم",
// 					description: {
// 						line1: "أنت تمتلك تصميم متعدد اللغات <1>{{channel}}</1>",
// 						line2: "هذا هو تصميم متعدد اللغات",
// 					},
// 				},
// 			},
// 		},
// 	});

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
	debug: true,
	lng: "en", // Default Language
	fallbackLng: "en",
	returnObjects: true,
});
