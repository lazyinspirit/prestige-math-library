---
id: lem-seifert-pairing-well-defined
kind: lemma
title: "Well-definedness of the Seifert pairing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - def-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice-principle-for-foliation-pair
  - lem-countable-choice-sequence-and-product-formulations-are-equivalent
  - def-one-variable-alexander-module-of-an-oriented-link
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-linking-number-equals-signed-intersection
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - lem-every-oriented-link-admits-a-regular-projection
  - prop-singular-chains-and-homology-are-covariantly-functorial
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - thm-transversality-homotopy-theorem
  - prop-relative-transversality-preserves-a-map-on-a-closed-good-region
  - thm-transverse-preimage-for-manifolds-with-boundary
  - lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count
  - def-oriented-intersection-number
  - def-local-oriented-intersection-sign
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links, Chapter 8.A"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, Section 6.2.3"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented embedded circle in the oriented standard three-sphere, let $F$ be a connected compact smooth oriented embedded surface with boundary $K$, and let $a_1,\ldots,a_{2g}$ be the ordered integral basis and positive normal push-off convention used to define the Seifert matrix $V$ above. Every class of $H_1(F;\mathbb Z)$ has a representative that is a finite integral sum of pairwise disjoint smooth oriented embedded circles in $F$. For such representatives $x$ and $y$, the sum of the pairwise linking numbers between the positive push-off of $x$ and $y$ depends only on $[x]$ and $[y]$, is independent of the sufficiently small positive push-off, and equals the bilinear extension of $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. The linking number of two disjoint oriented circle components is symmetric. In particular, the Seifert pairing is a well-defined bilinear map $H_1(F;\mathbb Z)\times H_1(F;\mathbb Z)\to\mathbb Z$.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert pairing and its matrix convention]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|A compact genus-$g$ surface with one boundary component has free first homology of rank $2g$ with simple handle generators]]

[[def-one-variable-alexander-module-of-an-oriented-link|Alexander duality normalizes the positive meridian as the linking-number generator]]

[[thm-linking-number-equals-signed-intersection|Linking number is the signed intersection with a supplied spanning surface]]

## Facts & Assumptions

**Given:** Full AC, the oriented knot $K$, the connected compact oriented spanning surface $F$, its positive normal collar, and the chosen basis from the Seifert-pairing definition.

[A1] Full AC is the choice-function axiom. [[def-axiom-of-choice]]

[L1] Full AC implies the countable-choice hypothesis used by the supplied surface normal-form theorem: for a sequence of nonempty sets, apply the AC choice function to its range and use the chosen element on each index. [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The supplied surface is connected, compact, smooth, oriented, and has boundary the oriented knot; its genus satisfies $\chi(F)=1-2g$. [[def-oriented-seifert-surface]]

[F2] Under the countable-choice interface, a compact genus-$g$ surface with one boundary component has $H_1(F;\mathbb Z)\cong\mathbb Z^{2g}$ and standard handle generators represented by simple smooth curves. Resolving finitely many transverse crossings in a cycle inside small oriented disks preserves its homology class and gives a disjoint-union representative. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F3] For a disjoint oriented circle $J$ and an oriented circle $L$, the linking number is the coefficient of the positive meridian in $H_1(S^3\setminus L;\mathbb Z)$; the positive meridian maps to $1$ under the Alexander-duality normalization. The coefficient map is a homomorphism. [[def-one-variable-alexander-module-of-an-oriented-link]]

[F4] The local oriented intersection sign is the sign of the determinant of the ordered tangent and normal bases. [[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]]

[F5] If an oriented circle is supplied with a compact oriented spanning surface and a regular diagram of the two-component link, the positive-meridian linking coefficient equals the signed intersection count with that surface. [[thm-linking-number-equals-signed-intersection]]

[F6] Homotopic maps induce the same map on singular homology, and continuous maps induce chain maps functorially. [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]], [[prop-singular-chains-and-homology-are-covariantly-functorial]]

[F7] The regular-projection supplier provides a regular diagram for each oriented link, so the stated linking/intersection theorem applies to each pair of embedded circle components used below. [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-regular-oriented-link-diagram]], [[lem-every-oriented-link-admits-a-regular-projection]]

[F8] Every smooth oriented knot bounds a connected compact smooth oriented embedded spanning surface under countable choice. [[thm-every-oriented-knot-bounds-a-seifert-surface]]

[F9] Under countable choice, smooth maps can be made transverse and can be perturbed relative to a closed region where they are already transverse; a transverse preimage in a manifold with boundary has boundary equal to its preimage on the boundary face. [[thm-transversality-homotopy-theorem]], [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]], [[thm-transverse-preimage-for-manifolds-with-boundary]]

[F10] The signed boundary sum of a compact oriented one-manifold is zero. [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]

## Proof

1.1 **Symmetry of linking.** Let $c,d\subset S^3$ be disjoint smooth oriented embedded circles. By [F8] choose compact oriented embedded surfaces $A,B$ with $\partial A=c$ and $\partial B=d$. Choose a regular diagram of $c\cup d$ using [F7]. Because $c$ and $d$ are disjoint compact sets, choose collars of $\partial A$ and $\partial B$ whose images miss the other boundary circle. Apply the homotopy-transversality theorem in [F9] to perturb $A$ relative to its boundary collar so that $A$ is transverse to $d$, and perturb $B$ relative to its boundary collar so that $B$ is transverse to $c$. At a point of $A\cap d$, the tangent to $d$ lies in $TB$ and is not in $TA$, so the two surface tangent planes are distinct and hence span $TS^3$; similarly they are transverse at $c\cap B$. Thus $A$ and $B$ are transverse near their boundary intersections. Apply the relative clause of [F9] once more, fixing a closed collar of those already transverse boundary intersections, to make their interiors transverse. By [F9], $A\cap B$ is a compact oriented one-manifold whose boundary points are exactly $c\cap B$ and $A\cap d$. In an oriented local chart the outward-normal-first boundary signs at these endpoint types are opposite; [F4] fixes the ordered intersection sign, and [F10] says the total signed boundary sum is zero. Hence the signed counts of $c\cap B$ and $d\cap A$ agree. Applying [F5] to the supplied surfaces and diagram gives $\operatorname{lk}(c,d)=c\cdot B=d\cdot A=\operatorname{lk}(d,c)$. Interchanging a curve and surface contributes $(-1)^{1\cdot2}=+1$, so the two intersection conventions agree. Linking is additive in either cycle because its coefficient in the positive-meridian generator of homology is a homomorphism [F3]. [A1, F3, F4, F5, F7, F8, F9, F10, given, construct]

2.1 **Independence of cycle representatives.** Write a class $x$ as $\sum_i m_i[a_i]$ and a class $y$ as $\sum_j n_j[a_j]$ using the basis from [F1]–[F2]. If $x'$ is another disjoint-union representative of $x$, then $x'-\sum_i m_i a_i=\partial C$ for a 2-chain $C$ on $F$. Pushing $C$ to a sufficiently small positive normal level gives a chain disjoint from $y$ whose boundary is the difference between the positive push-offs of the two representatives. Hence they determine the same class in the homology of the complement of each component of $y$, so their linking sums agree by [F3]. If $y'$ represents $y$, symmetry from step 1.1 changes the comparison to linking with $x^+$; the chain on $F$ bounding $y-y'$ is disjoint from $x^+$ and gives the same conclusion. Therefore the value is independent of both representatives. [F1, F2, F3, L1, step 1.1, given, construct]

3.1 **Independence of the small positive push.** In the oriented normal bicollar, any two sufficiently small positive normal sections are joined by linear interpolation through positive sections after shrinking the collar. This homotopy stays disjoint from $F$ and therefore from every representative $y\subset F$. By [F6], the two pushed cycles have the same homology class in the complement of each component of $y$, so their linking sums coincide. [F1, F3, F6, given, construct]

4.1 **Bilinearity and the matrix formula.** Additivity of linking in step 1.1 and representative independence in step 2.1 show that the value is additive in each homology variable. For $x=\sum_i m_i[a_i]$ and $y=\sum_j n_j[a_j]$, additivity gives $\operatorname{lk}(x^+,y)=\sum_{i,j}m_i n_j\operatorname{lk}(a_i^+,a_j)=\sum_{i,j}m_i n_jV_{ij}$. This is exactly the pairing defined by the matrix, proving the claim. [F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

The argument uses full AC through Alexander duality and through the supplied countable-choice interfaces. It does not assert that $V$ is independent of the spanning surface or the basis.
