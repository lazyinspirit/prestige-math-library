---
id: cor-the-differential-of-a-diffeomorphism-is-an-isomorphism
kind: corollary
title: "The differential of a diffeomorphism is an isomorphism"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-chain-rule-for-differentials-of-smooth-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

If $F:M\to N$ is a diffeomorphism, then $dF_p:T_pM\to T_{F(p)}N$ is a linear isomorphism for every $p\in M$.

## Facts & Assumptions

**Given:** A diffeomorphism $F:M\to N$ and a point $p\in M$.

[L1] Differentials satisfy the chain rule for smooth compositions ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $F^{-1}\circ F=\operatorname{id}_M$ and $F\circ F^{-1}=\operatorname{id}_N$. [L1, given]

2.1 The resulting identities show that $d(F^{-1})_{F(p)}$ is both a left and right inverse of $dF_p$. [step 1.1]

3.1 Hence $dF_p$ is a linear isomorphism. [step 2.1] ∎
