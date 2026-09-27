---
id: thm-morphisms-agree-closed-equalizer-separated-target
kind: theorem
title: Equalizers into separated schemes are closed
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-separated-morphism-schemes, def-diagonal-morphism-scheme, def-fibre-product-schemes-universal-property, thm-fibre-products-of-schemes-exist, lem-base-change-open-closed-immersions, lem-immersions-and-localizations-monomorphisms]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.5, printed p.40"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.4.A, printed pp.314-315"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
---

## Statement

Let $S$ be a scheme, let $a,b:X\to Y$ be $S$-morphisms and suppose that
$Y\to S$ is separated. Then the fibre product
$$E=X\times_{(a,b),\;Y\times_S Y,\;\Delta_{Y/S}}Y$$
exists, the first projection $E\to X$ is a closed immersion, and for every scheme
$T$ the morphisms $T\to E$ correspond bijectively to the morphisms $t:T\to X$
with $at=bt$. In particular $E$ represents agreement of $a$ and $b$ on every
test scheme, including nonreduced ones.

## Facts & Assumptions

**Given:** $S$-morphisms $a,b:X\to Y$ with $Y\to S$ separated, the pair $(a,b):X\to Y\times_S Y$, and the diagonal $\Delta_{Y/S}:Y\to Y\times_S Y$.

[F1] For $S$-schemes the **fibre product** $P$ of $u:Z\to S$ and $v:W\to S$ has the universal property that morphisms $T\to P$ correspond bijectively to pairs of morphisms $T\to Z$, $T\to W$ with equal composite to $S$; existence is supplied by [[thm-fibre-products-of-schemes-exist]]. ([[def-fibre-product-schemes-universal-property]])

[F2] The **diagonal** $\Delta_{Y/S}:Y\to Y\times_S Y$ is the unique morphism with $\operatorname{pr}_1\Delta_{Y/S}=\operatorname{id}_Y=\operatorname{pr}_2\Delta_{Y/S}$. ([[def-diagonal-morphism-scheme]])

[F3] A morphism is **separated** when its diagonal is a closed immersion. ([[def-separated-morphism-schemes]])

[F4] Closed immersions remain closed immersions after arbitrary base change. ([[lem-base-change-open-closed-immersions]])

[F5] Closed immersions are monomorphisms: for every scheme $T$ the induced map on morphism sets is injective. ([[lem-immersions-and-localizations-monomorphisms]])

## Proof

1.1 By [F1], with existence of fibre products, the fibre product $E$ of $(a,b):X\to Y\times_S Y$ and $\Delta_{Y/S}:Y\to Y\times_S Y$ exists, and for every scheme $T$ its $T$-points are the pairs $(t,c)$ with $t:T\to X$, $c:T\to Y$ and $(at,bt)=\Delta_{Y/S}c$. [F1, given]

1.2 By [F3], separatedness of $Y\to S$ says that $\Delta_{Y/S}$ is a closed immersion, hence a monomorphism by [F5]; and by [F2] the composites of $\Delta_{Y/S}$ with the two projections are the identity, so $(at,bt)=\Delta_{Y/S}c$ forces $at=\operatorname{pr}_1\Delta_{Y/S}c=c=\operatorname{pr}_2\Delta_{Y/S}c=bt$. [F2, F3, F5, given]

2.1 Consequently the $T$-points of $E$ are exactly the morphisms $t:T\to X$ with $at=bt$: given such $t$, the pair $(t,at)$ satisfies $(at,bt)=(at,at)=\Delta_{Y/S}(at)$ by [F2]; conversely for a point $(t,c)$ of $E$ the equation $at=bt$ holds by step 1.2 and then $c=at$, so the second component is determined by $t$. This description is natural in $T$ and refers to no reducedness of $T$. [F2, step 1.1, step 1.2]

2.2 The projection $E\to X$ is the base change of $\Delta_{Y/S}$ along $(a,b)$ by the universal property of [F1]; as $\Delta_{Y/S}$ is a closed immersion by step 1.2, [F4] makes $E\to X$ a closed immersion. [F1, F4, step 1.1, step 1.2]

3.1 Steps 1.1, 2.1 and 2.2 exhibit $E$ as a closed subscheme of $X$ whose $T$-points are precisely the $t:T\to X$ with $at=bt$, for every scheme $T$. This is the equalizer of $a$ and $b$, so the equalizer exists as a closed subscheme of $X$ and represents agreement of the two morphisms. [step 1.1, step 2.1, step 2.2] ∎
