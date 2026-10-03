# Physics content contract

This is a physics-workspace assignment. Read SCHEMA.md, CLAUDE.md, and
../PHYSICS-CONTENT-MODEL.md. The class-specific rules below override mathematical
proof-only wording in the inherited task:

- Use domain and library classifications, and dependency_roles on local items.
- postulate (post-): explicit adopted assumption, sources and physical_scope;
  review formulation, scope, sources, non_derivation. No proof required.
- experiment (exp-): reported setup, procedure, observations, uncertainty,
  interpretation and empirical_result. Review every field against retrieved
  source text. Do not fabricate observations or prove measured outcomes.
- physical-theorem (pthm-) and thought-experiment (texp-): identical complete
  conditional proofs, explicit physical_scope, and inherited empirical_premises.
- Mathematical items retain all ordinary mathematical proof obligations and
  cannot depend on physics. Imported mathematical items and pages are read-only.
- Nonproof item contracts use physics_review fields with verdict and concrete
  evidence as specified in SCHEMA.md; do not create fictitious proof worksheets.
- Relations (support/testing/motivation/replication/challenge) are not deps.
- Changes to Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications change the public physical interface and require direct-consumer review. Proofs, citations, and audit stamps alone do not propagate.
- Write only in this workspace. Never modify the root math engine, tools,
  briefs, items, or library. Any genuine math supplier defect is an escalation.

## Required experimental-evidence guidance

Before authoring, reviewing, judging, or adjudicating physical content, read
../PHYSICS-CONTENT-MODEL.md, especially "Statistical evidence and the double-slit
example". Apply its author/judge/adjudicator instructions to every statistical
claim. Separate theoretical distributions, finite observed data, and statistical
inference. Finite agreement does not prove a physical framework, and a rare
outcome or missing visible fringe does not automatically falsify one. Classical
waves also interfere: identify the specific competing model and apparatus
assumptions. Never invent sample sizes, uncertainties, p-values, or power.
Confidence in a source review or conditional proof is not certainty that a theory
is true. Carry sampling and measurement qualifications into downstream claims.

---

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
