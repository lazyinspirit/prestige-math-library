# Step 6 Alpha group reader — read-only digest — group **f**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **7**, **8**, **28**: 3 A/B pair(s), 6 page(s), 85 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `projectives-standard-filtrations-and-bgg-reciprocity` | A | lie-theory | 510.009 | `category-o-finiteness-duality-and-blocks`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `projective-and-injective-resolutions`, `ext-and-balanced-resolutions`, `yoneda-extensions-and-homological-dimension`, `modular-representations-and-projective-covers` |
| 7 | `projectives-standard-filtrations-and-bgg-reciprocity-examples` | B | lie-theory | 510.01 | `projectives-standard-filtrations-and-bgg-reciprocity` |
| 8 | `the-bgg-resolution` | A | lie-theory | 510.011 | `homomorphisms-between-verma-modules-and-linkage`, `finite-weyl-invariants-bruhat-and-kostant-harmonics`, `chain-complexes-and-homology`, `category-o-finiteness-duality-and-blocks`, `tor-flatness-and-global-dimension` |
| 8 | `the-bgg-resolution-examples` | B | lie-theory | 510.012 | `the-bgg-resolution` |
| 28 | `coherent-duality-on-projective-cohen-macaulay-schemes` | A | algebraic-geometry | 903 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `sheaf-cohomology-cech-cohomology-and-comparison`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `derived-categories`, `ext-and-balanced-resolutions`, `smooth-projective-serre-duality-and-flag-variety-line-bundles` |
| 28 | `coherent-duality-on-projective-cohen-macaulay-schemes-examples` | B | algebraic-geometry | 904 | `coherent-duality-on-projective-cohen-macaulay-schemes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `projectives-standard-filtrations-and-bgg-reciprocity` — Projectives Standard Filtrations and Bgg Reciprocity (29 item(s))

- `def-truncated-category-o-at-a-finite-weight-ideal` · definition — Truncation at a finite downward-closed ideal of a linkage class
- `lem-maximal-label-vectors-in-a-finite-truncation-are-singular` · lemma — Weight-lambda vectors are singular at a maximal label
- `lem-maximal-verma-is-projective-in-a-finite-truncation` · lemma — A maximal-label Verma is projective in its truncation
- `lem-dominant-weights-are-maxima-of-their-weyl-orbits` · lemma — Dominant integral weights are maxima of their Weyl orbits
- `lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective` · lemma — Finite-dimensional tensoring preserves projectives in category O
- `lem-block-projection-preserves-projectives` · lemma — Exact projections onto linkage blocks preserve projectives
- `lem-finite-dimensional-tensors-reach-every-block-simple` · lemma — Finite-dimensional tensoring reaches every simple of a linkage class
- `lem-finite-length-objects-decompose-into-indecomposables` · lemma — Fitting decomposition in a finite-length abelian category
- `prop-projective-covers-in-o-are-indecomposable-and-unique` · proposition — Projective covers in O are indecomposable and unique
- `thm-category-o-has-enough-projectives` · theorem — Category O has enough projectives
- `lem-hom-from-projectives-counts-simple-composition-factors` · lemma — Hom from a projective counts simple composition factors
- `def-verma-flag-and-its-multiplicities` · definition — Finite Verma flags and their multiplicities
- `lem-verma-flag-multiplicities-are-independent-of-the-flag` · lemma — Verma-flag multiplicities are independent of the flag
- `lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags` · lemma — Finite-dimensional tensoring preserves Verma flags
- `lem-maximal-weight-verma-peels-off-a-standard-filtration` · lemma — Peeling a maximal-weight Verma from a standard filtration
- `lem-direct-summands-of-verma-filtered-objects-are-verma-filtered` · lemma — Direct summands of Verma-filtered objects are Verma-filtered
- `thm-projectives-in-category-o-have-verma-flags` · theorem — Projectives in category O have finite Verma flags
- `lem-standard-costandard-hom-and-ext-vanishing` · lemma — Standard-costandard Hom and Ext-one orthogonality
- `lem-hom-to-costandards-counts-verma-flag-factors` · lemma — Hom to costandards counts Verma-flag factors
- `thm-bgg-reciprocity` · theorem — BGG reciprocity
- `cor-projective-standard-labels-lie-above-the-head` · corollary — The triangular restriction on projective Verma flags
- `cor-injectives-have-costandard-filtrations` · corollary — Injectives have costandard filtrations
- `def-dot-action-facets-and-single-wall-translation-data` · definition — Dot-Weyl facets and single-wall translation data
- `def-translation-functor-between-o-blocks` · definition — Translation functors by tensoring and projection
- `prop-translation-functors-are-exact-and-biadjoint-across-a-wall` · proposition — Translation functors are exact and biadjoint
- `lem-weight-norm-bound-for-finite-dimensional-simple-modules` · lemma — Weights of a finite-dimensional simple module lie in the norm ball
- `lem-dominant-norm-distance-comparison` · lemma — A dominant vector minimises its distance to a dominant weight
- `lem-single-wall-tensor-weight-exclusion` · lemma — The single-wall tensor-weight exclusion lemma
- `thm-translation-to-and-from-a-wall-on-standard-modules` · theorem — Translation to and from a single wall on standard modules

### `projectives-standard-filtrations-and-bgg-reciprocity-examples` — Projectives Standard Filtrations and Bgg Reciprocity — Examples (7 item(s))

- `ex-projective-covers-in-the-regular-sl2-block` · example — The two projectives in the principal sl2 block
- `ex-bgg-reciprocity-matrix-for-sl2` · example — The sl2 reciprocity matrices
- `ex-translation-through-the-sl2-wall` · example — Translation through the sl2 wall
- `cex-a-verma-module-need-not-be-projective-in-the-whole-block` · counterexample — A Verma module need not be projective in its block
- `cex-a-projective-verma-flag-need-not-split` · counterexample — A projective Verma flag need not split
- `ex-truncation-projectivity-does-not-mean-block-projectivity` · example — The same Verma in two ambient categories
- `cex-standard-filtrations-are-not-closed-under-quotients` · counterexample — Verma filtrations are not closed under quotients

### `the-bgg-resolution` — The Bgg Resolution (30 item(s))

- `lem-positive-root-pairings-of-a-dominant-integral-weight` · lemma — Positive coroot pairings of a dominant integral weight
- `lem-bruhat-covers-are-reflection-covers` · lemma — Bruhat covers are right multiplication by positive-root reflections
- `def-bgg-bruhat-verma-sum-in-degree-k` · definition — The Bruhat graph and the BGG Verma sum in degree k
- `lem-dominant-integral-dot-translates-embed-in-the-verma-module` · lemma — Dominant integral dot translates embed canonically in the Verma module
- `lem-bruhat-covers-give-unique-verma-embeddings` · lemma — Bruhat covers give canonical Verma embeddings, and composites are inclusions
- `lem-bruhat-rank-two-intervals-are-diamonds` · lemma — Bruhat intervals of rank two are diamonds
- `def-verma-type-of-a-module-with-a-standard-filtration` · definition — Type of a module with a Verma filtration
- `lem-induced-modules-from-finite-dimensional-b-modules-have-type-the-weights` · lemma — Induced modules from finite-dimensional B-modules have type their weights
- `lem-tensoring-a-verma-module-by-a-finite-dimensional-module-shifts-types` · lemma — Tensoring a Verma module by a finite-dimensional module shifts the type
- `lem-central-character-cuts-of-a-typed-module-are-typed` · lemma — Central-character cuts of a typed module are typed by the matching weights
- `lem-weight-subsets-with-equal-root-sums-are-unique` · lemma — Weight subsets with equal root sums are unique
- `def-standard-induced-resolution-of-the-trivial-module` · definition — The standard induced resolution of the trivial module
- `thm-standard-induced-resolution-is-exact` · theorem — The standard induced complex is a resolution of the trivial module
- `lem-compatible-signs-exist-on-the-bruhat-graph` · lemma — Compatible signs exist on the Bruhat graph
- `def-bgg-differential-from-signed-verma-maps` · definition — The BGG differential from signed Verma maps
- `prop-the-bgg-differential-squares-to-zero` · proposition — The BGG differential squares to zero
- `lem-the-bgg-augmentation-has-image-the-simple-module` · lemma — The augmentation kernel is the sum of the simple-reflection Verma submodules
- `lem-weak-bgg-base-case-for-the-trivial-module` · lemma — Weak BGG resolution of the trivial module
- `thm-weak-bgg-resolution` · theorem — Weak BGG resolution
- `lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules` · lemma — Surjectivity modulo n-minus for free weight-generated modules (BGG 10.5)
- `lem-jordan-holder-factors-of-verma-modules-lie-above-the-head` · lemma — Jordan-Holder factors of Verma modules dominate the head (BGG 8.12)
- `lem-kernel-generators-for-the-weak-bgg-complex` · lemma — Composition factors of the BGG kernel lie above the degree (BGG 10.6a)
- `lem-nonzero-highest-weight-images-survive-modulo-n-minus` · lemma — Nonzero highest-weight images survive modulo n-minus (BGG 10.6b)
- `lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential` · lemma — The BGG differential is injective modulo n-minus onto the kernel (BGG 10.6)
- `lem-verma-filtered-objects-are-acyclic-for-n-minus-coinvariants` · lemma — Verma-filtered objects are acyclic for n-minus coinvariants
- `lem-tor-with-the-trivial-module-is-computed-by-the-weak-bgg-resolution` · lemma — Tor with the trivial module is computed by the weak BGG resolution
- `lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term` · lemma — Dimension of the kernel modulo n-minus equals the next term (BGG 10.7)
- `thm-bgg-resolution-of-a-finite-dimensional-simple-module` · theorem — The BGG resolution of a finite-dimensional simple module
- `cor-bgg-euler-character-identity` · corollary — The Euler-character identity for a finite-dimensional simple module
- `cor-bgg-resolution-has-length-the-number-of-positive-roots` · corollary — The BGG resolution has length the number of positive roots

### `the-bgg-resolution-examples` — The Bgg Resolution — Examples (5 item(s))

- `ex-the-sl2-bgg-resolution` · example — The BGG resolution for sl2
- `ex-the-a2-bgg-resolution-with-six-verma-summands` · example — The A2 BGG resolution with six Verma summands
- `ex-sign-cancellation-in-an-a2-bruhat-diamond` · example — Sign cancellation in an A2 Bruhat diamond
- `cex-unsigned-bruhat-edge-sums-need-not-square-to-zero` · counterexample — Unsigned Bruhat edge sums need not square to zero
- `cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight` · counterexample — The BGG complex cannot be used unchanged at a singular weight

### `coherent-duality-on-projective-cohen-macaulay-schemes` — Coherent Duality on Projective Cohen-Macaulay Schemes (11 item(s))

- `def-dualizing-complex-on-projective-cm-scheme` · definition — Dualizing complexes and the normalized dualizing sheaf on a projective CM scheme
- `lem-finite-closed-immersion-derived-coinduction-adjunction` · lemma — Derived adjunction for finite rings and closed immersions
- `lem-regular-quotient-dualizing-complex-and-biduality` · lemma — Dualizing complexes and coherent biduality for regular-ring quotients
- `lem-cm-quotient-of-regular-local-ring-ext-concentration` · lemma — Ext concentration for a Cohen-Macaulay quotient of a regular local ring
- `lem-projective-embedding-dualizing-complex-existence` · lemma — Existence and biduality from a projective embedding
- `lem-projective-space-derived-coherent-duality` · lemma — Derived coherent duality on projective space
- `lem-projective-dualizing-complex-trace-and-embedding-independence` · lemma — Normalized trace and independence of a projective embedding
- `lem-projective-pure-cm-dualizing-complex-concentration` · lemma — Concentration of the projective dualizing complex on a pure CM scheme
- `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme` · theorem — Serre duality for coherent sheaves on a projective Cohen-Macaulay scheme
- `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case` · remark — The smooth projective locally free theorem is the special case
- `rem-curve-residue-duality-is-the-dimension-one-case` · remark — Curve duality and its residue normalization in dimension one

### `coherent-duality-on-projective-cohen-macaulay-schemes-examples` — Coherent Duality on Projective Cohen-Macaulay Schemes — Examples (3 item(s))

- `ex-serre-duality-on-a-singular-projective-cm-curve` · example — Coherent duality on a singular plane cubic
- `ex-serre-duality-on-a-smooth-projective-surface` · example — Surface duality for twists and a skyscraper on the projective plane
- `cex-serre-duality-without-properness` · counterexample — The affine line disproves the proper duality formula without properness

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 Alpha group reader — read-only digest, `frontier-38-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
