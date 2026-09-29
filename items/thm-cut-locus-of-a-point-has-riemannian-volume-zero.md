---
id: thm-cut-locus-of-a-point-has-riemannian-volume-zero
kind: theorem
title: Cut locus of a point has riemannian volume zero
status: published
origin: pipeline
deps:
  - cor-archimedean-reciprocal
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - cor-integral-over-a-null-set-vanishes
  - def-algebra-of-subsets
  - def-borel-and-lebesgue-measurable-function-on-rn
  - def-borel-sigma-algebra
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-ck-and-multi-index-notation-in-several-variables
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-generated-sigma-algebra
  - def-integral-over-a-measurable-set
  - def-linear-isometry-and-isometric-isomorphism
  - def-measure
  - def-metric-compactness
  - def-null-and-content-zero-in-rn
  - def-null-subset-of-a-smooth-manifold
  - def-orthogonal-vectors-sets-and-orthonormal-bases
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-sigma-algebra
  - def-subspace-topology-top
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
  - lem-c-one-images-of-content-zero-compact-sets-have-content-zero
  - lem-closed-subset-of-a-compact-space-is-compact
  - lem-continuity-is-local-and-pastes
  - lem-derivative-of-a-power
  - lem-integer-part
  - lem-isometry-is-an-embedding
  - lem-null-sets-in-rn-closed-under-subsets-and-countable-unions
  - lem-the-pointwise-norm-is-smooth-off-the-zero-vector
  - lem-the-riemannian-volume-density-is-coordinate-independent
  - prop-a-countable-chart-cover-detects-manifold-null-sets
  - prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets
  - prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains
  - prop-identity-maps-and-composites-of-smooth-maps-are-smooth
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - prop-smooth-maps-are-continuous
  - thm-borel-sets-are-lebesgue-measurable
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-componentwise-limits-and-continuity
  - thm-continuity-characterisations-top
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-cut-locus-of-a-point-is-closed
  - thm-cut-time-is-positive-and-continuous
  - thm-density-measure-is-independent-of-the-chart-gluing
  - thm-euclidean-inverse-function-theorem
  - thm-generated-sigma-algebra-exists-and-is-minimal
  - thm-graph-of-continuous-function-on-a-compact-set-has-content-zero
  - thm-higher-regularity-of-local-inverses
  - thm-hopf-rinow
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-null-agrees-with-elementary-nullity-in-rn
  - thm-of-square-roots
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
  - thm-unique-coordinates-with-respect-to-an-ordered-basis
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190: the cut locus of a point, its closedness, and the fact that it is the radial image of the cut-time graph over the unit tangent sphere."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lectures 21-24, printed pp.153-176: the cut locus and the measure-theoretic step in the polar integration formula."
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $(M,g)$ be a complete, connected, boundaryless, finite-dimensional Riemannian manifold and let $p\in M$, with unit tangent sphere $S_pM$ and cut locus $\operatorname{Cut}(p)$ as in [[def-cut-point-and-cut-locus-of-a-point]]. Then $\operatorname{Cut}(p)$ has zero Riemannian volume: writing $\operatorname{vol}_g$ for the Borel measure defined by the Riemannian density ([[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]]),
$$\operatorname{vol}_g\bigl(\operatorname{Cut}(p)\bigr)=0.$$
In dimension zero $\operatorname{Cut}(p)=\varnothing$ and the value is zero. No compactness of $M$ is assumed and no total-volume hypothesis is imposed.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a complete connected boundaryless finite-dimensional Riemannian manifold $(M,g)$, a point $p\in M$, the dimension $n:=\dim M$, the unit tangent sphere $S_pM$, the cut time $c=c_p:S_pM\to(0,+\infty]$, the cut locus $\operatorname{Cut}(p)$, and the Riemannian volume measure $\operatorname{vol}_g$.

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ is the standing assumption ([[def-countable-choice]]).

[F1] $S_pM=\{v\in T_pM:|v|_g=1\}$, and $\operatorname{Cut}(p)=\{\exp_p(c_p(v)v):v\in S_pM,\ c_p(v)<+\infty\}$; in dimension zero $S_pM=\varnothing$ and hence $\operatorname{Cut}(p)=\varnothing$ ([[def-cut-point-and-cut-locus-of-a-point]]).

[F2] The cut time satisfies $c(v)>0$ for every $v\in S_pM$ and is continuous in the order topology of $(0,+\infty]$: if $v_k\to v$ in $S_pM$ and $c(v)<+\infty$ then $c(v_k)\to c(v)$, and if $c(v)=+\infty$ then for every $M_0>0$ there is $k_0$ with $c(v_k)>M_0$ for all $k\ge k_0$ ([[thm-cut-time-is-positive-and-continuous]]).

[F3] $\operatorname{Cut}(p)$ is closed in the metric space $(M,d_g)$ ([[thm-cut-locus-of-a-point-is-closed]]).

[F4] Every finite-dimensional real inner product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F5] Orthonormal means orthogonal with every member of induced norm one, and an orthonormal basis is an ordered basis that is an orthonormal list ([[def-orthogonal-vectors-sets-and-orthonormal-bases]]).

[F6] For an ordered basis $(e_1,\dots,e_n)$ of a vector space, every vector has exactly one coordinate list: $w=\sum_{i=1}^n\lambda_ie_i$ with unique coefficients ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[F7] A Riemannian metric is a smooth symmetric covariant two-tensor with $g_p(v,v)>0$ for every nonzero $v\in T_pM$ ([[def-riemannian-metric-and-riemannian-manifold]]).

[F8] The pointwise norm on the tangent space is $|v|_g=\sqrt{g_p(v,v)}$ ([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]).

[F9] Smoothness on the finite-dimensional real vector space $T_pM$ is read in its canonical linear structure: the coordinate representative attached to any ordered basis is the one tested, and this condition is basis-independent because a change-of-coordinate map is a linear isomorphism and both it and its inverse are smooth ([[lem-the-pointwise-norm-is-smooth-off-the-zero-vector]]).

[F10] On the complete manifold $(M,g)$, Hopf-Rinow gives $\mathcal E_p=T_pM$ for every $p$, so the fibre exponential domain is the whole tangent space ([[thm-hopf-rinow]]).

[F11] Every fibre domain $\mathcal E_p$ is open in $T_pM$ and $\exp_p:\mathcal E_p\to M$ is smooth ([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]).

[F12] A map of class $C^r$ with $r\ge1$, or a smooth map, between smooth manifolds is continuous ([[prop-smooth-maps-are-continuous]]).

[F13] Composites of smooth maps between smooth manifolds are smooth ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[F14] A map between smooth manifolds is $C^r$ or smooth according to its coordinate representatives in charts, and smooth means $C^r$ for every finite $r$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[F15] For $n\ge1$ the function $p_n(x)=x^n$ is differentiable at every $c$, with $p_n'(c)=n\,c^{\,n-1}$; in particular $(t\mapsto t^2)'(t_0)=2t_0$ ([[lem-derivative-of-a-power]]).

[F16] The Euclidean inverse function theorem supplies a $C^1$ local inverse near any point where the derivative is invertible ([[thm-euclidean-inverse-function-theorem]]).

[F17] The local inverses supplied by the inverse function theorem are as regular as the original map: they are $C^k$ whenever the map is ([[thm-higher-regularity-of-local-inverses]]).

[F18] Every nonnegative real has a unique nonnegative square root, written $\sqrt{a}$ ([[thm-of-square-roots]]).

[F19] Finite componentwise sums, products and scalar multiples of $C^k$ Euclidean maps are $C^k$, and composites of composable $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F20] A scalar function on an open Euclidean set is of class $C^k$ when all iterated partial derivatives of order at most $k$ exist and are continuous, the empty word denoting the function itself ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F21] A Euclidean map is smooth when it is $C^k$ for every $k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F22] For $m\ge1$: a set is null when it is coverable by a sequence of closed cubes of arbitrarily small total volume, content zero when a finite such cover exists; both properties pass to subsets and content zero implies null ([[def-null-and-content-zero-in-rn]]).

[F23] The graph of a continuous $f:C\to\mathbb R$ on a compact set $C\subseteq\mathbb R^m$ has content zero in $\mathbb R^{m+1}$, for every $m\ge0$ ([[thm-graph-of-continuous-function-on-a-compact-set-has-content-zero]]).

[F24] Let $m\ge1$. A $C^1$ map on an open $W\subseteq\mathbb R^m$ with values in $\mathbb R^m$ sends a compact content-zero subset of $W$ to a compact content-zero set ([[lem-c-one-images-of-content-zero-compact-sets-have-content-zero]]).

[F25] Every subset of a null subset of $\mathbb R^m$ is null, and under countable choice every countable union of null subsets of $\mathbb R^m$ is null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

[F26] Assume the Axiom of Countable Choice. An equidimensional $C^1$ map between smooth manifolds sends null sets to null sets ([[prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets]]).

[F27] For every $n\ge0$ the Euclidean space $\mathbb R^n$ is a smooth $n$-manifold with the identity as global chart, and open subsets carry the standard restricted smooth structure ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]).

[F28] Assume the Axiom of Countable Choice. Every smooth manifold admits a countable smooth atlas whose chart domains have compact closures ([[prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains]]).

[F29] Under countable choice, a countable smooth atlas with relatively compact domains detects manifold nullity: a subset of $M$ is null if and only if every one of its chart images in the atlas is null in $\mathbb R^{\dim M}$ when $\dim M\ge1$, and empty when $\dim M=0$ ([[prop-a-countable-chart-cover-detects-manifold-null-sets]], [[def-null-subset-of-a-smooth-manifold]]).

[F30] Under countable choice, the Riemannian density defines a compact-finite, locally finite, sigma-finite Radon Borel measure, the Riemannian volume $\operatorname{vol}_g$ ([[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]]).

[F31] The local Riemannian volume densities glue to a positive smooth density independent of coordinates; in coordinates the Riemannian volume density is $\mu_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$, with positive smooth coefficient ([[lem-the-riemannian-volume-density-is-coordinate-independent]], [[def-riemannian-volume-density]]).

[F32] Assume countable choice. For every nonnegative Borel density $r$ and every Borel set $E$ contained in a chart $x:U\to x(U)$ one has $\mu_r(E)=\int_{x(E)}r_x\,d\lambda_n$ ([[thm-density-measure-is-independent-of-the-chart-gluing]]).

[F33] Let $m\ge1$ and assume the Axiom of Countable Choice. A subset of $\mathbb R^m$ is null if and only if its Lebesgue outer measure is zero ([[thm-lebesgue-null-agrees-with-elementary-nullity-in-rn]]).

[F34] Let $n\ge1$ and assume the Axiom of Countable Choice. The measure space $(\mathbb R^n,\mathcal L(\mathbb R^n),\lambda_n)$ is complete, and every subset of $\mathbb R^n$ with outer measure zero is Lebesgue measurable of measure zero ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F35] For a measurable $f:X\to[0,+\infty]$ and a measurable set $E$ with $\mu(E)=0$ one has $\int_Ef\,d\mu=0$ ([[cor-integral-over-a-null-set-vanishes]]).

[F36] A measure satisfies $\mu(\varnothing)=0$ and is countably additive on pairwise disjoint sequences ([[def-measure]]).

[F37] For $n\ge1$, $c\in\mathbb R^n$ and $r>0$ the Euclidean closed ball $\overline B_2(c,r)$ is compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F38] A closed subset of a compact metric space is a compact subset of it ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[F39] For every real $\varepsilon>0$ there is a natural number $m\ge1$ with $1/m<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[F40] Every real $x$ has an integer part $\lfloor x\rfloor$ with $\lfloor x\rfloor\le x<\lfloor x\rfloor+1$ ([[lem-integer-part]]).

[F41] The Borel sigma-algebra of a topological space is the sigma-algebra generated by its open sets; a sigma-algebra is an algebra of subsets, hence closed under complements, finite unions and finite intersections ([[def-borel-sigma-algebra]], [[def-algebra-of-subsets]], [[def-sigma-algebra]]).

[F42] A linear map $T$ with $\|Tx\|=\|x\|$ is a linear isometry and automatically an isometric embedding; a bijective one is a linear isometric isomorphism ([[def-linear-isometry-and-isometric-isomorphism]]).

[F43] An isometric embedding identifies its domain with its image, topology and all; in particular a bijective isometric embedding is a homeomorphism onto its target ([[lem-isometry-is-an-embedding]]).

[F44] The continuous image of a compact set is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[F45] Composites of continuous maps between topological spaces are continuous, and every restriction of a continuous map to a subspace is continuous ([[lem-continuity-is-local-and-pastes]]).

[F46] A function between topological spaces is continuous if and only if the preimage of every closed set is closed ([[thm-continuity-characterisations-top]]).

[F47] A function $\mathbb R^n\to\mathbb R$ is Borel measurable when its preimages of Borel sets are Borel, and Lebesgue measurable when its preimages of Borel sets are Lebesgue measurable ([[def-borel-and-lebesgue-measurable-function-on-rn]]).

[F48] For a measurable $f\ge0$ and a measurable set $E$ the integral over $E$ is defined by $\int_Ef\,d\mu=\int f\chi_E\,d\mu$ ([[def-integral-over-a-measurable-set]]).

[F49] In a metric space an open cover is a family of open sets covering the space, and the space is compact when every open cover has a finite subcover; in particular a space consisting of a single point is compact ([[def-metric-compactness]]).

[F50] The subspace topology on $S\subseteq X$ consists of the traces $U\cap S$ of the open sets of $X$; a subset of $S$ is closed in $S$ if and only if it is the trace $F\cap S$ of a closed set $F\subseteq X$, and a set that is open in an open subspace is open in the ambient space ([[def-subspace-topology-top]]).

[F51] The sigma-algebra generated by a family is the intersection of all sigma-algebras containing it, hence the smallest one; any sigma-algebra containing a family contains the sigma-algebra it generates ([[def-generated-sigma-algebra]], [[thm-generated-sigma-algebra-exists-and-is-minimal]]).

[F52] Let $m\ge1$ and let $(X,d_X)$ be a metric space. A map $f:A\to\mathbb R^m$ on a subset $A\subseteq X$ is continuous if and only if all of its components are continuous ([[thm-componentwise-limits-and-continuity]]).

[F53] Let $n\ge1$ and assume the Axiom of Countable Choice. Every Borel subset of $\mathbb R^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

## Proof

**Proof technique:** direct. The cut time is a continuous function of the unit direction; through the $2n$ graph parametrisations of the unit sphere the radial graph of the cut time has null image in $\mathbb R^n$; the exponential map pushes that null set to a null subset of $M$ by the equidimensional $C^1$ image theorem, and chartwise nullity is converted into vanishing Riemannian volume with the density chart formula.

1.1 Dimension zero. [F1, F30, F36, given, cases]
If $n=0$ then [F1] gives $S_pM=\varnothing$ and hence $\operatorname{Cut}(p)=\varnothing$, and $\operatorname{vol}_g(\varnothing)=0$ because [F30] makes $\operatorname{vol}_g$ a measure and measures assign value zero to the empty set [F36]. This is the assertion in dimension zero, so assume $n\ge1$ from here on.

1.2 The square root is smooth on $(0,\infty)$. [F15, F16, F17, F18, algebra]
Fix $x_0>0$ and put $t_0:=\sqrt{x_0}>0$, so $t_0^2=x_0$ by [F18]. The function $f(t)=t^2$ has $f'(t_0)=2t_0\ne0$ by [F15], so the inverse function theorem [F16] supplies open neighbourhoods $V$ of $t_0$ and $W$ of $x_0$ and a $C^1$ inverse $g:W\to V$ with $f(g(y))=y$; since $f$ is smooth, [F17] makes this same local inverse smooth. For $y\in W$ we have $g(y)\in V\subseteq(0,\infty)$ and $g(y)^2=y$, so the uniqueness clause of [F18] forces $g(y)=\sqrt y$. Hence the square root agrees near the arbitrary point $x_0>0$ with a smooth map and is therefore smooth on $(0,\infty)$.

1.3 Coordinates, isometry and transported cut data. [F2, F4, F5, F6, F7, F8, F42, F43, F45, algebra]
By [F4] and [F5] choose an ordered orthonormal basis $(e_1,\dots,e_n)$ of $(T_pM,g_p)$; this is a single existential instantiation. Let $\lambda:T_pM\to\mathbb R^n$ be the coefficient map of [F6], $\lambda(\sum_ix_ie_i)=(x_1,\dots,x_n)$. Expanding with the bilinearity of $g_p$ [F7] and the orthonormality of the basis [F5], $$g_p(w,w)=\sum_{i,j}x_ix_j\,g_p(e_i,e_j)=\sum_{i=1}^nx_i^2=|\lambda(w)|_2^2$$ for $w=\sum_ix_ie_i$, so that $|w|_g=|\lambda(w)|_2$ by [F8]; hence $\lambda$ is a linear isometry and, being bijective, a linear isometric isomorphism [F42], so it is a homeomorphism onto $\mathbb R^n$ by [F43]. Therefore $\lambda(S_pM)=S^{n-1}:=\{y\in\mathbb R^n:|y|_2=1\}$. Define $$f:=c\circ(\lambda|_{S_pM})^{-1}:S^{n-1}\to(0,+\infty],\qquad E:=\{c(v)v:v\in S_pM,\ c(v)<+\infty\}.$$ The restriction $\lambda|_{S_pM}:S_pM\to S^{n-1}$ is a homeomorphism onto $S^{n-1}$, its inverse being the restriction of the homeomorphism $\lambda^{-1}$ [F43]; so $f$ is continuous as a composite of continuous maps [F2, F45]. Finally $\lambda(E)=\{f(y)y:y\in S^{n-1},\ f(y)<+\infty\}$: indeed $\lambda(c(v)v)=c(v)\lambda(v)=f(y)y$ with $y:=\lambda(v)$, and conversely every $y\in S^{n-1}$ is $\lambda(v)$ for the unit vector $v:=\lambda^{-1}(y)$.

2.1 Smooth coordinate expressions on Euclidean domains. [F19, F20, F21, step 1.2, algebra]
For an open set $U\subseteq\mathbb R^m$ the coordinate function $x\mapsto x_k$ is smooth on $U$: its iterated partial derivatives are the constants $0$ and $1$, so it is $C^k$ for every $k$ by the definition [F20], that is smooth by [F21]. Consequently, by the closure theorem [F19], all finite sums, products and scalar multiples of coordinate functions are smooth on $U$; moreover if a polynomial expression $q$ is strictly positive on $U$ then $x\mapsto\sqrt{q(x)}$ is smooth on $U$, because $q$ takes its values in the domain $(0,\infty)$ of the smooth square root of step 1.2 and the composite of composable $C^k$ maps is $C^k$ for every $k$ [F19].

3.1 Sphere parametrisations. [F12, F14, F18, F27, step 2.1, algebra]
Put $U:=\{x\in\mathbb R^{n-1}:|x|_2<1\}$, an open subset of $\mathbb R^{n-1}$. For $i\in\{1,\dots,n\}$ and $\varepsilon\in\{+1,-1\}$ define $\psi_{i,\varepsilon}:U\to\mathbb R^n$ by inserting $\varepsilon\sqrt{1-|x|_2^2}$ in the $i$-th coordinate and listing the coordinates of $x$ in the remaining positions in increasing order. Each $\psi_{i,\varepsilon}$ is smooth: its components are either coordinate functions or the square root of the strictly positive polynomial $1-|x|_2^2$ on $U$, so step 2.1 applies; since $U$ and $\mathbb R^n$ are smooth manifolds with their standard structures [F27] and smoothness of a map on an open Euclidean set agrees with the chart-based notion [F14], each $\psi_{i,\varepsilon}$ is continuous by [F12]. Moreover $$\psi_{i,\varepsilon}(U)=\{y\in S^{n-1}:\varepsilon y_i>0\},$$ since $|\psi_{i,\varepsilon}(x)|_2^2=|x|_2^2+(1-|x|_2^2)=1$ and $\varepsilon\,\psi_{i,\varepsilon}(x)_i=\sqrt{1-|x|_2^2}>0$ for $x\in U$, while for $y\in S^{n-1}$ with $\varepsilon y_i>0$ the list $x$ of its remaining coordinates satisfies $|x|_2^2=1-y_i^2<1$ and $\psi_{i,\varepsilon}(x)=y$, because $\sqrt{y_i^2}=|y_i|=\varepsilon y_i$ by [F18]. Hence $S^{n-1}=\bigcup_{i,\varepsilon}\psi_{i,\varepsilon}(U)$: a unit vector is nonzero, so some coordinate $y_i$ does not vanish.

4.1 Continuity of the parametrised radial functions. [F2, F45, F46, step 1.3, step 3.1]
For each pair $(i,\varepsilon)$ put $f_{i,\varepsilon}:=f\circ\psi_{i,\varepsilon}:U\to(0,+\infty]$. This is continuous: $\psi_{i,\varepsilon}$ is continuous (step 3.1) and $f$ is continuous at every point of $S^{n-1}$ (step 1.3), so the composite is continuous by [F45]. For $k\in\mathbb N_0$ put $$D_{i,\varepsilon,k}:=\{x\in U:f_{i,\varepsilon}(x)\in[k,k+1]\}=f_{i,\varepsilon}^{-1}\bigl([k,k+1]\bigr).$$ This set is closed in $U$: the interval $[k,k+1]$ is closed in the order topology of $(0,+\infty]$ in which $f$ and hence $f_{i,\varepsilon}$ is continuous [F2], and the preimage of a closed set under a continuous map is closed [F46].

5.1 Compact slabs covering the parametrised data. [F2, F37, F38, F39, F40, F49, F50, step 1.1, step 3.1, step 4.1, algebra, cases]
For $m\ge2$ let $B_m$ be the closed Euclidean ball of radius $1-1/m$ about the origin in $\mathbb R^{n-1}$; it is contained in $U$, and it is compact: if $n\ge2$ this is [F37] applied in $\mathbb R^{n-1}$, while if $n=1$ then $B_m=U=\mathbb R^0$ is a one-point space, which is compact because the single open set $\mathbb R^0$ already covers it [F49]. The balls $B_m$ cover $U$: for $x\in U$ the number $\varepsilon_0:=1-|x|_2$ is positive, so by [F39] there is $m\ge2$ with $1/m<\varepsilon_0$, whence $|x|_2<1-1/m$ and $x\in B_m$. For each quadruple $(i,\varepsilon,k,m)$ define $$C_{i,\varepsilon,k,m}:=D_{i,\varepsilon,k}\cap B_m\subseteq U.$$ This set is closed in $B_m$: $D_{i,\varepsilon,k}$ is closed in the subspace $U$, so it is the trace $F\cap U$ of a closed set $F\subseteq\mathbb R^{n-1}$ [F50], and $C_{i,\varepsilon,k,m}=F\cap B_m$ because $B_m\subseteq U$, which is a trace of a closed set on the subspace $B_m$ and hence closed in $B_m$ [F50]. Therefore $C_{i,\varepsilon,k,m}$ is a closed subset of the compact space $B_m$ and is compact by [F38]. On $C_{i,\varepsilon,k,m}$ the function $f_{i,\varepsilon}$ takes values in $[k,k+1]\subseteq\mathbb R$, so its restriction is a continuous real-valued function [F45]. Finally every element $f(y)y$ of $\lambda(E)$ with $f(y)<+\infty$ is captured: write $y=\psi_{i,\varepsilon}(x)$ by step 3.1, put $k:=\lfloor f(y)\rfloor$, so that $k\ge0$ by the positivity clause of [F2] and $f(y)\in[k,k+1]$ by [F40], and choose $m\ge2$ with $x\in B_m$ as above; then $x\in C_{i,\varepsilon,k,m}$.

6.1 The radial graphs are compact and have content zero. [F23, F44, F45, F50, F52, step 4.1, step 5.1]
For each quadruple $(i,\varepsilon,k,m)$ the graph $$\Gamma_{i,\varepsilon,k,m}:=\{(x,f_{i,\varepsilon}(x)):x\in C_{i,\varepsilon,k,m}\}\subseteq\mathbb R^{n-1}\times\mathbb R=\mathbb R^n$$ is the image of the compact set $C_{i,\varepsilon,k,m}$ under the map $g(x):=(x,f_{i,\varepsilon}(x))$, whose first $n-1$ components are coordinate projections and whose last component is the restriction of the continuous function $f_{i,\varepsilon}$ to the subspace $C_{i,\varepsilon,k,m}$, hence continuous [F45]; the componentwise criterion [F52] therefore makes $g$ continuous, and its image is compact by [F44]. On $C_{i,\varepsilon,k,m}$ the function $f_{i,\varepsilon}$ takes values in $[k,k+1]$, so its restriction is a continuous real-valued function on the compact set $C_{i,\varepsilon,k,m}$, and [F23] gives that $\Gamma_{i,\varepsilon,k,m}$ has content zero in $\mathbb R^{(n-1)+1}=\mathbb R^n$. When $C_{i,\varepsilon,k,m}=\varnothing$ the graph is empty and has content zero as well.

7.1 The smooth cone map pushes the graphs into null sets. [F19, F21, F22, F24, step 1.1, step 3.1, step 6.1, algebra]
For fixed $(i,\varepsilon)$ define the cone map $$\Psi_{i,\varepsilon}:U\times\mathbb R\to\mathbb R^n,\qquad\Psi_{i,\varepsilon}(x,t):=t\,\psi_{i,\varepsilon}(x),$$ on the open set $U\times\mathbb R\subseteq\mathbb R^n$, where $n\ge1$ by step 1.1. Its components are products of the coordinate $t$ with the components of $\psi_{i,\varepsilon}$ (step 3.1), so by the closure theorem [F19] the map $\Psi_{i,\varepsilon}$ is $C^k$ on $U\times\mathbb R$ for every $k$, that is smooth [F21], and in particular $C^1$. The graph $\Gamma_{i,\varepsilon,k,m}$ of step 6.1 is a compact content-zero subset of the open set $U\times\mathbb R$, so [F24] applies and shows that $$\Psi_{i,\varepsilon}\bigl(\Gamma_{i,\varepsilon,k,m}\bigr)=\{\,f(y)y:\ y=\psi_{i,\varepsilon}(x),\ x\in C_{i,\varepsilon,k,m}\,\}$$ is compact with content zero, hence null by [F22].

8.1 The Euclidean radial-graph set is null. [F22, F25, step 1.3, step 3.1, step 5.1, step 7.1, algebra]
By step 1.3 every element of $\lambda(E)$ has the form $f(y)y$ with $y\in S^{n-1}$ and $f(y)<+\infty$, and by steps 3.1 and 5.1 each such element lies in one of the sets $\Psi_{i,\varepsilon}(\Gamma_{i,\varepsilon,k,m})$; conversely each of those images consists of vectors $f(y)y$ with $y=\psi_{i,\varepsilon}(x)\in S^{n-1}$ (step 3.1) and $f(y)=f_{i,\varepsilon}(x)\in[k,k+1]$ finite, so it is contained in $\lambda(E)$. Therefore $$\lambda(E)=\bigcup_{i,\varepsilon,k,m}\Psi_{i,\varepsilon}\bigl(\Gamma_{i,\varepsilon,k,m}\bigr),$$ a finite union over $(i,\varepsilon)$ of countable unions over $k\ge0$ and $m\ge2$ of null sets (step 7.1), which is null in $\mathbb R^n$ by the closure properties of [F25]; the implication from content zero to nullity is the one recorded in [F22].

9.1 The cut locus is a null subset of $M$. [F1, F9, F10, F11, F13, F14, F26, F27, step 1.3, step 8.1]
By completeness and Hopf-Rinow [F10] the fibre domain is $\mathcal E_p=T_pM$, and [F11] makes $\exp_p:T_pM\to M$ smooth. Smoothness on $T_pM$ is read in the canonical linear structure of the finite-dimensional real vector space $T_pM$ [F9]: the coefficient map $\lambda$ of step 1.3 is a chart of $T_pM$, with respect to which the coordinate representative of $\lambda^{-1}:\mathbb R^n\to T_pM$ is the identity map of $\mathbb R^n$, which is smooth, and by the basis-independence recorded in [F9] the map $\lambda^{-1}$ is smooth. Hence the composite $$F:=\exp_p\circ\lambda^{-1}:\mathbb R^n\longrightarrow M$$ is smooth by [F13] and in particular $C^1$ in the chart-based sense of [F14]. The space $\mathbb R^n$ is a smooth $n$-manifold by [F27] and $\dim M=n$, so $F$ is an equidimensional $C^1$ map between smooth manifolds; since $\lambda(E)$ is null in $\mathbb R^n$ by step 8.1, [F26] makes $F(\lambda(E))$ a null subset of $M$. Finally $F(\lambda(E))=\exp_p(\lambda^{-1}(\lambda(E)))=\exp_p(E)=\operatorname{Cut}(p)$, the last equality by the definition of $E$ in step 1.3 and of the cut locus in [F1].

10.1 Chartwise nullity. [A1, F28, F29, step 1.1, step 9.1, given]
By [F28] and the standing $\mathrm{AC}_\omega$ of [A1] choose a countable smooth atlas $\{(U_j,\varphi_j)\}_{j\in\mathbb N}$ of $M$ whose chart domains have compact closures. Since $\operatorname{Cut}(p)$ is null in $M$ by step 9.1 and $n=\dim M\ge1$ by step 1.1, the atlas criterion [F29] gives that $\varphi_j\bigl(\operatorname{Cut}(p)\cap U_j\bigr)$ is a null subset of $\mathbb R^n$ for every $j$.

11.1 The Riemannian volume vanishes. [A1, F3, F12, F25, F27, F28, F30, F31, F32, F33, F34, F35, F36, F41, F47, F48, F50, F51, F53, step 1.1, step 10.1, algebra]
Let $\{(U_j,\varphi_j)\}_{j\in\mathbb N}$ be the atlas produced in step 10.1 and put $G_j:=\operatorname{Cut}(p)\cap U_j$. Each $G_j$ is Borel: $\operatorname{Cut}(p)$ is closed in $M$ [F3] and $U_j$ is open, so both are Borel subsets of $M$, and the Borel sigma-algebra is closed under finite intersections [F41]; moreover $\bigcup_jG_j=\operatorname{Cut}(p)$. Fix $j$, write $x:=\varphi_j:U_j\to O:=x(U_j)$ for the chart, and let $r$ be the coefficient of the Riemannian density in this chart; by [F31] the density is positive and smooth with coefficient $r$, so $r:O\to(0,+\infty)$ is smooth, hence continuous as a map of smooth manifolds [F12] (the open set $O\subseteq\mathbb R^n$ carries the standard smooth structure [F27]). Let $\tilde r:\mathbb R^n\to[0,+\infty)$ be $r$ extended by $0$ outside $O$. Then $\tilde r$ is Borel measurable: the family $\mathcal C:=\{B\subseteq\mathbb R:\tilde r^{-1}(B)\in\mathcal B(\mathbb R^n)\}$ is a sigma-algebra, and it contains every open $V\subseteq\mathbb R$, because $\tilde r^{-1}(V)$ is the union of $O\cap r^{-1}(V)$, which is open in $\mathbb R^n$ since $O$ is open and $r$ is continuous and a set open in the open subspace $O$ is open in $\mathbb R^n$ [F50], and of $O^{\mathrm c}$ when $0\in V$, which is closed [F41]; since the Borel sigma-algebra is generated by the open sets and is the smallest sigma-algebra containing them [F41, F51], $\mathcal C$ contains $\mathcal B(\mathbb R)$, so $\tilde r$ is Borel measurable [F47]. Every Borel set is Lebesgue measurable [F53], so $\tilde r$ is Lebesgue measurable [F47]. By [F30] the measure $\operatorname{vol}_g$ is the Borel measure of the density $\mu_g$, so the chart formula [F32] gives $$\operatorname{vol}_g(G_j)=\int_{x(G_j)}r\,d\lambda_n=\int_{x(G_j)}\tilde r\,d\lambda_n,$$ the second equality because $\tilde r$ agrees with $r$ on $O\supseteq x(G_j)$ and the integral over a set is the integral of the product with its characteristic function [F48]. The set $x(G_j)$ is contained in the null set $x(\operatorname{Cut}(p)\cap U_j)$ of step 10.1, hence is null [F25]; by [F33] it has Lebesgue outer measure zero, and by [F34] it is Lebesgue measurable with $\lambda_n\bigl(x(G_j)\bigr)=0$. Therefore [F35], applied to the measurable nonnegative function $\tilde r$ and this measurable null set, gives $\int_{x(G_j)}\tilde r\,d\lambda_n=0$ and hence $\operatorname{vol}_g(G_j)=0$ for every $j$. Disjointifying, $G'_0:=G_0$ and $G'_k:=G_k\setminus(G_0\cup\cdots\cup G_{k-1})$ for $k\ge1$, the sets $G'_k$ are Borel [F41], pairwise disjoint, satisfy $G'_k\subseteq G_k$, and have union $\operatorname{Cut}(p)$; countable additivity of the measure $\operatorname{vol}_g$ [F36] and the nonnegativity of measure values then give $$\operatorname{vol}_g\bigl(\operatorname{Cut}(p)\bigr)=\sum_{k=0}^\infty\operatorname{vol}_g(G'_k)\le\sum_{k=0}^\infty\operatorname{vol}_g(G_k)=0,$$ so that $\operatorname{vol}_g(\operatorname{Cut}(p))=0$.

12.1 Boundary, endpoint and choice audit. [A1, F1, F2, F10, F11, F22, F23, F24, F25, F26, F28, F29, F30, F33, F35, F36, F38, F41, F43, F48, F49, F50, step 1.1, step 1.3, step 5.1, step 6.1, step 11.1, given]
Dimension zero is discharged in step 1.1, where the empty cut locus has volume zero. Dimension one is covered by the same argument: $\mathbb R^{n-1}=\mathbb R^0$ is a single point, the parametrisations $\psi_{1,\pm}$ are the constants $\pm1$, the graph theorem [F23] covers compact subsets of $\mathbb R^0$ (its own proof treats the case $m=0$), the cone map $\Psi_{1,\pm}$ is the map $t\mapsto\pm t$ on the open set $\mathbb R^0\times\mathbb R=\mathbb R$, and the image lemma [F24] applies there with ambient dimension $m=n=1$; the only step needing care was the compactness of the one-point ball $B_m$, handled in step 5.1 by the definition of compactness [F49]. The empty manifold carries no point $p$ and is excluded by the hypothesis $p\in M$. Degenerate pieces are harmless: a quadruple with $C_{i,\varepsilon,k,m}=\varnothing$ contributes the empty graph, content zero by [F22], and the ball $B_m$ has radius $1-1/m>0$ because $m\ge2$, so no zero-radius ball is used; the closed intervals $[k,k+1]$ of step 6.1 include both endpoints, which costs nothing because [F23] needs only compactness of the parameter set. The zero vector is never passed to the exponential differential and is not part of $S_pM$ or $E$ by [F1], and $\lambda$ is defined on all of $T_pM$. Assumption [A1] is used through the suppliers that require it and nowhere else: the Hopf-Rinow and exponential smoothness statements [F10, F11], the countable atlas [F28], the nullity criterion [F29], the countable-union closure of null sets [F25], the equidimensional image theorem [F26], the volume measure [F30] and the measurable-integral facts [F33, F35, F36]; the covering argument of step 5.1 uses the Archimedean property and the integer part, neither of which needs choice, and the choice of basis in step 1.3 is a single existential instantiation. The statement asserts one equality and contains no biconditional, so there is no forward or reverse implication of an equivalence to verify; the only equivalence invoked, nullity versus vanishing outer measure [F33], is used in the direction from nullity to vanishing outer measure. Finally the proof never uses compactness of $M$ and never assumes the cut locus to be a submanifold: nullity is produced from the continuity of the cut time alone, and the closing measure computation uses only the density chart formula.

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, develops the cut locus of a point as the radial image of the cut-time graph over the unit tangent sphere and records its closedness; Datar, *Lectures on Riemannian Geometry*, Lectures 21-24, printed pp.153-176, uses the fact that the cut locus can be discarded in the polar integration formula. The measure-theoretic statement is proved above from the item-local graph-content-zero theorem, the Euclidean image lemma for compact content-zero sets, the equidimensional null-image theorem for $C^1$ maps of smooth manifolds and the density chart formula; no source text is quoted.
