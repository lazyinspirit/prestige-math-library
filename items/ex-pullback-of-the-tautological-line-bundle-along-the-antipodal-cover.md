---
id: ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover
kind: example
title: "Pullback of the tautological line bundle along the antipodal cover"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-pullback-fibre-product-is-a-smooth-vector-bundle, prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism, ex-the-tautological-line-bundle-over-real-projective-space, cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]
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
    - title: "Rob van der Vorst, Introduction to differentiable manifolds"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---
## Example

Let $q:S^n\to\mathbb{RP}^n$ be the antipodal quotient map. The pullback of the
tautological line bundle $q^*\gamma^1\to S^n$ is trivial.

## Facts & Assumptions

**Given:** The antipodal quotient map $q:S^n\to\mathbb{RP}^n$.

[L1] The tautological bundle $\gamma^1\to\mathbb{RP}^n$ is the line of scalar
multiples of the represented vector ([[ex-the-tautological-line-bundle-over-real-projective-space]]).

[L2] A rank-one vector bundle is trivial once it has a nowhere-zero global
frame ([[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]).

## Verification

**Proof technique:** direct.

1.1 A point of $q^*\gamma^1$ is a pair $(x,([x],v))$ with $v\in\mathbb Rx$. Define a section $s:S^n\to q^*\gamma^1$ by $s(x)=(x,([x],x))$. This is well defined because $x$ lies in the line represented by $[x]$. [L1, given, construct]
2.1 The section $s$ is nowhere zero. Since $q^*\gamma^1$ has rank $1$, it is a global frame, so [L2] implies that the pulled-back tautological bundle is trivial. [L2, step 1.1] ∎
