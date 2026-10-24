---
id: "def-diagonal-morphism-scheme"
kind: "definition"
title: "The diagonal morphism"
status: published
origin: "pipeline"
deps: ["thm-fibre-products-of-schemes-exist"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 26.21 introductory definition"
      url: "https://stacks.math.columbia.edu/tag/01KH"
---

## Definition

For $X\to S$, the **diagonal morphism** is the unique $\Delta_{X/S}:X\to X\times_S X$ satisfying $\operatorname{pr}_1\Delta_{X/S}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/S}$. It exists by [[thm-fibre-products-of-schemes-exist]]. For any test scheme $T$, it takes an $S$-morphism $a:T\to X$ to the compatible pair $(a,a)$.
