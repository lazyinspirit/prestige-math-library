---
id: thm-blowup-separates-plane-curve-tangent-directions
kind: theorem
title: "Strict transforms of plane curves record tangent directions"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-blowup-plane-origin-incidence-equations
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - def-strict-transform-closed-subscheme
  - thm-exceptional-divisor-normal-cone-proj
  - def-multiplicity-hypersurface-point
  - def-tangent-cone-point
  - lem-tangent-cone-initial-ideal-presentation
  - def-effective-cartier-divisor
  - lem-plane-curve-multiplicity-transform-chart
  - def-contact-order-regular-components
  - def-standard-open-proj
  - thm-projective-space-as-proj
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.3 nodal curve: proper transform meets E at s=+/-1, pp. 389-390; Exercise 19.4.C cusps, p. 391"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
      locator: "Lecture 9, Example 11 and Proposition 34 (tangent cone as cone over the exceptional locus), PDF pp. 23-25, 34-36"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, inherited from the blowup and Proj constructions
([[def-axiom-of-choice]]). Let $k$ be a field and let $C=V(f)\subseteq\mathbb
A^2_k$ be a reduced plane curve through the origin with multiplicity
$m=\operatorname{mult}_0(C)\ge1$ and leading form $f_m$ (the degree-$m$ part
of $f$). Let $C'$ be the strict transform of $C$ under the blowup of the
origin and let $E=\mathbb P^1_k$ be the exceptional curve. Then $C'\cap E$ is
the closed subscheme of $E$ cut out by the form $f_m(u,v)$: its closed points
correspond to the irreducible factors of $f_m$, a factor of multiplicity $s$
contributes with multiplicity $s$, and the underlying $0$-cycle has total
degree $m$ over $k$. Over a field over which $f_m$ splits, these points are
exactly the tangent directions of $C$ at the origin, with multiplicity. If
$f_m$ is squarefree (in particular for a node, or for a cusp with reduced
tangent cone) the strict transform meets $E$ transversally at each of these
points.

## Facts & Assumptions

**Given:** A field $k$, a reduced plane curve
$C=V(f)\subseteq\mathbb A^2_k=\operatorname{Spec}k[x,y]$ through the origin
with $m=\operatorname{mult}_0(f)\ge1$ and leading form $f_m$, the blowup
$\pi\colon S'\to\mathbb A^2_k$ of the origin with exceptional curve $E$ and
its two standard charts, and the strict transform $C'$ of $C$.

[F1] [[def-multiplicity-hypersurface-point]]: The expansion of $f$ about the
origin is $f=f_m+(\text{terms of degree}>m)$ with $f_m\ne0$ homogeneous of
degree $m$; equivalently $f$ has order $m$ in the local ring at the origin.

[F2] [[lem-blowup-plane-origin-incidence-equations]]: The blowup is
$V(xv-yu)\subseteq\mathbb A^2_k\times\mathbb P^1_k$ with homogeneous
coordinates $(u:v)$ on the second factor; its charts are
$\operatorname{Spec}k[x,s]$ with $y=xs$ and $E=V(x)$, and
$\operatorname{Spec}k[t,y]$ with $x=yt$ and $E=V(y)$, glued by inverting $s$
and $t$ with $st=1$; the exceptional curve is isomorphic to
$\mathbb P^1_k$.

[F3] [[lem-plane-curve-multiplicity-transform-chart]]: In the first chart
$f(x,xs)=x^mg(x,s)$ with $g(0,s)=f_m(1,s)\ne0$, and $C'$ is cut out there by
$g=0$; symmetrically $f(yt,y)=y^mh(t,y)$ with $h(t,0)=f_m(t,1)\ne0$, and $C'$
is cut out in the second chart by $h=0$.

[F4] [[lem-total-transform-strict-plus-exceptional-multiplicity]]: The total
transform is $\pi^*C=C'+mE$, and $C'$ meets $E$ in the $0$-cycle of degree $m$
cut out by the degree-$m$ leading form of a local equation of $C$ at the
origin; the degree over $k$ is $m\,[\kappa(0):k]=m$, because the origin is
$k$-rational.

[F5] [[lem-tangent-cone-initial-ideal-presentation]] and
[[def-tangent-cone-point]]: For $I=(f)$ the initial ideal is
$\operatorname{in}(I)=(f_m)$, so the tangent cone of $C$ at the origin is
$$\operatorname{Cone}_0(C)=\operatorname{Spec}\bigl(k[u,v]/(f_m)\bigr),$$
and the points of its projectivization are the tangent directions of $C$ at
the origin.

[F6] [[thm-exceptional-divisor-normal-cone-proj]] and
[[def-effective-cartier-divisor]]: $E$ is an effective Cartier divisor on
$S'$, and $E$ is the projectivized normal cone of the origin in the plane,
here $\mathbb P^1_k=\operatorname{Proj}k[u,v]$; its standard charts are
$\operatorname{Spec}k[s]$ with $s=v/u$ and $\operatorname{Spec}k[t]$ with
$t=u/v$ ([[def-standard-open-proj]], [[thm-projective-space-as-proj]]).

[F7] [[def-strict-transform-closed-subscheme]]: $C'$ is a reduced curve,
cut out on the charts by the saturated ideals of [F3], and it has no
component equal to $E$ because its components dominate components of $C$
while $E$ maps to the origin.

[F8] [[def-contact-order-regular-components]]: For two distinct reduced
curves with no common component meeting at a closed point $q$, the contact
order $n_q$ is a finite length, and $n_q=1$ if and only if the curves meet
transversally at $q$, that is, both are regular at $q$ with distinct tangent
lines; the length is computed from local equations by
$n_q=\operatorname{length}_{\mathcal O_{Y,q}}(\mathcal O_{Y,q}/z\mathcal O_{Y,q})$.

## Proof

1.1 Write $f=f_m+f_{m+1}+\cdots$ as in [F1]. By [F2] the two charts cover $S'$ and meet in the locus $st=1$, and by [F3] the strict transform is cut out in them by the equations $g=0$ and $h=0$, where $g(0,s)=f_m(1,s)$ and $h(t,0)=f_m(t,1)$; thus $C'\cap E$ is computed in the first chart by the pair of equations $x=0$, $g=0$ and in the second by $y=0$, $h=0$. [F1, F2, F3]

1.2 In the first chart $C'\cap E$ is $\operatorname{Spec}k[s]/(g(0,s))=\operatorname{Spec}k[s]/(f_m(1,s))$, and in the second chart it is $\operatorname{Spec}k[t]/(f_m(t,1))$. These are exactly the standard charts $D_+(u)$ and $D_+(v)$ of the closed subscheme $Z=\operatorname{Proj}\bigl(k[U,V]/(f_m)\bigr)\subseteq\mathbb P^1_k=\operatorname{Proj}k[U,V]$: on $D_+(u)$ one has $s=v/u$ and the defining equation $f_m(1,s)=0$, and on $D_+(v)$ one has $t=u/v$ and $f_m(t,1)=0$, with the overlap inverting $s$ and $t$. Hence $C'\cap E\cong Z$ as closed subschemes of $E$, the closed subscheme cut out by the form $f_m(u,v)$. [F2, F3, F6, algebra]

2.1 By [F5] the ring $k[U,V]/(f_m)$ is the tangent cone ring of $C$ at the origin, so $Z=\operatorname{Proj}(\operatorname{Cone}_0(C))$ is the projectivized tangent cone. Its closed points are the homogeneous prime ideals of $k[U,V]$ containing $f_m$ and not the irrelevant ideal, that is, the irreducible factors of $f_m$; writing $f_m=\prod_ip_i^{s_i}$ with $p_i$ irreducible homogeneous of degree $d_i$, the point $q_i$ defined by $p_i$ has residue field of degree $d_i$ over $k$. For a point $q_i$ lying in the first chart, that is $p_i\ne U$, the local ring of $Z$ at $q_i$ is $k[s]_{(p_i(1,s))}/(f_m(1,s))$, whose length as an $\mathcal O_{Z,q_i}$-module is the exponent $s_i$; the point at infinity is computed in the second chart with the roles of $U$ and $V$ exchanged. So a factor of multiplicity $s$ contributes to $C'\cap E$ with multiplicity $s$. Over a splitting field of $f_m$ the factors $p_i$ are linear forms and the points $q_i$ are exactly the tangent directions of $C$ at the origin, with these multiplicities. [F2, F5, step 1.2, algebra]

3.1 The underlying $0$-cycle of $C'\cap E$ has total degree $m$ over $k$: by [F4] the intersection is the $0$-cycle of degree $m$ cut out by the leading form, the origin being $k$-rational. Equivalently, the degrees of the points $q_i$ weighted by the multiplicities $s_i$ add up to $m$, matching the computation in the two charts of step 1.2. [F4, step 2.1]

3.2 Transversality in the squarefree case. Suppose $f_m$ is squarefree, so its irreducible factors occur with multiplicity one; this covers a node and a cusp with reduced tangent cone, where the leading form is a product of distinct linear or irreducible factors. Let $q$ be a closed point of $C'\cap E$ lying in the first chart and let $p(s)$ be the corresponding irreducible factor of $f_m(1,s)$, which is simple; the case of a point lying only in the second chart is symmetric. Write $g(x,s)=p(s)u(s)+xw(x,s)$ with $u(s)$ a unit at $p$, which is possible because $g(0,s)=f_m(1,s)=p(s)u(s)$ and $p$ is simple. In the local ring $\mathcal O_{S',q}$ with maximal ideal $\mathfrak m=(x,p(s))$, the equation $g$ lies in $\mathfrak m\smallsetminus\mathfrak m^2$ and the quotient $\mathcal O_{C',q}=\mathcal O_{S',q}/(g)$ has maximal ideal generated by $x$, because $p(s)u(s)\equiv-xw(x,s)$ modulo $g$ and $u$ is a unit; hence $\mathcal O_{C',q}$ is a regular one-dimensional local ring and $n_q(C',E)=\operatorname{length}_{\mathcal O_{C',q}}\bigl(\mathcal O_{C',q}/x\mathcal O_{C',q}\bigr)=1$. By [F8] contact order one is exactly transversality at $q$, so $C'$ and $E$ meet transversally at every point of $C'\cap E$ when $f_m$ is squarefree. [F7, F8, step 1.2, step 2.1]

4.1 Steps 1.2, 2.1, 3.1 and 3.2 prove all the assertions: $C'\cap E$ is the closed subscheme of $E=\mathbb P^1_k$ cut out by the form $f_m(u,v)$, its closed points are the irreducible factors of $f_m$ with the corresponding multiplicities, the underlying $0$-cycle has total degree $m$ over $k$, the points are the tangent directions of $C$ at the origin with multiplicity over a splitting field, and for squarefree $f_m$ the intersection is transverse at every point. [step 1.2, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- The theorem is the local input to the resolution algorithm on this page: a
  point of multiplicity $m\ge2$ whose leading form is a product of $m$
  distinct linear forms is replaced by $m$ points at which the strict
  transform meets the new exceptional curve transversally.
- For a cusp $y^2=x^3$ the leading form $y^2$ is not squarefree, the strict
  transform meets $E$ at the single point $[1:0]$ with multiplicity two; its first strict transform has equation $s^2=x$ and is already regular, but tangent to $E$; this is why the resolution argument must be
  iterated rather than applied once, and
  [[lem-blowup-lowers-contact-order]] is the companion statement controlling
  the pairwise behaviour of regular branches.
