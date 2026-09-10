---
id: def-realization-of-a-generalized-cartan-matrix
kind: definition
title: "Realization of a generalized cartan matrix"
status: draft
origin: pipeline
deps: ["def-generalized-cartan-matrix"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Definition 1.2.2 and Proposition 1.2.4, pp.10–12"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
justified_by: ["prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism"]
---

## Definition

A **minimal realization** of a GCM $A$ of rank $r$ is a complex vector space $\mathfrak h$ with indexed linearly independent families $h_1,\ldots,h_n\in\mathfrak h$ and $\alpha_1,\ldots,\alpha_n\in\mathfrak h^*$ such that $\alpha_j(h_i)=a_{ij}$ and $\dim\mathfrak h=2n-r$. An isomorphism $T$ of realizations satisfies $T(h_i)=h_i^\prime$ and $\alpha_j^\prime T=\alpha_j$ for every index.

The matrix convention is [[def-generalized-cartan-matrix]]. Existence and uniqueness up to isomorphism are supplied by [[prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism]]. Uniqueness of the isomorphism is not asserted.

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Definition 1.2.2 and Proposition 1.2.4, pp.10–12.
