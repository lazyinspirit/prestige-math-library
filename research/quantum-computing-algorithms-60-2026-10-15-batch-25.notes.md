# Batch 25 — Computational Problems, Promises, and Cost Models

## Authoring result

The owner’s current authoring release was read and followed. It releases the old prerequisite planning hold for full native draft authoring; the earlier hold-only note in this file was stale and has been replaced. Original native result and prompt evidence were left unchanged (result SHA-256 `48605027d8a271ace9ff1588464c3c5573d957c2c059974b20705d89dd7fee03`; prompt SHA-256 `de8a08d956330a29e94d33cd186a40d0ace864c9249947b6e7ecd174d45bb463`). All authored content remains draft.

The assigned 13 A-page contracts and one B example are present. I added `def-qa-finite-branch-output-law` to the A page because the QC acceptance-law supplier is not a sound proof interface for intermediate instrument branches. The A page now contains 14 items and the B page one example; both are below the 100-item cap. The pages, batch manifest, contracts, coverage, cross-batch evidence, and Step-1 records are current for this handoff.

## Design and plan reconciliation

The generated task says `design: none found`, but the current QA design has a complete `## QA01 — Computational problems, promises, and cost models` section in `research/quantum-algorithms-planning/sections/qa_r1.md`. I followed that section. Its scope agrees with the assigned page order and nine `requires` entries. `plan-spec.json` still has an empty item list for this page; the audited QA01 export supplies the original 13 A items and one B example. The local output-law helper is an added A-page prerequisite, not a replacement or omission of an original contract.

The standard oracle is the total-function XOR action. A previous draft sentence incorrectly implied that its inverse needs separate black-box access. Since `U_f^2=I`, an inverse call is exactly one ordinary XOR-oracle call; the item and composition theorem now state and use that fact. Controlled access remains an explicitly granted operation. The proof cites the actual `thm-qc-reversible-xor-oracle-unitary` body.

All nine page-level prerequisite pages are present: the polynomial-hierarchy, finite-probability, and effective-numbering pages are published; the six QC pages remain draft. The used item-level interfaces are listed with their actual bodies in the cross-batch dependency file. Draft status is not treated as mathematical acceptance.

## Inventory and dependency levels

The A page now has 14 items and the B page one. Levels below were recomputed from the audited 896-item QA/QC proposal inventory, current run manifests, current source `deps` where their frontmatter parses, and proposal dependencies as fallback for malformed source envelopes. The local QA01 helper is included. The graph has no cycles.

| Item | Level |
|---|---:|
| `def-qa-task-and-promise-domain` | 0 |
| `def-qa-expected-query-cost` | 0 |
| `def-qa-input-encoding-and-size` | 1 |
| `def-qa-finite-branch-output-law` | 11 |
| `def-qa-promise-query-instance` | 15 |
| `def-qa-classical-query-algorithm` | 16 |
| `def-qa-quantum-query-algorithm` | 16 |
| `def-qa-bounded-error-promise-correctness` | 17 |
| `def-qa-classical-bit-cost` | 17 |
| `def-qa-exact-promise-correctness` | 17 |
| `def-qa-nonoracle-gate-cost` | 17 |
| `def-qa-classical-query-complexity` | 18 |
| `def-qa-quantum-query-complexity` | 18 |
| `thm-qa-promise-preserving-query-reduction-composition` | 19 |
| `ex-qa-promise-and-cost-models` | 19 |

The current run-wide item-level check sees 120 pages and 597 item IDs, with 96 errors (54 empty page inventories and 42 level-label mismatches elsewhere in the run). It reported no dependency-level errors for these 15 assigned carriers; their computed levels match the labels above. No other pair’s page or item was changed.

The current shared batch-level artifact records level 11 and prerequisites `1, 2, 3, 4, 8, 9, 10, 13, 14`, with input hash `0a95c4a44134577565e84ceb1dd2a084be199ec061454f0e140e89b6149cf2d5`. The generated task embeds the older hash `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85` and prerequisites `1, 2, 4, 9, 10, 14`. `batch-dependency-levels.mjs check` cannot establish current freshness: it stops parsing an unassigned QC source at `items/lem-qc-clifford-t-determinant-one-approximants.md:28`, where the unquoted source title contains a colon. I did not edit that item or the shared batch-level artifact. The cross-batch file records the current artifact snapshot and batch row.

## Sources and supplier review

The A-page coverage reuses the preserved full-text fetch histories for three independent primary treatments: de Wolf’s 239-page *Quantum Computing: Lecture Notes* (query model, expected Simon sampling cost, and query/gate separation); Childs’s 191-page *Lecture Notes on Quantum Algorithms* (query model, uniformity, and resource accounting); and Preskill’s complete 64-page Chapter 6, “Quantum Algorithms” (standard XOR query and measured circuit examples). The complete relevant passages were inspected locally; their results are contextual corroboration, not substitutes for local arguments. Coverage records 19 harvested results and dispositions. `source-fetch-check --stamp` passed 6/6 sources with zero new stamps; there were no retrieval failures, recovery retries, or source-resolution dispositions to add.

The 21 direct cross-pair suppliers are present and their actual statements or complete used proofs were inspected; the cross-batch JSON records each interface and hypothesis. The transitive in-run closure contains 44 present suppliers and no missing carriers. Thirteen remaining transitive supplier bodies and 38 root transitive statements/proofs still need a complete reread; their IDs and immediate consumers are recorded in `research/quantum-computing-algorithms-60-2026-10-15-batch-25.cross-batch-dependencies.json`. The original Step-1 escalations conservatively recorded 23 unread transitive bodies before several additional checks were completed. I preserved those escalation records rather than overwriting them; current cross-batch evidence narrows the remaining unread set to 13.

Two QC proof defects were found but are not used by this pair after adding the local output-law proof:

- `thm-qc-povm-probabilities-normalize`, step 1.1, calls `M_a rho M_a` nonnegative from its quadratic form without establishing self-adjointness, which the cited definition requires.
- `thm-qc-projective-measurement-outcome-law`, step 1.1, makes the same omission for `P_a rho P_a`; self-adjointness follows from `P_a*=P_a` and `rho*=rho` but is not stated there.

The local `def-qa-finite-branch-output-law` instead proves branch normalization using finite instrument weights and conditional states, then proves terminal basis marginals by summing diagonal weights in a complete orthonormal basis. It does not depend on either QC theorem.

## Readiness and checks

Step-1 records were written without `--owner`: the task definition, expected-query-cost definition, and input-encoding definition are `ready`; the other 12 assigned items are `escalated` because their transitive source-body audit is incomplete. Every assigned claim remains present with its complete local argument or worked verification; no dependent claim was dropped. The exact source follow-ups and affected consumers are in the cross-batch record.

Scoped checks completed:

- `precheck`: 4 proof-bearing items passed.
- `proof-layout`: 15 items, 29 steps, 0 defects.
- `proof-contract --strict`: 15/15 items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 2 pages, 19 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 6/6 resolved, 0 newly stamped.
- Focused `depcheck`: 15 items and 2 pages, 0 errors, 0 warnings.
- `content-policy`: 15 scoped items, 0 errors, 0 warnings.
- `rendercheck`: 17 assigned item/page files, 0 errors, 0 warnings.

The run-wide `step1-decisions check` is blocked before it can summarize records by another malformed supplier item, `items/thm-qa-19-measurement-distribution.md:29` (unquoted locator containing a colon). The 15 batch-25 decision files exist; three are ready and twelve are escalated as recorded above. I did not edit that item or any other pair.
