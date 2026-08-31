---
id: ex-the-tautological-line-bundle-over-real-projective-space
kind: example
title: "The tautological line bundle over real projective space"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-vector-bundle-construction-from-a-smooth-cocycle, def-local-frame-and-global-frame-of-a-vector-bundle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
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

The tautological line bundle over $\mathbb{RP}^n$ is

$$\gamma^1:=\{([x],v)\in \mathbb{RP}^n\times\mathbb R^{n+1}:v\in\mathbb Rx\}\to\mathbb{RP}^n,$$

with projection to the first factor.

## Facts & Assumptions

**Given:** The standard affine cover $U_i=\{[x]:x_i\neq0\}$ of $\mathbb{RP}^n$
with its usual affine coordinates.

[L1] A smooth cocycle on a countable cover constructs a smooth vector bundle ([[thm-vector-bundle-construction-from-a-smooth-cocycle]]).

## Verification

**Proof technique:** direct.

1.1 On $U_i$, every line $[x]$ has a unique representative with $i$-th coordinate $1$. Let $s_i([x])$ be that representative. Then $s_i([x])$ spans the fibre of $\gamma^1$ over $[x]$, so $s_i$ is a local frame of the tautological line bundle on $U_i$. [given, construct]

2.1 On $U_i\cap U_j$, the two generators satisfy $s_j=\frac{x_i}{x_j}s_i$, because both are rescalings of the same representative vector $x$. Therefore a vector with $s_i$-coordinate $a$ has $s_j$-coordinate $(x_j/x_i)a$, so the chart transition $g_{ji}$ is the nonzero smooth scalar $x_j/x_i$. By [L1], these transition functions define a smooth line bundle, namely $\gamma^1$. [L1, step 1.1, given, algebra] ∎
