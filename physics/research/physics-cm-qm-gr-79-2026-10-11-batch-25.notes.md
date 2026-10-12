# Batch 25 notes — `cm09-coupled-oscillations-and-approximation` (and examples)

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 25; one A/B pair
(orders 129/130), category `non-relativistic-classical-mechanics`, library
`physics`. Step 1 (complete initial authoring) is finished: 15 items and both
page carriers are authored, checked and recorded ready. The handoff carriers
are the item files in `items/`, the two page files in
`library/non-relativistic-classical-mechanics/`, and this batch's manifest,
proof contract, coverage and cross-batch inputs under `research/`.
The Step-3b authoring report for the pair is
`research/physics-cm-qm-gr-79-2026-10-11-step3b-pair-cm09-coupled-oscillations-and-approximation.md`;
the `dispatch-author-artifacts` accounting for the pair passes 19/19.

## Delivered inventory

- A page `cm09-coupled-oscillations-and-approximation` (7 items, levels 14-17):
  `def-cm09-coupled-quadratic-model` (14),
  `pthm-cm09-free-modes-and-degeneracy` (15),
  `pthm-cm09-linearization-at-a-strict-minimum` (16),
  `pthm-cm09-linearization-error-bound` (15),
  `pthm-cm09-forced-modal-response` (16),
  `pthm-cm09-averaging-for-weak-damping` (15),
  `rem-cm09-zero-modes-degeneracy-and-scope` (17).
- B page `cm09-coupled-oscillations-and-approximation-examples` (8 examples,
  levels 16-19): `ex-cm09-two-mass-spring-modes` (18),
  `ex-cm09-triatomic-translation-zero-mode` (16),
  `ex-cm09-double-pendulum-linear-modes` (16),
  `ex-cm09-degenerate-oscillator-subspace` (19),
  `ex-cm09-unstable-quadratic-mode` (18),
  `ex-cm09-forced-resonant-mode-check` (19),
  `ex-cm09-weak-damping-averaging-check` (16),
  `ex-cm09-cubic-potential-error-check` (16).
- Levels are one plus the maximum level of an in-run `deps` target; root
  published suppliers and other out-of-run pages do not raise levels.
  Verified mechanically by `item-dependency-levels.mjs check --run` (no cm09
  finding; the remaining run errors are the empty inventories of unbuilt
  batches). Engine batch graph: batch 25 has `dependency_level: 7` and
  `requires: [20, 23]`, both complete.

## Design versus plan

- The reservation (track plan L677) lists seven provisional A items with
  their kinds — `cm09-mass-metric(def)`, `cm09-linearization(pthm contract)`,
  `cm09-generalized-eigenmodes(pthm)`, `cm09-zero-mode(rem)`,
  `cm09-forcing(pthm)`, `cm09-error-control(pthm E8)`, `cm09-averaging(pthm
  E8)` — and the delivered A inventory matches them with no reserved claim
  dropped or weakened: the mass metric and model class are
  `def-cm09-coupled-quadratic-model`; the linearisation is
  `pthm-cm09-linearization-at-a-strict-minimum`; the normal-mode content is
  `pthm-cm09-free-modes-and-degeneracy`; the zero-mode scope item is
  `rem-cm09-zero-modes-degeneracy-and-scope`; the forcing is
  `pthm-cm09-forced-modal-response`; the E8 error control is
  `pthm-cm09-linearization-error-bound`; and the E8 averaging branch is
  `pthm-cm09-averaging-for-weak-damping` (the rotating-frame averaging
  estimate; the one-frequency adiabatic branch of E8 belongs to the later
  Hamiltonian pages and is not asserted here). The B page carries eight
  constructed examples, not an inventory reservation, covering the design's
  B-side themes (two coupled masses, degeneracy, an unstable quadratic mode,
  and no long-time linear approximation without an error contract).
- Local mathematical proof sections: `M7` (quadratic modes and energy
  stability) is realised in-run by `thm-cm-quadratic-mode-decomposition`,
  `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium`,
  `lem-cm-strict-minimum-has-positive-semidefinite-hessian` and
  `thm-cm-energy-stability-of-a-strict-minimum` on `cm-math-dynamics`; `E3`
  (oscillators and forcing) by the forced-oscillator items of
  `cm-math-approximation`; `E8` (finite-time linearisation, averaging and
  adiabatic control) by `thm-cm-finite-time-linearization-error-bound`,
  `thm-cm-averaging-for-fast-periodic-oscillations`,
  `def-cm-averaging-data-and-averaged-field` and
  `thm-cm-adiabatic-invariant-drift-bound` on `cm-math-approximation`; `E19`
  (verification examples) by `prop-cm-two-mass-spring-modes`,
  `prop-cm-pendulum-small-angle-linearization-bound` and
  `prop-cm-oscillator-second-variation-signs` on `cm-math-verification`.
  Published canonical suppliers named by the reservation
  (`cor-real-spectral-theorem-for-self-adjoint-endomorphisms`,
  `cor-second-order-taylor-expansion-with-the-hessian`) are consumed
  transitively with exact statements: the first through
  `thm-cm-quadratic-mode-decomposition`, the second through
  `lem-cm-strict-minimum-has-positive-semidefinite-hessian`, both cited
  directly by this pair's items.
- `research/plan-spec.json` entries 129/130 agree with the carriers in id,
  title, kind, order, category, library, companion and `requires`; the item
  arrays in the plan are empty (prose-track splice), so the item scope is
  taken from the linked inventory and this batch's manifest. No
  design-versus-plan conflict was found.

## Cross-batch dependencies and consumer inputs

- 62 outgoing cross-batch rows (60 item edges plus the two A-page page edges)
  are recorded with consumer-side evidence in
  `physics-cm-qm-gr-79-2026-10-11-batch-25.cross-batch-dependencies.json` and
  accepted by `frontier-dependency-ledger.mjs refresh` ("refreshed and
  deduplicated"). All 62 rows are matched to declared edges; the only
  review-less cm09 edge is the incoming page edge cm16 → cm09 from the
  unbuilt batch 32, which its own worker must supply. In-run item suppliers
  come from batches 1, 2, 3, 4, 7, 12, 17, 18, 19, 20 and 23; the
  mathematical suppliers are the `cm-math-*` items named above.
- Consumer batches of this pair (from the plan and the run manifests): the B
  page consumes the A page (same batch); `cm16-stability-perturbations-and-chaos`
  (order 143, batch 32) is the only other page whose plan `requires` names
  cm09. Batch 32's manifest is still empty, so its dependency input will be
  written by its own worker against the current carriers.

## Authoring and repair record (Step 1, final session)

1. Every numbered proof step was canonicalised to a single physical line
   with trailing tags and renumbered by citation depth per the normative
   precheck's repair layer (`precheck.mts` proposes no further repair).
2. Two `cited-not-in-deps` warnings were fixed by adding
   `def-cm-oscillator-model-and-phase-system` and
   `thm-cm-quadratic-mode-decomposition` to the items that cite them; levels
   were recomputed and the manifest rebuilt.
3. The eight examples' statements were retagged from `ai-generated` to
   `ai-altered` (sources are the cited treatments) so that no
   `ai-generated` statement is a `deps` target; the `generation` blocks were
   removed accordingly.
4. Two numerical examples originally carried decimal literals inside proof
   steps (which the proof-contract tokenizer reads as step references); the
   steps were rewritten with exact rational and elementary estimates
   (`e^{3/2}/100`, `e^{4}/20000`, `K<198`, `\varepsilon K<1/50`, `1/24`,
   `1590\pi<3498\cdot... <5000`) and the decimal orientation values moved to
   Remarks, where they are labelled evaluations of the exact expressions.
5. One boundary worksheet evidence string and one unused fact label were
   repaired (`ex-cm09-triatomic-translation-zero-mode` now cites its scalar
   calculus fact in the step that uses it; the degenerate/zero boundary
   evidence strings name the statement or a step).

## Supplier findings for the owner (recorded, not repaired here)

1. **`def-cm07-generalized-coordinates-and-forces` clause (c) dimension
   defect.** The item states that the $i$-th component of the generalized
   force has dimension "$\mu\ell\tau^{-2}\gamma_{i}^{-1}$", while its own
   decomposition in the same clause ($\partial X_{a}/\partial q_{i}$ of
   dimension $\ell\gamma_{i}^{-1}$ times $f_{a}$ of dimension
   $\mu\ell\tau^{-2}$) gives $\mu\ell^{2}\tau^{-2}\gamma_{i}^{-1}$, i.e.
   energy per unit coordinate. The corrected form is forced by the pairing
   convention $Q\cdot\delta q$ (energy) and by the dimensionless-angle case,
   where the generalized force is a torque of energy dimension rather than a
   force. Status: draft, batch 23; no consumer outside this batch is known to
   rely on the printed line. Repair strategy: replace
   $\mu\ell\tau^{-2}\gamma_{i}^{-1}$ by
   $\mu\ell^{2}\tau^{-2}\gamma_{i}^{-1}$ and keep the following decomposition
   sentence, which already agrees with the correction; the repair is a
   statement change of a published-interface item and belongs to batch 23's
   owner. This batch's `def-cm09-coupled-quadratic-model` clause (a) states
   the corrected dimension and records the convention in a remark, without
   editing the supplier.
2. **Tong §2.6.2 frequency-comparison sentence (source error).** The
   printed matrices of that section (`F` with entries $-k/m$, $k/m$,
   $-2k/M$) give eigenvalues $0$, $-k/m$, $-(k/m)(1+2m/M)$, so the symmetric
   stretch frequency $\sqrt{(k/m)(1+2m/M)}$ exceeds the antisymmetric one for
   every $M>0$, while the text's final comparison sentence says otherwise for
   $M>2m$. The reader ledger already records this as a source error
   ("normal-mode frequency comparison p43"). `ex-cm09-triatomic-translation-zero-mode`
   proves the comparison from the displayed matrices and explicitly does not
   use the erroneous sentence; the coverage entry records the disposition.

## Sources

6 coverage entries (3 A, 3 B; Tong, Likharev and Stewart reused across
pages), 28 harvested results with dispositions (21 included, 2 inline, 1
deferred to `cm12-legendre-transformation-and-hamiltonian-mechanics`, 4
out-of-scope with specific reasons), all 6 source records fetch-verified
with byte counts, hashes and timestamps
(`source-fetch-check.mjs --stamp`: "6/6 source(s) fetch-verified"). No
recovery attempts and no drops were required. The deferred result is Tong's
heuristic adiabatic action statement; the in-run averaged slow-system
theorem is used for the approximation claim instead, and the out-of-scope
reasons name the reading ranges not consumed (rigid-body/Hamiltonian
chapters, chain continuum limit, planar-molecule full mode count).

## Checks run on the final carriers

- `precheck.mts` on the 15 items: `13 checked, 0 failing — all clean`
  (definitions and remarks have no phase body).
- `proof-layout.mjs` on the 15 items: `15 items, 78 steps, 0 defects`.
- `rendercheck.mjs` on the 15 items and the 2 pages: OK (YAML, KaTeX, math
  nesting, no multiline display).
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 15/15 item(s)
  checked`.
- `content-policy.mjs` on the batch manifest: `15 scoped item(s), 0
  error(s), 0 warning(s)`.
- `manifest-deps.mjs`: `15 item(s), 0 normalized, 0 error(s)`;
  `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests —
  no scope drift`.
- `coverage-checklist.mjs`: `2 page(s), 28 harvested result(s), 0 error(s),
  0 warning(s)`; `source-fetch-check.mjs --coverage` (check mode): `6/6
  source(s) fetch-verified`.
- `item-dependency-levels.mjs check --run`: no cm09 finding (other batches'
  empty inventories remain).
- `depcheck.mjs --run`: no cm09 finding. `validate-plan.mjs --run`: no cm09
  finding. `fwdcheck.mjs --run`: cm09 items `inherited`; no finding.
  `extcheck.mjs` on the 15 explicit paths: `0 recorded-not-proved, 0 resting
  on them`.
- `pathcheck.mjs`: no cm09 finding (its 3 errors and 22 warnings are root
  mathematics category/pathway records outside this workspace's physics
  scope).

## Run-level findings outside batch 25 (recorded, not repaired here)

1. `proof-contract-coverage.mjs --run ... --contracts <batch 25 contracts>`
   aborts with `Empty or invalid frontier page inventory
   cm13-symplectic-geometry-and-canonical-methods`: the run-wide form needs
   every batch manifest populated, and the unbuilt later batches are outside
   this worker's scope. The batch-local equivalents all pass: the strict
   proof-contract check covers all 15 items, and all 13 proof-bearing items
   have contract entries.
2. `validate-plan.mjs --run` fails only on other batches'
   `undeclared-prereq` findings (two qm-math pages); no cm09 page or item is
   named.
3. `frontier-dependency-ledger.mjs` reports 28 orphaned review rows from
   other batches and one review-less incoming cm09 page edge (cm16 → cm09,
   batch 32); neither blocks this batch.

## Readiness

All 15 items are recorded `ready` after the final carrier and manifest
rebuild, with their exact examined dependency lists; no cm09 item is
escalated and no significant unmet prerequisite was found: every in-run
supplier is completed (batches 1, 2, 3, 4, 7, 12, 17-20, 23) and every
out-of-run supplier is a published canonical root item or a completed in-run
mathematics item. Step 1 authoring is complete; independent review is Step
2's task, and readiness here is an authoring disposition, not a mathematical
approval.


### Adopted current stability consumer successor

Successor `/root/physics_stability_consumer_successor` inspected the current changed suppliers and affected old/current/alias consumer cone. Focused repairs and hash-bound current evidence are recorded in `research/physics-cm-qm-gr-79-2026-10-11-stability-consumer-successor/{review,findings,consumer-cone,final-checks,scoped-policy-checks}.json`. Original native author, source-reading evidence and prior repairs remain historical; this entry is current focused authoring readiness, not an independent audit or native approval. Inherited invariants-global-extension-domain is at its second and final repair cycle; distinct successor findings use their first cycle. No source1/9 carrier edits or active native48/75 writes were made.
