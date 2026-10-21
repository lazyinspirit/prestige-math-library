---
id: lem-peripheral-isomorphisms-of-standard-cusped-hyperbolic-manifolds-give-quasi-isometries
kind: lemma
title: Group isomorphisms of standard cusped hyperbolic manifolds give equivariant quasi-isometries
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-rank-two-kleinian-subgroups-give-proper-embedded-horocusps
proof_strategy: direct
axiom_use: Full AC is retained for the finite covers, lifted locally finite families and matrix-group interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gopal Prasad, Strong Rigidity of Q-Rank 1 Lattices
      url: https://www.maths.gla.ac.uk/~mpowell/Prasad-on-Mostow-rigidity.pdf
      locator: Theorem C and its proof; the ordinary torus-cusp construction needed here is given directly, without the reductive cusp-base machinery
dependency_level: 1
---

## Statement

Assume AC. Let $M=\Gamma\backslash\mathbb H^3$ and $N=\Gamma'\backslash\mathbb H^3$ be connected orientable hyperbolic manifolds, with discrete torsion-free groups. Suppose each is a compact core together with finitely many disjoint standard torus cusp ends: an end is an embedded quotient $\{y>R_i\}/\Lambda_i$ by a rank-two translation lattice, and the complement of the union of these ends is compact. Zero ends are allowed, in which case the manifold is compact.

Every group isomorphism $\theta:\Gamma\to\Gamma'$ permutes the conjugacy classes of the peripheral cusp groups. There is a smooth $\theta$-equivariant quasi-isometry $F:\mathbb H^3\to\mathbb H^3$ which on every sufficiently deep lifted cusp is affine in its horizontal coordinates and preserves cusp depth after a constant height rescaling. It has a smooth equivariant quasi-inverse with inverse affine cusp maps. On quotient manifolds these maps are proper homotopy equivalences.

The standard cusp decomposition is a supplied hypothesis here; this lemma does not derive it merely from finite volume.

## Facts & Assumptions

**Given:** AC, the quotient manifolds, their supplied compact cores and standard cusp neighborhoods, and the group isomorphism.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] Every rank-two abelian subgroup of a discrete torsion-free Kleinian group lies in a unique maximal abelian rank-two parabolic stabilizer. That stabilizer has a properly embedded horocusp, constructed explicitly by the Shimizu matrix recurrence. [[lem-rank-two-kleinian-subgroups-give-proper-embedded-horocusps]]

## Proof

1.1 Each supplied cusp group $P_i$ is the full stabilizer of its ideal point. By [F1] the full stabilizer is a translation lattice $Q_i$ containing $P_i$. Every translation in $Q_i$ preserves the entire source horoball. If some were outside $P_i$, two points of that horoball distinct modulo $P_i$ would have the same image in $M$, contradicting the supplied cusp embedding. Thus $P_i=Q_i$, and [F1] makes it maximal abelian. Conversely, let $A$ be any maximal abelian rank-two subgroup. Its proper embedded horocusp from [F1] has a connected tail missing the given compact core: properness makes its inverse image of that core compact. That tail lies in one of the finitely many supplied cusp components. Its inclusion on fundamental groups therefore puts $A$, up to conjugacy, inside that component's $P_i$. Maximality gives equality. In the compact case such a proper horocusp is impossible, so no rank-two abelian subgroup occurs. An isomorphism preserves abelianness, rank two and maximality, proving the peripheral assertion in both directions. [A1, F1, given, algebra]

1.2 We construct a smooth equivariant map on a neighborhood of the lifted compact core, without assuming a homotopy realization theorem. Enlarge the core to include cusp depths $r\le2$. Cover this compact set by finitely many evenly covered coordinate neighborhoods $U_j$ and choose smooth nonnegative bumps $\psi_j$ compactly supported in them whose positive sets cover the enlarged core. Such bumps are obtained by the ordinary explicit Euclidean bump function in smaller chart balls and a finite subcover. Choose one lift $\widetilde U_j$ of each chart. On its translate $\gamma\widetilde U_j$ put $\phi_{\gamma j}(x)=\psi_j(\pi x)$, and extend it by zero. This is smooth, since the bump support stays inside the chart. The family is locally finite: for a fixed $j$ the lifted chart components are disjoint, and over the compact support a sufficiently small evenly covered base neighborhood meets only the corresponding local component near each point. There are only finitely many $j$. Their sum is positive on a neighborhood of the lifted enlarged core. [A1, given, construct]

2.1 For each matched cusp, choose upper half-space coordinates in source and target so that $\theta(P_i)$ is the corresponding target translation lattice, with any necessary conjugacy included in the choice of its lift. A group isomorphism of the two lattices extends uniquely to an invertible real-linear map $B_i:\mathbb C\to\mathbb C$: prescribe its values on a lattice basis. The map $C_i(z,y)=(B_i z,c_i y)$, $c_i=R_i'/R_i>0$, is equivariant and preserves depth $r=\log(y/R_i)$. Its differential and inverse have uniformly bounded hyperbolic operator norms, because horizontal tangent vectors are changed by $B_i/c_i$ and vertical logarithmic tangent vectors are unchanged. Propagate this map to every translate of the chosen horoball by $C_i(\gamma x)=\theta(\gamma)C_i(x)$. Equivariance under $P_i$ makes this independent of the representative of the coset. Disjointness of the lifted cusp interiors makes the resulting map well defined there. These maps for $\theta^{-1}$ can be chosen to be exact inverses on corresponding cusps. [A1, step 1.1, construct, algebra]

2.2 Use the hyperboloid model $\{v\in\mathbb R^{3,1}:\langle v,v\rangle=-1,v_0>0\}$ for the target. The usual upper half-space identification is $$ (z,y)\longmapsto \left(\frac{|z|^2+y^2+1}{2y},\frac{\operatorname{Re}z}{y},\frac{\operatorname{Im}z}{y},\frac{|z|^2+y^2-1}{2y}\right). $$ Its pullback metric is $(|dz|^2+dy^2)/y^2$ by differentiation. Hyperbolic isometries act by Lorentz-linear maps: the upper half-space translations, rotations, dilations and inversion give Lorentz maps in this formula by substitution, and generate the Möbius group by matrix fraction division. Fix target points $p_j$ and put $S(x)=\sum_{\gamma,j}\phi_{\gamma j}(x)\theta(\gamma)p_j$. This sum is locally finite and future timelike. Indeed, for future unit vectors $v,w$, $-\langle v,w\rangle\ge1$ by the distance formula, so for nonnegative weights $a_j$ with positive sum one has $-\langle\sum a_jv_j,\sum a_jv_j\rangle\ge(\sum a_j)^2>0$. Thus $F_0(x)=S(x)/\sqrt{-\langle S(x),S(x)\rangle}$ is smooth. Reindexing the sum gives $F_0(\gamma x)=\theta(\gamma)F_0(x)$. [step 1.2, given, construct, algebra]

3.1 On each cusp take one fixed smooth function $\chi(r)$ equal to zero for $r\le1/2$ and one for $r\ge1$. Where both $F_0$ and $C_i$ are defined, normalize their future-timelike linear combination $(1-\chi)F_0+\chi C_i$ as in step 2.2. Use $F_0$ below that overlap and $C_i$ above it. Constancy of the cutoff near its endpoints gives a smooth global map $F$, and all formulas are equivariant. On the compact quotient of the region outside the deep cusp tails, its derivative norm has a finite maximum by continuity. On the tails it is bounded by the finitely many affine constants in step 2.1. Integrating the derivative bound along hyperbolic segments proves that $F$ is globally Lipschitz. Repeating the construction for $\theta^{-1}$, with the inverse affine cusp maps, gives a globally Lipschitz map $G$. [step 2.1, step 1.2, step 2.2, construct, algebra]

4.1 The composites $GF$ and $FG$ are the identity on all sufficiently deep cusp tails. On the remaining compact quotient cores their displacement functions $d(GF(x),x)$ and $d(FG(y),y)$ are invariant under the respective deck groups and continuous, so have finite global bounds $D,D'$. If $L_G,L_F\ge1$ are Lipschitz constants, the triangle inequality gives $d(x,x')\le2D+L_Gd(Fx,Fx')$, and similarly in the other direction. Thus $F$ is a quasi-isometric embedding, and $d(FGy,y)\le D'$ proves coarse surjectivity. This proves the quasi-isometry assertion with explicit finite constants obtained from the constructed maps. On the quotients the maps are proper, since on each tail they preserve the depth coordinate and permute the finitely many cusp ends, and their remaining domains lie in compact cores. [step 2.1, step 3.1, algebra]

5.1 Unique hyperbolic geodesics give an equivariant homotopy from $GF$ to the identity and from $FG$ to the identity. Their tracks have length at most $D,D'$. On the quotients these homotopies are proper: the inverse image of a compact target set is contained in the closed $D$ or $D'$ neighborhood of that set in the proper complete hyperbolic quotient, crossed with $[0,1]$. Completeness follows by lifting and extending geodesics in $\mathbb H^3$, and properness is Hopf–Rinow as in [F1]'s proof. Hence the descended maps are proper homotopy equivalences. [F1, step 4.1, construct] ∎
