---
id: lem-continuous-functions-dense-in-lp-for-compactly-supported-finite-borel-measures
kind: lemma
title: "Continuous functions are dense in Lp for compactly supported finite measures"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-measure
  - def-calligraphic-l-p-on-a-measure-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
  - thm-dominated-convergence
  - lem-test-function-cutoffs-and-euclidean-localization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, proof of Theorem 1, Lp part"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Kurt Hornik, Approximation Capabilities of Multilayer Feedforward Networks, §2"
      url: "https://web.njit.edu/~usman/courses/cs675_fall18/hornik-nn-1991.pdf"
---

## Statement

Let $\mu$ be a finite regular Borel measure on $\mathbb R^d$ concentrated on a compact set $K\subseteq\mathbb R^d$, and let $1\le p<\infty$. Form the real $L^p(\mu)$ space using the Borel $\sigma$-algebra. Then restrictions to $K$ of real-valued compactly supported continuous functions on $\mathbb R^d$ are dense in $L^p(\mu;\mathbb R)$.

## Statement references

[Leshno et al., proof of Theorem 1, Lp approximation step](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

## Facts & Assumptions

**Given:** A finite regular Borel measure $\mu$ concentrated on compact $K$, an exponent $1\le p<\infty$, a real-valued Borel class $[f]\in L^p(\mu;\mathbb R)$, and $\varepsilon>0$.

[F1] $L^p(\mu)$ consists of measurable functions with finite $\left(\int|f|^p\,d\mu\right)^{1/p}$, with functions identified when equal $\mu$-almost everywhere ([[def-calligraphic-l-p-on-a-measure-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] A measure is a nonnegative countably additive set function on a sigma-algebra, and regularity here means Borel sets can be approximated from inside by compact sets and outside by open sets with arbitrarily small measure excess ([[def-measure]]); regularity is the hypothesis on $\mu$.

[F3] If $F$ is compact and $O$ is open with $F\subset O$, there is a smooth compactly supported cutoff $\psi$ with $0\le\psi\le1$, $\psi=1$ near $F$, and $\operatorname{supp}\psi\subset O$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] Dominated convergence applies to $|f-f_M|^p\le|f|^p$ and $f_M\to f$ almost everywhere ([[thm-dominated-convergence]]).

[F5] For $1\le p<\infty$, the quotient $L^p(\mu)$ has a norm whose triangle inequality is Minkowski's inequality ([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

## Proof

1.1 Choose a measurable representative $f$ of $[f]$. Truncate it to $f_M=\max(-M,\min(f,M))$. Since $|f-f_M|^p\le |f|^p$ and $f_M\to f$ pointwise wherever $f$ is finite, [F4] makes $\|f-f_M\|_{L^p(\mu)}<\varepsilon/2$ for some large $M$. Partition $[-M,M]$ into finitely many intervals of length at most $\delta$ and replace each value of $f_M$ by a fixed endpoint of its interval. If $\mu(K)>0$, choose $\delta$ with $\delta\mu(K)^{1/p}<\varepsilon/2$; if $\mu(K)=0$, any $\delta>0$ suffices. The resulting finite-valued Borel simple function $s$ satisfies $|s-f_M|\le\delta$ pointwise, so $\|s-f_M\|_{L^p(\mu)}\le\delta\,\mu(K)^{1/p}$. By [F5] and the triangle inequality, $\|s-f\|_{L^p(\mu)}<\varepsilon$. Since $\mu$ is concentrated on $K$, replace $s$ by $\mathbf1_Ks$: this finite Borel simple function represents the same class and admits a representation with every set $E_j\subseteq K$. Thus such supported simple functions are dense in $L^p(\mu)$. [given, F1, F4, F5, choose]

2.1 Write such a simple function as $s=\sum_{j=1}^N c_j\mathbf 1_{E_j}$ with Borel $E_j\subseteq K$. For any $\eta>0$, regularity [F2] gives compact $F_j\subseteq E_j$ and open $O_j\supseteq E_j$ with $\mu(O_j\setminus F_j)<\eta$. By [F3] choose $\psi_j\in C_c^\infty(O_j)$ with $0\le\psi_j\le1$ and $\psi_j=1$ on $F_j$. Outside $O_j\setminus F_j$ the functions $\psi_j$ and $\mathbf1_{E_j}$ agree; everywhere their difference has magnitude at most one. Therefore $\|\psi_j-\mathbf1_{E_j}\|_{L^p(\mu)}^p\le\mu(O_j\setminus F_j)<\eta$. [step 1.1, F2, F3, choose]

3.1 The triangle inequality [F5] gives $\left\|\sum_{j=1}^N c_j\psi_j-s\right\|_{L^p(\mu)}\le\sum_{j=1}^N|c_j|\eta^{1/p}$. Choose $\eta$ small enough that this is below $\varepsilon/2$, and choose $s$ from step 1.1 within $\varepsilon/2$ of $f$. Then the compactly supported continuous function $\sum_jc_j\psi_j$ is within $\varepsilon$ of $f$ in $L^p(\mu)$. [step 1.1, step 2.1, F5, choose] ∎

