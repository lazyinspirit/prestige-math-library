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
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-receipts.jsonl (lem-every-verma-module-contains-a-simple-verma-submodule). No independent judge or whole-closure certification.
    delegated_by: owner
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

1.1 Suppose no embedded Verma submodule of $M(\lambda)$ is simple. Any proper nonzero submodule of an embedded Verma contains a singular vector; its generated submodule is another embedded Verma by injectivity. A proper inclusion strictly lowers the highest weight, so successive such submodules have weights $\lambda-\beta_j$ with strictly increasing heights of $\beta_j\in Q^+$. [given, assume-contra]

2.1 Every such embedded Verma has the same Casimir scalar as $M(\lambda)$, so its nonzero $\beta_j$ satisfies $2(\lambda+\rho,\beta_j)=(\beta_j,\beta_j)$. Taking real parts in the real span of the roots places $\beta_j$ on a bounded sphere centred at the real part of $\lambda+\rho$. The root lattice is discrete, so the set $F$ of its solutions is finite. [step 1.1, algebra]

3.1 Let $m=|F|$. Starting with $M(\lambda)$, apply step 1.1 only $m+1$ times. Finite induction and finite choice suffice to obtain $m+1$ proper, strictly nested embedded Vermas. Their distinct nonzero weights give $m+1$ distinct members of $F$, a contradiction. Hence some embedded Verma is simple. [step 1.1, step 2.1, discharge-contradiction] ∎
