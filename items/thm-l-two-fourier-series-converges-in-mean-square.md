---
id: thm-l-two-fourier-series-converges-in-mean-square
kind: theorem
title: Fourier series converge in mean square
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-directed-set-and-net, thm-trigonometric-system-is-complete-in-l-two-of-the-torus, thm-hilbert-space-fourier-expansion, def-countable-choice, def-fourier-coefficients-and-trigonometric-polynomials, lem-trigonometric-characters-are-orthonormal, lem-finite-set-has-max, def-square-summable-family-on-an-arbitrary-index-set]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, Theorem 2.17 and equation (2.48)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Example 2.66, pp.87–88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). For every
$f\in L^2(\mathbb T;\mathbb C)$ and every real $\varepsilon>0$ there is
$N\in\mathbb N$ with

$$\Bigl\|f-\sum_{|k|\le N}\widehat f(k)e_k\Bigr\|_2<\varepsilon .$$

Thus the symmetric partial sums of the Fourier series converge to $f$ in the
$L^2$ norm, and the finite-subset net of Fourier partial sums converges to $f$
as well. This is norm convergence only: no pointwise or uniform assertion is
made, and no ordering of $\mathbb Z$ other than the symmetric one is required.

## Facts & Assumptions

[A1] The characters form an orthonormal basis of $L^2(\mathbb T;\mathbb C)$, and for a complete orthonormal family $x$ is the norm limit of the finite-subset net of the partial sums $\sum_{i\in F}\langle x,e_i\rangle e_i$ ([[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]], [[thm-hilbert-space-fourier-expansion]]).

[A2] The Fourier coefficient satisfies $\widehat f(k)=\langle f,e_k\rangle$, so the partial sums displayed above are exactly the values $\sum_{k\in F}\langle f,e_k\rangle e_k$ of the net at the symmetric index sets $F=[-N,N]$ ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[lem-trigonometric-characters-are-orthonormal]]).

[A3] For every finite $F\subseteq\mathbb Z$ there is $N\in\mathbb N$ with $F\subseteq\{k:|k|\le N\}$. If $F=\varnothing$, take $N=0$; otherwise the nonempty finite set $\{|k|:k\in F\}$ has a maximum and one may take that maximum ([[lem-finite-set-has-max]]).

[A4] If a net in a metric space converges to $x$ then every cofinal sub-net converges to $x$: given $\varepsilon>0$ the net is eventually in the ball of radius $\varepsilon$ around $x$ at some index, and any cofinal sub-net passes beyond that index ([[def-directed-set-and-net]], [[def-square-summable-family-on-an-arbitrary-index-set]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice and $f\in L^2(\mathbb T;\mathbb C)$.

1.1 The finite-subset net $\bigl(\sum_{k\in F}\langle f,e_k\rangle e_k\bigr)_{F}$ converges to $f$, by completeness of the character basis and the general Fourier expansion theorem. [A1]

2.1 The index sets of the symmetric partial sums, $F_N:=\{k\in\mathbb Z:|k|\le N\}$, are cofinal in the directed set of finite subsets of $\mathbb Z$: every finite $F$ is contained in some $F_N$ by [A3]. Hence the sub-net indexed by the $F_N$ converges to the same limit $f$, and its terms are $\sum_{|k|\le N}\widehat f(k)e_k$ by [A2]. [step 1.1, A2, A3, A4]

3.1 Therefore for every real $\varepsilon>0$ there is $N$ with $\|f-\sum_{|k|\le N}\widehat f(k)e_k\|_2<\varepsilon$, which is the mean-square convergence of the Fourier series; the finite-subset net statement is step 1.1. [step 1.1, step 2.1] ∎
