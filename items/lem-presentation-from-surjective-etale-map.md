---
id: lem-presentation-from-surjective-etale-map
kind: lemma
title: "Surjective etale maps from schemes give presentations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-algebraic-space-as-fppf-sheaf
  - def-representable-morphism-of-presheaves
  - def-etale-morphism-schemes
  - def-morphism-and-fibre-products-of-algebraic-spaces
  - def-groupoid-in-schemes-and-etale-equivalence-relation
  - def-quotient-fppf-sheaf-of-a-pre-relation
  - lem-etale-stable-base-change-composition
  - def-fibre-product-schemes-universal-property
  - def-axiom-of-choice
  - def-fppf-sheaf-and-sheafification
  - lem-fppf-sheafification-exists
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Lemma 65.9.1"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Lemma 65.9.1 (tag 0262), a surjective etale map from a scheme presents the algebraic space"
---

## Statement

Assume the Axiom of Choice inherited from the quotient/sheaf and descent
suppliers ([[def-axiom-of-choice]]). Let $F$ be an algebraic space over $S$
([[def-algebraic-space-as-fppf-sheaf]]), let $U$ be an $S$-scheme and let
$f\colon U\to F$ be representable, etale and surjective
([[def-representable-morphism-of-presheaves]],
[[def-etale-morphism-schemes]]). Set $R=U\times_FU$
([[def-morphism-and-fibre-products-of-algebraic-spaces]]) and let
$j=(t,s)\colon R\to U\times_SU$ be induced by the two projections. Then:
(1) $j$ is an equivalence relation on $U$ over $S$
([[def-groupoid-in-schemes-and-etale-equivalence-relation]]); (2) the
projections $s,t\colon R\to U$ are etale; (3) the diagram
$R\rightrightarrows U\xrightarrow{f}F$ is a coequalizer in fppf sheaves, that
is, $F\cong U/R$ as fppf quotient sheaves
([[def-quotient-fppf-sheaf-of-a-pre-relation]]).

## Facts & Assumptions

**Given:** An algebraic space $F$ over $S$, a representable etale surjective $f\colon U\to F$ from a scheme $U$, the fibre product $R=U\times_FU$ with projections $s,t$, and AC.

[F1] A morphism of presheaves representable by schemes has every base change along a morphism from a scheme representable by a scheme; here $f$ is representable, so $R$ is a scheme and the two projections are the base changes of $f$ along $f$ ([[def-representable-morphism-of-presheaves]], [[def-fibre-product-schemes-universal-property]]).

[F2] Étale morphisms of schemes are stable under base change and composition ([[lem-etale-stable-base-change-composition]]).

[F3] $U/R$ is the sheafification of the naive quotient presheaf of the pair of maps $s,t$, uses AC, and is the initial fppf sheaf receiving the quotient presheaf ([[def-quotient-fppf-sheaf-of-a-pre-relation]]).

[F4] A morphism of presheaves of sets is a monomorphism exactly when all its components are injective; $F$ and $U/R$ are fppf sheaves. Sheafification is computed by the two-step plus construction, and its unit is an isomorphism on a sheaf ([[def-fppf-sheaf-and-sheafification]], [[lem-fppf-sheafification-exists]]).

## Proof

1.1 $R$ is a scheme, $j$ is an equivalence relation, and $s,t$ are etale. By [F1] the fibre product $R=U\times_FU$ is a scheme and the projections $s,t\colon R\to U$ are the base changes of the representable morphism $f$ along $f$; since $f$ is etale and étale morphisms are stable under base change by [F2], both $s$ and $t$ are etale. The map $j=(t,s)\colon R\to U\times_SU$ is injective on $T$-points for every scheme $T$, because a $T$-point of $R$ is a pair of $T$-points of $U$ with equal image in $F$, and its image in $U\times_SU$ is that pair; hence $j$ is a monomorphism. The groupoid operations are the standard kernel-pair operations of the map $f$: the diagonal $U\to R$, the swap $R\to R$, and composition induced by the projections of the triple fibre product; the groupoid axioms hold because they hold for the pair groupoid of $U$ restricted to the subobject of pairs with equal image in $F$. Hence $j$ is an equivalence relation on $U$ over $S$. [F1, F2]

2.1 The comparison map is a monomorphism. The morphism $f\colon U\to F$ coequalizes $s$ and $t$ by construction of $R=U\times_FU$, so it induces a morphism of presheaves $P_{U/R}\to F$ from the naive quotient presheaf, which is injective because two $T$-points of $U$ with equal image in $F$ are by definition a $T$-point of $R$. To see directly that plus preserves this injection, represent two elements of $P_{U/R}^+(T)$ by matching families. If their images in $F^+(T)$ agree, the definition of the plus colimit gives a common refining cover on which their images agree. Injectivity of $P_{U/R}\to F$ makes the original restricted families agree there, so their plus classes coincide. Applying this argument again gives an injection $P_{U/R}^{++}\to F^{++}$; since $F^{++}\cong F$ by [F4], the induced map $U/R\to F$ is a monomorphism. [F3, F4, step 1.1]

2.2 The comparison map is an epimorphism. Let $T$ be a scheme and $\xi\in F(T)$ a section. Since $f$ is representable, etale and surjective, the base change $U\times_{F,\xi}T\to T$ is an etale surjective morphism of schemes, so there is an fppf covering $\{T_i\to T\}$ and lifts $T_i\to U$ with $f$-image $\xi|_{T_i}$; in other words the section $\xi$ lifts fppf-locally to $U$. The assignment sending a $U$-point to its $f$-image factors through $U/R$, so every section of $F$ is locally in the image of $U/R\to F$: the comparison is an epimorphism of sheaves. [F1, F2, F3, step 1.1]

3.1 Conclusion. For each section of $F(T)$, choose the local preimages supplied by step 2.2. Their restrictions agree on overlaps by the monomorphism of step 2.1, so the sheaf condition on $U/R$ glues them uniquely to a preimage on $T$. Thus the comparison is bijective on every section set, compatibly with restriction, and $F\cong U/R$ as fppf sheaves; the diagram $R\rightrightarrows U\to F$ is the coequalizer presenting $F$. Together with steps 1.1 the three assertions hold. The Axiom of Choice is inherited from the quotient-sheaf construction of [F3], which is used in steps 2.1-2.2. [F3, F4, step 1.1, step 2.1, step 2.2] ∎ 