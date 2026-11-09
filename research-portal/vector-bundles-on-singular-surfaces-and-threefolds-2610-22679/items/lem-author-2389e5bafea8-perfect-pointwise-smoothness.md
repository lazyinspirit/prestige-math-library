---
id: lem-author-2389e5bafea8-perfect-pointwise-smoothness
kind: lemma
title: Pointwise regularity and smoothness over a perfect field
status: draft
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: The Stacks Project, Schemes smooth over fields
      url: https://stacks.math.columbia.edu/tag/0B8X
      locator: Lemma 33.25.8, tag 0B8X
      statement: For a reduced scheme locally of finite type over a perfect field, its
        smooth locus is exactly the set of points with regular local ring; this
        locus is dense and open.
      hypotheses: The base is a perfect field and the scheme is reduced and locally of
        finite type over it.
      reading_limits: The statement and its brief proof in Section 33.25 were read;
        the proof of the cited Algebra Lemma 10.140.5 was not reconstructed or
        independently verified.
dependency_level: 0
---

## Statement
Let $k$ be a perfect field and $X$ a reduced scheme locally of finite type over $k$. A point $x\in X$ is smooth over $k$ if and only if $\mathcal O_{X,x}$ is a regular local ring.

A perfect field is a field whose algebraic extensions are separable. Smooth at $x$ means that the structure morphism is smooth at that point. A regular local ring is a noetherian local ring whose Krull dimension equals the dimension of its maximal ideal modulo its square over its residue field.

## External input

The equivalence is imported from The Stacks Project, Lemma 33.25.8, under the displayed hypotheses. The cited result also states density and openness, but only its pointwise equivalence is used here. Its underlying proof is not reconstructed locally.

## Facts & Assumptions

**Given:** A perfect field $k$, a reduced locally finite-type $k$-scheme $X$, and $x\in X$.

**Goal:** Establish the stated pointwise equivalence as an imported result.

[F1] The external input in Stacks Project Lemma 33.25.8 states precisely this equivalence for every point of such an $X$; its cited proof uses Algebra Lemma 10.140.5.

## Proof

1.1 The hypotheses in **Given** match those of the external input [F1], and $x$ is a point of the specified scheme. [F1, given]

2.1 Applying [F1] at $x$ gives both directions of the equivalence. This is an application of the imported theorem, not a local reconstruction of its proof. [F1, step 1.1] ∎
