---
id: lem-exponential-integrator-interaction-picture-stability
kind: lemma
title: One-step stability after removing the exact linear flow
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-exponential-euler-and-etd2-step-maps
  - lem-exponential-phi-integral-representations
  - lem-exponential-series-of-a-bounded-operator
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-bounded-linear-operator
  - def-operator-norm
  - cor-finite-dimensional-normed-spaces-are-banach
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-complex-numbers-are-the-real-coordinate-plane
  - thm-dedekind-complete
  - thm-exponential-is-strictly-increasing
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§2.2–§2.3, exponential quadrature and exponential Runge–Kutta stability/error setup, PDF pp. 9–18, printed pp. 218–227."
    - title: "ISEM Team 2011/12, Operator Semigroups for Numerical Analysis, 15th Internet Seminar on Evolution Equations"
      url: "https://fan.uni-wuppertal.de/fileadmin/mathe/reine_mathematik/funktionalanalysis/farkas/15ISEM-NumerSgrp.pdf"
      locator: "Lecture 14, §14.4, equations (14.12)–(14.14), PDF pp. 166–168, printed pp. 171–173."
---

## Statement

Fix $T>0$, $A\in M_d(\mathbb C)$, and define
$$K_+:=\sup_{0\le r\le T}\|e^{rA}\|_2,\qquad K_-:=\sup_{0\le r\le T}\|e^{-rA}\|_2,\qquad \kappa:=LK_+K_-.$$
These constants are finite by continuity of the finite-matrix exponential. Let $g$ be $L$-Lipschitz in its state variable on a common tube containing all states and stages below. For $0<h\le T$ and an admissible $t$, define the transformed maps
$$\Theta^E_h(t,z):=e^{-(t+h)A}\Psi^E_h(t,e^{tA}z),\qquad \Theta^2_h(t,z):=e^{-(t+h)A}\Psi^2_h(t,e^{tA}z).$$
Then
$$\|\Theta^E_h(t,z)-\Theta^E_h(t,w)\|_2\le(1+\kappa h)\|z-w\|_2,$$
and
$$\|\Theta^2_h(t,z)-\Theta^2_h(t,w)\|_2\le\left(1+h\left(\kappa+\frac{T\kappa^2}{2}\right)\right)\|z-w\|_2.$$

## Facts & Assumptions

**Given:** The finite matrix, interval, methods, Lipschitz constant, and tube in the Statement.

[F1] [[def-exponential-euler-and-etd2-step-maps]]: $\Psi^E_h$ and $\Psi^2_h$ have the displayed exponential Euler and ETD2 formulas, with the predictor $a_h(t,y)=\Psi^E_h(t,y)$.

[F2] [[lem-exponential-phi-integral-representations]]: $\varphi_1(X)=\int_0^1e^{(1-\theta)X}d\theta$ and $\varphi_2(X)=\int_0^1\theta e^{(1-\theta)X}d\theta$.

[F3] [[def-bounded-linear-operator]], [[def-operator-norm]], [[cor-finite-dimensional-normed-spaces-are-banach]], and [[lem-exponential-series-of-a-bounded-operator]]: finite-matrix exponentials are continuous, differentiable and satisfy $e^{(r+q)A}=e^{rA}e^{qA}$.

[F4] [[def-inner-product-norm]], [[prop-standard-coordinate-inner-products]], and [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|\cdot\|_2$ is the Euclidean vector norm and the induced operator norm.

[F5] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] and [[thm-norm-inequality-for-the-vector-valued-integral]]: products obey $\|ST\|_2\le\|S\|_2\|T\|_2$, and vector integrals obey $\|\int v\|_2\le\int\|v\|_2$.

[F6] [[lem-exponential-series-of-a-bounded-operator]]: for finite $A$ on the finite-dimensional Banach space $\mathbb C^d$, $\|e^{\pm rA}\|_2\le e^{r\|A\|_2}$ for $0\le r\le T$. For $0\le r\le T$, nonnegativity of $\|A\|_2$ gives $r\|A\|_2\le T\|A\|_2$, so scalar exponential monotonicity ([[thm-exponential-is-strictly-increasing]]) gives $e^{r\|A\|_2}\le e^{T\|A\|_2}$. Both sets contain $\|I_d\|_2$ at $r=0$ and are therefore bounded above by $e^{T\|A\|_2}$; [[thm-dedekind-complete]] supplies finite suprema.

[F7] [[thm-complex-numbers-are-the-real-coordinate-plane]], [[prop-standard-coordinate-inner-products]], and [[def-inner-product-norm]]: for $v=(v_0,\ldots,v_{d-1})$, $\Phi_d(v):=(\operatorname{Re}v_0,\operatorname{Im}v_0,\ldots,\operatorname{Re}v_{d-1},\operatorname{Im}v_{d-1})$ is real-linear and satisfies $\|\Phi_d(v)\|_{\mathbb R^{2d}}^2=\sum_{j<d}|v_j|^2=\|v\|_2^2$. Thus the real vector-integral estimate [F5] applies to the complex-valued integrands with the same norms.

[A1] On the stated tube, $\|g(r,u)-g(r,v)\|_2\le L\|u-v\|_2$, and all transformed inputs and ETD2 predictor stages considered in the Statement remain admissible.

## Proof

1.1 By [F6], the defining sets are nonempty and bounded, so $K_+$ and $K_-$ are finite. Substituting $e^{tA}z$ into the exponential Euler formula and using [F2]–[F3] gives $\Theta^E_h(t,z)=z+\int_0^h e^{-(t+s)A}g(t,e^{tA}z)\,ds$. For $z,w$, [A1] and [F4] bound the integrand difference by $K_-LK_+\|z-w\|_2=\kappa\|z-w\|_2$; by [F7] the real integral norm inequality [F5] applies and integration over length $h$ proves the first inequality. [given, F1, F2, F3, F4, F5, F6, F7, A1, algebra]

2.1 Let $a_t(z):=a_h(t,e^{tA}z)$. The same identity as in step 1.1 gives $e^{-(t+h)A}a_t(z)=\Theta^E_h(t,z)$, hence [F3] and the first bound imply $\|a_t(z)-a_t(w)\|_2\le K_+(1+\kappa h)\|z-w\|_2$. [step 1.1, F3, algebra]

3.1 Applying [F2] to both ETD2 coefficients gives $\Theta^2_h(t,z)=z+\int_0^h e^{-(t+s)A}[(1-s/h)g(t,e^{tA}z)+(s/h)g(t+h,a_t(z))]\,ds$. By [A1] and step 2.1, the bracket difference for $z,w$ has norm at most $LK_+[(1-s/h)+(1+\kappa h)s/h]\|z-w\|_2$. Multiplying by the kernel bound $K_-$ and applying [F7] to use the real integral norm bound [F5] gives coefficient $1+\kappa h+\kappa^2h^2/2$, since both weight integrals equal $h/2$. As $h\le T$, this is at most $1+h(\kappa+T\kappa^2/2)$. [given, F1, F2, F4, F5, F7, A1, step 2.1, algebra] ∎
