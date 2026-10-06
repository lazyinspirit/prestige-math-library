---
id: ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus
kind: example
title: "Coordinate circles give the alternating intersection matrix of a torus"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-geometric-intersection-equals-the-poincare-dual-cup-pairing, def-geometric-intersection-pairing-on-a-closed-oriented-manifold, def-self-intersection-number-of-an-oriented-submanifold, thm-self-intersection-is-the-euler-number-of-the-normal-bundle, def-two-dimensional-torus, def-circle-as-real-line-mod-integers, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-product-orientation, thm-a-regular-level-set-is-an-embedded-submanifold, thm-canonical-tangent-and-cotangent-splittings-for-products, def-cap-duality-map-for-an-oriented-manifold, thm-intersection-number-under-factor-interchange, cor-nowhere-zero-section-forces-the-euler-class-to-vanish, def-axiom-of-choice, def-local-oriented-intersection-sign]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
dependency_level: 5
---

## Example

Assume AC. Let $T^2=Q\times Q$ with $Q=\mathbb R/\mathbb Z$ carry the product smooth structure and orientation, and let $A=Q\times\{[0]\}$, $B=\{[0]\}\times Q$ be the coordinate circles. Then $A,B$ are closed oriented embedded circles and the geometric pairing of [[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]] takes the values $$\langle A,A\rangle=0,\quad \langle B,B\rangle=0,\quad \langle A,B\rangle=1,\quad \langle B,A\rangle=-1,$$ so the pairing $\langle x,y\rangle=\langle\mathrm{PD}[x]\smile\mathrm{PD}[y],[T^2]\rangle$ has, on the classes $[A],[B]$, the alternating matrix $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ of determinant $1$; in particular it is alternating on these classes and the factor order matters. The self-intersections vanish because each coordinate circle projects to a point in the other factor, so it can be pushed off itself by translating in the other factor along a nowhere-zero normal field.

## Facts & Assumptions

**Given:** AC, the torus $T^2=Q\times Q$ with $Q=\mathbb R/\mathbb Z$, its product smooth structure and orientation, and the coordinate circles $A=Q\times\{[0]\}$, $B=\{[0]\}\times Q$.

[F1] $Q=\mathbb R/\mathbb Z$ is the quotient circle; the interval charts constructed in step 1.1 give its smooth structure and increasing orientation. Its product then has the product smooth structure and orientation ([[def-two-dimensional-torus]], [[def-circle-as-real-line-mod-integers]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-product-orientation]]).

[F2] A regular level set of a smooth function is an embedded submanifold, and the coordinate circles are regular level sets of the coordinate projections ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[thm-canonical-tangent-and-cotangent-splittings-for-products]]).

[F3] The geometric pairing is $\langle A,B\rangle_M=I(A,B)=I(i_A,B)$ evaluated on transverse representatives, first factor first, and swapping the factors gives $I(B,A)=(-1)^{ab}I(A,B)$ ([[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]], [[thm-intersection-number-under-factor-interchange]]).

[F4] The self-intersection is $A\cdot A=\langle e(\nu_A),[A]\rangle$, and a nowhere-zero normal field forces it to vanish ([[def-self-intersection-number-of-an-oriented-submanifold]], [[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]]).

[F5] The geometric pairing equals the Poincare-dual cup pairing, $I(A,B)=\langle \mathrm{PD}[A]\smile\mathrm{PD}[B],[M]\rangle$, with the cap-duality map $D_M(a)=a\cap[M]$ ([[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]], [[def-cap-duality-map-for-an-oriented-manifold]]).

## Verification

**Proof technique:** compute one transverse signed intersection and use the nowhere-zero normal fields for the self-intersections; the cup-pairing identification is the cited theorem.

1.1 Give $Q$ quotient charts by intervals of length less than one: the quotient projection is injective on each interval and open, since the saturation of an open interval is the union of its integer translates. Its restriction is therefore a homeomorphism onto an open set of $Q$. Chart changes on overlap components are integer translations, hence smooth and increasing. The quotient is Hausdorff: distinct classes have lifts whose difference is not an integer, and sufficiently small intervals about them have disjoint integer saturations. Images of rational-endpoint intervals give a countable base because the quotient projection is open. These charts cover $Q$, define the smooth structure and orientation, and identify its tangent frame with $\partial_x$. The image of $[0,1]$ is all of $Q$, so it is compact and boundaryless. In the product charts, $A$ and $B$ are embedded circles cut out by the coordinate projections [F1], [F2], and they meet transversely in the single point $([0],[0])$ with $T_{([0],[0])}A=\mathbb R\partial_x$, $T_{([0],[0])}B=\mathbb R\partial_y$ and $(\partial_x,\partial_y)$ the positive product frame. Hence $\langle A,B\rangle=1$ and, by [F3] with $ab=1$, $\langle B,A\rangle=-1$. [F1, F2, F3, algebra]

1.2 For the self-intersections: the constant field $\partial_y$ restricted to $A$ is a nowhere-zero section of the normal bundle of $A$ (the normal bundle is identified with the $y$-factor along $A$), and likewise $\partial_x$ for $B$; by [F4], together with [[cor-nowhere-zero-section-forces-the-euler-class-to-vanish]], the corresponding push-offs are disjoint, so $\langle A,A\rangle=0$ and $\langle B,B\rangle=0$. [F4, F1, algebra]

2.1 By [F5] the same numbers are $\langle\mathrm{PD}[x]\smile\mathrm{PD}[y],[T^2]\rangle$ evaluated on the two classes, giving the displayed matrix: the factor order contributes the minus sign in degree one, and the determinant of the matrix on the classes displayed is $1$. For $x=m[A]+n[B]$ and $y=p[A]+q[B]$, bilinearity gives $\langle x,y\rangle=mq-np$, which vanishes when $x=y$. This is the usual alternating (symplectic) block; its displayed signs specify the convention completely. No nondegeneracy claim for the whole pairing on $H_1(T^2;\mathbb Z)$ is made here. [F5, step 1.1, step 1.2] ∎

