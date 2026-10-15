---
id: ex-qft-finite-wick-quadratic-pair
kind: example
title: Finite Wick quadratic pairing
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-qft-finite-wick-normal-powers
  - lem-qft-finite-gaussian-wick-moments
  - def-multivariate-normal-law
  - def-axiom-of-choice
dependency_roles:
  def-qft-finite-wick-normal-powers: mathematical-premise
  lem-qft-finite-gaussian-wick-moments: mathematical-premise
  def-multivariate-normal-law: mathematical-premise
  def-axiom-of-choice: mathematical-premise
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Skinner, Advanced Quantum Field Theory, Chapter 2, “QFT in Zero Dimensions” (University of Cambridge Part III lecture notes)
      url: https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals (lecture notes, arXiv:1902.08652)
      url: https://arxiv.org/pdf/1902.08652
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Facts & Assumptions

**Given:** Assume the Axiom of Choice and let $Q\sim N(0,C)$ be a centered scalar Gaussian with variance $C\ge0$.

[A1] The finite-dimensional normal-law suppliers explicitly assume the Axiom of Choice. [[def-axiom-of-choice]]

[F1] A centered scalar normal with covariance $C$ is a one-dimensional instance of the multivariate normal law. [[def-multivariate-normal-law]]

[F2] The finite covariance Wick definition gives $:Q^2:_C=Q^2-C$. [[def-qft-finite-wick-normal-powers]]

[F3] The Gaussian pairing formula gives $\mathbb E[Q^2]=C$ and $\mathbb E[Q^4]=3C^2$. [[lem-qft-finite-gaussian-wick-moments]]

## Example

For a finite centered Gaussian coordinate, the expectation of the product of two Wick-subtracted quadratic powers is

$$\mathbb E\bigl[(:Q^2:_C)(:Q^2:_C)\bigr]=2C^2.$$

## Verification

**Proof technique:** expand the finite polynomials and apply the fourth-moment pairing formula.

**Given:** $C\ge0$ and [A1].

1.1 By [F2], $(:Q^2:_C)(:Q^2:_C)=(Q^2-C)^2=Q^4-2CQ^2+C^2$. [F2, algebra]

2.1 Taking expectations and substituting [F3] gives $3C^2-2C\cdot C+C^2=2C^2$. This also holds at the degenerate endpoint $C=0$, where the law is concentrated at zero. The Gaussian law is available under the stated Choice hypothesis [A1]. [A1, F1, F3, step 1.1, algebra] ∎
