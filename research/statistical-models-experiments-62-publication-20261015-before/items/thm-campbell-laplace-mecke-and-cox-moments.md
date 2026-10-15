---
id: thm-campbell-laplace-mecke-and-cox-moments
kind: theorem
title: "Campbell, Laplace, Mecke, and Cox moment formulas"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-random-measure-and-locally-finite-point-process
  - lem-mean-measure-and-integrals-of-a-random-point-process
  - lem-locally-compact-second-countable-spaces-have-compact-exhaustions
  - lem-deletion-of-one-point-is-measurable
  - def-poisson-and-cox-point-process
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - lem-poisson-integral-moment-identities
  - thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
  - lem-finite-intensity-mecke-identity
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dynkin-pi-lambda
  - def-measure-kernel-and-probability-kernel
  - def-conditional-law-given-a-random-element
  - thm-measurability-of-integration-against-a-kernel
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - def-moments-variance-and-covariance
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-nonnegative-weighted-sums-of-measures
  - def-compact-space
  - def-hausdorff-space
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-independent-random-elements
  - def-finite-sigma-finite-and-semifinite-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 2, Proposition 2.7; Chapter 3, Theorem 3.9; Chapter 4, Theorems 4.1, 4.5 and 4.7; Chapter 13, Proposition 13.6, PDF pp. 25-26, 35-36, 39-47 and 142."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 1, PDF pp. 1-25: independent-count definition and finite-window construction as an applied cross-check; full Campbell, Mecke, converse, and Cox moment arguments are supplied locally."
verification:
  precheck: pass
---

## Statement

Let $\eta$ be a Poisson point process on the locally compact, second-countable Hausdorff space $S$, with locally finite, sigma-finite intensity measure $\nu$. For every nonnegative Borel $f$, its Campbell and Laplace formulas are $\mathbb E[\eta(f)]=\nu(f)$ and $\mathbb E[e^{-\eta(f)}]=e^{-\nu(1-e^{-f})}$, with $e^{-\infty}=0$. For every nonnegative $g$ measurable for the product of the Borel and evaluation sigma-algebras on $S\times\mathcal N_{\mathrm{lf}}(S)$, the add-one Mecke formula and its deletion form are $\mathbb E[\int g(x,\eta)\,\eta(dx)]=\int\mathbb E[g(x,\eta+\delta_x)]\,\nu(dx)$ and $\mathbb E[\int g(x,\eta-\delta_x)\,\eta(dx)]=\int\mathbb E[g(x,\eta)]\,\nu(dx)$; in the second integral one occurrence is deleted at each counted point, with multiplicity retained. Conversely, a locally finite point process with locally finite, sigma-finite mean measure $\nu$ is Poisson if it satisfies the deletion identity for every such $g$.

If $\eta$ is Cox directed by a random locally finite measure $\xi$ with supplied probability kernel $K$, write $P_\xi$ for the law of $\xi$ and $\nu(B)=\mathbb E\xi(B)$ for its mean measure. Then for $P_\xi$-almost every $\mu$, $\int e^{-\zeta(f)}K(\mu,d\zeta)=e^{-\mu(1-e^{-f})}$ and $\int\zeta(f)^2K(\mu,d\zeta)=\mu(f^2)+\mu(f)^2$. Consequently $\mathbb E\eta(f)=\nu(f)$, $\mathbb E[e^{-\eta(f)}]=\mathbb E[e^{-\xi(1-e^{-f})}]$, and $\mathbb E[\eta(f)^2]=\nu(f^2)+\mathbb E[\xi(f)^2]$, all as extended nonnegative identities. Thus $\mathbb E[\eta(f)^2]<\infty$ exactly when $\int f^2\,d\nu<\infty$ and $\mathbb E[\xi(f)^2]<\infty$; then $\operatorname{Var}(\eta(f))=\nu(f^2)+\operatorname{Var}(\xi(f))$. All formulas allow multiplicities and assert neither simplicity under diffuse intensity nor uniqueness of a Cox directing law.

## Facts & Assumptions

**Given:** The stated point-process and Cox models and nonnegative measurable test functions.

[F1] The mean measure $\nu(B)=\mathbb E\zeta(B)$ is a measure, nonnegative random integrals are measurable, and $\mathbb E\zeta(f)=\int f\,d\nu$ for every nonnegative Borel $f$. ([[lem-mean-measure-and-integrals-of-a-random-point-process]])

[F2] The finite-intensity Mecke identity holds for every nonnegative measurable integrand. ([[lem-finite-intensity-mecke-identity]])

[F3] A compact exhaustion exists; compact sets in a Hausdorff space are closed; sigma-finiteness means a countable finite-measure Borel cover; and independent counts mean independence of the generated sigma-algebras. ([[lem-locally-compact-second-countable-spaces-have-compact-exhaustions]], [[def-compact-space]], [[def-hausdorff-space]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-finite-sigma-finite-and-semifinite-measures]], [[def-poisson-and-cox-point-process]], [[def-independent-random-elements]], [[def-random-measure-and-locally-finite-point-process]])

[F4] Independence of count-generated sigma-algebras follows by extending cylinder-event factorization from a generating pi-system; finite product laws are unique and nonnegative iterated integrals obey Tonelli. ([[thm-dynkin-pi-lambda]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F5] The addition map $(x,\mu)\mapsto\mu+\delta_x$ and the deletion map on $D=\{(x,\mu):\mu(\{x\})\ge1\}$ are measurable in the evaluation sigma-algebras; the evaluation kernel permits measurable nonnegative random integrals. ([[def-random-measure-and-locally-finite-point-process]], [[lem-deletion-of-one-point-is-measurable]], [[def-measure-kernel-and-probability-kernel]], [[thm-measurability-of-integration-against-a-kernel]])

[F6] A Poisson random integral satisfies $\mathbb E\eta(f)=\nu(f)$ and $\mathbb E\eta(f)^2=\nu(f^2)+\nu(f)^2$, including extended values. ([[lem-poisson-integral-moment-identities]])

[F7] Increasing simple approximations and monotone convergence apply to nonnegative measurable functions and integrals. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-monotone-convergence-for-the-integral]])

[F8] A Cox model supplies a regular conditional probability kernel $K$; integration of a nonnegative measurable function against that kernel gives the joint expectation by iterated integration. ([[def-conditional-law-given-a-random-element]], [[def-measure-kernel-and-probability-kernel]], [[thm-measurability-of-integration-against-a-kernel]])

[F9] The variance of a square-integrable random variable is $\mathbb E[X^2]-(\mathbb E X)^2$, and the scalar Poisson mass formula has $e^{-t}t^k/k!$ masses. ([[def-moments-variance-and-covariance]], [[def-scalar-poisson-count-law]], [[lem-poisson-count-law-normalization-and-moments]], [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]])

## Proof
**Proof technique:** direct.

1.1 For every Borel $B$ with $\nu(B)<\infty$, the defining Poisson law and the scalar mean identity [F9] give $\mathbb E\eta(B)=\nu(B)$; if $\nu(B)=\infty$, the extended-count convention gives the same equality. Apply [F1] with $\zeta=\eta$ to obtain Campbell's formula for every nonnegative Borel $f$. [given, F1, F9]

1.2 First take a nonnegative simple $s=\sum_{j=1}^m c_j1_{B_j}$ on disjoint Borel sets, discarding zero coefficients. Independence of the counts and the scalar generating function [F9] give $\mathbb E e^{-\eta(s)}=\prod_j\exp(\nu(B_j)(e^{-c_j}-1))=\exp(-\nu(1-e^{-s}))$; when $c_j>0$ and $\nu(B_j)=\infty$, both sides are zero by the infinite-count convention. [given, F9, algebra]

1.3 The point-addition map is measurable because each output evaluation is $(\mu+\delta_x)(B)=\mu(B)+1_B(x)$, and configuration addition is measurable because $(\mu+\zeta)(B)=\mu(B)+\zeta(B)$; both follow from the evaluation sigma-algebra. Thus $h_\mu(x,\zeta):=h(x,\mu+\zeta)$ is measurable for fixed $\mu$. For a random locally finite counting measure $\zeta$, the map $\omega\mapsto\int h(x,\zeta(\omega))\zeta(dx,\omega)$ is measurable by applying the kernel-integration theorem to the evaluation kernel with parameter $\zeta$. This makes the random integrals below well-defined. [given, F5, construct]

2.1 Choose simple $s_n\uparrow f$ using [F7]. Then $1-e^{-\eta(s_n)}\uparrow1-e^{-\eta(f)}$ and $1-e^{-s_n}\uparrow1-e^{-f}$. Monotone convergence [F7] on the probability space and on $(S,\nu)$ passes the simple identity of step 1.2 to the asserted Laplace formula. [given, step 1.2, F7]

2.2 Let $(K_n)$ be the compact exhaustion [F3], set $A_1=K_1$ and $A_i=K_i\setminus K_{i-1}$ for $i\ge2$, and define $\eta_i(B)=\eta(B\cap A_i)$ and $\eta_{-i}(B)=\eta(B\setminus A_i)$. The sets $A_i$ are Borel by [F3]. Each $\eta_i$ is a finite-intensity Poisson process with intensity $\nu_i(B)=\nu(B\cap A_i)$, since $A_i\subseteq K_i$ and $\nu(K_i)<\infty$. The sigma-algebras generated by evaluations of $\eta_i$ and $\eta_{-i}$ are independent: their generating cylinder events concern disjoint regions, so [F3]-[F4] extend the independent-count property to those sigma-algebras. Also $\eta=\eta_i+\eta_{-i}$. [given, F2, F3, F4, step 1.3, construct]

3.1 For fixed $i$, integrate first over the independent laws of $\eta_{-i}$ and $\eta_i$. Applying the finite-intensity identity [F2] to $h_{\mu}(x,\zeta)=h(x,\mu+\zeta)$ for each fixed background $\mu$ gives $\mathbb E\int h(x,\eta)\eta_i(dx)=\int\mathbb E[h(x,\eta+\delta_x)]\,\nu_i(dx)$. Summing over $i$ and using Tonelli [F4] yields the add-one identity, since $\sum_i\eta_i=\eta$ and $\sum_i\nu_i=\nu$. [step 1.3, step 2.2, F2, F4]

3.2 Now let $\eta$ be Cox directed by $\xi$ and use its supplied kernel $K$. For $P_\xi$-almost every $\mu$, $K(\mu,\cdot)$ is a Poisson law of intensity $\mu$; [F6] and step 2.1 therefore give $\int\zeta(f)K(\mu,d\zeta)=\mu(f)$, $\int e^{-\zeta(f)}K(\mu,d\zeta)=e^{-\mu(1-e^{-f})}$, and $\int\zeta(f)^2K(\mu,d\zeta)=\mu(f^2)+\mu(f)^2$. The conditional-law identity [F8] and nonnegative kernel integration average these formulas over $P_\xi$. [given, step 2.1, F6, F8]

4.1 For nonnegative measurable $g$, define $H(x,\mu)=1_D(x,\mu)g(x,\mu-\delta_x)$ on $D$ and $H=0$ off $D$. This is measurable by [F5]. For $\eta$-almost every counted point $x$, $(x,\eta)\in D$, while $(x,\eta+\delta_x)\in D$ for every $x$; applying step 3.1 to $H$ gives $\mathbb E\int g(x,\eta-\delta_x)\eta(dx)=\int\mathbb E[g(x,\eta)]\nu(dx)$. A mass $m$ at $x$ contributes $m$ times the configuration with mass $m-1$, so the formula retains multiplicity. [step 3.1, F5, algebra]

4.2 By [F1], $\mathbb E\xi(f)=\nu(f)$ and $\mathbb E\xi(f^2)=\nu(f^2)$. Integrating step 3.2 gives $\mathbb E\eta(f)=\nu(f)$, $\mathbb E e^{-\eta(f)}=\mathbb E e^{-\xi(1-e^{-f})}$, and $\mathbb E\eta(f)^2=\nu(f^2)+\mathbb E\xi(f)^2$, all with extended nonnegative values. [step 3.2, F1, F8]

5.1 Conversely, suppose the deletion identity holds for every nonnegative measurable $g$. For any such $h$, set $g(x,\mu)=h(x,\mu+\delta_x)$, which is measurable by [F5]. Then $g(x,\eta-\delta_x)=h(x,\eta)$ at every counted point and $g(x,\eta)=h(x,\eta+\delta_x)$ on the right, so the add-one identity follows. [given, step 4.1, F5]

6.1 Fix disjoint Borel sets $B_1,\ldots,B_r$ with finite $a_j=\nu(B_j)$ and write $N_j=\eta(B_j)$. Applying the add-one identity of step 5.1 to $h(x,\mu)=1_{B_i}(x)$ gives $\mathbb E N_i=a_i$, so each $N_i$ is finite almost surely. For a count vector $k\in\mathbb N_0^r$, put $p_k=\mathbb P(N_1=k_1,\ldots,N_r=k_r)$. Use $h_i(x,\mu)=1_{B_i}(x)1_{\{\mu(B_j)=k_j\;\forall j\}}$ in the same identity. Disjointness makes insertion of $x\in B_i$ increase only the $i$th count, so $k_i p_k=a_i p_{k-e_i}$ for $k_i\ge1$, and the right side is zero when $k_i=0$. [given, step 5.1, F5, algebra]

7.1 Iterating the recurrences of step 6.1 gives $p_k=p_0\prod_{j=1}^r a_j^{k_j}/k_j!$, with the convention $0^0=1$. Since the probabilities sum to one and each scalar Poisson mass sequence is normalized [F9], finite product summation gives $p_0=e^{-\sum_j a_j}$ and $p_k=\prod_j e^{-a_j}a_j^{k_j}/k_j!$. Hence the counts on every finite family of disjoint finite-intensity sets are independent Poisson variables. [step 6.1, F9, algebra]

8.1 If $B$ has $\nu(B)=\infty$, let $C_n=B\cap K_n$. Then $\nu(C_n)<\infty$ and $\nu(C_n)\uparrow\infty$. For each integer $M\ge0$, $\mathbb P(\eta(B)\le M)\le e^{-\nu(C_n)}\sum_{k=0}^M\nu(C_n)^k/k!\to0$, because $e^{-t}t^k\to0$ as $t\to\infty$ (use $e^t\ge t^{k+1}/(k+1)!$). Thus $\eta(B)=\infty$ almost surely. For any finite disjoint family, infinite-mean counts are therefore constants $+\infty$ and the finite-mean coordinates have the independent laws from step 7.1; this is the defining extended Poisson count convention. [step 7.1, F3, F7, F9, algebra]

9.1 A sum of two nonnegative extended numbers is finite exactly when both summands are finite, so step 4.2 gives $\mathbb E\eta(f)^2<\infty$ exactly when $\nu(f^2)<\infty$ and $\mathbb E\xi(f)^2<\infty$. In that case $\eta(f)$ and $\xi(f)$ are square-integrable; [F9] and step 4.2 yield $\operatorname{Var}(\eta(f))=\nu(f^2)+\operatorname{Var}(\xi(f))$. [step 4.2, F9, algebra] ∎
