ТОDO :
2 вида юзеров:
   анонимный 
      сохраниение проектов в локал сторедж
   зареганный
      сохранение проектов в фаербэйс облоко
нужно будет заморочитсься с асинхронными запросами из стора 
в облако что даст тебе крутую практику


В приложении используется Vuex в качестве централизованного хранилища данных для всех компонентов. Для обеспечения персистентности данных в рамках одного браузера используется localStorage. Данные, находящиеся во Vuex, автоматически сохраняются в localStorage с помощью плагина vuex-persistedstate.

В приложение доступно как создание новых сайтов, так и их сохранение в историю с возможностью просмотра и редактирования ранее созданных сайтов. Максимально возможное количество сохранённых сайтов ограниченно только размером localStorage.

Архитектурно каждый прототип создаваемого сайта представляет собой объект, содержащий набор полей с мета информацией (id, название сайта, время создания и т.д.), объект с текущими настройками конструктора и массив со списком использованных блоков. Использование массива для хранения информации о блоках, позволяет гарантировать при сохранении порядок их следования (order).

Каждый блок в свою очередь, также представляет собой объект с мета информацией и вложенным массивом со списком атрибутов (список будет отличаться для различных блоков), который необходим для рендеринга компонента. Использование списка атрибутов позволяет унифицировать создание блоков, вынося всю уникальную логику в отдельные компоненты-блоки.

Подобная иерархическая структура позволяет гибко масштабировать приложение, легко добавлять новые сущности (например, пользователь, домен и т.д.) и хорошо подходит для использования в средних и больших командах, так как позволяет разделить зоны ответственности разных разработчиков.

Инлайн редактирование текста в блоках выполнено без использования библиотек на нативном Vue. Для отображения на странице и возможности персистентного хранения все изображения кодируются в Base64.

Для ускорения процесса разработки использован HTML-шаблонизатор Pug, CSS препроцессор Sass и набор компонентов UI Buefy.

Работа приложения протестирована в браузерах Google Chrome (Blink), Mozilla Firefox (Gecko).

