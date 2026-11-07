---
id: alg-interval-arithmetic-for-l-function-zero-counts
kind: algorithm
title: "Interval-arithmetic evaluation and error tracking for degree-one L-functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-dirichlet-l-function
  - thm-primitive-dirichlet-l-analytic-continuation
  - def-completed-dirichlet-l-function
  - def-euler-gamma-function
  - thm-euler-gamma-function-is-holomorphic
  - thm-cauchy-integral-formula-circle
  - thm-taylor-expansion-holomorphic-function
  - thm-cauchy-integral-formula-higher-derivatives
  - cor-ml-estimate-for-complex-line-integrals
  - thm-termwise-differentiation-of-complex-power-series
  - lem-trigonometric-identities-machin-and-range-reduction
  - thm-principal-inverse-tangent-calculus
  - thm-alternating-series-test
  - lem-geometric-sequence-null
sources:
  references:
    - title: "David J. Platt, Isolating some non-trivial zeros of zeta, §§3, 5"
      url: "https://community.ams.org/journals/mcom/2017-86-307/S0025-5718-2017-03198-7/S0025-5718-2017-03198-7.pdf"
verification:
  precheck: n/a
---

## Definition

This algorithm propagates rigorous value and derivative enclosures for a holomorphic function represented by a Taylor certificate. For its degree-one L-function use, the function is $L(s,\chi)$ or its completion $\Lambda(s,\chi)$ for a primitive Dirichlet character $\chi$ modulo $q$ of parity $a\in\{0,1\}$; the principal character modulo $1$ gives the Riemann zeta function. A disc used for a meromorphic choice must avoid its poles.

A **rational real interval** is a closed interval $I=[u,v]$ with rational endpoints $u\le v$. A **rational complex rectangle** is $X=[u,v]+i[w,x]$ with rational endpoints and $u\le v$, $w\le x$. A rectangle encloses $z\in\mathbb C$ when $\operatorname{Re}z\in[u,v]$ and $\operatorname{Im}z\in[w,x]$.

The input consists of finitely many Taylor certificates. Each certificate specifies a centre $c\in\mathbb Q+i\mathbb Q$, radii $0<r<R$ in $\mathbb Q$, an integer $n\ge0$, rational complex rectangles $A_k$ containing the Taylor coefficients $F^{(k)}(c)/k!$ for $0\le k\le n$, and a rational number $M\ge0$ with a certified bound $|F(z)|\le M$ on $|z-c|=R$. It also specifies rational target rectangles $X$ contained in $|z-c|\le r$. The input contract requires $F$ holomorphic on an open neighbourhood of the closed disc $|z-c|\le R$ and requires the coefficient and boundary bounds to be justified enclosures, not rounded point estimates.

For a rational real interval, addition and subtraction use endpoint arithmetic; multiplication takes the minimum and maximum of the four endpoint products. For a complex rectangle, addition and subtraction use the real and imaginary interval operations separately, and multiplication uses $(x+iy)(u+iv)=(xu-yv)+i(xv+yu)$ with interval operations on each product and sum. Division is allowed only when the denominator rectangle excludes $0$ and the resulting interval for $x^2+y^2$ has a strictly positive lower endpoint; then multiply by the conjugate and divide by that positive interval. All endpoints remain rational and every operation is exact.

For a requested integer $N\ge0$, the algorithm also constructs a rational interval for $\pi$. Set
$$A_N(x)=\sum_{k=0}^{N}\frac{(-1)^kx^{2k+1}}{2k+1},\qquad e_N(x)=\frac{x^{2N+3}}{2N+3}.$$
The alternating-series rule encloses $\arctan(x)$ between $A_N(x)$ and $A_N(x)+(-1)^{N+1}e_N(x)$ for $x\in\{1/5,1/239\}$. Combine these two rational intervals through $\pi=16\arctan(1/5)-4\arctan(1/239)$ to obtain the required interval $P_N$.

For each target rectangle $X$, evaluate the Taylor polynomial $P_n(X)=\sum_{k=0}^{n}A_k(X-c)^k$ by those interval rules. Put $\rho=r/R$. Add to each real and imaginary coordinate of $P_n(X)$ the symmetric error interval with radius
$$E_0=M\frac{\rho^{n+1}}{1-\rho}.$$
For the derivative, evaluate $P_n'(X)=\sum_{k=1}^{n}kA_k(X-c)^{k-1}$ and add the coordinatewise symmetric error interval with radius
$$E_1=\frac{M}{R}\rho^n\left(\frac{n+1}{1-\rho}+\frac{\rho}{(1-\rho)^2}\right).$$
Return the resulting rational complex rectangles as enclosures of $F(X)$ and $F'(X)$. Reject malformed certificates, nonpositive radius gaps, target rectangles outside the stated smaller disc, or any division whose denominator interval may contain $0$.

## Definition references

[[def-dirichlet-l-function]]

[[thm-primitive-dirichlet-l-analytic-continuation]]

[[def-completed-dirichlet-l-function]]

[[def-euler-gamma-function]]

[[thm-euler-gamma-function-is-holomorphic]]

[[thm-cauchy-integral-formula-circle]]


[[thm-taylor-expansion-holomorphic-function]]

[[thm-cauchy-integral-formula-higher-derivatives]]

[[cor-ml-estimate-for-complex-line-integrals]]

[[thm-termwise-differentiation-of-complex-power-series]]

[[lem-trigonometric-identities-machin-and-range-reduction]]

[[thm-principal-inverse-tangent-calculus]]

[[thm-alternating-series-test]]

[[lem-geometric-sequence-null]]
