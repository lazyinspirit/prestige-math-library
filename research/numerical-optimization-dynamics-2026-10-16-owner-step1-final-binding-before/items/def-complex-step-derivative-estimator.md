---
id: def-complex-step-derivative-estimator
kind: definition
title: "The complex-step derivative estimator and its component-error model"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-differentiability-holomorphic-and-entire, def-complex-conjugate-real-imaginary-part-and-modulus, def-abs-value]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicholas J. Higham, What Is the Complex Step Approximation?"
      url: "https://nhigham.com/2020/10/06/what-is-the-complex-step-approximation/"
    - title: "Mike Giles, Monte Carlo methods, Lecture 6: Complex Variable Trick"
      url: "https://www2.maths.ox.ac.uk/~gilesm/mc/mc/lec6.pdf"
    - title: "R. Boudjemaa, M. G. Cox, A. B. Forbes, and P. M. Harris, Automatic Differentiation Techniques and their Application in Metrology, NPL Report CMSC 26/03"
      url: "https://eprintspublications.npl.co.uk/2828/1/cmsc26.pdf"
---

## Definition

Let $U\subseteq\mathbb C$ be open, $x\in U\cap\mathbb R$, and $h>0$ with $x+ih\in U$. For a holomorphic $f:U\to\mathbb C$ that is real-valued on some real interval $I\subseteq U\cap\mathbb R$ containing $x$, the **complex-step estimate** is

$$C_hf(x):=\frac{\operatorname{Im}f(x+ih)}{h}.$$

For an inexact complex evaluation $\widehat f(x+ih)$, define its imaginary-component error by $\delta_{\rm im}:=|\operatorname{Im}\widehat f(x+ih)-\operatorname{Im}f(x+ih)|$. The inexact estimate is $\widehat C_hf(x):=\operatorname{Im}\widehat f(x+ih)/h$; its evaluation-error contribution is controlled by $\delta_{\rm im}/h$. No claim is made that arbitrary code representing a real function has a holomorphic extension.
