---
id: lem-every-verma-module-contains-a-simple-verma-submodule
kind: lemma
title: "Every Verma module contains a simple Verma submodule"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-nonzero-verma-homomorphism-is-injective, lem-every-nonzero-verma-submodule-contains-a-singular-vector, prop-casimir-eigenvalue-on-a-highest-weight-module, prop-weights-of-a-verma-module-lie-below-lambda]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.14(ii)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

Every Verma module contains a submodule isomorphic to a simple Verma module.

## Facts & Assumptions

**Given:** Injectivity [[lem-a-nonzero-verma-homomorphism-is-injective]], singular vectors [[lem-every-nonzero-verma-submodule-contains-a-singular-vector]], Casimir scalars [[prop-casimir-eigenvalue-on-a-highest-weight-module]], and the Verma weight cone [[prop-weights-of-a-verma-module-lie-below-lambda]].

## Proof

**Proof technique:** contradiction.

1.1 If no embedded Verma submodule were simple, repeatedly choose a nonzero proper submodule and then a singular vector in it; injectivity gives an infinite strictly descending chain of embedded Vermas $M(\lambda-\beta_j)\subset M(\lambda)$. [given, assume-contra]

2.1 Their Casimir scalars equal that of $M(\lambda)$, so $2(\lambda+\rho,\beta_j)=(\beta_j,\beta_j)$. The $\beta_j$ lie in the positive lattice cone and strictly increase in height, while this positive-definite quadratic equation has only finitely many lattice solutions. This contradiction yields a simple embedded Verma module. [step 1.1, algebra, discharge-contradiction] ∎
