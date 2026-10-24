---
id: ex-scalar-care-two-stabilizing-branches
kind: example
title: "A scalar CARE has two real roots but only one stabilizing branch"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-standard-continuous-and-discrete-riccati-equations
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A
        Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node116.html"
      locator: "§6.2.2, scalar algebraic Riccati solution and stabilizing branch"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Take the scalar continuous data $A=B=C=R=1$. Then $Q=1$ and $G=1$.

## Facts & Assumptions

**Given:** The scalar data above and the CARE convention of [[def-standard-continuous-and-discrete-riccati-equations]].

[F1] [[def-standard-continuous-and-discrete-riccati-equations]]: the CARE residual is $A^*X+XA-XGX+Q$, and a CARE root is stabilizing when $A-GX$ is Hurwitz.

## Proof

1.1 Substitution gives $2X-X^2+1=0$, or $(X-1)^2=2$. The two real roots are $X_+=1+\sqrt2$ and $X_-=1-\sqrt2$. [F1, given, algebra]

2.1 The corresponding closed-loop scalars are $1-X_+=-\sqrt2<0$ and $1-X_-=\sqrt2>0$. Thus $X_+$ is the only stabilizing branch; it is positive, whereas the other root is negative and unstable. [F1, step 1.1, algebra] ∎
