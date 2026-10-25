---
id: lem-cg-polygon-midpoint-drop-and-equality
kind: lemma
title: "Existence of the uniform radius, continuity of the midpoint operation, the energy drop, its equality case, and convergence of zero-limit polygons"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 11
deps: [def-cg-cyclic-small-mesh-polygon-and-midpoint-energy, lem-cg-cat-one-short-and-closed-local-geodesics, def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-comparison-convexity-and-model-spaces, def-metric-space, def-metric-ball, def-metric-continuity, def-metric-compactness, def-metric-compactness-variants, thm-compact-implies-the-other-compactness-forms, thm-finite-products-of-compact-spaces, lem-closed-subset-of-a-compact-space-is-compact, thm-lebesgue-number-lemma, def-metric-convergence, def-real-limit, def-real-and-complex-inner-product-space, cor-inner-product-induces-a-norm, thm-cauchy-schwarz-in-an-inner-product-space, lem-metrics-on-rn, lem-metric-reverse-triangle, thm-extreme-value-metric]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§3.3.1–3.3.6, printed pp. 22–24 (midpoint polygons; mesh, length and energy do not increase; the equality case; polygons with zero length limit are exactly those eventually shortened below $l/2$)"
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.1.4(2)–(3) (local geodesics and convex balls of radius $<D_\\kappa/2$), I.2.1–I.2.16 (spherical laws of cosines and comparison)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2.15–I.2.16, printed pp. 504–505 (the CAT(0) hinged inequality and local geodesics)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $X$ be compact and locally CAT(1), and let $l$, $n\ge3$ and $h<l$ be as in [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]. Then:

**(i) The uniform radius, compactness and continuity.** A uniform local CAT(1) radius $l$ for $X$ exists, and one may assume $l<\pi/2$; every $x\in X^n$ with $\operatorname{mesh}(x)<l$ has a well-defined midpoint tuple $f(x)$, and $\operatorname{mesh}(fx)\le\operatorname{mesh}(x)$, so $f$ restricts to a self-map of $P_h(n)$. The space $P_h(n)$ is a compact metric subspace of $X^n$, the functions $\operatorname{mesh}$, $L$ and $E$ are continuous on $X^n$, and $f$ is continuous on $\{\operatorname{mesh}<l\}$.

**(ii) The energy does not increase.** For every $x\in P_h(n)$ one has $L(fx)\le L(x)$ and $E(fx)\le E(x)$.

**(iii) Equality analysis.** $E(fx)=E(x)$ holds if and only if either $x$ is constant, or all $n$ edge lengths $d(x_i,x_{i+1})$ equal a common value $\xi>0$ and every consecutive triple is straight, i.e. $x_{i+1}$ is the midpoint of a geodesic segment from $x_i$ to $x_{i+2}$ (equivalently $d(x_i,x_{i+2})=d(x_i,x_{i+1})+d(x_{i+1},x_{i+2})$). In the second case the concatenation of the $n$ segments $[x_i,x_{i+1}]$ is a closed local geodesic of length $n\xi$ on which $x_0,\dots,x_{n-1}$ are equally spaced. For $n=2$ the only equality case is the constant tuple.

**(iv) The basin is the eventually-short-polygon set and is open.** The set $U:=\{x\in P_h(n): L(f^m x)<l/2\text{ for some }m\ge0\}$ is open in $P_h(n)$ and equals the zero-limit basin $C^0_h(n)$; in particular $C^0_h(n)$ is open.

**(v) Convergence in the basin.** If $x\in C^0_h(n)$, then $L(f^k x)\to0$ and the iterates converge to a constant tuple: if $L(f^m x)=0$ an iterate is already constant and all subsequent iterates equal it; for every $m$ with $0<L(f^m x)<l/2$ all later iterates lie in the closed ball $\bar B((f^m x)_0,\,L(f^m x)/2)$, whose radii tend to $0$, the diameters of the iterates tend to $0$, and the whole sequence $(f^k x)$ converges in $X^n$ to a constant tuple ([[def-metric-convergence]]). Conversely, if the iterates of $x\in P_h(n)$ converge to a constant tuple, then $x\in C^0_h(n)$.

**(vi) Degenerate and zero-length cases.** If $E(x)=0$ then $x$ is constant and $fx=x$. If some consecutive vertices of $x$ coincide, the corresponding edge contributes $0$ to mesh, length and energy, the midpoint of the degenerate pair is the point itself, and the statements (ii) and (iii) hold unchanged; the equality analysis includes collapsed comparison triangles by continuity.

## Facts & Assumptions

**Given:** A compact locally CAT(1) space $X$, a uniform local radius $l<\pi/2$, an integer $n\ge3$ and $h<l$, with $P_h(n)$, $f$, $L$, $E$, mesh and $C^0_h(n)$ as in the definition.

[F1] [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]: $l$ is a uniform local CAT(1) radius when all closed balls of radius at most $l$ are CAT(1); for $\operatorname{mesh}(x)<l$ consecutive vertices are joined by a unique geodesic inside $B(x_i,l)$ and $f(x)_i=\operatorname{mid}(x_i,x_{i+1})$; $P_h(n)=\{x\in X^n:\operatorname{mesh}(x)\le h\}$; $C^0_h(n)=\{x\in P_h(n):\lim_kL(f^kx)=0\}$; a constant tuple has $\operatorname{mesh}=L=E=0$ and is fixed by $f$, and a degenerate pair has midpoint the point itself.

[F2] [[lem-cg-cat-one-short-and-closed-local-geodesics]]: in a CAT(1) space geodesics between points at distance $<\pi$ are unique and depend continuously on their endpoints, and every nonconstant closed local geodesic has length at least $2\pi$ and image of diameter at least $\pi$.

[F3] [[def-cg-cat-zero-cat-one-and-local-geodesic]]: CAT(1) and locally CAT(1) spaces; a convex subset of a CAT(1) space with the induced metric is CAT(1); $X$ is compact.

[F4] [[lem-cg-comparison-convexity-and-model-spaces]]: comparison triangles of perimeter $<2\pi$ exist in $S^2$; the spherical cosine rule $\cos c=\cos a\cos b+\sin a\sin b\cos\gamma$; balls of radius $<\pi/2$ in a CAT(1) space are convex; the CAT(1) inequality holds for all pairs of points of a triangle of perimeter $<2\pi$.

[F5] [[def-metric-space]]: metric axioms, triangle inequality, and the product (sup) metric on $X^n$.

[F6] [[def-metric-ball]]: $B(x,r)=\{y:d(x,y)<r\}$ and $\bar B(x,r)=\{y:d(x,y)\le r\}$.

[F7] [[def-metric-continuity]]: continuity of maps between metric spaces, and continuity of finite maxima and sums of continuous functions.

[F8] [[def-metric-compactness]], [[def-metric-compactness-variants]], [[thm-compact-implies-the-other-compactness-forms]]: compactness, sequential compactness and limit point compactness in metric spaces, and their equivalence.

[F9] [[thm-finite-products-of-compact-spaces]], [[lem-closed-subset-of-a-compact-space-is-compact]]: finite products of compact spaces are compact and closed subsets of compact spaces are compact.

[F10] [[thm-lebesgue-number-lemma]]: every open cover of a compact metric space has a Lebesgue number.

[F11] [[def-metric-convergence]], [[def-real-limit]]: convergence of sequences and of real nets as used in $\lim_kL(f^kx)=0$.

[F12] [[def-real-and-complex-inner-product-space]], [[cor-inner-product-induces-a-norm]], [[thm-cauchy-schwarz-in-an-inner-product-space]]: $(\sum_i\xi_i)^2\le n\sum_i\xi_i^2$ and $2ab\le a^2+b^2$.

[F13] [[lem-metrics-on-rn]], [[lem-metric-reverse-triangle]]: triangle inequalities used in elementary estimates.

[F14] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains a positive minimum if it is everywhere positive.

## Proof

**Proof technique:** direct.

1.1 **A uniform radius exists.** By local CAT(1), every $z\in X$ has a closed ball $\bar B(z,\rho_z)$ that is CAT(1); replacing $\rho_z$ by $\min\{\rho_z,\pi/4\}$ we may assume $\rho_z<\pi/2$, because a closed sub-ball of radius $<\pi/2$ of a CAT(1) ball is convex ([F4]) and a convex subset of a CAT(1) space with the induced metric is CAT(1) ([F3]). The open balls $B(z,\rho_z/2)$ cover the compact space $X$, so by [F10] the cover has a Lebesgue number $\delta>0$. Put $l:=\min\{\delta/4,\pi/4\}<\pi/2$ and let $x\in X$, $0<r\le l$: the closed ball $\bar B(x,r)$ has diameter at most $2r\le\delta/2<\delta$, so it is contained in $B(z,\rho_z/2)\subseteq\bar B(z,\rho_z)$ for some $z$; as a ball of radius $r\le\pi/4<\pi/2$ in the CAT(1) space $\bar B(z,\rho_z)$ it is convex, and a convex subset of a CAT(1) space with the induced metric is CAT(1), so the induced metric on $\bar B(x,r)$ is CAT(1). Hence $l$ is a uniform local CAT(1) radius and $l<\pi/2$; applying this with the given $l$ replaced by the smaller number justifies the standing assumption. [F1, F3, F4, F10, algebra]

1.2 **Pointwise midpoint bound.** Let $x\in X^n$ with $\operatorname{mesh}(x)<l$ and put $\xi_i:=d(x_i,x_{i+1})$. For each $i$ the three vertices $x_i,x_{i+1},x_{i+2}$ lie in the closed ball $\bar B(x_{i+1},l)$ of radius $l$, which is CAT(1) by [F1]; the triangle $(x_i,x_{i+1},x_{i+2})$ has perimeter at most $2(\xi_i+\xi_{i+1})<4l<2\pi$ and its sides lie in the ball by convexity, so its comparison triangle in $S^2$ exists and the CAT(1) inequality gives $d(m_1,m_2)\le d_S(\bar m_1,\bar m_2)$, where $m_1:=\operatorname{mid}(x_i,x_{i+1})=f(x)_i$, $m_2:=\operatorname{mid}(x_{i+1},x_{i+2})=f(x)_{i+1}$ and $\bar m_1,\bar m_2$ are the comparison points of the model triangle. In the model, the two points lie at distances $\xi_i/2$ and $\xi_{i+1}/2$ from the vertex $\bar x_{i+1}$ with some included angle $\bar\theta$, so the cosine rule of [F4] gives $\cos d_S(\bar m_1,\bar m_2)=\cos(\xi_i/2)\cos(\xi_{i+1}/2)+\sin(\xi_i/2)\sin(\xi_{i+1}/2)\cos\bar\theta\ge\cos((\xi_i+\xi_{i+1})/2)$ by $\cos\bar\theta\ge-1$ and the addition formula; since $(\xi_i+\xi_{i+1})/2<l<\pi/2$ and $\cos$ is decreasing on $[0,\pi]$, we conclude $d(f(x)_i,f(x)_{i+1})\le(\xi_i+\xi_{i+1})/2$. If one of the two half-edges vanishes the midpoint coincides with the vertex and the same conclusion is immediate, so the estimate holds for all tuples of mesh $<l$. [F1, F2, F4, algebra]

1.3 **Continuity.** Endpoint distances are continuous by the reverse triangle inequality, so their finite maximum mesh and finite sums $L,E$ are continuous. To check $f$ at $x$ of mesh $<l$, fix $i$ and choose $R$ with $d(x_i,x_{i+1})<R<l$. The fixed chart $Z=\bar B(x_i,R)$ is CAT(1). If $x^k\to x$, then for large $k$ both endpoints $x_i^k,x_{i+1}^k$ belong to $Z$. Their short geodesic in $Z$ is also the geodesic defining $f(x^k)_i$: both geodesics are contained in $\bar B(x_i^k,l)$, since every point on either is at distance at most their endpoint distance $<l$ from $x_i^k$; uniqueness in that CAT(1) ball identifies them. Continuous endpoint dependence applied in the fixed CAT(1) space $Z$ now gives $f(x^k)_i\to f(x)_i$. There are finitely many indices, so $f(x^k)\to f(x)$. [F1, F2, F5, F7, F13, algebra]

2.1 **$P_h(n)$ is compact.** The function mesh is continuous on $X^n$ by step 1.3, so $P_h(n)=\operatorname{mesh}^{-1}([0,h])$ is closed in $X^n$; the sup metric has the finite product topology (a radius-$r$ ball is a product of coordinate radius-$r$ balls, and every finite product neighborhood contains such a ball), so $X^n$ is compact by [F9], hence $P_h(n)$, a closed subspace of a compact space, is compact by [F9]. [step 1.3, F8, F9, algebra]

2.2 **Monotonicity and the self-map property.** For $x\in P_h(n)$ and each $i$, step 1.2 gives $d(f(x)_i,f(x)_{i+1})\le(\xi_i+\xi_{i+1})/2$ with $\xi_i=d(x_i,x_{i+1})$; summing gives $L(fx)\le\frac12\sum_i(\xi_i+\xi_{i+1})=L(x)$, and summing squares gives $E(fx)\le\frac14\sum_i(\xi_i+\xi_{i+1})^2$, while $\sum_i(\xi_i+\xi_{i+1})^2=2\sum_i\xi_i^2+2\sum_i\xi_i\xi_{i+1}\le2\sum_i\xi_i^2+\sum_i(\xi_i^2+\xi_{i+1}^2)=4\sum_i\xi_i^2=4E(x)$ by $2ab\le a^2+b^2$ ([F12]), so $E(fx)\le E(x)$. Also $d(f(x)_i,f(x)_{i+1})\le(\xi_i+\xi_{i+1})/2\le\operatorname{mesh}(x)$, so $\operatorname{mesh}(fx)\le\operatorname{mesh}(x)\le h$: the midpoint operation maps $P_h(n)$ into itself, and it is defined on all of $P_h(n)$ because $h<l$. This proves (i)'s midpoint assertions and clause (ii). [step 1.2, F1, F12, algebra]

3.1 **Equality analysis.** Suppose $E(fx)=E(x)$. Combining the two bounds of step 2.2, $E(fx)\le\frac14\sum_i(\xi_i+\xi_{i+1})^2\le E(x)$, so equality forces both $\frac14\sum_i(\xi_i+\xi_{i+1})^2=E(x)$, i.e. $\sum_i(\xi_i-\xi_{i+1})^2=0$ and hence all $\xi_i$ are equal to a common $\xi$, and all the pointwise inequalities of step 1.2 to be equalities: $d(f(x)_i,f(x)_{i+1})=(\xi_i+\xi_{i+1})/2=\xi$ for every $i$. If $\xi=0$ then all consecutive vertices coincide and $x$ is constant. If $\xi>0$, fix $i$; in the notation of step 1.2 the equality $d(m_1,m_2)=\xi$ combined with $d(m_1,m_2)\le d_S(\bar m_1,\bar m_2)\le\xi$ forces equality throughout, so $\cos\bar\theta=-1$ and $\bar\theta=\pi$; the comparison triangle is degenerate with $d(x_i,x_{i+2})=\xi+\xi=2\xi$, so equality holds in the triangle inequality $d(x_i,x_{i+2})\le d(x_i,x_{i+1})+d(x_{i+1},x_{i+2})$ and the concatenation of the two geodesics $[x_i,x_{i+1}]$, $[x_{i+1},x_{i+2}]$ is a geodesic segment with midpoint $x_{i+1}$. Conversely, if $x$ is constant then $fx=x$ and $E(fx)=E(x)=0$; and if all edge lengths equal $\xi>0$ and every triple is straight, then each $d(f(x)_i,f(x)_{i+1})$ equals $\xi$ as the distance between the two points at distance $\xi/2$ from $x_{i+1}$ on a common geodesic through it, so $E(fx)=n\xi^2=E(x)$. In the nonconstant case the concatenation of the $n$ segments $[x_i,x_{i+1}]$, parametrized on $S^1_{n\xi}$ by arclength, is by construction locally isometric at every point (at the vertices by straightness of the corresponding triple, inside the edges by the geodesic property) and has length $n\xi$, so it is a closed local geodesic on which $x_0,\dots,x_{n-1}$ are equally spaced. For $n=2$ the two edges are $d(x_0,x_1)=d(x_1,x_0)=\xi$ and $f(x)_0=f(x)_1$ is their midpoint, so $d(f(x)_0,f(x)_1)=0$ and equality $E(fx)=E(x)=2\xi^2$ forces $\xi=0$: only the constant tuple. [step 1.2, step 2.2, F1, F4, algebra]

3.2 **Convergence in the basin.** Let $x\in C^0_h(n)$, so $L_k:=L(f^kx)\to0$ by [F1]. If $L_m=0$ for some $m$, that iterate is constant and fixed by $f$, proving convergence. Otherwise all $L_k>0$; fix $m$ with $L_m<l/2$; then each vertex $(f^mx)_j$ is at distance at most $L_m/2$ from $(f^mx)_0$, because the two arcs of the polygon from $(f^mx)_0$ to $(f^mx)_j$ have lengths summing to $L_m$, so the shorter one is at most $L_m/2$. The closed ball $\bar B((f^mx)_0,L_m/2)$ has radius $<l/4<\pi/2$ and is contained in the CAT(1) ball $\bar B((f^mx)_0,l)$, so it is convex by [F4]; hence it contains all vertices of $f^mx$ and, by induction, all vertices of $f^kx$ for $k\ge m$, since each next iterate has as vertices midpoints of pairs of vertices of the previous one. Therefore $d((f^kx)_i,(f^lx)_i)\le L_m$ for all $k,l\ge m$ and all $i$, so $(f^kx)$ is Cauchy in the compact metric space $X^n$ and converges to some $z\in X^n$ ([F8], [F11]); taking limits in $d(z_i,z_j)\le L_m$ for arbitrary $m$ and using $L_m\to0$ shows that $z$ is constant and the diameters of the iterates tend to $0$. Since $L$ is continuous by step 1.3, $L(f^kx)\to L(z)=0$. Conversely, if $f^kx\to z$ with $z$ constant, then $L(f^kx)\to L(z)=0$ by continuity of $L$, so $x\in C^0_h(n)$. [step 1.1, step 1.3, step 2.2, F1, F4, F6, F8, F11, algebra]

4.1 **Degenerate and zero-length cases.** If $E(x)=0$ then every $\xi_i=0$, so all consecutive vertices of $x$ coincide and $x$ is constant; then $fx=x$ by the convention of [F1], and (ii) and (iii) hold for it. If some consecutive vertices of $x$ coincide while $x$ is not constant, the corresponding edge contributes $0$ to mesh, $L$ and $E$, the midpoint of a degenerate pair is the point itself by [F1], and the proofs of steps 1.2, 2.2 and 3.1 go through verbatim: if a half-edge vanishes the model midline estimate reduces to the immediate bound, and a collapsed comparison triangle is the limiting case of degenerate comparison triangles, in which the cosine-rule identity and the CAT(1) inequality remain valid by continuity; the equality case then includes the possibility that a midpoint coincides with a vertex, and the straightness conclusion is unchanged. [step 1.2, step 2.2, step 3.1, F1, F4, algebra]

4.2 **The eventually-short set is the basin and is open.** Write $U=\{x\in P_h(n):L(f^mx)<l/2\text{ for some }m\}$. For $x\in U$, put $y=f^mx$, $c=y_0$ with $L(y)<l/2$. Its vertices lie in the convex CAT(1) ball $B_0=\bar B(c,l/4)$, so all later vertices do too. For $\varepsilon>0$ the set $K_\varepsilon=\{z\in P_h(n):z_i\in B_0\text{ for every }i,\ E(z)\ge\varepsilon\}$ is compact. If nonempty, the continuous deficit $D(z)=E(z)-E(fz)$ is strictly positive there: equality would give a nonconstant closed local geodesic by step 3.1; every edge remains in $B_0$ by convexity, so the entire curve would be a closed local geodesic in the CAT(1) space $B_0$, contradicting [F2] since $\operatorname{diam}B_0\le l/2<\pi$. Thus $D$ has a positive minimum on nonempty $K_\varepsilon$, and the nonnegative energy of $f^ky$ must eventually fall below $\varepsilon$. If $K_\varepsilon$ is empty, it is already below $\varepsilon$. Hence $E(f^ky)\to0$ and $L(f^ky)\to0$ by $L^2\le nE$. This proves $U\subseteq C^0_h(n)$; the reverse inclusion follows from $L(f^kx)\to0$. Finally $U$ is the union of the open sets $\{L\circ f^m<l/2\}$, since $f$ and $L$ are continuous. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1, step 3.2, F1, F2, F6, F9, F12, F14, algebra]

5.1 **Conclusion.** Clause (i) is step 1.1 for the radius, step 2.2 for the self-map, step 2.1 for compactness and step 1.3 for continuity; clause (ii) is step 2.2; clause (iii) is step 3.1; clause (iv) is step 4.2; clause (v) is step 3.2 together with step 4.2 for the identification of $U$ with the basin; clause (vi) is step 4.1. This proves all assertions. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, step 4.2, F1] ∎
