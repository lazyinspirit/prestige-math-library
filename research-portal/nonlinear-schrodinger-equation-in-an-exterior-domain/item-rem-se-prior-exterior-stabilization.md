---
title: Prior damped exterior Schrödinger results
status: published
research_item: rem-se-prior-exterior-stabilization
dependency_level: 3
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 3, opening paragraph; references [1], [6], [14]
      statement: The article reports the three prior damping and stabilization results
        summarized below.
      hypotheses: The respective earlier papers have their own equation, geometry,
        damping and solution-class hypotheses; the paragraph gives a compressed
        account.
      reading_limits: The frozen article text and reference list were consulted for
        attribution; this citation is not a proof of the earlier results.
    - title: Stabilization of Schrödinger equation in exterior domains
      url: https://www.numdam.org/article/COCV_2007__13_3_570_0.pdf
      locator: Introduction, ambient-dimension convention, equation (0.5), Definition
        1 and Theorem 2, printed pages 570–572
      statement: Under exterior geometric control, the stated damped Dirichlet
        Schrödinger problem has uniform polynomial local L2 decay for initial
        data supported in a fixed bounded region.
      hypotheses: Smooth exterior domain in dimension at least two; nonnegative smooth
        compactly supported damping; the set where damping is positive meets
        every trapped ray; compactly supported L2 initial data, as specified in
        the paper.
      reading_limits: The introduction, definition and theorem statement were
        consulted; the proof was not independently checked.
    - title: Asymptotic Stability for the Damped Schrödinger Equation on Noncompact
        Riemannian Manifolds and Exterior Domains
      url: https://doi.org/10.1080/03605302.2014.908390
      locator: Publisher abstract
      statement: The abstract reports uniform exponential L2-level decay for its
        nonlinear damped Schrödinger problem under nontrapping and damping
        assumptions, using unique continuation and local smoothing.
      hypotheses: The abstract specifies a connected complete noncompact nontrapping
        manifold and damping effective outside a bounded smooth region; the full
        paper supplies further precise hypotheses and its exterior-domain
        formulation.
      reading_limits: Only the publisher abstract was available in the search result;
        the full theorem and proof were not read. The exterior-domain and
        compactness–uniqueness descriptions below are attributed to the article
        under study.
---

PDF p. 3: ` opening paragraph, damping results `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-foundation-control-language](item-def-se-foundation-control-language)
- [` Stabilization of Schrödinger equation in exterior domains · Introduction, ambient-dimension convention, equation (0.5), Definition 1 and Theorem 2, printed pages 570–572 `](https://www.numdam.org/article/COCV_2007__13_3_570_0.pdf)
- [` Asymptotic Stability for the Damped Schrödinger Equation on Noncompact Riemannian Manifolds and Exterior Domains · Publisher abstract `](https://doi.org/10.1080/03605302.2014.908390)


## Statement

The article places its results alongside three earlier works. An exterior domain is the complement of a compact obstacle, with the smooth-boundary and connectedness conventions in [def-se-geometry](item-def-se-geometry). Damping means a term in an evolution equation that dissipates the relevant norm or energy; exponential stabilization means an estimate of the form $\|u(t)\|_X\le C e^{-ct}\|u(0)\|_X$ on a specified solution class, with $C,c>0$ uniform on that class, as in [def-se-foundation-control-language](item-def-se-foundation-control-language).

Aloui and Khenissi obtained uniform local energy decay for a damped Dirichlet Schrödinger equation under exterior geometric control. In their setting this condition says that every trapped ray meets the region where the nonnegative damping coefficient is positive. In this result, $d\ge2$ is the ambient Euclidean dimension. Their theorem estimates the local $L^2$ norm in a bounded portion of the exterior by a constant times $t^{-d/2}$ and the initial $L^2$ norm, for sufficiently large time and initial data supported in a fixed bounded region. Local energy here refers to that local $L^2$ norm; the statement is not a global exponential decay estimate.

The article reports that Bortot and Cavalcanti obtained exponential $L^2$ decay in the exterior of a non-trapping obstacle for damping, possibly nonlinear, effective outside a ball, using local smoothing and a compactness–uniqueness argument. Non-trapping is the ray escape condition in [def-se-nontrapping](item-def-se-nontrapping). Local smoothing refers to a space-time gain of local regularity for the relevant evolution; compactness–uniqueness denotes the strategy of extracting a limiting solution and ruling it out using a uniqueness property. These descriptions identify the reported ingredients, not a standalone estimate or a proof here.

The article also reports exponential stabilization of a damped defocusing nonlinear Schrödinger equation in two-dimensional exterior domains by Cavalcanti, Corrêa and Domingos Cavalcanti, for star-shaped obstacles and under a unique continuation assumption. Star-shaped means that there is a point in the obstacle from which the segment to every obstacle point remains in the obstacle. Defocusing identifies the sign of the nonlinear interaction in the cited equation; unique continuation is a property that vanishing on an appropriate open region forces vanishing on the larger connected region for solutions in a specified class. The precise equation, continuation hypothesis and solution class are those of that cited work.

## Source notes

The article supplies the historical summary and attribution for all three claims. The first paper's displayed decay theorem and geometric-control definition were consulted independently. For the second, the publisher abstract was consulted only at the level recorded above. The third paper's full statement and proof were not independently read for this remark. No one of these background reports is used here as a premise for an article theorem.
