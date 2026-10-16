---
id: ex-qa-34-heralded-success-branch
kind: example
title: Heralded success and the zero-success branch
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-heralded-verification-contract
  - def-qc-instrument-and-conditional-state
  - def-qc-completely-positive-map
  - def-qc-density-operator
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
---

## Example

Let $\rho$ be a density operator and let $p\in[0,1]$. Define the two outcome maps $\mathcal I_s(X)=pX$ and $\mathcal I_f(X)=(1-p)X$. The success probability is $p$; if $p>0$, the conditional success state is $\rho$. At $p=0$, the subnormalized success output is zero and there is no normalized conditional state.

## Facts & Assumptions

**Given:** A finite-dimensional density operator $\rho$, $p\in[0,1]$, and the two-outcome instrument specified above.

[F1] [[def-qc-instrument-and-conditional-state]]: an instrument is a finite family of completely positive outcome maps whose sum is trace-preserving; a conditional state is $\mathcal I_s(\rho)/p_s$ only when $p_s=\operatorname{tr}\mathcal I_s(\rho)>0$, and is $\bot$ when $p_s=0$.

[F2] [[def-qa-34-heralded-verification-contract]]: success probability, conditional output guarantee, any unconditional guarantee including failure, and verification/output cost are separate contract fields.

[F3] [[def-qc-completely-positive-map]]: complete positivity requires positivity after extension by every finite-dimensional identity map.

[F4] [[def-qc-density-operator]]: $\rho$ is positive semidefinite and has trace one.

## Verification


1.1 For every finite reference space, the extensions of $\mathcal I_s$ and $\mathcal I_f$ are multiplication by the nonnegative scalars $p$ and $1-p$, so they preserve positive operators by [F3]. For every operator $X$, $\operatorname{tr}(\mathcal I_s(X))+\operatorname{tr}(\mathcal I_f(X))=p\operatorname{tr}X+(1-p)\operatorname{tr}X=\operatorname{tr}X$. Thus the maps form an instrument by [F1], and $p_s=\operatorname{tr}(p\rho)=p$ by [F4]. [given, F1, F3, F4, algebra]

2.1 If $p>0$, then $\mathcal I_s(\rho)/p_s=p\rho/p=\rho$. If $p=0$, both numerator and success probability are zero, so [F1] assigns $\bot$ rather than a density operator. The unconditional failure probability is $1-p$, including $1$ at $p=0$; it is reported separately from the conditional-state guarantee, as required by [F2]. [step 1.1, F1, F2, cases] ∎
