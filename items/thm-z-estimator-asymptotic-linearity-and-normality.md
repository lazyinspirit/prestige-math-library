---
id: thm-z-estimator-asymptotic-linearity-and-normality
kind: theorem
title: "Asymptotic linearity and normality of iid Z-estimators"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-z-estimator
  - def-estimator-sequence-in-iid-experiments
  - def-op-and-little-op-stochastic-bounds
  - def-convergence-in-distribution-of-random-elements
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - thm-vector-stochastic-order-calculus
  - thm-vector-slutsky
  - thm-multivariate-iid-central-limit-theorem
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 16, PDF p. 13"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf"
    - title: "Aad W. van der Vaart, Semiparametric Statistics, Lecture 6 §6.5, Theorem 6.19, PDF pp. 73–74"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
---

## Statement

Assume the Axiom of Choice (AC), as required by the library's multivariate iid central limit theorem. Let $(\mathcal X,\mathcal A)$ be a measurable space, let $\Theta\subset\mathbb R^d$ be open with its Borel sigma-algebra, and let $\theta_0\in\Theta$. Let $X_1,X_2,\ldots$ be iid $\mathcal X$-valued observations with law $P$. Let $\psi:\Theta\times\mathcal X\to\mathbb R^d$ be jointly measurable and satisfy $P\|\psi_\theta\|<\infty$ for every $\theta\in\Theta$; write $\psi_\theta(x)=\psi(\theta,x)$. Let $\hat\theta_n:(\mathcal X^n,\mathcal A^{\otimes n})\to(\Theta,\mathcal B(\Theta))$ be a measurable estimator sequence as in [[def-estimator-sequence-in-iid-experiments]] and a Z-estimator as in [[def-z-estimator]], with the stronger root-rate condition below. Write
$$P\psi_\theta=\mathbb E[\psi_\theta(X_1)],\qquad P_n\psi_\theta=\frac1n\sum_{i=1}^n\psi_\theta(X_i),\qquad \mathbb G_n\psi_\theta=\sqrt n(P_n-P)\psi_\theta.$$
Assume the displayed random vectors and suprema below are measurable, and suppose:

1. $\|\hat\theta_n-\theta_0\|=o_P(1)$ and $\sqrt n\,\|P_n\psi_{\hat\theta_n}\|=o_P(1)$.
2. $P\psi_{\theta_0}=0$, $P\|\psi_{\theta_0}\|^2<\infty$, and $\Sigma=P[\psi_{\theta_0}\psi_{\theta_0}^{T}]$.
3. The mean map $\Psi(\theta)=P\psi_\theta$ has expansion $\Psi(\theta_0+h)=Vh+\rho(h)$ with $V$ nonsingular and $\|\rho(h)\|/\|h\|\to0$ as $h\to0$, $h\ne0$.
4. The local stochastic-equicontinuity condition holds: for every $\varepsilon>0$,
$$\lim_{\delta\downarrow0}\limsup_{n\to\infty}P^n\!\left(\sup_{\theta\in\Theta:\,\|\theta-\theta_0\|<\delta}\|\mathbb G_n(\psi_\theta-\psi_{\theta_0})\|>\varepsilon\right)=0.$$

Here $P^n$ denotes the product sampling law of $(X_1,\ldots,X_n)$.

Then
$$\sqrt n(\hat\theta_n-\theta_0)=-V^{-1}\mathbb G_n\psi_{\theta_0}+o_P(1)\Rightarrow N_d(0,V^{-1}\Sigma V^{-T}).$$
This theorem assumes consistency and the local empirical-process condition; it asserts neither. The local equicontinuity condition is the direct process hypothesis used in the proof, and consistency alone does not replace it.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[A1] $\|\hat\theta_n-\theta_0\|=o_P(1)$ and $\sqrt n\,\|P_n\psi_{\hat\theta_n}\|=o_P(1)$.

[A2] For every $\varepsilon>0$, the local stochastic-equicontinuity limit in condition 4 of the statement is zero.

[A3] $\Psi(\theta_0+h)=Vh+\rho(h)$, $V$ is nonsingular, and $\|\rho(h)\|/\|h\|\to0$.

[A4] $P\psi_{\theta_0}=0$ and $P\|\psi_{\theta_0}\|^2<\infty$.

[F1] [[def-op-and-little-op-stochastic-bounds]]: $O_P(1)$ and $o_P(1)$ are defined by boundedness and convergence of tail probabilities.

[F2] [[thm-vector-stochastic-order-calculus]]: weak convergence implies finite-dimensional tightness, and $o_P(1)O_P(1)=o_P(1)$.

[F3] [[thm-vector-slutsky]]: joint convergence with a probability-limit constant and continuous finite-dimensional transformations require no independence.

[F4] [[def-convergence-in-distribution-of-random-elements]]: convergence in distribution means weak convergence of laws, with no common probability space required.

[F5] [[def-identically-distributed-and-iid-random-variables]]: iid means a common law and mutual independence of the whole family.

[F6] [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]: a finite-dimensional derivative is the real-linear first-order approximation with remainder $o(\|h\|)$.

[F7] [[thm-multivariate-iid-central-limit-theorem]]: under AC, iid finite-dimensional vectors with finite second moment have a centered normal limit with their covariance; singular covariance is allowed.

[F8] [[def-multivariate-normal-law]]: under AC, $N_d(0,\Sigma)$ is characterized by all scalar projections having their corresponding centered normal laws; its covariance is $\Sigma$.

[F9] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F10] [[def-z-estimator]]: a measurable estimator sequence is a Z-estimator when it is an exact root or an $o_P(1)$-approximate root of its empirical equation.

[F11] [[def-estimator-sequence-in-iid-experiments]]: an estimator sequence consists of measurable maps from each product sample space $(\mathcal X^n,\mathcal A^{\otimes n})$ into its Borel target space.

[F12] [[lem-measurable-functions-preserve-independence]]: applying measurable coordinatewise maps to an independent family preserves independence.

## Proof

**Given:** AC, the iid observations and score functions, and assumptions [A1]–[A4].

1.1 Fix $\varepsilon,\eta>0$. By [A2] choose $\delta>0$ such that the limiting upper probability of the displayed supremum exceeding $\varepsilon$ is at most $\eta$. By [A1], $P^n(\|\hat\theta_n-\theta_0\|\ge\delta)\to0$. On the complementary event, $\|\mathbb G_n(\psi_{\hat\theta_n}-\psi_{\theta_0})\|$ is bounded by that supremum. Hence its limiting upper tail probability is at most $\eta$; letting $\eta\downarrow0$ proves $\mathbb G_n(\psi_{\hat\theta_n}-\psi_{\theta_0})=o_P(1)$. [A1, A2, choose]

1.2 By [F12], applying the same measurable map $\psi_{\theta_0}$ to the iid observations preserves independence; identical distribution follows because every $X_i$ has the same law. By [A4] and [F5], $\mathbb G_n\psi_{\theta_0}=n^{-1/2}\sum_{i=1}^n\psi_{\theta_0}(X_i)$ is a centered iid sum with finite covariance $\Sigma$. AC is available by [F9], so [F7] gives $\mathbb G_n\psi_{\theta_0}\Rightarrow N_d(0,\Sigma)$, where convergence in distribution is weak convergence of laws by [F4]. In particular $\mathbb G_n\psi_{\theta_0}=O_P(1)$ by [F2]. [A4, F2, F4, F5, F7, F9, F12]

2.1 Put $h_n=\hat\theta_n-\theta_0$ and $W_n=\sqrt n\,h_n$. By [F10]–[F11], the estimator and root have the stated Z-estimator and data-measurability conventions; [A1] imposes the stronger root-rate residual, which is also $o_P(1)$ since $n^{-1/2}\le1$. The identity $\sqrt nP_n\psi_{\hat\theta_n}=\mathbb G_n\psi_{\hat\theta_n}+\sqrt n\Psi(\hat\theta_n)$, [A1], step 1.1 and the derivative expansion in [A3], as specified by [F6], give $VW_n+\sqrt n\,\rho(h_n)=-\mathbb G_n\psi_{\theta_0}+o_P(1)$. Moreover $\|\rho(h_n)\|/\|h_n\|=o_P(1)$ by [A1] and [A3], with the ratio set to zero when $h_n=0$. [A1, A3, F6, F10, F11, step 1.1, algebra]

3.1 Since $V$ is nonsingular, [A3] and step 2.1 imply $\|W_n\|\le\|V^{-1}\|(\|\mathbb G_n\psi_{\theta_0}\|+e_n+a_n\|W_n\|)$, where $e_n=o_P(1)$ and $a_n=\|\rho(h_n)\|/\|h_n\|=o_P(1)$ (set $a_n=0$ if $h_n=0$). With probability tending to one, $\|V^{-1}\|a_n\le1/2$. Absorbing that term and using $\mathbb G_n\psi_{\theta_0}=O_P(1)$ from step 1.2 proves $W_n=O_P(1)$. [A3, F2, step 1.2, step 2.1, algebra]

4.1 Now $\sqrt n\,\rho(h_n)=o_P(1)$ because it is the product of $\|W_n\|=O_P(1)$ and $\|\rho(h_n)\|/\|h_n\|=o_P(1)$. Substituting into step 2.1 gives $W_n=-V^{-1}\mathbb G_n\psi_{\theta_0}+o_P(1)$. [A3, F1, F2, step 2.1, step 3.1, algebra]

5.1 By [F4], [F7], and [F8], the continuous linear image $-V^{-1}\mathbb G_n\psi_{\theta_0}$ converges to a centered Gaussian with covariance $V^{-1}\Sigma V^{-T}$: for every $u\in\mathbb R^d$, the projection of $N_d(0,\Sigma)$ along $-V^{-T}u$ is centered normal with variance $u^TV^{-1}\Sigma V^{-T}u$. Applying [F3] to the $o_P(1)$ remainder in step 4.1 proves the asserted normal limit. AC is used in the multivariate iid CLT and the normal-law supplier, not in the stochastic-order or Taylor steps. [F3, F4, F7, F8, F9, step 1.2, step 4.1] ∎

## Remarks

By [[def-z-estimator]], an $o_P(1)$ root residual is enough for the Z-estimator definition; condition 1 strengthens it to $o_P(n^{-1/2})$. The theorem assumes consistency and local stochastic equicontinuity; it does not use [[thm-z-estimator-consistency]] or infer equicontinuity from consistency alone. The proof uses the quantified process condition directly, without a uniform-law theorem.
