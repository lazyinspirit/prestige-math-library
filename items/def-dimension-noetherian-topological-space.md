---
id: "def-dimension-noetherian-topological-space"
kind: "definition"
title: "Chain dimension and the empty-space convention"
deps: ["def-noetherian-topological-space", "def-irreducible-topological-space-and-subset"]
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
    - title: "Milne §3l Definition 3.39 and §2m Definition 2.48"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
---

## Definition

For a Noetherian topological space $T$, define $\dim T$ as the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of $T$. Thus a one-member chain has length zero. Set $\dim\varnothing=-\infty$, and allow $\dim T=+\infty$. The supremum of an empty family of dimensions is $-\infty$.
