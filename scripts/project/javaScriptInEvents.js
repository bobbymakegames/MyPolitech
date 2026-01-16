

const scriptsInEvents = {

	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		const now = new Date();
		const day = String(now.getDate()).padStart(2, '0');
		const month = String(now.getMonth() + 1).padStart(2, '0');
		window.c3_date_result = day + '.' + month;
	},

	async EventSheet1_Event1_Act4(runtime, localVars)
	{
		     // Начало отсчёта: понедельник 19 января 2026, 00:00:00
		     const startDate = new Date(2026, 0, 19); // Месяцы в JS: 0=янв, 1=фев...
		     const now = new Date();
		
		     // Обнуляем время, чтобы сравнивать только дни
		     startDate.setHours(0, 0, 0, 0);
		     now.setHours(0, 0, 0, 0);
		
		     // Разница в миллисекундах
		     const diffMs = now - startDate;
		
		     // Если сегодня раньше 19 января — можно обработать отдельно (опционально)
		     if (diffMs < 0) {
		       window.c3_week_color = 'unknown'; // или 'unknown'
		     } else {
		       const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
		       const weeks = Math.floor(days / 7);
		       window.c3_week_color = (weeks % 2 === 0) ? 'red' : 'blue';
		     }
	},

	async EventSheet1_Event2_Act1(runtime, localVars)
	{
		if (!window.Telegram) {
		       var script = document.createElement('script');
		       script.src = 'https://telegram.org/js/telegram-web-app.js';
		       script.onload = function() {
		         window.c3_tg_ready = true;
		       };
		       document.head.appendChild(script);
		     } else {
		       window.c3_tg_ready = true;
		     }
	},

	async EventSheet1_Event2_Act2(runtime, localVars)
	{
		if (window.Telegram && Telegram.WebApp) {
		       const user = Telegram.WebApp.initDataUnsafe?.user;
		       if (user && user.username) {
		         window.c3_username = user.username;
		       } else {
		         window.c3_username = 'аноним';
		       }
		     } else {
		       window.c3_username = 'не в Telegram';
		     }
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
