---
id: thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
kind: theorem
title: "Finite-intensity Poisson-process existence and mixed-binomial law"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-random-measure-and-locally-finite-point-process
  - lem-mean-measure-and-integrals-of-a-random-point-process
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - def-poisson-and-cox-point-process
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-nonnegative-weighted-sums-of-measures
  - lem-point-process-law-is-determined-by-count-fidi
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-finite-sigma-finite-and-semifinite-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
verification:
  precheck: pending
---

## Statement

Let $\nu$ be a finite Borel measure on $S$
([[def-finite-sigma-finite-and-semifinite-measures]]) and put $\lambda=\nu(S)$. A
Poisson point process of intensity $\nu$ exists. If $\lambda=0$ it is the zero
process. If $\lambda>0$, its law is the push-forward of
$$\sum_{n=0}^\infty e^{-\lambda}\frac{\lambda^n}{n!}\left(\frac{\nu}{\lambda}\right)^{\otimes n}$$
on the disjoint union $\coprod_{n\ge0}S^n$ under
$(x_1,\ldots,x_n)\mapsto\sum_{i=1}^n\delta_{x_i}$. Every Poisson point
process of finite total intensity has this same law. This is the
**mixed-binomial representation**: the total count is Poisson and, in the
construction, the $n$ locations in component $S^n$ have product law
$(\nu/\lambda)^{\otimes n}$.

## Facts & Assumptions

**Given:** A finite Borel measure $\nu$ on $S$, with total mass
$\lambda=\nu(S)$.

[F1] A Poisson point process has independent counts on disjoint Borel sets,
with scalar laws specified by their intensity measures.
([[def-poisson-and-cox-point-process]])

[F2] For finite $\lambda>0$, the mass of total count $n$ is
$e^{-\lambda}\lambda^n/n!$; these masses sum to one.
([[def-scalar-poisson-count-law]],
[[lem-poisson-count-law-normalization-and-moments]])

[F3] Finite products of probability measures exist and have the rectangle
product formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F4] A countable nonnegative weighted sum of measures is a measure.
([[thm-nonnegative-weighted-sums-of-measures]])

[F5] Equal finite-dimensional laws of count evaluations determine the point
process law. ([[lem-point-process-law-is-determined-by-count-fidi]])

[F6] Each $\delta_x$ is a probability measure and thus a counting measure.
([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]])

## Proof
**Proof technique:** direct.

1.1 If $\lambda=0$, take a one-point probability space and let $\eta$ be the zero measure. For every Borel $B$, $\nu(B)=0$, so $\eta(B)=0$ has the required Poisson law and every finite vector of counts is independent. [given, F1, construct]

1.2 Now suppose $\lambda>0$ and put $Q=\nu/\lambda$. Let $\Omega=\coprod_{n\ge0}(\{n\}\times S^n)$ with the sigma-algebra whose sections in every $S^n$ are product-measurable. For each $n$, the section map defines a probability measure $Q_n(A)=Q^{\otimes n}(A_n)$ on $\Omega$, by [F3]. The countable sum $P=\sum_{n\ge0}e^{-\lambda}\lambda^nQ_n/n!$ is a probability measure by [F2] and [F4]. [given, F2, F3, F4, construct]

1.3 On the component $(n,x_1,\ldots,x_n)$ define $\eta=\sum_{i=1}^n\delta_{x_i}$. For each Borel $B$, $\eta(B)=\sum_{i=1}^n1_B(x_i)$ is measurable on each component, so $\eta$ is a random locally finite counting measure. [F3, F6, construct]

1.4 Let $B_1,\ldots,B_m$ be pairwise-disjoint Borel sets and let $B_0=S\setminus\bigcup_{j=1}^mB_j$. Put $q_j=Q(B_j)$. Conditional on the component $S^n$, independence of the $n$ coordinates gives, for $k_0+\cdots+k_m=n$, $P\{\eta(B_j)=k_j,\ 0\le j\le m\mid n\}=\frac{n!}{\prod_{j=0}^m k_j!}\prod_{j=0}^m q_j^{k_j}$, where $0^0=1$. This is the multinomial count of coordinate assignments to the partition $B_0,\ldots,B_m$. [given, F3, algebra]

2.1 Put $K=\sum_{j=1}^m k_j$. Summing the conditional multinomial masses in step 1.4 over $k_0\ge0$ gives $P\{\eta(B_j)=k_j,1\le j\le m\}=e^{-\lambda}\prod_{j=1}^m\frac{(\lambda q_j)^{k_j}}{k_j!}\sum_{k_0=0}^\infty\frac{(\lambda q_0)^{k_0}}{k_0!}=\prod_{j=1}^m e^{-\lambda q_j}\frac{(\lambda q_j)^{k_j}}{k_j!}=\prod_{j=1}^m e^{-\nu(B_j)}\frac{\nu(B_j)^{k_j}}{k_j!}$, since the exponential series gives the sum as $e^{\lambda q_0}$ and $1-q_0=\sum_{j=1}^m q_j$. Thus these counts are independent Poisson variables with respective means $\nu(B_j)$, proving existence with the required count laws. [step 1.4, F1, F2, algebra]

3.1 For uniqueness in distribution, take any finite family of Borel sets and partition $S$ into the finitely many atoms generated by that family. Each original count is a sum of counts on these disjoint atoms. For either process, [F1] gives independent Poisson counts on those atoms with the same means $\nu(C)$, so the atom-count vectors have the same product law and every original finite evaluation vector has the same law. The point-process law characterization [F5] then gives equality of the laws. [F1, F5, step 2.1]

4.1 Steps 1.1-3.1 prove the zero-mass case, construct the mixed-binomial law for positive finite mass, and show that every finite-intensity Poisson process has that law. No choice principle is used; only finite products and a specified countable sum occur. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎