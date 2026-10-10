# Step 3a scope report — pair `sr-light-and-doppler` / `sr-light-and-doppler-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha, label
  `step3a-pair-sr-light-and-doppler-147e44c422206cf5`.
- A page `sr-light-and-doppler` (order 221, category `special-relativity`,
  `library: physics`, 10 items); B page `sr-light-and-doppler-examples`
  (order 222, 6 leaf items). Batch 7.
- Scope decision: **sufficient** for the A page (recorded via
  `tools/physics-support/step3-decisions.mjs record-scope`). No omission found,
  no merger or enrichment recommended, no owner action requested.
- Scope, not proof correctness: this report checks the planned inventory,
  coverage and prerequisite presence against the prose design. Proof validity,
  source fidelity of each argument and statistical qualifications remain for the
  ordinary Step 4–8 authoring/review/judging duties.

## Inputs read

- `research/plan-spec.json` (pair entries, orders 221/222; A `requires:
  [sr-observer-measurements]`), `research/plan-special-relativity-track.md`
  (Light And Doppler block, line 149) and
  `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`.
- Full source design `research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`
  (SR07 row line 36; "Additional explicit model vocabulary" paragraph line 22),
  `proposed-inventory-and-checks.json` (SR07 block), `expanded-item-inventory.json`
  (the single stable SR07 id), `prose-scaffold-splice.json` `proposed_item_homes`,
  `prose-scaffold.md` line 36 (the recorded SR07 coverage shortfall), the S5
  section of `sr-supplier-proofs.md`, and closure-ledger rows M24/M25.
- Run inputs: `…-batch-7.pages.json`, `…-batch-7.coverage.json`,
  `…-batch-7.notes.md`, `…-batch-7.cross-batch-dependencies.json` (63 rows),
  imported placements in `items/` and `research/math-imports.json`, and the
  current plan/manifest state of all 80 pages (471 items).
- Owner decisions: none touch this pair; the only owner text naming SR Doppler
  is the SR12 experimental-interface obligation (Botermann et al. comparison),
  which consumes, and does not alter, this pair. One prior scope record exists
  for `sr-spacetime-primitives`; none for this pair before this review.

## Scope evidence (design vs content)

The SR07 design row reserves: def null wave covector/observer frequency; post
ideal wave/light clock model; pthm longitudinal/general Doppler and aberration;
dimensional restoration (budget 22/10, closure S5, `requires [SR02,SR03,SR04]`).
The framework's "Additional explicit model vocabulary" fixes the dimensionless
affine phase `theta = k_a x^a + theta_0`, constant nonzero null future covector,
`omega_n = -c k(n) > 0` (s^-1), linear frequency `omega_n/(2 pi)`, Doppler and
aberration by transforming `k`, and excludes any `hbar omega` identification.
Every promised element is built on the A page (10 items):

- null wave covector (math) -> `def-sr-affine-phase-and-wave-covector` (affine
  phases, level sets, wave covector and its causal classification; explicitly
  refuses physical interpretation);
- observer frequency (physics) -> `def-sr-null-wave-covector-and-observer-frequency`
  (frame data `(omega, s)`, `omega = c varpi`, `nu`, `kappa`, `lambda`,
  `omega_n := -c k(n) = -k(U_o)`, positivity and well-definedness; scope clause
  excludes light identification, quantum, amplitude, medium, detector content);
- ideal wave model (postulate) -> `post-sr-ideal-plane-wave-model` (ideal
  monochromatic plane wave as an affine phase, frequency reading at reception
  events, comparison protocol requiring propagated phases, explicit exclusion
  list; extends `post-sr-ideal-clocks-and-light` and `post-sr-inertial-covariance`);
- Doppler and aberration (physics theorem) -> `pthm-sr-null-wave-doppler-and-aberration`,
  clauses (i) frame data in x' with `omega' = gamma(1 - beta . s) omega`
  and the exact `s'` map, (ii) rest-observer and general-observer readings,
  (iii) both longitudinal cases, (iv) the two transversality protocols
  (`beta . s = 0` gives `gamma`; `beta . s = |beta|^2` equivalently
  `s' . beta_hat = 0` gives `1/gamma`, with the warning that "transverse" is
  incomplete until the frame is named), (v) aberration
  `cos theta' = (cos theta - |beta|)/(1 - |beta| cos theta)` with the
  strictly-increasing bijection and the `cos theta = 0` case, (vi) scope;
- dimensional restoration -> `rem-sr-doppler-dimensional-restoration` (unit
  table, the two coordinate forms, natural units `c = 1` and the exact `c`
  restoration list).

Locally supplied mathematics fills the design's open proof routes without
importing physics: `lem-sr-metric-duality-on-lorentz-vector-space`,
`lem-sr-future-causal-pairing-negative`, `lem-sr-null-covector-frame-data`,
`lem-sr-null-covector-boost-transformation` and `lem-sr-phase-rate-along-worldline`.
The design's S5 route (transform `k^sharp` by the boost, divide by the positive
time component, nullness gives `|s'| = 1`) is exactly the boost-transformation
lemma, which consumes the existing affine-phase clause (ii) of
`thm-sr-tensor-and-current-transformation` (verified in the batch-2 manifest).
The S5 warning that "a different emission/rest-angle protocol has a different
transverse formula" is implemented as clause (iv) plus the B companion's two
worked protocols and counterexample.

The B page holds 6 leaf items (design budget 10, leaf-only): three worked model
examples (longitudinal at `beta = 3/5`; the two transverse protocols with the
`5/4` and `4/5` factors; aberration at `beta = 3/5`, `cos theta = 4/5`), two
pure-mathematical worked examples (phase level sets and null generators; frame
data and boost round trip), and one counterexample refuting the universal claim
"transverse implies unshifted". No numbered SR07 exercises exist in the
framework prose, so the companion is built from the design's own S5 complex,
which matches the B row's intended role.

## Source coverage

Coverage file `…-batch-7.coverage.json`: `coverage-checklist --require-destination`
reports 1 page, 25 harvested results, 0 errors, 0 warnings. Three sources, all
fetch-verified with pinned byte hashes and live URL sweeps: B. Crowell,
*Special Relativity* rev. 2020-12-10 (load-bearing §§3.2-3.3 pp. 55-59,
§§6.4-6.6 pp. 134-141; signature conversion (+---) -> (-+++) and `x^0 = c t`
recorded), A. Einstein 1905 §7 (primary paper; transformed phase, Doppler,
longitudinal case, aberration, `phi = pi/2`), and S. Murugesh IIST course notes
Ch. 6 pp. 25-28 (second independent wave four-vector treatment). The recorded
OPEN SR07 shortfall in `prose-scaffold.md` line 36 ("exact second independent
full Doppler/aberration derivation not yet pinned") is resolved: Murugesh is the
second full treatment and Einstein §7 a third, primary one. Dispositions: the
frequency-covector/duality, Doppler and aberration rows land on A items; the
two protocols and the phase-velocity exception land on B items; Ives-Stilwell,
Bertozzi and Heckmann data are deferred to `sr-experimental-interface` (order
231); group velocity, amplitude/intensity and optical-appearance rows are
reasoned out-of-scope for a single monochromatic plane wave.

Independent web check (2026-10-09): the standard reference treatment
(en.wikipedia.org/wiki/Relativistic_Doppler_effect, retrieved) lists both
transverse protocols (`gamma f_s` at geometric closest approach,
`f_s/gamma` at visual closest approach) and the Einstein source-frame form
`f_r = gamma(1 - beta cos theta_s) f_s`, consistent with clause (iv) and with
the scaffold's convention note. I did not re-fetch the three pinned full texts
and did not re-derive their arguments here; that reliance is recorded as
scope-level, with source fidelity reserved to Step 4–6.

## Prerequisites (unmet-prerequisite screening)

- Batch-7's 16 items carry 135 direct `deps` edges: 113 to in-run scaffold
  items on `sr-spacetime-primitives` (40), the same page (51),
  `sr-lorentz-transformations` (13) and `sr-worldlines-and-clocks` (9); and 22
  edges to 13 distinct published imported mathematical items in `items/` (all
  `status: published`, all pinned in `research/math-imports.json`). Scan of
  `deps` + `justified_by` + `forward_refs`: transitive closure 125 items,
  **0 unresolved targets**. No target is absent from both the published library
  and the current scaffold.
- There is **no item-level use of any `sr-observer-measurements` item** (0
  edges); the declared page edge is an ordering prerequisite whose 51-page
  closure contains every page actually used (orders 209/211/213/215 all precede
  221). This confirms the recorded design-vs-plan reduction (`requires
  [SR02,SR03,SR04]` -> `[sr-observer-measurements]`) is transitively complete,
  and no update to the cross-batch page row is needed.
- All 471 run items have current readiness records (`step1-decisions check`
  reports `closed: true`, 471/471 ready), so every in-run supplier used by this
  pair is scaffolded, not merely named.
- B-leaf rule: scanning all run manifests and the plan for consumers of the six
  B ids finds 0 consumers.
- Result: **no unmet prerequisite found, confirmed**. Uncertainty: the
  internal proofs of the 13 imported published suppliers and their page
  placements were checked for presence, identity and publication status only
  (correct for a scope review); mathematical validity is out of scope here.

## Checks run (exact)

| Check | Command | Result |
|---|---|---|
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-7.coverage.json --require-destination` | 1 page, 25 harvested, 0 errors, 0 warnings |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-7.pages.json` | 16 items, 0 normalized, 0 errors |
| manifest policy (full run) | `node tools/physics-support/content-policy.mjs --manifest-only research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 471 items, 0 errors, 0 warnings |
| plan validator | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | pages 221 (10 items) and 222 (6 items) consistent; no finding for this pair; downstream consumers sr-accelerated-observers (227), sr-experimental-interface (231), em-lorentz-covariant-formulation (353) |
| readiness | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 471/471 ready, closed |
| dep/closure/consumer scan | scripted scan of `items/`, all 80 run manifests, plan and `math-imports.json` | 135 dep edges / 125-node closure, 0 missing; 0 B-id consumers |
| step 3a state | `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase scope` | this pair listed as current scope review required (expected; closed by this decision) |

## Findings and notes (informational, no action requested)

1. The design-context sources Carroll Ch. 1 (null-wave discussion) and Tong
   §1.2 (redshift models) named in the SR07 prose row were not harvested in the
   batch-7 coverage; the pinned Crowell + Murugesh + Einstein set covers the
   whole Doppler/aberration complex and resolves the recorded OPEN shortfall.
   Not a scope gap; no enrichment required.
2. The two transversality protocols and their exact equivalence are retained in
   both the theorem and the B companion (the trap S5 warns about); no source
   defect is claimed, since the three pinned readings agree once the protocol
   is stated.
3. No owner proceed/merge/enrich action is requested for this pair.

## Decision

`sufficient` — the planned definitions (affine phase, wave covector, frame data,
observer frequency), postulate (ideal plane-wave model), theorem (general and
longitudinal Doppler, both transverse protocols, aberration), units remark and
the 6-item B companion adequately cover the intended SR07 subject, with exact
source coverage and no unmet prerequisite. Recorded in
`research/physics-em-sr-40-2026-10-08-step3a-review-sr-light-and-doppler.json`
(the record binds the current pair scope hash).
