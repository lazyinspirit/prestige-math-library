---
id: lem-separated-stable-under-composition
kind: lemma
title: Separated morphisms compose
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-separated-morphism-schemes, def-diagonal-morphism-scheme, def-closed-immersion-schemes, lem-base-change-open-closed-immersions, thm-fibre-products-of-schemes-exist]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemmas 26.21.9 and 26.21.12, printed p.41"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.3.3, printed p.308"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $X\xrightarrow{g}Y\xrightarrow{f}S$ be morphisms of schemes. If $g$ and $f$
are separated, then $f\circ g$ is separated.

## Facts & Assumptions

**Given:** Morphisms of schemes $g:X\to Y$ and $f:Y\to S$ with diagonals $\Delta_{X/Y}$, $\Delta_{X/S}$, $\Delta_{Y/S}$, and the canonical morphism $u:X\times_Y X\to X\times_S X$ induced by $g$.

[F1] A morphism is **separated** when its diagonal is a closed immersion. ([[def-separated-morphism-schemes]])

[F2] The **diagonal morphism** $\Delta_{X/S}$ is the unique morphism to $X\times_S X$ whose two composites with the projections are the identity; it exists by [[thm-fibre-products-of-schemes-exist]]. ([[def-diagonal-morphism-scheme]])

[F3] A morphism $i:Z\to T$ is a **closed immersion** when its underlying map is a homeomorphism onto a closed subset and $\mathcal O_T\to i_*\mathcal O_Z$ is surjective. ([[def-closed-immersion-schemes]])

[F4] Closed immersions remain closed immersions after arbitrary base change. ([[lem-base-change-open-closed-immersions]])

## Proof

**Proof technique:** direct.

1.1 For closed immersions $i:Z\to Y$ and $j:Y\to T$ the composite $ji$ is a closed immersion: its underlying map is a composite of homeomorphisms onto closed subsets, hence a homeomorphism onto a closed subset of $T$, and $\mathcal O_T\to j_*(i_*\mathcal O_Z)=(ji)_*\mathcal O_Z$ is a composite of the surjections $\mathcal O_T\to j_*\mathcal O_Y$ and $j_*\mathcal O_Y\to j_*(i_*\mathcal O_Z)$ of [F3], hence surjective. [F3, given]

1.2 By [F2] the diagonal $\Delta_{X/S}$ is determined by $\operatorname{pr}_i\Delta_{X/S}=\operatorname{id}_X$ for $i=1,2$; the composite $u\circ\Delta_{X/Y}$ of the two canonical maps into $X\times_S X$ has the same two composites with the projections of $X\times_S X$ as does $\Delta_{X/S}$, because the projections of $X\times_Y X$ restrict to the projections of $X\times_S X$ along $u$. Hence $\Delta_{X/S}=u\circ\Delta_{X/Y}$ by uniqueness in [F2]. [F2, given]

1.3 Consider $g\times_S g:X\times_SX\to Y\times_SY$. The pullback of $\Delta_{Y/S}:Y\to Y\times_SY$ along this morphism is canonically $X\times_YX$: a map $T\to X\times_SX$ factors through that pullback exactly when its two composites $T\to X\xrightarrow{g}Y$ agree, which is the defining universal property of $X\times_YX$. Thus $u:X\times_YX\to X\times_SX$ is this base change of $\Delta_{Y/S}$. Since $f$ is separated, [F1] makes $\Delta_{Y/S}$ a closed immersion, and [F4] makes $u$ a closed immersion. [F1, F4, given]

1.4 Since $g$ is separated, [F1] makes $\Delta_{X/Y}$ a closed immersion. [F1, given]

2.1 By step 1.1 the composite $u\circ\Delta_{X/Y}$ of the closed immersions $u$ of step 1.3 and $\Delta_{X/Y}$ of step 1.4 is a closed immersion; by step 1.2 this composite is $\Delta_{X/S}$. [step 1.1, step 1.2, step 1.3, step 1.4]

3.1 Since its diagonal $\Delta_{X/S}$ is a closed immersion, the composite morphism $f\circ g:X\to S$ is separated by [F1]. [F1, step 2.1] ∎
