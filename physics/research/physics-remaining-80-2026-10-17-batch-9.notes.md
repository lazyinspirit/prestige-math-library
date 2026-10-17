# Batch 9 authoring notes — EMG-PCP02

Run: physics-remaining-80-2026-10-17  
Role: beta  
Owned pair: emg-pcp02 / emg-pcp02-examples only  
Pages: A order 453, B order 454  
Status: authoring complete; independent review pending

## Scope, plan and inventory

The assigned inventory is the two A-page items post-emg-strict-charged-fluid-model and pthm-emg-local-charged-fluid-model, followed by the B-page example ex-emg-adopted-linear-eos-model. The A page contains 2/100 items and the B page contains 1/100 example.

The canonical research/plan-spec.json entry has empty pre-authoring item arrays and requires emg-cp03 and emg-g04. The current batch manifest materializes the three assigned items. The older proposed-inventory reservation additionally lists EMG-G01; this conflicts with the canonical page requirements. I followed the plan. emg-g04 itself currently requires emg-g01, so that context remains transitive through the planned G04 page.

No other conflict between the assigned design and the controlling plan was found. The design's strict-interior scope, SI/sign conventions, distinction between the adopted material postulate and conditional development theorem, and warning against global or empirical claims are preserved.

## Prerequisites and proof status

The postulate depends on the current CP03 strict-system definition and geometry/unit definition. Their exact EOS/current/stress and Lorentzian/SI interfaces were inspected and are stated in the postulate. These definitions are current draft inputs; their status is not upgraded.

The local physics theorem matches the current CP03 local-development theorem at its complete smooth constrained-data statement, the selected K sign, initial field reconstruction, sourced Maxwell constraints, and both local branches. Its proof remains conditional on that draft mathematical theorem, whose current proof in turn uses draft CP02 field-strength and CP01 Maxwell-stress suppliers with pending prechecks. The theorem records these interfaces and their actual statuses in Facts, proof steps and the contract; it does not treat them as accepted proofs.

The theorem now directly cites the exact mathematical definitions of the periodic torus/Sobolev spaces and harmonic gauge used in its torus branch. The example now directly cites the SI geometry definition for c and kappa_E, labels the adopted characteristic-speed formula, and proves that the quotient torus is compact, oriented, smooth and boundaryless with its Euclidean metric descending. Its EOS integrals and constraint substitutions are complete. The example remains conditional on the same CP01/CP02 and CP03 draft mathematical carriers, including the CP03 fluid symmetric-reduction lemma used for its enthalpy coordinate.

The CP03 theorem's transitive proof path was inspected at the exact interfaces used: matter current conservation follows from the EOS integral, energy balance and advected Z; its total-stress cancellation is conditional on the CP01 identity; Maxwell residual propagation uses the sourced Gauss constraints and current conservation; Einstein recovery uses the subsidiary wave equation, constraints and conserved stress. The other listed mathematical inputs provide the Lorentzian Hodge/component formulas, reduced Einstein principal block, periodic symmetric-hyperbolic existence, geometric local development, divergence identities and ODE flow existence. These are retained as the theorem's actual suppliers, not reproved or upgraded by this physical pair.

Two transitive administrative statements are stale in off-assignment draft suppliers: CP03 current-conservation lemma [L1] says the CP01 carrier is absent, and CP02 field-strength lemma [L1] says the CP01 definition is unlisted. The current batch-6 manifest contains the CP01 carriers. Their mathematical interfaces are still recorded conditionally in the assigned theorem; no off-assignment supplier was edited.

## Dependency levels and cross-batch edges

The run dependency-level record gives batch 9 level 4 with batch prerequisites 1, 5, 6, 7 and 8. Recomputed item levels remain:

| Item | Maximum in-run supplier level | Item level |
|---|---:|---:|
| post-emg-strict-charged-fluid-model | 1 | 2 |
| pthm-emg-local-charged-fluid-model | 3 | 4 |
| ex-emg-adopted-linear-eos-model | 4 | 5 |

The complete current page and item edge inventory is physics-remaining-80-2026-10-17-batch-9.cross-batch-dependencies.json. Each verified row records only the scoped interface check. Draft mathematical suppliers remain unaccepted and the theorem/example readiness records remain escalated.

## Sources and retrieval history

The A page uses three inspected full texts: Choquet-Bruhat's complete 300-page open-access book PDF, Chapter IX §§IX.3–IX.4 and IX.13.1–IX.13.2 (printed pp. 210–216 and 227–228); Pausader's complete 16-page Brown lecture notes, §§1.3–1.5 and 2.1.1–2.2.1 (printed pp. 2–5 and 7–9); and Pugliese–Valiente Kroon's complete current arXiv PDF, version 2, §§3.3 and 4.6. The book and lecture notes support the relativistic perfect-fluid stress, barotropic closure and charged convection-current context. The article is context for charged Einstein–Maxwell–fluid evolution; it is not used as a complete local existence proof. Each source's supported items, locator, limitations and per-result disposition are itemized in the coverage ledger.

The B page cites the book and lecture notes at its relevant EOS and charged-current sections; the exact linear-EOS formulas and compatible initial-data construction are proved in the example. All literature is contextual evidence, not proof that the adopted model describes nature.

The coverage ledger preserves the historical failure to open the version-pinned arXiv v1 URL that appeared in an earlier CP03 research reference. Search found and the batch inspected the current /pdf/1112.1525 version-2 full text instead. Version 1 is not cited by these items; no batch claim is dropped or made dependent on it. The active source set has no unresolved retrieval failure or dropped source.

The actual command node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-9.coverage.json --stamp returned 5/5 source(s) fetch-verified (0 newly stamped) and 5/5 source(s) resolved (0 documented drops).

## Readiness disposition

post-emg-strict-charged-fluid-model is ready for Step-1 handoff: its physical assumption is explicitly adopted, sourced and scoped, and its current definitions, placement and postulate contract are complete.

pthm-emg-local-charged-fluid-model is escalated because the exact local-development theorem and its CP01/CP02 mathematical inputs are draft carriers with pending prechecks. Its complete conditional argument is present, but these proof statuses prevent a ready disposition.

ex-emg-adopted-linear-eos-model is escalated because it consumes the same draft existence and CP01/CP02 inputs, plus the draft CP03 charged-fluid symmetric-reduction lemma for the enthalpy coordinate. Its conditional calculations and compatible initial-data verification are complete.

## Scoped check results

After the final item edits, the explicit scoped checks returned:

- source-fetch-check --stamp: 5/5 active URLs fetch-verified, 0 newly stamped; 5/5 resolved, 0 drops.
- precheck on the three assigned items: 3 checked, 0 failing.
- proof-layout on the three assigned items: 3 items, 10 steps, 0 defects.
- strict proof-contract validation: 3/3 items, 0 errors and 0 warnings.
- rendercheck on the three items and both pages: 5 files, no YAML, KaTeX, wikilink or multiline-display errors.
- content-policy on the batch-9 manifest: 3 items, 0 errors and 0 warnings.
- manifest-deps on the batch-9 manifest: 3 items, 0 missing dependency arrays and 0 errors.
- focused depcheck: all 3 assigned items and their current prerequisite closure checked, 0 errors and 0 warnings.
- physics-check on the two canonical plan page IDs: 0 errors; the plan's item arrays are empty, so this checked page/import metadata only. The assigned items were checked separately by content-policy, depcheck, precheck, rendercheck and proof contracts.
- Cross-batch ledger shape/scope check: 14 exact page/item edges, all consumers in batch 9, 14 verified interface checks, 0 structural errors.

The scoped item-level recomputation confirms assigned levels 2, 4 and 5 as tabulated above. The run-wide item-dependency-level check exits 1 on unrelated empty scaffold inventories in EMG, QSM and TGR pages and on pthm-emg-matter-symmetry-charges (declared level 5, computed level 7); it reports no assigned batch-9 item-level mismatch. The batch-dependency-level check reports the shared run-level file stale. The current recorded predecessor levels for batches 1, 5, 6, 7 and 8 are 0, 3, 0, 1 and 2, so the assigned pair's batch level remains 4. The shared run-level file was left for its owner to recompute.

Step-1 records were written without the owner flag: post-emg-strict-charged-fluid-model is ready; pthm-emg-local-charged-fluid-model and ex-emg-adopted-linear-eos-model are escalated on their exact draft mathematical prerequisites. No prior escalation was overwritten.

The example's escalated Step-1 record was written before a final correction to the units calculation in verification step 2.1. The item is now corrected and the scoped checks below were rerun. Per the no-overwrite instruction, the existing escalation record was preserved; the owner should inspect the current example carrier when resolving that escalation.

The preserved example record has content hash 9591e56b51cb242b4b6806da40465e22c269bbe4335e931c5cbcb45e70debbf6; the current carrier hashes to 69f42905961665fc9023a67b188211c3105a5d29f8641b26ba176e10d6ebf081 under the Step-1 hash routine. The recorded disposition is still escalated and its blocker remains accurate, but the owner must bind the current carrier when resolving it.
