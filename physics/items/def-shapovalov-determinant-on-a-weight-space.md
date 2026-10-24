---
id: def-shapovalov-determinant-on-a-weight-space
kind: definition
title: "The Shapovalov determinant on a weight space"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-existence-and-uniqueness-of-the-shapovalov-form, lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal, prop-weights-of-a-verma-module-lie-below-lambda]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(iv)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Definition

For $\beta\in Q^+$ choose a PBW basis of the finite-dimensional space
$M(\lambda)_{\lambda-\beta}$.  The **Shapovalov determinant**
$D_\beta(\lambda)$ is the determinant of the matrix of the restricted form
$S_\lambda$.  A change of basis with matrix $P$ replaces it by
$P^{\mathsf T}AP$, so $D_\beta$ is defined only up to a nonzero scalar; write
$\doteq$ for equality with that ambiguity.
