---
id: lem-affine-etale-equivalence-relation-quotient
kind: lemma
title: "The quotient of an affine etale equivalence relation is an algebraic space"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-quotient-fppf-sheaf-of-a-pre-relation
  - def-groupoid-in-schemes-and-etale-equivalence-relation
  - def-algebraic-space-as-fppf-sheaf
  - def-morphism-and-fibre-products-of-algebraic-spaces
  - def-presentation-of-an-algebraic-space
  - lem-etale-equivalence-relation-restriction
  - lem-quotient-sheaf-base-change-along-flat-lfp-map
  - lem-quotient-map-etale-when-quotient-is-algebraic-space
  - lem-effective-fppf-descent-separated-locally-quasi-finite
  - def-descent-data-for-schemes
  - def-separated-morphism-schemes
  - def-monomorphism-and-epimorphism
  - def-etale-morphism-schemes
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Lemma 65.10.4"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Lemma 65.10.4 (tag 0265), printed 15-16, the affine case of the quotient theorem"
---

## Statement

Assume the Axiom of Choice inherited from the quotient and descent suppliers
([[def-axiom-of-choice]]). Let $S$ be a scheme, let $U$ be an affine
$S$-scheme and let $j=(s,t)\colon R\to U\times_SU$ be an etale equivalence
relation on $U$ over $S$
([[def-groupoid-in-schemes-and-etale-equivalence-relation]]). Then the fppf
quotient sheaf $F=U/R$
([[def-quotient-fppf-sheaf-of-a-pre-relation]]) is an algebraic space over $S$
([[def-algebraic-space-as-fppf-sheaf]]) and $U\to F$ is representable, etale
and surjective.

## Facts & Assumptions

**Given:** An affine $S$-scheme $U$, an etale equivalence relation $j\colon R\to U\times_SU$, its quotient sheaf $F=U/R$, the quotient map $c\colon U\to F$, and AC.

[F1] $j$ is a monomorphism and $s,t$ are etale; $U$ affine implies $U\times_SU$, carrying a monomorphism into the affine scheme $U\times U$, is separated, so $R$ is separated; consequently $s,t$ are separated and etale ([[def-groupoid-in-schemes-and-etale-equivalence-relation]], [[def-monomorphism-and-epimorphism]], [[def-separated-morphism-schemes]], [[def-etale-morphism-schemes]]).

[F2] The map $j$ is separated and locally quasi-finite. Locally it is of finite type because its composite with the projection to $U$ is etale and hence locally of finite type: generators over the coordinate ring of that factor also generate over the larger coordinate ring of an affine product chart. To see the fibre condition, factor $j$ as the graph of the other map followed by the base change of one of $s,t$. The graph is closed, since the affine $U$ is separated over $S$; the second map is etale. Thus every fibre of $j$ is a closed subscheme of an etale fibre, and its local rings are finite-dimensional over the corresponding residue field. Separatedness follows likewise from the closed graph and separatedness of $s,t$. [F1]

[F3] Effective fppf descent for separated locally quasi-finite morphisms: a descent datum $(X_i/T_i)$ with each $X_i\to T_i$ separated and locally quasi-finite is effective ([[lem-effective-fppf-descent-separated-locally-quasi-finite]], [[def-descent-data-for-schemes]]).

[F4] A section $a\colon T\to F$ is presented fppf-locally by morphisms $a_i\colon T_i\to U$ with $c\circ a_i=a\circ\varphi_i$, whose pairwise differences factor through $R$ ([[def-quotient-fppf-sheaf-of-a-pre-relation]]).

[F5] The quotient map of an etale equivalence relation with algebraic-space quotient is representable, etale and surjective ([[lem-quotient-map-etale-when-quotient-is-algebraic-space]], [[lem-quotient-sheaf-base-change-along-flat-lfp-map]]).

## Proof

1.1 The quotient map is representable. Let $a\colon T\to F$ and let $G=T\times_{a,F,c}U$ be the fibre product; by [F4] choose an fppf covering $\{\varphi_i\colon T_i\to T\}$ with presentations $a_i\colon T_i\to U$ and transition morphisms $r_{ii'}$. Then $T_i\times_TG\cong T_i\times_{a_i,U,t}R$, which is a scheme, and the projection $T_i\times_TG\to T_i$ is the base change of the etale $t$, hence separated and locally quasi-finite. The resulting descent datum for $G$ over $\{T_i\to T\}$ is effective by [F3], so $G$ is representable by a scheme; hence $c$ is representable by schemes. [F1, F2, F3, F4]

2.1 The quotient map is etale and surjective. With the notation of step 1.1, the morphisms $T_i\times_TG\to T_i$ are base changes of $t$, hence etale and surjective; since étaleness and surjectivity are fppf-local on the base, the projection $G\to T$ is etale and surjective. As $a$ was arbitrary, $c\colon U\to F$ is representable, etale and surjective. [F1, F4, step 1.1]

3.1 The diagonal and conclusion. It remains to see that $\Delta_F\colon F\to F\times_SF$ is representable by schemes. The square with $R\to U\times_SU$ over $F\to F\times_SF$ is cartesian: a $T$-point of $U\times_SU$ whose two components have equal image in $F\times_SF$ is a pair of $U$-points that are $R$-equivalent, i.e. a $T$-point of $R$. Moreover $U\times_SU\to F\times_SF$ is representable, etale and surjective by two applications of step 2.1, so for $a\colon T\to F\times_SF$ the base change $T'=(U\times_SU)\times_{F\times_SF,a}T\to T$ is an etale covering and $T'\times_T(T\times_{a,F\times_SF,\Delta_F}F)=T'\times_{U\times_SU,j}R$ is a scheme whose structure morphism is a base change of $j$, hence separated and locally quasi-finite by [F1]-[F2]. Effective descent by [F3] makes the diagonal representable by schemes. Since $F$ is an fppf sheaf, has representable diagonal and has the representable etale surjective cover $c\colon U\to F$ from the affine scheme $U$, it is an algebraic space and $(U,R,U\to F)$ is a presentation; the Axiom of Choice is inherited from the descent and quotient suppliers [F3]-[F4]. [F1, F2, F3, F5, step 2.1] ∎ 