---
id: def-cft-quasi-finite-dimensional-module
kind: definition
title: "Quasi-finite-dimensional generalized module"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-grading-restricted-generalized-vertex-module
dependency_roles:
  "def-grading-restricted-generalized-vertex-module": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part VII"
      url: "https://arxiv.org/pdf/1110.1929v2"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 0
---

## Statement

Let $W=\bigoplus _{h∈R}W_{[h]}$ be a generalized V-module with real generalized L(0)-weights. It is quasi-finite-dimensional if for every real N the strict cutoff sum $\bigoplus _{h<N}W_{[h]}$ is finite dimensional.

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-grading-restricted-generalized-vertex-module]]: Let $V$ be a conformal vertex algebra of CFT type and $M$ a left $V$-module. Write $L_M(0)$ for the coefficient determined by $$ Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}. $$ For $h\in\mathbb C$, define the generalized $L_M(0)$-eigenspace $$ M_{[h]}=\{m\in M:(L_M(0)-h)^N m=0\text{ for some integer }N\ge1\}. $$ The module is **grading-restricted generalized** if $M=\bigoplus_{h\in\mathbb C}M_{[h]}$, every $M_{[h]}$ is finite dimensional, and the real parts of its nonzero generalized weights are bounded below. The direct sum means each vector has only finitely many generalized-weight components. This convention explicitly adds finite-dimensionality and a lower bound to the generalized-eigenspace decomposition; those conditions are not consequences of the module Jacobi identity.

## Proof

1.1 The generalized-weight decomposition makes each strict cutoff sum a defined subspace of W. [given, F1, algebra]

2.1 Assume the quasi-finite condition. Each $W_{[h]}$ is contained in the finite-dimensional cutoff sum for $N=h+1$, so each weight space is finite dimensional. The cutoff sum for $N=0$ can contain only finitely many nonzero weight spaces: vectors from distinct summands are linearly independent, so their number is at most the dimension of that cutoff. If there are negative weights, their finite nonempty set has a least element $B$; otherwise put $B=0$. Every nonzero weight is then at least $B$. Thus quasi-finite-dimensionality implies both finite-dimensional weight spaces and a global lower bound, and hence grading restriction in the real-weight setting of F1. The definition retains the additional requirement that every cutoff sum be finite dimensional. [given, F1, step 1.1, algebra] ∎
