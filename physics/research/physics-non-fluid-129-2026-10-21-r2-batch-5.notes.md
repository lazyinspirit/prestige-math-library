# Batch 5 notes — Causal oscillator media and passivity

## Plan and design comparison

The assigned task, `plan-spec.json` rows 707–708, and the full design section agree on the A/B page IDs, titles, category, library, companion, four A-page prerequisite pages and five planned A items. The run manifest initially had empty item arrays; this was an unpopulated Step 1 inventory, not a page-scope conflict. The design and source inventory also specify two B examples, now recorded on the examples page. Both pages remain below the 100-item cap.

The design describes the energy result through Lorentz oscillators, while the plan makes `pthm-emx-drude-plasma-response` depend on `pthm-emx-oscillator-energy`. To keep that dependency mathematically valid, the energy theorem retains its full Lorentz result and adds a separately proved Drude-current branch. The Drude model is not obtained by setting a Lorentz restoring frequency to zero inside a positive-frequency oscillator formula. The design calls the oscillator sector nonmagnetic while allowing arbitrary constant positive scalar `mu`; the postulates clarify that there is no dynamic magnetic oscillator, while `mu` is a fixed nondispersive coefficient. Both postulates state the exact macroscopic `P_tot` and `M_tot` identifications. These scope decisions are recorded rather than used to weaken or omit a claim.

The run-specific owner-authoring-direction override is absent.

## Inventory and dependency levels

Batch 5 is run dependency level 1 and requires batch 4. The checked item levels over the populated batch 4 and batch 5 manifests are:

- A: `post-emx-lorentz-medium` 0; `post-emx-drude-current-closure` 0; `pthm-emx-lorentz-susceptibility` 1; `pthm-emx-oscillator-energy` 2; `pthm-emx-drude-plasma-response` 3.
- B: `ex-emx-anomalous-group-delay` 2; `ex-emx-lossless-dispersive-energy` 3.

The Lorentz susceptibility theorem follows its in-run Lorentz postulate. The oscillator-energy theorem depends on the two in-run postulates and batch 4's finite-energy model and weak-Poynting result. The Drude theorem follows the energy theorem; each example follows the in-run theorem it uses. The scoped item-level calculation matched every declared level. `batch-dependency-levels.mjs write` and `check` both passed on the current 129-batch graph (maximum level 5).

## Batch 4 interfaces

I read the complete current `def-emx-finite-energy-boundary-model` definition and `pthm-emx-weak-poynting-uniqueness` statement and proof. The first uses the real `H(curl)` graph space, static symmetric uniformly positive coefficients, and the graph-norm closure definition of PEC; it does not infer an ordinary `L2` trace. The second proves the field-energy balance for that exact PEC branch by closure approximation. The choices `epsilon(x)=epsilon_infinity I_3` and `mu(x)=mu I_3`, and `J=J_f+sum P_l,t` or `J=J_f+V`, meet the stated hypotheses. The material-current work is canceled by the locally proved energy identity.

A fresh `loadStep1Record`/`step1Decision` inspection reports both batch 4 carriers closed and ready with hashes `3918aff4…f3047` and `141d0d32…6faa`. The cross-batch dependency array records one required-page edge and these two item edges as `verified`; the evidence scopes each check to the actual interface and does not imply independent proof acceptance.

## Formulation, proof scope and conventions

The Lorentz and Drude postulates are adopted phenomenological closures, not derived laws or measurements. Each fixes the material rest frame, real field types, homogeneous spatial locality, SI parameter units, initial state, damping range and collisionless/undamped limits. Their stated macroscopic identifications make their `D,H` fields consistent with the existing Maxwell formulation.

The oscillator-energy theorem derives the Lorentz and Drude local balances directly from Maxwell curl equations and the material ODEs. It invokes the weak Poynting theorem only for the fixed-volume PEC conclusion, keeps free-current work and damping losses, and states the exact energy variables. In the Drude branch a constant polarization offset is not part of the positive energy.

The Lorentz susceptibility theorem distinguishes dimensional `chi_abs` (F m^-1) from the dimensionless normalized transfer used by the causal-response theorem. It proves upper-half-plane analyticity for every declared nonnegative damping rate, nonnegative pointwise loss away from undamped poles, and the unsubtracted Hilbert relation only in the strictly damped branch after verifying the exact kernel hypotheses. The proof supplies the under-, critical- and over-damped Green kernels, integrability, and differentiation under the integral sign.

The Drude theorem separates the harmonic response from the collisionless transverse bulk dispersion. It constructs real transverse modes above cutoff and a decaying complex-wave-number mode below cutoff, while excluding the zero-wavevector cutoff endpoint and making no claim about interfaces or longitudinal plasma oscillations. The anomalous-delay example proves one negative real-wavenumber derivative and does not identify it with a signal front. The lossless-energy example compares two allowed oscillator states with the same instantaneous `E,D` and different stored energy. No experiment, measurement or empirical material claim is authored.

## Source history and dispositions

The A-page source set uses Tong's complete Cambridge electromagnetism notes, Beisert's complete ETH electromagnetism script, MIT OpenCourseWare 6.007 Lecture 22 (the relevant oscillator and dielectric-response slides 8–15 were inspected), and the successfully fetched Fitzpatrick nodes 100 and 103. Tong's sections 7.5–7.6, Beisert's section 12.1, and the exact page locators and item-level dispositions are in the coverage file. The source treatments provide model context; all claims are proved locally. The ETH universal group-velocity bound and the sources' restricted microscopic, dilute-gas and collision interpretations are recorded out of scope.

The Fitzpatrick node 99 URL returned a 1,734-character HTML body on the initial fetch and all five permitted recovery retries, below the source checker’s 2,048-character floor. Its six attempts, search history and per-item replacement arguments/dependencies are preserved under `source_resolution`. I removed node 99 from the evidential basis and replaced the item references with the MIT OCW full-text PDF; Tong, Beisert and the local proofs independently cover the claims. No mathematical claim or harvested result was dropped. Final `source-fetch-check` reports 5/6 source entries fetch-verified and 6/6 resolved, with one documented source drop.

The coverage checklist records all 23 harvested results with inline, included or out-of-scope dispositions. It reports 0 errors and one low-yield warning because 5/23 harvested results became new items; the remaining results have item-specific dispositions in coverage for later Alpha review.

## Scoped checks and readiness

- `author-check.mts` through `tsx-run`: `ok: true`; precheck, rendercheck, content policy and strict proof contract all passed.
- Explicit final `proof-layout.mjs`: 7 items, 24 proof steps, 0 defects. Precheck: 7/7 items passed.
- Scoped rendercheck: 9 item/page files passed. Scoped content policy: 7 items, 0 errors or warnings. Focused depcheck: 7 assigned items; 1,427 prerequisite items and 367 pages covered with no dependency-cycle errors.
- Strict proof contract: 7/7 items, 0 errors and 0 warnings. Isolated proof-contract coverage for this populated batch: 7 items, all 5 proof-bearing items covered.
- Manifest dependency check: 7 items, 0 changes and 0 errors. Manifest integrity: all 258 owed run pages present, no scope drift. Current batch dependency-level record: 129 batches, maximum level 5.
- Source fetch check: 5/6 fetched and 6/6 resolved (one documented drop). Coverage: 1 page, 23 results, 0 errors and the low-yield warning above.

The unrestricted item-level check and unrestricted proof-contract-coverage check encounter empty inventories in unrelated, still-unscaffolded run batches (for example `emx-anisotropic-reciprocal-optics` and `emx-paraxial-optics`). The scoped dependency calculation over populated batches 4–5 and the isolated batch-5 contract-coverage check both pass. No other batch was edited.

All seven assigned items have current Step 1 `ready` records with direct dependencies and concrete evidence. These records document authored prerequisites and placement; they do not constitute independent proof approval.
