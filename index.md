Reading, reference and news resources for CoinPort Members

<ul id="post-list">
  {% for post in site.posts %}
    <li>
      <b>{{ post.categories }} - </b> {{ post.date  | date: "%-d %B %Y" }} - <a href="{{ post.url }}" class="post-link">{{ post.title }}</a><br />
      {{ post.description }}<br />
    </li>
  {% endfor %}
</ul>

<script>
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const theme = urlParams.get('theme');
  const className = theme == 'dark-mode'?'dark-mode':'light-mode';
  document.body.classList.toggle(className);

  const links = document.querySelectorAll('.post-link');
  links.forEach(link => {
    link.href += `?theme=${theme}`;
  });
</script>
