# Batch 7 notes — `sr-light-and-doppler` / `sr-light-and-doppler-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, label batch-7, covers 7 (batch index).
Owned pair: `sr-light-and-doppler` (A, order 221, category `special-relativity`,
`library: physics`) and `sr-light-and-doppler-examples` (B, order 222).
Step 1 scaffold construction only: no item body was authored, no item file exists for
these ids, and no readiness record is independent mathematical approval (Step 3 review
follows). Nothing outside the assigned manifests, coverage, notes, readiness records and
the consumer-batch dependency input was written; the shared plan, published content,
imports and engine state were not touched.

Authority read in full before construction: `CLAUDE.md`, `../CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md` (including the mathematical-rigor and the
statistical-evidence/double-slit sections), the owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, the design section
`research/plan-special-relativity-track.md` L149 (Light And Doppler), the full source design
`research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md` (SR07 row
and the "Additional explicit model vocabulary" paragraph), the S5 argument of
`.../scaffold/sr-supplier-proofs.md`, the closure ledger entry M24, the expanded item
inventory and the splice `research/prose-scaffold-splice.json` (`proposed_item_homes`), the
SR07 source-coverage row of `.../scaffold/prose-scaffold.md` (its OPEN shortfall is
resolved here, below), the current `research/plan-spec.json`, the current run manifests of
batches 1–6 and the notes of batches 1–4, and the three sources listed below, read over the
exact load-bearing ranges in this session.

---

## Scope built

- **A page** `sr-light-and-doppler`, 10 items in dependency order:
  - Mathematics (6): `lem-sr-metric-duality-on-lorentz-vector-space` (the pairing
    `iota(v) = eta(v,.)` is a linear bijection V -> V*, the raised covector and its
    orthonormal-frame components), `def-sr-affine-phase-and-wave-covector` (affine phase
    functions on A, the differential, level sets and kernel, wave covector terminology
    including null/future/null-future), `lem-sr-future-causal-pairing-negative` (a future
    timelike vector pairs negatively with every nonzero future causal vector, with the null
    converse), `lem-sr-null-covector-frame-data` (the unique frame data
    `(varpi,s)`, `varpi = -k(e_0) > 0`, `|s| = 1`, `k_a = (-varpi, varpi s)`,
    `k^sharp = varpi(1,s)`, and the converse), `lem-sr-null-covector-boost-transformation`
    (the covector component law for `x' = B(beta)x + b`, `varpi' = gamma(1 - beta.s)varpi`,
    the exact `s'` vector formula, the axis formulas and the identity
    `beta.s' = (beta.s - |beta|^2)/(1 - beta.s)`), and `lem-sr-phase-rate-along-worldline`
    (`(theta o x)' = k(U)` in proper time, `k(U) < 0` for a future null wave covector).
  - Physics (4): `def-sr-null-wave-covector-and-observer-frequency` (the SI wave data
    `omega, nu, kappa, lambda, s` and the observer frequency
    `omega_n = -c k(n) = -k(U_o) > 0` with its sign convention),
    `post-sr-ideal-plane-wave-model` (the adopted ideal plane-wave model, the wave-front /
    ideal-ray identification and the phase-per-proper-time reading rule),
    `pthm-sr-null-wave-doppler-and-aberration` (the stable research ID, minted exactly at
    its spliced home: the frame-data transformation, the frequency/wavelength ratios, the
    general-observer formula, the longitudinal cases, the two transverse protocols, the
    aberration law and the scope/protocol clause), and
    `rem-sr-doppler-dimensional-restoration` (units, the two coordinate forms, natural
    units and the c-restoration list).
- **B page** `sr-light-and-doppler-examples`, 6 leaf items: 4 physics items
  (`ex-sr-doppler-longitudinal-beta-three-fifths`,
  `ex-sr-transverse-doppler-protocols-worked`,
  `ex-sr-aberration-worked-beta-three-fifths`,
  `cex-sr-transverse-doppler-is-not-unshifted`) and 2 mathematics items
  (`ex-sr-phase-level-sets-and-null-generators`,
  `ex-sr-null-covector-frame-data-worked`). All six have
  `provenance.statement: ai-generated` with `generation.role` set (example/counterexample),
  so none can be a `deps` target; nothing outside the pair depends on them. The B page is a
  leaf.
- Page `order`, `id`, `kind`, `category`, `library`, `title`, `companion` and `requires`
  are unchanged from the plan record and the generated task shell; the only edits are the
  two `items` arrays.
- `dependency_level` computed from in-run `deps` only (batches 1–4 items and same-batch
  items count; published imports and later planned pages do not raise a level). A-page
  levels run 2–16; B-page levels run 8–16; `item-dependency-levels.mjs check --run` reports
  no error for any batch-7 item (the remaining errors are other batches' empty
  inventories).
- **Budget.** The design reserves 22 A / 10 B closure slots. The pair is built to 10 A / 6 B:
  every promised design element closes with these items, and the reservation is a budget,
  not a target. The A page is far below the 100-item cap, so no split is required.

### Mapping of the SR07 design inventory (L149 and the SR07 row)

| design element | disposition |
|---|---|
| "def null wave covector/observer frequency" | Split, with the mathematical content supplied first: `def-sr-affine-phase-and-wave-covector` + `lem-sr-null-covector-frame-data` (objects and frame data) and `def-sr-null-wave-covector-and-observer-frequency` (the physical frequency vocabulary and the observer-frequency sign convention). |
| "post ideal wave/light clock model" | `post-sr-ideal-plane-wave-model`, extending the batch-1 postulates `post-sr-ideal-clocks-and-light` and `post-sr-inertial-covariance`; it adds the plane-wave phase model, the wave-front/ray identification and the frequency-reading rule. |
| "pthm longitudinal/general Doppler and aberration" | `pthm-sr-null-wave-doppler-and-aberration` (the reserved stable ID of `prose-scaffold-splice.json`), with the necessary mathematical closure on the same A page: the duality lemma, the pairing lemma, the frame-data lemma, the boost-transformation lemma and the phase-rate lemma. |
| "dimensional restoration" | `rem-sr-doppler-dimensional-restoration` (unit table, the `x^0 = ct` versus `(t,x)` coordinate forms, natural units and the explicit c-restoration list, following the framework's rule that natural units require a restoration table). |
| "budget 22/10" | Not exhausted; the complete claim closure needs 10 A / 6 B items. |
| B companion ("worked examples/countermodels explicitly listed in framework prose; leaf only") | The framework prose lists no numbered SR07 exercises, so the companion is built from the design's own complex: exact rational longitudinal, transverse-protocol and aberration workups, the null-generator geometry, a frame-data boost workup, and a counterexample to a genuinely universal transverse-Doppler claim (the two-protocol trap recorded in S5 and Crowell §3.2 versus §6.5.1). |

## Design vs plan

- `research/plan-spec.json` and the generated manifest agree on page ids, titles, orders
  221/222, category `special-relativity`, `library: physics`, companion pointers and the
  declared page edge `sr-observer-measurements`. **Recorded conflict (plan controls):** the
  design reservation names `requires: [SR02, SR03, SR04]`, while the current plan declares
  only `sr-observer-measurements` (= SR04). The reduction is harmless because the plan edge
  to SR04 transitively contains SR02 and SR03 (`sr-observer-measurements` requires
  `sr-worldlines-and-clocks`, which requires `sr-lorentz-transformations`, which requires
  `sr-spacetime-primitives`), and the pair in fact consumes items of SR02 and SR03 directly.
  No page-edge or order conflict beyond this reduction is recorded; the plan is preserved.
- The only pre-existing stable id for this pair, `pthm-sr-null-wave-doppler-and-aberration`
  (home `sr-light-and-doppler` in `prose-scaffold-splice.json` and
  `expanded-item-inventory.json`), is minted with exactly that id and home. Every other id
  in this batch is new and unused; no item of batches 1–4 is re-minted or duplicated, and
  no batch-5/6 id is touched (those batches were empty shells when this batch was built).
- **Frontier plan validator:** `node tools/physics-support/frontier-item-gate.mjs --run
  physics-em-sr-40-2026-10-08 --tool validate-plan` reports no `undeclared-prereq` finding
  for `sr-light-and-doppler` or `sr-light-and-doppler-examples`: every published
  mathematical home used by these items is inside the transitive `requires` closure of
  `sr-observer-measurements` (the 50-page closure computed from the plan), and every in-run
  supplier page (`sr-spacetime-primitives`, `sr-lorentz-transformations`,
  `sr-worldlines-and-clocks`, `sr-observer-measurements`) is in that closure. The six
  `undeclared-prereq` findings the command currently prints belong to other pages
  (`sr-proper-time-comparisons`, `sr-energy-momentum`, `em-causal-wave-kernel-prerequisites`)
  that are being scaffolded concurrently; they are not batch-7 blockers and are reported
  for owner reconciliation.

## Sources and the SR07 coverage shortfall (resolved)

`prose-scaffold.md` recorded for SR07: "Crowell substantive full treatment; exact second
independent full Doppler/aberration derivation not yet pinned. OPEN coverage shortfall; no
source-count waiver." This batch pins **two** additional independent full treatments over
their exact read ranges and records them in
`research/physics-em-sr-40-2026-10-08-batch-7.coverage.json`; every source is
fetch-verified (`source-fetch-check --stamp`) and URL-sweep-live:

1. **B. Crowell, *Special Relativity*, rev. 2020-12-10** (textbook; the framework's
   already-read SR source), re-read here over §§3.2–3.3 pp. 55–59 and §§6.4–6.6 pp.
   134–141 of the 246-page PDF (`https://archive.org/download/sr_20220102/sr.pdf`,
   10728180 bytes, sha256_16 `4c11e8f367267d53`, byte-identical to the batch-1 stamp).
   Load-bearing: D(v) = sqrt((1+v)/(1-v)) and the transverse remark (§3.2), the frequency
   covector and its dual (§§6.4.1–6.4.2), the Doppler formula and the aberration law
   (§§6.5.1–6.5.2), and the phase-velocity exception for light (§6.6.1).
2. **A. Einstein, "Zur Elektrodynamik bewegter Körper", Ann. Phys. 322 (1905) 891–921,
   §7** (primary paper; journal pp. 910–912; proofread transcription of the original,
   `https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper`, 535051 bytes,
   text_chars 64005, sha256_16 `b38a90ba0628c320`). Read in the original German over §7:
   the transformed phase, `omega' = omega beta (1 - a v/V)`, the Doppler principle
   `nu' = nu (1 - cos(phi) v/V)/sqrt(1-(v/V)^2)`, the longitudinal special case, the
   aberration law `cos(phi') = (cos(phi) - v/V)/(1 - (v/V) cos(phi))` and the case
   `phi = pi/2`; the amplitude/intensity transformation is recorded out-of-scope (it
   requires an electromagnetic field model).
3. **S. Murugesh, "Relativity – Special Theory", IIST course notes PH33003/PH43017, last
   update 2009-02-18** (course notes; 31 PDF pages,
   `https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf`, 246656 bytes,
   sha256_16 `88c2cc60a25c3467`), Chapter 6 "Waves" pp. 25–28: phase matching and the wave
   four-vector (6.1)–(6.5), longitudinal Doppler (6.1.1), transverse Doppler (6.1.2) and
   aberration (6.2). This is the pinned second independent full Doppler/aberration
   derivation; Einstein's §7 is a third, primary, treatment.

**Convention check across the three sources (recorded because the transverse protocol is
the trap S5 warns about).** All three formulas agree once the velocity sign and angle
convention are fixed. Einstein's `phi` is the angle between the source–observer line (the
propagation direction `s`) and the observer's velocity, so `cos(phi) = beta_hat . s` and his
formula is the theorem's `omega' = gamma(1 - beta.s) omega`; his `phi = pi/2` gives
`cos(phi') = -|beta|`, the theorem's clause (v). Crowell's §6.5.1 `theta` is the angle
between the propagation direction and the source's velocity relative to the observer
(equivalently the negative of the observer's velocity), as fixed by his own 1+1 example
(wave left, observer right, shift D > 1); his formula `omega' = gamma omega (1 + v cos
theta)` is then exactly `gamma(1 - beta.s) omega`. Murugesh's `omega'_k' =
gamma_0 omega_k (1 - k_hat . beta_0)` has the same reading. The **transverse** statements,
however, split by protocol exactly as the theorem's clause (iv) states: Einstein's
`phi = pi/2` and Crowell's §6.5.1 `theta = 90` give `omega' = gamma omega` (wave transverse
to the relative velocity in the source frame), while Crowell's §3.2 "purely transverse…
1/gamma" remark and Murugesh's §6.1.2 (`k' . v_0 = 0` in the observer's frame) give
`omega' = omega/gamma` (transverse in the receiver frame). The pair therefore states both
protocols with the equivalence `beta.s = |beta|^2 <=> s'.beta_hat = 0`; the B-page example
and counterexample compute both factors at `beta = 3/5`. No source defect is claimed for
this: the readings are consistent once the protocol is stated, and the coverage rows record
the exact conversion.
**Errata/limits recorded, not harvested as claims:** Crowell Example 1 (Ives–Stilwell
frequencies and uncertainties), Example 2 (Bertozzi time-of-flight data) and Example 6
(Heckmann plates, 0.00 ± 0.06″) are reported measurements; they are deferred to
`sr-experimental-interface` for primary-report, calibration and statistical work. Crowell
Example 7 (optical appearance of a moving cube) and §6.6.2 (group velocity) are
out-of-scope for a single monochromatic plane-wave model. Einstein's amplitude/intensity
transformation is out-of-scope for the same reason. No experiment, measurement or
statistical statement is authored on this pair.

## Local closure decisions

- Every claim of the pair has its prerequisites either on the same A page, on an in-run
  supplier page, or on a published imported mathematics item with the exact interface
  recorded in the cross-batch input.
- **Locally added mathematics.** The pairing-sign lemma and the metric-duality lemma are
  not present in batches 1–4; they are supplied here because the frequency reading needs
  `-k(U_o) > 0` (pairing) and the raised covector needs the isomorphism `V -> V*`
  (duality). Neither is imported from GR material: both are proved from the Lorentz form,
  the orthonormal-basis lemma, the closed-cone coordinate description and finite-dimensional
  rank-nullity, and neither uses the Axiom of Choice. The frame-data and
  boost-transformation lemmas are proved from `thm-sr-tensor-and-current-transformation`
  clause (ii) (the affine-phase component law) and the boost inverse, so no new tensor
  machinery is introduced.
- **The physical interpretation is isolated in the postulate.** The definition item fixes
  numbers, units and sign conventions only; `post-sr-ideal-plane-wave-model` adopts the
  identification of the phase with an ideal light wave and of `omega_n` with the frequency
  read by an ideal observer. The Doppler/aberration theorem is conditional on those
  postulates and carries their idealizations.
- **Two transverse protocols, stated not conflated.** Clause (iv) of the theorem records
  both `gamma` and `1/gamma` configurations with the exact equivalence condition; the B
  page computes both and refutes the universal "transverse is unshifted" claim. This
  implements the S5 warning "a different emission/rest-angle protocol has a different
  transverse formula".
- **Protocol for frequency comparisons.** The theorem compares frequencies of one wave at
  reception events (observer worldlines) or frame data of the same phase function in two
  charts; `post-sr-ideal-plane-wave-model` (iii) states that comparing different events
  requires propagating the phase along the worldlines. No one-way speed or synchronization
  claim is made.
- **Exclusions kept explicit.** The model excludes media, dispersion, absorption,
  modulation, signal speeds, intensity, polarization, finite line widths, sources,
  detectors, accelerating observers (reserved to SR10), gravitation, quantum photons and
  the identification of energy with `hbar omega`; no experiment, measurement or statistical
  inference appears on either page. The framework's experimental tests remain reserved to
  `sr-experimental-interface`.
- **Axiom of choice.** No batch-7 item uses AC or a choice principle: all arguments are
  finite-dimensional linear algebra on a 4-dimensional space, one-variable differentiation,
  and explicit rational arithmetic on the B page. No choice declaration is needed or made.
- **Page split not needed.** 10 A + 6 B items are far below the 100-item cap.

## Cross-batch dependencies and consumer inputs

- Batch input file `research/physics-em-sr-40-2026-10-08-batch-7.cross-batch-dependencies.json`
  holds 63 rows: 62 item rows (consumers are the batch-7 items, suppliers are the batch-1
  through batch-4 items they actually use, with required content, use/location, role and a
  hypothesis check) plus the page row `sr-light-and-doppler -> sr-observer-measurements`.
  All rows are `open` because the suppliers are scaffolded and recorded ready but not yet
  authored. `frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`
  reports 0 orphaned reviews from this file and all 63 batch-7 edges carry exactly one
  review row; the run-wide `--require-reviewed` gate remains red only for the batches that
  have not yet supplied inputs.
- The page row records honestly that the pair has **no item-level dependency on
  `sr-observer-measurements`**: the declared page edge is an ordering prerequisite (the
  observer-measurement vocabulary and its position in the framework), and the transitive
  closure of the edge contains every in-run supplier actually used. Should Step 3 find a
  concrete item use of the batch-4 observer items, this row must be updated to add it; no
  such use exists in the scaffold.
- Downstream consumer batches (SR10 accelerated observers, SR12 experimental interface and
  the EM pages that name SR wave results) will consume in particular
  `pthm-sr-null-wave-doppler-and-aberration`, `def-sr-null-wave-covector-and-observer-frequency`
  and the two stable mathematical interfaces `lem-sr-null-covector-frame-data` and
  `lem-sr-null-covector-boost-transformation`. Each consumer must review its own edge in
  its own input; the B-page items are leaves and must not be consumed.

## Checks actually run (exact results)

| Check | Command | Result |
|---|---|---|
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 234 items, 0 missing, 0 errors (the run-wide count moves as sibling batches are written) |
| manifest policy | `node tools/physics-support/content-policy.mjs --manifest-only research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 234 scoped items, 0 errors, 0 warnings |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-7.coverage.json --require-destination` | 1 page, 25 harvested results, 0 errors, 0 warnings |
| full-text fetch | `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-7.coverage.json --stamp` | 3/3 sources fetch-verified (3 newly stamped) |
| URL liveness | `node tools/physics-support/url-sweep.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-7.coverage.json --out /tmp/sr07/batch7-url-liveness.json --recover --fail-on-dead` | 3/3 live, 0 failed, 0 suspect |
| source backing | `node tools/physics-support/source-backing.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-7.coverage.json --liveness /tmp/sr07/batch7-url-liveness.json` | 3 authored results, every one backed; empty reharvest list |
| physics content (engine form) | `node tools/physics-support/physics-check.mjs --run physics-em-sr-40-2026-10-08 --plan research/plan-spec.json` | 0 errors, 234 items checked |
| plan (page level) | `node tools/physics-support/validate-plan.mjs research/plan-spec.json` | exit 0 |
| scope ledger | `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` | 80/80 pages present, no scope drift |
| drift review | `node tools/physics-support/drift-review-check.mjs --run physics-em-sr-40-2026-10-08` | 40 pages reviewed, no blocked edges |
| external refs | `node tools/physics-support/extcheck.mjs` | 26654 items, 0 recorded-not-proved, OK |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | no batch-7 error; the 46 remaining errors are other batches' empty inventories |
| cross-batch ledger | `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` | 63/63 batch-7 edges reviewed (open), 0 batch-7 orphans |
| frontier plan validator | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | no finding for either batch-7 page; the printed findings belong to other, concurrently scaffolded pages |
| readiness | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 234 declared items, 231 ready; batch-7 contributes 16/16 ready and zero open rows (the 49 open rows are other batches' empty inventories and missing records) |
| stage artifacts (unit 7) | artifact list of `scaffoldArtifacts` for unit `7` (manifest, coverage, 16 readiness records) | all 18 paths exist; every record is current (closed) and every level matches the computed level, so no `...batch-7.scaffold-incomplete` sentinel applies |

## Run-level findings (not batch-7 blockers)

1. Concurrent scaffolding is in progress: batches 5, 6, 8, 19 and 21–40 were empty shells
   at construction time and other agents are writing them. All run-wide gates below stay
   red until every batch is populated; batch 7 itself is clean on every scoped check.
2. `frontier-item-gate --tool validate-plan` currently reports six `undeclared-prereq`
   findings for `sr-proper-time-comparisons`, `sr-energy-momentum` and
   `em-causal-wave-kernel-prerequisites` (three math homes missing from their `requires`
   closures). They belong to other batches' consumers; repair is plan-owned (add the
   declared homes) and outside a beta's write scope. No such finding exists for batch 7.
3. `step1-decisions check --run` reports 7 rows "Item or dependency changed; record current
   readiness" and 3 "Readiness record missing" for items of other batches that were edited
   after their records were written; batch 7 has no such row.
4. `item-dependency-levels check --run` reports the 46 empty inventories of the not yet
   scaffolded batches; batch 7 contributes no error.
5. The unified cross-batch ledger has 23 unreviewed batches (inputs not yet written by
   their owners) and two orphaned rows in batch 19's input (two `verified` rows whose
   consumer and supplier are the same batch); both are owner/engine reconciliation items,
   not batch-7 findings.
6. `fwdcheck` remains red run-wide on legacy imported mathematical items, exactly as batch 1
   recorded; it is not a Step-1 gate for this batch.

## Unresolved / escalated

- No batch-7 item is escalated. Every item has a complete statement, an explicit proof or
  non-derivation strategy, named dependencies with roles, a computed dependency level and a
  current `ready` record; every supplier is scaffolded in this run or is a published import
  on disk with the exact interface recorded.
- No unresolved source question: all three sources are full-text fetch-verified and live;
  the previously OPEN second-treatment shortfall for SR07 is resolved by the Murugesh course
  notes and the Einstein paper. No source drop, no alternative proof substitution and no
  coverage waiver was used, so no `source_resolution` record is required.
- Recorded uncertainty (not an escalation): the design row's `requires: [SR02, SR03, SR04]`
  versus the plan's single edge is recorded above; the transverse-protocol conventions of
  the three sources are recorded with their exact conversions so that Step 3 does not
  silently inherit one source's protocol. If Step 3 finds an item-level use of a batch-4
  observer item in this pair, the page row must be updated.

- After a self-review wording clarification of five batch-7 items (the ideal-ray clause of the
  postulate, the causal-hypothesis phrasing of the pairing lemma, the velocity-restoration
  phrase of the units remark, the accelerated-observer pointer of the theorem and the
  axis-case notation `beta = b e_1` with `b` in `(-1,1)` in the boost-transformation lemma
  and the theorem), all 16 readiness records were refreshed against the current inputs; no
  statement claim, dependency or dependency level changed, and the final check reports 16/16
  current `ready` records with zero batch-7 open rows.


## Final verification (after the last edits)

- `manifest-deps` on all current manifests: 234 items, 0 missing, 0 errors.
- `content-policy --manifest-only` with the full batch glob: 234 scoped items, 0 errors,
  0 warnings.
- `coverage-checklist --require-destination` on the batch file: 1 page, 25 harvested
  results, 0 errors, 0 warnings.
- `source-fetch-check` in check mode: 3/3 sources fetch-verified; the coverage file carries
  the three stamps.
- `physics-check --run ... --plan`: 0 errors, 234 items.
- `manifest-integrity`, `drift-review-check`, `validate-plan` and `extcheck`: all exit 0.
- `step1-decisions check --run`: batch-7 contributes 16 ready records, zero open rows and
  zero stale records; `item-dependency-levels check --run` reports no batch-7 error.
- All 18 stage-1 artifacts for unit 7 exist (manifest, coverage, 16 readiness records) and
  the pair is releasable to its dependent batches; the run-wide stage-1 gates remain red
  only for the batches still being scaffolded.
