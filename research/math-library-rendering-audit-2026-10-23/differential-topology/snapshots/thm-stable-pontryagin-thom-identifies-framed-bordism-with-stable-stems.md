---
id: thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems
kind: theorem
title: "The stable Pontryagin-Thom theorem identifies framed bordism with stable stems"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps:
  - thm-logarithm-derivative-and-integral
  - thm-derivative-of-exponential
  - def-natural-logarithm
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - def-the-standard-smooth-step-function
  - lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map
  - thm-pontryagin-thom-correspondence-in-fixed-codimension
  - lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map
  - def-stabilized-framed-cobordism-colimit
  - def-stable-stem-of-the-sphere
  - prop-the-sphere-prespectrum-homotopy-groups-are-the-stable-stems
  - lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres
  - thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one
  - lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes
  - thm-disjoint-union-makes-bordism-classes-abelian-groups
  - lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps
  - lem-regular-value-choice-does-not-change-the-framed-cobordism-class
  - lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages
  - lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold
  - def-framed-regular-preimage-of-a-map-to-a-sphere
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - def-framed-cobordism-of-embedded-submanifolds
  - lem-framed-cobordism-is-an-equivalence-relation
  - prop-cubical-and-spherical-models-of-higher-homotopy-agree
  - def-higher-homotopy-group-by-based-cubes
  - def-wedge-of-pointed-spaces
  - prop-transverse-preimage-carries-a-pulled-back-normal-structure
  - prop-transversality-to-a-point-is-the-regular-value-condition
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Theorem 6.17: $\\Omega^{\\mathrm{fr}}_m=\\varinjlim_k\\pi_{m+k}(S^k)=\\pi^S_m$, electronic pp.114-115"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Corollary 5.22 and Proposition 5.21, printed p.41; the group law (4.42)-(4.43), printed p.36"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Sections 7-8, including the union/pinch remark, printed pp.42-51"
---

## Statement

Assume $\mathrm{AC}_\omega$. For every $d\ge0$, the levelwise Pontryagin–Thom bijections intertwine equatorial stabilization and suspension and induce an isomorphism
$$\Omega_d^{\mathrm{fr}}\cong\pi_d^s.$$
The group operation on the left is disjoint union after placing the framed representatives in separate affine charts; this operation is independent of representatives and of orientation-preserving parameterizations in those charts. The right-hand operation is addition of stable homotopy classes.

## Facts & Assumptions

**Given:** The colimit set $\Omega_d^{\mathrm{fr}}$ of [[def-stabilized-framed-cobordism-colimit]] and the stable stem $\pi_d^s$.

[F1] The levelwise bijections $\Phi_k:\mathrm{Cob}_d(k)\to\pi_{d+k}(S^k)$ are [[thm-pontryagin-thom-correspondence-in-fixed-codimension]]; they satisfy $\Phi_{k+1}\sigma=E\Phi_k$ by [[lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map]]. The right-hand colimit is [[def-stable-stem-of-the-sphere]], also [[prop-the-sphere-prespectrum-homotopy-groups-are-the-stable-stems]].

[F2] Cubical concatenation is the group operation and corresponds to the oriented spherical pinch sum ([[def-higher-homotopy-group-by-based-cubes]], [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]], [[def-wedge-of-pointed-spaces]]). For $n\ge2$ the group is abelian ([[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]); for $n=k=1$ degree identifies it with $\mathbb Z$ ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]). The exponential is smooth with derivative itself ([[thm-derivative-of-exponential]]), and its inverse logarithm ([[def-natural-logarithm]]) has derivative $1/x$ on the positive reals ([[thm-logarithm-derivative-and-integral]]); differentiating $1/x$ repeatedly makes the logit coordinates and the packing paths below smooth.

[F3] A normalized collapse is smooth and its centre fibre has its original framing ([[def-pontryagin-thom-map-of-a-framed-submanifold]], [[lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold]]). A smooth map with a regular framed fibre is homotopic to that fibre's collapse ([[lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map]]).

[F4] A compact smooth track of framed embeddings, constant near its time endpoints, gives a framed cobordism when its normal quotient is framed with those end restrictions ([[def-framed-cobordism-of-embedded-submanifolds]]). Framed cobordism preserves the collapse class ([[lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps]]). Endpoint flattening uses [[def-the-standard-smooth-step-function]].

## Proof

1.1 The commuting levelwise bijections [F1] induce a bijection of the colimit sets: representatives equal after finitely many stabilizations have equal images, and conversely equality of images at a later level gives equality there by injectivity of $\Phi_k$. Every class on the right comes from a finite level and has a preimage there. Hence there is a bijection $\Phi:\Omega_d^{\mathrm{fr}}\to\pi_d^s$. [F1, given]

1.2 Put $n=d+k$. Choose representatives avoiding the sphere basepoint, by rotating a point outside each positive-codimension submanifold to that basepoint and transporting its framing along an endpoint-flat rotation track. Such tracks are framed cobordisms by [F4]. Choose small tubes avoiding the basepoint; their normalized collapses $f_i:S^n\to S^k$ are based and constant near it. In orientation-preserving stereographic coordinates $S^n\setminus\{*\}=\mathbb R^n$, fix the cube-to-sphere quotient homeomorphism whose interior coordinate formula is $x_j=\log(s_j/(1-s_j))$. It extends continuously to the quotient since approach to any cube face makes $|x|\to\infty$. It is smooth on the interior; no smoothness of an arbitrary quotient homeomorphism is assumed. [F2, F3, F4, construct]

2.1 Let $p(x)=e^x/(1+e^x)$, and define embeddings $e_0,e_1:\mathbb R^n\to\mathbb R^n$ by replacing the first coordinate with $\log(p/(2-p))$ and $\log((1+p)/(1-p))$, respectively, leaving the other coordinates unchanged. These are orientation-preserving diffeomorphisms onto the negative and positive first-coordinate half-spaces. They are exactly the inverse branches of the cubical pinch in the coordinates of step 1.2. Thus the map $G$ equal to $f_i\circ e_i^{-1}$ in the respective half-space and to the basepoint on the separating sphere represents $[f_0]+[f_1]$. The nonconstant support of each $f_i$ is compact in $\mathbb R^n$; its image under $e_i$ is compact and stays away from the separating sphere. Therefore $G$ is constant near that sphere and the sphere basepoint, and is smooth everywhere. Its centre fibre is the disjoint union $e_0(N_0)\sqcup e_1(N_1)$, with transported framings $\varphi_i\circ\overline{de_i}^{-1}$. [F2, F3, step 1.2, construct, algebra]

3.1 Each packing preserves the individual framed class. An explicit path from the identity to $e_i$ replaces $p(x_1)$ by $(1-t/2)p(x_1)$ for $i=0$ or $(1-t/2)p(x_1)+t/2$ for $i=1$, then applies the logit coordinate. Its derivative is positive for all $t$, so it is a smooth path $E_t^i$ of embeddings on $\mathbb R^n$. Flatten time at its endpoints and track compact $N_i$. At $(E_t^i(x),t)$ the normal quotient is identified with $\nu(N_i)_x$ by $$[(w,a)]\longmapsto\bigl[(dE_t^i)_x^{-1}(w-a\,\partial_tE_t^i(x))\bigr].$$ Indeed the track tangent vectors are $(dE_t^i(v)+a\partial_tE_t^i,a)$ for $v\in T_xN_i$, so this formula is well defined and is an isomorphism. Composing with $\varphi_i$ gives a smooth framing with the original framing at the first product end and the transported framing at the second. Thus [F4] preserves each individual class. We do not take the union of these two tracks, which could intersect. [F4, step 2.1, construct, algebra]

4.1 By [F3], the collapse of the packed union in step 2.1 has class $[G]=\Phi_k(x)+\Phi_k(y)$. Hence its framed class is exactly $\Phi_k^{-1}(\Phi_k(x)+\Phi_k(y))$, by [F1]. This proves the geometric interpretation of the proposed operation, its independence of the representatives used, and its independence of packing choices that preserve their transported individual classes in the two charts. Changing the orientation-preserving parameterization of either half-space induces a based degree-$+1$ self-map on its one-point compactification, hence a map homotopic to the identity by the degree classification in [F2]. Precomposition therefore leaves the two summand classes, and the resulting sum, unchanged. Compatibility with stabilization follows from $\Phi_{k+1}\sigma=E\Phi_k$ and additivity of $E$. Thus the operation descends to the colimit; any two elements may be compared at $k\ge2$, where the right-hand groups are abelian by [F2]. [F1, F2, F3, step 2.1, step 3.1]

5.1 The colimit bijection of step 1.1 is additive for this disjoint-union law and sends the empty manifold to zero. Transporting inverses from $\pi_d^s$ supplies an inverse for every framed class; associativity, commutativity and identity follow from the same bijection. It is therefore an isomorphism of abelian groups. The proof establishes the well-definedness required by [[def-stabilized-framed-cobordism-colimit]] and uses only the inherited countable-choice hypothesis. [F1, F2, step 1.1, step 4.1] ∎
