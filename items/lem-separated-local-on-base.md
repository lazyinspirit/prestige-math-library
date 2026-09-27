---
id: lem-separated-local-on-base
kind: lemma
title: Separatedness is local on the base
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-separated-morphism-schemes, lem-diagonal-base-change-identification, lem-closed-immersion-local-on-target, lem-base-change-open-closed-immersions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.12, printed p.41"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.3.3, printed p.308"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $f:X\to S$ be a morphism of schemes and let $S=\bigcup_i S_i$ be an open
cover. Then $f$ is separated if and only if for every $i$ the base change
$X\times_S S_i\to S_i$ is separated.

## Facts & Assumptions

**Given:** A morphism $f:X\to S$, an open cover $S=\bigcup_i S_i$, and the base changes $f_i:X_i\to S_i$ with $X_i=X\times_S S_i$.

[F1] A morphism is **separated** when its diagonal is a closed immersion. ([[def-separated-morphism-schemes]])

[F2] For $S'\to S$ and $X\to S$ there is a canonical isomorphism $X_{S'}\times_{S'}X_{S'}\cong(X\times_S X)\times_S S'$, under which the new diagonal is the base change of the old one; the relevant square is Cartesian. ([[lem-diagonal-base-change-identification]])

[F3] A morphism $Z\to T$ is a closed immersion if and only if its restriction to each member of an open cover of $T$ is a closed immersion. ([[lem-closed-immersion-local-on-target]])

[F4] Closed immersions remain closed immersions after arbitrary base change. ([[lem-base-change-open-closed-immersions]])

## Proof

**Proof technique:** direct.

1.1 Put $Q_i=(X\times_S X)\times_S S_i$, the inverse image of $S_i$ under the structure morphism $X\times_S X\to S$. The $Q_i$ are open subschemes of $X\times_S X$ and they cover $X\times_S X$, because the $S_i$ cover $S$. [given]

1.2 From the Cartesian square of [F2] and the identity $\operatorname{pr}_j\Delta_{X/S}=\operatorname{id}_X$ of the diagonal, the inverse image $\Delta_{X/S}^{-1}(Q_i)$ is exactly $X_i$ and the restriction of $\Delta_{X/S}$ to $Q_i$ is the diagonal $\Delta_{X_i/S_i}$. [F2, given]

2.1 By [F2] applied to $S_i\to S$ there is a canonical isomorphism $X_i\times_{S_i}X_i\cong Q_i$ under which $\Delta_{X_i/S_i}$ is the base change of $\Delta_{X/S}$ along the open immersion $Q_i\to X\times_S X$. [F2, step 1.1]

2.2 Conversely assume each $f_i$ is separated, so that each diagonal $\Delta_{X_i/S_i}$ is a closed immersion by [F1]. By step 1.2 the restriction of $\Delta_{X/S}$ to the open subscheme $Q_i$ is exactly $\Delta_{X_i/S_i}$ and $\Delta_{X/S}^{-1}(Q_i)=X_i$, so every restriction of $\Delta_{X/S}$ to a member of the open cover $\{Q_i\}$ of $X\times_S X$ of step 1.1 is a closed immersion. [F1, step 1.1, step 1.2]

3.1 If $f$ is separated, then $\Delta_{X/S}$ is a closed immersion by [F1], and its base change $\Delta_{X_i/S_i}$ along the open immersion $Q_i\to X\times_S X$ is a closed immersion by [F4]; hence each $f_i$ is separated by [F1]. [F1, F4, step 2.1]

3.2 By [F3] applied to the cover $\{Q_i\}$ of $X\times_S X$, the diagonal $\Delta_{X/S}$ is a closed immersion, so $f$ is separated by [F1]. [F1, F3, step 2.2]

4.1 Steps 3.1 and 3.2 give both implications, including the cases where some $S_i$ or $X_i$ is empty and the case of a one-element cover. [step 3.1, step 3.2] ∎
