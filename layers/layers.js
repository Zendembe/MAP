var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_dusbinaroundhostels_1 = new ol.format.GeoJSON();
var features_dusbinaroundhostels_1 = format_dusbinaroundhostels_1.readFeatures(json_dusbinaroundhostels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dusbinaroundhostels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dusbinaroundhostels_1.addFeatures(features_dusbinaroundhostels_1);
var lyr_dusbinaroundhostels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dusbinaroundhostels_1, 
                style: style_dusbinaroundhostels_1,
                popuplayertitle: "dusbin around hostels",
                interactive: true,
                title: '<img src="styles/legend/dusbinaroundhostels_1.png" /> dusbin around hostels'
            });
var format_vedavathihostell_2 = new ol.format.GeoJSON();
var features_vedavathihostell_2 = format_vedavathihostell_2.readFeatures(json_vedavathihostell_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vedavathihostell_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vedavathihostell_2.addFeatures(features_vedavathihostell_2);
var lyr_vedavathihostell_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vedavathihostell_2, 
                style: style_vedavathihostell_2,
                popuplayertitle: "vedavathi hostell",
                interactive: true,
                title: '<img src="styles/legend/vedavathihostell_2.png" /> vedavathi hostell'
            });
var format_hostel4_3 = new ol.format.GeoJSON();
var features_hostel4_3 = format_hostel4_3.readFeatures(json_hostel4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hostel4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hostel4_3.addFeatures(features_hostel4_3);
var lyr_hostel4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hostel4_3, 
                style: style_hostel4_3,
                popuplayertitle: "hostel 4",
                interactive: true,
                title: '<img src="styles/legend/hostel4_3.png" /> hostel 4'
            });
var format_hostel1_4 = new ol.format.GeoJSON();
var features_hostel1_4 = format_hostel1_4.readFeatures(json_hostel1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hostel1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hostel1_4.addFeatures(features_hostel1_4);
var lyr_hostel1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hostel1_4, 
                style: style_hostel1_4,
                popuplayertitle: "hostel 1",
                interactive: true,
                title: '<img src="styles/legend/hostel1_4.png" /> hostel 1'
            });
var format_hostel5_5 = new ol.format.GeoJSON();
var features_hostel5_5 = format_hostel5_5.readFeatures(json_hostel5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hostel5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hostel5_5.addFeatures(features_hostel5_5);
var lyr_hostel5_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hostel5_5, 
                style: style_hostel5_5,
                popuplayertitle: "hostel 5",
                interactive: true,
                title: '<img src="styles/legend/hostel5_5.png" /> hostel 5'
            });
var format_hostel3_6 = new ol.format.GeoJSON();
var features_hostel3_6 = format_hostel3_6.readFeatures(json_hostel3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hostel3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hostel3_6.addFeatures(features_hostel3_6);
var lyr_hostel3_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hostel3_6, 
                style: style_hostel3_6,
                popuplayertitle: "hostel 3",
                interactive: true,
                title: '<img src="styles/legend/hostel3_6.png" /> hostel 3'
            });
var format_Ganga2_7 = new ol.format.GeoJSON();
var features_Ganga2_7 = format_Ganga2_7.readFeatures(json_Ganga2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganga2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganga2_7.addFeatures(features_Ganga2_7);
var lyr_Ganga2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ganga2_7, 
                style: style_Ganga2_7,
                popuplayertitle: "Ganga2",
                interactive: true,
                title: '<img src="styles/legend/Ganga2_7.png" /> Ganga2'
            });
var format_hostel2_8 = new ol.format.GeoJSON();
var features_hostel2_8 = format_hostel2_8.readFeatures(json_hostel2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hostel2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hostel2_8.addFeatures(features_hostel2_8);
var lyr_hostel2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hostel2_8, 
                style: style_hostel2_8,
                popuplayertitle: "hostel 2",
                interactive: true,
                title: '<img src="styles/legend/hostel2_8.png" /> hostel 2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_dusbinaroundhostels_1.setVisible(true);lyr_vedavathihostell_2.setVisible(true);lyr_hostel4_3.setVisible(true);lyr_hostel1_4.setVisible(true);lyr_hostel5_5.setVisible(true);lyr_hostel3_6.setVisible(true);lyr_Ganga2_7.setVisible(true);lyr_hostel2_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_dusbinaroundhostels_1,lyr_vedavathihostell_2,lyr_hostel4_3,lyr_hostel1_4,lyr_hostel5_5,lyr_hostel3_6,lyr_Ganga2_7,lyr_hostel2_8];
lyr_dusbinaroundhostels_1.set('fieldAliases', {'S.NO': 'S.NO', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_vedavathihostell_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_hostel4_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_hostel1_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_hostel5_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_hostel3_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ganga2_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_hostel2_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_dusbinaroundhostels_1.set('fieldImages', {'S.NO': '', 'LATITUDE': '', 'LONGITUDE': '', });
lyr_vedavathihostell_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_hostel4_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_hostel1_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_hostel5_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_hostel3_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Ganga2_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_hostel2_8.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_dusbinaroundhostels_1.set('fieldLabels', {'S.NO': 'header label - always visible', 'LATITUDE': 'header label - always visible', 'LONGITUDE': 'header label - always visible', });
lyr_vedavathihostell_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_hostel4_3.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_hostel1_4.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_hostel5_5.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_hostel3_6.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ganga2_7.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'header label - visible with data', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_hostel2_8.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - visible with data', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_hostel2_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});