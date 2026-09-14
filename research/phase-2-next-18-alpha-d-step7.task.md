# Step 7 adjudication — group **d**, run `phase-2-next-18`

You are the group Alpha for batches **7**, **8**: 4 A/B pair(s), 8 page(s), 92 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-18-alpha-d-step7-context.json` is what a group Alpha for this group wrote during step 6,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-18-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

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

## Step-6 reader warnings

8 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-c5fa9f8adb456c5c68db17be · `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model`** (from group d, gap-a-reader-closes) — F2 orders the definition codes "first by formula code, then by rank, and then lexicographically by the finite ordinal tuple" and cites lem-canonical-well-order-of-finite-definition-codes, whose statement orders codes by formula code and then lexicographically by the tuple of the arity fixed by that code, with no rank coordinate. The order actually used is still a well-order (for each formula code the pairs (rank, tuple) are well-ordered by rank and then lex), and unique least codes still exist, but the minimization argument is not the one displayed in the cited lemma and must be re-run for the stated order.
- **s8a-a95284571634bb44336564fc · `thm-halpern-lauchli-and-the-basic-cohen-bpi-model`** (from group d, presentation) — This item's deps and body use only thm-halpern-lauchli-dense-matrix-dichotomy and thm-basic-cohen-model-satisfies-bpi-and-fails-choice, but the unified dependency ledger still carries open rows from it to lem-basic-cohen-model-schema-of-continuity, cor-basic-cohen-model-finite-set-continuity and lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model (declared in the batch-8 pages manifest). Steps 1.1-2.1 explicitly say the parameter-definable-maximal-ideal route is not used, so those rows need to be resolved to removed (or the dependencies reinstated) before the Step-8 ledger reconciliation.
- **s8a-f06fde5f1b13bdcd5b4091da · `thm-blass-model-has-only-principal-ultrafilters`** (from group d, gap-a-reader-closes) — Step 1.1 verifies ZF for the parameter-HOD class N in five sentences, citing thm-hod-is-an-inner-model-containing-l for the "same checks ... relativized below to f and finitely many members of S". The delicate clause is Replacement: for f, x in N the image set must be shown to be definable from f and the hereditary codes of x (not from per-value codes), with TC of the image inside OD(S). The ordinary HOD argument does close this, using that S is definable from f, but the step as written asserts the closure rather than displaying it.
- **s8a-c0a91e001968fd7bf3d0eb63 · `thm-blass-model-has-only-principal-ultrafilters`** (from group d, gap-a-reader-closes) — Steps 9.1-13.1 rest on the asserted identity N = W (W the least class of singletons closed under ordinal-indexed unions) and on the rank bookkeeping that keeps the partition pieces Y_alpha at strictly lower W-rank. Step 12.1 compresses the N subset of W direction into "the code space is a subset of a finite product and a well-ordered union of theta^{<omega}, omega and S^{<omega}"; that evaluation-map argument and the rank decrease in step 13.1 are where the induction could fail and are not fully written out.
- **s8a-94991e56b3f10fac0556e7e4 · `thm-small-forcing-does-not-create-measurable-cardinals`** (from group d, gap-a-reader-closes) — Steps 3.1-8.1 compress Hamkins' gap-forcing restriction argument (ground part M = union_alpha j(V_alpha), j(G) = G, the fresh-sequence obstruction, the common-cover claim for delta-sized sets of ordinals, the identification V cap M[G] = M, and amenability of j restricted to V). I checked the statement, the local measurability definition, the ultrapower direction of step 1.2 and the final Scott-style contradiction (the least measurable cardinal is parameter-free definable, so elementarity with Q_0 = M forces j(lambda) = lambda), but I did not independently reproduce steps 4.2, 5.1, 6.1, 7.1 or 7.2.
- **s8a-26b5aa8d93682b5d1dc80339 · `thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset`** (from group d, gap-a-reader-closes) — Step 2.1 says "The construction has a real code; since M has all reals, that code lies in M, and F6 says internally that P is nonempty perfect." The tree produced in lem-solovay-perfect-tree-of-mutually-generic-name-interpretations is an ambient omega-sequence of conditions in the bounded stage N (hence in M by the closure lemma), and P is then definable in M from that tree and the forcing relation; the phrase "has a real code" is doing the work of that coding argument, which is not displayed, and lem-solovay-borel-code-and-regularity-absoluteness transfers nonemptiness/perfectness only from an explicit pruned splitting-tree certificate.
- **s8a-149f144d65de223bbac269d6 · `thm-feferman-definability-union-is-a-zf-model`** (from group d, gap-a-reader-closes) — F1 is "def-feferman-tail-flip-definability-model identifies the ranked finite-predicate union M* with HS_F^G for that exact symmetric system". That identification is a substantive two-sided equivalence (the reverse direction is Feferman's tail homogeneity plus V = L), but it is asserted inside a definition item whose provenance is not-applicable, with only a one-sentence sketch; the ZF theorem then consumes it as given. A judge should treat the equivalence itself, not only the transfer through the published symmetric-model theorem, as the load-bearing claim.
- **s8a-d4dcbee147e95f0a9247f199 · `lem-basic-cohen-search-and-shift-prime-ideal-construction`** (from group d, presentation) — Steps 1.3, 1.4 and 5.1 invoke "the reduction in Appendix C of Ransom's source to the cited Todorcevic-Farah compatible-type lemma" and the spreading/gathering maps of Ransom Section 5. I confirmed bibliographically that arXiv:2511.21684 exists (Nov 2025) and that its ToC contains the filter extension property, Theorem 4.9, Appendix C (proof of Lemma 4.6) and the Sigma/Gamma maps of Section 5, but I could not read the source argument itself, so the finite compatible-type reduction and the reindexing collapse are taken on the strength of the citation.

Append one owning-group disposition per warning to `research/phase-2-next-18-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-18`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-18-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-18-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-18-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-18-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-18-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
