# Step 6 whole-group reading — group **d**, run `phase-2-next-18`

You are the group Alpha for batches **7**, **8**: 4 A/B pair(s), 8 page(s), 92 item(s).

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
| 7 | `boolean-prime-ideal-theorem-in-the-basic-cohen-model` | A | foundations | 692.1 | `symmetric-extensions-and-basic-choice-failure-models`, `ramsey-theory` |
| 7 | `boolean-prime-ideal-theorem-in-the-basic-cohen-model-examples` | B | foundations | 692.2 | `boolean-prime-ideal-theorem-in-the-basic-cohen-model` |
| 7 | `symmetric-collapse-and-ultrafilter-free-models` | A | foundations | 693 | `symmetric-extensions-and-basic-choice-failure-models`, `preservation-cohen-forcing-and-the-continuum` |
| 7 | `symmetric-collapse-and-ultrafilter-free-models-examples` | B | foundations | 694 | `symmetric-collapse-and-ultrafilter-free-models` |
| 8 | `halpern-lauchli-and-bpi-without-choice` | A | foundations | 695 | `symmetric-collapse-and-ultrafilter-free-models`, `boolean-prime-ideal-theorem-in-the-basic-cohen-model` |
| 8 | `halpern-lauchli-and-bpi-without-choice-examples` | B | foundations | 696 | `halpern-lauchli-and-bpi-without-choice` |
| 8 | `solovays-model-and-regularity-of-all-sets-of-reals` | A | foundations | 701 | `large-cardinals-measures-and-elementary-embeddings`, `symmetric-collapse-and-ultrafilter-free-models`, `borel-analytic-sets-perfect-sets-and-determinacy`, `dependent-choice-and-the-complete-metric-baire-theorem` |
| 8 | `solovays-model-and-regularity-of-all-sets-of-reals-examples` | B | foundations | 702 | `solovays-model-and-regularity-of-all-sets-of-reals` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `boolean-prime-ideal-theorem-in-the-basic-cohen-model` — The Boolean Prime Ideal Theorem in the Basic Cohen Model (6 item(s))

- `lem-basic-cohen-model-schema-of-continuity` · lemma — Schema of continuity in the basic Cohen model
- `cor-basic-cohen-model-finite-set-continuity` · corollary — Finite parameter sets admit disjoint clopen supports
- `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model` · lemma — A supported Boolean algebra has an ideal maximal in its supported-definability class
- `lem-basic-cohen-search-and-shift-prime-ideal-construction` · lemma — Search-and-shift prime-ideal construction in the basic Cohen model
- `thm-basic-cohen-model-satisfies-bpi-and-fails-choice` · theorem — The basic Cohen model satisfies BPI and fails Choice
- `cor-relative-consistency-of-bpi-without-choice-over-zf` · corollary — Relative consistency of BPI without Choice over ZF

### `boolean-prime-ideal-theorem-in-the-basic-cohen-model-examples` — The Boolean Prime Ideal Theorem in the Basic Cohen Model — Examples (2 item(s))

- `ex-continuity-contradiction-for-a-supported-boolean-algebra` · example — The finite Boolean expansion contradiction in the supported-ideal proof
- `fs-bpi-is-ac` · false-statement — BPI is equivalent to the Axiom of Choice

### `symmetric-collapse-and-ultrafilter-free-models` — Symmetric Collapse and Ultrafilter-Free Models (29 item(s))

- `def-feferman-levy-symmetric-collapse-system` · definition — The Feferman–Levy symmetric collapse system
- `lem-feferman-levy-bounded-layer-support` · lemma — Hereditarily symmetric names have bounded layer support
- `lem-feferman-levy-fixed-boolean-values-come-from-initial-layers` · lemma — Fixed Boolean values come from initial collapse layers
- `def-feferman-levy-real-layers` · definition — The real layers of the Feferman–Levy model
- `lem-feferman-levy-real-layer-ground-cardinality-bound` · lemma — Each real layer has a ground-model cardinal bound
- `lem-ground-aleph-n-is-countable-in-the-feferman-levy-model` · lemma — Every finite ground aleph is countable in the Feferman–Levy model
- `lem-each-feferman-levy-real-layer-is-countable` · lemma — Each Feferman–Levy real layer is countable
- `thm-feferman-levy-reals-are-a-countable-union-of-countable-sets` · theorem — The Feferman–Levy reals are a countable union of countable sets
- `thm-feferman-levy-reals-remain-uncountable` · theorem — The Feferman–Levy reals remain uncountable
- `thm-feferman-levy-omega-one-is-ground-aleph-omega` · theorem — The new omega one is the old aleph omega
- `cor-feferman-levy-omega-one-has-countable-cofinality` · corollary — The Feferman–Levy omega one has countable cofinality
- `cor-countable-union-and-omega-one-regularity-fail-in-the-feferman-levy-model` · corollary — Countable-union and omega-one regularity principles fail
- `lem-feferman-levy-symmetric-collapse-is-finitely-formalizable` · lemma — The Feferman–Levy collapse argument is finitely formalizable
- `cor-relative-consistency-of-feferman-levy-choice-failures-over-zf` · corollary — Relative consistency of the Feferman–Levy choice failures over ZF
- `def-feferman-tail-flip-definability-model` · definition — The tail-flip hereditary-symmetric model
- `thm-feferman-definability-union-is-a-zf-model` · theorem — The tail-flip hereditary-symmetric interpretation is a model of ZF
- `lem-feferman-tail-complement-automorphism` · lemma — The tail-complement automorphism fixes finitely supported names
- `thm-feferman-model-prime-ideals-on-p-omega-are-principal` · theorem — Every prime ideal on the power set of omega is principal in the tail-flip symmetric model
- `cor-feferman-model-has-no-free-ultrafilter-on-omega` · corollary — The tail-flip symmetric model has no free ultrafilter on omega
- `cor-feferman-model-refutes-bpi` · corollary — The tail-flip symmetric model refutes BPI
- `lem-feferman-tail-flip-model-is-finitely-formalizable` · lemma — The tail-flip symmetric model is finitely formalizable
- `cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf` · corollary — Relative consistency of no free ultrafilter on omega over ZF
- `cor-ultrafilter-lemma-and-bpi-are-not-theorems-of-zf` · corollary — The Ultrafilter Lemma and BPI are not theorems of ZF
- `def-blass-finite-modification-classes-and-parameter-hod-model` · definition — Blass's finite-modification classes and parameter-HOD model
- `lem-blass-paired-finite-modification-classes-form-a-russell-set` · lemma — Blass's paired finite-modification classes form a Russell set
- `thm-small-forcing-does-not-create-measurable-cardinals` · theorem — Small forcing does not create measurable cardinals
- `thm-blass-model-has-only-principal-ultrafilters` · theorem — Every ultrafilter on every set is principal in Blass's model
- `lem-blass-ultrafilter-free-model-is-finitely-formalizable` · lemma — The Blass ultrafilter-free construction is finitely formalizable
- `cor-relative-consistency-of-no-free-ultrafilters-on-any-set-over-zf` · corollary — Relative consistency of no free ultrafilters on any set over ZF

### `symmetric-collapse-and-ultrafilter-free-models-examples` — Symmetric Collapse and Ultrafilter-Free Models: Examples and Counterexamples (6 item(s))

- `ex-first-feferman-levy-collapse-layers` · example — The first Feferman–Levy collapse layers
- `fs-countable-unions-of-countable-sets-are-countable-in-zf` · false-statement — ZF proves that countable unions of countable sets are countable
- `fs-omega-one-is-regular-in-zf` · false-statement — ZF proves that omega one is regular
- `ex-feferman-tail-flip-turns-a-generic-real-into-its-complement-modulo-finite` · example — A tail flip turns a generic real into its complement modulo finite
- `cex-finite-bit-flips-cannot-defeat-a-free-ultrafilter` · counterexample — Finite bit flips cannot defeat a free ultrafilter
- `ex-blass-paired-finite-modification-classes` · example — Blass's paired finite-modification classes

### `halpern-lauchli-and-bpi-without-choice` — Halpern–Läuchli and BPI without Choice (13 item(s))

- `def-halpern-lauchli-finitistic-trees-density-and-matrices` · definition — Finitistic trees, level products, density, and matrices
- `def-halpern-lauchli-finite-word-calculus` · definition — The finite word calculus for the Halpern–Läuchli argument
- `lem-halpern-lauchli-word-calculus-rearrangement` · lemma — Finite word-calculus rearrangement
- `lem-halpern-lauchli-rule-soundness-and-finite-thinning` · lemma — Soundness of the three word rules and density-preserving finite thinning
- `thm-halpern-lauchli-dense-matrix-dichotomy` · theorem — Halpern–Läuchli dense-matrix dichotomy
- `thm-halpern-lauchli-finite-level-partition-compactness` · theorem — Finite level-product partition theorem by the compactness tree
- `def-finite-partial-prime-ideal-diagrams` · definition — Finite partial prime-ideal diagrams
- `lem-finite-partial-prime-ideal-extension` · lemma — Extension of finite partial prime-ideal diagrams
- `lem-countable-boolean-algebra-prime-ideal-compactness-tree` · lemma — The compactness tree yields a prime ideal for an enumerated Boolean algebra
- `thm-bpi-and-set-ultrafilter-lemma-are-equivalent-over-zf` · theorem — BPI and the set ultrafilter lemma are equivalent over ZF
- `thm-halpern-lauchli-and-the-basic-cohen-bpi-model` · theorem — The Halpern–Läuchli theorem and the basic Cohen BPI model
- `cor-relative-consistency-of-halpern-lauchli-bpi-without-choice` · corollary — Relative consistency of BPI without Choice together with Halpern–Läuchli
- `thm-strict-relative-placement-of-bpi-over-zf` · theorem — Strict relative placement of BPI between ZF and Choice

### `halpern-lauchli-and-bpi-without-choice-examples` — Halpern–Läuchli and BPI without Choice: Examples and Counterexamples (5 item(s))

- `ex-a-two-tree-level-product-and-dense-matrix` · example — A two-tree level product and dense matrix
- `ex-common-height-cone-repair-in-the-complement-case` · example — The common-height cone repair in the complement case
- `ex-halpern-lauchli-word-rearrangement-in-dimension-two` · example — A dimension-two Halpern–Läuchli word rearrangement
- `ex-prime-ideal-compactness-tree-for-a-finite-cofinite-algebra` · example — A prime-ideal compactness tree for the finite–cofinite algebra
- `fs-bpi-well-orders-every-set` · false-statement — BPI well-orders every set

### `solovays-model-and-regularity-of-all-sets-of-reals` — Solovay's Model and Regularity of All Sets of Reals (24 item(s))

- `def-solovay-levy-collapse-setup` · definition — The inaccessible Lévy-collapse setup for Solovay's construction
- `lem-solovay-collapse-localizes-countable-ordinal-data` · lemma — The Lévy collapse localizes countable ordinal data
- `lem-solovay-absorption-factorization-and-homogeneity` · lemma — Absorption, factorization, and homogeneous truth in the Solovay collapse
- `def-solovay-hereditarily-ordinal-sequence-definable-model` · definition — The hereditarily ordinal-sequence-definable Solovay model
- `def-l-of-the-reals-in-the-solovay-collapse-extension` · definition — L(R) in the Solovay collapse extension
- `thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability` · theorem — The Solovay inner model satisfies ZF and every real set has a real–ordinal definition
- `lem-solovay-inner-model-is-closed-under-ambient-omega-sequences` · lemma — The Solovay inner model is closed under ambient omega-sequences
- `thm-solovay-inner-model-satisfies-dependent-choice` · theorem — The Solovay inner model satisfies Dependent Choice
- `lem-solovay-borel-code-and-regularity-absoluteness` · lemma — Borel-code, measure, category, and perfect-set absoluteness
- `lem-solovay-random-and-cohen-generics-are-large` · lemma — Random and Cohen generics over an intermediate model are conull and comeagre
- `lem-solovay-homogeneous-truth-has-borel-representatives` · lemma — Homogeneous truth about a generic real has Borel representatives
- `thm-every-solovay-model-set-of-reals-is-lebesgue-measurable` · theorem — Every set of reals in the Solovay model is Lebesgue measurable
- `thm-every-solovay-model-set-of-reals-has-the-baire-property` · theorem — Every set of reals in the Solovay model has the Baire property
- `lem-solovay-perfect-tree-of-mutually-generic-name-interpretations` · lemma — A perfect tree of mutually generic name interpretations
- `thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset` · theorem — Every uncountable Solovay-model set of reals has a perfect subset
- `lem-solovay-universal-measurability-transfers-to-euclidean-spaces` · lemma — Universal real measurability transfers to finite-dimensional Euclidean spaces
- `cor-solovay-model-has-no-vitali-or-bernstein-set` · corollary — The Solovay model has no Vitali or Bernstein set
- `thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function` · theorem — The Solovay model has no Hamel basis and no discontinuous additive real function
- `cor-solovay-model-has-no-banach-tarski-decomposition` · corollary — The Solovay model has no Banach–Tarski decomposition
- `thm-solovay-model-fails-full-choice` · theorem — The Solovay model fails the full Axiom of Choice
- `thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice` · theorem — Solovay L(R) satisfies ZF and Dependent Choice
- `thm-all-sets-of-reals-in-solovay-l-of-the-reals-have-regularity` · theorem — All sets of reals in Solovay L(R) have LM, BP, and PSP
- `lem-solovay-construction-is-uniformly-formalizable` · lemma — Fixed finite-fragment verification for the Solovay construction
- `thm-solovay-model-regularity-relative-to-an-inaccessible` · theorem — Solovay-model regularity is consistent relative to an inaccessible cardinal

### `solovays-model-and-regularity-of-all-sets-of-reals-examples` — Solovay's Model and Regularity of All Sets of Reals: Examples and Counterexamples (7 item(s))

- `ex-solovay-collapse-factorization-around-a-real-parameter` · example — Factoring the Solovay collapse around a real parameter
- `ex-a-borel-representative-from-a-random-boolean-value` · example — A Borel representative from a random Boolean value
- `ex-the-perfect-tree-splitting-of-a-new-real-name` · example — Perfect-tree splitting of a new-real name
- `ex-coding-countably-many-solovay-definition-parameters` · example — Coding countably many Solovay definition parameters
- `ex-regularity-excludes-the-classical-choice-pathologies` · example — How universal regularity excludes the classical Choice pathologies
- `ex-volume-contradiction-for-an-alleged-banach-tarski-decomposition` · example — The volume contradiction for an alleged Banach–Tarski decomposition
- `fs-solovays-model-proves-an-inaccessible-exists` · false-statement — Solovay's model proves that an inaccessible cardinal exists

## Your seams

Another group's pages depend on yours:

- `prikry-forcing-and-gitiks-singular-cardinal-model` (group c) requires your `symmetric-collapse-and-ultrafilter-free-models`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 — group reading digest, `phase-2-next-18`

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
