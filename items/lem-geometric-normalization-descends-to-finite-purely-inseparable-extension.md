---
dependency_level: 0
id: lem-geometric-normalization-descends-to-finite-purely-inseparable-extension
kind: lemma
title: Geometric normalization descends to a finite purely inseparable extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-existence-of-algebraic-closures
  - thm-perfect-field-characterizations
  - thm-purely-inseparable-extension-characterizations
  - thm-finitely-generated-algebraic-extensions-are-finite
  - thm-normalization-glues-integral-finite-type-curves
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-regular-equals-smooth-over-perfect-field
  - lem-ag-geometric-regularity-field-tests
  - thm-ag-standard-smooth-geometric-regularity
  - thm-regular-local-rings-are-normal
  - thm-normality-is-local-for-domains
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
  - lem-riemann-roch-space-finite-dimensional
  - cor-finite-morphism-proper
  - lem-finite-over-projective-noetherian-affine-base-is-projective
  - thm-global-functions-proper-integral-variety
  - lem-proper-cohomology-field-extension
  - lem-normalization-defect-euler-and-lengths
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, Theorem 2.5.1 and proof sketch, printed pp. 47–48; finite purely inseparable normalization construction"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
    - title: "The Stacks Project, Algebraic Curves, normalization and arithmetic genus"
      url: https://stacks.math.columbia.edu/download/curves.pdf
verification: {}
---

## Statement

Assume AC. Let $K$ be a field of characteristic $p>0$ and let $C/K$
be a geometrically integral projective curve of arithmetic genus $g$.
There are a finite purely inseparable extension $K'/K$ and a finite
birational normalization map
$$\nu:Y\longrightarrow C_{K'}$$
such that $Y/K'$ is a smooth projective geometrically integral curve.
After any algebraic closure of $K'$, this is the normalization of the
corresponding geometric curve. If $h$ is the genus of $Y$, then
$$0\le h\le g,\qquad h=g\ \Longleftrightarrow\ C\text{ is smooth over }K.$$
In particular this distinguishes regular nonsmooth genus-drop curves
from smooth curves. No perfectness or finite $p$-rank of $K$ is assumed.

## Facts & Assumptions

**Given:** AC, the characteristic-$p$ field, and the geometrically
integral projective curve of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Fields have algebraic closures under AC. In characteristic $p$,
perfectness is surjectivity of Frobenius, and pure inseparability is the
elementwise $p$-power condition. Finitely many algebraic elements generate
a finite extension.
[[thm-existence-of-algebraic-closures]] [[thm-perfect-field-characterizations]]
[[thm-purely-inseparable-extension-characterizations]]
[[thm-finitely-generated-algebraic-extensions-are-finite]]

[F2] The normalization of an integral finite-type curve is obtained by
gluing finite affine integral closures in its function field, compatibly
with principal localization. It is normal, finite and birational. The
height-one local rings of a normal Noetherian domain are DVRs; hence a
normal curve is regular. Over a perfect field a regular finite-type scheme
is smooth.
[[thm-normalization-glues-integral-finite-type-curves]]
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]
[[thm-regular-equals-smooth-over-perfect-field]]

[F3] Smoothness of a finite-type field algebra descends from one field
extension by the geometric-regularity criterion. Smooth schemes are
regular, and regular local rings are normal. Normality is local for a
domain.
[[lem-ag-geometric-regularity-field-tests]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-regular-local-rings-are-normal]]
[[thm-normality-is-local-for-domains]]

[F4] Projective field schemes are proper, since projective-space projections,
closed immersions and composites are proper.
[[thm-projective-space-proper-over-base]] [[lem-closed-immersion-proper]]
[[lem-proper-stable-composition]]
Finite maps are proper and a finite scheme over a projective scheme
over a Noetherian field base is projective. Global functions of a proper
geometrically integral field scheme equal that field, and proper coherent
cohomology commutes with field extension.
[[cor-finite-morphism-proper]]
[[lem-finite-over-projective-noetherian-affine-base-is-projective]]
[[thm-global-functions-proper-integral-variety]]
[[lem-proper-cohomology-field-extension]]
Divisor-sheaf cohomology on a smooth proper curve vanishes in degrees
at least two. [[lem-riemann-roch-space-finite-dimensional]]

[F5] For a reduced proper curve with finite normalization, its defect
$\delta$ is the dimension of the normalization quotient's global sections,
is nonnegative, and equals the difference of Euler characteristics of the
normalization and the curve. Defect zero means that the finite normalization
is an isomorphism.
[[lem-normalization-defect-euler-and-lengths]]

## Axiom use

AC is inherited through normalization, regularity and proper cohomology,
and supplies an algebraic closure in the first step. Only finitely many
integral generators and coefficient equations are descended.

## Proof

**Proof technique:** direct; normalize over the perfect closure and
descend explicit affine integral generators, then compare Euler
characteristics.

1.1 Inside an algebraic closure $\Omega/K$ from [F1], let $K_\infty$ be the elements whose some $p$-power belongs to $K$. They form a field by Frobenius additivity and the rules for products and inverses. It is perfect: the unique $p$th root in $\Omega$ of such an element has its next $p$-power in $K$ and therefore also belongs to $K_\infty$. The curve $C_{K_\infty}$ is integral by geometric integrality. Normalize it by [F2]. On a finite affine cover $C=\bigcup_i\operatorname{Spec}A_i$ its normalization has rings $B_{i,\infty}$, the finite integral closures of $A_i\otimes_K K_\infty$ in their common function field. This normal curve is smooth over perfect $K_\infty$ by [F2]. [F1, F2, given, construct, algebra]

2.1 Choose finite module generators $b_{ij}$ of every $B_{i,\infty}$ and monic integral equations for them over $A_i\otimes_K K_\infty$. Each $b_{ij}$ is a fraction of elements of this latter ring, and these fractions and equations use only finitely many coefficients of $K_\infty$ on our finite affine cover. Let $K'/K$ be generated by these coefficients. It is finite purely inseparable by [F1]. Put $A_i'=A_i\otimes_K K'$ and $B_i'=A_i'[b_{ij}]$ inside $\operatorname{Frac}A_i'$. These are domains because the curve is geometrically integral. The chosen monic equations make $B_i'$ finite over $A_i'$: monomials in the $b_{ij}$ of exponents below their monic degrees span it. Extension to $K_\infty$ identifies $B_i'\otimes_{K'}K_\infty$ with $B_{i,\infty}$. Indeed the map is injective since scalar extension preserves the inclusion in $\operatorname{Frac}A_i'$, whose tensor extension is a domain inside the function field; its image contains all chosen generators and is exactly $B_{i,\infty}$. Smoothness therefore descends to every $B_i'$ by [F3], so they are normal. They have the same fraction field as $A_i'$ and are its integral closure: every element integral over $A_i'$ is integral over the normal intermediate ring $B_i'$ and hence belongs to it. [F1, F2, F3, construct, algebra, step 1.1]

3.1 By the localization and gluing construction in [F2], these rings glue to the normalization $\nu:Y\to C_{K'}$. It is finite and birational, smooth by step 2.1, and projective by [F4]. It is geometrically integral. To check this after an algebraic closure $\Omega'/K'$, tensor each inclusion $B_i'\subseteq\operatorname{Frac}A_i'$ with $\Omega'$. This remains injective and its target is a localization of the domain $A_i'\otimes_{K'}\Omega'$, since $C$ is geometrically integral. Thus all the affine charts of $Y_{\Omega'}$ are domains, and their common generic point is identified on their nonempty overlaps; hence $Y_{\Omega'}$ is integral. It is smooth and therefore normal by [F3], finite and birational over $C_{\Omega'}$. On an affine chart a finite normal intermediate domain in the same fraction field equals the full integral closure, as in step 2.1. Consequently this map is the geometric normalization. [F2, F3, F4, algebra, step 2.1]

4.1 The arithmetic genus of $C_{K'}$ is $g$ by proper cohomology base change [F4], and both curves have $H^0$ equal to $K'$ by geometric integrality and [F4]. Thus their Euler characteristics are $1-g$ and $1-h$. The defect formula in [F5] gives $\delta=(1-h)-(1-g)=g-h\ge0$. The integer $h=\dim_{K'}H^1(Y,\mathcal O_Y)$ is nonnegative. If $h=g$, the defect is zero, so $\nu$ is an isomorphism by [F5]. Then $C_{K'}$ is smooth and [F3] descends smoothness to $C/K$. Conversely if $C/K$ is smooth, then $C_{K'}$ is smooth and normal by [F3], its normalization is an isomorphism, and its defect is zero; hence $h=g$. This proves the inequalities and equivalence without identifying regularity over an imperfect field with smoothness. [F3, F4, F5, given, algebra, step 2.1, step 3.1] ∎
