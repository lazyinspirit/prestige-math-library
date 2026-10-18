---
id: ex-sipdg-small-penalty-loses-coercivity
kind: example
title: A too-small SIPDG penalty destroys coercivity
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

Use the two-cell interval specialization and piecewise affine function described in **Given** below. At this mesh and with penalty $\gamma=1/4$, the function satisfies $a_h(v,v)=-1/2$. Hence the form is not coercive in this case, even though its energy expression on $v$ is positive.

## Facts & Assumptions

**Given:** $K^-=(0,1/2)$, $K^+=(1/2,1)$, unit coefficient, counting measure on all point faces, $h_F=1/2$ at each face (the common interval-cell length), the piecewise affine function $v(x)=x$ on $K^-$ and $v(x)=x-1$ on $K^+$, zero endpoint values, and penalty $\gamma=1/4$. In this interval specialization, the bilinear form is the broken volume term plus two symmetric flux-jump terms and the penalty $\gamma h_F^{-1}[v]^2$ at each face; endpoint terms vanish because $v$ is zero there.

[F1] The one-dimensional jump is $v^--v^+$ and the interior average is the arithmetic mean of the two traces. ([[def-sipdg-jump-average-convention]])

## Verification

1.1 Both cell derivatives equal $1$, so the volume term is $1$. The endpoint terms vanish because $v(0)=v(1)=0$. At the interior point, [F1] gives $[v]=1$ and $\{v'\}=1$. The energy expression is $\|v\|_{DG}^2=1+(1/4)(1/(1/2))\cdot1^2=3/2>0$. [given, F1, algebra]

2.1 The two consistency terms sum to $-2$, while the penalty term is $(1/4)(1/(1/2))\cdot1^2=1/2$. Therefore $a_h(v,v)=1-2+1/2=-1/2<0$, which contradicts coercivity with any positive constant in a positive energy norm. [given, step 1.1, algebra] ∎
