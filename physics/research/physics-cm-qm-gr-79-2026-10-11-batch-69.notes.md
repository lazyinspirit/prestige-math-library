# Batch 69 notes — `gr-einstein-and-matter` / `gr-einstein-and-matter-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-69, covers 69.
Step 1 complete initial authoring only; neither a worker exit nor a readiness
record is independent mathematical approval (Step 2/3 review follows). The A
page is mixed-domain: sixteen items are mathematics (`domain: mathematics`) and
five are physics — the two adopted presentations of the field law, the two
model-conditional physics theorems and the scope note.
The B page holds six mathematical examples and one mathematical
counterexample, plus one physics counterexample and one physics example
(`cex-gr-energy-conditions-do-not-imply-conservation`,
`ex-gr-perfect-fluid-energy-conditions`), which state pointwise algebraic
facts about prescribed tensors with no dynamics and no measurement — see
the domains in the carriers. No item reports a measurement; no experiment, no
empirical premise and no empirical uncertainty occurs anywhere in the batch,
and both physics theorems state explicitly that they carry none.

## Scope built

- A page `gr-einstein-and-matter` (order 241, category `general-relativity`,
  `library: physics`), 21 locally authored items: 6 definitions, 5 lemmas,
  3 theorems, 2 propositions, 2 postulates, 2 physics-theorems and 1 remark.
- B page `gr-einstein-and-matter-examples` (order 242), 8 leaf items: 6
  examples and 2 counterexamples, each with a numbered verification or
  counterexample.
- Library carriers `library/general-relativity/gr-einstein-and-matter.md`
  and `…-examples.md`; `_category.md` was created by batch-65 and is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-69.pages.json`:
  page orders, kinds, categories and `library` fields are unchanged from the
  run scaffold; the manifest edits are the item inventories, the item metadata
  and the `requires` reconciliation recorded below. Statement, deps,
  dependency_roles, justified_by, provenance, source and level fields were
  regenerated from the final carriers with a script whose dry run reproduced
  every unchanged field; after regeneration the two directions (carrier →
  manifest) agree for all 29 items.
- Design budget (46 items) and the 100-item cap are respected (21 + 8).
- Design inventory coverage (research/plan-general-relativity-track.md L100):
  "post Einstein equation/couplings" = the two postulates and
  `pthm-gr-adopted-action-and-einstein-equations`; "explicit dust/fluid/scalar
  branches" = `def-gr-scalar-field-matter-model`, `def-gr-dust-matter-model`,
  `def-gr-perfect-fluid-matter-model`,
  `prop-gr-dust-and-perfect-fluid-conservation-equations`,
  `prop-gr-scalar-field-stress-energy-conservation`; "def Hilbert T" =
  `def-gr-hilbert-stress-energy-tensor` and `lem-gr-hilbert-tensor-uniqueness`;
  "M12 compact-support action variation" =
  `thm-gr-compact-metric-and-timelike-curve-variation`,
  `lem-gr-compact-variation-coefficient-vanishing`,
  `lem-gr-lorentzian-perturbations-remain-lorentzian`; "M22 matter equations"
  = the two conservation propositions; "pthm on-shell
  divergence/constraints" = `pthm-gr-einstein-consistency-and-energy-conditions`
  (plus the Killing/on-shell theorem); "G4 volume/divergence mathematics
  before action variation" = `def-gr-metric-volume-form-and-current-flux`,
  `lem-gr-metric-volume-form-patching-and-face-normal`,
  `lem-gr-metric-divergence-and-density-formula`,
  `thm-gr-density-divergence-and-finite-chain-flux`.

## Dependency levels (in-run dependencies only)

Computed mechanically from the run manifests and stored in both manifest and
item frontmatter. A page: `def-gr-metric-volume-form-and-current-flux` 2,
`lem-gr-metric-volume-form-patching-and-face-normal` 3,
`lem-gr-metric-divergence-and-density-formula` 6,
`thm-gr-density-divergence-and-finite-chain-flux` 7,
`lem-gr-lorentzian-perturbations-remain-lorentzian` 2,
`lem-gr-compact-variation-coefficient-vanishing` 4,
`def-gr-hilbert-stress-energy-tensor` 4, `lem-gr-hilbert-tensor-uniqueness` 5,
`thm-gr-compact-metric-and-timelike-curve-variation` 10 (raised from 9 when the
declared citation of `thm-gr-curvature-tensoriality-and-coordinate-formula`
was completed into a dependency), `def-gr-killing-field` 6,
`thm-gr-killing-and-on-shell-matter-identities` 8,
`def-gr-scalar-field-matter-model` 6,
`prop-gr-scalar-field-stress-energy-conservation` 11 (rails raised through the
level-10 variation theorem), `def-gr-dust-matter-model` 6,
`def-gr-perfect-fluid-matter-model` 6,
`prop-gr-dust-and-perfect-fluid-conservation-equations` 7,
`post-gr-classical-gravitational-action` 7, `post-gr-einstein-field-law` 7,
`pthm-gr-adopted-action-and-einstein-equations` 12 (raised with its supplier),
`pthm-gr-einstein-consistency-and-energy-conditions` 12,
`rem-gr-einstein-matter-scope-and-conventions` 13. B page:
`ex-gr-metric-volume-density-and-flux-in-flat-coordinates` 8,
`ex-gr-flux-balance-for-a-divergence-free-current` 8,
`ex-gr-dust-conservation-in-flat-space` 8,
`ex-gr-null-gradient-scalar-field-conservation` 12 (raised with its supplier),
`ex-gr-killing-current-for-a-static-dust-in-flat-space` 9,
`cex-gr-energy-conditions-do-not-imply-conservation` 6,
`cex-gr-divergence-free-does-not-force-zero-flux` 8,
`ex-gr-perfect-fluid-energy-conditions` 13.
`item-dependency-levels.mjs check --run` reports no line naming a batch-69
item; its errors are the empty scaffold inventories of unauthored batches
(`gr-gr14-…`, `gr-gr15-…`, `qm-…`).
The batch-level scheduling metadata
(`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`) gives
batch 69 level 4 requiring batch 68; all batch-65/66/67/68 suppliers actually
used were inspected at statement level and are recorded `ready` in their own
batches.

## Design vs plan-spec conflicts (recorded as required)

- The design section (`research/plan-general-relativity-track.md`, "Einstein
  And Matter", L100) and the dispatch declare the earlier prerequisite
  `gr-curvature-and-tides` only; `research/plan-spec.json` declares the same
  single prerequisite. The authored closure additionally consumes
  `the-de-rham-theorem-and-degree` (published P page: the integral of a form
  over a smooth singular simplex and Stokes' theorem for smooth singular
  chains) and `cm-math-continuum` (batch 8: the determinant-derivative lemma).
  Following `validate-plan`'s own instruction and the batch-65/67/68
  precedent, the A page manifest and library requires now list all three; no
  plan-spec, design or shared file was edited. Because the plan-spec page
  `requires` and the manifest differ, `splice-plan.mjs` will report a
  `requires` drift for the owner to reconcile at the join; both dependencies
  are genuinely consumed.
- CONFLICT (recorded): the published differential-geometry page
  `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` hosts the
  definitions `def-smooth-singular-simplex` and
  `def-smooth-singular-chain-and-cochain-complexes`, but that page is not
  declared anywhere in `plan-spec.json`, so `requires-resolve` forbids naming
  it in the page `requires` and `undeclared-prereq` flags any item dependency
  homed on it. Because the run plan cannot express that page edge, the three
  items that had declared those two dependencies
  (`def-gr-metric-volume-form-and-current-flux`,
  `thm-gr-density-divergence-and-finite-chain-flux`,
  `cex-gr-divergence-free-does-not-force-zero-flux`) now **restate** the
  smooth-singular-simplex and finite-chain conventions inline, attribute them
  in prose to the two published library definitions by ID, and keep as formal
  dependencies the published suppliers that the run can declare:
  `def-integral-of-a-form-over-a-smooth-singular-simplex` and
  `thm-stokes-theorem-for-smooth-singular-chains` (both homed on
  `the-de-rham-theorem-and-degree`). This preserves the mathematical content
  without weakening any claim; the scaffold audit's own supplier map lists
  `thm-stokes-theorem-for-smooth-singular-chains` as the published supplier of
  this use. If the owner later declares the singular-cochains page in the
  plan, the two formal dependencies can be restored in a repair.
- Redundant-`requires` hygiene (validator warnings, removed): the direct
  `compactness-in-metric-spaces` requirement of the A page was already reached
  through `cm-math-continuum`, and the B page's direct
  `the-de-rham-theorem-and-degree` requirement is reached through the A page.
  Both were deleted from manifest and library carriers; the residual A-page
  `requires` is the transitive reduction
  `[gr-curvature-and-tides, the-de-rham-theorem-and-degree, cm-math-continuum]`
  and the B page requires only its A page.
- After these edits no `validate-plan` error names a batch-68 or batch-69
  page. The single remaining run error is
  `[undeclared-prereq] page qm-math-controlled-dynamics has an item depending
  on square-integrable-kernels-and-hilbert-schmidt-compactness` — a
  concurrent batch's finding, outside this batch's ownership and recorded
  here for the owner.

## Repairs made during the final read-through

- `ex-gr-dust-conservation-in-flat-space` clause 2 originally claimed the pair
  `(1+t, ∂₀)` is a dust model **on all of ℝ⁴**, but a dust model requires
  strictly positive rest density and `1+t` is positive only on the open half
  space `{x⁰ > −1}`. Clause 2 and step 3.1 now restrict to that open set
  (which itself needs the restricted smooth structure the carrier cites).
- `lem-gr-lorentzian-perturbations-remain-lorentzian` step 5.1 defined
  `M_h = max_K |h|` without disposing of `K = supp h = ∅`; it now opens with
  the trivial `h = 0` case and assumes `K ≠ ∅`.
- `pthm-gr-einstein-consistency-and-energy-conditions` step 4.1 referred to a
  nonexistent "steps 1.4-6.1"; corrected to "steps 1.4-3.1".
- `prop-gr-dust-and-perfect-fluid-conservation-equations` step 2.2 displayed
  the contraction of step 1.2 with the unit field with a minus sign on the
  pressure term; the contracted expression is
  $-(D\varepsilon+Dp+(\varepsilon+p)\vartheta)+n^b\partial_bp$, whose pressure
  derivative cancels $Dp$ to give $-(D\varepsilon+(\varepsilon+p)\vartheta)$.
  The sign was corrected, the containment of the item was re-checked, and its
  readiness record and proof-contract entry were regenerated afterwards.
- `thm-gr-compact-metric-and-timelike-curve-variation` [L3] cited
  `thm-gr-curvature-tensoriality-and-coordinate-formula` without declaring it;
  the dependency (batch 68) and its dependency role were added, which raised
  the in-run level from 9 to 10 and propagated to four consumers.
- `thm-gr-killing-and-on-shell-matter-identities` [L6] and
  `prop-gr-dust-and-perfect-fluid-conservation-equations` [L3] were facts no
  numbered step cites; the proof-contract gate requires each declared fact to
  be used, so the two redundant fact rows were removed (the Hilbert hypothesis
  is already carried by (H3); the nondegeneracy restatement is not used by the
  pointwise projection argument).
  `ex-gr-perfect-fluid-energy-conditions` step 1.1-2.1 now cite its [L1]
  (the rest-frame equivalences) at the substitutions that use it.
- **Citation-locator repair.** A full-text check of the three sources (fresh
  fetches, same bytes and hashes as batch-68's stamps) found wrong section and
  figure locators inherited from the draft: Tong's charge-conservation figure
  is **40-41** (not 29) in section 4.5.5; Tong's Killing discussion is
  section **4.3** (not 3.4.3, which is the Schwarzschild example); Tong's
  article action is section **1.2.1** (not 1.1.2); Tong's contracted Bianchi
  identity is section **3.4.1** (not 4.4, which is asymptotics); Reall's
  Killing equation is section **5.3** (5.20)-(5.23) on printed p. 56 (not
  section 7.4); Reall's volume-element/Stokes material is sections **8.6-8.7**
  printed pp. 108-110 (not section 6.1, whose (6.4)-(6.6) are the
  comma-to-semicolon rules); Carroll's volume element (2.44) is in the
  Ch. 2 tensor-density section printed pp. 52-54 (not a Ch. 3 "volume
  elements" section); Carroll's Killing vectors are in Ch. 5 (5.39)-(5.42)
  printed pp. 140-142 (not Ch. 3 pp. 133-137); Carroll's Ch. 1 dust and fluid
  tensors are printed pp. 28-31 (1.104)-(1.113) and the scalar tensor (1.112)
  is printed p. 30 (the draft had attributed the scalar tensor to Ch. 4);
  equation print pages were corrected throughout ((4.52) p. 113, (4.54)-(4.67)
  pp. 115-117, (4.70) p. 117, (4.72) p. 118, (4.74) p. 119; (9.21)-(9.25)
  p. 115, (9.28)-(9.29) and (9.31)-(9.32) p. 116, (9.35)-(9.41) pp. 117-118;
  Tong 4.5.1/4.5.3 pp. 180-185, 4.5.4 pp. 185-187, 4.5.7 pp. 194-198).
  All corrections were applied to the 28 affected carriers, the manifest was
  regenerated, and the coverage harvest now records the verified ranges.

## Sources

- Three independent treatments, fetched as full text for this batch with
  `source-fetch-check --coverage … --stamp` ("3/3 source(s) fetch-verified
  (3 newly stamped)"): Carroll, *Lecture Notes on General Relativity*,
  arXiv:gr-qc/9712019 (1,583,209 bytes, sha256_16 `d4cbfeed3a18370c`, 238
  pages); Reall, *Part III General Relativity*, October 12, 2022 revision
  (1,017,792 bytes, `fe8a24c67e884ff1`, 125 pages); Tong, *General
  Relativity*, Michaelmas 2019 (3,585,098 bytes, `9d746c8091e7e879`, 289
  pages). Bytes and hashes are identical to the batch-67/68 stamps for the
  same URLs, i.e. the same documents.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-69.coverage.json` harvests
  38 named results with dispositions (28 included, 7 inline, 4 deferred,
  1 out-of-scope). `coverage-checklist.mjs --require-destination`: 1 page,
  38 harvested results, 0 errors, 0 warnings. Deferred destinations are
  plan-spec pages (`gr-homogeneous-cosmology`, `gr-local-and-global-energy`,
  `gr-connections-and-free-fall`); the out-of-scope result is Reall's
  boundary-variation case, excluded by the framework's no-boundary-terms
  scope. No source-drop or escalation record was needed.

## Proof contracts

- `research/physics-cm-qm-gr-79-2026-10-11-batch-69.proof-contracts.json`
  covers 23 entries: the 20 proof-bearing items, the scope remark (empty
  citations/derivations and eight boundary dispositions) and the two
  postulates (`physics_review` with formulation, scope, sources,
  non_derivation; no proof-step or boundary worksheets). The six definitions
  carry no supplied argument and are outside the contract scope, matching
  batch-65/66/67/68.
- Citations and derivations were generated by `regen-contract-entries.mjs`
  from the final on-disk Facts and numbered steps, so every fact link has an
  exact quote from the source item's citable section and every numbered step
  states its inputs; boundary rows were authored per item (168 rows, 86
  `not_applicable`, each with an item-specific reason).
- `proof-contract.mjs … --strict`: 0 error(s), 0 warning(s), 23/23 checked.
  `boundary-audit.mjs … --fail-on-contradicted`: 168 rows over 1 contract
  file, 86 not_applicable, no template clusters at or above 3 members, no
  contradicted dispositions.

## Checkpoint: files owned

Items (29), the two library pages, the run manifest, the coverage, contract
and cross-batch-dependency inputs and this note. No published content, shared
plan, engine state or verdict file was edited. Imported mathematics is
read-only and was never edited. Mathematical items depend only on
mathematical items: no `domain: mathematics` batch-69 item has a
`domain: physics` item in `deps` or `justified_by`. B-page items are leaves
and are not dependency targets of other pages. No item makes an infinite
selection: the only choice principle used anywhere in the batch is the
`AC_ω` inherited by `thm-gr-killing-and-on-shell-matter-identities` clause (d)
through `thm-compactly-supported-vector-fields-are-complete` (recorded in its
remark and boundary row); no item reaches `deferred-set-theory-beyond-choice`
through any proof or prerequisite path.

## Cross-batch dependency evidence

- `research/physics-cm-qm-gr-79-2026-10-11-batch-69.cross-batch-dependencies.json`
  has 147 rows: 145 `item` rows (every declared `deps`/`justified_by` edge
  from a batch-69 item into a batch-65/66/67/68/8 item, each `verified` with
  the consumer's fact labels, their step uses and the link context) plus 2
  `page` rows (`gr-einstein-and-matter` → `gr-curvature-and-tides`,
  batch 68; `gr-einstein-and-matter` → `cm-math-continuum`, batch 8). The
  same-batch B→A `requires` edge is deliberately not in this input.
- `frontier-dependency-ledger.mjs refresh --run …`: "refreshed and
  deduplicated"; batch 69 is in `reviewed_batches`, consumer-69 edges 147
  with 0 open and 0 orphaned reviews (the 5 orphaned reviews in the ledger
  belong to batch-34 and batch-43 inputs).

## Checks run (exact results)

- precheck (29 batch items): 22 checked, 0 failing — all clean.
- rendercheck (29 items + 2 library pages): OK — 31 files, no wikilink inside
  math, no nested or unbalanced delimiters, no multiline display, every math
  span parses under KaTeX, every frontmatter block parses.
- proof-layout (29 items): 29 items, 95 steps, 0 defects.
- manifest-deps (batch-69 manifest): 29 item(s), 0 normalized, 0 errors.
- content-policy (batch-69 manifest): 29 scoped item(s), 0 errors, 0 warnings.
- validate-plan (plan-spec, `--run`): no error names a batch-69 page; the one
  remaining run error is the concurrent `qm-math-controlled-dynamics`
  undeclared-prereq recorded above.
- item-dependency-levels check `--run`: no line names a batch-69 item; the 82
  errors are empty scaffold inventories of unauthored batches.
- depcheck (focused on the 29 items): no finding names a batch-69 item; the
  remaining corpus rows are `published-unaudited` items of other scopes.
- fwdcheck (focused): no `forward-undeclared`, `forward-dangling`,
  `forward-not-later`, `forward-in-deps`, `forward-on-spine`, `forward-unused`
  or `forward-cycle` finding names a batch-69 item (the run-wide output has
  12,563 unrelated findings from other batches).
- extcheck (focused): "27901 items, 0 recorded-not-proved, 0 resting on them".
- audit-manifest over the run's 79 manifests: 8,894 relationships over 774
  items in 79 batches; 0 defects.
- coverage-checklist `--require-destination`: 1 page, 38 harvested results,
  0 errors, 0 warnings. source-fetch-check (check mode): 3/3 fetch-verified.
- proof-contract `--strict`: 0 error(s), 0 warning(s), 23/23. boundary-audit
  `--fail-on-contradicted`: no template clusters, no contradicted rows.
- frontier-dependency-ledger refresh: see above.
- **Run-level limitation (for the owner, not a batch-69 finding).**
  `physics-check.mjs --run … --plan research/plan-spec.json` stops before
  checking any item with: "physics-content: mathematics import changed:
  items/def-integer-power.md; reconcile and re-import before a new run". The
  imported-mathematics snapshot and the root workspace no longer agree on
  that file, which blocks the run-wide physics gate; batch-69 owns no part of
  that reconciliation and none of its items is named. This replaces the
  check result batch-68 recorded, and is reported exactly as it occurred.

## Readiness records

All 29 items are recorded `ready` with
`step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item ID
--decision ready --dependencies <the item's declared deps> --reason
<evidence summary>` after the final carrier edits, so every record's hash
binds the final item text and the examined dependency list.
`step1-decisions.mjs check --run` was then re-run. A first check reported all
29 records closed. A subsequent check found the records of the dependents of
`prop-gr-dust-and-perfect-fluid-conservation-equations` stale after its step
2.2 sign repair (the hash binds the transitive supplier bytes), so those were
re-recorded; a further check then found 20 records stale because the run is
**actively reconciling the mathematics import** and other batches are editing
their items concurrently — mtimes under `items/` show imported root-mathematics
files (`def-finite-sum`, the power-sum laws, `thm-am-gm`, …) rewritten at
~15:01 local inside several batch-69 dependency closures. Those 20 records
were re-recorded against the current bytes; the next check reported **0
batch-69 items unsettled**. This is a moving-supplier condition of the
in-flight run, not a content change in batch 69: proof-contract, precheck,
rendercheck, proof-layout, content-policy and the focused dependency checks
were re-run after the reconciliation edits and remain clean, so no batch-69
citation quote was invalidated. If the reconciliation continues before the
gate, the operator/owner may need one final re-record pass; no item was
escalated and no claim depends on the reconciliation outcome.

No item was
escalated: every cross-batch
supplier is an in-run batch-8/65/66/67/68 item recorded `ready` or an
inspected published mathematical item, and the two plan-level conflicts (the
undeclared published differential-geometry page and the `requires` extension)
are recorded above for owner reconciliation. Two kind-specific
qualifications: the six definitions carry no proof section and no
proof-contract entry (definitions with no supplied argument are outside the
contract scope, as in batch-65/66/67/68), and the two postulates carry
`physics_review` contract entries rather than proof worksheets.

