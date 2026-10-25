---
id: def-g-graded-two-vector-space
kind: definition
title: G-graded finite semisimple 2-vector space
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-fusion-and-multifusion-category
  - def-group
  - def-semisimple-object-and-semisimple-abelian-category
  - def-simple-object
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.1
      url: https://arxiv.org/pdf/2306.08117
    - title: Décoppet, Extension Theory and Fermionic Strongly Fusion 2-Categories, Example 2.2
      url: https://www.maths.tcd.ie/EMIS/journals/SIGMA/2024/092/sigma24-092.pdf
---

## Definition

Fix an algebraically closed field $k$ of characteristic zero and a finite group $G$ ([[def-group]]). A finite semisimple category is understood in the sense of [[def-semisimple-object-and-semisimple-abelian-category]], with simple objects as in [[def-simple-object]]. A **finite semisimple $G$-graded $k$-linear category** is a finite semisimple $k$-linear category $\mathcal A$ together with a direct-sum decomposition
$$\mathcal A=\bigoplus_{g\in G}\mathcal A_g.$$
An object in $\mathcal A_g$ is homogeneous of degree $g$. A grading-preserving linear functor sends each $\mathcal A_g$ into the corresponding degree-$g$ summand, and its 2-morphisms are natural transformations. Such categories, functors, and natural transformations form the underlying 2-category denoted $2\mathrm{Vect}_G$.

For finite semisimple categories $\mathcal A,\mathcal B$ with simple-label sets $S,T$, their finite semisimple tensor product $\mathcal A\boxtimes\mathcal B$ has simple labels $S\times T$ and
$$\operatorname{Hom}(s\boxtimes t,s'\boxtimes t')=\operatorname{Hom}_{\mathcal A}(s,s')\otimes_k\operatorname{Hom}_{\mathcal B}(t,t'),$$
extended to direct sums. For a concrete skeleton, choose finite sets $S_g$ of simple labels and replace $\mathcal A_g$ by the category of finite-dimensional $k$-vector-space families indexed by $S_g$. A linear functor is represented by a finite matrix of finite-dimensional vector spaces within each grade. This skeleton fixes the meaning of “finite” and the homogeneous components; it does not assert any physical realization.
