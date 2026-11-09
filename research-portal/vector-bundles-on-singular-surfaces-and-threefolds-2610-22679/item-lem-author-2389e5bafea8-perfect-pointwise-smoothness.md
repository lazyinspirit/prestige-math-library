---
title: Pointwise regularity and smoothness over a perfect field
status: draft
research_item: lem-author-2389e5bafea8-perfect-pointwise-smoothness
dependency_level: 0
---

PDF p. 10: Dense smooth locus in Lemma 5.1; PDF p. 15: Codimension of the singular locus

## Prerequisites

None.

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
