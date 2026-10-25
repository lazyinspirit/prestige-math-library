---
id: ex-sipdg-small-penalty-loses-coercivity
kind: example
title: A too-small SIPDG penalty destroys coercivity
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [ def-sipdg-jump-average-convention ]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Use the two-cell interval specialization and piecewise affine function described in **Given** below. At this mesh and with penalty $\gamma=1/4$, the function satisfies $a_h(v,v)=-1/2$. Hence the form is not coercive in this case, even though its energy expression on $v$ is positive.

## Facts & Assumptions

**Given:** $K^-=(0,1/2)$, $K^+=(1/2,1)$, unit coefficient, counting measure on all point faces, $h_F=1/2$ at each face (the common interval-cell length), the piecewise affine function $v(x)=x$ on $K^-$ and $v(x)=x-1$ on $K^+$, zero endpoint values, and penalty $\gamma=1/4$. For functions $v,w$ on these cells, define
$$a_h(v,w):=\sum_{K\in\{K^-,K^+\}}\int_Kv'w'\,dx-\sum_{F\in\{0,1/2,1\}}\bigl(q_F(v)[w]_F+q_F(w)[v]_F\bigr)+\gamma\sum_{F\in\{0,1/2,1\}}h_F^{-1}[v]_F[w]_F,$$
where $q_{1/2}(v)=\{v'\}_{1/2}$, $q_0(v)=-v'(0+)$, and $q_1(v)=v'(1-)$; the endpoint jumps are the one-sided value traces and all face integrals use counting measure. Define the energy expression by
$$\|v\|_{DG}^2:=\sum_{K\in\{K^-,K^+\}}\int_K|v'|^2\,dx+\gamma\sum_{F\in\{0,1/2,1\}}h_F^{-1}[v]_F^2.$$

[F1] The one-dimensional jump is $v^--v^+$ and the interior average is the arithmetic mean of the two traces. ([[def-sipdg-jump-average-convention]])

## Verification

1.1 Both cell derivatives equal $1$, so the volume term is $1$. The endpoint terms vanish because $v(0)=v(1)=0$. At the interior point, [F1] gives $[v]=1$ and $\{v'\}=1$. The energy expression is $\|v\|_{DG}^2=1+(1/4)(1/(1/2))\cdot1^2=3/2>0$. [given, F1, algebra]

2.1 The two consistency terms sum to $-2$, while the penalty term is $(1/4)(1/(1/2))\cdot1^2=1/2$. Therefore $a_h(v,v)=1-2+1/2=-1/2<0$, which contradicts coercivity with any positive constant in a positive energy norm. [given, step 1.1, algebra] ∎
