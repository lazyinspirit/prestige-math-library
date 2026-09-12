---
id: cex-a-schwartz-function-need-not-have-compact-support
kind: counterexample
title: A Schwartz function need not have compact support
deps: ["ex-gaussians-and-polynomials-times-gaussians-are-schwartz", "def-c-c-and-c-c-infinity-on-rn"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: §14.1
verification:
  audited: 2026-09-12
---

## Statement

The Schwartz function $g(x)=e^{-\pi|x|^2}$ has support all of $\mathbb R^n$, so a Schwartz function need not have compact support. This example is choice-free.

## Facts & Assumptions

**Given:** An integer $n\ge1$.

[F1] Polynomial Gaussians with positive parameter are Schwartz ([[ex-gaussians-and-polynomials-times-gaussians-are-schwartz]]).

[F2] Support is the closure of the nonzero set, and compact support defines $C_c^\infty$ ([[def-c-c-and-c-c-infinity-on-rn]]).

## Counterexample

1.1 Taking $P=1,t=1$ in [F1] gives $g\in\mathcal S$. Positivity of the real exponential gives $g(x)>0$ for every $x$, so [F2] gives $\operatorname{supp}g=\overline{\mathbb R^n}=\mathbb R^n$. [F1, F2]

2.1 The increasing open balls $B(0,k)$, $k=1,2,\ldots$, cover this support and have no finite subcover: a finite union lies in the largest of those balls and misses a point further along the first coordinate axis. Thus the support is not compact, while step 1.1 supplies the Schwartz hypothesis. [step 1.1, given] ∎
