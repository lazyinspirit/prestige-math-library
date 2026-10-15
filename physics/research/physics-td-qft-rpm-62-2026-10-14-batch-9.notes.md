# Batch 9 notes — Potentials And Responses

Run `physics-td-qft-rpm-62-2026-10-14`, role beta, batch 9. This batch owns only `td-potentials-and-responses`, its examples page, and batch 9 evidence. These records document Step 1 authoring and readiness; they are not independent proof approval.

## Plan, design, and inventory

The owner direction and complete design section at `research/plan-thermodynamics-track.md` L138 were read before authoring, together with its read-only baseline source inventory and the TD5 row of `baseline-claim-map.json`. The design assigns order 275, the `thermodynamics` category, the `physics` library, nine named A items, an A cap of 35, a B cap of 16, and `td-representation-and-equilibrium` as the sole page prerequisite. The current `research/plan-spec.json` and batch 9 manifest add four mathematical pages: `line-integrals-and-the-gradient-theorem`, `mixed-partials-taylor-and-extrema`, `the-fundamental-theorems-of-calculus`, and `the-riemann-integral`. The current plan controls this conflict; no shared plan or manifest outside batch 9 was edited.

The active run dependency file gives batch 9 page dependency level 3 with batches 1, 2, and 8 as incoming batch edges. The assigned A page itself requires `td-representation-and-equilibrium` plus four imported mathematical pages; direct item dependencies on batch-1 and batch-2 assumptions create the other two in-run batch edges. In-run item levels were recomputed from current valid run records after the dependency edits; out-of-run suppliers do not raise these levels:

| Item | Level |
|---|---:|
| `lem-tdmath-euler-identity-for-degree-one-homogeneous-function` | 0 |
| `lem-tdmath-smooth-partial-legendre-transform-differential` | 0 |
| `def-td-legendre-potentials` | 7 |
| `pthm-td-potential-differentials` | 8 |
| `pthm-td-euler-and-gibbs-duhem` | 9 |
| `pthm-td-maxwell-relations` | 9 |
| `def-td-isentropic-compressibility` | 7 |
| `pthm-td-reservoir-minimum-principles` | 8 |
| `pthm-td-useful-work-bound` | 8 |
| `pthm-td-heat-capacity-relation` | 10 |
| `pthm-td-compressibility-capacity-ratio` | 11 |
| `pthm-td-joule-thomson-chart` | 10 |
| `ex-td-response-chart-failure` | 7 |
| `ex-td-nonzero-isothermal-work-loop` | 7 |

The A page contains 12 items, including the two locally proved mathematical prerequisites and the local definition of isentropic compressibility. The B page contains the two planned constructed examples. Both pages remain within their reserved caps (A: 35, B: 16) and the hard 100-item cap. Page inventories, item frontmatter, and the batch manifest agree.

## Inspected dependencies and unresolved proof status

The batch 8 `pthm-td-local-energy-representation` carrier is present in its manifest. Its current Statement gives a local C2 energy representation and the exact derivative interface used by batch 9. The interface matches the conditional uses in the potentials definition, potential differentials, Euler/Gibbs-Duhem statement, and isentropic compressibility definition. Its current proof invokes the registered batch 4 `thm-tdmath-local-implicit-rank` draft for a C1 local graph and then derives C2 regularity from the C2 entropy assumption. The batch 4 item and proof were inspected, as was its current Step 1 record: it is ready for initial authoring after scoped checks but remains a draft for independent mathematical review. The batch 8 local-energy theorem has an escalated Step 1 record for that proof-status dependency. Neither Step 1 record is proof acceptance.

All batch 9 consumers preserve the current local-energy interface conditionally. The ten physics definitions/theorems whose dependency closure reaches that supplier are recorded `escalated` pending the supplier proof review; the complete local arguments remain on the assigned page. Owner action: independently review or repair the registered `thm-tdmath-local-implicit-rank` on the batch-4 A page and then refresh the batch-8 local-energy proof status. The two local mathematical lemmas and two constructed B examples have no dependency on that unresolved result.

The Euler/Gibbs-Duhem result has a separate model-assumption gap. `post-td-bulk-additivity` permits a scaled tag `c^(lambda)` and explicitly does not identify it with `c`; `post-td-concave-fundamental-entropy` scales entropy between those tags. Neither states same-tag degree-one homogeneity of the energy representation. The theorem and its proof therefore add that exact local premise and remain escalated. Batch 8 already has the countermodel `cex-td-tagged-scaling-not-fixed-type-homogeneity`; batch 9 links it only as context and does not use it as a proof supplier. Owner resolution would require either a fixed-tag homogeneity postulate on `td-entropy-foundation` with explicit chart hypotheses, or an owner decision to retain the Euler/Gibbs-Duhem claim only in its current conditional form. No other pair's supplier was authored here.

Other physical inputs were inspected at their actual current Statements/Postulates and used at the stated strength: the first-law work-on sign convention, the isolated-compound second law, the attained entropy-maximum postulate, SI units, and the whole-system response-function definitions. Reservoir results state the ideal bath, pressure store, and work store bookkeeping explicitly. The Joule-Thomson theorem proves a chart derivative only; it does not infer a throttle energy balance or cooling observation.

## Mathematical prerequisites and proof scope

The imported math pages are read-only. Their pinned local page hashes were checked against `research/math-imports.json`; the relevant exact Statements and complete proofs were inspected: `thm-gradient-theorem-for-line-integrals` and line-integral definitions, `thm-clairaut-schwarz-mixed-partials`, `thm-newton-leibniz-with-interior-derivative`, and `thm-continuous-implies-integrable`. The imported product/chain calculus result `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` was also checked against its pinned source page. The page hashes recorded during inspection are: line integrals `2d25b741b55f337ad72f68ca1f7d3cc4cfcd8cc14c0ad11bdb08a03b139b6200`, mixed partials `8e86482b9353551003a6091901c21fae597a10e2bb53ae25937f03aaf0dadce4`, FTC `0badecf50ab8eab1e8d75ee4e11ea8674f4187727bb7654512cf47f1a2a3d2b3`, Riemann integration `a961c90dbaa6ec2313f57ef18e36da47607ab144fa791d77ebfe114aa72a1f74`, and derivative sum/product/composition rules `e8825cb15da19a66cd443e2e2ae91b044609f073f4aecdf6975792b16c5dd9f3`.

The local math lemmas are mathematics-domain items with only mathematical dependencies. The Euler lemma now requires homogeneity on an open interval around scale 1, which is the exact condition needed to differentiate the radial identity. The partial Legendre transform lemma assumes a C1 inverse chart and proves its differential and C2 regularity; it makes no global inversion claim. The physical results state their natural-variable charts, fixed coordinates, units, positivity, local regularity, and excluded singular boundaries. The examples are stipulated model calculations and report no measurement.

## Source research and disposition

The A page has two active, independent full-text book treatments:

- Daniel Arovas, *Thermodynamics and Statistical Mechanics*, complete author-attributed LibreTexts sections §§2.7, 2.8, 2.10, and Appendix II §2.15. These support local potentials, differentials, Maxwell relations, response coefficients, and the Joule-Thomson derivative. Each active HTML source has a `source-fetch-check` stamp.
- Jeremy Tatum, *Heat and Thermodynamics*, complete author-attributed LibreTexts sections §§12.4, 12.5, 12.6, 13.3, and 17.6. These independently cover potential differentials, Maxwell relations, Gibbs work, heat-capacity responses, Joule-Thomson, and Gibbs-Duhem. Each active HTML source has a `source-fetch-check` stamp.

The B page also records Arovas and Tatum context for its constructed examples. The coverage file maps each source section to the assigned item and gives each harvested result an explicit disposition. `coverage-checklist` reports two pages, 62 harvested results, and no errors or warnings.

The MIT 8.333 Lecture Notes 3–4 and the University of Edinburgh Topic 8 notes were opened and read in full. The fetch checker exhausted the allowed five retries after failing to count their compressed PDF page trees with `mutool`. Each is documented as dropped from active fetch evidence only, with the full retrieval history and complete item-level local arguments/dependencies in `source_resolution`. The sources' content was not rejected. A CUNY Manifold chapter candidate was opened but its key equations were embedded as inaccessible image resources, so it was not used; a complete Tatum HTML treatment was read instead. The earlier direct UCSD Arovas PDF open timed out; Arovas's complete HTML sections were retrieved and used. No result was dropped without alternate coverage.

`source-fetch-check --stamp` verified 12 of 17 source records; the remaining five are documented drops. Check mode resolves all 17, and the structural source-resolution validator reports zero errors. The active A-page treatments remain Arovas and Tatum.

## Checks and readiness

The strict proof contracts cover all 14 assigned items. Their exact supplier excerpts, actual numbered steps, step inputs, boundary dispositions, and constructed-example finite checks are in `research/physics-td-qft-rpm-62-2026-10-14-batch-9.proof-contracts.json`.

Final scoped check results:

- `author-check.mts RUN 9`: pass. Precheck passes 12 proof-bearing items; the two definitions are not applicable. Rendercheck passes all 16 item/page files; content policy passes 14 items; strict proof contracts pass all 14 entries.
- `proof-contract.mjs --strict`: pass; 14/14 entries, zero errors and warnings. Scoped `proof-contract-coverage` passes for the 14-item batch 9 manifest, with all 12 proof-bearing items covered. The full-run coverage command stops on the unrelated missing carrier `ex-tdmath-hard-core-attractive-shell` named by batch 14.
- `proof-layout.mjs` on every explicitly changed item: pass; 14 items, 43 steps, zero defects. The direct renderer invocation initially failed to resolve the neighboring app's `@/components` alias. Re-running with the existing temporary resolver in `/private/tmp` passed without modifying the app checkout.
- `coverage-checklist.mjs`: pass; two pages, 62 harvested results, zero errors and warnings. Source-resolution validation reports no errors.
- `source-fetch-check.mjs` check mode: pass; 12/17 fetch-verified and 17/17 resolved, with five documented drops.
- `manifest-deps.mjs`: pass; 14 items, zero missing dependency arrays. `content-policy --manifest-only --authored`: pass; 14 items. Focused `depcheck` passes all 14 assigned IDs, their 643-item dependency closure, and 155 prerequisite pages with zero errors or warnings.
- Focused in-run item-level recomputation: pass; 536 valid item records across 100 nonempty pages, no cycles, and all 14 batch 9 manifest levels match. Run-wide `item-dependency-levels check` remains nonzero because 28 other pages have empty inventories and six unrelated TD items have stale levels: `pthm-td-stable-tempered-free-cube-grand-pressure` (4, computed 6), `pthm-td-controlled-continuum-thermodynamic-limit` (5, 9), `pthm-td-controlled-thermodynamic-ensemble-duality` (4, 6), `pthm-td-interacting-three-ensemble-local-limit` (5, 10), `pthm-td-qualified-van-hove-and-exterior-limit` (5, 7), and `ex-td-volume-sized-external-field` (6, 8). No error names a batch 9 item.
- `batch-dependency-levels.mjs check`: reports stale shared dependency-level evidence. The current recomputed batch 9 row remains level 3 with `requires: [1,2,8]`. Other current rows differ from the recorded graph in batches 16 (`[1,2,15]` vs `[15]`), 18 (`[4,6,12,14,17]` vs `[6,12,14,17]`), 19 (`[1,11,12,15]` vs `[11,12,15]`), and 57 (`[37,40,42,51]` vs `[51]`). The shared run dependency-level file was left untouched under the owner-only state boundary.
- `step1-decisions.mjs check --run RUN`: full run remains open at 536 items, 219 ready, 317 item decisions not closed, and 28 empty pages. Batch 9 has four closed `ready` records (the two local math lemmas and two examples) and ten `escalated` records for physical items whose dependency closure reaches the unaccepted local-energy proof. Euler/Gibbs-Duhem also records the unsupplied same-tag homogeneity premise. These are authoring readiness outcomes, not independent approval.

No measurements or statistical inference are asserted. Readiness records are authoring evidence only and do not constitute independent approval.
