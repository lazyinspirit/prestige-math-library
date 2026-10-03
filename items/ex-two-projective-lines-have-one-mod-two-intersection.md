---
id: ex-two-projective-lines-have-one-mod-two-intersection
kind: example
title: "Two projective lines have one mod 2 intersection"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, def-mod-two-intersection-number, thm-mod-two-intersection-number-is-homotopy-invariant, ex-real-projective-space-from-affine-charts, ex-real-projective-space-cover-as-a-discrete-fiber-fibration, ex-real-projective-space-is-orientable-exactly-in-odd-dimension, ex-great-circles-as-round-sphere-geodesics, thm-a-regular-level-set-is-an-embedded-submanifold, ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed pp. 77–80 (mod 2 intersection theory requires no orientability, illustrated on the Möbius band and the torus)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§4, printed pp. 20–25 (the mod 2 count and parity in nonoriented settings)"
---

## Example

Model the real projective plane as $\mathbb{RP}^2=S^2/(x\sim-x)$ with its quotient smooth structure ([[ex-real-projective-space-from-affine-charts]], [[ex-real-projective-space-cover-as-a-discrete-fiber-fibration]]). Two distinct projective lines are the images of two distinct great circles of $S^2$ ([[ex-great-circles-as-round-sphere-geodesics]]); they are embedded circles meeting transversely in exactly one point of $\mathbb{RP}^2$, because two distinct great circles meet in exactly two antipodal points of $S^2$, which the quotient identifies. Since $\mathbb{RP}^2$ is nonorientable ([[ex-real-projective-space-is-orientable-exactly-in-odd-dimension]]), no oriented intersection number of the two lines is available, but the mod 2 intersection number is defined and equals $I_2=1$; hence, under $\mathrm{AC}_\omega$ for homotopy invariance, the lines cannot be separated by deformation of either or both inclusion maps. This is the paradigm case showing why the parity theory exists.

## Facts & Assumptions

**Given:** Two distinct great circles $C_1,C_2\subseteq S^2$ and the antipodal quotient $q:S^2\to\mathbb{RP}^2$.

[F1] $S^2=F^{-1}(1)$ for $F(x)=\langle x,x\rangle$ on $\mathbb R^3$ with its standard smooth structure is a regular level set ($dF_x(v)=2\langle x,v\rangle\neq0$ for $x\in S^2$), hence a smooth $2$-manifold with its standard structure, and $C_i$ is the image of a maximal round geodesic, an embedded circle ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]], [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[ex-great-circles-as-round-sphere-geodesics]]).

[F2] $\mathbb{RP}^2=S^2/(x\sim-x)$ has the quotient smooth structure, and $q$ is a two-sheeted covering. On an affine patch $x_i\ne0$, the ratios $x_j/x_i$ give its smooth coordinates; on each hemisphere $x_i>0$ or $x_i<0$ the inverse sends an affine coordinate vector to the corresponding normalized vector with the prescribed sign of $x_i$. Thus the local inverse is smooth and $q$ is a local diffeomorphism ([[ex-real-projective-space-from-affine-charts]], [[ex-real-projective-space-cover-as-a-discrete-fiber-fibration]]).

[F3] For $n\ge1$, $\mathbb{RP}^n$ is orientable exactly when $n$ is odd, so $\mathbb{RP}^2$ is nonorientable and admits no integral orientation ([[ex-real-projective-space-is-orientable-exactly-in-odd-dimension]]).

[F4] The mod 2 intersection number of transverse compact complementary-dimensional submanifolds is the cardinality of the intersection modulo two, requires no orientability, and under $\mathrm{AC}_\omega$ is invariant under homotopies of either or both inclusion maps, by the two-map diagonal formulation ([[def-mod-two-intersection-number]], [[def-transverse-complementary-dimensional-intersection-set]], [[thm-mod-two-intersection-number-is-homotopy-invariant]], [[def-countable-choice]]).

## Verification

1.1 Distinct great circles $C_1,C_2$ are planes through the origin meeting the sphere, and distinct planes through the origin in $\mathbb R^3$ meet in a line through the origin, which cuts $S^2$ in exactly two antipodal points; at such a point $p$ the tangent line $T_pC_i=p^\perp\cap P_i$ lies in $T_pS^2=p^\perp$ and determines the plane $P_i$ as $\operatorname{span}\{p,T_pC_i\}$, so the two tangent lines are distinct one-dimensional subspaces of the two-dimensional $T_pS^2$ and therefore span it, which is transversality. [F1, given, algebra]

2.1 Each great circle is antipodally invariant. Its antipodal quotient is a circle, and the induced map $C_i/(\pm1)\to\mathbb{RP}^2$ is injective. Since its source is compact and its target Hausdorff, it is a homeomorphism onto its image; in the local diffeomorphism charts of [F2] it is the embedded arc $C_i$, hence is a smooth embedding. Saturation of the two $C_i$ under the antipodal involution gives $q(C_1)\cap q(C_2)=q(C_1\cap C_2)$, a single point. The invertible differential of $q$ carries the two distinct tangent lines of 1.1 to distinct tangent lines in the quotient, preserving transversality. [F1, F2, step 1.1, algebra]

3.1 By [F3] the projective plane is nonorientable, so no oriented intersection number of the two lines is defined. By [F4] the mod 2 intersection number is defined and equals the parity of the intersection, namely $1$; under the stated $\mathrm{AC}_\omega$, every homotopic pair of transverse representatives of the two projective lines meets an odd number of times, so the lines can never be deformed to disjoint positions. [F3, F4, step 2.1] ∎
