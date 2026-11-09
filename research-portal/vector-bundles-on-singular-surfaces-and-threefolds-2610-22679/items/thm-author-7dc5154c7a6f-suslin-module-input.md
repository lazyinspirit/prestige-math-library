---
id: thm-author-7dc5154c7a6f-suslin-module-input
kind: theorem
title: Suslin cancellation over affine algebras
status: draft
domain: mathematics
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Manoj Kumar Keshari, Cancellation problem for projective modules over
        affine algebras
      url: https://arxiv.org/pdf/0708.2961v1
      locator: "p. 1, Introduction: definition of cancellative and Theorem 1.1(i); p.
        16, reference [20]"
      statement: "Over a finite-type affine algebra A of dimension d over an
        algebraically closed field, every finite projective A-module of constant
        rank at least d is cancellative: a common finite free stabilization can
        be removed."
      hypotheses: A commutative unital affine algebra over an algebraically closed
        field of arbitrary characteristic, finite Krull dimension d; finitely
        generated projective modules of constant rank r >= d. No smoothness,
        normality, reducedness or invertibility of d! is assumed in Theorem
        1.1(i).
      reading_limits: In this adjudication, read arXiv:0708.2961v1 p. 1 definition and
        Theorem 1.1(i). This is the exact attributed external theorem; Suslin’s
        original 1977 proof and Keshari’s later proofs were not reconstructed.
        Earlier authoring reported additional bibliography/hosted-introduction
        inspection; that is historical, not fresh reading here.
dependency_level: 0
---

## Statement
Let $k$ be an algebraically closed field of arbitrary characteristic, let $A$ be a commutative unital finite-type $k$-algebra of Krull dimension $d$, and let $P$ be a finite projective $A$-module of constant rank $r\geq d$. Then $P$ is cancellative: for every finite projective $Q$ and every integer $N\geq0$, an isomorphism $P\oplus A^N\cong Q\oplus A^N$ implies $P\cong Q$.

## External input
This is an explicit established external input, attributed to Suslin 1977 through Keshari. The numbered argument only translates the exact statement and cancellation convention. The five local application items establish the separate affine/K-zero application interface; they do not reconstruct Suslin's deep cancellation argument. The factorial restriction in Keshari's abstract concerns a different rank-(d-1) problem and is absent from Theorem 1.1(i).

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The external input is exactly Keshari Theorem 1.1(i), with cancellative defined immediately above it.


## Proof

1.1 The affine algebra, base field and rank bound are the hypotheses of the imported theorem. Its conclusion says precisely that $P$ is cancellative in the source definition. [F1, given]

2.1 Expand the source definition in [F1], which explicitly uses a common finite free summand. It yields the displayed implication for every common finite free stabilization, including $N=0$. [F1, step 1.1] ∎
