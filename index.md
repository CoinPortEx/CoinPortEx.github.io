---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# layout: home
# layout: layout
layout: default
---

## CoinPort Exchange - News Blog

Reading, reference and news resources for CoinPort Members
    <script>
      document.write(document.location + '<br />');
    </script>
<ul>
  {% for post in site.posts %}
    <li>
      <b>{{ post.categories }} - </b> {{ post.date  | date: "%-d %B %Y" }} - <a href="{{ post.url }}?theme=dark-mode">{{ post.title }}</a><br />
      {{ post.description }}<br />
    </li>
  {% endfor %}
</ul>
