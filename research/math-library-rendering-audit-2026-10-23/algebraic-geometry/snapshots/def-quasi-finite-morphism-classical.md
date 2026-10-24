---
id: "def-quasi-finite-morphism-classical"
kind: "definition"
title: "Quasi-finite classical morphisms"
deps: ["def-fibre-dimension-at-point-classical"]
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
    - title: "Milne §8c Quasi-finite maps, p.185"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: "Arapura Corollary 4.2.2, p.31"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
status: published
origin: "pipeline"
---

## Definition

A morphism $f:X\to Y$ of classical varieties is quasi-finite if every closed-point fibre $X_y$ is a finite set; empty fibres are allowed. Classical morphisms here are of finite type: for an affine target chart and an affine source chart above it, any finite set of $k$-algebra generators of the source ring also generates it over the target ring. The inverse image has a finite affine cover because it is an open of a Noetherian variety.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.
