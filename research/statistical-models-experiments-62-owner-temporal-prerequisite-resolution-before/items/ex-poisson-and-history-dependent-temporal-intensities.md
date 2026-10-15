---
id: ex-poisson-and-history-dependent-temporal-intensities
kind: example
title: "Homogeneous Poisson likelihood and a Hawkes intensity specification"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-temporal-point-process-and-conditional-intensity
  - lem-homogeneous-poisson-ordered-event-time-density
  - thm-conditional-intensity-interevent-law-and-point-pattern-likelihood
  - def-poisson-and-cox-point-process
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - def-progressively-measurable-and-predictable-process
  - def-counting-process-intensity-and-compensator-contract
  - thm-pi-system-criterion-for-independent-sigma-algebras
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - thm-ftc-first-part
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Joseph G. Rasmussen, Lecture Notes: Temporal Point Processes and the Conditional Intensity Function"
      url: "https://arxiv.org/pdf/1806.00221"
    - title: "Robert E. Kass, Uri T. Eden, and Emery N. Brown, Analysis of Neural Data, Chapter 19: Point Processes"
      url: "https://web.math.ku.dk/~susanne/BSc/Kass2014_Chapter_PointProcesses.pdf"
---

## Example

**Homogeneous Poisson case.** Let $\eta$ be a supplied homogeneous Poisson
process of rate $\theta\ge0$ on $(0,T]$, with $T>0$, and let $m=N_T$ be
the observed count. The likelihood ratio against the unit-rate Poisson
reference is $e^T\theta^m e^{-\theta T}$, with $0^0:=1$, so the
parameter-dependent likelihood is $\theta^m e^{-\theta T}$. Over the
parameter space $\theta\ge0$, the maximum-likelihood estimate is $m/T$ when
$m>0$ and $0$ when $m=0$.

**Hawkes specification.** For parameters $\mu>0$, $\alpha\ge0$, and
$\beta>0$, consider the pre-event-history intensity specification
$$
\lambda^*(u)=\mu+\alpha\sum_{t_j<u}e^{-\beta(u-t_j)}.
$$
For any supplied non-explosive law whose conditional hazards and separate
compensator contract satisfy the temporal model with this specification,
and any compatible event pattern $0<t_1<\cdots<t_m\le T$, the likelihood
ratio is
$$
e^T\left(\prod_{i=1}^m\left(\mu+\alpha\sum_{j<i}e^{-\beta(t_i-t_j)}\right)\right)\exp\!\left[-\mu T-\frac{\alpha}{\beta}\sum_{i=1}^m\left(1-e^{-\beta(T-t_i)}\right)\right].
$$
This is a finite-pattern likelihood calculation conditional on a compatible
law. Writing the candidate specification does not prove that such a law
exists, is non-explosive, or is stationary.

## Facts & Assumptions

**Given:** The Poisson and Hawkes cases above on $(0,T]$. For the Poisson case, use the event-history filtration $\mathcal H_s=\sigma(\eta(B):B\subseteq(0,s]\text{ Borel})$.

[F1] Disjoint-set counts of a Poisson process are independent and have the specified scalar Poisson laws. ([[def-poisson-and-cox-point-process]])

[F2] A finite-window homogeneous Poisson process of rate $\theta>0$ has no ties and ordered pattern density $e^{-\theta T}\theta^m$; at rate zero the process is empty. ([[lem-homogeneous-poisson-ordered-event-time-density]], [[def-scalar-poisson-count-law]])

[F3] A Poisson count of finite mean $\lambda$ has mean $\lambda$ and second moment $\lambda^2+\lambda$. ([[lem-poisson-count-law-normalization-and-moments]])

[F4] Independence on a generating pi-system extends to the sigma-algebras it generates. ([[thm-pi-system-criterion-for-independent-sigma-algebras]])

[F5] A deterministic Borel function of time is predictable for the predictable sigma-algebra convention. ([[def-progressively-measurable-and-predictable-process]])

[F6] The finite-horizon model contract requires a continuous predictable compensator with finite expectation and a square-integrable martingale $N-A$. ([[def-counting-process-intensity-and-compensator-contract]])

[F7] Conditional-intensity pattern likelihoods use the product of pre-event intensities and the terminal integrated-hazard factor, with ratio $e^T$ against the unit-rate reference. ([[thm-conditional-intensity-interevent-law-and-point-pattern-likelihood]])

[F8] The natural logarithm has derivative $1/x$ on $(0,\infty)$. ([[thm-logarithm-derivative-and-integral]])

[F9] The mean value theorem converts derivative signs into monotonicity; the exponential is strictly increasing. ([[cor-mean-value-theorem]], [[thm-exponential-is-strictly-increasing]])

[F10] $(\exp)'=\exp$, so the exponential-kernel integral has its elementary antiderivative. ([[thm-derivative-of-exponential]], [[thm-ftc-first-part]])

[A1] AC is inherited through the temporal model and compensator contract. ([[def-axiom-of-choice]])

[A2] Countable Choice is used by the finite-window Lebesgue construction. ([[def-countable-choice]])

## Verification

1.1 For $\theta>0$, [F2] gives a simple finite-count Poisson process; for $\theta=0$, [F1] and the zero-rate count law make the process empty. For $0\le s<t\le T$, $N_t-N_s$ is the count on $(s,t]$, independent of each finite cylinder of past Borel-set counts by [F1]. Indeed, refine any finite family of past Borel sets into the disjoint atoms of the finite Boolean algebra they generate. Each atom lies in $(0,s]$ and is disjoint from $(s,t]$, so [F1] makes the atom-count vector independent of the future increment; the cylinder vector is a function of those atom counts. Such cylinders generate $\mathcal H_s$, so [F4] extends independence to the whole history sigma-algebra. Therefore $\mathbb E[N_t-N_s\mid\mathcal H_s]=\theta(t-s)$, and $N_t-\theta t$ is a martingale. Also $A_t=\theta t$ is continuous and predictable by [F5], $\mathbb E[A_T]=\theta T<\infty$, and $N_t$ has finite second moment by [F3]. Thus $N-A$ is square-integrable and the Poisson process meets the compensator contract [F6]. [A1, A2, F1, F2, F3, F4, F5, F6, given]

1.2 For a fixed finite pattern, its pre-event intensity at $t_i$ is $\mu+\alpha\sum_{j<i}e^{-\beta(t_i-t_j)}$. Integrating the baseline gives $\mu T$. For each event time $t_i$, the integral $\int_{t_i}^T e^{-\beta(u-t_i)}\,du$ equals $\frac{1-e^{-\beta(T-t_i)}}{\beta}$ by [F10], also when $t_i=T$, when both sides are zero. Summing these terms gives the displayed cumulative hazard. [given, F10, construct]

2.1 Under the Poisson model, the probability of no event in $(s,u]$ is $e^{-\theta(u-s)}$, so the no-event hazard is $\theta$. Applying [F7] to the $m$ events gives exact ratio $e^T\theta^m e^{-\theta T}$, including $m=0$ by the empty-product and terminal-survival conventions. [F1, F6, F7, step 1.1]

2.2 Substitute the Hawkes pre-event values and integrated hazard from step 1.2 into [F7]. This gives exactly the displayed Hawkes likelihood ratio. The calculation is conditional on a compatible process law and proves no existence, non-explosion, or stationarity property for the specification. [F7, step 1.2, given, algebra]

3.1 If $m>0$ and $\theta>0$, the log-likelihood is $\ell(\theta)=m\log\theta-\theta T$, with derivative $\ell'(\theta)=m/\theta-T$ by [F8]. It is positive for $0<\theta<m/T$ and negative for $\theta>m/T$. The mean value theorem [F9] therefore makes $\ell$ increase up to $m/T$ and decrease thereafter; at $\theta=0$ the likelihood is zero because $m>0$. Thus the unique maximum is $\widehat\theta=m/T$. [F7, F8, F9, step 2.1, algebra]

4.1 If $m=0$, the likelihood is $e^{-\theta T}$, which strictly decreases on $\theta\ge0$ because $T>0$ and the exponential is strictly increasing. Its maximum is attained at $\theta=0$. If zero were excluded from the parameter space, this case would have only a boundary supremum. [F7, F9, step 2.1, given] ∎

## Source notes

Rasmussen's Examples 2.3 and 3.1 give the Hawkes conditional-intensity form and homogeneous-Poisson MLE; Proposition 3.1 gives the likelihood used here. Kass, Eden, and Brown independently cover Poisson event-time densities and history-dependent conditional intensities. The Hawkes calculation proves only finite-pattern algebra under the stated compatibility hypotheses.
