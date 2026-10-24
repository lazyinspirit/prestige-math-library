---
id: lem-riemann-map-extremizer-is-univalent
kind: lemma
title: "The extremal limit is univalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-riemann-map-extremal-derivative-is-attained, lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 5.2.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

In the setting of the extremal problem, any holomorphic limit attaining the
supremal derivative is univalent.

## Facts & Assumptions

**Given:** A locally uniformly convergent maximizing subsequence from the extremal family, with limit $f$.

[L1] The limit $f$ satisfies $f'(z_0)=M>0$ ([[lem-riemann-map-extremal-derivative-is-attained]]).

[L2] A nonconstant locally uniform limit of univalent functions is univalent ([[lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the derivative of $f$ at the basepoint is positive, so $f$ is nonconstant. [L1, given]

2.1 The maximizing sequence consists of univalent maps, so [L2] applies to the local uniform convergence in the given data. Together with step 1.1 it yields that $f$ is univalent. [L2, step 1.1, given] ∎
