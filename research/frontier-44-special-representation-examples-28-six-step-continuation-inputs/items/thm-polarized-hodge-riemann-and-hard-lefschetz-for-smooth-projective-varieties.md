---
id: thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties
kind: theorem
title: "Polarized Hodge and hard Lefschetz package for smooth projective varieties"
status: draft
origin: pipeline
dependency_level: 13
deps:
  - def-axiom-of-choice
  - lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures
  - lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds
  - lem-smooth-projective-analytification-has-rational-kahler-polarization
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties
  - thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Théorie de Hodge II, Publications mathématiques de l'IHÉS 40 (1971), 5-57; (2.2.1), printed p. 27 (compact Kähler, 'par exemple projective lisse')"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Theorem 18.5, Theorems 18.13-18.15"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
suppliers below. For a smooth projective complex variety $X$ of pure dimension
$n$ with a chosen ample line class $\ell\in H^2(X;\mathbb Q)$, its rational
cohomology is finite-dimensional pure Hodge in each degree, functorial for
pullback along holomorphic maps of the analytifications. Cup product has Hodge
type $(0,0)$ and $\ell$ has type $(1,1)$. For $0\le k\le n$ the
hard-Lefschetz maps $\ell^{n-k}:H^k\to H^{2n-k}$ are rational isomorphisms,
and for $k>n$ so are their inverses $\ell^{k-n}:H^{2n-k}\to H^k$; the rational
primitive summands satisfy the Hodge–Riemann positivity of
[[thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties]], and
the sign-adjusted full cohomology pairing is a rational polarization. Rational
Hodge substructures split orthogonally. The same absolute positivity and
hard-Lefschetz statements hold for real Kähler classes, and primitive kernels
vary continuously along Kähler families. Rational splittings and isomorphisms
persist after extension to any characteristic-zero field. This package does
not supply weak hyperplane Lefschetz, relative hard Lefschetz, singular
intersection-cohomology purity, or semisimplicity of arbitrary local systems.

## Facts & Assumptions

**Given:** A smooth projective complex variety $X$ of pure dimension $n$ and a
chosen ample line class $\ell\in H^2(X;\mathbb Q)$.

[F1] The analytification $X^{\mathrm{an}}$ is a compact Hausdorff
second-countable complex manifold of dimension $n$, and for every ample
invertible sheaf $A$ with $c_1(A)=\ell$ there is a smooth positive closed real
$(1,1)$-form representing $\rho(\ell)$
([[lem-smooth-projective-analytification-has-rational-kahler-polarization]]).

[F2] Every de Rham class on the compact Kähler manifold has a unique harmonic
representative, the cohomology is pure Hodge of weight $k$ in degree $k$,
pullback along holomorphic maps and cup product preserve Hodge type, and the
rational structure is that of the scalar comparison
([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]],
[[lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds]]).

[F3] Hard Lefschetz, the primitive decomposition
$H^k=\bigoplus_{r\ge\max(0,k-n)}L^rP^{k-2r}$, the identification
$P^k=\ker L^{n-k+1}$ in degrees $k\le n$, the type shift of primitive
components and the rationality of all this data at a rational class are those
of [[thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz]].

[F4] The Hodge–Riemann theorem supplies, for every degree, the positivity on
primitive summands, the sign-adjusted full-cohomology polarization, its
rationality at rational classes, the transport for degrees $>n$ with the Tate
shift, the same absolute statements for real Kähler classes, and the
continuous variation of primitive kernels along continuous families of Kähler
classes
([[thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties]]).

[F5] Polarized rational Hodge structures split orthogonally, short exact
sequences of polarizable structures split, every polarizable structure is a
finite direct sum of simple ones, and rational splitting and decomposition
identities persist under extension to any characteristic-zero field
([[lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures]]).

## Proof

1.1 By [F1] the analytification $X^{\mathrm{an}}$ is a compact Kähler manifold of dimension $n$, and the ample class $\ell$ is the real image of an integral class represented by a positive closed real $(1,1)$-form, so $\ell$ is a real Kähler class and has Hodge type $(1,1)$ in the Hodge structure of [F2]. By [F2] each rational cohomology space $H^k(X;\mathbb Q)$ is finite-dimensional and pure Hodge of weight $k$, pullback along holomorphic maps of analytifications is a morphism of Hodge structures because it preserves the type decomposition, and cup product has Hodge type $(0,0)$ since the wedge of forms of types $(p,q)$ and $(r,s)$ has type $(p+r,q+s)$; the rational structure and its scalar extensions are those of the comparison [F2]. [F1, F2, given, algebra]

2.1 Apply the hard-Lefschetz and primitive-decomposition theorem [F3] to $X^{\mathrm{an}}$ with the Kähler class $\ell$: the maps $\ell^{n-k}:H^k\to H^{2n-k}$ are isomorphisms for $0\le k\le n$, the primitive spaces are $P^k=\ker\ell^{n-k+1}$ in those degrees, the decomposition $H^k=\bigoplus_{r\ge\max(0,k-n)}\ell^rP^{k-2r}$ holds in every degree, a class of type $(p,q)$ has primitive components of type $(p-r,q-r)$, and all of this data is rational because $\ell$ is rational. For $k>n$ the complementary degree $2n-k$ satisfies $0\le 2n-k<n$, so hard Lefschetz in that degree gives that $\ell^{n-(2n-k)}=\ell^{k-n}:H^{2n-k}\to H^k$ is an isomorphism, the inverse of the displayed map; its inverse is likewise rational. [F3, step 1.1, given, algebra]

3.1 By the Hodge–Riemann theorem [F4] applied to the same compact Kähler manifold, the rational primitive summands of step 2.1 satisfy the displayed Hodge–Riemann positivity and the sign-adjusted full cohomology pairing is a rational polarization of $H^k$, with the transport from the complementary degree $\le n$ and the Tate shift in degrees $k>n$; the same absolute positivity and hard-Lefschetz statements hold for every real Kähler class, and the primitive kernels of each fixed degree vary continuously along a continuous family of Kähler classes [F4]. By the orthogonal-splitting lemma [F5] every rational sub-Hodge structure of $H^k$ splits off orthogonally with polarized complement, every short exact sequence of polarizable rational Hodge structures splits, and every polarizable structure is a finite direct sum of simple ones. The rationality statements of step 2.1 and of this step are rational linear identities (nonzero rational determinants, rational idempotent projections, rational matrices of the Lefschetz isomorphisms), so by [F5] they persist under extension of scalars to every characteristic-zero field. No supplier in [F3, F4, F5] asserts or uses weak hyperplane Lefschetz, relative hard Lefschetz, singular intersection-cohomology purity or semisimplicity of arbitrary local systems, so this package supplies none of them. [F3, F4, F5, step 2.1, given, algebra] ∎
