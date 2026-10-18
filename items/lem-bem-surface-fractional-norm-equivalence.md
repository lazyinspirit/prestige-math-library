---
id: lem-bem-surface-fractional-norm-equivalence
kind: lemma
title: The chart and chordal surface H1/2 norms are equivalent
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-bem-lipschitz-polyhedral-boundary-and-trace-spaces
  - lem-bem-half-order-bessel-slobodeckij-equivalence
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is inherited through the cited Euclidean Fourier characterization.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed pp. 614–616: chartwise Gagliardo norms and equivalent Sobolev norms on Lipschitz boundaries."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.5, PDF pp. 12–14: graph-chart norms on Lipschitz polyhedral surfaces."
---

## Statement

Let $\Gamma$ and the chartwise norm on $H^{1/2}(\Gamma)$ be as in [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]]. For a measurable $g$ define
$$\|g\|_{H^{1/2}_{\mathrm{ch}}(\Gamma)}^2=\|g\|_{L^2(\Gamma)}^2+\int_\Gamma\int_\Gamma\frac{|g(x)-g(y)|^2}{|x-y|^3}\,ds_xds_y.$$
There are constants $c,C>0$ depending only on the fixed finite atlas and partition such that, first for smooth $g$ and then by completion,
$$c\|g\|_{H^{1/2}(\Gamma)}\le\|g\|_{H^{1/2}_{\mathrm{ch}}(\Gamma)}\le C\|g\|_{H^{1/2}(\Gamma)}.$$

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), the compact Lipschitz surface with the fixed compatible graph measure, its finite graph atlas and partition, and the fixed chartwise Bessel norm of [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]].

[A1] Countable Choice is assumed through the Euclidean Bessel/Slobodeckij identity ([[def-countable-choice]]).

[F1] On $\mathbb R^2$, the Bessel $H^{1/2}$ norm is equivalent to the $L^2$ norm plus the Slobodeckij seminorm with kernel $|x-y|^{-3}$ ([[lem-bem-half-order-bessel-slobodeckij-equivalence]]).

## Proof

1.1 In a graph chart write $\Phi(p)=(p,\psi(p))$. The map $\Phi$ is bi-Lipschitz: $|p-q|\le|\Phi(p)-\Phi(q)|\le(1+\operatorname{Lip}(\psi)^2)^{1/2}|p-q|$. Its surface Jacobian $J_\Phi=(1+|\nabla\psi|^2)^{1/2}$ is bounded above and below almost everywhere. Therefore the $L^2$ norm and the double-integral seminorm of a function supported a positive distance inside this chart are comparable to those of its pullback; pairs with one point outside the chart contribute at most a constant times the $L^2$ norm because the support is separated from the chart edge. By [F1], each localized chart Bessel norm is thus equivalent to the localized surface chordal norm. [A1, F1, given, algebra]

2.1 Write $g_j=\chi_jg$, so $g=\sum_{j=1}^Jg_j$. The inequality $|g(x)-g(y)|^2\le J\sum_j|g_j(x)-g_j(y)|^2$ shows that the global chordal norm is bounded by the sum of localized chordal norms from step 1.1. Conversely, $|g_j(x)-g_j(y)|\le |\chi_j(x)|\,|g(x)-g(y)|+|g(y)|\,|\chi_j(x)-\chi_j(y)|.$ Each $\chi_j$ is Lipschitz. The second term contributes at most $C\|g\|_{L^2}^2$ to the squared seminorm, since $\int_\Gamma|x-y|^{-1}ds_x$ is uniformly bounded in $y$: in each chart the surface area of a radius-$r$ disk is at most $Cr^2$, and summing dyadic annuli gives $\int_{|x-y|<1}|x-y|^{-1}ds_x\le C\sum_{m\ge0}2^{-m}<\infty$; the part $|x-y|\ge1$ is bounded by the finite surface area. Hence the sum of localized chordal norms is bounded by the global chordal norm. Combining both comparisons with step 1.1 proves the two-sided equivalence for smooth $g$. Equivalent norms have the same completion, which proves the stated extension. [A1, F1, step 1.1, given, algebra] ∎

