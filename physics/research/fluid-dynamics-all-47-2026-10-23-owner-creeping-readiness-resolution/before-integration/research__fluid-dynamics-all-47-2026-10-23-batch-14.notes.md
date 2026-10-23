# Batch 14 authoring notes — fd-px03

## Design control and plan comparison

- The controlling prose design is research/plan-fluid-dynamics-refresh-track.md §“Bounded-domain Stokes residual estimate — conditional physical prediction” (the task locates it at L455). It is marked “Current controlling owner refresh: 2026-10-18” and explicitly supersedes historical fluid-design text. The owner direction research/fluid-dynamics-all-47-2026-10-23-owner-authoring-direction.md independently confirms that the refresh track controls.
- The refresh source inventory research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json assigns A items pthm-fd-px07-prediction and pthm-fd-px10-prediction, and B examples ex-fd-x07-application and ex-fd-x10-application, all to FD-PX03. I retained that full inventory.
- The historical research/plan-fluid-dynamics-track.md §“Bounded-domain Stokes residual estimate — conditional physical prediction” (task L419) reserves the same four items but lists additional old page prerequisites FD-F01, FD-F02, and FD-F03. The current task, refreshed design, current batch manifest, and research/plan-spec.json row all agree on the exact page requirements fd-px02 and fd-x03. Under the task’s conflict rule, the current plan/task page interface controls; the obsolete extra page prerequisites were not added.
- plan-spec.json has the same A/B page IDs, category, companion, order, library, and requirements as the assigned manifest, but its item arrays are empty. I populated the current batch manifest from the controlling refresh inventory. No plan or other batch manifest was edited.

## Authored claims and conventions

- pthm-fd-px07-prediction states the bounded C1-domain velocity/gradient residual bounds for already-existing smooth stationary NS and restricted Stokes fields with common no-slip data, zero body acceleration, and an explicit zero-trace Poincare constant. It also supplies the periodic-channel version with the direct constant h. AC_omega, SI dimensions, model assumptions, the strong-solution hypothesis, the absence of existence/exterior/Reynolds-only claims, and the distinction between the Euclidean domain and periodic cell are explicit.
- pthm-fd-px10-prediction gives the sufficient Couette perturbation energy estimate only on the assumed smooth solution interval. It carries the constant-density/viscosity SI units, periodic geometry, no-slip wall velocities, zero body acceleration, strong solution hypothesis, AC_omega, and the nonsharp/no-global-existence caveats.
- ex-fd-x07-application constructs exact rigid rotation in a ball. The velocity fields coincide, while the pressure difference supplies the nonzero centripetal residual; the example explicitly does not represent a nonzero velocity error. It assumes a stated zero-trace Poincare constant for the ball (without claiming its value), verifies both strong systems and the rotating no-slip wall, and checks the residual estimate. The earlier unsupported attempt to prove the constant from ball chords was removed.
- ex-fd-x10-application is an exact decaying single-mode Couette perturbation with SI-consistent parameters. Direct differentiation verifies the strong equation and boundary data; direct integration gives the energy and a hand-checkable strict-threshold comparison.
- All four item statements/examples are uninterrupted by links. Supplier links are in Facts & Assumptions or immediately following reference sections. Both A/B page carriers contain YAML frontmatter only.

## Supplier inventory and current readiness

- Page supplier fd-x03 is the current mathematics page in batch 7; its manifest contains thm-fd-x07, thm-fd-x10, and thm-fd-x11. The assigned uses of thm-fd-x07 and thm-fd-x10 were checked against their complete current Statements and Proofs. Their exact hypotheses, units, AC_omega, channel conventions, Poincare use, and conditional scope match the consuming proofs. Both suppliers now have owner-resolved current ready records. The scoped dependency rows are verified as interface checks, not as independent proof approval.
- Page supplier fd-px02 is batch 13. Its page and both planned X07 suppliers appeared while this batch was in progress; I re-read the actual page, batch-13 manifest entries, Postulate, and Definition. The current force-balance postulate and Stokes-model definition match the recorded use after explicitly selecting b=0; the consuming proof independently expands the constant-viscosity stress divergence to verify the pointwise Stokes equation. Both suppliers still lack current Step-1 readiness records, so the X07 theorem consumer remains escalated.
- The current post-fd-creeping-force-balance carrier is a postulate with provenance.proof ai-generated, proof_strategy direct, and a ## Proof section. That argument establishes only the algebraic equivalent local equation; it cannot prove the adopted physical balance. This is an exact class/proof-format defect in an off-scope supplier, so I did not repair it. The actual interface can be used only conditionally until its owner resolves the missing readiness and postulate proof section.
- Current inspected local inputs and Step-1 results:
  - def-fd-quantity-and-frame-conventions: current ready record; interface and SI definitions inspected.
  - def-fd-x00: current ready record; formal NS/Stokes equation definition inspected.
  - post-fd-continuum-balances: current ready record; adopted balance scope inspected.
  - post-fd-boundary-data and post-fd-newtonian-fourier: current carriers and current Step-1 readiness records are now ready.
  - post-fd-creeping-force-balance and def-fd-creeping-stokes-model: actual current carriers are present and their statements were inspected; both Step-1 readiness records are missing.
  - thm-fd-x07 and thm-fd-x10: full current proofs read; both Step-1 decisions are now owner-resolved ready.
- The proof of the physical items assumes the displayed strong PDEs and existing solutions explicitly. It does not infer them from the continuum integral-balance postulate. This retains the planned conditional scope without asserting an unproved local-balance conversion.

## Source reading and disposition

The three A-page sources below were retrieved as full PDFs in the browser and inspected at the cited complete relevant sections. source-fetch-check --stamp subsequently verified all three complete document bodies (see coverage stamps). They support model context and scope; the local proofs and mathematical suppliers establish the exact conclusions.

| Source and locator | Supported item(s) | Harvested result and disposition |
|---|---|---|
| Jean-Luc Guermond, Introduction to Partial Differential Equations for Engineering Applications, Part I, Chapter 3, §§3.3 and 3.4.4, printed pp. 23–27. https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf | pthm-fd-px07-prediction; pthm-fd-px10-prediction | Read the energy-method description, Poincare-Steklov statement, and eigenvalue corollary proof. The notes explicitly defer the general Poincare proof. Included as conditional energy/Poincare context only; the residual estimate, direct channel bound, and Couette energy proof are supplied locally/by the exact mathematical supplier. |
| David Tong, Fluid Mechanics, Chapter 2, §3.2.2, printed pp. 64–65; §3.4, printed pp. 82–84. https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf | pthm-fd-px10-prediction; pthm-fd-px07-prediction | Read the Couette profile derivation and the complete Stokes minimum-dissipation argument. Included for Couette base-flow/no-slip context and included as Stokes-dissipation context only; it does not prove the residual-to-solution estimate. |
| Iain Stewart, MIT 8.09, Advanced Classical Mechanics, Chapter 6, §6.8, printed pp. 135–138/PDF pp. 137–140. https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf | pthm-fd-px07-prediction | Read the section’s low-Reynolds-number scaling, Stokes sphere solution, boundary conditions, and drag calculation. Included only as context for a separately restricted Stokes model; the spherical exterior solution is not a bounded-domain residual theorem and the scaling does not provide an unconditional NS approximation error. |

No experiment or empirical premise is used. No measurements, uncertainty, or physical applicability beyond the stated conditional models are claimed.

## Dependency levels

- Batch 14 remains at the supplied page level 5: it requires batch 7 (level 1) and batch 13 (level 4).
- Item levels recorded in the carriers are pthm-fd-px07-prediction: 5, pthm-fd-px10-prediction: 3, ex-fd-x07-application: 6, and ex-fd-x10-application: 4. The level-5 X07 theorem includes the current batch-13 definition at level 4, whose current force-balance postulate is at level 3. These values match the actual newly authored batch-13 dependency chain; no cycle is present in the inspected graph.

## Validation and readiness

- source-fetch-check --coverage research/fluid-dynamics-all-47-2026-10-23-batch-14.coverage.json --stamp: passed, 3/3 sources fetched and stamped.
- Scoped Step-1 manifest policy passed: 4 assigned items, 0 errors, 0 warnings.
- Scoped proof-contract check passed for all four assigned items.
- The run-wide proof-contract-coverage check is blocked by the unrelated empty inventory on fd-ples01-examples; it does not identify a batch-14 contract defect.
- Scoped `depcheck --items-file /tmp/prestige-fluid-batch14-item-selection.json --json` passed for the focused item/page closure: 0 errors and 0 warnings (975 dependency-closure items, 158 pages).
- Scoped `rendercheck` passed for all four items and both pages: 6 checked, 0 errors, 0 warnings.
- `proof-layout` passed on the four explicitly changed items: 13 steps, 0 defects. Scoped `precheck` passed on all four items. The batch-14 proof-contract check passed with 0 errors and 0 warnings.
- Final evidence audit parsed all four batch JSON files successfully, confirmed both A/B page files are frontmatter-only, and `git diff --check` reported no whitespace errors.
- `item-dependency-levels.mjs check --run fluid-dynamics-all-47-2026-10-23` passed: 304 items across 94 pages, maximum level 9. `batch-dependency-levels.mjs check --run fluid-dynamics-all-47-2026-10-23` exits 1 because the shared run-level record is stale; its batch-14 value remains 5. I did not edit shared run-level evidence.
- Run-wide `proof-contract-coverage` exits 1 for 238 unrelated `contract-missing-proof` errors elsewhere in the run; there are zero errors for the four batch-14 items. No contracts for other batches were generated.
- The stored run-wide batch-dependency-level record is stale after current manifests were authored. Its batch-14 row remains level 5 with batch-7 and batch-13 requirements; the owner/engine must refresh the shared run-wide record at the drained join. I did not rewrite this shared run evidence.
- All four arguments and both page carriers are complete. Current readiness records are ready for pthm-fd-px10-prediction and ex-fd-x10-application, and escalated for pthm-fd-px07-prediction and ex-fd-x07-application. The two X07 escalation records are stale because their items were subsequently edited: recorded/current hashes are `8ef5d319…`/`bdfe0683…` for pthm-fd-px07-prediction and `786f64c1…`/`9cdbd13b…` for ex-fd-x07-application. They were not overwritten. The X07 theorem also has the genuine unresolved batch-13 readiness and postulate-format issue described above. The X07 example's inspected mathematical dependencies are current; its stale escalation still needs owner reconciliation under native policy. The two X10 ready records match their current item hashes (`605f7726…` and `c7926073…`). No `--owner` flag or existing escalation was overwritten.

## Unresolved obligations and next action

1. The owner/batch-13 author must resolve the missing Step-1 readiness records for post-fd-creeping-force-balance and def-fd-creeping-stokes-model and repair the postulate’s inappropriate proof section. Their actual interfaces are present and match the X07 use under b=0.
2. The owner must review/reconcile the two stale X07 escalation records with the final item hashes; they must remain escalated until that native review resolves the records. The X07 theorem additionally requires batch-13 owners to resolve the creeping-force postulate proof-format defect and supply current readiness records for both batch-13 items.
3. The owner/engine must regenerate run-wide batch dependency levels after the drained author manifests; current batch 14 remains level 5. No shared level file or off-scope supplier was modified.
