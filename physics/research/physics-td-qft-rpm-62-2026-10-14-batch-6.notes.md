# Batch 6 notes — Convex Contact And Mixing

Run: `physics-td-qft-rpm-62-2026-10-14` · role beta · batch 6.

## Plan and inventory

The complete design section and current plan-spec agree on A page `td-math-convex-contact-and-mixing`, companion B page `td-math-convex-contact-and-mixing-examples`, order 270, category `thermodynamics-mathematics`, library `mathematics`, and the required page edge to `td-math-local-pfaff-geometry`. The design reserves 11 named A results, 48 A items maximum, 12 B items maximum, and 100 items as the hard cap. This batch has 25 A carriers (the 11 named results plus local prerequisites/intermediate results) and 2 B examples; no capacity conflict was found. There is no material design/plan-spec conflict to record.

The checked batch dependency input assigns batch 6 dependency level 3 and requires batches 3, 4, and 5. The item manifest records the recomputed per-item levels from the in-run supplier graph. Suppliers are placed before consumers in that graph; no cycle was found in the batch-6 local chain.

## Mathematical scope and qualifications

The A page gives complete conditional arguments under the declared A1–A7, S1–S3, T1–T5, and C1 assumptions. Join-coordinate addition does not imply C1; the B countermodels isolate that gap. The logarithmic B model verifies an internally consistent finite-tag family with positive dimensionless log arguments; it is a symbolic consistency witness, not an observed gas experiment or a universal model claim.

The contact calibrator branch names C1 and T5 explicitly. The arbitrary-family entropy argument uses only finite compositions at a time and AC for simultaneous choices; it asserts no cross-composition comparison. The cost theorem handles unattained infima by approximate witnesses and stability. The cost-offset result assumes no-sinks and proves weak monotonicity only; it makes no no-gap claim.

The cost-offset construction was rewritten to define raw type pairs first. Its separate lemma proves the zero-cost and pair relations are equivalences and discharges representative-independence before the vector-space theorem uses the quotient. The decorated-chain definition has one consolidated interface with explicit product-scaling conventions and no duplicate alternative definition.

## Sources and harvest

The coverage file uses two independent full-text treatments. Lieb–Yngvason’s complete 101-page version 2 and Arovas’s complete 607-page March 2026 draft have prior successful full-fetch stamps reused from earlier batch evidence. The Arovas full-draft reading report supersedes its earlier partial-reading checkpoint; its role here is a physical/context cross-check, not axiomatic proof certification. Coverage records each harvested section and its included, inline, or out-of-scope disposition. No retrieval failure is recorded for this batch.

## Open cross-batch input

The A page’s formal `requires` edge to `td-math-local-pfaff-geometry` remains open, as detailed in `batch-6.cross-batch-dependencies.json`. The supplier page exists and its local rank carrier is currently inventoried with a current ready Step1 hash, but its own required-page chain to `td-math-ordered-composition` remains open and batch-4 notes record transitive compound/finite-sum gaps. No batch-6 proof uses the Frobenius or rank carrier. Keep the page edge open; do not alter the other batch’s items or readiness records.

The B examples depend on the A page, so the companion page inherits this page-level blocker even though its two example arguments are fully authored.

## Check results

- author-check-6 passed all four integrated gates for the 27 assigned items (precheck 22/22 proof-bearing items, rendercheck 29 files including both page files, content-policy 27/27, strict proof-contract 27/27).
- Scoped depcheck: 0 errors and 0 warnings over 27 assigned items and their 516-item / 123-page prerequisite closure; no dependency cycles.
- manifest-deps: all 27 manifest item rows have explicit dependency arrays.
- Coverage checklist: 1 A page, 8 harvested results, 0 errors or warnings. source-fetch-check --stamp: 2/2 source URLs verified, 0 new stamps because the existing successful receipts were reused.
- rendercheck: all 27 assigned item files parse under the renderer's YAML and KaTeX checks. precheck: 22 proof-bearing items checked, 0 failures. proof-contract: 27/27 checked, 0 errors or warnings.
- proof-layout: explicit grouped scans covered all 27 assigned items and 101 numbered steps, with 0 defects. The stock renderer invocation in this Node 26 checkout could not resolve the sibling app's @/ alias and extensionless TypeScript imports. A disposable /tmp resolver mapped those specifiers to the same read-only app web/ files; the actual app parser and ItemBody renderer then passed. The workaround changed no repository or app files; Node printed a module.register() deprecation warning.
- Dependency-level check: all 27 batch-6 item labels match the recomputed levels (maximum 18). The global command exits 1 on other run material: empty inventory rpm-external-charge-examples; downstream level refreshes listed in the cross-batch file; and the unrelated QFT labels post-qft-formal-qed-coefficients (recorded 7, computed 6) and pthm-qft-qed-formal-ward (recorded 8, computed 7). No other pair's items or manifests were changed.

## Step 1 readiness

Five standalone mathematical helpers have current prerequisite carriers (published mathematics and a current ready earlier-run lemma where applicable) and current proof contracts and are recorded ready: lem-tdmath-relative-interior-segment, lem-tdmath-relative-boundary-support, lem-tdmath-unique-support-inward-ray, lem-tdmath-convex-function-local-lipschitz, and lem-tdmath-integral-zero-uniqueness. The other 22 items are recorded escalated after all local authoring because their prerequisite closure reaches stale upstream readiness records.

The exact stale inputs are recorded in the item cross-batch edges and each Step 1 reason. In particular, def-tdmath-tagged-scalable-compound still has an owner-locked ready record whose recorded hash is cc684cf4abe642ef08a7152f37d4ac4b353db30f5b1960657f1bba89832d8c71, while the current hash is 626fc9ba6666a9371153976733832fc35059910dfe11b30cad4df5901aa93717. lem-tdmath-compound-mass-well-defined, thm-tdmath-additive-entropy-representation, and thm-tdmath-infinite-no-sinks-sandwich also have ready records whose hashes are no longer current. Their inspected interfaces match the conditional use, but the records do not certify current readiness. No such record was overwritten.

The five ready item records were refreshed after the final manifest state update. Per the no-overwrite rule, the 22 escalated records remain unchanged; their recorded SHA snapshots predate that manifest-only design_state wording update, while their escalated status and exact stale-prerequisite reasons remain current. These records stay open and do not certify readiness.

The owner must refresh the five downstream thermodynamics item levels listed in batch-6.cross-batch-dependencies.json after resolving the new batch-6 prerequisite edge. The A-page's required Pfaff page edge also remains open; the item readiness records do not close it. Draft completion and readiness are not independent mathematical approval.
