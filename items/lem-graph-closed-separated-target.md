---
id: lem-graph-closed-separated-target
kind: lemma
title: Closed graphs over separated targets
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-separated-morphism-schemes, def-graph-morphism-over-base, lem-graph-as-pullback-diagonal, lem-base-change-open-closed-immersions, thm-fibre-products-of-schemes-exist]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.10, printed p.41"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.3.6, printed p.309"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
---

## Statement

Let $g:X\to Y$ be an $S$-morphism of schemes and suppose that $Y\to S$ is
separated. Then the graph $\Gamma_g:X\to X\times_S Y$ is a closed immersion. No
separatedness hypothesis on $X\to S$ is required.

## Facts & Assumptions

**Given:** An $S$-morphism $g:X\to Y$ with $Y\to S$ separated, and the graph $\Gamma_g$.

[F1] The **graph morphism** is $\Gamma_g=(\operatorname{id}_X,g):X\to X\times_S Y$, supplied by [[thm-fibre-products-of-schemes-exist]]; its first projection is the identity and its second projection is $g$. ([[def-graph-morphism-over-base]])

[F2] With $H=(g\operatorname{pr}_X,\operatorname{pr}_Y):X\times_S Y\to Y\times_S Y$, the square with top arrow $\Gamma_g$, bottom arrow $\Delta_{Y/S}$, left arrow $g$ and right arrow $H$ is Cartesian; thus $\Gamma_g$ is the base change of $\Delta_{Y/S}$ along $H$. ([[lem-graph-as-pullback-diagonal]])

[F3] A morphism $Y\to S$ is **separated** when $\Delta_{Y/S}$ is a closed immersion. ([[def-separated-morphism-schemes]])

[F4] Closed immersions remain closed immersions after arbitrary base change; this is asserted with no flatness or finiteness hypothesis. ([[lem-base-change-open-closed-immersions]])

## Proof

**Proof technique:** direct.

1.1 By [F1] the graph $\Gamma_g:X\to X\times_S Y$ is the morphism $(\operatorname{id}_X,g)$, and [F2] exhibits it as the base change of $\Delta_{Y/S}:Y\to Y\times_S Y$ along $H:X\times_S Y\to Y\times_S Y$, the square in [F2] being Cartesian. [F1, F2, given]

1.2 Since $Y\to S$ is separated, [F3] says that $\Delta_{Y/S}$ is a closed immersion. [F3, given]

2.1 The base change of the closed immersion $\Delta_{Y/S}$ along $H$ is a closed immersion by [F4]; by step 1.1 that base change is $\Gamma_g$, so $\Gamma_g$ is a closed immersion. [F4, step 1.1, step 1.2]

3.1 The argument used only the separatedness of $Y\to S$ and the Cartesian square of [F2]; nothing was assumed about $X\to S$, which may even be nonseparated. [step 2.1] ∎
