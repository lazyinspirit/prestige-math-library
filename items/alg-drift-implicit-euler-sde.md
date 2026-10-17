---
id: alg-drift-implicit-euler-sde
kind: algorithm
title: "Drift-implicit Euler–Maruyama with explicit solve-failure status"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-locally-lipschitz-ito-sde-and-maximal-solution
  - thm-backward-euler-dissipative-resolvent-contraction
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao and Andrew M. Stuart, Strong convergence of Euler-type methods for nonlinear stochastic differential equations, §5"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong convergence of an explicit numerical method for SDEs with nonglobally Lipschitz continuous coefficients, equation (6)"
      url: "https://arxiv.org/pdf/1010.3756"
---

## Definition

Assume AC and the Brownian conventions of
[[def-locally-lipschitz-ito-sde-and-maximal-solution]] on $[0,T]$ with
$U=\mathbb R^d$. An admissible mathematical input has finite dimensions
$d,m\ge1$, $T>0$, $N\ge1$ with $h=T/N\le1$, an autonomous continuous drift
$b:\mathbb R^d\to\mathbb R^d$, a finite-valued Borel diffusion
$\sigma:\mathbb R^d\to\mathbb R^{d\times m}$, and a finite
$\mathcal F_0$-measurable initial state $\xi$. It also has a constant
$\mu\ge0$ such that
$$\langle x-y,b(x)-b(y)\rangle\le-\mu|x-y|^2\qquad(x,y\in\mathbb R^d).$$
This global condition is a precondition on the mathematical input, not a
runtime test over all $x,y$. For $h>0$, set $H_h(x)=x-hb(x)$ and let
$R_h=H_h^{-1}$, which is defined uniquely on all of $\mathbb R^d$ by
[[thm-backward-euler-dissipative-resolvent-contraction]].

First check that $d,m$ are positive integers, $T$ is finite and positive,
$N$ is a positive integer, $0<h=T/N\le1$, and $\xi$ is finite. If any of
these checks fails, return `invalid-input`. An exact execution then sets
$Y_0=\xi$ and, for $n=0,\ldots,N-1$, computes
$$u_n=Y_n+\sigma(Y_n)(W_{t_{n+1}}-W_{t_n}),\qquad Y_{n+1}=R_h(u_n).$$
It returns the grid values, the left-endpoint step process
$$\bar Y_t=Y_n\quad(t_n\le t<t_{n+1}),\qquad \bar Y_T=Y_N,$$
and the continuous interpolation
$$Y_t=Y_n+(t-t_n)b(Y_{n+1})+\sigma(Y_n)(W_t-W_{t_n}), \qquad t_n\le t\le t_{n+1}.$$
This is a pathwise continuous extension of the grid values. At each shared
endpoint the interpolation agrees with the grid update.

A finite implementation may instead receive a root-solver interface $S$ and
an integer work cap $M\ge0$. Each call $S(H_h,u_n,M)$ must terminate after at
most $M$ declared solver iterations and return either
`certified-root(z, proof)` or `no-certificate(last-iterate, residual)` (with
`last-iterate = null` if the cap permits no iterate). The
supplied exact verifier must terminate and accepts a certificate precisely when it proves that
$z\in\mathbb R^d$ is finite and $H_h(z)=u_n$. At the first call returning
`no-certificate`, or at the first certificate rejected by the verifier, stop
and return `solve-failure` with zero-based failed index $n$, the valid grid prefix through
$Y_n$, the step process on $[0,t_n]$, the interpolation on $[0,t_n]$, and the
solver diagnostic. For `no-certificate`, retain its last iterate and residual;
for a rejected certificate with candidate $z$, report $z$ and residual
$H_h(z)-u_n$. If the diagnostic has no finite candidate, its iterate and
residual are null. Do not assign $Y_{n+1}$ or continue. A
verified root equals $R_h(u_n)$ by uniqueness. If every call is verified,
return `success` and the exact grid, step process, and interpolation above.
The global dissipativity condition remains an admissibility precondition and
is not tested by these finite-value checks. Thus a failed finite solve records
failure of certification, not absence of a mathematical root.
The algorithm makes no convergence or mean-square stability claim.
