import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/language_selector";

// const App = () => {
// 	const { t } = useTranslation();

// 	const { line1, line2 } = t("description",{
//     channel:"ReactCoder",
//   });

// 	return (
// 		<div className="container">
// 			<LanguageSelector />
// 			<h1>{t("greeting")}</h1>
// 			<p>{line1}</p>
// 			<span>{line2}</span>
// 		</div>
// 	);
// };

// export default App;

import { Trans } from "react-i18next";
import { useEffect } from "react";
const App = () => {
	const { t } = useTranslation();

	const { line1, line2 } = t("description");

	useEffect(() => {
		const botpressScript = document.createElement("script");
		botpressScript.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
		botpressScript.defer = true;

		botpressScript.onload = () => {
			// Only load config script AFTER botpress is fully ready
			const configScript = document.createElement("script");
			configScript.src =
				"https://files.bpcontent.cloud/2025/06/22/11/20250622114416-FIUCWWG4.js";
			configScript.defer = true;
			document.body.appendChild(configScript);
		};

		document.body.appendChild(botpressScript);

		return () => {
			document.body.removeChild(botpressScript);
		};
	}, []);

	return (
		<div className="container">
			<LanguageSelector />
			<h1>{t("greeting")}</h1>
			<span>
				<Trans
					// i18nKey = {"description.line1"}
					i18nKey={line1}
					values={{ channel: "ReactCoder" }}
					components={{ 1: <b /> }}
				/>
			</span>
			<span>{line2}</span>
		</div>
	);
};

export default App;

// import { useEffect } from "react";

// function App() {
// 	useEffect(() => {
// 		const botpressScript = document.createElement("script");
// 		botpressScript.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
// 		botpressScript.defer = true;

// 		botpressScript.onload = () => {
// 			// Only load config script AFTER botpress is fully ready
// 			const configScript = document.createElement("script");
// 			configScript.src =
// 				"https://files.bpcontent.cloud/2025/06/22/11/20250622114416-FIUCWWG4.js";
// 			configScript.defer = true;
// 			document.body.appendChild(configScript);
// 		};

// 		document.body.appendChild(botpressScript);

// 		return () => {
// 			document.body.removeChild(botpressScript);
// 		};
// 	}, []);

// 	return (
// 		<div>
// 			<h1>My Vite + React App</h1>
// 			{/* Chatbot will appear once both scripts load */}
// 		</div>
// 	);
// }

// export default App;
