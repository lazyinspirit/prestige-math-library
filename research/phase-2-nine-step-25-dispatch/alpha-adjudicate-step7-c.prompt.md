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
group work, `research/phase-2-nine-step-25-alpha-groups.json` is the assignment: it permits at
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

run: phase-2-nine-step-25
role: alpha-adjudicate
label: step7-c
covers: 5, 6, 7

# Step 7 adjudication — group **c**, run `phase-2-nine-step-25`

You are the group Alpha for batches **5**, **6**, **7**: 4 A/B pair(s), 8 page(s), 117 item(s), 11 open rejection(s) over 11 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-nine-step-25-alpha-c-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-nine-step-25-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `tor-flatness-and-global-dimension` | A | homological-algebra | 365.055 | `ext-and-balanced-resolutions`, `yoneda-extensions-and-homological-dimension`, `tensor-products-of-modules`, `chain-conditions-and-semisimple-modules` |
| 5 | `tor-flatness-and-global-dimension-examples` | B | homological-algebra | 365.056 | `tor-flatness-and-global-dimension` |
| 5 | `kunneth-exactness-and-splittings-over-principal-ideal-domains` | A | homological-algebra | 365.0581 | `universal-coefficients-and-kunneth-theorems` |
| 5 | `kunneth-exactness-and-splittings-over-principal-ideal-domains-examples` | B | homological-algebra | 365.0582 | `kunneth-exactness-and-splittings-over-principal-ideal-domains` |
| 6 | `spectral-sequences` | A | homological-algebra | 365.065 | `chain-complexes-and-homology` |
| 6 | `spectral-sequences-examples` | B | homological-algebra | 365.066 | `spectral-sequences` |
| 7 | `koszul-euler-characteristics-and-hilbert-samuel-multiplicity` | A | commutative-algebra | 365.9021 | `koszul-complexes-and-regular-sequences`, `chain-conditions-and-semisimple-modules`, `rees-modules-artin-rees-and-hilbert-samuel-theory`, `localisation-of-modules-and-support`, `relations-functions-and-quotients`, `long-exact-sequences-in-homology`, `noetherian-rings-and-hilbert-basis`, `valuation-rings-and-discrete-valuation-rings`, `prime-spectra-and-radicals` |
| 7 | `koszul-euler-characteristics-and-hilbert-samuel-multiplicity-examples` | B | commutative-algebra | 365.9022 | `koszul-euler-characteristics-and-hilbert-samuel-multiplicity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tor-flatness-and-global-dimension` — Tor Flatness and Global Dimension (41 item(s))

- `def-tensor-product-total-complex-of-chain-complexes` · definition — The tensor product of a right and a left chain complex is totalized on finite diagonals with the Koszul differential
- `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero` · lemma — The tensor-total differential is balanced, well defined, and squares to zero
- `def-tor-by-resolving-the-left-module` · definition — Tor from a projective resolution of the left module
- `def-tor-by-resolving-the-right-module` · definition — Tor from a projective resolution of the right module
- `prop-tor-zero-is-the-tensor-product-in-either-construction` · proposition — Degree-zero Tor is the tensor product in either construction
- `prop-each-tor-construction-is-covariant-in-both-variables` · proposition — Each resolution-defined Tor construction is covariant in both variables
- `prop-positive-tor-vanishes-when-the-resolved-variable-is-projective` · proposition — Positive Tor vanishes when the resolved variable is projective
- `def-tensor-double-complex-of-two-projective-resolutions` · definition — The first-quadrant tensor double complex of two projective resolutions
- `def-left-and-right-flat-modules-over-an-arbitrary-ring` · definition — Left and right flat modules over an arbitrary ring
- `lem-projective-modules-are-flat-over-an-arbitrary-ring` · lemma — Projective left and right modules are flat over an arbitrary ring
- `rem-projective-modules-are-flat-is-supplied-by-mod-three` · remark — The earlier flatness page is the commutative specialization; this page records the arbitrary-handed version used in balance
- `lem-the-rows-of-the-augmented-tensor-double-complex-are-exact` · lemma — The augmented rows of the tensor double complex are exact
- `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact` · lemma — The augmented columns of the tensor double complex are exact
- `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic` · theorem — The left and right projective constructions of Tor are naturally isomorphic
- `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions` · proposition — The Tor balance isomorphism is natural and coherent under a change of resolutions
- `def-balanced-tor-bifunctor` · definition — The balanced Tor bifunctor
- `thm-long-exact-tor-sequence-in-the-left-module-variable` · theorem — The long exact Tor sequence in the left-module variable
- `thm-long-exact-tor-sequence-in-the-right-module-variable` · theorem — The long exact Tor sequence in the right-module variable
- `prop-tor-dimension-shifting` · proposition — Tor admits dimension shifting in either variable
- `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes` · theorem — A left module is flat exactly when Tor one against every right module vanishes
- `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes` · theorem — A right module is flat exactly when Tor one against every left module vanishes
- `cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes` · corollary — The Tor boundary is exactly the obstruction to left exactness after tensoring a fixed short exact sequence
- `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion` · theorem — Tor one of a cyclic abelian group detects n-torsion
- `thm-tor-of-two-cyclic-abelian-groups` · theorem — Tor one of two cyclic abelian groups is cyclic of gcd order
- `thm-higher-tor-over-the-integers-vanishes` · theorem — Higher Tor over the integers vanishes
- `prop-torsion-free-abelian-groups-are-flat` · proposition — Torsion-free abelian groups are flat
- `thm-over-a-pid-flat-is-equivalent-to-torsion-free` · theorem — Over a principal ideal domain flatness is equivalent to torsion-freeness
- `thm-tor-symmetry-over-a-commutative-ring` · theorem — Tor is symmetric over a commutative ring
- `def-flat-dimension-of-a-module` · definition — The flat dimension of a module
- `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes` · theorem — Flat dimension at most n is equivalent to the prescribed higher Tor vanishing
- `def-left-and-right-weak-global-dimension` · definition — Left and right weak global dimension
- `prop-weak-global-dimension-is-at-most-corresponding-global-dimension` · proposition — Weak global dimension is at most the corresponding global dimension
- `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric` · theorem — Weak global dimension is Tor-detected and left-right symmetric
- `prop-semisimple-rings-have-vanishing-positive-tor-and-ext` · proposition — Semisimple rings have vanishing positive Tor and Ext
- `prop-the-integers-have-weak-and-global-dimension-one` · proposition — The integers have weak and global dimension one
- `fs-tor-takes-two-left-modules-over-an-arbitrary-ring` · false-statement — Tor does not take two left modules over an arbitrary ring without extra bimodule structure
- `fs-the-two-tor-constructions-are-equal-by-definition` · false-statement — The two resolution constructions of Tor are not equal by definition
- `fs-flat-modules-have-projective-dimension-zero` · false-statement — Flat modules need not have projective dimension zero
- `fs-tor-one-vanishes-only-when-one-module-is-projective` · false-statement — Vanishing Tor one does not require a projective factor
- `fs-tor-is-symmetric-over-every-noncommutative-ring` · false-statement — Tor is not symmetric as a typed expression over every noncommutative ring
- `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m` · false-statement — Tor one of R modulo I and M is not always the I-torsion submodule of M

### `tor-flatness-and-global-dimension-examples` — Tor Flatness and Global Dimension — Examples (8 item(s))

- `ex-tor-of-two-cyclic-groups-from-a-two-term-resolution` · example — Tor of two cyclic groups from a two-term resolution
- `ex-tor-detects-n-torsion` · example — Tor detects n-torsion
- `ex-a-flat-nonprojective-module` · example — A flat nonprojective module
- `ex-localization-is-flat-and-has-vanishing-positive-tor` · example — Localization is flat and has vanishing positive Tor
- `ex-the-tensor-double-complex-in-low-degrees` · example — The tensor double complex in low degrees
- `ex-tor-symmetry-over-a-commutative-ring` · example — Tor symmetry over a commutative ring
- `cex-a-noncommutative-handedness-error-in-tor` · counterexample — A noncommutative handedness error in Tor
- `ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers` · example — Weak and global dimension for a field and the integers

### `kunneth-exactness-and-splittings-over-principal-ideal-domains` — Kunneth Exactness and Splittings over Principal Ideal Domains (5 item(s))

- `lem-pid-submodules-of-free-modules-are-free-with-choice` · lemma — Under Choice, a submodule of an arbitrary-rank free module over a PID is free
- `lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces` · lemma — A free PID complex decomposes into two-term cycle-boundary pieces
- `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel` · lemma — The cycle-boundary tensor sequence has the Kunneth kernel and cokernel
- `thm-pid-kunneth-exactness-from-cycle-boundary-presentations` · theorem — The natural PID Kunneth sequence is exact
- `thm-pid-kunneth-splitting-from-cycle-boundary-presentations` · theorem — The PID Kunneth sequence admits a section after choices

### `kunneth-exactness-and-splittings-over-principal-ideal-domains-examples` — Kunneth Exactness and Splittings over Principal Ideal Domains — Examples (2 item(s))

- `ex-pid-polynomial-ring-kunneth-tor-class` · example — A polynomial PID has a nonzero Kunneth Tor class
- `ex-pid-kunneth-over-a-field-has-no-tor-correction` · example — Over a field the cross product itself is a natural isomorphism

### `spectral-sequences` — Spectral Sequences (44 item(s))

- `lem-spectral-sequence-subquotient-and-local-lifting-calculus` · lemma — Spectral sequence subquotient and local lifting calculus
- `def-increasing-and-decreasing-filtration-of-an-object` · definition — Increasing and decreasing filtration of an object
- `def-exhaustive-separated-bounded-and-finite-filtration` · definition — Exhaustive separated bounded and finite filtration
- `def-associated-graded-object-of-a-filtered-object` · definition — Associated graded object of a filtered object
- `lem-associated-graded-quotients-are-well-defined-subquotients` · lemma — Associated graded quotients are well defined subquotients
- `def-filtered-chain-complex` · definition — Filtered chain complex
- `def-filtered-chain-map` · definition — Filtered chain map
- `prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex` · proposition — The associated graded of a filtered complex is a bigraded complex
- `def-induced-filtration-on-homology` · definition — Induced filtration on homology
- `lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data` · lemma — The associated graded of filtered homology is a subquotient of chain level data
- `def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex` · definition — R cycles and r boundaries of an increasingly filtered complex
- `lem-r-boundaries-embed-in-r-cycles` · lemma — R boundaries embed in r cycles
- `def-r-page-of-the-spectral-sequence-of-a-filtered-complex` · definition — R page of the spectral sequence of a filtered complex
- `lem-the-filtered-differential-induces-d-r-on-the-r-page` · lemma — The filtered differential induces d r on the r page
- `prop-the-rth-differential-has-bidegree-minus-r-r-minus-one` · proposition — The rth differential has bidegree minus r r minus one
- `lem-the-rth-differential-squares-to-zero` · lemma — The rth differential squares to zero
- `thm-the-next-page-is-the-homology-of-the-current-page` · theorem — The next page is the homology of the current page
- `prop-e-zero-is-the-associated-graded-complex` · proposition — E zero is the associated graded complex
- `prop-e-one-is-homology-of-the-associated-graded-complex` · proposition — E one is homology of the associated graded complex
- `def-limiting-cycles-boundaries-and-e-infinity` · definition — Limiting cycles boundaries and e infinity
- `def-homological-spectral-sequence` · definition — Homological spectral sequence
- `def-cohomological-spectral-sequence` · definition — Cohomological spectral sequence
- `def-morphism-of-spectral-sequences` · definition — Morphism of spectral sequences
- `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences` · proposition — A filtered chain map induces a morphism of spectral sequences
- `def-spectral-sequence-stabilization-at-a-bidegree` · definition — Spectral sequence stabilization at a bidegree
- `def-collapse-at-a-page` · definition — Collapse at a page
- `prop-degree-reasons-force-stabilization-in-a-bounded-region` · proposition — Degree reasons force stabilization in a bounded region
- `prop-a-spectral-sequence-supported-in-one-row-or-column-collapses` · proposition — A spectral sequence supported in one row or column collapses
- `def-abutment-to-a-filtered-object` · definition — Abutment to a filtered object
- `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology` · theorem — Bounded filtered complex spectral sequence abuts to filtered homology
- `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence` · definition — Edge homomorphisms of a first quadrant spectral sequence
- `lem-edge-homomorphisms-are-natural` · lemma — Edge homomorphisms are natural
- `def-extension-problem-of-a-convergent-spectral-sequence` · definition — Extension problem of a convergent spectral sequence
- `lem-abelian-group-model-for-spectral-sequence-computations` · lemma — Abelian-group model for spectral-sequence computations
- `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects` · counterexample — Isomorphic associated graded objects need not give isomorphic filtered objects
- `prop-collapse-does-not-in-general-split-the-abutment` · proposition — Collapse does not in general split the abutment
- `thm-the-cohomological-filtered-complex-construction` · theorem — The cohomological filtered complex construction
- `prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence` · proposition — Shifting a filtered complex reindexes its spectral sequence
- `fs-e-infinity-is-the-abutment-object` · false-statement — E infinity is the abutment object
- `fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r` · false-statement — E r plus one is literally equal to the homology of e r
- `fs-a-spectral-sequence-collapses-when-one-differential-is-zero` · false-statement — A spectral sequence collapses when one differential is zero
- `fs-collapse-solves-all-extension-problems` · false-statement — Collapse solves all extension problems
- `fs-the-filtration-on-homology-is-h-n-of-the-filtered-subcomplex` · false-statement — The filtration on homology is h n of the filtered subcomplex
- `fs-e-zero-and-e-one-page-conventions-are-universal-across-sources` · false-statement — E zero and e one page conventions are universal across sources

### `spectral-sequences-examples` — Spectral Sequences — Examples (7 item(s))

- `ex-the-two-step-filtration-and-its-spectral-sequence` · example — The two step filtration and its spectral sequence
- `ex-a-filtered-complex-collapsing-at-e-one` · example — A filtered complex collapsing at e one
- `ex-a-nonzero-d-two-differential-in-a-small-filtered-complex` · example — A nonzero d two differential in a small filtered complex
- `ex-edge-maps-from-a-first-quadrant-spectral-sequence` · example — Edge maps from a first quadrant spectral sequence
- `ex-two-filtered-abelian-groups-with-the-same-associated-graded` · example — Two filtered abelian groups with the same associated graded
- `cex-collapse-with-a-nonsplit-extension-problem` · counterexample — Collapse with a nonsplit extension problem
- `ex-the-cohomological-reindexing-of-a-homological-spectral-sequence` · example — The cohomological reindexing of a homological spectral sequence

### `koszul-euler-characteristics-and-hilbert-samuel-multiplicity` — Koszul Euler Characteristics and Hilbert–Samuel Multiplicity (7 item(s))

- `lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison` · lemma — The module-relative Hilbert–Samuel polynomial exists without a dimension theorem
- `def-koszul-euler-characteristic-and-degree-indexed-multiplicity` · definition — koszul euler characteristic and degree indexed multiplicity
- `lem-koszul-homology-finite-length-for-an-ideal-of-definition` · lemma — koszul homology finite length for an ideal of definition
- `lem-bounded-finite-length-complex-euler-identities` · lemma — bounded finite length complex euler identities
- `lem-shifted-adic-koszul-filtration-euler-comparison` · lemma — shifted adic koszul filtration euler comparison
- `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic` · theorem — hilbert samuel multiplicity as koszul euler characteristic
- `lem-koszul-euler-characteristic-first-element-reduction` · lemma — koszul euler characteristic first element reduction

### `koszul-euler-characteristics-and-hilbert-samuel-multiplicity-examples` — Koszul Euler Characteristics and Hilbert–Samuel Multiplicity — Examples (3 item(s))

- `ex-koszul-euler-characteristic-empty-sequence` · example — koszul euler characteristic empty sequence
- `ex-koszul-euler-characteristic-annihilator-correction` · example — koszul euler characteristic annihilator correction
- `ex-koszul-euler-characteristic-redundant-zero-generator` · example — koszul euler characteristic redundant zero generator

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

1 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-88255d9a84fb7df7224ef579 · `tor-flatness-and-global-dimension-examples`** (from group c, presentation) — The page frontmatter has status: published, but its body begins “This draft develops…”. This is inconsistent public-facing page prose, though it does not affect the mathematics.

Append one owning-group disposition per warning to `research/phase-2-nine-step-25-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-collapse-with-a-nonsplit-extension-problem` | `spectral-sequences-examples` | gpt-5.6-terra | `bd24bd4b4b448b29e4b696eb51861dce40ac17c4cc94297df7ddf1b62fa62efe` |
| `def-tor-by-resolving-the-left-module` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `ed4141ba05f06dabce8b1c6663ced94bcf4a8043022843b02b455aaa1a269382` |
| `ex-two-filtered-abelian-groups-with-the-same-associated-graded` | `spectral-sequences-examples` | gpt-5.6-terra | `bb487bdb0ea484d6b267335dd3c86e1ecd1464492cb924eef26efe7548f77870` |
| `fs-a-spectral-sequence-collapses-when-one-differential-is-zero` | `spectral-sequences` | gpt-5.6-terra | `8a9aee7e6db24c50d2b574a339be4a8019ca137449939a168545a0e53b9968d8` |
| `fs-collapse-solves-all-extension-problems` | `spectral-sequences` | gpt-5.6-terra | `74a605fb1cff75f9b26acfaaf91e0b91961c9da4a28d834c540e7609fe8ec57b` |
| `fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r` | `spectral-sequences` | gpt-5.6-terra | `4f1396174705b15c85bc3a62356d8ce0d3fc76cec9bf7bb8a8c2aaeedef80966` |
| `fs-e-zero-and-e-one-page-conventions-are-universal-across-sources` | `spectral-sequences` | gpt-5.6-terra | `9e6f263fde5f558002031136de33edcf3813f91689782ef77c110c8f3fd2008c` |
| `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel` | `kunneth-exactness-and-splittings-over-principal-ideal-domains` | gpt-5.6-terra | `4e2a9f506534e65ef9be8e7b27cb31441e42f69c12fb6303c50b0c581df2dfae` |
| `lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data` | `spectral-sequences` | gpt-5.6-terra | `57404f3e227628de076049d1220e02cc341468743d5ed34deb0614782005bb23` |
| `prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence` | `spectral-sequences` | gpt-5.6-terra | `01332b55a3965cbe7f207da9d96503c747e8711ed8273258f7f33c5998464ef0` |
| `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic` | `koszul-euler-characteristics-and-hilbert-samuel-multiplicity` | gpt-5.6-terra | `215ac9b1d7e0f63737333826e579bf8897b8b2a03865b7f90a0f7023c53320fe` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-nine-step-25`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete any authorized repair and focused
checks, then immediately finish its engine-managed handoff:

`node tools/autopilot/bin/complete-step7-item.mjs --run phase-2-nine-step-25 --id ITEM --group GROUP`

Replace ITEM and GROUP with the exact owned IDs. Await the command before
editing another item or shared group file. It checks the repair, runs the one
Terra rejudge, and immediately dispatches Astra/medium final adjudication on a
rejection. Other groups continue independently. Do not make another Sol repair
after the rejudge. On failure, preserve the evidence and report the blocker;
never buy another judge call. Unchanged false-positive/nonfatal items need no
handoff. Inspect related items first only when necessary.

On resuming an interrupted group, read its report and existing exact decisions;
do not repeat them. First send previously repaired owned items through this
handoff if their paid rejudge/terminal resolution is still owed. Hand off new
dependency lemmas before repaired consumers. The whole-run closure gates remain
mandatory after all groups finish; do not wait for them to complete an item.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-nine-step-25-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set through the immediate item handoff.

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
decision in `research/phase-2-nine-step-25-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-nine-step-25-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-nine-step-25-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-nine-step-25-alpha-step7-<group>.md` with every
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
