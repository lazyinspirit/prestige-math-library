---
id: thm-algebraic-space-from-etale-equivalence-relation
kind: theorem
title: "Quotients of schemes by etale equivalence relations are algebraic spaces"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-quotient-fppf-sheaf-of-a-pre-relation
  - def-groupoid-in-schemes-and-etale-equivalence-relation
  - def-algebraic-space-as-fppf-sheaf
  - def-presentation-of-an-algebraic-space
  - lem-etale-equivalence-relation-restriction
  - lem-quotient-sheaf-base-change-along-flat-lfp-map
  - lem-quotient-map-etale-when-quotient-is-algebraic-space
  - lem-affine-etale-equivalence-relation-quotient
  - lem-open-immersion-gluing-of-algebraic-spaces
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Theorem 65.10.5"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Theorem 65.10.5 (tag 02WW), printed 16-17; full proof read, with Lemmas 65.10.1-65.10.4, 65.8.4 and 65.8.5"
---

## Statement

Assume the Axiom of Choice inherited from the quotient and descent suppliers
([[def-axiom-of-choice]]). Let $S$ be a scheme, let $U$ be a scheme over $S$
and let $j=(s,t)\colon R\to U\times_SU$ be an etale equivalence relation on
$U$ over $S$
([[def-groupoid-in-schemes-and-etale-equivalence-relation]]). Then the fppf
quotient sheaf $U/R$ ([[def-quotient-fppf-sheaf-of-a-pre-relation]]) is an
algebraic space over $S$ ([[def-algebraic-space-as-fppf-sheaf]]), and
$U\to U/R$ is etale and surjective; equivalently $(U,R,U\to U/R)$ is a
presentation of $U/R$
([[def-presentation-of-an-algebraic-space]]).

## Facts & Assumptions

**Given:** A scheme $U$ over $S$, an etale equivalence relation $j\colon R\to U\times_SU$, the quotient sheaf $F=U/R$, and AC.

[F1] Restriction of an etale equivalence relation along an etale morphism is again an etale equivalence relation ([[lem-etale-equivalence-relation-restriction]]).

[F2] If $g\colon U'\to U$ is flat and locally of finite presentation, then $U'/R'\to U/R$ is representable and an open immersion whose image is the saturated open $t(s^{-1}(g(U')))$; it is an isomorphism when that open is all of $U$, in particular when $g$ is surjective ([[lem-quotient-sheaf-base-change-along-flat-lfp-map]]).

[F3] For affine $U$, the quotient $U/R$ is an algebraic space and $U\to U/R$ is representable, etale and surjective ([[lem-affine-etale-equivalence-relation-quotient]]).

[F4] Disjoint unions of algebraic spaces with a scheme cover, and gluing of an algebraic space from open subfunctors that are algebraic spaces with surjective union, are algebraic spaces ([[lem-open-immersion-gluing-of-algebraic-spaces]]).

[F5] If $F=U/R$ is an algebraic space, then $U\to F$ is representable, etale and surjective ([[lem-quotient-map-etale-when-quotient-is-algebraic-space]]).



## Proof

1.1 Reduction to a disjoint union of affines. Let $U'=\coprod_iU_i\to U$ be the disjoint union of the members of an affine open covering of $U$. The family is a surjective étale morphism, hence flat and locally of finite presentation; by [F1] the restriction $R'$ of $R$ to $U'$ is an étale equivalence relation, and by [F2] applied to the jointly surjective morphism $U'\to U$ the induced map $U'/R'\to U/R$ is an isomorphism. Hence we may replace $U$ by the disjoint union of affine schemes $U_i$. [F1, F2]

1.2 The affine pieces. Let $R_i$ be the restriction of $R$ to $U_i$; by [F1] it is an etale equivalence relation, and by [F3] the quotient $F_i=U_i/R_i$ is an algebraic space with $U_i\to F_i$ representable, etale and surjective. The canonical morphisms $F_i\to F=U/R$ are representable open immersions by [F2], and the induced map $\coprod_iF_i\to F$ is surjective as a morphism of sheaves because the $U_i$ cover $U$ and $F$ is the quotient sheaf of $U$: every section of $F$ lifts fppf-locally to $U$, hence to some $U_i$. [F1, F2, F3]

1.3 The coproduct is an algebraic space. The morphism $\coprod_iU_i\to\coprod_iF_i$ is a disjoint union of the representable etale surjective covers $U_i\to F_i$, hence representable, etale and surjective, and its source $\coprod_iU_i$ is a scheme; by clause (1) of [F4] the coproduct $\coprod_iF_i$ is an algebraic space. [F3, F4]

2.1 Gluing. The hypotheses of clause (2) of [F4] are satisfied: $F$ is an fppf sheaf, each $F_i\to F$ is representable and an open immersion, the map $\coprod_iF_i\to F$ is surjective, and $\coprod_iF_i$ is an algebraic space by step 1.3. Hence $F=U/R$ is an algebraic space over $S$, and $U\to F$ is representable, etale and surjective by [F5], so $(U,R,U\to F)$ is a presentation. The Axiom of Choice is inherited from the quotient and descent suppliers used in [F2]-[F3]. [F4, F5, step 1.2, step 1.3] ∎ 
