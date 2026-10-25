---
id: def-countable-borel-hierarchy
kind: definition
title: "The countable Borel hierarchy and its limit convention"
status: published
origin: pipeline
deps: ["def-topological-space", "def-first-uncountable-ordinal", "thm-transfinite-recursion"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 2.4, printed p14; Martin 1985 p451 (same positive-rank convention)"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Definition

Work in ZF. Let $(X,\tau)$ be a topological space ([[def-topological-space]]) and let $\omega_1$ have the meaning in [[def-first-uncountable-ordinal]]. Define, for $1\leq\alpha<\omega_1$,

$$\Sigma^0_1(X)=\tau,\qquad\Pi^0_\alpha(X)=\{X\setminus A:A\in\Sigma^0_\alpha(X)\},\qquad\Delta^0_\alpha(X)=\Sigma^0_\alpha(X)\cap\Pi^0_\alpha(X).$$

For $1<\alpha<\omega_1$, set

$$\Sigma^0_\alpha(X)=\left\{\bigcup_{n\in\mathbb N}A_n:(A_n)_{n\in\mathbb N}\in\left(\bigcup_{1\leq\beta<\alpha}\Pi^0_\beta(X)\right)^{\mathbb N}\right\}.$$

Thus the summands may have different lower positive ranks, at successors as well as at limits. There is no rank-zero class. A countable union here is an actual sequence, with repetitions allowed.

For existence apply [[thm-transfinite-recursion]] to the well-order of positive ordinals below $\omega_1$, forming the pair $(\Sigma^0_\alpha,\Pi^0_\alpha)$ at each stage. The formulas use only power sets, the set of sequences, Union and complements in the fixed $X$, so each value is a set. On histories not consisting of the required pairs of subfamilies of $\mathcal P(X)$, assign the fixed pair $(\varnothing,\varnothing)$; this makes the recursion rule total. Actual histories have the required type by its construction. This defines all classes uniquely without choice.

The **Borel sigma-algebra** $\mathcal B(X)$ is the intersection of all families of subsets of $X$ containing $\tau$ and closed under complements and unions of sequences. This indexing family is nonempty, since it contains $\mathcal P(X)$. Intersections preserve each of the stated closure requirements, so it is the least such family. This definition asserts neither hierarchy exhaustion in ZF nor fixed-rank monotonicity in arbitrary spaces. Empty sets and $X$ occur in every class: they are open and closed at rank one, and constant sequences of them supply all subsequent ranks.
