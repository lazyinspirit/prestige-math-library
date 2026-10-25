---
id: thm-m-estimator-sandwich-limit-under-misspecification
kind: theorem
title: "Misspecified M-estimator sandwich limit"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-pseudo-true-parameter-under-misspecification
  - def-m-estimator
  - def-identically-distributed-and-iid-random-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-convergence-in-probability
  - def-convergence-in-distribution-of-random-elements
  - def-op-and-little-op-stochastic-bounds
  - def-axiom-of-choice
  - thm-multivariate-iid-central-limit-theorem
  - thm-vector-slutsky
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Yen-Chi Chen, UW STAT 581 Chapter 3: M-estimation and the maximum likelihood estimator"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html"
    - title: "Aad W. van der Vaart, Semiparametric Statistics, extended St Flour lecture notes, Lecture 6 §6.5"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $X_1,X_2,\ldots$ be IID from a probability law $P$ that is misspecified relative to the density family $p_\theta$, and let $\ell_\theta=\log p_\theta$ be as in [[def-pseudo-true-parameter-under-misspecification]]. Write $P_nf=n^{-1}\sum_{i=1}^nf(X_i)$ and $M(\theta)=\mathbb E_P\ell_\theta(X)$. Assume that $\Theta\subseteq\mathbb R^d$, $d\ge1$, and that $\theta^*$ is the unique separated interior maximizer of $M$, where interior means that some Euclidean open ball about $\theta^*$ lies in $\Theta$: for each $\varepsilon>0$ there is $\eta_\varepsilon>0$ such that $M(\theta^*)-M(\theta)\ge\eta_\varepsilon$ whenever $\theta\in\Theta$ and $\|\theta-\theta^*\|_2\ge\varepsilon$. Assume the uniform law $\sup_{\theta\in\Theta}|P_n\ell_\theta-M(\theta)|\to_P0$, and let $\hat\theta_n\in\Theta$ be a measurable approximate maximizer with $\sup_{\theta\in\Theta}P_n\ell_\theta-P_n\ell_{\hat\theta_n}\to_P0$.

Let $S_\theta(x)=\nabla_\theta\ell_\theta(x)$ be continuously differentiable in a neighborhood of $\theta^*$. Assume $\mathbb E_PS_{\theta^*}=0$, $\mathbb E_P\|S_{\theta^*}\|_2^2<\infty$, and set $J=\mathbb E_P[S_{\theta^*}S_{\theta^*}^{T}]$. Suppose $H=\mathbb E_P[\nabla_\theta S_{\theta^*}]$ is nonsingular, $D(\theta):=\mathbb E_P[\nabla_\theta S_\theta]$ exists and is continuous at $\theta^*$, and for every sufficiently small fixed $\delta>0$,

$$\sup_{\|\theta-\theta^*\|_2\le\delta}\|P_n\nabla_\theta S_\theta-D(\theta)\|_{op}\to_P0,$$

where $\|A\|_{op}:=\sup_{\|v\|_2\le1}\|Av\|_2$. Finally assume the approximate score equation $\sqrt n\,P_nS_{\hat\theta_n}=o_P(1)$. Then

$$\sqrt n(\hat\theta_n-\theta^*)\Rightarrow N_d\!\left(0,H^{-1}JH^{-T}\right).$$

The covariance is the sandwich matrix formed from the Hessian $H$ under $P$ and the score second moment $J$ under $P$. The theorem does not assert that it equals the inverse Fisher information of the fitted model.

## Facts & Assumptions

**Given:** The data, model, criterion, estimator and hypotheses in the Statement.

[A1] The Axiom of Choice (AC) is assumed. It is used by the multivariate IID central limit theorem below, not by the criterion-gap or Taylor arguments ([[def-axiom-of-choice]]).

[F1] A pseudo-true parameter maximizes the actual-law expected log-likelihood; existence, uniqueness and separation are not part of the definition ([[def-pseudo-true-parameter-under-misspecification]]).

[F8] An M-estimator maximizes an empirical criterion, with an $o_P(1)$ optimization gap for an approximate maximizer ([[def-m-estimator]]).

[F2] IID means identically distributed and mutually independent, not merely pairwise independent ([[def-identically-distributed-and-iid-random-variables]]).

[F3] For an integrable random variable, expectation is its integral against $P$; for square-integrable vectors, covariance is the expected outer product of the centered vector ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-moments-variance-and-covariance]]).

[F4] Under AC, IID finite-second-moment random vectors have the multivariate central limit theorem: $n^{-1/2}\sum_i(Y_i-\mathbb E Y_i)\Rightarrow N_d(0,\operatorname{Cov}(Y_1))$ ([[thm-multivariate-iid-central-limit-theorem]]).

[F5] If $U_n\Rightarrow U$ and a finite-dimensional vector $V_n$ converges in probability to a constant $v$, then $(U_n,V_n)\Rightarrow(U,v)$ and continuous functions of the pair preserve convergence; independence is not required ([[thm-vector-slutsky]]).

[F6] For finite-dimensional random vectors, $Y_n=o_P(1)$ means $P(\|Y_n\|_2>\varepsilon)\to0$ for every $\varepsilon>0$ ([[def-op-and-little-op-stochastic-bounds]]).

[F7] Scalar convergence in probability means $P(|Y_n-y|>\varepsilon)\to0$, and random elements converge in distribution when their laws converge weakly ([[def-convergence-in-probability]], [[def-convergence-in-distribution-of-random-elements]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 Put $\Delta_n=\sup_{\theta\in\Theta}|P_n\ell_\theta-M(\theta)|$ and $r_n=\sup_{\theta\in\Theta}P_n\ell_\theta-P_n\ell_{\hat\theta_n}$. By assumption $\Delta_n\to_P0$ and $r_n\to_P0$. Since $\hat\theta_n$ is an approximate maximizer by [F8], $P_n\ell_{\hat\theta_n}\ge P_n\ell_{\theta^*}-r_n$, and therefore $0\le M(\theta^*)-M(\hat\theta_n)\le2\Delta_n+r_n$. [given, F1, F3, F7, F8, algebra]

2.1 For any fixed $\varepsilon>0$, separation gives a positive gap $\eta_\varepsilon$ whenever $\|\hat\theta_n-\theta^*\|_2\ge\varepsilon$. Step 1.1 then gives $P(\|\hat\theta_n-\theta^*\|_2\ge\varepsilon)\le P(2\Delta_n+r_n\ge\eta_\varepsilon)\to0$. Thus $\hat\theta_n-\theta^*=o_P(1)$ by [F6], so with probability tending to one the segment from $\theta^*$ to $\hat\theta_n$ lies in any fixed neighborhood on which the score is differentiable. [given, step 1.1, F6, F7]

3.1 Choose a ball about $\theta^*$ inside the differentiability neighborhood; the measurable event that $\hat\theta_n$ lies in this ball ensures its segment from $\theta^*$ stays in that neighborhood. On this event define $A_n=\int_0^1 P_n\nabla_\theta S_{\theta^*+t(\hat\theta_n-\theta^*)}\,dt$; set $A_n=H$ otherwise. For each fixed parameter in a smaller ball, density measurability makes the log-density measurable, and difference quotients make the sections of $S_\theta$ and $\nabla_\theta S_\theta$ measurable. On compact subballs, rounding parameters to rational grids gives countable-valued Borel approximations; continuity in $\theta$ makes the score and Hessian fields jointly measurable as pointwise limits. The segment integrand is then measurable, and its continuous sample paths make $A_n$ the limit of measurable Riemann sums. Given $\varepsilon>0$, continuity of $D$ at $\theta^*$ supplies a sufficiently small fixed $\delta$ for which $\|D(\theta)-H\|_{op}<\varepsilon/2$ throughout the $\delta$-ball. Consistency from step 2.1 and the assumed uniform Hessian law imply $P(\|A_n-H\|_{op}>\varepsilon)\to0$. [given, F1, F8, step 2.1, F6, algebra]

4.1 On the same high-probability event, the componentwise fundamental theorem of calculus along the segment gives $P_nS_{\hat\theta_n}=P_nS_{\theta^*}+A_n(\hat\theta_n-\theta^*)$. By step 3.1, every entry of $A_n-H$ tends to zero in probability. The determinant and adjugate are polynomials in the entries, so $\det A_n\to_P\det H\ne0$ and $\operatorname{adj}(A_n)\to_P\operatorname{adj}(H)$; on the event $\det A_n\ne0$, $A_n^{-1}=\operatorname{adj}(A_n)/\det A_n$, hence every entry of $A_n^{-1}-H^{-1}$ tends to zero in probability. The finite-dimensional matrix bound $\|B\|_{op}\le d\max_{j,k}|B_{jk}|$ then gives $\|A_n^{-1}-H^{-1}\|_{op}\to_P0$. Rearranging gives $\sqrt n(\hat\theta_n-\theta^*)=-A_n^{-1}\sqrt nP_nS_{\theta^*}+A_n^{-1}\sqrt nP_nS_{\hat\theta_n}$ on an event whose probability tends to one. [given, step 3.1, F6, algebra]

5.1 By [F2], the score vectors $S_{\theta^*}(X_i)$ are IID; their mean is zero and their covariance is $J$. Their second moment is finite by the Statement, so [F4] and [A1] give $\sqrt nP_nS_{\theta^*}\Rightarrow G$ with $G\sim N_d(0,J)$. The matrix $A_n^{-1}$ converges in probability in operator norm to $H^{-1}$, and the residual vector $\sqrt nP_nS_{\hat\theta_n}=o_P(1)$ by the Statement. Flattening the matrix entries and concatenating the vectors gives a finite-dimensional vector converging in probability to $(H^{-1},0)$. Applying [F5] to the continuous map $(x,A,r)\mapsto-Ax+Ar$ gives the limit $-H^{-1}G$. Its covariance is $H^{-1}JH^{-T}$, proving the assertion. [A1, F2, F4, F5, F6, step 4.1] ∎
