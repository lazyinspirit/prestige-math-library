---
id: prop-the-two-ext-long-exact-sequences-agree-under-balance
kind: proposition
title: "The two Ext long exact sequences agree under balance"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic, prop-the-ext-balance-isomorphism-is-natural-in-both-variables, thm-long-exact-ext-sequence-in-the-second-variable, thm-long-exact-ext-sequence-in-the-first-variable, thm-horseshoe-lemma-for-projective-resolutions, thm-horseshoe-lemma-for-injective-resolutions, thm-right-derived-functors-form-a-cohomological-delta-functor, thm-naturality-of-the-cohomology-connecting-morphism]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume Dependent Choice. Let $\mathcal A$ be abelian with enough projectives and injectives and supplied projective and injective resolution data on all objects. The balance maps $\beta^n:\operatorname{Ext}_P^n\to\operatorname{Ext}_I^n$ commute with the connecting maps in either variable, for every $n\geq0$. Here the connecting maps are those obtained from the short exact Hom complexes and the horseshoe constructions, transported to the supplied resolutions by comparison maps. Thus they identify the two long exact Ext sequences, with the degree-zero identification to Hom.

## Facts & Assumptions

**Given:** The stated resolution data and a short exact sequence in either variable.

[F1] The two edge maps into $T(P,I)=\operatorname{Tot}\operatorname{Hom}(P,I)$ are quasi-isomorphisms, and their cohomology ratio is balance ([[thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]]); these maps commute with resolution comparisons ([[prop-the-ext-balance-isomorphism-is-natural-in-both-variables]]).

[F2] Under DC, projective horseshoes are degreewise split short exact sequences of resolutions; dualizing gives the same assertion for injective horseshoes ([[thm-horseshoe-lemma-for-projective-resolutions]], [[thm-horseshoe-lemma-for-injective-resolutions]]).

[F3] Connecting maps commute with maps of short exact sequences of cochain complexes ([[thm-naturality-of-the-cohomology-connecting-morphism]]). The derived connecting maps are formed with horseshoes and transported to the supplied data ([[thm-right-derived-functors-form-a-cohomological-delta-functor]], [[thm-long-exact-ext-sequence-in-the-second-variable]], [[thm-long-exact-ext-sequence-in-the-first-variable]]).

## Proof

**Proof technique:** direct.

1.1 For $0\to N'\to N\to N''\to0$, fix $P\to M$ and choose an injective horseshoe $0\to I'\to I\to I''\to0$. There are three short exact sequences of cochain complexes: $\operatorname{Hom}(P,N^*)$, $\operatorname{Hom}(M,I^*)$, and $T(P,I^*)$, where $*$ denotes the three terms of the short exact sequence, not cochain degree. The first is exact by projectivity of each $P_p$; the second and third are exact because the horseshoe is split in each degree, and total diagonals are finite. The coaugmentations and augmentation give two morphisms of short exact sequences from the edge sequences to the total sequence. [F1, F2, given, construct]

1.2 For $0\to M'\to M\to M''\to0$, fix $N\to I$ and choose a projective horseshoe $0\to P'\to P\to P''\to0$. The three short exact sequences are $\operatorname{Hom}(P^*,N)$, $\operatorname{Hom}(M^*,I)$, and $T(P^*,I)$, all ordered with double-prime first and prime last. The first and third are exact by the degreewise splitting; the second is exact by injectivity of each $I^q$. Again the augmentation and coaugmentation give morphisms from both edge sequences to the total sequence. [F1, F2, given, construct]

2.1 In each case let $a$ be the projective-edge map to the total and $b$ the injective-edge map. By [F3], $H(a)$ and $H(b)$ commute with the connecting maps of their respective sequences and the total sequence. They are isomorphisms by [F1]. Hence $\beta=H(b)^{-1}H(a)$ also commutes with connecting maps. These are the actual balance maps, not merely some degreewise natural isomorphism. The total differential is $h+(-1)^p v$; both edge maps are cochain maps with the page's unsigned Hom differentials, so these are commuting squares with no additional sign. [F1, F3, step 1.1, step 1.2, algebra]

3.1 The horseshoe middle resolutions may differ from the fixed ones. Transport their cohomology to the supplied data by comparison isomorphisms. By [F3] this is exactly how the derived connecting maps are defined, and [F1] makes balance commute with these comparisons. Therefore the squares proved in step 2.1 hold for the supplied resolutions as well. In degree zero both augmentations identify the common cocycles with Hom, giving its identity identification. [F1, F3, step 2.1, algebra] ∎
