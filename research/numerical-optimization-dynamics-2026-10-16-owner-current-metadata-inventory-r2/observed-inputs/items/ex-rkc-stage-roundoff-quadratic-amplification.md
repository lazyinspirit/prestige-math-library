---
id: ex-rkc-stage-roundoff-quadratic-amplification
kind: example
title: "Equal additive stage perturbations attain quadratic RKC1 amplification"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-rkc1-chebyshev
  - lem-rkc-chebyshev-stage-perturbation-amplification
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, §2.2.1"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, §2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
---

## Example

Let the state space be Euclidean, take $A=0$, choose a unit vector $v$, and after each of the $s$ RKC1 stage updates add the same perturbation $\epsilon v$ with $\epsilon\ge0$. This is a deterministic additive-perturbation model; it does not assert that floating-point errors have this form.

## Facts & Assumptions

**Given:** The RKC1 recurrence, the zero self-adjoint matrix, and the equal stage perturbations in the Example.

[F1] [[alg-rkc1-chebyshev]]: the linear stages satisfy $Y_0=y$, $Y_1=(I+hA/s^2)Y_0$, and $Y_j=2(I+hA/s^2)Y_{j-1}-Y_{j-2}$ for $j\ge2$.

[F2] [[lem-rkc-chebyshev-stage-perturbation-amplification]]: for a self-adjoint nonpositive operator in the certified interval, stage perturbations of norm at most $\epsilon$ yield final error at most $s(s+1)\epsilon/2$.

## Verification

1.1 Since $A=0$, the unperturbed stages all equal $y$. If $e_j$ is the perturbed-minus-unperturbed stage difference, then $e_0=0$, $e_1=\epsilon v$, and [F1] gives $e_j=2e_{j-1}-e_{j-2}+\epsilon v$ for $2\le j\le s$. [F1, given, algebra]

2.1 Induction gives $e_j=\epsilon j(j+1)v/2$: it holds for $j=0,1$, and substituting the formulas at $j-1,j-2$ into the recurrence yields $\epsilon\{(j-1)j-(j-2)(j-1)/2+1\}v=\epsilon j(j+1)v/2$. [step 1.1, induction, algebra]

3.1 At the output $j=s$, $\|e_s\|_2=\epsilon s(s+1)/2$ because $\|v\|_2=1$. The assumptions of [F2] hold for $A=0$, so the lemma supplies the matching upper bound; this perturbation pattern attains equality in its quadratic stage-count estimate. [F2, step 2.1, algebra] ∎