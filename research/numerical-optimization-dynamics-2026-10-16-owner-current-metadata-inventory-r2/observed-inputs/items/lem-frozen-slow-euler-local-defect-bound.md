---
id: lem-frozen-slow-euler-local-defect-bound
title: "Local defect bound for frozen-slow Euler with fast microsteps"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-frozen-slow-explicit-fast-euler
  - lem-frozen-slow-euler-variation-bounds
  - def-first-order-ode-initial-value-problem-and-solution
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - def-vector-valued-derivative-and-integral
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-monotonicity-of-the-integral
  - thm-continuous-implies-integrable
  - thm-componentwise-limits-and-continuity
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael Günther and Adrian Sandu, Multirate Methods for Ordinary Differential Equations, CSL-TR-25-5 (2025)"
      url: "https://vtechworks.lib.vt.edu/bitstreams/107ab78d-834d-44a8-9cc8-566d7f2a2911/download"
    - title: "Michael Günther, Numerical Analysis and Simulation I — Ordinary Differential Equations, Chapter 4: Multirate Schemes (lecture notes, 2017/18)"
      url: "https://acm.uni-wuppertal.de/fileadmin/mathe/www-num/teaching/ode_1819/script_1819.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb R^{r+s}$ be open, let $r,s\ge1$, and let $F=(f,g):\Omega\to\mathbb R^r\times\mathbb R^s$ be continuous. Assume $K,M\ge0$, and that $F$ is jointly $K$-Lipschitz and bounded by $M$ on a common set containing the exact solution $U(t)=(x(t),z(t))$, $0\le t\le H$, and every microstate $(x_0,z_j)$ of [[alg-frozen-slow-explicit-fast-euler]] started at $U(0)=(x_0,z_0)$. Assume the exact path and those microstates lie in the domain where these bounds hold, $H>0$, $m\ge1$, and $h=H/m$. Then the successful macro output $(x^+,z_m)$ satisfies
$$\|(x^+,z_m)-U(H)\|_2\le4KMH^2.$$

## Facts & Assumptions

**Given:** The exact IVP solution, jointly Lipschitz and bounded field, positive macro step, positive integer microstep count, and the common-domain conditions in the Statement.

[F1] View the autonomous field as $\widehat F(t,u):=F(u)$ on $\mathbb R\times\Omega$. An exact first-order IVP solution then satisfies the componentwise Volterra integral equation on every subinterval ([[def-first-order-ode-initial-value-problem-and-solution]], [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]], [[def-vector-valued-derivative-and-integral]]).

[F2] The vector integral obeys $\|\int_a^b V(t)\,dt\|_2\le\int_a^b\|V(t)\|_2\,dt$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F3] A successful step uses $x^+=x_0+Hf(x_0,z_0)$ and $z_m=z_0+\sum_{j=0}^{m-1}h g(x_0,z_j)$ ([[alg-frozen-slow-explicit-fast-euler]]).

[F4] Along the exact path, $\|U(s)-U(0)\|_2\le Ms$; for every microstate, $\|z_j-z_0\|_2\le jhM$ ([[lem-frozen-slow-euler-variation-bounds]]).

[F5] A coordinate projection does not increase the Euclidean norm, and $\|(a,b)\|_2\le\|a\|_2+\|b\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F6] If an integrable real-valued function $w$ satisfies $0\le w\le C$ on $[a,b]$, then $\int_a^b w\le C(b-a)$ ([[thm-monotonicity-of-the-integral]], claim 3).

[F7] A continuous vector-valued function on a compact interval has continuous components, hence is componentwise integrable ([[thm-componentwise-limits-and-continuity]], [[def-vector-valued-derivative-and-integral]], [[thm-continuous-implies-integrable]]).

[A1] On all points compared below, $\|F(u)-F(v)\|_2\le K\|u-v\|_2$ and $\|F(u)\|_2\le M$.

## Proof

1.1 By [F1] and [F3], the slow coordinate defect is the integral of the continuous vector-valued integrand $f(x_0,z_0)-f(x(s),z(s))$, integrable by [F7]. The projection bound [F5], Lipschitz condition [A1], and [F4] show its pointwise norm is at most $KMH$. Applying [F2] and [F6] to this integrand gives $\|x^+-x(H)\|_2\le KMH^2$. [F1, F2, F3, F4, F5, F6, F7, A1, algebra]

1.2 By [F1] and [F3], the fast-coordinate defect is the sum over $j$ of integrals of the continuous vector-valued functions $g(x_0,z_j)-g(x(s),z(s))$ on $[jh,(j+1)h]$, integrable by [F7]. For such an $s$, [F4] gives $\|x(s)-x_0\|_2\le Ms\le MH$ and $\|z(s)-z_j\|_2\le\|z(s)-z_0\|_2+\|z_j-z_0\|_2\le Ms+jhM\le2MH$. By [F5], the product-state distance is at most the sum of these coordinate distances, hence at most $3MH$. [F1, F3, F4, F5, F7, algebra]

2.1 The projection bound [F5] and [A1] therefore bound each fast integrand norm by $3KMH$. Applying [F2] and [F6] on each interval, then summing the $m$ interval norms, gives $\|z_m-z(H)\|_2\le m h(3KMH)=3KMH^2$. [F2, F5, F6, F7, A1, step 1.2, algebra]

3.1 By [F5], the product output error is at most the sum of the coordinate errors from steps 1.1 and 2.1. Thus it is at most $(1+3)KMH^2=4KMH^2$, as claimed. [F5, step 1.1, step 2.1, algebra] ∎
