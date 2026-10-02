---
id: def-riesz-measure-subharmonic-function
kind: definition
title: "Distributional Riesz measure of a plane subharmonic function"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-plane-subharmonic-function
  - thm-plane-subharmonic-functions-are-locally-integrable
  - def-distributional-derivative
  - def-distribution
  - thm-minus-laplacian-of-the-fundamental-solution-is-dirac
  - def-countable-choice
justified_by:
  - thm-riesz-measure-is-positive-radon
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "B. Khoruzhenko, LTCC Potential Theory notes"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3.3, Theorems 41–42: the distributional Riesz measure and Poisson equation"
verification:
  precheck: n/a
---

## Definition

Let $\Omega\subseteq\mathbb C$ be a plane domain and let $u:\Omega\to[-\infty,\infty)$
be subharmonic on $\Omega$ ([[def-plane-subharmonic-function]]); in particular
$u$ is not identically $-\infty$ on any component. Then $u\in L^1_{\mathrm{loc}}(\Omega)$
([[thm-plane-subharmonic-functions-are-locally-integrable]]), so for every
compactly supported smooth test function $\varphi\in C_c^\infty(\Omega)$ the
Lebesgue integral $\int_\Omega u\,\Delta\varphi\,dA$ converges absolutely: the
support of $\Delta\varphi$ is compact and $\Delta\varphi$ is bounded, so
$\int_\Omega|u\,\Delta\varphi|\,dA\le\|\Delta\varphi\|_\infty\int_{\operatorname{supp}\Delta\varphi}|u|\,dA<\infty$.
The **distributional Riesz functional** of $u$ is

$$\mu_u(\varphi):=\frac1{2\pi}\int_\Omega u\,\Delta\varphi\,dA\qquad(\varphi\in C_c^\infty(\Omega)),$$

where $\Delta=\partial_x^2+\partial_y^2$ is the Laplacian, $dA$ is area Lebesgue
measure, and $C_c^\infty(\Omega)$ is the test space of [[def-distribution]]
with the distributional derivative conventions of [[def-distributional-derivative]].
The value is complex in general and is real for real-valued test functions.
The functional $\mu_u$ depends only on the almost-everywhere
representative of $u$: if $u=v$ a.e. then $u\,\Delta\varphi=v\,\Delta\varphi$
a.e. for every test function, so the integrals agree. Linearity in $\varphi$ is
inherited from the linearity of differentiation and integration.

The normalization factor $(2\pi)^{-1}$ is chosen so that, under Countable
Choice ([[def-countable-choice]]), a logarithmic point potential has unit
mass at its pole: $\Delta\log|z-a|=2\pi\delta_a$ in the
distributional sense, that is, $\mu_{\log|{\cdot}-a|}=\delta_a$
([[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]).

## Remarks

**What is and is not asserted here.** The assignment
$\varphi\mapsto\mu_u(\varphi)$ is defined as a functional on test functions. That
it is continuous for the test-function topology, that it is positive on
nonnegative test functions, and that it is consequently integration against a
unique positive Radon measure are not part of this definition; they are proved
under Dependent Choice in [[thm-riesz-measure-is-positive-radon]], which is the well-definedness
statement for the name "Riesz measure".

**Sign and coefficient conventions.** With the present sign convention a
subharmonic function has a positive Riesz measure: for the model
$u(z)=\log|z-a|$ under Countable Choice one has $\mu_u=\delta_a$ by the normalization above, and for a
compactly supported logarithmic potential $p_\mu=\int\log|z-w|\,d\mu(w)$ one
has $\mu_{p_\mu}=\mu$ ([[lem-logarithmic-potential-distributional-laplacian]]).

**Choice.** Defining the functional uses no choice principle: the integral is a
Lebesgue integral of an element of $L^1_{\mathrm{loc}}$ against a fixed smooth
test function. The logarithmic point-mass comparison above invokes the
published fundamental-solution theorem under its stated Countable Choice
hypothesis. The positive Radon measure interpretation invokes Dependent Choice
for the representation and uniqueness in the well-definedness theorem.
