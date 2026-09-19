---
id: cor-deterministic-ito-integrals-are-gaussian
kind: corollary
title: "Deterministic Ito integrals are Gaussian"
status: draft
origin: pipeline
deps: [thm-ito-isometry-and-linearity-in-predictable-l2, lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative, def-ito-integral-for-square-integrable-predictable-processes, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, def-standard-normal-and-normal-laws, def-brownian-motion, def-multivariate-normal-law, lem-characteristic-function-of-a-normal-law, lem-characteristic-functions-under-affine-maps-and-independent-sums, thm-uniqueness-of-a-law-from-its-characteristic-function, thm-convergence-in-probability-implies-convergence-in-distribution, def-weak-convergence-of-borel-probability-measures, def-convergence-in-probability, lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, cor-cauchy-schwarz-for-random-variables, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.2 and Exercise 3.8"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Fix $T>0$ and let
$h\in L^2[0,T]$ be deterministic, choose a Borel representative of its
Lebesgue-equivalence class, and set $h(s,\omega):=h(s)$. This process is
predictable with finite energy. Then the Ito integral
$\int_0^Th_s\,dB_s$
[[def-ito-integral-for-square-integrable-predictable-processes]] is centered
normal with variance $\int_0^Th^2ds$: its law is $N(0,\int_0^Th^2ds)$ in the
convention of [[def-standard-normal-and-normal-laws]], where $N(0,0)$ is the
Dirac law at $0$. More generally, for deterministic $h_1,\dots,h_d\in L^2[0,T]$
the vector of integrals is jointly Gaussian in the sense of
[[def-multivariate-normal-law]]: its law is $N_d(0,\Sigma)$ with
$$\Sigma_{jk}=\int_0^Th_j(s)h_k(s)\,ds .$$
In particular the covariance of the pair is
$\operatorname{Cov}(\int h_jdB,\int h_kdB)=\int h_jh_k$, the integrals are
uncorrelated exactly when $\int h_jh_k=0$, and integrals of deterministic
integrands with disjoint supports are independent.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a horizon $T>0$, deterministic $h,h_1,\dots,h_d\in L^2[0,T]$ represented by Borel functions, real coefficients $c_1,\dots,c_d$, and a sequence of deterministic step functions $h^m\to h$ in $L^2[0,T]$ with $h^m=\sum_ka^m_k1_{(t^m_k,t^m_{k+1}]}$.

[F1] A deterministic step function is an elementary predictable integrand with deterministic coefficients, and its Ito integral is the finite sum $\sum_ka^m_k(B_{t^m_{k+1}}-B_{t^m_k})$; the Brownian increments over disjoint intervals are independent with laws $N(0,\Delta_k)$ and mean $0$. [[def-elementary-predictable-brownian-integrand]] [[def-ito-integral-of-an-elementary-predictable-process]] [[def-brownian-motion]]

[F2] A finite linear combination of independent centered normal variables is centered normal, and a $N(0,\sigma^2)$ variable has characteristic function $t\mapsto e^{-\sigma^2t^2/2}$, including $\sigma=0$; a Borel probability law on $\mathbb R$ is determined by its characteristic function. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]] [[lem-characteristic-function-of-a-normal-law]] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]

[F3] Convergence in $L^2(P)$ implies convergence in probability, which implies weak convergence of the laws; weak convergence means convergence of the integrals of every bounded continuous function, and $x\mapsto e^{itx}$ is bounded and continuous. [[def-convergence-in-probability]] [[thm-convergence-in-probability-implies-convergence-in-distribution]] [[def-weak-convergence-of-borel-probability-measures]]

[F4] The integration map on predictable $L^2$ is linear and isometric, and the integral of $h$ is the $L^2(P)$-limit of the elementary integrals of any admissible elementary approximation; the approximation $h^m$ is admissible because $|h^m-h|$ in $L^2(\mathrm dt\otimes P)$ equals the deterministic $L^2[0,T]$ distance. [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative]] [[def-ito-integral-for-square-integrable-predictable-processes]]

[F5] If $h^m\to h$ in $L^2[0,T]$ then $\int_0^T(h^m)^2ds\to\int_0^Th^2ds$, by Cauchy--Schwarz; and for deterministic step functions $\int_0^T(h^m)^2ds=\sum_k(a^m_k)^2\Delta^m_k$. [[cor-cauchy-schwarz-for-random-variables]] [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]

[F6] A Borel probability law on $\mathbb R^d$ is $N_d(0,\Sigma)$ exactly when every projection $u\cdot X$ has law $N(0,u^T\Sigma u)$; such a vector has mean $0$ and covariance $\Sigma$. [[def-multivariate-normal-law]]

[F7] AC is declared for the ambient interfaces; the step approximations are given by the deterministic $L^2$ density of step functions. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For a deterministic step function $h^m$ as in [F1], the integral $\sum_ka^m_k(B_{t^m_{k+1}}-B_{t^m_k})$ is a finite sum of independent centered normal variables with variances $(a^m_k)^2\Delta^m_k$, so by [F2] its law is $N(0,\sigma_m^2)$ with $\sigma_m^2=\sum_k(a^m_k)^2\Delta^m_k=\int_0^T(h^m)^2ds$; in particular its characteristic function is $\varphi_m(t)=e^{-\sigma_m^2t^2/2}$, and its mean is $0$. [F1, F2, F5]

2.1 For general deterministic $h\in L^2[0,T]$, choose step functions $h^m\to h$ in $L^2[0,T]$; by [F4] the elementary integrals converge to $\int_0^Th\,dB$ in $L^2(P)$, hence in probability and weakly by [F3], so their characteristic functions converge pointwise: $\varphi(t)=\lim_m\varphi_m(t)=\lim_me^{-\sigma_m^2t^2/2}=e^{-\sigma^2t^2/2}$ with $\sigma^2=\int_0^Th^2ds$, using [F5] for the convergence of variances and continuity of the exponential. [F3, F4, F5, step 1.1]

3.1 By [F2] the function $t\mapsto e^{-\sigma^2t^2/2}$ is the characteristic function of $N(0,\sigma^2)$ and determines a unique Borel law, so the law of $\int_0^Th\,dB$ is $N(0,\sigma^2)$; consequently it is centered with variance $\int_0^Th^2ds$, and the case $\sigma=0$ (that is, $h=0$ in $L^2$) gives the Dirac law at $0$. [F2, step 2.1]

4.1 For a finite family, linearity [F4] gives $\sum_jc_j\int_0^Th_jdB=\int_0^T(\sum_jc_jh_j)dB$ in $L^2(P)$, and step 3.1 applied to the deterministic integrand $\sum_jc_jh_j$ shows that this projection is $N(0,\int_0^T(\sum_jc_jh_j)^2ds)=N(0,c^T\Sigma c)$ with $\Sigma_{jk}=\int_0^Th_jh_kds$; by [F6] the vector of the $d$ integrals therefore has law $N_d(0,\Sigma)$, hence is jointly Gaussian with mean $0$ and covariance $\Sigma$. [F4, F6, step 3.1]

5.1 The covariance identity is the $jk$ entry of $\Sigma$; the zero-covariance case is uncorrelatedness, which for the jointly Gaussian pair means independence, and disjoint supports make every mixed integral $\int h_jh_k$ vanish, so the corresponding integrals are independent. Deterministic integrands are the only class treated here; AC enters only through the declared ambient interfaces [F7], and the step approximations are produced by the deterministic $L^2$ density with no additional selection. [F6, F7, step 4.1, given] ∎

## Source notes

Lawler, Exercise 3.8, states that deterministic integrands produce Gaussian integrals with variance equal to the squared $L^2$ norm, and Section 3.2 built the step-function case from independent Gaussian increments. The corollary here identifies the limit law by characteristic functions rather than by citing a weak-convergence theorem for Gaussian parameter families, so that every supplier lies on an earlier page of this track; the multivariate clause is the defining projection property of the multivariate normal law.
