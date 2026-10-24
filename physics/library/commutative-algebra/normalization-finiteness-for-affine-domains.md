---
page: normalization-finiteness-for-affine-domains
title: "Normalization Finiteness for Affine Domains"
status: published
requires: [dedekind-domains-and-ideal-classes, noether-normalisation-and-nullstellensatz, algebraic-closure-embeddings-and-separability, affine-algebraic-sets-and-coordinate-rings, morphisms-local-rings-and-rational-maps-of-affine-varieties]
items: [lem-integral-closure-unchanged-across-an-integral-intermediate-domain, lem-finite-purely-inseparable-rational-extension-envelope, lem-polynomial-algebras-over-fields-are-integrally-closed, lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct, lem-integral-closure-in-a-purely-inseparable-rational-envelope-is-finite, lem-normal-extension-separable-over-maximal-purely-inseparable-subextension, thm-polynomial-algebras-over-fields-have-finite-integral-closures, thm-integral-closure-finite-finite-type-domain-over-field, cor-affine-normalization-is-finite, lem-finite-normalization-compatible-with-principal-opens]
examples: []
---

This page proves the finiteness of normalisation for affine domains: the
integral closure of a finitely generated domain over a field in its fraction
field is again a finite module over it, and for an irreducible affine variety
the corresponding normalisation map is finite and birational. It is the
commutative-algebra half of the pair whose examples page computes the
normalisations of the cusp, the node and a monomial curve.

The development is arranged so that the main theorem is reached by explicit
finite constructions. The first item records that an integral intermediate
domain never changes integral closure, and the second builds, for a finite
purely inseparable extension of a rational function field in characteristic
$p$, a finite Frobenius envelope $K'(x_1^{1/q},\ldots,x_d^{1/q})$ over a finite
purely inseparable constant extension $K'/K$; no algebraic closure and no
arbitrary-extension criterion is presupposed. Three local suppliers replace
published results whose transitive dependency closures reach a choice
principle: finite-variable polynomial algebras over a field are integrally
closed (Gauss content and the classical UFD argument), they are Noetherian by
an explicit finite-generator Hilbert basis step, and submodules of finite
modules over a Noetherian ring are finite by induction on the rank of a finite
free cover. The closure inside a purely inseparable envelope is then the
explicit polynomial ring $K'[x_1^{1/q},\ldots,x_d^{1/q}]$, finite over the base
by the monomial spanning set, and every intermediate closure is a submodule of
it.

The second half passes from the polynomial ring to arbitrary finite
extensions. A finite normal overfield is constructed as a splitting field of
finitely many minimal polynomials rather than inside a presupposed algebraic
closure; over the fixed field of its automorphism group it is finite Galois,
while the fixed field itself is finite purely inseparable over the base, with
the characteristic-zero case collapsing to equality. Splitting into a purely
inseparable step and a finite separable step, the integral closure of
$K[x_1,\ldots,x_d]$ in any finite extension of $K(x_1,\ldots,x_d)$ is exhibited
as a submodule of an explicit finite module, via a Vandermonde determinant and
Cramer's rule over the integral closure of the constant field. Noether
normalisation then reduces a finite-type domain over a field to a polynomial
subring, and the two closure descriptions are identified. The corollary states
its Axiom of Choice explicitly: it is spent only in passing through the
published classical affine dictionary from $k[X]$ and its normalisation to a
variety $Y$ and a finite birational morphism $Y\to X$, while the underlying
module-finiteness theorem is choice-free. The final item records that this
normalisation is compatible with principal localisation.
