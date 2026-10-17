---
id: alg-drift-implicit-euler-sde
kind: algorithm
title: "Drift-implicit Euler–Maruyama with explicit solve-failure status"
status: draft
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
$U=\mathbb R^d$. The input is an autonomous continuous drift
$b:\mathbb R^d\to\mathbb R^d$, a diffusion
$\sigma:\mathbb R^d\to\mathbb R^{d\times m}$, an initial state $\xi$, and
$N\ge1$ with $h=T/N\le1$. Require a constant $\mu\ge0$ such that
$$\langle x-y,b(x)-b(y)\rangle\le-\mu|x-y|^2 \quad\text{for all }x,y\in\mathbb R^d.$$
The map $H_h(x)=x-hb(x)$ is bijective by
[[thm-backward-euler-dissipative-resolvent-contraction]]; write
$R_h=H_h^{-1}$. Return the grid values, step process, interpolation, and
status by these instructions.

1. If the input or dissipativity condition is invalid, return `invalid-input`.
2. Set $Y_0=\xi$. For $n=0,\ldots,N-1$, compute
$$u_n=Y_n+\sigma(Y_n)(W_{t_{n+1}}-W_{t_n}),\qquad Y_{n+1}=R_h(u_n).$$
3. In an exact-real implementation return `success`, the sequence, and the
piecewise-constant step process $\bar Y_t=Y_n$ on $[t_n,t_{n+1})$.
4. A finite numerical root solver may return `solve-failure` with the failed
index, its last iterate, and residual
$z-hb(z)-u_n$ if it cannot certify the unique root. That failed iterate is
not a scheme value and is not used in later steps; return the valid prefix
only.

For valid exact-real inputs every resolvent value exists uniquely and is
finite. A finite implementation failure therefore reports an unsuccessful
numerical solve, not a nonexistent mathematical root. The algorithm alone
makes no convergence or mean-square stability claim.
