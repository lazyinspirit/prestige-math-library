---
id: lem-finite-dimensional-functional-convolution-bound
kind: lemma
title: Finite-dimensional LAN convolution bound for differentiable functionals
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-lan-experiment
  - def-regular-estimator-under-local-alternatives
  - thm-le-cam-third-lemma
  - cor-weakly-convergent-sequences-are-tight
  - thm-prokhorov-tightness-theorem-on-polish-spaces
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-identity-theorem-holomorphic-functions
  - thm-continuous-mapping-theorem
  - thm-slutsky-for-real-random-variables
  - thm-cramer-wold-device
  - thm-heine-borel-rn
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - def-characteristic-function-of-a-real-random-variable
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-axiom-of-choice
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
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lecture 4, §4.2, Theorem 4.12 (Springer, 2002)
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §2 (2021)
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume AC and let $d,k\ge1$ be finite. Let $\{P_{n,h}:h\in\mathbb R^d\}$ be LAN at $h=0$ with positive-definite information matrix $K$ and central sequence $\Delta_n$. Let $\psi_{n,h}\in\mathbb R^k$ be a local target such that for every fixed $h$,

$$\delta_n(h):=\sqrt n(\psi_{n,h}-\psi_{n,0})\longrightarrow Dh$$

for a fixed matrix $D\in\mathbb R^{k\times d}$. Suppose $T_n=\sqrt n(\widehat\psi_n-\psi_{n,0})$ is regular for this target: under each fixed $P_{n,h}$, $T_n-\delta_n(h)\Rightarrow W$ for the same Borel law $W$. Then there is a probability law $\nu$ on $\mathbb R^k$ such that

$$\mathcal L(W)=N_k(0,DK^{-1}D^T)*\nu.$$

The Gaussian covariance may be singular. No finite-moment hypothesis on $W$ or $\nu$ is needed.

## Facts & Assumptions

**Given:** AC; the finite-dimensional LAN experiment, positive-definite $K$, central sequence $\Delta_n$; the local target derivative matrix $D$; and a regular estimator with common limit law $W$.

[F1] [[def-lan-experiment]]: for each fixed $h$, a mean-one proxy has $\log L_{n,h}=h^T\Delta_n-\frac12h^TKh+o_{P_{n,0}}(1)$ and is total-variation close to the actual local law.

[F2] [[def-regular-estimator-under-local-alternatives]]: for an identity target the centered statistic has a common limit under each fixed local displacement; the statement gives the corresponding target-shift condition explicitly.

[F3] [[thm-le-cam-third-lemma]]: the joint limit tilted by the mean-one Gaussian likelihood ratio describes the statistic's limit under the proxy local law.

[F4] [[cor-weakly-convergent-sequences-are-tight]] and [[thm-prokhorov-tightness-theorem-on-polish-spaces]]: convergent marginal laws are tight, and under AC a tight sequence of joint Borel laws on Euclidean space has a weakly convergent subsequence.

[F5] [[thm-identity-theorem-holomorphic-functions]]: two holomorphic functions on a connected complex domain that agree on a set with an interior accumulation point agree throughout the domain.

[F6] [[def-multivariate-normal-law]] and [[lem-characteristic-function-of-a-multivariate-normal-law]]: $N_d(0,K)$ has characteristic function $u\mapsto e^{-u^TKu/2}$ and finite exponential moments in every real direction.

[F7] [[thm-continuous-mapping-theorem]] and [[thm-slutsky-for-real-random-variables]]: continuous projections preserve weak limits, and scalar $o_P(1)$ remainders preserve those limits.

[F8] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]: real probability laws with equal characteristic functions are equal; the vector conclusion below is obtained from scalar projections using Cramer–Wold.

[F9] [[thm-cramer-wold-device]]: under AC, equality or convergence of all real projections determines the Borel vector law.

[F10] [[def-product-measure-on-sigma-finite-spaces]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: sigma-finite products have the rectangle formula, and Tonelli evaluates nonnegative product integrals by iterated integration.

[F11] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F12] [[thm-finite-and-countable-subadditivity-of-measures]]: the measure of a finite union is at most the sum of the measures of its members.

[F13] [[def-characteristic-function-of-a-real-random-variable]]: the characteristic function of a real random variable $X$ is $t\mapsto E[e^{itX}]$.

[F14] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: a bounded complex-valued function is integrable under a product probability, and Fubini factors the integral of a product of coordinate functions.

[A1] [[def-axiom-of-choice]]: AC is assumed by LAN, Prokhorov's theorem, and the finite-dimensional characteristic-function uniqueness and Cramer–Wold suppliers.

## Proof

**Given:** The local experiment, target, estimator, and hypotheses above.

1.1 Under $P_{n,0}$, $T_n\Rightarrow W$ by regularity at $h=0$ and $\Delta_n\Rightarrow N_d(0,K)$ by LAN. Marginal tightness gives compact sets with outside probabilities below $\varepsilon/2$; enlarge them to closed balls. Their product is closed and bounded in $\mathbb R^{k+d}$ and hence compact by [F11]. By [F12] the joint outside probability is at most $\varepsilon$, so the joint laws of $(T_n,\Delta_n)$ are tight. [A1, F1, F2, F4, F11, F12, given, choose]

2.1 By [F4], choose a subsequence along which $(T_n,\Delta_n)\Rightarrow(T,\Delta)$. Its marginals have laws $W$ and $N_d(0,K)$. Fix $h\in\mathbb R^d$. By [F1], $P_{n,0}(L_{n,h}=0)\to0$; define $\ell_{n,h}=\log L_{n,h}$ when $L_{n,h}>0$ and $\ell_{n,h}=0$ otherwise. This replacement changes a variable only on an event of probability $o(1)$. For any $a\in\mathbb R^k$ and $b\in\mathbb R$, the projection of $(T_n,\ell_{n,h})$ differs by $o_P(1)$ from $a^TT_n+bh^T\Delta_n-\frac12b h^TKh$. The latter converges by [F7]; applying scalar Slutsky and [F9] to every projection gives $(T_n,\ell_{n,h})\Rightarrow(T,h^T\Delta-\frac12h^TKh)$. [A1, F1, F4, F7, F9, step 1.1, given]

3.1 By the continuous mapping theorem [F7], $(T_n,e^{\ell_{n,h}})\Rightarrow(T,e^{h^T\Delta-\frac12h^TKh})$. Since $e^{\ell_{n,h}}=L_{n,h}$ off the event $L_{n,h}=0$, whose probability tends to zero by [F1], the same joint limit holds with $L_{n,h}$. Apply [F3] to this mean-one proxy; [F1] transfers its limit under the proxy law to the actual $P_{n,h}$ law. Regularity and $\delta_n(h)\to Dh$ imply that under this same actual law $T_n\Rightarrow W+Dh$: apply [F7] to each real projection and then [F9]. Therefore for every real $h$ and $t\in\mathbb R^k$, $E[e^{it^TT+h^T\Delta-\frac12h^TKh}]=e^{it^TDh}\varphi_W(t),$ where $\varphi_W(t)=E[e^{it^TW}]$. [F1, F2, F3, F7, F9, step 2.1, given]

4.1 Rearranging step 3.1 gives $F_t(h):=E[e^{it^TT+h^T\Delta}]=e^{\frac12h^TKh+it^TDh}\varphi_W(t)$ for every real $h$. For complex $z\in\mathbb C^d$, define $F_t(z)=E[e^{it^TT+z^T\Delta}]$. On every compact set of $z$, its coordinate power series and derivatives are dominated by $e^{R\|\Delta\|_1}$ for some finite $R$, whose expectation is finite because $\Delta$ is Gaussian. Thus $F_t$ is entire in each coordinate, as is the right-hand side. Apply [F5] one coordinate at a time, holding the remaining coordinates real and then extending them successively; the equality holds for every complex $z$. [F5, F6, step 3.1, given]

5.1 Put $z=iu$ in step 4.1. By [F13], the resulting characteristic functions satisfy, for all real $t,u$, $E[e^{it^TT+iu^T\Delta}]=\varphi_W(t)e^{-t^TDu-u^TKu/2}$. Set $R=T-DK^{-1}\Delta$ and replace $u$ by $u-K^{-1}D^Tt$. Direct expansion gives $E[e^{it^TR+iu^T\Delta}]=\bigl(\varphi_W(t)e^{t^TDK^{-1}D^Tt/2}\bigr)e^{-u^TKu/2}$. At $u=0$ the first factor is the characteristic function of $R$; the second is the characteristic function of $\Delta$. The joint characteristic function therefore factors as the product of the marginal characteristic functions. [F6, F13, step 4.1, given, algebra]

6.1 Let $\rho=\mathcal L(R)\otimes N_d(0,K)$, whose product law exists by [F10]. For each $t\in\mathbb R^k$ and $u\in\mathbb R^d$, the function $(r,z)\mapsto e^{it^Tr}e^{iu^Tz}$ is bounded and hence integrable under $\rho$; [F14] factors its integral into the marginal characteristic functions. By [F13] and step 5.1, this product equals the characteristic function of $(R,\Delta)$. Scalar uniqueness [F8] and [F9] give $\mathcal L(R,\Delta)=\rho$, so $R$ and $\Delta$ are independent. Since $DK^{-1}\Delta\sim N_k(0,DK^{-1}D^T)$ and $T=DK^{-1}\Delta+R$, the law of $T$, which is $W$, is the stated convolution. The argument allows singular $DK^{-1}D^T$ and uses no inverse of that matrix. [A1, F6, F8, F9, F10, F13, F14, step 5.1, algebra] ∎

