# Batch 48 authoring notes — Quantum Singular-Value Transformation

## Scope, plan, and design reconciliation

This batch owns the A/B pair `quantum-singular-value-transformation` / `quantum-singular-value-transformation-examples`, page order 2260/2261, in `quantum-algorithms`. The A-page inventory has 11 items and the B page has 2 examples, below the 100-item cap. The eight `requires` edges match the task and current `research/plan-spec.json`; both page carriers are draft and list the manifest inventories.

The assignment says “design: none found.” There is no standalone page-design file, but the current audited `research/quantum-algorithms-planning/sections/qa_r5.md` contains a substantive QA24 section and the full plan in `research/plan-quantum-algorithms-track.md` repeats its scope and conventions. I followed that current QA24 design and record the task/design mismatch here. The design fixes the Hermitian-reflection signal convention `W_R`, alternating `U,U*` calls, odd left compression, even right compression with the full domain kernel, endpoint and unmatched-kernel cases, real-part extraction by the coherent `Phi/-Phi` control, and separate access costs. The plan and task page metadata agree.

I corrected one proof defect found during the body audit: the PUE invariant-subspace proof initially said its named ambient blocks exhausted `H_R` and `H_L`. They instead exhaust larger ambient source/output subspaces. The statement and proof now define those ambient direct sums and their residual complements explicitly. The error theorem now proves that isometric rectangular padding preserves the operator norm, invokes the PUE contraction statement for the approximate block, and includes zero in the scalar approximation set. The real-control phase gadget controls only the middle `R_z` rotation; its two controlled-reflection calls remain shared and unconditional with respect to the branch selector.

## Inventory, logical dependencies, and levels

The item levels were recomputed from the current populated in-run manifest graph. Out-of-run suppliers do not raise an item level. The new local lemma `lem-qa-24-qsvt-robustness-amplitude-bound` supplies a complete finite-dimensional proof of the square-root perturbation estimate before the error theorem uses it.

| Item | Level |
|---|---:|
| `def-qa-24-pue-svd-data` | 8 |
| `lem-qa-24-pue-svd-invariant-subspaces` | 9 |
| `def-qa-24-singular-value-transform` | 9 |
| `alg-qa-24-qsvt` | 10 |
| `lem-qa-24-singular-transform-basis-independence` | 10 |
| `thm-qa-24-projector-phase-implementation` | 10 |
| `thm-qa-24-qsvt-query-count` | 11 |
| `thm-qa-24-qsvt-singular-space-action` | 11 |
| `lem-qa-24-qsvt-robustness-amplitude-bound` | 12 |
| `thm-qa-24-real-polynomial-extraction` | 12 |
| `thm-qa-24-qsvt-error-and-resource-bound` | 13 |
| `cex-qa-24-parity-violation` | 10 |
| `ex-qa-24-rank-one-pue` | 12 |

I reconciled five proposed direct edges against the actual proof inputs and recorded the changes in `batch-48.cross-batch-dependencies.json`. The action theorem and real-extraction theorem take an exact phase list and prove the required consequences from the QSP signal definition, exact real completion, and phase factorization; neither needs the end-to-end numerical phase-synthesis algorithm correctness theorem. The error theorem directly proves its operator perturbation, scalar, phase, and resource composition and uses the QA24 query-count proof; it does not use the separate scalar-QSP query-cost theorem or the QA22 combined LCU/product cost theorem. That QA22 theorem has an owner-escalated LCU `SELECT` interface, but no QSVT claim here constructs an LCU or uses SELECT. These removals retain every QSVT claim and avoid importing unrelated phase-generation and SELECT prerequisites.

The definition of the singular-value transform has `justified_by: [lem-qa-24-singular-transform-basis-independence]`. This is the intended local well-definedness proof: the definition first states the SVD formula, then the lemma proves independence of the chosen SVD bases. Dependency levels use the `deps` DAG; the relationship is recorded in the manifest and dependency closure.

## Supplier interfaces and cross-batch reconciliation

All eight required page carriers exist. `inner-product-spaces-and-orthogonality` and `the-spectral-theorem-and-singular-value-decomposition` are published; the finite-dimensional matrix, controlled-gates, circuit-semantics, uniform-family, block-encoding, and QSP pages are draft context. The required page paths, current statuses, relevant hypotheses, direct item excerpts, all 42 in-run transitive suppliers, and 67 published out-of-run foundations are in `batch-48.cross-batch-dependencies.json` and `batch-48.dependency-closure.json`. The transitive QA23 phase-factorization, real-completion, signal-sequence, sequence-unitarity, and convention-conversion proofs were inspected; the current QA23 query-cost and synthesis-correctness carriers also exist and were read when reconciling the proposed edges. Draft carriers are not treated as independent acceptance.

The dispatch recorded scheduling input hash `ad7aab40001758113c6b8fb4959cc4630eefa12ff1d00d1ae158821d7f181259` and prerequisite batches `1,8,9,14,46,47`. The checked-in scheduling sidecar has hash `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`; recomputation from the current manifests gives `6ed2e4b0625ecfbfe0e92c904ad1b2b1ca5c1fe5ec695d058bc196b8f7b06900`, level 12, and prerequisites `1,7,8,9,14,46,47`. Batch 7 enters through the exact one-qubit `H` and `R_z` gate definition used by the projector-phase gadget. `node tools/batch-dependency-levels.mjs check` therefore reports the shared sidecar stale. I left that shared scheduling input untouched for owner refresh; the exact edge and affected items are recorded in the cross-batch evidence.

## Proof route and mathematical conventions

The A page defines the PUE compression of a rectangular map, proves contraction and the full singular-plane/nullspace decomposition, defines basis-independent odd and even transforms, and gives the ordered QSVT circuit. The general PUE proof uses separate domain and codomain subspaces and treats `sigma=0`, `sigma=1`, repeated singular values, unmatched kernels, and residual ambient components. It preserves the repository's root-linear-first inner product and Dirac conversion.

The perturbation proof constructs a finite unitary completion of every contraction, combines two completions with a two-copy rotation, bounds the unitary difference, telescopes the `d` signal factors, and applies the construction twice to obtain `4 d sqrt(delta)`. The error theorem then adds the zero-inclusive uniform polynomial error, normalized block error, and the sum of phase-operation errors. The real-polynomial theorem uses exact complementary completion and phase factorization, proves `U_{-Phi}=conjugate(U_Phi)` in the fixed `W_R` convention, and averages the two controlled branches. If a circuit is translated to the SU(2) convention, the control-dependent scalar from the inspected convention-conversion lemma remains explicit.

No axiom beyond finite-dimensional complex inner-product linear algebra is used; no choice principle is used. The B-page counterexample explicitly shows the zero-map basis obstruction, and the rank-one example verifies the unitary dilation and QSVT block across the entire interval including both endpoints. No significant prerequisite theory or page-capacity issue remains.

## Sources and disposition

Two independent full-text treatments support the A page, including an author-hosted research paper and a complete author-hosted lecture-notes book. The Gilyén et al. 67-page PDF was inspected at Definitions 11–16, Lemma 14, Theorem 17, Corollary 18, Lemma 19, and Lemmas 22–23 (PDF pp. 14–25). Its projected-unitary, singular-space, real-extraction, projector-phase, and perturbation results are recorded per item in `batch-48.coverage.json`; the square-root perturbation claim is reproved locally by a finite completion construction. Andrew Childs's complete 191-page lecture notes were inspected in Chapter 29 §§29.1–29.3 (printed pp. 143–147 / PDF pp. 151–155); they corroborate the Hermitian special case and controlled-phase construction, and are not used as a proof of the general rectangular PUE theorem. The parity counterexample and rank-one finite calculation are verified in their local carriers.

The source-fetch stamp check returned **2/2 fetch-verified, 0 newly stamped, 0 drops**. Both source records reuse their verified QA5 full-text retrieval stamps; no retrieval failed, so no recovery retry or `source_resolution` entry was required.

## Readiness and handoff

All 13 assigned items have complete carriers and page placement, current strict proof contracts, and directly inspected supplier interfaces. All 13 readiness records were written with `node tools/step1-decisions.mjs record`, without `--owner`, and include the examined direct `deps` and `justified_by` IDs. The records are authoring handoffs only; they do not approve or publish draft content.

A later `step1-decisions.mjs check` could not load the run snapshot because of an unrelated YAML parse error in `items/lem-qc-binary-dual-dimension.md:26` (“Missing closing quote”). The assigned records exist, but this global rehash remains blocked until the owner repairs that file. The earlier completed autopilot status read reported the run `running` at `1-scaffold`, held for owner repair/recertification, with no worker in flight. No `.autopilot` run state, shared plan, published content, verdict, or upstream item was edited.

A final native status-refresh attempt returned no output for 60 seconds and was interrupted; it made no state changes. The earlier completed disk recomputation remains the latest readable run status.

The one owner action is to refresh/reconcile the shared batch dependency sidecar against the current manifest hash and batch-7 edge.

## Scoped checks

| Check | Result |
|---|---|
| `node tools/proof-layout.mjs` on the 11 proof-bearing items | Pass; 11 items, 43 steps, 0 defects. |
| Scoped `tools/precheck.mts` on the 13 assigned items | Pass; 11 proof-bearing items checked, 0 failures; 2 definition/algorithm carriers not applicable. |
| `node tools/proof-contract.mjs ... --strict --json` | Pass; 13/13 contracts, 0 errors, 0 warnings. |
| `node tools/boundary-audit.mjs ... --json` | 104 rows, 30 case-specific `not_applicable` rows, 0 template clusters, 0 contradicted candidates. |
| `node tools/depcheck.mjs --items-file /tmp/qa48-items.json --json` | Pass; 13 assigned items, 2 pages, 0 errors, 0 warnings. |
| `node tools/rendercheck.mjs` on 13 items and 2 pages | Pass; 15 files, 0 errors, 0 warnings. |
| `node tools/source-fetch-check.mjs --coverage ... --stamp` | Pass; 2/2 fetch-verified, 0 new stamps, 0 drops. |
| `node tools/item-dependency-levels.mjs check --run ...` | Assigned batch-48 labels match the current in-run graph. The run-wide command exits nonzero on 12 other empty inventories and 10 other stale labels; none names a batch-48 item. |
| `node tools/batch-dependency-levels.mjs check --run ...` | Reports the shared sidecar stale; hashes and the added batch-7 prerequisite are recorded above. The sidecar was not written. |
| `node tools/step1-decisions.mjs check --run ...` | Blocked before readiness rehash by the unrelated malformed YAML at `items/lem-qc-binary-dual-dimension.md:26`; all 13 batch-48 `record` calls succeeded. |

No tests were added or run.
