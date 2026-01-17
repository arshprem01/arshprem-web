const translations = {
    en: {
        "nav.about": "About Me",
        "nav.works": "MY WORKS",
        "nav.certs": "Certificates",
        "nav.blog": "Blog",
        "nav.contact": "Contact Me",
        "nav.resume": "Resume",
        "hero.greeting": "Hi, I'm Arsh",
        "hero.title": "Software<br />Engineer",
        "hero.intro": "Hello, I'm <strong class=\"text-primary font-semibold\">Arsh Prem</strong>, a software engineer passionate about building scalable, production-ready applications. My core expertise lies in <strong class=\"text-primary font-semibold\">AI, backend, and full-stack development</strong>.<br /><br />I thrive on <strong class=\"text-primary font-semibold\">solving complex problems</strong>, transforming innovative ideas into robust technical solutions, and driving impact within collaborative, high-growth environments.",
        "stats.repos": "Repositories",
        "stats.years": "Years Coding",
        "stats.committed": "Committed",
        "about.title": "About Me",
        "about.connect": "Connect",
        "about.bio1": "Hi! I'm Arsh. I believe that good code is like good design — invisible but powerful.",
        "about.bio2": "My journey into coding started with curiosity and has evolved into a disciplined pursuit of building scalable, user-centric applications. I combine technical depth in Ruby on Rails and React with a sharp eye for minimalist aesthetics.",
        "about.exp.title": "Experience",
        "about.skills.title": "Technical Skills",
        "exp.student": "B.Tech in Computer Science",
        "exp.intern1": "Software Engineer Intern",
        "exp.intern2": "Tech Intern",
        "exp.mun": "President, Model United Nations (MUN) Club",
        "projects.subheader": "My Works",
        "projects.title": "My Works",
        "projects.desc": "A curation of digital products, websites, and experiences I've crafted.",
        "certs.subheader": "Certificates",
        "certs.title": "Certificates",
        "certs.desc": "Validations of my expertise and commitment to continuous learning.",
        "blog.subheader": "Blog",
        "blog.title": "Writing",
        "blog.desc": "Thoughts on technology, software engineering, and the future of AI.",
        "contact.title": "Get in Touch",
        "contact.desc": "Have a project in mind or just want to say hi? I'd love to hear from you.",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Message",
        "contact.form.send": "Send Message"
    },
    jp: {
        "nav.about": "私について",
        "nav.works": "作品",
        "nav.certs": "認定",
        "nav.blog": "ブログ",
        "nav.contact": "お問い合わせ",
        "nav.resume": "履歴書",
        "hero.greeting": "こんにちは、アルシュです",
        "hero.title": "ソフトウェア<br />エンジニア",
        "hero.intro": "こんにちは、<strong class=\"text-primary font-semibold\">アルシュ・プレム</strong>です。スケーラブルで本番運用可能なアプリケーションの構築に情熱を注ぐソフトウェアエンジニアです。私の主な専門分野は<strong class=\"text-primary font-semibold\">AI、バックエンド、フルスタック開発</strong>です。<br /><br />私は<strong class=\"text-primary font-semibold\">複雑な問題の解決</strong>、革新的なアイデアを堅牢な技術ソリューションに変えること、そして協力的で成長著しい環境でインパクトを与えることに喜びを感じています。",
        "stats.repos": "リポジトリ",
        "stats.years": "コーディング歴",
        "stats.committed": "コミット率",
        "about.title": "私について",
        "about.connect": "つながる",
        "about.bio1": "こんにちは！アルシュです。良いコードとは、良いデザインのようなもので、目に見えないけれど強力なものだと信じています。",
        "about.bio2": "私のコーディングへの旅は好奇心から始まり、スケーラブルでユーザー中心のアプリケーションを構築するという規律ある追求へと進化しました。私はRuby on RailsとReactの技術的な深さと、ミニマリストの美学に対する鋭い目を組み合わせています。",
        "about.exp.title": "経験",
        "about.skills.title": "技術スキル",
        "exp.student": "コンピュータサイエンス工学士",
        "exp.intern1": "ソフトウェアエンジニア インターン",
        "exp.intern2": "テック インターン",
        "exp.mun": "モデル国連（MUN）クラブ 会長",
        "projects.subheader": "作品",
        "projects.title": "私の作品",
        "projects.desc": "私が制作したデジタル製品、ウェブサイト、体験の厳選集。",
        "certs.subheader": "認定",
        "certs.title": "認定証",
        "certs.desc": "私の専門知識と継続的な学習への取り組みの証。",
        "blog.subheader": "ブログ",
        "blog.title": "執筆",
        "blog.desc": "テクノロジー、ソフトウェアエンジニアリング、そしてAIの未来についての考察。",
        "contact.title": "お問い合わせ",
        "contact.desc": "プロジェクトの相談や、ただの挨拶でも構いません。ご連絡をお待ちしています。",
        "contact.form.name": "名前",
        "contact.form.email": "メールアドレス",
        "contact.form.subject": "件名",
        "contact.form.message": "メッセージ",
        "contact.form.send": "メッセージを送信"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    // Update active state of buttons if they exist
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('font-bold', 'text-primary');
            btn.classList.remove('text-gray-400');
        } else {
            btn.classList.remove('font-bold', 'text-primary');
            btn.classList.add('text-gray-400');
        }
    });

    // Update text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if translation contains HTML tags
            if (translations[lang][key].includes('<')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}
