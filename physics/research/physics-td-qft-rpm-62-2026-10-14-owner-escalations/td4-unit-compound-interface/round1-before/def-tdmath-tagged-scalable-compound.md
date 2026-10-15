---
id: def-tdmath-tagged-scalable-compound
kind: definition
title: Tagged scalable compounds
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-complete-ordered-field, def-finite-sum, lem-finite-sum-reindexing-and-fubini]
justified_by: [lem-tdmath-compound-mass-well-defined]
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.A.1–II.A.2"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Definition

Let $X$ be a set of state labels. A **tagged scalable compound over $X$** is a function $c:X\to\mathbb R_{\ge0}$ whose support $\operatorname{supp}(c):=\{x\in X:c(x)\ne0\}$ is finite. The coefficient is a dimensionless formal amount; state labels retain their tags, so equal coefficients on different labels do not identify those labels. Compounds are equal exactly when their coefficient functions are equal.

For compounds $c,d$ and $t>0$, define composition and positive scaling pointwise by $(c+d)(x):=c(x)+d(x)$ and $(tc)(x):=t c(x)$. The zero function is the empty compound. The **mass** of $c$ is the finite sum $m(c):=\sum_{x\in\operatorname{supp}(c)}c(x)$. It is dimensionless bookkeeping mass, not thermodynamic mass or energy. The compound is positive when $m(c)>0$.

The formula for mass is independent of the chosen finite set containing the support, and composition and scaling obey $m(c+d)=m(c)+m(d)$ and $m(tc)=t m(c)$; [[lem-tdmath-compound-mass-well-defined]] proves these assertions.

## Remarks

No topology, continuity, or physical interpretation is part of this definition. The finite-support restriction is essential: no infinite series or convergence convention is implicit.
