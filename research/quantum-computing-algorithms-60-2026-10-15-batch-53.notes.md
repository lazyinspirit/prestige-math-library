# Batch 53 authoring notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: beta; batch: 53  
Pair: `quantum-sampling-expectation-and-monte-carlo`  
Dispatch scheduling input SHA-256: `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`  
The run-level scheduling label is dependency level 14; prerequisite batches are 1, 2, 3, 4, 8, 14, and 37.

## Inventory, placement, and dependency levels

The A page contains 15 authored items and the companion B page contains two worked/counterexample items. The A page remains below the 100-item cap. New local suppliers were placed before their consumers: `lem-qa-29-independent-trial-median-bound` proves the one-sided finite median tail; `lem-qa-29-certified-natural-logarithm-series` proves the rational logarithm remainder and termination used by the finite confidence schedule; `lem-qa-29-dyadic-parameters-terminate` proves the exact dyadic parameter searches terminate.

| Level | Items |
|---:|---|
| 0 | `def-qa-29-expectation-estimation-task`; `lem-qa-29-independent-trial-median-bound`; `lem-qa-29-certified-natural-logarithm-series`; `lem-qa-29-dyadic-parameters-terminate` |
| 1 | `thm-qa-29-classical-mc-chebyshev-baseline`; `thm-qa-29-counting-is-indicator-expectation` |
| 11 | `def-qa-29-coherent-sampler` |
| 12 | `lem-qa-29-coherent-sampler-outcome-law`; B: `cex-qa-29-unavailable-coherent-sampler` |
| 22 | `alg-qa-29-amplitude-counting-consumer` |
| 23 | `alg-qa-29-quantum-expectation-estimation` |
| 24 | `alg-qa-29-variance-aware-monte-carlo`; `thm-qa-29-quantum-expectation-error-cost` |
| 25 | `lem-qa-29-positive-mean-dyadic-estimator`; B: `ex-qa-29-bernoulli-expectation` |
| 26 | `thm-qa-29-variance-aware-guarantee` |
| 27 | `thm-qa-29-coherent-query-cost-translation` |

The final batch manifest was rebuilt from item frontmatter and body statements. A scoped graph calculation using current run manifests and current source labels computed all 15 A-item levels above with no cycles or batch-53 level mismatch. The labels use the current actual batch-37 levels (phase estimator 19; median/counting algorithms 20; corresponding guarantees 21; median query cost 22), batch-8 levels (controlled access 6, inverse access 7, unit-vector density 1), and batch-14 circuit-cost model level 10. The new local log and median lemmas have no in-run suppliers, so their level is 0.

The `plan-spec.json` A/B page rows have the correct IDs, order 2270/2271, category, companion, and `requires` lists, but both `items` arrays are empty. The current authored inventory is in the batch-53 manifest and the A/B library pages; no shared plan was changed.

## Plan and design reconciliation

No separate design section was found for this pair, as the dispatch states. The current controlling track material is QA29 in `research/quantum-algorithms-planning/sections/qa_r5.md` and OP3 in `research/quantum-algorithms-planning/operational-contracts.md`.

The variance-aware carrier follows OP3's construction: coarse centering, positive/negative parts, dyadic half-open bands, the explicit omitted-tail bound, the stronger QA13 mean-dependent error profile, fresh median repetitions, and separate copy/reflection/circuit costs. Its `M` condition `M²a² ≥ 10⁶k` is exactly the power-of-two condition `M ≥ 1000√k/a`. The local certified logarithm lemma proves the rational partial sum, remainder bound, and termination. The exact supplied-unitary variant has zero encoding/rotation approximation error and fits OP3's reserved `ε′/8`; a compiled variant inherits the guarantee only after a separate aggregate output-perturbation certificate of at most `ε′/8`.

A controlling-plan conflict remains with the actual QA13 median carriers. QA5 §QA29 specifies the least power of two `M ≥ 4π/ε` and least positive odd `r ≥ ln(1/δ)/(2(8/π²−1/2)²)`. Current actual batch-37 carrier bodies instead specify `M ≥ 88/(7ε)` and the least positive odd `r` with `2^r ≥ (2/δ)^8`; their current levels are 20, 21, and 22, and their Step 1 records are `ready`. The QA29 QAE and positive-mean consumers use the current actual QA13 interface, but controlling-plan reconciliation is still open. The conflict is recorded in the exact item and page edges in `research/quantum-computing-algorithms-60-2026-10-15-batch-53.cross-batch-dependencies.json`; no alternative QA13 circuit or acceptance was invented.

The classical comparison is carried as theorem `thm-qa-29-classical-mc-chebyshev-baseline`, rather than a definition: its claim is a proved mean/variance/failure bound and cost calculation. Counting is only the uniform-indicator expectation specialization; the QA13 counting routine and its guarantee remain the only counting algorithm/theorem.

## Mathematical scope and proof route

The expectation task distinguishes exact observable encoding from a task targeting an approximate encoded observable. The coherent sampler is an explicit finite unitary input with sample/value/work registers, inverse and controlled access, reversible value/predicate/rotation circuits, and separately charged preparation, reflection, gates, width, precision, arithmetic and classical processing. Its outcome-law proof computes projective probabilities using the pure-state density carrier, trace pairing and the root Dirac-coordinate identity; it does not depend on `def-qc-povm-probabilities-normalize`.

The bounded-mean circuit rescales to a good-flag probability and invokes QA13. The variance routine uses a fresh coarse sample, proves `||B/4||₂ < 1` on the Chebyshev-good event, estimates each half-open dyadic band, bounds the omitted tail by `a s²`, and applies the locally proved Bernoulli median tail. The variance theorem uses `ε₀=7ε′/8`, so the exact-access proof has room for an optional certified `ε′/8` implementation perturbation without claiming that arbitrary finite-gate compilation is free. Every numbered proof step has an exact supplier fact/step tag; the contracts include exact source excerpts, step maps, boundary worksheets, applicable finite checks, and `axioms: []`.

The three new intermediate proofs are choice-free. The one-sided median lemma derives its mgf bound using only the Bernoulli law, finite product factorization, Markov, scalar exponential/log derivatives, and the mean-value theorem. The logarithm lemma derives the finite `atanh` partial sum and positive tail by differentiation, FTC, integral monotonicity, and geometric-sequence decay. The dyadic-parameter lemma uses Bernoulli's inequality and Archimedean bounds to exhibit successful exact comparisons, after which the finite scans return the least exponent. No result proves its own replacement.

## Source reading and harvest

Three independent full-text sources were reused: Montanaro's paper (`https://arxiv.org/pdf/1504.06987v3`), BHMT (`https://arxiv.org/pdf/quant-ph/0005055`), and Childs's full lecture notes (`https://www.cs.umd.edu/~amchilds/qa/qa.pdf`). The complete relevant Montanaro proofs/routines read were Lemma 1, Algorithms 1–3, Lemma 4, Theorems 3 and 5; BHMT Theorem 12 and its proof; and Childs §19.3, “Amplitude amplification and quantum counting.” The book/lecture-note treatment is Childs §19.3. The B page uses Montanaro and Childs independently.

Every harvested heading and its `included`/`inline` disposition is recorded per A/B source in `research/quantum-computing-algorithms-60-2026-10-15-batch-53.coverage.json`. Full source locators, cache paths, full PDF/text hashes, page counts, prior attempts, and author-read locators are in the sibling `.source-evidence.json`. The scoped `source-fetch-check --stamp` result was 5/5 page/source uses fetch-verified and resolved, with zero newly stamped sources. All successful prior retrievals were reused; there were no failures, searches after failure, retries, drops, or source-level escalations. The source-resolution record therefore says `required: false`.

The two local numerical helper items also carry bibliography URLs already listed by their root logarithm/Archimedean/Bernoulli suppliers, because their `ai-altered` provenance requires reader-visible source URLs. Their logarithm-series remainder and dyadic-search termination are proved in full from the inspected local supplier statements. Those inherited bibliography URLs were not harvested as new source passages or represented here as newly read material.

## Cross-pair supplier state and readiness

The batch cross-pair input records 67 exact edges (57 item edges and 10 required-page edges): 35 verified interface edges and 32 open edges. The seven required-page edges to batches 1–4 or published probability pages are verified at the named interfaces. Three page-level edges remain open: `amplitude-estimation-and-counting` (the QA13 median-parameter conflict above), `controlled-gates-phase-and-entanglement` (batch-8 controlled/inverse carriers are escalated), and `uniform-circuit-families-promise-problems-and-complexity` (the direct query-algorithm supplier is escalated pending a transitive audit).

Current unresolved direct supplier IDs and affected claims:

- `def-qc-controlled-unitary-access` and `def-qc-inverse-unitary-access` (batch 8): the sampler/QAE/variance claims require explicit controlled and inverse access, including charged controlled value-rotation/reflection operations. Their actual bodies are present, but Step 1 remains escalated because required QC page prerequisites remain draft/open. Affects the coherent sampler, QAE algorithm and guarantee, variance algorithm, positive-mean lemma, variance guarantee, and cost translation.
- `thm-qc-unit-vector-projector-is-density` (batch 8): the outcome-law trace proof uses the pure-vector density identity. Its actual body exists, but the Step 1 record remains escalated on the same page prerequisite closure. Affects the sampler outcome law and dependent quantum items.
- `def-qc-circuit-cost-model` (batch 14): the cost rows use separate oracle/gate/width/ancilla/precision/classical coordinates. Its actual body is present, but Step 1 asks for owner reconciliation of gate count, depth, width, ancillas, oracle queries, and classical costs against QC09 supplier proofs. Affects the sampler, QAE/variance cost claims, and cost translator.
- `def-qa-quantum-query-algorithm` (batch 25): fresh finite repetitions are required for the median algorithms. Its body is present at level 16, but its current Step 1 record says 23 transitive supplier bodies and 38 root transitive statements/proofs were not fully reread in that handoff. The QA29 counting consumer also inherits this blocker through `alg-qa-13-counting-from-amplitude-estimation` → `def-qa-13-amplitude-estimation-task` → this query-algorithm definition. No completeness is inferred from the definition alone.
- `alg-qa-13-median-confidence-estimation`, `thm-qa-13-median-confidence-guarantee`, and `thm-qa-13-median-confidence-query-cost` (batch 37): current carriers and Step 1 records are present/ready, but their exact schedule conflicts with controlling QA5 §QA29 as stated above. Affects the QAE median interface and positive-mean band confidence/cost claims.

The Step 1 recorder stores readiness for A-page `items`; it does not index a B page's separate `examples` array. All 15 A-page items have hash-bound Step 1 records: `ready` for `def-qa-29-expectation-estimation-task`, the three local lemmas, `thm-qa-29-classical-mc-chebyshev-baseline`, and `thm-qa-29-counting-is-indicator-expectation` (6 total); `escalated` for `def-qa-29-coherent-sampler`, `lem-qa-29-coherent-sampler-outcome-law`, `alg-qa-29-amplitude-counting-consumer`, `alg-qa-29-quantum-expectation-estimation`, `alg-qa-29-variance-aware-monte-carlo`, `thm-qa-29-quantum-expectation-error-cost`, `lem-qa-29-positive-mean-dyadic-estimator`, `thm-qa-29-variance-aware-guarantee`, and `thm-qa-29-coherent-query-cost-translation` (9 total). The two B examples, `cex-qa-29-unavailable-coherent-sampler` and `ex-qa-29-bernoulli-expectation`, are assessed as escalated on the same unresolved suppliers; their manifest and proof-contract dependencies are complete, but separate Step 1 records cannot be written through the current recorder because they are carried under `examples`, outside its A-item registry. This is a recorder-scope handoff to the owner. These are authoring readiness records only, not acceptance, publication, or independent review.

## Check log

Final scoped validator outcomes after the manifest and proof-contract sync:

- `coverage-checklist`: 2 pages, 14 harvested results, 0 errors, 1 warning. The A page has 4/11 harvested results scaffolded; the remaining seven have item-specific `inline` dispositions with written mathematical and scope reasons. The warning explicitly requests Alpha confirmation of those declines and remains open for review.
- `manifest-deps`: 15 A-page items, 0 normalized, 0 errors.
- `content-policy`: 15 scoped A-page items, 0 errors, 0 warnings.
- `proof-contract --strict`: 17/17 A/B items, 0 errors, 0 warnings; the regenerated contract maps each numbered proof step once and quotes exact current supplier sections.
- `source-fetch-check --stamp`: 5/5 page/source uses fetch-verified and resolved, 0 newly stamped.
- `precheck`: 12 proof-bearing items, 0 failures.
- `proof-layout`: 15 scoped item files, 59 numbered proof steps, 0 defects.
- `rendercheck`: 19 changed item/page files; KaTeX expressions and frontmatter parsed, 0 errors.
- Scoped dependency-level recomputation: 17 target A/B items, 123 in-run closure items across 60 manifests; no cycles or target label mismatches.
- `step1-decisions record`: all 15 A-page items recorded with direct dependencies; 6 ready and 9 escalated. B examples are not indexed by this recorder, as described above.
- Cross-batch input audit: all 57 direct in-run item edges and all 10 required-page edges match the current batch manifest exactly; the recorded edge states total 35 verified and 32 open.

No tests were added or run. One earlier accidental `node tools/depcheck.mjs --help` invocation ignored `--help` and ran an unscoped read-only check; its output was excluded and not used. No further unscoped dependency check was run.
