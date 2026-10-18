---
id: ex-unstabilizable-or-undetectable-mode-breaks-stability
kind: example
title: "Unstabilizable and undetectable unstable modes break the CARE conclusion"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-lqr-stabilizability-and-detectability
  - def-standard-continuous-and-discrete-riccati-equations
  - thm-care-stabilizing-psd-solution-and-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A
        Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node115.html"
      locator: "§6.2.3, detectability and the stabilizing branch"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Two scalar cases isolate the roles of continuous stabilizability and detectability for the CARE conclusion.

## Facts & Assumptions

**Given:** The continuous definitions and CARE theorem of [[def-lqr-stabilizability-and-detectability]], [[def-standard-continuous-and-discrete-riccati-equations]], and [[thm-care-stabilizing-psd-solution-and-value]].

[F1] [[def-lqr-stabilizability-and-detectability]]: stabilizability/detectability mean that some feedback/output injection makes the corresponding matrix Hurwitz.

[F2] [[def-standard-continuous-and-discrete-riccati-equations]]: the scalar CARE residual is $2AX-GX^2+Q$ and the closed loop is $A-GX$.

[F3] [[thm-care-stabilizing-psd-solution-and-value]]: under both hypotheses the CARE has exactly one positive-semidefinite solution and its closed loop is Hurwitz.

## Proof

1.1 First take $A=C=R=1$ and $B=0$. Then $Q=1$; every feedback leaves $A-BK=1$, so the pair is not stabilizable. The CARE is $2X+1=0$, whose only root is $X=-1/2$; it is not positive semidefinite and its closed loop remains $1$. [F1, F2, given, algebra]

2.1 Next take $A=B=R=1$ and $C=0$, so $Q=0$. The pair is stabilizable, since $K=2$ gives $A-BK=-1$, but it is not detectable because $A-LC=1$ for every $L$. The CARE is $2X-X^2=0$, with positive-semidefinite roots $X=0$ and $X=2$; the first has unstable closed loop $1$ and the second stable closed loop $-1$. Since $Q=0$, zero control has zero cost for every initial state, so the value is zero rather than the stabilizing root $X=2$. Thus without detectability uniqueness among PSD roots and the stabilizing value conclusion in [F3] fail. [F1, F2, F3, step 1.1, algebra] ∎
