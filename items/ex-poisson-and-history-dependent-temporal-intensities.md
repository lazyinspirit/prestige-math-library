---
id: ex-poisson-and-history-dependent-temporal-intensities
kind: example
title: "Homogeneous Poisson likelihood and a Hawkes intensity specification"
status: published
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
    - title: "Jakob Gulddahl Rasmussen, Lecture Notes: Temporal Point Processes and the Conditional Intensity Function"
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

For the temporal-model interface, extend the finite-window process by holding
its count fixed after $T$. Thus the Poisson survivor formula below applies
within $(0,T]$; after $T$ the next-event kernel has only its terminal mass.

**Hawkes specification.** For parameters $\mu>0$, $\alpha\ge0$, and
$\beta>0$, condition on a common specified initial history $h_0$ with
finite initial excitation $c_0\ge0$. For past event times $s\le0$ and
$\alpha>0$, this is $c_0=\alpha\sum_{s\in h_0}e^{\beta s}$, requiring
the weighted sum to be finite; take $c_0=0$ when $\alpha=0$ or the initial
history is empty. Although the history is fixed, $c_0$ may depend on the
parameters. On $0<u\le T$, consider the pre-event-history intensity
$$\lambda^*(u)=\mu+c_0e^{-\beta u}+\alpha\sum_{0<t_j<u}e^{-\beta(u-t_j)}.$$
For any supplied non-explosive law whose conditional hazards and separate
compensator contract satisfy the temporal model with this specification,
and any compatible event pattern $0<t_1<\cdots<t_m\le T$, the likelihood
ratio is
$$e^T\left(\prod_{i=1}^m\left(\mu+c_0e^{-\beta t_i}+\alpha\sum_{j<i}e^{-\beta(t_i-t_j)}\right)\right)\exp\!\left[-\mu T-\frac{c_0}{\beta}(1-e^{-\beta T})-\frac{\alpha}{\beta}\sum_{i=1}^m\left(1-e^{-\beta(T-t_i)}\right)\right].$$
For empty initial history, $c_0=0$, so both initial-excitation terms vanish.
This is a finite-pattern likelihood calculation conditional on a compatible
law. Writing the candidate specification does not prove that such a law
exists, is non-explosive, or is stationary.

## Facts & Assumptions

**Given:** The Poisson and Hawkes cases above on $(0,T]$, with the Hawkes law conditioned on the specified initial history and its finite excitation $c_0$. For the Poisson case, extend $\eta$ by zero after $T$ and use the event-history filtration $\mathcal H_s=\sigma(\eta(B):B\subseteq(0,s\wedge T]\text{ Borel})$.

[F1] Disjoint-set counts of a Poisson process are independent and have the specified scalar Poisson laws. ([[def-poisson-and-cox-point-process]])

[F2] There exists a finite-window homogeneous Poisson process of rate $\theta>0$ with no ties and ordered pattern density $e^{-\theta T}\theta^m$; the zero-rate Poisson count law is concentrated at zero. ([[lem-homogeneous-poisson-ordered-event-time-density]], [[def-scalar-poisson-count-law]])

[F3] A Poisson count $C$ of finite mean $\lambda$ has mean $\lambda$, factorial moment $\mathbb E[C(C-1)]=\lambda^2$, and second moment $\lambda^2+\lambda$. ([[lem-poisson-count-law-normalization-and-moments]])

[F4] Independence on a generating pi-system extends to the sigma-algebras it generates. ([[thm-pi-system-criterion-for-independent-sigma-algebras]])

[F5] A deterministic Borel function of time is predictable for the predictable sigma-algebra convention. ([[def-progressively-measurable-and-predictable-process]])

[F6] The finite-horizon model contract requires a continuous predictable compensator with finite expectation and a square-integrable martingale $N-A$. ([[def-counting-process-intensity-and-compensator-contract]])

[F7] Conditional-intensity pattern likelihoods use the product of pre-event intensities and the terminal integrated-hazard factor, with ratio $e^T$ against the unit-rate reference. ([[thm-conditional-intensity-interevent-law-and-point-pattern-likelihood]])

[F8] The natural logarithm has derivative $1/x$ on $(0,\infty)$. ([[thm-logarithm-derivative-and-integral]])

[F9] The mean value theorem converts derivative signs into monotonicity; the exponential is strictly increasing. ([[cor-mean-value-theorem]], [[thm-exponential-is-strictly-increasing]])

[F10] $(\exp)'=\exp$, so the exponential-kernel integral has its elementary antiderivative. ([[thm-derivative-of-exponential]], [[thm-ftc-first-part]])

[F11] The temporal model requires a measurable history random element, a measurable event-append update, and a next-event probability kernel on $(s,\infty]$ with jointly measurable finite-time density compatible with the effective pre-event intensity. ([[def-temporal-point-process-and-conditional-intensity]])

[A1] AC is inherited through the temporal model and compensator contract. ([[def-axiom-of-choice]])

[A2] Countable Choice is used by the finite-window Lebesgue construction. ([[def-countable-choice]])

## Verification

1.1 By [F1], the supplied process has total count with law $\operatorname{Pois}(\theta T)$, hence finite almost surely; at $\theta=0$ it is empty. For $\theta>0$, partition $(0,T]$ into $2^n$ equal half-open intervals. A cell count $C$ has mean $\lambda_n=\theta T/2^n$, and $\mathbf1_{\{C\ge2\}}\le C(C-1)/2$ gives $P(C\ge2)\le\lambda_n^2/2$ by [F3]. Thus the probability that any cell contains two events is at most $\theta^2T^2/2^{n+1}$. Any repeated event forces such a collision for every $n$, so its probability is zero. The supplied process is therefore simple. Extend its count by $N_t=\eta((0,t\wedge T])$. For $0\le s<t$, $N_t-N_s$ is the count on $(s,t]\cap(0,T]$, independent of each finite cylinder of past Borel-set counts by [F1]. Indeed, refine any finite family of past Borel sets into the disjoint atoms of the finite Boolean algebra they generate. Each atom lies in $(0,s\wedge T]$ and is disjoint from $(s,t]\cap(0,T]$, so [F1] makes the atom-count vector independent of the future increment; the cylinder vector is a function of those atom counts. Such cylinders generate $\mathcal H_s$, so [F4] extends independence to the whole history sigma-algebra. Therefore $\mathbb E[N_t-N_s\mid\mathcal H_s]=\theta((t\wedge T)-(s\wedge T))$, and $N_t-A_t$ is a martingale for $A_t=\theta(t\wedge T)$. The effective intensity is $\lambda^*(t)=\theta\mathbf1_{(0,T]}(t)$, which is deterministic Borel and predictable by [F5]; its integral is $A_t$, continuous and bounded by $\theta T$. Also $N_t$ has finite second moment by [F3]. Thus $N-A$ is square-integrable and the Poisson process meets the compensator contract [F6]. [A1, A2, F1, F3, F4, F5, F6, given]

1.2 Let $\mathsf H$ be the space of finite counting measures on $(0,\infty)$ with its evaluation sigma-algebra, and define $H_s(B):=\eta(B\cap(0,s\wedge T])$ for Borel $B\subseteq(0,\infty)$. Each $H_s$ is finite and measurable by the evaluation measurability of $\eta$, and $\sigma(H_s)=\mathcal H_s$. For finite $u>0$ put $h\oplus u=h+\delta_u$; the evaluation identity $(h\oplus u)(B)=h(B)+\mathbf1_B(u)$ shows that the update is jointly measurable and appends one event. [F1, F2, F11, construct]

1.3 The specified initial history contributes $c_0e^{-\beta u}$ at time $u>0$; its past-event representation follows by factoring $e^{-\beta u}$ out of the nonnegative weighted sum. For a fixed finite observed pattern, the pre-event intensity at $t_i$ is therefore $\mu+c_0e^{-\beta t_i}+\alpha\sum_{j<i}e^{-\beta(t_i-t_j)}$. Integrating the baseline gives $\mu T$, and integrating the initial excitation gives $c_0(1-e^{-\beta T})/\beta$ by [F10]. For each observed event time $t_i$, the integral $\int_{t_i}^T e^{-\beta(u-t_i)}\,du$ equals $\frac{1-e^{-\beta(T-t_i)}}{\beta}$ by [F10], also when $t_i=T$, when both sides are zero. Summing these terms gives the displayed cumulative hazard. [given, F10, construct]

2.1 For $s\ge0$ and $h\in\mathsf H$, supply the next-event kernel, supported on $(s,\infty]$, by $$K_{s,h}(C):=\int_{C\cap(s,T]}\theta e^{-\theta(u-s)}\,du+e^{-\theta(T-s)_+}\mathbf1_{\{\infty\in C\}}$$ for Borel $C\subseteq[0,\infty]$, where $x_+:=\max(x,0)$. Its finite-time mass is $1-e^{-\theta(T-s)_+}$, so each $K_{s,h}$ is a probability measure, including when $\theta=0$ or $s\ge T$. For fixed $C$, the finite-time term is $\theta e^{\theta s}\int_{C\cap(s,T]}e^{-\theta u}\,du$, a Borel function of $s$ because the tail integral is monotone on $[0,T]$ and zero for $s\ge T$; the atom mass is also Borel. The finite-time density $f_{s,h}(u)=\theta\mathbf1_{\{s<u\le T\}}e^{-\theta(u-s)}$ is jointly measurable in $(s,h,u)$. Independent increments give the same conditional survivor, $$S_{s,h}(u)=e^{-\theta((u\wedge T)-s)_+},\qquad u>s,$$ so the kernel is compatible with the observed finite-window Poisson law and supplies its terminal continuation after $T$. Its hazard is $\theta$ on $s<u\le T$ and $0$ for $u>T$, agreeing with $\lambda^*(u\mid h_{u-})=\theta\mathbf1_{(0,T]}(u)$ (and is identically zero at $\theta=0$). Thus the homogeneous survivor formula used in the likelihood is exactly $e^{-\theta(u-s)}$ for $s<u\le T$. [F1, F2, F7, F11, step 1.1, step 1.2, algebra]

2.2 Substitute the Hawkes pre-event values and integrated hazard from step 1.3 into [F7], conditioning on the same specified initial history for every parameter value. This gives exactly the displayed Hawkes likelihood ratio, including the initial-excitation contribution when $m=0$; for empty history $c_0=0$. The calculation is conditional on a compatible process law and proves no existence, non-explosion, or stationarity property for the specification. [F7, step 1.3, given, algebra]

3.1 Within the observation window, $0\le s<u\le T$, the probability of no event in $(s,u]$ is $e^{-\theta(u-s)}$, so the no-event hazard is $\theta$ there. Applying [F7] to the $m$ events gives exact ratio $e^T\theta^m e^{-\theta T}$, including $m=0$ by the empty-product and terminal-survival conventions. [F1, F6, F7, step 1.1, step 2.1]

4.1 If $m>0$ and $\theta>0$, the log-likelihood is $\ell(\theta)=m\log\theta-\theta T$, with derivative $\ell'(\theta)=m/\theta-T$ by [F8]. It is positive for $0<\theta<m/T$ and negative for $\theta>m/T$. The mean value theorem [F9] therefore makes $\ell$ increase up to $m/T$ and decrease thereafter; at $\theta=0$ the likelihood is zero because $m>0$. Thus the unique maximum is $\widehat\theta=m/T$. [F7, F8, F9, step 3.1, algebra]

5.1 If $m=0$, the likelihood is $e^{-\theta T}$, which strictly decreases on $\theta\ge0$ because $T>0$ and the exponential is strictly increasing. Its maximum is attained at $\theta=0$. If zero were excluded from the parameter space, this case would have only a boundary supremum. [F7, F9, step 3.1, given] ∎

## Source notes

Rasmussen's Examples 2.3 and 3.1 give the Hawkes conditional-intensity form and homogeneous-Poisson MLE; Proposition 3.1 derives the likelihood under an empty initial history (PDF p. 12). The local likelihood theorem allows a common specified initial history, whose exponential excitation is retained here. Kass, Eden, and Brown independently cover Poisson event-time densities and history-dependent conditional intensities. The Hawkes calculation proves only finite-pattern algebra under the stated compatibility hypotheses.
