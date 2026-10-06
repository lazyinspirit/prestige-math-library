---
id: def-wave-energy-and-energy-flux
kind: definition
title: "Wave energy density, energy flux and total energy"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-ck-and-multi-index-notation-in-several-variables, def-jacobian-matrix-and-gradient, def-divergence-and-curl-of-a-c1-vector-field, def-euclidean-inner-product, def-nonnegative-lebesgue-integral]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed p. 176, (7.27): the energy $E(t)=\\frac12\\int_U(|\\nabla u|^2+u_t^2)\\,d^nx$"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.7.1, printed pp. 87-88, (2.7.3)-(2.7.5): energy density $e$ and energy flow $S$ with the $c^2$ weight"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1.1, printed p. 212, (7.3) and the following display: energy density and flux $-u_tDu$ at unit speed"
verification:
  precheck: n/a
---

## Definition

Let $n\ge1$, $c>0$, let $U\subseteq\mathbb R^n$ be open, let $I\subseteq\mathbb R$
be an open interval and let $u:U\times I\to\mathbb R$ be $C^2$
([[def-ck-and-multi-index-notation-in-several-variables]]). Write
$u_t:=\partial_tu$ and let

$$Du:=(\partial_0u,\ldots,\partial_{n-1}u)$$

be the spatial gradient of [[def-jacobian-matrix-and-gradient]], a $C^1$ field
$U\times I\to\mathbb R^n$ whose Euclidean norm is $|Du|$
([[def-euclidean-inner-product]]).

The **kinetic density**, **potential density** and **energy density** of $u$ are
the continuous functions

$$e_{\mathrm{kin}}:=\frac12u_t^2,\qquad e_{\mathrm{pot}}:=\frac{c^2}{2}|Du|^2,\qquad e:=e_{\mathrm{kin}}+e_{\mathrm{pot}}=\frac12\bigl(u_t^2+c^2|Du|^2\bigr),$$

and the **energy flux** is the $C^1$ vector field

$$q:=-c^2u_t\,Du$$

([[def-divergence-and-curl-of-a-c1-vector-field]]). For a Lebesgue-measurable
$\Omega\subseteq U$ and a time $t\in I$ with
$\int_\Omega e(x,t)\,dx<\infty$, the **total energy in $\Omega$** is the real
number

$$E_\Omega(t):=\int_\Omega e(x,t)\,dx$$

([[def-nonnegative-lebesgue-integral]]); when the integral is infinite the total
energy is $+\infty$ and no real value is assigned.

**Sign convention.** If $\Omega$ is admissible for the divergence theorem with
outward unit normal $\nu$, then $\int_{\partial\Omega}q\cdot\nu\,dS$ is the
energy leaving $\Omega$ across $\partial\Omega$ per unit time. This is the
convention under which the pointwise identity
$\partial_te+\operatorname{div}q=u_t\,\Box_cu$ of
[[lem-local-wave-energy-conservation-law]] holds with
$\Box_c=\partial_t^2-c^2\Delta$
([[def-wave-equation-cauchy-data-and-wave-speed]]): the flux vector
$q=-c^2u_tDu$ points in the direction of energy transport, and
$\operatorname{div}q$ is the local rate at which energy leaves a point.

**Speed convention.** The gradient term carries the exact factor $c^2$, so at
unit speed the energy density is the familiar
$\frac12u_t^2+\frac12|Du|^2$ and the flux is $-u_tDu$. The general-speed
statements of this page are rendered at $c>0$ throughout.

No equation for $u$, no finiteness of a particular integral and no regularity of
any boundary are asserted here: each statement that uses these objects states
its own hypotheses, and sufficient settings in which $E_\Omega$ is finite and constant
are supplied by [[thm-conservation-of-total-wave-energy]].
