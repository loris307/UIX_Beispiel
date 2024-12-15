/**
 * Frontend entrypoint:
 * This module provides a default export that defines the UI that is created on the frontend
 * when a page is visited
 */

export default {
	// show frontend-rendered page on /frontend
	'/newFile': import("common/newFile.tsx"),
	'/users': import("common/user.tsx"),
	'/button': import("common/reactiveButton.tsx"),
	'/component': import("common/complexComponent.tsx"),
}
