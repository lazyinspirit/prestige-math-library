---
id: alg-tamed-euler-superlinear-drift
kind: algorithm
title: "Tamed Euler scheme for a superlinear drift"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-locally-lipschitz-ito-sde-and-maximal-solution
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
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong convergence of an explicit numerical method for SDEs with nonglobally Lipschitz continuous coefficients, equations (8) and (10)"
      url: "https://arxiv.org/pdf/1010.3756"
---

## Definition

Assume AC and the Brownian conventions of
[[def-locally-lipschitz-ito-sde-and-maximal-solution]] on $[0,T]$ with
$U=\mathbb R^d$. The input is an autonomous drift $b:\mathbb R^d\to\mathbb
R^d$, diffusion $\sigma:\mathbb R^d\to\mathbb R^{d\times m}$, initial state
$\xi$, and integer $N\ge1$ with $h=T/N\le1$. Define $t_n=nh$ and
$$b_h(x)=\frac{b(x)}{1+h|b(x)|}.$$
Return the grid values, step process, continuous interpolation, and status as
follows.

1. Set $Y_0=\xi$.
2. For $n=0,\ldots,N-1$, set $\Delta W_n=W_{t_{n+1}}-W_{t_n}$ and
$$Y_{n+1}=Y_n+h b_h(Y_n)+\sigma(Y_n)\Delta W_n.$$
3. Set $\bar Y_t=Y_n$ on $[t_n,t_{n+1})$, with $\bar Y_T=Y_N$, and set
$$Y_t=Y_n+(t-t_n)b_h(Y_n)+\sigma(Y_n)(W_t-W_{t_n}), \qquad t\in[t_n,t_{n+1}].$$
The shared endpoint formulas agree with the grid recursion.

If the dimensions, horizon, step count, or finite-valued coefficient inputs
are invalid, return `invalid-input` without a trajectory. Otherwise return
`success` and the sequence. In exact real arithmetic each update is a finite
vector expression, and $|h b_h(x)|\le1$, so the finite recursion has no
implicit solve or branch failure. The algorithm by itself asserts no moment,
stability, or convergence property.
