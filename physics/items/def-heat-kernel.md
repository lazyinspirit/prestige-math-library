---
id: def-heat-kernel
kind: definition
title: "The heat kernel on $\\mathbb{R}^n$ and its causal extension"
status: published
origin: pipeline
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-ck-and-multi-index-notation-in-several-variables
  - def-euclidean-inner-product
  - def-laplacian-of-a-c2-function
  - def-real-exponential-function-and-e
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-derivative-of-exponential
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item def-heat-kernel; evidence research/frontier-38-owner-30-reader-3.md, research/frontier-38-owner-30-reader-findings-3.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 5.4, printed p. 130, formula (5.6)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.2, printed p. 152, formula (6.36)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1, p. 1, formula (1.0.2)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "formula (3.1.15), printed p. 103, and §3.2.4, printed p. 111, formula (3.2.24)"
---

## Definition

Let $n\ge1$ and $t>0$. The **heat kernel on $\mathbb R^n$** is the function

$$\Gamma(x,t):=(4\pi t)^{-n/2}\exp\!\Bigl(-\frac{|x|^2}{4t}\Bigr),\qquad x\in\mathbb R^n,$$

where $|x|^2=\langle x,x\rangle$ is the Euclidean square of
[[def-euclidean-inner-product]] and $\exp$ is the real exponential function of
[[def-real-exponential-function-and-e]]. For fixed $t>0$ the map
$x\mapsto\Gamma(x,t)$ is a composite of the quadratic form with the exponential
and a scalar multiple, so it is $C^\infty$ in the sense of
[[def-ck-and-multi-index-notation-in-several-variables]] by
[[thm-derivative-of-exponential]] and
[[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], and it is
strictly positive by [[cor-exponential-reciprocal-and-positivity]]. The
spatial Laplacian entering the heat equation is that of
[[def-laplacian-of-a-c2-function]].

The **causal extension** of the heat kernel is $\Gamma(x,t)$ for $t>0$ and
$\Gamma(x,t):=0$ for $t\le0$; the displayed formula is not evaluated at $t=0$
as a function value. The normalisation is fixed by the unit-mass identity
proved for the kernel on this page, and the causal extension is used only as a
locally integrable function or, after embedding, as a distribution.
