# Articles ("Rabbit holes")

Question-first narrative articles rendered at `/rabbit-holes/<slug>` on alphabetamath.cc.
Each starts with an innocent question and follows it into the library's formal items. This
directory is NOT governed by SCHEMA.md (frozen, items-only); this file is the convention.

## Format

One article per file, `articles/<slug>.md`. Frontmatter:

```yaml
slug: why-is-the-area-of-a-circle-pi-r-squared   # = filename, immutable once published
title: "Why is the area of a circle πr²?"        # the question, sentence case
status: draft            # draft | published — the publish gate, owner-audited
date: null               # ISO date, hand-set at publish time; null while draft
description: "One sentence for cards, feed and meta tags."
purpose: "One sentence naming this article's single job. Editorial, never rendered."
series: circle-area      # optional: the rabbit-hole slug this article belongs to
seriesTitle: "Why is the area of a circle πr²?"  # the hole's big question (repeat on every part)
part: 1                  # 1-based position in the series
```

Body: markdown with `$...$` / `$$...$$` math and `[[item-id]]` / `[[item-id|label]]` wikilinks.
Free-form `##` sections. A series part ends by posing the next part's question.

Animated figures: a bare fence with an empty body embeds a named animation,

    ```anim rectangle-squeeze
    ```

The names map to client components in the app repo
(components in `web/components/library/articles/anims.tsx`, name map in the
rabbit-holes route); currently `rectangle-squeeze`, `darboux-sums`,
`disc-between-graphs`, `cosine-first-zero`, `inscribed-polyline`, `koch-length`,
`archimedes-polygons`, `rationals-no-content`. An unknown name renders nothing,
so naming an animation before it is built is safe. Figures carry no visible
captions; the article text does the explaining.

## Editorial rules (these are the point)

1. **One purpose per article, stated in `purpose`, and short.** An article that needs two
   purposes is two articles.
2. **Every mathematical claim links.** Narration and motivation may be prose; anything a
   sceptical reader could ask "says who?" about must be a wikilink into a published library
   item, or an honest link to a recorded-not-proved (‡) remark. An article never asserts
   mathematics the library has not checked.
3. **Human voice.** No em dashes, no "not X, it's Y", no throat-clearing, no filler. British
   spelling. If a sentence can be deleted without losing a fact, delete it.
4. **Owner audit gates publication**, exactly as for items: flip `status: published` and set
   `date` only after the owner has read it.
5. **No cadence promises in copy.** A part may tease the next question, never a date.

## Gate

`node tools/tsx-run.mjs tools/articlecheck.mts` checks: frontmatter fields present, slug =
filename, every wikilink resolves to an existing item, and published articles cite only
published items.
