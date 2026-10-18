---
id: thm-it-finite-quantum-conditional-mutual-information-identities
kind: theorem
title: Finite quantum conditional mutual information identity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-quantum-information-measures]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §§11.1 and 11.7"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For every finite-dimensional tripartite state $\rho_{ABC}$, the entropy-form conditional mutual information defined in [[def-it-finite-quantum-information-measures]] satisfies

$$I(A:B\mid C)_\rho=I(A:BC)_\rho-I(A:C)_\rho.$$

This is an algebraic identity; it asserts no non-negativity.

## Facts & Assumptions

**Given:** A finite-dimensional tripartite density operator $\rho_{ABC}$ with the marginal conventions in [[def-it-finite-quantum-information-measures]].

[F1] [[def-it-finite-quantum-information-measures]]: $I(A:B\mid C)=S(AC)+S(BC)-S(C)-S(ABC)$ and $I(A:B)=S(A)+S(B)-S(AB)$.

## Proof

1.1 By [F1], $I(A:BC)_\rho=S(A)_\rho+S(BC)_\rho-S(ABC)_\rho$. [given, F1]

2.1 Also by [F1], $I(A:C)_\rho=S(A)_\rho+S(C)_\rho-S(AC)_\rho$. Subtracting this from step 1.1 cancels $S(A)_\rho$ and gives $S(AC)_\rho+S(BC)_\rho-S(C)_\rho-S(ABC)_\rho$, which is $I(A:B\mid C)_\rho$ by [F1]. No inequality or non-negativity premise is used. [given, F1, step 1.1, algebra] ∎

