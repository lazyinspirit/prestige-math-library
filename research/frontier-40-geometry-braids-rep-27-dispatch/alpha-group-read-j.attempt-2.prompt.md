# Alpha

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

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
group work, `research/frontier-40-geometry-braids-rep-27-alpha-groups.json` is the assignment: it permits at
most ten groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators and all three owner repair agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Use unique IDs and register
each addition in the canonical registry/index, page, applicable manifest and
contract. Resolve dependency and downstream effects before central certification
and the complete gate battery. Otherwise report the issue without changing it.
Current Step-7 dispatches also follow
`step7-adjudicator.md` or `step7-owner-repair.md`; their tasks authorize assigned
published downstream repairs across the whole library.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 task ownership rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Logical validity is the ground truth; authoritative sources and judges can err.
State uncertainty honestly and consult primary sources when unsure.
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
not current coverage. Current Step-7 adjudication repairs every confirmed defect,
including `confirmed_nonfatal`; `confirmed_fatal` additionally enters the fatal
threshold count. A `false_positive` requires evidence without unnecessary edits.
The task controls repair ownership, fresh downstream continuation and any
required rejudge; never initiate a cycle independently.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-40-geometry-braids-rep-27
role: alpha-group-read
label: j
covers: j

# Step 6 Alpha group reader — read-only digest — group **j**, run `frontier-40-geometry-braids-rep-27`

- You are the read-only Step 6 Alpha group reader for batches **25**: 1 A/B pair(s), 2 page(s), 88 item(s).

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
| 25 | `birational-morphisms-contractions-and-surface-singularities` | A | algebraic-geometry | 913 | `normal-varieties-normalization-and-zariskis-main-theorem`, `finite-proper-and-projective-morphisms`, `intersection-products-on-smooth-projective-surfaces`, `point-blowup-resolution-on-arbitrary-regular-surfaces`, `hilbert-functors-and-projective-hilbert-schemes`, `coherent-duality-on-projective-cohen-macaulay-schemes`, `smooth-projective-serre-duality-and-flag-variety-line-bundles` |
| 25 | `birational-morphisms-contractions-and-surface-singularities-examples` | B | algebraic-geometry | 914 | `birational-morphisms-contractions-and-surface-singularities` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `birational-morphisms-contractions-and-surface-singularities` — Birational Morphisms, Contractions, and Surface Singularities (86 item(s))

- `def-exceptional-curve-and-contraction` · definition — Exceptional curves of the first kind and their contractions
- `lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces` · lemma — Fibres of a proper birational morphism of regular surfaces
- `lem-effective-cartier-divisor-has-no-embedded-associated-primes` · lemma — Effective Cartier divisors on a regular scheme have no embedded associated points
- `lem-nonzero-section-vanishing-at-a-point-has-positive-degree` · lemma — A nonzero section vanishing at a point forces positive degree
- `lem-surface-completion-base-change-preserves-closed-fibre-local-completions` · lemma — Completion base change preserves completed local rings on the closed fibre
- `lem-finite-regular-base-algebra-dualizing-biduality` · lemma — Dualizing biduality for finite algebras over a regular base
- `lem-finite-birational-algebra-descends-from-a-flat-completion-neighbourhood` · lemma — Finite birational algebras descend across a flat completion neighbourhood
- `lem-relative-projective-space-regular-local-base-twisted-resolution` · lemma — Finite twisted resolutions over a regular local base
- `def-normal-surface-modification-and-normalized-point-blowup` · definition — Normal scheme modifications and normalized point blowups
- `lem-finite-over-projective-noetherian-affine-base-is-projective` · lemma — Finite schemes over projective schemes are projective over a Noetherian affine base
- `lem-cm-local-codimension-and-regular-quotient-ext-concentration` · lemma — CM local codimension and Ext concentration over a regular local ring
- `lem-surface-p-basis-subfield-separation` · lemma — Surface p basis subfield separation
- `lem-surface-derivations-and-regular-hypersurfaces` · lemma — Surface derivations and regular hypersurfaces
- `lem-surface-finite-completion-factors` · lemma — Surface finite completion factors
- `lem-surface-geometric-regularity-field-test-and-generic-spread` · lemma — Surface geometric regularity field test and generic spread
- `lem-surface-flat-base-change-coherent-cohomology-by-cech` · lemma — Flat base change for quasi-coherent surface cohomology by Čech
- `lem-normal-local-surface-radical-multiple-of-a-principal-divisor` · lemma — Reduced Cartier multiples on a normal local surface
- `lem-rank-one-torsion-free-surface-module-principalized-by-an-ideal-blowup` · lemma — A rank-one surface module is principalized by an ideal blowup
- `lem-regular-surface-reflexive-modules-and-codimension-one-lattices` · lemma — Reflexive surface modules and codimension-one lattice extension
- `lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc` · lemma — A fixed-coordinate point-blowup chain defines a formal arc
- `lem-universal-property-of-a-contraction` · lemma — Universal property and uniqueness of a contraction
- `lem-blowing-up-a-regular-point-is-a-contraction` · lemma — Blowing up a regular point is a contraction
- `lem-existence-of-a-fibre-cutter` · lemma — A function cutting the components of a special fibre
- `lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point` · lemma — A proper birational map to a normal target is an isomorphism near a quasi-finite point
- `lem-proper-surface-regularity-transfers-to-and-from-completion` · lemma — Regularity of a proper scheme transfers to and from local-base completion
- `lem-finite-length-duality-over-a-regular-local-base` · lemma — Finite-length duality over a regular local base
- `lem-relative-projective-space-derived-duality-regular-local-base` · lemma — Relative derived duality on projective space over a regular local ring
- `lem-surface-modification-isomorphism-in-codimension-one` · lemma — A normal-surface modification is an isomorphism in codimension one
- `lem-surface-non-pth-power-detected-by-derivation` · lemma — Surface non pth power detected by derivation
- `lem-cm-projective-curve-canonical-positive-twist-vanishing-generation` · lemma — Positive canonical twists on projective Cohen–Macaulay curves
- `lem-quadratic-in-a-square-ideal-with-nontrivial-colength-is-a-square` · lemma — Quadratics in square ideals of colength greater than one
- `lem-positive-conormal-degree-of-a-fibre-divisor` · lemma — A divisor supported in a special fibre has positive conormal degree on some component
- `lem-projective-regular-local-base-coherent-duality-by-embedding` · lemma — Projective coherent duality over a regular local base
- `lem-surface-generic-power-series-formal-fibres` · lemma — Surface generic power series formal fibres
- `lem-surface-open-regular-locus` · lemma — Surface open regular locus
- `lem-surface-complete-equicharacteristic-finite-integral-closure` · lemma — Surface complete equicharacteristic finite integral closure
- `lem-local-normal-surface-modification-dimension-and-projective-cohomology` · lemma — Dimension and cohomology of local normal surface modifications
- `lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces` · lemma — Degree-p differential trace extends across normal surface valuations
- `thm-negativity-for-exceptional-curves-on-smooth-surfaces` · theorem — Negativity of contracted curves on regular surfaces
- `lem-normal-projective-surface-dualizing-module-over-regular-local-base` · lemma — Dualizing modules and trace pairing for normal projective surface modifications
- `lem-surface-complete-equicharacteristic-formal-fibres` · lemma — Surface complete equicharacteristic formal fibres
- `lem-normal-surface-fibre-divisor-conormal-degree-positive` · lemma — Positive conormal degree for a fibre divisor on a normal surface
- `lem-normal-surface-modification-leray-short-exact-sequence` · lemma — The Leray sequence for normal surface modifications
- `lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate` · lemma — A nonsingular formal arc on a normal complete surface becomes regular
- `lem-surface-completed-polynomial-generic-fibre` · lemma — Surface completed polynomial generic fibre
- `lem-surface-finite-type-formal-fibres` · lemma — Surface finite type formal fibres
- `lem-surface-regular-fibres-preserve-normality` · lemma — Surface regular fibres preserve normality
- `lem-surface-finite-type-normalization-finite` · lemma — Surface finite type normalization finite
- `lem-normalized-point-blowups-dominate-local-normal-surface-modifications` · lemma — Normalized point blowups dominate local normal surface modifications
- `lem-projective-normal-surface-modification-h1-injects-off-special-fibre` · lemma — H1 of a normal surface modification injects off its special fibre
- `lem-local-normalized-point-blowup-sequences-spread-at-closed-points` · lemma — Local normalized point sequences spread at closed surface points
- `lem-normal-surface-normalization-commutes-with-base-completion` · lemma — Normalization of a surface modification commutes with local-base completion
- `lem-finite-normal-surface-cover-completed-local-degree-bound` · lemma — Completed local degrees of finite normal surface covers
- `lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point` · lemma — A birational morphism of regular surfaces factors through the blowup of a point where its inverse is undefined
- `lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme` · lemma — Finite domination of surface modifications by a relative Hilbert scheme
- `lem-normal-surface-modification-no-derived-residue-map` · lemma — No derived residue map into structure cohomology of a normal surface modification
- `def-rational-normal-surface-singularity-and-bounded-modification-h1` · definition — Rational normal surface singularities and bounded modification cohomology
- `lem-normal-surface-modification-uniform-principal-torsion-bound` · lemma — Uniform principal torsion bound for surface modification cohomology
- `lem-normalized-surface-point-blowup-resolution-descends-from-completion` · lemma — Normalized point sequences and resolutions descend from completion
- `lem-contracted-curve-count-decreases-under-a-point-blowup-factorization` · lemma — The number of contracted curves drops by one after factoring through a point blowup
- `lem-projective-normal-surface-grauert-riemenschneider-vanishing` · lemma — Grauert–Riemenschneider vanishing for the required normal surface modifications
- `lem-regular-local-surface-is-rational-by-point-blowup-domination` · lemma — Regular local surfaces have rational modification cohomology
- `lem-rational-surface-local-rings-propagate-by-point-sequence-spreading` · lemma — Rationality propagates to birational local surface rings
- `lem-rational-surface-exceptional-ideal-powers-and-sections` · lemma — Powers and sections of a rational surface exceptional ideal
- `lem-finite-separable-normal-surface-extension-preserves-bounded-h1` · lemma — Separable finite surface extensions preserve bounded modification cohomology
- `lem-normal-finite-type-surface-resolution-globalizes-from-complete-local-points` · lemma — Surface resolution globalizes from complete local point resolutions
- `thm-factorization-of-birational-morphisms-of-smooth-surfaces` · theorem — Factorization of birational morphisms of regular surfaces into point blowups
- `lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it` · lemma — Trace cokernels detect and bound normal surface H1
- `lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology` · lemma — Normality and fibre cohomology of a rational surface point blowup
- `lem-regular-base-dualizing-traces-compose-on-rational-modifications` · lemma — Dualizing traces compose and become isomorphisms on rational modifications
- `lem-regular-base-surface-cartier-curve-canonical-adjunction` · lemma — Canonical adjunction for a Cartier fibre curve
- `lem-regular-surface-point-blowup-canonical-transform` · lemma — Canonical modules transform by the exceptional divisor at a regular point blowup
- `lem-rational-singular-point-blowup-canonical-pullback-surjective` · lemma — Canonical pullback is surjective after blowing up a rational singular point
- `lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module` · lemma — Top differential lattices map into point-blowup canonical modules
- `lem-rational-normal-surface-reduced-to-invertible-canonical-module` · lemma — Rational normal surfaces reduce to an invertible canonical module
- `lem-complete-regular-surface-degree-p-extension-has-bounded-h1` · lemma — Degree-p inseparable extensions of complete regular surfaces have bounded H1
- `lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function` · lemma — The tangent conic of a rational Gorenstein surface singularity
- `lem-nonsquare-tangent-conic-rational-surface-blowups-terminate` · lemma — Nonsquare tangent-conic surface singularities terminate under point blowups
- `lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic` · lemma — A square-conic blowup has cubic-controlled singular successors
- `lem-double-plus-simple-cubic-rational-surface-branch-terminates` · lemma — The double-plus-simple cubic surface branch terminates
- `lem-triple-cubic-rational-surface-branch-reduces-in-two-steps` · lemma — A triple-cubic surface branch reduces after two successors
- `thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups` · theorem — Rational Gorenstein normal surface singularities resolve by point blowups
- `lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups` · lemma — A complete normal surface resolution converts to normalized point blowups
- `thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups` · theorem — Complete equicharacteristic normal surfaces resolve by normalized point blowups
- `thm-resolution-of-normal-surface-singularities` · theorem — Resolution of normal surface singularities
- `rem-surface-contraction-and-resolution-scope-boundaries` · remark — What this page does and does not prove about contractions and resolution

### `birational-morphisms-contractions-and-surface-singularities-examples` — Birational Morphisms, Contractions, and Surface Singularities — Examples (2 item(s))

- `cex-normalization-is-not-a-blowup` · counterexample — Normalization of a non-normal surface is not a point blowup
- `ex-blowup-of-a-smooth-point` · example — Blowing up a smooth point: charts, exceptional curve, and contraction

## Your seams

Another group's pages depend on yours:

- `higher-dimensional-resolution-of-singularities` (group g) requires your `birational-morphisms-contractions-and-surface-singularities`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-40-geometry-braids-rep-27`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.


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

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
