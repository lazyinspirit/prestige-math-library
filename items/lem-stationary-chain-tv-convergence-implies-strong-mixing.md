---
id: lem-stationary-chain-tv-convergence-implies-strong-mixing
kind: lemma
title: Stationary Markov-chain total-variation convergence implies strong mixing
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-iterated-transition-kernels
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-stationary-process-and-canonical-shift
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-total-variation-distance-for-probability-laws
  - prop-measure-of-a-set-difference
  - thm-chapman-kolmogorov-equations
  - thm-continuity-from-below-for-measures
  - thm-dominated-convergence
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-measurability-of-integration-against-a-kernel
  - thm-taking-out-what-is-known
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §3"
      url: "https://arxiv.org/pdf/math/0409112"
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §4.8.2"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
verification:
  precheck: pass
axiom_use: "AC is used through the homogeneous-chain conditional-expectation interface and the bounded-future-path Markov property."
---

## Statement

Assume AC. Let $(\mathsf X,\mathcal X)$ have a supplied countable algebra $\mathcal C$ generating $\mathcal X$, and let $(X_k)_{k\ge0}$ be a stationary time-homogeneous Markov chain with invariant probability $\pi$. If
$$\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\longrightarrow0\quad\text{for }\pi\text{-almost every }x,$$
then its stationary output process is strongly mixing:
$$\alpha_X(n)\longrightarrow0.$$

## Facts & Assumptions

**Given:** AC, the countable generating algebra $\mathcal C$, a stationary homogeneous $P$-chain with invariant law $\pi$, and the stated $\pi$-almost-everywhere total-variation convergence.

[A1] AC is the choice principle for the conditional classes used by the Markov-chain interfaces. ([[def-axiom-of-choice]])

[F1] The strong-mixing coefficient is the supremum of $|\mathbb P(A\cap B)-\mathbb P(A)\mathbb P(B)|$ over past and separated future events. ([[def-mixing-coefficients-for-stationary-markov-chain]])

[F2] The bounded-future-path Markov property gives a measurable function of the present state for a bounded future-path functional. ([[thm-markov-property-for-bounded-future-path-functionals]])

[F3] For bounded measurable $h$, $\mathbb E[h(X_{j+n})\mid\mathcal F_j]=P^nh(X_j)$. ([[thm-chapman-kolmogorov-equations]])

[F4] Total variation is $\|\mu-\nu\|_{\mathrm{TV}}=\sup_A|\mu(A)-\nu(A)|$. ([[def-total-variation-distance-for-probability-laws]])

[F5] A known measurable factor can be taken out of conditional expectation. ([[thm-taking-out-what-is-known]])

[F6] Increasing measurable sets have increasing measures converging to the measure of their union, and symmetric differences satisfy measure subadditivity. ([[thm-continuity-from-below-for-measures]], [[prop-measure-of-a-set-difference]])

[F7] Dominated convergence applies to measurable functions bounded by an integrable majorant. ([[thm-dominated-convergence]])

[F8] Kernel integration makes $x\mapsto P^nh(x)$ measurable for bounded measurable $h$, in particular $x\mapsto P^n(x,C)$ for measurable $C$. ([[def-measure-kernel-and-probability-kernel]], [[def-iterated-transition-kernels]], [[thm-measurability-of-integration-against-a-kernel]])

## Proof
1.1 Fix $n\ge1$, $j\ge0$, $A\in\mathcal F_j$, and $B\in\sigma(X_{j+n},X_{j+n+1},\ldots)$. By [F2], the indicator of this future-path event has conditional expectation $h(X_{j+n})$ for a measurable $0\le h\le1$. Applying [F3] and the tower property gives $\mathbb E[\mathbf1_B\mid\mathcal F_j]=P^nh(X_j)$. Stationarity gives $\mathbb P(B)=\pi(h)$. [A1, F2, F3, given]

1.2 For probability measures $\mu,\nu$ and measurable $0\le h\le1$, the dyadic simple approximation $h_m=2^{-m}\sum_{r=1}^{2^m}\mathbf1_{\{h\ge r2^{-m}\}}$ differs from $h$ by at most $2^{-m}$. Each indicator integral difference is bounded by [F4], so the integrals of $h_m$ differ by at most $\|\mu-\nu\|_{\mathrm{TV}}$. Letting $m\to\infty$ gives $|\mu(h)-\nu(h)|\le\|\mu-\nu\|_{\mathrm{TV}}$. [F4, construct]

1.3 For fixed $n$ and $x$, $\mu_{n,x}:=P^n(x,\cdot)+\pi$ is a finite measure. Let $\mathcal D$ be the sets approximable in $\mu_{n,x}$-symmetric-difference measure by members of $\mathcal C$. It contains $\mathcal C$ and is closed under complements because $\mathcal C$ is an algebra. For $A_i\in\mathcal D$ and $\varepsilon>0$, [F6] gives $N\ge1$ with $\mu_{n,x}((\bigcup_i A_i)\setminus(\bigcup_{i=1}^N A_i))<\varepsilon/2$. Choose $C_i\in\mathcal C$ with $\mu_{n,x}(A_i\triangle C_i)<\varepsilon/(2N)$ for $i\le N$. The finite union $C=\bigcup_{i=1}^NC_i$ belongs to $\mathcal C$ and $\mu_{n,x}((\bigcup_iA_i)\triangle C)<\varepsilon$ by finite subadditivity. Thus $\mathcal D$ is a sigma-algebra containing the generator $\mathcal C$, so $\mathcal D=\mathcal X$. Approximating each measurable $A$ in this way shows $d_n(x):=\sup_{C\in\mathcal C}|P^n(x,C)-\pi(C)|=\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}$: the discrepancy for $A$ differs from that for an approximating $C$ by at most $P^n(x,A\triangle C)+\pi(A\triangle C)$. Since $\mathcal C$ is countable and each evaluation is measurable by [F8], $d_n$ is measurable; also $0\le d_n\le1$. [F4, F6, F8, given]

2.1 Using [F5] and step 1.1, $|\mathbb P(A\cap B)-\mathbb P(A)\mathbb P(B)|\le\mathbb E|P^nh(X_j)-\pi(h)|\le\int d_n(x)\,\pi(dx)$. The last inequality follows from step 1.2 applied pointwise to $P^n(x,\cdot)$ and $\pi$, and then from step 1.3. By hypothesis $d_n(x)\to0$ for $\pi$-almost every $x$; since $d_n\le1$, [F7] makes the integral tend to zero. This bound is independent of $j,A,B$, so taking the supremum in [F1] proves $\alpha_X(n)\to0$. [F1, F2, F5, F7, step 1.1, step 1.2, step 1.3, given] ∎

## Source notes

The proof uses the supplied countable algebra to make the total-variation supremum a measurable function of the starting state. The bound on the strong-mixing coefficient then follows by dominated convergence.
