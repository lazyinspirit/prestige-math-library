# Batch 3 authoring and handoff notes

## Governing scope and plan reconciliation

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the batch task, the owner authoring direction, the complete QC03 design row and its surrounding conventions, `plan-spec.json`, the planning exports, and the live batch/dependency evidence before authoring.
- The QC03 track row at `research/plan-quantum-computing-track.md:77` scopes pure states/rays, density operators, ensembles, convexity, purification and Schmidt decomposition. The track conventions require the repository's linear-first inner product and the explicit Dirac translation. The local carriers retain those conventions and keep state operators distinct from their vector/ray presentations.
- The task's page IDs, order 2170, companion, category and six `requires` edges agree with the current plan-spec and current planning page export. The plan-spec row has an empty `items` array as a page-level placeholder; the audited proposed-items export contains 14 A items. Neither proposal contains the local intermediate lemma `lem-qc-complete-effect-family-members-are-effects`. That lemma is needed to pass from the complete positive-family definition to the requested effect-family conclusion in the ensemble/purification theorem. It is included locally on A with its own complete proof; no shared plan was edited.
- The proposed `thm-qc-density-spectral-ensemble` dependency list also includes `thm-non-negative-square-root-exists-and-is-unique`. The finished spectral-ensemble proof uses the positive spectral theorem, trace, the rank-one projector result and rank-nullity, but no square root; this unnecessary direct dependency was omitted. The square-root theorem remains an explicit dependency of the mixed-ensemble purification proof where it is used.
- The prose track plan still carries the pre-integration prerequisite hold at lines 220–237. The newer owner direction explicitly releases that hold for native draft authoring against current suppliers and says those historical pending labels do not impose an operational hold. It controls the stale plan/task prose. No prerequisite proposal, shared plan or engine state was changed.
- The proposed HJW sketches use a square-root/filter route. QC03 instead proves the finite mixed-component correspondence for an arbitrary purification using the finite-dimensional coefficient map and positive square root, and explicitly constructs a complete effect family. The claim remains at least as broad as the planned finite-ensemble scope; the argument and every required supplier are stated in the local theorem.

## Inventory, dependencies and placement

The assigned batch contains 15 A items and one B example. Levels were recomputed from actual `deps` edges across the run, including batch 1 and 2 suppliers; no dependency cycle was found. Batch/page level is 2, prerequisite batches are 1 and 2, and the scheduling input is `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`.

| Item dependency level | Items |
|---:|---|
| 0 | `def-qc-density-operator`; `def-qc-finite-positive-effect-family` |
| 1 | `def-qc-pure-state-and-ray`; `lem-qc-complete-effect-family-members-are-effects`; `thm-qc-density-operator-existence` |
| 2 | `thm-qc-ray-projector-well-defined-and-bijective`; `thm-qc-schmidt-decomposition` |
| 3 | `def-qc-ensemble-and-purification`; `thm-qc-density-spectral-ensemble`; `ex-qc-bell-state-schmidt-reduction` |
| 4 | `thm-qc-ensemble-barycenter-is-density`; `thm-qc-purification-existence-and-unitary-equivalence`; `thm-qc-rank-one-density-operator` |
| 5 | `thm-qc-ensemble-purification-correspondence`; `thm-qc-density-operator-convexity`; `thm-qc-purification-minimal-environment-dimension` |

The Bell example no longer imports the general Schmidt/SVD theorem: it states the finite-sum Schmidt-form criterion inline and verifies the concrete ON families and partial traces directly. Its dependency level remains 3 because it still has in-run batch 1/2 tensor and partial-trace suppliers. The batch manifest has 16 items, below the 100-item page cap.

The cross-batch record captures all six required pages, 32 direct item suppliers (2 from batch 1, 5 from batch 2, and 25 published), and the three inspected transitive batch-2 items `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, and `lem-qc-trace-pairing-nondegenerate`. Every listed supplier body was present and inspected. No prerequisite supplier remains open; these records establish interface inspection, not acceptance.

## Axiom audit

The actual published proof route for the complex spectral theorem and SVD reaches the algebraic-closure/Galois argument and `thm-algebraic-embedding-extension`, whose statement assumes AC and whose proof uses Zorn's lemma. Therefore the six QC03 theorem items that use this route list `def-axiom-of-choice`, state `[A1]`, and mark its use in `axiom_use` and the proof contract:

- `thm-qc-schmidt-decomposition` (through SVD);
- `thm-qc-density-spectral-ensemble` (through the complex spectral theorem);
- `thm-qc-purification-existence-and-unitary-equivalence`;
- `thm-qc-rank-one-density-operator`;
- `thm-qc-ensemble-purification-correspondence`;
- `thm-qc-purification-minimal-environment-dimension`.

Finite basis choices, ON-basis extensions and complement selections within the QC03 proofs are finite and do not independently require AC. The in-run transitive graph also mentions `def-countable-choice` through the full `thm-sequential-criterion-for-continuity` item. Inspection of the exact branch used by `thm-intermediate-value` shows it invokes only the choice-free sequence-to-open-set direction, so ACω is not declared as a premise for QC03. The broader graph edge is not evidence that this proof branch spends countable choice.

## Source reading and disposition

- Watrous, *The Theory of Quantum Information*: §1.1.3, PDF pp. 39–40 (Schmidt decompositions); §§2.1.2–2.1.3, PDF pp. 69–80 (states, ensembles, partial trace and purifications); §2.3.1, PDF pp. 109–110 (finite positive effect families).
- Preskill, *Quantum Computation*, Chapter 2: §2.3, printed pp. 16–22; §2.4, printed pp. 23–25; §§2.5.1–2.5.2 and §2.5.5, printed pp. 27–36.
- de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6: §15.1, PDF pp. 139–140; §18.3, PDF pp. 170–171; Exercise 4, PDF p. 174.
- The full cached PDFs were inspected and the complete relevant arguments read. The source-coverage and source-evidence records give per-page locators, supported items and each included/inline disposition. Watrous PDF SHA256: `c8f30116586435fc265273b09ca2d63f4912a5d4b8901db1ada84b03373c6325`; Preskill PDF: `709a8a52cfbc9afb65ed6fb9dfbd9b59afaa8eac21167cbaf37a43b2555b0d34`; de Wolf PDF: `b797f4165555d28180438586412e7629fecadb94a7ea81c761de8bdfd37a1fc1`.
- `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-3.source-coverage.json --stamp` passed: 6/6 source/page records fetch-verified, 0 newly stamped; 6/6 resolved, 0 documented drops. Existing retrieval attempts were reused; there were no failures or recovery retries, and no source-resolution drop/escalation was needed. All non-imported proof steps and source caveats remain local in the carriers.

## Scoped validation and readiness

The proof contracts were regenerated from the final numbered steps, actual fact uses, boundary references and exact supplier excerpts. The source-coverage, cross-batch, notes, page manifest and proof-contract scope cover the 16 assigned item IDs. QC03 item levels were recomputed from their actual in-run dependencies, including batch 1 and 2; no QC03 level mismatch or cycle was found.

| Check | Result |
|---|---|
| `source-fetch-check --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-3.source-coverage.json --stamp` | Pass: 6/6 source/page records fetch-verified, 0 newly stamped; 6/6 resolved. |
| `node tools/tsx-run.mjs tools/author-check.mts quantum-computing-algorithms-60-2026-10-15 3` | Pass. Precheck: 12 proof-bearing items, 0 failing; rendercheck: all 18 item/page files; content-policy: 16 items, 0 errors/warnings; strict proof-contract: 16/16, 0 errors/warnings. |
| `node tools/proof-layout.mjs` on all 16 assigned item files | Pass: 16 items, 37 numbered steps, 0 defects. |
| Focused `node tools/depcheck.mjs --items-file /tmp/qc03-item-scope.json` | Pass: 16 selected items; prerequisite cycle checks covered 766 items and 169 pages. |
| `node tools/item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` | Run-wide check fails on 240 out-of-scope records: 58 empty scaffold inventories and 182 item-level mismatches. None of the 16 QC03 IDs appears in its errors; their current levels match the recomputed supplier graph. No out-of-scope carrier was edited. |
| `node tools/batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` | Run-wide check cannot complete: YAML parsing stops at an unquoted `John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction` source title (parser line 16, column 14), present in the out-of-scope quantum-error-correction items, for example `items/lem-qc-knill-laflamme-orthogonal-error-basis.md:17`. No out-of-scope carrier was edited. |
| `node tools/step1-decisions.mjs check --run quantum-computing-algorithms-60-2026-10-15` | Run-wide check cannot complete: YAML parsing stops at an unquoted `Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1` title in the out-of-scope QA-19 items, for example `items/thm-qa-19-measurement-distribution.md:29`. A direct hash/readiness check of all 16 QC03 records reports 16/16 closed. |

`node tools/step1-decisions.mjs record` marked every assigned item `ready`, with the item's declared dependencies and `justified_by` interfaces listed in its record. These are authoring-readiness records only; they do not constitute proof acceptance. No unresolved direct or transitive supplier remains within this batch, and no engine state, verdict or shared plan was changed.
