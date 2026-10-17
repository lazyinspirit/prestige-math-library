---
id: ex-euler-midpoint-rk4-fixed-time-error-slopes
kind: example
title: "Fixed-time error slopes for Euler, midpoint, and classical RK4"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-euler-midpoint-rk4-tableaus
  - def-higher-derivatives-and-smoothness
  - def-real-exponential-function-and-e
  - lem-exponential-dominates-one-plus-x
  - prop-euler-midpoint-rk4-orders-and-stability-functions
  - thm-chain-rule
  - thm-derivative-of-exponential
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, Chapter III, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
---

## Example

Write $e^x:=\exp(x)$ for the power-series exponential of [[def-real-exponential-function-and-e]]. Apply the three methods of [[def-euler-midpoint-rk4-tableaus]] to $y'=-y$, $y(0)=1$, through the fixed final time $T=1$. For $N$ equal steps put $h=1/N$ and define the global grid error $E_N:=|y_N-e^{-1}|$. The claimed slopes mean $E_N\sim c h^p$ with a nonzero constant $c$; the table below records both constants and orders.

| Method | $p$ | $c$ in $E_N\sim c h^p$ |
|---|---:|---:|
| Forward Euler | 1 | $e^{-1}/2$ |
| Explicit midpoint | 2 | $e^{-1}/6$ |
| Classical RK4 | 4 | $e^{-1}/120$ |

## Facts & Assumptions

**Given:** The scalar IVP $y'=-y$, $y(0)=1$, the three tableaus, and the uniform grid $h=1/N$.

[F1] [[def-euler-midpoint-rk4-tableaus]]: Euler, explicit midpoint, and classical RK4 have the displayed explicit tableaus and stage updates.

[F2] [[prop-euler-midpoint-rk4-orders-and-stability-functions]]: for $y'=\lambda y$, their stability polynomials are $1+z$, $1+z+z^2/2$, and $1+z+z^2/2+z^3/6+z^4/24$, respectively.

[F3] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] and [[def-higher-derivatives-and-smoothness]]: a smooth scalar function equals its Taylor polynomial through degree $k$ plus a remainder bounded by a constant times the next power, when the next derivative is bounded on the segment.

[F4] [[thm-derivative-of-exponential]], [[def-real-exponential-function-and-e]], and [[thm-chain-rule]]: $\exp$ is smooth with $\exp'=\exp$, and the chain rule gives $(\exp(-t))'=-\exp(-t)$.

[F5] [[lem-exponential-dominates-one-plus-x]]: $\exp(0)=1$ and $1+x\le\exp(x)$ for every real $x$.

## Verification

1.1 By [F4]–[F5], $y(t)=\exp(-t)$ solves $y'=-y$ with $y(0)=1$. For one step, the tableaus [F1] and factors [F2] give $R$; put $d_h:=R-e^{-h}$. Taylor's theorem [F3] applied to $e^{-h}$ gives, for $p=1,2,4$ in the respective methods, $d_h=c_0h^{p+1}+O(h^{p+2}),\qquad c_0=-\tfrac12,-\tfrac16,\tfrac1{120}.$ Indeed the first omitted exponential coefficients after the displayed polynomials in [F2] are $-1/2$, $-1/6$, and $-1/120$, with the order-four polynomial-minus-exponential difference therefore $+1/120$. [F1, F2, F3, F4, F5, algebra]

2.1 For each method and sufficiently small $h$, set $q_h:=R e^h=1+e^h d_h$, so $|q_h-1|\le C h^{p+1}$ for a constant independent of $N$. For $m\le N=1/h$, factoring $q_h^m-1$ gives $|q_h^m-1|\le m|q_h-1|\max(1,|q_h|)^{m-1}\le C h^p e^C.$ The last bound follows from $|q_h|\le1+C h^{p+1}\le e^{C h^{p+1}}$ by [F5], so the factor of powers is at most $e^{CNh^{p+1}}\le e^C$. [F5, step 1.1, algebra]

3.1 Since $R=q_he^{-h}$, the finite-factor identity yields $R^N-e^{-1}=(R-e^{-h})\sum_{k=0}^{N-1}R^{N-1-k}e^{-kh} =d_h e^{-h(N-1)}\sum_{m=0}^{N-1}q_h^m.$ By step 2.1 each summand is $1+O(h^p)$ uniformly in $m$, and $e^{-h(N-1)}=e^{-1+h}=e^{-1}(1+O(h))$ by [F3]–[F4]. Thus the sum factor is $Ne^{-1}(1+O(h))$. [F3, F4, step 2.1, algebra]

4.1 Substituting the expansion from step 1.1 and $N=1/h$ into step 3.1 gives $R^N-e^{-1}=c_0e^{-1}h^p(1+O(h)).$ Because $c_0\ne0$, taking absolute values gives the three positive constants and slopes in the Example. [step 1.1, step 3.1, algebra] ∎
