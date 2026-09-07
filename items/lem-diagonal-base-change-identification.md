---
id: "lem-diagonal-base-change-identification"
kind: "lemma"
title: "The diagonal commutes with base change"
status: "draft"
origin: "pipeline"
deps: ["def-diagonal-morphism-scheme", "lem-base-change-composition", "lem-fibre-product-associativity-and-symmetry"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil proof 11.1.10, pp.230–231"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

For $S'\to S$ and $X\to S$, there is a canonical isomorphism
$$X_{S'}\times_{S'}X_{S'}\cong(X\times_S X)\times_S S'.$$
Under this identification $\Delta_{X_{S'}/S'}$ is the base change of $\Delta_{X/S}$. More explicitly, the square with horizontal arrows the two diagonals and vertical arrows to $X$ and $X\times_S X$ is Cartesian.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] For $X\to S$, the **diagonal morphism** is the unique $\Delta_{X/S}:X\to X\times_S X$ satisfying $\operatorname{pr}_1\Delta_{X/S}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/S}$. It exists by thm-fibre-products-of-schemes-exist. For any test scheme $T$, it takes an $S$-morphism $a:T\to X$ to the compatible pair $(a,a)$. ([[def-diagonal-morphism-scheme]])

[F2] For $S''\xrightarrow{k}S'\xrightarrow{h}S$ and an $S$-scheme $X$, there is a canonical isomorphism $$(X\times_S S')\times_{S'}S''\cong X\times_S S''.$$ It is functorial in $X$ and compatible with the induced maps of $S$-schemes. ([[lem-base-change-composition]])

[F3] For $S$-schemes $X,Y,Z$ there are natural projection-compatible isomorphisms $$X\times_S Y\cong Y\times_S X,\qquad (X\times_S Y)\times_S Z\cong X\times_S(Y\times_S Z),\qquad X\times_S S\cong X\cong S\times_S X.$$ Any coherence identity between these identifications holds whenever both sides induce the same ordered projections to the original factors. ([[lem-fibre-product-associativity-and-symmetry]])

## Proof

1.1 By F2 and F3, a map from any $T$ to either displayed product is exactly a triple $(a,b,c)$ with $a,b:T\to X$, $c:T\to S^{\prime}$ and $fa=fb=hc$, where $h:S^{\prime}\to S$. Keeping these three projections constructs the isomorphism and its inverse. [given, F2, F3]

2.1 By F1 the new diagonal sends $(a,c)$ to $(a,a,c)$. In the pullback of the old diagonal a test triple $(a,b,c)$ is accompanied by $d:T\to X$ satisfying $(a,b)=(d,d)$. Thus it is exactly the same datum $(d,c)$, with no additional choice. The projections give inverse morphisms, proving the Cartesian assertion. Empty schemes, identity base changes and nonreduced test schemes obey this same argument. [F1, step 1.1] ∎
