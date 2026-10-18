---
id: def-logarithmic-vertex-module
kind: definition
title: Logarithmic generalized module
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-grading-restricted-generalized-vertex-module
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
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I, Definition 2.12 and §§1.1–1.2
      url: https://arxiv.org/pdf/1012.4193
    - title: Dražen Adamović and Antun Milas, Lattice Construction of Logarithmic Modules for Certain Vertex Algebras, §2
      url: https://arxiv.org/pdf/0902.3417
---

## Definition

A **logarithmic module** for a conformal vertex algebra of CFT type is a grading-restricted generalized module, as in [[def-grading-restricted-generalized-vertex-module]], on which $L_M(0)$ is not semisimple. Equivalently, some generalized weight space contains $m$ and $h\in\mathbb C$ with $(L_M(0)-h)^r m=0$ and $(L_M(0)-h)^{r-1}m\ne0$ for an integer $r\ge2$. This definition records the Jordan-block condition; it does not assert that a named vertex algebra has such a module or that its module category has any particular tensor, finite-length, or modular property.
