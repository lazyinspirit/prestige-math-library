---
id: lem-natural-cubic-spline-second-derivative-perturbation
kind: lemma
title: Nodal second-derivative perturbations bound the natural spline error
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-natural-cubic-spline
  - thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter IV,
        pp. 42–45
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
verification:
  precheck: pass
---

## Statement

Let $x_1<\cdots<x_r$ be natural interpolation knots, $r\ge2$, and put
$h_i=x_{i+1}-x_i$ and $H=\max_i h_i$. Let $s$ be the natural cubic
interpolant with data $y_i$ and nodal second derivatives $M_i$, with
$M_1=M_r=0$. Let $\widehat M_1=\widehat M_r=0$ and let
$\widehat s$ be the piecewise cubic formed from the same values $y_i$ and
the second derivatives $\widehat M_i$ using the natural cubic piece formula
of [[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]]. On
the knot hull $[x_1,x_r]$, if
$$E=\max_{1\le i\le r}|\widehat M_i-M_i|,$$
then
$$\|\widehat s-s\|_{L^\infty([x_1,x_r])}\le \frac{H^2}{8}E.$$

## Facts & Assumptions

**Given:** Strictly increasing knots $x_1<\cdots<x_r$, data $y_i$, the natural interpolant $s$, and arbitrary replacement nodal second derivatives $\widehat M_i$ with the same zero endpoint values.

[F1] [[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]]: on $[x_i,x_{i+1}]$ the spline is the cubic with endpoint values $y_i,y_{i+1}$ and endpoint second derivatives $M_i,M_{i+1}$.

[A1] $\widehat M_1=M_1=0$ and $\widehat M_r=M_r=0$.

## Proof

1.1 Fix $i$ and write $h=h_i$, $t=(x-x_i)/h\in[0,1]$, and $\Delta_j=\widehat M_j-M_j$. The cubic difference $q=\widehat s-s$ vanishes at both endpoints. Its second derivative is affine with endpoint values $\Delta_i,\Delta_{i+1}$, so $q''(x)=(1-t)\Delta_i+t\Delta_{i+1}$. Integrating this polynomial twice and imposing the zero endpoint values gives $\widehat s(x)-s(x)=\frac{h^2}{6}\left(\Delta_i((1-t)^3-(1-t))+\Delta_{i+1}(t^3-t)\right)$. [given, F1, A1, algebra]

2.1 On $0\le t\le1$, $(1-t)-(1-t)^3=t(1-t)(2-t)\ge0$ and $t-t^3=t(1-t)(1+t)\ge0$. Their sum is $3t(1-t)\le3/4$. Therefore the absolute value in step 1.1 is at most $h^2 E(3/4)/6=h^2E/8\le H^2E/8$. Taking the maximum over the finitely many knot intervals proves the claim on $[x_1,x_r]$. [given, step 1.1, algebra] ∎
