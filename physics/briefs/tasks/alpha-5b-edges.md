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

# Step 5b — cross-batch audit and closure

- Read `research/<run>-cross-group-edges.json`, the post-5a carriers, and every listed citing/cited item or structural change. An empty computed list is valid.
- Follow `briefs/alpha-step5.md` for the review and repair standard. Logical validity is ground truth; sources and judges can err. Never pretend to understand something you do not; escalate uncertainty to the owner. Keep published content read-only and make only task-authorized repairs.
- For a migrated run, read `research/<run>-checkpoint-import.json` and its source export. Treat original review attribution as historical, not a new review. Preserve the exact published-repair handoff in `research/<run>-step7-published-repairs.jsonl`; its later judgments remain owed.
- If `research/<run>-merge-import.json` exists, read its source mappings and baseline origins. Preserve imported source-review evidence and exact pending Step 8 published-repair handoffs. The import is not a new mathematical verdict: review the combined cross-batch interfaces and impact obligations on current content, including later repairs recorded in the source handoffs.
- Append one evidence-bearing, current-hash row per edge, forward reference, addition, removal, item, page, or gate outcome to `research/<run>-5b-verdicts.jsonl`. Use the exact kind and verdict vocabulary accepted by `tools/physics-support/cross-group-edges.mjs`. Edges use `accurate`, `repaired`, or `struck`; forward references use `orientation-reviewed`, `lemmas-added`, or `dropped`; gate outcomes use `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`. Use the tool's accepted vocabulary for structural changes.
- An `orientation-reviewed` forward reference may remain only as a non-load-bearing link in `Remarks` to an already-authored target on a strictly later planned page. Bind the current source-item hash, exact target-item hash, and an existing Markdown review under `research/` with its hash.
- After edits, get a current carrier hash with `node tools/physics-support/cross-group-edges.mjs carrier --run <run> --id ITEM_ID`. Bind each verdict to the current carrier hash or hashes required for its kind, and provide its required evidence note.
- For a fixed repository runtime incident on a foreign draft, keep the stable ledger subject in `id`, supply both `carrier_run` and `carrier_id`, and compute the hash under that actual owner run. Only closed `breaking-runtime`, `engine-stage`, or `stage-unowned` rows whose evidence names that draft qualify. This is a runtime receipt, not mathematical acceptance or authority to edit another agent's carrier.
- Clean outcomes use `defect_ids: []`. Every repair, strike, drop, removal, or reversion must name one closed, uniquely owned `5b-cross` defect-ledger row. Restore a pre-existing removal before deciding it. A page addition, page removal, or reading-order change is an owner blocker unless the active task explicitly grants that authority.
- A clean gate `false_positive` uses `defect_ids: []`; a confirmed gate defect names its originating gate and exactly one closed defect row with matching severity and disposition. Bind the outcome to the current subject hash.
- For the full lead audit, close both impact windows with `tools/physics-support/impact-audit.mjs`:
  - `--touches research/<run>-touches.json --from pre-author --to post-5a --receipt research/<run>-impact.json`
  - `--touches research/<run>-touches.json --from post-5a --current --receipt research/<run>-impact-5b.json`
- Record a reviewer even for an empty window. For each affected item, record the exact changed supplier, consumed clause, and justified disposition. Reuse historical review only after checking its attribution, current hashes, and coverage of current interface changes; never copy approvals blindly.
- Preserve the original baseline. Record unresolved findings and published debt honestly; generic notes do not close a receipt. A narrowly assigned gate repair covers only its primary blocker, not unrelated impact candidates.
- Write `research/<run>-alpha-5b.md` with the evidence, disposition, edits, and remaining blocker for each computed obligation.
- The closure gates rederive edges, validate verdict currency and ledger ownership, and run the Step 5 gate battery.
