---
dependency_level: 0
id: lem-smooth-pointed-function-field-curve-spreads-to-good-model
kind: lemma
title: A smooth pointed function-field curve spreads to a smooth projective good model
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-ag-separating-transcendence-basis-perfect-field
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - def-ag-standard-smooth-algebra
  - thm-ag-standard-smooth-geometric-regularity
  - lem-ag-standard-smooth-flatness
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
  - thm-proper-morphism-closed-image
  - lem-proper-flat-cohomology-perfect-complex
  - thm-global-functions-proper-integral-variety
  - lem-riemann-roch-space-finite-dimensional
  - lem-proper-cohomology-field-extension
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-irreducible-components-and-minimal-primes
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §3(1), printed p. 140; explicit good-model construction"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.22.1, and finite-presentation spreading by affine presentations"
      url: https://stacks.math.columbia.edu/tag/07VK
verification: {}
---

## Statement

Assume AC. Let $k$ be a perfect field, let $K/k$ be a finitely generated
extension of positive transcendence degree, and let $C/K$ be a smooth
proper geometrically integral curve of genus $g$ with a given point
$P\in C(K)$. There are a smooth affine integral finite-type $k$-scheme
$R$ with $k(R)=K$, an integral smooth projective $R$-scheme $X$, and
an identification $X_K\cong C$ such that every fibre of $X\to R$ is a
geometrically integral curve of genus $g$. The point $P$ extends to a
section over $R$. Only nonempty affine base opens are removed in the
construction. No assertion about a nonsmooth input curve or imperfect
constant field is included.

## Facts & Assumptions

**Given:** AC and the field extension, smooth proper curve and rational
point of the Statement.

[A1] AC implies DC and countable choice.
[[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A finitely generated extension of a perfect field has a separating
transcendence basis and is finite separable over its rational field. A
finite separable extension is simple, and the minimal polynomial of its
generator is coprime to its derivative.
[[thm-ag-separating-transcendence-basis-perfect-field]]
[[thm-primitive-element-theorem-for-finite-separable-extensions]]
[[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]

[F2] A divisor of degree at least $2g+1$ gives a projective embedding of
a smooth proper geometrically integral curve. Homogeneous ideals describe
closed projective subschemes and their affine charts.
[[thm-degree-two-g-plus-one-line-bundle-very-ample]]
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]

[F3] A standard smooth algebra is presented by finitely many variables
and equations with an invertible Jacobian minor. Smooth morphisms are
locally of this form and standard smooth algebras are flat with regular
geometric fibres of the prescribed relative dimension.
[[def-ag-standard-smooth-algebra]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[lem-ag-standard-smooth-flatness]]

[F4] Projective space is proper; closed immersions and compositions of
proper maps are proper; proper maps have closed image.
[[thm-projective-space-proper-over-base]] [[lem-closed-immersion-proper]]
[[lem-proper-stable-composition]] [[thm-proper-morphism-closed-image]]

[F5] For a proper morphism over a Noetherian affine ring and a coherent
sheaf flat over that ring, a bounded complex of finite projective modules
computes its cohomology after every algebra base change. Locally on the
base its terms are finite free. This supplier assumes AC and DC, both
available from [A1].
[[lem-proper-flat-cohomology-perfect-complex]]

[F6] A proper geometrically integral field scheme has only its base
field as global regular functions. Proper coherent cohomology commutes
with field extension. A regular local ring is a domain; the irreducible
components of an affine Noetherian scheme correspond to the minimal primes.
[[thm-global-functions-proper-integral-variety]]
[[lem-proper-cohomology-field-extension]]
On a smooth proper curve, coherent cohomology of a divisor sheaf vanishes
in degrees at least two. [[lem-riemann-roch-space-finite-dimensional]]
[[thm-regular-local-rings-are-domains-and-cohen-macaulay]]
[[thm-irreducible-components-and-minimal-primes]]

## Axiom use

AC supplies DC to the finite-projective cohomology complex and is
inherited from the embedding and properness suppliers. Only finite lists
of coordinates, charts, equations and matrix entries are cleared at the
spreading steps.

## Proof

**Proof technique:** direct; spread explicit smooth presentations and
use a generically split cohomology complex to retain integral genus-$g$
geometric fibres.

1.1 By [F1] write $K=k(t_1,\ldots,t_n)(a)$ with the $t_i$ algebraically independent and $a$ separable over their rational field. Choose a nonzero polynomial $h$ in the $t_i$ so that the monic minimal polynomial $Q(T)$ of $a$ has coefficients in $A=k[t_1,\ldots,t_n,h^{-1}]$ and a Bezout identity $UQ+VQ'=1$ with $U,V\in A[T]$. Clearing finitely many denominators ensures this. Then $A[a]\cong A[T]/(Q)$ is a domain with fraction field $K$, finite free over $A$, and $Q'(a)$ is a unit. It is standard smooth over $k$ by [F3], using the variable $T$ for the single invertible Jacobian minor. Set initially $R=\operatorname{Spec}A[a]$. It is smooth affine integral and has function field $K$. Further localization at nonzero elements retains these properties. [F1, F3, given, construct, algebra]

2.1 Choose $m\ge2g+1$. Since $P$ has degree one, [F2] embeds $C$ by $\mathcal O_C(mP)$ as a closed curve in some $\mathbf P^N_K$. Take its schematic closure $Z$ in $\mathbf P^N_R$. Explicitly use the homogeneous prime ideal obtained by intersecting its homogeneous ideal over $K$ with $\Gamma(R,\mathcal O_R)[T_0,\ldots,T_N]$. This is finitely generated because the latter ring is Noetherian, and its quotient is a domain. By [F2], $Z$ is integral and projective over $R$, and its generic fibre is $C$; localization of the intersected ideal recovers the original ideal because any individual coefficient has a denominator in the base domain. The coordinates of $P$ also extend to a section of $Z$ after finitely many base denominators are inverted: normalize one nonzero homogeneous coordinate to $1$, clear the others' denominators, and its equations still vanish as identities in $K$. [F2, given, construct, algebra, step 1.1]

3.1 Cover $C$ by finitely many affine standard smooth charts of relative dimension one, using [F3]. These presentations spread to an open part of $Z$ after localizing the base. More explicitly each generic chart can be refined to a principal open of an affine standard projective chart of $Z_K$. Its coordinate algebra is a localization of the corresponding finite-type $R$-algebra tensored with $K$. The isomorphism with its finite standard smooth presentation and its inverse involve finitely many algebra generators, equations and denominators. Clear the base denominators of all these expressions and of their two inverse identities. This extends the isomorphism to the corresponding principal open over a nonempty base open, still with its specified Jacobian minor a unit. Thus each such chart is standard smooth over the base of relative dimension one. Their union contains the entire generic fibre. The closed complement in proper $Z$ has closed image in $R$ by [F4] missing the generic point. Remove it, and take a nonempty principal affine base open. Now $Z\to R$ is smooth everywhere, flat by [F3], and all its nonempty geometric fibres are regular of pure dimension one. [F3, F4, construct, algebra, step 2.1]

4.1 Apply [F5] to $\mathcal O_Z$ over this Noetherian affine base. It is coherent and flat because $Z\to R$ is smooth and flat. After shrinking around the generic point, its bounded computing complex has finite free terms. Over $K$, this complex splits as a direct sum of its cohomology vector spaces with zero differential and elementary two-term identity complexes: choose bases of the boundaries, lift them across each preceding differential, and complement the boundaries inside the cycles. There are only finitely many terms. All these bases, inverse bases and differential identities involve finitely many entries of $K$, so invert their finitely many base denominators. The same decomposition now holds over a nonempty affine base open. The cohomology summands have ranks $1$ in degree zero and $g$ in degree one, and zero in all other degrees: these are $H^0(C,\mathcal O_C)=K$ and $H^1(C,\mathcal O_C)$ by [F6] and the definition of genus, with higher curve cohomology zero. Consequently [F5] gives, for every base field and every further field extension, $\dim H^0(Z_s,\mathcal O)=1$ and $\dim H^1(Z_s,\mathcal O)=g$. [A1, F5, F6, algebra, step 3.1]

5.1 Every geometric fibre is nonempty because its $H^0$ has dimension one. It is connected: a decomposition into two nonempty open-and-closed parts would give two linearly independent constant functions on the parts, contradicting that dimension. It is regular by step 3.1. Its finitely many irreducible components cannot meet, since at a meeting point its regular local domain from [F6] would have at least two minimal primes. Hence those components are disjoint open-and-closed subsets, so connectedness leaves one. A regular scheme is reduced, again by its local domains. Therefore each geometric fibre is integral and, by step 3.1, a curve. Its genus is $g$ by step 4.1; field base change in [F6] identifies this with the genus over its residue field. Put $X=Z$ over the final base. It remains integral by the closure construction, smooth and projective, has generic fibre $C$, and carries the extended point section of step 2.1. Each removed closed image or denominator locus missed the generic point, so the final affine base is nonempty. [F3, F6, given, step 2.1, step 3.1, step 4.1] ∎
