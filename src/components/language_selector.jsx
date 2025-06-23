import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const languages = [
	{ code: "en", name: "English" },
	{ code: "fr", name: "French" },
	{ code: "hi", name: "Hindi" },
	{ code: "ar", name: "Arabic" },
];

const language_selector = () => {
	const { i18n } = useTranslation();
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	useEffect(() => {
		document.body.dir = i18n.dir();
	}, [i18n, i18n.language]);

	return (
		<div className="btn-container">
			{languages.map((language) => {
				return (
					<button
						className={language.code === i18n.language ? "active" : ""}
						key={language.code}
						onClick={() => changeLanguage(language.code)}
					>
						{language.name}
					</button>
				);
			})}
		</div>
	);
};

export default language_selector;
