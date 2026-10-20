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
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
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

Assume Countable Choice. Let $\sigma\in\mathcal M_{\mathrm{pt}}$, let $\varphi\in C_c^\infty(\mathbb R)$, and let $K\subseteq\mathbb R$ be compact. Then the convolution

$$g(x)=\int_{\mathbb R}\sigma(x-t)\varphi(t)\,dt$$

is a uniform limit on $K$ of finite sums $x\mapsto c+\sum_{j=1}^m a_j\sigma(x+b_j)$, hence of single-hidden-layer networks with activation $\sigma$.

## Statement references

[Leshno et al., proof of Theorem 1, convolution and Riemann-sum step](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Moreau, Chapter 2 §2.3, convolution reduction](https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $\sigma\in\mathcal M_{\mathrm{pt}}$, a test function $\varphi$, and a compact interval containing $K$.

[F1] The activation is pointwise bounded on compact intervals and its discontinuity set lies in a closed null set ([[def-activation-class-locally-essentially-bounded-ae-continuous]]).

[F2] A bounded function on a compact interval whose discontinuity set is null is Riemann integrable under Countable Choice, and its Riemann and Lebesgue integrals agree ([[cor-riemann-integrability-and-lebesgue-null-discontinuity-sets]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F3] A compact null set has open covers of arbitrarily small measure, and Lebesgue measure is translation invariant ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F4] A finite sum $c+\sum_j a_j\sigma(x+b_j)$ is a network from [F1] with input weight $1$ in each unit ([[def-single-hidden-layer-network]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]); it is used by [F2] for Lebesgue integration.

## Proof

1.1 Choose $R>0$ with $\operatorname{supp}\varphi\subseteq[-R,R]$ and a compact interval $J$ containing $K-[-R,R]$. Put $C=\overline{D_\sigma}\cap J$, where $D_\sigma$ is the discontinuity set of $\sigma$. Then $C$ is compact and null. For each $x\in K$, the bounded function $t\mapsto\sigma(x-t)\varphi(t)$ on $[-R,R]$ has discontinuities only in $x-D_\sigma$, a null set; by [F2] its Riemann integral equals the Lebesgue integral defining $g(x)$. [given, F1, F2, A1]

2.1 Fix $\delta>0$. By [F3] and compactness, cover $C$ by a finite union $U$ of open intervals with total length less than $\delta$. On the compact set $J\setminus U$, $\sigma$ is continuous and therefore uniformly continuous; it is also bounded on $J$ by [F1]. Since $\varphi$ is uniformly continuous, the products $\sigma(x-t)\varphi(t)$ have a common modulus of continuity on every grid cell for which $x-t\notin U$, uniformly over $x\in K$. [step 1.1, F1, F3, A1, construct]

3.1 Partition $[-R,R]$ into intervals of mesh at most $h$, choose one tag $t_i$ in each interval of length $h_i$, and form $S_h(x)=\sum_i h_i\varphi(t_i)\sigma(x-t_i)$. For fixed $x$, cells whose translate meets $U$ have total length at most $|U|+2Nh$, where $N$ is the number of component intervals of $U$. Their total integral and sum error is at most twice this length times $\sup_J|\sigma|\sup|\varphi|$. On all other cells the common modulus from step 2.1 bounds the total error by $2R$ times that modulus at $h$. Thus $\sup_{x\in K}|g(x)-S_h(x)|\le 2\sup_J|\sigma|\sup|\varphi|\,(\delta+2Nh)+2R\,\omega(h)$, where $\omega(h)\to0$ as $h\to0$ and depends only on $J,U,\sigma,\varphi$. First choose $\delta$ arbitrarily small, then choose the grid mesh $h$ sufficiently small. The right side tends to zero, so these finite sums converge uniformly to $g$. [step 1.1, step 2.1, F3, A1, algebra]

4.1 Each term $h_i\varphi(t_i)\sigma(x-t_i)$ is a hidden unit with bias $-t_i$ and output weight $h_i\varphi(t_i)$. Hence every $S_h$ is a network by [F4], proving the claim. [step 3.1, F4] ∎

