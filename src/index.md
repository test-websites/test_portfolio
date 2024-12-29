---
title: Blog Home Page
layout: base.njk
templateEngineOverride: njk,md
---

This is homepage stuff!

- [Go to about page]({{ '/about' | url }})

{% include "post_list.njk" %}
