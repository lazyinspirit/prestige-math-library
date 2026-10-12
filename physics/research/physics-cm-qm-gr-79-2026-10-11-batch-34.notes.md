# Batch 34 notes — CM18 Measurement, uncertainty and later bridges

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-34, covers 34,
one A/B pair: `cm18-measurement-uncertainty-and-later-bridges` (order 147)
and `cm18-measurement-uncertainty-and-later-bridges-examples` (order 148), in
category `non-relativistic-classical-mechanics`, library `physics`. Owner
direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`
and the complete CM18 design section of
`research/plan-non-relativistic-classical-mechanics-track.md` (from L953)
were read before construction; the reservation's names, classes, budgets and
source rules were preserved.

## Authored inventory

A page (9 items, all `domain: physics`, all draft):

- `def-cm18-observable-model` (definition) — the reservation's
  `cm18-observable-model(def)`: parameters, preparations, observation times
  inside the unique maximal motions of `pthm-cm02-ivp`, readout, units and
  additive error; well-definedness repeats the measurability argument of the
  in-run mathematics supplier `def-cm-measurement-model`. Level 11.
- `def-cm18-calibration` (definition) — the reservation's
  `cm18-calibration(def)`: calibration family, reference inputs traced to
  the primitive standards of the framework (seconds, metres, kilograms) with
  declared deviations, reference observations and a calibration rule; the
  physical instance of `def-cm-calibration-rule`. Level 12.
- `def-cm18-sampling-model` (definition) — the reservation's
  `cm18-sampling-model(def)`: repeated observations at one declared
  preparation, the adopted IID and second-moment hypotheses, the sample mean
  and the mathematical conclusions of `def-cm-iid-sampling-model` and
  `cor-iid-finite-variance-weak-law`. Level 12.
- `rem-cm18-model-test` (remark) — a test is a rejection region for a
  specified family and null set; ingredients a test of the force branch must
  specify; rejection/retention are evidence about the specified triple of
  model, apparatus and sampling assumptions; no probability attaches to a
  parameter value. Levels 13.
- `rem-cm18-numerical-error` (remark) — separates model-versus-nature error
  from the certified velocity-Verlet statements of `cm-math-numerical`
  (finite-time O(h²) trajectory bound, additive per-step accumulation,
  analytic exponential-time energy estimates, all under their hypotheses),
  and records that simulations are computations. Level 19.
- `rem-cm18-galilean-regime` (remark) — frame-relative protocols, and the
  absence of any intrinsic speed scale or numerical validity cutoff inside
  the framework; a regime claim is an external empirical premise. Level 12.
- `rem-cm18-em-bridge` (remark) — what an electromagnetic coupling must add
  (charge dimensions, field maps, a declared coupling law, field-side
  bookkeeping), the conditional reuse of the force-branch existence and
  balance results, and the explicit non-import of field equations, coupling
  constants and field momentum. Level 15.
- `rem-cm18-qm-bridge` (remark) — a quantization or correspondence result
  would be a separate construction with explicit domain and limit
  hypotheses; no such theorem is asserted, and the error probability space
  of this page is not a quantum probability postulate. Level 12.
- `rem-cm18-primary-report-contract` (remark) — the inventory a future
  `experiment` item must supply: actually retrieved primary source, setup,
  calibration, procedure, sampling model, observations with units,
  uncertainty treatment and a specified comparison. Level 13.

B page (4 items, all `domain: physics`, proposal/conditional only):

- `ex-cm18-pendulum-calibration-proposal` (example) — declared small-angle
  pendulum protocol with model function `4 pi^2 l / T^2`, the finite-amplitude
  period discrepancy declared as an unquantified model error, exact
  first/second derivatives, the propagated covariance of the linearization
  (with the zero-correlation form), and the second/fourth-moment remainder
  bounds of the in-run mathematics items. All numbers are declared model
  data. Level 14.
- `ex-cm18-uniform-motion-sampling-check` (example) — a zero-force one-label
  model, the constant-velocity motion verified by substitution, a one-time
  position readout, and the adopted IID sampling hypotheses with the
  sample-mean variance identity, Chebyshev-type bound and a declared
  numerical illustration. Level 13.
- `ex-cm18-frame-change-of-an-observation-model` (example) — transforms a
  declared position protocol between two inertial frames: `Phi' = R Phi + v
  t1 + a0`, `Y' = Phi' + R epsilon`, and `Cov(R epsilon) = R Sigma R^T`.
  Level 12.
- `cex-cm18-finite-sample-may-miss-the-signal` (counterexample) — refutes the
  inference "a finite sample without an outcome of per-trial probability
  `p in (0,1)` refutes the declared sampling model" by exhibiting the finite
  product model with avoidance probability `(1-p)^n in (0,1)`. Level 14.

No `exp-` item was created: no primary report was read, exactly as the design
states. No measured value, uncertainty, count, p-value or effect size is
asserted anywhere in the batch. No postulate was added. No Axiom of Choice
assumption is used or needed; every dependency is choice-free.

## Dependency graph, levels and conflicts

Levels were computed from the in-run dependency graph before writing the
carriers (0 for out-of-run published suppliers) and are recorded per item in
the manifest and item frontmatter; `item-dependency-levels.mjs check` shows
no cm18 error. The maximum in-run level is 19 (`rem-cm18-numerical-error`),
driven by the batch-10 numerical items; the A page's own `requires` remains
the approved trio `cm-math-evidence`, `cm-math-numerical`,
`cm03-momentum-work-and-energy-balances`, whose transitive closure contains
`cm01-framework-quantities-and-geometry` and
`cm02-forces-initial-data-and-newtonian-flow`, the homes of the cm01/cm02
suppliers consumed here.

Recorded conflicts/decisions:

- Design/plan comparison: the CM18 reservation in the design track and the
  current `research/plan-spec.json` entries agree on page ids, orders
  (147/148), category, library, companion and the A-page `requires` trio;
  the only plan-level correction is the B-page supplier home recorded next.
- The reservation names map to the authored IDs by kind prefix only
  (`cm18-observable-model` → `def-cm18-observable-model`, etc.); no reserved
  claim or class was changed.
- `validate-plan --run` required the B page to declare its actual root
  mathematics supplier home `finite-probability-spaces-and-random-variables`
  (home of `def-product-of-finite-probability-spaces` and
  `thm-product-probability-has-independent-coordinate-events`, which the
  counterexample consumes); the B manifest and page carrier add that entry.
  This is a manifest-supplier correction, not a scope change; the A page
  requirements are untouched.
- The design's "local mathematical proof sections E15, E17, E29" are already
  authored in this run as the `cm-math-evidence` (E17) and `cm-math-numerical`
  (E15, E29) items, so CM18 consumes them and adds no duplicated mathematics.
- The design's proposed pendulum/orbit/force measurements remain proposals;
  the B page carries conditional computations only, and the primary-report
  contract records what a future experiment item would need.
- Cross-batch dependency inputs: one row per `(kind, consumer, supplier)`
  edge is written to
  `research/physics-cm-qm-gr-79-2026-10-11-batch-34.cross-batch-dependencies.json`
  (5 page rows, 72 item rows) and merged with
  `frontier-dependency-ledger.mjs refresh --run`.

## Sources and coverage

`research/physics-cm-qm-gr-79-2026-10-11-batch-34.coverage.json` records 21
source entries over the two pages with exact locators, source-anchored
harvests and dispositions; every claimed read range was inspected in full
text. `source-fetch-check --stamp` verifies 21/21 sources.

Source recovery history (retained): the first electromagnetic source URL
`https://www.davidtong.org/pdfs/teaching/electromagnetism/em.pdf` returned
HTTP 404 on six recorded attempts. The author-hosted replacement
`https://www.davidtong.org/pdfs/teaching/electromagnetism/electro.pdf` (full
lecture notes, same equation (1.2) at printed page 5 and Section 5.4.1 at
printed page 115) was found by search and stamped; the item and coverage
cite the replacement URL. The failed attempts are recorded in
`batch34-completion/source-recovery.json`. No source was dropped; no
alternative proof was needed.

The four course treatments (Tong Classical Dynamics, Tong Dynamics and
Relativity, Likharev, Likharev's Chapter 3, Hairer, Quillen) and the
metrology/statistics sources (JCGM 100, JCGM 200/VIM, NIST TN 1297,
NIST/SEMATECH handbook, Wasserman, Durrett, Greenland et al.) are used as
model exposition and interpretive warnings only; no source supplies a
measurement, and no numerical observation is promoted to an experiment.

## Checks actually run (2026-10-11)

Outputs are stored in `research/physics-cm-qm-gr-79-2026-10-11-batch34-completion/`:

- `precheck.mts` on all 13 items: 13 pass (proof-bearing items in canonical
  step form; definitions and remarks are non-proof).
- `rendercheck.mjs` on 13 items and both page carriers: OK.
- `proof-layout.mjs` on the four proof-bearing items: 20 steps, 0 defects.
- `proof-contract.mjs --strict` (scoped to the four proof-bearing items):
  0 errors, 4/4 contracts with citations, derivations and boundary worksheets.
  `proof-contract-coverage.mjs --run` cannot complete at this moment because
  other in-flight batches still have empty scaffold inventories; the
  per-item strict check covers this batch's proof-bearing scope and the
  engine's whole-run coverage check remains pending.
- `coverage-checklist.mjs`: 2 pages, 44 harvested results, 0 errors.
- `content-policy.mjs` on the manifest: 13 scoped items, 0 errors.
- `manifest-deps.mjs`: 13 items, 0 missing, 0 errors.
- `item-dependency-levels.mjs check`: no cm18 error (remaining errors are
  other batches' empty scaffold inventories).
- `fwdcheck.mjs --items-file` (13 items): OK; no forward references.
- `extcheck.mjs --items-file`: no recorded-not-proved content involved.
- `depcheck.mjs` whole-corpus: no cm18 error (whole-corpus exit reflects
  unrelated legacy published-unaudited items).
- `validate-plan.mjs plan-spec.json --run`: no cm18 error after the B-page
  supplier-home correction.
- `source-fetch-check.mjs`: 21/21 sources fetch-verified.

These are local mechanical and source checks; they are not independent
mathematical acceptance. Step 2 scope review, Step 3 independent review and
the full engine gates remain pending, and owner/operator reconciliation of
the batch dependency levels will recompute the run graph after this batch's
dependencies were declared.
