---
id: rem-the-left-right-naming-clash
kind: remark
title: "Mac Lane's warning about left and right Kan extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-kan-extension]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter X.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Remarks

Mac Lane warns in Chapter X.3 that some authors reverse the names. This
library follows [[def-left-and-right-kan-extension]]: a **left** Kan extension
comes with a unit $F\Rightarrow LK$, and a **right** Kan extension comes with a
counit $RK\Rightarrow F$.

Nothing mathematical changes with the vocabulary, but the directions of the two
structure maps do. This page therefore keeps those arrows visible in every
definition and theorem rather than writing only $\operatorname{Lan}_K$ and
$\operatorname{Ran}_K$.
