---
id: ex-frozen-slow-interpolation-limits-order
title: "Freezing a varying slow waveform leaves a first-order coupling error"
kind: example
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-frozen-slow-explicit-fast-euler
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Consider $x'=1$, $z'=x$, $(x_0,z_0)=(0,0)$ on $[0,T]$, with $T>0$ and $N\ge1$ equal macro steps $H=T/N$. The exact solution is $x(t)=t$, $z(t)=t^2/2$. The frozen-slow method [[alg-frozen-slow-explicit-fast-euler]] has $x_n=nH$ and $z_N=T^2/2-TH/2$, so its terminal $z$ error is $TH/2$. For any integer $m\ge1$, set $h=H/m$ and instead update each midpoint-sampled block by $z_{n,0}=z_n$ and $z_{n,j+1}=z_{n,j}+h(x_n+(j+\tfrac12)h)$ for $0\le j<m$. Then one macro update adds exactly $Hx_n+H^2/2$, and this alternative gives the exact solution at every macro node for this model. This is a model-specific diagnostic, not a claim about any unverified symmetric composition.

## Facts & Assumptions

**Given:** The model, initial values, $T>0$, and integer $N\ge1$ in the Example.

[F1] The frozen-slow algorithm sets $x^+=x+Hf(x,z)$ and uses the original $x$ during its fast updates $z_{j+1}=z_j+h g(x,z_j)$ ([[alg-frozen-slow-explicit-fast-euler]]).

[A1] Here $f(x,z)=1$, $g(x,z)=x$, and $H=T/N$.

## Proof

1.1 Direct integration gives $x(t)=t$ and $z(t)=t^2/2$. By [F1] and [A1], induction on $n$ gives $x_n=nH$; because $g(x_n,z)=x_n$ is constant across a frozen block, $z_{n+1}=z_n+Hx_n$. Starting with $z_0=0$, summation gives $z_N=H^2\sum_{n=0}^{N-1}n=H^2N(N-1)/2=T^2/2-TH/2$, so the terminal error is $TH/2>0$. [F1, A1, induction, algebra]

2.1 Under midpoint sampling, the fast block increment is $\sum_{j=0}^{m-1}h(x_n+(j+\tfrac12)h)=H x_n+h^2\sum_{j=0}^{m-1}(j+\tfrac12)=Hx_n+H^2/2$, since $mh=H$ and $\sum_{j=0}^{m-1}(j+\tfrac12)=m^2/2$. If $z_n=(nH)^2/2$, this increment gives $z_{n+1}=((n+1)H)^2/2$; with $z_0=0$, induction proves exactness at every macro node. [A1, step 1.1, algebra] ∎
