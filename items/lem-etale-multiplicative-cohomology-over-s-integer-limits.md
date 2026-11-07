---
id: lem-etale-multiplicative-cohomology-over-s-integer-limits
kind: lemma
title: "Étale multiplicative cohomology over S-integer limits"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-global-field
  - thm-etale-locally-standard-etale
  - lem-site-slice-restriction-locality-and-composition
  - thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the standard-étale and injective-resolution suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale cohomology and limits"
      url: "https://stacks.math.columbia.edu/tag/09YU"
      locator: "Finite-limit continuity setting; the specific G_m finite-unit and truncated-hypercover argument is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $K$ be a global field and let $S_0$ be a finite set of places containing the archimedean places and, in the function-field case, at least one place. Let $\mathcal X_0$ be a quasi-compact quasi-separated finite-type scheme over $\mathcal O_{K,S_0}$, with generic fibre $X$. For finite $S\supseteq S_0$ put $\mathcal X_S=\mathcal X_0\times\mathcal O_{K,S}$. Then for every $q\ge0$ the natural map
$$\varinjlim_S H^q_{\mathrm{et}}(\mathcal X_S,\mathbb G_m)\longrightarrow H^q_{\mathrm{et}}(X,\mathbb G_m)$$
is an isomorphism. The coefficient at each stage is the actual sheaf of units on that stage; the assertion includes characteristic-primary torsion and does not identify $\mathbb G_{m,X}$ with the inverse image of a single stage sheaf.

## Facts & Assumptions

**Given:** The global field, finite set, model, localizations and actual unit sheaves in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Global-field $S$-integer rings form the stated filtered localization system with fraction field $K$. [[def-global-field]]

[F2] Étale morphisms have local standard-étale presentations with invertible derivative. [[thm-etale-locally-standard-etale]]

[F3] Slice restriction and local cohomology constructions use the actual small-site models. [[lem-site-slice-restriction-locality-and-composition]]

[F4] A Grothendieck abelian category has functorial injective embeddings under AC. [[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]

## Proof

**Proof technique:** descend finite truncated étale hypercovers together with the actual unit sections.

1.1 The filtered union of the $S$-integer rings is $K$, so the base change of $\mathcal X_0$ to $K$ is the inverse limit of the $\mathcal X_S$. Every affine finitely presented étale object over $X$ descends, after enlarging $S$, to a finitely presented étale object over $\mathcal X_S$. Indeed descend its finite equations and, by [F2], finitely many standard-étale charts together with the displayed inverse-derivative equations; their overlaps and the finite equations for the gluing maps descend as well. A finite covering descends after enlarging $S$: on finitely many affine charts its surjectivity is witnessed by finitely many unit-ideal equations. Finite fibre products, morphisms and equalities in a fixed finite diagram descend by the same finite-presentation argument. [A1, F1, F2, given, construct, algebra]

2.1 For a descended quasi-compact quasi-separated étale object $U=\varprojlim U_S$ over $X$, its ring of sections is the filtered colimit of the stage rings: use a finite affine cover and the finite equalizer for its quasi-compact overlaps. A unit $u$ on $U$ has an inverse $v$, and both sections and the equation $uv=1$ descend to one common stage. Thus the actual unit groups $\Gamma(U_S,\mathcal O^\times)$ have colimit $\Gamma(U,\mathcal O^\times)$, and any finite equality of units has a finite-stage witness. This is a direct statement about units, not an assertion that the unit sheaf is an inverse image from a fixed stage. [step 1.1, construct, algebra]

2.2 On each small étale site, abelian sheaves form a Grothendieck category: sheafification is exact, filtered colimits are exact, and the direct sum of the free abelian sheaves on the site representables is a generator. Under [A1], [F4] therefore gives an injective resolution of the actual sheaf $\mathbb G_m$ on each site. In degree $q$, its derived global sections can be represented and compared using étale hypercovers truncated through matching degree $q+1$ whose levels are finite coproducts of affine finitely presented étale objects. To see this, successive local primitives in the injective resolution exist by exactness; at each of the finitely many matching stages take the family of all primitive witnesses and retain a finite subcover of each quasi-compact matching object. The augmented free-sheaf complex of a hypercover is exact locally: after a matching lift is chosen, adjoining that lift gives the extra-degeneracy contraction. Applying the injective resolution and totalizing its finitely many relevant diagonals identifies the resulting finite-cochain classes and finite refinements with the actual $H^q$; a bounding cochain after such a refinement detects zero. Slice exactness in [F3] supplies the actual restrictions used in this construction. [A1, F3, F4, step 1.1, construct, algebra]

3.1 A class on $X$ therefore has a representative on one finite truncated hypercover with finitely many unit sections, face maps and cocycle equalities. Descend that finite diagram and all units and equalities by steps 1.1–2.1; it defines a class on one $\mathcal X_S$ whose pullback is the original class. If a stage class becomes zero on $X$, step 2.2 gives a finite refinement and a bounding unit cochain; descend the refinement, units and equalities to a later stage to see that the class already vanishes there. The same argument applied to a difference proves equality detection and hence injectivity. These constructions are natural, giving the displayed isomorphism. For $q=0$ it is exactly step 2.1. [F3, F4, step 1.1, step 2.1, step 2.2, algebra] ∎
