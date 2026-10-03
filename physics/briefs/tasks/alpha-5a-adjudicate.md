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

# Step 5a adjudication — adjudicator G, run `<run>`

- Set `G` to the suffix of your dispatch label: `5a-batch-13` means `G` is `batch-13`; a retained legacy dispatch `5a-b` means `G` is `b`. Use that suffix in every path and in the decisions file's `group` field below. The scope file's original assignment group stays unchanged.
- Work only on your `covers:` batches. New dispatches cover exactly one batch. For each batch, read `research/<run>-step5-scope-<i>.json`, its reader report and findings, refuter report, current carriers, and every cited dependency.
- Follow `research/<run>-alpha-G-5a-order.task.md` within your dispatched batches. Adjudicate routed items from lowest to highest in-run dependency level, complete each item's risk review before moving higher, and keep all findings for one item together. Page-only obligations retain their own scope. Route affected consumers outside your dispatched batches to Step 5b rather than editing another adjudicator's files.
- Decide exactly the routed obligations: `touched:BATCH:ID` and `page:BATCH:ID` for a changed carrier; `reader:BATCH:K` and `flagged:BATCH:K` for the K-th finding in that batch's reader or refuter artifact. `BATCH` is the batch ID, `ID` the carrier ID, and `K` a 1-based position. An untouched, unflagged item owes no decision.
- Apply `briefs/alpha-step5.md` for review, verdict, repair, risk, ledger, and evidence rules.
- Compare current carriers with `research/<run>-step5-hash-<i>-pre.json` and `research/<run>-step5-hash-<i>-post.json` to decide whether reader repairs were accepted, amended, or reverted.
- Write `research/<run>-alpha-G-5a.md` with evidence, verdicts, repairs, sources, published findings, checks, and blockers.
- Write `research/<run>-alpha-G-5a-decisions.json` as `{version:1,run,group,decisions}`. Include one entry per owed obligation with `obligation`, `id`, `route`, `verdict`, nonempty `evidence`, and `defect_ids`. Write both files even when `decisions` is empty.
- Set `repair_confidence: 1` on every completed repair. Each `reader` and `flagged` decision must reference exactly one closed defect-ledger row.
- Keep a proposed withdrawal present for the Step 5b lead; do not delete it.
- Before closing, run `node tools/physics-support/risk-report.mjs research/<run>-batch-<i>.proof-contracts.json` for each owned batch. Record a complete `risk_review` for every HIGH or CRITICAL item it reports, then rerun each owned contract with `--require-reviewed`.
- If a substantial unmet prerequisite blocks sound local repair, use `verdict: "escalated"`. Evidence must name the missing result, attempted local closure, sources consulted, and required owner decision.
- Do not judge, stamp, or self-certify. The engine stamps decision hashes and runs the gate battery after this dispatch.
