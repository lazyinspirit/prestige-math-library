---
id: cor-universal-property-of-the-complex-numbers
kind: corollary
title: 'A square root of $-1$ in a real field extension determines a unique real-field homomorphism from $\mathbb C$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-universal-property-of-adjoining-an-irreducible-root, def-complex-numbers-and-arithmetic, lem-x-squared-plus-one-is-irreducible-over-the-reals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

## Statement

Let $L/\mathbb R$ be a field extension and let $j\in L$ satisfy $j^2=-1$.
There is a unique field homomorphism $\mathbb C\to L$ fixing $\mathbb R$ and
sending $i$ to $j$. Its image is $\mathbb R[j]$.

## Facts & Assumptions

**Given:** A real field extension $L/\mathbb R$ and $j\in L$ with $j^2=-1$.

[F1] The complex numbers are $\mathbb R[x]/(x^2+1)$ with $i=x+(x^2+1)$ ([[def-complex-numbers-and-arithmetic]]).

[F2] $x^2+1$ is monic and irreducible over $\mathbb R$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).

[F3] In a quotient adjoining a root of a monic irreducible polynomial, any root in an extension determines a unique base-field homomorphism, whose image is the generated subring ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

## Proof

**Proof technique:** direct.

1.1 The equation $j^2=-1$ says exactly that $j$ is a root of $x^2+1$. [algebra]

2.1 Apply [F3] to [F1], [F2], and step 1.1. It gives the unique homomorphism fixing $\mathbb R$, sending $i$ to $j$, and having image $\mathbb R[j]$. [F1, F2, F3, step 1.1] ∎
