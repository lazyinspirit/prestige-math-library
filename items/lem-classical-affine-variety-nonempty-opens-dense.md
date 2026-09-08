---
id: "lem-classical-affine-variety-nonempty-opens-dense"
kind: "lemma"
title: "Every nonempty open of a classical affine variety is dense"
status: published
origin: "pipeline"
deps: ["lem-classical-irreducible-space-open-intersection-criterion"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2h p. 45"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Every nonempty open subset of an irreducible classical affine variety $X$ is dense. Every finite intersection of nonempty open subsets of $X$ is nonempty and dense; the intersection of the empty family is $X$.

## Facts & Assumptions

**Given:** An affine variety $X$ over algebraically closed $k$, a nonempty open of $X$, and a finite family of nonempty opens of $X$.

[F1] Nonempty opens of an irreducible space are dense and irreducible, and two such opens meet ([[lem-classical-irreducible-space-open-intersection-criterion]]).

## Proof

**Proof technique:** direct.

1.1 The density assertion is F1 with the irreducible nonempty space $X$. For a finite list $U_1,\ldots,U_r$, start with $W_0=X$ and set $W_j=W_{j-1}\cap U_j$. If $W_{j-1}$ is nonempty open, F1 gives $W_j\ne\varnothing$; intersection preserves openness. Finite induction gives $W_r$ nonempty open. [F1, given]

2.1 F1 now makes $W_r$ dense. This includes $r=0$, since $W_0=X$ is nonempty and its closure is itself. [F1, step 1.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2h p. 45. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
