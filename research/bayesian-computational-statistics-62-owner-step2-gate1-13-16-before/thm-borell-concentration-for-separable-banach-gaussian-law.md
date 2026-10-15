---
id: thm-borell-concentration-for-separable-banach-gaussian-law
kind: theorem
title: "Borell concentration for the norm of a separable Banach Gaussian"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - lem-separable-banach-has-countable-norming-family
  - thm-fernique-integrability-for-separable-banach-gaussian-law
  - thm-standard-gaussian-lipschitz-concentration
  - def-multivariate-normal-law
  - thm-non-negative-square-root-exists-and-is-unique
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-dominated-convergence
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - thm-hahn-banach-dominated-extension
  - def-hahn-banach-extension-principle-relative
  - thm-continuity-from-below-for-measures
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC, DC, and countable choice are inherited from the finite-dimensional Gaussian and Lipschitz-concentration suppliers. AC supplies HB for the countable norming family."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Berestycki and R. Nickl, Concentration of Measure"
      url: "https://www.stat.cmu.edu/~arinaldo/36788/berestycki_nickl_notes.pdf"
      locator: "Chapter 4, Theorem 10 and complete proof; §4.4 for Banach-valued Gaussian norm concentration."
    - title: "C. Borell, The Brunn–Minkowski inequality in Gauss space (1975)"
      url: "https://dornsife.usc.edu/sergey-lototsky/wp-content/uploads/sites/211/2023/06/Borell-Subspace-original.pdf"
      locator: "Section 5, Theorems 5.1–5.2: tails of measurable Gaussian seminorms."
---

## Statement

Assume AC, DC, and countable choice. Let $W$ be a centered Borel Gaussian
random element in a real separable
Banach space $B$. Define
$$\sigma^2=\sup_{\|\ell\|_{B^*}\le1}E[\ell(W)^2].$$
For $r\ge0$, if $\sigma>0$ then
$$P\{\|W\|>E\|W\|+r\}\le e^{-r^2/(2\sigma^2)}.$$
If $\sigma=0$, then $W=0$ almost surely and the tail probability is zero.

## Facts & Assumptions

[A1] AC, DC, and countable choice are the assumptions inherited from the Gaussian concentration supplier ([[def-axiom-of-choice]], [[def-dependent-choice]], [[def-countable-choice]]).

[A2] Under AC, the real dominated-extension theorem supplies HB for the dual-norming interface ([[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F1] Fernique integrability gives $E\|W\|^2<\infty$, hence $E\|W\|<\infty$ ([[thm-fernique-integrability-for-separable-banach-gaussian-law]]).

[F2] A countable norming family recovers $\|x\|$ as the supremum of its absolute coordinates ([[lem-separable-banach-has-countable-norming-family]]).

[F3] Every finite-dimensional centered Gaussian vector has a positive semidefinite covariance square root and is the image of a standard Gaussian vector under that square root ([[def-multivariate-normal-law]], [[thm-non-negative-square-root-exists-and-is-unique]], [[lem-characteristic-function-of-a-multivariate-normal-law]]).

[F4] A $\sigma$-Lipschitz function of a standard Gaussian vector has upper tail at most $e^{-r^2/(2\sigma^2)}$ about its mean ([[thm-standard-gaussian-lipschitz-concentration]]).

[F5] Dominated convergence applies to $F_n\uparrow\|W\|$ because $F_n\le\|W\|$ and [F1] gives an integrable majorant ([[thm-dominated-convergence]]).

[F6] Probability is continuous from below for increasing measurable events ([[thm-continuity-from-below-for-measures]]).

## Proof


**Given:** AC, DC, countable choice, a centered Borel Gaussian random element $W$ in $B$, and $\sigma^2$ as in the Statement.

1.1 By [F1], $\sigma^2\le E\|W\|^2<\infty$. Choose a countable norming family $(\ell_j)_{j\ge1}$ from [F2], and let $F_n=\max_{1\le j\le n}|\ell_j(W)|$. Then $F_n\uparrow\|W\|$ and $EF_n\to E\|W\|$ by [F5]. [A1, A2, F1, F2, F5, given, choose]

2.1 Suppose $\sigma>0$ and $r>0$. The vector $(\ell_1(W),\ldots,\ell_n(W))$ is centered Gaussian. By [F3] it has the law of $AZ$ for a matrix $A$ and a standard Gaussian vector $Z$. The function $z\mapsto\max_{j\le n}|(Az)_j|$ is $\max_j\|\operatorname{row}_j(A)\|_2$-Lipschitz, and $\|\operatorname{row}_j(A)\|_2^2=E[\ell_j(W)^2]\le\sigma^2$. Applying [F4] gives $P(F_n>EF_n+r)\le e^{-r^2/(2\sigma^2)}$. Since $EF_n\le E\|W\|$, the event $\{F_n>E\|W\|+r\}$ is contained in that tail event. [A1, F3, F4, step 1.1, algebra]

3.1 If $\sigma>0$ and $r>0$, the events $\{F_n>E\|W\|+r\}$ increase to $\{\|W\|>E\|W\|+r\}$. Continuity from below [F6] and step 2.1 give the claimed bound. [F6, step 2.1, algebra]

3.2 If $\sigma>0$ and $r=0$, the probability is at most $1=e^0$, which is the required bound. [given, algebra]

4.1 If $\sigma=0$, each $\ell_j(W)$ has zero variance, so countably many probability-one equalities give $\ell_j(W)=0$ for every $j$ almost surely; [F2] then gives $W=0$ almost surely. Hence the displayed tail probability is zero for every $r\ge0$. [F2, given, algebra] ∎

