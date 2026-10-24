---
id: def-cox-proportional-hazards-model-and-partial-likelihood
kind: definition
title: Cox proportional-hazards model and partial likelihood
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-conditional-independence-given-a-sigma-algebra
  - def-continuous-time-filtration-and-all-pairs-martingale
  - def-event-time-observation-schemes
  - def-progressively-measurable-and-predictable-process
justified_by: []
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
    - title: "Lu Tian, STAT331 Unit 5: Cox's Proportional Hazards Model, PDF pp. 1–14 and 23"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit7.pdf"
    - title: "Lu Tian, STAT331 Unit 7: Cox's Model: Extensions, PDF pp. 8–11"
      url: "https://web.stanford.edu/~lutian/coursepdf/Coxextensionunit9.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §5.1–5.2, PDF pp. 58–63"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Definition

Fix a finite horizon $\tau>0$ and a fixed dimension $p\ge1$. Work on a probability space with an increasing filtration $(\mathcal F_t)_{0\le t\le\tau}$ as in [[def-continuous-time-filtration-and-all-pairs-martingale]]. For subject $i$, let $T_i$ be an event time, $C_i$ a censoring time, and $Z_i(t)\in\mathbb R^p$ a covariate process predictable relative to this filtration, in the sense of [[def-progressively-measurable-and-predictable-process]]. Use the right-censoring record convention of [[def-event-time-observation-schemes]]: $U_i=\min(T_i,C_i)$ and $\delta_i=1\{T_i\le C_i\}$. For this vector covariate process, predictability means coordinatewise predictability: each real-valued coordinate is predictable in the sense of [[def-progressively-measurable-and-predictable-process]]. Define the history sigma-algebra $\mathcal G_i:=\sigma\{Z_i(t):0\le t\le\tau\}$. The conditional-independence assumption is $T_i\perp\!\!\!\perp C_i\mid\mathcal G_i$, meaning that for all bounded measurable real functions $a,b$, $E[a(T_i)b(C_i)\mid\mathcal G_i]=E[a(T_i)\mid\mathcal G_i]E[b(C_i)\mid\mathcal G_i]$ almost surely, as in [[def-conditional-independence-given-a-sigma-algebra]]. This conditional-independence relation is a model assumption, not an empirical conclusion. No conditional-kernel representation given the entire covariate path is assumed here.

A Cox proportional-hazards specification fixes a coefficient $\beta_0\in\mathbb R^p$ and a baseline hazard density $\lambda_0:[0,\tau]\to[0,\infty)$ that is measurable and integrable. Its baseline cumulative hazard is the absolutely continuous function
$$\Lambda_0(t)=\int_0^t\lambda_0(u)\,du.$$
The conditional event intensity at time $t$ for subject $i$, while that subject is at risk, is
$$Y_i(t)\lambda_0(t)\exp\{\beta_0^T Z_i(t)\},\qquad Y_i(t):=1\{U_i\ge t\}.$$
These specify the conditional event-intensity component. The law of the covariate paths and the censoring law subject to the stated conditional-independence assumption remain nuisance components and are not fixed here. Thus this is a semiparametric model specification; $(\beta_0,\lambda_0)$ alone do not define a full parametric statistical experiment on the observed-data space.
For the counting-process arguments below, require $Y_i$ to be predictable as well; this is part of the stated observation model and is not inferred from the hazard formula alone.
For a constant covariate value $z$, the corresponding event survival function is
$$S(t\mid z)=\exp\{-e^{\beta_0^Tz}\Lambda_0(t)\}.$$
For fixed covariate values $z,z'\in\mathbb R^p$, at times with $\lambda_0(t)>0$ the hazard ratio is
$$\frac{\lambda_0(t)e^{\beta^Tz}}{\lambda_0(t)e^{\beta^Tz'}}=e^{\beta^T(z-z')}.$$
The relative hazard factor is $e^{\beta^T(z-z')}$ even at times when both baseline-scaled hazards vanish and their quotient is undefined. It is an instantaneous hazard ratio, not a ratio of cumulative event probabilities. For time-varying covariate paths $z(t),z'(t)$ the instantaneous relative hazard factor is $e^{\beta^T(z(t)-z'(t))}$ and may vary with time.

For a sample of $n$ subjects, put $R(t)=\{j:U_j\ge t\}$. When failures are untied, the Cox partial likelihood on $[0,\tau]$ is
$$L_p(\beta)=\prod_{i:\,\delta_i=1,\ U_i\le\tau} \frac{\exp\{\beta^TZ_i(U_i)\}}{\sum_{j\in R(U_i)}\exp\{\beta^TZ_j(U_i)\}}.$$
An empty product is $1$. This partial likelihood is built from risk-set contributions; it is not asserted to be the full likelihood of the censored observations.

Tied-event likelihoods require an explicit time-recording convention. Put $D(t)=\{i:U_i=t,\delta_i=1\}$ and $d_t=|D(t)|$. If a discrete or grouped-time model conditions on exactly $d_t$ failures from $D(t)\subseteq R(t)$ at recorded time $t$ with the risk set fixed for that time, additionally assume that, conditional on that risk set, its covariate weights, and $d_t=d$, the failure subset law assigns each size-$d$ set $A\subseteq R(t)$ probability proportional to $\prod_{j\in A}w_j(t)$. Under this explicit subset-law assumption, its exact conditional tie contribution is
$$\frac{\prod_{i\in D(t)}w_i(t)} {\sum_{\substack{A\subseteq R(t)\\|A|=d_t}}\ \prod_{j\in A}w_j(t)}, \qquad w_j(t):=\exp\{\beta^TZ_j(t)\}.$$
For the separate exact Cox tied-partial-likelihood convention obtained by coarsening a continuous-time ordering into one recorded tie interval, assume the risk set at the interval start is $R(t)$, its only within-interval departures are the $d_t$ failures in $D(t)$, and the covariates are fixed at the recorded time. Conditional on each successive failure, the next failure label is chosen from the remaining risk set with probability proportional to its weight. Summing these order contributions gives the ordered-risk-set conditional partial-likelihood contribution
$$\sum_{\pi\in\operatorname{Perm}(D(t))} \prod_{k=1}^{d_t} \frac{w_{\pi_k}(t)} {\sum_{j\in R(t)}w_j(t)-\sum_{\ell<k}w_{\pi_\ell}(t)}.$$
Here $\operatorname{Perm}(D(t))$ is the set of bijections from $\{1,\ldots,d_t\}$ to $D(t)$.
The discrete subset expression is exact under its explicit subset-law convention, and the permutation expression is exact for its stated partial-likelihood ordering convention; the latter is not generally the full likelihood of interval-coarsened censored observations. These conventions are not interchangeable without a model relating them. The Breslow and Efron tie formulas are approximations, respectively
$$L_B(\beta)=\prod_{t:d_t>0} \frac{\prod_{i\in D(t)}w_i(t)} {\left(\sum_{j\in R(t)}w_j(t)\right)^{d_t}}$$
and
$$L_E(\beta)=\prod_{t:d_t>0} \frac{\prod_{i\in D(t)}w_i(t)} {\prod_{k=0}^{d_t-1}\left(\sum_{j\in R(t)}w_j(t)-\frac{k}{d_t}\sum_{i\in D(t)}w_i(t)\right)}.$$
With an absolutely continuous event hazard and independent subjects, exact event-time ties have probability zero; grouped-time tie formulas describe additional observation/model conventions.

For a discrete event-time law, the survival relation $S(t\mid z)=S_0(t)^{e^{\beta^Tz}}$ describes proportional integrated hazards and is not equivalent in general to a hazard-ratio model. The proportional-hazards and proportional-integrated-hazards formulations agree under the continuity condition on the baseline survival; the hazard-density model above uses the absolutely continuous convention.

The counting-process martingale property used for inference is a separate model-contract assumption in the estimator theorem below. The hazard formula by itself does not assert that a compensated event count is a martingale. The Axiom of Choice is inherited from the cited event-observation and predictability interfaces; this definition makes no further choice.

