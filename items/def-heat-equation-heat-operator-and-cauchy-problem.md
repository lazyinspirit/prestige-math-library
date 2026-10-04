---
id: def-heat-equation-heat-operator-and-cauchy-problem
kind: definition
title: "The heat operator, the heat equation, and the Cauchy problem"
status: published
origin: pipeline
deps:
  - def-ck-and-multi-index-notation-in-several-variables
  - def-directional-and-partial-derivatives
  - def-elliptic-hyperbolic-and-parabolic-principal-symbols
  - def-laplacian-of-a-c2-function
  - def-linear-semilinear-quasilinear-and-fully-nonlinear-pde
  - def-partial-differential-operator-order-and-solution
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.2, printed pp. 151–152, equation (6.32)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1, printed p. 127, equations (5.1)–(5.2)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.1.1, printed p. 99, equation (3.1.1)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1, p. 1"
---

## Definition

Let $n\ge1$ and let $\Omega\subseteq\mathbb R^{n+1}$ be open in the space-time
variable $(x,t)\in\mathbb R^n\times\mathbb R$; points of $\Omega$ are thus
written with a spatial slot $x\in\mathbb R^n$ and a time slot $t\in\mathbb R$.
Partial derivatives are those of [[def-directional-and-partial-derivatives]],
multi-indices and the classes $C^k$ are those of
[[def-ck-and-multi-index-notation-in-several-variables]], and $\Delta_x$
denotes the Laplacian of [[def-laplacian-of-a-c2-function]] applied in the
spatial variables with $t$ held fixed. The vocabulary of differential
operators, their order, and of classical solutions is that of
[[def-partial-differential-operator-order-and-solution]].

The **heat operator** is $\partial_t-\Delta_x$, a linear second-order operator
in the sense of [[def-linear-semilinear-quasilinear-and-fully-nonlinear-pde]].
A **classical solution of the heat equation** on $\Omega$ is a function
$u\in C^2(\Omega)$ with

$$\partial_tu-\Delta_xu=0\qquad\text{on }\Omega,$$

and the **inhomogeneous heat equation** is the equation
$\partial_tu-\Delta_xu=f$ for a prescribed source $f$. A complex-valued $u$ is
a classical solution when its real and imaginary parts are. Since the spatial
quadratic form of $\partial_t-\Delta_x$ is positive definite while the time
direction enters only through a first derivative, the operator is parabolic at
every point in the classification of
[[def-elliptic-hyperbolic-and-parabolic-principal-symbols]].

A **Cauchy problem** for the heat equation on a space-time domain consists of
the equation together with initial data $u(\cdot,0)=u_0$ prescribed on the
time-zero slice; values prescribed on the lateral (spatial) boundary of the
domain are **boundary data**. Initial and spatial boundary data are different
sets of constraints and are not interchanged.
