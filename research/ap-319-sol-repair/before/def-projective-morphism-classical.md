---
id: "def-projective-morphism-classical"
kind: "definition"
title: "Projective classical morphisms"
deps: ["lem-relative-projective-homogeneous-equations", "def-morphism-classical-varieties", "def-classical-algebraic-prevariety-regular-maps-and-varieties"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil Class 38 §3, proof of Theorem 3.1"
      url: https://math.stanford.edu/~vakil/0708-216/216class38.pdf
status: published
origin: "pipeline"
---

## Definition

A morphism $f:X\to Y$ of classical varieties is projective here if there is an integer $N\ge0$ and a factorization $X\hookrightarrow Y\times\mathbf P_k^N\to Y$ in which the first map is a closed immersion and the second is projection. A closed immersion in this classical setting is an isomorphism onto a reduced closed subvariety. Morphisms have the general locally ringed-space meaning, checked on affine charts.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.
