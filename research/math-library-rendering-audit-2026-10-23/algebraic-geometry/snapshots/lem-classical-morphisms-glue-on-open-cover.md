---
id: "lem-classical-morphisms-glue-on-open-cover"
kind: "lemma"
title: "Compatible classical morphisms to an affine target glue over an open cover"
status: published
origin: "pipeline"
deps: ["lem-classical-regular-functions-locality-and-gluing", "def-classical-affine-variety-morphism", "lem-classical-morphism-inverse-image-of-closed-is-closed"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 3.9 p. 61 and §5d pp. 103–104"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

For an open $U$ of an affine variety X and an open cover $U=\bigcup_i U_i$, compatible morphisms $\phi_i:U_i\to Y$ to a fixed affine target glue uniquely to a morphism $\phi:U\to Y$.

## Facts & Assumptions

**Given:** An affine variety $X$ over algebraically closed $k$, an open cover $U=\bigcup_iU_i$ of an open $U\subseteq X$, an affine target $Y$, and morphisms $\phi_i:U_i\to Y$ agreeing on every overlap.

[F1] Compatible regular functions on a cover glue uniquely ([[lem-classical-regular-functions-locality-and-gluing]]).

[F2] A set map to an affine target is a morphism when global regular functions pull back regularly ([[def-classical-affine-variety-morphism]]).

## Proof

**Proof technique:** direct.

1.1 Compatibility means $\phi_i(x)=\phi_j(x)$ for every point of each overlap. Thus the union of their graphs is a function $\phi:U\to Y$ restricting to each $\phi_i$. Every value is in Y because it is the value of a local map into Y. For empty U and the empty cover this is the empty graph. [given]

2.1 If $s\in\mathcal O_Y(Y)$, the functions $s\circ\phi_i$ are regular by F2 and agree on overlaps. F1 makes their glued function regular, and pointwise it is $s\circ\phi$. Hence F2 makes $\phi$ a morphism. Any map with the required restrictions equals the same graph union, proving uniqueness. [F1, F2, step 1.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 3.9 p. 61 and §5d pp. 103–104. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
