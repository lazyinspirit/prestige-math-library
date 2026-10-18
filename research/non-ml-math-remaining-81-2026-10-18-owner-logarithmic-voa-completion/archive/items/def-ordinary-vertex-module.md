---
id: def-ordinary-vertex-module
kind: definition
title: Ordinary module
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
sources:
  references:
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I, §2
      url: https://arxiv.org/pdf/1012.4193
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras, §2
      url: https://arxiv.org/pdf/math/0607679
---

## Definition

An **ordinary module** for a conformal vertex algebra of CFT type is a grading-restricted generalized module in the sense of [[def-grading-restricted-generalized-vertex-module]] on which $L_M(0)$ acts semisimply. Equivalently, $M$ is a direct sum of its ordinary eigenspaces $M_h=\{m:L_M(0)m=hm\}$, each eigenspace is finite dimensional, and the real parts of the occurring weights are bounded below. Ordinary-module status is a condition on the module action; it does not assert that the category of such modules is semisimple.
