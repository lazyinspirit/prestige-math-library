---
id: ex-aqft-finite-two-group-point-normalization
kind: example
title: Point normalization in the finite symmetry model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - def-aqft-finite-two-group-state-sum
  - pthm-aqft-finite-gauging-gluing
  - post-aqft-finite-gauging-model
dependency_roles:
  def-aqft-finite-two-group-state-sum: formulation-prerequisite
  pthm-aqft-finite-gauging-gluing: physical-result
  post-aqft-finite-gauging-model: physical-assumption
physical_scope: One-vertex boundary evaluation in the adopted finite G = Z/2 model with trivial A and normalized spin measure; no continuum or empirical claim.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
---

## Example

Let $K$ consist of one vertex and no higher-dimensional simplices in the relative state-sum convention for the finite model with $G=\mathbb Z/2$ and $A=\{0\}$. There is one background object, its first automorphism group has order $2$, and its second automorphism group is trivial. The normalized spin partition weight for the unique background is $1$, and the normalized background-gauging amplitude is $1/2$.

## Example references

[[def-aqft-finite-two-group-state-sum|selected finite model]]

[[pthm-aqft-finite-gauging-gluing|finite point formula]]

## Facts & Assumptions

**Given:** the one-vertex boundary complex and the adopted normalized spin model.
 
[F1] [[def-aqft-finite-two-group-state-sum]]: spin configurations are vertex labels in $\mathbb Z/2$, each of weight $2^{-V}$; the background gauge group has $G=\mathbb Z/2$ and trivial $A$.

[F2] [[pthm-aqft-finite-gauging-gluing]]: the background amplitude is the higher sum with component mass $|\pi_2|/|\pi_1|$.

[A1] [[post-aqft-finite-gauging-model]]: the finite spin model and unit background response are adopted assumptions.

## Verification

**Given:** one vertex, no edges, and no face labels.
 
1.1 There is one flat background object. Its raw vertex gauge labels are $G=\mathbb Z/2$ and its $2$-gauge group is $A=\{0\}$, so $|\pi_1|=2$ and $|\pi_2|=1$. The two spin assignments each have weight $1/2$, hence their total per-background partition weight is $1$. [given, F1, A1, algebra]

2.1 Under the adopted model the sole background component contributes $1\cdot|\pi_2|/|\pi_1|=1/2$ to the finite gauging sum. [given, A1, F2, step 1.1, algebra] ∎

