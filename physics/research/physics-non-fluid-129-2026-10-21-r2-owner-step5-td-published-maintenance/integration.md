# Existing maintenance APIs and honest boundary limitations

This is read-only source analysis, not an instruction already executed. Helper module preimages are retained under `preimages/tools/physics-support/`. A separate root-assigned route reviewer is investigating the smallest guarded integration correction. Root owns integration timing, tool changes, native transitions, formatting/metadata recertification, receipts, and canonical ledgers.

## Actual ownership and local published-repair API

`tools/physics-support/published-repairs.mjs` is the existing ownership CLI. From repository root, a future actual owner can invoke:

    node tools/physics-support/published-repairs.mjs claim --run physics-non-fluid-129-2026-10-21-r2 --id ITEM --group OWNER --root physics

From `physics/`, the executable is `../tools/physics-support/published-repairs.mjs` and `--root .` selects this workspace. The helper serializes a run-local lock, computes the actual pre-edit `itemHashGuard`, and appends a version-1 row to `research/RUN-step3-published-claims.jsonl` with `run,id,group,pre_sha256,claimed_at`. A different existing group prevents ownership; the same group returns “already owns” without revalidating a fresh preimage. Root must therefore inspect existing claims and preserve the exact current pre-edit carrier before relying on a claim. The helper's filename and claims namespace retain historical Step-3 naming even when used for Step-5 repair ownership. The helper itself checks existence but does not verify published status: the policy verifier does. `claim-observation.json` records that this run's claims file was absent at observation. This review has not acquired ownership or made a claim.

The same helper's `append --run RUN --file ROWS.json --root physics` appends actual repaired/escalated rows to `research/RUN-step5-published-repairs.jsonl`; rows need `kind:repaired|escalated,id,group,found_via`. The helper binds pre-edit claims for genuine Step-3 rows only. Appending an object is bookkeeping, not proof acceptance or permission to violate a frozen native pack.

`tools/physics-support/published-repair-policy.mjs` exports `recordedPublishedRepair(root,id,text,receiptPath)`. For a local published proved carrier it requires a genuine `version:1,kind:recorded-local-published-repair` receipt with:

- actual `id,run,group,correction,recorded_at`;
- current canonical `content_sha256=itemHashGuard(current text)` (whole verification block excluded);
- durable actual `before_file`, its raw `before_raw_sha256`, and canonical `pre_sha256=itemHashGuard(before)`;
- a published pre-edit carrier with a genuine prior `verification.audited` or `verification.verified` marker, matching one unique run claim with that group and pre-hash;
- exact canonical `research/published-consumer-supplier-ledger.md` marker text between unique local-published-repair begin/end markers, including the item ID and current canonical hash, with `ledger_marker` and `ledger_sha256` over the exact inter-marker text;
- actual successful explicit-item precheck and rendercheck rows, each with exact command token array, output, exit_code:0, checked_at and current canonical content hash; the checks must be after claim and no later than receipt recording. The precheck output must include `PASS items/ID.md` and `0 failing`; rendercheck must include `OK — 1 file(s)`.

Set the actual changed item `verification.repair` to its real receipt after the correction rather than carrying an old whole-item audit as certification of new bytes. Preserve the original published preimage and historical audit/publication evidence. The module delegates imported original mathematics to its root policy; it grants no physics edit authority over those files. All three necessary candidate items are local physics and have genuine previous verified markers. A read-only proof-layout check is also required after the final actual source edit by the authoring rules; current candidate analysis is not such a pass.

This mechanism records a local correction, not a new publication, whole-item audit, mathematical acceptance, judge verdict, native adjudication or certificate. These research proposals are not receipts and must never be passed off as such.

## Exact source scope after a future legitimate boundary

The necessary source-change set is exactly:

1. `cex-td-noncompact-phase-mixture-no-attained-maximum`: define the existing barycenter term and concrete mean; public clarification, no consumers.
2. `pthm-td-intensive-coexistence-conditions`: precise two-sided feasible accumulation premise and proof; public Statement and physical_scope change.
3. `pthm-td-clapeyron-local`: necessary direct-consumer clarification of that same premise in Statement, physical_scope and F3.

The same scientific reviewer has examined all affected direct, indirect and nonlogical uses. The regular phase rule, zero-jump counterexample, nonsmooth scope remark and the two rank-calculation examples remain sound unchanged. The linear Clapeyron example supplies full feasible intervals already. The two original false positives should remain byte-identical and retain their guarded research explanations. The optional proof-only explanation candidate on the linear example is not required and should not be smuggled into this three-item repair set.

No new prerequisite is needed, no mathematical supplier changes, and no import update is justified. Future actual receipt claims would cover exactly three changed local published carriers. Re-read the current sources and current claims after writers drain; reject stale preimages/candidates, rather than rehashing an unseen source into acceptance.

## Why the existing helper APIs do not yet supply a safe initial-wave intake

The frozen `initial-1.json` includes all 854 frontier IDs and their before-state hashes but has no assignment or rejected tuple for any of the four published judge rejects. Unit 1 is mechanical zero work. `collectAdjudication`'s `validateReports` checks all changes against the frozen before-state: changed original carriers need a genuine assigned repaired review and, for the initial rejected pack, a confirmed decision. The published ownership/receipt policy is not consulted as an exception in that changed-carrier loop. Adding a real published claim and receipt therefore does **not** itself license a mid-wave published source edit against the immutable initial pack. Nothing in the archived current helper source provides a typed owner-published-maintenance intake authenticating those three actual corrections there.

`step5-guard.mjs` separately excludes published repairs from ordinary Step-5 license/certification gates; that exclusion does not erase `collectAdjudication`'s stricter frozen input checks. Root must not infer collection permission from the guard comment or a successful standalone published-policy result.

`consumer-maintenance.mjs` exports `syncMaintenance`, `maintenanceStatus`, `prepareMaintenance`, `maintenanceUnits`, and `collectMaintenance`. It creates single-pass direct-consumer work **after an actual supplier statement event**. Its event shape is `{id,before_statement_sha256,after_statement_sha256}`, optionally explicit `consumer_ids` plus exact `discovery_evidence`. It checks the current after-interface hash and creates obligations, immutable packs, assigned before carriers, three lane tasks, lane reports, collections and completion state. It creates no Step-5 decisions/certificates and cannot itself repair or own an initial defective supplier. Sound consumers must remain byte-identical. Repaired reports need honest current understanding, exact per-event affected use, necessity/minimality, and every changed byte reconstructed from unique sequential surgical edits.

There is also a current published classification mismatch: this module's `frontier()` returns every ID in frozen `frontier.json`, while Step-5 `gateFrontier()` filters published IDs out. Thus the two published intensive consumers (both in batch 1's frozen frontier) become `frontier_events`, not separate maintenance obligations; ordinary Step-5 assignment excludes them. A future supported intake needs to classify actual published carriers as separate maintenance even when their IDs are in the frozen 854, preserving the frozen inventory. No such state change was made here.

`collectMaintenance` also rejects changes to every unassigned carrier across its frozen item inventory. Supplier application and consumer packs must therefore be sequenced and drained; no outside worker may mutate a supplier or parallel unrelated source while a pack expects its immutable before universe. Queueing is not repair authority. The current automatic three-lane partition is not a license to separate scientific ownership of a changed supplier and its consumers; root should preserve this reviewer's same-owner science and keep the necessary dependency-connected repairs together in a guarded integration design.

## Root recommendation

Wait for genuine native writers to drain and preserve original packs, reports and dispatch records. Use a supported typed owner published-maintenance continuation if the route reviewer identifies one; otherwise implement the smallest guarded route before applying sources, or defer the source repairs to a clean maintenance boundary outside the immutable initial collection. The route must authenticate real root authorization, exact current/before carriers, actual ownership claims, three actual local repair receipts, this same-owner affected-use review and actual current scientific work. It must explicitly retain the four original judge rows as published maintenance history while leaving the draft initial tuple inventory unchanged. It must not fabricate a Sol dispatch/result, append synthetic initial decisions, give the mechanical-zero-work report mathematical authority, or change frozen evidence to make hashes match.

After legitimate application and collection, root must perform required current formatting/metadata preparation and all actual native gates; supplier-context changes need fresh current reviews where the engine requires them. An owner research report, local receipt and policy pass do not replace native certification or a current gate. Standalone false-positive reviews need no source change or invented native acceptance.
