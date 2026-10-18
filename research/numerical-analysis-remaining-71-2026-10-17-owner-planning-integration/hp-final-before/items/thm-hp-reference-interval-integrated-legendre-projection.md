---
id: thm-hp-reference-interval-integrated-legendre-projection
kind: theorem
title: Integrated Legendre projection gives an explicit p-rate in H1
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - lem-legendre-weighted-derivative-orthogonality-and-norm
  - def-hp-integrated-legendre-projector
  - def-legendre-weighted-sobolev-scale
  - thm-legendre-weighted-projection-error-rate
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is used only through the cited first L1 fundamental theorem of calculus; no arbitrary-index choice is used."
verification:
  precheck: pending
sources:
  references:
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, p-version FEM
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§§30.1–30.4: Legendre orthogonality and the integrated polynomial projection; the general simplex extension is not used as a proof here."
    - title: Leszek F. Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.oden.utexas.edu/~leszek/classes/EM394F/book.pdf
      locator: "§3.1.4, printed pp. 64–68: hierarchical p-version bases and endpoint/edge degrees of freedom."
---

## Statement

Assume Countable Choice. Let $p\ge1$, $s\ge0$, $g\in H_L^s$ as defined in [[def-legendre-weighted-sobolev-scale]], and $c\in\mathbb R$. Define $u(x)=c+\int_{-1}^xg(t)\,dt$ and $I_pu=\mathcal I_p(c,g)$ by [[def-hp-integrated-legendre-projector]]. Then $u$ and $I_pu$ are absolutely continuous, $I_pu\in\mathbb P_p$, and $I_pu(\pm1)=u(\pm1)$. Moreover,
$$\|u-I_pu\|_{H^1(-1,1)} \le\sqrt5\,(1+p(p+1))^{-s/2}\|g\|_{H_L^s},$$
where the displayed $H^1$ error norm is $\bigl(\|u-I_pu\|_{L^2}^2+\|g-\Pi_{p-1}g\|_{L^2}^2\bigr)^{1/2}$. This coefficient-scale assertion does not identify $H_L^s$ with an ordinary derivative-based Sobolev norm.

## Facts & Assumptions

**Given:** Countable Choice, $p\ge1$, $s\ge0$, $g\in H_L^s$, and $c\in\mathbb R$.

[F1] [[def-hp-integrated-legendre-projector]]: $\mathcal I_p(c,g)=c+\int_{-1}^x\Pi_{p-1}g$ is the degree-$p$ endpoint-anchored operator, with $\Pi_{p-1}$ the finite Legendre projection.

[F2] [[lem-legendre-weighted-derivative-orthogonality-and-norm]]: $\int_{-1}^1P_nP_m=2\delta_{nm}/(2n+1)$ and $P_0=1$.

[F3] [[def-legendre-weighted-sobolev-scale]]: $H_L^s$ is a coefficient completion with weights $(1+n(n+1))^s2/(2n+1)$, so its norm dominates its unweighted coefficient $L^2$ norm and truncation is the finite projection from [F1].

[F4] [[thm-legendre-weighted-projection-error-rate]]: $\|g-\Pi_Ng\|_{L_L^2}\le(1+(N+1)(N+2))^{-s/2}\|g\|_{H_L^s}$.

[F5] [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]: the primitive of an $L^1$ function is absolutely continuous.

[F6] [[thm-first-fundamental-theorem-of-calculus-for-l-one]]: under Countable Choice, the derivative of the primitive of an $L^1$ function equals its integrand almost everywhere.

[F7] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the $L^2$ inner product obeys Cauchy–Schwarz.

## Proof

1.1 By [F3], the coefficient completion embeds in $L^2$, and Cauchy–Schwarz [F7] on the interval of length two gives $g\in L^1$. Thus [F5] makes $u$ absolutely continuous. The definition [F1] makes $I_pu$ the integral of a polynomial of degree at most $p-1$, hence a degree-at-most-$p$ polynomial. By the finite projection formula in [F1] and Legendre orthogonality [F2], $g-\Pi_{p-1}g$ is orthogonal to constants, so $\int\Pi_{p-1}g=\int g$ and the endpoint values agree. The primitive defining $I_pu$ is absolutely continuous by [F5]. [F1, F2, F3, F5, F7, given, algebra]

2.1 Apply [F6] to the two primitives in step 1.1; their a.e. derivatives are $g$ and $\Pi_{p-1}g$, so $e=u-I_pu$ has derivative $e'=g-\Pi_{p-1}g$. By [F3] the finite projection is the truncation in [F1]; the tail estimate [F4] with $N=p-1$ gives $\|e'\|_{L^2}\le(1+p(p+1))^{-s/2}\|g\|_{H_L^s}$. Since $e(-1)=0$, $e(x)=\int_{-1}^xe'(t)\,dt$; Cauchy–Schwarz [F7] and integration over an interval of length two give $\|e\|_{L^2}\le2\|e'\|_{L^2}$. Therefore $\|e\|_{H^1}^2=\|e\|_{L^2}^2+\|e'\|_{L^2}^2\le5\|e'\|_{L^2}^2$, proving the estimate. [F1, F3, F4, F6, F7, step 1.1, algebra] ∎
