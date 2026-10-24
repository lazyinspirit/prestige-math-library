---
id: lem-cox-partial-likelihood-hessian-convergence
kind: lemma
title: Uniform Cox partial-likelihood Hessian convergence
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-axiom-of-choice
  - def-cox-proportional-hazards-model-and-partial-likelihood
  - def-counting-process-intensity-and-compensator-contract
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
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

Use the IID bounded-covariate setup and the risk-support and compact-set hypotheses of [[lem-cox-uniform-risk-set-convergence]]. For each subject let $N_i(t)=1\{U_i\le t,\delta_i=1\}$ and $A_i(t)=\int_0^tY_i(u)e^{\beta_0^TZ_i(u)}\lambda_0(u)\,du$. Assume the continuous counting-process contract of [[def-counting-process-intensity-and-compensator-contract]] for each $M_i=N_i-A_i$ on one common filtration, and assume no two subjects fail at the same time. Write $N_\cdot=\sum_iN_i$, $A_\cdot=\sum_iA_i$, and $\mathcal M=N_\cdot-A_\cdot$. For $\beta\in B$, let
$$V_n(t,\beta)=\frac{S_n^{(2)}(t,\beta)}{S_n^{(0)}(t,\beta)} -\bar Z_n(t,\beta)\bar Z_n(t,\beta)^T,\qquad V(t,\beta)=\frac{s^{(2)}(t,\beta)}{s^{(0)}(t,\beta)} -\bar z(t,\beta)\bar z(t,\beta)^T,$$
using zero values when a finite-sample denominator is zero. Let $U_n(\beta)=\partial_\beta\log L_p(\beta)$ and $H_n(\beta)=\partial_\beta U_n(\beta)^T$. Define
$$J(\beta)=\int_0^\tau V(t,\beta)s^{(0)}(t,\beta_0)\lambda_0(t)\,dt.$$
Then the partial log-likelihood Hessian satisfies
$$\sup_{\beta\in B}\left\|n^{-1}H_n(\beta)+J(\beta)\right\|_{\max}\longrightarrow_P0.$$
The map $J:B\to\mathbb R^{p\times p}$ is continuous.
In particular, $J(\beta_0)=I$, where
$$I=\int_0^\tau\left\{s^{(2)}(t,\beta_0)- \frac{s^{(1)}(t,\beta_0)s^{(1)}(t,\beta_0)^T}{s^{(0)}(t,\beta_0)}\right\}\lambda_0(t)\,dt.$$

## Facts & Assumptions

**Given:** The integrated risk-set hypotheses, fixed $p$, bounded predictable covariates, integrable $\lambda_0$, no tied failures, and the per-subject continuous counting-process contracts in the Statement.

[F1] [[def-cox-proportional-hazards-model-and-partial-likelihood]]: the no-tie partial likelihood uses $R(t)=\{j:U_j\ge t\}$ and weights $e^{\beta^TZ_j(t)}$.

[F2] [[lem-cox-uniform-risk-set-convergence]]: the risk sums, weighted means and covariances converge in expected squared error integrated against $\lambda_0(t)dt$, uniformly in parameter, and empirical denominators have a uniform positive bound with probability tending to one.

[L1] [[def-counting-process-intensity-and-compensator-contract]]: for a simple counting process, the specified continuous compensator is $A_t=\int_0^tY_s\lambda_s\,ds$, and the model contract assumes $M=N-A$ is a square-integrable martingale.

[L2] [[thm-compensated-counting-process-brackets]]: for that contract, $M^2-A$ is a martingale and the continuous predictable bracket is $A$.

[L3] [[thm-l2-counting-process-integral-isometry]]: a predictable integrand with finite $\mathbb E\int H^2\,dA$ has a square-integrable integral with $\mathbb E(\int H\,dM)^2=\mathbb E\int H^2\,dA$.

[F3] [[def-op-and-little-op-stochastic-bounds]]: $X_n=O_P(1)$ means the sequence is bounded in probability.

[F4] [[def-progressively-measurable-and-predictable-process]]: bounded predictable processes are jointly measurable, and deterministic Borel functions of time are predictable.

[F5] [[lem-bounded-predictable-counting-integral-pathwise-identity]]: bounded predictable stochastic integrals equal their pathwise $dN-dA$ expressions, and $E\int GdN=E\int GdA$ for nonnegative predictable $G$.

[F6] [[cor-cauchy-schwarz-inequality-for-l-two]]: on every measure space, $\int|fg|d\mu\le\|f\|_2\|g\|_2$ for square-integrable $f,g$.

[A1] AC is inherited through the counting-process martingale and conditional-expectation interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Differentiate the likelihood, use the integrated risk-set law in the compensator term, and control the empirical covariance martingale integral by isometry and finite parameter nets.

1.1 At each recorded failure the risk set contains its failing subject, so its denominator is positive for every $\beta$, even if risk sets are empty at other times. Differentiate the finite sum defining $\log L_p$ to obtain $U_n(\beta)=\sum_i\int(Z_i-\bar Z_n(t,\beta))\,dN_i$ and $H_n(\beta)=-\int V_n(t,\beta)\,dN_\cdot$. Define $V_n=0$ on empty risk sets. It is predictable, its entries are bounded by $2K^2$, and [F5] permits the pathwise decomposition against $dN_\cdot=d\mathcal M+dA_\cdot$. [A1, F1, F2, F4, F5, given]

2.1 Since subjects have no simultaneous failures, $N_\cdot$ is simple; $\mathcal M=\sum_iM_i$ is square-integrable and has continuous compensator $A_\cdot=\sum_iA_i$. Its total compensator satisfies $A_\cdot(\tau)\le ne^{K\|\beta_0\|_2}\|\lambda_0\|_1$, and $EN_\cdot(\tau)=EA_\cdot(\tau)$ by [F5]. Thus the aggregate contract holds and [L2]–[L3] apply. For each fixed $\beta$, including the random predictable $V_n(t,\beta)$, their isometry bounds $E\|n^{-1}\int V_n(t,\beta)d\mathcal M\|_F^2\le C/n$. [F5, L1, L2, L3, step 1.1, algebra]

3.1 The parameter maps $V_n(t,\beta)$ have a deterministic Lipschitz bound independent of $n,t$: on a nonempty risk set, differentiating a weighted expectation of a bounded coordinate $g(Z)$ gives $E_{n,\beta}[gZ]-E_{n,\beta}[g]E_{n,\beta}[Z]$, bounded by $2K\sup|g|$; apply this to $g=Z_j,Z_jZ_k$ and the covariance product. An empty risk set is empty for every parameter, so its zero convention also has this bound. The population maps satisfy the same bounds by differentiation under their bounded expectations and positive denominators. A finite $\varepsilon$-net of $B$ and step 2.1 control $n^{-1}\int V_n d\mathcal M$ on net points. Between points, [F5] bounds the difference by $C\varepsilon(N_\cdot(\tau)+A_\cdot(\tau))/n=O_P(\varepsilon)$; letting $\varepsilon\downarrow0$ proves its uniform parameter convergence to zero. The population Lipschitz bound and integrability of $s^{(0)}(t,\beta_0)\lambda_0(t)$ also prove continuity of $J$. [F2, F3, F5, L3, step 2.1, construct, algebra]

4.1 The compensator term equals $\int V_n(t,\beta)S_n^{(0)}(t,\beta_0)\lambda_0(t)dt$. Its difference from $J(\beta)$ is bounded uniformly in parameter by $$C\int_0^\tau\left\{\sup_{\beta\in B}\|V_n(t,\beta)-V(t,\beta)\|_{\max}+|S_n^{(0)}(t,\beta_0)-s^{(0)}(t,\beta_0)|\right\}\lambda_0(t)dt.$$ [F6] and [F2]'s expected integrated squared-error convergence make this bound tend to zero in L¹ and hence probability (if $\|\lambda_0\|_1=0$, the bound is zero directly). Combine this with step 3.1 and the Hessian identity in step 1.1 to prove the stated uniform parameter limit. Finally $J(\beta_0)=I$ by direct multiplication of $V(t,\beta_0)$ by $s^{(0)}(t,\beta_0)$. [F2, F6, step 1.1, step 3.1, algebra] ∎