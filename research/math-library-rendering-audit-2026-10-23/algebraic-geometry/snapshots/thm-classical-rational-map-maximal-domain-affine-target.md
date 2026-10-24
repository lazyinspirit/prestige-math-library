---
id: "thm-classical-rational-map-maximal-domain-affine-target"
kind: "theorem"
title: "A rational map to an affine target has a unique maximal open domain"
status: published
origin: "pipeline"
deps: ["def-classical-rational-map", "lem-classical-rational-map-equivalence-transitive", "def-classical-rational-map-domain-union", "lem-classical-open-source-morphisms-equal-on-dense-open", "lem-classical-morphisms-glue-on-open-cover"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §5l p. 117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

The candidate domain of a rational map $\Phi:X\dashrightarrow Y$ with affine target supports a unique morphism restricting to every representative. It is a representative of $\Phi$, and is the unique maximal representative domain.

## Facts & Assumptions

**Given:** A rational-map class $\Phi:X\dashrightarrow Y$ for affine varieties over algebraically closed $k$.

[F1] The candidate domain is the union of all representative domains ([[def-classical-rational-map-domain-union]]).

[F2] Equivalence of representatives is an equivalence relation ([[lem-classical-rational-map-equivalence-transitive]]).

[F3] Equivalent maps agree on their entire common domain ([[lem-classical-open-source-morphisms-equal-on-dense-open]]).

[F4] Compatible morphisms on an open cover glue uniquely ([[lem-classical-morphisms-glue-on-open-cover]]).

## Proof

**Proof technique:** direct.

1.1 Any two representatives belong to the same equivalence class, so F2 supplies agreement on a nonempty common open. F3 extends this to their whole overlap. Thus the representatives form a compatible open cover of the candidate domain D from F1. F4 glues them to a unique morphism $\phi_D:D\to Y$. [F1, F2, F3, F4, given]

2.1 The set D is nonempty open, and its glued map agrees with any given representative on that representative’s nonempty domain. Thus $(D,\phi_D)$ belongs to $\Phi$. Every representative domain is contained in D by its definition. Consequently D is maximal and any other maximal representative domain must equal D; F4 gives uniqueness of the map there as well. [F1, F4, step 1.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §5l p. 117. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
