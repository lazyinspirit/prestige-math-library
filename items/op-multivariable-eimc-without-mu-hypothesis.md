---
id: op-multivariable-eimc-without-mu-hypothesis
kind: open-problem
title: Formulate and Prove a Multivariable EIMC Beyond the Known mu=0 Range
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-admissible-one-dimensional-p-adic-lie-extension
  - def-iwasawa-algebra-of-profinite-group
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Introduction, printed pp. 3–4, higher-dimensional EIMC discussion.
    - title: "Rusiru Gambheera and Cristian D. Popescu, An Unconditional Main Conjecture in Iwasawa Theory and Applications, arXiv:2303.13603 (preprint of the 2025 published article)"
      url: https://arxiv.org/pdf/2303.13603
      locator: Abstract and §1 Introduction; scope and stated $\mu=0$ relation of their result.
---

## Open problem

Let $p$ be odd, let $K$ be a totally real number field, and let $L_\infty/K$ be a totally real Galois extension containing the cyclotomic $\mathbb Z_p$-extension, unramified outside a finite set of places, with $G=\operatorname{Gal}(L_\infty/K)$ a compact $p$-adic Lie group of dimension at least two. Determine whether one can formulate and prove an equivariant Iwasawa main conjecture for this extension without assuming $\mu=0$: either establish an $MH(G)$-type condition sufficient to make the canonical relative $K$-theory class and equivariant $p$-adic $L$-element well-defined, or construct a replacement formulation with a precise coefficient ring, complex, and uniqueness statement.

## Open problem references

[Johnston and Nickel, Introduction](https://arxiv.org/pdf/2010.03186)

## Status

As of 2026-10-26, Johnston–Nickel identify dimension greater than one as a serious obstacle: in general an $MH(G)$ condition is needed even to formulate the conjecture, and the sources they discuss know that condition under $\mu=0$. Gambheera–Popescu (2025) prove an unconditional Iwasawa-theoretic main conjecture for their specified cyclotomic Selmer module and recover a different Tate-module formulation under $\mu=0$; that result does not settle the arbitrary higher-dimensional extension problem stated here. This status is limited to the inspected sources and is not an exhaustive novelty claim.

## Status references

[Johnston and Nickel, Introduction](https://arxiv.org/pdf/2010.03186)

[Gambheera and Popescu, arXiv:2303.13603, Abstract and Introduction](https://arxiv.org/pdf/2303.13603)
