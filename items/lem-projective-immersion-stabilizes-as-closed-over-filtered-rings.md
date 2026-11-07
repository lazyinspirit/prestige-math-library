---
id: lem-projective-immersion-stabilizes-as-closed-over-filtered-rings
kind: lemma
title: A projective immersion that is eventually closed stabilizes at a finite ring stage
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-filtered-category-and-filtered-colimit
  - lem-equality-in-a-filtered-colimit-of-sets-is-eventual
  - def-locally-closed-immersion
  - def-closed-immersion-schemes
  - def-relative-projective-space-standard-charts
  - def-quasi-coherent-module-scheme
proof_strategy: direct
axiom_use: No choice principle is assumed; each descent uses one finite list of charts, coefficients, relations, and equality witnesses.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Limits of Schemes, Proposition 32.9.6
      url: https://stacks.math.columbia.edu/tag/01ZJ
      locator: The full displayed statement and proof were read for separated finite-type ambient context. The finite projective closed-immersion stabilization and its choice-free proof are reconstructed below, not imported from that proposition.
---

## Statement

Let $(A_i)$ be a filtered system of commutative rings with colimit $A$. Let $Y_i$ be a finitely presented $A_i$-scheme, and let $j_i:Y_i\to\mathbb P^n_{A_i}$ be an immersion. If the base change $j_A$ is a closed immersion, then for some later stage $k$ the base-changed morphism $j_k:Y_k\to\mathbb P^n_{A_k}$ is a closed immersion. No choice principle or Noetherian hypothesis on the rings is assumed.

## Statement references

[[def-filtered-category-and-filtered-colimit]]

[[def-locally-closed-immersion]]

[[def-closed-immersion-schemes]]

[[def-relative-projective-space-standard-charts]]

## Facts & Assumptions

**Given:** The filtered system, the finitely presented scheme and immersion, and the closedness of its base change.

[F1] A finite list of coefficients, equations and equalities in a filtered colimit is represented and becomes exact at one common later stage. [[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]

[F2] The standard projective affine charts are finite in number, their overlaps are principal localizations, and quasi-coherent modules restrict by localization. [[def-relative-projective-space-standard-charts]] [[def-quasi-coherent-module-scheme]]

[L1] For a finite chart cover, a specified morphism between finitely presented schemes and a specified equality of two such morphisms descend after finitely many choices of charts, generator images, denominators, relations, and equality witnesses. This finite assertion is proved in steps 4.1–5.1, not imported from a choice-qualified general descent theorem.

## Proof

**Proof technique:** finitely generate the actual closed image, then descend a witnessed inverse.

1.1 The given $j_A$ is finitely presented. On any affine source and target, a map $A[x_1,\ldots,x_r]/I\to A[y_1,\ldots,y_s]/J$ is finitely presented by the $y_j$, the finitely many relations of $J$ and $x_i-f_i(y)$. A finite affine cover and finite overlap equations give the scheme assertion. Its closed-image ideal sheaf $\mathcal I$ is consequently locally finitely generated. [F2, given, construct]

2.1 On each standard chart $D_+(X_i)$ choose a finite generating family for $\mathcal I$. Write each generator as a homogeneous fraction. A section on $D_+(X_i)$ extends after multiplication by a sufficiently high power of $X_i$: on each of the finitely many other standard charts, clear the finitely many localization denominators expressing its membership in $\mathcal I$. Thus finitely many homogeneous polynomials $F_1,\ldots,F_N$ generate $\mathcal I$ on every chart. Their zero subscheme $Z_A$ is the actual closed image, and $j_A$ gives an isomorphism $Y_A\simeq Z_A$. No Noetherianity of $A$ was used. [F2, step 1.1, construct, algebra]

3.1 By [F1], the finitely many coefficients of the $F_a$ come from some common stage. Let $Z_j\subseteq\mathbb P^n_{A_j}$ be their zero subscheme. On finitely many affine source charts, the pullbacks of these finitely many polynomials vanish after base change to $A$. Enlarging the stage once makes every such equation vanish. Hence $j_j$ factors through $Z_j$. [F1, step 2.1, construct]

4.1 Represent the inverse $Z_A\to Y_A$ using finitely many affine target charts and a finite principal cover of each affine chart of $Z_A$ by their inverse images. Each affine map is given by finitely many generator images, fractions and relations. The finite cover, overlap compatibilities and cocycles have finite unit-ideal and equality witnesses. Applying [F1] to that one finite collection yields, at a common later stage, a morphism $Z_k\to Y_k$ whose base change is the given inverse. [F1, F2, step 3.1, construct]

5.1 Each composite is the identity after base change to $A$. On the same finite affine covers, equality of morphisms to a finitely presented affine scheme is equality on finitely many algebra generators. Each equality becomes exact after one later stage by [F1], and finitely many such witnesses have a common later stage. There $Y_k\to Z_k$ and $Z_k\to Y_k$ are inverse isomorphisms. [F1, step 4.1, construct]

6.1 The resulting $j_k$ is an isomorphism $Y_k\simeq Z_k$ followed by the closed immersion $Z_k\hookrightarrow\mathbb P^n_{A_k}$, so it is a closed immersion. This proves the claim without assuming that scheme-theoretic closures commute with base change or that a proper fibre implies a proper neighbourhood. [L1, step 3.1, step 5.1, given] ∎
