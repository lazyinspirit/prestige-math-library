---
id: thm-szemeredi-relative-to-a-pseudorandom-measure
kind: theorem
title: "Szemerédi's theorem relative to a pseudorandom measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-k-pseudorandom-measure
  - alg-relative-koopman-von-neumann-energy-increment
  - thm-relative-koopman-von-neumann-structure-decomposition
  - thm-sparse-generalized-von-neumann-theorem
  - thm-szemeredi-finite-density-arithmetic-progressions
  - lem-varnavides-positive-density-of-progression-counts
  - lem-dense-function-has-positive-progression-count
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§3, Theorem 3.5, and complete proof through §§4–8, printed pp. 491–522"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, A Relative Szemerédi Theorem, arXiv:1305.5440v2 (2014)"
      url: "https://arxiv.org/pdf/1305.5440v2"
      locator: "§2, Theorem 2.4, printed pp. 3–4; independent all-$k$ theorem under a weaker linear-forms condition, with a different constant and proof route"
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics, MIT OpenCourseWare lecture notes (2023)"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
      locator: "Chapter 9.2–9.6, printed pp. 285–306; complete relative Roth ($k=3$) treatment under a different graph linear-forms condition"
---

## Statement

Fix an integer $k\ge3$ and a real number $0<\delta\le1$. Let $p\to\infty$ through primes, let $\nu=(\nu_p)$ be a $k$-pseudorandom measure sequence in the Green–Tao convention, and let $f_p:F_p\to[0,\infty)$ satisfy $0\le f_p(x)\le\nu_p(x)$ for every $x\in F_p$ and $\mathbb E_{x\in F_p}f_p(x)\ge\delta$. There is a constant $c(k,\delta)>0$, depending only on $k$ and $\delta$, such that

$$\mathbb E_{x,r\in F_p}\prod_{j=0}^{k-1}f_p(x+jr)\ge c(k,\delta)-o_{k,\delta,\nu}(1).$$

The average includes $r=0$; the error tends to zero along the given sequence and may depend on the rates in its pseudorandomness conditions.

## Statement references

[[def-k-pseudorandom-measure|$k$-pseudorandom measure in the Green–Tao convention]]

[[alg-relative-koopman-von-neumann-energy-increment|Relative Koopman–von Neumann energy-increment procedure]]

[[thm-relative-koopman-von-neumann-structure-decomposition|Relative Koopman–von Neumann structure decomposition]]

[[thm-sparse-generalized-von-neumann-theorem|Sparse generalized von Neumann bound for arithmetic progressions]]

[[thm-szemeredi-finite-density-arithmetic-progressions|Finite dense subsets of the integers contain long arithmetic progressions]]

[[lem-varnavides-positive-density-of-progression-counts|Positive density forces a positive normalized progression count]]

[[lem-dense-function-has-positive-progression-count|A bounded dense function has positive normalized progression count]]

[Green and Tao, §3, Theorem 3.5 and §§4–8](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, §2, Theorem 2.4](https://arxiv.org/pdf/1305.5440v2)

[Zhao, Chapter 9.2–9.6](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf)

## Facts & Assumptions

**Given:** The fixed $k,\delta$, the $k$-pseudorandom measure sequence $\nu_p$, and the nonnegative functions $f_p\le\nu_p$ with averages at least $\delta$.

[F1] A $k$-pseudorandom sequence satisfies the $(k2^{k-1},3k-4,k)$ linear-forms condition and the $2^{k-1}$ correlation condition ([[def-k-pseudorandom-measure]]).

[F2] For every fixed $\epsilon,\rho>0$, the relative Koopman–von Neumann theorem supplies a finite partition $\mathcal B_p$ and exceptional union $\Omega_p$ with small exceptional mass, uniformity of $\nu_p$ on the remaining cells, and a small $U^{k-1}$ residual ([[thm-relative-koopman-von-neumann-structure-decomposition]]).

[F3] If every factor is bounded by $C(\nu_p+1)$ and at least one factor has small $U^{k-1}$ norm, the normalized progression average is $O_{k,C}$ of that norm plus $o(1)$ ([[thm-sparse-generalized-von-neumann-theorem]]).

[F4] A function $h:F_p\to[0,1]$ with mean at least $\gamma>0$ has normalized $k$-progression count at least $c(k,\gamma)(1-o(1))$ ([[lem-dense-function-has-positive-progression-count]]).

[F5] A positive-density subset of $[M]$ has a proper $k$-term progression for all sufficiently large $M$ ([[thm-szemeredi-finite-density-arithmetic-progressions]]).

[F6] The corresponding finite-group Varnavides estimate gives a positive normalized proper-progression count ([[lem-varnavides-positive-density-of-progression-counts]]).

[F7] The energy-increment procedure takes as input $k,p,\nu_p,f_p,\epsilon,\eta$ and returns a partition and exceptional set or the finite failure value ([[alg-relative-koopman-von-neumann-energy-increment]]).

## Proof

1.1 Choose $0<\rho<\min\{\delta/4,1/8\}$ and $0<\epsilon<2^{-(2^{k+1}+8)}$, the range required by [F2]. Run the finite procedure [F7] with a sufficiently small $\eta$; by [F2] it returns $\mathcal B_p,\Omega_p$ for all sufficiently large $p$. Put $g_p=(1-1_{\Omega_p})\mathbb E(f_p\mid\mathcal B_p)$ and $u_p=(1-1_{\Omega_p})(f_p-\mathbb E(f_p\mid\mathcal B_p))$. Then $g_p+u_p=(1-1_{\Omega_p})f_p$, $0\le g_p$, and [F2] gives $\mathbb E g_p=\mathbb E((1-1_{\Omega_p})f_p)\ge\delta-\rho$ and $g_p\le1+\rho$ pointwise. [F1, F2, F7, given, algebra]

2.1 Define $h_p=g_p/(1+\rho)$. Then $0\le h_p\le1$ and $\mathbb E h_p\ge(\delta-\rho)/(1+\rho)\ge\delta/2$. Applying [F4] at density $\delta/2$ yields $\Lambda_{k,p}(h_p)\ge c(k,\delta/2)(1-o(1))$. Its positive constant comes from [F5] and [F6]; thus, with $c(k,\delta):=c(k,\delta/2)>0$, nonnegativity and $g_p=(1+\rho)h_p$ imply $\Lambda_{k,p}(g_p)\ge c(k,\delta)-o(1)$. [F4, F5, F6, step 1.1, algebra]

3.1 By [F2], $\|u_p\|_{U^{k-1}}\le\epsilon^{1/2^k}$. Since $0\le f_p\le\nu_p$ and $0\le g_p\le1+\rho$, both $u_p$ and $g_p$ are bounded in absolute value by $2(\nu_p+1)$. Expand $\Lambda_{k,p}(g_p+u_p)$ by multilinearity. The term with all factors $g_p$ is $\Lambda_{k,p}(g_p)$; each of the other $2^k-1$ terms has at least one factor $u_p$, so [F3] bounds the absolute value of each by $A_{k,2}\epsilon^{1/2^k}+o(1)$. [F2, F3, step 1.1, step 2.1, algebra]

4.1 Because $g_p+u_p=(1-1_{\Omega_p})f_p$ and all functions are nonnegative, $\Lambda_{k,p}(f_p)\ge\Lambda_{k,p}(g_p+u_p)$. Combining with steps 2.1 and 3.1 gives $\Lambda_{k,p}(f_p)\ge c(k,\delta)-(2^k-1)A_{k,2}\epsilon^{1/2^k}-o(1)$. Given any $\zeta>0$, choose $\epsilon$ so the fixed error is below $\zeta/2$, then choose $\rho,\eta$ and $p$ large enough that the remaining error is below $\zeta/2$. Hence $\liminf_{p\to\infty}\Lambda_{k,p}(f_p)\ge c(k,\delta)$, which is the stated $c(k,\delta)-o(1)$ bound. [F2, step 1.1, step 2.1, step 3.1, algebra] ∎
