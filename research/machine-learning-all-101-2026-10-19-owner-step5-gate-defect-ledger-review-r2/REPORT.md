# REJECT — final external review cycle 2

Reject the exact revision2 proposal manifest SHA-256 `c14c2399151040c3533e80317ad13ad7d6c2672cfb98d7995e1f6ad1158680ad`. One blocking consumer-level integrity defect remains. Do not install these frozen candidate bytes as approved.

| Candidate target | Exact proposed SHA-256 |
|---|---|
| WORKFLOW.md | 1b9f3ea0bf2c12b8270aa0ea07f4926352c0cc8dd76f91b4c8e21309a6b8d046 |
| tools/step3-close.mjs | fbee4688ecd0f738ebeb2c5412367e0fa94696b55f7719b95433e0f9a06518b9 |
| tools/step3-native-ledger-successor-history.mjs | 3fb165924acc154062f5d6b3159924d436c3f9cd6466f977b92e116528ec57de |

## Blocking finding R2-1: restoring the original count bypasses native-history authentication

At candidate `tools/step3-close.mjs:129`, the native successor helper is called only when the selected ledger count/hash differs from the frozen original. Removing all 11 selected native taxonomy successors restores the exact 317 originals and original hash. The condition is then false, so the helper never executes. The full real Step3 verify consumer returns success with all 1,313 artifact slots while the completed native append inventory is missing. The seven published-subject successors remain outside that selection and receive no helper authentication either.

This is a real consumer failure, not a hypothetical hash collision or a defect in the direct helper's checks. `consumer-bypass-probe.mjs` preserves production code and every artifact/provenance function, redirecting only canonical-ledger reads to an isolated regular-file variant with those 11 records removed. Candidate `step3-close verify --root ACTUAL_REPO --run RUN` exits 0 and prints `verified 1313 frozen artifact(s)`. No live ledger was edited. The direct helper correctly rejects missing successors when invoked; its call-site guard defeats that protection in this boundary case. The author probe always invokes the helper directly for mutations and therefore does not cover this bypass.

The requested invariant requires all 18 exact original/successor pairs and authentic completed native provenance to remain checked for this installed continuity route. Permitting the later native append to disappear is not an acceptable narrowing. Ordinary validation of records that remain cannot establish the presence of records that were deleted.

Required final repair: in verify mode for this exact ML run, authenticate the exact native successor history even when the ordinary original count/hash already matches. Reuse that authenticated result for historical comparison if needed. Preserve close/default behavior and other runs. Do not add a blind filter, relax the 18-entry inventory, rewrite rows or historical receipts, or weaken current schema/ownership/adjudication checks. Final consumer regressions must reject removal of all 11 selected successors and all 18 successors, as well as the existing one-row, tamper and false-attribution cases. Root will audit and verify that final repair; there is no third external review cycle.

## Verified strengths and retained evidence

The core helper is otherwise narrowly bounded: all 18 original and successor object hashes, six actual provenance carriers, same-subject backward supersession, original semantic/evidence fields and execution-time successor dates are checked. The original closure and native report/pack/prompt/result/immutable attempt are pinned; no self-authored certificate or replacement history is used. The ordinary current row validator is unchanged. The exact WORKFLOW update describes the intended limitation accurately, but the consumer currently does not enforce it at the original-hash boundary.

- All 14 frozen manifest files and three installed-revision1 baseline guards match. Original/preinstall baselines are retained in the frozen inventory.
- Independent cause calculation: 549 current run rows, 328 selected Step3 rows, 11 selected successors, exactly 317 unchanged original rows with SHA-256 `8fd60e9fbcb4acedb21ae3a4b37d067a08531eee603d5f0bbbe359abed69dcaf`.
- The author's 51-check probe reruns successfully in reviewer-owned copies, including all 36 original/successor object mutations, missing/duplicate rows and changed bound evidence.
- Independent tests reject false owner attribution, invented context, changed adjudication references, false dates, unrelated supersession, moving a successor before its original, an extra draft Step3 row, a tampered published successor, jointly forged result/attempt, fake report context, symlink evidence, caller-prefiltered/reordered rows and changed supplied closure count.
- A deliberately invalid current Step5 row still fails the ordinary current validator. The genuine native collection independently binds the unchanged report, pack and successful native result.
- On genuine drained actual inputs, full candidate Step3 verify passes all 1,313 artifact slots. The exact native ledger argv, without an added `--frontier` option, passes all 549 rows with 0 errors. Installed revision1 independently reproduces `Step-3 defect-ledger rows changed` on the same genuine inputs.
- Despite those positive results, the isolated all-11-removal consumer case passes incorrectly and blocks approval.

Exact native ledger arguments tested: `check --run RUN --adjudications research/RUN-judge-adjudications.jsonl --reader-decisions research/RUN-step5-alert-decisions.jsonl --closure research/RUN-judge-closure.json`, using disposable isolated candidate tool copies. These were read-only diagnostics, not an engine gate battery or new gate permission.

The authentic global ledger hash throughout review is `2f5cbb92ae9d9e2aa1b0a00732fa1d8a2931e04c64f81cb3d1faa51d08ca18d9`. All 74 missing fatal mappings are now genuinely recorded by the native owner; the old conditional templates remain uninstalled. The revision1 approval and installed repairs remain intact. Review changed no live code, source, ledger, provenance, closure, certificate, control or native history. Root retains final integration, paused reload, current recertification and complete ordinary gates after repair.
