---
id: rem-cft-modular-invariance-does-not-construct-full-cft
kind: remark
title: A modular-invariant character pairing is not a full-CFT construction
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: mathematics
library: mathematics
deps:
  - def-cft-modular-invariant-character-pairing
dependency_roles:
  def-cft-modular-invariant-character-pairing: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: Section 7.5, printed pages 95–100; sections 9.6–9.8, printed pages 157–165.
    - title: Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/2507.05845v2
      locator: Sections 5.3–5.5; the source treats the chiral modular functor and its RT comparison separately from its full-correlator application.
---

## Remark

An $S,T$-invariant torus character pairing is a genus-one covariance condition on a chosen spectrum. A full local CFT construction additionally specifies a nonchiral state space, local fields and operator products, locality and crossing conditions for correlators, and compatible sewing on the surfaces in its scope. The character pairing supplies none of these structures by itself; boundary data require further input as well. This scope statement does not assert that no particular modular invariant can be lifted to a full local theory.

## Remark references

[[def-cft-modular-invariant-character-pairing]]

## Facts & Assumptions

**Given:** The genus-one character pairing and its matrix covariance condition.

[F1] [[def-cft-modular-invariant-character-pairing]]: the pairing's data are finite left/right character vectors, a multiplicity matrix, and the $S,T$ covariance identities.

## Proof

1.1 The definition in [F1] constrains only the finite-dimensional character vectors and the bilinear form $M$; its formula contains no local fields, operator-product maps, correlators, or higher-genus sewing maps. [given, F1, algebra]

2.1 By the Definition in [F1], a full local CFT in this scope must supply those additional structures and their compatibility. Since the genus-one covariance equation alone specifies none of them, it is only a consistency condition and does not itself construct the larger package. This is not a claim that a lift never exists. [given, F1, step 1.1, algebra] ∎

## Proof status

This is an interface-scope observation only. It makes no nonexistence claim for modular invariants and does not supply the additional full-CFT data.
