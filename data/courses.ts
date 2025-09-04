import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'html',
    title: {
      ja: 'HTMLコース',
      en: 'HTML Course',
      zh: 'HTML课程',
    },
    description: {
      ja: 'ウェブページの部品を作る言語',
      en: 'The language for creating web page components',
      zh: '用于创建网页组件的语言',
    },
    accentColor: 'border-t-sky',
    bgColor: 'bg-sky',
    quests: [
      {
        id: 'html-1',
        type: 'html',
        title: { ja: 'ウェブページの骨格を作ろう', en: 'Create a Web Page Skeleton', zh: '创建网页骨架' },
        goal: { ja: '<h1>, <p>, <ul>, <li>タグを学ぶ', en: 'Learn <h1>, <p>, <ul>, <li> tags', zh: '学习<h1>、<p>、<ul>、<li>标签' },
        duration: 5,
        points: 100,
        problem: {
          ja: 'ウェブページに、自己紹介の文章を表示してみましょう。\n\n1. `<h1>`タグを使って、一番大きな見出しとして「初めてのウェブページ」と表示してください。\n2. `<p>`タグを使って、「これは私の自己紹介ページです。」という文章の段落を作ってください。\n3. `<ul>`と`<li>`タグを使って、「趣味は読書です。」と「特技はプログラミングです。」の2つの項目を持つ箇条書きリストを作りましょう。',
          en: 'Let\'s display a self-introduction on a web page.\n\n1. Use the `<h1>` tag to display "My First Web Page" as the main heading.\n2. Use the `<p>` tag to create a paragraph with the text "This is my self-introduction page."\n3. Use `<ul>` and `<li>` tags to create a bulleted list with two items: "My hobby is reading." and "My skill is programming."',
          zh: '让我们在网页上显示一段自我介绍。\n\n1. 使用`<h1>`标签，将“我的第一个网页”作为主标题显示。\n2. 使用`<p>`标签，创建一个段落，内容为“这是我的自我介绍页面。”\n3. 使用`<ul>`和`<li>`标签，创建一个包含两个项目的无序列表：“我的爱好是阅读。”和“我的特长是编程。”',
        },
        hint: {
          ja: 'タグは < と > で囲みます。<h1> のような開始タグで始めたら、必ず </h1> のような終了タグで閉じるのを忘れないでくださいね。箇条書きの項目 <li> は、リスト全体を囲む <ul> の中に入れます。',
          en: 'Enclose tags with < and >. When you start with an opening tag like <h1>, don\'t forget to close it with a corresponding closing tag like </h1>. List items <li> go inside the list container <ul>.',
          zh: '记得用 < 和 > 将标签括起来。当你使用像 <h1> 这样的开始标签时，别忘了用像 </h1> 这样的结束标签来关闭它。列表项 <li> 应该放在列表容器 <ul> 的内部。',
        },
        solution: `<h1>初めてのウェブページ</h1>\n<p>これは私の自己紹介ページです。</p>\n<ul>\n  <li>趣味は読書です。</li>\n  <li>特技はプログラミングです。</li>\n</ul>`,
        solutionComment: { ja: '', en: '', zh: ''}
      },
      {
        id: 'html-2',
        type: 'html',
        title: { ja: '画像とリンクを追加しよう', en: 'Add Images and Links', zh: '添加图片和链接' },
        goal: { ja: '<a>と<img>タグを学ぶ', en: 'Learn <a> and <img> tags', zh: '学习<a>和<img>标签' },
        duration: 6,
        points: 100,
        problem: {
            ja: '作ったページを少しにぎやかにしてみましょう。\n\n1. `<a>`タグを使い、「Google」という文字をクリックすると https://www.google.com に移動するリンクを作成してください。\n2. `<img>`タグを使い、`https://picsum.photos/200` というURLの画像を表示してください。もし画像が表示されなかったときのために、alt属性を使って「サンプル画像」という説明文も設定しましょう。',
            en: 'Let\'s make the page a bit more lively.\n\n1. Using the `<a>` tag, create a link with the text "Google" that navigates to https://www.google.com.\n2. Using the `<img>` tag, display an image from the URL `https://picsum.photos/200`. Also, set the alt attribute to "Sample Image" as a description in case the image doesn\'t load.',
            zh: '让我们把页面做得更生动一些。\n\n1. 使用`<a>`标签创建一个文本为“Google”的链接，点击后可以跳转到 https://www.google.com。\n2. 使用`<img>`标签显示一个来自 `https://picsum.photos/200` 网址的图片。同时，设置alt属性为“示例图片”，以便在图片无法加载时显示描述文字。',
        },
        hint: {
            ja: 'リンク先のURLは href="" のダブルクォーテーションの中に書きます。画像ファイルのURLは src="" の中に書きましょう。属性は src="image.png" のように、属性名="値" の形で書きます。',
            en: 'The link\'s destination URL goes inside the double quotes of the href="" attribute. The image file URL goes inside src="". Attributes are written in the attribute="value" format, like src="image.png".',
            zh: '链接的目标URL应写在 href="" 的双引号内。图像的URL应写在 src="" 的双引号内。属性的书写格式是 属性名="值"，例如 src="image.png"。',
        },
        solution: `<a href="https://www.google.com">Google</a>\n<img src="https://picsum.photos/200" alt="サンプル画像">`,
        solutionComment: { ja: '', en: '', zh: ''}
      },
      {
        id: 'html-3',
        type: 'html',
        title: { ja: '簡単なフォームを作ろう', en: 'Create a Simple Form', zh: '创建简单的表单' },
        goal: { ja: '<form>, <label>, <input>, <button>を学ぶ', en: 'Learn <form>, <label>, <input>, <button>', zh: '学习<form>、<label>、<input>、<button>' },
        duration: 7,
        points: 100,
        problem: {
            ja: 'ユーザーが名前を入力できるフォームを作ってみましょう。\n\n1. `<label>`タグを使って、「名前:」というラベルを表示してください。\n2. `<input type="text">`を使って、一行のテキストが入力できるボックスを設置してください。\n3. `<label>`のfor属性と`<input>`のid属性に、同じ名前 "username" を設定して、2つを関連付けましょう。\n4. 最後に、`<button type="submit">`を使って、「送信」と書かれたボタンを配置してください。',
            en: 'Let\'s create a form where users can enter their name.\n\n1. Use the `<label>` tag to display the label "Name:".\n2. Use `<input type="text">` to place a single-line text input box.\n3. Associate the label and input by setting the `for` attribute on `<label>` and the `id` attribute on `<input>` to the same name: "username".\n4. Finally, place a button with the text "Submit" using `<button type="submit">`.',
            zh: '让我们创建一个用户可以输入姓名的表单。\n\n1. 使用`<label>`标签显示标签“姓名:”。\n2. 使用`<input type="text">`放置一个单行文本输入框。\n3. 通过将`<label>`的`for`属性和`<input>`的`id`属性设置为相同的名称 "username"，将它们关联起来。\n4. 最后，使用`<button type="submit">`放置一个文本为“提交”的按钮。',
        },
        hint: {
            ja: '<label> の for 属性に書いた名前と、<input> の id 属性に書いた名前は、一文字も間違えずにピッタリ同じにする必要があります。これが二つを繋げるカギです。',
            en: 'The name written in the <label>\'s for attribute must be exactly the same as the name written in the <input>\'s id attribute, without any typos. This is the key to connecting them.',
            zh: '<label> 的 for 属性中写的名字必须和 <input> 的 id 属性中写的名字完全一致，一个字母都不能错。这是将它们连接起来的关键。',
        },
        solution: `<form>\n  <label for="username">名前:</label>\n  <input type="text" id="username">\n  <button type="submit">送信</button>\n</form>`,
        solutionComment: { ja: '', en: '', zh: ''}
      }
    ],
  },
  {
    id: 'css',
    title: {
      ja: 'CSSコース',
      en: 'CSS Course',
      zh: 'CSS课程',
    },
    description: {
      ja: 'ウェブページをデザインする言語',
      en: 'The language for designing web pages',
      zh: '用于设计网页的语言',
    },
    accentColor: 'border-t-lavender',
    bgColor: 'bg-lavender',
    quests: [
      {
        id: 'css-1',
        type: 'css',
        title: { ja: '文字と背景に色をつけよう', en: 'Coloring Text and Backgrounds', zh: '为文本和背景上色' },
        goal: { ja: 'color と background-color を学ぶ', en: 'Learn color and background-color', zh: '学习 color 和 background-color' },
        duration: 5,
        points: 100,
        baseHtml: `<h1 class="title">My Title</h1>\n<div class="container">\n  <p>Some content here.</p>\n</div>`,
        problem: {
            ja: 'HTML要素に色をつけてデザインしてみましょう。\n\n1. classが"title"の要素の文字の色を `#222222`（濃い灰色）にしてください。\n2. classが"container"の要素の背景の色を `#f0f8ff`（薄い水色）にしてください。',
            en: 'Let\'s add some color to our HTML elements.\n\n1. Change the text color of the element with the class "title" to `#222222` (a dark gray).\n2. Change the background color of the element with the class "container" to `#f0f8ff` (a light blue).',
            zh: '让我们为HTML元素添加一些颜色来设计页面。\n\n1. 将类名为“title”的元素的文本颜色设置为`#222222`（深灰色）。\n2. 将类名为“container”的元素的背景颜色设置为`#f0f8ff`（淡蓝色）。',
        },
        hint: {
            ja: 'CSSで class を指定するときは、名前の前にドット (.) をつけるのを忘れないようにしましょう。例: .title { ... }',
            en: 'When targeting a class in CSS, don\'t forget to put a dot (.) before the name. For example: .title { ... }',
            zh: '在CSS中指定 class 时，不要忘记在名字前面加上一个点 (.)。例如：.title { ... }',
        },
        solution: `.title {\n  color: #222222;\n}\n\n.container {\n  background-color: #f0f8ff;\n}`,
        solutionComment: { ja: '', en: '', zh: ''}
      },
      {
        id: 'css-2',
        type: 'css',
        title: { ja: 'ボックスの大きさを変えよう', en: 'Changing Box Sizes', zh: '改变盒子的大小' },
        goal: { ja: 'width, padding, border を学ぶ', en: 'Learn width, padding, border', zh: '学习 width、padding、border' },
        duration: 6,
        points: 100,
        baseHtml: `<div id="profile-card">\n  <h3>Profile</h3>\n  <p>This is a profile card.</p>\n</div>`,
        problem: {
            ja: 'idが"profile-card"の要素を、カードのようにデザインしてみましょう。\n\n1. `width`プロパティを使い、カードの幅を 300px にしてください。\n2. `padding`プロパティを使い、カードの内側に 20px の余白を設けてください。\n3. `border`プロパティを使い、太さ 1px の実線で、色が `#dddddd` の枠線をつけてください。',
            en: 'Let\'s design the element with the id "profile-card" to look like a card.\n\n1. Use the `width` property to set the card\'s width to 300px.\n2. Use the `padding` property to create 20px of space inside the card.\n3. Use the `border` property to add a 1px solid border with the color `#dddddd`.',
            zh: '让我们把ID为“profile-card”的元素设计成卡片样式。\n\n1. 使用`width`属性将卡片的宽度设置为 300px。\n2. 使用`padding`属性在卡片内部设置 20px 的内边距。\n3. 使用`border`属性添加一个 1px 粗的实线边框，颜色为 `#dddddd`。',
        },
        hint: {
            ja: 'width: 300px; のように、各スタイルの設定の最後にはセミコロン (;) をつけるルールです。CSSで id を指定するときは、名前の前にシャープ (#) をつけます。',
            en: 'The rule is to place a semicolon (;) at the end of each style declaration, like width: 300px;. When targeting an id in CSS, put a sharp sign (#) before the name.',
            zh: '规则是在每个样式声明的末尾加上分号 (;)，例如 width: 300px;。在CSS中指定 id 时，需要在名字前面加上井号 (#)。',
        },
        solution: `#profile-card {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #dddddd;\n}`,
        solutionComment: { ja: '', en: '', zh: ''}
      },
      {
        id: 'css-3',
        type: 'css',
        title: { ja: 'Flexboxで横並びにしよう', en: 'Aligning with Flexbox', zh: '使用Flexbox进行水平排列' },
        goal: { ja: 'display: flex と justify-content を学ぶ', en: 'Learn display: flex and justify-content', zh: '学习 display: flex 和 justify-content' },
        duration: 7,
        points: 100,
        baseHtml: `<nav class="nav-menu">\n  <div>Home</div>\n  <div>About</div>\n  <div>Contact</div>\n</nav>`,
        problem: {
            ja: 'classが"nav-menu"の要素に`display: flex;`を設定して、その中にある子要素たちが横一列に並ぶようにしてください。さらに、`justify-content: center;`を追加して、子要素たちが中央に寄るように配置してみましょう。',
            en: 'Set `display: flex;` on the element with the class "nav-menu" to make its child elements line up in a row. Then, add `justify-content: center;` to center the child elements horizontally.',
            zh: '为类名为“nav-menu”的元素设置`display: flex;`，使其内部的子元素水平排列成一行。然后，添加`justify-content: center;`，使子元素在容器中居中对齐。',
        },
        hint: {
            ja: 'display: flex; は、横並びにしたい要素たちを囲んでいる「親要素」（今回は .nav-menu）に設定します。中の子要素に直接つけるのではないので注意しましょう。',
            en: 'display: flex; should be set on the "parent" element that contains the items you want to align (in this case, .nav-menu), not on the child items themselves.',
            zh: 'display: flex; 应该设置在包裹着要排列的项目的“父元素”上（在这里是 .nav-menu），而不是直接设置在子元素上。',
        },
        solution: `.nav-menu {\n  display: flex;\n  justify-content: center;\n}`,
        solutionComment: { ja: '', en: '', zh: ''}
      }
    ],
  },
  {
    id: 'js',
    title: {
      ja: 'JavaScriptコース',
      en: 'JavaScript Course',
      zh: 'JavaScript课程',
    },
    description: {
      ja: 'ウェブページに動きをつける言語',
      en: 'The language for adding interactivity to web pages',
      zh: '为网页添加交互功能的语言',
    },
    accentColor: 'border-t-mint',
    bgColor: 'bg-mint',
    quests: [
      {
        id: 'js-1',
        type: 'js',
        title: { ja: 'クリックでテキストを変えよう', en: 'Change Text on Click', zh: '点击改变文本' },
        goal: { ja: 'DOM操作の基本を学ぶ', en: 'Learn basic DOM manipulation', zh: '学习基本的DOM操作' },
        duration: 6,
        points: 100,
        baseHtml: `<p id="message">Hello, everyone!</p>\n<button id="change-btn">Change Text</button>`,
        problem: {
            ja: 'ボタンをクリックしたら、メッセージが変わる仕掛けを作ってみましょう。\n\n1. `document.getElementById()` を使って、idが"change-btn"のボタンと、idが"message"のテキスト要素を取得します。\n2. 取得したボタンに `.addEventListener(\'click\', ...)` を使って、クリックされたらテキスト要素の `.textContent` を「こんにちは、世界！」という文字列に変更する処理を追加します。',
            en: 'Let\'s make the message change when the button is clicked.\n\n1. Use `document.getElementById()` to get the button with id "change-btn" and the text element with id "message".\n2. Add a click event listener to the button using `.addEventListener(\'click\', ...)` that changes the text element\'s `.textContent` to "Hello, World!" when clicked.',
            zh: '让我们制作一个点击按钮时消息会改变的功能。\n\n1. 使用 `document.getElementById()` 获取ID为“change-btn”的按钮和ID为“message”的文本元素。\n2. 使用 `.addEventListener(\'click\', ...)` 为按钮添加一个点击事件监听器，当按钮被点击时，将文本元素的 `.textContent` 更改为“你好，世界！”。',
        },
        hint: {
            ja: 'JavaScriptでは大文字と小文字が厳密に区別されます。getElementById のように、Id の I と d が大文字である点に注意しましょう。タイプミスがないか確認してみてください。',
            en: 'JavaScript is case-sensitive. Pay attention to the capitalization in getElementById—the I and d are uppercase. Double-check for any typos.',
            zh: 'JavaScript是严格区分大小写的。请注意 getElementById 中的大小写，I 和 d 都是大写的。请检查是否有拼写错误。',
        },
        solution: `const button = document.getElementById('change-btn');\nconst message = document.getElementById('message');\n\nbutton.addEventListener('click', function() {\n  message.textContent = 'こんにちは、世界！';\n});`,
        solutionComment: { ja: '', en: '', zh: ''}
      },
      {
        id: 'js-2',
        type: 'js',
        title: { ja: 'クラスを追加して見た目を変えよう', en: 'Change Style by Adding a Class', zh: '通过添加类来改变外观' },
        goal: { ja: 'classList.add を学ぶ', en: 'Learn classList.add', zh: '学习 classList.add' },
        duration: 6,
        points: 100,
        baseHtml: `<style>.highlight { background-color: #E6FFFA; border-color: #38B2AC; }</style>\n<div class="box" style="padding: 1rem; border: 2px solid #ddd;">I'm a box.</div>\n<button id="toggle-btn">Highlight Me</button>`,
        problem: {
            ja: 'ボタンをクリックしたら、箱の見た目が変わる仕掛けを作ります。（CSSで.highlightクラスには、背景色を変えるスタイルが既に定義されています）\n\n1. `document.getElementById()`でidが"toggle-btn"のボタンを取得します。\n2. `document.querySelector()`を使って、classが"box"の要素を取得します。\n3. ボタンにクリックイベントを追加し、クリックされたらbox要素のclassListに`.add()`メソッドを使って"highlight"というクラス名を追加してください。',
            en: 'Let\'s make the box\'s appearance change on a button click. (The .highlight class is already defined in CSS to change the background color.)\n\n1. Get the button with id "toggle-btn" using `document.getElementById()`.\n2. Get the element with class "box" using `document.querySelector()`.\n3. Add a click event listener to the button that adds the "highlight" class to the box element\'s classList using the `.add()` method.',
            zh: '让我们制作一个点击按钮时盒子外观会改变的功能。（CSS中已经定义了.highlight类来改变背景颜色）\n\n1. 使用 `document.getElementById()` 获取ID为“toggle-btn”的按钮。\n2. 使用 `document.querySelector()` 获取类名为“box”的元素。\n3. 为按钮添加一个点击事件监听器，当按钮被点击时，使用`.add()`方法为盒子元素的classList添加“highlight”类名。',
        },
        hint: {
            ja: 'querySelector でクラスを指定して要素を探すときは、CSSの時と同じように、名前の前にドット (.) が必要です。\'.box\' のように、シングルクォーテーションかダブルクォーテーションで囲むのを忘れないでください。',
            en: 'When using querySelector to find an element by its class, you need a dot (.) before the name, just like in CSS. Don\'t forget to enclose it in single or double quotes, like \'.box\'.',
            zh: '使用 querySelector 按类名查找元素时，需要在名称前加上一个点 (.)，就像在CSS中一样。别忘了用单引号或双引号把它括起来，比如 \'.box\'。',
        },
        solution: `const toggleButton = document.getElementById('toggle-btn');\nconst box = document.querySelector('.box');\n\ntoggleButton.addEventListener('click', function() {\n  box.classList.add('highlight');\n});`,
        solutionComment: { ja: '', en: '', zh: ''}
      },
      {
        id: 'js-3',
        type: 'js',
        title: { ja: '入力値を使って挨拶しよう', en: 'Greet Using Input Value', zh: '使用输入值打招呼' },
        goal: { ja: 'inputの.valueを取得する', en: 'Get input .value', zh: '获取输入的.value' },
        duration: 7,
        points: 100,
        baseHtml: `<input type="text" id="name-input" placeholder="Enter your name">\n<button id="greet-btn">Greet</button>\n<p id="greeting-output"></p>`,
        problem: {
            ja: '入力された名前を使って、挨拶メッセージを表示する機能を作りましょう。\n\n1. idが"name-input"の入力欄、"greet-btn"のボタン、"greeting-output"の表示エリアを、それぞれgetElementByIdで取得します。\n2. ボタンにクリックイベントを追加します。\n3. クリックされたら、入力欄の `.value` プロパティから入力されたテキストを取得し、「こんにちは、[名前]さん！」という挨拶文を作成して、表示エリアの `.textContent` に設定します。',
            en: 'Let\'s display a greeting using the entered name.\n\n1. Get the input with id "name-input", the button with id "greet-btn", and the display area with id "greeting-output" using getElementById.\n2. Add a click event listener to the button.\n3. When clicked, get the text from the input\'s `.value` property, create a greeting "Hello, [Name]!", and set it as the `.textContent` of the display area.',
            zh: '让我们制作一个使用输入的名字来显示问候消息的功能。\n\n1. 分别使用getElementById获取ID为“name-input”的输入框、ID为“greet-btn”的按钮和ID为“greeting-output”的显示区域。\n2. 为按钮添加点击事件监听器。\n3. 点击时，从输入框的 `.value` 属性获取输入的文本，创建问候语“你好，[名字]！”，并将其设置为显示区域的 `.textContent`。',
        },
        hint: {
            ja: 'input タグに入力された文字を取得するには .textContent ではなく .value を使います。この違いがポイントです。\'こんにちは、\' + name + \'さん！\' のように、文字列と変数は + でつなげることができます。',
            en: 'To get the text entered into an input tag, you use .value, not .textContent. This difference is key. You can concatenate strings and variables with +, like \'Hello, \' + name + \'!\'.',
            zh: '要获取在 input 标签中输入的文本，需要使用 .value 而不是 .textContent。这个区别是关键。你可以用 + 来连接字符串和变量，例如 \'你好，\' + name + \'！\'。',
        },
        solution: `const nameInput = document.getElementById('name-input');\nconst greetButton = document.getElementById('greet-btn');\nconst output = document.getElementById('greeting-output');\n\ngreetButton.addEventListener('click', function() {\n  const name = nameInput.value;\n  output.textContent = 'こんにちは、' + name + 'さん！';\n});`,
        solutionComment: { ja: '', en: '', zh: ''}
      }
    ]
  },
];