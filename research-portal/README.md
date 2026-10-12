# Research portal

Personal mathematical research shown under Math Library → Research portal on alphabetamath.cc. The initial category is **Categorification**. This collection is separate from the teaching-library items and the build driver's operational `research/` directory.

Add an entry at `research-portal/categorification/<slug>.md`, using a lowercase, hyphenated filename and YAML frontmatter:

```yaml
---
title: Your research title
description: A short introduction for visitors.
status: draft
date: "2026-10-08"
---
```

Write the body in Markdown with `$...$` or `$$...$$` mathematics. Existing library items can be linked with `[[item-id]]`. The filename becomes the public URL `/research-portal/categorification/<slug>`.

Only entries explicitly marked `status: published` appear publicly. Draft entries remain visible only to the signed-in owner on the app host. Publication of a personal research note does not assert a teaching-library audit or theorem certification. No research entries have been added by this initial portal change.
