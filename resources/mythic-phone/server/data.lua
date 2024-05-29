local _ran = false

_appData = {
	{
		name = "phone",
		storeLabel = "Phone",
		label = "Phone",
		icon = "phone",
		color = "#21a500",
		params = "",
		internal = { {
			app = "call",
			params = ":number?",
		} },
		canUninstall = false,
		store = true,
		unread = 0,
		requirements = {},
	},
	{
		name = "messages",
		storeLabel = "Messages",
		label = "Messages",
		icon = "comment",
		color = "#ff0000",
		params = "",
		internal = {
			{
				app = "new",
			},
			{
				app = "convo",
				params = ":number?",
			},
		},
		canUninstall = false,
		store = true,
		unread = 0,
		requirements = {},
	},
	{
		name = "contacts",
		storeLabel = "Contacts",
		label = "Contacts",
		icon = "address-book",
		color = "#ff6a00",
		params = "",
		internal = {
			{
				app = "add",
				params = ":number?",
			},
			{
				app = "edit",
				params = ":id?",
			},
		},
		canUninstall = false,
		store = true,
		unread = 0,
		requirements = {},
	},
	{
		name = "store",
		storeLabel = "Blue Sky App Store",
		label = "App Store",
		icon = "rocket-launch",
		color = "#1a7cc1",
		params = "",
		canUninstall = false,
		store = true,
		unread = 0,
		requirements = {},
	},
	{
		name = "settings",
		storeLabel = "Settings",
		label = "Settings",
		icon = "gear",
		color = "#18191e",
		params = "",
		internal = {
			{
				app = "software",
				params = "",
			},
			{
				app = "profile",
				params = "",
			},
			{
				app = "app_notifs",
				params = "",
			},
			{
				app = "sounds",
				params = "",
			},
			{
				app = "wallpaper",
				params = "",
			},
			{
				app = "colors",
				params = "",
			},
		},
		canUninstall = false,
		store = true,
		unread = 0,
		requirements = {},
	},
	{
		name = "email",
		storeLabel = "Email",
		label = "Email",
		icon = "envelope",
		color = "#5600a5",
		params = "",
		internal = { {
			app = "view",
			params = ":id?",
		} },
		canUninstall = false,
		store = true,
		unread = 0,
		requirements = {},
	},
	{
		name = "bank",
		storeLabel = "Bank",
		label = "Bank",
		icon = "bank",
		color = "#ff0000",
		params = "",
		canUninstall = true,
		store = true,
		unread = 0,
		requirements = {},
		internal = {
			{
				app = "view",
				params = ":account",
			},
		},
	},
	{
		name = "loans",
		storeLabel = "Loans",
		label = "Loans",
		icon = "hand-holding-dollar",
		color = "#30518c",
		params = "",
		canUninstall = true,
		store = true,
		unread = 0,
		requirements = {},
		internal = {
			{
				app = "view",
				params = ":loan",
			},
		},
	},
	{
		name = "twitter",
		storeLabel = "Twitter",
		label = "Twitter",
		icon = { "fab", "twitter" },
		color = "#00aced",
		params = "",
		canUninstall = true,
		store = true,
		unread = 0,
		requirements = {},
	},
	{
		name = "irc",
		storeLabel = "IRC",
		label = "IRC",
		icon = "comment-slash",
		color = "#1de9b6",
		params = "",
		canUninstall = true,
		store = true,
		unread = 0,
		internal = { {
			app = "view",
			params = ":channel",
		} },
		requirements = {},
	},
	{
		name = "adverts",
		storeLabel = "Yellow Pages",
		label = "YP",
		icon = "rectangle-ad",
		color = "#f9a825",
		params = "",
		unread = 0,
		internal = {
			{
				app = "view",
				params = ":id",
			},
			{
				app = "category-view",
				params = ":category",
			},
			{
				app = "add",
				params = "",
			},
			{
				app = "edit",
				params = "",
			},
		},
		canUninstall = true,
		store = true,
		requirements = {},
	},
	-- {
	-- 	name = "xor",
	-- 	storeLabel = "xor",
	-- 	label = "Xor",
	-- 	icon = "flask-potion",
	-- 	color = "#d97334",
	-- 	params = "",
	-- 	hidden = true,
	-- 	canUninstall = true,
	-- 	store = false,
	-- 	unread = 0,
	-- 	requirements = {},
	-- },
	{
		name = "redline",
		storeLabel = "Vroom",
		label = "Vroom",
		icon = "gauge-simple-max",
		color = "#8a172e",
		params = ":tab?",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
		restricted = {
			state = "RACE_DONGLE",
		},
	},
	{
		name = "blueline",
		storeLabel = "Vroom",
		label = "Trials",
		icon = "gauge-simple-max",
		color = "#1258a3",
		params = ":tab?",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
		restricted = {
			job = {
				police = 1,
			},
		},
	},
	-- {
	-- 	name = "leoassist",
	-- 	storeLabel = "LEO Assist",
	-- 	label = "LEO Assist",
	-- 	icon = "siren-on",
	-- 	color = "#1258a3",
	-- 	params = "",
	-- 	hidden = false,
	-- 	canUninstall = true,
	-- 	store = true,
	-- 	unread = 0,
	-- 	restricted = {
	-- 		job = {
	-- 			police = 1,
	-- 		},
	-- 	},
	-- },
	{
		name = "comanager",
		storeLabel = "Company Manager",
		label = "Company Manager",
		icon = "briefcase",
		color = "#428030",
		params = "",
		hidden = false,
		canUninstall = false,
		store = false,
		unread = 0,
		internal = {
			{
				app = 'view',
				params = ':jobId',
			},
		},
	},
	{
		name = "labor",
		storeLabel = "Labor",
		label = "Labor",
		icon = "person-digging",
		color = "#785920",
		params = "",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
	},
	{
		name = "crypto",
		storeLabel = "CryptoX",
		label = "CryptoX",
		icon = { "fab", "bitcoin" },
		color = "#b0e655",
		params = "",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
	},
	{
		name = "dyn8",
		storeLabel = "Dynasty 8",
		label = "Dynasty 8",
		icon = "house",
		color = "#136231",
		params = "",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
		restricted = {
			job = {
				--realestate = 1,
				penis = 1,
			},
		},
	},
	{
		name = "homemanage",
		storeLabel = "Properties",
		label = "Properties",
		icon = "house-signal",
		color = "#30518c",
		params = "",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
	},
	-- {
	-- 	name = "govt",
	-- 	storeLabel = "Los Santos Services",
	-- 	label = "Los Santos Services",
	-- 	icon = "flag-usa",
	-- 	color = "#5597d0",
	-- 	params = "",
	-- 	hidden = false,
	-- 	canUninstall = true,
	-- 	store = true,
	-- 	unread = 0,
	-- },
	{
		name = "garage",
		storeLabel = "Garage",
		label = "Garage",
		icon = "garage",
		color = "#eb34de",
		params = "",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
		internal = {
			{
				app = "view",
				params = ":vin",
			},
		},
	},
	{
		name = "pingem",
		storeLabel = "Ping'Em",
		label = "Ping'Em",
		icon = "location-crosshairs",
		color = "#8E1467",
		params = "",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
	},
	{
		name = "calculator",
		storeLabel = "Calculator",
		label = "Calculator",
		icon = "calculator-simple",
		color = "#E95200",
		params = "",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
	},
	{
		storeLabel = 'Documents',
		label = 'Documents',
		icon = 'file-lines',
		name = 'documents',
		color = '#18191e',
		canUninstall = true,
		unread = 0,
		params = '',
		internal = {
			{
				app = 'view',
				params = ':id/:mode',
			},
		},
	},
	{
		name = "lsunderground",
		storeLabel = "LS UNDG",
		label = "LS UNDG",
		icon = "user-secret",
		color = "#E95200",
		params = ":tab?",
		hidden = false,
		canUninstall = true,
		store = true,
		unread = 0,
		restricted = {
			state = "ACCESS_LSUNDERGROUND",
		},
	},
}
