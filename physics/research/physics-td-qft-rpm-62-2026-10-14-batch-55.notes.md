# Batch 55 authoring notes — QFT-X03

Run: `physics-td-qft-rpm-62-2026-10-14`  
Assigned pair: `qft-x03` / `qft-x03-examples`  
Current page dependency level: 7. Item levels are recorded in the batch manifest and were calculated against current in-run suppliers.

## Plan reconciliation

- The current plan-spec and current QFT-X03 page inventory require `qft-g01`, `qft-mx03`, `qft-mx04`, `qft-x01`, and `em-primitives-and-postulates`. The older original reservation on the QFT track section substitutes `qft-c01` for the EM page. The current page requirement was followed. The A theorem still directly depends on `post-qft-constructed-model-and-measurement` from QFT-C01, so the older C01 mathematical/physical input remains in the item graph without becoming a page requirement.
- The 2026-10-12 revised empirical binding makes `exp-qft-fan-electron-moment-2022` depend on `def-qft-example-observable-types` and `lem-qft-example-penning-frequency-invariant`. The older covariance/weighted-estimator edge is not restored. No raw trials, covariance matrix, weights, or statistical estimator are reconstructed.
- The revised assignment has three A items and three B items. A adds a local number-operator/counting-PVM definition and theorem because the adopted Born postulate accepts finite instruments and no earlier local photon-count PVM carrier supplied the needed finite projective partition.

## Inventory, order and levels

Items were authored as suppliers before their local consumers. Current in-run levels are:

| Item | Page | Level | Direct same-run supplier |
|---|---|---:|---|
| `def-qft-x03-photon-count-pvm` | A | 1 | `def-qft-fock-and-test-spaces` (batch 37, level 0) |
| `thm-qft-x03-photon-count-pvm` | A | 2 | local number definition (level 1) |
| `pthm-qft-example-soft-coherent-counts` | A | 8 | maximum current in-run supplier: `post-qft-free-photon-model` (computed level 7) |
| `exp-qft-fan-electron-moment-2022` | B | 2 | QFT-X01 observable type and QFT-MX04 Penning invariant (level 1 each) |
| `pthm-qft-reported-electron-anomaly-shift` | B | 3 | experiment record (level 2) |
| `ex-qft-x06` | B | 9 | A-page physical theorem (level 8) |

During authoring, other pairs refreshed `post-qft-free-photon-model` to level 7 and `thm-qft-example-soft-current-angular-coherent` to level 4; their current manifests and item frontmatter now agree. A fresh read-only `computeRunBatchDependencyLevels` calculation gives batch 55 level 7 with requires `[37,40,41,44,47,48,49,52]` and input hash `a8a92007be9b92dfb64f8b0145931acc22814764eecb6f3e4e8f4313b490c8bf`. The stored shared run-level file still has input hash `91409831ae2298c5d4b178f625d835ac2b7927f69cda70e4d81afb51784137e9` and requires `[47,48,49,52]`; its check reports stale. It is owner-owned and was not rewritten. The item-level checker reports six unrelated TD items with stale labels: `def-td-cross-type-reaction-network` 14/15; `pthm-td-contact-product-comparison` 12/13; `pthm-td-entropy-under-product-comparison` 13/14; `pthm-td-universal-mixing-entropy` 18/19; `rem-td-entropy-construction-hypotheses` 19/20; `pthm-td-controlled-continuum-thermodynamic-limit` 9/8. No batch-55 item level differs from its current in-run calculation.

## Mathematical and physical interfaces

- The local Fock number definition fixes `D(N)`, the sector action, and every Borel sector multiplier. Its `justified_by` link points forward to the same-page theorem that verifies well-definedness; it is not a prerequisite edge, so it does not raise the definition level or create a dependency cycle. The theorem proves density and symmetry, identifies the adjoint domain using the actual second-variable-linear Fock pairing, proves self-adjointness, and checks all PVM clauses including strong countable additivity and finite-partition normalization.
- The current QFT-MX03 theorem item and batch-47 manifest entry exist, and it now has an escalated Step 1 record; `library/quantum-field-theory/qft-mx03.md` is still absent. Its actual proof steps 2.1–3.2 establish the energy-coordinate norm, transverse unitary, coherent-sector weights, and free energy formula used here. Its step 4.2 also proves projective-ray nonconvergence. The assigned theorem independently re-derives the projective claim from adjacent-shell overlaps and uses only its steps 2.1–3.2 for the other inputs.
- The QFT-MX03 item’s opening paragraph correctly says the transverse and Q8 items are present, but its F2 fact still says the transverse-space item has no ready record. The current `def-qft-photon-transverse-space` item has a ready Step 1 record. The QFT-MX03 escalation now also identifies that its item proof uses QFT-MF01 suppliers while `qft-mx03.requires` omits `qft-mf01`, and that the Q8 proof invokes polar integration without declaring its polar-coordinate and surface-measure suppliers. The Q8 lemma and its photon-energy multiplier have escalated records; their recorded transverse-space blocker is stale. The assigned proof does not rely on the Q8 infrared conclusion.
- The current QFT-G01 page and free-photon postulate carrier exist at level 7. The postulate’s actual interface is the positive transverse Fock model with `H_gamma = hbar c dGamma(|k|)`, and it explicitly excludes interacting continuum QED. Its current Step 1 record is escalated through `lem-qft-photon-local-weyl-observables`, `lem-qft-photon-local-field-strength`, and `lem-qft-scalar-causal-commutator`. The assigned theorem uses this interface conditionally.
- The current QFT-C01 measurement postulate assigns Born probabilities only to a supplied state and normalized finite bounded Kraus instrument. Each count event is therefore represented by the explicitly constructed two-outcome instrument `(P_n, I-P_n)`, not by an unprovided countable Kraus instrument.
- For the one-charge velocity specialization, the item proves the polarization completeness identity and evaluates the angular integral directly. This gives `C(v)=(alpha/pi)(v^-1 log((1+v)/(1-v))-2)` with positivity for `0<v<1`.
- The experiment record is a report of the authors’ apparatus, alternating quantum-jump procedure, corrected eleven-field weighted mean, stated `1 sigma` uncertainty `1.3e-13`, and correlated nearby-field cavity uncertainty. It makes no new Gaussian, independence, posterior, coverage, covariance, or raw-data claim. The final B theorem subtracts exact 1 and carries the same uncertainty; it makes no theory comparison.

## Source harvest and resolution

Active QFT-X03 A-page treatments are the complete Tong Chapter 6 HTML, Srednicki’s complete 616-page prepublication book draft, and the complete Glauber article. Tong and Srednicki are independent QFT treatments; Glauber supplies primary coherent-state and prescribed-current context. The QFT-X03 B page uses the complete Fan et al. arXiv HTML report. Each result’s locator, supported item, disposition, source limits, and fetch stamp are in the coverage file.

The previously used Weinberg mirror PDF URL exhausted six fetch attempts because its compressed PDF page count could not be verified (`mutool` unavailable). The complete nine-page article was inspected through the web PDF reader. A search found the APS Harvest endpoint, which returned HTTP 401 on six attempts; the APS article page shows authorization required. The inaccessible URLs are recorded as dropped with their exact attempts, searches, and per-item alternatives under the source-resolution schema. This drops only the URLs: the item does not use Weinberg as a premise, and its complete conditional proof plus Tong, Srednicki, and Glauber preserve coverage. No Tong PDF retries were made; the prior six failed page-count attempts are copied into this batch coverage, and the active Tong source is the stamped full-text Chapter 6 HTML.

## Placement and readiness

The QFT-X03 A and B page carriers and populated batch manifest are present and stay under the 100-item page cap. The direct page inputs `qft-g01`, `qft-mx04`, `qft-x01`, and the published EM page have current page carriers; the first three remain draft/open at their own prerequisites. `qft-mx03` has a manifest/item and an escalated Step 1 record but no physical page carrier. Its local item also depends on QFT-MF01 items, although the current plan-spec and page requirements omit `qft-mf01`; this cross-batch page edge is recorded as open for owner repair.

Step 1 decisions recorded after the scoped checks:

- `def-qft-x03-photon-count-pvm`: ready; its mathematical inputs and placement are current, and the source contract and scoped gates pass.
- `thm-qft-x03-photon-count-pvm`: ready; the full local proof, mathematical closure, and strict contract pass.
- `pthm-qft-example-soft-coherent-counts`: escalated because the QFT-MX03 page is absent and its theorem supplier is escalated; the QFT-G01 free-model postulate is escalated through the local-observable chain; and the QFT-C01 model/measurement postulate and framework unit definition have pre-existing owner-owned escalations.
- `ex-qft-x06`: escalated because its A theorem prerequisite remains escalated.
- `exp-qft-fan-electron-moment-2022`: escalated because `def-qft-example-observable-types` has a pre-existing owner-owned escalation, despite complete source reporting and a ready Penning invariant input.
- `pthm-qft-reported-electron-anomaly-shift`: escalated because its experiment prerequisite is escalated.

The current PTHM Step 1 escalation row was written before the latest QFT-MX03 and QFT-G01 Step 1 records appeared. Its recorded reason therefore still says those records were absent. It remains escalated and was not overwritten; the current exact statuses and blockers are recorded in the cross-batch evidence and Facts & Assumptions. No pre-existing escalation is overwritten and no owner flag is used. Readiness records are not independent review or publication approval.

## Scoped check results

- `precheck.mts`: pass for all five proof-bearing/physical items; the experiment passes the nonproof structure check.
- `rendercheck.mjs`: pass for all six assigned items and both page carriers; all math rendered under the application KaTeX and all frontmatter parsed.
- `proof-layout.mjs`: pass for six items, 19 numbered steps, zero defects. The app renderer’s Node process did not resolve the web `@/` alias in this environment; the check was rerun with a temporary `/private/tmp` resolver implementing the existing web `tsconfig` alias and extensionless TypeScript imports. No tool or app files were edited.
- `proof-contract.mjs --strict`: pass for all six scoped items, no errors or warnings.
- `content-policy.mjs`: pass for six scoped items, zero errors and warnings.
- Focused `depcheck.mjs`: pass for all six items and two pages, zero dependency errors or warnings.
- `source-fetch-check.mjs --stamp`: 4/6 active full-text URLs fetch-stamped and 6/6 resolved, with two documented URL drops. A subsequent check-mode run also passed.
- `item-dependency-levels.mjs check`: no batch-55 item mismatch; it reports the six unrelated TD mismatches listed above.
- `batch-dependency-levels.mjs check`: fails with “Stale batch dependency levels for physics-td-qft-rpm-62-2026-10-14”. The fresh calculation and both hashes are recorded above; the shared run-level file remains untouched for the owner.
- `step1-decisions.mjs check`: the whole run reports 683 manifest items, 296 ready and 387 open records, and exits 1 because the run is not closed. Both batch-55 ready records have current item hashes. All four consumer records are escalated; the main A theorem's saved reason predates the newly appeared QFT-MX03 and QFT-G01 escalation records, as detailed above. The other three escalations still match their unresolved prerequisites.

A final autopilot status refresh from the parent repository could not access its missing `.autopilot/<run>` directory: the status tool reported `EPERM` while attempting to create it and then “no run configured and no status.md yet”. No run state was written. The earlier successful status inspection for this dispatch reported an active Step 1 run with owner repair/recertification and scheduling-scope blockers; those shared state files remain owner-owned.
