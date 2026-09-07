---
id: "thm-projective-complexes-model-the-bounded-above-derived-category"
kind: "theorem"
title: "Projective complexes model the bounded above derived category"
deps: ["thm-a-bounded-above-complex-of-projectives-is-homotopically-projective", "prop-morphisms-from-a-homotopically-projective-complex-need-no-roof", "lem-bounded-above-complexes-admit-projective-replacements", "prop-bounded-derived-localizations-embed-fully-faithfully"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/0643"
      title: "13.19.3–13.19.8; W 10.4.8 for the equivalence"
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

With supplied bounded-above projective replacements $p_X:P_X\to X$ (and DC or supplied homotopy lifts), the functor $K^-(\operatorname{Proj}\mathcal A)\to D^-(\mathcal A)$ is an equivalence of triangulated categories with a quasi-inverse determined by those data. In particular its Hom collections are sets whenever $\mathcal A$ is locally small.

## Facts & Assumptions

**Given:** With supplied bounded-above projective replacements $p_X:P_X\to X$ (and DC or supplied homotopy lifts), the functor $K^-(\operatorname{Proj}\mathcal A)\to D^-(\mathcal A)$ is an equivalence of triangulated categories with a quasi-inverse determined by those data. In particular its Hom collections are sets whenever $\mathcal A$ is locally small.

[F1] A bounded-above projective complex is K-projective under DC or supplied lifts ([[thm-a-bounded-above-complex-of-projectives-is-homotopically-projective]]).

[F2] Hom out of a K-projective needs no roof ([[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]]).

[F3] Enough projectives gives an objectwise bounded-above replacement under DC or supplied epimorphisms ([[lem-bounded-above-complexes-admit-projective-replacements]]).

[F4] Bounded derived localizations embed fully faithfully and exactly ([[prop-bounded-derived-localizations-embed-fully-faithfully]]).

## Proof

1.1 Every bounded-above projective complex is K-projective. The no-roof theorem and the fully faithful bounded embedding identify its Hom in $K$ with Hom in $D^-$. This proves full faithfulness, including the zero complex. [F1, F2, F4]

2.1 Enough projectives gives objectwise replacements under the stated choice hypothesis; here $p_X$ are supplied simultaneously. Put $R(X)=P_X$. For $u:X\to Y$ in $D^-$, full faithfulness gives a unique homotopy class $R(u):P_X\to P_Y$ with $Q(R(u))=Q(p_Y)^{-1}uQ(p_X)$. Uniqueness gives identity and composition laws. The maps $Q(p_X)$ and their unique lifts provide the natural isomorphisms for a quasi-inverse. [F3, step 1.1, algebra]

3.1 Finite sums of projectives are projective by lifting their component maps. Hence shifts and cones of maps of bounded-above projectives stay in the model. Its cone triangulation is the restricted one from $K$; the inclusion is exact. A triangle transported by $R$ is isomorphic to a model cone triangle: lift its first arrow, take its cone, and use TR3 plus the two-isomorphism argument to compare completions. Thus the equivalence is exact. Its Hom sets are the ordinary homotopy-class quotients of sets of complex maps. [F4, step 1.1, step 2.1, algebra] ∎
