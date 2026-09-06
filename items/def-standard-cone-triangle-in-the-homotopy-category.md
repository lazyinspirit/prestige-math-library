---
id: def-standard-cone-triangle-in-the-homotopy-category
kind: definition
title: "Standard cone triangle in the homotopy category"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-category-of-chain-complexes, def-cone-triangle-of-a-chain-map]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.9.1"
      url: "https://stacks.math.columbia.edu/tag/014D"
---

## Definition

Let $\mathcal A$ be an additive category.  For a chain map
$f:C_\bullet\to D_\bullet$ in $\mathcal A$, its **standard cone triangle** in
$K(\mathcal A)$ is the image of
$$C_\bullet\xrightarrow fD_\bullet\xrightarrow j\operatorname{Cone}(f)_\bullet\xrightarrow qC_\bullet[1]$$
under the quotient to the homotopy category.  The final map and shift are the
ones already specified by the chain-level cone triangle
[[def-cone-triangle-of-a-chain-map]].
