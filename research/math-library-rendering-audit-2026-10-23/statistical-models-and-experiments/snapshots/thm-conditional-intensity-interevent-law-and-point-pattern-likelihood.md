---
id: thm-conditional-intensity-interevent-law-and-point-pattern-likelihood
kind: theorem
title: "Conditional-intensity inter-event law and point-pattern likelihood"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-temporal-point-process-and-conditional-intensity
  - lem-conditional-intensity-interevent-survival-and-density
  - lem-homogeneous-poisson-ordered-event-time-density
  - def-likelihood-ratio-as-rn-derivative
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Joseph G. Rasmussen, Lecture Notes: Temporal Point Processes and the Conditional Intensity Function"
      url: "https://arxiv.org/pdf/1806.00221"
    - title: "Robert E. Kass, Uri T. Eden, and Emery N. Brown, Analysis of Neural Data, Chapter 19: Point Processes"
      url: "https://web.math.ku.dk/~susanne/BSc/Kass2014_Chapter_PointProcesses.pdf"
---

## Statement

Assume AC, Countable Choice and Dependent Choice for the cited likelihood
and hazard-calculus interfaces. Fix $T>0$ and a common specified initial
history. Let $(P_\theta)$ be a supplied family of laws for actual simple,
non-explosive temporal point-process models on $(0,T]$ satisfying
[[def-temporal-point-process-and-conditional-intensity]], with jointly
measurable conditional history-update and waiting-time kernels. Let $P_0$
be the supplied unit-rate Poisson reference on the finite-pattern space
$$\mathsf X_T=\bigsqcup_{m\ge0}\Delta_m,\qquad \Delta_0=\{\varnothing\},\quad \Delta_m=\{(t_1,\ldots,t_m):0<t_1<\cdots<t_m\le T\},$$
equipped with the disjoint-union Borel sigma-algebra. For a pattern
$0<t_1<\cdots<t_m\le T$, let $h_{i-1}$ be the initial history updated by
$t_1,\ldots,t_{i-1}$. On each simplex, the laws are dominated by $P_0$ and
the following chosen density representative gives the Radon–Nikodym
derivative $P_0$-almost everywhere:
$$\frac{dP_\theta}{dP_0}(t_1,\ldots,t_m)=e^T\left(\prod_{i=1}^m\lambda_\theta^*(t_i\mid h_{i-1})\right)\exp\!\left(-\int_0^T\lambda_\theta^*(u\mid h_{u-})\,du\right).$$
Here $h_{u-}$ is the history immediately before $u$. Thus the likelihood as a
function of $\theta$ is proportional to the product of pre-event intensities
times the terminal integrated-hazard factor; $e^T$ is parameter-independent.
If an observed event has zero intensity, the density is zero; a finite
log-likelihood requires positive intensity at each observed event. For
$m=0$, the event product is the empty product $1$ and the terminal no-event
factor remains.

For marked patterns, let marks lie in a supplied measurable space with a
common mark probability measure $Q$. Here $h_i$ records all past event
times and marks, and the marked-history update is supplied and measurable.
Require that the supplied waiting-time kernels, conditioned on this full
marked history, satisfy the same temporal model; an unmarked marginal
waiting-time law alone is not this hypothesis. If each event also has a
supplied jointly measurable conditional mark density
$q_\theta(k_i\mid t_i,h_{i-1})$ relative to $Q$, and the reference uses
independent marks with law $Q$, evaluate the displayed intensity factors
on these marked histories and multiply the ratio by
$\prod_iq_\theta(k_i\mid t_i,h_{i-1})$. The ground intensity does not
determine a mark law.

## Facts & Assumptions

**Given:** A supplied family of non-explosive simple process laws on $(0,T]$, conditioned on one common initial history, with measurable history updates and conditional waiting-time kernels satisfying the temporal model.

[F1] The temporal model supplies jointly measurable history updates and conditional waiting-time kernels with finite-time densities and hazards; the process has finite event count on $(0,T]$ almost surely. ([[def-temporal-point-process-and-conditional-intensity]])

[F2] Given a history $h$ at time $s$, the next-event survivor and density are $\exp(-\int_s^u\lambda_h^*(v)\,dv)$ and $\lambda_h^*(u)\exp(-\int_s^u\lambda_h^*(v)\,dv)$. ([[lem-conditional-intensity-interevent-survival-and-density]])

[F3] On each $m$-event ordered simplex, the unit-rate Poisson reference has strictly positive density $e^{-T}$, and its empty-pattern mass is $e^{-T}$. ([[lem-homogeneous-poisson-ordered-event-time-density]])

[F4] A likelihood ratio is the Radon–Nikodym derivative of the absolutely continuous component; when $P_\theta\ll P_0$, it is a full density. ([[def-likelihood-ratio-as-rn-derivative]])

[A1] AC is required by the temporal model and likelihood-ratio interfaces; Countable Choice and Dependent Choice are the declared axioms for [F2]'s calculus proof. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]])

## Proof

1.1 For $m\ge1$, recursively define the density of the first $i$ event times by $g_0=1$ and $g_i(t_1,\ldots,t_i)=g_{i-1}(t_1,\ldots,t_{i-1}) f_\theta(t_i\mid h_{i-1})$ on the ordered prefix simplex. At $i=1$ this is the supplied conditional density. If the first $i-1$ times have density $g_{i-1}$, conditioning on that prefix and integrating its supplied probability kernel for the next waiting time multiplies the density by $f_\theta(t_i\mid h_{i-1})$; iterated kernel integration proves the formula for $i$. The measurable update and kernel assumptions in [F1] make each factor measurable. For exactly $m$ events by $T$, the final history must have no event in $(t_m,T]$, whose conditional probability is $S_\theta(T\mid h_m)$. Thus the pattern density is $\prod_{i=1}^mf_\theta(t_i\mid h_{i-1})S_\theta(T\mid h_m)$; for $m=0$ it is the initial no-event probability. The simplices exhaust the pattern space because the event count is finite almost surely. [F1, given, construct]

2.1 By [F2], each event-time density is its pre-event intensity times $\exp\!\left(-\int_{t_{i-1}}^{t_i}\lambda_\theta^*(u\mid h_{u-})\,du\right)$, where $t_0=0$, and the terminal survivor is $\exp(-\int_{t_m}^{T}\lambda_\theta^*(u\mid h_{u-})\,du)$. Multiplying these terms adds the integrals over the adjacent intervals $(0,t_1],\ldots,(t_m,T]$, so on $\Delta_m$ the pattern density is $p_\theta(t_1,\ldots,t_m)=\left(\prod_{i=1}^m\lambda_\theta^*(t_i\mid h_{i-1})\right)\exp\!\left(-\int_0^T\lambda_\theta^*(u\mid h_{u-})\,du\right)$. For $m=0$ there are no event factors and the same expression uses the empty product. [F2, step 1.1, algebra]

3.1 By [F3], the reference density equals $e^{-T}>0$ on each $\Delta_m$ and its empty-pattern mass is positive. If a measurable set in $\mathsf X_T$ has $P_0$-measure zero, its section in every $\Delta_m$ is Lebesgue-null and it excludes the empty pattern. Step 2.1 gives a Lebesgue density for $P_\theta$ on every simplex, so each section has $P_\theta$-measure zero; countable additivity over the disjoint union gives $P_\theta\ll P_0$. By [F4], the Radon–Nikodym derivative is the ratio of the two pattern densities, namely $p_\theta/e^{-T}=e^Tp_\theta$, $P_0$-almost everywhere. If any factor at an observed event is zero, this representative is zero; when all are positive, taking logarithms and discarding the parameter-free term $T$ gives the stated likelihood form. [A1, F3, F4, step 2.1, algebra]

4.1 In the marked case, condition successively on the full past marked history: the next event time has its supplied waiting-time kernel under that history, and then the new mark has its supplied conditional density $q_\theta(k_i\mid t_i,h_{i-1})$. Update the history by both time and mark before taking the next waiting-time kernel. The measurable updates and density hypotheses allow the same iterated integration as in step 1.1, so the joint pattern measure acquires one mark-density factor per event in addition to the waiting-time and terminal-survivor factors evaluated on marked histories. Relative to the reference product mark measure $Q^{\otimes m}$, whose density is $1$, these factors multiply the unmarked density ratio from step 3.1. This uses the supplied mark law and introduces no mark distribution assumption from the ground intensity. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎

## Source notes

Rasmussen's Proposition 3.1 gives the finite-window likelihood and derives it by multiplying inter-event densities with the terminal no-event probability; its marked case includes conditional mark-density factors. Kass, Eden, and Brown independently derive the same factorization in Section 19.4. This theorem is conditional on supplied process laws and makes no existence or stationarity claim from an intensity formula.
