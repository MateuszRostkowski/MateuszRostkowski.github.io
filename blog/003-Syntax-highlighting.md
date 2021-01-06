<div class="post__header">
    <div class="wrapper">
        <h1>Syntax highlighting - kolorowanie składni</h1>
    </div>
</div>

<div class="post__content">

1. Otwórz plik źródłowy strony w której chcesz dodać kolorowanie składni, i następnie w tagu `<head>` dodaj ten kod

```HTML
<style>
    /* tutaj mozesz dodać specjalne style do kolorowania składni */
    code.hljs {
        border-radius: 4px;
        padding: 12px;
    }
</style>
<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });
</script>
```

2. W tym samym miejscu musisz dodać style które pokolorują składnie, 
<a href="https://cdnjs.com/libraries/highlight.js" class="post__link" target="_blank">więcej styli mozesz znaleźć tutaj...(zakładka CSS)</a>

```HTML
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/atom-one-dark-reasonable.min.css">
```

3. Podobnie jak style musimy jeszcze dodać język który chcemy uzywać
<a href="https://cdnjs.com/libraries/highlight.js" class="post__link" target="_blank">więcej języków tutaj...</a>

```HTML
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js"></script>
```

4. Dodaj blok kodu do strony w dowolnym miejscu, pamiętaj o tagu <pre> oraz <code>
```HTML
<pre><code class="language-HTML"><style>
    code.hljs {
        border-radius: 4px;
        padding: 12px;
    }
</style>;
<script>;
    document.addEventListener("DOMContentLoaded", (event) => {
        document.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightBlock(block);
        });
    });
</script></code></pre>
```
</div>