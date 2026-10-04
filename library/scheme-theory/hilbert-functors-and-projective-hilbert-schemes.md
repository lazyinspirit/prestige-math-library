---
page: hilbert-functors-and-projective-hilbert-schemes
title: "Hilbert Functors and Projective Hilbert Schemes"
status: published
requires: [flat-smooth-and-etale-morphisms,
           quasi-coherent-and-coherent-sheaves-and-vector-bundles,
           proj-projective-schemes-twisting-sheaves-and-ampleness,
           cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes]
items: [def-castelnuovo-mumford-regularity,
        lem-hilbert-regularity-propagation,
        lem-hilbert-uniform-regularity-fixed-polynomial,
        lem-hilbert-relative-regularity-and-base-change,
        lem-hilbert-uniform-sections-after-flat-pullback,
        lem-hilbert-rank-flattening-finite-module,
        lem-hilbert-universal-scheme-theoretic-flattening,
        lem-hilbert-family-vanishing-locus,
        def-projective-morphism-coherent-bundle-convention,
        lem-hilbert-euler-polynomial-for-ample-polarization,
        def-hilbert-functor-of-flat-projective-subschemes,
        lem-hilbert-families-fpqc-descent,
        lem-hilbert-relative-grassmannian-quotients,
        lem-hilbert-projective-space-construction,
        lem-hilbert-valuative-flat-closure,
        lem-hilbert-proper-relative-ample-projectivity,
        lem-hilbert-regularity-independent-of-ambient-dimension,
        lem-hilbert-coherent-projective-bundle-construction,
        lem-hilbert-noetherian-base-fixed-polarization,
        thm-hilbert-scheme-represents-projective-flat-families,
        lem-universal-family-and-hilbert-polynomial-strata,
        lem-hilbert-polynomial-finite-scheme-length]
examples: []
---

For a locally Noetherian scheme $S$ and a projective finitely presented
$S$-scheme $X$ carrying a relatively ample invertible sheaf $L$, this page
defines the Hilbert functor $\operatorname{Hilb}_{X/S}$ and its
fixed-polynomial subfunctors $\operatorname{Hilb}^{P,L}_{X/S}$ on all
$S$-schemes: a test scheme $T$ is sent to the closed subschemes of
$X_T=X\times_ST$ that are finitely presented over $T$ and whose structure
sheaf is flat over $T$, with the fibres' Hilbert polynomials for $L$ counted
through the eventual Euler-characteristic condition.

The construction is assembled from boundedness, flattening and gluing layers.
Castelnuovo--Mumford regularity is defined, propagated to vanishing,
generation and multiplication, and bounded uniformly for kernels and
quotients of a fixed polarized ambient sheaf, independently of the ambient
dimension. Relative regularity then makes the direct images of high twists
finite locally free and compatible with arbitrary base change, which turns a
fixed twist presentation into a uniform description of sections after every
flat pullback. On the geometric side, rank strata of finite modules are
represented as locally closed subschemes and assemble into the universal
scheme-theoretic flattening by Hilbert polynomial; the universal vanishing
locus of a homomorphism into a flat family is the other closed input.

The main theorem represents every fixed-polynomial functor on all test
schemes by a proper finitely presented scheme with a global
coherent-projective-bundle embedding and a universal closed finitely
presented flat family, proves that a specified global projective embedding
induces an H-projective embedding, and identifies the full functor as the
coproduct over polynomials. It holds over an arbitrary locally Noetherian,
possibly non-quasi-compact base, uses arbitrary relatively ample
polarizations rather than only embedding twists, and is compatible with every
base change, including non-Noetherian targets. The companion page computes
the constant polynomial of finite points on $\mathbb P^1$ and exhibits the
nonflat dual-number family, a flat fat-point family with its base changes,
and the non-quasi-compactness of the full $\mathbb P^1$ Hilbert functor.
