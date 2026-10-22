---
id: thm-finite-convex-neighborhood-volume-implies-conical-bounded-parabolic-limit-set
kind: theorem
title: Finite convex-neighborhood volume gives the conical and bounded-parabolic criterion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Brian H. Bowditch, Geometrical finiteness for hyperbolic groups
      url: https://bhbowditch.com/papers/bhb-gf-hyperbolic.pdf
      locator: Entire Chapter 4, PDF pp. 34–47, and Sections 3.1–3.4, PDF pp. 18–24, read; the GF5-to-GF4 packing and GF4-to-GF2 recurrence are supplied locally below in the torsion-free three-dimensional case
---

## Statement

Assume AC. Let $\Gamma\le\mathrm{PSL}_2(\mathbb C)$ be a discrete torsion-free nonelementary group with limit set $\Lambda$ and closed hyperbolic convex hull $C=C(\Lambda)$. Suppose that for some $\epsilon>0$ the hyperbolic volume of $N_\epsilon(C)/\Gamma$ is finite. Then every $p\in\Lambda$ is conical or bounded parabolic: conical means that an orbit sequence tending to $p$ stays at bounded distance from a geodesic ray to $p$, and bounded parabolic means that $p$ is a parabolic fixed point and $(\Lambda\setminus\{p\})/\operatorname{Stab}_\Gamma(p)$ is compact.

More precisely, for every sufficiently small positive thin threshold $\eta$, the intersection of the convex quotient $C/\Gamma$ with the closed $\eta$-thick part is compact. Every parabolic fixed point is bounded, in both ranks one and two. No finite generation, topological-core theorem, finite total volume of $\mathbb H^3/\Gamma$, connected conformal boundary or finite-sided polyhedron is assumed.

## Facts & Assumptions

**Given:** AC, the group and convex set, and the finite volume of the specified positive-radius neighborhood.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] There is a universal $\eta_*>0$ for arbitrary torsion-free discrete groups. At $0<\eta<\eta_*$ the thin components are precisely invariant horoballs with full translation stabilizers of rank one or two, or finite-radius cyclic loxodromic tubes with compact closed stabilizer quotients. The component closures are uniformly separated; the quotient manifold is proper and complete, and its thick part has injectivity radius at least $\eta/2$. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]]

[F2] The model has the upper half-space metric $Y^{-2}(|dz|^2+dY^2)$, volume density $Y^{-3}$, distance formula $\cosh d((z,Y),(w,V))=1+(|z-w|^2+(Y-V)^2)/(2YV)$ and the usual ball and geodesic models. Its Möbius isometries and Hermitian formulas are supplied locally. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]], [[lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary]]

## Proof

1.1 Put $M=\mathbb H^3/\Gamma$ and choose any $0<\eta<\eta_*$. Let $S$ be the intersection of $C/\Gamma$ with the closed thick part from [F1]. This is closed in the proper space $M$: the convex quotient is closed because its full preimage is the closed invariant set $C$, and the injectivity-radius function is continuous by [F1]. Fix $0<r<\min(\eta/4,\epsilon/2)$. If $S$ were not compact, it would be unbounded by properness; successive avoidance of finitely many compact balls would give infinitely many points of $S$ at pairwise distance greater than $2r$. The corresponding radius-$r$ quotient balls are disjoint and isometric to full model radius-$r$ balls, because each center has injectivity radius at least $\eta/2$. They lie in $N_\epsilon(C)/\Gamma$, since their centers lie on $C/\Gamma$. They all have the same positive volume, contradicting the finite-volume hypothesis. Thus $S$ is compact, without asserting compactness of the entire thick part of $M$. [A1, F1, F2, given, construct, algebra]

1.2 Every rank-two parabolic point is bounded: normalize it to infinity and write its stabilizer as the full rank-two translation lattice $A$ from [F1]. The closed $A$-invariant subset $\Lambda\setminus\{\infty\}$ of $\mathbb C$ has compact quotient. Indeed every orbit has a representative in a closed fundamental parallelogram, and the intersection of that compact parallelogram with the closed subset is compact and projects onto the quotient. For a rank-one stabilizer normalize it as $A=\langle z\mapsto z+\ell\rangle$, $\ell>0$. If the imaginary coordinates on $\Lambda\setminus\{\infty\}$ are bounded, the same argument uses a bounded closed rectangle of real width $\ell$ and proves bounded parabolicity. It remains to exclude unbounded imaginary coordinates from the finite-volume hypothesis. [F1, F2, given, construct, algebra]

2.1 Suppose then that this imaginary coordinate is unbounded. The thin component for $A$ is a precisely invariant horoball $H=\{Y>T\}$ by [F1]. Choose a fixed height $Y_0=2T$ and a radius $0<\rho<\min(\epsilon,\log2,\operatorname{arsinh}(\ell/(2Y_0)))$. For every $z\in\Lambda\setminus\{\infty\}$ the vertical geodesic joining it to infinity lies in $C$, since all the half-spaces defining $C$ contain the geodesic joining those two ideal endpoints. Thus $(z,Y_0)\in C$. Choose infinitely many such points $z_j$ with imaginary parts pairwise differing by more than $2Y_0\sinh\rho$. This is possible from unboundedness by selecting a subsequence tending to positive or negative infinity with the indicated gaps. Their centers $x_j=(z_j,Y_0)$ have pairwise distance greater than $2\rho$ even after any stabilizer translation: the distance formula gives $d(x_j,T^k x_l)=2\operatorname{arsinh}(|z_j-z_l-k\ell|/(2Y_0))>2\rho$. Every model radius-$\rho$ ball about $x_j$ lies within $H$, because $|\log(Y/Y_0)|<\rho<\log2$. It embeds in $H/A$, because the least displacement of a nonidentity stabilizer element at its center is $2\operatorname{arsinh}(\ell/(2Y_0))>2\rho$. These balls project disjointly into $M$: precise invariance of $H$ excludes identifications outside $A$, and the preceding separation excludes identifications inside $A$. All lie in $N_\epsilon(C)/\Gamma$ and have the same positive model volume. This contradicts finiteness. Hence the imaginary coordinates are bounded, and step 1.2 shows every rank-one parabolic point is bounded as well. [A1, F1, F2, step 1.2, given, construct, algebra]

2.2 Fix $p\in\Lambda$ and a geodesic ray $\beta\subset C$ tending to $p$. Such a ray exists: choose another point of $\Lambda$, and take a half of their complete geodesic, which belongs to every half-space defining $C$. If its projection meets the compact set $S$ from step 1.1 at unbounded ray times, then $p$ is conical. Indeed finitely many compact quotient-sheet lifts of a compact neighborhood of $S$ give a compact model set $L$ whose translates contain the lifted intersection points. If $\beta(t_j)\in\gamma_j L$, fix $o\in\mathbb H^3$; then $d(\beta(t_j),\gamma_j o)\le\max_{x\in L}d(x,o)$. As $t_j\to\infty$, the orbit points tend to $p$, and infinitely many are distinct by properness. This is the required conical orbit sequence. The same argument applies to any ray whose projection returns to any compact subset of $M$. [F1, F2, step 1.1, given, construct, algebra]

3.1 Otherwise the ray has a tail outside $S$. Since the whole ray lies in $C$, that tail lies in the open thin part. Its lift is contained in a single thin component: it is connected and the thin components are disjoint open components, with the uniform separation supplied by [F1]. If that component is a loxodromic tube, its projection lies in the compact closed tube quotient, so step 2.2 again makes $p$ conical. If it is a horoball, its only ideal accumulation point is its base point: after normalizing it to $Y>T$, a geodesic ray tending to a finite boundary point has height tending to zero, whereas rays to infinity are vertical. Thus $p$ is its parabolic fixed point and is bounded by steps 1.2 and 2.1. These cases exhaust all limit points by [F1]. The only global packing used finite volume of the convex neighborhood, and the construction retained both parabolic ranks throughout. This proves all conclusions. [F1, F2, step 1.1, step 1.2, step 2.1, step 2.2, given, algebra] ∎

## Actual source reading and scope

The complete actual Bowditch Chapter 4 and Sections 3.1–3.4 were read, including both the packing implication GF5-to-GF4 and the subsequent ray argument GF4-to-GF2. The entire new arbitrary-quotient local thin classifier was developed and read before being used. Its Statement has no finite-volume hypothesis, so no strengthening of an older finite-total-volume cusp theorem is hidden here. Both model supplier proofs were read in full. The argument does not use a topological-core theorem or a geometric-finiteness equivalence as an external premise.
