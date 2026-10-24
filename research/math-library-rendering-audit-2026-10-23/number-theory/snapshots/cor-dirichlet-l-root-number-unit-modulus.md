---
id: cor-dirichlet-l-root-number-unit-modulus
kind: corollary
title: "Unit modulus of the Dirichlet root number"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primitive-dirichlet-l-functional-equation, thm-primitive-gauss-sum-norm]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Andersen, Remark 16.9"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

For primitive $\chi$, $|\varepsilon(\chi)|=1$.

## Facts & Assumptions

**Given:** A primitive character $\chi$.

[F1] $\varepsilon(\chi)=(-i)^a\tau(\chi)/\sqrt q$ ([[thm-primitive-dirichlet-l-functional-equation]]).

[F2] $|\tau(\chi)|^2=q$ ([[thm-primitive-gauss-sum-norm]]).

## Proof

**Proof technique:** direct.

1.1 Taking absolute values in [F1] gives $|\varepsilon(\chi)|=|\tau(\chi)|/\sqrt q$. [F1, given]

2.1 Fact [F2] makes this quotient $1$. [F2, step 1.1, algebra] ∎
