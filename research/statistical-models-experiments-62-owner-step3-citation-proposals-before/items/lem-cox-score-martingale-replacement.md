---
id: lem-cox-score-martingale-replacement
kind: lemma
title: Cox score martingale representation and random-risk-mean replacement
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-cox-proportional-hazards-model-and-partial-likelihood
  - def-counting-process-intensity-and-compensator-contract
  - def-elementary-predictable-counting-process-integral
  - def-op-and-little-op-stochastic-bounds
  - def-progressively-measurable-and-predictable-process
  - lem-bounded-predictable-counting-integral-pathwise-identity
  - lem-cox-uniform-risk-set-convergence
  - thm-compensated-counting-process-brackets
  - thm-l2-counting-process-integral-isometry
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Example of Martingale CLT with Cox's Model, PDF pp. 1–7"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-cox.pdf"
    - title: "Lu Tian, STAT331 Revisiting Cox's PH Model: Asymptotic Theory, PDF pp. 1–5 and 9–10"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-cox2.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §5.2, PDF pp. 58–63"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Statement

Use the IID bounded-covariate model, risk-support hypotheses of [[lem-cox-uniform-risk-set-convergence]], the no-tie event process, and the per-subject counting-process contracts of [[def-counting-process-intensity-and-compensator-contract]]. Let
$$\bar z(t)=\frac{s^{(1)}(t,\beta_0)}{s^{(0)}(t,\beta_0)},\qquad I=\int_0^\tau\left\{s^{(2)}(t,\beta_0)- \frac{s^{(1)}(t,\beta_0)s^{(1)}(t,\beta_0)^T}{s^{(0)}(t,\beta_0)}\right\}\lambda_0(t)\,dt,\qquad \xi_i=\int_0^\tau\{Z_i(t)-\bar z(t)\}\,dM_i(t),$$
where each vector integral is defined coordinatewise in L². If $U_n(\beta)=\partial_\beta\log L_p(\beta)$ is the partial-likelihood score, then
$$n^{-1/2}U_n(\beta_0)=n^{-1/2}\sum_{i=1}^n\xi_i+o_P(1).$$
The $\xi_i$ are IID, centered, square-integrable vectors with covariance matrix $I$. In particular, $n^{-1/2}\sum_i\xi_i=O_P(1)$. The replacement of the random risk-set mean by $\bar z$ is part of the conclusion.

## Facts & Assumptions

**Given:** The model and integrated risk-set conditions stated above, plus the finite-horizon square-integrable counting-process contracts with continuous compensators, no tied failures, and $\lambda_0\in L^1[0,\tau]$.

[F1] [[def-cox-proportional-hazards-model-and-partial-likelihood]]: the no-tie partial likelihood is the product of event weights divided by their risk-set weight sums, with $Y_i(t)=1\{U_i\ge t\}$.

[F2] [[lem-cox-uniform-risk-set-convergence]]: defines the empirical and population weighted risk means, sets each to zero at a zero denominator, and proves expected squared-error convergence integrated against $\lambda_0(t)dt$, with positive empirical denominators uniformly with probability tending to one.

[L1] [[def-counting-process-intensity-and-compensator-contract]]: $M_i=N_i-A_i$ is a square-integrable martingale with continuous compensator $A_i(t)=\int_0^tY_i(u)e^{\beta_0^TZ_i(u)}\lambda_0(u)\,du$ under the stated model contract.

[L2] [[def-elementary-predictable-counting-process-integral]]: for predictable step integrands the stochastic integral is the finite sum of coefficients times martingale increments.

[L3] [[thm-compensated-counting-process-brackets]]: $M_i^2-A_i$ is a martingale and $\langle M_i\rangle=A_i$.

[L4] [[thm-l2-counting-process-integral-isometry]]: a predictable integrand with finite compensator $L^2$ energy has a square-integrable martingale integral with the bracket isometry.

[L5] [[def-op-and-little-op-stochastic-bounds]]: a sequence is $O_P(1)$ when it is bounded in probability.

[F3] [[def-progressively-measurable-and-predictable-process]]: predictable processes are jointly measurable and deterministic Borel functions of time are predictable.

[F4] [[lem-bounded-predictable-counting-integral-pathwise-identity]]: bounded predictable completed stochastic integrals equal their pathwise $dN-dA$ expressions.

[A1] AC is inherited from the counting-process and conditional-expectation interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Decompose the score using the compensator, cancel its finite-variation part, and bound the random-mean correction by the aggregate counting-process isometry.

1.1 Differentiating the finite product in [[def-cox-proportional-hazards-model-and-partial-likelihood]] gives $$U_n(\beta_0)=\sum_i\int_0^\tau\{Z_i(t)-\bar Z_n(t,\beta_0)\}\,dN_i(t).$$ By [F4], this pathwise integral can be decomposed as the L² stochastic integral and its compensator integral. Writing $dN_i=dM_i+Y_ie^{\beta_0^TZ_i}\lambda_0\,dt$, the compensator contribution is zero because $\sum_iY_i(t)e^{\beta_0^TZ_i(t)}\{Z_i(t)-\bar Z_n(t,\beta_0)\}=0$ whenever the risk denominator is positive; outside the risk set every summand is zero. [A1, F1, F4, L1, given]

2.1 Set $\mathcal M=\sum_iM_i$ and $H_n(t)=\bar Z_n(t,\beta_0)-\bar z(t)$. The process $H_n$ is predictable by [F1]–[F3] and the deterministic measurability of $\bar z$. For bounded predictable step approximations, the finite-sum definition [L2] is linear in the integrator; the isometry [L4] and $A_\cdot=\sum_iA_i$ pass that identity to the L² limits. Thus $n^{-1/2}U_n(\beta_0)=n^{-1/2}\sum_i\xi_i-n^{-1/2}\int_0^\tau H_n(t)\,d\mathcal M(t)$. No simultaneous failures make $N_\cdot=\sum_iN_i$ a simple counting process, and the sum of the subject contracts is a square-integrable martingale contract with compensator $A_\cdot=\sum_iA_i$. [A1, F1, F2, F3, L1, L2, L4, step 1.1]

3.1 The predictable aggregate integrand $H_n$ is bounded by $2K$. Its compensator energy satisfies $$n^{-1}E\int_0^\tau\|H_n(t)\|_2^2\,dA_\cdot(t)=E\int_0^\tau\|H_n(t)\|_2^2S_n^{(0)}(t,\beta_0)\lambda_0(t)dt\le e^{K\|\beta_0\|_2}E\int_0^\tau\|H_n(t)\|_2^2\lambda_0(t)dt\longrightarrow0$$ by [F2]'s integrated squared-error conclusion, without a time supremum. Thus [L4] shows the aggregate correction in step 2.1 tends to zero in L² after division by $\sqrt n$, and therefore is $o_P(1)$. [F2, L1, L4, step 2.1, algebra]

4.1 By [F4], $\xi_i$ equals the event sum minus the compensator Lebesgue integral with integrand $Z_i-\bar z$. Both are measurable functions of the $i$th subject record and the deterministic function $\bar z$, so the $\xi_i$ are IID. The integral isometry gives mean zero. Applying its scalar form to each coordinate and polarizing the identity gives the cross-coordinate isometry, hence $E[\xi_i\xi_i^T]=\int_0^\tau E[Y_i(t)e^{\beta_0^TZ_i(t)}\{Z_i(t)-\bar z(t)\}^{\otimes2}]\lambda_0(t)\,dt=I$. The equality follows by expanding the outer product and using $\bar z=s^{(1)}/s^{(0)}$. Independence and centering give $E\|n^{-1/2}\sum_i\xi_i\|_2^2=\operatorname{tr}(I)$. For $M>0$, nonnegativity gives $M^2P(\|n^{-1/2}\sum_i\xi_i\|_2>M)\le E\|n^{-1/2}\sum_i\xi_i\|_2^2=\operatorname{tr}(I)$, so the normalized sum is $O_P(1)$ by [L5]. Combining this with step 3.1 proves the representation and the stated moment properties. [F1, F2, F4, L3, L4, L5, step 3.1, algebra] ∎

