---
id: lem-network-approximates-smooth-activation-convolutions
kind: lemma
title: "Networks approximate smooth convolutions of the activation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-activation-class-locally-essentially-bounded-ae-continuous
  - def-countable-choice
  - def-single-hidden-layer-network
  - cor-riemann-integrability-and-lebesgue-null-discontinuity-sets
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-lebesgue-outer-regularity-for-arbitrary-subsets
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-heine-cantor-r
  - thm-heine-borel-rn
  - cor-archimedean-reciprocal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, proof of Theorem 1, convolution and Riemann-sum step"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Yves Moreau, Dynamical Neural Networks and Composition Networks for System Modeling, Chapter 2 §2.3"
      url: "https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf"
---

## Statement

Assume Countable Choice. Let $\sigma\in\mathcal M_{\mathrm{pt}}$, let $\varphi\in C_c^\infty(\mathbb R;\mathbb C)$, and let $K\subseteq\mathbb R$ be compact. Define the convolution

$$g(x)=\int_{\mathbb R}\sigma(x-t)\varphi(t)\,dt.$$

Then $\operatorname{Re}g$ and $\operatorname{Im}g$ are each uniform limits on $K$ of finite sums $x\mapsto c+\sum_{j=1}^m a_j\sigma(x+b_j)$ with real coefficients, hence of single-hidden-layer networks with activation $\sigma$. In particular, if $\varphi$ is real-valued, then $g$ itself is such a uniform limit.

## Statement references

[Leshno et al., proof of Theorem 1, convolution and Riemann-sum step](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Moreau, Chapter 2 §2.3, convolution reduction](https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $\sigma\in\mathcal M_{\mathrm{pt}}$, a test function $\varphi$, and a compact interval containing $K$.

[F1] The activation is pointwise bounded on compact intervals and its discontinuity set lies in a closed null set ([[def-activation-class-locally-essentially-bounded-ae-continuous]]).

[F2] A bounded function on a compact interval whose discontinuity set is null is Riemann integrable under Countable Choice, and its Riemann and Lebesgue integrals agree ([[cor-riemann-integrability-and-lebesgue-null-discontinuity-sets]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F3] A compact null set has open covers of arbitrarily small measure, and Lebesgue measure is translation invariant ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F4] A finite sum $c+\sum_j a_j\sigma(x+b_j)$ is a network from [F1] with input weight $1$ in each unit ([[def-single-hidden-layer-network]]).

[F5] Every continuous real function on a compact subset of $\mathbb R$ is uniformly continuous ([[thm-heine-cantor-r]]).

[F6] Compact subsets of $\mathbb R$ are bounded, so a compact interval can contain $K-[-R,R]$ ([[thm-heine-borel-rn]]).

[F7] Reciprocals $1/n$ tend to zero, and for every positive mesh tolerance $\eta$ there is an integer $m$ with $2R/m<\eta$, so $[-R,R]$ has uniform partitions of arbitrarily small mesh ([[cor-archimedean-reciprocal]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]); it is used by [F2] for Lebesgue integration.

[F8] Under Countable Choice, Lebesgue measure is complete: every subset of a measurable null set is measurable and null ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F9] The invertible linear map $t\mapsto-t$ has absolute determinant one, so it preserves Lebesgue measurability and measure under Countable Choice ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

## Proof

1.1 Write $\varphi=\varphi_R+i\varphi_I$ with real-valued smooth compactly supported components, and put $g_R=\sigma*\varphi_R$ and $g_I=\sigma*\varphi_I$, so $g=g_R+ig_I$. Choose $R>0$ with $\operatorname{supp}\varphi\subseteq[-R,R]$ and a compact interval $J$ containing $K-[-R,R]$ by [F6]. Put $C=\overline{D_\sigma}\cap J$, where $D_\sigma$ is the discontinuity set of $\sigma$. Then $C$ is compact and null. Reflection [F9] makes $-C$ measurable and null, and translation invariance [F3] makes $x-C=x+(-C)$ measurable and null for every $x\in K$. The discontinuities on $[-R,R]$ of each bounded real function $t\mapsto\sigma(x-t)\varphi_\alpha(t)$, $\alpha\in\{R,I\}$, lie in $(x-D_\sigma)\cap[-R,R]\subseteq x-C$ and hence are measurable and null by completeness [F8]. By [F2], its Riemann integral equals the Lebesgue integral defining $g_\alpha(x)$. [given, F1, F2, F3, F6, F8, F9, A1]

2.1 Fix $\delta>0$. By [F3] and compactness, cover $C$ by a finite union $U$ of open intervals with total length less than $\delta$. On the compact set $J\setminus U$, $\sigma$ is continuous and therefore uniformly continuous by [F5]; it is also bounded on $J$ by [F1]. Both $\varphi_R$ and $\varphi_I$ are uniformly continuous by [F5]. Hence the two products $\sigma(x-t)\varphi_\alpha(t)$, $\alpha\in\{R,I\}$, have a common modulus of continuity on every grid cell for which $x-t\notin U$, uniformly over $x\in K$. [step 1.1, F1, F3, F5, A1, construct]

3.1 For each integer $n\ge1$, use [F3] and compactness to cover $C$ by a finite union $U_n$ of open intervals with $|U_n|<1/n$; Countable Choice selects this sequence of covers. Let $N_n$ be the number of component intervals. For each $\alpha\in\{R,I\}$, use [F7] to choose a uniform partition of $[-R,R]$ with mesh $h_n$, midpoint tags $t_i$, and define $S_{n,\alpha}(x)=\sum_i h_i\varphi_\alpha(t_i)\sigma(x-t_i)$. For fixed $x$, cells whose translate meets $U_n$ have total length at most $|U_n|+2N_nh_n$. Their total integral and sum error is at most twice this length times $\sup_J|\sigma|\max_{\alpha}\sup|\varphi_\alpha|$. On all other cells the common modulus from step 2.1 bounds the total error by $2R$ times that modulus at $h_n$. Choose the mesh sufficiently small that the terms involving $N_nh_n$ and the modulus are below $1/n$. Thus for both components the uniform error is bounded by a constant times $1/n$, and tends to zero. Each $S_{n,\alpha}$ is a finite sum of translates. [step 1.1, step 2.1, F3, F7, A1, choose, algebra]

4.1 Each term $h_i\varphi_\alpha(t_i)\sigma(x-t_i)$ is a hidden unit with bias $-t_i$ and real output weight $h_i\varphi_\alpha(t_i)$. Hence every $S_{n,\alpha}$ is a network by [F4], proving the claim for both components; for real $\varphi$, $g=g_R$. [step 3.1, F4] ∎

