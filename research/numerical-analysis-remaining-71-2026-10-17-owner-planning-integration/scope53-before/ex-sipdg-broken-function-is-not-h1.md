---
id: ex-sipdg-broken-function-is-not-h1
kind: example
title: A broken polynomial with a nonzero jump is not globally H1
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-sipdg-jump-average-convention, def-sobolev-space-wkp-and-its-norm, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

On the interval partition $K^-=(0,1/2)$, $K^+=(1/2,1)$, let $v=1$ on $K^-$ and $v=0$ on $K^+$. This is a broken piecewise-constant polynomial with jump $[v]=1$ at the interior face. Its distributional derivative is a point mass, so $v\notin W^{1,2}(0,1)$.

## Facts & Assumptions

**Given:** Countable Choice; the interval partition; the piecewise-constant function above; and the weak-derivative definition of $W^{1,2}$.

[F1] A weak first derivative $g\in L^2(0,1)$ must satisfy $\int_0^1v\varphi'=-\int_0^1g\varphi$ for every $\varphi\in C_c^\infty(0,1)$. ([[def-sobolev-space-wkp-and-its-norm]])

[F2] The interior scalar jump is the left trace minus the right trace. ([[def-sipdg-jump-average-convention]])

[F3] The Sobolev-space definition assumes Countable Choice. ([[def-countable-choice]])

## Verification

1.1 The traces at $x=1/2$ are $v^-=1$ and $v^+=0$, so [F2] gives $[v]=1$. For every smooth compactly supported $\varphi$, direct integration on the two intervals gives $\int_0^1v\varphi'=\int_0^{1/2}\varphi'=\varphi(1/2)$. [F2, F3, given, algebra]

2.1 If an $L^2$ weak derivative $g$ existed, [F1] would give $\varphi(1/2)=-\int_0^1g\varphi$. Choose a fixed smooth bump $\eta$ supported in $(-1,1)$ with $\eta(0)=1$, and let $\varphi_\varepsilon(x)=\eta((x-1/2)/\varepsilon)$ for $0<\varepsilon<1/2$. Then $\varphi_\varepsilon(1/2)=1$ while $\|\varphi_\varepsilon\|_{L^2}=\sqrt\varepsilon\|\eta\|_{L^2(-1,1)}\to0$. Cauchy–Schwarz forces $|\int g\varphi_\varepsilon|\le\|g\|_2\|\varphi_\varepsilon\|_2\to0$, contradicting step 1.1. Thus no such $g$ exists and $v\notin W^{1,2}(0,1)$. [F1, step 1.1, given, choose] ∎
