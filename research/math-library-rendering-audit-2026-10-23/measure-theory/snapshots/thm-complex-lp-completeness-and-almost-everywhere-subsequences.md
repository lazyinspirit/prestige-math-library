---
id: thm-complex-lp-completeness-and-almost-everywhere-subsequences
kind: theorem
title: "Complex Lp completeness and almost-everywhere subsequences"
status: published
origin: pipeline
landmark: false
deps: [thm-complex-holder-minkowski-and-the-quotient-norm, thm-riesz-fischer-completeness-of-l-p, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, def-countable-choice, thm-finite-and-countable-subadditivity-of-measures]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Take real component limits and then two successive real subsequences."
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.3, Theorem 10.12 and Corollary 10.13, pp.290\u2013291."
---

## Statement

Assume countable choice. For every measure space and $1\le p\le\infty$, $L^p(\mu;\mathbb C)$ is complete. Every sequence converging in this norm has a subsequence of measurable representatives converging a.e. to a measurable representative of its norm limit. For finite $p$ no pointwise convergence of the whole sequence is asserted.

## Facts & Assumptions

**Given:** Countable choice, a measure space, $1\le p\le\infty$, and a complex Lp Cauchy sequence $([f_n])$.

[F1] The component maps on classes are contractions, and the complex norm is bounded by the sum of the component norms ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F2] Real Lp is complete for every exponent in this range ([[thm-riesz-fischer-completeness-of-l-p]]).

[F3] Real norm convergence supplies an a.e.-convergent subsequence of measurable representatives with the correct limit class ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]).

[F4] Countable choice selects elements from a countable family of nonempty sets ([[def-countable-choice]]).

[F5] Countable unions of measurable null sets are null ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

**Proof technique:** Take real component limits and then two successive real subsequences.

1.1 For $u_n=\operatorname{Re}[f_n]$ and $v_n=\operatorname{Im}[f_n]$, F1 gives $\|u_n-u_m\|_p,\|v_n-v_m\|_p\le\|[f_n]-[f_m]\|_p$. Both real sequences are therefore Cauchy. F2 supplies real classes $u,v$ with $u_n\to u$, $v_n\to v$. [F1, F2, given]

1.2 For a sequence already converging to $[f]$, its real components converge to $\operatorname{Re}[f]$ by F1. Apply F3 to obtain indices $n_k$ and real representatives $a_k\to U$ off a measurable null set. Its imaginary components still converge in norm; apply F3 to that subsequence to obtain further indices $k_j$ and imaginary representatives $b_j\to V$ off a second measurable null set. Then $a_{k_j}+ib_j$ represents $[f_{n_{k_j}}]$ and converges to $U+iV$ outside the union of those two null sets, which is null by F5. [F1, F3, F5]

2.1 Choose measurable representatives $U,V$ of these two classes and put $f=U+iV$. F1 shows $f\in\mathcal L^p(\mu;\mathbb C)$ and $\|[f_n]-[f]\|_p\le\|u_n-u\|_p+\|v_n-v\|_p\to0$. Thus every Cauchy sequence converges, at infinity as well as at finite $p$. [F1, step 1.1]

3.1 The simultaneous representative selections used by the real results are permitted by F4; selection of the two limit representatives requires only two choices. All functions can be assigned zero on the measurable exceptional sets: a function pieced from a measurable function on a measurable set and zero on its complement is measurable. If predetermined measurable representatives are desired, their disagreement sets with the selected representatives are themselves measurable and null; F5 applied to their countable union preserves the a.e. convergence. Hence the assertions hold on incomplete measures without prescribing arbitrary, possibly nonmeasurable, values on null sets. [F4, F5, step 2.1, step 1.2] ∎
