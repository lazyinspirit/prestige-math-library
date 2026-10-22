# Batch 70 authoring notes — two-dimensional Wick limits

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `70` · role: beta · assigned pair: `qftx-constructive-wick-two-dimensions` / `qftx-constructive-wick-two-dimensions-examples`

## Plan and design reconciliation

The current plan, `plan-spec.json`, the detailed QFT frontier design, and the batch-70 scaffold agree on the A/B page IDs, title, category, mathematics library, page prerequisites, and planned core inventory. The owner-radiation overlay manifest was byte-identical to the pre-authoring batch manifest (SHA-256 `dcc5048c…`); no plan/design conflict was found. The assigned page prerequisites remain `qftx-reflection-positive-limits`, `qft-ir02`, and `qftx-analytic-prerequisites`; the pair's batch dependency level is 1, with prerequisite batches 59 and 69.

The detailed design plans the cutoff definition, Wick L² theorem, interaction contract, and the B counterexample. Two A-page mathematical suppliers were added before their consumers because the planned suppliers did not themselves discharge these local steps: `lem-qftx-finite-cross-wick-covariance` supplies the finite Gaussian coefficient identity, and `lem-qftx-two-dimensional-covariance-log-integrability` supplies the heat-kernel representation and explicit local/tail bounds. The dependency order is acyclic and is recorded below.

The design describes compact smooth test functions. The L² theorem is stated for bounded measurable compactly supported tests so the interaction contract can apply it to `1_Λ` for bounded measurable regions. The proof supplies joint measurability and the local logarithmic majorant for this larger test class. Its proof route remains the planned one: derive the massive two-dimensional covariance kernel and its logarithmic local integrability, combine the finite Gaussian Wick cross-covariance with mollifier convergence, and pass to the mixed L² limit by dominated convergence. The mollifier covariance estimate is proved by an explicit log-envelope bound rather than leaving the required uniform control implicit.

The interaction item is a definition/specification of future obligations. It does not claim cutoff uniform integrability, normalization convergence, an interacting continuum measure, an infinite-volume Schwinger hierarchy, or reconstruction. The B counterexample is the planned elementary warning that L² convergence alone does not bound exponential normalizers. It retains the planned Axiom-of-Choice and Countable-Choice context, while its interval construction uses no selection.

The item and page inventories are 5 A items and 1 B item, within the 100-item page cap. All six items have `domain: mathematics`, `library: mathematics`, and null physical scope; all dependencies are mathematical premises.

## Interfaces and dependency levels

The page-level dependency record still gives batch 70 level 1 and batches 59 and 69 as prerequisites. Current item levels were recomputed over the complete run graph, including the out-of-batch supplier levels:

| Item | Level | In-run supplier establishing the level |
|---|---:|---|
| `lem-qftx-finite-cross-wick-covariance` | 0 | None |
| `def-qftx-two-dimensional-wick-cutoff` | 2 | `thm-qftx-tempered-massive-gaussian-field` (batch 59, level 1) |
| `lem-qftx-two-dimensional-covariance-log-integrability` | 3 | Gaussian-field theorem (batch 59, level 1) and local cutoff definition (level 2) |
| `thm-qftx-two-dimensional-wick-l2` | 4 | Finite cross-Wick lemma (level 0) and covariance-log lemma (level 3) |
| `def-qftx-p-phi-two-construction-contract` | 5 | Wick L² theorem (level 4); batch-69 Euclidean-limit and reflection-positivity suppliers are also used |
| `cex-qftx-l2-not-exponential-control` | 6 | Construction contract (level 5) |

Current `loadStep1Record` / `step1Decision` checks report ready, current records for the consumed batch-59 massive Gaussian-field theorem and the batch-69 Euclidean-limit definition and reflection-positivity-limit proposition. The inspected batch-69 free reflection-positive proposition and tempered tensor-product lemma also have current ready records; they are page context, not additional direct batch-70 item edges. These readiness records establish current authoring inputs, not independent proof approval.

The complete current Gaussian-field supplier has the real centered tempered Gaussian distribution, AC and `m>0` hypotheses, covariance multiplier `( |p|² + m² )⁻¹`, and inverse-transform factor `(2π)⁻²` used here. The batch-69 reflection-positivity limit supplier requires a common positive-time algebra and fixed-test distributional convergence; the construction contract preserves those conditions and does not infer clustering or uniform-order growth from reflection positivity. The published `qft-ir02` prerequisite was inspected at its finite-dimensional interacting-measure definition. It does not construct a continuum field measure or establish cutoff removal. It is retained as the declared page prerequisite and is not a cross-batch row because it is outside this run's batch ownership.

`research/physics-non-fluid-129-2026-10-21-r2-batch-70.cross-batch-dependencies.json` contains six `verified` edges: two page prerequisites and four item-to-supplier edges into batches 59 and 69. Each records a scoped interface/readiness check, not independent acceptance. There are no unresolved prerequisite edges or cycles.

## Sources and coverage

Both A and B pages cite two independent treatments. The relevant full-text material was inspected in:

- Stephen J. Summers, [A Perspective on Constructive Quantum Field Theory](https://arxiv.org/pdf/1203.3991), §3 opening and §3.1, PDF pp. 9–12. It supports the Euclidean massive covariance, Wick-ordering and finite-volume tilt context, and reports qualified infinite-volume construction branches. Its survey statements are not used as substitutes for the local Wick-limit or interaction proof.
- Barry Simon, [The P(φ)₂ Euclidean (Quantum) Field Theory](https://api.pageplace.de/preview/DT0400.9781400868759_A26063613/preview-9781400868759_A26063613.pdf), Chapter I, §1.1, publisher preview PDF pp. 24–33 (printed pp. 4–13). The complete relevant preview section, including its Gaussian and Wick definitions and Theorem 1.3 coefficient argument, was inspected. The preview is not the complete monograph and does not establish the local two-dimensional kernel estimate or continuum interaction construction.

The coverage file records each harvested result's disposition, supported item, limitations, retrieval attempt, and fetch stamp for both pages. `coverage-checklist` reports 2 pages, 14 harvested results, 0 errors, and 0 warnings. `source-fetch-check --stamp` reports 4/4 page-source entries fetch-verified and resolved, with 0 newly stamped; the four entries refer to two unique full-text source bodies. Both source bodies have complete recorded successful retrieval attempts. There was no retrieval failure, so the five-retry recovery protocol and source-dropping path were not triggered, and no `source_resolution` failure disposition is applicable.

## Proof contracts and readiness

The proof-contract file covers all four proof-bearing items: the finite cross-Wick lemma, covariance-log lemma, L² theorem, and B counterexample. Each contract was generated from the final numbered argument and includes exact supplier-section excerpts, mapped facts and steps, standard boundary dispositions, finite checks, and a risk review. Definitions have no proof contract because they make no proof claim.

All six assigned items have current Step-1 records marked `ready`, with their exact direct dependencies and item hashes. The proof-bearing items pass strict proof-contract validation. Readiness records do not grant independent proof acceptance.

## Scoped checks and external workspace findings

Final scoped results:

- `proof-layout.mjs` on the six explicit items: 6 items, 11 steps, 0 defects.
- `proof-contract.mjs --strict`: 4/4 proof-bearing items, 0 errors, 0 warnings.
- `precheck.mts` through the workspace `tsx-run.mjs`: all 4 proof-bearing items pass.
- `content-policy.mjs` on the batch-70 manifest: 6 items, 0 errors, 0 warnings.
- `rendercheck.mjs` on the six items and two pages: 8 files, all math and frontmatter checks pass.
- `depcheck.mjs --items-file` for the six assigned items: selected item checks and prerequisite cycle checks pass.
- Full-run item-level calculation has no batch-70 errors and returns the six levels above. At the latest run snapshot it also reports 130 empty scaffold inventories and one out-of-scope label mismatch (`ex-gr-fx14-1`, recorded level 3 versus computed 4); these belong to other batches.
- `proof-contract-coverage.mjs` cannot complete its run-wide inventory because the unrelated frontier page `qsmx-modular-equilibrium` has an empty or invalid inventory. The batch-70 manifest itself has a proof contract for every proof-bearing item, and strict validation passes for all four.
- `batch-dependency-levels.mjs check` reports the shared run-level input hash as stale after in-flight manifest authoring. Its computed batch-70 row remains level 1 with prerequisites 59 and 69. The shared scheduling record is left for the owner/drained construction join to refresh.

No assigned mathematical prerequisite is missing and no item is escalated. The unrelated run-wide inventory findings above remain visible for owner/workspace reconciliation; they do not change the batch-70 interfaces or readiness records.
