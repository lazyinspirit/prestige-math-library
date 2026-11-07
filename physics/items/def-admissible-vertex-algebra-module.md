---
id: def-admissible-vertex-algebra-module
kind: definition
title: Admissible module for a vertex operator algebra
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
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras, §2
      url: https://arxiv.org/pdf/math/0607679
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I, §2
      url: https://arxiv.org/pdf/1012.4193
---

## Definition

Let $V=\bigoplus_{r\ge0}V_r$ be a conformal vertex algebra of CFT type and $M$ a left $V$-module. The module is **admissible** if it is equipped with a direct-sum grading $M=\bigoplus_{n\ge0}M(n)$ such that for every homogeneous $a\in V_r$, every integer mode $k$, and every $n\ge0$,
$$
a^M_{(k)}M(n)\subseteq M(n+r-k-1),
$$
where $M(q)=0$ for $q<0$. No diagonalizability of $L_M(0)$ is required: the conformal mode $L_M(0)=\omega^M_{(1)}$ preserves each $M(n)$, but may act there nonsemisimply. In this definition, morphisms preserve the specified nonnegative grading and commute with every module field.
