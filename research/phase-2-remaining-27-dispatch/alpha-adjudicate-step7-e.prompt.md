# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-remaining-27-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-adjudicate
label: step7-e
covers: 14, 15, 3

# Step 7 adjudication — group **e**, run `phase-2-remaining-27`

You are the group Alpha for batches **14**, **15**, **3**: 5 A/B pair(s), 10 page(s), 166 item(s), 122 open rejection(s) over 122 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-remaining-27-alpha-e-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-remaining-27-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | A | foundations | 697 | `halpern-lauchli-and-bpi-without-choice`, `dependent-choice-and-the-complete-metric-baire-theorem`, `countability-axioms-and-cardinal-functions`, `separation-axioms`, `partitions-of-unity-and-paracompactness` |
| 14 | `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples` | B | foundations | 698 | `choice-strength-in-baire-urysohn-stone-and-tychonoff` |
| 14 | `normal-moore-spaces-pmea-and-consistency-strength` | A | foundations | 709 | `proper-forcing-countable-support-iterations-and-pfa`, `shelahs-baire-property-model-and-inner-model-lower-bounds`, `choice-strength-in-baire-urysohn-stone-and-tychonoff`, `product-measures-and-the-fubini-tonelli-theorems` |
| 14 | `normal-moore-spaces-pmea-and-consistency-strength-examples` | B | foundations | 710 | `normal-moore-spaces-pmea-and-consistency-strength` |
| 15 | `shelahs-baire-property-model-and-inner-model-lower-bounds` | A | foundations | 703 | `solovays-model-and-regularity-of-all-sets-of-reals`, `finite-support-iterations-and-martins-axiom` |
| 15 | `shelahs-baire-property-model-and-inner-model-lower-bounds-examples` | B | foundations | 704 | `shelahs-baire-property-model-and-inner-model-lower-bounds` |
| 3 | `banach-space-differential-calculus-and-banach-manifolds` | A | functional-analysis | 288.0761 | `normed-and-banach-spaces`, `bounded-linear-operators-and-quotient-spaces`, `compact-operators-and-riesz-schauder-theory`, `completeness-and-uniform-continuity` |
| 3 | `banach-space-differential-calculus-and-banach-manifolds-examples` | B | functional-analysis | 288.0762 | `banach-space-differential-calculus-and-banach-manifolds` |
| 3 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | A | functional-analysis | 288.077 | `compact-operators-and-riesz-schauder-theory`, `square-integrable-kernels-and-hilbert-schmidt-compactness`, `the-spectral-theorem-and-singular-value-decomposition` |
| 3 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | B | functional-analysis | 288.078 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `choice-strength-in-baire-urysohn-stone-and-tychonoff` — Choice Strength in Baire, Urysohn, Stone, and Tychonoff (41 item(s))

- `def-dependent-multiple-choice-finite-level-tree` · definition — Dependent multiple choice in finite-level tree form
- `thm-dmc-tree-and-successor-menu-formulations` · theorem — The tree and successor-menu formulations of DMC are equivalent
- `lem-nonempty-countable-set-has-a-padded-enumeration` · lemma — A nonempty countable set has a padded enumeration in ZF
- `thm-separable-complete-metric-baire-in-zf` · theorem — Separable complete metric spaces are Baire in ZF
- `def-metacompact-space` · definition — Metacompactness: every open cover has a point-finite open refinement
- `thm-dmc-implies-compact-hausdorff-baire` · theorem — DMC makes every compact Hausdorff space Baire
- `thm-compact-hausdorff-baire-implies-dmc` · theorem — Compact Hausdorff Baire implies DMC
- `thm-compact-hausdorff-baire-iff-dmc` · theorem — Compact Hausdorff Baire is equivalent to DMC
- `thm-dc-iff-products-compact-hausdorff-are-baire` · theorem — DC is equivalent to Baireness of compact-Hausdorff products
- `thm-dmc-implies-urysohn-lemma` · theorem — DMC implies Urysohn's lemma
- `rem-dmc-versus-dc-over-zf-is-open` · remark — DMC versus DC over ZF remains open
- `def-brunner-ordered-lauchli-permutation-models` · definition — Brunner's ordered Läuchli permutation models
- `lem-brunner-choice-and-urysohn-obstructions` · lemma — Brunner's models satisfy the required choice and Urysohn obstructions
- `thm-extreme-amenability-yields-bpi-in-finite-support-models` · theorem — Extreme amenability yields BPI in finite-support permutation models
- `lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable` · lemma — Finite stabilizers in Aut(Q,<) are extremely amenable
- `lem-brunner-urysohn-obstruction-is-injectively-boundable` · lemma — The Läuchli Urysohn obstruction is injectively boundable
- `thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions` · theorem — Pincus transfer for BPI, Countable Choice, and injectively boundable conjunctions
- `thm-relative-consistency-countable-choice-without-urysohn` · theorem — Relative consistency of Countable Choice without Urysohn's lemma
- `thm-relative-consistency-bpi-without-urysohn` · theorem — Relative consistency of BPI without Urysohn's lemma
- `cor-brunner-models-also-refute-tietze-extension` · corollary — Brunner's endpoint obstruction also refutes bounded Tietze extension
- `def-good-tree-watson-symmetric-stone-model` · definition — The Good-Tree-Watson symmetric Stone model
- `lem-good-tree-watson-omega-sequence-closure` · lemma — The Good-Tree-Watson symmetric model is closed under omega-sequences from the full extension
- `lem-good-tree-watson-selector-obstruction` · lemma — The symmetric Stone model has no componentwise proper selector
- `thm-relative-consistency-dc-without-stone` · theorem — Relative consistency of DC with failure of Stone's theorem
- `def-corson-ordered-rational-permutation-model` · definition — Corson's ordered-rational permutation model
- `lem-corson-rational-metric-not-metacompact` · lemma — Corson's rational metric space is not metacompact
- `lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable` · lemma — Aut(U_Q^<) is extremely amenable
- `lem-corson-stone-obstruction-is-ordinal-boundable` · lemma — Corson's Stone obstruction is ordinal boundable
- `thm-relative-consistency-bpi-without-stone` · theorem — Relative consistency of BPI with failure of Stone's theorem
- `thm-effective-metacompact-discrete-metrics-implies-ac` · theorem — Effective metacompactness for discrete metric spaces implies AC
- `thm-products-of-cofinite-spaces-compact-iff-bpi` · theorem — Products of cofinite spaces are compact exactly under BPI
- `lem-isolated-point-kelley-repair` · lemma — The isolated-point repair of Kelley's choice space
- `thm-compact-t1-product-theorem-iff-ac` · theorem — The compact T1 product theorem is equivalent to AC
- `thm-arbitrary-compact-product-theorem-iff-ac` · theorem — The arbitrary compact product theorem is equivalent to AC
- `cor-bpi-does-not-imply-dmc` · corollary — BPI does not imply DMC
- `cor-dmc-is-not-provable-in-zf` · corollary — DMC is not provable in ZF
- `rem-stone-exact-choice-strength-open-status` · remark — The exact choice strength of Stone's theorem remains open
- `rem-dmc-mc-ac-zfa-qualification` · remark — DMC, Multiple Choice, and AC qualifications
- `cor-zf-does-not-prove-urysohn-lemma` · corollary — ZF does not prove Urysohn's lemma
- `rem-urysohn-implies-dmc-open-status` · remark — The converse from Urysohn's lemma to DMC is open
- `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff` · remark — Choice ledger for Baire, Urysohn, Stone, and Tychonoff

### `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples` — Choice Strength in Baire, Urysohn, Stone, and Tychonoff: Examples and Counterexamples (5 item(s))

- `ex-canonical-least-ball-selection-in-separable-baire-proof` · example — Canonical least-ball selection removes choice
- `ex-dmc-urysohn-finite-menu-intersection` · example — Finite-menu intersection in the DMC Urysohn construction
- `cex-kelley-cofinite-set-is-not-closed` · counterexample — Kelley's cofinite set is not closed
- `ex-isolated-point-repair-recovers-choice-function` · example — The isolated-point repair recovers a choice function
- `fs-bpi-proves-stone-for-metric-spaces` · false-statement — False: BPI proves Stone's theorem for metric spaces

### `normal-moore-spaces-pmea-and-consistency-strength` — Normal Moore Spaces, PMEA, and Consistency Strength (31 item(s))

- `def-moore-spaces-and-developments` · definition — Moore spaces and developments
- `def-normalized-families-and-collectionwise-normality` · definition — Normalized families and collectionwise normality
- `lem-metrizable-spaces-are-collectionwise-normal` · lemma — Metrizable spaces are collectionwise normal
- `thm-moore-spaces-are-subparacompact` · theorem — Moore spaces are subparacompact
- `lem-collectionwise-normal-moore-spaces-are-screenable` · lemma — Collectionwise normal Moore spaces are screenable
- `lem-sigma-cellular-base-yields-a-compatible-metric` · lemma — A sigma-cellular base yields a compatible metric
- `thm-normal-screenable-moore-spaces-are-metrizable` · theorem — Normal screenable Moore spaces are metrizable
- `thm-collectionwise-normal-moore-spaces-are-metrizable` · theorem — Collectionwise normal Moore spaces are metrizable
- `def-q-sets-and-heath-moore-space-interface` · definition — Q-sets and Bing's tangent-disk Moore-space interface
- `lem-solovay-almost-disjoint-extension-under-ma` · lemma — Martin's axiom extends families almost disjoint from a subfamily
- `lem-ma-produces-an-uncountable-q-set` · lemma — MA plus not-CH produces an uncountable Q-set
- `thm-bing-q-set-moore-space-is-normal-and-nonmetrizable` · theorem — Bing's Q-set space is a normal nonmetrizable Moore space
- `thm-ma-not-ch-normal-nonmetrizable-moore-space` · theorem — MA plus not-CH yields a normal nonmetrizable Moore space
- `thm-fleissner-normal-moore-space-construction` · theorem — Fleissner's construction of a normal nonmetrizable Moore space from level data
- `thm-ch-normal-nonmetrizable-moore-space` · theorem — CH yields a normal nonmetrizable Moore space
- `cor-v-equals-l-refutes-normal-moore-space-conjecture` · corollary — V=L refutes the normal Moore space conjecture
- `def-product-measure-extension-axioms-pmea-and-pmea-sigma` · definition — PMEA and PMEA-sigma
- `lem-pmea-three-quarter-separation-estimate` · lemma — The PMEA three-quarter separation estimate
- `thm-pmea-normal-low-character-spaces-are-collectionwise-normal` · theorem — PMEA makes normal low-character spaces collectionwise normal
- `thm-pmea-implies-normal-moore-space-conjecture` · theorem — PMEA implies the normal Moore space conjecture
- `thm-strongly-compact-relative-consistency-normal-moore` · theorem — A strongly compact cardinal gives the NMSC consistency upper bound
- `def-fleissner-hyp-covering-interface` · definition — Fleissner's HYP covering interface
- `lem-ladder-separation-from-hyp` · lemma — Ladder separation from HYP
- `def-dodd-jensen-covering-and-square-package` · definition — The Dodd-Jensen covering and square package
- `thm-dodd-jensen-covering-supplies-fleissner-hyp-data` · theorem — Dodd-Jensen covering supplies Fleissner HYP data
- `thm-no-inner-model-measurable-implies-fleissner-hyp` · theorem — No inner measurable implies Fleissner's HYP
- `thm-fleissner-hyp-normal-nonmetrizable-moore-space` · theorem — HYP produces a normal nonmetrizable Moore space
- `thm-normal-moore-implies-inner-model-measurable` · theorem — NMSC gives an inner model with a measurable cardinal
- `thm-formal-nmsc-consistency-lower-bound` · theorem — Formal consistency lower bound for NMSC
- `thm-normal-moore-consistency-strength-sandwich` · theorem — The consistency-strength sandwich for NMSC
- `rem-omega-one-strongly-compact-normal-moore-refinement` · remark — The omega-one-strongly compact refinement and open gap

### `normal-moore-spaces-pmea-and-consistency-strength-examples` — Normal Moore Spaces, PMEA, and Consistency Strength: Examples and Counterexamples (3 item(s))

- `ex-development-stars-form-a-countable-local-base` · example — Development stars form a countable local base
- `ex-pmea-three-quarter-event-calculation` · example — The three-quarter event calculation in the PMEA proof
- `fs-zfc-proves-normal-moore-space-conjecture` · false-statement — False: ZFC proves the normal Moore space conjecture

### `shelahs-baire-property-model-and-inner-model-lower-bounds` — Shelah's Baire-Property Model and Inner-Model Lower Bounds (29 item(s))

- `def-shelah-sweetness-model` · definition — Shelah sweetness models for forcing
- `lem-shelah-sweet-forcings-are-sigma-directed-ccc` · lemma — Sweet forcings are sigma-directed and ccc
- `lem-shelah-sweet-density-transfer-along-complete-suborders` · lemma — Sweet density transfers along complete suborders
- `thm-shelah-sweet-amalgamation-preserves-sweetness` · theorem — Shelah amalgamation preserves sweetness
- `def-shelah-universal-meagre-forcing` · definition — Shelah's universal-meagre forcing
- `lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets` · lemma — A universal-meagre generic absorbs old nowhere-dense sets
- `thm-shelah-universal-meagre-composition-preserves-sweetness` · theorem — Composition with universal-meagre forcing preserves sweetness
- `lem-shelah-continuous-unions-of-sweetness-models` · lemma — Continuous countable unions of sweetness models remain sweet
- `thm-shelah-sweet-partial-isomorphism-extension` · theorem — Sweet amalgamation extends partial Boolean isomorphisms
- `thm-shelah-ch-omega-one-sweet-construction` · theorem — Shelah's CH-length homogeneous sweet construction
- `lem-shelah-real-name-capture-and-coded-meagre-unions` · lemma — Real names are captured and coded meagre unions are absorbed
- `lem-shelah-homogeneous-truth-has-baire-representatives` · lemma — Strongly homogeneous truth has Baire representatives
- `def-shelah-hereditarily-ordinal-sequence-definable-model` · definition — The Shelah HOD(S) model and its real-ordinal presentation
- `lem-shelah-inner-model-is-closed-under-ambient-omega-sequences` · lemma — The Shelah inner model is closed under ambient omega-sequences
- `thm-shelah-inner-model-satisfies-zf-and-dependent-choice` · theorem — The Shelah inner model satisfies ZF and Dependent Choice
- `thm-shelah-inner-model-all-sets-of-reals-have-baire-property` · theorem — Every real set in the Shelah inner model has the Baire property
- `thm-baire-property-model-equiconsistent-with-zfc` · theorem — The exact equiconsistency of ZFC and the all-Baire-property model
- `def-boldface-sigma-one-three-measurability` · definition — Boldface Sigma-one-three measurability
- `def-rapid-and-raisonnier-filters` · definition — Rapid filters and the Raisonnier family
- `lem-raisonnier-family-is-a-sigma-one-three-filter` · lemma — The Raisonnier family is a Sigma-one-three filter
- `thm-rapid-filters-are-not-lebesgue-measurable` · theorem — Rapid filters are not Lebesgue measurable
- `lem-measurable-null-code-orders-bound-constructible-null-unions` · lemma — A measurable null-code order bounds the constructible null union
- `lem-uniform-null-g-delta-capture-functions` · lemma — Uniform null G-delta sets capture block functions
- `thm-raisonnier-filter-is-rapid-from-null-code-measurability` · theorem — Null-code measurability makes the Raisonnier filter rapid
- `lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one` · lemma — Failure of inaccessibility in L produces a real with correct omega-one
- `thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l` · theorem — Sigma-one-three measurability makes omega-one inaccessible in L
- `thm-all-real-sets-measurable-gives-an-inaccessible-inner-model` · theorem — All-real-set measurability yields an inaccessible inner model
- `thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible` · theorem — Exact equiconsistency of universal measurability and an inaccessible
- `thm-shelah-baire-model-separates-baire-property-from-measurability` · theorem — Shelah's model separates universal Baire property from universal measurability

### `shelahs-baire-property-model-and-inner-model-lower-bounds-examples` — Shelah's Baire-Property Model and Inner-Model Lower Bounds: Examples and Counterexamples (5 item(s))

- `ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets` · example — A universal-meagre stage absorbs an old nowhere-dense tree
- `ex-raisonnier-first-difference-cover` · example — Cylinder covers generate the Frechet tails in the Raisonnier filter
- `ex-uniform-null-capture-on-a-block-function` · example — Uniform null capture for a constant block function
- `fs-the-baire-property-model-needs-an-inaccessible` · false-statement — False: the all-Baire-property model needs an inaccessible
- `ex-sweet-amalgam-over-a-common-complete-subalgebra` · example — Amalgamating two sweet models over a common complete subalgebra

### `banach-space-differential-calculus-and-banach-manifolds` — Banach-Space Differential Calculus and Banach Manifolds (18 item(s))

- `def-frechet-derivative-between-banach-spaces` · definition — Fréchet derivative between Banach spaces
- `lem-the-frechet-derivative-is-unique` · lemma — The Fréchet derivative is unique
- `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` · theorem — Chain sum product and composition rules for Banach derivatives
- `def-c-k-map-between-banach-spaces` · definition — C k map between Banach spaces
- `lem-banach-mean-value-estimate-on-a-convex-set` · lemma — Banach mean value estimate on a convex set
- `thm-inverse-function-theorem-for-banach-spaces` · theorem — Inverse function theorem for Banach spaces
- `thm-implicit-function-theorem-for-banach-spaces` · theorem — Implicit function theorem for Banach spaces
- `def-countable-base-banach-manifold-and-smooth-map` · definition — Countable base Banach manifold and smooth map
- `def-tangent-space-and-differential-on-a-banach-manifold` · definition — Tangent space and differential on a Banach manifold
- `lem-banach-manifold-differentials-are-chart-independent` · lemma — Banach manifold differentials are chart independent
- `def-split-banach-submanifold` · definition — Split Banach submanifold
- `thm-regular-value-theorem-for-banach-manifolds` · theorem — Regular value theorem for Banach manifolds
- `def-smooth-banach-vector-bundle-and-section` · definition — Smooth Banach vector bundle and section
- `thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold` · theorem — A transverse Banach bundle section has a split zero submanifold
- `def-fredholm-map-between-banach-manifolds` · definition — Fredholm map between Banach manifolds
- `lem-local-finite-dimensional-reduction-for-a-fredholm-map` · lemma — Local finite-dimensional reduction for a Fredholm map
- `prop-the-index-of-a-fredholm-map-is-locally-constant` · proposition — The index of a Fredholm map is locally constant
- `rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel` · remark — Surjectivity alone does not give a Banach submanifold without a split kernel

### `banach-space-differential-calculus-and-banach-manifolds-examples` — Banach-Space Differential Calculus and Banach Manifolds: Examples (5 item(s))

- `ex-the-derivative-of-a-bounded-bilinear-map` · example — The derivative of a bounded bilinear map
- `ex-the-banach-inverse-theorem-for-a-small-lipschitz-perturbation-of-the-identity` · example — The Banach inverse theorem for a small Lipschitz perturbation of the identity
- `ex-a-regular-level-set-in-a-banach-space` · example — A regular level set in a Banach space
- `ex-a-projection-with-finite-dimensional-kernel-is-fredholm` · example — A projection with finite-dimensional kernel is Fredholm
- `cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold` · counterexample — A closed uncomplemented subspace is not a split Banach submanifold

### `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` — Compact Self Adjoint Hilbert Schmidt and Trace Class Operators (21 item(s))

- `lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form` · lemma — Norm of a self adjoint operator from its quadratic form
- `lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign` · lemma — Norm point of a compact self adjoint operator is an eigenvalue up to sign
- `lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal` · lemma — Eigenspaces of a self adjoint operator are orthogonal
- `lem-orthogonal-complement-of-an-eigenspace-is-invariant` · lemma — Orthogonal complement of an eigenspace is invariant
- `thm-spectral-theorem-for-compact-self-adjoint-operators` · theorem — Spectral theorem for compact self adjoint operators
- `cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator` · corollary — Orthonormal eigenbasis for a compact self adjoint operator
- `lem-positive-square-root-of-a-compact-positive-operator` · lemma — Positive square root of a compact positive operator
- `def-absolute-value-and-singular-values-of-a-compact-operator` · definition — Absolute value and singular values of a compact operator
- `thm-singular-value-decomposition-for-compact-operators` · theorem — Singular value decomposition for compact operators
- `lem-singular-values-equal-approximation-numbers` · lemma — Singular values equal approximation numbers
- `cor-compact-operator-iff-approximation-numbers-tend-to-zero` · corollary — Compact operator iff approximation numbers tend to zero
- `cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators` · corollary — Finite rank operators are norm dense in compact Hilbert space operators
- `thm-hilbert-schmidt-operators-form-a-two-sided-ideal` · theorem — Hilbert Schmidt operators form a two sided ideal
- `def-trace-class-operator` · definition — Trace class operator
- `thm-trace-class-iff-product-of-two-hilbert-schmidt-operators` · theorem — Trace class iff product of two Hilbert Schmidt operators
- `lem-nuclear-series-characterizes-trace-norm` · lemma — Nuclear series characterizes trace norm
- `thm-trace-class-is-a-two-sided-banach-operator-ideal` · theorem — Trace class is a two sided Banach operator ideal
- `def-trace-of-a-trace-class-operator` · definition — Trace of a trace class operator
- `thm-trace-is-absolutely-convergent-and-basis-independent` · theorem — Trace is absolutely convergent and basis independent
- `thm-cyclicity-of-the-trace` · theorem — Cyclicity of the trace
- `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues` · theorem — Trace of a positive operator is the sum of its eigenvalues

### `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` — Compact Self Adjoint Hilbert Schmidt and Trace Class Operators — Examples (8 item(s))

- `ex-diagonal-schatten-class-criteria-on-ell-two` · example — Diagonal Schatten class criteria on ell two
- `ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent` · example — Volterra operator is Hilbert Schmidt and quasinilpotent
- `ex-rank-one-operator-adjoint-norm-and-trace` · example — Rank one operator adjoint norm and trace
- `ex-integral-operator-trace-under-a-valid-diagonal-hypothesis` · example — Integral operator trace under a valid diagonal hypothesis
- `cex-compact-does-not-imply-hilbert-schmidt` · counterexample — Compact does not imply Hilbert Schmidt
- `cex-hilbert-schmidt-does-not-imply-trace-class` · counterexample — Hilbert Schmidt does not imply trace class
- `cex-trace-of-products-is-not-cyclic-without-summability` · counterexample — Trace of products is not cyclic without summability
- `rem-schatten-p-classes` · remark — Schatten p classes

## Your seams

Your pages depend on another group's:

- `banach-space-differential-calculus-and-banach-manifolds` requires `compact-operators-and-riesz-schauder-theory` (group c, batch 2)
- `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` requires `compact-operators-and-riesz-schauder-theory` (group c, batch 2)
- `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` requires `square-integrable-kernels-and-hilbert-schmidt-compactness` (group c, batch 2)

Another group's pages depend on yours:

- `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (group a) requires your `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`
- `banach-algebras-spectrum-and-holomorphic-functional-calculus` (group b) requires your `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

14 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-6b82815b3d101b985142a511 · `thm-dmc-implies-urysohn-lemma`** (from group e, gap-a-reader-closes) — Step 8.1 defines U_r := U_{n,i} for r = i/2^n in D and then 'put U_1 := X', but the construction's tuples index the dyadic rationals i/2^n in (0,1] with top entry U_{n,2^n} = X minus G at r = 1 for every n, so U_1 receives two different values, and r = 0 (which the cited def-the-dyadic-rationals-of-the-unit-interval includes in D) receives none; step 10.1's claim '{r in D : a in U_r} = D' needs a in U_0. The cited dyadic-scale lemma hypothesises a family on all of D with U_1 = X, so its hypothesis is not literally met. Repairable by defining U_0 := empty, setting U_1 := X (the closure condition for r < 1 is then automatic) and replacing D by D minus {0} in step 10.1, or by reindexing the scale by (0,1].
- **s8a-d8db0ad2543ea7799a6ff7fb · `lem-pmea-three-quarter-separation-estimate`** (from group e, would-be-fatal) — The Statement assumes only a discrete family {F_i} of subsets of X, but step 2.1 via [L1] needs 'unions over subfamilies of a discrete family are locally finite, hence closed', which is false without closedness: for X = R the one-member family {(0,1)} is discrete and its union is not closed, and the two subunions must be disjoint closed sets before normality can separate them. The proved claim is the closed-family version, which is exactly what the consumer thm-pmea-normal-low-character-spaces-are-collectionwise-normal assumes. Fix: add 'closed' to the hypothesis (or take closures).
- **s8a-2d8c48ec90229bcaf82b2c3f · `thm-hilbert-schmidt-operators-form-a-two-sided-ideal`** (from group e, gap-a-reader-closes) — Step 2.1 fixes 'a Hilbert basis F of K' to run the adjoint argument, but claim 3 supplies bases E of H and E_0 of H_0 only and the item assumes AC_omega; the pair's convention elsewhere (def-trace-of-a-trace-class-operator) is that bases are supplied data and existence is not asserted, so the written proof invokes an object its hypotheses do not provide. The claim itself is true (compare s_n(TB) <= ||B|| s_n(T) via the singular-value characterisation).
- **s8a-266a9a4c5a85e2e016394b1d · `lem-corson-rational-metric-not-metacompact`** (from group e, would-be-fatal) — Steps 3.1-4.1 assert that automorphisms fixing a finite E and a point a move an 'unsupported witness of V' through rational positions and thereby produce 'infinitely many distinct members of V through a'. V is an arbitrary refinement member rather than a ball, 'witness of V' is undefined, and nothing shows the images p(V) (p in fix(E union {a})) are distinct, so the contradiction with point-finiteness is not established by the written proof; the statement is Corson's and presumably has a fuller argument in the source.
- **s8a-ec870d980f5276b76506b70d · `thm-fleissner-normal-moore-space-construction`** (from group e, gap-a-reader-closes) — The Statement's metacompactness clause ('The same space carries the stated uniform base, hence is metacompact') is discharged only by citing the Aleksandrov-Arhangel'skij uniform-base/metacompact equivalence from the source, which the item itself records the library does not re-prove; the proof-technique line also cites 'steps 11.2-7.6', which do not exist in the item's own numbering, and the Remarks list two local repairs to the printed source (the (12) bound and the strictness in j(sigma)).
- **s8a-ca824311788e232f38dcc36a · `thm-compact-hausdorff-baire-implies-dmc`** (from group e, gap-a-reader-closes) — Several load-bearing steps are compressed. Step 5.1's description of the complement of K ('s not an initial segment of t ... equal-but-not-required') is garbled and has to be read as pairs for which s is not a proper initial segment of t. Step 6.2 passes from a family of closed subsets of K to 'closed subsets of X' without saying how closedness in K is upgraded or how the added cylinder-complement sets enter. Step 8.2's 'pi_n[E] is closed ... hence finite because the discrete space T is compact only when finite' needs the argument that a closed subset of T* contained in T is compact in the discrete space, hence finite. Steps 9.2-9.3 need reconstruction of the role of E* and of the sets added to it.
- **s8a-bc74725cf03dc8489a16047a · `thm-dc-iff-products-compact-hausdorff-are-baire`** (from group e, gap-a-reader-closes) — Step 4.1 uses that the cylinder C = intersection of pi_i^{-1}[B_i] over the finite F is nonempty; the membership condition of Y only says C is contained in B intersect U_n, so nonemptiness follows from the assumed X nonempty plus finite choice but is not stated. Step 5.2 asserts that A^omega with the product topology 'is the discrete sequence space with its reciprocal first-difference metric' and that the U_i are open dense, without a cited topology equality.
- **s8a-855e17bcad2d1e9c25d40ad4 · `thm-moore-spaces-are-subparacompact`** (from group e, gap-a-reader-closes) — Step 2.2 concludes from 'z, y in G in G_n and G contained in St(y,G_n) contained in U_alpha' that 'every member of G_n containing z lies in U_alpha'; that does not follow from the single G. The correct argument is that each G' in G_n containing z meets F(alpha,n) by the closure criterion [L2], and then G' is contained in St(y',G_n) contained in U_alpha for y' in G' intersect F(alpha,n).
- **s8a-1fb518e7fb1d4fb4ceb8668e · `lem-collectionwise-normal-moore-spaces-are-screenable`** (from group e, gap-a-reader-closes) — Same closure step as thm-moore-spaces-are-subparacompact (step 2.2): the passage from one G in G_n containing z to 'every member of G_n containing z lies in H_alpha' is not justified as written; each such G' has to be intersected with F(alpha,n)-style data via the closure criterion.
- **s8a-ca1bd3129306695006bee125 · `thm-products-of-cofinite-spaces-compact-iff-bpi`** (from group e, gap-a-reader-closes) — Step 4.1's 'maximality of G_i forces A_i to be a singleton' needs the argument that if the intersection A_i of the closed members of the ultrafilter is finite and nonempty, then for a in A_i the finitely many closed members witnessing the omission of the other points have an intersection in G_i equal to {a}; A_i itself need not be a member of G_i.
- **s8a-d37abfcfbcb27418abfb7b32 · `thm-shelah-sweet-amalgamation-preserves-sweetness`** (from group e, presentation) — Step 3.1 says 'the finitely many witness choices are available in ZF+DC', and lem-shelah-sweet-density-transfer-along-complete-suborders step 2.1 builds its sequence by DC, but neither item lists def-dependent-choice or def-axiom-of-choice among its deps nor mentions a choice principle in its Statement, although the page prose claims the branches are stated with exact choice costs. Bookkeeping only if the ambient theory is ZFC.
- **s8a-071b5ee7ed3b0b8a77c3cd10 · `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff`** (from group e, presentation) — The Statement's clause 'countable choice and BPI imply neither Urysohn's lemma nor bounded Tietze extension' reads as an implication claim; what the cited items prove is that each is consistent with the failure of Urysohn's lemma and of bounded Tietze extension. Reword to 'are consistent with the failure of'.
- **s8a-14e742b1710841155dcff0da · `ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets`** (from group e, presentation) — Step 2.2 says 'the sibling of eta remains in T'' and carries the splitting that keeps [T''] of empty interior', but a node eta of T at level n need not have a sibling in T at level n (perfectness gives two incomparable extensions above eta, not a sibling at the same level). The empty-interior conclusion is correctly obtained in step 1.2 as a finite union of closed nowhere-dense sets; only the displayed level-by-level sentence is wrong.
- **s8a-1ebb02de9a4c307923f578ae · `lem-sigma-cellular-base-yields-a-compatible-metric`** (from group e, presentation) — Step 4.1(i) introduces an undefined 'N' ('for y with d(x,y) < 2^{-(N+1)} and N >= k'); the intended quantifier is over y with d(x,y) < 2^{-(k+1)}, so that k(x,y) > k and delta_k(x,y) = 0. Presentation only, but the sentence does not typecheck.

Append one owning-group disposition per warning to `research/phase-2-remaining-27-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold` | `banach-space-differential-calculus-and-banach-manifolds-examples` | gpt-5.6-terra | `d6e236d77869ccf2ab3894237e5b7098ae7ed52b81c8014a3b7cadaabe5dbf2e` |
| `cex-compact-does-not-imply-hilbert-schmidt` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | gpt-5.6-terra | `cab6541e3d98ed5d98e4a864a80e8a3e9ea44d5001c9e75f57fe73a4e82e23aa` |
| `cex-kelley-cofinite-set-is-not-closed` | `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples` | gpt-5.6-terra | `9e5a3cd8b47dffa6e59ea01d44de80bdbfc1b51a87818205f2c36d4bbda1900b` |
| `cex-trace-of-products-is-not-cyclic-without-summability` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | gpt-5.6-terra | `892b567ae4547835a9560fd898349e7e98e6640ebba3f1361269e41de8124d35` |
| `cor-brunner-models-also-refute-tietze-extension` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `ab544d7fde585b369bc4d6331c938c8ebc837bd65cc01b2afe51913f698b445b` |
| `cor-compact-operator-iff-approximation-numbers-tend-to-zero` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `2944be90181c8a6e1e23d4fd645bf4efca336409f0c7e7b3e234d025522712c0` |
| `cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `fa58431db5cc1542409d2ad256c6455ccd3749fc540003e0c3db76e239b8e8ce` |
| `cor-zf-does-not-prove-urysohn-lemma` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `140daa0ff028c3abe652e713937ee2737bf1d1fdb3781cee172fff0ec78dd467` |
| `def-absolute-value-and-singular-values-of-a-compact-operator` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `253022a5ca8b432d0b8b3c24e2b272f816c1b975445969e277d0f87ad87dbca9` |
| `def-boldface-sigma-one-three-measurability` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `d822499e0cd1aa021a4c7953d2db5a9d897b84e607c6c591c6b57283cbeff6c9` |
| `def-brunner-ordered-lauchli-permutation-models` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `381fca7cbbdd81fd2fdf8375834df4f5bbdeab5266cf90881918532b626c7f33` |
| `def-corson-ordered-rational-permutation-model` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `bc862980b7358b089778c1b97b8bf09acb47559196074352c4c08d2560b07d41` |
| `def-countable-base-banach-manifold-and-smooth-map` | `banach-space-differential-calculus-and-banach-manifolds` | gpt-5.6-terra | `b953363e5a7214993d1c092e02d1e756fddc40b940c6e34315118da0035357b4` |
| `def-dependent-multiple-choice-finite-level-tree` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `e68d3d14268c73542b5e5c4a0be2b8d2c2cbce539c17885ad028307e42bd8260` |
| `def-fleissner-hyp-covering-interface` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `0121bf897a8a590ac11415e100bc4d0549ed17b090b9a75c2da11c1d3eb3c5ea` |
| `def-good-tree-watson-symmetric-stone-model` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `e90266f46cf03df0324304f365503c7442733eaf887c6e27df440801185ac176` |
| `def-metacompact-space` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `e43bd12bec41f56812145e04f8db42e0fc0ee271fd56ab4cbe725baf68ce85ee` |
| `def-moore-spaces-and-developments` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `2bb07215ca60ef3411084ecae246ed1dfd5bbb28a890b1ec3f2ab13080ebb097` |
| `def-product-measure-extension-axioms-pmea-and-pmea-sigma` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `d59965043f3f4d31cd686c21498d484b698787c3f8bffbf9bf5a044e9c57f265` |
| `def-q-sets-and-heath-moore-space-interface` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `8ec2a8e8b53c02b4f32c1cbe0934fbd4dd5832c15a5e78b82d4ed07d496f0db9` |
| `def-rapid-and-raisonnier-filters` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `065c52e79e7f682b75704ded12bb22541a121e1317f764ced4724488374babc4` |
| `def-shelah-sweetness-model` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `9094d669087542cc3a0d1e61de853a715cce59c0f1bbaba249d7002146be73cb` |
| `def-shelah-universal-meagre-forcing` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `f26bcdc87d551d7d84c537e0e34a484e33647d624f7c21db5a30a8d70cd87e31` |
| `def-smooth-banach-vector-bundle-and-section` | `banach-space-differential-calculus-and-banach-manifolds` | gpt-5.6-terra | `6674790387d140f76a774b2f24650e961f2a9df89db06e192f938eec260af14a` |
| `def-split-banach-submanifold` | `banach-space-differential-calculus-and-banach-manifolds` | gpt-5.6-terra | `aeb2f6eacaed9b508115f5a39b15e922c8e7cb0496df6b3dbe494e1cd3705191` |
| `def-tangent-space-and-differential-on-a-banach-manifold` | `banach-space-differential-calculus-and-banach-manifolds` | gpt-5.6-terra | `70c45e06fb93554155e1124d2bafba4ced4c639c7749c0b275f76b0c00f6c2ec` |
| `def-trace-class-operator` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `d2ac2dd2b0ff897bc7cacdaed573af5b36ce37d232bc8c0d2cc2718508dcc74b` |
| `ex-a-projection-with-finite-dimensional-kernel-is-fredholm` | `banach-space-differential-calculus-and-banach-manifolds-examples` | gpt-5.6-terra | `817077fa2a42a7f35f338813bf442f51f82097b80d68acfc76ba45ff8a7853e5` |
| `ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets` | `shelahs-baire-property-model-and-inner-model-lower-bounds-examples` | gpt-5.6-terra | `c09f9bdae8a7860da4b83e4246476ac951cef11e30195ae9a80de0758eade56c` |
| `ex-canonical-least-ball-selection-in-separable-baire-proof` | `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples` | gpt-5.6-terra | `b00917b9cfaf642de27f6e6902d21b306f668d5f3da35f4ee8e740e9d09c5075` |
| `ex-development-stars-form-a-countable-local-base` | `normal-moore-spaces-pmea-and-consistency-strength-examples` | gpt-5.6-terra | `88d3e2644ca7afc57ada9f10dc7d7bd56206713cb2bf3b386e3e3257aaaebb71` |
| `ex-diagonal-schatten-class-criteria-on-ell-two` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | gpt-5.6-terra | `bd27005c51500135972cf48d1b225f5117cd4c9c0d8295d36030889bde51834c` |
| `ex-dmc-urysohn-finite-menu-intersection` | `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples` | gpt-5.6-terra | `e630d8602d3414f41622229b8b3d9d8b153c37afd057ddfebebfdc503e5007b7` |
| `ex-integral-operator-trace-under-a-valid-diagonal-hypothesis` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | gpt-5.6-terra | `752ab0a8ac6183fbdb3e67371f239a3d8c356c2b07618f084c881cc30cbf5d2c` |
| `ex-pmea-three-quarter-event-calculation` | `normal-moore-spaces-pmea-and-consistency-strength-examples` | gpt-5.6-terra | `01636fa34999b8b327bbb1266b605859f4a234a63870606bc06c21b560d3becb` |
| `ex-raisonnier-first-difference-cover` | `shelahs-baire-property-model-and-inner-model-lower-bounds-examples` | gpt-5.6-terra | `e1005be0b84ba29987d74e808d34a2fbd05fd478de7dccabc740b25bb54ca779` |
| `ex-rank-one-operator-adjoint-norm-and-trace` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | gpt-5.6-terra | `a4efc7498e4ea7e38cec0da6e121e3052f44404bb3a5e065fd03285cd2982126` |
| `ex-sweet-amalgam-over-a-common-complete-subalgebra` | `shelahs-baire-property-model-and-inner-model-lower-bounds-examples` | gpt-5.6-terra | `f00eb31165a28809c171f3dbc496d60cb8ac545f29a5f22ca6b42feed8740918` |
| `ex-the-derivative-of-a-bounded-bilinear-map` | `banach-space-differential-calculus-and-banach-manifolds-examples` | gpt-5.6-terra | `ed1612b2dd2e85cc542ba21a6d2284ca8129bfcde7e735e291af006a8c8e1c65` |
| `ex-uniform-null-capture-on-a-block-function` | `shelahs-baire-property-model-and-inner-model-lower-bounds-examples` | gpt-5.6-terra | `c540f3b0fa98537db41ab78d8fbb32688ab67432fb93be14e9e39acda0b4d113` |
| `ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | gpt-5.6-terra | `7d26f8af3578c49963dac3821331ef6256637ceb19d870db3729e42ab560d8b2` |
| `fs-bpi-proves-stone-for-metric-spaces` | `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples` | gpt-5.6-terra | `1bbba799e73856f3f4075ee1f90f6a12ab7e44affccc6e959169a585f57cff03` |
| `fs-zfc-proves-normal-moore-space-conjecture` | `normal-moore-spaces-pmea-and-consistency-strength-examples` | gpt-5.6-terra | `9a2dcdf1587f483016b39820e41e01cb84fc41b86fd256633e4687c2f6eccd58` |
| `lem-banach-mean-value-estimate-on-a-convex-set` | `banach-space-differential-calculus-and-banach-manifolds` | gpt-5.6-terra | `285492e647cf3bbd11f91a2fa9057e7bab1ea56c3921c1101acba09b330fc495` |
| `lem-brunner-choice-and-urysohn-obstructions` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `977eea32f02e13f27d7cfbb74644c832195b201cc92bdb0ff8d81d5de45f2fd4` |
| `lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `b5f8244de7e15bb82f4126abb7cd6cbb532ce5cf1d3b2529effc520d8807b894` |
| `lem-corson-rational-metric-not-metacompact` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `95c3085c7e562453d2e2d54b89ddbdc08d0777bc1a938742103152446a5234d7` |
| `lem-corson-stone-obstruction-is-ordinal-boundable` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `f152de5293a2303833da5c5748f058d78138506e9b38008fa2763e8021e3ea6d` |
| `lem-good-tree-watson-omega-sequence-closure` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `2f30142633a48eef49290c5a8b5279be8a943e74a7e344da24ca573d343e0b24` |
| `lem-good-tree-watson-selector-obstruction` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `da1d80e98f9626ee6566a66f8069eec6efe855314b5e80a0cef5a67338bfd1e0` |
| `lem-isolated-point-kelley-repair` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `a18d8de6e5e57baaaa956d7cb4eceeccfb98617396a85eb48ed893a4eba6d84f` |
| `lem-ladder-separation-from-hyp` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `c010e8c47d5007faa3eb45074bddb30d55e14569db28a5b9cabb0621e6341987` |
| `lem-local-finite-dimensional-reduction-for-a-fredholm-map` | `banach-space-differential-calculus-and-banach-manifolds` | gpt-5.6-terra | `40ad321635c344fa59a71c0e69d5326999ea4b9e72500074312af81663f92a00` |
| `lem-ma-produces-an-uncountable-q-set` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `249765950830fff6f40927c5c17791f60eea3feef31850f2d8493bb01f4d951e` |
| `lem-measurable-null-code-orders-bound-constructible-null-unions` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `0825cd3a6e00736289ad6aeb41c5baa7eeaac52ce1719610ae596a7c1b9743b3` |
| `lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `e64f49807d949356a8e38a267a858ad8b7802d65535742d11c88a2bdee052d0f` |
| `lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `0402b12204235e0d0eb0301a39c5bc320863bc16e40ed885f1f34f85debae092` |
| `lem-nuclear-series-characterizes-trace-norm` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `6935dc90c920edea4a2bb41d17e0ae5f8739e61ca69a4aba322310aa744164fd` |
| `lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `924149b7a2fca2f3e3799b4e08b3866b81b5dd3d44d4f9944c43ad66b03658a8` |
| `lem-pmea-three-quarter-separation-estimate` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `cf15b7e0f09b95d7af0eeac2e89a17618f24cb397b4df17d08e615e92a49a147` |
| `lem-positive-square-root-of-a-compact-positive-operator` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `973dbb8a4bcd0629c6f0ad042b5659d2f62aee0e781d6a0a90ea91b0e27a7153` |
| `lem-raisonnier-family-is-a-sigma-one-three-filter` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `ed95f883e9aa4c7701c68bbc06143aa83281e0213cfb8ef7a9ef914c3035fc46` |
| `lem-shelah-continuous-unions-of-sweetness-models` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `1afee8117a4c4640d7e74b42c90fa15df1a59d36e597985b5b0e6dc43ce8e8e9` |
| `lem-shelah-homogeneous-truth-has-baire-representatives` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `656a57915da27a8a346f0b8dd2e85103a00834ef8c6d5525a85ca4f6ef0ad3b6` |
| `lem-shelah-inner-model-is-closed-under-ambient-omega-sequences` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `e1fa82a82b71bd352a45ad73570c92b3b2aebb3bf080df4e6431187618cfc7d4` |
| `lem-shelah-real-name-capture-and-coded-meagre-unions` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `ac13b99e2f2ca5eefb00017eea59e0f87d70b8ded4bd3022ac2fc47d0ab767d7` |
| `lem-shelah-sweet-density-transfer-along-complete-suborders` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `56fb44637ece6c0792ca95e659ce7dfc7d97940fd3223964fb313c99f3e75277` |
| `lem-shelah-sweet-forcings-are-sigma-directed-ccc` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `111f440e750fbd3b13a10d014516d321dfec58aa7cc42a7904a26dbf67fc8ad7` |
| `lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `cb960d474e3c0ae73dc98422e5cf6a78e86b34e904b22de251cc3163284d8798` |
| `lem-sigma-cellular-base-yields-a-compatible-metric` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `0adc33d1a83a8c83cb1297bf89d791d1d366fd80737c67a6d5b067723cc16d4c` |
| `lem-solovay-almost-disjoint-extension-under-ma` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `554ecae4bd431f25a8bc8fc29f41dbe04088175336358473aad6394ce3864164` |
| `lem-uniform-null-g-delta-capture-functions` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `60100e4f51badb52ef4fcafd213dfb676c5e3cb0d9239c1f00ff13004549313b` |
| `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `3c1dff51f4730c14064ba15fd0bd329540c5bea9e170dbb3aef76943a9482ef9` |
| `rem-dmc-versus-dc-over-zf-is-open` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `f97d090df4c60008ad48100fae4c52c6a399c97d2aa72bc01b96daef8e61b256` |
| `rem-schatten-p-classes` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | gpt-5.6-terra | `b0037d47d27816c47c1752b1255a847599a9bd8a79e6d8f960878946080ed5f2` |
| `rem-stone-exact-choice-strength-open-status` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `43d1a9418ad182d9ade3de6bbc40d0d8dbb61a5bbb88cd1487bdbe31e6094928` |
| `rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel` | `banach-space-differential-calculus-and-banach-manifolds` | gpt-5.6-terra | `2ea89aec6a919e08b3c4004ca2452595bdf9adecdc30ddcdf663b3b243e012fe` |
| `rem-urysohn-implies-dmc-open-status` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `61a2677b01dc39f233228577445492b201dc26afdd488ff47ba6a27f040ae7d9` |
| `thm-all-real-sets-measurable-gives-an-inaccessible-inner-model` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `bea1965df804b4a4a9fe6c65e6c97f802f7e59158ed8127f3aad4aac1f495904` |
| `thm-baire-property-model-equiconsistent-with-zfc` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `88bf30f1310977b0d532e4302cb6fa7f96a4d30482b00ddf73de1cf6c232eadc` |
| `thm-bing-q-set-moore-space-is-normal-and-nonmetrizable` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `ae20a65d99842826963b90b5a090a33d67caff08ed84736d6d3c9a2173c244a3` |
| `thm-ch-normal-nonmetrizable-moore-space` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `e7862fc13d51715f952dfc10913b5dca1d22727433da374b54448a1e6d5f585c` |
| `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` | `banach-space-differential-calculus-and-banach-manifolds` | gpt-5.6-terra | `5ba58c020e86e86c139965a056c23624663b31a50733bad09ee3c8e32343e06b` |
| `thm-compact-hausdorff-baire-implies-dmc` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `a0cf21dc945cb42d58b10298ba7a7da265fbf869d8eb74d8335a5de714157a82` |
| `thm-compact-t1-product-theorem-iff-ac` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `71d5f551933673ab534feab8d9c8110b2e499dfe2de14deef3262446a0948345` |
| `thm-cyclicity-of-the-trace` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `ba6bf65234796e3b70bbee3a8b64af1be35e4bf445e9d40a5d4b0dbceeaca082` |
| `thm-dmc-implies-urysohn-lemma` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `6fcf566f0b933905c335628fd0b219b1e30a04fdaeab69a14d241b240324a269` |
| `thm-dmc-tree-and-successor-menu-formulations` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `a5c2006c3e477f99ca455ae88a128d8fa4116c78863523e3daf5c2c07b5dac06` |
| `thm-effective-metacompact-discrete-metrics-implies-ac` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `eeadfb346a817b299dae32b21bd492b888cbfc362bef967c35f9d5b8eb4ec932` |
| `thm-extreme-amenability-yields-bpi-in-finite-support-models` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `6ae1e966e726da6bffe3c1eb2f44a267a444beef8f505f4fc54c1bf0332786dc` |
| `thm-fleissner-hyp-normal-nonmetrizable-moore-space` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `2d9961c8cef7a913039b9efec31d03c2c285f0fa317ca5ccaaea1106354da1f7` |
| `thm-fleissner-normal-moore-space-construction` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `f4c3f9655649853c3d488b8bdb72aab9abff5b916007aca4ad5318220c8c32f4` |
| `thm-formal-nmsc-consistency-lower-bound` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `fa0e8403e445afeaf1d3ea967ce003195bf6fc40ef0b6923a5f8a7decf4853bc` |
| `thm-hilbert-schmidt-operators-form-a-two-sided-ideal` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `b2e890b2710f8cde68dc01ac4c8f4c2db7a0add5087700442a23fcd9cf5671ee` |
| `thm-inverse-function-theorem-for-banach-spaces` | `banach-space-differential-calculus-and-banach-manifolds` | gpt-5.6-terra | `566a07066cfa924b430c104f3ea46bafbac305caf0abfdc01fab4a56d5a82554` |
| `thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `e60c3be33ddf9c5e768c248af4de3dbf5540b40937f1d0369ff4bc9fda65944c` |
| `thm-moore-spaces-are-subparacompact` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `81ec65b82ea76883bf0cb36c4cfceb75dad7d13902dbb436166ba03eeb3c8371` |
| `thm-normal-moore-consistency-strength-sandwich` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `da3cd87289699dba45f94d7936963633d5d181121778f2f443eb95f4ed7fdb77` |
| `thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `2a8c594771e134b18991499478437fc393c92926e19370653a78c0be6b1cfae3` |
| `thm-pmea-implies-normal-moore-space-conjecture` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `cea011def00b348b8cd3d1669f3b1a26a886346c29f496b0ab4e9a48790dddc3` |
| `thm-pmea-normal-low-character-spaces-are-collectionwise-normal` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `92c939b7ecdf68393a8dc6bcd287036e5ba362f34958854ce17a22762d9b0924` |
| `thm-products-of-cofinite-spaces-compact-iff-bpi` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `a783d91ca212682042da8d830e27429df0ee8aa2c4131ea6028c3aba34cfdc5e` |
| `thm-raisonnier-filter-is-rapid-from-null-code-measurability` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `42213c4ab799b832f55a27f0492c5422446b5cd8efeceb16df73a57189f26952` |
| `thm-rapid-filters-are-not-lebesgue-measurable` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `bde0a897b8baff356d88a710b3918f602f2bc09cb49fe3708fd303ad1ff3f554` |
| `thm-relative-consistency-bpi-without-stone` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `6551a505c520307630677fe65175d0704162db3b1afd5c76b81a495d71392743` |
| `thm-relative-consistency-bpi-without-urysohn` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `e87fdd397eb494e4e582b0fbac74de9bdd22e16ed213751488e20c58058f59f1` |
| `thm-relative-consistency-countable-choice-without-urysohn` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `bd99608cec7d8e824c6cdf7e637f1dcce119d97240d9ee48c84eaa2440df5bfb` |
| `thm-relative-consistency-dc-without-stone` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `0ea5942729302b21b607cc2e30a31f197477c74b77457d0760e95f2fab34b90f` |
| `thm-separable-complete-metric-baire-in-zf` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | gpt-5.6-terra | `631c1dc9fcebdf67feb6e65e8f8e3810138102814a6e61d5a870d6a0b0fae663` |
| `thm-shelah-baire-model-separates-baire-property-from-measurability` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `8893ce04a1affd231784d3187139890e35b6999a244896ff5ababdf88dfb836f` |
| `thm-shelah-ch-omega-one-sweet-construction` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `a53e0b11840f028f48a2a783b65b66891e7e6dbc40af11b22853dd8fc46b1e9a` |
| `thm-shelah-inner-model-all-sets-of-reals-have-baire-property` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `af9b0a77075ba9bd3cd682769395859ae28601ba06ab0a3ce5028711d2f7f20f` |
| `thm-shelah-inner-model-satisfies-zf-and-dependent-choice` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `6c668080fcadd9ebeab39ba56c2ee2a8642fac3a70bad30a6cf4c1c73e5348f6` |
| `thm-shelah-sweet-amalgamation-preserves-sweetness` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `9807a4d8fcf88a6fe95668e7f106be382e7fa3fd56b5e4e0fcb0112d0fcbd72c` |
| `thm-shelah-sweet-partial-isomorphism-extension` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `a82fa741d982cc366ffe745c331d69766053c8896723ab9daaa9ec108d2ab136` |
| `thm-shelah-universal-meagre-composition-preserves-sweetness` | `shelahs-baire-property-model-and-inner-model-lower-bounds` | gpt-5.6-terra | `9eeab02fe2ae7d2ecb6042aa0531455b99f94b0631b7a757aadb506e0373c1ba` |
| `thm-singular-value-decomposition-for-compact-operators` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `a3524f533a36cfdab4753e2543dcb030e8c1ec405379277934fd0cc48e63917f` |
| `thm-spectral-theorem-for-compact-self-adjoint-operators` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `157d91c860cdc02188071dd11693ebd9d252de83e2af759d8bb722c5fa187dd1` |
| `thm-strongly-compact-relative-consistency-normal-moore` | `normal-moore-spaces-pmea-and-consistency-strength` | gpt-5.6-terra | `3cf65c4789628c51660b2b22d8aacfd66e79479c24b9802a1d3a227b3b63cef6` |
| `thm-trace-class-iff-product-of-two-hilbert-schmidt-operators` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `f08023c26bf77de4a6da2b96ec37ec6343c4f8c98406f1d33924f27797fe1b9b` |
| `thm-trace-class-is-a-two-sided-banach-operator-ideal` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `475fd360fb8cd4990d06ff0e295820e2e9170a2c7cdd057f608e42ab78e5b45a` |
| `thm-trace-is-absolutely-convergent-and-basis-independent` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | gpt-5.6-terra | `4f8ec60f08727a7a14c100672b15c1bbfeb48ec24470151b3c0a0c1782a15dfe` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-remaining-27`

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

Append one row per rejection to `research/phase-2-remaining-27-judge-adjudications.jsonl`
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
decision in `research/phase-2-remaining-27-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-remaining-27-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-remaining-27-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-remaining-27-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
