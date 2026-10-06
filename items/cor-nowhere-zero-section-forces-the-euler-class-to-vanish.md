---
id: cor-nowhere-zero-section-forces-the-euler-class-to-vanish
kind: corollary
title: "A nowhere-zero section forces the Euler data to vanish"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-oriented-clutching-classifies-oriented-bundles-over-spheres, lem-pi-three-so-three-generated-by-the-quaternion-double-cover, cor-homology-of-spheres, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, cor-short-exact-sequences-of-vector-bundles-split-over-the-base, cor-real-line-is-universal-cover-of-circle, thm-covering-space-lifting-criterion, thm-higher-dimensional-spheres-are-simply-connected, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, thm-cap-product-boundary-identity, prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish, prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual, thm-self-intersection-is-the-euler-number-of-the-normal-bundle, prop-mod-two-self-intersection-needs-no-orientation, def-self-intersection-number-of-an-oriented-submanifold, def-euler-class-by-zero-section-pullback-of-the-thom-class, thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
dependency_level: 4
---

## Statement

Assume AC. Let $E\to M$ be an $R$-oriented numerable real vector bundle of rank $r\ge1$ in the Thom scope over a closed $R$-oriented smooth $n$-manifold. If $E$ admits a nowhere-zero smooth section, then the class-level vanishing $e(E)=0$ in $H^r(M;R)$ holds by [[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]; on this page the following geometric consequences are added and proved. (i) For every smooth section $\sigma$ disjoint from the zero section the zero locus is empty, so $e(E)\cap[M]=0$ by bilinearity of the cap product. When $r=n$ this also gives $\langle e(E),[M]\rangle=0$; evaluation on $[M]$ is only asserted in that degree. (ii) If $A^a\subseteq M$ is compact boundaryless embedded with $2a=n$ and $\nu_A$ admits a nowhere-zero smooth section, then $A\cdot_2A=0$ without orientation assumptions on $A$ or $\nu_A$. If, in addition, $M$ and $A$ carry integral orientations and $\nu_A$ has their induced tangent-first orientation, then $A\cdot A=0$ as well. Geometrically the normal field pushes $A$ off itself, so the transverse count vanishes. The converse is false: vanishing of the Euler data does not in general produce a nowhere-zero section.

## Facts & Assumptions

**Given:** The $R$-oriented rank-$r\ge1$ bundle $E\to M$ over the closed $R$-oriented $n$-manifold in the Thom scope and a nowhere-zero smooth section. For part (ii), a compact boundaryless embedded $A$ of half the ambient dimension and a nowhere-zero smooth normal section; integral orientations of both $M$ and $A$ are supplied only for the integral conclusion.

[F1] If an oriented bundle in the Thom scope admits a nowhere-zero section, then its Euler class vanishes: $e(E)=0$ in $H^r(M;R)$, and no converse is asserted ([[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

[F2] Cap product is bilinear on cohomology and homology, so the zero cohomology class caps to zero ([[thm-cap-product-boundary-identity]]).

[F3] The self-intersection number is $A\cdot A=\langle e(\nu_A),[A]\rangle$ for a compact boundaryless integrally oriented $A$ in an integrally oriented boundaryless $M$, with $2\dim A=\dim M$ and the induced tangent-first normal orientation ([[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]]).

[F4] Over $\mathbb F_2$ the self-intersection is $A\cdot_2A=\langle w_a(\nu_A),[A]\rangle_2$ with no orientability hypothesis ([[prop-mod-two-self-intersection-needs-no-orientation]]).

[F5] The Euler class is the zero-section pullback of the absolute image of the normalized Thom class ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

## Proof

**Proof technique:** cite the class-level vanishing and derive the numerical consequences from the zero-locus and self-intersection evaluations.

1.1 Class level. The bundle and the nowhere-zero section meet precisely the positive-rank Thom hypotheses of [F1], so $e(E)=0$ in $H^r(M;R)$. [F1, given]

2.1 Numerical consequences. A section disjoint from the zero section is vacuously transverse to it with empty zero locus, so step 1.1 and [F2] give $e(E)\cap[M]=0$, and when $r=n$ the Kronecker evaluation of the zero class is $0$; part (i) follows. For part (ii), scale the nowhere-zero smooth normal field by a positive constant into the tube (possible by compactness of $A$). Its section $s$ has $Z(s)=\varnothing$, and the push-off $A_s$ is disjoint from $A$; By [[def-self-intersection-number-of-an-oriented-submanifold]] the disjoint transverse count is zero modulo two, so $A\cdot_2A=0$, in agreement with [F4]. Under the additional integral orientations of $M$ and $A$, the induced normal orientation meets [F3], and the same empty signed count gives $A\cdot A=\langle e(\nu_A),[A]\rangle=0$. The class-level assertion of step 1.1 uses the AT Euler construction [F5]. No converse is asserted: vanishing of the Euler data does not in general produce a nowhere-zero section, as the clutching witness below shows. [F2, F3, F4, F5, step 1.1]

3.1 For the failure of the converse, take the oriented rank-three bundle $E_\rho\to S^4$ clutched by quaternion conjugation $\rho:S^3\to SO(3)$; [[lem-pi-three-so-three-generated-by-the-quaternion-double-cover]] proves it is nontrivial. Its Euler class is zero because [[cor-homology-of-spheres]] and [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] give $H^3(S^4;\mathbb Z)=0$ (both the Hom and Ext inputs are zero). A nowhere-zero section would span a trivial line; a bundle metric and [[cor-short-exact-sequences-of-vector-bundles-split-over-the-base]] would give $E_\rho\cong\varepsilon^1\oplus F$ with $F$ oriented of rank two. By [[thm-oriented-clutching-classifies-oriented-bundles-over-spheres]], $F$ is clutched by a map $S^3\to SO(2)$. Sending a rotation matrix to its first column identifies $SO(2)$ with the circle. Since $S^3$ is simply connected by [[thm-higher-dimensional-spheres-are-simply-connected]], [[cor-real-line-is-universal-cover-of-circle]] and [[thm-covering-space-lifting-criterion]] lift that map to $\mathbb R$, where straight-line contraction makes it nullhomotopic. Thus $F$ and then $E_\rho$ would be trivial, a contradiction. This retains the general failure of the converse without making an A-page theorem depend on a B-page example. [given, construct, algebra] ∎

