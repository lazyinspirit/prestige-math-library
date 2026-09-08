---
id: def-real-analytic-germ-in-several-variables
kind: definition
title: Real analytic germs in several variables
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §3, Definition 12 and equation (25), printed p. 7. Real restriction and finite-vector convention are spelled out locally.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.3.3, proof of Theorem 2.22, PDF pp. 25–27; independent comparison for the analytic reduction and majorant argument.
status: draft
origin: pipeline
deps: ["def-multivariable-power-series", "def-real-analytic-function", "thm-power-series-define-holomorphic-functions-in-several-variables"]
---

## Definition

Fix $n\ge1$ and $a\in\mathbb R^n$. A real analytic germ at $a$ is an equivalence class of real functions agreeing on a neighborhood of $a$, represented on some polydisc $|x_i-a_i|<r_i$, $r_i>0$, by an absolutely convergent series $f(x)=\sum_{\alpha\in\mathbb N^n}c_\alpha(x-a)^\alpha$ with real coefficients. Here $0\in\mathbb N$, $\alpha!=\prod_i\alpha_i!$, and $c_\alpha=D^\alpha f(a)/\alpha!$. A vector germ has a finite positive number of such components, with a common polydisc obtained by taking coordinatewise minima of their radii.

The multi-index convention and absolute convergence are those of [[def-multivariable-power-series]]; for $n=1$ this agrees with [[def-real-analytic-function]]. The same coefficients define the complexification. Indeed choose a positive real polyradius $s<r$; absolute convergence at $a+s$ bounds $|c_\alpha|s^\alpha$ uniformly. [[thm-power-series-define-holomorphic-functions-in-several-variables]] therefore gives a holomorphic sum on the complex $s$-polydisc and the displayed derivative formula. Restriction to the real slice recovers $f$.

## Source notes

Gantumur, §3, Definition 12 and equation (25), printed p. 7. Real restriction and finite-vector convention are spelled out locally.

