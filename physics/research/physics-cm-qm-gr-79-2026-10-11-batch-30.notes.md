# Batch 30 notes — `cm14-hamilton-jacobi-and-integrability` (and examples)

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 30; one A/B pair
(orders 139/140), category `non-relativistic-classical-mechanics`, library
`physics`. Step 1 (complete initial authoring) is finished: 14 items, both page
carriers, the batch manifest, coverage, cross-batch inputs and the proof
contract are authored, and every item is checked and recorded ready. This is an
authoring disposition, not a mathematical approval; Step 2 and Step 3 review
follow.

## Delivered inventory

- A page `cm14-hamilton-jacobi-and-integrability` (9 items, levels 19–28):
  `def-cm14-hamilton-jacobi-equation` (19),
  `def-cm14-complete-integral` (20),
  `pthm-cm14-hamilton-jacobi-characteristics` (21),
  `def-cm14-involution` (23),
  `def-cm14-complete-integrability` (24),
  `pthm-cm14-regular-tori` (25),
  `pthm-cm14-action-angle` (26),
  `pthm-cm14-adiabatic-invariance` (27),
  `rem-cm14-scope-of-hamilton-jacobi-and-integrability` (28).
- B page `cm14-hamilton-jacobi-and-integrability-examples` (5 items, levels
  22–27): `ex-cm14-harmonic-oscillator-hamilton-jacobi-check` (27),
  `ex-cm14-kepler-radial-action-check` (27),
  `cex-cm14-harmonic-model-critical-fibre` (26),
  `cex-cm14-free-particle-noncompact-fibre` (27),
  `ex-cm14-oscillator-caustic-check` (22).
- Levels are one plus the maximum level of an in-run `deps` target; published
  root suppliers and out-of-run pages do not raise them. Checked mechanically
  with `item-dependency-levels.mjs check --run`: no cm14 finding, and the
  manifest labels equal the computed levels for all 14 items.

## Design versus plan

- The reservation (track plan L827 ff. and `research/plan-spec.json` entries
  139/140) lists eight provisional A items; the delivered A inventory realizes
  every one of them (`cm14-hj` → `def-cm14-hamilton-jacobi-equation`,
  `cm14-complete-integral` → `def-cm14-complete-integral`,
  `cm14-hj-characteristics` → `pthm-cm14-hamilton-jacobi-characteristics`,
  `cm14-involution` → `def-cm14-involution`, `cm14-integrable` →
  `def-cm14-complete-integrability`, `cm14-regular-tori` →
  `pthm-cm14-regular-tori`, `cm14-action-angle` → `pthm-cm14-action-angle`,
  `cm14-adiabatic-invariant` → `pthm-cm14-adiabatic-invariance`) and adds the
  scope remark `rem-cm14-scope-of-hamilton-jacobi-and-integrability`. B themes
  “harmonic/central examples; critical fibers, noncompact fibers, local
  caustics” are realized by the three worked checks and two counterexamples. No
  reserved claim was dropped or weakened; the A budget 65 and B budget 28 are
  respected.
- The design’s local mathematical proof sections `E6`, `E7`, `E8`, `E18`, `E21`
  are realized in this run’s mathematics suppliers authored by earlier batches
  and consumed as in-run mathematical premises, not re-authored here:
  `def-cm-hamilton-jacobi-equation-and-complete-integral`,
  `thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral`,
  `thm-cm-liouville-arnold-action-angle-repaired`,
  `cor-cm-action-angle-radian-scaling`, `lem-cm-closed-two-form-radial-primitive`
  (batch 6, `cm-math-canonical`) and
  `def-cm-parameter-dependent-action-angle-branch`,
  `thm-cm-adiabatic-invariant-drift-bound` (batch 7, `cm-math-approximation`).
  Published canonical mathematical suppliers consumed include
  `def-countable-choice`, `prop-regular-common-level-sets-are-lagrangian-submanifolds`,
  `prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action`,
  `lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice`,
  `thm-compact-connected-regular-fibres-are-tori`,
  `cor-every-smooth-vector-field-on-a-compact-manifold-is-complete`,
  `def-action-and-angle-coordinates`,
  `def-completely-integrable-hamiltonian-system` family and the differential-form,
  inverse-function and Poincaré-lemma items of the design list; every such use was
  read against the current carrier and recorded as `mathematical-premise`.
- **Conflict recorded — B-page `requires` beyond the plan registry.** The plan
  entries list the examples page as requiring only its A companion; the authored
  B page additionally requires `cm04-one-dimensional-conservative-and-dissipative-models`
  (harmonic model), `cm05-two-body-central-forces-and-gravitation` (Kepler
  instance), `relations-functions-and-quotients` and `compactness` (logical
  prerequisites of the counterexamples). `validate-plan.mjs --run` accepts the
  carriers’ `requires` (no cm14 `undeclared-prereq` error); recorded here as a
  plan-registry gap in the same class earlier batches recorded, for owner
  reconciliation.
- **Conflict recorded — Hamiltonian smoothness caveat.** The branch Hamiltonian
  of a presentation with a $C^{2}$ potential is only $C^{2}$ in general, while a
  completely integrable datum requires $C^{\infty}$ phase functions; the datum
  class therefore carries $C^{\infty}/$smoothed-family as a hypothesis
  (`def-cm14-complete-integrability`, Remarks) and every consumer states it. No
  claim was narrowed to hide this.
- **Conflict recorded — design source line.** The reservation cites
  “T§§4.5,4.7; S Ch6; L§§10.5–10.6; W Ch5”. Tong §§4.5–4.7 and SICM Ch 6 are
  harvested as cited. In the current Likharev edition Chapter 10 has §§10.1–10.5
  with §10.5 the exercise set; the adiabatic and Hamilton–Jacobi content sits in
  §§10.2 and 10.4, so “L§§10.5–10.6” does not resolve and was superseded by
  §§10.1–10.4 (verified against the fetched full text). The abbreviation “W Ch5”
  is unresolved in the design; the page instead harvests a fourth independent
  treatment, I. Stewart, *Advanced Classical Mechanics*, Chs 4–5 (whose §5.2 is
  the periodic/secular perturbation material the adiabatic item uses), and the
  §4.6/§10.4 pointers that batch 29 recorded as deferred to cm14 are absorbed
  here (Tong §4.6 and Likharev §10.2 for the adiabatic item; Likharev §10.4 for
  the Hamilton–Jacobi item). No reserved result was lost.

## Sources and coverage

- 13 source entries: A page 7 (Tong §§4.5–4.7; Likharev §§10.1–10.4; SICM Ch 6
  §6.1 and Ch 4 §4.4; Stewart Ch 4 §§4.1–4.6; Cline §§15.2, 15.4; Cannas
  da Silva Lecture 18; Meinrenken Ch 6 §§6.1–6.3), B page 6 (Tong, Likharev,
  SICM, Stewart, Cannas, Meinrenken). All 13 are `source-fetch-check --stamp`
  verified (Tong 1 093 743 B/139 pp., Likharev 3 256 232 B/252 pp., SICM archive
  4 201 563 B, Stewart 6 408 918 B/199 pp., Cline 27 316 824 B/772 pp., Cannas
  1 127 912 B/225 pp., Meinrenken 2 031 350 B/142 pp.), and re-check clean
  (`13/13 source(s) fetch-verified`).
- 48 disposition rows: A page 35 (11 included, 19 inline, 4 out-of-scope, 1
  deferred to `cm16-stability-perturbations-and-chaos` for the formal Lie-series
  material), B page 13 (5 included, 8 inline). Out-of-scope rows carry per-row
  reasons (quantum analogies, the quantum integrality remark, unbounded-operator
  caveats). `coverage-checklist --require-destination` reports 0 errors and two
  advisory `coverage-low-yield` warnings on the two pages (11/35 and 5/13
  scaffolded); the added rows are corroborating treatments marked `inline`, and
  the declines are recorded here for Alpha’s Step 2 confirmation as the warning
  requests.
- **Source-fidelity audit and repair (this session).** Every cited locator was
  checked against the fetched full texts (Tong, Likharev, SICM HTML chapters,
  Stewart, Cline, Cannas, Meinrenken). The audit found and repaired
  over-attributions in the previously authored reference titles: no principal
  treatment contains the word “caustic” (so every previously claimed explicit caustic/no-caustic or
  boundary-branch condition was replaced by a faithful description of the
  section actually cited);
  SICM Chs 4–6 contain no “involution” or “adiabatic” text (so the SICM
  “involution warning” and the SICM §5.4 “slow parameter” citation were
  removed or re-scoped, and the adiabatic item’s SICM reference was deleted);
  Likharev’s action-angle material is §10.2, not §10.3, and contains no
  multivaluedness/caustic caveat (locators and claims corrected); Tong’s
  integrability statement is “n mutually Poisson-commuting constants of motion”
  with the proof referred to Arnold and the tori named “invariant tori”
  (rephrased); Tong’s oscillator chart is §4.5.1 and the Kepler action variables
  are §4.5.4 (locators split); Stewart Ch 5 is perturbation theory (§5.2
  periodic and secular perturbations) and Ch 4 §§4.1–4.6 contains the
  Hamilton–Jacobi and action-angle material (locators corrected). Twenty-nine reference-title corrections (including one deletion)
  across 13 items were made; the manifest `sources` were
  re-synced and now equal the carriers for all 14 items.

## Cross-batch dependencies and consumer inputs

- `physics-cm-qm-gr-79-2026-10-11-batch-30.cross-batch-dependencies.json` holds
  202 rows (197 item edges plus 5 page `requires` rows — three on the A page and
  the two extended B-page rows), all `status: verified` with consumer-side
  evidence. The run-level ledger counts 168 genuinely cross-batch batch-30
  edges (supplier batches 5: 8, 6: 10, 7: 3, 17: 22, 18: 17, 19: 6, 20: 7,
  21: 6, 23: 15, 24: 1, 28: 32, 29: 41; the remaining rows are same-batch
  edges, which the ledger ignores).
- Repairs this session: three item rows and two page rows were added that were
  missing (the two `pthm-cm12-hamilton-equivalence` edges left behind by the
  item-ID typo repair, the `def-cm12-cotangent-momentum` edge made explicit by
  the manifest sync, and the two extended B-page `requires` cells). After the
  addition every batch-30 ledger edge has a review (0 without reviews), and the
  plain `frontier-dependency-ledger.mjs refresh` is accepted.
- Consumer batches of this pair (from the run level file): batch 31 (cm15) and
  later CM pages reaching cm14, including `cm16-stability-perturbations-and-chaos`
  (the deferred Lie-series destination); their manifests are still empty, so
  their dependency inputs are their own workers’ to write against the current
  carriers.

## Authoring review repairs (Step 1, handoff session)

1. **Stale proof-contract quotes regenerated.** `proof-contract --strict`
   reported 8 `citation-quote-mismatch` errors on the B-page consumers after
   late Definition edits; the seven affected contract entries were regenerated
   with `regen-contract-entries.mjs` from the current carriers. Strict mode is
   now `0 error(s), 0 warning(s), 9/9 item(s) checked`.
2. **Templated boundary rationales replaced.** `boundary-audit --fail-on-template`
   flagged two clusters (six `iff-reverse` rows reading “No reverse implication
   is asserted.” and three `iff-forward` rows); twelve rows across six items
   were rewritten to item-specific dispositions (e.g. the oscillator example
   verifies claims 1–5 for the one declared $(m,k)$ instance; the counterexamples
   refute a universal statement by one instance). The audit now exits 0 with no
   template reuse and no contradicted dispositions.
3. **Manifest dependency sync.** The carrier `def-cm14-complete-integral`
   declares `def-cm12-cotangent-momentum` (role `formulation-prerequisite`,
   cited in clause (c) for the momentum dimension), which the manifest had
   dropped; the manifest `deps`/`dependency_roles` were re-synced from the
   carrier. All 14 manifest items now equal their carriers in kind, domain,
   title, deps, roles, level, scope, provenance and sources.
4. **Source additions with genuine fetch stamps.** Cline §15.2/§15.4, Cannas
   Lecture 18 and Meinrenken Ch 6 were cited by items but absent from the
   coverage; they were added with per-item disposition rows and newly stamped
   (`5 newly stamped`), bringing the coverage to 13/13 verified.
5. **Source-fidelity repairs** as recorded in the Sources section above.

## Defect found in another batch’s carrier (recorded for the canonical ledger)

- **Item**: `thm-cm-liouville-arnold-action-angle-repaired` (domain
  `mathematics`, status draft, owned by batch 6, page `cm-math-canonical`,
  category `non-relativistic-classical-mechanics-mathematics`).
- **Defect**: `dependency_roles.def-cm-phase-domain-and-standard-symplectic-two-form`
  is `formulation-prerequisite`; a mathematics-domain item in this run must give
  every dep role `mathematical-premise`, so `validatePhysicsContent` emits
  `mathematical-role ... mathematical deps must be mathematical-premise`
  (scoped run over batch 30 shows exactly this one error and none in batch 30’s
  own items). All 24 other roles of that item and every other in-run
  mathematics item checked use `mathematical-premise` throughout.
- **Evidence and impact**: the defect is a frontmatter-role violation only; the
  item’s statement and proof are unaffected and batch 30 consumes it correctly
  with role `mathematical-premise` (`pthm-cm14-action-angle` [F2], and the
  torus/adiabatic items). Repair (batch-6 owner): change that one role to
  `mathematical-premise`. Until then the run policy gate will flag the item.
  Recorded here rather than edited, because the carrier belongs to another
  batch; escalated to the owner in the batch-30 handoff message.

## Checks run on the final carriers

- `precheck.mts` (all 14 items): `9 checked, 0 failing — all clean` (the four
  definitions and the remark have no proof body).
- `proof-layout.mjs` (14 items + 2 page carriers): `16 items, 47 steps,
  0 defects`. `rendercheck.mjs` (16 files): OK — YAML, KaTeX, math nesting, no
  multiline displays.
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 9/9 item(s)
  checked`; `citation-fidelity.mjs`: no quote-not-found, no widening
  candidates; `truncated-citation.mjs`: no candidates; `finite-smoke.mjs`:
  0 errors over 0/9 items carrying obligations; `boundary-audit.mjs
  --fail-on-contradicted --fail-on-template`: exit 0; `risk-report.mjs`:
  0 errors, 9 items routed as expected.
- `content-policy.mjs` on the manifest: `14 scoped item(s), 0 error(s)`;
  `manifest-deps.mjs`: `14 item(s), 0 normalized, 0 error(s)`;
  `coverage-checklist.mjs --require-destination`: `2 page(s), 48 harvested
  result(s), 0 error(s), 2 warning(s)` (the low-yield advisories above);
  `source-fetch-check.mjs`: `13/13 fetch-verified`, `13/13 resolved`.
- `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests — no
  scope drift`. `validate-plan.mjs research/plan-spec.json --run`: cm14 lines
  show the two pages with 9 and 5 items and their declared `requires`; no cm14
  error. `item-dependency-levels.mjs check --run`: no cm14 finding.
  `depcheck.mjs --quiet`: no cm14 line (run-wide FAIL from unrelated legacy
  published items). `fwdcheck.mjs --quiet`: no cm14 line. `extcheck.mjs
  --quiet`: OK.
- Scoped `validatePhysicsContent` over batch 30 (14 items, 2 pages): exactly
  one error, the batch-6 role defect above; none in batch-30 items.
- `frontier-dependency-ledger.mjs refresh` (plain): accepted; all 168 batch-30
  cross-batch edges reviewed.

## Run-level findings outside batch 30 (recorded, not repaired here)

1. `frontier-dependency-ledger.mjs refresh --require-reviewed` still fails
   because 17 other batches have supplied no input file (32, 51–64, 77–79) and
   46 edges elsewhere carry no review; none of those edges belongs to batch 30.
2. `batch-dependency-levels.mjs check --run` reports the derived file stale:
   the engine-written file records batch 30 as `requires [5,24,29]` and batch 76
   with three prerequisites, while the fresh computation yields the same level 9
   for batch 30 with the extended in-run `requires` list
   `[5,6,7,17,18,19,20,21,23,24,28,29]` (and batch 76 likewise extended). The
   level is unchanged; the engine rewrites this derived scheduling metadata
   mechanically at its next planning tick, and no engine file was edited here.
3. `physics-check.mjs --run` now reads past batch 30 but aborts on
   `Invalid or empty current page in ...-batch-32.pages.json` (later batches
   not yet authored); `proof-contract-coverage.mjs --run` requires an explicit
   `--contracts FILE` and was not run in run-wide form.
4. `validate-plan.mjs --run` reports 34 planned pages with no item list yet
   (earlier and later unbuilt batches), as its note records.

## Readiness

All 14 items are recorded `ready` after the final carriers, manifest, page
carriers, coverage and contract were written, each with its exact examined
dependency list; no cm14 item is escalated. The recorded dependences include
the in-run mathematics suppliers of batches 6 and 7, the cross-batch physical
suppliers (5, 17–24, 28, 29 as listed per item) and the published root
suppliers. `step1-decisions check --run` shows the 14 cm14 records closed; other
batches’ missing records remain theirs. Step 1 authoring is complete;
independent review is Step 2’s task, and readiness here is an authoring
disposition, not a mathematical approval.
