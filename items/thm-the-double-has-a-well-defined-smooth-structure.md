---
id: thm-the-double-has-a-well-defined-smooth-structure
kind: theorem
title: "The double has a well-defined smooth structure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-double-of-a-smooth-manifold-with-boundary, thm-collar-neighborhood-theorem, thm-smooth-inverse-function-theorem-on-manifolds, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set, thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §15.1, inward fields and collars"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24, smooth extension across a face"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Michael Usher, Vector Bundles (Fall 2012), §8.1, double construction after Theorem 8.16"
      url: "https://usherugamath.wordpress.com/wp-content/uploads/2018/09/vbnotes.pdf"
---

## Statement

Let $M$ be a smooth $n$-manifold with boundary, with the page's Hausdorff and second-countable conventions, and let $DM$ be its labelled double. Each seam point has a neighbourhood admitting a smooth local model whose restrictions to the two labelled halves are compatible with their given smooth structures and identify them with the two closed half-spaces locally.

Assuming $\mathrm{AC}_\omega$, any smooth collar gives seam charts which, together with the original interior charts, define a smooth boundaryless manifold structure on $DM$. Two collar choices give structures related by a diffeomorphism fixing the seam pointwise and preserving both labelled halves. No compactness of $M$ or its boundary is assumed.

## Facts & Assumptions

**Given:** The smooth manifold $M$, its labelled double, and $\mathrm{AC}_\omega$ for the global existence and comparison assertions.

[F1] The labelled double glues exactly the corresponding boundary points of two copies of $M$ ([[def-double-of-a-smooth-manifold-with-boundary]]).

[F2] Under $\mathrm{AC}_\omega$, a smooth collar exists ([[thm-collar-neighborhood-theorem]]).

[F3] A smooth map between boundaryless manifolds with invertible differential has a smooth local inverse ([[thm-smooth-inverse-function-theorem-on-manifolds]]). We apply this to smooth extensions in open coordinate neighbourhoods.

[F4] Smooth ODE solutions depend smoothly on their initial state and parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F5] Smooth partitions of unity exist on boundaryless manifolds ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F6] A closed set in an open set admits a smooth cutoff equal to one near the closed set and supported in that open set ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

[F7] A boundaryless smooth manifold admits a smooth proper function to $[0,\infty)$ ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[F8] Smooth time-dependent vector fields on a boundaryless manifold have unique local smooth evolution operators ([[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]).

## Proof

**Proof technique:** direct.

1.1 Write $B=\partial M$. A boundary chart shrunk to a product $V\times[0,a)$ can be used on one copy and reflected on the other. The quotient neighbourhood is then $V\times(-a,a)$, with the two halves given by the signs of the last coordinate. Each restriction is smooth in the original half-space calculus; this supplies the asserted local model without a global collar. If $B=\varnothing$, including $n=0$, the double is simply the disjoint union of two boundaryless copies and all assertions follow directly. Henceforth assume $B\ne\varnothing$ and $\mathrm{AC}_\omega$. [given, F1]

2.1 Choose a collar $c:B\times[0,a)\to M$ by [F2]. On a boundary coordinate patch $y:V\to\mathbb R^{n-1}$ define the inverse seam chart by $S_c(p,t)=[c(p,t),+]$ for $t\ge0$ and $S_c(p,t)=[c(p,-t),-]$ for $t\le0$, using the seam identification at zero; its coordinates are $(y(p),t)$. Between two such charts for this fixed collar the transition is $(y,t)\mapsto(\widetilde y\circ y^{-1}(y),t)$. Overlaps with interior charts lie in $t>0$ or $t<0$, where the collar and reflection are smooth diffeomorphisms. Thus these charts form a smooth atlas. [F1, F2, step 1.1]

3.1 This atlas has the quotient topology. The folding map $DM\to M$ is continuous, so points with different images have disjoint open neighbourhoods. Two distinct points with the same image lie in opposite interiors, which are disjoint open sets. Hence $DM$ is Hausdorff. A countable base of $M$ gives a countable base of $DM$: use the symmetric images of a base open set in both copies, and the base open sets restricted to either interior. The symmetric sets suffice at seam points by intersecting the two preimage neighbourhoods in $M$. Thus $DM$ is second countable. Denote the resulting boundaryless manifold for a collar $c_0$ by $D_0$; each labelled copy is a closed smooth submanifold with boundary of $D_0$. [step 2.1, F1, given]

4.1 Let $c_0,c_1$ be the two collars to compare. On the intersection of their images set $X_i=(c_i)_*\partial_t$. These are smooth inward fields. Their coordinate components extend locally across $B$ in $D_0$ by the definition of half-space smoothness, and a partition of unity [F5] glues the extensions on a neighbourhood of $B$, retaining their values on the positive copy. Choose a smooth function $\theta:\mathbb R\to[0,1]$ equal to zero near $(-\infty,0]$ and one near $[1,\infty)$, and put $X_s=(1-\theta(s))X_0+\theta(s)X_1$. In the signed $c_0$ coordinate $r$, both $dr(X_i)>0$ on $B$. Shrink the neighbourhood so both remain positive there. Then every $X_s$ is transverse inward there. [F5, step 3.1, construct]

5.1 Let $C_s(p,t)$ be the flow of $X_s$ from $p\in B$ for sufficiently small $t\ge0$, restricting to flow segments that stay in that neighbourhood. This is smooth jointly by [F4], using local coordinates, and $C_s(p,0)=p$. Its differential at $t=0$ sends $(v,b)$ to $v+bX_s(p)$ and is invertible. Smooth extension and [F3] give local inverses, also jointly with $s$. For fixed $s$, two such flow segments cannot meet with different initial data: uniqueness would place them on the same trajectory, which cannot cross $r=0$ twice because $dr(X_s)>0$. Thus, after restricting to the open domain where the differential is invertible, $(s,p,t)\mapsto(s,C_s(p,t))$ is a diffeomorphism onto a relative neighbourhood of $[0,1]\times B$. The allowed widths can depend on $p$; compactness of $[0,1]$ supplies a common positive width locally near each $p$. At the endpoints, uniqueness gives $C_i(p,t)=c_i(p,t)$ for sufficiently small $t$, since $X_i$ is exactly the collar velocity field. [F3, F4, step 4.1]

6.1 On this neighbourhood in $\mathbb R\times M$ define $V_s(C_s(p,t))=\partial_s C_s(p,t)$. This is smooth and $V_s(p)=0$ for $p\in B$. Extend its coordinate components smoothly across the seam and glue by [F5] on $\mathbb R\times D_0$. The resulting field $\widetilde V_s$ agrees with $V_s$ on a possibly smaller positive-side neighbourhood of $[0,1]\times B$ and vanishes on that seam. This construction extends a vector field, whose values can be added in each tangent space; it does not average manifold-valued maps. [F5, step 5.1]

7.1 Choose a smooth proper $h:D_0\to[0,\infty)$ by [F7]. Since $\widetilde V_s=0$ along the seam, there is an open neighbourhood $O$ of the closed set $A=[0,1]\times B$ in $\mathbb R\times D_0$ where the extension is defined and $|dh(\widetilde V_s)|<1$. By [F6] choose $0\le\chi\le1$, equal to one near $A$, with support in $O$. Extend $Z_s=\chi(s,\cdot)\widetilde V_s$ by zero outside $O$. It is globally smooth, vanishes on $B$ for $0\le s\le1$, agrees with $V_s$ near $A$ on the positive side, and satisfies $|dh(Z_s)|\le1$. [F6, F7, step 6.1]

8.1 The local evolution of $Z_s$ from [F8] exists for the whole interval $[0,1]$ in either time direction. Indeed, along a trajectory starting at $x$, the last bound keeps $h$ at most $h(x)+1$, a compact sublevel. Cover the product of that compact sublevel and $[0,1]$ by finitely many local evolution neighbourhoods from [F8]; their smaller neighbourhoods give a positive uniform continuation time. Consequently a finite endpoint in $[0,1]$ cannot be maximal. Uniqueness makes forward and reverse evolutions inverse smooth maps. The evolution fixes $B$ pointwise. A trajectory cannot meet $B$ from outside it, since reverse uniqueness would make that trajectory constant; hence it preserves each labelled half. Its time-one restriction $H:M\to M$ on the positive copy is a boundary-fixing diffeomorphism. [F8, step 7.1]

9.1 For each $p\in B$, compactness of $[0,1]$ and continuity of $C_s(p,t)$ let us shrink a neighbourhood of $(p,0)$ so all the paths $s\mapsto C_s(q,t)$ stay where $Z_s=V_s$. They then solve the evolution equation with initial value $c_0(q,t)$, so uniqueness yields $H(c_0(q,t))=c_1(q,t)$ there. Define $DH:DM\to DM$ by applying this same $H$ to each labelled copy. It is well-defined and bijective, fixes the seam, and preserves labels. In the $c_0$ source and $c_1$ target seam charts it is exactly $(y,t)\mapsto(y,t)$; off the seam it and its inverse are smooth because $H$ is a diffeomorphism. Therefore $DH:D_0\to D_1$ is the required diffeomorphism. [F8, step 5.1, step 7.1, step 8.1] ∎
