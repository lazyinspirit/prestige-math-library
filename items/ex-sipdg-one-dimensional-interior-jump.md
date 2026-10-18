---
id: ex-sipdg-one-dimensional-interior-jump
kind: example
title: One-dimensional SIPDG jump and penalty calculation
status: draft
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

This is a self-contained one-dimensional interval specialization of the jump convention in [[def-sipdg-jump-average-convention]]. Let $K^-=(0,1/2)$ and $K^+=(1/2,1)$, take unit coefficient, and set $h_F=1/2$ at the interior point face. Define $v(x)=x$ on $K^-$ and $v(x)=x-1$ on $K^+$. Then $v(0)=v(1)=0$, while the interior jump at $x=1/2$ is $1$ and the average derivative is $1$. The face contributions are $-\{v'\}[v]-\{v'\}[v]+\gamma h_F^{-1}[v]^2$. With penalty parameter $\gamma=1$, the bilinear form has value $a_h(v,v)=1$.

## Facts & Assumptions

**Given:** The two-cell interval partition, unit coefficient, counting measure on all point faces, $h_F=1/2$ at each face (the common interval-cell length), the piecewise affine function $v$, and $\gamma=1$. For functions $v,w$ on these cells, define
$$a_h(v,w):=\sum_{K\in\{K^-,K^+\}}\int_Kv'w'\,dx-\sum_{F\in\{0,1/2,1\}}\bigl(q_F(v)[w]_F+q_F(w)[v]_F\bigr)+\gamma\sum_{F\in\{0,1/2,1\}}h_F^{-1}[v]_F[w]_F,$$
where $q_{1/2}(v)=\{v'\}_{1/2}$, $q_0(v)=-v'(0+)$, and $q_1(v)=v'(1-)$; the endpoint jumps are the one-sided value traces and all face integrals use counting measure.

[F1] On an interior face the scalar jump is the minus trace minus the plus trace, and the average is their arithmetic mean. ([[def-sipdg-jump-average-convention]])

## Verification

1.1 The derivative is $1$ on both cells, so the broken volume term is $\int_0^{1/2}1\,dx+\int_{1/2}^11\,dx=1$. At the interior point $x=1/2$, [F1] gives $[v]=1/2-(-1/2)=1$ and $\{v'\}=1$, while both boundary traces vanish. [given, F1, algebra]

2.1 The interior consistency terms contribute $-2\{v'\}[v]=-2$, and the penalty contributes $\gamma h_F^{-1}[v]^2=1\cdot2\cdot1=2$. Adding these to the volume term from step 1.1 gives $a_h(v,v)=1-2+2=1$. [given, step 1.1, algebra] ∎
