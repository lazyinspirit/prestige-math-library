# Batch 57 notes — Exact Dirac particle/antiparticle free model

Run `physics-td-qft-rpm-62-2026-10-14`; role `beta`; assigned pair `qft-f03` / `qft-f03-examples` only.

## Plan decisions and scope

- The QFT track’s QFT-F03 reservation names QFT-F01 and QFT-MF03, while current `plan-spec.json` and the dispatch page metadata require only QFT-F01. The plan-spec page prerequisite is retained. The actual QFT-MF03 mathematical inputs are declared on the items that use them, so the page’s dependency closure still exposes those suppliers.
- The adopted species/statistics assignment and vacuum remain QFT-F01 postulates. The results here are conditional model deductions; there is no empirical premise, interaction, point-field observable, Dirac-sea claim, or general spin-statistics theorem.
- The A page contains two items and the B page one. No page-capacity issue or local intermediate mathematical supplier was needed; the existing QFT mathematical carriers provide the required definitions and proofs, conditionally where their readiness is escalated.

## Inventory and dependency levels

| Item | Level | Direct suppliers |
|---|---:|---|
| `def-qft-free-dirac-model` | 7 | `post-qft-free-field-model`, `def-qft-framework-units`, `def-qft-dirac-projections`, `lem-qft-dirac-projection-matrices`, `def-qft-fock-and-test-spaces`, `lem-qft-fock-ccr-car`, `lem-qft-free-dirac-car-locality`, `def-countable-choice` |
| `pthm-qft-dirac-free-properties` | 8 | `def-qft-free-dirac-model`, `def-qft-framework-units`, `post-qft-free-field-model`, `lem-qft-free-dirac-car-locality`, `lem-qft-dirac-covariance-spectrum`, `lem-qft-dirac-projection-matrices`, `thm-quarter-turn-values-and-shift-formulas`, `def-countable-choice` |
| `ex-qft-dirac-rotation-parity` | 9 | `pthm-qft-dirac-free-properties` |

Batch 57 is level 5 and currently requires batches 37, 40, 42 and 51. Batch 51 is level 4 and requires batches 37, 38, 40, 42 and 43. The dependency-level artifact was recomputed and its check passed: 64 batches, maximum level 7. The item levels above remain 7/8/9 after the added direct unit and rotation facts; the in-run suppliers do not raise those maxima.

## Supplier review and conditional gaps

- The current QFT-F01 manifest contains `post-qft-free-field-model`, `def-qft-free-field-observables` and `pthm-qft-free-fock-statistics`; the postulate’s actual interface matches the selected flat Dirac CAR representation, species assignment, vacuum and unit conventions. Its current Step 1 record is `escalated`: QFT-C01 is artifact-incomplete, `def-qft-framework-units` has no current receipt, `def-qft-dirac-projections` is escalated, and the scalar-smearing and Dirac CAR-locality inputs remain escalated through open QFT-MF01/MF02 edges. QFT-F01’s page also requires QFT-MF04. This carrier is used at the inspected interface and remains a model assumption, not a proved result.
- `def-qft-framework-units` exists in QFT-C01’s current manifest but has no current Step 1 receipt. Its exact length-coordinate and SI conversion statements are used conditionally.
- `def-qft-dirac-projections` and `lem-qft-dirac-projection-matrices` have actual carriers and complete local mathematical arguments. Their current Step 1 decisions are escalated on upstream QFT-MF01/MF02 or artifact-missing supplier edges. The consumer uses their displayed metric, projection, rank and explicit spin-lift interfaces without treating draft status as proof acceptance.
- `lem-qft-free-dirac-car-locality` has the required bounded smeared-field, CAR, tested-equation and causal-support proof, but its current Step 1 decision is escalated on the scalar-causal and upstream QFT-MF01/MF02 chain. `lem-qft-dirac-covariance-spectrum` has the complete unitary-lift, vacuum, spin-action and translation-spectrum argument, but its current Step 1 decision is escalated on the local CAR prerequisite and QFT-MF01/MF02 closure. The translation-spectrum supplier is likewise conditional on its escalated projection and QFT-MF01 inputs.
- `def-qft-fock-and-test-spaces` and `lem-qft-fock-ccr-car` are currently marked ready; `lem-qft-free-action-equations` is ready. The imported Countable Choice axiom is the only choice strength used. The imported quarter-turn theorem supplies the pi-shift identities used for the explicit 2pi/4pi matrix values.
- The consumer proofs state the full conditional arguments and exact uses despite these upstream readiness gaps. The 2pi example proves the test pullback and field sign from the explicit lift, then derives even-polynomial and norm-closure invariance.

## Sources and retrieval resolution

The A page was checked against two independent full-text treatments: David Tong’s author-hosted [Chapter 4](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html) and [Chapter 5](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S5.html), plus Niklas Beisert’s complete [ETH Zürich QFT-I 2025 notes](https://people.phys.ethz.ch/~nbeisert/lectures/QFT1-25HS-Notes.pdf), Chapter 5 §§5.1–5.6. The B rotation example is supported by the same spinor and fermionic treatments. Coverage rows record the specific supported item, locator and result disposition.

The earlier Tong full PDF and ETH HS12 PDF each exhausted six attempts per page coverage entry (initial attempt plus five retries): the bodies were retrieved and inspected, but their compressed-PDF page counts could not be verified because `mutool` was unavailable. Their active citations were dropped only after the full-text Tong HTML chapters and complete ETH 2025 notes were inspected. `coverage.json` preserves the attempts, searches, per-item alternative arguments and dependencies, with `source_resolution` history; no mathematical coverage was dropped. A temporary `mutool`-compatible shim backed by `pdfinfo` in `/private/tmp` allowed `source-fetch-check --stamp` to record the active sources. Final check mode reports 6/10 fetch stamps and 4 documented drops, so all 10 sources are resolved. The two-page coverage checklist reports 20 harvested results, zero errors and zero warnings.

## Scoped checks and run-wide blockers

- `precheck`: all 3 assigned items pass.
- `proof-contract`: all 3 assigned items pass, zero errors or warnings.
- `proof-layout`: 3 assigned items, 9 steps, zero defects. The app checkout’s TypeScript loader did not resolve its `@/` alias by default; the check passed using a temporary resolver in `/private/tmp`, with no app-checkout edits.
- `rendercheck`: all 3 items and both A/B pages pass KaTeX, delimiter, wikilink and frontmatter checks.
- `content-policy`: 3 scoped items, zero errors or warnings.
- `depcheck --items-file`: selected item and prerequisite-cycle checks pass; the induced page prerequisites include the transitive QFT-C01/QFT-MF03/QFT-MF01 and imported countability/trigonometry suppliers.
- `batch-dependency-levels`: 64 batches, maximum level 7. A separate later check detected a stale run-wide input hash as manifests changed between invocations; the final same-process write plus immediate check passed. The final whole-run `item-dependency-levels` check still fails on other artifacts: empty inventories are `rpm-external-charge-examples`, `qft-g02`, `qft-g02-examples`, `qft-x03` and `qft-x03-examples`; unrelated stale levels are `thm-qft-example-soft-current-angular-coherent`, `ex-qftmath-x06`, `def-qft-qed-physical-gauge-quantities`, `post-qft-free-photon-model`, `post-qft-qed-local-coupling`, `pthm-qft-photon-physical-properties`, `pthm-qft-photon-local-observables`, `pthm-qft-qed-classical-coupling`, `pthm-qft-qed-coulomb-constraints`, `texp-qft-photon-auxiliary-comparison` and `texp-qft-qed-neutral-cell`. No assigned item appears among those errors. Whole-run contract coverage stops at the empty `rpm-external-charge-examples` inventory; the scoped contract check above passes.
- The current run’s `step1-blockers.json` records a `stage-stalemate` at `1-scaffold` for artifact-incomplete units 4, 24, 40, 5, 28 and 29, and 49; batch 57 is not listed. No matching `.autopilot/<run>` state directory is present here. The parent `.autopilot` report is for `frontier-26`, and the status command reports a workflow-revision mismatch, so that historical report was not used as current-run status.

## Readiness

All three assigned items are recorded `escalated`, not `ready`, because their required inputs include current carriers whose Step 1 readiness is absent or escalated as described above. The items, pages, contracts, source coverage, dependency records and scoped checks are complete. Upstream QFT-C01, QFT-MF01/MF02, scalar-causal and batch-38 artifact closure require owner repair and recertification before these items can be marked ready.
