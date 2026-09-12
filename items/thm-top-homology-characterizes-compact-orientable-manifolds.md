---
id: "thm-top-homology-characterizes-compact-orientable-manifolds"
kind: "theorem"
title: "Top homology of a connected manifold"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-compatible-local-orientation-classes-exist-over-compact-subsets","def-fundamental-class-of-a-compact-oriented-manifold","def-orientation-local-system-and-orientation-cover","def-r-orientation-of-a-topological-manifold","thm-long-exact-sequence-in-homology","thm-local-homology-detects-interior-points-boundary-points-and-dimension","cor-homology-of-spheres","thm-path-connected-implies-connected","thm-heine-borel-rn","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-long-exact-sequence-of-a-pair-in-singular-homology","thm-excision-for-singular-homology","prop-relative-homology-is-functorial-for-maps-of-pairs","cor-the-long-exact-homology-sequence-is-natural","cor-homotopic-maps-induce-the-same-map-on-singular-homology"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem 3.26 and Proposition 3.29
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: Miller, Lectures on Algebraic Topology, Lectures 31–32
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M$ be a nonempty connected boundaryless $n$-manifold, and $R$ a commutative unital ring. Then $H_i(M;R)=0$ for $i>n$. If $M$ is noncompact, $H_n(M;R)=0$. If $M$ is compact, restriction to any local stalk is injective and, after identifying that stalk with $R$, has image
$$\begin{cases}R,&M\text{ is }R\text{-orientable},\\R[2]=\{r\in R:2r=0\},&M\text{ is not }R\text{-orientable}.\end{cases}$$
The nonorientable alternative need not vanish when $R$ has $2$-torsion. These statements require no AC. The nonempty hypothesis excludes the empty connected-space convention from the compact classification.

## Facts & Assumptions

[F1] [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]] gives vanishing above $n$, pointwise injectivity in degree $n$, and realization of every continuous local-system section over compact supports.

[F2] [[def-orientation-local-system-and-orientation-cover]] gives integral path transport, independent of choices and endpoint-fixed homotopy, with infinite cyclic stalks.

[F3] [[def-r-orientation-of-a-topological-manifold]] defines the local $R$-system and its generator sections. [[def-fundamental-class-of-a-compact-oriented-manifold]] identifies the class of an orientation on compact $M$.

[F4] [[thm-long-exact-sequence-in-homology]] gives exactness from a short exact sequence of quotient chain complexes.

[F5] [[cor-homology-of-spheres]] computes sphere homology with arbitrary coefficients.

[F6] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] computes every interior local stalk as $R$ in degree $n$ and zero otherwise.

[F7] [[thm-path-connected-implies-connected]] gives connectedness of intervals, simplices and convex chart neighborhoods.

[F8] [[thm-heine-borel-rn]] and [[thm-compact-subset-of-a-hausdorff-space-is-closed]] make closed coordinate balls compact and closed in $M$.

[F9] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] identifies $H_n(D^n,S^{n-1};G)$ with the kernel of the map from boundary homology to disk homology when the disk has no positive homology. For $n=1$ this is the augmentation kernel of $H_0(S^0;G)\to H_0(D^1;G)$. The connecting map is induced by the chain boundary and commutes with change of coefficients.

[F10] [[thm-excision-for-singular-homology]] and [[prop-relative-homology-is-functorial-for-maps-of-pairs]] supply the chart-to-local-stalk comparison and functoriality of all maps of pairs.

[F11] [[cor-the-long-exact-homology-sequence-is-natural]] makes pair connecting maps commute with maps of pairs, and [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]] makes explicit deformation retractions induce homology isomorphisms.

## Proof

**Given:** $M,n,R$ as stated. A local-system section below may have nongenerator values.

1.1 The chain coefficient map $\iota_R:C_*(-;\mathbb Z)\to C_*(-;R)$ sends $\sum m_j\sigma_j$ to $\sum(m_j1_R)\sigma_j$. It commutes directly with boundary, passage to relative quotients, and maps of pairs. We now verify on the stated interfaces that its map on an integral local stalk takes a generator to an $R$-module generator, consistently with the abstract sphere and local-group computations in [F5] and [F6]. For $n\ge1$, choose a chart carrying $x$ to $0$ in an open ball $B$, and a concentric closed disk $D$ with boundary sphere $S$. The radial formula
$$h(y,t)=\left(1-t+t\frac{\rho}{\lVert y\rVert}\right)y$$
deformation retracts $B\setminus\{0\}$ onto $S$, where $\rho$ is the radius of $D$: its norm is $(1-t)\lVert y\rVert+t\rho$, so it stays nonzero and inside $B$. The disk and $B$ are contractible, hence [F11] and the natural pair sequences show that inclusion $(D,S)\to(B,B\setminus\{0\})$ induces an isomorphism in degree $n$; for $n=1$ the connecting terms are the augmentation kernels in reduced $H_0$, exactly as in [F9]. By [F10], the chart map and excision then identify this ball-pair group with $H_n(M,M\setminus\{x\};G)$ for $G=\mathbb Z$ and for $G=R$. The sphere calculation [F5] gives a primitive positive boundary generator with coefficient $1$, and [F9] gives its unique preimage in $H_n(D,S;\mathbb Z)$. The coefficient map sends the boundary generator to the same alternating cycle with coefficient $1_R$ (for $n=1$, it sends $(1,-1)$ to $(1_R,-1_R)$ in the augmentation kernel). Naturality of [F9] therefore sends its relative preimage to the preimage of the coefficient-$1_R$ boundary generator. Under the chart and excision isomorphisms this is an $R$-module generator of the local stalk, also when $R$ is the zero ring. Thus the induced integral local generator maps to an $R$-generator. For $n=0$, the same conclusion follows directly from the point class with coefficient $1$. Finally, the transports in [F2] and [F3] are composites of the same ball restriction isomorphisms, so their naturality with $\iota_R$ is the chain-level commutation just established. An integral stalk automorphism is multiplication by $+1$ or $-1$, since its value on a generator must again be a generator. Hence the corresponding loop transports on an $R$ stalk have those same signs. [F2, F3, F5, F6, F9, F10, F11, given, construct]

1.2 Any two points of $M$ can be joined by a path. Indeed, the subset of points reachable from one fixed point is open, since paths can be extended within convex chart neighborhoods. Every other path-reachability class is open for the same reason, so its complement is open. Connectedness and nonemptiness force the reachable subset to be all of $M$. In a ball trivialization, a continuous local-system section is constant along a path segment: its discrete coordinate is continuous on a connected interval by [F7], and a nonconstant value would separate that interval by a fiber and its complement. Therefore a section is determined everywhere by its value at any one point, using finite path subdivisions as in [F2]. [F2, F3, F7, given]

1.3 For any finite singular cycle $z$ in $M$, its image is compact: the finitely many simplex domains are compact by [F8], continuous images are compact by pulling back covers, and finite unions preserve compactness. Cover this image by interiors of closed coordinate balls lying inside larger charts, and take a finite subcover. The union $U$ of the smaller open balls contains the image of $z$ and has compact closure, since its closure lies in the finite union of the closed balls and is closed there. Put $V=M\setminus\overline U$, and $W=U\cup V$. These are open, with $U,V$ disjoint. Both $M\setminus V=\overline U$ and $M\setminus W=\overline U\setminus U$ are compact. [F8, given]

2.1 Fix a base point $x_0$ and one integral generator there, whose coefficient extension identifies the $R$ stalk with $R$ by step 1.1. A section's value $r$ is fixed by all loop transports. Conversely, for any such fixed $r$, define its value at $y$ by transport along any path from $x_0$ to $y$. Paths exist by step 1.2. Two choices give the same value because traversing one and reversing the other is a loop fixing $r$. Thus there is a unique prescribed value at each point, defining a function without choosing a path simultaneously for every point. On a ball its values are the local restrictions of one class, so the resulting section is continuous. This gives an $R$-linear bijection between sections and the common fixed submodule of the loop signs. It is $R$ if all signs are positive, and $R[2]$ if a negative sign occurs. [F2, F3, step 1.1, step 1.2]

2.2 For the triple $V\subset W\subset M$, the quotient sequence $$0\longrightarrow C_*(W;R)/C_*(V;R)\longrightarrow C_*(M;R)/C_*(V;R)\longrightarrow C_*(M;R)/C_*(W;R)\longrightarrow0$$ is degreewise exact: the first map is inclusion modulo $C_*(V)$, and the kernel of the last quotient consists exactly of the classes represented in $C_*(W)$. By [F4] it gives $$H_{i+1}(M,W;R)\longrightarrow H_i(W,V;R)\longrightarrow H_i(M,V;R).$$ Every singular simplex in $W$ lies in $U$ or $V$, since the inverse images of these disjoint open sets would otherwise separate its connected domain ([F7]). Thus $C_*(W)/C_*(V)=C_*(U)$, compatibly with maps of the cycle $z$. By [F1] and the compactness in step 1.3, the left group is zero for $i\ge n$. Therefore $H_i(U;R)\to H_i(M,V;R)$ is injective for $i\ge n$. For $i>n$, its target also vanishes by [F1], so $z$ bounds already in $U$. This proves $H_i(M;R)=0$ for all $i>n$, whether or not $M$ is compact. [F1, F4, F7, step 1.3]

3.1 A section is an orientation exactly when its base-point value is a unit: all transports are module isomorphisms and [F3] characterizes generators as unit multiples of one generator. If the fixed submodule is $R$, it contains $1$ and $M$ is $R$-orientable. If it is $R[2]$ and contains a unit $u$, then $2u=0$ implies $2=0$ after multiplication by $u^{-1}$, so $R[2]=R$ and again $M$ is $R$-orientable. Consequently the fixed submodule is $R$ in the $R$-orientable case, and exactly $R[2]$ in the non-$R$-orientable case. No claim that the latter subgroup vanishes is justified without a restriction on $R$. [F3, step 2.1]

4.1 For compact $M$, any class $a\in H_n(M;R)$ yields a continuous section of point restrictions: over a coordinate ball, first restrict $a$ to its ball-supported group, and its subsequent point values form exactly a basic section of [F3]. By [F1] with support $M$, this map from classes to sections is bijective and all higher groups vanish. Evaluation at $x_0$ and steps 2.1–3.1 give the stated injective stalk map and its image. In the oriented case the section of generators corresponds to the fundamental class of [F3], and multiplying it by $r$ gives the class with local coefficient $r$. [F1, F3, step 2.1, step 3.1]

5.1 Suppose $M$ is noncompact and $z$ is a degree-$n$ cycle. Its point restrictions define a continuous section just as in step 4.1. Outside its compact image the restriction is zero because the chain is in the omitted subspace. Such a point exists by noncompactness, and step 1.2 forces the section to be zero everywhere. By [F1], the image of $z$ in $H_n(M,V;R)$, supported on compact $\overline U$, is therefore zero. The injection of step 2.2 makes $[z]=0$ in $H_n(U;R)$ and hence in $H_n(M;R)$. This uses the triple injection, not just vanishing of all point restrictions. [F1, step 1.2, step 4.1, step 1.3, step 2.2]

6.1 A connected nonempty zero-manifold is one point, so is compact and has $H_0=R$, consistent with step 4.1. The zero ring has the unique orientation and every displayed module is zero; a nonorientable case does not arise for it. Characteristic two makes both signs act as identity. The two signs in step 1.1 include all monodromy possibilities, without a hidden assumption of integral orientability. Every global construction used unique values or a finite subcover; the base point and its generator are individual witnesses, not a family selected by AC. All chain calculations use unnormalized simplices. [F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, step 2.2, step 5.1] ∎
