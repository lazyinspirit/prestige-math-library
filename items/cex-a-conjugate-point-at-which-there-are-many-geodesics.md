---
id: cex-a-conjugate-point-at-which-there-are-many-geodesics
kind: counterexample
title: A conjugate point at which there are many geodesics
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-derivation-at-a-point-and-tangent-space
  - def-euclidean-inner-product
  - def-finite-cardinality
  - def-geodesic-of-an-affine-connection
  - def-levi-civita-connection
  - def-inner-product-norm
  - def-inner-product-space
  - def-natural-numbers
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - def-smooth-manifold
  - ex-conjugate-antipodes-on-the-round-sphere
  - ex-cut-locus-of-a-point-on-a-round-sphere
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - lem-of-naturals-positive
  - lem-of-square-monotone
  - lem-pigeonhole
  - prop-exponential-map-scales-geodesic-time
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - thm-coordinate-derivations-form-a-basis-of-the-tangent-space
  - thm-gram-schmidt-orthonormalisation
  - thm-newton-leibniz-with-interior-derivative
  - thm-of-square-roots
  - thm-subset-of-a-finite-set
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.189-190: the round-sphere cut locus and the observation (printed p.190) that geodesics wrapping past the antipode stop minimizing; the infinite family of minimizing meridians is computed locally here."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 23, section 23.2 (cut locus and regularity of the distance function), and Lecture 24, section 24.1 (the round sphere), printed pp.163-175; the multiplicity n-1 and the cut facts are taken from the pair's own sphere examples."
---

## Statement refuted

**Refuted claim.** Let $(M,g)$ be a complete, connected Riemannian manifold
without boundary, and let $\gamma:[a,b]\to M$ be a minimizing geodesic segment
from $p=\gamma(a)$ to $q=\gamma(b)$ such that $p$ and $q$ are conjugate along
$\gamma$. Then $\gamma$ is the unique minimizing geodesic segment from $p$ to
$q$.

Assume $\mathrm{AC}_\omega$. The claim is false. On the round sphere $S_R^n$ of
radius $R>0$ with $n\ge2$, let $p\in S_R^n$ and let $q=-p$ be the antipode of
$p$. For every unit $v\in T_pS_R^n$ the radial geodesic
$$\gamma_v(t)=\exp_p(tv),\qquad 0\le t\le\pi R,$$
is a minimizing geodesic from $p$ to $q$ along which $q$ is conjugate to $p$
with multiplicity $n-1$, and the unit directions produce infinitely many
pairwise distinct such meridians. So at the conjugate point $q$ the minimizing
geodesic is far from unique: no single meridian is the unique minimizing
geodesic from $p$ to $q$.

## Facts & Assumptions

**Given:** The countable-choice axiom $\mathrm{AC}_\omega$; a radius $R>0$; an integer $n\ge2$; the round sphere $S_R^n$ with the Riemannian metric $g$ induced by the Euclidean inner product; a point $p\in S_R^n$; and the index set $\mathbb N$ for the family constructed below.

[A1] The choice assumption is $\mathrm{AC}_\omega$ of [[def-countable-choice]]. It is inherited only through the two sphere examples below (their Hopf--Rinow, cut-time and Jacobi interfaces). The orthonormal pair and the family of directions are built from one finite list and explicit formulas, so no selection from a family is made and no full Axiom of Choice is used.

[F1] For every unit $v\in T_pS_R^n$ the cut time is $c_p(v)=\pi R$ and the cut locus is the singleton $\operatorname{Cut}(p)=\{-p\}$ ([[ex-cut-locus-of-a-point-on-a-round-sphere]], Example).

[F2] When the cut time is finite, the cut point of $p$ along $\gamma_v$ is $\gamma_v(c_p(v))$, and it is the last minimizing point on that ray: $c_p(v)\in A_p(v)=\{t\ge0:d_g(p,\gamma_v(t))=t\}$. In particular $d_g(p,\gamma_v(\pi R))=\pi R$ and the radial segment up to the cut time is minimizing ([[def-cut-point-and-cut-locus-of-a-point]], Definition; [[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]], Statement).

[F3] For every $v\in T_pM$ and every $t$ with $tv$ in the domain of $\exp_p$ one has $\exp_p(tv)=\gamma_{p,v}(t)$, the maximal geodesic with $\gamma_{p,v}(0)=p$ and $\dot\gamma_{p,v}(0)=v$ ([[prop-exponential-map-scales-geodesic-time]], Statement; [[def-geodesic-of-an-affine-connection]], Definition).

[F4] A geodesic of the Levi-Civita connection has constant speed; for a unit $v$ the radial geodesic $\gamma_v$ therefore has speed $1$, and its length over $[0,\pi R]$ is the integral of the constant function $1$ on a smooth piece, namely $\pi R$ ([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]], Statement; [[def-riemannian-speed-and-length]], Definition; [[thm-newton-leibniz-with-interior-derivative]], Statement). The Riemannian distance is the infimum of lengths of joining curves ([[def-riemannian-distance-on-a-connected-manifold]], Definition), so a curve whose length equals the distance between its endpoints is minimizing. [[def-riemannian-metric-and-riemannian-manifold]] supplies the metric; [[def-levi-civita-connection]] supplies metric compatibility of the Levi-Civita connection.

[F5] For every unit $v\in T_pS_R^n$ the endpoint $\gamma_v(\pi R)=-p$ is conjugate to $p$ along $\gamma_v$ with multiplicity $n-1$ ([[ex-conjugate-antipodes-on-the-round-sphere]], Example).

[F6] The sphere $S_R^n$ is a smooth $n$-manifold ([[def-smooth-manifold]], Definition). In a chart at $p$ the coordinate derivations $\partial_1|_p,\dots,\partial_n|_p$ form a basis of the tangent space $T_pS_R^n$ ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], Statement), where the tangent space is the space of derivations at $p$ ([[def-derivation-at-a-point-and-tangent-space]], Definition).

[F7] Applying Gram--Schmidt to the linearly independent list of the first two basis vectors of [F6] gives orthonormal vectors $e_1,e_2\in T_pS_R^n$ with $g_p(e_i,e_j)=\delta_{ij}$ for $i,j\in\{1,2\}$ ([[thm-gram-schmidt-orthonormalisation]], Statement).

[F8] On $T_pS_R^n$ the round metric is the restriction of the Euclidean inner product ([[ex-cut-locus-of-a-point-on-a-round-sphere]], Example): a bilinear, symmetric, positive-definite real inner product ([[def-euclidean-inner-product]], [[def-inner-product-space]], [[def-inner-product-norm]]), so $g_p$ is linear in each argument and $\lVert w\rVert_g=\sqrt{g_p(w,w)}$ for $w\in T_pS_R^n$.

[F9] For every $m\in\mathbb N$ the embedded natural number satisfies $m\ge0$ in $\mathbb R$, hence $m^2\ge0$ and $1+m^2>0$ ([[def-natural-numbers]], [[lem-of-naturals-positive]]). For $a\ge0$ the nonnegative square root satisfies $(\sqrt a)^2=a$ ([[thm-of-square-roots]], Statement), and for $a,b\ge0$ one has $a\le b\iff a^2\le b^2$ ([[lem-of-square-monotone]], Statement).

[F10] $\mathbb N$ is not equinumerous with any natural number, and every subset of a finite set is finite ([[lem-pigeonhole]], Statement; [[thm-subset-of-a-finite-set]], Statement; [[def-finite-cardinality]], Definition).

## Proof

**Proof technique:** explicit family of unit directions and comparison of the resulting great circles.

1.1 Fix a unit $v\in T_pS_R^n$. By [F1], $c_p(v)=\pi R$ is finite and $\operatorname{Cut}(p)=\{-p\}$. By [F2] the cut point of $p$ along $\gamma_v$ is $\gamma_v(\pi R)$, so $\gamma_v(\pi R)\in\operatorname{Cut}(p)=\{-p\}$, and $d_g(p,\gamma_v(\pi R))=\pi R$. By [F3] the curve $\gamma_v$ is the maximal geodesic with $\gamma_v(0)=p$ and $\dot\gamma_v(0)=v$, and by [F4] it has unit speed, so $L_g(\gamma_v|_{[0,\pi R]})=\pi R=d_g(p,\gamma_v(\pi R))$ and the segment is a minimizing geodesic from $p$ to $-p$. [F1, F2, F3, F4]

1.2 By [F6] choose a chart at $p$; its coordinate derivations $\partial_1|_p,\dots,\partial_n|_p$ form a basis of $T_pS_R^n$. The first two of these form a linearly independent list, so Gram--Schmidt [F7] supplies orthonormal $e_1,e_2\in T_pS_R^n$ with $g_p(e_i,e_j)=\delta_{ij}$. [F6, F7]

2.1 By [F5], for every unit $v$ the point $-p=\gamma_v(\pi R)$ is conjugate to $p$ along $\gamma_v$ with multiplicity $n-1$. Thus every minimizing meridian of step 1.1 ends at a conjugate point, and the conjugacy hypothesis of the refuted claim is met by each of them. [F5, step 1.1]

2.2 For $m\in\mathbb N$ define $$u_m=\frac{e_1+m\,e_2}{\sqrt{1+m^2}}\in T_pS_R^n,$$ a linear combination of tangent vectors. By [F8] the metric is bilinear and symmetric, so orthonormality in [F7] gives $$g_p(e_1+m\,e_2,\,e_1+m\,e_2)=g_p(e_1,e_1)+2m\,g_p(e_1,e_2)+m^2g_p(e_2,e_2)=1+m^2,$$ and then, using $(\sqrt{1+m^2})^2=1+m^2$ and $1+m^2>0$ from [F9], $$g_p(u_m,u_m)=\frac{1+m^2}{(\sqrt{1+m^2})^2}=1.$$ So every $u_m$ is a unit tangent vector at $p$. [F8, F9, step 1.2]

3.1 Suppose $u_m=u_k$ with $m,k\in\mathbb N$. Since $e_1,e_2$ are orthonormal they are linearly independent, so the coefficients of a vector in their span are unique; comparing the coefficients of $e_1$ in $u_m=\frac{1}{\sqrt{1+m^2}}e_1+\frac{m}{\sqrt{1+m^2}}e_2$ and in the same expression with $k$ gives $$\frac{1}{\sqrt{1+m^2}}=\frac{1}{\sqrt{1+k^2}},$$ hence $\sqrt{1+m^2}=\sqrt{1+k^2}$ and, squaring and using [F9], $1+m^2=1+k^2$, that is $m^2=k^2$. Since $m,k\ge0$ in $\mathbb R$ by [F9], the equivalence $a\le b\iff a^2\le b^2$ on nonnegative reals gives $m\le k$ and $k\le m$, so $m=k$. Therefore $m\mapsto u_m$ is injective. [F9, step 1.2, step 2.2]

4.1 For each $m\in\mathbb N$ put $\gamma_m:=\gamma_{u_m}$ on $[0,\pi R]$; by [F3], $\gamma_m(0)=p$ and $\dot\gamma_m(0)=u_m$. If $\gamma_m=\gamma_k$ as maps, then their derivatives at $t=0$ coincide, so $u_m=u_k$; by step 3.1 this forces $m=k$. Hence $m\mapsto\gamma_m$ is injective, and the meridians $\gamma_m$ are pairwise distinct. [F3, step 2.2, step 3.1]

5.1 By steps 1.1 and 2.1 every $\gamma_m$ is a minimizing geodesic from $p$ to $-p$ along which $-p$ is conjugate to $p$ with multiplicity $n-1$, and by step 4.1 the members of the family are pairwise distinct. The set $G$ of minimizing geodesic segments from $p$ to $-p$ is infinite: if $G$ were finite, then its subset $G'=\{\gamma_m:m\in\mathbb N\}$ would be finite by [F10], so $G'\approx|G'|$ with $|G'|\in\mathbb N$ by [F10]; but $m\mapsto\gamma_m$ is a bijection $\mathbb N\to G'$ by step 4.1, hence $\mathbb N\approx|G'|$, contradicting the statement of [F10] that $\mathbb N$ is not equinumerous with any natural number. Thus the conjugate point $-p$ is joined to $p$ by infinitely many distinct minimizing geodesics, and the claim in the Statement refuted is false: no meridian $\gamma_m$ is the unique minimizing geodesic from $p$ to the conjugate point $q=-p$. [F10, step 1.1, step 2.1, step 4.1]

6.1 Boundary and choice audit. The dimension hypothesis $n\ge2$ is used exactly at steps 1.2 and 2.2 to obtain two orthonormal tangent directions and a one-parameter family of unit directions; dimensions $n=0$ (where $T_pS_R^0$ is the zero space, so no unit direction exists) and $n=1$ (where the antipode has only the two semicircles) are outside the quantified claim, and nothing is asserted for them. The zero vector is never used: all $u_m$, including $u_0=e_1$, are unit vectors by step 2.2, and the family is still injective at $m=0$ by step 3.1. The witness is nonempty because $p$ is supplied, and $p\ne-p$ because $|p|=R>0$; the interval $[0,\pi R]$ is nondegenerate because $R>0$, and the meridians are nonconstant geodesics of positive length. Both endpoints of $[0,\pi R]$ are included and the derivative at $0$ is one-sided for the injectivity argument of step 4.1. Exactly the inherited $\mathrm{AC}_\omega$ is assumed: it is spent only through the two sphere examples quoted in [F1] and [F5], while the orthonormal pair of step 1.2 comes from one finite basis list and the family of step 2.2 is given by an explicit formula, so no choice function on a family of directions is invoked. The refuted claim is a one-way uniqueness implication, so no converse case arises. [A1, F1, F5, F9, F10, step 1.1, step 2.2, step 4.1, step 5.1]

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.189--190, discusses conjugate points and states (printed p.190) that no geodesic wrapping more than halfway around the flat cylinder is minimizing, and develops the cut locus defined by the last minimizing instant; the round-sphere antipodal geometry used here is the standard companion example. The explicit infinite family of minimizing meridians, its distinctness, and the refutation of uniqueness at the conjugate point are derived above from the pair's own sphere examples [[ex-cut-locus-of-a-point-on-a-round-sphere]] and [[ex-conjugate-antipodes-on-the-round-sphere]], not quoted from the source.
