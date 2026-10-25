---
id: thm-semiparametric-information-bound-for-regular-al-estimators
kind: theorem
title: Semiparametric information bound for regular asymptotically linear estimators
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 9
deps:
  - def-asymptotically-linear-estimator-and-influence-function
  - def-pathwise-differentiable-functional
  - thm-influence-curve-representers
  - lem-one-sided-dqm-implies-iid-lan
  - thm-le-cam-third-lemma
  - thm-multivariate-iid-central-limit-theorem
  - thm-asymptotic-linearity-implies-normality
  - thm-slutsky-for-real-random-variables
  - thm-cramer-wold-device
  - thm-continuous-mapping-theorem
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lectures 2–4 (Springer, 2002)
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §§3–4 (2017)
      url: https://arxiv.org/pdf/1709.06418
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §§2 and 4.3.1 (2021)
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume AC and Countable Choice. Let $P$ be a law in a statistical model, let $\mathcal T\subseteq L^2_0(P)$ be its closed score tangent space, and let $\psi$ be a pathwise differentiable $\mathbb R^k$-valued functional with canonical gradient $\phi_{\rm can}\in\mathcal T^k$. Write $V_{\rm can}=P[\phi_{\rm can}\phi_{\rm can}^T]$. Let $\widehat\psi_n$ be asymptotically linear at $P$ with influence function $\varphi\in L^2_0(P)^k$. Assume that for every allowed one-sided DQM path $P_t$ with score $s$ and every fixed $h\ge0$, under $P_{h/\sqrt n}^{\otimes n}$ the centered estimator $\sqrt n\{\widehat\psi_n-\psi(P_{h/\sqrt n})\}$ converges to one law independent of $h$, equal to its limit at $h=0$. Then $\varphi$ represents the pathwise derivative on $\mathcal T$, so

$$\varphi\in\phi_{\rm can}+(\mathcal T^\perp)^k,\qquad P[\varphi\varphi^T]-V_{\rm can}=P[(\varphi-\phi_{\rm can})(\varphi-\phi_{\rm can})^T]\succeq0.$$

By [[thm-asymptotic-linearity-implies-normality]], this is the covariance lower bound for the estimator's asymptotic normal limit. The theorem does not assert that an estimator attaining the bound exists.

## Facts & Assumptions

**Given:** AC and Countable Choice; the dominated model, allowed one-sided DQM paths, closed tangent space, pathwise differentiable functional, canonical gradient, asymptotic linearity, and the stated pathwise regularity under each fixed local displacement.

[F1] [[def-asymptotically-linear-estimator-and-influence-function]]: $\widehat\psi_n-\psi(P)=(P_n-P)\varphi+o_P(n^{-1/2})$ with $P\varphi=0$ and $P\|\varphi\|^2<\infty$.

[F2] [[def-pathwise-differentiable-functional]]: for each allowed score $s$, $\dot\psi_P(s)$ is the value of a continuous linear derivative on $\mathcal T$; its canonical gradient $\phi_{\rm can}\in\mathcal T^k$ represents that derivative.

[F3] [[lem-one-sided-dqm-implies-iid-lan]]: for each fixed $h\ge0$, the one-sided DQM local alternative has a mean-one likelihood-ratio proxy, its product law is total-variation close to the actual local law, its log proxy ratio is $h n^{-1/2}\sum_i s(X_i)-\frac12h^2P[s^2]+o_P(1)$, and its proxy-zero probability tends to zero.

[F4] [[thm-le-cam-third-lemma]]: under a joint Gaussian limit of a statistic and the log of a mean-one likelihood-ratio proxy, the limit under the proxy law is exponentially tilted; the statistic's mean shifts by its covariance with the log ratio, while its covariance is unchanged.

[F5] [[thm-multivariate-iid-central-limit-theorem]]: under AC, iid finite-second-moment vectors have the Gaussian limit with their covariance, including singular covariance.

[F6] [[thm-slutsky-for-real-random-variables]]: adding a real term converging to zero in probability preserves the projected Gaussian limit.

[F7] [[thm-cramer-wold-device]]: under AC, convergence of all real projections to the projections of a specified Borel law gives vector convergence.

[F8] [[thm-asymptotic-linearity-implies-normality]]: the estimator's base-law limit is $N_k(0,\Sigma_\varphi)$.

[F9] [[thm-influence-curve-representers]]: under Countable Choice, the ambient representers of the derivative are exactly $\phi_{\rm can}+(\mathcal T^\perp)^k$.

[F10] [[cor-cauchy-schwarz-inequality-for-l-two]]: the $L^2(P)$ pairing is continuous, so equality on the score span extends to its norm closure.

[F11] [[thm-continuous-mapping-theorem]]: the continuous map $(t,\ell)\mapsto(t,e^\ell)$ preserves joint weak convergence.

[A1] [[def-axiom-of-choice]]: AC supplies the path density-version convention and is required by [F3] and [F5].

[A2] [[def-countable-choice]]: Countable Choice is used by the Hilbert projection/Riesz branch that supplies the canonical gradient in [F2] and the representer decomposition in [F9].

## Proof

**Given:** The hypotheses in the statement. Put $\Sigma_\varphi=P[\varphi\varphi^T]$.

1.1 Fix an allowed path with score $s$ and a fixed $h>0$. Let $T_n=\sqrt n\{\widehat\psi_n-\psi(P)\}$, $\Delta_n=n^{-1/2}\sum_i s(X_i)$, and $L_n$ be the proxy ratio from [F3]. By [F3], $P(L_n=0)\to0$; set $\ell_n=\log L_n$ when $L_n>0$ and $\ell_n=0$ otherwise. For arbitrary $a\in\mathbb R^k$ and $b\in\mathbb R$, asymptotic linearity and [F3] give $a^TT_n+b\ell_n=n^{-1/2}\sum_{i=1}^n\{a^T\varphi(X_i)+bh s(X_i)\}-\tfrac12bh^2P[s^2]+o_P(1).$ The summands are iid and square-integrable by [F1] and [F2]. [A1, F1, F2, F3, given, algebra]

2.1 Apply [F5] to each scalar linear combination in step 1.1, then apply [F6] to its $o_P(1)$ remainder. Since this holds for every $(a,b)$, [F7] gives the joint Gaussian limit of $(T_n,\ell_n)$, with first marginal $N_k(0,\Sigma_\varphi)$ and cross-covariance between $T_n$ and $\ell_n$ equal to $hP[\varphi s]$. [A1, F5, F6, F7, step 1.1, given]

3.1 The log-ratio marginal in step 2.1 is $N(-h^2P[s^2]/2,h^2P[s^2])$. Exponentiating the finite version $\ell_n$ by [F11] gives the joint likelihood-ratio limit, and replacing $e^{\ell_n}$ by $L_n$ changes it only on the $o(1)$-probability zero event from step 1.1. Apply [F4] to the proxy law in [F3]; under that law, $T_n\Rightarrow N_k(hP[\varphi s],\Sigma_\varphi)$. Total-variation closeness in [F3] transfers the same limit to the actual law $P_{h/\sqrt n}^{\otimes n}$. [A1, F3, F4, F11, step 1.1, step 2.1]

4.1 By pathwise differentiability, $\sqrt n\{\psi(P_{h/\sqrt n})-\psi(P)\}\to h\dot\psi_P(s)$. The regularity hypothesis therefore makes $T_n$ under the actual local law converge to $N_k(h\dot\psi_P(s),\Sigma_\varphi)$, using the base limit [F8]. Comparing with step 3.1, uniqueness of weak limits gives $N_k(hP[\varphi s],\Sigma_\varphi)=N_k(h\dot\psi_P(s),\Sigma_\varphi)$. Equal-covariance Gaussian laws have equal means, so $P[\varphi s]=\dot\psi_P(s)$. [F2, F8, step 3.1, given]

5.1 Step 4.1 holds for every allowed score. By linearity it holds on their linear span; by [F10] the pairing with $\varphi$ is continuous, and by [F2] the derivative is continuous, so equality extends to the closure $\mathcal T$. Thus $\varphi$ is an ambient representer of the pathwise derivative. [F2, F10, step 4.1]

6.1 By [F9], $r=\varphi-\phi_{\rm can}$ has every coordinate in $\mathcal T^\perp$. Hence $P[\phi_{\rm can}r^T]=0=P[r\phi_{\rm can}^T]$, and expansion gives $P[\varphi\varphi^T]-V_{\rm can}=P[rr^T]$. For every $a\in\mathbb R^k$, $a^TP[rr^T]a=P[(a^Tr)^2]\ge0$, proving positive-semidefinite dominance. [A2, F9, step 5.1, algebra] ∎

