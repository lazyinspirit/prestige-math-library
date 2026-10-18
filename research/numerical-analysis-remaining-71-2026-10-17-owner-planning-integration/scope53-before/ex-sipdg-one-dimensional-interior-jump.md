---
id: ex-sipdg-one-dimensional-interior-jump
kind: example
title: One-dimensional SIPDG jump and penalty calculation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-sipdg-jump-average-convention]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

This is a self-contained one-dimensional interval specialization of the jump convention in [[def-sipdg-jump-average-convention]]. Let $K^-=(0,1/2)$ and $K^+=(1/2,1)$, take unit coefficient, and set $h_F=1/2$ at the interior point face. Define $v(x)=x$ on $K^-$ and $v(x)=x-1$ on $K^+$. Then $v(0)=v(1)=0$, while the interior jump at $x=1/2$ is $1$ and the average derivative is $1$. The face contributions are $-\{v'\}[v]-\{v'\}[v]+\gamma h_F^{-1}[v]^2$. With penalty parameter $\gamma=1$, the bilinear form has value $a_h(v,v)=1$.

## Facts & Assumptions

**Given:** The two-cell interval partition, unit coefficient, counting measure on all point faces, $h_F=1/2$ at each face (the common interval-cell length), the piecewise affine function $v$, and $\gamma=1$. The one-dimensional form is the sum of the broken volume term, the two symmetric flux-jump terms at each face, and the penalty $\gamma h_F^{-1}[v]^2$; at endpoints the jump is the trace and the outward normal is $-1$ or $+1$.

[F1] On an interior face the scalar jump is the minus trace minus the plus trace, and the average is their arithmetic mean. ([[def-sipdg-jump-average-convention]])

## Verification

1.1 The derivative is $1$ on both cells, so the broken volume term is $\int_0^{1/2}1\,dx+\int_{1/2}^11\,dx=1$. At the interior point $x=1/2$, [F1] gives $[v]=1/2-(-1/2)=1$ and $\{v'\}=1$, while both boundary traces vanish. [given, F1, algebra]

2.1 The interior consistency terms contribute $-2\{v'\}[v]=-2$, and the penalty contributes $\gamma h_F^{-1}[v]^2=1\cdot2\cdot1=2$. Adding these to the volume term from step 1.1 gives $a_h(v,v)=1-2+2=1$. [given, step 1.1, algebra] ∎
