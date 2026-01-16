const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.SVGPicture,
		C3.Behaviors.Anchor,
		C3.Plugins.Text,
		C3.Plugins.Browser,
		C3.Plugins.AJAX,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.JavaScriptInEvents.EventSheet1_Event1_Act1,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Browser.Exps.ExecJS,
		C3.Plugins.Text.Acts.SetText,
		C3.JavaScriptInEvents.EventSheet1_Event1_Act4,
		C3.Plugins.AJAX.Acts.Request,
		C3.JavaScriptInEvents.EventSheet1_Event2_Act1,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.SVGPicture.Acts.SetDefaultColor,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.Compare,
		C3.JavaScriptInEvents.EventSheet1_Event9_Act1,
		C3.Plugins.System.Cnds.Else
	];
};
self.C3_JsPropNameTable = [
	{Touch: 0},
	{Anchor: 0},
	{Plaseholder: 0},
	{Elipse_UpL: 0},
	{Elipse_UpR: 0},
	{Date_UI: 0},
	{Date_Text: 0},
	{Browser: 0},
	{Icon_Spisok: 0},
	{Text: 0},
	{AJAX: 0},
	{CurrentDateStr: 0},
	{Color: 0},
	{CSVData: 0},
	{NamesList: 0}
];

self.InstanceType = {
	Touch: class extends self.IInstance {},
	Plaseholder: class extends self.ISVGPictureInstance {},
	Elipse_UpL: class extends self.ISVGPictureInstance {},
	Elipse_UpR: class extends self.ISVGPictureInstance {},
	Date_UI: class extends self.ISVGPictureInstance {},
	Date_Text: class extends self.ITextInstance {},
	Browser: class extends self.IInstance {},
	Icon_Spisok: class extends self.ISVGPictureInstance {},
	Text: class extends self.ITextInstance {},
	AJAX: class extends self.IInstance {}
}