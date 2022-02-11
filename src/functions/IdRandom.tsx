import React from 'react';

const IdRandom = () => {
	const id = Math.random().toString(36).substr(2, 9);
	return id;
};

export default IdRandom;
