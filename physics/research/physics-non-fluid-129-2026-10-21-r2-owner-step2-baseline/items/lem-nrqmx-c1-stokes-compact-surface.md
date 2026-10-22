---
id: lem-nrqmx-c1-stokes-compact-surface
kind: lemma
domain: mathematics
library: mathematics
title: Stokes for C1 one-forms on compact surface regions
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-countable-choice
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - thm-heine-borel-rn
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - thm-general-stokes-theorem
  - thm-multidimensional-integral-properties
dependency_roles:
  def-countable-choice: mathematical-premise
  def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed., §16, Theorem 16.11 and Theorem 16.25
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: "Theorem 16.11, pp. 411–414, proves smooth Stokes by half-space calculation and partition localization; Theorem 16.25, pp. 419–420, treats corners. The local C1 extension is proved here by C1 mollification."
---

## Statement

Assume Countable Choice. Let $M$ be a compact oriented smooth surface with boundary, and let $D\subseteq M$ be a compact oriented region whose boundary consists of finitely many $C^2$ arcs meeting at finitely many corners. Let $\eta=a\,dx+b\,dy$ be a complex-valued $C^1$ one-form on a neighborhood of $D$ in each local chart, where $C^1$ means its coefficients and first partial derivatives are continuous up to the boundary. Define $d\eta=(\partial_xb-\partial_ya)\,dx\wedge dy$ in each chart; the chain rule and symmetry of second derivatives make this expression coordinate-independent. Give $\partial D$ the outward-normal-first orientation. Then
$$\int_D d\eta=\int_{\partial D}\eta.$$

## Facts & Assumptions

**Given:** Countable Choice, the compact oriented surface with boundary $M$, the piecewise-$C^2$ region $D$, and the $C^1$ one-form $\eta$ on a neighborhood of $D$.

[A1] Countable Choice is [[def-countable-choice]], the choice principle required by the smooth partition and smooth Stokes suppliers.

[F1] [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]] and [[def-c-r-and-smooth-maps-between-smooth-manifolds]]: boundary charts take values in a closed half-space, and $C^1$ means that the function and first coordinate partial derivatives extend continuously to its boundary.

[F2] [[thm-heine-borel-rn]]: closed bounded coordinate disks and half-disks in $\mathbb R^2$ are compact.

[F3] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: under Countable Choice, a finite chart cover of a compact surface with boundary admits a smooth subordinate partition of unity.

[F4] [[thm-general-stokes-theorem]]: under Countable Choice, for a smooth real one-form on a compact oriented smooth surface region with smooth boundary, the exterior-derivative integral equals the outward-normal-first boundary integral.

[F5] [[thm-multidimensional-integral-properties]]: coordinate integrals are linear, obey monotonicity, and satisfy $|\int f|\leq\int|f|$; hence uniform convergence of continuous coefficients on a compact coordinate region implies convergence of their integrals.

## Proof

1.1 The chart formula for $d\eta$ is invariant: under a smooth change $x=x(y)$, differentiating transformed coefficients creates symmetric second-derivative terms, which cancel after wedging. For every point of compact $D$, choose nested coordinate disks or half-disks with $\overline{U_x}\subset V_x$, $\overline{V_x}\subset W_x$, and $W_x$ contained in a chart inside the domain of $\eta$; [F2] makes the closures compact. A finite family of the $U_x$ covers $D$. On their open union, a smooth partition subordinate to the corresponding $V_x$ exists by [F3]; each support lies in the compact closure of $V_x$, hence inside the larger chart $W_x$ away from its artificial edges. It decomposes $\eta$ near $D$ into finitely many $C^1$ chart forms with compact support away from artificial chart edges. For an interior chart, extend every coefficient by zero to $\mathbb R^2$. For a boundary chart with coordinates $(x,t)$, $t\geq0$, extend each coefficient $f$ across $t=0$ by $\widetilde f(x,t)=2f(x,0)-f(x,-t)$ for $t<0$ and $\widetilde f(x,t)=f(x,t)$ for $t\geq0$. The two formulas have the same value and first derivatives at $t=0$, so $\widetilde f$ is $C^1$; compact chart support permits zero extension across artificial edges. Choose a nonnegative smooth mollifier $\rho$ supported in the unit disk with integral one, and set $\rho_\epsilon(y)=\epsilon^{-2}\rho(y/\epsilon)$. For each extension $f$ and $|\alpha|\leq1$, differentiation under the integral (or integration by parts) gives $\partial^\alpha(\rho_\epsilon*f)=\rho_\epsilon*(\partial^\alpha f)$, and $\|\rho_\epsilon*(\partial^\alpha f)-\partial^\alpha f\|_\infty\leq\sup_{|y|\leq\epsilon}\|\partial^\alpha f(\,\cdot-y)-\partial^\alpha f\|_\infty\longrightarrow0,$ because the compactly supported coefficients and first derivatives are uniformly continuous. For sufficiently small $\epsilon$, the convolved supports remain in their charts. Pulling back and summing the finite approximants gives smooth one-forms $\eta_\epsilon$ near $D$ with $\eta_\epsilon\to\eta$ in $C^1$. [A1, F1, F2, F3, construct, algebra]

2.1 Fix $\epsilon$. Apply [F4] separately to the real and imaginary parts of $\eta_\epsilon$; adding the equalities gives Stokes for the complex form. Round each corner inside a coordinate disk or half-disk by replacing the two incident short arcs with a smooth joining arc. In its chart the changed boundary length is $O(r)$ and the changed area is $O(r^2)$ as the rounding radius $r\downarrow0$; there are finitely many corners. Since $\eta_\epsilon$ and $d\eta_\epsilon$ are bounded on a compact neighborhood of $D$, the integrals over the changed pieces tend to zero. Apply [F4] to each rounded smooth region and pass to the corner limit; this proves the formula for $\eta_\epsilon$ on $D$. Finally, $C^1$ convergence gives uniform convergence of $d\eta_\epsilon$ on $D$ and of $\eta_\epsilon$ on its finitely many boundary arcs. Coordinate integration and [F5] let both integrals converge to those of $d\eta$ and $\eta$. Therefore the formula holds for $\eta$. [A1, F1, F4, F5, step 1.1, algebra] ∎
