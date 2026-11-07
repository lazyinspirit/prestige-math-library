---
id: op-finiteness-of-tate-shafarevich-group
kind: open-problem
title: Finiteness of the Tate–Shafarevich group of an abelian variety
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-global-field
  - def-abelian-variety-over-a-field
  - def-tate-shafarevich-group-of-abelian-variety
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, Chapter I §6
      url: https://jmilne.org/math/Books/ADTnot.pdf
      locator: Chapter I §6, definition of the Tate–Shafarevich group and its finite-level subgroups.
    - title: J. S. Milne, Elliptic Curves, Chapter IV §10
      url: https://www.jmilne.org/math/Books/ectext6.pdf
      locator: Printed pp. 168–169, the analytic-rank-at-most-one hypothesis and the explicit algebraic-rank converse caveat.
    - title: Barinder S. Banwait, arXiv:2609.08431
      url: https://arxiv.org/pdf/2609.08431
      locator: §1.1–§1.3, known rank-zero/rank-one cases, the rank-at-least-two open range over Q, and the paper's prime-primary results.
---

## Open problem

For every number field $K$ and every abelian variety $A/K$, prove that the Tate–Shafarevich group
$$\operatorname{Sha}(A/K)=\ker\!\left(H^1(K,A)\longrightarrow\prod_v H^1(K_v,A)\right),$$
where $v$ ranges over all places of $K$, is finite.

## Open problem references

[[def-global-field]]

[[def-abelian-variety-over-a-field]]

[[def-tate-shafarevich-group-of-abelian-variety]]

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I §6](https://jmilne.org/math/Books/ADTnot.pdf)

[Barinder S. Banwait, arXiv:2609.08431](https://arxiv.org/pdf/2609.08431)

## Facts & Assumptions

**Given:** A number field $K$ and an abelian variety $A/K$.

[F1] The Tate–Shafarevich group is the kernel of the localization map from $H^1(K,A)$ to the product over all completions. ([[def-tate-shafarevich-group-of-abelian-variety]])

[A1] The current global-place and completion interfaces in this definition use AC and DC. ([[def-axiom-of-choice]], [[def-dependent-choice]])

## Status

Milne's standard account, *Elliptic Curves*, Chapter IV §10, printed pp. 168–169, records finiteness when the **analytic rank** $\operatorname{ord}_{s=1}L(E,s)$ is at most one, together with equality with the algebraic rank. This is not an unconditional assertion for every curve of algebraic rank at most one. Banwait's September 2026 paper studies specified prime-primary components for selected rank-two CM curves and explicitly does not prove finiteness of the full group in that range. Its introductory algebraic-rank shorthand is not used to strengthen the established analytic-rank hypothesis here.
