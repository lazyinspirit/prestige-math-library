---
id: lem-cox-partial-likelihood-hessian-convergence
kind: lemma
title: Uniform Cox partial-likelihood Hessian convergence
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-cox-proportional-hazards-model-and-partial-likelihood
  - def-counting-process-intensity-and-compensator-contract
  - def-op-and-little-op-stochastic-bounds
  - def-progressively-measurable-and-predictable-process
  - lem-cox-uniform-risk-set-convergence
  - thm-compensated-counting-process-brackets
  - thm-l2-counting-process-integral-isometry
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
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

Use the IID bounded-covariate setup and the bracketing, risk-support, and compact-set hypotheses of [[lem-cox-uniform-risk-set-convergence]]. For each subject let $N_i(t)=1\{U_i\le t,\delta_i=1\}$ and $A_i(t)=\int_0^tY_i(u)e^{\beta_0^TZ_i(u)}\lambda_0(u)\,du$. Assume the continuous counting-process contract of [[def-counting-process-intensity-and-compensator-contract]] for each $M_i=N_i-A_i$ on one common filtration, and assume no two subjects fail at the same time. Write $N_\cdot=\sum_iN_i$, $A_\cdot=\sum_iA_i$, and $\mathcal M=N_\cdot-A_\cdot$. For $\beta\in B$, let
$$ V_n(t,\beta)=\frac{S_n^{(2)}(t,\beta)}{S_n^{(0)}(t,\beta)} -\bar Z_n(t,\beta)\bar Z_n(t,\beta)^T,\qquad V(t,\beta)=\frac{s^{(2)}(t,\beta)}{s^{(0)}(t,\beta)} -\bar z(t,\beta)\bar z(t,\beta)^T, $$
using zero values when a finite-sample denominator is zero. Let $U_n(\beta)=\partial_\beta\log L_p(\beta)$ and $H_n(\beta)=\partial_\beta U_n(\beta)^T$. Define
$$ J(\beta)=\int_0^\tau V(t,\beta)s^{(0)}(t,\beta_0)\lambda_0(t)\,dt. $$
Then the partial log-likelihood Hessian satisfies
$$ \sup_{\beta\in B}\left\|n^{-1}H_n(\beta)+J(\beta)\right\|_{\max}\longrightarrow_P0. $$
The map $J:B\to\mathbb R^{p\times p}$ is continuous.
In particular, $J(\beta_0)=I$, where
$$ I=\int_0^\tau\left\{s^{(2)}(t,\beta_0)- \frac{s^{(1)}(t,\beta_0)s^{(1)}(t,\beta_0)^T}{s^{(0)}(t,\beta_0)}\right\}\lambda_0(t)\,dt. $$

## Facts & Assumptions

**Given:** The uniform risk-set hypotheses, fixed $p$, bounded predictable covariates, integrable $\lambda_0$, no tied failures, and the per-subject continuous counting-process contracts in the Statement.

[F1] [[def-cox-proportional-hazards-model-and-partial-likelihood]]: the no-tie partial likelihood uses $R(t)=\{j:U_j\ge t\}$ and weights $e^{\beta^TZ_j(t)}$.

[F2] [[lem-cox-uniform-risk-set-convergence]]: $S_n^{(r)}$ converges uniformly to $s^{(r)}$ in probability and the empirical weighted mean converges uniformly where denominators are bounded below.

[L1] [[def-counting-process-intensity-and-compensator-contract]]: for a simple counting process, the specified continuous compensator is $A_t=\int_0^tY_s\lambda_s\,ds$, and the model contract assumes $M=N-A$ is a square-integrable martingale.

[L2] [[thm-compensated-counting-process-brackets]]: for that contract, $M^2-A$ is a martingale and the continuous predictable bracket is $A$.

[L3] [[thm-l2-counting-process-integral-isometry]]: a predictable integrand with finite $\mathbb E\int H^2\,dA$ has a square-integrable integral with $\mathbb E(\int H\,dM)^2=\mathbb E\int H^2\,dA$.

[F3] [[def-op-and-little-op-stochastic-bounds]]: $X_n=O_P(1)$ means the sequence is bounded in probability.

[F4] [[def-progressively-measurable-and-predictable-process]]: bounded predictable processes are jointly measurable, and deterministic Borel functions of time are predictable.

[A1] AC is inherited through the counting-process martingale and conditional-expectation interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Differentiate the finite risk-set likelihood, use the uniform risk-set law, and control the aggregate martingale integral by its L² bracket.

1.1 On the event that every risk denominator is positive, differentiating the finite sum defining $\log L_p$ gives $U_n(\beta)=\sum_i\int_0^\tau(Z_i(t)-\bar Z_n(t,\beta))\,dN_i(t)$. Differentiating the weighted mean gives $\partial_\beta\bar Z_n=V_n$, hence $H_n(\beta)=-\int_0^\tau V_n(t,\beta)\,dN_\cdot(t)$. The risk lemma's denominator bound makes this event have probability tending to one. [A1, F1, F2, given]

2.1 Uniform convergence in [F2] and the positive lower bound imply $\sup_{t,\beta}\|V_n(t,\beta)-V(t,\beta)\|_{\max}\to_P0$. Also $N_\cdot(\tau)/n=O_P(1)$: the sum process has compensator $A_\cdot$, $\mathbb E A_\cdot(\tau)\le n e^{\|\beta_0\|_2K}\int_0^\tau\lambda_0$, and $\mathbb E N_\cdot(\tau)=\mathbb E A_\cdot(\tau)$. Therefore $n^{-1}\int(V_n-V)\,dN_\cdot=o_P(1)$ uniformly in $\beta$. [F1, F2, L1, L2, F3, step 1.1]

3.1 No tied failures make $N_\cdot$ a simple unit-jump counting process; the finite sum $M_\cdot=\sum_iM_i$ is a square-integrable martingale with continuous compensator $A_\cdot$. The integrability bound in step 2.1 verifies the finite-horizon contract, so [L2] gives its bracket $A_\cdot$. By [F4] and the measurable population ratios from [F2], $V(t,\beta)$ is deterministic Borel and hence predictable. For each fixed $\beta$, [L3] applied coordinatewise to this bounded predictable matrix gives $\mathbb E\|n^{-1}\int_0^\tau V(t,\beta)\,d\mathcal M(t)\|_F^2\le C/n$ for a constant $C$ independent of $\beta$ and $n$. [A1, F2, F4, L1, L2, L3, step 2.1, given]

4.1 The maps $\beta\mapsto s^{(r)}(t,\beta)$ are uniformly Lipschitz on $B$: the bound $|e^{\beta^TZ}-e^{\beta'^TZ}|\le K e^{K\sup_B\|\beta\|_2}\|\beta-\beta'\|_2$ and the risk-denominator lower bound give a uniform Lipschitz constant for $V(t,\beta)$. Choose a finite $\varepsilon$-net of the compact finite-dimensional set $B$. Step 3.1 and a finite union bound control the martingale integrals on the net; between net points, the Lipschitz bound controls the difference by $C\varepsilon(N_\cdot(\tau)+A_\cdot(\tau))/n=O_P(\varepsilon)$. Letting $\varepsilon\downarrow0$ proves $\sup_{\beta\in B}\|n^{-1}\int V(t,\beta)\,d\mathcal M(t)\|_{\max}\to_P0$. Since $J(\beta)=\int V(t,\beta)s^{(0)}(t,\beta_0)\lambda_0(t)\,dt$ and the multiplier is bounded and integrable, the same Lipschitz bound proves continuity of $J$. [L1, L2, L3, F3, step 3.1, construct]

5.1 Write $dN_\cdot=d\mathcal M+nS_n^{(0)}(t,\beta_0)\lambda_0(t)\,dt$. The deterministic-compensator part divided by $n$ differs uniformly in $\beta$ from $J(\beta)$ by at most $\sup_t|S_n^{(0)}(t,\beta_0)-s^{(0)}(t,\beta_0)|\int_0^\tau\lambda_0$ times a uniform bound for $V$. This tends to zero by [F2]. Combining this with steps 2.1 and 4.1 in $-H_n/n=n^{-1}\int V_n\,dN_\cdot$ proves the stated uniform limit. Substituting $\beta=\beta_0$ into $J$ and simplifying $V(t,\beta_0)s^{(0)}(t,\beta_0)$ gives $I$. [F2, L1, step 2.1, step 4.1, algebra] ∎

