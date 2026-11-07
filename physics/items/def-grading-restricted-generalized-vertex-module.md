---
id: def-grading-restricted-generalized-vertex-module
kind: definition
title: Grading-restricted generalized module
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I, Definition 2.12
      url: https://arxiv.org/pdf/1012.4193
    - title: Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras, conformal-module discussion
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Definition

Let $V$ be a conformal vertex algebra of CFT type and $M$ a left $V$-module. Write $L_M(0)$ for the coefficient determined by
$$
Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}.
$$
For $h\in\mathbb C$, define the generalized $L_M(0)$-eigenspace
$$
M_{[h]}=\{m\in M:(L_M(0)-h)^N m=0\text{ for some integer }N\ge1\}.
$$
The module is **grading-restricted generalized** if $M=\bigoplus_{h\in\mathbb C}M_{[h]}$, every $M_{[h]}$ is finite dimensional, and the real parts of its nonzero generalized weights are bounded below. The direct sum means each vector has only finitely many generalized-weight components. This convention explicitly adds finite-dimensionality and a lower bound to the generalized-eigenspace decomposition; those conditions are not consequences of the module Jacobi identity.
