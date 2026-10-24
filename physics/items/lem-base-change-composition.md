---
id: "lem-base-change-composition"
kind: "lemma"
title: "Iterated base change"
status: published
origin: "pipeline"
deps: ["def-base-change-morphism-schemes", "lem-fibre-product-associativity-and-symmetry"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil proof 10.1.1 Step 1; 10.3.C"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

For $S''\xrightarrow{k}S'\xrightarrow{h}S$ and an $S$-scheme $X$, there is a canonical isomorphism
$$(X\times_S S')\times_{S'}S''\cong X\times_S S''.$$
It is functorial in $X$ and compatible with the induced maps of $S$-schemes.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Let $h:S'\to S$. For an $S$-scheme $f:X\to S$, its **base change** is $X_{S'}=X\times_S S'$, with structure map the second projection. For an $S$-morphism $u:X\to Y$, define $u_{S'}:X_{S'}\to Y_{S'}$ by its projections $u\circ\operatorname{pr}_X$ and $\operatorname{pr}_{S'}$. Existence and uniqueness follow from thm-fibre-products-of-schemes-exist; the meaning of $S$-morphism is def-scheme-over-base. These formulas preserve identities and composition because their projections do, so they define a functor. A property of morphisms is **stable under arbitrary base change** when every pullback of a morphism with that property again has it. No restriction such as flatness is implicit in “arbitrary”. ([[def-base-change-morphism-schemes]])

[F2] For $S$-schemes $X,Y,Z$ there are natural projection-compatible isomorphisms $$X\times_S Y\cong Y\times_S X,\qquad (X\times_S Y)\times_S Z\cong X\times_S(Y\times_S Z),\qquad X\times_S S\cong X\cong S\times_S X.$$ Any coherence identity between these identifications holds whenever both sides induce the same ordered projections to the original factors. ([[lem-fibre-product-associativity-and-symmetry]])

## Proof

1.1 Using F1, a map $T\to(X\times_S S^{\prime})\times_{S^{\prime}}S^{\prime^{\prime}}$ is a triple $(a,b,c)$ into $X,S^{\prime},S^{\prime^{\prime}}$ satisfying $fa=hb$ and $b=kc$. Eliminating $b$ gives exactly a pair $(a,c)$ satisfying $fa=hkc$. [given, F1]

2.1 The inverse operation is $(a,c)\mapsto(a,kc,c)$. They yield inverse morphisms by the projection-compatible identifications of F2. Empty schemes and identity base maps obey these same formulas. [F2, step 1.1]

3.1 For $u:X\to Y$ the corresponding pair becomes $(ua,c)$ on both sides. Thus identities and compositions commute with the isomorphism, proving functoriality without a choice of points. More generally, if a property $\mathcal P$ is preserved by both base change and composition, the product of two $S$-morphisms $u:X\to Y$ and $v:X^{\prime}\to Y^{\prime}$ with $\mathcal P$ also has $\mathcal P$: factor it as $X\times_S X^{\prime}\to Y\times_S X^{\prime}\to Y\times_S Y^{\prime}$. The first arrow is the pullback of $u$ along $Y\times_S X^{\prime}\to Y$, and the second the pullback of $v$ along $Y\times_S Y^{\prime}\to Y^{\prime}$. Their test pairs verify these pullback identifications. [F1, step 1.1, step 2.1] ∎
