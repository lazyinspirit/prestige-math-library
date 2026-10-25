---
id: def-thick-subcategory
kind: definition
title: "Thick subcategory"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangulated-subcategory, def-split-monomorphism-and-split-epimorphism]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Derived Categories, Section 13.4"
      url: "https://stacks.math.columbia.edu/tag/05QN"
---

## Definition

A triangulated subcategory $\mathcal S\subseteq\mathcal T$ is **thick** if it
is closed under direct summands: whenever $A\in\mathcal S$ and
$B\xrightarrow iA\xrightarrow pB$ has $pi=1_B$, then $B\in\mathcal S$.
