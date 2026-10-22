# Batch 86 — Quantitative DLR uniqueness, concentration and spatial response

- Run: `physics-non-fluid-129-2026-10-21-r2`
- Role: beta
- Page pair: `csm-frontier-quantitative-dlr` / `csm-frontier-quantitative-dlr-examples`

## Scope and plan reconciliation

Only this A/B pair was authored. The detailed design is in `research/frontier-expansion-2026-10-19/classical-statistical-mechanics/prose-scaffold.md` under the quantitative DLR heading. Its scope is retained: a complete finite-volume coupled heat-bath comparison argument, resolvent bounds, finite-range spatial decay, and the finite-volume-to-infinite-volume susceptibility limit. The design explicitly does not infer analyticity or coexistence from the Dobrushin condition. The plan row and current manifest agree on both page IDs, titles, category, library, companion, order 869/870, and the requirements `csm-gibbs-lattice` and `csm-frontier-probability-interfaces`. `plan-spec.json` leaves the item arrays empty; the detailed design supplies the three A reservations and the B leaf.

The published `lem-csm-gibbs-response-covariance` covers the log-partition/variance identity for the field-coupled observable. It does not state the sitewise derivative for an arbitrary local observable needed in the susceptibility proof. I added `lem-csm-frontier-finite-response-covariance` on A, with a complete quotient-rule proof from finite sums and only mathematical dependencies. It is level 0 because it has no in-run supplier. The other levels follow the in-run DAG: matrix definition 0; comparison theorem 1; susceptibility theorem 2; B example 2. A scoped recomputation finds no cycle and matches every declared level.

The design title includes “concentration” but its reserved theorem claims concern uniqueness, spatial decay, and susceptibility. To cover the title without inventing a new concentration theorem family, the susceptibility item includes the finite-volume spatial-average variance bound and its Chebyshev consequence, proved from the absolute covariance row sum. The statement limits this to variance/Chebyshev concentration and explicitly makes no exponential-concentration, analyticity, or coexistence claim. No observation or measured precision is asserted.

The Dobrushin coefficients use half-total-variation, `1/2` times the sum of absolute probability differences, as in the local definition and maximal-coupling supplier. Friedli–Velenik displays the full sum convention; the factor-of-two convention difference is recorded in the definition and comparison source locators. The Ising field parameter is dimensionless `lambda=beta h`; spins are dimensionless, `J` and `h` use energy units, and `beta` has inverse-energy units.

## Inventory and dependency levels

| Item | Page | Level | Direct `deps` |
|---|---|---:|---|
| `def-csm-frontier-dobrushin-matrix` | A | 0 | `def-csm-lattice-gibbs-specification` |
| `lem-csm-frontier-finite-response-covariance` | A | 0 | `lem-csm-finite-gibbs-variational-identity`, `thm-derivative-of-exponential`, `thm-algebra-of-derivatives`, `thm-chain-rule` |
| `thm-csm-frontier-dobrushin-comparison` | A | 1 | `def-countable-choice`, `def-csm-lattice-gibbs-specification`, `def-csm-frontier-dobrushin-matrix`, `lem-csm-maximal-coupling-and-heat-bath`, `thm-bolzano-weierstrass`, `thm-csm-dobrushin-finite-range-uniqueness`, `thm-geometric-series` |
| `thm-csm-frontier-high-temperature-susceptibility` | A | 2 | `def-countable-choice`, `def-csm-finite-range-lattice-interaction`, `def-csm-lattice-gibbs-specification`, `def-csm-frontier-dobrushin-matrix`, `lem-csm-frontier-finite-response-covariance`, `lem-csm-gibbs-response-covariance`, `lem-csm-lattice-specification-consistency`, `thm-csm-dobrushin-finite-range-uniqueness`, `thm-csm-frontier-dobrushin-comparison`, `thm-newton-leibniz-with-interior-derivative`, `thm-geometric-series` |
| `ex-csm-frontier-ising-explicit-contraction` | B | 2 | `def-csm-frontier-dobrushin-matrix`, `lem-csm-ising-influence-bound`, `thm-csm-frontier-dobrushin-comparison` |

The in-run supplier subsets are: matrix definition and response lemma have none; comparison uses the matrix definition; susceptibility uses the matrix definition, response lemma, and comparison theorem; the B example uses the matrix definition and comparison theorem. The dependency-level recomputation below uses only these in-run suppliers, per the run rule; all remaining direct and transitive dependencies are existing mathematical suppliers.

All item dependencies are mathematical. The A page still requires the current-run probability-interfaces page and the earlier `csm-gibbs-lattice` page. The latter is an earlier page prerequisite, not an in-run cross-batch edge. The only declared in-run cross-batch edge for batch 86 is A page → `csm-frontier-probability-interfaces` in batch 85. `research/physics-non-fluid-129-2026-10-21-r2-batch-86.cross-batch-dependencies.json` records that exact edge as `verified`, with evidence limited to the inspected authored interfaces and current Step 1 records.

## Supplier readiness and interface checks

Before treating the probability-interfaces page as available, I inspected its A/B carriers and the exact local-topology definition and cylinder-weak-equivalence proof used in its interface. `loadStep1Record` and `step1Decision` report all nine batch-85 item records `ready` with current hashes. Some records are owner-authored and some are not; neither draft status nor those records is treated as independent proof acceptance. The earlier published Gibbs-lattice page and the mathematical item statements/proofs used directly by this pair were also inspected. No missing or stale supplier input remains for the assigned claims.

After all carrier, manifest, contract and scoped-check edits, I used `node tools/physics-support/step1-decisions.mjs record` without `--owner` for each of the five batch-86 items. Each record is `decision: ready`, `owner: false`, and includes its direct dependency IDs and evidence reason. A fresh `loadStep1Record`/`step1Decision` read confirms all five records close against current hashes. The batch-85 A page has eight items and its B page one; a fresh check confirms all nine supplier records are also closed `ready`. These are Step 1 authoring-input records only, not independent proof approvals.

Batch-86 records: `research/physics-non-fluid-129-2026-10-21-r2-step1-def-csm-frontier-dobrushin-matrix.json`, `research/physics-non-fluid-129-2026-10-21-r2-step1-lem-csm-frontier-finite-response-covariance.json`, `research/physics-non-fluid-129-2026-10-21-r2-step1-thm-csm-frontier-dobrushin-comparison.json`, `research/physics-non-fluid-129-2026-10-21-r2-step1-thm-csm-frontier-high-temperature-susceptibility.json`, and `research/physics-non-fluid-129-2026-10-21-r2-step1-ex-csm-frontier-ising-explicit-contraction.json`.

## Source retrieval and coverage

The coverage file records both independent A-page treatments, locators, searches, per-result dispositions and supported items:

- Sascha Friedli and Yvan Velenik, [*Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction*](https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf), full author-hosted 590-page PDF. Read Chapter 3 §3.1, printed pp. 80–82 (finite-volume Gibbs weights), and Chapter 6 §6.5.2, printed pp. 268–271 (coefficients, oscillations, Theorem 6.31, Lemma 6.34 and proof, Proposition 6.33 and proof). The finite response derivative is proved locally.
- Patrick Rebeschini and Ramon van Handel, [*Comparison Theorems for Gibbs Measures*](https://arxiv.org/pdf/1308.4117), full 55-page paper PDF. Read §§2.1–2.3, including Theorem 2.4 and Corollary 2.6, and §§3.1–3.3, including the coupled-update proof and Neumann-resolvent comparison.

`source-fetch-check --stamp` verified the already recorded full-text stamps: Friedli–Velenik 5,787,460 bytes, 590 pages, SHA-256 prefix `f0b9d564210f487c`; Rebeschini–van Handel 492,828 bytes, 55 pages, prefix `5df16281b38a776e`. There was one successful retrieval attempt per source, no failed retrieval, no source drop, and no `source_resolution` entry was needed. The coverage harvest accounts for all eight selected source results: finite Gibbs definition and qualitative uniqueness already published; the local response lemma and coupled-update route incorporated inline; the Dobrushin definition and comparison corollary included; the dusting lemma/proposition marked out-of-scope with reasons. A locator error that had associated §6.12.2 with Theorem 6.31 was corrected after checking the book: §6.12.2 is the proof of Theorem 6.5, while Theorem 6.31 and its uniqueness proof are in §6.5.2.

The coverage checker reports one advisory low-yield warning (`2/8 harvested results scaffolded`) and no errors. The other harvested results have explicit published, inline, or out-of-scope dispositions; no extra items were added to inflate the count. The source file retains that checker warning for the later Alpha confirmation.

## Proof and finite-check notes

The comparison theorem proves the finite estimate by a common-site maximal coupling, a stationary subsequential limit of Cesàro averages, the disagreement inequality, and a nonnegative Neumann series. The statement includes full finite-range kernels as well as a uniform finite one-site influence radius. Thus each finite-volume marginal and every update kernel depends on only finitely many exterior coordinates; the stationary-coupling selection is piecewise constant over finitely many boundary patterns, so the exterior integration is measurable. The infinite estimate follows by exhausting the lattice and bounding paths to the exterior by geometric tails. Countable Choice is explicit and used through the DLR existence/uniqueness supplier.

The susceptibility proof first bounds finite-volume spin covariance by the comparison estimate, transfers it to the unique DLR state, and sums the row/path tails uniformly on the parameter interval. The finite observable-response lemma supplies the derivative of the local magnetization. Uniform convergence of finite-volume magnetization and covariance sums, followed by Newton–Leibniz on compact subintervals, gives the derivative formula. The spatial-average variance and Chebyshev bounds follow from the absolute covariance row sum. These are conditional mathematical deductions, not experimental or statistical inference claims.

The proof contract records finite sanity checks, not substitutes for the proofs: a two-state response derivative (`0.64` versus centered-difference `0.6400000000517103`); a two-site resolvent check `D(I-C)=I` with `Db=(8/15,2/15)` and a checked discrepancy `1/2 <= 8/15`; and the two-neighbor one-dimensional Ising conditional-TV check for `beta J=0.2`, `h=0.3`, including `max TV=0.19549030353827324 <= tanh(0.2)=0.197375320224904`, row bound `0.394750640449808<1`, and average variance `0.598687660112452 <= 0.8261057894742574`. No measured data are represented.

## Scoped checks and remaining shared-run blockers

- `precheck.mts` on the five items: 4 proof-bearing items checked, 0 failures; the influence-matrix definition has no proof body.
- `proof-layout.mjs` on the five changed items: 5 items, 20 steps, 0 defects.
- `rendercheck.mjs` on the five items and both pages: all 7 passed YAML parsing and math rendering.
- `content-policy.mjs` on the batch manifest: 5 scoped items, 0 errors, 0 warnings.
- `depcheck.mjs --items-file ...`: all 5 selected items passed; prerequisite checks covered 425 items and 381 pages.
- `proof-contract.mjs --strict`: 4/4 proof-bearing items, 0 errors, 0 warnings. The contract includes exact supplier statement excerpts, actual proof steps, boundary cases and the finite checks above.
- `source-fetch-check --stamp`: 2/2 sources fetch-verified and resolved, 0 drops. Coverage checklist: 0 errors, 1 low-yield advisory warning as described above.
- Scoped in-run dependency-level recomputation: all 5 items match levels 0/0/1/2/2; no cycle.

The required full-run item-level command currently reports 130 errors outside this batch: 124 empty scaffold inventories and six unrelated declared/computed level mismatches (`ex-gr-fx14-1` 3/4; `lem-nrqmx-finite-symplectic-implementers` 2/1; `thm-nrqmx-finite-mode-bogoliubov` 3/2; `thm-nrqmx-gaussian-covariance-uncertainty` 4/3; `ex-nrqmx-single-mode-squeezing` 5/4; `cex-nrqmx-infinite-mode-vacuum-warning` 4/3). It reports no dependency-level error for a batch-86 item. The full-run batch-level check reports the shared dependency-level file stale after the batch-86 manifest was materialized; its batch-86 row remains level 1 with `requires: ["85"]`. The shared run graph was left to the owner. An earlier global `git diff --check` also reported whitespace at the out-of-scope files `items/def-td-phase-and-coexistence-domain.md:97`, `items/def-td-thermodynamic-limit-contract.md:63`, and `items/rem-td-nonsmooth-phase-scope.md:61`; I did not edit those files. A final in-scope evidence scan found no trailing whitespace, mismatched manifest carriers, or invalid JSON.

These authoring records close Step 1 input readiness only. Independent proof review, adjudication and later gates remain separate.
