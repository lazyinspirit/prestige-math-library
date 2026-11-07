---
id: lem-etale-gm-cohomology-commutes-with-prime-localization
kind: lemma
title: "Étale multiplicative cohomology commutes with prime localization"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - thm-etale-locally-standard-etale
  - lem-site-slice-restriction-locality-and-composition
  - thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for injective resolutions and the finite hypercover comparison."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé VII, section 5, Corollary 5.9"
      url: "https://grothendiecksga.com/read/sga4/en/VII-5.html"
      locator: "Continuity for finitely presented group schemes; actual units under prime localization are reconstructed below."
verification: {}
---

## Statement

Assume AC. Let $C$ be a ring and $\mathfrak q$ a prime. For every $r\geq0$ the canonical map
$$\varinjlim_{f\notin\mathfrak q} H^r_{\mathrm{et}}(\operatorname{Spec}C_f,\mathbb G_m)\longrightarrow H^r_{\mathrm{et}}(\operatorname{Spec}C_{\mathfrak q},\mathbb G_m)$$
is an isomorphism. The coefficient at each stage is the actual sheaf of units. In particular, a class on $C_{\mathfrak q}$ descends to a principal neighborhood of $\mathfrak q$, and if it is $n$-torsion then after a further such shrinking the descended class is $n$-torsion.

## Facts & Assumptions

**Given:** The ring, prime and actual sheaves of units in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Étale morphisms have local standard-étale presentations with invertible derivative. [[thm-etale-locally-standard-etale]]

[F2] Slice restriction and local cohomology constructions use the actual small-site models. [[lem-site-slice-restriction-locality-and-composition]]

[F3] A Grothendieck abelian category has functorial injective embeddings under AC. [[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]

## Proof

**Proof technique:** descend finite truncated étale hypercovers and actual unit sections through the filtered localization.

1.1 The principal neighborhoods $D(f)$ with $f\notin\mathfrak q$ form a filtered system and their affine inverse limit is $\operatorname{Spec}C_{\mathfrak q}$. Every affine finitely presented étale object on that limit descends to one stage: descend its finite equations and, using [F1], finitely many standard-étale charts and the inverse-derivative equations. Finite diagrams, their equalities, and finite covers descend after further shrinking, since the finite equations witnessing their gluing and surjectivity descend. [A1, F1, given, construct, algebra]

2.1 On a descended quasi-compact quasi-separated étale object $U$, global functions are the filtered colimit of stage functions, by a finite affine cover and the equalizer on its quasi-compact overlaps. A unit and its inverse, and the equation that their product is one, descend to a common stage. Thus actual unit groups and their finite equalities commute with the localization. [step 1.1, construct, algebra]

2.2 The étale sheaf categories are Grothendieck abelian, so [A1] and [F3] give injective resolutions. Through degree $r$, derived global sections are computed by finite truncated étale hypercovers and unit cochains: successive local primitives in an injective resolution can be covered by finitely many affine étale objects over each quasi-compact matching object, and the augmented free-sheaf complex of a hypercover is locally exact by its extra-degeneracy contraction. A finite refinement and a bounding cochain detect a zero class. The restrictions are the actual slice restrictions in [F2]. [A1, F2, F3, step 1.1, construct, algebra]

3.1 Descend the finite hypercover, its unit cocycle and its finitely many equalities using steps 1.1–2.1. This proves surjectivity. If a stage class becomes zero at $C_{\mathfrak q}$, descend its finite refining hypercover and bounding cochain in the same way; its restriction is then zero at a later stage. This gives injectivity and hence the isomorphism. If $n$ times the limit class is zero, apply injectivity to $n$ times any descended representative and shrink once more. The degree-zero case is the unit calculation of step 2.1. [F2, step 1.1, step 2.1, step 2.2, algebra] ∎
