---
id: def-separated-presheaf
kind: definition
title: "Separated presheaves"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-on-topological-space]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
    - title: "The Stacks Project, Sheaves on Spaces, Section 17"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Definition

Let $\mathcal F$ be a presheaf on a topological space $X$.

The presheaf $\mathcal F$ is **separated** when uniqueness of gluing holds:
for every open set $U \subseteq X$, every open cover $U=\bigcup_{i\in I}U_i$,
and every pair of sections $s,t\in\mathcal F(U)$,
$$s|_{U_i}=t|_{U_i}\text{ for all }i\in I\qquad\Longrightarrow\qquad s=t.$$

Thus a separated presheaf has the locality part of the sheaf axiom, but it may
still fail existence of gluing.
