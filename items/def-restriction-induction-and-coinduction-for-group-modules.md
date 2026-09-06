---
id: def-restriction-induction-and-coinduction-for-group-modules
kind: definition
title: "Restriction, induction, and coinduction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-group-ring-module-and-trivial-module-convention, def-restriction-and-extension-of-scalars, def-tensor-product-of-modules-by-generators-and-relations]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Definition 6.3.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

For $H\le G$, restriction forgets from $\mathbb Z[G]$ to $\mathbb Z[H]$. For a left $H$-module $M$, set $\operatorname{Ind}_H^G M=\mathbb Z[G]\otimes_{\mathbb Z[H]}M$ and $\operatorname{Coind}_H^G M=\operatorname{Hom}_{\mathbb Z[H]}(\mathbb Z[G],M)$, with $G$ acting on the latter by $(g\varphi)(x)=\varphi(xg)$.
