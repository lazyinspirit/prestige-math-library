# Step 3b — item adjudication

- Audit one item at a time, in prerequisite order, across your assigned A/B pairs. Record each outcome before moving on. Read current Step-3a decisions first.
- Be unbiased and honest about your understanding. For unfamiliar mathematics, search authoritative web sources and read the complete relevant arguments; citations and confidence are not proofs.
- Examine the claim, proof strategy, assumptions and all relevant dependencies: published and planned library items, within-pair suppliers and other frontier batches. Follow actual proof uses and well-definedness obligations, including implicit uses. Check the necessary clauses, not every unrelated item on a prerequisite page.
- Accept a sound item with adequate, met prerequisites. Repair locally only with 100% confidence, then check and record `repaired`. Otherwise record `escalate` with the precise uncertainty and source-reading attempts. Do not retry that item or send it to another reviewer; the owner resolves it.
- Keep accepted items unchanged. Owner-repaired items go directly to the final gate; do not adjudicate them again. A changed item or dependency invalidates the affected decision.
- Edit only assigned scaffold contracts, coverage and notes. Add necessary local definitions/lemmas before consumers. Escalate changes requiring broader scope, shared plan/prose edits, pair mergers or published-proof edits. Do not drop claims to obtain acceptance.
- State AC where used, declare its dependency and propagate the assumption; preserve genuinely choice-free and incompatible-axiom branches. Never use Recorded results to prove their replacements.
- Record examined dependency IDs with each decision, including implicit suppliers. Maintain consumer-batch inputs under `briefs/tasks/frontier-dependency-ledger.md`, including same-group cross-batch edges. Record newly discovered published defects in the canonical consumer ledger or owned notes for reconciliation; unrelated published debt does not block a sound new supplier.
- Run dependency, scope, policy, coverage/source and plan checks. Record actual results in a concise group report. Local repairs and owner repairs need no additional mathematical recheck; all items must still pass the final mechanical gate.
- Refresh coverage-decline records with `node tools/scope-decisions.mjs refresh --run RUN --group GROUP`. In your group's scope-decisions JSON, justify each current decline with `stands` and evidence, or record the actual owner ruling as `owner-decision`. Escalate unresolved scope; never invent an owner ruling.
- Never use `--owner`. Re-read only decisions invalidated by changed content; do not overwrite a current escalation or owner decision.

```bash
node tools/step3-decisions.mjs record-item --run RUN --item ITEM_ID --decision accept --confidence 1 --dependencies '["SUPPLIER_ID"]' --reason "Checked claim, dependency clauses, sources and report path"
node tools/step3-decisions.mjs record-item --run RUN --item ITEM_ID --decision repaired --confidence 1 --dependencies '["SUPPLIER_ID"]' --reason "Applied repair, checks and report path"
node tools/step3-decisions.mjs record-item --run RUN --item ITEM_ID --decision escalate --dependencies '["SUPPLIER_ID"]' --reason "Exact uncertainty, attempted source reading and owner action; report path"
```


---

# This dispatch

run: phase-2-catchup-24
role: alpha-high
label: step3b-e-0bdb6fe2701bc5b0
covers: 10, 11

# step3b: group e

- Run: phase-2-catchup-24
- Batches: 10, 11
- A pages: haar-measure-existence-and-uniqueness, blocks-defect-groups-and-the-brauer-homomorphism, kac-moody-algebras-from-generalized-cartan-matrices
- Read current manifests, coverage, prose, plan and dependency records.
- Write research/phase-2-catchup-24-step3b-e.md.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
