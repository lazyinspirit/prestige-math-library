---
id: def-tdmath-tagged-scalable-compound
kind: definition
title: Tagged scalable compounds
status: published
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Let $X$ be a set of state labels. A **tagged scalable compound over $X$** is a function $c:X\to\mathbb R_{\ge0}$ whose support $\operatorname{supp}(c):=\{x\in X:c(x)\ne0\}$ is finite. The coefficient is a dimensionless formal amount; state labels retain their tags, so equal coefficients on different labels do not identify those labels. Compounds are equal exactly when their coefficient functions are equal.

For compounds $c,d$ and $t\ge0$, define composition and nonnegative scaling pointwise by $(c+d)(x):=c(x)+d(x)$ and $(tc)(x):=t c(x)$. The zero function is the empty compound; in particular $0c=0$. Comparison axioms involving scaling still require a strictly positive scalar unless explicitly stated otherwise. The **mass** of $c$ is the finite sum $m(c):=\sum_{x\in\operatorname{supp}(c)}c(x)$. It is dimensionless bookkeeping mass, not thermodynamic mass or energy. The compound is positive when $m(c)>0$.

For every state label $x\in X$, the **unit-state compound** $e_x$ is the coefficient function with $e_x(y)=1$ if $y=x$ and $e_x(y)=0$ otherwise. Its support is $\{x\}$, so it is a tagged compound. In compound comparisons, a state label $x$ denotes $e_x$. Every compound has the canonical finite decomposition $c=\sum_{x\in\operatorname{supp}(c)}c(x)e_x$, with an empty sum when $c=0$; coefficients on this support are strictly positive. The mass-one property $m(e_x)=1$ and the equivalence $m(c)=0\Longleftrightarrow c=0$ are proved in [[lem-tdmath-compound-mass-well-defined]].

The formula for mass is independent of the chosen finite set containing the support, and composition and scaling obey $m(c+d)=m(c)+m(d)$ and $m(tc)=t m(c)$; [[lem-tdmath-compound-mass-well-defined]] proves these assertions.

## Remarks

No topology, continuity, or physical interpretation is part of this definition. The finite-support restriction is essential: no infinite series or convergence convention is implicit.
