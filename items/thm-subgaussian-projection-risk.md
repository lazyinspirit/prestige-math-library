---
id: thm-subgaussian-projection-risk
kind: theorem
title: "Sub-Gaussian projection risk bounds"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-fixed-design-projection-estimator
  - def-orthogonal-projection
  - lem-finite-dimensional-projection-is-linear-and-contractive
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-subgaussian-variable-and-vector
  - thm-finite-subgaussian-maximum-and-epsilon-net
  - lem-probability-measure-basic-identities
  - def-loss-function-and-risk
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-addition-formula
  - def-integer-power
  - thm-geometric-series
  - thm-monotone-convergence-for-the-integral
  - thm-of-archimedean
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Theorem 2.2 and proof"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §§1–2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Statement

Let $n\ge1$, let $V\subseteq\mathbb R^n$ be a fixed subspace of dimension
$r$, and let $\mu\in V$. Suppose $Y=\mu+\varepsilon$, where
$\varepsilon\in\mathbb R^n$ is centered sub-Gaussian with proxy $\sigma^2\ge0$
in the linear-functional sense of
[[def-subgaussian-variable-and-vector]]. Put $\widehat\mu=P_VY$. Then
$\widehat\mu-\mu=P_V\varepsilon$.
If $r=0$ or $\sigma^2=0$, this error is zero almost surely. If $r\ge1$ and
$\sigma^2>0$, for every $t>0$,

$$\mathbb P\bigl(\|\widehat\mu-\mu\|_2^2>t\bigr)\le 2\cdot6^r\exp\!\left(-\frac{t}{8\sigma^2}\right).$$

Consequently, for every $0<\delta<1$,

$$\mathbb P\!\left(\frac1n\|\widehat\mu-\mu\|_2^2\le\frac{8\sigma^2}{n}\left[r\log6+\log\!\left(\frac2\delta\right)\right]\right)\ge1-\delta,$$

and

$$\mathbb E\left[\frac1n\|\widehat\mu-\mu\|_2^2\right]\le\frac{8\sigma^2}{n}\left(r\log6+\log2+\frac{13}{10}\right).$$
For $r\ge1$, both bounds are at most
$C\sigma^2(r+\log(1/\delta))/n$ and $C\sigma^2r/n$, respectively, for a
universal constant $C$. In the fixed-design model $Y=X\theta^*+\varepsilon$
with $\mu=X\theta^*\in\operatorname{col}(X)$, this is the fitted vector of
[[def-fixed-design-projection-estimator]].

## Facts & Assumptions

**Given:** A fixed subspace $V\subseteq\mathbb R^n$, a mean vector $\mu\in V$, and centered vector noise satisfying the stated proxy inequality.

[F1] A centered vector $Z\in\mathbb R^n$ is sub-Gaussian with proxy $\sigma^2$ when $\mathbb E e^{\lambda\langle u,Z\rangle}\le e^{\sigma^2\lambda^2\|u\|_2^2/2}$ for all $u\in\mathbb R^n$ and $\lambda\in\mathbb R$ ([[def-subgaussian-variable-and-vector]]).

[F2] A centered sub-Gaussian vector in $\mathbb R^q$ with proxy $\sigma^2$ obeys
$$\mathbb P(\|Z\|_2\ge a)\le2(1+2/\epsilon)^q \exp\!\left(-\frac{(1-\epsilon)^2a^2}{2\sigma^2}\right)$$
for $a>0$, $0<\epsilon<1$, and $\sigma^2>0$; proxy zero gives zero tail
([[thm-finite-subgaussian-maximum-and-epsilon-net]]).

[F3] Orthogonal projection has its component in the subspace and its residual orthogonal to that subspace ([[def-orthogonal-projection]]).

[F4] A finite-dimensional subspace has an orthonormal basis, including the empty basis in dimension zero ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F5] The projection is linear and contractive ([[lem-finite-dimensional-projection-is-linear-and-contractive]]).

[F7] In a fixed-design model, the fitted vector is the projection of the observation onto the design column space ([[def-fixed-design-projection-estimator]]).

[F8] Probability is countably subadditive ([[lem-probability-measure-basic-identities]]).

[F9] Risk is the expected loss of a decision rule under the sampling law ([[def-loss-function-and-risk]]).

[F10] Finite linear combinations of integrable random variables are integrable, and expectation is linear; hence linear combinations of the centered coordinates of $\varepsilon$ are centered ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[F11] The natural logarithm is the inverse of $\exp$, is strictly increasing, and satisfies the product law and $\log 1=0$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

[F12] For $T\ge0$, $c>0$, $t_0\ge0$, $h=c/2$, and $N\in\mathbb N$,
$$\min(T,t_0+Nh)\le t_0+h\sum_{j<N}\mathbf1_{\{T>t_0+jh\}}.$$ If
$\mathbb P(T>t)\le A\exp(-t/c)$ and $t_0=c\log A$, monotone convergence
and expectation linearity, with the Archimedean property giving
$t_0+Nh\to\infty$, bound $\mathbb ET$ by
$t_0+h\sum_{j\ge0}\exp(-j/2)$. The exponential series gives
$\exp(1/2)\ge13/8$. Set $q=\exp(-1/2)=1/\exp(1/2)\le8/13<1$; the addition
law gives $\exp(-j/2)=q^j$ by induction, and the geometric-series formula
gives $\sum_{j\ge0}\exp(-j/2)=1/(1-q)\le13/5$
([[thm-monotone-convergence-for-the-integral]], [[thm-of-archimedean]],
[[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]],
[[def-real-exponential-function-and-e]], [[def-integer-power]],
[[thm-geometric-series]]).

## Proof

1.1 If $r\ge1$, choose an orthonormal basis $\phi_1,\ldots,\phi_r$ of $V$ by [F4] and form the coordinate vector $Z=(\langle\varepsilon,\phi_j\rangle)_{j=1}^r$. Each coordinate is integrable and centered by [F10]. For any $u\in\mathbb R^r$ and $\lambda\in\mathbb R$, $\mathbb E e^{\lambda\langle u,Z\rangle} =\mathbb E e^{\lambda\langle\sum_j u_j\phi_j,\varepsilon\rangle} \le e^{\sigma^2\lambda^2\|u\|_2^2/2}$ by [F1], since the basis is orthonormal. Thus $Z$ is a centered sub-Gaussian vector with the same proxy. [F1, F4, F10, algebra]

2.1 For $\sigma^2>0$, apply [F2] with $\epsilon=1/2$ to $Z$. Since $(1+2/\epsilon)^r=5^r\le6^r$ and $(1-\epsilon)^2/2=1/8$, this gives $\mathbb P(\|Z\|_2^2>t)\le2\cdot6^r e^{-t/(8\sigma^2)}$. The basis coordinates identify $\|Z\|_2=\|P_V\varepsilon\|_2$ by [F3] and uniqueness of projection. If $\sigma^2=0$, [F2] gives zero probability that this norm exceeds any positive threshold. [F2, F3, step 1.1, algebra]

3.1 By [F5], $\widehat\mu-\mu=P_V(\mu+\varepsilon)-\mu =P_V\varepsilon$, because $P_V\mu=\mu$. If $r=0$, then $V=\{0\}$ and $\mu=0$, so the error is zero; if $\sigma^2=0$, step 2.1 gives the same conclusion. For $\sigma^2=0$, the zero tail in step 2.1 gives $\mathbb P(\|P_V\varepsilon\|_2^2>1/j)=0$ for each integer $j\ge1$; this positive-norm event is their countable union, so [F8] gives probability zero. The positive-rank, positive-proxy tail is step 2.1. [F5, F8, step 2.1, given]

3.2 For $r\ge1$ and $\sigma^2>0$, use step 2.1 with $t=8\sigma^2[r\log6+\log(2/\delta)]$; [F11] makes this threshold positive, and the right side is $\delta$, proving the probability bound after division by $n$. [F11, step 2.1, algebra]

4.1 Put $A=2\cdot6^r$, $c=8\sigma^2$, $h=c/2$, $t_0=c\log A$, and $T=\|\widehat\mu-\mu\|_2^2$. In the positive-rank, positive-proxy case, the pointwise bound in [F12], expectation linearity [F10], and monotone convergence give $\mathbb E T\le t_0+h\sum_{j\ge0}\mathbb P(T>t_0+jh)$. Step 2.1 and [F11] bound each probability by $\exp(-j/2)$; [F12] bounds their sum by $13/5$. Hence $\mathbb E T\le c(\log A+13/10)$. By [F11], $\log A=\log2+r\log6$; division by $n$ gives the stated expected-error bound. By [F9], it is the expected risk under the squared fitted-value loss. The zero-error cases in step 3.1 also satisfy it. [F9, F10, F11, F12, step 2.1, step 3.1, algebra]

5.1 For a fixed-design model with $\mu=X\theta^*\in\operatorname{col}(X)$, take $V=\operatorname{col}(X)$. [F7] identifies $\widehat\mu$ with the estimator in [[def-fixed-design-projection-estimator]], so the displayed bounds apply to that fitted vector. [F7, given] ∎
