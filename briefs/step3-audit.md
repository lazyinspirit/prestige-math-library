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
