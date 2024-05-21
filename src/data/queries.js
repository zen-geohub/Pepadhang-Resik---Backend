const getPoint = `
SELECT json_build_object(
	'type',			'Feature',
	'geometry',		ST_AsGeoJSON(geom)::json
	
) As reklamept
FROM public."reklame_pt_84";`

const getClearArea = `
SELECT json_build_object(
	'type',			'Feature',
	'geometry',		ST_AsGeoJSON(geom)::json
) As cleararea
FROM public."clear_area_full_84_fix";`

const getSimpang = `
SELECT json_build_object(
	'type',			'Feature',
	'geometry',		ST_AsGeoJSON(geom)::json
) As simpang
FROM public."simpang_full_ar_84_fix";`

const getZonaKhusus = `
SELECT json_build_object(
	'type',			'Feature',
	'geometry',		ST_AsGeoJSON(geom)::json
) As zonakhusus
FROM public."zona_khusus_full_84_fix";`

// dump
// 'properties', 	json_build_object(
// 	'gid', gid,
// 	'name', name,
// 	'folderpath', folderpath,
// 	'popupinfo', popupinfo,
// 	'bujur', koordinat_,
// 	'lintang', koordinat1,
// 	'tanggal_ke', tanggal_ke,
// 	'no_surat', no__surat,
// 	'tanggal', tanggal,
// 	'kepada', kepada,
// 	'a_n_pemohon', a_n_pemoho,
// 	'alamat_tit', alamat_tit,
// 	'jenis', jenis,
// 	'simpang_no', simpang_no,
// 	'koordinat', koordinat,
// 	'ukuran', ukuran,
// 	'ket', ket,
// 	'panjang', pj,
// 	'lebar', lbr,
// 	'luas', luas,
// 	'kategori_u', kategori_u,
// 	'penggarap', penggarap,
// 	'naskah', naskah,
// 	'zona', zona,
// 	'catatan', catatan,
// 	'tahun', tahun
// )

module.exports = {
  getPoint,
	getClearArea,
	getSimpang,
	getZonaKhusus,
}