---
id: def-sheafification
kind: definition
title: "Sheafification of a presheaf"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-plus-construction, lem-second-plus-construction-is-sheaf]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 17"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3, Section 4.7"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Definition

Let $\mathcal F$ be a presheaf on a topological space $X$.

Its **sheafification** is the sheaf
$$a\mathcal F:=\mathcal F^{++}.$$

The canonical morphism
$$\eta_{\mathcal F}:\mathcal F\longrightarrow a\mathcal F$$
is the composite
$$\mathcal F\xrightarrow{\ \eta\ }\mathcal F^+\xrightarrow{\ \eta\ }(\mathcal F^+)^+=a\mathcal F,$$
where each $\eta$ is the single-chart map of
[[def-presheaf-plus-construction]].

By [[lem-second-plus-construction-is-sheaf]], $a\mathcal F$ is indeed a sheaf.
