---
id: ex-dvr-rank-one-selmer-length-calculation
kind: example
title: "A Rank-One DVR Length Calculation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-core-rank-and-stark-system
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Barry Mazur and Karl Rubin, Kolyvagin Systems"
      url: "https://arxiv.org/pdf/1312.4052"
      locator: "§3, core-rank decomposition; §8, length of the dual Selmer group."
    - title: "University of Delhi, MMATH18-201: Module Theory — Lecture Notes: Chain Conditions"
      url: "https://www.du.ac.in/du/uploads/departments/mathematics/study-material/MMATH18-201%20_MT_CC.pdf"
      locator: "Chapter 2, Proposition 2.4, printed pp. 17–18 (PDF pp. 18–19), complete proof of additivity of module length in short exact sequences."
verification: {}
---

## Example

Let $R$ be a discrete valuation ring, meaning a local principal ideal domain that is not a field, with uniformizer $\pi$, let $a\ge1$, and consider the abstract modules $P=R\oplus R/(\pi^a)$ and $D=R/(\pi^a)$. They satisfy $P\cong D\oplus R$, so the displayed decomposition has core-rank parameter $r=1$, while $D$ has length $a$. This is only an algebraic model for the core-rank decomposition and length bookkeeping; it is not asserted to arise from a Galois representation or an elliptic curve.

## Example references

[[def-core-rank-and-stark-system]]

[Mazur–Rubin, *Kolyvagin Systems*, §3 Definition 3.4 and §8](https://arxiv.org/pdf/1312.4052)

[University of Delhi, *Module Theory*, Proposition 2.4](https://www.du.ac.in/du/uploads/departments/mathematics/study-material/MMATH18-201%20_MT_CC.pdf)

## Facts & Assumptions

**Given:** A DVR $R$, its uniformizer $\pi$, and the modules $P=R\oplus R/(\pi^a)$ and $D=R/(\pi^a)$.

[F1] [[def-core-rank-and-stark-system]]: positive core rank means the primal module is the dual module plus a free summand $R^r$.

## Verification

1.1 Swapping the two direct summands gives the isomorphism $P\cong R\oplus D$. By [F1], this is the positive core-rank decomposition with $r=1$. [given, F1, construct, algebra]

2.1 The filtration $D\supset\pi D\supset\cdots\supset\pi^aD=0$ has $a$ successive quotients each isomorphic to the residue field $R/(\pi)$, which is simple. Therefore $\operatorname{length}_R(D)=a$. [given, step 1.1, algebra] ∎
