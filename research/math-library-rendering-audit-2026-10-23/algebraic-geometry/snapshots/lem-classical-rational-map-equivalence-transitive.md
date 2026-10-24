---
id: "lem-classical-rational-map-equivalence-transitive"
kind: "lemma"
title: "The rational-map relation is transitive"
status: published
origin: "pipeline"
deps: ["lem-classical-irreducible-space-open-intersection-criterion", "lem-classical-affine-variety-nonempty-opens-dense", "def-classical-rational-map"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §5l p. 117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

The relation used to define rational maps between affine varieties is reflexive, symmetric and transitive, hence is an equivalence relation.

## Facts & Assumptions

**Given:** Affine varieties $X,Y$ over algebraically closed $k$, and representatives $(U_i,\phi_i)$ with nonempty open domains in $X$.

[F1] Representatives have nonempty open domains, and equivalence is agreement on some nonempty open ([[def-classical-rational-map]]).

[F2] Finite intersections of nonempty opens of X are nonempty ([[lem-classical-affine-variety-nonempty-opens-dense]]).

## Proof

**Proof technique:** direct.

1.1 A representative $(U,\phi)$ agrees with itself on the nonempty open U, proving reflexivity. If two maps agree on a nonempty open W, reversing the equality on that same W proves symmetry. [F1, given]

2.1 If $\phi_1=\phi_2$ on a nonempty open W and $\phi_2=\phi_3$ on a nonempty open V, F2 makes $W\cap V$ nonempty open in X. All three maps are defined there, and equality of their values gives $\phi_1=\phi_3$ there. This is the required transitivity witness by F1. [F1, F2, given] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §5l p. 117. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
