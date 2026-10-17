# Batch 33 authoring notes — csm-stochastic-response

Run: physics-remaining-80-2026-10-17
Batch: 33
Assigned pair: csm-stochastic-response / csm-stochastic-response-examples

## Plan and inventory comparison

The binding owner direction was read before authoring. The exact A-page inventory has 11 items and the B-page inventory has one counterexample, cex-csm-dk-hidden-state-rate-obstruction. Both page identities, order, title, category, library, and companion match the current plan. The complete assigned design section and paired inventory were read; the assigned claim scope and proof routes are preserved. No additional local item was needed, and both pages remain below the 100-item cap.

There is one direct-page discrepancy. The historical design reservation lists csm-collision-transport, csm-hamiltonian-statistics, and csm-mean-field-hierarchy; current plan-spec.json and this dispatch list the first and third only. The A manifest follows the current plan. The omitted csm-hamiltonian-statistics page is nevertheless in the current transitive page closure because csm-mean-field-hierarchy itself requires it. The item-level thm-csm-dk-integrable-covariance-green-kubo dependency from batch 30 is also retained where its exact result is used. No supplier was dropped; the third design edge remains recorded as a direct-versus-transitive planning difference.

## Supplier inspection and dependency scope

- Batch 31's current A page and evidence were inspected. The actual item used here is def-csm-dk-periodic-mean-field-model, a draft mathematical definition of the smooth periodic N^-1 interaction and its SI dimensions. Its direct prerequisite def-csm-dk-hamiltonian-flow-measure was also inspected at its exact phase and reference-measure interface. Both are definitions, not limit theorems. The remark uses them only to delimit the mean-field regime.
- Batch 32's current A page, notes, coverage, and dependency inputs were inspected. The actual item used here is def-csm-dk-reflection-collision-gain, a draft mathematical definition of the normalized sphere measure and elastic reflection map. Its justified_by supplier lem-csm-dk-reflection-measure-and-gain-identities was read with its complete proof; that draft proves representative independence, weighted-space well-definedness and the stated collision identities under its explicit AC_omega, completed-measure and change-of-variables hypotheses. The definition and lemma remain pending independent review; the remark uses only the definition's regime, not the lemma as a kinetic-limit premise.
- Batch 30's current notes, coverage, and actual thm-csm-dk-integrable-covariance-green-kubo carrier were inspected. That supplier is a draft theorem with a complete authored proof but independent review still pending. Its Statement assumes a jointly measurable centered second-order stationary process on all real times, finite second moments, absolute integrability of nonnegative-lag covariances, and AC_omega for completed-product Fubini. The finite-state consumers explicitly construct the two-sided stationary chain and prove exponential covariance decay before applying it. The supplier remains draft context, not independent proof acceptance.
- The inherited published thm-tdmath-ornstein-uhlenbeck-model Statement and complete proof were inspected. It requires full AC, the exact filtered Brownian increment conditions, and a stationary Gaussian initial law for its covariance clause. Those hypotheses are carried to the local OU theorem and physical prediction.
- def-axiom-of-choice and def-countable-choice were read at their exact current Definitions. Full AC is carried from Ionescu–Tulcea into the finite-chain construction and each consumer. AC_omega is separately carried into the finite-state consumers that use the Green–Kubo covariance supplier.

The source proposal for the OU velocity result also named thm-csm-dk-integrable-covariance-green-kubo. That theorem's process domain is all of R, while the inspected OU theorem defines the forward process on nonnegative times. I removed that dependency from thm-csm-dk-ou-velocity-diffusion-response and proved the required forward-time variance identity directly from the explicit OU covariance by Gaussian Riemann sums. The finite-state results retain the Green–Kubo dependency because their two-sided stationary chain satisfies its actual domain and hypotheses.

The published postulate post-td-linear-ornstein-uhlenbeck-bath was inspected as a possible context supplier. Its stated model is overdamped position diffusion in a harmonic trap with mobility and stiffness. This batch adopts an inertial velocity OU bath with mass and damping rate, so it is not used as a prerequisite or treated as the same physical interface.

## Source reading and retrieval

Three independent full texts were inspected: Aldous–Fill's 516-page book, Pavliotis's 155-page book, and Seifert's 105-page review. The exact section locators, harvested results, dispositions, and limitations are in batch-33.coverage.json. Aldous–Fill supplies the finite CTMC and reversible spectral context; Pavliotis supplies linear-SDE, OU and integrated-covariance context; Seifert covers inertial Langevin noise, equilibrium response, local detailed balance and the undetermined rate prefactor. The local proofs derive every claimed finite-state and OU identity under the exact stated assumptions. None of these texts is used to claim a measured rate or observation.

The direct browser view of Aldous–Fill's 516-page PDF timed out. A search located the same book's official Berkeley LaTeXML chapter pages; the full relevant Chapter 2 §2.1.2 and Chapter 3 §§3.1–3.2 and §3.4 sections were inspected there, and the original PDF's earlier complete-body fetch stamp was retained. Pavliotis and Seifert full PDFs opened successfully and their relevant sections were inspected. The coverage preserves this attempt, the search, the alternative chapter URLs, and the item mapping.

The current coverage records three independent full texts with exact URLs, section locators, supported items and per-harvest dispositions. Running `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-33.coverage.json --stamp` in this dispatch verified all 3/3 existing full-text stamps (0 newly stamped). No source was dropped, and there is no unresolved source-resolution escalation.

## Dependency levels and readiness

Batch 33 is level 2 in batch-dependency-levels.json; its batch-DAG suppliers are 30, 31, and 32, with levels 0, 1, and 0 respectively. Its direct page prerequisites are the current plan's collision-transport and mean-field-hierarchy pages; the latter's current supplier closure includes hamiltonian-statistics. A scoped item-level recomputation over batch 33 and its in-run dependency closure checked 16 items, found no cycle or level mismatch, and confirmed carrier/manifest dependency equality for all 12 assigned items. Recomputed item levels are:

| Item | Highest in-run supplier level | Level |
|---|---:|---:|
| def-csm-dk-finite-reversible-rate-model | none | 0 |
| post-csm-dk-selected-thermal-langevin-bath | none | 0 |
| post-csm-dk-selected-reversible-bath-rates | 0 | 1 |
| thm-csm-dk-nonexplosive-ctmc-and-gap | 0 | 1 |
| thm-csm-dk-ou-velocity-diffusion-response | none | 0 |
| pthm-csm-dk-ou-green-kubo-einstein | 0 | 1 |
| rem-csm-dk-hard-limit-dispositions | 1 | 2 |
| thm-csm-dk-finite-rate-fluctuation-response | 1 | 2 |
| thm-csm-dk-markov-entropy-and-strong-averages | 1 | 2 |
| thm-csm-dk-strong-lumpability | 1 | 2 |
| pthm-csm-dk-finite-bath-response | 2 | 3 |
| cex-csm-dk-hidden-state-rate-obstruction | 2 | 3 |

The complete pair has 11 A items and one B counterexample. The A/B pages, all assigned carriers, and eight proof-bearing plus two postulate contract entries are authored. Strict proof-contract validation passes all 10 entries. All direct and transitive item inputs used in the arguments are present at their inspected interfaces; the batch-30 Green–Kubo theorem and batch-31/32 definitions remain draft context pending independent review. Step-1 readiness records for all 12 assigned items are current and ready; they bind each item and its direct dependency inputs and mean only that authoring inputs, placement, and contracts are complete. They confer no proof acceptance or physical validation.

The unfiltered `item-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` still reports empty scaffold inventories and stale/missing levels in other assigned batches (including EMG, QSM, and TGR pages); none is in batch 33's 16-item dependency closure. No other batch manifest was edited. The run-wide dependency snapshot remains for the owner to refresh at the drained join.


## Final scoped checks and remaining run-wide issues

- The 16-item in-run dependency closure recomputed without cycles or level mismatches; every claimed level matched the computed level. The assigned inventory has 12 items; batch 33 remains scheduled at level 2 with suppliers 30, 31, and 32.
- The exact selected A/B plan overlay passed `physics-check` for all 12 assigned items. Focused `depcheck` passed with 0 errors/warnings (12 selected items; 1,883-item transitive closure); `content-policy` passed 12/12; `rendercheck` passed all 14 item/page files; `precheck` passed all 8 proof-bearing items; strict proof contracts passed 10/10; `proof-layout` passed the 4 edited items, 13 steps, 0 defects. `source-fetch-check --stamp` verified 3/3 source stamps.
- `coverage-checklist` reports 0 errors and one advisory low-yield warning: 4/14 harvest rows are classed `included`; it does not count the eight `inline` rows absorbed by local definitions/proofs. The two `out-of-scope` rows have item-specific reasons in coverage.
- Run-wide `proof-contract-coverage` stops at the unrelated empty `emg-mm03` inventory; the scoped strict check above covers every proof-bearing carrier in this batch. Run-wide `batch-dependency-levels check` reports a stale input hash (recorded `9ae552630020f11a`, recomputed `545e4cd802ad1856`). The batch graph rows themselves are unchanged, including batch 33’s level and suppliers; refreshing the shared run-wide snapshot remains owner work at the drained join.
- The earlier recorded unfiltered item-level check reports unrelated EMG/QSM/TGR inventory and level findings outside this batch. No other batch manifest, shared plan, published item, import, engine state, or verdict was edited.
