---
id: lem-relative-smooth-circle-map-extension-and-regular-fiber
kind: lemma
title: "Relative smooth circle-map extension and its regular fibre"
status: draft
origin: session
deps: [def-axiom-of-choice, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, thm-simplicial-and-singular-homology-agree-for-simplicial-complexes, prop-the-first-hurewicz-map-in-degree-one-is-abelianization, cor-geometric-unit-circle-has-fundamental-group-z, cor-real-line-is-universal-cover-of-circle, thm-path-lifting-for-covering-maps, thm-covering-space-lifting-criterion, thm-higher-dimensional-spheres-are-simply-connected, thm-collar-neighborhood-theorem, lem-smooth-bump-between-concentric-euclidean-balls, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-morse-sard-for-smooth-manifolds, prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold, thm-a-regular-level-set-is-an-embedded-submanifold, cor-homotopic-maps-induce-the-same-map-on-singular-homology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Julia Collins, On the concordance orders of knots (2011), Theorem 2.2.9, Step 1, printed p.20 / PDF p.34"
      url: "https://era.ed.ac.uk/bitstream/handle/1842/5034/Collins2011.pdf?sequence=4"
    - title: "Allen Hatcher, Algebraic Topology, §§1.1 and 1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Assume the Axiom of Choice. Let $W$ be a compact connected smooth $4$-manifold with boundary $A=\partial W$, with $A$ connected; the empty-boundary case is allowed. Identify $S^1$ with the unit complex numbers, oriented by $t\mapsto e^{2\pi it}$, and identify $H_1(S^1;\mathbb Z)$ with $\mathbb Z$ using that positive generator. Let $i:A\hookrightarrow W$, let $g:A\to S^1$ be smooth, and let $\lambda:H_1(W;\mathbb Z)\to\mathbb Z$ be a homomorphism.

There exists a smooth $G:W\to S^1$ such that $G_*=\lambda$ and, in a smooth boundary collar $c:A\times[0,\epsilon)\to W$,
$$G(c(a,t))=g(a)$$
if and only if $g_*=\lambda\circ i_*$. A chosen smooth collar may be used after shrinking it.

For such an extension, one can make $1$ a regular value by an arbitrarily small smooth perturbation and a homotopy fixed on a smaller boundary collar if and only if there is an open arc $J\subseteq S^1$ containing $1$ such that $g$ is a submersion at every point of $g^{-1}(J)$. Equivalently, $1$ must be a regular value of $g$, with the empty fibre counted as regular. The perturbed extension still induces $\lambda$.

For an extension with $1$ regular, the fibre $G^{-1}(1)$ is a compact properly embedded, canonically cooriented smooth $3$-manifold, possibly empty, whose boundary is exactly $g^{-1}(1)$. In the collar it is the product $g^{-1}(1)\times[0,\epsilon')$. No orientability of $W$ is required for the coorientation.

## Statement references

[[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]

[[thm-covering-space-lifting-criterion]]

[[thm-collar-neighborhood-theorem]]

[[thm-morse-sard-for-smooth-manifolds]]

[[thm-a-regular-level-set-is-an-embedded-submanifold]]

## Facts & Assumptions

**Given:** The compact smooth manifold, boundary map, homomorphism and orientation conventions of the statement.

[A1] The Axiom of Choice is the ambient assumption [[def-axiom-of-choice]]. It supplies the countable-choice hypotheses of the collar, convolution and Sard suppliers, as well as the declared ambient hypothesis of the triangulation supplier. The relative tree and cell operations below are finite.

[F1] [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]] gives a finite triangulation of $W$ with $A$ a subcomplex. [[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]] identifies its simplicial homology naturally with singular homology.

[F2] [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]] identifies the homology class of a loop with its image in the abelianization. [[cor-geometric-unit-circle-has-fundamental-group-z]] identifies the positive loop $e^{2\pi it}$ with $1$; hence a circle loop has homology class equal to its winding number, the endpoint increment of a lift to $\mathbb R$.

[F3] The quotient covering of the circle has simply connected total space $\mathbb R$ by [[cor-real-line-is-universal-cover-of-circle]], transferred to the geometric circle by its trigonometric parametrization. Paths lift uniquely by [[thm-path-lifting-for-covering-maps]], and a map from a path-connected locally path-connected space lifts when its fundamental-group image is trivial by [[thm-covering-space-lifting-criterion]]. The spheres $S^n$, $n\ge2$, are simply connected by [[thm-higher-dimensional-spheres-are-simply-connected]].

[F4] [[thm-collar-neighborhood-theorem]] gives a smooth collar. [[lem-smooth-bump-between-concentric-euclidean-balls]] gives finite chart cutoffs, and [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]] smooths continuous compactly supported coordinate functions.

[F5] [[thm-morse-sard-for-smooth-manifolds]] makes critical values null; [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]] makes regular values dense in a real parameter interval. [[thm-a-regular-level-set-is-an-embedded-submanifold]] gives the local submersion coordinates for regular fibres in boundaryless manifolds.

[F6] Homotopic maps induce the same maps on homology by [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]].

## Proof

1.1 If $W=\varnothing$, all maps and fibres are empty and every conclusion holds; assume $W\ne\varnothing$. Necessity follows by restricting an extension: $G\circ i=g$ implies $g_*=G_*i_*=\lambda i_*$. We prove sufficiency assuming this compatibility. By [F1] fix a finite triangulation $K$ of $W$ and its boundary subcomplex $B$. A connected finite complex has connected one-skeleton: otherwise the finitely many unions of simplices with vertices in each graph component would disconnect its realization. If $A\ne\varnothing$, take a maximal tree $T_A$ of $B^{(1)}$, choose a root $b$ there, and extend $T_A$ to a maximal tree $T$ of $K^{(1)}$ by successively adding edges to new vertices. All boundary vertices already belong to $T_A$, so no additional boundary edge is added and $T\cap B^{(1)}=T_A$. If $A=\varnothing$, start from any vertex and take a maximal tree $T$; the subsequent boundary instructions are vacuous. [A1, F1, given]

2.1 Write $p(t)=e^{2\pi it}$. When $B\ne\varnothing$, choose one real lift of $g(b)$. Lift $g$ along the unique root paths in $T_A$ by [F3]; the unique path lifts agree on common initial segments, so give continuous real lifts along its edges and a real number $\theta_v$ at every boundary vertex $v$. Assign any real numbers, for instance zero, to the remaining vertices. For a nonboundary edge of $T$, map it by $p((1-s)\theta_u+s\theta_v)$, where $u,v$ are its endpoints. Keep $g$ unchanged on every boundary edge, including all boundary edges outside $T_A$. If $B=\varnothing$, assign zero to all vertices and use the same tree-edge prescription. Thus the map on $T$ has a global real lift taking the vertex values $\theta_v$. [F3, step 1.1, construct]

3.1 Orient each remaining edge $e:u\to v$. Let $p_v$ denote the root path in $T$, and let $C_e=p_u+e-p_v$ denote its integral one-cycle in $W$, viewed either as a sum of oriented edges or as the corresponding concatenated based loop. Put $k_e=\lambda([C_e])\in\mathbb Z$. For a nonboundary edge outside $T$, define its map as $p((1-s)\theta_u+s\theta_v+s k_e)$. A lift starting at $\theta_u$ ends at $\theta_v+k_e$, so the resulting loop around $C_e$ has winding $k_e$. For a boundary edge outside $T_A$, its existing map $g$ has exactly this same endpoint increment: both root paths are in $T_A$, so $C_e$ lies in $A$, and its winding is $g_*([C_e]_A)=\lambda i_*([C_e]_A)=k_e$ by compatibility and [F2]. Thus no prescribed boundary edge is changed. Tree edges satisfy the same increment rule with $k_e=0$, since their root loops retrace. Reversing an orientation reverses the increment. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 For an oriented two-simplex $\tau$, the winding of the current map on its boundary is the signed sum of the $k_e$ on its three edges: the vertex differences $\theta_v-\theta_u$ cancel. The same signed sum of the cycles $C_e$ is its boundary cycle, since the root paths cancel as chains. Consequently this winding is $\lambda([\partial\tau])=0$, because $\partial\tau$ bounds the characteristic singular two-simplex in $W$. If $\tau\notin B$, the loop therefore has a real path lift whose endpoints agree; it gives a continuous real function on the entire boundary circle. Extend that real function to the simplex by coning: from its barycentre, at radial fraction $r$ toward a boundary point $z$, use $r h(z)+(1-r)c$ for any real constant $c$. Boundedness of $h$ on the compact boundary makes the formula continuous at the barycentre. Compose with $p$ to fill $\tau$ exactly on its prescribed boundary. For $\tau\in B$, keep $g$ on all of $\tau$. Finite pasting gives an extension over the two-skeleton and all of $B$. [F2, F3, step 3.1, construct, algebra]

5.1 Proceed through the nonboundary three- and four-simplices in face-respecting order. At a simplex of dimension $n\ge3$, the map is already defined on its entire boundary, a copy of $S^{n-1}$. By [F3] that sphere is simply connected and locally path-connected, so the boundary map lifts to a continuous real function. The coning formula of step 4.1 extends this lift over the simplex and hence extends the circle map. Keep every simplex of $B$ equal to $g$ throughout. There are finitely many simplices and all maps agree on their faces, so pasting produces a continuous $h:W\to S^1$ extending $g$. This proves the higher-cell extension without assuming any unproved assertion about the higher homotopy groups of $S^1$. [F3, step 4.1, construct]

6.1 The map $h$ induces $\lambda$. Indeed, every integral one-cycle in the graph is a sum of its edge coefficients times the cycles $C_e$ for $e\notin T$: subtracting those terms leaves a one-cycle supported on $T$, which is zero by successively deleting leaves of the finite tree. The classes of these cycles therefore generate simplicial $H_1(K)$, whose cycles lie in its one-skeleton, and [F1] transfers this assertion to singular $H_1(W)$. On each $C_e$ the induced map of $h$ is its winding $k_e$ by [F2] and step 3.1; this is $\lambda([C_e])$. Thus the homomorphisms agree on all of $H_1(W)$. [F1, F2, step 3.1, step 5.1, algebra]

7.1 Use a given smooth collar after shrinking, or obtain one by [F4], and rescale it as $c:A\times[0,3)\to W$. Choose a smooth function $\rho:[0,3)\to[0,3)$ equal to zero for $t\le1$, equal to $t$ for $t\ge2$, and with $0\le\rho(t)\le t$; for example multiply $t$ by a smooth step from zero to one on $[1,2]$. Define $R(c(a,t))=c(a,\rho(t))$, and $R$ to be the identity outside this collar. The formulas agree near its outer end. Replacing $\rho(t)$ by $(1-s)t+s\rho(t)$ gives a homotopy from the identity to $R$ fixed on $A$. Hence $F_0=h\circ R$ is continuous, equals $g(a)$ for $t\le1$, is smooth on that collar, and still induces $\lambda$ by [F6]. If $A=\varnothing$, take $R$ to be the identity and omit the collar conditions. [F4, F6, step 6.1, construct]

8.1 We prove the needed relative smoothing directly. Let $b_0$ be a smooth collar cutoff equal to one for $t\le1/2$, zero for $t\ge3/4$, and zero outside the collar. The compact set $W\setminus c(A\times[0,1/2))$ is covered by finitely many interior coordinate balls $U_j$ disjoint from the closed collar $c(A\times[0,1/4])$, with smaller concentric balls still covering that compact set. By [F4] choose nonnegative smooth bumps $b_j$ supported compactly in the $U_j$ and equal to one on the smaller balls. The sum $b_0+\sum_j b_j$ is positive everywhere. Dividing each term by this sum gives a finite smooth partition $\psi_0,\psi_1,\ldots,\psi_m$ with these supports. The function $\psi_0F_0$, with values in $\mathbb C=\mathbb R^2$, is smooth because its support is contained in the region where $F_0$ is smooth. For empty boundary omit $b_0$ and cover all of $W$ by the interior balls. [F4, step 7.1, construct]

9.1 In each interior chart, extend $\psi_jF_0$ by zero to a continuous compactly supported complex-valued function $f_j$ on $\mathbb R^4$. Fix a nonnegative smooth unit-mass kernel supported in a ball: [F4]'s Euclidean bump equals one on a smaller ball, so its integral is positive and finite, and division by that integral gives such a kernel. Convolution with a sufficiently small scaled kernel is smooth by [F4], has support compactly inside the same chart, and approximates $f_j$ uniformly within $1/(4m)$ when $m>0$. For the uniform bound, the difference is the integral of $f_j(x-y)-f_j(x)$ against a nonnegative unit-mass kernel with $|y|$ uniformly small; uniform continuity of $f_j$ makes this bound arbitrarily small. Pull these convolutions back to their charts and extend them by zero. Adding them to $\psi_0F_0$ gives a global smooth map $f:W\to\mathbb C$ with $|f-F_0|<1/4$. Every chart support misses the closed smaller collar, so $f=F_0=g\circ\operatorname{pr}_A$ there. If $m=0$ no convolution is needed and take $f=F_0$. Since $|F_0|=1$, the map $G=f/|f|$ is smooth; normalizing $(1-s)F_0+sf$, whose distance from $F_0$ is less than $1/4$, gives a homotopy fixed on that smaller collar. Thus $G$ induces $\lambda$ by [F6] and has the prescribed smooth collar behavior. [F4, F6, step 8.1, construct, algebra]

10.1 The condition on $g$ is equivalent to $1$ being regular for $g$. One implication is immediate. Conversely, the critical locus of the smooth $g$ is closed in compact $A$, since failure of surjectivity of its derivative is a closed condition in local coordinates. Its image is compact, hence closed in $S^1$. If $1$ is regular, this critical-value image omits $1$, so some open arc $J$ about $1$ misses it. Thus $g$ is a submersion on $g^{-1}(J)$. This includes the empty fibre and empty boundary. If any smooth map equals $g\circ\operatorname{pr}_A$ on a boundary collar, its derivative at a point of $g^{-1}(1)$ has the same image as $dg$, because the collar-normal derivative is zero. Hence regularity of $1$ for a collar-preserving perturbation necessarily implies this condition on $g$. [step 9.1, algebra]

11.1 Assume now this necessary condition. Choose a smooth $\chi:W\to[0,1]$ equal to zero on a smaller closed boundary collar and equal to one off a slightly larger collar, with its entire transition contained in the product collar for $G$. For example use a smooth step in its collar coordinate and extend it by one; for empty boundary take $\chi=1$. For a real parameter $s$ near zero, define $H(x,s)=G(x)e^{2\pi i s\chi(x)}$. If $\chi(x)>0$, differentiation in $s$ is a nonzero tangent vector to $S^1$, so the evaluation map $H$ is a submersion. If $\chi(x)=0$ and $H(x,s)=1$, then $x$ is in the product collar, $G(x)=1$, and $dG$ is surjective by regularity of $g$; moreover $d\chi_x=0$ at interior zeroes since $\chi\ge0$. Thus $d_xH=dG$ there. It follows that $1$ is a regular value of $H$ on $\operatorname{Int}W\times(-\delta,\delta)$ for every sufficiently small $\delta>0$. [F4, step 9.1, step 10.1, construct, algebra]

12.1 By [F5], $X=H^{-1}(1)\cap(\operatorname{Int}W\times(-\delta,\delta))$ is a smooth boundaryless $4$-manifold. Apply Sard to the smooth projection $q:X\to(-\delta,\delta)$; its regular values are dense by [F5]. A regular parameter $s$ makes $1$ regular for the slice $H_s$ on $\operatorname{Int}W$: at a point of $X$, write the derivative of $H$ in an angular target coordinate as $L(v)+a t$. Its kernel is $T X$, and the differential of $q$ is $(v,t)\mapsto t$ on this kernel. If $L$ is surjective, one can solve $L(v)=-at$ for every $t$, so this projection is surjective. If $L$ is not surjective, its one-dimensional target forces $L=0$; regularity of $H$ then forces $a\ne0$, and its kernel has $t=0$, so the projection is not surjective. This proves exactly the needed equivalence. The boundary slice remains $g$ on the fixed collar and is already regular at $1$. Choosing regular $s$ arbitrarily near zero therefore gives the desired extension $\widetilde G=H_s$ on all of $W$, with homotopy $H(x,us)$ fixed on the smaller collar and still inducing $\lambda$ by [F6]. The family tends to $G$ in the smooth topology as $s\to0$, since in every chart each derivative depends smoothly on $(x,s)$ and compactness gives uniform bounds on finitely many chart cores. Hence the perturbation can be arbitrarily small in that topology. [F5, F6, step 11.1, algebra]

13.1 Set $M=\widetilde G^{-1}(1)$. Its interior points have embedded hypersurface charts by [F5]. At its boundary points, the product collar gives $M=g^{-1}(1)\times[0,\epsilon')$; applying the boundaryless regular-value theorem to $g:A\to S^1$ makes $g^{-1}(1)$ an embedded smooth surface in $A$, so these are precisely embedded half-space charts for $M$. Thus $M$ is a smooth properly embedded $3$-manifold with $\partial M=g^{-1}(1)$ and no other boundary. It is compact because it is closed in compact $W$. The surjection $d\widetilde G:T W|_M\to T_1S^1$ has kernel $T M$ and induces an isomorphism of its normal line bundle with the oriented line $T_1S^1$; this gives the stated canonical coorientation and agrees with the product coorientation on the boundary collar. Empty fibres satisfy all conclusions. The construction and necessity in steps 1.1 and 10.1 prove every claimed equivalence. [F5, step 1.1, step 10.1, step 12.1, algebra] ∎

## Source notes

Collins's printed p.20 supplies the finite-tree extension idea in the slice-disk exterior setting. Here the boundary non-tree edges are explicitly kept fixed and their winding numbers are checked using the assumed homology compatibility; higher-cell fillings are explicit real lifts and cones. The smooth collar freezing, relative finite-chart smoothing, and angle-bump/Sard perturbation are proved here. This is a smooth intermediate lemma. It does not assert local-flat TOP transversality, a smooth structure on a topological disk exterior, or a TOP regular-fibre theorem.

A manifold presented with corners can use this lemma on a chosen smooth rounding once the boundary map and homology data have been transported to that rounded manifold. The statement makes no claim that arbitrary corner boundary data are automatically smooth after an unspecified rounding.
