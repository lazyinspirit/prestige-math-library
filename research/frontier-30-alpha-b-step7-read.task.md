# Step 7 whole-group reading — group **b**, run `frontier-30`

You are the group Alpha for batches **2**, **12**, **13**: 3 A/B pair(s), 6 page(s), 103 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `zariski-topology-on-prime-spectra` | A | commutative-algebra | 256.001 | `henselian-rings-and-equicharacteristic-cohen-structure-examples`, `topological-spaces-and-continuity`, `compactness` |
| 2 | `zariski-topology-on-prime-spectra-examples` | B | commutative-algebra | 256.002 | `zariski-topology-on-prime-spectra` |
| 12 | `morphisms-local-rings-and-rational-maps-of-affine-varieties` | A | algebraic-geometry | 366.043 | `affine-algebraic-sets-and-coordinate-rings-examples` |
| 12 | `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` | B | algebraic-geometry | 366.044 | `morphisms-local-rings-and-rational-maps-of-affine-varieties` |
| 13 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback` | A | scheme-theory | 366.059 | `presheaves-sheaves-stalks-and-sheafification-examples` |
| 13 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples` | B | scheme-theory | 366.06 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `zariski-topology-on-prime-spectra` — Zariski Topology on Prime Spectra (28 item(s))

- `def-irreducible-topological-space-and-subset` · definition — Irreducible topological spaces and irreducible subsets in the subspace topology
- `def-noetherian-topological-space` · definition — Noetherian topological spaces via ACC on opens or DCC on closed subsets
- `def-specialisation-and-generic-point` · definition — Specialisations, generalisations, and generic points
- `lem-zariski-closed-set-axioms` · lemma — The vanishing sets define the Zariski topology on the prime spectrum
- `lem-every-zariski-closed-set-has-a-radical-defining-ideal` · lemma — Every Zariski-closed subset has a unique radical defining ideal
- `lem-distinguished-opens-cover-every-open` · lemma — Every Zariski-open subset is a union of distinguished opens
- `lem-distinguished-open-refinement-at-a-point` · lemma — Every point of a Zariski-open set has a distinguished-open neighbourhood inside it
- `cor-spectrum-is-a-contravariant-topological-functor` · corollary — The prime-spectrum construction is a contravariant functor to topological spaces
- `lem-quotient-spectrum-map-is-closed` · lemma — The spectrum of a quotient is a closed subspace
- `lem-localisation-spectrum-map-homeomorphism-onto-image` · lemma — The spectrum of a localisation is the subspace of primes disjoint from the denominator set
- `cor-principal-localisation-spectrum-is-distinguished-open` · corollary — The spectrum of a principal localisation is the distinguished open D(f)
- `lem-spectrum-compactness-open-cover-to-unit-ideal` · lemma — A distinguished-open cover of the spectrum forces the covering ideal to be the unit ideal
- `lem-spectrum-compactness-unit-expression-finite-subcover` · lemma — A finite unit-ideal expression yields a finite distinguished-open subcover
- `thm-prime-spectrum-is-compact` · theorem — The prime spectrum is compact in the library's non-Hausdorff sense
- `cor-every-distinguished-open-is-compact` · corollary — Every distinguished open subset is compact
- `lem-closure-of-a-point-is-its-vanishing-set` · lemma — The closure of a prime is its vanishing set
- `cor-specialisation-order-is-prime-inclusion` · corollary — Specialisation in a prime spectrum is reverse inclusion
- `cor-spectrum-is-t-zero` · corollary — Distinct primes have distinct closures, so the spectrum is T0
- `cor-closed-points-of-spectrum-are-maximal-ideals` · corollary — The closed points of the prime spectrum are exactly the maximal ideals
- `thm-irreducible-closed-subsets-and-prime-ideals` · theorem — A Zariski-closed subset is irreducible exactly when its radical defining ideal is prime, and then it has a unique generic point
- `thm-irreducible-components-and-minimal-primes` · theorem — Irreducible components of the spectrum correspond to minimal prime ideals
- `thm-noetherian-ring-has-noetherian-spectrum` · theorem — The spectrum of a Noetherian ring is a Noetherian topological space
- `cor-noetherian-spectrum-has-finitely-many-irreducible-components` · corollary — A Noetherian ring has only finitely many irreducible components in its spectrum
- `lem-clopen-subset-gives-idempotent-decomposition` · lemma — A clopen decomposition of the spectrum comes from a nontrivial idempotent
- `lem-idempotent-gives-clopen-spectrum-partition` · lemma — An idempotent partitions the spectrum into complementary clopen subsets
- `cor-spectrum-connected-iff-no-nontrivial-idempotents` · corollary — The prime spectrum is connected exactly when the ring has no idempotents other than zero and one
- `lem-support-is-specialisation-closed` · lemma — The support of any module is closed under specialisation
- `cor-closed-points-dense-in-affine-spectra` · corollary — In a finite-type algebra over a field, closed points are dense in every closed subset of the spectrum

### `zariski-topology-on-prime-spectra-examples` — Zariski Topology on Prime Spectra — Examples (6 item(s))

- `ex-distinguished-open-finite-subcover-from-unit-expression` · example — A unit-ideal expression gives a finite distinguished-open cover
- `ex-zariski-spectrum-of-the-integers` · example — The spectrum of the integers has one generic point, closed points (p), and basic opens D(n)
- `ex-zariski-spectrum-not-hausdorff` · example — A generic point and a distinct specialization cannot be separated in the Zariski topology
- `ex-specialisation-poset-of-a-small-spectrum` · example — A local PID gives a two-point spectrum with one generic point and one closed point
- `ex-idempotent-clopen-product-ring` · example — Coordinate idempotents split the spectrum of a product ring into two clopen pieces
- `ex-nonclosed-support-without-finiteness` · example — An infinitely generated module can have specialization-closed support that is not Zariski closed

### `morphisms-local-rings-and-rational-maps-of-affine-varieties` — Morphisms Local Rings and Rational Maps of Affine Varieties (23 item(s))

- `def-regular-function-classical-variety` · definition — Regular functions on open subsets of a classical affine variety
- `lem-regular-functions-form-sheaf-classical` · lemma — Regular functions on a classical affine variety form a sheaf
- `thm-global-regular-functions-affine-variety-coordinate-ring` · theorem — Global regular functions on a classical affine variety are its coordinate ring
- `def-morphism-classical-varieties` · definition — Morphisms of classical affine varieties
- `def-regular-map-image-and-fibre-classical` · definition — Images and fibres of a regular map
- `thm-affine-morphisms-coordinate-ring-anti-equivalence` · theorem — Affine morphisms are contravariantly equivalent to coordinate-ring homomorphisms
- `cor-affine-algebraic-set-coordinate-duality-complete` · corollary — The affine algebraic-set dictionary is contravariantly full and faithful on classical affine varieties
- `lem-morphism-equality-on-dense-open` · lemma — Morphisms from an irreducible affine variety to an affine variety are determined by a dense open subset
- `def-germ-and-local-ring-classical-variety` · definition — Germs of regular functions and the local ring at a point of a classical affine variety
- `thm-local-ring-affine-variety-localization` · theorem — The local ring at a point of an affine variety is the localization at its maximal ideal
- `def-residue-field-classical-point` · definition — The residue field at a classical point
- `def-affine-open-subset-classical-variety` · definition — Affine open subsets of a classical affine variety
- `def-function-field-variety` · definition — The function field of an irreducible classical affine variety
- `thm-function-field-independent-affine-open` · theorem — All nonempty affine opens of an irreducible affine variety have the same function field
- `def-rational-function-regular-at-point` · definition — A rational function is regular at a point exactly when it lies in the local ring
- `def-rational-map-varieties` · definition — Rational maps between irreducible classical affine varieties
- `lem-rational-map-equivalence-transitive` · lemma — The rational-map equivalence relation is transitive
- `def-domain-of-definition-rational-map` · definition — The maximal domain of definition of a rational map to an affine variety
- `def-dominant-morphism-and-rational-map` · definition — Dominant morphisms and dominant rational maps
- `lem-dominant-map-pullback-function-fields` · lemma — Dominant maps pull back function fields functorially
- `thm-rational-maps-to-affine-variety-function-field` · theorem — Dominant rational maps to an affine variety correspond to injective homomorphisms of function fields
- `def-birational-equivalence-varieties` · definition — Birational maps and birational equivalence of classical affine varieties
- `thm-birational-equivalence-function-fields` · theorem — Irreducible affine varieties are birational exactly when their function fields are isomorphic

### `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` — Morphisms Local Rings and Rational Maps of Affine Varieties — Examples (7 item(s))

- `ex-polynomial-map-coordinate-pullback` · example — A polynomial map and its pullback on coordinate rings
- `ex-hyperbola-is-multiplicative-group-variety` · example — The hyperbola xy = 1 is isomorphic to the punctured affine line
- `ex-rational-parametrization-circle-conic` · example — When char(k) is not 2, the affine circle x^2 + y^2 = 1 is birational to the affine line
- `cex-rational-map-with-indeterminacy` · counterexample — The rational map (x,y) mapsto y / x on the affine plane is undefined along x = 0
- `cex-birational-does-not-imply-isomorphic` · counterexample — The affine line and its punctured principal open are birational but not isomorphic
- `ex-local-ring-affine-line-at-origin` · example — The local ring of the affine line at the origin consists of rational functions defined at the origin
- `cex-regular-bijection-not-isomorphism-cusp` · counterexample — The cusp parametrization t mapsto (t^2,t^3) is bijective but not an isomorphism

### `sheaf-operations-exactness-ringed-spaces-and-module-pullback` — Sheaf Operations Exactness Ringed Spaces and Module Pullback (30 item(s))

- `def-direct-image-sheaf` · definition — Direct image of a sheaf along a continuous map
- `lem-direct-image-is-sheaf` · lemma — Direct image preserves sheaves and objectwise algebraic structure
- `def-inverse-image-presheaf-and-sheaf` · definition — Inverse image presheaf and inverse image sheaf
- `thm-inverse-direct-image-adjunction` · theorem — Inverse image is left adjoint to direct image on sheaves
- `lem-stalk-inverse-image-sheaf` · lemma — The stalk of an inverse image sheaf is the stalk over the image point
- `def-restriction-sheaf-open-subspace` · definition — Restriction of a sheaf to an open subspace
- `def-extension-by-zero-abelian-sheaf` · definition — Extension by zero for abelian sheaves on an open subspace
- `def-skyscraper-sheaf-abelian-group` · definition — A skyscraper sheaf of abelian groups at a point
- `def-kernel-cokernel-image-sheaves` · definition — Kernel sheaves are objectwise, while cokernels and images are sheafified
- `thm-abelian-sheaves-form-abelian-category` · theorem — Sheaves of abelian groups, and likewise sheaves of modules on a ringed space, form abelian categories
- `def-exact-sequence-sheaves` · definition — Exact sequences of sheaves
- `thm-exactness-of-sheaves-stalkwise` · theorem — A sequence of abelian sheaves is exact exactly when it is exact on every stalk
- `lem-global-sections-left-exact` · lemma — Global sections are left exact but need not preserve epimorphisms
- `thm-extension-by-zero-adjunction-exactness` · theorem — Extension by zero is left adjoint to restriction and is exact on abelian sheaves
- `def-ringed-space` · definition — A ringed space
- `def-morphism-ringed-spaces` · definition — Morphisms of ringed spaces
- `def-locally-ringed-space` · definition — A locally ringed space
- `def-morphism-locally-ringed-spaces` · definition — Morphisms of locally ringed spaces
- `lem-local-homomorphism-residue-field-map` · lemma — A local morphism of stalks induces a residue-field map
- `def-module-on-ringed-space` · definition — Modules on a ringed space
- `def-sheaf-tensor-product` · definition — Tensor product of sheaves of modules
- `lem-stalk-tensor-product` · lemma — The stalk of a tensor product sheaf is the tensor product of the stalks
- `def-sheaf-hom` · definition — The internal Hom sheaf of two module sheaves
- `def-pullback-module-ringed-spaces` · definition — Pullback of a module along a morphism of ringed spaces
- `thm-pullback-pushforward-module-adjunction` · theorem — Pullback of modules is left adjoint to pushforward
- `lem-pullback-modules-right-exact` · lemma — Pullback of modules is right exact, and flat stalk maps make it exact
- `def-gluing-datum-sheaves` · definition — A gluing datum for sheaves on an open cover
- `thm-gluing-sheaves` · theorem — Compatible local sheaves glue uniquely up to unique isomorphism
- `thm-gluing-ringed-and-locally-ringed-spaces` · theorem — Compatible open pieces of ringed or locally ringed spaces glue
- `rem-inverse-image-versus-pullback` · remark — Inverse image of sheaves and pullback of modules are not the same construction

### `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples` — Sheaf Operations Exactness Ringed Spaces and Module Pullback — Examples (9 item(s))

- `ex-direct-image-open-immersion` · example — Direct image along an open immersion is restriction-compatible intersection
- `cex-extension-by-zero-differs-direct-image` · counterexample — Extension by zero can be strictly smaller than direct image on a punctured interval
- `ex-skyscraper-sheaf-exact-sequence` · example — A short exact sequence of abelian groups gives a short exact sequence of skyscraper sheaves
- `cex-global-sections-not-right-exact` · counterexample — Global sections need not preserve surjections
- `ex-ringed-space-continuous-functions` · example — Continuous real-valued functions make a space into a locally ringed space
- `cex-ringed-space-map-not-locally-ringed` · counterexample — A morphism of ringed spaces need not be a morphism of locally ringed spaces
- `ex-pullback-free-module` · example — Pullback carries a free module to the corresponding free module
- `ex-glue-line-bundle-transition-functions` · example — Units satisfying the cocycle law glue local rank-one free modules into a line bundle
- `cex-presheaf-cokernel-needs-sheafification` · counterexample — The objectwise cokernel presheaf can fail to be a sheaf

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-30`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
