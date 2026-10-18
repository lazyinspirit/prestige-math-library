---
id: def-crouzeix-raviart-fractional-sobolev-regularity
kind: definition
title: Fractional Sobolev regularity on a simplex
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-fractional-slobodeckij-space-on-euclidean-space
  - def-sobolev-space-wkp-and-its-norm
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.1, PDF p. 2, and Lemma 36.8, PDF pp. 6–7: W^{1+r,2} and face traces for r>1/2."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 326–343: local H2 interpolation and reference-simplex scaling."
---

## Definition

Assume Countable Choice. Let $U\subset\mathbb R^d$ be a bounded open set,
$0<r<1$, and let $q$ be a measurable real function on $U$. Define
$$[q]_{H^r(U)}^2:=\int_U\int_U\frac{|q(x)-q(y)|^2}{|x-y|^{d+2r}}\,dx\,dy,$$
with the diagonal integrand set to zero, and
$H^r(U):=\{q\in L^2(U):[q]_{H^r(U)}<\infty\}$, using almost-everywhere
classes and norm $\|q\|_{H^r(U)}^2:=\|q\|_{L^2(U)}^2+[q]_{H^r(U)}^2$.
For $u\in H^1(U)$, write $u\in H^{1+r}(U)$ when each weak derivative
$\partial_j u$ belongs to $H^r(U)$, and define
$$|u|_{H^{1+r}(U)}^2:=\sum_{j=1}^d[\partial_j u]_{H^r(U)}^2.$$
For vector fields, use the sum of the componentwise squared $H^r$ norms.
Use these definitions on each cell $K$ and on the full domain $\Omega$, with
$\|u\|_{H^{1+r}(U)}^2:=\|u\|_{H^1(U)}^2+|u|_{H^{1+r}(U)}^2$. At $r=1$,
set $H^1(U)=W^{1,2}(U)$, interpret $[q]_{H^1(U)}^2:=\|\nabla q\|_{L^2(U)}^2$,
and set $H^{1+r}(U)=W^{2,2}(U)$ with the integer-order membership of
[[def-sobolev-space-wkp-and-its-norm]], retaining the displayed full-norm rule.
Thus $|u|_{H^2(U)}^2=\sum_{j,k}\|\partial_k\partial_j u\|_{L^2(U)}^2$.
This Hessian convention counts mixed derivatives twice: its full norm is
equivalent to, rather than identical with, the ordinary multi-index
$W^{2,2}$ norm, with
$\|u\|_{W^{2,2}(U)}\le\|u\|_{H^2(U)}\le\sqrt2\,\|u\|_{W^{2,2}(U)}$. The local
seminorm is the restriction of the Slobodeckij convention in
[[def-fractional-slobodeckij-space-on-euclidean-space]] to $U\times U$.
