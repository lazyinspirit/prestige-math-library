---
page: symplectic-manifolds-moser-stability-and-darboux-weinstein-theory
title: Symplectic Manifolds, Moser Stability, and Darboux–Weinstein Theory
status: draft
items: ["def-symplectic-vector-space","prop-symplectic-vector-spaces-have-even-dimension","def-symplectic-orthogonal-complement","prop-symplectic-double-orthogonal-and-dimension-identities","def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces","thm-equivalent-characterizations-of-lagrangian-subspaces","prop-symplectic-reduction-of-a-coisotropic-vector-subspace","prop-graphs-of-linear-maps-and-lagrangian-relations","def-symplectic-form-and-symplectic-manifold","thm-nondegeneracy-is-equivalent-to-a-nonvanishing-top-wedge","cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form","def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding","prop-products-and-opposites-of-symplectic-manifolds","def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds","prop-lagrangian-submanifolds-have-half-dimension","def-tautological-one-form-on-a-cotangent-bundle","lem-the-tautological-one-form-is-intrinsic-and-smooth","thm-the-canonical-cotangent-two-form-is-symplectic","prop-cotangent-lifts-are-symplectomorphisms","prop-graph-of-a-one-form-is-lagrangian-iff-the-one-form-is-closed","def-compatible-complex-structure-on-a-symplectic-vector-space","thm-compatible-complex-structures-exist-on-symplectic-vector-spaces","lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots","thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure","def-compatible-almost-kahler-metric","rem-compatible-almost-complex-structures-and-kahler-geometry","lem-moser-pullback-differentiation-equation","lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold","thm-moser-stability-theorem","thm-compact-support-moser-stability-on-a-noncompact-manifold","lem-relative-poincare-primitive-near-a-submanifold","thm-relative-moser-theorem","thm-darboux-theorem","cor-symplectic-manifolds-have-no-local-invariants-beyond-dimension","def-symplectic-normal-bundle-of-a-symplectic-submanifold","thm-symplectic-neighborhood-theorem","def-canonical-symplectic-model-near-the-zero-section-of-t-star-l","thm-weinstein-lagrangian-neighborhood-theorem","prop-lagrangian-neighborhood-germ-is-not-canonical","prop-characteristic-distribution-of-a-coisotropic-submanifold-is-involutive","thm-local-normal-form-near-a-coisotropic-submanifold","fs-every-nondegenerate-two-form-is-symplectic","fs-symplectic-manifolds-can-have-odd-dimension","fs-every-half-dimensional-submanifold-is-lagrangian","fs-the-canonical-cotangent-symplectic-form-is-d-lambda-under-the-library-convention","fs-cohomologous-symplectic-forms-on-a-noncompact-manifold-are-always-isotopic","fs-darboux-theorem-makes-all-symplectic-manifolds-globally-symplectomorphic"]
examples: []
---

Symplectic linear algebra begins with a nondegenerate alternating form. It
forces even dimension, exchanges subspaces with their symplectic orthogonals,
and distinguishes isotropic, coisotropic, symplectic, and Lagrangian
subspaces. The same pointwise notions define the corresponding submanifolds.
Nondegeneracy of a two-form is detected by its top wedge, while symplecticity
also requires closedness; together these facts give the canonical orientation
and volume form.

The cotangent convention is fixed throughout: the tautological one-form is
$\lambda$, and the canonical symplectic form is
$\omega_{\mathrm{can}}=-d\lambda=\sum_i dq^i\wedge dp_i$. Cotangent lifts
preserve it, and the graph of a one-form is Lagrangian exactly when the
one-form is closed. The cotangent-bundle branch explicitly retains the
countable-choice assumption inherited from the library's manifold structure
on tangent and cotangent bundles.

A compatible complex structure converts symplectic linear algebra into
positive-definite geometry. Fibrewise polar decomposition, including the
smooth positive square-root lemma, globalizes this construction to compatible
almost-complex structures under the stated countable-choice hypothesis.
Compatibility alone is almost-Kähler data; integrability is an additional
condition and is not silently assumed.

Moser's pullback equation is the engine for the stability results. On a
compact manifold, a smooth cohomologically constant symplectic path has a
smooth family of primitives and hence an isotopy. On a noncompact manifold
the replacement hypothesis is compact support; in the relative theorem the
primitive has vanishing first jet along the fixed submanifold. These
qualifications are essential, not technical afterthoughts.

Darboux's theorem follows from relative Moser and removes local invariants
beyond dimension. The symplectic-neighborhood, Lagrangian-neighborhood, and
coisotropic normal-form theorems retain the bundle data and closed-embedding
hypotheses needed to compare germs. Their conclusions are local: they neither
make the resulting germ canonical nor turn cohomological agreement into a
global symplectomorphism.
