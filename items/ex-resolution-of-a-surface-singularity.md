---
id: ex-resolution-of-a-surface-singularity
kind: example
title: Resolving the quadric cone by one blowup
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 22
deps:
  - def-ag-standard-smooth-algebra
  - def-axiom-of-choice
  - def-birational-morphism-schemes
  - def-dependent-choice
  - def-embedding-dimension-and-regular-local-ring
  - def-integral-scheme
  - def-normal-noetherian-ring
  - def-proper-morphism
  - def-smooth-morphism-schemes
  - def-strict-transform-closed-subscheme
  - lem-blowup-charts-of-the-quadric-cone
  - lem-blowup-isomorphism-off-center
  - lem-proper-stable-composition
  - thm-ag-standard-smooth-geometric-regularity
  - thm-blowup-projective
  - thm-blowup-smooth-surface-point-charts
  - thm-resolution-of-normal-surface-singularities
  - thm-resolution-of-singularities-in-characteristic-zero
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: The Stacks Project, Divisors, Section 31.33 and Section 31.34 (blowups
        and strict transforms)
      url: https://stacks.math.columbia.edu/tag/01OF
    - title: Herwig Hauser, The Hironaka theorem on resolution of singularities, Bull.
        Amer. Math. Soc. 40 (2003) 323-403, Section 13 (resolution of schemes)
      url: https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf
---

## Example

Worked example for the pair.
Let $k$ be a field of characteristic zero and let $C=V(xy-z^2)\subseteq\mathbb A^3_k$ be the quadric cone with vertex $0$.
Then the single blowup $\pi\colon X\to\mathbb A^3_k$ of the origin resolves the singularity of $C$: the strict transform $\widetilde C$ is a smooth surface, $\pi|_{\widetilde C}\colon\widetilde C\to C$ is proper and birational with $\pi|_{\widetilde C}^{-1}(0)=E|_{\widetilde C}$ a smooth conic, and $\pi|_{\widetilde C}$ is an isomorphism over $C\setminus\{0\}$ ([[lem-blowup-charts-of-the-quadric-cone]]).
The same conclusion is a special case of the surface resolution theorem [[thm-resolution-of-normal-surface-singularities]] proved on the paired page of this run, and of the characteristic-zero resolution theorem [[thm-resolution-of-singularities-in-characteristic-zero]].
The example shows concretely that a resolution need not be minimal, that the exceptional fibre can be positive-dimensional and smooth, and that the strict transform of the resolved surface meets the exceptional divisor in a smooth curve; in dimension two the resolution of the cone is a single blowup, and the strict transform is smooth without any further normalization.

## Facts & Assumptions

**Given:** A field $k$ of characteristic zero, the quadric cone $C=V(xy-z^2)\subseteq\mathbb A^3_k$, the blowup $\pi:X\to\mathbb A^3_k$ of the origin, and its strict transform $\widetilde C$. Assume AC and DC as inherited from the cited resolution suppliers.

[A1] [[def-axiom-of-choice]] and [[def-dependent-choice]]: the Axiom of Choice and Dependent Choice are the assumptions inherited by the surface resolution theorem; the explicit chart computation makes no additional choices.

[L1] [[lem-blowup-charts-of-the-quadric-cone]]: $C$ is an integral normal surface, $\widetilde C$ is smooth, and $f=\pi|_{\widetilde C}$ is proper and birational, isomorphic over $C\setminus\{0\}$, with exceptional fibre the smooth conic $Q=\{xy=z^2\}\subseteq\mathbb P^2_k$. The strict transform meets $E$ transversally and $Q=E|_{\widetilde C}$ is a reduced effective Cartier divisor.

[L2] [[def-embedding-dimension-and-regular-local-ring]], [[def-smooth-morphism-schemes]], [[def-ag-standard-smooth-algebra]], [[thm-ag-standard-smooth-geometric-regularity]], and [[def-birational-morphism-schemes]]: regularity of a Noetherian local ring means equality of dimension and embedding dimension; open subschemes of affine space are smooth, and a map of integral finite-type schemes is birational if it identifies their generic points and function fields.

[L3] [[thm-resolution-of-normal-surface-singularities]]: under AC and DC, a normal integral finite-type surface over a field admits a proper birational regular resolution by finitely many normalized point blowups, isomorphic over its regular locus; over a perfect field the terminal surface is smooth.

[L4] [[thm-resolution-of-singularities-in-characteristic-zero]]: an integral separated finite-type scheme over a characteristic-zero field has a canonical smooth proper birational resolution, isomorphic over its smooth locus.

[L5] [[thm-blowup-smooth-surface-point-charts]], [[thm-blowup-projective]], [[lem-blowup-isomorphism-off-center]], and [[lem-proper-stable-composition]]: blowing up a $k$-rational point on a smooth surface produces a smooth surface with exceptional curve $\mathbb P^1_k$; a finite-type ideal blowup is proper and is an isomorphism off its centre, and a composite of proper morphisms is proper.

## Proof

1.1 By [L1], $\widetilde C$ is a smooth surface and $f:\widetilde C\to C$ is proper and birational, isomorphic over $C\setminus\{0\}$, with $f^{-1}(0)=Q=E|_{\widetilde C}$ a smooth conic. Thus one ambient blowup resolves the cone. Its source charts are $k[x,v]$, $k[y,t]$, and $k[p,p^{-1},z]$, so no subsequent normalization is required. The conic is a smooth divisor and the strict transform meets the ambient exceptional divisor transversally. [L1, given]

2.1 The regular and smooth loci of $C$ are both $C\setminus\{0\}$: $D(x)$ and $D(y)$ cover this complement with rings $k[x,x^{-1},z]$ and $k[y,y^{-1},z]$, while the chain $(0)\subsetneq(x,z)\subsetneq(x,y,z)$ and $\dim C=2$ give vertex local dimension two, whereas its embedding dimension is three because $xy-z^2$ has no linear term. Since $C$ is normal, integral, affine (hence separated), finite type, and two-dimensional, [L3] applies. Characteristic zero makes $k$ perfect: an irreducible polynomial of positive degree has nonzero derivative of smaller degree, hence is relatively prime to its derivative and is separable. The surface theorem therefore supplies a smooth proper birational resolution isomorphic off the vertex. The explicit map in step 1.1 realizes these existence properties with a single blowup and the displayed conic; those extra descriptions come from the chart computation. [A1, L1, L2, L3, step 1.1, algebra]

3.1 The affine integral finite-type scheme $C$ also satisfies [L4], which supplies a canonical smooth proper birational resolution isomorphic over $C\setminus\{0\}$. Thus both general theorems give the existence properties exhibited in step 1.1. The chart calculation identifies the explicit map $f$, and no identification with the canonical resolution is needed for this comparison. [L1, L4, step 1.1, step 2.1]

4.1 To exhibit the freedom to use a nonminimal resolution, take the explicit $k$-rational point $q=(1:0:0)$ of the exceptional conic $Q$, and blow it up: $b:S=\operatorname{Bl}_q\widetilde C\to\widetilde C$. By [L5], $S$ is smooth, $b$ is proper, has exceptional curve $\mathbb P^1_k$, and is an isomorphism away from $q$. The source is integral: $q$ is the origin in the chart $\operatorname{Spec}k[x,v]$ of $\widetilde C$, so its two point-blowup charts are affine planes with dense complement of the exceptional curve, and off $q$ the source agrees with the integral surface $\widetilde C$. Consequently $f\circ b$ is proper, isomorphic over $C\setminus\{0\}$, and birational, since this same dense open identifies its function field with that of the integral target. This resolution is nonminimal because the nontrivial morphism $b$ contracts its new exceptional curve back to the smooth surface $\widetilde C$, which already resolves $C$. The smooth positive-dimensional exceptional fibre asserted in the example is the conic of the original single blowup in step 1.1. [A1, L1, L2, L5, step 1.1] ∎

