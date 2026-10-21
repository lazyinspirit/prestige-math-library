---
id: lem-seifert-pairing-well-defined
kind: lemma
title: "Well-definedness of the Seifert pairing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-parametric-transversality
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - def-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice-principle-for-foliation-pair
  - lem-countable-choice-sequence-and-product-formulations-are-equivalent
  - def-one-variable-alexander-module-of-an-oriented-link
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-linking-number-equals-signed-intersection
  - lem-linking-number-even-sum-and-reidemeister-invariance
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

[F9] Under countable choice, a smooth map can be made transverse to a closed embedded submanifold, and the relative theorem fixes a smaller neighbourhood of a closed region where transversality already holds. For a map from a manifold with boundary, the transverse-preimage theorem identifies the boundary of the preimage with the preimage of the boundary face when the boundary restriction is transverse. [[thm-transversality-homotopy-theorem]], [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]], [[thm-transverse-preimage-for-manifolds-with-boundary]]

[F10] The signed boundary sum of a compact oriented one-manifold is zero. [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]

[F11] Under countable choice, the half-sum of mixed crossing signs of a regular two-component diagram is symmetric under interchanging the named components. Together with [F5], this identifies the topological linking coefficients in both orders with the same integer. This uses the exact diagram and supplied-surface conclusions, not any Seifert-pairing result. [[lem-linking-number-even-sum-and-reidemeister-invariance]]

[F12] The exact parametric transversality statement says that a smooth family transverse to an embedded target has a null set of nontransverse slice parameters under countable choice. A null subset of an open ball in $\mathbb R^4$ has dense complement. The compact-set bump statement supplies a smooth $\chi\in[0,1]$, equal to one near a specified compact set and supported in a specified open neighbourhood. Choosing that neighbourhood relatively compact makes its support compact. Step 1.1 explicitly constructs the family and earns its compact support and $C^1$ smallness; these are not extra conclusions attributed to the relative-transversality Statement. [[thm-parametric-transversality]], [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]

## Proof

1.1 **Symmetry of linking.** Let $c,d\subset S^3$ be disjoint oriented embedded circles. Choose compact oriented embedded surfaces $A,B$ with boundaries $c,d$ by [F8], and a regular diagram $D$ of their boundary link by [F7]. For $X=\operatorname{Int}A$, let $f:X\to S^3\subset\mathbb R^4$ be the inclusion. A sufficiently small boundary collar misses $d$; choose an open collar region $G$ on which $f$ is transverse to $d$, and protect a smaller collar. Then $K=X\setminus G$ is compact. Choose a relatively compact open $W\subset X$ containing $K$ and avoiding the protected smaller collar, using finitely many coordinate neighbourhoods of $K$. By [F12] choose $\chi:X\to[0,1]$, equal to one near $K$ and with compact support in $W$. Where $\chi=0$, $f$ is already transverse to $d$. For $v$ in a small open ball in $\mathbb R^4$ put $\mathcal F(p,v)=(f(p)+\chi(p)v)/\|f(p)+\chi(p)v\|$. The denominator is nonzero for $\|v\|<1/2$. Where $\chi>0$, the derivative in $v$ is $\chi/\|f+\chi v\|$ times the orthogonal projection onto $T_{\mathcal F(p,v)}S^3$, hence is surjective. Where $\chi=0$, nonnegativity gives $d\chi=0$, and the old source transversality applies. Thus the total family is transverse to $d$. Parametric transversality and the dense-complement statement [F12] give a transverse slice in every sufficiently small parameter ball. The family equals $f$ off the compact support and converges uniformly in value and first derivative to $f$ there as $v\to0$, directly by differentiation of the displayed smooth formula on the compact set. It therefore extends by the identity across $\partial A$ and remains an embedding for sufficiently small $v$: finite compact coordinate subcharts retain a uniform differential lower bound for nearby source points, and compact pairs outside those chart neighbourhoods retain positive image separation. The surface still has oriented boundary $c$ and is transverse to $d$. Apply the identical explicit family to $\operatorname{Int}B$, protecting a collar of $d$ and taking target $c$. No closed double or disjointness of an added half is asserted. Now [F5] applies to these actual transverse spanning surfaces in both orders, with the same boundary diagram $D$. It equates $\operatorname{lk}(c,d)$ and $\operatorname{lk}(d,c)$ with the two diagram half-sums, which agree by [F11]. Linking is therefore symmetric. It is additive in its first cycle by the homological coefficient homomorphism [F3], and symmetry gives additivity in the other cycle. [A1, F3, F5, F7, F8, F11, F12, given, construct]

2.1 **Independence of cycle representatives.** Write a class $x$ as $\sum_i m_i[a_i]$ and a class $y$ as $\sum_j n_j[a_j]$ using the basis from [F1]–[F2]. If $x'$ is another disjoint-union representative of $x$, then $x'-\sum_i m_i a_i=\partial C$ for a 2-chain $C$ on $F$. Pushing $C$ to a sufficiently small positive normal level gives a chain disjoint from $y$ whose boundary is the difference between the positive push-offs of the two representatives. Hence they determine the same class in the homology of the complement of each component of $y$, so their linking sums agree by [F3]. If $y'$ represents $y$, symmetry from step 1.1 changes the comparison to linking with $x^+$; the chain on $F$ bounding $y-y'$ is disjoint from $x^+$ and gives the same conclusion. Therefore the value is independent of both representatives. [F1, F2, F3, L1, step 1.1, given, construct]

3.1 **Independence of the small positive push.** In the oriented normal bicollar, any two sufficiently small positive normal sections are joined by linear interpolation through positive sections after shrinking the collar. This homotopy stays disjoint from $F$ and therefore from every representative $y\subset F$. By [F6], the two pushed cycles have the same homology class in the complement of each component of $y$, so their linking sums coincide. [F1, F3, F6, given, construct]

4.1 **Bilinearity and the matrix formula.** Additivity of linking in step 1.1 and representative independence in step 2.1 show that the value is additive in each homology variable. For $x=\sum_i m_i[a_i]$ and $y=\sum_j n_j[a_j]$, additivity gives $\operatorname{lk}(x^+,y)=\sum_{i,j}m_i n_j\operatorname{lk}(a_i^+,a_j)=\sum_{i,j}m_i n_jV_{ij}$. This is exactly the pairing defined by the matrix, proving the claim. [F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

The argument uses full AC through Alexander duality and through the supplied countable-choice interfaces. It does not assert that $V$ is independent of the spanning surface or the basis.
