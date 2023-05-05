var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AdministrasiKotaMalang_AR_1 = new ol.format.GeoJSON();
var features_AdministrasiKotaMalang_AR_1 = format_AdministrasiKotaMalang_AR_1.readFeatures(json_AdministrasiKotaMalang_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKotaMalang_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKotaMalang_AR_1.addFeatures(features_AdministrasiKotaMalang_AR_1);
var lyr_AdministrasiKotaMalang_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdministrasiKotaMalang_AR_1, 
                style: style_AdministrasiKotaMalang_AR_1,
                interactive: true,
                title: '<img src="styles/legend/AdministrasiKotaMalang_AR_1.png" /> Administrasi Kota Malang_AR'
            });
var format_WaktuRumahSakit_2 = new ol.format.GeoJSON();
var features_WaktuRumahSakit_2 = format_WaktuRumahSakit_2.readFeatures(json_WaktuRumahSakit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaktuRumahSakit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaktuRumahSakit_2.addFeatures(features_WaktuRumahSakit_2);
var lyr_WaktuRumahSakit_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaktuRumahSakit_2, 
                style: style_WaktuRumahSakit_2,
                interactive: true,
    title: 'Waktu Rumah Sakit<br />\
    <img src="styles/legend/WaktuRumahSakit_2_0.png" />  5 Menit<br />\
    <img src="styles/legend/WaktuRumahSakit_2_1.png" />  10 Menit<br />\
    <img src="styles/legend/WaktuRumahSakit_2_2.png" /> <br />'
        });
var format_JarakRumahSakit_3 = new ol.format.GeoJSON();
var features_JarakRumahSakit_3 = format_JarakRumahSakit_3.readFeatures(json_JarakRumahSakit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JarakRumahSakit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JarakRumahSakit_3.addFeatures(features_JarakRumahSakit_3);
var lyr_JarakRumahSakit_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JarakRumahSakit_3, 
                style: style_JarakRumahSakit_3,
                interactive: true,
    title: 'Jarak Rumah Sakit<br />\
    <img src="styles/legend/JarakRumahSakit_3_0.png" /> 5 Km<br />\
    <img src="styles/legend/JarakRumahSakit_3_1.png" /> 10 Km<br />\
    <img src="styles/legend/JarakRumahSakit_3_2.png" /> <br />'
        });
var format_Buffer_Rumah_Sakit_4 = new ol.format.GeoJSON();
var features_Buffer_Rumah_Sakit_4 = format_Buffer_Rumah_Sakit_4.readFeatures(json_Buffer_Rumah_Sakit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_Rumah_Sakit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Rumah_Sakit_4.addFeatures(features_Buffer_Rumah_Sakit_4);
var lyr_Buffer_Rumah_Sakit_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffer_Rumah_Sakit_4, 
                style: style_Buffer_Rumah_Sakit_4,
                interactive: true,
                title: '<img src="styles/legend/Buffer_Rumah_Sakit_4.png" /> Buffer_Rumah_Sakit'
            });
var lyr_WordPop_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Word Pop",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WordPop_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12531434.718555, -898484.604577, 12544273.045724, -883704.998257]
                            })
                        });
var lyr_Aksesibilitas_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Aksesibilitas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aksesibilitas_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12531118.193133, -899222.256431, 12544974.324071, -883442.832315]
                            })
                        });
var format_JaringanJalan_LN_7 = new ol.format.GeoJSON();
var features_JaringanJalan_LN_7 = format_JaringanJalan_LN_7.readFeatures(json_JaringanJalan_LN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_LN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_LN_7.addFeatures(features_JaringanJalan_LN_7);
var lyr_JaringanJalan_LN_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalan_LN_7, 
                style: style_JaringanJalan_LN_7,
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_LN_7.png" /> Jaringan Jalan_LN'
            });
var format_Sarana_Kesehatan_PT_8 = new ol.format.GeoJSON();
var features_Sarana_Kesehatan_PT_8 = format_Sarana_Kesehatan_PT_8.readFeatures(json_Sarana_Kesehatan_PT_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Kesehatan_PT_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Kesehatan_PT_8.addFeatures(features_Sarana_Kesehatan_PT_8);
var lyr_Sarana_Kesehatan_PT_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sarana_Kesehatan_PT_8, 
                style: style_Sarana_Kesehatan_PT_8,
                interactive: true,
                title: '<img src="styles/legend/Sarana_Kesehatan_PT_8.png" /> Sarana_Kesehatan_PT'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AdministrasiKotaMalang_AR_1.setVisible(true);lyr_WaktuRumahSakit_2.setVisible(true);lyr_JarakRumahSakit_3.setVisible(true);lyr_Buffer_Rumah_Sakit_4.setVisible(true);lyr_WordPop_5.setVisible(true);lyr_Aksesibilitas_6.setVisible(true);lyr_JaringanJalan_LN_7.setVisible(true);lyr_Sarana_Kesehatan_PT_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AdministrasiKotaMalang_AR_1,lyr_WaktuRumahSakit_2,lyr_JarakRumahSakit_3,lyr_Buffer_Rumah_Sakit_4,lyr_WordPop_5,lyr_Aksesibilitas_6,lyr_JaringanJalan_LN_7,lyr_Sarana_Kesehatan_PT_8];
lyr_AdministrasiKotaMalang_AR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'SHAPE.AREA': 'SHAPE.AREA', 'SHAPE.LEN': 'SHAPE.LEN', 'FID_Batas': 'FID_Batas', 'Id': 'Id', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'FID_bts_de': 'FID_bts_de', 'ID_1': 'ID_1', 'ID_KEC': 'ID_KEC', 'ID_KAB': 'ID_KAB', 'HECTARES': 'HECTARES', 'KELILING': 'KELILING', 'NAMA': 'NAMA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'layer': 'layer', 'path': 'path', });
lyr_WaktuRumahSakit_2.set('fieldAliases', {'Nama': 'Nama', 'contour': 'contour', 'profile': 'profile', 'options': 'options', 'metric': 'metric', });
lyr_JarakRumahSakit_3.set('fieldAliases', {'Nama': 'Nama', 'contour': 'contour', 'profile': 'profile', 'options': 'options', 'metric': 'metric', });
lyr_Buffer_Rumah_Sakit_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Rating': 'Rating', 'Review': 'Review', 'Alamat': 'Alamat', 'Kabupaten_': 'Kabupaten_', 'Provinsi': 'Provinsi', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ORIG_FID': 'ORIG_FID', 'Label_1': 'Label_1', 'BUFF_DIST': 'BUFF_DIST', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JaringanJalan_LN_7.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'REMARK': 'REMARK', 'Shape_Leng': 'Shape_Leng', 'Sumber': 'Sumber', 'Tahun': 'Tahun', 'F_Jalan': 'F_Jalan', 'N_Jalan_12': 'N_Jalan_12', 'Panjang_M': 'Panjang_M', 'Kecamatan': 'Kecamatan', });
lyr_Sarana_Kesehatan_PT_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Rating': 'Rating', 'Review': 'Review', 'Alamat': 'Alamat', 'Kabupaten_': 'Kabupaten_', 'Provinsi': 'Provinsi', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ORIG_FID': 'ORIG_FID', 'Label_1': 'Label_1', });
lyr_AdministrasiKotaMalang_AR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'SHAPE.AREA': 'TextEdit', 'SHAPE.LEN': 'TextEdit', 'FID_Batas': 'Range', 'Id': 'Range', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'FID_bts_de': 'Range', 'ID_1': 'Range', 'ID_KEC': 'Range', 'ID_KAB': 'Range', 'HECTARES': 'TextEdit', 'KELILING': 'TextEdit', 'NAMA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WaktuRumahSakit_2.set('fieldImages', {'Nama': 'TextEdit', 'contour': 'TextEdit', 'profile': 'TextEdit', 'options': 'TextEdit', 'metric': 'TextEdit', });
lyr_JarakRumahSakit_3.set('fieldImages', {'Nama': 'TextEdit', 'contour': 'TextEdit', 'profile': 'TextEdit', 'options': 'TextEdit', 'metric': 'TextEdit', });
lyr_Buffer_Rumah_Sakit_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Rating': 'TextEdit', 'Review': 'TextEdit', 'Alamat': 'TextEdit', 'Kabupaten_': 'TextEdit', 'Provinsi': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Label_1': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JaringanJalan_LN_7.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'REMARK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Sumber': 'TextEdit', 'Tahun': 'TextEdit', 'F_Jalan': 'TextEdit', 'N_Jalan_12': 'TextEdit', 'Panjang_M': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_Sarana_Kesehatan_PT_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Rating': 'TextEdit', 'Review': 'TextEdit', 'Alamat': 'TextEdit', 'Kabupaten_': 'TextEdit', 'Provinsi': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Label_1': 'TextEdit', });
lyr_AdministrasiKotaMalang_AR_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'SHAPE.AREA': 'no label', 'SHAPE.LEN': 'no label', 'FID_Batas': 'no label', 'Id': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'FID_bts_de': 'no label', 'ID_1': 'no label', 'ID_KEC': 'no label', 'ID_KAB': 'no label', 'HECTARES': 'no label', 'KELILING': 'no label', 'NAMA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_WaktuRumahSakit_2.set('fieldLabels', {'Nama': 'no label', 'contour': 'inline label', 'profile': 'no label', 'options': 'no label', 'metric': 'no label', });
lyr_JarakRumahSakit_3.set('fieldLabels', {'Nama': 'no label', 'contour': 'inline label', 'profile': 'no label', 'options': 'no label', 'metric': 'no label', });
lyr_Buffer_Rumah_Sakit_4.set('fieldLabels', {'OBJECTID': 'no label', 'Nama': 'no label', 'Jenis': 'no label', 'Rating': 'no label', 'Review': 'no label', 'Alamat': 'no label', 'Kabupaten_': 'no label', 'Provinsi': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ORIG_FID': 'no label', 'Label_1': 'no label', 'BUFF_DIST': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JaringanJalan_LN_7.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label', 'ref': 'no label', 'type': 'no label', 'REMARK': 'inline label', 'Shape_Leng': 'no label', 'Sumber': 'no label', 'Tahun': 'no label', 'F_Jalan': 'no label', 'N_Jalan_12': 'no label', 'Panjang_M': 'no label', 'Kecamatan': 'no label', });
lyr_Sarana_Kesehatan_PT_8.set('fieldLabels', {'OBJECTID': 'inline label', 'Nama': 'inline label', 'Jenis': 'inline label', 'Rating': 'inline label', 'Review': 'inline label', 'Alamat': 'inline label', 'Kabupaten_': 'no label', 'Provinsi': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ORIG_FID': 'no label', 'Label_1': 'no label', });
lyr_Sarana_Kesehatan_PT_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});