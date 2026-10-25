---
id: thm-poisson-mecke-identity
kind: theorem
title: "Mecke identity for locally finite Poisson point processes"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dirac-measure
  - def-law-or-distribution-of-a-random-element
  - def-measure
  - def-measure-kernel-and-probability-kernel
  - def-nonnegative-extended-series
  - def-poisson-and-cox-point-process
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-random-measure-and-locally-finite-point-process
  - def-scalar-poisson-count-law
  - lem-deletion-of-one-point-is-measurable
  - lem-law-of-a-random-element-is-a-probability-measure
  - lem-poisson-count-law-normalization-and-moments
  - prop-dirac-measure-is-a-probability-measure
  - thm-dynkin-pi-lambda
  - thm-measurability-of-integration-against-a-kernel
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-weighted-sums-of-measures
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 4, Theorem 4.4 proof, PDF pp.42–44 (printed pp.30–32): mixed-binomial Mecke calculation for finite intensity and countable independent-cell extension; Theorem 4.1 states the identity."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 3, §3.2, PDF pp.48–49: Campbell–Mecke formula and Poisson add-one-point interpretation; introductory cross-check."
verification:
  precheck: pending
---

## Statement

Assume AC and Countable Choice as carried by the point-process supplier. Let $\eta$ be a Poisson point process on $\mathbb R^d$ with locally finite, sigma-finite intensity measure $\nu$. For every nonnegative function $h$ measurable on the product of the Borel and configuration evaluation sigma-algebras,

$$\mathbb E\int h(x,\eta-\delta_x)\,\eta(dx)=\int_{\mathbb R^d}\mathbb E[h(x,\eta)]\,\nu(dx).$$

At each counted occurrence $x$, $\eta-\delta_x$ removes exactly one occurrence; coincident remaining occurrences stay. Equivalently, for every such nonnegative $f$,

$$\mathbb E\int f(x,\eta)\,\eta(dx)=\int_{\mathbb R^d}\mathbb E[f(x,\eta+\delta_x)]\,\nu(dx).$$

Both sides are extended nonnegative integrals.

## Facts & Assumptions

**Given:** AC, Countable Choice, a Poisson point process $\eta$ on $\mathbb R^d$ with locally finite sigma-finite intensity $\nu$, and nonnegative product-measurable integrands.

[A1] AC is carried by the transitive random-point-process supplier dependencies; the Mecke calculation below makes no choice. ([[def-axiom-of-choice]])

[A2] Countable Choice is carried by the transitive random-point-process supplier dependencies; the Mecke calculation below makes no choice. ([[def-countable-choice]])

[F1] A Poisson point process has independent counts on disjoint Borel sets, each with its specified scalar Poisson law; multiplicities are allowed. ([[def-poisson-and-cox-point-process]])

[F2] A point process is a measurable locally finite counting measure, its evaluation maps generate its sigma-algebra, and occurrences may repeat. ([[def-random-measure-and-locally-finite-point-process]])

[F3] The scalar Poisson masses are $p_n=e^{-\lambda}\lambda^n/n!$ and sum to one; in particular $np_n=\lambda p_{n-1}$. ([[def-scalar-poisson-count-law]], [[lem-poisson-count-law-normalization-and-moments]])

[F4] Finite product measures exist and have the rectangle formula; the product law of independent random elements is determined on the generating rectangle pi-system. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]], [[thm-dynkin-pi-lambda]])

[F5] Adding one occurrence is measurable from its evaluation formula; deleting one counted occurrence is measurable on $D=\{(x,\mu):\mu(\{x\})\ge1\}$. ([[def-random-measure-and-locally-finite-point-process]], [[lem-deletion-of-one-point-is-measurable]])

[F6] Nonnegative iterated integrals and increasing limits may be interchanged by Tonelli and monotone convergence. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-monotone-convergence-for-the-integral]])

[F7] A countable nonnegative weighted sum of measures is a measure. ([[thm-nonnegative-weighted-sums-of-measures]])

## Proof

**Given:** The stated Poisson point process $\eta$, intensity measure $\nu$, AC, and Countable Choice.

1.1 First assume $\lambda:=\nu(\mathbb R^d)<\infty$. If $\lambda=0$, then $\eta(\mathbb R^d)=0$ almost surely by [F1], so both identities are zero. If $\lambda>0$, put $Q_\nu=\nu/\lambda$ and $p_n=e^{-\lambda}\lambda^n/n!$. For each $n$, let $P_n$ be the law of $\sum_{j=1}^n\delta_{X_j}$ when $(X_1,\ldots,X_n)$ has product law $Q_\nu^{\otimes n}$, with $P_0$ the point mass at the zero measure. The countable weighted sum $P^*=\sum_{n\ge0}p_nP_n$ is a probability measure by the normalized Poisson masses [F3] and the countable weighted-sum result [F7]; evaluation maps of the finite Dirac sum are measurable by [F2]. [given, F1, F2, F3, F7, construct]

1.2 Now let $\nu$ be sigma-finite and locally finite. Partition $\mathbb R^d$ into the explicit bounded Borel cells $A_1=[-1,1)^d$ and $A_n=[-n,n)^d\setminus[-(n-1),n-1)^d$ for $n\ge2$. Let $\eta_i$ be the restriction of $\eta$ to $A_i$ and $\eta_{-i}$ its restriction to $A_i^c$. Each $\eta_i$ is a finite-intensity Poisson process. The two random configurations $\eta_i$ and $\eta_{-i}$ are independent: finite evaluation cylinders refine to disjoint Borel pieces in $A_i$ and $A_i^c$, whose counts are independent by [F1], and the generating rectangle pi-system extends this factorization to their evaluation sigma-algebras by [F4]. [given, F1, F2, F4, construct]

2.1 For disjoint Borel sets $B_1,\ldots,B_m$, add their complement as $B_0$ and put $q_j=Q_\nu(B_j)$. On the $n$th component the vector of counts has multinomial mass $n!\prod_{j=0}^m q_j^{k_j}/k_j!$ when $\sum_jk_j=n$. Mixing by $p_n$ and summing $k_0$ gives $$P^*(N(B_j)=k_j,1\le j\le m)=\prod_{j=1}^m e^{-\nu(B_j)}\frac{\nu(B_j)^{k_j}}{k_j!},$$ using the exponential series; hence $P^*$ has the defining independent Poisson counts [F1]. Any other Poisson process with finite $\nu$ has the same finite-dimensional evaluation laws: refine any finite family of Borel sets into its finitely many disjoint Boolean atoms, apply [F1] to their counts, and recover the original counts by summation. Evaluation cylinders form a generating pi-system for the configuration sigma-algebra [F2], so probability-measure uniqueness [F4] shows that $\eta$ has law $P^*$. [step 1.1, F1, F2, F3, F4, algebra]

3.1 For any nonnegative product-measurable $f$, represent $\eta$ by the mixture law from steps 1.1–1.2. Pathwise the integral against its finite counting measure is a sum over occurrences, so Tonelli [F6] gives $$\mathbb E\int f(x,\eta)\eta(dx)=\sum_{n\ge1}p_n\int_{(\mathbb R^d)^n}\sum_{i=1}^n f(x_i,\sum_{j=1}^n\delta_{x_j})\,Q_\nu^{\otimes n}(d\mathbf x).$$ Coordinate-permutation invariance of $Q_\nu^{\otimes n}$ makes the $n$ summands equal. Reindexing with $m=n-1$ and $np_n=\lambda p_{n-1}$ changes this to $$\lambda\sum_{m\ge0}p_m\int_{(\mathbb R^d)^{m+1}} f(x_1,\delta_{x_1}+\sum_{j=2}^{m+1}\delta_{x_j})\,Q_\nu^{\otimes(m+1)}(d\mathbf x).$$ Integrating first in $x_1$ and using $\nu=\lambda Q_\nu$, the inner mixture over $m$ remaining points is $\mathbb E[f(x,\eta+\delta_x)]$ by steps 1.1–1.2. This proves the add-one identity for finite total intensity. [step 1.1, step 2.1, F3, F4, F6, algebra]

4.1 Fix $i$. Independence makes the joint law of $(\eta_i,\eta_{-i})$ the product of their laws, as it agrees with that product on measurable rectangles [F4]. For each fixed background configuration $\mu$, the function $f_\mu(x,\zeta)=f(x,\zeta+\mu)$ is product-measurable by the addition evaluation formula in [F5]. Apply the finite-intensity add-one identity of step 3.1 to $\eta_i$ and $f_\mu$, then integrate over $\mu=\eta_{-i}$; this gives $$\mathbb E\int f(x,\eta)\eta_i(dx)=\int_{A_i}\mathbb E[f(x,\eta+\delta_x)]\nu(dx).$$ Summing over $i$ and using [F6] proves the add-one identity for $\nu$. [step 3.1, step 1.2, F4, F5, F6]

5.1 Let $g$ be the nonnegative integrand in the deletion formula, and put $D=\{(x,\mu):\mu(\{x\})\ge1\}$. Define $H(x,\mu)=g(x,\mu-\delta_x)$ on $D$ and $H=0$ off $D$; [F5] makes $H$ measurable. Apply the add-one identity of step 4.1 to $H$. At every occurrence counted by $\eta(dx)$, $(x,\eta)\in D$ and $H(x,\eta)=g(x,\eta-\delta_x)$; for every $x$, $(x,\eta+\delta_x)\in D$ and $H(x,\eta+\delta_x)=g(x,\eta)$. This gives the deletion identity. Since $\eta-\delta_x$ removes one unit mass, all other co-located occurrences remain. [step 4.1, F5, algebra]

6.1 Steps 1.1–4.1 establish both forms, including the zero-intensity boundary case and multiplicity convention. AC and Countable Choice [A1]–[A2] are inherited supplier assumptions; the local Mecke derivation itself uses no selection, and no DC is used. [A1, A2, step 1.1, step 2.1, step 3.1, step 1.2, step 4.1, step 5.1] ∎

## Sources

Last and Penrose, Chapter 4, Theorem 4.4 proof and Theorem 4.1 formulation; Baddeley, Lecture 3, Campbell–Mecke formula. The local derivation keeps finite- and sigma-finite intensity cases and multiplicities explicit.
