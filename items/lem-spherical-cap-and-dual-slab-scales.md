---
id: lem-spherical-cap-and-dual-slab-scales
kind: lemma
title: Spherical cap and dual slab scales
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-sphere-finite-graph-charts-and-surface-density
- lem-euclidean-chart-measure-agrees-with-polar-surface-measure
- thm-linear-change-of-variables-for-lebesgue-measure
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- def-jacobian-matrix-and-gradient
- def-countable-choice
- thm-lebesgue-measure-of-a-box-of-every-kind
- cor-volume-of-a-radius-r-n-ball
- thm-polar-coordinates-formula-for-lebesgue-measure
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: '§3.2, printed p.8: spherical cap scales, dual tube and necessary exponent comparison; the exact constants and cap formula are computed locally.'
---

## Statement

Assume Countable Choice and let $n\ge2$. For $\delta\in(0,1]$ let $C_\delta=\{\omega\in S^{n-1}:1-\omega\cdot e_n\le\delta^2\}$ and, for a fixed $c>0$, $T_\delta=\{\xi\in\mathbb R^n:|\xi_n|\le c\delta^{-2},\ |\xi_j|\le c\delta^{-1}\ (j<n)\}$. Then $C_\delta$ lies in the closed hemisphere $\{\omega_n\ge0\}$ and, in the graph chart $\omega=(y,\sqrt{1-|y|^2})$ whose surface density is $(1-|y|^2)^{-1/2}$, $\sigma(C_\delta)=\int_{|y|^2\le2\delta^2-\delta^4}(1-|y|^2)^{-1/2}\,dy$; consequently there are constants $0<c_n\le C_n<\infty$ with $c_n\delta^{n-1}\le\sigma(C_\delta)\le C_n\delta^{n-1}$, while $\lambda_n(T_\delta)=(2c)^n\delta^{-(n+1)}$. Moreover $\operatorname{diam}C_\delta\le2\sqrt2\,\delta$, and the orthogonal group preserves $\sigma$, so the same scales hold for every cap $\{\omega:1-\omega\cdot v\le\delta^2\}$ with $v\in S^{n-1}$.

At $\delta=1$, the integral formula is read on $|y|<1$; the omitted equator has surface measure zero, as proved below.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, $\delta\in(0,1]$, $c>0$, the cap $C_\delta$ and the slab $T_\delta$.

[F1] Sphere chart and density: in the graph chart $\omega=(y,\sqrt{1-|y|^2})$ over $B\subseteq\mathbb R^{n-1}$ the polar surface measure has Lebesgue density $(1-|y|^2)^{-1/2}$, and the chart measure equals $\sigma$; orthogonal transformations preserve $\sigma$, and the chart measure is invariant under the linear change of variables used below. ([[lem-sphere-finite-graph-charts-and-surface-density]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[thm-linear-change-of-variables-for-lebesgue-measure]], [[def-jacobian-matrix-and-gradient]])

[F2] Product structure: for a box $R=\prod_{i<n}(a_i,b_i]$ one has $\lambda_n(R)=\prod_i(b_i-a_i)$, and the $(n-1)$-dimensional ball of radius $r$ has volume $\omega_{n-1}r^{n-1}$; iterated integrals over product domains are computed by Tonelli. ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[cor-volume-of-a-radius-r-n-ball]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F3] Polar coordinates identify $\sigma(S^{n-1})=n\,\lambda_n(B_1^n)$ and give finiteness of $\sigma$; the sphere has unit radius. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])



## Proof

**Proof technique:** direct; rewrite the cap inequality in the graph chart, integrate the chart density with two-sided bounds, compute the slab as a box, and estimate the diameter from the cap condition.

1.1 The cap lies in the closed hemisphere since $\omega_n\ge1-\delta^2\ge0$. For $\delta<1$ it lies in the open upper chart, and squaring $\sqrt{1-|y|^2}\ge1-\delta^2$ gives $|y|^2\le2\delta^2-\delta^4$, yielding the stated integral with [F1]. At $\delta=1$ the cap is the closed upper hemisphere. Its equator has surface measure zero: cover the equator by the other hemisphere charts; there $\omega_n$ is one parameter coordinate, and the equator is a coordinate hyperplane of Lebesgue measure zero by Tonelli (a singleton coordinate has zero length). The chart density is finite on its open domain, so integrating it over that null set gives zero. Thus the formula also holds at $\delta=1$, integrating over $|y|<1$; boundary values may be assigned arbitrarily. [F1, F2, given, algebra]

1.2 The slab. $T_\delta$ is the box $\prod_{j<n}[-c\delta^{-1},c\delta^{-1}]\times[-c\delta^{-2},c\delta^{-2}]$, a product of $n-1$ intervals of length $2c\delta^{-1}$ and one of length $2c\delta^{-2}$. By [F2], $\lambda_n(T_\delta)=(2c\delta^{-1})^{n-1}(2c\delta^{-2})=(2c)^n\delta^{-(n-1)-2}=(2c)^n\delta^{-(n+1)}$. [F2, algebra]

2.1 Two-sided bounds for the cap. Lower bound: the ball $|y|\le\delta$ satisfies $|y|^2\le\delta^2\le2\delta^2-\delta^4$ and on it the density is at least $1$; by [F2], $\sigma(C_\delta)\ge\omega_{n-1}\delta^{n-1}$. Upper bound: on the cap $1-|y|^2\ge(1-\delta^2)^2$, so the density is at most $(1-\delta^2)^{-1}$; the domain is contained in the ball of radius $\sqrt{2\delta^2-\delta^4}\le\sqrt2\,\delta$, so for $\delta\le1/2$ the density factor is at most $4/3$ and $\sigma(C_\delta)\le(4/3)\omega_{n-1}2^{(n-1)/2}\delta^{n-1}$. For $\delta\ge1/2$ one has $C_\delta\subseteq S^{n-1}$ and $\delta^{n-1}\ge2^{-(n-1)}$, so $\sigma(C_\delta)\le\sigma(S^{n-1})=n\lambda_n(B_1^n)\le n\lambda_n(B_1^n)2^{n-1}\delta^{n-1}$ by [F3]. Thus $c_n\delta^{n-1}\le\sigma(C_\delta)\le C_n\delta^{n-1}$ with $c_n:=\omega_{n-1}$ and $C_n:=\max\{(4/3)\omega_{n-1}2^{(n-1)/2},\ n\lambda_n(B_1^n)2^{n-1}\}$. [F2, F3, step 1.1, algebra]

2.2 The diameter. Let $\omega,\omega'\in C_\delta$ and write $\omega=(u,\omega_n)$, $\omega'=(u',\omega_n')$ with $u,u'\in\mathbb R^{n-1}$. From step 1.1, $|u|^2\le2\delta^2-\delta^4$ and $|u'|^2\le2\delta^2-\delta^4$, while $\omega_n,\omega_n'\ge1-\delta^2$. Hence $$\omega\cdot\omega'=u\cdot u'+\omega_n\omega_n'\ge-|u||u'|+(1-\delta^2)^2\ge-(2\delta^2-\delta^4)+(1-\delta^2)^2=1-4\delta^2+2\delta^4,$$ so $|\omega-\omega'|^2=2-2\omega\cdot\omega'\le8\delta^2-4\delta^4\le8\delta^2$ and $\operatorname{diam}C_\delta\le2\sqrt2\,\delta$. [given, step 1.1, algebra]

3.1 Rotational reduction. For $v\in S^{n-1}$ choose an orthogonal map $R$ with $Re_n=v$; finite-dimensional orthogonal algebra supplies such an $R$ without choice. The cap $\{\omega:1-\omega\cdot v\le\delta^2\}=R[C_\delta]$ is the image of $C_\delta$ under an orthogonal transformation, which preserves $\sigma$ by [F1]; hence it has the same measure and the same diameter bound. [F1, step 2.1, step 2.2]

4.1 Conclusion. Step 1.1 rewrites the cap in the graph chart, step 2.1 gives the two-sided scale $c_n\delta^{n-1}\le\sigma(C_\delta)\le C_n\delta^{n-1}$, step 1.2 computes $\lambda_n(T_\delta)=(2c)^n\delta^{-(n+1)}$, step 2.2 gives $\operatorname{diam}C_\delta\le2\sqrt2\delta$, and step 3.1 transfers the scales to arbitrary axis $v$ by orthogonal invariance. [step 1.1, step 2.1, step 1.2, step 2.2, step 3.1] ∎
