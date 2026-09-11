# Step 7 adjudication — group **h**, run `phase-2-next-20`

You are the group Alpha for batches **13**, **14**: 3 A/B pair(s), 6 page(s), 84 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-20-alpha-h-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-20-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

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

## Step-6 reader warnings

7 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-3804cf0169a47165d2120e62 · `thm-lc-laver-function-existence`** (from group h, gap-a-reader-closes) — Deep-theorem reconstruction compressed at its load-bearing point: step 4.1 asserts that M 'computes exactly the same least failure theta' (including every normal fine measure and its ultrapower evaluation) and step 5.1 that 'the transformed recursion at stage kappa ... selects a failing object a in H_{theta+}'. The reader must supply the verification that the definable least-failure predicate is absolute between V and M and that j(ell)(kappa)=a follows from the rule's clause in M; the original Laver source was not recovered and only Hamkins's sketch is cited. I found no false step, but correctness rests on this reconstruction.
- **s8a-556b2f158c0042842d3cf10f · `thm-lc-supercompact-preparation-interface`** (from group h, gap-a-reader-closes) — Laver preparation, source not recovered. Compressed steps a reader must complete: 12.1 derives kappa-cc from a normal measure but leaves the common-extension step implicit (two-step decomposition at the inaccessible alpha plus the tail's <alpha-directed closure); 11.1/14.1 ('small prefix preserves regulars above its size') is sketched; 33.1 asserts that the stage-kappa activity test agrees in M via 'downward absoluteness explicitly' without detailing name-and-order absoluteness; 42.1 re-forms the descended measure as a W-set from the ground name set T and the <=chi-closed temporary forcing.
- **s8a-4c4531c88202fc9fdf92d331 · `thm-lc-strong-compactness-product-measure-extension-interface`** (from group h, gap-a-reader-closes) — The Con(ZFC+strongly compact) implies Con(ZFC+PMEA) transfer rests on steps 2.1-3.1: the claim that the entire PMEA construction over a countable transitive ground uses only finitely many ZFC instances, so one finite Gamma suffices. No Gamma is exhibited and the two long suppliers (random-algebra cardinal preservation; Solovay/random-coordinate pullback) are not analysed instance by instance; a reader must verify the finite-fragment extraction, in particular that reflecting Gamma plus SC(kappa) (4.1) covers every axiom instance those suppliers use.
- **s8a-ada52bb597c32a51c959863c · `lem-lc-henkin-truth-tree`** (from group h, presentation) — Step 5.1 justifies the value 1 of the logically true sentence exists x (x = f(c)) 'by step 4.1', but step 4.1 concerns T and H; the actual reason is that every node is the actual truth restriction of a structure, so every logically valid sentence gets value 1. The same implicit appeal to regularity (placing all sentences of a <kappa-sized family into one F_alpha) recurs in 4.1's equality-substitution and Boolean-clause claims.
- **s8a-eca6cb67c86986846387540e · `thm-constructibility-is-absolute-and-l-is-minimal`** (from group h, presentation) — Step 3.1 says the six basic axioms, internal Power Set, and 'Separation and Replacement in F4' establish ZF in L, but F4 names only thm-replacement-in-the-constructible-universe; internal Separation is available only through the dependency closure (F3 and F4 both depend on thm-separation-in-the-constructible-universe). The claim is true; the fact list is incomplete.
- **s8a-47057519c08dd835e50fdc91 · `lem-lc-generic-boolean-ground-joins`** (from group h, presentation) — Step 1.1: 'The Boolean meet bounds r above and is nonzero, so a meet b is in G.' The meet is an upper bound of r (r <= a meet b), not a bound 'above' it; wording only, the inference is correct.
- **s8a-1bce10f066b7a589c60d1229 · `lem-lc-inaccessible-size-and-rank-bounds`** (from group h, presentation) — Step 4.1 proves mu^nu < kappa through the infinite-cardinal product estimate and then says 'This also covers finite cardinals', listing explicitly only mu^0=1, 0^nu=0 and 1^nu=1. For finite mu,nu >= 2 the bound is immediate (a finite cardinal is below kappa) but is not stated.

Append one owning-group disposition per warning to `research/phase-2-next-20-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-20`

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

Append one row per rejection to `research/phase-2-next-20-judge-adjudications.jsonl`
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
decision in `research/phase-2-next-20-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-next-20-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-20-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-20-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
