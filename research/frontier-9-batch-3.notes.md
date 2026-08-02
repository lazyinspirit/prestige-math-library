# Frontier 9 batch 3 — source and authoring ledger

Scope: linear maps/rank-nullity and modules. This is draft-only authoring in
the linked `build-foundations-ab-pairs` worktree; no audit or publication state
is implied.

## Authored slice

- Linear maps: the definition, zero/negative/subtraction laws, kernel and image,
  and the subspace plus injectivity theorem.
- Modules: left/right modules, elementary zero and sign laws, submodules and
  their criterion, intersections and sums, generated/free/cyclic modules,
  simple modules, annihilators and torsion terminology, quotient modules, and
  module homomorphisms with kernel/image/cokernel terminology.
- The structural theorem that a module homomorphism has submodule kernel and
  image, and is injective exactly when its kernel is trivial.
- The first B-page witness: the standard $\mathbb Z$-module structure on
  $\mathbb Z/n$.
- Rank and nullity, including the finite-image well-definedness lemma and the
  rank-nullity theorem.
- The forward shift on $F^{\mathbb N}$, which makes the finite-dimensional
  hypothesis in later injective/surjective equivalences visibly necessary.
- The regular left module $_RR$, whose submodules are exactly the left ideals.

All statements in this slice are literature-derived. Proofs are
dependency-adapted (`ai-altered`); definitions use `proof: not-applicable`.
The B-page example is non-load-bearing and remains draft.

## Sources checked for this slice

- [Sheldon Axler, *Linear Algebra Done Right*, Chapter 3](https://linear.axler.net/LADR4e.pdf),
  for linear maps, kernels, images, and injectivity.
- [Kevin McGerty, *Algebra II: Rings and Modules*, Section 3](https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf),
  for modules, submodules, quotients, homomorphisms, and the residue-class
  example.
- [UCLA Algebra Notes](https://www.math.ucla.edu/~mattkowalski/documents/Algebra_Notes.pdf),
  for the finite-dimensional definitions of rank and nullity and the exact
  rank-nullity formula.

## Boundary and authoring obligations

- The submodule test retains its nonempty hypothesis. Intersections are stated
  for nonempty families; the empty-intersection convention is not silently
  used.
- The quotient-module definition explicitly defers well-definedness to the
  quotient-law theorem; it does not assume a quotient action is valid by name.
- Cokernel terminology is explicitly contingent on the proved fact that an
  image is a submodule.
- The rank-nullity proof explicitly constructs the image basis from the
  complement of a kernel basis. It does not assume the codomain is
  finite-dimensional, and its zero-dimensional boundary reads $0=0+0$.
- The forward shift uses all functions $\mathbb N\to F$, not the eventually
  zero subspace, and its missing preimage is detected at coordinate $0$.
- Quotient-vector-space universal properties, the second and third module
  isomorphism theorems, Hom structures, and direct sums remain to be authored
  with their own proof contracts.

## Deferred items removed from the Step-5 manifest

The manifest is now the exact authored core. The following earlier scaffold
promises have no item file in this slice and are therefore deferred rather than
left as missing in-flight content.

Linear-map A-page deferrals:

- `thm-linear-map-universal-property-of-a-basis`
- `cor-linear-map-dimension-inequalities`
- `def-vector-space-of-linear-maps`
- `thm-linear-map-space-and-bilinear-composition`
- `def-linear-isomorphism`
- `lem-inverse-of-bijective-linear-map`
- `thm-finite-dimensional-space-isomorphic-to-f-n`
- `thm-isomorphic-finite-vector-spaces-have-equal-dimension`
- `thm-equal-finite-dimension-injective-surjective-equivalence`
- `def-quotient-vector-space`
- `thm-quotient-vector-space-laws-and-projection`
- `thm-quotient-vector-space-universal-property`
- `thm-first-isomorphism-theorem-vector-spaces`
- `thm-dimension-of-a-quotient-space`

Linear-map B-page deferrals:

- `ex-projection-along-a-linear-complement`
- `ex-quotient-of-f-two-by-a-line`
- `ex-first-isomorphism-theorem-coordinate-sum-map`

Module A-page deferrals:

- `lem-generated-submodule-finite-sum-description`
- `thm-torsion-elements-form-submodule-over-domain`
- `thm-second-isomorphism-theorem-modules`
- `thm-third-isomorphism-theorem-modules`
- `thm-correspondence-theorem-modules`
- `thm-integers-and-fields-module-dictionary`
- `def-hom-module-and-endomorphism-ring`
- `thm-hom-additive-structure-and-endomorphism-ring`
- `def-products-direct-sums-and-internal-direct-sums-of-modules`
- `thm-direct-product-universal-property-modules`
- `thm-direct-sum-universal-property-modules`
- `thm-finite-direct-sum-product-comparison`
- `def-ideal-multiple-of-a-module`
- `thm-quotient-module-over-a-quotient-ring`
- `thm-cyclic-module-and-hom-from-r`
- `def-r-algebra`
- `thm-r-algebra-central-map-and-bilinear-product-agree`
- `fs-every-module-has-a-basis`
- `fs-submodule-of-finitely-generated-module-is-finitely-generated`
- `fs-torsion-elements-always-form-a-submodule`

Module B-page deferrals:

- `ex-hom-between-cyclic-z-modules`
- `ex-direct-sum-and-product-of-countably-many-copies`
- `cex-pointwise-scalars-on-hom-over-a-noncommutative-ring`
- `ex-simple-z-module-z-mod-p`
- `ex-endomorphism-ring-of-the-regular-module`

The polynomial differentiation and $F[x]$-module examples remain separately
deferred because `polynomial-rings-and-roots` still has no authored item spine;
neither appears as a load-bearing dependency here.
