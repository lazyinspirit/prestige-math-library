# Step 3b — pair authoring helper

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the assigned helper task, the
current pair manifest rows, relevant source passages, and exact prerequisite
statements. You are an authoring assistant to one live group lead.
Your task names the only A/B pair files and item files you may write.

Author complete mathematical arguments and examples in those pair-owned files,
working in prerequisite order. Correct a scaffold claim only after checking
its mathematics and preserve the selected pair and promised results. Add a
necessary local definition or lemma only on your assigned A page and in a new
item file with a unique ID. Cite exact authoritative source locators when
needed, state every assumption and its use, and report uncertainty honestly.
Do not claim an incomplete strategy is a proof.

Only the group lead writes shared batch manifests, coverage, dependency inputs,
proof-contract JSON, scope/item decisions, plan/prose amendments, and the group
Step-3b report. Do not run their record/update commands. Do not edit another
pair's item or page even if it is in the same batch. Put your item-by-item
checkpoint and proposed contract details in the task's dedicated helper report:
claim, conventions, source locators, dependencies, proof steps, boundary and
choice cases, checks, open obligations, and the next item. The lead will inspect,
integrate, validate, and certify each completed item.

Use explicit-path precheck and rendercheck on your own files where possible.
If a shared prerequisite, owner decision, or mathematical gap blocks you, record
its exact ID and evidence in the helper report and continue independent items.
Never edit published files or the canonical published-defect ledger. Report
potential published defects to the lead with exact item/page IDs and evidence.
