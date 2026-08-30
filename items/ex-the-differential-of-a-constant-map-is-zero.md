---
id: ex-the-differential-of-a-constant-map-is-zero
kind: example
title: "The differential of a constant map is zero"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-differential-of-a-smooth-map]
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

## Example

If $F:M\to N$ is constant, then $dF_p=0$ for every $p\in M$.

## Facts & Assumptions

**Given:** A constant smooth map $F:M\to N$.

[F1] The differential acts by pullback of target germs ([[def-differential-of-a-smooth-map]]).

## Verification

**Proof technique:** direct.

1.1 For any target germ $[g]$, the composite $g\circ F$ is constant near every point of $M$. [F1, given]

1.2 Every derivation annihilates constant germs, so $dF_p(v)([g])=0$ for every $v\in T_pM$. [F1, given, algebra]

2.1 Hence $dF_p=0$. [step 1.1, step 1.2] ∎
