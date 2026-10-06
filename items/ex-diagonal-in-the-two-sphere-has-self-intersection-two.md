---
id: ex-diagonal-in-the-two-sphere-has-self-intersection-two
kind: example
title: "The diagonal in the two-sphere has self-intersection two"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [cor-diagonal-self-intersection-is-the-euler-number-of-tm, def-euclidean-spheres-and-closed-balls, def-product-orientation, def-self-intersection-number-of-an-oriented-submanifold, def-smooth-section-local-section-and-support, def-tangent-bundle-as-a-disjoint-union, lem-normal-bundle-of-the-diagonal-is-canonically-tm, lem-normal-push-off-zeros-are-self-intersection-points, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, prop-the-diagonal-is-an-embedded-submanifold, thm-a-regular-level-set-is-an-embedded-submanifold, thm-canonical-tangent-and-cotangent-splittings-for-products, thm-self-intersection-is-the-euler-number-of-the-normal-bundle, def-axiom-of-choice, prop-tangent-space-of-a-regular-level-set-is-the-kernel]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
dependency_level: 5
---

## Example

Assume AC. Let $S^2\subseteq\mathbb R^3$ carry its induced orientation and give $S^2\times S^2$ the product orientation. Then the diagonal $\Delta\subseteq S^2\times S^2$ is a closed oriented embedded surface with $2\dim\Delta=\dim(S^2\times S^2)$ and $$\Delta\cdot\Delta=\langle e(TS^2),[S^2]\rangle=2.$$ The value $2$ is computed from the explicit tangent field $X(p)=e_3-z\,p$, whose zeros are the two poles with local index $+1$ each; it previews the Euler characteristic $\chi(S^2)=2$ of the later Euler/index pair (not used here).

## Facts & Assumptions

**Given:** AC, the unit sphere $S^2\subseteq\mathbb R^3$ with its induced orientation, the product $S^2\times S^2$ with the product orientation, its diagonal and the explicit field $X(p)=e_3-zp$.

[F1] The diagonal $\Delta\subseteq S^2\times S^2$ is a closed embedded surface of dimension $2$ with $2\cdot2=4=\dim(S^2\times S^2)$ ([[prop-the-diagonal-is-an-embedded-submanifold]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F2] The normal bundle of the diagonal is canonically $TM$, orientation-preservingly when $\Delta_M$ carries the orientation transported from $M$, with the tangent-first normal orientation ([[lem-normal-bundle-of-the-diagonal-is-canonically-tm]], [[def-product-orientation]], [[thm-canonical-tangent-and-cotangent-splittings-for-products]]).

[F3] The self-intersection is $\Delta\cdot\Delta=\langle e(\nu_\Delta),[\Delta]\rangle=\langle e(TM),[M]\rangle$ ([[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]]).

[F4] $S^2$ is the unit sphere, the regular level $|p|^2=1$, with tangent space $T_pS^2=\ker(v\mapsto2p\cdot v)=p^\perp$ ([[def-euclidean-spheres-and-closed-balls]], [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

[F5] The local sign of the push-off equals the local zero index of the section, so the signed zero count is the self-intersection number ([[lem-normal-push-off-zeros-are-self-intersection-points]]).

## Verification

**Proof technique:** identify the normal bundle and compute the two zero signs in pole charts.

1.1 $\Delta$ is closed embedded of dimension $2$ with $2\cdot2=4=\dim(S^2\times S^2)$ [F1], so [F3] gives $\Delta\cdot\Delta=\langle e(\nu_\Delta),[\Delta]\rangle$. By [F2] the normal identification is the canonical one and is orientation-preserving with the orientation of $\Delta$ transported from $S^2$, so $\Delta\cdot\Delta=\langle e(TS^2),[S^2]\rangle$. [F1, F2, F3, given]

2.1 In the projection charts of the two poles $(x,y)\mapsto(x,y,\pm\sqrt{1-x^2-y^2})$ the given field $X(p)=e_3-zp$, tangent because $(e_3-zp)\cdot p=z-z|p|^2=0$ by [F4], has exactly the two zeros $\pm e_3$, with local components $(-zx,-zy)$ and derivatives $-I_2$ at the north pole and $I_2$ at the south pole. Both determinants are $+1$, so each zero has index $+1$ and the signed zero count of $TS^2$ is $2$; [F5] and [F3] identify that count with $\langle e(TS^2),[S^2]\rangle$. Hence $\Delta\cdot\Delta=2$, which previews the Euler characteristic $\chi(S^2)=2$ of the later Euler/index pair (not used here). [F3, F4, F5, step 1.1, algebra] ∎

