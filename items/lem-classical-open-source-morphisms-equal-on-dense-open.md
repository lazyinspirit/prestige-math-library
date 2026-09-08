---
id: "lem-classical-open-source-morphisms-equal-on-dense-open"
kind: "lemma"
title: "Morphisms defined on an open source and agreeing on a dense open agree on their common domain"
status: "draft"
origin: "pipeline"
deps: ["lem-classical-affine-variety-nonempty-opens-dense", "def-classical-affine-variety-morphism", "lem-classical-morphism-inverse-image-of-closed-is-closed"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Lemma 5.6 and Proposition 5.8, pp. 102–103"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Let $U,V$ be nonempty opens of an affine variety $X$, and let $\phi:U\to Y$, $\psi:V\to Y$ be morphisms to an affine variety. If they agree on a nonempty open subset of $U\cap V$, they agree on all of $U\cap V$. More generally agreement on any subset dense in their common domain suffices.

## Facts & Assumptions

**Given:** Affine varieties $X,Y$ over algebraically closed $k$, nonempty opens $U,V\subseteq X$, and morphisms $\phi:U\to Y$, $\psi:V\to Y$ agreeing on a dense subset of $U\cap V$ or on a nonempty common open.

[F1] A nonempty open of an irreducible variety is dense, and finite such intersections are nonempty ([[lem-classical-affine-variety-nonempty-opens-dense]]).

[F2] Target coordinates pull back to regular functions ([[def-classical-affine-variety-morphism]]).

[F3] A regular function on an open source has closed zero set ([[lem-classical-morphism-inverse-image-of-closed-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 Set $W=U\cap V$. For target coordinates $y_1,\ldots,y_m$, each difference $r_j=y_j\circ\phi-y_j\circ\psi$ restricted to W is regular, so $E=\bigcap_j\{r_j=0\}$ is closed in W. Since points of $Y\subseteq k^m$ are determined by their coordinates, E is exactly the equalizer. [F2, F3, given]

2.1 If the maps agree on a subset dense in W, its containing closed set E is all W. In particular any nonempty open of W is dense there by F1 (or by intersecting nonempty opens of X), so the nonempty-open hypothesis suffices. If $m=0$, the intersection defining E is the whole W and the same conclusion holds. [F1, step 1.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Lemma 5.6 and Proposition 5.8, pp. 102–103. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
