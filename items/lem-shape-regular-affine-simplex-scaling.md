---
id: lem-shape-regular-affine-simplex-scaling
kind: lemma
title: Shape regularity controls affine simplex geometry
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-matching-affine-simplicial-meshes, lem-affine-pullback-weak-derivatives-and-scaling, lem-affine-simplex-gauss-green-formula, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11, “Local interpolation on affine meshes”
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
      locator: "§11.1, printed pp. 117–119: Jacobian bounds, shape regularity, and neighboring simplex sizes."
    - title: Luca Heltai, Numerical Methods for Partial Differential Equations, Lecture 2
      url: https://luca-heltai.github.io/nmpde/lectures/lecture-02/
      locator: "§§5–7: inradius condition and affine scaling factors."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $F_K(\widehat x)=b_K+A_K\widehat x$ map the fixed reference simplex
$\widehat S_d$ bijectively to a cell $K$ of a shape-regular family, and let
$h_K$ be its diameter and $\rho_K$ its inradius. There are constants
$c,C>0$, depending only on $d$, the reference simplex, and the shape
regularity bound, such that
$$c h_K\le s_{\min}(A_K)\le \|A_K\|\le C h_K, \qquad c h_K^d\le\det A_K\le C h_K^d.$$
For each facet $F$, its affine surface Jacobian is comparable to
$h_K^{d-1}$, and its altitude from the opposite vertex is comparable to
$h_K$. Thus Sobolev scaling constants can be expressed using $h_K$ alone,
with constants uniform over the family.

## Facts & Assumptions

**Given:** A nondegenerate affine simplex map, a fixed reference simplex, and the shape regularity bound $h_K/\rho_K\le\sigma$.

[F1] The reference simplex is fixed, with diameter $D_{widehat S}<\infty$ and inradius $r_{widehat S}>0$; $h_K$ is the diameter and $\rho_K$ the inradius of $K$. ([[def-matching-affine-simplicial-meshes]])

[F2] The oriented area element of an affine facet is $n\,dS=\det(A_K)A_K^{-T}\widehat n\,d\widehat S$, so its surface Jacobian is $J_F=\det(A_K)|A_K^{-T}\widehat n|$ when $\det A_K>0$. Affine Sobolev seminorms transform with the corresponding powers of $A_K$ and $A_K^{-1}$. ([[lem-affine-simplex-gauss-green-formula]], [[lem-affine-pullback-weak-derivatives-and-scaling]])

[F3] The two affine change-of-variables suppliers used in [F2] assume Countable Choice. ([[def-countable-choice]])

## Proof

1.1 Use a singular-value decomposition $A_K=U\Sigma V^T$. If $v_{\max}$ is a unit right singular vector for $s_{\max}=\|A_K\|$, the reference inscribed ball contains two points separated by $2r_{\widehat S}v_{\max}$; their images are separated by $2r_{\widehat S}s_{\max}$. Thus $s_{\max}\le h_K/(2r_{\widehat S})$. For a unit right singular vector $v_{\min}$ and corresponding left vector $u_{\min}$, the width of $K$ in direction $u_{\min}$ equals $s_{\min}$ times the width of the reference simplex in direction $v_{\min}$, which is at most $s_{\min}D_{\widehat S}$. Every ball of radius $t<\rho_K$ contained in $K$ has width $2t$ in every direction, so letting $t\uparrow\rho_K$ gives $2\rho_K\le s_{\min}D_{\widehat S}$. Since $h_K/\rho_K\le\sigma$, $s_{\min}\ge2h_K/(\sigma D_{\widehat S})$. [F1, given, algebra]

2.1 Every singular value lies between $c h_K$ and $C h_K$ by step 1.1. Their product is $|\det A_K|=\det A_K$ because the reference map is orientation preserving. Hence $c' h_K^d\le\det A_K\le C'h_K^d$. [step 1.1, given, algebra]

3.1 For a reference facet normal $\widehat n$, [F2] gives its physical surface Jacobian $J_F=\det(A_K)|A_K^{-T}\widehat n|$. The singular values of $A_K$ from step 1.1 are between $ch_K$ and $Ch_K$, so $|A_K^{-T}\widehat n|$ is between $c h_K^{-1}$ and $C h_K^{-1}$. Together with the determinant bounds this gives $c h_K^{d-1}\le J_F\le C h_K^{d-1}$. The simplex pyramid identity $|K|=|F|H_F/d$ gives $H_F=d|K|/|F|$, so step 2.1 and these facet bounds show $c h_K\le H_F\le C h_K$. This proves all claimed geometric scalings. [F2, F3, step 1.1, step 2.1, algebra] ∎
