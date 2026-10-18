---
id: def-untwisted-quiver-cohomological-hall-algebra
kind: definition
title: The untwisted equivariant Borel–Moore CoHA of a finite quiver
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
- def-axiom-of-choice
- def-quiver-representation-stacks-and-exact-sequence-correspondences
- lem-general-linear-quotient-stacks-are-algebraic
- lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
- def-equivariant-borel-moore-homology-and-correspondence-convolution
- def-intrinsic-quotient-stack-borel-moore-grading
- thm-quiver-quotient-stack-borel-moore-operation-package
justified_by:
- thm-untwisted-quiver-coha-is-associative-and-unital
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential
      Hodge structures and motivic Donaldson-Thomas invariants, §§2.1–2.3
    url: https://arxiv.org/pdf/1006.2706v2
  - title: Dominic Joyce, Cohomological Hall Algebras, Week 2 notes, Geometry Advanced
      Class Trinity Term 2026, §§1–2
    url: https://people.maths.ox.ac.uk/joyce/AdvancedClassTT26/Week2.pdf
  - title: Yan Soibelman, Remarks on Cohomological Hall algebras and their representations,
      §2.2
    url: https://www.math.ksu.edu/~soibel/COHA-modules-2-1.pdf
---

## Definition

Assume AC as inherited from the equivariant Borel–Moore supplier. Let $Q$
be a finite quiver over $\mathbb C$. Use rational equivariant Borel–Moore homology with the positive complex orientation. Its **intrinsic quotient-stack grading** is that of [[def-intrinsic-quotient-stack-borel-moore-grading]]:
$$\mathbb H_i(\mathfrak M_{\mathbf d})=H_{i+2\dim G_{\mathbf d}}^{\mathrm{BM},G_{\mathbf d}}(\operatorname{Rep}_Q(\mathbf d);\mathbb Q).$$
The group on the right uses the variety-normalized dualizing object of [[def-equivariant-borel-moore-homology-and-correspondence-convolution]]; the explicit group-dimension regrading is essential to the shift below. The
untwisted quiver CoHA module is the dimension-vector graded direct sum
$
\mathcal H_Q=\bigoplus_{\mathbf d\in\mathbb Z_{\ge0}^{Q_0}}
\mathbb H_*(\mathfrak M_{\mathbf d};\mathbb Q).
$
This is an algebraic direct sum; no completion is used.

For $\mathbf a,\mathbf b$, let
$q:\mathfrak E_{\mathbf a,\mathbf b}\to
\mathfrak M_{\mathbf a}\times\mathfrak M_{\mathbf b}$ and
$p:\mathfrak E_{\mathbf a,\mathbf b}\to\mathfrak M_{\mathbf a+\mathbf b}$
be the maps of
[[def-quiver-representation-stacks-and-exact-sequence-correspondences]].
The product of $\alpha$ in dimension $\mathbf a$ and $\beta$ in
dimension $\mathbf b$ is
$
\alpha*\beta:=p_*q^!(\alpha\boxtimes\beta),
$
where $\boxtimes$ is the equivariant external product,
$q^!$ is the smooth complex-oriented Borel–Moore pullback, and $p_*$ is
the proper pushforward. The actual quotient-stack operations and their normalization are proved in
[[thm-quiver-quotient-stack-borel-moore-operation-package]], using the geometry of
[[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]]. The
homological degree changes by
$
2r_Q(\mathbf a,\mathbf b)=-2\chi_Q(\mathbf b,\mathbf a),
\qquad
\chi_Q(\mathbf u,\mathbf v)=
\sum_i u_i v_i-\sum_{h:i\to j}u_i v_j.
$
Thus the first factor is the subrepresentation and the second is the
quotient. This normalization has no Euler-form sign twist, no division by
automorphism orders, and no additional Tate twist; the coefficient category here is rational constructible sheaves, with no mixed-Hodge enrichment asserted. Each dimension vector has
only finitely many decompositions into $\mathbf a+\mathbf b$, so the product
on the direct sum is defined.

The zero dimension component is $\mathbb Q$; write $1$ for its
standard class, the candidate unit.

The displayed homological shift is for this Borel–Moore normalization and the
subrepresentation-first convention. Under the usual equivariant cohomology
grading, converting through the quotient-stack dimensions gives the source
shift $-2\chi_Q(\mathbf a,\mathbf b)$; it is not obtained by simply
reversing the arguments in the displayed Borel–Moore formula.

**Well-formedness.** The operation package constructs the nonrepresentable smooth pullback through an inverse affine-bundle pullback and a vector-bundle pullback, and the proper pushforward through the induced incidence variety. It proves presentation independence, proper/smooth base change and Cartesian pasting on the needed flag diagrams. Thus the displayed formula is an actual product on the declared intrinsic groups. Associativity and the unit are proved in [[thm-untwisted-quiver-coha-is-associative-and-unital]] rather than assumed here. In each fixed homological degree, a sufficiently large frame model computes the finite collection of operations involved; no single finite model for all degrees is claimed.
