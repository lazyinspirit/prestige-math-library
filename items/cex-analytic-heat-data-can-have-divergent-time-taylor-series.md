---
id: cex-analytic-heat-data-can-have-divergent-time-taylor-series
kind: counterexample
title: Analytic heat data need not give a time-analytic germ
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §4 Example 21, printed p. 11.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.4.1, first bullet, PDF p. 28, datum 1/(1+x²).
status: draft
origin: pipeline
proof_strategy: direct
deps: ["lem-normal-form-pde-determines-a-unique-formal-taylor-series", "rem-cauchy-kovalevskaya-is-an-analytic-not-smooth-well-posedness-theorem", "thm-symmetry-of-higher-mixed-partials", "thm-geometric-series", "def-characteristic-covector-hypersurface-and-noncharacteristic-data"]
---

## Statement refuted

Analytic initial data alone do not guarantee time-analytic solvability of $u_t=u_{xx}$. For $u(0,x)=1/(1+x^2)$, any analytic solution at zero would have $\partial_t^ku(0,0)=(-1)^k(2k)!$ for every k, and its time Taylor series would have radius zero.

## Facts & Assumptions

**Given:** The heat equation $u_t=u_{xx}$ and initial function $g(x)=1/(1+x^2)$. An analytic solution is assumed temporarily to derive the forced Taylor coefficients and a contradiction.

[F1] Analytic mixed derivatives commute. ([[thm-symmetry-of-higher-mixed-partials]]).

[F2] The geometric series for ratio -x squared converges to the reciprocal when its modulus is below one. ([[thm-geometric-series]]).

[F3] The principal symbol tests whether a normal covector is characteristic. ([[def-characteristic-covector-hypersurface-and-noncharacteristic-data]]).

## Counterexample

1.1 For $|x|<1$, the geometric identity gives $1/(1+x^2)=\sum_{k\ge0}(-1)^kx^{2k}$, hence the data are analytic with $g^{(2k)}(0)=(-1)^k(2k)!$. If u were analytic, repeated differentiation of its equation and F1 would give $\partial_t^ku=\partial_x^{2k}u$, beginning at k=0 and using $\partial_t\partial_x^{2k}u=\partial_x^{2k}u_t=\partial_x^{2k+2}u$ at each step. Evaluation on the initial trace gives the asserted derivatives. [given, F1, algebra, F2]

2.1 The time coefficient is $a_k=(-1)^k(2k)!/k!$. For every fixed t nonzero, $|a_{k+1}t^{k+1}|/|a_kt^k|=2(2k+1)|t|\to\infty$. Thus these terms eventually increase by a factor at least two and do not tend to zero. The time series diverges at every t nonzero and cannot represent an analytic germ. The PDE has total order two, with no u_tt term; its principal symbol is $\xi_x^2$ and vanishes at dt. It therefore lies outside the noncharacteristic CK hypothesis. [step 1.1, algebra, F3] ∎

## Source notes

Gantumur, §4 Example 21, printed p. 11; Ageno §2.4.1, PDF p. 28, specifies the data 1/(1+x²).

