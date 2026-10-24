---
id: lem-separated-stable-under-base-change
kind: lemma
title: Separatedness survives base change
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-separated-morphism-schemes, def-base-change-morphism-schemes, lem-diagonal-base-change-identification, lem-base-change-open-closed-immersions]
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

Let $f:X\to S$ be a separated morphism and let $g:S'\to S$ be any morphism. Then
the base change $f':X\times_S S'\to S'$ is separated. No quasi-compactness,
Noetherian or finite-type hypothesis is used, and $S'$ or $X$ may be empty.

## Facts & Assumptions

**Given:** A separated morphism $f:X\to S$, an arbitrary morphism $g:S'\to S$, and the base change $X'=X\times_S S'$ with structure morphism $f':X'\to S'$.

[F1] A morphism $f:X\to S$ is **separated** when $\Delta_{X/S}$ is a closed immersion. ([[def-separated-morphism-schemes]])

[F2] For $g:S'\to S$ and $X\to S$ there is a canonical isomorphism $X'\times_{S'}X'\cong(X\times_S X)\times_S S'$; under it $\Delta_{X'/S'}$ is the base change of $\Delta_{X/S}$, and the square with the two diagonals and the projections to $X$ and $X\times_S X$ is Cartesian. ([[lem-diagonal-base-change-identification]])

[F3] Closed immersions remain closed immersions after arbitrary base change; this holds with no flatness or finiteness hypothesis and includes the empty and zero-ring cases. ([[lem-base-change-open-closed-immersions]])

[F4] The **base change** $X_{S'}=X\times_S S'$ carries the second projection as structure morphism, and the base change of an $S$-morphism is defined by its two projections. ([[def-base-change-morphism-schemes]])

## Proof

**Proof technique:** direct.

1.1 The morphism $f'$ is $X'\to S'$ with $X'=X\times_S S'$ as in [F4], and [F2] supplies the canonical isomorphism $X'\times_{S'}X'\cong(X\times_S X)\times_S S'$ together with the Cartesian square comparing the two diagonals over $X$ and $X\times_S X$. [F2, F4, given]

1.2 Since $f$ is separated, [F1] says that $\Delta_{X/S}$ is a closed immersion. [F1, given]

2.1 Under the identification of step 1.1 the diagonal $\Delta_{X'/S'}:X'\to X'\times_{S'}X'$ is the base change of $\Delta_{X/S}$ along the projection $(X\times_S X)\times_S S'\to X\times_S X$, by the second assertion of [F2]. [F2, step 1.1]

3.1 By [F3] the base change of the closed immersion $\Delta_{X/S}$ is again a closed immersion; with step 2.1 this exhibits $\Delta_{X'/S'}$ as a closed immersion, and the empty or zero-ring case is covered by the same statement. [F3, step 2.1, step 1.2]

4.1 By [F1] the morphism $f':X'\to S'$ is separated, which is the assertion. [F1, step 3.1] ∎
