---
id: lem-author-2389e5bafea8-perfect-pointwise-smoothness
kind: lemma
title: Pointwise regularity and smoothness over a perfect field
status: published
domain: mathematics
external_input: true
deps:
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-embedding-dimension-and-regular-local-ring
  - math:def-separable-elements-and-separable-extensions
dependency_roles:
  math:def-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-embedding-dimension-and-regular-local-ring: mathematical-premise
  math:def-separable-elements-and-separable-extensions: mathematical-premise
provenance:
  statement: ai-altered
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
      reading_limits: Read the full displayed statement and brief proof of Lemma
        33.25.8 (tag 0B8X). Checked its locally algebraic terminology against
        Definition 33.20.1 (tag 06LG). The cited Algebra Lemma 10.140.5 and the
        other underlying proofs were not reconstructed or independently
        verified. Only the pointwise equivalence is applied in this item.
    - title: The Stacks Project, Algebraic schemes
      url: https://stacks.math.columbia.edu/tag/06LG
      locator: Definition 33.20.1, tag 06LG, locally algebraic clause
      statement: A locally algebraic scheme over a field is a scheme whose structure
        morphism to that field is locally of finite type.
      hypotheses: A field k and a scheme equipped with a morphism to Spec(k).
      reading_limits: Read the complete definition at tag 06LG to check the
        terminology in Lemma 33.25.8; no results following the definition are
        used.
dependency_level: 0
---

## Statement
Let $k$ be a perfect field and $X$ a reduced scheme locally of finite type over $k$. A point $x\in X$ is smooth over $k$ if and only if $\mathcal O_{X,x}$ is a regular local ring.

A perfect field is a field whose algebraic extensions are separable.

A $k$-scheme means a scheme $X$ equipped with a structure morphism $f:X\to\operatorname{Spec}k$; $\mathcal O_{X,x}$ denotes the stalk of its structure sheaf at $x$, which is a local ring.

Reduced means that for every $x\in X$, an element $a\in\mathcal O_{X,x}$ with $a^n=0$ for some integer $n\geq1$ must satisfy $a=0$.

Locally of finite type and smooth at a point are the corresponding properties of this structure morphism.

A regular local ring is a nonzero noetherian local ring $(R,\mathfrak m)$ satisfying $\dim R=\dim_{R/\mathfrak m}(\mathfrak m/\mathfrak m^2)$, where $\dim R$ is its Krull dimension and $R/\mathfrak m$ is its residue field.

## Statement references

[[math:def-scheme]]

[[math:def-scheme-over-base]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-smooth-morphism-schemes]]

[[math:def-embedding-dimension-and-regular-local-ring]]

[[math:def-separable-elements-and-separable-extensions]]

## External input

The pointwise equivalence is imported from The Stacks Project, Lemma 33.25.8 (tag 0B8X), under exactly the displayed hypotheses.

The source calls the scheme locally algebraic; Definition 33.20.1 (tag 06LG) defines this to mean locally of finite type over the field.

The cited lemma also asserts density and openness, but only its pointwise equivalence is used here. Its underlying proof is not reconstructed locally.

## Facts & Assumptions

**Given:** A perfect field $k$, a reduced locally finite-type $k$-scheme $X$, and $x\in X$.

**Goal:** Establish the stated pointwise equivalence as an imported result.

[F1] The external input in Stacks Project Lemma 33.25.8 states precisely this equivalence for every point of such an $X$; its cited proof uses Algebra Lemma 10.140.5.

## Proof

1.1 The hypotheses in **Given** match those of the external input [F1], and $x$ is a point of the specified scheme. [F1, given]

2.1 Applying [F1] at $x$ gives both directions of the equivalence. This is an application of the imported theorem, not a local reconstruction of its proof. [F1, step 1.1] ∎
