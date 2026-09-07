# Step 7 whole-group reading — group **f**, run `frontier-33`

You are the group Alpha for batches **14**, **15**: 2 A/B pair(s), 4 page(s), 56 item(s).

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
| 14 | `category-o-finiteness-duality-and-blocks` | A | lie-theory | 510.007 | `homomorphisms-between-verma-modules-and-linkage-examples`, `chain-complexes-and-homology` |
| 14 | `category-o-finiteness-duality-and-blocks-examples` | B | lie-theory | 510.008 | `category-o-finiteness-duality-and-blocks` |
| 15 | `clifford-theory-over-normal-subgroups` | A | representation-theory | 510.037 | `schur-indices-and-fields-of-definition-examples` |
| 15 | `clifford-theory-over-normal-subgroups-examples` | B | representation-theory | 510.038 | `clifford-theory-over-normal-subgroups` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `category-o-finiteness-duality-and-blocks` — Category O Finiteness Duality and Blocks (31 item(s))

- `def-bgg-category-o` · definition — The classical BGG category O
- `lem-enveloping-algebra-is-left-and-right-noetherian` · lemma — Noetherianity of the enveloping algebra
- `lem-finite-b-stable-generators-and-weight-flags-in-category-o` · lemma — Finite Borel-stable generators and weight flags
- `prop-equivalent-support-description-of-category-o` · proposition — The support description of category O with finite generation
- `prop-verma-and-finite-dimensional-modules-lie-in-category-o` · proposition — Verma and finite-dimensional weight modules belong to O
- `thm-category-o-is-abelian-and-extension-closed` · theorem — Category O is abelian and extension closed among weight modules
- `lem-n-plus-invariants-exist-in-every-nonzero-o-module` · lemma — A nonzero O-object has a highest-weight vector
- `thm-simple-objects-of-category-o-are-highest-weight-modules` · theorem — The simple objects of O
- `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation` · lemma — Finite filtrations by highest-weight quotients
- `lem-the-center-has-finite-dimensional-image-on-an-o-object` · lemma — The center has finite-dimensional image on each O-object
- `def-generalized-central-character-subcategory-of-o` · definition — Generalized central-character subcategories
- `lem-generalized-central-character-submodules-are-direct-summands` · lemma — Generalized central-character summands
- `thm-category-o-decomposes-by-generalized-central-character` · theorem — Generalized central-character decomposition of O
- `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients` · lemma — Finite weight-space detection of subquotients
- `thm-every-category-o-object-has-finite-length` · theorem — Every object of O has finite length
- `prop-hom-spaces-in-category-o-are-finite-dimensional` · proposition — Finite-dimensional Hom spaces in O
- `def-restricted-dual-of-a-weight-module` · definition — Restricted Chevalley dual
- `lem-simple-highest-weight-modules-are-restricted-self-dual` · lemma — Restricted self-duality of simple highest-weight modules
- `prop-restricted-duality-is-an-exact-involution-on-category-o` · proposition — Restricted duality is exact and involutive on O
- `def-standard-and-costandard-objects-in-category-o` · definition — Standard and costandard objects
- `prop-costandard-objects-have-simple-socles` · proposition — The simple socle of a costandard object
- `def-integral-weyl-group-of-a-weight` · definition — The integral Weyl group of a weight
- `lem-integral-reflection-orbits-are-linkage-equivalence-classes` · lemma — Integral reflection linkage is an equivalence relation
- `lem-extensions-between-distinct-o-linkage-classes-split` · lemma — Simple extensions cannot cross linkage classes
- `lem-o-modules-split-across-separated-simple-classes` · lemma — Splitting finite-length modules across separated simple classes
- `thm-central-character-summands-split-into-linkage-blocks` · theorem — Central-character summands refine into linkage blocks
- `cor-restricted-duality-preserves-linkage-blocks` · corollary — Duality preserves linkage blocks and block orthogonality
- `lem-verma-self-extensions-in-category-o-split` · lemma — Verma self-extensions in O split
- `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o` · proposition — Finite-dimensional tensoring preserves O
- `def-grothendieck-group-and-character-of-category-o` · definition — The Grothendieck group and character of O
- `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases` · proposition — Simple and standard bases of K0(O)

### `category-o-finiteness-duality-and-blocks-examples` — Category O Finiteness Duality and Blocks — Examples (8 item(s))

- `ex-the-regular-integral-sl2-block-of-category-o` · example — The regular integral sl2 block
- `ex-a-generic-sl2-block-is-semisimple` · example — Nonintegral sl2 central characters split into two simple blocks
- `ex-a-singular-a2-central-character-summand` · example — A singular integral A2 central-character summand
- `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o` · counterexample — The full algebraic Verma dual is too large
- `cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o` · counterexample — Finite weight spaces and bounded support do not replace finite generation
- `cex-a-weight-module-with-unbounded-upward-support-is-not-in-o` · counterexample — Finite weight spaces alone do not give category O
- `cex-category-o-is-not-extension-closed-in-all-g-modules` · counterexample — An ambient extension can leave category O
- `cex-tensor-products-of-two-verma-modules-need-not-lie-in-o` · counterexample — O is not closed under arbitrary tensor products

### `clifford-theory-over-normal-subgroups` — Clifford Theory over Normal Subgroups (14 item(s))

- `def-conjugate-representation-and-inertia-group` · definition — Inertia group and characters lying above a normal type
- `lem-normal-isotypical-components-are-permuted-by-translation` · lemma — Translation permutes normal isotypical components
- `lem-normal-restriction-constituents-form-one-conjugacy-orbit` · lemma — Normal restriction has one orbit of constituents
- `thm-clifford-homogeneous-restriction-formula` · theorem — Clifford restriction formula
- `def-clifford-ramification-index` · definition — Clifford ramification index
- `lem-normal-isotypical-component-is-inertia-stable` · lemma — The stabilizer of a nonzero isotypical component
- `lem-induction-from-the-inertia-group-recovers-the-module` · lemma — Reconstruction from the inertia component
- `lem-inducing-an-irreducible-inertia-module-is-irreducible` · lemma — Induction of an inertia constituent is irreducible
- `thm-clifford-correspondence` · theorem — Clifford correspondence
- `cor-normal-subgroup-induction-irreducibility-criterion` · corollary — Normal subgroup induction criterion
- `cor-clifford-ramification-squares-sum-to-inertia-index` · corollary — Ramification indices account for the inertia quotient
- `def-extension-of-an-irreducible-normal-subgroup-representation` · definition — An extension of a normal subgroup representation
- `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces` · lemma — Isotypical evaluation and multiplicity subspaces
- `thm-gallagher-correspondence-for-an-extendible-character` · theorem — Gallagher correspondence for an extendible type

### `clifford-theory-over-normal-subgroups-examples` — Clifford Theory over Normal Subgroups — Examples (3 item(s))

- `ex-clifford-theory-for-s3-over-a3` · example — Clifford correspondence for A3 in S3
- `ex-gallagher-correspondence-for-a-direct-product` · example — Gallagher correspondence for a direct product
- `ex-clifford-boundaries-n-equals-one-and-n-equals-g` · example — Boundary normal subgroups in Clifford theory

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-33`

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
