---
id: cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one
kind: corollary
title: Almost-everywhere convergence from the Carleson–Hunt estimate
deps: [thm-carleson-hunt-maximal-inequality-on-the-torus, lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence, thm-chebyshev-markov-inequality-for-the-integral, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, p. 52, closure route after Theorem 8.7'}]
status: published
origin: pipeline
proof_strategy: "direct"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one.json
---

## Statement

Assume the Axiom of Choice and let $1<p<\infty$. Every complex $f\in L^p(\mathbb T)$ satisfies $S_Nf\to f$ almost everywhere, with symmetric partial sums and normalized Haar measure on the period-one torus. The conclusion holds for every measurable representative of $f$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $1<p<\infty$, and the normalized torus conventions.

[F1] Under AC, a finite constant $C_p$ satisfies $\|Cg\|_p\le C_p\|g\|_p$ for every complex $g\in L^p(\mathbb T)$, where $Cg=\sup_{N\ge0}|S_Ng|$ ([[thm-carleson-hunt-maximal-inequality-on-the-torus]]).

[F2] Under countable choice, a bound $m\{Cg>\lambda\}\le A\lambda^{-p}\|g\|_p^p$ for all $g\in L^p$ and all $\lambda>0$, with finite $A\ge0$, implies $S_Nf\to f$ almost everywhere for every $f\in L^p$, for every measurable representative ([[lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence]]).

[F3] For nonnegative measurable $h$ and $t>0$, $m\{h\ge t\}\le t^{-1}\int h\,dm$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

[F4] The Axiom of Choice ([[def-axiom-of-choice]]) implies countable choice and supplies the choice hypothesis of F1 and F2.

## Proof

1.1 For $g\in L^p$ and $\lambda>0$, F1 and F3 applied to $(Cg)^p$ at $t=\lambda^p$ give $m\{Cg>\lambda\}\le\lambda^{-p}\int(Cg)^p\,dm\le C_p^p\lambda^{-p}\|g\|_p^p$. The maximal function and Fourier conventions in F1 agree with those in F2. [F1, F3, given]

2.1 The weak estimate therefore holds for every $g$ and every positive threshold with finite $A=C_p^p$. Since $1<p<\infty$ lies in the range $1\le p<\infty$ of F2 and AC supplies countable choice, F2 proves the assertion for every $f$ and every measurable representative. The strong estimate is discharged by the local proved theorem F1. [F2, F4, step 1.1, given] ∎
