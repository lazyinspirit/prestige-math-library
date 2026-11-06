---
id: ex-cmp-quintic-calabi-yau-data
kind: example
title: "The smooth quintic threefold as a compactification geometry"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 3
axiom_strength: "Full AC, inherited from the imported Chern, zero-locus, and Euler suppliers."
deps:
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - def-axiom-of-choice
  - def-cmp-calabi-yau-threefold-compactification-data
  - def-real-and-complex-topological-vector-bundle
  - lem-complex-orientation-of-underlying-real-bundles
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - def-chern-classes-from-the-projective-bundle-relation
  - def-complex-projective-bundle-and-tautological-complex-line
  - thm-integral-complex-projective-bundle-theorem
  - cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic
  - prop-first-chern-class-of-tensor-dual-and-conjugate-lines
  - prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - thm-geometric-intersection-equals-the-poincare-dual-cup-pairing
  - thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
  - lem-cmp-smooth-quintic-tangent-chern-classes
dependency_roles:
  cor-euclidean-closed-balls-and-spheres-are-compact: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  def-real-and-complex-topological-vector-bundle: mathematical-premise
  lem-complex-orientation-of-underlying-real-bundles: mathematical-premise
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
  thm-homotopic-maps-induce-equal-maps-in-singular-cohomology: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  def-complex-projective-bundle-and-tautological-complex-line: mathematical-premise
  thm-integral-complex-projective-bundle-theorem: mathematical-premise
  cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic: mathematical-premise
  prop-first-chern-class-of-tensor-dual-and-conjugate-lines: mathematical-premise
  prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual: mathematical-premise
  thm-naturality-orientation-sign-and-whitney-product-for-euler-classes: mathematical-premise
  thm-geometric-intersection-equals-the-poincare-dual-cup-pairing: mathematical-premise
  thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle: mathematical-premise
  lem-cmp-smooth-quintic-tangent-chern-classes: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "A characteristic-class calculation for a smooth connected quintic compactification geometry. It makes no claim about exact SU(3) holonomy, Hodge numbers, a string spectrum, or an observed physical system."
empirical_premises: []
sources:
  references:
    - title: "J. W. Milnor and J. D. Stasheff, Characteristic Classes, Annals of Mathematics Studies 76, Princeton University Press (1974)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "§§11.5, 14.2, and 14.6; Euler characteristic, Chern classes, and projective tangent bundle."
    - title: "Piotr Achinger, Algebraic Geometry lecture notes, Spring 2026"
      url: "https://achinger.impan.pl/ag2026/notes-apr21.pdf"
      locator: "§17.2, Euler sequence and conormal sequence; §19.4, intersection numbers and transverse intersections."
---

## Example

Assume AC. Let $X\subset\mathbb P^4_{\mathbb C}$ be a smooth connected degree-five hypersurface with its complex orientation, and put $H=c_1(\mathcal O_{\mathbb P^4}(1))|_X$. The restricted Fubini–Study form makes $X$ Kähler, and the normal/Euler sequence gives $K_X\cong\mathcal O_X$. With the degree normalization $\int_XH^3=5$, one has
$$c(TX)=1+10H^2-40H^3,\qquad \chi(X)=\int_Xc_3(TX)=-200.$$
This supplies characteristic data for the smooth quintic geometry. It makes no claim about its Hodge numbers or exact $SU(3)$ holonomy.

## Facts & Assumptions

**Given:** AC; a smooth connected degree-five hypersurface $X=V(f)\subset\mathbb P^4_{\mathbb C}$; its complex orientation; and $H=c_1(\mathcal O_{\mathbb P^4}(1))|_X$.

[F1] [[def-cmp-calabi-yau-threefold-compactification-data]] uses the broad convention: a compactification datum needs a smooth connected compact Kähler threefold with a holomorphic trivialization of $K_X$; broad CY status does not imply exact $SU(3)$ holonomy or Hodge-number values.

[F2] [[lem-cmp-smooth-quintic-tangent-chern-classes]] proves the Euler and normal exact sequences give $K_X\cong\mathcal O_X$ and $c(TX)=1+10H^2-40H^3$ conditional on $\int_XH^3=5$.

[F3] [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]] gives additivity of $c_1$ under tensor products and identifies $c_1$ of a complex line with the Euler class of its underlying oriented real plane.

[F4] [[prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual]] identifies the Euler class cap product with the oriented zero locus of a transverse section; for an oriented rank-two bundle over an eight-manifold its sign is $(-1)^{2\cdot6}=+1$.

[F5] [[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]] identifies transverse geometric intersection counts with cup-product evaluations on the fundamental class.

[F6] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]] proves equality of the top Chern class and Euler class for a numerable complex bundle over a path-connected CW base. The passage to the smooth compact base $X$ is justified in step 3.2.

[F7] [[cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic]] gives $\langle e(TX_{\mathbb R}),[X]\rangle=\chi(X)$ for a closed oriented smooth manifold.

[F8] [[def-axiom-of-choice]] is the full choice-function axiom assumed by the Chern, Euler-class, and Poincaré-duality suppliers used here.

[F9] [[cor-euclidean-closed-balls-and-spheres-are-compact]] proves compactness of the Euclidean unit sphere $S^9\subset\mathbb R^{10}=\mathbb C^5$ by taking its dimension parameter to be $10$, center $0$ and radius $1$.

[F10] [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]] states that the compact smooth manifold $X$ is paracompact Hausdorff and CGWH, has CW homotopy type, and its smooth tangent bundle is numerable.

[F11] [[def-real-and-complex-topological-vector-bundle]] defines a numeration as a linear trivializing cover with a locally finite subordinate partition of unity. The pullback of a numeration along a continuous map remains locally finite and subordinate.

[F12] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] implies that a homotopy equivalence induces an isomorphism on integral cohomology.

[F13] The quotient construction of projective bundles commutes with pullback, identifying $P(f^*E)$ with the pullback of $P(E)$ and carrying the tautological line with it ([[def-complex-projective-bundle-and-tautological-complex-line]]).

[F14] [[lem-complex-orientation-of-underlying-real-bundles]] states that complex orientation is preserved under pullback, and [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]] gives naturality of Euler classes under orientation-preserving pullback.

[F15] For numerable complex bundles over paracompact Hausdorff CGWH bases of CW homotopy type, [[thm-integral-complex-projective-bundle-theorem]] gives the unique projective-bundle relation and [[def-chern-classes-from-the-projective-bundle-relation]] defines Chern classes as its coefficients.

[A1] The defining homogeneous quintic $f$ is viewed as a section of $\mathcal O_{\mathbb P^4}(5)$; smoothness makes this section transverse to the zero section.

## Proof

**Proof technique:** establish the degree normalization by transverse intersections, then apply Chern and Euler-class formulas.

**Given:** A smooth connected degree-five hypersurface in $\mathbb P^4$, the complex orientation, the full AC, and the named Chern/Euler/intersection suppliers.

1.1 A projective hyperplane is the transverse zero locus of a section of $\mathcal O(1)$, so [F3] and [F4] identify its Poincaré dual with $H_{\mathbb P^4}=c_1(\mathcal O(1))$. Take the four coordinate hyperplanes $z_1=0,z_2=0,z_3=0,z_4=0$ in homogeneous coordinates $[z_0:z_1:z_2:z_3:z_4]$. Their common intersection is the single point $[1:0:0:0:0]$; on the chart $z_0\ne0$, their local equations are the independent complex coordinates $z_i/z_0$, $1\le i\le4$, so the intersection is transverse and has positive sign for the complex orientations. Repeated application of [F5] gives $\langle H_{\mathbb P^4}^4,[\mathbb P^4]\rangle=1$. [F3, F4, F5, F8, given, algebra]

1.2 Choose a homotopy equivalence $r:K\to X$ from a path-connected CW complex, available by [F10]. The tangent bundle $TX$ is numerable by [F10], and $r^*TX$ is numerable because its numerating cover and subordinate partition pull back as in [F11]. By [F13], the projective-bundle quotient identifies $P(r^*TX)$ with $K\times_XP(TX)$ and pulls back the tautological line; Euler naturality [F14] pulls back its class. Pulling back the unique projective-bundle relation for $TX$ from [F15] therefore gives a monic relation for $r^*TX$ with coefficients $r^*c_i(TX)$; uniqueness in [F15] yields $r^*c_3(TX)=c_3(r^*TX)$. The complex orientation pulls back by [F14], so the top-Chern identity [F6] on $K$ gives $r^*c_3(TX)=r^*e(TX_{\mathbb R})$. By [F12], $r^*:H^6(X;\mathbb Z)\to H^6(K;\mathbb Z)$ is an isomorphism, hence $c_3(TX)=e(TX_{\mathbb R})$ on $X$. [F6, F10, F11, F12, F13, F14, F15, construct, algebra]

2.1 By [A1] and [F3], $c_1(\mathcal O(5))=5c_1(\mathcal O(1))$. The zero locus $X$ is a transverse complex divisor, and [F4] with rank $2$ and codimension $2$ gives $[X]=5H_{\mathbb P^4}\cap[\mathbb P^4]$ with positive sign. Therefore [F5] gives $\int_XH^3=\langle H_{\mathbb P^4}^3\smile 5H_{\mathbb P^4},[\mathbb P^4]\rangle=5$ by step 1.1. This verifies the degree-five normalization used in [F2]. [A1, F2, F3, F4, F5, F8, step 1.1, algebra]

3.1 The unit sphere $S^9\subset\mathbb C^5$ is compact by [F9]. The map $q:S^9\to\mathbb P^4_{\mathbb C}$, $z\mapsto\mathbb Cz$, is surjective because every nonzero vector has a unit representative. It is continuous: over the projective chart $z_i\ne0$, its coordinate functions are the continuous ratios $z_j/z_i$ on that open subset of the sphere. Given an open cover of $\mathbb P^4$, the inverse images under $q$ form an open cover of $S^9$; a finite subcover exists by [F9], and surjectivity makes the corresponding original opens cover $\mathbb P^4$. Thus projective space is compact by the open-cover definition. In each projective chart the equation of $X$ is the zero set of the continuous polynomial $f(z/z_i)$; its complement is open in that chart, and hence $\mathbb P^4\setminus X$ is open. For any relative open cover $\{W_\lambda\}$ of $X$, use the stated AC to choose ambient opens $V_\lambda$ with $W_\lambda=X\cap V_\lambda$. The family $\{V_\lambda\}\cup\{\mathbb P^4\setminus X\}$ covers projective space and therefore has a finite subcover. Removing the complement leaves a finite subcover of $X$ by the $W_\lambda$. This proves compactness of $X$ directly. Connectedness remains the given hypothesis. Smoothness gives its complex-threefold charts. On an affine projective chart the Fubini–Study form is $i\partial\bar\partial\log(1+|z|^2)$, whose Hermitian matrix is $((1+|z|^2)\delta_{ab}-\bar z_a z_b)/(1+|z|^2)^2$; Cauchy–Schwarz makes it positive definite. Its local potentials differ on overlaps by the logarithm of the squared modulus of a nonzero holomorphic transition function, whose mixed derivative is zero. Thus these positive closed forms glue, and their restriction to the complex tangent bundle of $X$ is Kähler. This verifies the geometric input of [F1] directly. Applying [F2] with the verified intersection from step 2.1 yields $K_X\cong\mathcal O_X$, $c_3(TX)=-40H^3$, and hence $\int_Xc_3(TX)=-40\cdot5=-200$. The Chern computation and the degree normalization are conditional exactly as stated; in particular, no integral-homology vanishing above the manifold dimension is used. [F1, F2, F8, F9, step 2.1, given, algebra]

4.1 By [F7] the evaluation $\langle e(TX_{\mathbb R}),[X]\rangle$ equals $\chi(X)$; step 1.2 identifies this Euler class with $c_3(TX)$, whose integral is $-200$ by step 3.1. Thus $\chi(X)=-200$. The broad canonical-bundle conclusion does not imply exact holonomy or Hodge numbers, as [F1] states. [F1, F7, step 3.1, step 1.2, algebra] ∎

