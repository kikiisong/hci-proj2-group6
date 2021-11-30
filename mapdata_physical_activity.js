var simplemaps_statemap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    //state_url: "https://simplemaps.com",
    state_url: '',
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: false,
   
		//Zoom settings
		manual_zoom: "yes",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map_physical_activity",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    "24001": {
      name: "Allegany",
      description: "82%",
      color: "#4f8cf0",
      hover_color: "#4a83e0",
      url: "default"
    },
    "24003": {
      name: "Anne Arundel",
      description: "92%",
      color: "#4082ed",
      hover_color: "#3d7be0",
      url: "default"
    },
    "24510": {
      name: "Baltimore City",
      description: "100%",
      color: "#1a6bed",
      hover_color: "#1765e3",
      url: "default"
    },
    "24005": {
      name: "Baltimore County",
      description: "96%",
      color: "#4082ed",
      hover_color: "#3d7be0",
      url: "default"
    },
    "24009": {
      name: "Calvert",
      description: "61%",
      color: "#92b9f7",
      hover_color: "#8db3f0",
      url: "default"
    },
    "24011": {
      name: "Caroline",
      description: "48%",
      color: "#e8f1ff",
      hover_color: "#e6eefa",
      url: "default"
    },
    "24013": {
      name: "Carroll",
      description: "87%",
      color: "#4f8cf0",
      hover_color: "#4a83e0",
      url: "default"
    },
    "24015": {
      name: "Cecil",
      description: "81%",
      color: "#4f8cf0",
      hover_color: "#4a83e0",
      url: "default"
    },
    "24017": {
      name: "Charles",
      description: "77%",
      color: "#7ca9f2",
      hover_color: "#78a3eb",
      url: "default"
    },
    "24019": {
      name: "Dorchester",
      description: "68%",
      color: "#92b9f7",
      hover_color: "#8db3f0",
      url: "default"
    },
    "24021": {
      name: "Frederick",
      description: "92%",
      color: "#4082ed",
      hover_color: "#3d7be0",
      url: "default"
    },
    "24023": {
      name: "Garrett",
      description: "73%",
      color: "#7ca9f2",
      hover_color: "#78a3eb",
      url: "default"
    },
    "24025": {
      name: "Harford",
      description: "90%",
      color: "#4082ed",
      hover_color: "#3d7be0",
      url: "default"
    },
    "24027": {
      name: "Howard",
      description: "96%",
      color: "#4082ed",
      hover_color: "#3d7be0",
      url: "default"
    },
    "24029": {
      name: "Kent",
      description: "57%",
      color: "#bfd8ff",
      hover_color: "#b2c9ed",
      url: "default"
    },
    "24031": {
      name: "Montgomery",
      description: "100%",
      color: "#1a6bed",
      hover_color: "#1765e3",
      url: "default"
    },
    "24033": {
      name: "Prince George's",
      description: "98%",
      color: "#4082ed",
      hover_color: "#3d7be0",
      url: "default"
    },
    "24035": {
      name: "Queen Anne's",
      description: "82%",
      color: "#4f8cf0",
      hover_color: "#4a83e0",
      url: "default"
    },
    "24037": {
      name: "St. Mary's",
      description: "77%",
      color: "#7ca9f2",
      hover_color: "#78a3eb",
      url: "default"
    },
    "24039": {
      name: "Somerset",
      description: "61%",
      color: "#92b9f7",
      hover_color: "#8db3f0",
      url: "default"
    },
    "24041": {
      name: "Talbot",
      description: "76%",
      color: "#7ca9f2",
      hover_color: "#78a3eb",
      url: "default"
    },
    "24043": {
      name: "Washington",
      description: "75%",
      color: "#7ca9f2",
      hover_color: "#78a3eb",
      url: "default"
    },
    "24045": {
      name: "Wicomico",
      description: "77%",
      color: "#7ca9f2",
      hover_color: "#78a3eb",
      url: "default"
    },
    "24047": {
      name: "Worcester",
      description: "90%",
      color: "#4082ed",
      hover_color: "#3d7be0",
      url: "default"
    }
  },
};
