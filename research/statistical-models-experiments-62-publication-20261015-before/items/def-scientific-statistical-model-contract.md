---
id: def-scientific-statistical-model-contract
kind: definition
title: "Scientific statistical model contracts"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-statistical-experiment
  - def-parametric-statistical-model
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
  - def-statistic-and-estimator
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Charlotte Wickham, Statistics: Lecture Three — Linear Models, PDF pp. 2–3"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
    - title: "Fan Li, STA610 Lecture 1 Notes: The Problem of Correlated Data, PDF pp. 1–4"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lecture1_ProblemOfCorrelatedData.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let
$$\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$$
be a statistical experiment ([[def-statistical-experiment]]). When the model is
parametric, write $\mathsf P(\theta)=P_\theta$
([[def-parametric-statistical-model]]). A **scientific statistical model
contract** is an explicit record of the following fields for a specified
analysis.

1. **Observation space and record.** Give $(\mathcal X,\mathcal A)$ and say
   which values form one recorded data object. A response and each predictor
   used as a function of the data must be a specified measurable map from this
   space to a named measurable target. This is the map convention for a
   statistic in [[def-statistic-and-estimator]]; it does not make a predictor
   causal or the response law correct.

2. **Scientific, sampling, assignment, and analysis units.** Name the
   biological or physical unit about which the scientific question is asked,
   the sample unit selected for observation when sampling occurs, the
   assignment unit receiving a randomized treatment when randomization occurs,
   and the analysis unit represented in each data record. These roles may
   differ. A technical replicate is a repeated reading or assay of the same
   specimen; a biological replicate is a distinct biological unit. Neither
   term asserts independence. State whether enrollment is a probability
   sample or a specified convenience/design cohort.

3. **Indices and time.** Give every unit, treatment, visit, and repeated
   measurement index, the object each index identifies, and the time origin.
   In particular, do not identify a participant index with a visit or assay
   index merely because all are written as rows in a data array.

4. **Quantity status.** Mark each model quantity as **fixed** (held
   nonrandom under the declared law), **random** (a measurable random element
   with its law specified, using [[def-random-element-and-real-random-variable]]
   and [[def-law-or-distribution-of-a-random-element]]), **observed** (recorded
   in the data object), or **latent** (part of a fuller model state but not
   recorded). A latent quantity must separately be declared fixed or random.
   If inference conditions on a design value or event, name it and state the
   conditional law being used.

5. **Target and estimand.** Name the target population of units, settings,
   and time period, and distinguish it from the enrolled or observed sample.
   Specify the target as a function $\psi:\Theta\to\mathcal T$ when it is an
   estimand in the parametric model, as in
   [[def-estimand-on-a-statistical-model]]. The contract alone does not show
   that the target is identifiable. Identifiability means that equality of
   sampling laws forces equality of target values
   ([[def-identifiability-of-an-estimand]]).

6. **Observation mechanism.** State how a fuller scientific state becomes
   the recorded data. A deterministic mechanism is a specified measurable map
   $O:(\mathcal W,\mathcal G)\to(\mathcal X,\mathcal A)$. A stochastic
   mechanism is specified by $K:\mathcal W\times\mathcal A\to[0,1]$ such that,
   for each $w$, $A\mapsto K(w,A)$ is a probability measure and, for each
   $A\in\mathcal A$, $w\mapsto K(w,A)$ is measurable. These clauses define the
   mechanism supplied by the contract; they do not assert that a conditional
   version exists for an arbitrary joint law.

7. **Support and law.** State the sampling law $P_\theta$ on
   $(\mathcal X,\mathcal A)$. For an asserted support set, give a measurable
   $S_\theta\subseteq\mathcal X$ with $P_\theta(S_\theta)=1$. If “support”
   instead means topological support, name the topology and the conditions
   under which that convention is being used. If densities are used, name the
   dominating measure and state whether their positive sets agree across
   parameter values. For a randomized design, also state its assignment law;
   if inference averages over assignments, give the resulting joint law.

8. **Conditioning convention.** Say whether inference uses the joint law,
   averaging over the declared randomization, or a specified conditional law
   given the realized design. A conditional law at an event of probability
   zero must be supplied as a specified version with its existence
   hypotheses; it is not defined by an ordinary probability ratio.

9. **Adequacy assumptions.** List each scientific adequacy assumption and
   classify it as **design-controlled** (imposed by protocol and checked
   against implementation records), **empirically assessable** (data or
   validation measurements can challenge it, without proving it true), or
   **substantively untestable** from the declared observed-data law (external
   domain evidence or additional assumptions are needed). Split an assumption
   that has different parts into separate entries and justify each label.

These are bookkeeping and interpretation requirements. They do not assert that
an empirical law equals a proposed model, that a design was implemented as
specified, that calibration is valid, or that any scientific or physical
application is adequate. No independence, exchangeability, missingness,
causal-identification, or common-support assumption follows from the indexing
or the classification labels. This definition uses no axiom of choice.
