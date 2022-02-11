import React from "react";

export type UserProps = {
	userModal: boolean;
	handleUserModal: Function;
    userToDraw: DataUserResponse | undefined;
};

export type DataTaskResponse = {
	user_id: number;
	id: number;
	title: string;
	completed: boolean;
};

export type DataUserResponse = {
	id: UserSelected;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: number;
			lng: number;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

export type UserResponse = {
	total_items: number;
	data: DataUserResponse;
};

export type UserSelected = {
	id: number;
};

export type TaskResponse = {
	total_items: number;
	data: DataTaskResponse;
}

export type PaginationType = {
	totalPosts: number
	postsPerPage: number
	handlePage: Function
}

export type SearchTypeId = {
	setPath: Function
}

export type SearchTypeBool = {
	setCompleted: React.Dispatch<React.SetStateAction<boolean | undefined>>
}