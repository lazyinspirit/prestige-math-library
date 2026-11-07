---
id: lem-voronoi-circle-angular-measure
kind: lemma
title: "Polar surface measure on the unit circle is angular Lebesgue measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-countable-choice, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, cor-volume-of-a-radius-r-n-ball, cor-real-gamma-positive-integer-values, thm-linear-change-of-variables-for-lebesgue-measure, lem-q-and-irrationals-dense-r, thm-measure-uniqueness-on-a-sigma-finite-pi-system]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.49"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
      locator: "The polar-coordinate change of variables and the surface measure on the sphere"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $S^1:=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$, let $\lambda_2$ be planar Lebesgue measure, and for Borel $E\subseteq S^1$ define
$$\sigma(E):=2\lambda_2\{r\omega:\omega\in E,\ 0<r\le1\}.$$
Let $\mu(E)$ be the one-dimensional Lebesgue measure of $\{\theta\in[0,2\pi): (\cos\theta,\sin\theta)\in E\}$. For $0\le\alpha\le\beta\le2\pi$, write
$$A_{\alpha,\beta}:=\{(\cos\theta,\sin\theta):\alpha\le\theta<\beta\},$$
so that $A_{0,2\pi}=S^1$. Then $\sigma=\mu$ on all Borel subsets of $S^1$. Equivalently, every continuous $g:S^1\to\mathbb C$ satisfies
$$\int_{S^1}g(\omega)\,d\sigma(\omega)=\int_0^{2\pi}g(\cos\theta,\sin\theta)\,d\theta.$$

## Statement references

[Folland, Real Analysis, Theorem 2.49](https://djvu.online/file/NPF4BEtSuqdFA)

## Facts & Assumptions

**Given:** Countable Choice, the unit circle $S^1$, planar Lebesgue measure, and the two finite Borel measures in the Statement.

[A1] [[def-countable-choice]]: Countable Choice is the choice principle assumed by the polar-coordinate supplier.

[F1] [[def-polar-surface-measure-on-the-unit-sphere]]: for Borel $E\subseteq S^1$, $\sigma(E)=2\lambda_2\{r\omega:\omega\in E,\ 0<r\le1\}$.

[F2] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: under Countable Choice, $\sigma$ is a finite Borel measure on $S^1$.

[F3] [[thm-linear-change-of-variables-for-lebesgue-measure]]: rotations preserve planar Lebesgue measure because their determinant has absolute value $1$.

[F4] [[cor-volume-of-a-radius-r-n-ball]] and [[cor-real-gamma-positive-integer-values]]: the unit disk has area $\pi$ and its center has area $0$.

[F5] [[lem-q-and-irrationals-dense-r]]: rational numbers are dense in the real line.

[F6] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: finite measures agreeing on a generating $\pi$-system containing the whole finite-measure space are equal on its generated Borel sigma-algebra.

## Proof

1.1 For an integer $q\ge1$, divide $[0,2\pi)$ into the half-open intervals $[2\pi j/q,2\pi(j+1)/q)$ for $0\le j<q$. Their sectors in the unit disk with the origin removed are disjoint and cover the punctured disk. Rotation by $2\pi/q$ carries each sector to the next and preserves area by [F3], so all $q$ sectors have equal area. By [F4] their common area is $\pi/q$. Hence the sector of angle $2\pi a/q$ has area $a\pi/q$ for integers $0\le a\le q$. For any $\theta\in[0,2\pi]$, density [F5] gives rational fractions below and above $\theta/(2\pi)$ arbitrarily close to it; inclusion of the corresponding sectors and monotonicity of area squeeze the sector of angle $\theta$ to area $\theta/2$. Rotating the sector shows that the region over every arc $A_{\alpha,\beta}$ has area $(\beta-\alpha)/2$. [F3, F4, F5, given, choose]

2.1 By [F1] and step 1.1, $\sigma(A_{\alpha,\beta})=\beta-\alpha$. The angle parametrization is one-to-one on $[0,2\pi)$, so the definition of $\mu$ gives $\mu(A_{\alpha,\beta})=\beta-\alpha$ as well. Half-open non-wrapping arcs, the empty set, and $S^1$ form a $\pi$-system; arcs with rational endpoints form a countable base after arcs crossing the angle-zero cut are split into two pieces, so this system generates the Borel sets of $S^1$. Both measures have total mass $2\pi$, and therefore agree on a finite-measure exhaustion consisting of $S^1$. By [F2] and [F6], $\sigma=\mu$ on every Borel set. [A1, F1, F2, F5, F6, step 1.1, given]

3.1 Equality of the measures in step 2.1 gives equality of integrals first for indicator functions, then for simple functions, and then for bounded Borel functions by the definition of the Lebesgue integral. A continuous function on the compact circle is bounded; apply this argument to its real and imaginary parts to obtain the displayed formula. [step 2.1, given] ∎
