---
id: def-na-mini-element-p1-bubble-p1-spaces
kind: definition
title: "The conforming P1-bubble/P1 mini element"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    "def-na-stokes-zero-mean-pressure-and-velocity-spaces",
    "def-matching-affine-simplicial-meshes",
    "def-broken-and-conforming-polynomial-spaces",
    "thm-zero-boundary-piecewise-polynomials-in-w10p",
    "lem-shape-regular-affine-simplex-scaling",
    "def-countable-choice"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation
        and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2,
        8.5.5, 8.6.1, 8.7.1 and 8.10."
verification: { precheck: n/a , judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
---

## Definition

Assume Countable Choice. Let $D\subset\mathbb R^d$, $d=2$ or $3$, be a bounded connected Lipschitz polygonal/polyhedral domain with a conforming shape-regular affine simplicial mesh $\mathcal T_h$. On a simplex $K$ with barycentric coordinates $\lambda_0,\ldots,\lambda_d$, define the scalar interior bubble $b_K=(d+1)^{d+1}\prod_{i=0}^d\lambda_i$. Let
$$S^1_h=\{w\in C^0(\overline D):w|_K\in P_1(K)\},\quad S^1_{h,0}=S^1_h\cap H^1_0(D).$$
The **mini-element spaces** are
$$V_h=[S^1_{h,0}]^d\oplus\bigoplus_{K\in\mathcal T_h}b_K\mathbb R^d\subset H^1_0(D;\mathbb R^d),\qquad Q_h=S^1_h\cap L^2_0(D).$$
Each bubble is extended by zero off its cell. The zero-boundary conformity of the piecewise affine part is supplied by [[thm-zero-boundary-piecewise-polynomials-in-w10p]]. The local/global dimensions are proved in the next dimension lemma.
