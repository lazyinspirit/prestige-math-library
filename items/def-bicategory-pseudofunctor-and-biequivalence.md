---
id: def-bicategory-pseudofunctor-and-biequivalence
kind: definition
title: "Bicategories, pseudofunctors, and biequivalences"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
justified_by: []
aliases: []
deps: [def-strict-two-category, def-monoidal-category, def-natural-transformation, def-vertical-composition-of-natural-transformations, def-natural-isomorphism, def-horizontal-composition-and-whiskering-of-natural-transformations, def-equivalence-and-adjoint-equivalence-of-categories, def-functor-category]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "N. Johnson and D. Yau, 2-Dimensional Categories, Definition 2.1.3, Example 2.1.26, Definition 4.1.2, Explanation 4.1.5, Definition 6.2.8, Theorem 7.4.1"
      url: "https://arxiv.org/pdf/2002.06055"
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

A **bicategory** $\mathcal B$ consists of: a class of objects; for every ordered pair $X,Y$ a category $\mathcal B(X,Y)$ whose objects are **1-cells** $X\to Y$ and whose morphisms are **2-cells**; identity 1-cells $1_X:X\to X$; composition functors $c_{X,Y,Z}:\mathcal B(Y,Z)\times\mathcal B(X,Y)\to\mathcal B(X,Z)$, written $g\circ f$ on 1-cells and $\beta*\alpha$ on 2-cells; and invertible natural transformations (the associator and the two unitors)
$$\alpha_{h,g,f}:(h\circ g)\circ f\Rightarrow h\circ(g\circ f),\qquad \lambda_f:1_Y\circ f\Rightarrow f,\qquad \rho_f:f\circ1_X\Rightarrow f,$$
satisfying the pentagon identity $\alpha_{k,h,g\circ f}\,\alpha_{k\circ h,g,f}=(1_k*\alpha_{h,g,f})\,\alpha_{k,h\circ g,f}\,(\alpha_{k,h,g}*1_f)$ and the triangle identity $(1_g*\lambda_f)\,\alpha_{g,1_B,f}=\rho_g*1_f$, with composition of 2-cells read right to left. A **pseudofunctor** $F:\mathcal B\to\mathcal B'$ consists of a function on objects, functors $\mathcal B(X,Y)\to\mathcal B'(FX,FY)$, and invertible comparison 2-cells $\phi_{g,f}:F(g)\circ F(f)\Rightarrow F(g\circ f)$ and $\phi_X:1'_{FX}\Rightarrow F(1_X)$ natural in the composable 1-cells: for $u:f\Rightarrow f\prime$ and $v:g\Rightarrow g\prime$ one requires $F(v*u)\,\phi_{g,f}=\phi_{g\prime,f\prime}\,(F(v)*F(u))$. They satisfy
$$F(\alpha_{h,g,f})\,\phi_{h\circ g,f}\,(\phi_{h,g}*1_{F(f)})=\phi_{h,g\circ f}\,(1_{F(h)}*\phi_{g,f})\,\alpha'_{F(h),F(g),F(f)},$$
$$F(\lambda_f)\,\phi_{1_B,f}\,(\phi_B*1_{F(f)})=\lambda'_{F(f)},\qquad F(\rho_f)\,\phi_{f,1_A}\,(1_{F(f)}*\phi_A)=\rho'_{F(f)}.$$
Two objects $X,Y$ of a bicategory are **equivalent** when there are 1-cells $f:X\to Y$ and $g:Y\to X$ together with invertible 2-cells $1_X\Rightarrow g\circ f$ and $f\circ g\Rightarrow1_Y$. A pseudofunctor $F:\mathcal B\to\mathcal B'$ is a **biequivalence** when every local functor $\mathcal B(X,Y)\to\mathcal B'(FX,FY)$ is an equivalence of categories and every object of $\mathcal B'$ is equivalent to $FY$ for some object $Y$ of $\mathcal B$. A strict 2-category is the special case of a bicategory in which all associators and unitors are identities ([[def-strict-two-category]]); a one-object bicategory is exactly a monoidal category ([[def-monoidal-category]]). The definition asserts these axioms on supplied data; it does not assert that any particular tensor construction satisfies them, and it uses no choice.
