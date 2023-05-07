const userLang = navigator.language; 
// console.log(userLang);

const speed = 30;
let text = [
	'To the computer pioneers and cypherpunks who have made great contributions to human freedom and development:',
	'',
	'Thank you for your groundbreaking work in the field of computer and encryption technology. Your contributions have provided a solid foundation for the development and progress of our modern society. Your work not only enabled the exponential growth of computer technology, but also provided more freedom and opportunities for humanity.',
	'',
	'Your foresight and courage have enabled us to have decentralized technologies and monetary systems, allowing us to have control over our own property and identity. Your innovative thinking and creative spirit have enabled us to better utilize technology to build a more open and free society.',
	'',
	'We hereby express our highest respect and gratitude to you for all the contributions you have made to human freedom, openness, and technological progress. Your spirit will always be worthy of our learning and following, and continue to promote the progress of technology and society.',
	'',
	'- CryptoBigs Team',
	'........................................................................................................................................................................................................................'
];

if(userLang.includes('zh-TW') || userLang.includes('zh-HK')) {
	text = [
		'致敬計算機先驅和密碼朋克，感謝你們為人類自由和發展做出的巨大貢獻：',
		'',
		'感謝你們在計算機和加密技術領域開創性的工作。你們的貢獻為我們現代社會的發展和進步提供了堅實的基礎。你們的工作不僅促進了計算機技術的指數增長，還為人類提供了更多的自由和機會。',
		'',
		'你們的遠見和勇氣讓我們擁有了去中心化的技術和貨幣系統，使我們能夠掌控自己的資產和身份。你們的創新思維和創造精神使我們能夠更好地利用技術來建設一個更開放、更自由的社會。',
		'',
		'我們在此向你們表達最高的敬意和感激之情，感謝你們為人類的自由、開放和科技進步所做出的所有貢獻。你們的精神將永遠值得我們學習和追隨，並繼續推動技術和社會的進步。',
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];
} else if(userLang.includes('zh-CN')) {
	text = [
		'致敬计算机先驱和密码朋克，感谢你们为人类自由和发展做出的巨大贡献：',
		'',
		'感谢你们在计算机和加密技术领域开创性的工作。你们的贡献为我们现代社会的发展和进步提供了坚实的基础。你们的工作不仅促进了计算机技术的指数增长，还为人类提供了更多的自由和机会。',
		'',
		'你们的远见和勇气让我们拥有了去中心化的技术和货币系统，使我们能够掌控自己的资产和身份。你们的创新思维和创造精神使我们能够更好地利用技术来建设一个更开放、更自由的社会。',
		'',
		'我们在此向你们表达最高的敬意和感激之情，感谢你们为人类的自由、开放和科技进步所做出的所有贡献。你们的精神将永远值得我们学习和追随，并继续推动技术和社会的进步。',
		'',
		'- CryptoBigs',
		'........................................................................................................................................................................................................................'
	];
} else if(userLang.includes('fr')) {
	text = [
		`Aux pionniers de l'informatique et aux cypherpunks qui ont apporté de grandes contributions à la liberté et au développement humains :`,
		'',
		`Nous vous remercions pour votre travail révolutionnaire dans le domaine de l'informatique et de la technologie de chiffrement. Vos contributions ont fourni une base solide pour le développement et le progrès de notre société moderne. Votre travail a non seulement permis la croissance exponentielle de la technologie informatique, mais a également offert plus de liberté et d'opportunités pour l'humanité.`,
		'',
		`Votre clairvoyance et votre courage nous ont permis d'avoir des technologies et des systèmes monétaires décentralisés, nous permettant de contrôler notre propre propriété et identité. Votre pensée innovante et votre esprit créatif nous ont permis de mieux utiliser la technologie pour construire une société plus ouverte et libre.`,
		'',
		`Nous exprimons par la présente notre plus grand respect et notre gratitude pour toutes les contributions que vous avez apportées à la liberté humaine, à l'ouverture et au progrès technologique. Votre esprit sera toujours digne de notre apprentissage et de notre suivi, et continuera à promouvoir le progrès de la technologie et de la société.`,
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];	
} else if(userLang.includes('ja')) {
	text = [
		'人類の自由と発展に大きな貢献をしたコンピューターの先駆者とサイファーパンクに捧げます：',
		'',
		'コンピューターおよび暗号化技術分野における画期的な業績に感謝します。あなた方の貢献は現代社会の発展と進歩にとって堅固な基盤を提供してくれました。あなた方の業績は、コンピューター技術の指数関数的な成長を促進するだけでなく、人類にとってより多くの自由と機会を提供してくれました。',
		'',
		'あなた方の先見性と勇気によって、分散型技術と通貨システムを持つことができ、自分たちの財産とアイデンティティをコントロールすることができるようになりました。あなた方の革新的な思考と創造的な精神によって、技術をより良く活用して、よりオープンで自由な社会を築くことができました。',
		'',
		'ここに、人類の自由、オープンさ、技術的進歩に対してあなた方が果たしてきたすべての貢献に対して、最高の敬意と感謝を表明いたします。あなた方の精神は常に私たちの学びと追随に値するものであり、技術と社会の進歩を促進し続けることでしょう。',
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];
} else if(userLang.includes('es')) {
	text = [
		'A los pioneros de la informática y a los cypherpunks que han hecho grandes contribuciones a la libertad y el desarrollo humano:',
		'',
		'Gracias por su trabajo innovador en el campo de la informática y la tecnología de encriptación. Sus contribuciones han proporcionado una base sólida para el desarrollo y progreso de nuestra sociedad moderna. Su trabajo no solo ha permitido el crecimiento exponencial de la tecnología informática, sino que también ha proporcionado más libertad y oportunidades para la humanidad.',
		'',
		'Su visión y coraje nos han permitido tener tecnologías y sistemas monetarios descentralizados, permitiéndonos tener control sobre nuestra propia propiedad e identidad. Su pensamiento innovador y espíritu creativo nos han permitido utilizar mejor la tecnología para construir una sociedad más abierta y libre.',
		'',
		'Por la presente, expresamos nuestro más alto respeto y gratitud por todas las contribuciones que han hecho a la libertad humana, la apertura y el progreso tecnológico. Su espíritu siempre será digno de nuestro aprendizaje y seguimiento, y continuará promoviendo el progreso de la tecnología y la sociedad.',
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];
} else if(userLang.includes('ko')) {
	text = [
		'인간의 자유와 발전에 큰 공헌을 한 컴퓨터 선구자들과 사이퍼펑크들에게 바칩니다:',
		'',
		'컴퓨터 및 암호화 기술 분야에서의 뛰어난 업적에 감사드립니다. 여러분의 기여는 현대 사회의 발전과 진보에 견고한 기반을 제공해주었습니다. 여러분의 노력은 컴퓨터 기술의 지수적 성장을 이끄는 것뿐만 아니라, 인류에게 더 많은 자유와 기회를 제공해주었습니다.',
		'',
		'여러분의 선견지명과 용기로 우리는 분산 기술과 화폐 시스템을 갖게 되었고, 이는 우리 자신의 재산과 신원을 통제할 수 있게 해주었습니다. 여러분의 혁신적인 사고와 창의적인 정신은 우리가 기술을 더욱 잘 활용하여 더욱 개방적이고 자유로운 사회를 구축할 수 있도록 해주었습니다.',
		'',
		'이 자리를 빌어 여러분이 인간의 자유, 개방성, 기술적 진보를 위해 이룬 모든 공헌에 대한 최고의 존경과 감사를 표합니다. 여러분의 영혼은 항상 우리의 배움과 추종에 가치 있을 뿐만 아니라, 기술과 사회의 진보를 계속 촉진할 것입니다.',
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];	
} else if(userLang.includes('pt')) {
	text = [
		'Para os pioneiros da computação e cypherpunks que fizeram grandes contribuições para a liberdade e desenvolvimento humano:',
		'',
		'Obrigado pelo seu trabalho pioneiro no campo da computação e tecnologia de criptografia. Suas contribuições forneceram uma base sólida para o desenvolvimento e progresso da nossa sociedade moderna. Seu trabalho não só permitiu o crescimento exponencial da tecnologia da computação, mas também proporcionou mais liberdade e oportunidades para a humanidade.',
		'',
		'Sua visão e coragem nos permitiram ter tecnologias e sistemas monetários descentralizados, permitindo-nos ter controle sobre nossa própria propriedade e identidade. Seu pensamento inovador e espírito criativo nos permitiram utilizar melhor a tecnologia para construir uma sociedade mais aberta e livre.',
		'',
		'Por meio desta, expressamos nosso mais alto respeito e gratidão a vocês por todas as contribuições que fizeram para a liberdade humana, abertura e progresso tecnológico. Seu espírito sempre será digno de nossa aprendizagem e seguimento, e continuará a promover o progresso da tecnologia e da sociedade.',
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];
} else if(userLang.includes('ru')) {
	text = [
		'Для пионеров компьютерной технологии и киберпанков, которые внесли большой вклад в свободу и развитие человечества:',
		'',
		'Благодарим вас за революционную работу в области компьютерной и криптографической технологии. Ваши достижения обеспечили прочный фундамент для развития и прогресса нашего современного общества. Ваша работа позволила не только экспоненциальный рост компьютерных технологий, но также обеспечила больше свободы и возможностей для человечества.',
		'',
		'Ваше предвидение и мужество позволили нам иметь децентрализованные технологии и денежные системы, позволяющие нам контролировать нашу собственность и идентичность. Ваше инновационное мышление и творческий дух позволяют нам лучше использовать технологии для построения более открытого и свободного общества.',
		'',
		'Мы выражаем вам наше высочайшее уважение и благодарность за все, что вы сделали для свободы, открытости и технологического прогресса человечества. Ваш дух всегда будет достоин нашего обучения и следования, и будет продолжать способствовать прогрессу технологий и общества.',
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];
	
} else if(userLang.includes('uk')) {
	text = [
		`До піонерів комп'ютерної технології та кіберпанків, які внесли великий внесок у свободу та розвиток людства:`,
		'',
		`Дякуємо вам за революційну роботу в галузі комп'ютерних технологій та шифрування. Ваші внески стали міцним фундаментом для розвитку та прогресу нашого сучасного суспільства. Ваша робота не тільки дозволила експоненційний ріст комп'ютерних технологій, але також забезпечила більше свободи та можливостей для людства.`,
		'',
		`Ваші передбачення та мужність дозволили нам мати децентралізовані технології та грошові системи, що дозволяють нам контролювати нашу власність та ідентичність. Ваше інноваційне мислення та творчий дух дозволили нам краще використовувати технології для побудови більш відкритого та вільного суспільства.`,
		'',
		`Ми висловлюємо вам наш найвищий шанобливий та вдячний настрій за всі внески, які ви зробили для свободи, відкритості та технологічного прогресу людства. Ваш дух завжди буде вартий нашого навчання та наслідування та продовжуватиме сприяти прогресу технологій та суспільства.`,
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];
	
} else if(userLang.includes('th')) {
	text = [
		'สำหรับผู้บุกเบิกด้านเทคโนโลยีคอมพิวเตอร์และซายเฟอร์พังค์ที่มีส่วนช่วยสร้างเสรีภาพและพัฒนามนุษยชาติอย่างมาก',
		'',
		'ขอบคุณสำหรับงานที่เป็นเบื้องต้นในด้านเทคโนโลยีคอมพิวเตอร์และการเข้ารหัสของคุณ ผลงานของคุณได้ให้เรามีพื้นฐานที่แน่นหนาสำหรับการพัฒนาและความก้าวหน้าของสังคมสมัยใหม่ของเรา งานของคุณไม่เพียงช่วยให้เทคโนโลยีคอมพิวเตอร์เติบโตอย่างเร็วแต่ยังให้เสรีภาพและโอกาสมากขึ้นสำหรับมนุษยชาติ',
		'',
		'ความคาดหมายและความกล้าหาญของคุณได้เป็นตัวเปิดโอกาสให้เรามีเทคโนโลยีและระบบเงินที่กระจายอำนาจ ช่วยให้เรามีการควบคุมสิ่งที่เป็นของตนเองและเอกลักษณ์ การคิดอย่างนวัตกรรมและจินตนาการสร้างสรรค์ของคุณได้เปิดโอกาสให้เราใช้เทคโนโลยีได้ดียิ่งขึ้นเพื่อสร้างสังคมที่เปิดกว้างและเสรี',
		'',
		'เราขอแสดงความเคารพและขอบคุณอย่างสูงสุดให้กับท่านสำหรับการมีส่วนช่วยสร้างเสรีภาพ ความเปิดเผยและความก้าวหน้าทางเทคโนโลยีสำหรับมนุษยชาติ จิตวิญญาณของท่านจะเป็นค่ายธรรมสำหรับเราในการเรียนรู้และติดตาม และยังส่งเสริมความก้าวหน้าของเทคโนโลยีและสังคมต่อไป',
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];
	
} else if(userLang.includes('vi')) {
	text = [
		'Đến những người tiên phong máy tính và cypherpunks đã đóng góp to lớn cho sự tự do và phát triển của con người.',
		'',
		'Cảm ơn bạn vì công việc đột phá của bạn trong lĩnh vực công nghệ máy tính và mã hóa. Đóng góp của bạn đã cung cấp nền tảng vững chắc cho sự phát triển và tiến bộ của xã hội hiện đại của chúng ta. Công việc của bạn không chỉ cho phép sự tăng trưởng mũ lân của công nghệ máy tính, mà còn cung cấp nhiều tự do và cơ hội cho nhân loại.',
		'',
		'Tầm nhìn và sự dũng cảm của bạn đã giúp chúng tôi có được các công nghệ và hệ thống tiền tệ phi tập trung, cho phép chúng tôi kiểm soát tài sản và danh tính của chính mình. Tư duy sáng tạo và tinh thần sáng tạo của bạn đã giúp chúng tôi tận dụng công nghệ tốt hơn để xây dựng một xã hội mở và tự do hơn.',
		'',
		'Chúng tôi xin thể hiện sự tôn trọng và biết ơn cao nhất đối với những đóng góp mà quý vị đã đưa ra cho sự tự do, sự mở cửa và tiến bộ về công nghệ của con người. Tinh thần của quý vị sẽ luôn đáng để chúng tôi học hỏi và theo đuổi, và tiếp tục thúc đẩy tiến bộ của công nghệ và xã hội.',
		'',
		'- CryptoBigs Team',
		'........................................................................................................................................................................................................................'
	];
	
}


let i = 0;
let j = 0;
let k = 0;
let direction = 1;
function type() {
	if (i < text.length) {
		if (j < text[i].length) {
			document.getElementById('content').innerHTML += text[i].charAt(j);
			j++;
		} else {
			document.getElementById('content').innerHTML += '<br>';
			i++;
			j = 0;
		}
	} else {
		if (k >= text.length) {
			k = 0;
		}
		document.getElementById('content').innerHTML = '';
		i = 0;
		j = 0;
		direction = 1;
	}
	if (direction === 1) {
		setTimeout(type, speed);
	} else {
		setTimeout(backspace, speed);
	}
}

function backspace() {
	if (i >= 0) {
		if (j >= 0) {
			let str = document.getElementById('content').innerHTML;
			str = str.substring(0, str.length - 1);
			document.getElementById('content').innerHTML = str;
			j--;
		} else {
			document.getElementById('content').innerHTML += '<br>';
			i--;
			j = text[i].length;
		}
	} else {
		direction = 1;
		k++;
	}
	if (direction === 1) {
		setTimeout(type, speed);
	} else {
		setTimeout(backspace, speed);
	}
}

type();

function brighten(img) {
	img.style.filter = 'brightness(150%)';
}

function normalize(img) {
	img.style.filter = 'brightness(100%)';
}