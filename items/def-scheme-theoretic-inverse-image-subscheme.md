---
id: "def-scheme-theoretic-inverse-image-subscheme"
kind: "definition"
title: "Scheme-theoretic inverse images of subschemes"
status: "draft"
origin: "pipeline"
deps: ["lem-base-change-open-closed-immersions"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 26.17.7"
      url: "https://stacks.math.columbia.edu/tag/01JO"
---

## Definition

For $f:X\to S$ and a closed or locally closed subscheme $Z\hookrightarrow S$, define the **scheme-theoretic inverse image** to be $X\times_S Z\to X$. By [[lem-base-change-open-closed-immersions]] it is a closed or locally closed subscheme, respectively. For a closed ideal sheaf $\mathcal I$, the inverse-image ideal is $\operatorname{Im}(f^*\mathcal I\to\mathcal O_X)$. For an open subscheme this construction is the open inverse image with its restricted sheaf.
