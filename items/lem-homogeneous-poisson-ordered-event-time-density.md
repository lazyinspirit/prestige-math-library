---
id: lem-homogeneous-poisson-ordered-event-time-density
kind: lemma
title: "Finite-window homogeneous Poisson construction and ordered event-time density"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-poisson-and-cox-point-process
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-borel-sets-are-lebesgue-measurable
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-nonnegative-weighted-sums-of-measures
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph G. Rasmussen, Lecture Notes: Temporal Point Processes and the Conditional Intensity Function"
      url: "https://arxiv.org/pdf/1806.00221"
    - title: "Robert E. Kass, Uri T. Eden, and Emery N. Brown, Analysis of Neural Data, Chapter 19: Point Processes"
      url: "https://web.math.ku.dk/~susanne/BSc/Kass2014_Chapter_PointProcesses.pdf"
---

## Statement

Let $T>0$, $\theta>0$, and let $S=(0,T]$ carry its subspace topology and
Borel sigma-algebra. This space is Hausdorff as a subspace of $\mathbb R$;
rational intervals give a countable base; and each $x\in S$ has a compact
neighborhood $[x-\delta,x+\delta]\cap S$ for some $0<\delta<x$. Let $\ell$
be Lebesgue measure restricted to $S$. There exists a Poisson point process
on $S$ with intensity measure $\nu_\theta(B)=\theta\ell(B)$. Its total
count is finite almost surely, its event times have no ties almost surely,
and for every integer $m\ge0$ the joint density of the ordered event times
$$0<t_1<\cdots<t_m\le T,\qquad N(S)=m,$$
with respect to $m$-dimensional Lebesgue measure on the ordered simplex is
$$e^{-\theta T}\theta^m.$$
For $m>0$, conditional on $N(S)=m$, the ordered event times have density
$m!/T^m$. For $m=0$ the empty-pattern probability is $e^{-\theta T}$.

## Facts & Assumptions

**Given:** Countable Choice, $T>0$, $\theta>0$, and the Borel time interval $S=(0,T]$ with its usual topology.

[A1] Under Countable Choice, Borel sets are Lebesgue measurable; Lebesgue measure is complete and equals length on intervals and boxes. ([[def-countable-choice]], [[thm-borel-sets-are-lebesgue-measurable]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F1] For finite $\lambda>0$, the scalar Poisson law has masses $e^{-\lambda}\lambda^k/k!$, these masses sum to one, and its mean is $\lambda$; at $\lambda=0$ it is concentrated at zero. ([[def-scalar-poisson-count-law]], [[lem-poisson-count-law-normalization-and-moments]])

[F2] Lebesgue measure of an interval is its length; every singleton has measure zero. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F3] Finite products of probability measures exist, satisfy the rectangle product formula, and are unique among measures with that formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F4] A countable nonnegative weighted sum of measures is a measure. ([[thm-nonnegative-weighted-sums-of-measures]])

[F5] A point process is Poisson with intensity $\nu$ when every finite pairwise-disjoint Borel family has independent Poisson counts with means $\nu(B)$. ([[def-poisson-and-cox-point-process]])

[F6] Each $\delta_x$ is a probability measure. ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]])

[F7] For a nonnegative product-measurable function, Tonelli permits iterated integration. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F8] A point process on a locally compact, second-countable Hausdorff Borel space is a measurable random locally finite counting measure, with measurability tested by its evaluation maps. ([[def-random-measure-and-locally-finite-point-process]])

## Proof

1.1 Put $\lambda=\theta T$ and let $Q=\ell/T$, a probability measure on $S$ by [A1] and [F2]. For each $n\ge0$, use the finite product probability $Q^{\otimes n}$ on $S^n$; for $n=0$, $S^0$ is the singleton empty tuple with unit mass. Form the countable disjoint union $\Omega=\coprod_{n\ge0}(\{n\}\times S^n)$ with the sigma-algebra whose sections in each component are product-measurable. Put $p_n=e^{-\lambda}\lambda^n/n!$ and define $P(E)=\sum_{n\ge0}p_nQ^{\otimes n}(E_n)$. [F1] gives $\sum_np_n=1$; [F4] makes $P$ a probability measure. On component $n$, set $\eta=\sum_{i=1}^n\delta_{x_i}$. Every evaluation $\eta(B)=\sum_{i=1}^n1_B(x_i)$ is measurable, and each realization has at most $n$ atoms, so it is locally finite. The space $S$ is locally compact, second countable, and Hausdorff by the displayed neighborhood and base checks; hence [F8] makes $\eta$ a point process. [A1, F1, F2, F3, F4, F6, F8, given, construct]

1.2 Let $B_1,\ldots,B_r$ be disjoint Borel subsets of $S$, put $B_0=S\setminus\bigcup_{j=1}^rB_j$, and set $q_j=Q(B_j)$. Conditional on component $n$, a count vector $(k_0,\ldots,k_r)$ with sum $n$ occurs for $n!/\prod_{j=0}^r k_j!$ coordinate assignments; each assignment has probability $\prod_{j=0}^r q_j^{k_j}$ by [F3]. Multiplying by $p_n$ and summing over $k_0\ge0$ gives, for fixed $k_1,\ldots,k_r\in\mathbb N_0$, $P\{\eta(B_j)=k_j,\ 1\le j\le r\}=\sum_{k_0=0}^\infty e^{-\lambda}\frac{(\lambda q_0)^{k_0}}{k_0!}\prod_{j=1}^r\frac{(\lambda q_j)^{k_j}}{k_j!}=e^{-\lambda}\prod_{j=1}^r\frac{(\lambda q_j)^{k_j}}{k_j!}\sum_{k_0=0}^\infty\frac{(\lambda q_0)^{k_0}}{k_0!}=\prod_{j=1}^r\left[e^{-\lambda q_j}\frac{(\lambda q_j)^{k_j}}{k_j!}\right].$ Here $0^0=1$ for zero-mass cells, and $q_0=1-\sum_{j=1}^rq_j$. The exponential series evaluates the sum, and $\lambda q_j=\theta\ell(B_j)$. Thus the joint count mass factors into the independent Poisson masses with means $\nu_\theta(B_j)$; [F5] makes $\eta$ a Poisson point process of intensity $\nu_\theta$. [F1, F2, F3, F5, algebra]

2.1 Conditional on component $n$, the coordinate vector has density $T^{-n}$ on $S^n$. For each pair $i<j$, the diagonal $\{x_i=x_j\}$ is Borel; its section in coordinate $x_j$ is a singleton and has Lebesgue measure zero by [F2], so [F7] gives product measure zero. The finite union of pairwise diagonals is null. Coordinate permutations preserve the product-uniform law: they preserve the rectangle formula in [F3], and uniqueness there extends that equality from rectangles to the product sigma-algebra. Thus the $n!$ ordering regions have equal measure and partition the cube outside the diagonals. More precisely, for every Borel $C\subseteq\Delta_n$, the preimage of $C$ under the Borel sorting map, off the diagonals, is the disjoint union of the $n!$ coordinate permutations of $C$. Each has product-uniform probability $T^{-n}\ell^n(C)$, so sorting gives conditional density $n!/T^n$ on the ordered simplex. Multiplying by $p_n=e^{-\theta T}(\theta T)^n/n!$ gives joint density $e^{-\theta T}\theta^n$. The endpoint set where any coordinate equals $T$ has product measure zero because $Q(\{T\})=0$ by [F2] and [F3]; thus the same density applies to the stated simplex with $t_n\le T$. For $n=0$, the construction gives empty-pattern mass $p_0=e^{-\theta T}$. Each component has tie probability zero, and their countable mixture also has tie probability zero. This proves the event-time density and simplicity claims. [F1, F2, F3, F7, step 1.1, step 1.2, algebra] ∎

## Source notes

Rasmussen derives the homogeneous Poisson event-time likelihood as a special case of the conditional-intensity formula. Kass, Eden, and Brown derive the ordered event-time density from independent Poisson increments. The local construction and diagonal-null argument provide a finite-window existence and simplicity proof.
