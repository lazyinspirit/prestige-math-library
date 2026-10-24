---
id: thm-convolution-bound-for-regular-estimators
kind: theorem
title: Convolution bound for regular estimators
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-lan-experiment
  - def-regular-estimator-under-local-alternatives
  - thm-le-cam-third-lemma
  - thm-prokhorov-tightness-theorem-on-polish-spaces
  - cor-weakly-convergent-sequences-are-tight
  - thm-vector-slutsky
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-identity-theorem-holomorphic-functions
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-continuous-mapping-theorem
  - thm-cramer-wold-device
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: joint-limit and analytic continuation
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
    - title: "A. W. van der Vaart, Semiparametric Statistics, Theorem 4.12 and complete proof, printed pp. 44–46; finite-dimensional proof (a), p. 45"
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
---

## Statement

Assume AC. Let $\{P_{n,h}:h\in\mathbb R^d\}$ be LAN at $h=0$ with
positive-definite information matrix $K$ and central sequence $\Delta_n$.
Let $T_n=\sqrt n(\widehat\theta_n-\theta_0)$ be regular under every fixed
local alternative, with common limit law $W$ as in
[[def-regular-estimator-under-local-alternatives]]. Then there is a
probability law $\nu$ on $\mathbb R^d$ such that
$$\mathcal L(W)=N_d(0,K^{-1})*\nu.$$
Here $*$ is convolution, the law of the sum of independent random vectors
with the two indicated laws. In particular, the efficient Gaussian component
with covariance $K^{-1}$ is a convolution factor of every regular limit.

## Facts & Assumptions

**Given:** AC; the LAN experiment, positive-definite $K$, central sequence,
and regular estimator with common limit law $W$.

[A1] [[def-axiom-of-choice]]: AC is assumed by Prokhorov tightness, the
Gaussian laws, and characteristic-function uniqueness.

[F1] [[def-lan-experiment]]: For each fixed $h$, an absolutely continuous
proxy has log likelihood
$h^T\Delta_n-\frac12h^TKh+o_{P_{n,0}}(1)$ and is total-variation close to
the true local law.

[F2] [[def-regular-estimator-under-local-alternatives]]: Under every fixed
$P_{n,h}$, $T_n-h\Rightarrow W$ with the same $W$.

[F3] [[thm-le-cam-third-lemma]]: A joint limit tilted by the mean-one
Gaussian likelihood ratio describes limits under the proxy local alternative;
total-variation closeness transfers that law to the true alternative.

[F4] [[cor-weakly-convergent-sequences-are-tight]] and
[[thm-prokhorov-tightness-theorem-on-polish-spaces]]: Weakly convergent laws
on Euclidean space are tight, and under AC every tight sequence of laws on a
Polish space has a weakly convergent subsequence.

[F5] [[thm-vector-slutsky]]: If one component converges in distribution and
another differs in probability by $o_P(1)$ from a continuous function of it,
the joint vector converges to the corresponding joint limit.

[F6] [[def-multivariate-normal-law]] and
[[lem-characteristic-function-of-a-multivariate-normal-law]]: If
$\Delta\sim N_d(0,K)$, then $E e^{h^T\Delta}=e^{h^TKh/2}$ and its
characteristic function is $e^{-u^TKu/2}$.

[F7] [[thm-identity-theorem-holomorphic-functions]]: Two holomorphic
functions on a connected domain that agree on a set with an interior
accumulation point agree throughout the domain.

[F8] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]:
Under AC, probability laws on $\mathbb R$ with identical characteristic
functions are equal.

[F9] [[def-euclidean-inner-product]]: Tightness and compact balls use the
Euclidean norm on $\mathbb R^d$.

[F10] [[thm-continuous-mapping-theorem]]: Continuous maps preserve convergence
in distribution at points where they are continuous.

[F11] [[thm-cramer-wold-device]]: Under AC, Borel probability laws on a finite-dimensional Euclidean space are determined by all their real linear projection laws.

[F12] [[def-product-measure-on-sigma-finite-spaces]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: The product of two Borel probability laws exists, and bounded product integrals factor into the marginal integrals, by applying Tonelli to the positive and negative parts of their real and imaginary parts.

## Proof

**Proof technique:** extract a joint weak limit, use the third lemma for every
fixed local shift, and analytically continue the Gaussian tilt identity.

1.1 Under $P_{n,0}$, $T_n\Rightarrow W$ by regularity at $h=0$ and $\Delta_n\Rightarrow N_d(0,K)$ by LAN. By [F4], both marginal sequences are tight. Their joint laws are tight: for any $\epsilon>0$, choose compact balls $C_T,C_\Delta$ with marginal outside probabilities below $\epsilon/2$; the union bound puts the joint law on the compact product with probability at least $1-\epsilon$. [A1, F1, F2, F4, F9, given, choose, algebra]

2.1 By [F4] and Prokhorov's theorem, select a subsequence along which $(T_n,\Delta_n)\Rightarrow(T,\Delta)$. Its marginals are $T\sim W$ and $\Delta\sim N_d(0,K)$, since the full marginal sequences already converge. This supplies the joint-limit subsequence used below. [A1, F4, step 1.1]

3.1 Fix $h\in\mathbb R^d$. Along this subsequence [F1] and [F5] give $(T_n,\Delta_n,\log L_{n,h}) \Rightarrow (T,\Delta,h^T\Delta-\tfrac12h^TKh).$ The final coordinate is normal with mean $-h^TKh/2$ and variance $h^TKh$. By [F1], $P_{n,0}(L_{n,h}=0)\to0$. Assign any finite value to the log on that vanishing event; [F10] then gives $(T_n,\Delta_n,L_{n,h})\Rightarrow(T,\Delta,e^{h^T\Delta-h^TKh/2})$. By [F3], under the true $P_{n,h}$ law, the first coordinate has limit $T^{(h)}$ given by tilting the joint law of $(T,\Delta)$ by $e^{h^T\Delta-h^TKh/2}$. Regularity [F2] also gives $T_n\Rightarrow W+h$ under $P_{n,h}$. Therefore for every $t\in\mathbb R^d$ and every real $h$, $E\left[e^{h^T\Delta-h^TKh/2}e^{it^TT}\right] =e^{it^Th}\varphi_W(t),$ where $\varphi_W$ is the characteristic function of $W$. [F1, F2, F3, F5, F10, step 2.1, given, algebra]

4.1 Rearranging step 3.1 gives, for real $h$, $F_t(h):=E[e^{it^TT+h^T\Delta}] =e^{h^TKh/2+it^Th}\varphi_W(t).$ For complex $z\in\mathbb C^d$, $F_t(z)=E[e^{it^TT+z^T\Delta}]$ is entire in each coordinate: on every compact set of $z$, its exponential power series and coordinate derivatives are dominated by $e^{R\|\Delta\|_1}$ for some finite $R$, whose expectation is finite because each Gaussian coordinate has finite exponential moments. The right-hand side is also entire. Apply [F7] one coordinate at a time, holding the other coordinates real and then successively allowing them to be complex. The equality therefore holds for every complex $z$. [F6, F7, step 3.1, algebra]

5.1 Set $z=iu$ in step 4.1. Then $E[e^{it^TT+iu^T\Delta}] =\varphi_W(t)e^{-t^Tu-u^TKu/2}.$ Let $R=T-K^{-1}\Delta$. Replacing $u$ by $u-K^{-1}t$ gives $E[e^{it^TR+iu^T\Delta}] =\left(\varphi_W(t)e^{t^TK^{-1}t/2}\right)e^{-u^TKu/2}.$ The first factor equals $E e^{it^TR}$ by setting $u=0$; the second is the characteristic function of $\Delta$. Thus the joint characteristic function of $(R,\Delta)$ factors into its marginals. [F6, step 4.1, given, algebra]

6.1 By [F12], form the product law $\rho=\mathcal L(R)\otimes\mathcal L(\Delta)$ on $\mathbb R^{2d}$. Step 5.1 and factorization of the bounded product integrals show that $\rho$ and $\mathcal L(R,\Delta)$ have identical joint characteristic functions. For every $a,b\in\mathbb R^d$ and real $v$, evaluate these functions at $(va,vb)$; this gives equality of the scalar characteristic functions of the projection $(r,z)\mapsto a^Tr+b^Tz$ under the two laws. Scalar uniqueness [F8] identifies each projection law, and Cramér–Wold [F11], under the existing AC hypothesis [A1], gives $\mathcal L(R,\Delta)=\rho$. Thus $R$ and $\Delta$ are independent. Since $K$ is invertible, $K^{-1}\Delta\sim N_d(0,K^{-1})$, and $T=K^{-1}\Delta+R$. The law of $T$, which is $W$, is therefore $N_d(0,K^{-1})*\mathcal L(R)$, proving the claimed convolution with $\nu=\mathcal L(R)$. [A1, F6, F8, F11, F12, step 5.1, algebra] ∎
