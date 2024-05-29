import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [appPageStyles, setAppPageStyles] = useState(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appPageStyles.fontFamilyOption.value,
					'--font-size': appPageStyles.fontSizeOption.value,
					'--font-color': appPageStyles.fontColor.value,
					'--container-width': appPageStyles.contentWidth.value,
					'--bg-color': appPageStyles.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				appPageStyles={appPageStyles}
				setAppPageStyles={setAppPageStyles}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
