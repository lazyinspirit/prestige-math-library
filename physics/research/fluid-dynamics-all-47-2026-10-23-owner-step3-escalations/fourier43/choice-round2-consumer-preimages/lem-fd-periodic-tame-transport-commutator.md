---
id: lem-fd-periodic-tame-transport-commutator
kind: lemma
title: "Tame transport commutator"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - lem-fd-periodic-fourier-embedding-products
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  lem-fd-periodic-fourier-embedding-products: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)"
      url: "https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf"
      locator: "§§2.1.1–2.1.2, §2.1.5.2, §4.1.1; Fourier, weak derivatives, product estimate and Leray projection."
    - title: "Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)"
      url: "https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/"
      locator: "Periodic pressure/Leray discussion and Sobolev Proposition 35 / Exercise 36."
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, let $m\ge s\ge4$ be integers, let $f,g\in C^\infty(Q_d;\mathbb R)$, and define $\Lambda^m$ by $\widehat{\Lambda^m q}(k)=w_k^m\widehat q(k)$. For each coordinate $j$,
$$\|[\Lambda^m,f]\partial_jg\|_{L^2}\le C_{d,m,s}\bigl(\|f\|_{H^m}\|g\|_{H^s}+\|f\|_{H^s}\|g\|_{H^m}\bigr),$$
where $[\Lambda^m,f]h=\Lambda^m(fh)-f\Lambda^mh$.

## Statement references

[Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)](https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf).

[Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)](https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[F1] [[def-fd-periodic-fourier-sobolev-spaces]]: Fourier coefficients use $w_k=(1+|k|^2)^{1/2}$, and $L^2$ norm is the coefficient $\ell^2$ norm.

[F2] [[lem-fd-periodic-fourier-embedding-products]]: for $\sigma>j+d/2$, $H^\sigma$ embeds in $C^j$ with the stated norm bound.

## Proof

**Given:** Countable Choice, $d\in\{1,2,3\}$, integers $m\ge s\ge4$, and smooth real $f,g$.

1.1 For a trigonometric polynomial approximation, the $k$th coefficient of the commutator is
$\sum_{v+\ell=k}(w_k^m-w_\ell^m)\widehat f(v)i\ell_j\widehat g(\ell)$.
The mean-value theorem applied to $x\mapsto(1+|x|^2)^{m/2}$ gives
$|w_{\ell+v}^m-w_\ell^m|\le C_m|v|(w_v^{m-1}+w_\ell^{m-1})$,
because $w_{\ell+\theta v}^{m-1}\le C_m(w_\ell^{m-1}+w_v^{m-1})$. [given, F1, algebra]

2.1 The first resulting convolution is bounded in $\ell^2$ by
$C\|w^m\widehat f\|_2\sum_\ell |\ell|\,|\widehat g(\ell)|$;
the second is bounded by
$C\left(\sum_v |v|\,|\widehat f(v)|\right)\|w^m\widehat g\|_2$.
Cauchy–Schwarz and $\sum_k |k|^2w_k^{-2s}<\infty$ for $s>1+d/2$ bound these sums by $C\|g\|_{H^s}$ and $C\|f\|_{H^s}$, respectively. The required strict inequality holds since $s\ge4$ and $d\le3$. Discrete Young then gives the claimed bound for polynomials. [given, F1, step 1.1, algebra]

3.1 Smooth Fourier truncations converge in each displayed Sobolev norm, so the polynomial estimate passes to smooth $f,g$ by continuity of multiplication and Fourier multipliers. The strict $s\ge4>d/2+1$ condition also agrees with the $C^1$ embedding in [F2]; no endpoint commutator estimate is used. [given, F1, F2, step 2.1, algebra] ∎

