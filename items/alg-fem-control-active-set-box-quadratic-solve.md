---
id: alg-fem-control-active-set-box-quadratic-solve
kind: algorithm
title: Finite exhaustive active-set solve for a box-constrained positive quadratic
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–5: box variational inequalities and active bounds for quadratic elliptic control."
---

## Definition

Let $H\in\mathbb R^{n\times n}$ be symmetric positive definite, $c\in\mathbb R^n$, and $\ell,u\in\mathbb R^n$ with $\ell_i\le u_i$. For $\phi(x)=\frac12x^THx+c^Tx$, enumerate the finite set of status vectors $\sigma\in\{L,F,U\}^n$ in lexicographic order. For each status, set $x_i=\ell_i$ if $\sigma_i=L$, set $x_i=u_i$ if $\sigma_i=U$, and for the free indices $F$ solve
$$
H_{FF}x_F=-c_F-H_{FA}x_A,
$$
where $A=L\cup U$. Skip a singular solve. Retain a candidate only if $\ell_i<x_i<u_i$ for $i\in F$, and the gradient $g=Hx+c$ satisfies $g_i\ge0$ on $L$, $g_i=0$ on $F$, and $g_i\le0$ on $U$. Return the first retained candidate; if none is retained, return `no-candidate`. Computations in this definition are exact real arithmetic. If $\ell_i=u_i$, that coordinate may be assigned status $L$ or $U$.
