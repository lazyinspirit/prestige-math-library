---
id: cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one
kind: corollary
title: Almost-everywhere convergence from the Carleson–Hunt estimate
deps: [lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence, thm-chebyshev-markov-inequality-for-the-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, p. 52, closure route after Theorem 8.7'}]
external_refs: [rem-carleson-hunt-almost-everywhere-convergence]
status: draft
origin: pipeline
proof_strategy: Apply Chebyshev to |Cg|^p to obtain the weak estimate with A=C_p^p, then apply the proved weak-bound lemma. State the estimate as a hypothesis; the external Carleson–Hunt record is a bibliographic mention only, not a discharged local assumption.
---

## Statement

Assume countable choice and let $1<p<\infty$. Suppose explicitly that a finite $C_p\ge0$ satisfies $\|Cg\|_p\le C_p\|g\|_p$ for every $g\in L^p(\mathbb T)$, with symmetric sums and normalized Haar measure. Then every $f\in L^p(\mathbb T)$ satisfies $S_Nf\to f$ almost everywhere.

## Facts & Assumptions

**Given:** Countable choice, $1<p<\infty$, and the strong maximal estimate in the statement for all $g\in L^p(\mathbb T)$.

[F1] Assuming countable choice, for fixed $1\le p<\infty$, a bound $m\{Cg>\lambda\}\le A\lambda^{-p}\|g\|_p^p$ for all $g\in L^p$ and all $\lambda>0$, with finite $A\ge0$, implies $S_Nf\to f$ almost everywhere for every $f\in L^p$ ([[lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence]]).

[F2] If $h$ is nonnegative and measurable and $t>0$, then $m\{h\ge t\}\le t^{-1}\int h\,dm$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

## Proof

**Proof technique:** strong-to-weak estimate and the maximal convergence principle.

1.1 For $g\in L^p$ and $\lambda>0$, apply the integral inequality to the nonnegative measurable function $(Cg)^p$ at $t=\lambda^p$. The assumed norm bound makes its integral finite and yields $m\{Cg>\lambda\}\le\lambda^{-p}\int(Cg)^p\,dm\le C_p^p\lambda^{-p}\|g\|_p^p$. [F2, given]

2.1 Thus the weak estimate holds for every $g$ and every positive threshold with finite $A=C_p^p\ge0$. The fixed exponent is within $1\le p<\infty$ and countable choice is given, so the maximal convergence principle proves the assertion for every $f$. [F1, step 1.1, given] ∎

## Literature boundary

[[rem-carleson-hunt-almost-everywhere-convergence]] records that the strong estimate is true. This proof establishes the implication from that estimate as an explicit hypothesis; it does not prove or discharge the estimate itself.
