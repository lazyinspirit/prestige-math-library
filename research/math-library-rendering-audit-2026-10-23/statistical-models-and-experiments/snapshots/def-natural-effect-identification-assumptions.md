---
id: def-natural-effect-identification-assumptions
kind: definition
title: "Assumptions for identifying natural effects"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-controlled-and-natural-mediation-effects
  - def-simple-markovian-mediation-scm
  - lem-npsem-ie-implies-cross-world-independence-for-mediation
  - def-positivity-for-discrete-treatment
  - def-conditional-law-given-a-random-element
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
  - def-law-or-distribution-of-a-random-element
  - def-integrable-real-and-complex-functions-and-their-integrals
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Chapter 23 and Technical Point 23.1 (2020; author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Judea Pearl, Causal inference in statistics: An overview, §5.1 (Statistics Surveys 3, 2009)"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
---

## Definition

Fix a pair of treatment levels $a,a'$ in the simple Markovian mediation model
of [[def-simple-markovian-mediation-scm]]. The assumptions used for the
natural-effect formula are:

1. **Consistency and treatment versions.** The treatment versions and joint
   treatment/mediator interventions have the meanings fixed by
   [[def-controlled-and-natural-mediation-effects]]. The observed responses
   satisfy $M=M(A)$ and $Y=Y(A,M(A))$ by the structural recursion.

2. **No unmeasured treatment confounding.** Conditional on baseline $L$, the
   assignment error $U_A$ is independent of the mediator and outcome response
   errors. Equivalently in this model, for every supplied $b,c,m$,
   $A\perp\!\!\!\perp M(b)\mid\sigma(L)$ and
   $A\perp\!\!\!\perp Y(c,m)\mid\sigma(L)$.

3. **No unmeasured mediator–outcome confounding.** Conditional on $L$, the
   mediator and outcome response errors are independent. This excludes an
   unmeasured common cause of $M$ and $Y$ in the stated graph.

4. **No treatment-induced mediator–outcome confounder.** There is no
   post-treatment endogenous variable other than $M$ that is a common cause
   of $M$ and $Y$. If such a variable is present, the four-equation model
   above does not apply.

5. **Cross-world restriction.** For all supplied $b,c,m$,
   $M(b)\perp\!\!\!\perp Y(c,m)\mid\sigma(L)$. In particular this includes
   $M(a')\perp\!\!\!\perp Y(a,m)\mid\sigma(L)$ for the nested response in
   the natural direct effect. The lemma
   [[lem-npsem-ie-implies-cross-world-independence-for-mediation]] proves
   this restriction for the simple NPSEM-IE model. The same-world instances
   $b=c$ express mediator–outcome exchangeability; the instances $b\ne c$
   are additional cross-world assumptions.

6. **Treatment positivity.** $P(A=b)>0$ and
   $P(A=b\mid\sigma(L))>0$ almost surely for each treatment level $b$ used
   in the contrast, in the target-support convention of
   [[def-positivity-for-discrete-treatment]].

7. **Mediator positivity.** Let $Q_b(l,\cdot)$ be a conditional law of $M$
   given $(A,L)=(b,l)$, in the sense of
   [[def-conditional-law-given-a-random-element]]. For the cross-treatment
   response $Y(a,M(a'))$, require
   $$Q_{a'}(l,\cdot)\ll Q_a(l,\cdot)$$
   for almost every $l$ under the law $P_L$ of $L$ from
   [[def-law-or-distribution-of-a-random-element]]. This support-domination
   condition ensures that
   the conditional outcome law observed at treatment $a$ is defined at
   mediator values drawn under treatment $a'$. It is a measure-level
   condition; for a countable mediator it says every $m$ with
   $Q_{a'}(l,\{m\})>0$ also has $Q_a(l,\{m\})>0$.

8. **Integrability.** Every nested outcome $Y(b,M(c))$ used in the displayed
   effects is integrable [[def-integrable-real-and-complex-functions-and-their-integrals]] under the target population law.

These are sufficient full-data assumptions for the theorem on this page, not
empirical facts certified by a regression fit. The NPSEM-IE independent-error
restriction supplies the cross-world condition. FFRCISTG means “Finest Fully
Randomized Causally Interpretable Structured Tree Graph”; in the single-world
convention described by Hernán–Robins, Chapter 23, its regime-specific laws do
not impose a joint independence between counterfactuals from incompatible
regimes. Thus FFRCISTG alone does not supply the cross-world condition above.
This item uses that source distinction only to name the missing assumption;
the explicit two-law counterexample is a separate B-page result. Standardizing
or fitting a regression does not by itself establish the assumptions above.

