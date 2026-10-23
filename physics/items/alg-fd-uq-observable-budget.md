---
id: alg-fd-uq-observable-budget
title: Failure-aware fluid UQ callback and certified sampling budget
kind: algorithm
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 4
domain: mathematics
library: mathematics
deps:
  - def-fd-random-fluid-observable
  - thm-fd-observable-sampling-bias-split
  - def-iid-monte-carlo-estimators
dependency_roles:
  def-iid-monte-carlo-estimators: mathematical-premise
  def-fd-random-fluid-observable: mathematical-premise
  thm-fd-observable-sampling-bias-split: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2,
        §§2.1–2.2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "NASA Glenn Research Center, Uncertainty and Error in CFD Simulations"
      url: "https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html"
---

## Definition

**Fixed-size callback mode.** Inputs are a finite integer $N\ge2$, the specified input law $\mu$ and exact/numerical observable interface, an IID sampler for $\mu$, and a solver callback with a supplied finite computational budget for each invocation. The callback is total, with a measurable success set and measurable successful outputs: for every input $\theta$ it returns either `solver-failed` or a numerical state $s_h(\theta)$ with finite real observable $q_h(\theta)=J_h(s_h(\theta))$, together with a finite $b(\theta)\ge0$ and its supplied pointwise certificate $|Y(\theta)-q_h(\theta)|\le b(\theta)$. A stated failure result is allowed when the finite budget is exhausted; the procedure asserts no universal numerical solver termination theorem.

Draw $\theta_1,\ldots,\theta_N$ independently with law $\mu$ and call the callback exactly once on each draw, including the draws after any earlier failure. If any call fails, return `incomplete` with the failed indices and the collected outputs, and no IID mean/error certificate for $\mu$. Never delete, replace or resample failed cases. If all calls succeed with finite arithmetic values, set
$$\bar q_h=N^{-1}\sum_{i=1}^Nq_i,\qquad s_N^2=(N-1)^{-1}\sum_{i=1}^N(q_i-\bar q_h)^2,\qquad \widehat{se}_N=s_N/\sqrt N,\qquad \bar b=N^{-1}\sum_{i=1}^Nb_i.$$
Return $N,\bar q_h,s_N^2,\widehat{se}_N,\bar b$ and `complete`; if $s_N^2=0$, also return `zero-sample-variance`. This diagnostic asserts neither a deterministic population nor zero estimation error. The sample mean of certificates $\bar b$ is a diagnostic, not a rigorous upper bound on $\mathbb E b$. The plug-in standard error has only the moment/asymptotic interpretation supplied by the sampling theorem, not an exact confidence guarantee. If callback failure has positive $\mu$-probability, conditioning on `complete` changes the input law and does not certify IID sampling of the original $\mu$.

**Optional certified-budget mode.** This retains a separate finite-sample guarantee when externally proved global bounds are available. Inputs are the numerical output law $Y_h$, a total oracle returning independent finite real samples of that law, finite $\epsilon_b,V_h\ge0$, $\epsilon_s>0$, $\delta\in(0,1)$, and a certificate that $Y\in L^1$, $Y_h\in L^2$, $|\mathbb E Y_h-\mathbb E Y|\le\epsilon_b$, $\operatorname{Var}(Y_h)\le V_h$, and the oracle has that IID law. The algorithm does not validate a supplied mathematical certificate. Apply the input guards in this order: if the certificate or oracle is absent, return `not-certified`; if both are supplied but any of $\epsilon_b,V_h,\epsilon_s,\delta$ is nonfinite or outside its stated admissible range, return `invalid-input`. Otherwise set
$$N:=\max\{1,\lceil V_h/(\delta\epsilon_s^2)\rceil\}.$$
Request exactly $N$ samples and return `conditional-budget`, $N$, their mean $\widehat\theta_{h,N}$, tolerance $\epsilon_b+\epsilon_s$, failure bound $\delta$ and RMS upper bound $\sqrt{V_h/N+\epsilon_b^2}$, conditional on the certificate. If an oracle invocation instead fails its total-return contract, return `incomplete` and no guarantee. This mode permits $N=1$ but then supplies no sample variance or plug-in standard error. When implemented through the callback mode, its certificate additionally requires callback success $\mu$-almost surely; the probability guarantee is not conditional on deleting failed inputs.

Neither mode infers a bias/variance certificate from a sample or mesh trend. Numerical bias, physical model discrepancy and measurement uncertainty are different quantities; the latter two are absent unless separately quantified. Both tolerance allocations use the declared observable unit, variance bounds use its square and $\delta$ is dimensionless. The operation counts concern the specified finite callback/oracle contract, not uncontrolled floating-point error.

## Definition references

[[cor-fd-uq-observable-budget-guarantees]] proves the execution, completion-law and conditional error properties of this procedure.

[[def-fd-random-fluid-observable]]

[[def-iid-monte-carlo-estimators]]

[[thm-fd-observable-sampling-bias-split]]

[Art B. Owen, *Monte Carlo Theory, Methods and Examples*, Chapter 2, §§2.1–2.2](https://artowen.su.domains/mc/Ch-intro.pdf)

[NASA Glenn Research Center, *Uncertainty and Error in CFD Simulations*](https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html)
