---
id: "def-localization-of-a-category-at-a-class-of-morphisms"
kind: "definition"
title: "Localization of a category at a class of morphisms"
deps: ["def-functor-and-contravariant-functor", "def-natural-isomorphism"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.3.1–10.3.14, pp. 379–384"
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

For a category $\mathcal C$ and a class $S$ of its arrows, a **localization** consists of a category $\mathcal L$ and a functor $Q:\mathcal C\to\mathcal L$ such that $Q(s)$ is invertible for every $s\in S$ and every functor $F:\mathcal C\to\mathcal E$ inverting $S$ has a unique factorization $F=\overline FQ$. We use the strict factorization convention for the same-object roof model. Natural transformations between such functors also descend uniquely; in the equivalence-invariant formulation, precomposition with $Q$ is an equivalence onto the functors inverting $S$. Functors and natural isomorphisms have the meanings of [[def-functor-and-contravariant-functor]] and [[def-natural-isomorphism]]. All category and functor quantifiers use the standing size convention.
