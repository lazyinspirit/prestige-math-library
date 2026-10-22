# Batch 20 authoring notes — `emg-fx05`

## Inventory and plan reconciliation

- This batch owns A page `emg-fx05` (order 737) and B page `emg-fx05-examples` (order 738), in `einstein-maxwell-models-mathematics`, library `mathematics`. The plan specification and full `emg-fx05` design section agree on page IDs, titles, companion relation, category, library, ordering, six declared A-page prerequisites, and the four A interfaces plus one B example. No plan/design identity or scope conflict was found.
- The design’s geometric field convention is explicit in `def-emg-xs-geometric-electrovac`: the Einstein equation is `Ric = 2Q` for the geometric-normalized two-form. This is distinct from the SI Cauchy-system field convention. The new definition records that distinction and its length units; the RN parameter `q` and the example’s `ell_*` have units of length.
- The design warnings are retained: nonzero background field couples metric and electromagnetic perturbations at first order; the `F=0` decoupling is only a special case; a linearized solution is not thereby integrable; compact Cauchy slices with Killing fields can require separate second-order linearization-stability conditions; the local estimate asserts neither global decay nor nonlinear stability.
- The initial gauge draft listed `prop-pullback-forms-is-smooth-functorial-and-preserves-wedges`, but no carrier with that ID exists in the physics workspace or root mathematical originals. The unsupported edge was removed. `prop-emg-fx-gauge-linearized-solutions` now proves the pullback connection, curvature, Hodge, and exterior-derivative identities locally from the available pullback definition and coordinate bracket/exterior-derivative formulas. No proof input remains unresolved.
- The B example’s `epsilon` is constructed as `q0/(2 ell_*)`, so the common parameter interval and positive electric charge are explicit. Its outward-sphere Hodge sign is computed from the RN orientation and component Hodge formula.

## Inventory, dependency levels, and placement

The exact in-batch item DAG was recomputed from the finished batch-20 manifest with `dependencyLevels`; no cycle or level mismatch was reported. Levels count only in-run suppliers.

| Item | Page | Level |
| --- | --- | ---: |
| `def-emg-fx-linearized-electrovac` | A | 0 |
| `lem-emg-fx-linearized-hodge` | A | 1 |
| `prop-emg-fx-gauge-linearized-solutions` | A | 2 |
| `lem-emg-fx-local-linear-wave-control` | A | 2 |
| `ex-emg-fx-stationary-charge-mode` | B | 3 |

The complete direct `deps` arrays and `dependency_roles` are synchronized in each item and `research/physics-non-fluid-129-2026-10-21-r2-batch-20.pages.json`. Suppliers precede consumers. Page `emg-fx05` retains the planned requirements `emg-cp02`, `emg-mg04`, `emg-cp01`, `emg-mg01`, `emg-ms01`, and `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`; B page `emg-fx05-examples` requires A page `emg-fx05`. The A page has four items and the B page one, both below the 100-item cap.

The direct item inputs are:

- `def-emg-fx-linearized-electrovac`: `def-countable-choice`, `def-emg-electrovacuum-cauchy-system`, `def-emg-xs-geometric-electrovac`, `lem-emg-lorentz-hodge-calculus`.
- `lem-emg-fx-linearized-hodge`: `def-countable-choice`, `def-emg-fx-linearized-electrovac`, `lem-emg-lorentz-hodge-calculus`.
- `prop-emg-fx-gauge-linearized-solutions`: `def-countable-choice`, `def-emg-fx-linearized-electrovac`, `def-exterior-derivative-by-the-invariant-vector-field-formula`, `def-gr-curvature-tensor-and-derived-tensors`, `def-gr-metric-selected-connection`, `def-pullback-of-a-differential-form`, `thm-local-coordinate-formula-for-the-exterior-derivative`, `lem-emg-fx-linearized-hodge`, `prop-coordinate-formula-for-the-lie-bracket`, `thm-emg-xs-kn-verification`, `thm-emg-xs-rn-verification`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`.
- `lem-emg-fx-local-linear-wave-control`: `def-countable-choice`, `def-emg-fx-linearized-electrovac`, `def-gr-harmonic-gauge-and-reduced-equations`, `def-gr-periodic-torus-and-sobolev-spaces`, `lem-emg-fx-linearized-hodge`, `lem-emg-fieldstrength-positive-symmetric-reduction`, `lem-emg-lorentz-hodge-calculus`, `lem-gr-contracted-commutator-identity`, `lem-gr-reduced-einstein-principal-part`, `thm-gr-second-bianchi-and-divergence-free-einstein`.
- `ex-emg-fx-stationary-charge-mode`: `def-countable-choice`, `def-emg-fx-linearized-electrovac`, `def-emg-xs-geometric-electrovac`, `def-emg-xs-rn-data`, `lem-emg-lorentz-hodge-calculus`, `prop-emg-fx-gauge-linearized-solutions`, `thm-emg-xs-rn-verification`.

The run-level batch schedule previously recorded batch 20 at `dependency_level: 0` with `requires: []`. The owner-authored shared `batch-dependency-levels.json` input hash predates this populated batch-20 manifest and is now stale. Shared scheduling metadata was left untouched; the owner join must recompute that run-level hash and schedule after all batch manifests are current. The scoped item-level computation above is current.

`research/physics-non-fluid-129-2026-10-21-r2-batch-20.cross-batch-dependencies.json` is the required JSON array `[]`: no item or page edge reaches another batch in this run. The A/B page edge is within this batch. External page requirements and supplier context remain in these notes and the manifest, not in unsupported cross-batch review rows.

## Supplier-interface audit

All direct item suppliers were inspected at their current statements and, where present, complete proofs. Draft status or `verification.precheck: pending` was not treated as a mathematical defect. Relevant interfaces include:

- `def-emg-electrovacuum-cauchy-system`, `def-emg-xs-geometric-electrovac`, and `def-emg-xs-rn-data` for the SI/geometric normalization, geometric units, and fixed exterior RN chart;
- `lem-emg-lorentz-hodge-calculus`, `lem-emg-fieldstrength-positive-symmetric-reduction`, `lem-gr-reduced-einstein-principal-part`, and `def-gr-harmonic-gauge-and-reduced-equations` for the Hodge convention, six-variable Maxwell block, harmonic metric wave block, and reduced equation;
- `thm-gr-second-bianchi-and-divergence-free-einstein` and `lem-gr-contracted-commutator-identity` for the contracted Bianchi and subsidiary-wave commutator;
- `def-pullback-of-a-differential-form`, `prop-coordinate-formula-for-the-lie-bracket`, `def-exterior-derivative-by-the-invariant-vector-field-formula`, and `thm-local-coordinate-formula-for-the-exterior-derivative` for the locally proved naturality calculation;
- `thm-emg-xs-rn-verification` and `thm-emg-xs-kn-verification` for exact-family modes on their actual admitted domains.

The checked suppliers are outside this run and have no current Step 1 records in this run’s snapshot. That absence is not a prerequisite failure: their exact interfaces were inspected and the full scoped dependency audit found no missing item. The only absent helper carrier was the unplanned pullback proposition described above, whose required argument is now local.

## Full-text source reading and harvest

`research/physics-non-fluid-129-2026-10-21-r2-batch-20.coverage.json` records URLs, locators, supported items, and a disposition for each of 12 harvested results. The full relevant texts were retrieved and inspected; source retrieval verification stamped all five page/source records, with no failures, retries, drops, or `source_resolution` alternatives required.

- Sean M. Carroll, *Lecture Notes on General Relativity*, <https://arxiv.org/pdf/gr-qc/9712019v1>. Read Chapter 1 §§1.2–1.3 (PDF pp. 30–31), Chapter 6 §§6.1–6.2 including equations (6.10)–(6.14) (PDF pp. 149–153), and Chapter 7 equations (7.106)–(7.113) (PDF pp. 208–210). Supports the Hodge/gauge conventions and RN field; flat-background gauge formulas and Gaussian-unit normalizations are not transferred as curved-background/SI claims.
- Elena Giorgi, *The linear stability of Reissner–Nordström spacetime for small charge*, <https://arxiv.org/pdf/1904.04926>. Read §1 (PDF pp. 1–4) and §§6.1–6.2 (PDF pp. 43–55), including the coupled model, pure-gauge modes, parameter modes, and the actual theorem hypotheses. The substantially stronger small-charge asymptotically flat decay theorem is context only and is not used as a supplier for this finite-slab result.
- Helmut Friedrich and Alan Rendall, *The Cauchy Problem for the Einstein Equations*, <https://arxiv.org/pdf/gr-qc/0002074>. Read the complete §3.1 (PDF pp. 22–31): symmetric first-order systems, energy identity, commutator estimates, and the distinction between a local estimate and existence or continuation.

Both A and B pages have at least two independent treatments. The source harvest has 0 coverage errors and 0 warnings. `source-fetch-check --stamp` reported 5/5 full-text records fetch-verified and resolved; a final non-stamping check again reported 5/5.

## Proof contracts and scoped checks

`research/physics-non-fluid-129-2026-10-21-r2-batch-20.proof-contracts.json` was regenerated from the final numbered arguments. It records each fact-to-supplier quote and use, exact supplier excerpts and inspected status, per-step claims/inputs, eight standard boundary dispositions, risk review, and applicable finite checks. Strict proof-contract check: 5/5 items, 0 errors, 0 warnings.

Final scoped checks:

- `dependencyLevels` on this batch: levels `0, 1, 2, 2, 3`; 0 errors and no cycles.
- `depcheck --items-file /tmp/r2-b20-items.json`: 5 selected items, their 1,774-item / 323-page prerequisite closure, 0 errors and 0 warnings.
- `coverage-checklist`: 2 pages, 12 harvested results, 0 errors and 0 warnings.
- `content-policy`: 5 scoped items, 0 errors and 0 warnings.
- `precheck`: 4 proof-bearing items checked and passed; the definition is not applicable to phase-format proof checks.
- `rendercheck`: 5 item files and 2 page files, 0 errors and 0 warnings.
- Final explicit `proof-layout`: 5 changed items, 18 numbered steps, 0 defects.
- `loadStep1Record` / `step1Decision` after recording: all five `ready` records are current and closed. They contain the direct dependencies and item-specific evidence. These are authoring-readiness records, not independent proof approval.

No unresolved prerequisite or cross-batch change requires owner escalation. The remaining owner action is only the shared run-level schedule/hash recomputation noted above.
