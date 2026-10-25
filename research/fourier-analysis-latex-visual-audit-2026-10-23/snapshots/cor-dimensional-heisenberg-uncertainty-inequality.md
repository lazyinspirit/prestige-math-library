---
id: cor-dimensional-heisenberg-uncertainty-inequality
kind: corollary
title: The n-dimensional Heisenberg uncertainty inequality
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - def-countable-choice
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-position-derivative-commutator-estimate
  - lem-weak-derivatives-are-polynomial-fourier-multipliers
  - thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - thm-plancherel
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§3, equations (3.8)–(3.12), pp. 5–8"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 24, Example 24.5 and Remark 24.6(2)–(3), printed pp. 145–146 (one-dimensional estimate and higher-dimensional extension)"
---

## Statement

Assume Countable Choice. Let $n\ge1$ and let
$f\in H^1(\mathbb R^n;\mathbb C)$ satisfy $xf\in L^2(\mathbb R^n;\mathbb C^n)$.
Write $\widehat f=\mathcal F_2f$ for its Plancherel transform. Then
$$\bigl\||x|f\bigr\|_2\,\bigl\||\xi|\widehat f\bigr\|_2\ge \frac{n}{4\pi}\|f\|_2^2.$$
The Fourier characterization of $H^1$ makes this exactly the domain where
both spatial and Plancherel-frequency second moments are finite. For $f=0$
both sides vanish. Equality cases on this full domain are not decided here;
the published sharp equality theorem is stated for Schwartz functions.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $f\in H^1(\mathbb R^n;\mathbb C)$ with $xf\in L^2(\mathbb R^n;\mathbb C^n)$, its weak derivatives $D_jf$, and its Plancherel transform $\widehat f=\mathcal F_2f$.

[A1] Countable Choice is the hypothesis carried by the Sobolev, multiplier, and Plancherel interfaces below ([[def-countable-choice]]).

[F1] The integer-order Fourier characterization identifies $H^1$ with $W^{1,2}$ and hence supplies every $D_jf\in L^2$ ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F2] For a weak derivative in $L^2$, $\mathcal F_2(D_jf)(\xi)=2\pi i\xi_j\mathcal F_2f(\xi)$ almost everywhere ([[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F3] Plancherel is a complex-linear isometry on $L^2$ ([[thm-plancherel]]).

[F4] Cauchy–Schwarz for finite tuples in complex $L^2$ gives $\sum_{j=1}^n a_jb_j\le(\sum_j a_j^2)^{1/2}(\sum_j b_j^2)^{1/2}$ for nonnegative real $a_j,b_j$ ([[lem-complex-lp-completeness-density-and-inner-product]]).

[F5] The coordinate estimate $\|x_jf\|_2\|D_jf\|_2\ge\frac12\|f\|_2^2$ holds on this $H^1$-with-finite-spatial-moment domain ([[lem-position-derivative-commutator-estimate]]).

## Proof

**Proof technique:** convert the coordinate estimate by Plancherel, sum, and apply finite-dimensional Cauchy–Schwarz.

1.1 Fix $j\in\{1,\dots,n\}$. By [F1] the weak derivative $D_jf$ is in $L^2$, and by [F2]–[F3]
$$\|D_jf\|_2=\|\mathcal F_2(D_jf)\|_2=2\pi\|\xi_j\widehat f\|_2.$$
Applying the coordinate estimate [F5] and dividing by $2\pi$ yields
$$\|x_jf\|_2\,\|\xi_j\widehat f\|_2\ge\frac1{4\pi}\|f\|_2^2.$$
[A1, F1, F2, F3, F5, given]

2.1 Summing the inequalities of step 1.1 gives $$\sum_{j=1}^n\|x_jf\|_2\,\|\xi_j\widehat f\|_2\ge\frac{n}{4\pi}\|f\|_2^2.$$ By [F4] the left side is at most $$\Bigl(\sum_j\|x_jf\|_2^2\Bigr)^{1/2} \Bigl(\sum_j\|\xi_j\widehat f\|_2^2\Bigr)^{1/2} =\bigl\||x|f\bigr\|_2\,\bigl\||\xi|\widehat f\bigr\|_2,$$ where the equalities follow by summing the coordinate integrals. This proves the asserted inequality, including $n=1$. [F4, step 1.1] ∎
