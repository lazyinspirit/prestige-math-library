---
id: "prop-injectivity-radius-at-each-point-is-positive"
kind: "proposition"
title: "Injectivity radius at each point is positive"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-injectivity-radius-at-a-point-and-of-a-manifold","thm-existence-of-normal-neighborhoods","prop-coordinate-geodesic-equation","prop-christoffel-formula-for-the-levi-civita-connection","prop-coordinate-criterion-for-a-riemannian-metric","prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds","thm-existence-uniqueness-and-smooth-dependence-of-geodesics","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Corollary 17.1.7 and Definition 23.3.3, pp.130 and 171--172
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Every point $p$ of a boundaryless Riemannian manifold has
$$\operatorname{inj}(p)>0.$$
Nevertheless, the global infimum $\operatorname{inj}(M)$ can equal zero.

## Facts & Assumptions

**Given:** A boundaryless Riemannian manifold and a point $p$ for the first assertion.

[F1] Under [[def-countable-choice]], [[thm-existence-of-normal-neighborhoods]] supplies a positive-radius tangent ball on which $\exp_p$ is a diffeomorphism, and [[def-injectivity-radius-at-a-point-and-of-a-manifold]] defines $\operatorname{inj}(p)$ as the supremum of all such radii.

[F2] Constant positive metric coefficient is Riemannian, its Levi--Civita symbol vanishes, and the coordinate geodesic equation then has affine solutions ([[prop-coordinate-criterion-for-a-riemannian-metric]], [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-coordinate-geodesic-equation]], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F3] A countable disjoint union of fixed-dimensional smooth manifolds with specified countable bases and atlases is a smooth manifold ([[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], some $r>0$ belongs to the admissible-radius set $\mathcal R_p$. Therefore $\operatorname{inj}(p)=\sup\mathcal R_p\ge r>0$. This also covers $\operatorname{inj}(p)=+\infty$. [F1]

1.2 To show that no uniform positive bound follows, for each integer $m\ge1$ let $C_m=\mathbb R/(2/m)\mathbb Z$. Quotienting intervals of length less than $2/m$ gives an explicit smooth atlas: overlaps differ by translations by integer multiples of $2/m$; rational subintervals give a specified countable basis. Give every such chart the metric $ds^2$. By the transformation rule for translations this is a well-defined Riemannian metric, and [F3] makes $M=\bigsqcup_{m\ge1}C_m$ a boundaryless Riemannian one-manifold componentwise. [F2, F3, construct]

2.1 Fix $p=[x]\in C_m$ and identify $T_pC_m$ with $\mathbb R$ by $\partial_s$. The metric coefficient is the constant $1$, so [F2] makes the Christoffel symbol zero. Thus the unique maximal geodesic with initial scalar $v$ is $t\mapsto[x+tv]$, and $\exp_p(v)=[x+v]$. If $0<r\le1/m$ and $u,v\in(-r,r)$ have the same exponential image, then $u-v=2k/m$ for an integer $k$, but $|u-v|<2r\le2/m$, forcing $k=0$. The quotient map is a local translation, so this injective restriction is a diffeomorphism onto its open image. If $r>1/m$, the two distinct interior vectors $-1/m$ and $1/m$ have the same image. Hence exactly the radii $0<r\le1/m$ are admissible and $\operatorname{inj}(p)=1/m$. [F1, F2, step 1.2]

3.1 It follows that $\operatorname{inj}(M)=\inf_{m\ge1}1/m=0$: zero is a lower bound, and any $\varepsilon>0$ is exceeded downward by $1/m$ for an integer $m>1/\varepsilon$. Thus the second assertion has an explicit witness. The witness is nonempty and one-dimensional; at dimension zero step 1.1 gives $+\infty$ pointwise, and for an empty manifold the pointwise assertion is vacuous. Zero tangent vectors lie in every test ball. At the critical radius $1/m$ the colliding vectors are endpoints and therefore excluded, whereas for every larger radius they are included. $\mathrm{AC}_\omega$ is propagated through [F1]--[F2]; the witness uses fixed quotient atlases, bases, metrics, and an enumerated disjoint union, so it makes no additional family choice. [F1, F2, F3, step 1.1, step 1.2, step 2.1] ∎
