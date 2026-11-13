---
title: Background continuum phase transition
status: published
research_item: rem-expander-sync-continuum-transition
dependency_level: 4
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF page 2, Section 1, complete-graph discussion
      statement: For all-to-all coupled oscillators with random intrinsic frequencies
        from a unimodal density symmetric about its mean, the article attributes
        to Kuramoto a transition, as n tends to infinity, from complete disorder
        to partial synchronization when the density's width falls below a
        threshold.
      hypotheses: The introductory discussion concerns the complete-graph model and a
        prescribed unimodal frequency density symmetric about its mean; it does
        not specify a width convention or continuum-limit hypotheses.
      reading_limits: The cited passage in the supplied article text was inspected for
        attribution. It is not used as proof of the conditional calculation
        below, and the article's underlying references were not independently
        read for this item.
---

PDF p. 2: ` Section 1, complete-graph discussion `

## Prerequisites

- [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)
- [def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures)
- [rem-expander-prereq-continuum-branch-background](item-rem-expander-prereq-continuum-branch-background)
- [prop-author-4f202e976d84-continuum-width-scaling](item-prop-author-4f202e976d84-continuum-width-scaling)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-reals-ordered-field](https://alphabetamath.cc/item/thm-reals-ordered-field)
- [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)


## Statement

The article attributes to Kuramoto the following background claim: for a complete graph of $n$ oscillators with random intrinsic frequencies drawn according to a unimodal density $g$ symmetric about its mean, the model undergoes a transition as $n\to\infty$ from a completely disordered state to a partially synchronized state when the width of $g$ falls below a threshold. The passage does not specify a width convention or hypotheses for the continuum limit.

A precise, more limited version is available for stationary mean-field self-consistency. Assume countable choice for the cited mathematical interfaces. Let $K>0$, and let $g_0$ be an even probability density on $\mathbb R$ with respect to Lebesgue measure $\lambda$, nonincreasing on $[0,\infty)$, smooth near zero, with $g_0(0)>0$ and $g_0''(0)<0$. For the scale family $g_\sigma(\omega)=\sigma^{-1}g_0(\omega/\sigma)$ with $\sigma>0$, take $\sigma$ as the width parameter. In the stationary all-to-all calculation with sinusoidal coupling $K/n$, the incoherent branch has order parameter $r=0$ and the local partially coherent branch has $r>0$. It meets $r=0$ at $\sigma_c=\pi K g_0(0)/2$ and lies on the side $\sigma<\sigma_c$ sufficiently near the threshold. Here $r$ is the modulus of the mean phase phasor; it measures the magnitude of the population's mean unit complex phase.

## Facts & Assumptions

[F1] The graph Kuramoto system uses circle-valued phases and intrinsic frequencies in a sinusoidally coupled differential equation; its stated trajectory interface assumes countable choice ([def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F2] A probability density is nonnegative, measurable and integrates to one with respect to its reference measure; here that measure is Lebesgue measure $\lambda$ on $\mathbb R$ ([def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures), [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)). Evenness means $g_0(-\omega)=g_0(\omega)$, and unimodality about zero means nondecreasing on the negative half-line and nonincreasing on the positive half-line. The mean phase phasor is the first Fourier moment of the phase distribution ([def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures)).

[F3] Under the stated regularity and density hypotheses, the stationary mean-field calculation has an incoherent branch $r=0$ and a local positive branch meeting it at $K_c=2/(\pi g(0))$, on the side $K>K_c$. The calculation assumes stationary locked and drifting populations in a rotating frame ([rem-expander-prereq-continuum-branch-background](item-rem-expander-prereq-continuum-branch-background)).

[F4] For the stated Lebesgue-density scale family and under countable choice, $K_c(\sigma)=2\sigma/(\pi g_0(0))$, and $K>K_c(\sigma)$ is equivalent to $\sigma<\pi K g_0(0)/2$; the branch conclusion is local to the threshold ([prop-author-4f202e976d84-continuum-width-scaling](item-prop-author-4f202e976d84-continuum-width-scaling), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F5] The real numbers form a totally ordered field; multiplication or division by a positive real preserves an inequality, and division by a nonzero real is valid ([math:thm-reals-ordered-field](https://alphabetamath.cc/item/thm-reals-ordered-field)).

## Proof

**Given:** Countable choice, $K$, the Lebesgue density $g_0$, and its scale family as in the Statement, together with the stationary self-consistency assumptions in [F3].

**Goal:** Identify the width threshold and the side of the local positive branch.

1.1 The density and countable-choice hypotheses in the Statement match those of [F4], using the reference measure specified in [F2]. Hence $K_c(\sigma)=2\sigma/(\pi g_0(0))$. Since $\pi g_0(0)>0$, the ordered-field rules in [F5] apply. Solving $K=K_c(\sigma)$ gives $\sigma=\sigma_c=\pi K g_0(0)/2$, and the supercritical inequality $K>K_c(\sigma)$ is equivalent to $\sigma<\sigma_c$. [F2, F4, F5, given, algebra]

2.1 By [F3], the stationary incoherent branch has $r=0$ and the local positive branch has $r>0$ and meets it at the threshold. Step 1.1 translates its supercritical side into the stated width inequality. The branch assertion is local and retains the stationary-population hypotheses in [F3]. [F3, F4, step 1.1] ∎

## Source notes

The first paragraph records the article's introductory attribution, not a proof of a finite-population limit. The calculation in [F3] is a stationary self-consistency input with its own cited source and hypotheses; it does not establish an interchange of $n\to\infty$ and long-time limits, nonlinear stability, or the article's full unqualified transition claim.
