---
id: ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle
kind: example
title: "Self-intersection of the zero section in an oriented plane bundle"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-self-intersection-is-the-euler-number-of-the-normal-bundle, lem-normal-push-off-zeros-are-self-intersection-points, def-self-intersection-number-of-an-oriented-submanifold, cor-nowhere-zero-section-forces-the-euler-class-to-vanish, def-euclidean-spheres-and-closed-balls, thm-a-regular-level-set-is-an-embedded-submanifold, def-tangent-bundle-as-a-disjoint-union, def-smooth-section-local-section-and-support, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, def-axiom-of-choice, prop-the-zero-section-is-a-smooth-embedding, lem-normal-bundle-of-the-zero-locus-of-a-transverse-section, prop-tangent-space-of-a-regular-level-set-is-the-kernel]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
dependency_level: 5
---

## Example

Assume AC. Let $S^2\subseteq\mathbb R^3$ be the unit sphere with its induced orientation and let $E$ be a smooth oriented rank-2 real bundle over $S^2$; write $Z\subseteq E$ for the zero section, a compact closed oriented surface embedded in the boundaryless $4$-manifold $E$, oriented by base tangent first and fibre second. Then $Z\cdot Z=\langle e(E),[S^2]\rangle\in\mathbb Z$. Two cases are computed. (a) For the trivial bundle $E=S^2\times\mathbb R^2$ the constant section $x\mapsto(x,(1,0))$ is nowhere zero, so $Z$ pushes off itself disjointly and $Z\cdot Z=0$. (b) For the tangent bundle $E=TS^2$, the explicit field $X(p)=e_3-z\,p$ on $p=(x,y,z)\in S^2$ (the tangential projection of the constant field $e_3$, i.e. the gradient of the height function for the induced Euclidean metric) is a smooth section vanishing exactly at the two poles $\pm e_3$; in the projection charts $(x,y)\mapsto(x,y,\pm\sqrt{1-x^2-y^2})$ at the two poles its linearization is $-(x\partial_x+y\partial_y)+O(|(x,y)|^2)$ at $e_3$ and $+(x\partial_x+y\partial_y)+O(|(x,y)|^2)$ at $-e_3$, both with determinant $+1$ in dimension two, so both zeros are nondegenerate of index $+1$ and the signed zero count is $2$; hence $Z\cdot Z=2$. The trivial bundle realizes $0$ and the tangent bundle realizes $2$; no general clutching classification is asserted here.

## Facts & Assumptions

**Given:** AC, the unit sphere $S^2\subseteq\mathbb R^3$ with its induced orientation, an oriented rank-two real bundle $E\to S^2$, its zero section $Z$ (a closed oriented surface in the boundaryless oriented four-manifold $E$) and the two bundles of the statement.

[F1] For a closed oriented $A$ with $2\dim A=\dim M$ the self-intersection satisfies $A\cdot A=\langle e(\nu_A),[A]\rangle$ ([[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]]).

[F2] If an oriented bundle admits a nowhere-zero section then its Euler class vanishes, and the geometric consequences include $e(E)\cap[M]=0$ and, when rank equals dimension, $\langle e(E),[M]\rangle=0$ and vanishing integral self-intersections for nowhere-zero normal fields when the ambient manifold and embedded submanifold are integrally oriented and the normal orientation is their induced tangent-first orientation ([[cor-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

[F3] The local oriented intersection sign of the push-off equals the local zero index of the section, $\varepsilon=\operatorname{sign}\det\partial_\nu s_x$ ([[lem-normal-push-off-zeros-are-self-intersection-points]]).

[F4] $S^2$ is the unit sphere in $\mathbb R^3$, and it is a regular level set of a smooth function, hence an embedded submanifold with $T_pS^2=p^\perp$ ([[def-euclidean-spheres-and-closed-balls]], [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

[F5] The tangent bundle is the disjoint union of the tangent spaces and a smooth section assigns compatibly smooth vectors, so $X(p)=e_3-zp$ defines a smooth section of $TS^2$ ([[def-tangent-bundle-as-a-disjoint-union]], [[def-smooth-section-local-section-and-support]], [[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

## Verification

**Proof technique:** apply the self-intersection/Euler-number theorem and compute the signed zero count of an explicit section.

1.1 By [[prop-the-zero-section-is-a-smooth-embedding]] the zero section is embedded, and in bundle charts the splitting along it is $TE|_Z=TS^2\oplus E$, so its quotient normal bundle is $E$ with the specified fibre orientation, and $Z$ is compact, so [F1] gives $Z\cdot Z=\langle e(\nu_Z),[Z]\rangle=\langle e(E),[S^2]\rangle$. [F1, F5, given]

2.1 Case (a): the constant unit section $x\mapsto(x,(1,0))$ is smooth and nowhere zero, so by [F2] both the Euler number and the self-intersection vanish: $\langle e(E),[S^2]\rangle=0=Z\cdot Z$ for the trivial bundle. [F2, step 1.1]

3.1 Case (b): $S^2$ is the regular level set $|p|^2=1$ of a smooth function [F4] with $T_pS^2=p^\perp$, so $X(p)=e_3-zp$ satisfies $X(p)\cdot p=z-z|p|^2=0$ and is a smooth section of $TS^2$ by [F5]. It vanishes iff $e_3=zp$, i.e. iff $p=\pm e_3$. In the projection charts $(x,y)\mapsto(x,y,\pm\sqrt{1-x^2-y^2})$ near the poles the linearizations are $-(x\partial_x+y\partial_y)+O(|(x,y)|^2)$ at $e_3$ and $+(x\partial_x+y\partial_y)+O(|(x,y)|^2)$ at $-e_3$, whose Jacobians $-I$ and $+I$ both have determinant $+1$ in dimension two, and the chart-orientation sign cancels between source and target in the local index [F3]. Hence both zeros are nondegenerate of index $+1$ and the signed zero count is $2$; [F1] and [F3] identify it with $Z\cdot Z$ and with $\langle e(TS^2),[S^2]\rangle$. [F1, F3, F4, F5, step 1.1, algebra] ∎

