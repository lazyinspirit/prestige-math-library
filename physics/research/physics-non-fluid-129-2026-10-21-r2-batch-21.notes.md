# Batch 21 authoring notes — `emg-fx06`

## Inventory and design reconciliation

This batch owns A page `emg-fx06` (order 739) and B page `emg-fx06-examples` (order 740), in `einstein-maxwell-models-mathematics`, library `mathematics`. The A page requires `emg-fx04`, `emg-fx05`, and `gr-einstein-and-matter`; the B page requires the A page. The A page has five items and the B page one, both below the 100-item cap.

The detailed design and `plan-spec.json` do not fully agree on inventory. The plan specification has no registered items for these pages, while the complete design section registers four A interfaces and one B counterexample. The batch manifest follows the detailed design. The design's opening proof route also requires the Reissner–Nordström separated scalar equation and potential, although that result is not among its four A interfaces. I added `lem-emg-fx-rn-scalar-wave-potential` on A page `emg-fx06`, with its exact RN hypotheses, complete local radial reduction, tortoise-coordinate proof, direct dependencies, and conditional energy claim, before using it in the page.

The design calls the integrable-kernel versus (1/t)-kernel comparison a planned comparison example, but the registered B leaves contain only `cex-emg-fx-negative-bound-state`. The comparison is proved in full as the final part of `prop-emg-fx-conditional-bootstrap`; no additional B item was introduced.

The design's planned use of `lem-emg-fx-multiplier-divergence` as a direct input to the positive matrix-wave estimate has a dimension mismatch: the multiplier identity is for a four-dimensional Lorentzian domain, whereas the energy theorem is a (1+1)-dimensional system on (mathbb R_t\timesmathbb R_x). The matrix theorem therefore proves its componentwise energy identity directly, by multiplying the system by (U_t); it has no dependency on the Lorentzian multiplier lemma. This preserves both claims at their stated scopes.

The warnings are explicit in the items and page notes: the matrix theorem is an abstract static positive-semidefinite matrix-potential estimate; `emg-fx05` is a 3+1-dimensional finite-slab symmetric-hyperbolic estimate and does not identify the abstract 1+1 system with Einstein–Maxwell perturbation variables. The RN result is a test scalar on a fixed RN geometry. No item asserts a coupled RN master-system estimate, full low-mode classification, reconstruction, red-shift/Morawetz/(r^p) decay, horizon-crossing derivative control, continuation, or global/nonlinear stability.

## Inventory, direct dependencies, and item levels

Levels below count only suppliers authored within this batch. All roles are `mathematical-premise`; direct dependencies and roles match the item frontmatter and final batch manifest. Suppliers precede consumers.

| Item | Page | Level | Direct dependencies |
| --- | --- | ---: | --- |
| `def-emg-fx-wave-currents` | A | 0 | `def-countable-choice`, `def-gr-metric-volume-form-and-current-flux`, `def-gr-smooth-lorentzian-objects`, `def-smooth-vector-field-as-a-tangent-bundle-section`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` |
| `lem-emg-fx-multiplier-divergence` | A | 1 | `def-countable-choice`, `def-emg-fx-wave-currents`, `def-gr-smooth-lorentzian-objects`, `def-gr-observer-and-rest-space`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `lem-gr-observer-projection-decomposition`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` |
| `thm-emg-fx-coupled-potential-energy` | A | 0 | `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-differentiation-under-the-integral-sign` |
| `lem-emg-fx-rn-scalar-wave-potential` | A | 1 | `def-countable-choice`, `def-emg-fx-wave-currents`, `def-emg-xs-rn-data`, `lem-gr-metric-divergence-and-density-formula`, `cor-primitives-of-a-continuous-function`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `thm-emg-fx-coupled-potential-energy` |
| `prop-emg-fx-conditional-bootstrap` | A | 1 | `def-absolutely-continuous-function`, `def-countable-choice`, `def-dependent-choice`, `cor-mean-value-theorem`, `cor-primitives-of-a-continuous-function`, `thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous`, `thm-absolutely-continuous-functions-have-integrable-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`, `thm-logarithm-derivative-and-integral`, `thm-real-power-continuity-and-derivatives`, `thm-emg-fx-coupled-potential-energy` |
| `cex-emg-fx-negative-bound-state` | B | 1 | `thm-emg-fx-coupled-potential-energy` |

The checked in-batch item edges are `lem-emg-fx-multiplier-divergence → def-emg-fx-wave-currents`, `lem-emg-fx-rn-scalar-wave-potential → thm-emg-fx-coupled-potential-energy`, and both `prop-emg-fx-conditional-bootstrap` and `cex-emg-fx-negative-bound-state → thm-emg-fx-coupled-potential-energy`. The scoped dependency-level calculation returned no errors and these six item levels: (0,1,0,1,1,1).

The run-level schedule places batch 21 at level 2 with prerequisites batches 19 and 20. The required cross-batch dependency file contains one verified page edge each from `emg-fx06` to `emg-fx04` and `emg-fx05`; those current pages and their scoped interfaces were inspected. `gr-einstein-and-matter` is an existing page outside this run and remains recorded as a page requirement in the manifest and notes, not as an in-run batch edge.

## Supplier-interface audit

I inspected the complete current interfaces and relevant proofs of `emg-fx04`, `emg-fx05`, and `gr-einstein-and-matter), and the direct mathematical suppliers listed above. The geometry inputs supply the RN metric, Lorentzian divergence, density, observer decomposition and connection conventions at their actual hypotheses. The analysis inputs supply the real-power derivative, oriented primitives, smooth inverse, mean-value, absolute-continuity, chain-rule, and AC fundamental-theorem statements with their choice assumptions. The matrix-wave theorem additionally uses the actual Cauchy–Schwarz inequality and differentiation-under-the-integral theorem hypotheses.

Draft status and pending/missing independent review fields were not treated as mathematical gaps. The current statements and complete proofs were read at their actual hypotheses. In particular, `thm-emg-fx-coupled-potential-energy` is a locally proved conditional theorem; its Step 1 authoring status is not independent proof acceptance. The RN harmonic is supplied conditionally and no spectral existence claim is made. The bootstrap item carries both (mathrm{AC}_\omega) and (mathrm{DC}) explicitly because its absolute-continuity fundamental theorem supplier assumes them.

## Full-text source reading and harvest

The A page has two independent full-text treatments, including full lecture notes. `research/physics-non-fluid-129-2026-10-21-r2-batch-21.coverage.json` records exact locators, every harvested result, its disposition, item, and support.

- Mihalis Dafermos and Igor Rodnianski, *Lectures on black holes and linear waves*, <https://arxiv.org/pdf/0811.0354>, full 116-page notes. I read §§3.2.2–3.2.4 (PDF pp. 30–32), §7.1 (PDF pp. 86–87), Appendix D (PDF pp. 103–104), and Appendix F.2 (PDF pp. 105–106). On A, §3.2.2 and §3.2.4 are `included` in the local multiplier and RN-scalar items; §7.1 is `inline` as the red-shift limitation; Appendix F.2 is `included` through a locally derived RN tortoise-coordinate reduction. On B, Appendix D is `inline` for the stress-current convention.
- Elena Giorgi, *The linear stability of Reissner–Nordström spacetime for small charge*, <https://arxiv.org/pdf/1904.04926>, full 121-page paper. I read §§1.2–1.3 (PDF pp. 3–6), §8.1.2 (PDF pp. 56–57), and §8.4 (PDF pp. 59–60), as well as §1.4 for the B-page scope audit. On A, §§1.2, 1.3, 8.1.2, and 8.4 are each `inline` as specific caveats about coupled systems, low modes, derivative couplings and reconstruction; none is claimed as a proof of the abstract theorem or scalar test equation. On B, §§1.2 and 8.1.2 are `inline`; §1.4 is `out-of-scope` with the specific reason in the coverage record.

The source harvest has 8 A-page results and 4 B-page results. The coverage checker reports 0 errors and 1 advisory warning: 3/8 A-page results are scaffolded as items. The other five are deliberately inline because they record scope distinctions and limitations that the local items explicitly preserve; no source result was silently omitted.

`source-fetch-check --stamp` recorded one successful full-text fetch attempt per page/source record: 4/4 verified and resolved, with no retry, failed retrieval, source drop, or `source_resolution` alternative required. The Dafermos–Rodnianski PDF stamp is 895,996 bytes, 116 pages, SHA-256 prefix `46ce78caae7a50f1`; the Giorgi PDF stamp is 1,476,438 bytes, 121 pages, prefix `4097321190563098`. A final non-stamping fetch check again passed 4/4.

## Proof contracts, authoring readiness, and scoped checks

`research/physics-non-fluid-129-2026-10-21-r2-batch-21.proof-contracts.json` covers all six items. It records exact supplier-section excerpts and proof status, every linked fact and its proof-step uses, every numbered step and its cited inputs, eight standard boundary dispositions, completed risk reviews, and applicable finite checks. Strict proof-contract check: 6/6 items, 0 errors and 0 warnings.

Final scoped checks:

- `dependencyLevels` for these six items: levels (0,1,0,1,1,1), no cycles or label errors.
- `depcheck --items-file /tmp/r2-b21-items.json`: six selected items; 1,227-item / 321-page prerequisite closure; 0 errors and 0 warnings. The page dependency depths are 53 for `emg-fx06` and 54 for `emg-fx06-examples`.
- `manifest-deps`: six manifest items, no missing dependency arrays and 0 errors.
- `content-policy`: six scoped items, 0 errors and 0 warnings.
- `precheck`: all five proof-bearing items passed; the definition is not applicable.
- `rendercheck`: six items and two page files, 0 errors and 0 warnings. An initial run found two multiline display equations; both were reformatted and the final renderer check passed.
- Explicit final `proof-layout`: six changed items, 15 numbered steps, 0 defects.
- `coverage-checklist`: two pages, 12 harvested results, 0 errors and the one explained advisory above.
- Non-stamping `source-fetch-check`: 4/4 full-text records verified and resolved.
- The cross-batch dependency JSON shape and required row fields were checked.

After the items, manifest, coverage and contracts were complete, `loadStep1Record` and `step1Decision` showed no pre-existing decisions for these items. I recorded each item as `ready` with its exact direct dependency IDs and evidence, without `--owner`. A post-record check reports all six records current and closed. These are Step 1 authoring-readiness records, not independent proof approval.

## Inherited run-level blockers

The scoped checks above pass. The full-run `item-dependency-levels.mjs check` is not clean: it reports 82 errors outside this batch—68 empty scaffold inventories and 14 pre-existing level mismatches. The 68 empty page inventories are:

`emx-waveguide-scattering-channels`, `emx-waveguide-scattering-channels-examples`, `emg-fx07`, `emg-fx07-examples`, `emg-fx08`, `emg-fx08-examples`, `emg-fx13`, `emg-fx13-examples`, `gr-fx09-bootstrap-and-stability-boundaries`, `gr-fx09-bootstrap-and-stability-boundaries-examples`, `nrqmx-certified-spectral-computation`, `nrqmx-certified-spectral-computation-examples`, `qftx-anomaly-cocycles`, `qftx-anomaly-cocycles-examples`, `qftx-ribbon-braid-representations`, `qftx-ribbon-braid-representations-examples`, `qftx-modular-tqft-sewing`, `qftx-modular-tqft-sewing-examples`, `qftx-chern-simons-bf-gravity`, `qftx-chern-simons-bf-gravity-examples`, `qftx-kz-chiral-interface`, `qftx-kz-chiral-interface-examples`, `qftx-hall-bps-wall-crossing`, `qftx-hall-bps-wall-crossing-examples`, `qftx-categorified-line-operators`, `qftx-categorified-line-operators-examples`, `csm-frontier-polymer-continuum`, `csm-frontier-polymer-continuum-examples`, `csm-frontier-critical-gaussian-rg`, `csm-frontier-critical-gaussian-rg-examples`, `csm-frontier-fluctuation-theorems`, `csm-frontier-fluctuation-theorems-examples`, `csm-frontier-sampling-certificates`, `csm-frontier-sampling-certificates-examples`, `csm-frontier-inverse-gibbs`, `csm-frontier-inverse-gibbs-examples`, `csm-frontier-planar-critical-point`, `csm-frontier-planar-critical-point-examples`, `csm-frontier-rare-event-numerics`, `csm-frontier-rare-event-numerics-examples`, `qsmx-quantum-double`, `qsmx-quantum-double-examples`, `qsmx-hall-categorification-spin`, `qsmx-hall-categorification-spin-examples`, `qsmx-transport-and-drude`, `qsmx-transport-and-drude-examples`, `qsmx-quasifree-gases`, `qsmx-quasifree-gases-examples`, `qsmx-transverse-ising-spectral`, `qsmx-transverse-ising-spectral-examples`, `tgrx-gaussian-wedge`, `tgrx-gaussian-wedge-examples`, `tgrx-regulated-second-law`, `tgrx-regulated-second-law-examples`, `tgrx-focusing-boundary`, `tgrx-focusing-boundary-examples`, `tgrx-finite-code-holography`, `tgrx-finite-code-holography-examples`, `tgrx-ads-effective-boundaries`, `tgrx-ads-effective-boundaries-examples`, `tgrx-topological-entropy-models`, `tgrx-topological-entropy-models-examples`, `tgrx-jt-disk-model`, `tgrx-jt-disk-model-examples`, `tgrx-research-boundaries`, and `tgrx-research-boundaries-examples`.

The 14 unrelated item-level mismatches are:

- `thm-nrqmx-periodic-flux-spectrum` (1 vs computed 3), `pthm-nrqmx-flux-ring-spectrum` (3 vs 4), `ex-nrqmx-flux-half-crossing` (4 vs 5);
- `post-nrqmx-finite-mode-light-matter-model` (5 vs 1), `def-nrqmx-finite-mode-g2-statistic` (6 vs 2), `pthm-nrqmx-jaynes-cummings-blocks` (6 vs 2), `pthm-nrqmx-beam-splitter-count-statistics` (6 vs 2), `pthm-nrqmx-finite-mode-loss-channel` (7 vs 2), `ex-nrqmx-jc-vacuum-rabi` (7 vs 3), and `ex-nrqmx-single-photon-antibunching` (7 vs 3);
- `def-qftx-scaling-cocycle` (10 vs 8), `prop-qftx-scale-cocycle-law` (11 vs 9), `thm-qftx-truncated-rg-ode` (11 vs 9), and `ex-qftx-truncation-landau-pole` (12 vs 10).

The full-run `batch-dependency-levels.mjs check` also reports `Stale batch dependency levels`. Its recomputed batch-21 entry remains level 2 with prerequisites `19` and `20`, matching the recorded row, but the shared input hash differs after the current batch manifests were populated. The shared schedule and other batches were left unchanged for the owner to reconcile after the run manifests are current.

## RN notation identification

The RN scalar statement explicitly identifies the supplier metric mass parameter by (M=m), carries the supplier charges (q_e,q_m), and uses (t=x^0). The final Step 1 record was refreshed after this interface clarification and is current.
