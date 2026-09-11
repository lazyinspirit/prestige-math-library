# Step 6 whole-group reading — group **h**, run `phase-2-next-20`

You are the group Alpha for batches **13**, **14**: 3 A/B pair(s), 6 page(s), 84 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
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
| 13 | `the-constructible-hierarchy-and-inner-models` | A | foundations | 675 | `reflection-absoluteness-and-elementary-submodels` |
| 13 | `the-constructible-hierarchy-and-inner-models-examples` | B | foundations | 676 | `the-constructible-hierarchy-and-inner-models` |
| 13 | `forcing-orders-names-and-generic-extensions` | A | foundations | 679 | `reflection-absoluteness-and-elementary-submodels`, `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` |
| 13 | `forcing-orders-names-and-generic-extensions-examples` | B | foundations | 680 | `forcing-orders-names-and-generic-extensions` |
| 14 | `large-cardinals-measures-and-elementary-embeddings` | A | foundations | 699 | `reflection-absoluteness-and-elementary-submodels`, `boolean-algebras-stone-duality-and-the-prime-ideal-theorem`, `club-stationary-sets-and-pressing-down`, `set-theoretic-trees-delta-systems-and-diamond`, `forcing-orders-names-and-generic-extensions`, `measures-and-their-basic-properties`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `infinite-product-measures-and-kolmogorov-extension` |
| 14 | `large-cardinals-measures-and-elementary-embeddings-examples` | B | foundations | 700 | `large-cardinals-measures-and-elementary-embeddings` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-constructible-hierarchy-and-inner-models` — The Constructible Hierarchy and Inner Models (17 item(s))

- `lem-finite-tuple-satisfaction-is-absolute` · lemma — Finite-tuple satisfaction is absolute
- `def-definable-subsets-of-a-membership-structure` · definition — Definable subsets of a membership structure
- `lem-def-operation-is-absolute` · lemma — Absoluteness of the definable power-set operation
- `def-constructible-hierarchy-and-constructible-rank` · definition — The constructible hierarchy and constructible rank
- `prop-constructible-levels-transitivity-ordinals-and-rank` · proposition — Transitivity, growth, ordinals and rank in L
- `lem-finite-reflection-along-constructible-levels` · lemma — Finite reflection along constructible levels
- `thm-constructible-universe-basic-axioms` · theorem — Elementary ZF axioms inside L
- `thm-separation-in-the-constructible-universe` · theorem — Separation in the constructible universe
- `thm-internal-power-set-in-the-constructible-universe` · theorem — Internal Power Set in L
- `thm-replacement-in-the-constructible-universe` · theorem — Replacement in L
- `thm-constructibility-is-absolute-and-l-is-minimal` · theorem — Absoluteness, idempotence and minimality of L
- `lem-canonical-well-order-of-finite-definition-codes` · lemma — Well-ordering finite definition codes
- `thm-canonical-definable-global-well-order-of-l` · theorem — The canonical definable global well-order of L
- `thm-constructible-universe-satisfies-choice` · theorem — The constructible universe satisfies AC
- `def-ordinal-definability-and-hod` · definition — Ordinal definability and HOD
- `thm-hod-is-an-inner-model-containing-l` · theorem — HOD as an inner model and comparison with L
- `thm-constructible-inner-model-semantic-and-formal-schema` · theorem — Semantic and formal inner-model theorem for L

### `the-constructible-hierarchy-and-inner-models-examples` — The Constructible Hierarchy and Inner Models: Examples and Counterexamples (3 item(s))

- `ex-first-constructible-levels` · example — The first constructible levels
- `ex-canonical-l-well-order-first-stages` · example — Computing the canonical order at the first levels
- `ex-definable-subsets-of-omega-are-not-all-subsets` · example — Def(omega) is countable while P(omega) is not

### `forcing-orders-names-and-generic-extensions` — Forcing Orders, Names, and Generic Extensions (13 item(s))

- `def-dense-open-sets-and-model-generic-filters` · definition — Dense open sets and generic filters over a model
- `thm-rasiowa-sikorski-with-explicit-choice` · theorem — Rasiowa–Sikorski with its choice use exposed
- `cor-generics-exist-over-countable-transitive-models` · corollary — Generics over countable transitive models in ZF
- `def-forcing-names-and-name-rank` · definition — Forcing names and their rank
- `lem-forcing-names-and-name-ranks-are-absolute` · lemma — Absoluteness of names and their ranks
- `def-forcing-name-valuation-and-generic-extension` · definition — Valuation of names and M[G]
- `def-check-names-and-the-canonical-generic-name` · definition — Check names without a largest condition
- `thm-check-name-evaluation-and-generic-reconstruction` · theorem — Check-name evaluation and reconstruction of G
- `thm-generic-extension-transitivity-and-rank-bound` · theorem — Transitivity and a valuation rank bound
- `lem-names-for-pairs-functions-and-ordinals` · lemma — Names for pairs, functions and ordinals
- `def-boolean-valued-name-semantics` · definition — Boolean-valued semantics for names
- `lem-boolean-valued-semantics-is-well-defined` · lemma — Well-definedness of Boolean-valued semantics
- `prop-atomless-generics-are-not-ground-model-elements` · proposition — Atomless generic filters are not in the ground model

### `forcing-orders-names-and-generic-extensions-examples` — Forcing Orders, Names, and Generic Extensions: Examples and Counterexamples (3 item(s))

- `ex-cohen-name-valuation-and-dense-set-meeting` · example — Cohen-name valuation and dense-set meeting
- `fs-a-generic-filter-belongs-to-the-ground-model` · false-statement — A generic filter belongs to its ground model
- `ex-boolean-valued-one-bit-name` · example — A one-bit Boolean-valued name

### `large-cardinals-measures-and-elementary-embeddings` — Large Cardinals, Measures, and Elementary Embeddings (43 item(s))

- `def-lc-inaccessible-and-mahlo-cardinals` · definition — Inaccessible and Mahlo cardinals
- `lem-lc-inaccessible-size-and-rank-bounds` · lemma — Size and rank bounds below an inaccessible
- `thm-lc-inaccessible-rank-segments-model-zfc` · theorem — An inaccessible rank segment models ZFC
- `def-lc-complete-ultrafilters-and-measurable-cardinals` · definition — Complete ultrafilters and measurable cardinals
- `lem-lc-complete-measures-small-fibres-and-inaccessibility` · lemma — Measurable cardinals are inaccessible
- `def-lc-set-ultraproduct` · definition — Set ultraproducts and constant-map ultrapowers
- `lem-lc-ultraproduct-quotient-well-defined` · lemma — The ultraproduct is a well-defined nonempty structure
- `thm-lc-los-for-set-ultraproducts` · theorem — Los theorem for set ultraproducts
- `def-lc-scott-ultrapower-and-class-embedding-convention` · definition — Scott ultrapowers and class-embedding conventions
- `lem-lc-scott-quotients-are-sets-and-membership-is-setlike` · lemma — Scott coding and set-likeness of ultrapower membership
- `thm-lc-los-schema-for-universe-ultrapowers` · theorem — Los schema for the universe ultrapower
- `thm-lc-countable-completeness-and-well-founded-ultrapowers` · theorem — Countable completeness and transitive collapse
- `lem-lc-ultrapower-critical-point` · lemma — The critical point of a measurable ultrapower
- `thm-lc-measurability-normal-measures-and-embeddings` · theorem — Measurability, normal measures and elementary embeddings
- `def-lc-infinitary-syntax-and-compactness` · definition — Infinitary syntax and compactness conventions
- `thm-lc-infinitary-los` · theorem — Infinitary Los theorem
- `def-lc-weakly-compact-cardinal` · definition — Weakly compact cardinals
- `lem-lc-tree-partition-equivalence` · lemma — Tree and partition characterizations at an inaccessible
- `lem-lc-henkin-truth-tree` · lemma — Henkin truth trees for infinitary compactness
- `thm-lc-weak-compactness-infinitary-logic` · theorem — Weak compactness and small infinitary theories
- `lem-lc-nonreflection-regressive-injection` · lemma — Regressive injections on nonreflecting sets of cardinals
- `thm-lc-weakly-compact-stationary-reflection-and-mahlo` · theorem — Weak compactness implies stationary reflection and Mahloness
- `thm-lc-measurable-implies-weakly-compact` · theorem — Measurable cardinals are weakly compact
- `def-lc-fine-ultrafilters-strong-compactness-and-supercompactness` · definition — Fine measures, strong compactness and supercompactness
- `thm-lc-strong-compactness-fine-measures-and-logic` · theorem — Strong compactness, fine measures and infinitary logic
- `lem-lc-fine-ultrapower-seed-and-normality` · lemma — Fine ultrapower seeds and normality
- `thm-lc-strong-compactness-covering-embeddings` · theorem — The covering-embedding characterization of strong compactness
- `thm-lc-supercompactness-closed-embedding-characterization` · theorem — Supercompactness and closed elementary embeddings
- `cor-lc-large-cardinal-implication-ledger` · corollary — Large-cardinal implication and consistency ledger
- `def-lc-laver-anticipation-function` · definition — Laver anticipation functions
- `thm-lc-laver-function-existence` · theorem — Existence of a Laver function at a supercompact
- `lem-lc-generic-boolean-ground-joins` · lemma — Generic Boolean filters select ground-model joins
- `lem-lc-boolean-generic-truth` · lemma — Boolean truth for a supplied generic extension
- `lem-lc-boolean-generic-zfc-and-ordinals` · lemma — ZFC and ordinal preservation for supplied transitive Boolean generic extensions
- `thm-lc-supercompact-preparation-interface` · theorem — Supercompact preparation interface
- `lem-lc-fine-measure-coordinate-family` · lemma — Fine-measure coordinates avoiding small supports
- `lem-lc-probability-algebra-completeness` · lemma — Probability algebras, arbitrary joins and the countable chain condition
- `lem-lc-solovay-density-locality-and-null-joins` · lemma — Solovay densities and localized small null joins
- `lem-lc-generic-evaluation-of-measurable-densities` · lemma — Generic evaluation of bounded measurable functions by rational cuts
- `lem-lc-solovay-measure-on-generic-subsets` · lemma — Solovay measure on all ground-set subsets in a supplied generic extension
- `lem-lc-random-algebra-preserves-cardinals-and-sets-continuum` · lemma — The inaccessible random algebra preserves cardinals and makes the continuum kappa
- `lem-lc-random-coordinate-product-measure-pullback` · lemma — Random-coordinate pullback extends every fair-coin product measure
- `thm-lc-strong-compactness-product-measure-extension-interface` · theorem — Strong compactness and the product-measure extension interface

### `large-cardinals-measures-and-elementary-embeddings-examples` — Large Cardinals, Measures, and Elementary Embeddings: Examples and Counterexamples (5 item(s))

- `ex-lc-principal-ultrapower-calculation` · example — A principal ultrapower is the original structure
- `ex-lc-normal-measure-identity-and-successor` · example — Identity and successor in a normal ultrapower
- `cex-lc-countably-incomplete-ultrapower` · counterexample — A countably incomplete ultrapower need not be well-founded
- `ex-lc-first-inaccessible-is-not-mahlo` · example — The least inaccessible is not Mahlo
- `fs-zfc-proves-there-is-an-inaccessible-cardinal` · false-statement — ZFC proves there is an inaccessible cardinal

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-20`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
