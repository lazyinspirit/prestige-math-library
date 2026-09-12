# Step 7 adjudication — group **c**, run `phase-2-next-17`

You are the group Alpha for batches **4**: 1 A/B pair(s), 2 page(s), 51 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-17-alpha-c-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-17-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `grothendieck-spectral-sequences-and-computations` | A | homological-algebra | 365.069 | `double-complexes-exact-couples-and-convergence`, `derived-categories`, `derived-functors`, `delta-functors-and-universality`, `group-cohomology-as-a-derived-functor`, `universal-coefficients-and-kunneth-theorems`, `group-extensions-complements-and-schur-zassenhaus` |
| 4 | `grothendieck-spectral-sequences-and-computations-examples` | B | homological-algebra | 365.07 | `grothendieck-spectral-sequences-and-computations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `grothendieck-spectral-sequences-and-computations` — Grothendieck Spectral Sequences and Computations (42 item(s))

- `def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex` · definition — Cartan-Eilenberg injective resolution of a bounded-below complex
- `lem-finite-biproducts-of-injective-objects-are-injective` · lemma — Finite biproducts of injective objects are injective
- `lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense` · lemma — A Cartan-Eilenberg resolution totalizes to an injective replacement
- `thm-cartan-eilenberg-injective-resolutions-exist` · theorem — Cartan-Eilenberg injective resolutions exist
- `def-right-hyperderived-functor-of-a-complex` · definition — Right hyperderived functor of a complex
- `lem-hyperderived-functors-are-independent-of-the-supplied-cartan-eilenberg-resolution-up-to-natural-isomorphism` · lemma — Hyperderived functors are independent of the supplied resolution
- `lem-cartan-eilenberg-comparisons-preserve-both-filtrations` · lemma — Cartan–Eilenberg comparisons preserve both filtrations
- `lem-finite-diagonal-cohomological-double-complex-spectral-sequences` · lemma — Finite-diagonal cohomological double-complex spectral sequences
- `thm-first-hypercohomology-spectral-sequence` · theorem — First hypercohomology spectral sequence
- `thm-second-hypercohomology-spectral-sequence` · theorem — Second hypercohomology spectral sequence
- `prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f` · proposition — Hypercohomology edge maps are canonical
- `def-g-acyclic-object-for-a-left-exact-functor` · definition — G-acyclic object for a left-exact functor
- `lem-an-injective-resolution-for-f-produces-a-g-acyclic-resolution-after-f` · lemma — Applying F gives a termwise G-acyclic complex
- `lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite` · lemma — The total Cartan-Eilenberg complex computes the derived composite
- `lem-the-two-filtrations-have-e-two-pages-rpg-rqf-and-the-derived-composite-edge` · lemma — The two filtrations identify E2 and the composite edge
- `thm-grothendieck-spectral-sequence` · theorem — Grothendieck spectral sequence
- `thm-naturality-of-the-grothendieck-spectral-sequence` · theorem — Naturality of the Grothendieck spectral sequence
- `thm-five-term-exact-sequence-of-the-grothendieck-spectral-sequence` · theorem — Five-term exact sequence of the Grothendieck spectral sequence
- `cor-grothendieck-collapse-when-one-functor-is-exact` · corollary — Grothendieck collapse when one functor is exact
- `cor-derived-composition-isomorphism-under-total-acyclicity` · corollary — Derived composition isomorphisms under total acyclicity
- `rem-the-grothendieck-spectral-sequence-has-a-dual-left-derived-form` · remark — Dual left-derived Grothendieck spectral sequence
- `thm-universal-coefficient-spectral-sequence` · theorem — Universal coefficient spectral sequence
- `thm-kunneth-tor-spectral-sequence` · theorem — Kunneth Tor spectral sequence
- `cor-the-pid-kunneth-short-exact-sequence-is-the-two-column-collapse` · corollary — PID Kunneth is a two-column collapse
- `prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem` · proposition — UCT and Kunneth collapse retains an extension problem
- `thm-hyper-tor-spectral-sequence` · theorem — Hyper-Tor spectral sequence
- `thm-hyper-ext-spectral-sequence` · theorem — Hyper-Ext spectral sequence
- `lem-invariants-for-a-group-extension-compose` · lemma — Invariants for a group extension compose
- `lem-the-invariants-functor-for-n-sends-injectives-to-q-acyclic-modules` · lemma — N-invariants send injective G-modules to Q-acyclics
- `lem-restriction-of-injective-group-modules-is-injective` · lemma — Restriction of injective group modules is injective
- `thm-lyndon-hochschild-serre-spectral-sequence` · theorem — Lyndon-Hochschild-Serre spectral sequence
- `thm-five-term-exact-sequence-in-group-cohomology-from-lhs` · theorem — Five-term exact sequence from LHS
- `prop-lhs-collapses-for-a-cohomologically-trivial-normal-subgroup` · proposition — LHS collapse for a cohomologically trivial normal subgroup
- `def-spectral-sequence-computation-record` · definition — Spectral-sequence computation record
- `prop-an-e-two-page-alone-does-not-determine-the-abutment` · proposition — An E2 page alone does not determine the abutment
- `prop-a-collapsed-first-quadrant-spectral-sequence-with-field-vector-space-abutment-splits-noncanonically` · proposition — Collapsed vector-space spectral sequences split noncanonically
- `fs-the-grothendieck-spectral-sequence-needs-only-left-exactness-of-f-and-g` · false-statement — Grothendieck needs only left exactness
- `fs-rpg-rqf-is-the-e-one-page-of-the-grothendieck-spectral-sequence` · false-statement — R^pG(R^qF) is the E1 page
- `fs-a-cartan-eilenberg-resolution-only-resolves-the-terms-of-a-complex` · false-statement — Cartan-Eilenberg only resolves terms
- `fs-collapse-of-the-uct-spectral-sequence-gives-a-natural-splitting` · false-statement — UCT collapse gives a natural splitting
- `fs-the-lhs-spectral-sequence-defines-low-degree-group-cohomology` · false-statement — LHS defines low-degree group cohomology
- `fs-writing-e-two-double-arrow-h-is-a-complete-convergence-proof` · false-statement — Writing E2 implies H proves convergence

### `grothendieck-spectral-sequences-and-computations-examples` — Grothendieck Spectral Sequences and Computations — Examples (9 item(s))

- `ex-a-two-row-hypercohomology-spectral-sequence` · example — A two-row hypercohomology spectral sequence
- `ex-grothendieck-spectral-sequence-with-an-exact-outer-functor` · example — Grothendieck with an exact outer functor
- `ex-the-five-term-exact-sequence-of-a-composite-functor` · example — Five-term sequence of a composite functor
- `ex-uct-as-a-two-column-spectral-sequence-over-the-integers` · example — UCT as a two-column spectral sequence over the integers
- `ex-kunneth-as-a-two-column-spectral-sequence-over-a-pid` · example — Kunneth as a two-column spectral sequence over a PID
- `ex-lhs-for-a-split-group-extension` · example — LHS for a split group extension
- `ex-a-collapse-with-a-noncanonical-extension-choice` · example — A collapse with a noncanonical extension choice
- `cex-identical-e-two-pages-with-different-later-differentials` · counterexample — Identical E2 pages with different later differentials
- `ex-a-complete-spectral-sequence-computation-record` · example — A complete spectral-sequence computation record

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

4 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-966b88817ef03374bbda045b · `thm-cartan-eilenberg-injective-resolutions-exist`** (from group c, gap-a-reader-closes) — Step 2.1 (supplied-data branch) invokes [F3] = thm-horseshoe-lemma-for-injective-resolutions, whose published statement begins 'Assume the Axiom of Dependent Choice. ... Then there exists an injective resolution of A whose degree-n term is a finite product, equivalently biproduct, I'^n⊕I''^n.' The item brackets this with 'its use is the same finite recursive horseshoe construction, without invoking its DC existence assertion', but that separation is nowhere in the cited statement: a reader must verify that degreewise split exactness of the horseshoe sequence and injectivity of the biproduct middle terms are available in ZF once the lifts are supplied. The DC accounting in step 4.1 is otherwise explicit.
- **s8a-615b68d0c31f32a6cf155b0f · `lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense`** (from group c, gap-a-reader-closes) — Step 3.1 compresses the acyclicity argument for U/F^mU: the successive quotients of the finite column filtration are the individual augmented columns of U with their total degrees shifted, and the induction applying the long exact sequence (plus F^mU being zero in degrees n−1,n,n+1 once m>n+2) is left to the reader. The identification U^n = T^n ⊕ K^{n+1} with Cone(e)^n is likewise stated only up to an explicit sign twist of the K^{n+1} summand, so the sign verification in step 4.1 must be redone by the reader.
- **s8a-94f43557510b4b011c3f8a31 · `thm-kunneth-tor-spectral-sequence`** (from group c, presentation) — F1 and F6 obtain the projective Cartan–Eilenberg data by citing the injective definition and the comparison lemma 'reversed', and step 1.1 fixes the anticommuting form through ṽ_P=(−1)^i v_P, ṽ_Q=(−1)^j v_Q. The dualisation of the split-horizontal-exactness clauses, of the lower bound c,d and of the comparison homotopies to the projective/homological side is asserted rather than displayed, so the first-page computation rests on an index-and-sign dictionary the reader must reconstruct.
- **s8a-d1315383927871a35bd2c92d · `ex-lhs-for-a-split-group-extension`** (from group c, presentation) — Step 2.1 identifies the Q-action on H^1(N,M) computed from the cyclic N-resolution with the action used by LHS's resolution convention, via 'the Hom-to-injective-total comparison in F4 commutes with these actions and its augmentation'; the rank-one transgression claim depends on the Q-fixedness of [b],[d] being the same in both pictures, and F4's statement only asserts the Ext isomorphism/naturality. The direct computation (Sb=c is a T-boundary, Sd=0) is displayed, but the compatibility of the two Q-actions is argued in one sentence.

Append one owning-group disposition per warning to `research/phase-2-next-17-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-17`

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

Append one row per rejection to `research/phase-2-next-17-judge-adjudications.jsonl`
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
decision in `research/phase-2-next-17-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-next-17-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-17-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-17-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
