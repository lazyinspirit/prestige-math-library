---
id: def-semisimple-and-nilpotent-endomorphisms
kind: definition
title: "Semisimple endomorphisms as endomorphisms diagonalisable over an algebraic closure, and nilpotent endomorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraic-closure, def-diagonalisable-endomorphism, def-nilpotent-endomorphism, def-repeated-root-and-separable-polynomial, thm-minimal-polynomial-is-well-defined-and-controls-annihilators, lem-minimal-polynomial-is-invariant-under-field-extension, thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Meinolf Geck, On the Jordan-Chevalley decomposition of a matrix"
      url: "https://arxiv.org/pdf/2205.05432"
---

## Definition

Let $V$ be a finite-dimensional vector space over a field $F$, and let
$T:V\to V$ be linear. The endomorphism $T$ is **semisimple** when its minimal
polynomial is separable in the sense of
[[def-repeated-root-and-separable-polynomial]].

Equivalently, choose any basis of $V$, regard the matrix of $T$ as a matrix over
an algebraic closure $\overline F/F$ from [[def-algebraic-closure]], and let it
act on $\overline F^n$. That endomorphism is diagonalisable over $\overline F$.
This is basis-independent because the minimal polynomial is unchanged by field
extension, and an endomorphism is diagonalisable exactly when its minimal
polynomial splits with distinct roots.

The endomorphism $T$ is **nilpotent** when $T^m=0$ for some positive integer,
equivalently when it is nilpotent in the sense of
[[def-nilpotent-endomorphism]].
