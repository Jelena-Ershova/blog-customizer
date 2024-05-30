import { CSSProperties, useState } from 'react';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';
import styles from '../../styles/index.module.scss';

export const App = () => {
	const [appPageStyles, setAppPageStyles] = useState(defaultArticleState);
	return (
		<div
			className={styles.main}
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
