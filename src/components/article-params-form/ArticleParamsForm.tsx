import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from '../select';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';
import {
	ArticleStateType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { useState, useRef } from 'react';
import clsx from 'clsx';
import { useOutsideClick } from './hooks/useOutsideClick';

type ArticleParamsFormProps = {
	appPageStyles: ArticleStateType;
	setAppPageStyles(props: ArticleStateType): void;
};

export const ArticleParamsForm = ({
	appPageStyles,
	setAppPageStyles,
}: ArticleParamsFormProps) => {
	const [openSetting, setOpenSetting] = useState(false);
	const settingRef = useRef<HTMLDivElement | null>(null);
	const [fontFamily, setFontFamily] = useState(appPageStyles.fontFamilyOption);
	const [fontSize, setFontSize] = useState(appPageStyles.fontSizeOption);
	const [fontColor, setFontColor] = useState(appPageStyles.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(
		appPageStyles.backgroundColor
	);
	const [contentWidth, setContentWidth] = useState(appPageStyles.contentWidth);

	useOutsideClick(settingRef, () => setOpenSetting(false), openSetting);

	const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setAppPageStyles({
			...appPageStyles,
			fontFamilyOption: fontFamily,
			fontSizeOption: fontSize,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
		});
	};
	const handleResetForm = () => {
		setAppPageStyles(defaultArticleState);
		setFontFamily(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setContentWidth(defaultArticleState.contentWidth);
	};

	return (
		<div ref={settingRef}>
			<ArrowButton
				onClick={() => setOpenSetting((prevState) => !prevState)}
				isOpen={openSetting}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: openSetting,
				})}>
				<form
					className={styles.form}
					onSubmit={handleSubmitForm}
					onReset={handleResetForm}>
					<Text
						as='h2'
						size={31}
						family='open-sans'
						weight={800}
						uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						title={'шрифт'}
						options={fontFamilyOptions}
						selected={fontFamily}
						onChange={setFontFamily}
					/>
					<RadioGroup
						title={'размер шрифта'}
						name={'размер шрифта'}
						options={fontSizeOptions}
						selected={fontSize}
						onChange={setFontSize}
					/>
					<Select
						title={'цвет шрифта'}
						options={fontColors}
						selected={fontColor}
						onChange={setFontColor}
					/>
					<Separator />
					<Select
						title={'цвет фона'}
						options={backgroundColors}
						selected={backgroundColor}
						onChange={setBackgroundColor}
					/>
					<Select
						title={'ширина контента'}
						options={contentWidthArr}
						selected={contentWidth}
						onChange={setContentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
