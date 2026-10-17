---
id: alg-newton-correction-for-vector-residuals
kind: algorithm
title: "Newton correction for a square vector residual"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-invertible-euclidean-linear-map]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed pp. 138–139 / PDF pp. 5–6: Newton's linearized system"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equations (92)–(93): Jacobian linearization and Newton correction"
---

## Definition

Let $n\ge1$, let $A:\mathbb R^n\to\mathbb R^n$ be a linear map, and let
$r\in\mathbb R^n$ be a residual vector. If $A$ is not invertible in the sense
of [[def-invertible-euclidean-linear-map]], return
$(\texttt{singular-jacobian},\varnothing)$. If $A$ is invertible, return
$(\texttt{correction},s)$, where $s$ is the unique vector solving
$$As=-r.$$

The output is a linear correction, not a claim that $r$ came from a nonlinear
function or that applying the correction decreases a residual.
