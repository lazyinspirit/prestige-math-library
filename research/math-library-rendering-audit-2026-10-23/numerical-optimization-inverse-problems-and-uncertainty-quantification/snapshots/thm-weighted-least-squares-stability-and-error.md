---
id: thm-weighted-least-squares-stability-and-error
kind: theorem
title: Weighted least squares is stable on the good Gram event
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-christoffel-weighted-least-squares-collocation
  - thm-christoffel-gram-concentration-bound
  - def-finite-chaos-orthogonal-projection
  - thm-finite-chaos-projection-parseval-and-moments
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice axiom is used; the proof is finite-dimensional least-squares linear algebra.
verification: {}
sources:
  references:
    - title: Albert Cohen and Giovanni Migliorati, Optimal Weighted Least-Squares Methods, §§2–3
      url: https://arxiv.org/pdf/1608.00512
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §3.4.3
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Statement

Let real $u\in L^2(\rho)$ have a representative evaluable at the Christoffel
samples, and let
$\widehat u$ be the accepted weighted least-squares fit from
[[alg-christoffel-weighted-least-squares-collocation]]. On the event
$\operatorname{spec}(G)\subseteq[1/2,3/2]$, the normal equations have a unique
solution, and $\widehat u$ is the unique minimizer over $p\in\mathcal P_\Lambda$
of the weighted empirical objective
$$J_M(p):=\frac1M\sum_{i=1}^M\frac{N}{K_\Lambda(X_i)}|u(X_i)-p(X_i)|^2.$$
Moreover,
$$\|\widehat u-P_\Lambda u\|_{L^2(\rho)} \le\sqrt2\left(\frac1M\sum_{i=1}^M \frac{N}{K_\Lambda(X_i)}|u(X_i)-P_\Lambda u(X_i)|^2\right)^{1/2},$$
so
$$\|u-\widehat u\|_{L^2(\rho)}^2\le \|u-P_\Lambda u\|_{L^2(\rho)}^2+ \frac2M\sum_{i=1}^M\frac{N}{K_\Lambda(X_i)} |u(X_i)-P_\Lambda u(X_i)|^2.$$
For $0<\delta<1$ and $M\ge12N\log(2N/\delta)$, the good event has probability
at least $1-\delta$ by
[[thm-christoffel-gram-concentration-bound]].

## Facts & Assumptions

**Given:** A finite real orthonormal family, $u\in L^2(\rho)$, samples and weights from the Christoffel least-squares algorithm, and the good Gram event.

[F1] [[alg-christoffel-weighted-least-squares-collocation]] defines $G$, the weighted normal-equation vector, and the accepted fit.

[F2] [[thm-christoffel-gram-concentration-bound]] gives probability at least $1-\delta$ for the good Gram event under the stated sample budget.

[F3] [[def-finite-chaos-orthogonal-projection]] defines $P_\Lambda u$ and its coefficient vector $c$.

[F4] [[thm-finite-chaos-projection-parseval-and-moments]] gives $u-P_\Lambda u\perp\mathcal P_\Lambda$.

[F5] [[thm-independent-polynomial-chaos-tensors-are-orthonormal]] gives the real orthonormal basis used by the design matrix.

## Proof

1.1 Put $w_i=N/K_\Lambda(X_i)>0$, and let the $i$th row of the design matrix $A$ be $\sqrt{w_i/M}\,\psi(X_i)^T$. Then $A^TA=G$. On the good event, $G$ is positive definite, so the normal equations have the unique solution $\widehat c=G^{-1}A^Tz$, where $z_i=\sqrt{w_i/M}\,u(X_i)$. [F1, given, algebra]

1.2 For any coefficient vector $\gamma$, the objective at $p=\sum_{\alpha\in\Lambda}\gamma_\alpha\psi_\alpha$ is $J_M(p)=\|A\gamma-z\|_2^2$. The normal equations give $A^T(A\widehat c-z)=0$. With $d:=\gamma-\widehat c$, expansion yields
$$J_M(p)-J_M(\widehat u)=2d^TA^T(A\widehat c-z)+d^TA^TAd=d^TGd.$$
Positive definiteness of $G$ makes this difference strictly positive whenever $\gamma\ne\widehat c$. Since the basis coefficients uniquely identify elements of $\mathcal P_\Lambda$, $\widehat u$ is the unique minimizer. [F1, step 1.1, algebra]

2.1 Let $c$ be the exact coefficient vector of $P_\Lambda u$ and let $r_i=u(X_i)-P_\Lambda u(X_i)$. Then $z-Ac$ has entries $\sqrt{w_i/M}\,r_i$, and the normal equations give $\widehat c-c=G^{-1}A^T(z-Ac)$. Moreover, $(G^{-1}A^T)(G^{-1}A^T)^T=G^{-1}A^TAG^{-1}=G^{-1}$. Thus $\|G^{-1}A^T\|_{\mathrm{op}}^2=\lambda_{\max}(G^{-1})=1/\lambda_{\min}(G)\le2$, yielding the first bound. [F1, F3, F5, step 1.1, algebra]

3.1 Orthonormality [F5] gives $\|\widehat u-P_\Lambda u\|_{L^2(\rho)}=\|\widehat c-c\|_2$. By [F4], $u-P_\Lambda u$ is orthogonal to this polynomial difference, so Pythagoras gives $\|u-\widehat u\|^2=\|u-P_\Lambda u\|^2+\|\widehat u-P_\Lambda u\|^2$. Substitute the first bound and square it to obtain the second inequality. [F4, F5, step 2.1, algebra]

4.1 The probability assertion is exactly [F2] under its stated independent sampling and budget hypotheses; no probability is asserted outside that good-event regime. [F2, given] ∎
