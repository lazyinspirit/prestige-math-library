---
id: "thm-injective-complexes-model-the-bounded-below-derived-category"
kind: "theorem"
title: "Injective complexes model the bounded below derived category"
deps: ["thm-a-bounded-below-complex-of-injectives-is-homotopically-injective", "prop-morphisms-into-a-homotopically-injective-complex-need-no-roof", "lem-bounded-below-complexes-admit-injective-replacements", "prop-bounded-derived-localizations-embed-fully-faithfully"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/013G"
      title: "13.18.3–13.18.8; W 10.4.8 for the equivalence"
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

With supplied bounded-below injective replacements $j_X:X\to I_X$ (and DC or supplied homotopy extensions), $K^+(\operatorname{Inj}\mathcal A)\to D^+(\mathcal A)$ is an equivalence of triangulated categories. For a bounded-below complex $I$, K-injectivity can be tested using only bounded-below acyclic inputs.

## Facts & Assumptions

**Given:** With supplied bounded-below injective replacements $j_X:X\to I_X$ (and DC or supplied homotopy extensions), $K^+(\operatorname{Inj}\mathcal A)\to D^+(\mathcal A)$ is an equivalence of triangulated categories. For a bounded-below complex $I$, K-injectivity can be tested using only bounded-below acyclic inputs.

[F1] A bounded-below injective complex is K-injective under DC or supplied extensions ([[thm-a-bounded-below-complex-of-injectives-is-homotopically-injective]]).

[F2] Hom into a K-injective needs no roof ([[prop-morphisms-into-a-homotopically-injective-complex-need-no-roof]]).

[F3] Enough injectives gives an objectwise bounded-below injective replacement under DC or supplied embeddings ([[lem-bounded-below-complexes-admit-injective-replacements]]).

[F4] Canonical truncation realizes the fully faithful bounded embeddings and their cohomological essential images ([[prop-bounded-derived-localizations-embed-fully-faithfully]]).

## Proof

1.1 Bounded-below injective complexes are K-injective; their Hom groups into each other agree in $K$ and $D$ by the no-roof theorem and in $D^+$ by its fully faithful embedding. This proves full faithfulness, including the zero complex. [F1, F2, F4]

2.1 Enough injectives supplies objectwise replacements under the stated choices. For the simultaneously supplied $j_X$, assign $R(X)=I_X$ and let $R(u)$ be the unique homotopy class whose image is $Q(j_Y)uQ(j_X)^{-1}$. Full faithfulness proves functoriality and the quasi-inverse identities. Finite sums, cones and shifts stay in bounded-below injectives; cone triangles therefore give exactness of the equivalence, by lifting first arrows and comparing triangle completions. [F3, F4, step 1.1, algebra]

3.1 For the testing assertion suppose $I^j=0$ below $a$. Fix an acyclic $A$ and an integer $r$. The three terms in degrees $r-1,r,r+1$ of $\underline{\operatorname{Hom}}(A,I)$, and their differentials, depend only on terms of $A$ strictly above $c=a-r-3$. Thus replacing $A$ by $\tau^{\geq c}A$ leaves these terms and maps unchanged: any factor involving the modified cut has target $I^j=0$. This truncation is bounded below and acyclic. Its Hom cohomology in degree $r$ vanishes by the restricted test, so the original Hom cohomology does too. Since $r$ was arbitrary, $I$ is K-injective. The converse is immediate by restricting the acyclic inputs. [F4, algebra] ∎
