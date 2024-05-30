import { useEffect } from 'react';

export const useOutsideClick = (
	ref: React.RefObject<HTMLDivElement | null>,
	callback: () => void,
	state: boolean
) => {
	useEffect(() => {
		if (state) {
			const handleClickOutside = (event: MouseEvent) => {
				if (ref.current && !ref.current.contains(event.target as Node)) {
					callback();
				}
			};

			document.addEventListener('mouseup', handleClickOutside);

			return () => {
				document.removeEventListener('mouseup', handleClickOutside);
			};
		}
	}, [callback, state]);
};
