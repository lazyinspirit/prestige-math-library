---
id: lem-rosenbrock-euler-local-defect
kind: lemma
title: Rosenbrock-Euler local defect bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-rosenbrock-euler-step-map, cor-mean-value-theorem, def-first-order-ode-initial-value-problem-and-solution, thm-chain-rule-for-total-derivatives]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §1.8, pp. 33–34"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 2–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
verification:
  precheck: pending
---

## Statement

Let $K\subset U\subset\mathbb R^d$ be compact and convex, let $f:U\to\mathbb R^d$ be continuously differentiable, and suppose $\|f(y)\|\le F$ and $\|Df(y)\|\le L$ on $K$. For $0<h\le h_0$, assume $I-hDf(y)$ is invertible for every $y\in K$ with inverse norm at most $B$. If the exact solution starting at $y$ stays in $K$ on $[t,t+h]$, the exact-arithmetic step $\Phi_h(y)$ of [[def-rosenbrock-euler-step-map]], with $\gamma=1$, autonomous field $f$ and exact Jacobian $Df(y)$, satisfies
$$
\|\Phi_h(y)-y(t+h)\|\le FL(B+1)h^2.
$$
The claim is a local defect bound; it does not by itself assert global convergence.

## Facts & Assumptions

**Given:** The compact convex set, vector field, bounds, exact solution segment, and uniform inverse bound in the statement.

[F1] [[def-rosenbrock-euler-step-map]]: for the autonomous exact-Jacobian branch with $\gamma=1$, the exact stage solves $(I-hDf(y))k=f(y)$ and the exact-method update is $\Phi_h(y)=y+hk$. No finite-precision execution or success status is used.

[F2] [[thm-chain-rule-for-total-derivatives]]: for differentiable maps, the derivative of a composition is the derivative of the outer map composed with the derivative of the inner map.

[F3] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable on its interior, its endpoint difference equals its derivative at some interior point times the interval length.

[F4] [[def-first-order-ode-initial-value-problem-and-solution]]: a solution curve is differentiable and satisfies $y'=f(y)$ on its interval.

## Proof

1.1 Write $J=Df(y)$ and $M=I-hJ$. By [F1], $k=M^{-1}f(y)$; hence $\|k\|\le BF$. Since $M^{-1}-I=M^{-1}(I-M)=hM^{-1}J$, $\|k-f(y)\|\le hBLF$. [given, F1, algebra]

1.2 By [F4], $y'(t+s)=f(y(t+s))$. Put $g(s)=f(y(t+s))$. By [F2], $g'(s)=Df(y(t+s))f(y(t+s))$, so $\|g'(s)\|\le LF$. For any continuously differentiable vector curve $g$ with this derivative bound, the scalar mean-value theorem [F3] implies $\|g(s)-g(0)\|\le LFs$: if the difference is nonzero, take its unit direction $u$, apply [F3] to $r\mapsto u\cdot g(r)$, and use $|u\cdot g'(r)|\le\|g'(r)\|$. Thus $q(s):=y(t+s)-y-sf(y)$ has $q'(s)=g(s)-g(0)$ with $\|q'(s)\|\le LFs$. Applying the same vector-curve bound to $q$ on $[0,h]$ yields $\|y(t+h)-y-hf(y)\|=\|q(h)\|\le LFh^2$. [given, F2, F3, F4, choose]

2.1 The numerical increment differs from forward Euler by $h(k-f(y))$, bounded by $BLFh^2$ in step 1.1. The triangle inequality with step 1.2 proves the stated local defect bound with $C_0:=FL(B+1)$. [step 1.1, step 1.2, algebra] ∎
