---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# layout: home
# layout: layout
layout: default
---

## CoinPort Exchange - News Blog

Reading, reference and news resources for CoinPort Members

<ul id="post-list" class="post-list">
  {% for post in site.posts %}
    <li class="post-row">
      <div class="post-row__meta">
        <span class="post-chip">{{ post.categories | first }}</span>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B %Y" }}</time>
      </div>
      <a href="{{ post.url }}" class="post-link post-row__title">{{ post.title }}</a>
      {% if post.description %}<p class="post-row__desc">{{ post.description }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>

<script>
  const links = document.querySelectorAll('.post-link');
  links.forEach(link => {
    link.href += `?theme=${theme}`;
  });
</script>