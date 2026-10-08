---
id: lem-cg-cat-zero-products-and-cat-one-joins
kind: lemma
title: "Products of CAT(0) spaces, joins of CAT(1) spaces, and round spheres"
status: draft
origin: pipeline
dependency_level: 11
deps:
  - def-cg-cat-zero-cat-one-and-local-geodesic
  - lem-cg-comparison-convexity-and-model-spaces
  - thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion
  - def-cg-euclidean-cone-and-spherical-join-metrics
  - thm-cg-cone-join-metric-and-local-product-chart
  - def-metric-space
  - def-metric-ball
  - def-geodesic-and-geodesic-metric-space
  - def-euclidean-spheres-and-closed-balls
  - lem-metrics-on-rn
  - def-real-and-complex-inner-product-space
  - cor-inner-product-induces-a-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-pi-is-the-first-positive-sine-zero
  - def-principal-inverse-sine-and-cosine
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Martin R. Bridson and Andre Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.3.14 (Berestovskii's cone criterion), II.1.1-1.8 (uniqueness of geodesics and convexity of balls of radius $<D_\\kappa/2$), II.5.2 (Gromov's link criterion: an $M_\\kappa$-complex with finitely many shapes has curvature $\\le\\kappa$ if and only if every vertex link is CAT(1); the local model at a vertex is the $\\kappa$-cone $C_\\kappa(\\operatorname{Lk}(v,K))$)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2.15, printed p. 504 (squared CAT(0) comparison); I.2.17–I.2.19, printed pp. 506–507 (cone criterion, product-cone isometry and CAT(1) joins); I.2.8, printed p. 502 (positive-curvature criterion)"
    - title: "Ruth Charney and Michael W. Davis, The Euler characteristic of a nonpositively curved, piecewise Euclidean manifold, Pacific J. Math. 171 (1995)"
      url: "https://msp.org/pjm/1995/171-1/pjm-v171-n1-p04-s.pdf"
      locator: "2.1-2.2 (the (NP) and link conditions), 3.6.3 (the join $L_1*L_2$ and its cone), the $\\kappa>0$ link criterion cited there"
verification:
  precheck: pass
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]).

**(i) The $l^2$-product.** Give $X\times Y$ the $l^2$-product metric $d\bigl((x,y),(x',y')\bigr):=\bigl(d_X(x,x')^2+d_Y(y,y')^2\bigr)^{1/2}$ ([[lem-metrics-on-rn]], [[thm-cauchy-schwarz-in-an-inner-product-space]]). If $X$ and $Y$ are geodesic spaces, then $X\times Y$ is geodesic: for endpoints with factor distances $a$ and $b$, a geodesic is exactly a pair of factor geodesics traversed at constant proportional speeds $a/\sqrt{a^2+b^2}$ and $b/\sqrt{a^2+b^2}$ (with the constant path when $a=b=0$). If $X$ and $Y$ are CAT(0) ([[def-cg-cat-zero-cat-one-and-local-geodesic]](3)), then $X\times Y$ is CAT(0). The same conclusions hold with either factor replaced by a Euclidean space $\mathbb E^n$ with its Euclidean metric.

**(ii) Joins.** Let $L_1,L_2$ be nonempty metric spaces of diameter at most $\pi$, carrying their truncated metrics $d_\pi=\min\{\pi,d\}$ ([[def-cg-euclidean-cone-and-spherical-join-metrics]](2)). The construction and formula of [[def-cg-euclidean-cone-and-spherical-join-metrics]](5) — the quotient of $L_1\times L_2\times[0,\pi/2]$ by the identifications at $\theta=0$ and $\theta=\pi/2$, with $d(x,x')$ the unique number in $[0,\pi]$ satisfying $\cos d(x,x')=\cos\theta\cos\theta'\cos d^1_\pi(x_1,x_1')+\sin\theta\sin\theta'\cos d^2_\pi(x_2,x_2')$ — is a metric of diameter at most $\pi$ on the spherical join $L_1*L_2$, still with the conventions $L*\emptyset=\emptyset*L=L$. The natural radial map $C(L_1)\times C(L_2)\to C(L_1*L_2)$, sending $((r,x),(s,y))$ to the apex if $R=0$ and otherwise to radius $R=\sqrt{r^2+s^2}$ in the join direction $(\cos\theta)x+(\sin\theta)y$ with $\cos\theta=r/R$ and $\sin\theta=s/R$, is an isometry for the square-sum product metric of (i) ([[def-cg-euclidean-cone-and-spherical-join-metrics]](3)). Consequently, if $L_1$ and $L_2$ are CAT(1), then $L_1*L_2$ is CAT(1). In particular, for a one-point space $\{p\}$ the spherical cone $\{p\}*L$ is CAT(1) if and only if $L$ is CAT(1).

**(iii) Round spheres, balls and convex subspaces.** For every $k\ge0$ the round sphere $S^k$ with the metric $d_S(x,y)=\arccos\langle x,y\rangle$ ([[def-euclidean-spheres-and-closed-balls]], [[def-principal-inverse-sine-and-cosine]], [[cor-pi-is-the-first-positive-sine-zero]]) is CAT(1); every closed ball $\bar B(x,\rho)\subseteq S^k$ with $0<\rho<\pi/2$ ([[def-metric-ball]]) is convex and CAT(1) for the induced metric; and every nonempty convex subset $Z$ of a CAT(1) space, with the induced metric, is CAT(1), where convex means that every pair of points of $Z$ at distance $<\pi$ is joined by a geodesic segment of the ambient space lying in $Z$ ([[lem-cg-comparison-convexity-and-model-spaces]](ii), (v)). Consequently, if $L$ is CAT(1) of diameter at most $\pi$ and $D$ is a nonempty closed ball of positive radius $<\pi/2$ in some $S^k$, then the join $D*L$ is CAT(1).

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$, $(Y,d_Y)$ and, in (ii) and (iii), nonempty metric spaces $L_1,L_2,L$ of diameter at most $\pi$ carrying their truncations $d_\pi=\min\{\pi,d\}$.

[F1] A metric space is CAT(0) when it is geodesic and every geodesic triangle satisfies the Euclidean comparison inequality; it is CAT(1) when every pair of points at distance $<\pi$ is joined by a geodesic segment and every geodesic triangle of perimeter $<2\pi$ satisfies the spherical comparison inequality; the empty metric space satisfies both tests vacuously and a one-point space is CAT(0) and CAT(1). ([[def-cg-cat-zero-cat-one-and-local-geodesic]])

[F2] A continuous path has length the supremum of its polygonal sums, and a space is a length space when every pair of points is joined by paths of length arbitrarily close to their distance; geodesic segments are isometric parametrizations of intervals. ([[def-cg-cat-zero-cat-one-and-local-geodesic]])

[F3] The Euclidean plane is CAT(0); for $n\ge2$ the round sphere $S^{n-1}$ with $d_S(x,y)=\arccos(x\cdot y)$ is a geodesic space whose geodesic segments are the minimal great-circle arcs, pairs at distance $<\pi$ have a unique such segment, and every closed ball of positive radius $<\pi/2$ is convex. ([[lem-cg-comparison-convexity-and-model-spaces]])

[F4] A geodesic space is CAT(0) if and only if for every geodesic triangle with vertices $z,x,y$ and every point $p_t$ of a side $[x,y]$ at fraction $t$ one has $d(z,p_t)^2\le(1-t)d(z,x)^2+t\,d(z,y)^2-t(1-t)d(x,y)^2$. ([[lem-cg-comparison-convexity-and-model-spaces]])

[F5] In a CAT(1) space every closed ball of positive radius $<\pi/2$ is convex, and the round circle $S^1_\ell$ is CAT(1) if and only if $\ell\ge2\pi$. ([[lem-cg-comparison-convexity-and-model-spaces]])

[F6] A metric space is CAT(1) exactly when its Euclidean cone is CAT(0), and the cone is formed with the truncation at $\pi$. ([[thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion]])

[F7] The Euclidean cone $C(L)$ on a metric space $L$ with truncated metric $d_\pi$ is $\{o\}\sqcup((0,\infty)\times L)$ with $d_C(o,(r,x))=r$ and $d_C((r,x),(s,y))^2=r^2+s^2-2rs\cos d_\pi(x,y)$, and the spherical join $L_1*L_2$ is the quotient of $L_1\times L_2\times[0,\pi/2]$ with $\cos d(x,x')=\cos\theta\cos\theta'\cos d^1_\pi(x_1,x_1')+\sin\theta\sin\theta'\cos d^2_\pi(x_2,x_2')$, with the conventions $L*\emptyset=L$ and $\emptyset*\emptyset=\emptyset$. ([[def-cg-euclidean-cone-and-spherical-join-metrics]])

[F8] The cone formula defines a metric, the join formula defines a metric of diameter at most $\pi$, and the radial map $((r,x),(s,y))\mapsto\xi(\sqrt{r^2+s^2})$ is an isometry $C(L_1)\times C(L_2)\to C(L_1*L_2)$ for the square-sum product metric; for round spheres $S^{m-1}*S^{n-1}\cong S^{m+n-1}$. ([[thm-cg-cone-join-metric-and-local-product-chart]])

[F9] A metric is a symmetric function vanishing exactly on the diagonal and satisfying the triangle inequality, and the Euclidean norm on $\mathbb R^n$ satisfies the triangle inequality. ([[def-metric-space]], [[lem-metrics-on-rn]])

[F10] In an inner product space, $|\langle u,v\rangle|\le|u||v|$, and $|u|=\langle u,u\rangle^{1/2}$ is a norm. ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[cor-inner-product-induces-a-norm]])

[F11] For a sphere $S^{n-1}\subset\mathbb R^n$ the round distance is $d_S(x,y)=\arccos(x\cdot y)$ with $\arccos$ the principal inverse cosine, and $\cos\pi=-1$. ([[def-euclidean-spheres-and-closed-balls]], [[def-principal-inverse-sine-and-cosine]], [[cor-pi-is-the-first-positive-sine-zero]])

## Proof

1.1 The function $d((x,y),(x',y')):=(d_X(x,x')^2+d_Y(y,y')^2)^{1/2}$ is a metric on $X\times Y$: symmetry and vanishing exactly on the diagonal are immediate from [F9], and the triangle inequality is the triangle inequality of the Euclidean norm on $\mathbb R^2$ applied to the vectors $(d_X(x,x'),d_Y(y,y'))$ and $(d_X(x',x''),d_Y(y',y''))$ [F9, F10]. [F9, F10, algebra]

1.2 Let $\gamma=(\gamma_X,\gamma_Y)$ be a rectifiable path and put $A:=L(\gamma_X)$, $B:=L(\gamma_Y)$. For any $\varepsilon>0$, choose partitions whose coordinate polygonal sums exceed $A-\varepsilon$ and $B-\varepsilon$, and take a common refinement. If $a_i,b_i$ are the two coordinate distances on its successive subintervals, then the product polygonal sum is $\sum_i\sqrt{a_i^2+b_i^2}\ge\sqrt{(\sum_i a_i)^2+(\sum_i b_i)^2}$ by the Euclidean triangle inequality [F9, F10]. Letting $\varepsilon\downarrow0$ gives $L(\gamma)\ge\sqrt{A^2+B^2}$. For endpoints with factor distances $a,b$, this is at least $D:=\sqrt{a^2+b^2}$. If both factors are geodesic, pair constant-speed factor segments, parametrized on $[0,D]$ at speeds $a/D,b/D$ when $D>0$, give a product geodesic because their product distance between parameters $s,t$ is $|s-t|$; if $D=0$ use the constant path. Conversely, if $\gamma:[0,D]\to X\times Y$ is a product geodesic, then $L(\gamma)=D$ and this bound forces $A=a$ and $B=b$. For any $t\in[0,D]$, apply the same bound to the two restrictions $[0,t]$ and $[t,D]$. Their product distances are $t$ and $D-t$, so equality must hold in the coordinate-length bounds and in the Euclidean triangle inequality for the two vectors of coordinate lengths. Thus those lengths are $(ta/D,tb/D)$ and $((D-t)a/D,(D-t)b/D)$; each coordinate distance equals its path length, so both coordinate paths are geodesics with constant proportional speeds. This proves the stated characterization when $D>0$; when $D=0$ both factors are constant. [F2, F9, F10, algebra]

1.3 For a metric space $L$ of diameter at most $\pi$, the formula of [F7] defines a metric on $C(L)$: the case analysis of [F8] uses only that $d_\pi$ is a metric of diameter at most $\pi$ (the zero-radius case reduces to the triangle inequality, the case $\alpha+\beta\le\pi$ places three points in the plane and uses monotonicity of $\cos$ on $[0,\pi]$, and the case $\alpha+\beta>\pi$ uses the projection estimates $r-s\cos\alpha$, $t-s\cos\beta$ and $\cos\alpha+\cos\beta\le0$), so it applies verbatim to the spaces $L_1$ and $L_2$. [F7, F8, algebra]

2.1 The product is CAT(0) if $X$ and $Y$ are: by 1.2 its geodesic triangles have componentwise geodesic sides, and for a triangle with vertices $z,x,y$ and the point $p_t$ of $[x,y]$ at fraction $t$ the hinged criterion [F4] applied in each factor and added gives $d(z,p_t)^2\le(1-t)d(z,x)^2+t\,d(z,y)^2-t(1-t)d(x,y)^2$, because squared product distances add; by [F4] the product is CAT(0). [F1, F4, step 1.2, algebra]

2.2 Let $E$ be the cosine expression in the join formula [F7]. Its two coefficients are nonnegative and sum to $\cos(\theta-\theta')\le1$, so $E\in[-1,1]$; the function $d_J=\arccos E$ descends to the endpoint quotient and separates its classes by the equality case $E=1$. The unit-radius map $\Psi$ into $C(L_1)\times C(L_2)$ satisfies $D(\Psi x,\Psi y)^2=2-2\cos d_J(x,y)$, where $D$ is the product metric: this is the chord distance, not $d_J$. For arbitrary radii, the same expansion transports $D$ along the radial bijection to the cone function built from $d_J$, so that cone function is a metric. The triangle inequality for $d_J$ follows from the radius-$1,s,1$ argument in [F8], in its proof paragraph "The join is a metric space": if $A=d_J(x,y)$, $B=d_J(y,z)$ and $A+B<\pi$, choose $s=\sin(A+B)/(\sin A+\sin B)$ when $A+B>0$. The intermediate planar point $s(\cos A,\sin A)$ lies on the chord from $(1,0)$ to $(\cos(A+B),\sin(A+B))$, so the cone triangle inequality gives $2\sin(d_J(x,z)/2)\le2\sin((A+B)/2)$ and hence $d_J(x,z)\le A+B$. The case $A+B=0$ follows from separation, and $A+B\ge\pi$ follows from $d_J\le\pi$. Thus the join formula defines the required angular metric. [F7, F8, step 1.1, step 1.3, algebra]

3.1 The radial map in (ii) is an isometry $C(L_1)\times C(L_2)\to C(L_1*L_2)$: for general radii the expansion of 2.2 gives $d_C(\xi(R),\xi(R'))^2=R^2+R'^2-2RR'\cos d$ with $d$ the join distance, which equals the sum of the two squared cone distances, namely the square-sum product distance; the conventions $L*\emptyset=L$ and $\emptyset*\emptyset=\emptyset$ of [F7] cover the empty cases. [F7, step 2.2, algebra]

3.2 A Euclidean space $\mathbb E^n$ is CAT(0) [F3], so replacing either factor in 2.1 by $\mathbb E^n$ is the special case in which that factor's hinged inequality is an equality; the componentwise description of geodesics of 1.2 and the CAT(0) conclusion of 2.1 therefore yield the clause as stated. [F3, step 1.2, step 2.1, algebra]

4.1 If $L_1$ and $L_2$ are CAT(1) then $L_1*L_2$ is CAT(1): by [F6] the cones $C(L_1),C(L_2)$ are CAT(0), by 2.1 their $l^2$-product is CAT(0), by 3.1 it is isometric to $C(L_1*L_2)$, and by [F6] again the join is CAT(1); if one factor is empty the join is the other factor [F7], which is CAT(1), and a point is CAT(1) [F1]. [F1, F6, F7, step 2.1, step 3.1, discharge-construct]

5.1 For a one-point space $\{p\}$ the spherical cone $\{p\}*L$ is CAT(1) exactly when $L$ is: if $L$ is CAT(1) then $\{p\}*L$ is CAT(1) by 4.1; conversely if $\{p\}*L$ is CAT(1) then $C(\{p\}*L)$ is CAT(0) [F6] and is isometric to $C(\{p\})\times C(L)$ by the radial map of (ii), and $C(L)$ is CAT(0) because a geodesic of this product joining two points of a slice $\{0\}\times C(L)$ has constant first coordinate by 1.2, so triangles in the slice lift to the product with their side lengths unchanged and the product comparison inequality of 2.1 restricts to the CAT(0) inequality of $C(L)$; hence $L$ is CAT(1) [F6]. [F6, step 1.2, step 2.1, step 4.1, suffices]

5.2 The round sphere $S^k$ is CAT(1): $S^0$ is a two-point space at distance $\pi$ [F11], in which every triangle with two distinct vertices has a side of length $\pi$ and hence perimeter at least $2\pi$, so all admissible tests are degenerate; $S^1=S^0*S^0$ of circumference $2\pi$ is CAT(1) [F5, F8]; and $S^k=S^{k-1}*S^0$ for $k\ge1$ [F8], so induction on $k$ with 4.1 gives the claim. Every closed ball $\bar B(x,\rho)\subseteq S^k$ with $0<\rho<\pi/2$ is convex (by [F3] for $k\ge1$, and because it is a singleton for $k=0$) and hence CAT(1) for the induced metric: a triangle of perimeter $<2\pi$ in a convex subset has its sides, which are ambient geodesic segments of length $<\pi$, contained in the subset, and its comparisons hold in the ambient CAT(1) space. [F3, F5, F8, F11, step 4.1, induction, discharge-induction]

6.1 If $L$ is CAT(1) of diameter at most $\pi$ and $D$ is a nonempty closed ball of positive radius $<\pi/2$ in some $S^k$, then $D*L$ is CAT(1): $D$ is nonempty, has diameter $<\pi$ and is CAT(1) with the induced metric by 5.2, so the join step 4.1 applies to the pair $(D,L)$. [F7, step 4.1, step 5.2, algebra] ∎

## Remarks

- **Supplier decision recheck:** proof steps 4.1 and 5.1 use both directions of Berestovskii's equivalence from [[thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion]](i): step 4.1 transfers CAT(1) of the factors to CAT(0) of their cones and back to the join; step 5.1 uses the converse for the one-point join. The current supplier text contains explicit large-perimeter and antipodal comparison arguments in its proof steps 3.1 and 4.1, which were rechecked against Bridson–Haefliger II.3.14, printed pp. 189–190; the current part-(i) claim and these two uses agree. Its only item receipt has an older hash and remains escalated in the supplier's pair, so this batch records the current clause-(i) dependency as verified for these exact uses and reports the stale supplier decision for owner reconciliation.
