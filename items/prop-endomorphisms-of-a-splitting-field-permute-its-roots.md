---
id: prop-endomorphisms-of-a-splitting-field-permute-its-roots
kind: proposition
title: 'Every $F$-endomorphism of a splitting field permutes the distinct roots and is an automorphism'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomials-that-split-and-splitting-fields, lem-polynomials-and-roots-transport-along-field-isomorphisms, def-field-homomorphism, thm-root-bound-for-polynomials-over-a-domain, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'J. S. Milne, Fields and Galois Theory, Chapter 2'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Statement

Let $E/F$ be a splitting field of a nonzero polynomial $f\in F[x]$. Every field homomorphism $\tau:E\to E$ that fixes $F$ maps the finite set of distinct roots of $f$ bijectively to itself. Consequently $\tau$ is surjective and hence is an $F$-automorphism of $E$.

## Facts & Assumptions

**Given:** A splitting field $E/F$ of $0\ne f\in F[x]$ and an $F$-endomorphism $\tau:E\to E$.

[F1] A unital homomorphism between fields is injective ([[def-field-homomorphism]]).

[F2] A field isomorphism carries roots of a polynomial to roots of the transported polynomial ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[F3] A nonzero degree-$n$ polynomial over a domain has at most $n$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

[F4] An injection from a finite set to itself is a bijection ([[thm-subset-of-a-finite-set]]).

[F5] A splitting field is generated over the base field by the roots of its polynomial ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $\tau$ is injective and hence an isomorphism from $E$ onto its image. Since it fixes the coefficients of $f$, direct evaluation gives $f(\tau(\alpha))=\tau(f(\alpha))=0$ for every root $\alpha$ of $f$. [F1, F2]

2.1 The distinct-root set $X$ is finite by [F3], and step 1.1 restricts $\tau$ to an injection $X\to X$. By [F4], this restriction is a bijection, so $\tau$ permutes the roots. This remains true when $X$ is empty. [F3, F4, step 1.1]

3.1 The image $\tau(E)$ contains $F$ and every root of $f$ by step 2.1. Since those elements generate $E$ by [F5], one has $E\subseteq\tau(E)\subseteq E$. Thus $\tau$ is surjective and is an $F$-automorphism. [F5, step 2.1] ∎
