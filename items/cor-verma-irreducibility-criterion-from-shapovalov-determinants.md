---
id: cor-verma-irreducibility-criterion-from-shapovalov-determinants
kind: corollary
title: "The Verma irreducibility criterion from Shapovalov determinants"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-shapovalov-radical-is-the-maximal-submodule, thm-shapovalov-determinant-formula]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(xi)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical accept review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-04-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

$M(\lambda)$ is simple if and only if $\langle\lambda+\rho,\alpha^\vee\rangle\notin\mathbb Z_{>0}$ for every $\alpha\in\Phi^+$.

## Facts & Assumptions

**Given:** The radical identification [[prop-the-shapovalov-radical-is-the-maximal-submodule]] and the determinant formula [[thm-shapovalov-determinant-formula]].

## Proof

**Proof technique:** direct.

1.1 If no displayed pairing is positive integral, every determinant block is nonzero by the formula. Orthogonality then makes the radical zero, so the maximal submodule is zero and $M(\lambda)$ is simple. [given, algebra]

2.1 Conversely, if $\langle\lambda+\rho,\alpha^\vee\rangle=n>0$, take $\beta=n\alpha$. The formula has the factor with exponent $K(0)=1$, so that block is singular; the radical and hence the maximal submodule is nonzero. [given, algebra] ∎
