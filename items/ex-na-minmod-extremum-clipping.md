---
id: ex-na-minmod-extremum-clipping
kind: example
title: Minmod clips the slope at a smooth quadratic maximum
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps:
  - def-na-high-resolution-reconstruction
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For $u(x)=1-(x-h/2)^2$ and cells $I_j=[jh,(j+1)h)$, the cell average in the central cell $I_0$ is $U_0=1-h^2/12$ and its two neighbors have $U_{-1}=U_1=1-13h^2/12$. The minmod slope in the central cell is zero, so the reconstruction clips the central slope at the smooth maximum.

## Facts & Assumptions

**Given:** $h>0$, the three cell averages of $u(x)=1-(x-h/2)^2$ over $I_{-1},I_0,I_1$, and the MUSCL/minmod definition.

[F1] [[def-na-high-resolution-reconstruction]]: $hs_0=\operatorname{minmod}(U_0-U_{-1},U_1-U_0)$ and the central face states are $U_0\pm hs_0/2$.

## Verification

1.1 Write $x=h/2+y$ on $I_0$, so $y\in[-h/2,h/2]$ and $u=1-y^2$. Averaging gives $U_0=1-h^2/12$. On either neighboring cell the centered coordinate $y$ has mean $\pm h$ and variance $h^2/12$, hence $U_{-1}=U_1=1-(h^2+h^2/12)=1-13h^2/12$. [given, algebra]

2.1 Therefore $U_0-U_{-1}=h^2$ and $U_1-U_0=-h^2$. Their signs differ, so [F1] gives $s_0=0$ and both reconstructed face states equal $U_0$. [F1, step 1.1, algebra]

3.1 The exact profile at either face $x=h/2\pm h/2$ is $1-h^2/4$. The reconstructed face error is $|U_0-(1-h^2/4)|=h^2/6$. The reconstructed value equals the largest of the three cell averages, so this clipping introduces no new face value outside their range while retaining a second-order face error. [step 1.1, step 2.1, algebra] ∎

