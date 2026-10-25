---
id: thm-galois-group-embeds-in-the-symmetric-group-on-the-roots
kind: theorem
title: "A polynomial Galois group acts faithfully on its roots"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-galois-group-of-a-separable-polynomial, prop-endomorphisms-of-a-splitting-field-permute-its-roots, def-polynomials-that-split-and-splitting-fields]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, The Galois group of a polynomial"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Statement

Let $0\ne f\in F[x]$ be separable, let $L$ be its splitting field, and let $X$ be its set of roots in $L$. The natural action of $G_f=\operatorname{Gal}(L/F)$ on $X$ is faithful, so it embeds $G_f$ in the symmetric group $\operatorname{Sym}(X)$. After ordering $X$, this gives a subgroup of $S_n$; changing the ordering conjugates the subgroup.

## Facts & Assumptions

**Given:** The polynomial Galois group of [[def-galois-group-of-a-separable-polynomial]] and the fact that a splitting field is generated over $F$ by its roots ([[def-polynomials-that-split-and-splitting-fields]]).

[L1] Every field homomorphism $\tau:L\to L$ fixing $F$ maps the finite set of distinct roots of $f$ bijectively to itself ([[prop-endomorphisms-of-a-splitting-field-permute-its-roots]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each element of $G_f$ gives a permutation of $X$, and composition of automorphisms gives composition of permutations. [L1]

2.1 If an automorphism induces the identity permutation, it fixes every root of $f$ and fixes $F$; because those roots generate $L$, it fixes all of $L$. Thus the action homomorphism has trivial kernel and is faithful. For a nonzero constant polynomial, $X$ is empty, $L=F$, and both groups are trivial; a linear polynomial gives the singleton case. [step 1.1, given]

3.1 If two orderings of $X$ differ by $\pi\in S_n$, then the two permutation representatives of every $\sigma\in G_f$ are related by $\rho'(\sigma)=\pi\rho(\sigma)\pi^{-1}$. Hence the embedded subgroup changes only by conjugation. [step 2.1, algebra] ∎
