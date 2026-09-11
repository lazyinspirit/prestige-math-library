---
id: thm-l-one-l-two-agreement-of-fourier-transform
kind: theorem
title: Agreement of the integral and L2 transforms
deps: ["thm-plancherel", "thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "lem-simultaneous-smooth-approximation-in-l-one-and-l-two", "lem-complex-lp-completeness-density-and-inner-product", "def-countable-choice"]
status: draft
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Lemma 14.11, p.383
---

## Statement

Assume countable choice. If $f\in L^1\cap L^2$, its bounded continuous integral transform $\widehat f$ represents $\mathcal F_2f$ almost everywhere.

## Facts & Assumptions

**Given:** [[def-countable-choice]].

[F1] Plancherel is a continuous extension of the Schwartz transform ([[thm-plancherel]]).

[F2] The integral transform has supremum bound $\|f\|_1$ ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

[F3] One smooth compactly supported sequence approximates $f$ in both norms ([[lem-simultaneous-smooth-approximation-in-l-one-and-l-two]]).

[F4] Complex norm convergence has an almost-everywhere convergent subsequence of representatives with the correct limit class ([[lem-complex-lp-completeness-density-and-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 Choose the sequence $f_j$ of [F3]. Its terms are Schwartz, since every weighted derivative has compact support and is bounded. Thus [F1] identifies $\mathcal F_2f_j$ with the class of $\widehat f_j$. Also $\|\widehat f_j-\widehat f\|_\infty\le\|f_j-f\|_1\to0$ by [F2], whereas $\mathcal F_2f_j\to\mathcal F_2f$ in norm by [F1]. [F1, F2, F3]

2.1 By [F4], a subsequence of the transform classes has measurable representatives tending a.e. to a representative $h$ of $\mathcal F_2f$. Those representatives and the continuous functions $\widehat f_j$ agree off a countable union of measurable null sets, so the corresponding subsequence of $\widehat f_j$ also tends to $h$ a.e. Step 1.1 gives its pointwise limit $\widehat f$ at every point by uniform convergence. Uniqueness of complex limits gives $h=\widehat f$ a.e. Countable choice is inherited from [F3], [F4] and Plancherel; no pointwise convergence of an arbitrary norm-convergent sequence is assumed. [step 1.1, F3, F4, given] ∎
