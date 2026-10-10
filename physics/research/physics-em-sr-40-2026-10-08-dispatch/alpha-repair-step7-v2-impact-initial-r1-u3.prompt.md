# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Step 7 frontier owner repair agent

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are one of three Sol 6.1 high owner agents in 7.2, 7.6 or 7.9.
The frozen task binds your disjoint ownership, run, phase, round, evidence and
result schema. Empty lanes report honest no-ops.

Repair only assigned draft IDs in `research/physics-em-sr-40-2026-10-08-step7-v2/frontier.json`.
Published repairs inside that frontier have no item gate, rejudge or adjudication
obligation. Outside items,
published or draft, belong to separate consumer maintenance; do not edit them
under this assignment or promote them from citations, old tasks or diagnostics.
Before 7.9, the prerequisite-authoring exception below permits genuine missing
suppliers. 7.9 and its continuations permit no new items.

All three frontier owner lanes run concurrently. Keep item writes disjoint.
Before editing any shared page, contract, manifest, index, registry or ledger,
acquire `node tools/physics-support/step7-shared-write-lock.mjs acquire --owner YOUR_DISPATCH_LABEL`.
Exit 2 means busy: continue independent review and retry before editing.
After acquisition, reread current files, merge only necessary changes, check
them and promptly run the same command with `release`. Never hold the lock
during research, retrieval or waiting. Never remove another owner's lock;
report an abandoned lock. Reserve IDs and register additions under this lock.
Finish shared edits before reporting completion.

The authoritative proof contracts are
`research/physics-em-sr-40-2026-10-08-batch-N.proof-contracts.json`. The level file
`research/physics-em-sr-40-2026-10-08-proof-contracts.json` is generated by the `merge-contracts`
gate and replaced before every gate battery. Write each contract repair to
its owning batch file under the shared lock. You may refresh the level file
for a local check, but a level-file-only edit is lost at the next gate.

Logical validity governs every decision. Understand the affected statement,
proof and actual prerequisites before repairing. Be honest about uncertainty;
when unsure, read authoritative sources and check their hypotheses and
arguments independently. Sources, judges and prior reviews can be mistaken.
Record sources actually read; never fabricate familiarity, confidence or checks.

Assignment requires examination, not an automatic edit. Repair a consumer only
when its supplier's change makes an actual statement, proof use, citation,
dependency, contract or page interface invalid or inaccurate. Identify the
affected clause and make the smallest logically sufficient correction.
Leave sound consumers unchanged with an item-specific `unaffected` review.
Do not polish style, broaden scope, weaken results to clear checks, or alter
unaffected clauses. Confirmed nonfatal defects also require repair; fatal
classification controls only the convergence threshold. Preserve the
Foundations boundary and exact AC assumptions/uses.

Only changes to the original `## Statement` or `## Definition` propagate,
including lemmas and corollaries. Compare the sections directly, without a
semantic classifier. Proof-only, citation, dependency and metadata edits do
not require downstream inventory, review or repair. New prerequisites are new
interfaces. Examine direct dependency/reference consumers and exact reported
uses. A link alone does not justify a repair; an undeclared load-bearing use
needs accurate dependency reconciliation. Continue another hop only when a
necessary consumer repair changes that consumer's own Statement/Definition.
Never expand a transitive closure through unchanged statements.

Report additional consumers with exact affected uses, including IDs outside
your lane or frontier, without editing another lane's files. The engine routes
frontier consumers to ordinary frontier owners and outside consumers to
separate maintenance after frontier writers drain. Outside maintenance uses
three disjoint lanes, its own evidence and exact snippet edit accounting; it
does not enter Step-7 repair, adjudication, rejudgment or item gates.
Each supplier-interface event and outside consumer is handled once. Gates and
unrelated context changes do not reopen that obligation. A necessary outside
statement change can propagate another hop and return work to the frontier.
The engine completes frontier work and separate maintenance before central
certification. A candidate record is not a completed review or repair.

Before 7.9, you may fully author a new item only for a genuine unmet
prerequisite of an assigned frontier repair. Record the missing claim, consuming
proof step and why existing items do not suffice. State exact hypotheses and
dependencies; apply the same proof, source and uncertainty standards.
Check IDs, aliases and active assignments, then register the unique item in its
index/registry, owning page, manifest and contract. No orphan files or unrelated
results. Include creation evidence in the task schema. Additions preserve
author-origin/certification integrity but do not enlarge the frozen frontier or
enter its Step-7 rejudgment/gate loops. Do not issue verdicts or stamps.

For 7.9, resolve every assigned diagnostic, including shared/global components
owned by your lane, not only the first printed error. Read frozen diagnostic
files in bounded chunks. PASS rows, inventories, upheld findings and cited
suppliers are not repair assignments. Outside findings are explicit exclusions,
not scope blockers or mathematical passes. Global integrity, runtime, unknown
and ambiguous failures remain unresolved until actually fixed; report operator
work when content repair cannot resolve them. The engine reruns the complete
scoped battery after repair and central recertification. Local checks do not
replace that battery.

Use the canonical published-consumer-supplier ledger for actual mathematical
findings, suppliers, repair strategy and audit status, under the shared lock.
Keep operational history in run evidence. Preserve historical assignments and
reports. A repeated pending set at an earlier assigned content state requires
operator resolution, not a duplicate wave or invented completion.

Return `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy all identity fields exactly from the task; `impact-repeat` is not `repeat`.
Every assigned item needs `id`, `disposition` (`repaired` or `unaffected`),
current itemHashGuard as `post_sha256`, `review_context_sha256`, an item-specific
`reason` of at least 40 characters, `uncertain:false`, `source_urls` and
`familiar`. When unfamiliar, provide authoritative URLs actually consulted;
never change familiarity to evade source requirements. Unresolved uncertainty
is a blocker, never a fabricated confident review.

Disposition describes the guarded item, not ancillary files. If the item guard
is unchanged, use `unaffected` even after a contract/page repair; explain the
metadata edit and set `metadata_repair_only:true`. Immediately after each review,
before another supplier edit, run
`node tools/physics-support/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes. Stable batches may use comma-separated IDs. Never refresh an old hash
without examining changed effects. Keep the original hash if a supplier changes;
the engine handles current frontier review coverage before certification.

`downstream` contains additional affected IDs. Optional `supporting_evidence`
maps existing repository `research/` paths to exact SHA-256 hashes; put prose
and check summaries in `repair_notes`, not this map. Never invent hashes.
Gate tasks require `gate_resolutions` for every assigned diagnostic, including
ones without item subjects. Empty assignments return empty arrays. Report
actual focused checks, unfinished repairs and blockers honestly.

Do not write judge verdicts, stamps, central certificates or round state, launch
workers, or reseal items while writers remain. The engine alone dispatches
Sol 6.1 high judgment and controls repeats. Central certification follows complete repair and
maintenance closure, after all writers drain. A successful dispatch does not
establish completion, and the strict less-than-5% threshold never waives
unresolved mathematics. Do not claim independent review for your own repair.


---

# This dispatch

run: physics-em-sr-40-2026-10-08
role: alpha-repair
label: step7-v2-impact-initial-r1-u3
covers: 3
output: research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-impact-initial-r1-u3.json

# Step 7 repair: impact-initial, round 1, unit 3

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/impact-initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-impact-initial-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"impact-initial",round:1,unit:"3",input_sha256:"a3359aa82fea48d62029754cbf6d1a712df1a723de039b4e7058cb1165750a3b",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "initial",
    "round": 1,
    "unit": "1",
    "id": "lem-timelike-cone-has-two-convex-components",
    "model": "gpt-6.1-sol",
    "context_sha256": "0a7e6847da44dc617e946bc3e3ec25d907d2648d2e2341e90f03ab575a405c2b",
    "outcome": "false_positive",
    "reason": "The definition has deps only on the Lorentz-form and causal-classification definitions; its justified_by link is the schema-permitted well-definedness discharge, not a reverse deps edge. Steps 1.1–4.3 establish both components and closures without L15, and step 5.1 proves basis independence before using only the definition of a choice of component. No circular premise establishes the lemma.",
    "repair_status": "unaffected",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "initial",
    "round": 1,
    "unit": "1",
    "id": "def-spatial-euclidean-structure-of-an-inertial-frame",
    "model": "gpt-6.1-sol",
    "context_sha256": "b1c227a2be1e8a152c58d4ef50bec349003e9aae264308d41a03665a54a9a713",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Confirmed false uniqueness assertion: the oriented model also fixes orientation and C^+, and its normalized alternating volume form is frame independent (volume lemma steps 1.1–4.1 give det M=1 and det(M^{-1}X)=det X). Replaced only the final exclusivity sentence with the exact primitive-data and chosen-time-axis distinction; all spatial constructions and identities remain unchanged.",
    "repair_status": "repaired",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "initial",
    "round": 1,
    "unit": "1",
    "id": "ex-sr-constructing-an-oriented-inertial-frame",
    "model": "gpt-6.1-sol",
    "context_sha256": "78f9d41f022692187413bc861dc5e56b7d7b64df9b3cb87954b8b69ab6e90413",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal scope mismatch: Example and Given explicitly restricted input to a past-directed negative basis, and verification was correct on that input; the arbitrary-input title and B-page nevertheless overpromised. Added g0=f0 for future input and g0=-f0 for past input, then a spatial reversal only for a negative intermediate basis. The convex-component midpoint argument proves the time choice, and determinant -1 proves either orientation correction; the original worked case and 2D illustration are retained.",
    "repair_status": "repaired",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No potentially defective published supplier or published direct consumer was discovered. The 41 spatial-interface consumers are all frozen-frontier drafts, and their actual uses require unchanged spatial clauses. No published item was edited, repaired or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cex-sr-rindler-horizon-is-not-a-physical-boundary",
    "finding": "L1 conflated future timelike and future causal displacement vectors.",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "L1 inaccurately restated the future timelike cone as all future vectors: (1,1,0,0) is nonzero, null and future causal, but is outside C+. This is nonfatal because every witness used to refute (i)-(iii) is timelike with positive time component. Repaired L1 to distinguish C+ from its closed cone, exclude zero from future causal vectors, and state both reachability relations exactly.",
    "post_sha256": "ad8de2a845105cb1ecbcb453348d900a29215e699f45462e71057562fa8a776c",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed-adjudication-repair",
    "id": "rem-sr-newtonian-bridge-limits-and-failures",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "Whole-domain chart nonuniformity omitted v!=0; the zero-velocity identity is an exact counterexample. The repaired clause and scope restore the supplier hypothesis and explicitly state its zero case. Controller should append hash-bound evidence while preserving original rejected evidence.",
    "context_sha256": "34f38d6edbd0496e80bc41f74feedfbc146e786b254e77674b5af6a3322be9ed",
    "post_sha256": "e3cd5cc629a32da61b22081895994d4536608de04185ccd57cd6e045051d0d60",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "id": "rem-sr-newtonian-bridge-limits-and-failures",
    "reason": "Direct item/reference search found only draft frontier consumer pthm-sr-newtonian-p-e-correspondence, which cites unchanged clause (i), and the owning draft page. No published or outside-frontier consumer finding was discovered and no separate maintenance repair is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-em-sr-40-2026-10-08-step7-v2-initial-r1-u12-signed-doppler-record",
      "run": "physics-em-sr-40-2026-10-08",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "fatal",
      "defect_type": "logic",
      "location": "statement",
      "subject": "ex-sr-operational-record-arithmetic-worked",
      "caught_at_stage": "7.1",
      "caught_by_role": "alpha-adjudicate",
      "batch": "12",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u12.json",
          "note": "Original record annotation requires motion along propagation, but z=1,epsilon=1/2 gives consistent beta=-5/13. The zero-error endpoint z=1 also gives rest. Signed collinear annotation and exact sign qualifications repair both cases while preserving the inverse and interval claims."
        }
      ],
      "correction": "Use the signed collinear velocity annotation in Example(b) and Given, prove nonnegativity iff z+epsilon<=1 and strict positivity iff z+epsilon<1, and align both owning contracts.",
      "post_sha256": "1ded1737a2ca3bf3a05fd131f2fca3d2e6f4769d29879f8056d3b94063e03103"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No item depends on or references the assigned example. The sole owning examples-page placement and prose remain sound, so there is no published consumer finding or maintenance repair to propose.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_record",
    "id": "lem-em-point-current-continuity",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The permitted q=0 makes both endpoint contributions zero for any test, contradicting the Statement necessity claim. The exact formula gives individual vanishing iff q=0 or the corresponding endpoint value is zero, and total vanishing iff q=0 or the two endpoint values agree. The finite-window Remark also needs q nonzero.",
    "before_sha256": "65d66cd33a57a84b4dbaf23a1643555e0ac23eeb53485c817530d1e4712c82e5",
    "post_sha256": "d784de8637529b2f9bdc54144d731468330ff6d9852bc8b27b10f46d56ed35fa",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_update",
    "id": "lem-em-point-current-continuity",
    "reason": "All seven direct item dependency/reference consumers are draft original-frontier items; their inspected uses remain sound, and no published or outside-frontier consumer finding was discovered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-mean-zero-coercivity-on-a-c-one-domain",
    "model": "gpt-6.1-sol",
    "context_sha256": "7260b67cd9b070aa7c7caa7879dcce955ae2d0c425f23d39d610acf193e88730",
    "outcome": "confirmed_nonfatal",
    "post_sha256": "10e89615ebec48ae09c1de51b7e8e9d4d96484146bea57ed1a1730925bf50c7e",
    "review_context_sha256": "9e9a11a5d319337935c3615bb563e9d494884eab1528b1fcc47c2eb2092b700b",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed missing ambient compactness citation at step 4.1; L4 also misattributed closed-bounded Euclidean compactness to the definition. Added the published ambient/subspace equivalence and Heine-Borel to deps, roles and L4. Checked the ACL box estimate, C1 chart comparison, density passage and connected positive-measure overlap graph. The complete six-step proof establishes the unchanged Statement.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain",
    "model": "gpt-6.1-sol",
    "context_sha256": "354b8fb0ce13f70803359636dca9c6695f10acbd6accf86d2202ca872946b4bb",
    "outcome": "confirmed_nonfatal",
    "post_sha256": "043e693b8d446ced521bb610437fd03753ee5826f75467a00253289977bfd096",
    "review_context_sha256": "ac949d81da40d2cd8534800b14541b44072a3b0df838a3fcaf3a4d72317162af",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed omitted ambient compactness supplier at steps 1.1 and 2.4. Added its exact interface to L2, deps, roles and contract. The explicit reflection coefficients have the stated sign, weighted summability and moment identities; the finite-head/tail limit matches all mixed derivatives, and fixed cutoffs preserve time derivatives. Statement unchanged.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-zero-boundary-coercivity",
    "model": "gpt-6.1-sol",
    "context_sha256": "37c51c1fce5e0d5baea6e9c0b5d6d23999649827e9e522d3d4053378bac0feff",
    "outcome": "confirmed_nonfatal",
    "post_sha256": "66ada274800c919d1e1376b7c57fadbf16dfadcd3a483acb5fe45e302cbc7bfc",
    "review_context_sha256": "192b1e15c8ae45464e8d8b4fb2e05e885c4085e42a6f290cfeafeda988c42e2a",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed nonfatal misattribution in F1: the Sobolev definition does not assert the norm axioms, but the already declared Banach theorem F3 asserts a complete normed space. Corrected F1 to use F3. The coordinate L2 pairing, zero-extension line estimate and tolerance-based closure passage prove the full Statement without an additional prerequisite.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-lift-specified-dirichlet-existence",
    "model": "gpt-6.1-sol",
    "context_sha256": "42f882f69bdfdd3f4760df6c39b0e44955bce005ebe2257f0511ba6ff5d0efe4",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "post_sha256": "9fe36fa6e13ecb2d43b41a38c3e34602d4d680a9beadc6aa1247127deebf7db2",
    "review_context_sha256": "86db51a6b9d0cac47e6bf7a563e466ad2eadef4a3e9eb0f2975eb7b45d43f8f4",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed false flux-continuity assertion after the proof: on (-1,1)^3, epsilon=I on x1<0 and 2I on x1>0, u=G=|x1| and F(v)=a(G,v) meet the hypotheses but the flux jump is 3. Replaced the unsupported prose by the precise warning that general F may contain sheet sources. The coercive lift existence, uniqueness and L2-volume distributional identity remain sound; Statement unchanged.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-magnetic-dipole-remainder",
    "model": "gpt-6.1-sol",
    "context_sha256": "541f6fe83ed00997c175725306e517ecc9d30769e57a85651c1a98b63a5d2eed",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "post_sha256": "b12d50bdd44ae070299e83f320b399f4f5b136ea5cba9b7abeaeacb25b5a4728",
    "review_context_sha256": "3e86e60d392115f4f48e597605b3a4acf9669b0ed3792d6fecacccdada371eb9",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed inaccurate F5 attribution of chain/power rules to algebra-of-derivatives. Added the total chain-rule and positive-square-root suppliers, and a local rationalization proof of the square-root derivative followed by the explicit first/second radial differentials. The third differential has bound 24|w|^-4, the curl remainder is bounded by 192 a^2||J||1/r^4, and the leading curl has the stated sign. Statement unchanged. Adopted the precheck phase placement: the independent calculus argument is step 1.2.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-spherical-harmonic-basis-and-addition",
    "model": "gpt-6.1-sol",
    "context_sha256": "9f6d51b1ec9681dee7b0d7857829e4280e7c317e075dc37ec861039fb26f5648",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "post_sha256": "c12cef785600f49200404e35395af0dba14d9fa9d3c0057355f397d51479da4c",
    "review_context_sha256": "fee6a41abe45e638d5088c0e6343e458d3afa8259d9ac78148a8a12d0d92b2f2",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed unsupported F7 harmonicity in the source variable: the kernel Statement only licenses its integral polynomial/generating formula and x-derivative convergence. Replaced F7 by that exact interface and proved the finite solid-polynomial formula locally in step 1.3. FTC gives the cosine-moment recursion, which cancels every Laplacian coefficient; b0=1 establishes the nonzero zonal harmonic. The one-dimensional invariant-harmonic argument and diagonal mass 4pi then prove the unchanged addition theorem. Adopted the precheck placement of this independent polynomial argument in phase 1.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-prescribed-fractional-dirichlet-existence",
    "model": "gpt-6.1-sol",
    "context_sha256": "80e705c94c2ef0c76e68eec8d8b03916f7a767788ae31d7b6aa16a1aa23e884a",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "post_sha256": "d84986d420b4b7c0e096e38559dac3af9b3121f0f948a0dc56b803371c5a8cd9",
    "review_context_sha256": "37bb49ce594065238ad50d2170e34b511cbe88bf17b608e8512f56f23dd4c3d1",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed missing direct coercivity premise: the lift Statement gives existence and uniqueness but neither Poincare nor gradient/full-norm equivalence. Added the exact zero-boundary coercivity interface as F4/dependency, corrected F3 to the actual lift Statement and proved its mixed coefficient bound by the positive-form discriminant. F4 bounds the volume functional and converts the tested difference-gradient estimate to H1 continuous dependence. Statement unchanged.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-smooth-pec-cavity-spectral-closure",
    "model": "gpt-6.1-sol",
    "context_sha256": "749f128b10294d2b427c8c69bcb59d6896eaa121a2dadcea43bab8c6187ff1aa",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "post_sha256": "2bce96349d1154e54fd72a9d0b69e5b2f07e8d3eba91f58a97a6ec714e891c3b",
    "review_context_sha256": "8e3410cc716ac2233560935e29084114829b433827b6f86f401ca5307d7787f6",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed incorrect disconnected-domain mean estimate in F2. Restored the supplier connected C1 hypothesis and supplied the cube estimate directly in step 4.1 using ACL, Cauchy-Schwarz and product integration, giving squared constant 3h^2. Declared trace, density and Hilbert-completeness interfaces needed for the completion. Exported the already proved H1 graph equivalence, smooth Gaffney identity, adjustable trace estimate and V Fourier norm identity so the assigned eigenfield consumer and its identified modal consumer have exact premises; spectral, zero-mode and wave claims are preserved.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-pec-cavity-eigenfield-boundary-regularity",
    "model": "gpt-6.1-sol",
    "context_sha256": "89be27d4d026647686a1ab3c37e8abb68bdbdbe7bd4af13cfc87f7a2925b9632",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "post_sha256": "cd3e6bfcceaf5962b2691aae7553f712b3d56a84249ebdca1d5e569f0be22340",
    "review_context_sha256": "3c3510f389b4364b6237659c48f7dc690eb1a082206b7bcef34f47aeaa60f508",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed that the original F1 attributed essential H1 inclusion/norm equivalence to a supplier Statement that did not state them. The repaired spectral Statement now exports the exact estimates, Gaffney identity and adjustable trace bound; F1 explicitly records these premises. Also licensed the finite chart cover and supplied the local odd/even H1 reflection argument and convolution convergence for actual X tests. The tangential quotient estimate, normal recovery and boundary commutator bootstrap then prove all Hm and the classical PEC/Robin relations, including lambda=0 and disconnected domains; Statement unchanged. Removed the superseded Dirichlet-resolvent citation: its Statement does not supply the reflection argument now proved locally.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed-adjudication-entry",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "subject": "lem-em-weak-neumann-and-transmission-existence",
    "model": "gpt-6.1-sol",
    "context_sha256": "d831d08ec9f054fe7fc844aa912b3a58dbc1d0988c570d9b6eabfa50b68ddac6",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "post_sha256": "d75df507ec824ba1da41699af7de4c062649b62f7d0d50e146d1b750353bdecd",
    "review_context_sha256": "4dcfb79845b6b2817866c99f902fcc1366d8ac126eb847d8587c2da198e3ba0e",
    "disposition": "fixed-locally-awaiting-independent-rejudgment",
    "reason": "Confirmed the missing sharp trace estimate: the original Lp trace Statement has target L2, so it cannot bound pairings against arbitrary H^-1/2 data. Added the exact sharp p=2 trace and bounded right-inverse suppliers to F1/deps. Added explicit H1 Hilbert completeness and H0^1 coercivity via the reviewed zero-boundary supplier for both the mean-zero and transmission Dirichlet solves. The positive coefficient form bound is justified locally. Constant testing, compatibility, uniqueness and the oriented sheet-charge jump remain sound; Statement unchanged.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no-entry-required",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "16",
    "reason": "All five direct consumers of the changed spectral Statement are draft original-frontier items. No potentially defective published supplier or consumer was found in this assigned review; no published carrier or historical maintenance row was changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_new_finding",
    "id": "thm-em-spherical-multipole-basis",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "initial",
    "round": 1,
    "unit": "18",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "The right integral in original step 3.3 omitted |y|^l, so it was not the degree-l term of steps 1.1 and 3.2. For l=1 the unweighted directional factor has no continuous extension at y=0. Restoring the solid coefficient c_l repairs both the identity and the harmonicity argument without changing the Statement.",
    "post_sha256": "53ed19426dad07c0a768438c9b74938f37f373f7ffce6bf73ecd9b2cf72d4bb5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_new_finding",
    "id": "lem-em-exterior-vector-helmholtz-mixed-boundary-existence",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "initial",
    "round": 1,
    "unit": "18",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "L3 omitted the supplier domain Omega subset R3 and its real symmetric coefficient hypothesis, so the restatement was broader than its cited interface. The only consuming step 1.3 uses epsilon=I_3, rho=0 on the bounded smooth A and separately solves real and imaginary data; all supplier hypotheses already hold. Repaired L3 with exact symmetry, dimension and uniform bounds, aligned L4 likewise, and made those checks explicit in 1.3. The theorem was not invalidated by the unused overgeneralization.",
    "post_sha256": "9eb561222007085c403d8ce849dfd840819e82ddedbdf92c7f4252c15cb27a7d",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "ids": [
      "thm-em-spherical-multipole-basis",
      "lem-em-exterior-vector-helmholtz-mixed-boundary-existence"
    ],
    "reason": "Both repairs concern assigned draft carriers and leave their frozen Statements unchanged. No published-consumer defect or supplier-interface event was discovered in these repairs; no maintenance entry is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "initial",
    "round": 1,
    "unit": "19",
    "id": "ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries",
    "model": "gpt-6.1-sol",
    "context_sha256": "8731e8c5f2feea5ce25fc37fc3e04d9f8527fffff5e209336846e7c2c17b42c1",
    "outcome": "confirmed_nonfatal",
    "post_sha256": "86deb037a7c6d3c5fea24af676e8165aaa57353632580a5b549a178e0d3cebd5",
    "reason": "The F2 restatement deleted required endpoint continuity, but the actual exponential primitives already satisfy it. Repaired F2 and step 1.1, restored both full supplier Statements in the assigned contract and documented the endpoint hypotheses. The published suppliers themselves are sound for this use; no published-consumer maintenance finding is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-spatial-rotation-of-an-inertial-frame",
    "finding": "The final Definition conflated changes of origin or spatial orthonormal basis with changes of time axis. Conditions 1–4 depend only on e0 and eta, and the determinant supplier is basis-independent. Replaced the false universal sentence by precise invariance under the former changes and possible dependence on e0; SO(3) and all defining conditions remain intact.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-boost-is-proper-orthochronous-with-inverse",
    "finding": "Step 1.1 treated beta/b in R^3 as a vector of V, making eta(e,e) and span(e0,e) ill-typed. Defined J(a)=sum_i a_i e_i, n=beta/b, e=J(n), y=J(y_vec) and Y=J(n-perp), and corrected the bilinear calculation to y_vec.z_vec. Orthonormality verifies J preserves spatial inner products. Checked the two-dimensional metric/determinant computation, inverse, cone sign estimates, rest boost and beta=0 branch; all Statement clauses are unchanged.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-inertial-chart-transitions-are-affine-lorentz",
    "finding": "Clause (ii) asserted cone preservation by the affine transition F, although step 4.1 calculated only its linear part A=M^{-1}. With M=I and x(o′)=(2,0,0,0), F(1,0,0,0)=(-1,0,0,0) disproves the assertion. Repaired (ii) to F(u)-F(v)=A(u-v), preserving q and future causal displacements. Retained full affine-transition classification. Also distinguished coordinate epsilon0 from abstract e0 in step 4.1 and cited the supplier subgroup assertion for properness of the inverse.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-boost-rotation-factorization",
    "finding": "L3 displayed a matrix containing (gamma-1)/|beta|^2 for every |beta|<1, despite the supplier defining beta=0 separately. Restricted the matrix display to nonzero beta and explicitly supplied B(0)=id with matrix I4. The proof uses L4 for the rest boost and inverse, so no zero division enters its deductions. Checked existence, spatial restriction, block determinant, converse, uniqueness from the e0 image, and identity-rotation characterization; Statement unchanged.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-rapidity-parametrization-of-collinear-boosts",
    "finding": "L5 omitted B(0)=id although step 5.1 explicitly needed it. Restricted the formula to nonzero parameters and supplied the zero case. Review also found the spatial vector e of V used as a parameter of B whose domain is R^3. Defined e=sum_i n_i e_i, |n|=1, and B(beta e):=B(beta n); typed step 5.1 through J. The log/tanh inverse, positivity of cosh and gamma identities are valid. Proved rapidity addition directly by exponential identities and plane-matrix multiplication in new step 6.1, avoiding reliance on the collinear supplier’s analogous missing coordinate identification. The typing gap was load-bearing logic; all original assertions are retained.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-collinear-boost-composition-and-velocity-addition",
    "status": "owner_repair_required",
    "route": "frontier_owner",
    "affected_use": "Statement and Facts L3, Proof 1.1 write beta_i e as an R^3 boost parameter although e is in S subset V; the spatial coordinate output is equated to (gamma_i s-gamma_i beta_i x^0)e+y in V.",
    "invalidated_claim": "The coordinate formula in Proof 1.1 is not well-typed on a general V.",
    "minimality": "Define n as the spatial coordinate column of e and B(beta_i e)=B(beta_i n); use J(a)=sum_i a_i e_i to distinguish spatial coordinates from vectors. The displayed block multiplication and parameter algebra then remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "cex-sr-noncollinear-boosts-do-not-commute",
    "finding": "L1 stated the spatial-entry formula at beta=0 where its quotient is undefined. Restricted it to 0<|beta|<1 and gave B(0)=id with matrix I4. The counterexample uses two nonzero triples of norm 3/5, so its matrices and unequal product entries were valid; this is a nonfatal supplier restatement error. Checked both products and proper-orthochronous group closure. Replaced the vague L4 rotation description by the exact identity-rotation iff boost assertion. Refuted Statement unchanged.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "ex-sr-boost-rotation-factorization-worked",
    "finding": "L1 omitted the essential zero-parameter case. Restricted its matrix display to 0<|beta|<1 and stated B(0)=id with matrix I4. All computed parameters are nonzero; checked the rational product L, its metric and determinant, u and beta=(-3/5,-12/25,0), the boost coefficient 625/656, and the spatial rotation with entries 40/41 and 9/41. Specified B1 and B2 by R^3 triples to remove ambiguous use of frame vectors as parameters. The rotation and boost factor order, uniqueness and nonboost conclusion remain intact. Carroll eq.1.17 confirms the stated clockwise matrix convention.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "published-consumer",
    "status": "no_update_required",
    "reason": "All direct item consumers of the three changed mathematical interfaces are current draft frontier items. No potentially defective published consumer was found; no published or outside-frontier item was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-sr-interval-and-cone-invariance",
    "status": "owner_repair_required",
    "route": "frontier_owner",
    "supplier": "lem-inertial-chart-transitions-are-affine-lorentz",
    "affected_use": "[L1] Two inertial charts satisfy $x'(p)=M^{-1}(x(p)-x(o'))$, an affine map with linear part $M^{-1}$, where $M$ is the matrix of the proper orthochronous linear Lorentz map $L$ with $Le_a=e'_a$; $M^{-1}$ is a proper orthochronous Lorentz matrix and the transition maps future causal coordinate vectors to future causal coordinate vectors; conversely every proper orthochronous linear Lorentz map and event give an inertial chart with that transition ([[lem-inertial-chart-transitions-are-affine-lorentz]]).",
    "invalidated_claim": "The affine map itself sends every future causal coordinate vector to a future causal vector.",
    "minimality": "Facts L1 repeats affine-cone preservation, but Proof 1.1 explicitly cancels translations, 2.1 applies the linear map Lambda to the displacement Delta, and 3.1 transforms the null direction linearly. Correct only L1 to preservation by the linear part and preservation of causal displacements; no Statement change is needed from this finding.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_new_finding",
    "subject": "ex-em-wave-equation-prerequisites-hypothesis-boundaries",
    "severity": "fatal",
    "disposition": "fixed",
    "location": "Example (i); Verification 1.1, 2.1, 2.2, 2.3",
    "reason": "F8 and the actual gradient supplier index coordinates from zero. For u=f(x_1-ct), the nonzero set is R x (ct+U) x R and the gradient is (0,f\\prime(x_1-ct),0). The original equality restricted x_0, and its integral boxes did not imply x_1-ct lies in I. Step 1.1 also used nonexistent spatial partial_3. Corrected the set, derivatives, both boxes, and the first-coordinate trajectory basis vector e_0; all three substantive boundary examples are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_maintenance_finding",
    "subject": "em-retarded-point-prerequisites-examples",
    "path": "library/classical-electromagnetism-mathematics/em-retarded-point-prerequisites-examples.md",
    "status": "owner-maintenance-required",
    "affected_use": "The page explicitly uses u(x,t)=f(x_1-ct) but reports its nonzero set as $(ct+U)\\times\\mathbb R^2$.",
    "invalidated_claim": "The page product formula restricts the first coordinate while the profile depends on the second, under the cited zero-based gradient convention.",
    "minimality": "Replace only the page product formula with $\\mathbb R\\times(ct+U)\\times\\mathbb R$; unboundedness, infinite L2 and the other examples remain valid.",
    "reason": "The only direct page reference repeats the confirmed false coordinate equality. Its exact necessary correction is reported outside this item write lane; no page was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "proposed_supplier_maintenance_finding",
    "subject": "def-wave-equation-cauchy-data-and-wave-speed",
    "path": "items/def-wave-equation-cauchy-data-and-wave-speed.md",
    "status": "original-mathematics-owner-maintenance-required",
    "affected_use": "The published Definition says $\\Delta=\\sum_{j=1}^n\\partial_j^2$ while citing the zero-based Laplacian supplier $\\Delta=\\sum_{i<n}\\partial_i\\partial_i$.",
    "invalidated_claim": "With the cited standard-basis indexing it omits partial_0 and includes partial_n, which is not a spatial coordinate on R^n. This is a convention defect in the imported Definition.",
    "minimality": "The mathematics owner should reconcile the single summation to $\\sum_{0\\le j<n}\\partial_j^2$ and examine its direct consumers. No supplier interface was changed in this dispatch.",
    "reason": "This read-only published import has a potentially defective indexing interface. The assigned example uses the correct local F2 and proves the wave equation directly, so its repair does not rely on the bad summation. The import and original remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "def-em-lab-geometry",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "C^0 does not imply existence of first partial derivatives.",
    "repair": "Condition clause (c) first derivatives on k>=1; retain the C^0 laboratory-field class."
  },
  {
    "ledger": "defect-ledger",
    "id": "post-em-vacuum-maxwell",
    "outcome": "confirmed_nonfatal",
    "finding": "Tong bibliography misdated the 2015 notes and asserted unsupported stamped-source reading.",
    "repair": "Correct source identity and locators and record actual source sections consulted; physical public interface unchanged."
  },
  {
    "ledger": "defect-ledger",
    "id": "post-em-lorentz-coupling",
    "outcome": "confirmed_nonfatal",
    "finding": "Force and power densities were incorrectly attributed to Griffiths section 8.1.1.",
    "repair": "Use section 8.1.2 p.346 for power and section 8.2.2 p.351 for force; correct Tong identity and explicitly source the covariant force law."
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no_changes_proposed",
    "reason": "All 83 direct item consumers of the changed laboratory definition are draft members of the frozen frontier. No published or outside-frontier consumer was found for this interface event; no published item was edited or adjudicated."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-em-sr-40-2026-10-08-step7-initial-r1-u24-charge-continuity-choice-scope",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T04:45:20.997535+00:00",
      "class": "accuracy",
      "subclass": "missing-choice-scope",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "pthm-em-charge-continuity",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u24.json",
          "note": "F5 unconditionally asserted injectivity although its supplier explicitly assumes Countable Choice for that part. Only regular-distribution construction is used in the continuity proof; F5 now gives the choice-free pairing and compact-support estimate, and step 2.1 invokes precisely that construction."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u24.json",
          "obligation": "initial:1:24:pthm-em-charge-continuity:gpt-6.1-sol:9d12ae5aae8634445ca2d56b18bbec22e716b0db49012669c05da12b1651c02a"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-em-distributional-gradient-smooth-off-a-point",
    "finding": "F5 attributes arbitrary pointwise limits and measurable products to a supplier stating only increasing limits and indicator restriction. Step 1.1 did not prove the needed product closure. Replaced F5 by its exact narrower content and proved Borel measurability from continuity off the singleton via superlevel sets, with bounded compact-support majorants. Also explicitly relabelled coordinate x_k=x(k-1) and derivative partial_k=the supplier partial_(k-1); complex tests use real/imaginary integration by parts. Fubini discards precisely one transverse singleton (n>=2), with AComega declared.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains",
    "finding": "The Euclidean supplier defines only x(k), k<3. The original x_3 chart and face formulas lacked a relabelling. Added explicit one-based labels x_k=x(k-1) in the Statement, specified the two chart-parameter labels y_1,y_2, and indexed neighbourhoods by sphere radius. Proof 6.1 now expresses each seam in these two actual coordinates; fixed-coordinate sections are finite, so Fubini makes seams planar null, and bounded graph density makes them surface null. The six charts cover each sphere by the maximal-coordinate estimate; radial normals and ball/annulus domains are unchanged.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-em-newtonian-far-field-gradient",
    "finding": "Step 3.1 ranged over 1,...,n despite the gradient and standard-basis interfaces defining coordinates 0,...,n-1. Corrected the range to cover every defined coordinate. Also replaced unsupported general composition/product claims in F6 with the supplied measurable sums and absolute values, proved measurable real products using the square-level-set test and polarization identity, and defined Borel kernel coefficients by restriction to the separated support ball and zero extension. A uniform positive c bounds the potential and derivative kernels by integrable multiples of |f|; differentiation under the integral and dominated convergence then give all continuous partials and the stated gradient bound without boundedness of f.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-em-electrostatic-regime",
    "finding": "The final sentence of verification 6.1 pairs a distribution on Omega with a function on I, so that displayed interpretation is undefined. Replaced it with the well-typed equality integral_I <q delta_x0,psi(.,t)>_Omega dt = q integral_I psi(x0,t) dt, each spatial test slice lying in D(Omega), and the time integral finite by compact support. The preceding point-source and zero-current formulas, normalized temporal test for the converse, four spatial reductions and the declared physical scope are preserved; the Definition is unchanged.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-em-coulomb-solution",
    "finding": "Clause (a) adds quantities with dimensions C and C m and compares a physical radius with dimensionless 1. Retained the supplied two-term estimate: |phi(x)| <= |Q|/(4 pi epsilon0 |x|) + R ||rho||1/(pi epsilon0 |x|^2), valid already for |x|>2R. Each term has units V and tends to zero, preserving the decay normalization and maximum-principle uniqueness. Also declared the one-based vector, derivative and basis relabelling consistently with the repaired off-point lemma, and used a strictly larger support ball in proof 3.1. Exact supplier hypotheses were checked: compact C1 data are bounded Lipschitz and globally Holder of exponent 1/2, continuous rho vanishes on S_R, polar kernel integrals are finite, and smooth mollifications allow distributional integration by parts to pass to compact C1 tests.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-em-infinite-line-normalization",
    "finding": "F4 omitted the published patch definition requirement that no interior parameter share an image with any distinct point of the whole region, including its boundary. This is a nonfatal inaccurate restatement: verification 4.1 already proves that stronger requirement using exponential fibres and equality of z. Replaced F4 by the exact compact-Jordan/interior-versus-whole-region condition and recorded that the rectangle has nonempty connected interior and Jordan-null boundary. Also made the one-based coordinate labels explicit and identified E_(1,t) as field per unit charge, with the integration parameter a longitudinal length, so lambda integral E_(1,t) dt has field units. Absolute test-integrand bound proportional to 1/rho justifies Fubini; cylindrical flux and cutoff energy calculations remain unchanged.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-em-electrostatic-work",
    "finding": "The original title equates joules of work with volts of potential difference although Statement (a) and proof 2.1 correctly give W=q(phi_initial-phi_final). Retitled it to state charge times the potential drop and path independence. This is a nonfatal title defect; Statement, physical_scope, four-force interpretation and proof are unchanged. The line-integral supplier includes degenerate intervals, the gradient theorem gives the endpoint drop with the correct sign, and star-shapedness joins all points to the centre, so equal gradients differ by one constant. The Lorentz tensor signs F^(i0)=-E_i/c and U_0=-gamma c give f=qE for the massive external-coupling model, without assuming the prescribed path is a worldline.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-em-electrostatic-field-energy",
    "supplier": "pthm-em-coulomb-solution",
    "status": "owner_repair_required",
    "finding": "The O(1/r) consequence remains sound with C=(|Q|+2||rho||1)/(4 pi epsilon0), since R/r<1/2. However max(2R,1) and adding dimensionless n to a radius are invalid in the declared SI conventions.",
    "affected_use": "F1 and proof 4.1 consume potential decay in the boundary estimate; proof 5.1 chooses Rprime_n=max(2R,1)+n.",
    "minimality": "Use Rprime>2R, C=(|Q|+2||rho||1)/(4 pi epsilon0), and Rprime_n=(n+2)R with R>0. Only proof choices and the matching contract derivations need repair; Statement and scope stay unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no_published_consumer_repair_proposed",
    "reason": "All direct item consumers of the three changed Statement interfaces are draft frozen-frontier items. No published consumer defect was discovered. The published closure, Euclidean and surface-patch supplier interfaces are preserved exactly; incorrect local restatements were repaired in this unit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-em-parallel-plate-capacitor",
    "action": "record-repaired-finding",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "The scalar comparison omitted pthm-em-capacitance-energy(d)'s one-driven-terminal restriction; clause (d), F4 and Verification 3.1 now state it and distinguish the general matrix formula. Preserve the original rejection tuple.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "path": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "lem-em-ideal-line-current-field",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "resolved": true,
    "reason": "Confirmed fatal dependency-citation gap: the published cor-continuous-functions-are-borel-measurable Statement assumes AC_omega and a continuous map R^n -> R^m, whereas original F5 attributed an arbitrary-open-domain version to it. Original step 2.1 required that unsupported extension to establish measurability before Tonelli/polar integration and the regular-distribution embedding. The mathematical measurability conclusion is true, but the cited interface did not establish the used claim. Repaired F5 to quote the exact full-space interface and supplied a local proof: for open O the zero extension's inverse image is the open f^(-1)(O), with the closed axis Z added exactly when 0 belongs to O; the class of target sets with Borel inverse images is a sigma-algebra containing all open sets. Thus all Borel inverse images follow from the existing Borel definitions without strengthening the imported supplier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "id": "lem-em-ideal-line-current-field",
    "reason": "No published supplier defect was found: the measurability corollary states its full-space domain correctly. The draft consumer restatement was repaired locally. No Statement/Definition changed and no potentially defective published consumer use was discovered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-em-polarization-magnetization",
    "action": "record_adjudication_and_local_repair",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "reason": "Original Definition (a) calls P and M dipole-moment densities but defines neither dipole moment nor a rule for material moment content. This is a missing definition of the principal physical quantities (other), rather than an algebraic error or a misquoted prerequisite. Repaired locally with finite Riemann source-moment formulas and volume-content integrals; no microscopic identification, constitutive law or measured input is introduced.",
    "post_sha256": "0a5562e9bca1a3c8c6ab352ec981c050f9266d588a56d71ba6fc28abf66e3595",
    "status": "repaired_pending_engine_independent_rejudgment"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "def-em-polarization-magnetization",
    "action": "record_supplier_interface_examination",
    "reason": "All eleven direct item consumers are draft frozen-frontier items. There are no published or outside consumers. Three added published mathematical prerequisites match pinned raw import hashes and were not edited. No published maintenance repair or certification is claimed.",
    "published_consumers": [],
    "outside_consumers": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "ids": [
      "def-em-medium-wave-parameters",
      "pthm-em-medium-plane-wave-fields"
    ],
    "action": "route_preexisting_attribution_discovery_to_frontier_owners",
    "reason": "Both opening clauses attribute D=epsilon E and B=mu H to the definition, which supplies no constitutive law. Both explicitly assume post-em-material-closure, preserving their deductions. Only their frontier owners may repair these unassigned carriers.",
    "affected_use": {
      "def-em-medium-wave-parameters": "the constitutive relations of [[def-em-polarization-magnetization]] hold",
      "pthm-em-medium-plane-wave-fields": "the constitutive relations $D=\\varepsilon E$, $B=\\mu H$ of [[def-em-polarization-magnetization]]"
    },
    "invalidated_claim": "The cited definition supplies the constitutive relations D=epsilon E and B=mu H.",
    "minimality": "Cite post-em-material-closure (b) for the laws and retain the definition link for D,H; preserve all assumptions and formulas."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-sr-four-velocity-norm-and-orthogonality",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "Clause (iv) and step 1.4 applied the free massive-test-particle postulate to an arbitrary ideal-clock history without a massive carrier premise. The clock reading postulate imposes no dynamical trajectory law. Clause (iv) now explicitly requires a free massive test particle carrying the clock on the same worldline; step 1.4 applies A1 to that carrier, proves the history is C2, and computes the constant positive proper-time derivative and zero acceleration.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u3.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-em-newtonian-linkage-symmetry",
    "action": "record-repaired-step7-finding",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The exact Euclidean interface makes vectors functions on {0,1,2}; Nu_3 is undefined and the old (1,1),(2,2),(3,3) sum omits coordinate 0. Repaired with Nu=(Nu_0,Nu_1,Nu_2), explicit coordinate projections and the complete 0..2 inner-product sum; the pairing theorem is preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "texp-em-sliding-bar-emf",
    "action": "record-repaired-step7-finding",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "F4 supplied only a nonnegative scalar set integral, whereas proof 1.2 used a signed vector force density. Added the existing signed-integral definition as an exact prerequisite, defined set and vector integrals explicitly, and proved component integrability before applying L1 linearity for either sign of I(t).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-em-inductance-reciprocity",
    "action": "route-discovery-to-frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "observed_raw_sha256": "c64982c85bf195489a754a2920303465d0ee4e5913786577debf180262714765",
    "path": "items/pthm-em-inductance-reciprocity.md",
    "affected_use": "Statement declares amplitudes I in R^n but then defines J_I=sum_{alpha=1}^n I_alpha j_alpha; coefficients I_alpha recur in Statement (b),(c) and proofs 1.1, 1.2, 2.1 and 3.1.",
    "invalidated_claim": "Under def-euclidean-inner-product and lem-metrics-on-rn, I is a function on {0,...,n-1}; I_n is undefined. No reindexing definition for the displayed 1..n profile labels is supplied. This is separate from the sound use of the repaired linkage pairing.",
    "minimality": "The owner should explicitly define profile-labelled amplitudes I_alpha:=I(alpha-1) for alpha=1,...,n, with matching row/column labelling for L, or consistently reindex all these finite data. Do not change the reciprocal linkage or energy theorem. No consumer item was edited or adjudicated by unit 30."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "row": {
      "defect_id": "physics-em-sr-40-2026-10-08-step7-initial-r1-u31-def-em-gauge-transformation-supplier-hypotheses",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T04:47:07.052278+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-em-gauge-transformation",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "final-adjudicator",
      "batch": "31",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u31.json",
          "note": "Definition (a) restated pthm-em-spacetime-potentials without div B=0 or curl E=-partial_t B. On R^3 times R the smooth data E=0, B=(x_1,0,0) have div B=1 and cannot equal curl A for a C^2 vector potential, since div curl A=0. Repaired the cited existence summary with both equations, the open star-shaped domain, nondegenerate interval and exact mixed regularity; the vocabulary itself still imposes no field equation."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u31.json",
          "obligation": "def-em-gauge-transformation / gpt-6.1-sol / c029e71ea00675c11c2f4b61017a80ffec05f1b58fae346b34a6e49c5760e931"
        }
      ],
      "correction": "Definition (a) restated pthm-em-spacetime-potentials without div B=0 or curl E=-partial_t B. On R^3 times R the smooth data E=0, B=(x_1,0,0) have div B=1 and cannot equal curl A for a C^2 vector potential, since div curl A=0. Repaired the cited existence summary with both equations, the open star-shaped domain, nondegenerate interval and exact mixed regularity; the vocabulary itself still imposes no field equation.",
      "item_sha256": "776f48c813a4494fdba63d042b2e3ec7aefc5cbf94b33f29b7d8e1f744479db7"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "row": {
      "defect_id": "physics-em-sr-40-2026-10-08-step7-initial-r1-u31-pthm-em-gauge-invariance-supplier-hypotheses",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T04:47:07.052278+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "pthm-em-gauge-invariance",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "final-adjudicator",
      "batch": "31",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u31.json",
          "note": "F1 placed the gauge-transform formula under m>=1 although the actual definition requires m>=2. This is a confirmed nonfatal dependency restatement error: the Statement and every application in Proof 1.1-1.3 already use k>=2. Separated the C^m field formulas for m>=1 from the C^m gauge transformation for m>=2, without changing the Statement, physical_scope or proof."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u31.json",
          "obligation": "pthm-em-gauge-invariance / gpt-6.1-sol / 5a526ba428b3f0b06e818fbb203067e65b2216cabcefd430f08e611d15a89199"
        }
      ],
      "correction": "F1 placed the gauge-transform formula under m>=1 although the actual definition requires m>=2. This is a confirmed nonfatal dependency restatement error: the Statement and every application in Proof 1.1-1.3 already use k>=2. Separated the C^m field formulas for m>=1 from the C^m gauge transformation for m>=2, without changing the Statement, physical_scope or proof.",
      "item_sha256": "675d9e6c4eb09ad93adbf7c60e0794956cd99f3186f348ee4ebe3c2c50c8e34d"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "row": {
      "defect_id": "physics-em-sr-40-2026-10-08-step7-initial-r1-u31-ex-em-pure-gauge-fields-supplier-hypotheses",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T04:47:07.052278+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-em-pure-gauge-fields",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "final-adjudicator",
      "batch": "31",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u31.json",
          "note": "F2 omitted the cited theorem's hypothesis that I is an interval with at least two elements. This is a confirmed nonfatal dependency restatement error: Verification 1.1 already applies invariance directly only for nondegenerate I and handles singleton I on open boxes in a chosen ambient C^2 extension before restriction. Added the open spatial domain, nondegenerate interval and restriction convention to F2; the Example, physical_scope and complete verification remain unchanged."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u31.json",
          "obligation": "ex-em-pure-gauge-fields / gpt-6.1-sol / 2af6ef78fb3f60c26a69e9d624e612ab2923a91755347ed1f5e234dd3a092ac5"
        }
      ],
      "correction": "F2 omitted the cited theorem's hypothesis that I is an interval with at least two elements. This is a confirmed nonfatal dependency restatement error: Verification 1.1 already applies invariance directly only for nondegenerate I and handles singleton I on open boxes in a chosen ambient C^2 extension before restriction. Added the open spatial domain, nondegenerate interval and restriction convention to F2; the Example, physical_scope and complete verification remain unchanged.",
      "item_sha256": "79bb12cf18794b7a403f726a3aa41b8be8a96dc4a227f229abf8f0c0764837d5"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-change-proposed",
    "reason": "All five direct item consumers of the changed definition are draft original-frontier items. Their consumed mathematical clauses remain sound. No potentially defective published or outside-frontier item consumer was found; the draft owning page is also sound. No published maintenance finding or repair is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "pthm-em-general-wave-ivp",
    "outcome": "confirmed_nonfatal",
    "finding": "False F1(d) omitted initial support containment, but actual application in step 6.3 satisfies the full supplier hypotheses.",
    "resolution": "Repaired F1(d) by requiring Ka union Kb union Kh contained in the same closed ball; original Statement and scope retained.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "pthm-em-wave-energy-average",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "finding": "Unlicensed physical balance interpretation and narrower momentum theorem application without Lorentz continuum coupling (ii).",
    "resolution": "Explicit conditional interpretation premise for an empty-matter model; complete supplier hypotheses checked; algebraic average formulas preserved.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "texp-em-radiation-pressure-example",
    "route": "frontier-owner",
    "finding": "Proof 2.1 invokes pthm-em-momentum-balance(b) with only smooth source-free Maxwell and A3=AComega; the supplier Statement explicitly also assumes Lorentz continuum coupling(ii).",
    "resolution": "Proposed separate owner repair only; outside this unit write scope, no item edit or adjudication performed. Numerical average use of the repaired supplier remains sound.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no_updates",
    "reason": "All five direct item consumers of the changed wave-energy-average interface are draft original-frontier items; none is published or outside the frontier. No published consumer finding or repair is claimed.",
    "path": "research/published-consumer-supplier-ledger.md",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed_finding",
    "id": "lem-em-exponential-character-open-set-independence",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "34",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired_locally",
    "reason": "Confirmed F4 used undefined coordinate n and omitted coordinate 0 relative to def-euclidean-inner-product. Repaired with the explicit bijection x_k=x(k-1), tail map x′(r)=x(r+1), and dimension-one evaluation at 0. The nonzero annihilator, product-box induction and conjugate grouping are valid; no choice is used, and the Statement is unchanged.",
    "evidence": {
      "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u34.json",
      "context_sha256": "ba5edfaf8d2702862179c031315c4f88889448163021f46f65b5edfeafe16411",
      "post_sha256": "db4246fd573cec505b2732673dd7f509fcee965970ce78b452eb3763d533548c"
    },
    "review_status": "Local adjudicator repair check only; independent rejudgment and certification remain controller duties.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed_finding",
    "id": "def-em-medium-wave-parameters",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "34",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired_locally",
    "reason": "Definition(d) wrongly made epsilon*mu>=c^-2 sufficient for exact broadband scope, whereas post-em-material-closure(b) makes it necessary for a separately adopted interpretation. Repaired that implication without changing any parameter formula. Checked radicands, p>0, q>0 iff sigma>0, 2pq=b and the selected root uniqueness; no material validity or measurements are inferred.",
    "evidence": {
      "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u34.json",
      "context_sha256": "7ff6ec7c11fbe46e15de18e34996c61494b244fec6139162a2d0f9ed4d000c70",
      "post_sha256": "8389a1c926781e1a7dafd0676052f3969717efa8c699c96eff96fac29b933233"
    },
    "review_status": "Local adjudicator repair check only; independent rejudgment and certification remain controller duties.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed_finding",
    "id": "ex-em-skin-depth-approximation-example",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "34",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired_locally",
    "reason": "Confirmed A1 omitted the skin-depth theorem’s nonzero transverse plane-wave and amplitude hypotheses. Step 1.1 now constructs k=(p+iq)u_3, e=E_*u_1, h=(p+iq)E_*u_2/(mu*omega), verifies all four amplitude conditions and uses pthm-em-medium-plane-wave-fields(b) to supply a smooth ideal solution, bounded on x_3>0. The exact radicals and t=3/25 then instantiate the bounds legitimately; sigma=0 remains a separate definition case. All displayed decimals were computed from the radicals and round correctly.",
    "evidence": {
      "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u34.json",
      "context_sha256": "3f639970efbac7c44dbcbaed97272c6d9522ec2e7c4d6b723055181ac29672cb",
      "post_sha256": "84ab6a17e86683f296f902e0fca5cbfc79668932b8fd8e86953a9a43ed2b8660"
    },
    "review_status": "Local adjudicator repair check only; independent rejudgment and certification remain controller duties.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed_finding",
    "id": "ex-em-brewster-angle-example",
    "run": "physics-em-sr-40-2026-10-08",
    "batch": "34",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "repaired_locally",
    "reason": "Confirmed F2 called tangent the principal inverse, but def-principal-inverse-tangent defines tan:(-pi/2,pi/2)->R as the bijection and arctan:R->(-pi/2,pi/2) as its inverse. This is nonfatal because the proof uses the correct tangent ratio/Pythagorean identities and A1’s unique angle, not an inverse with the erroneous domain. Repaired F2 and separated F1’s medium formulas from its oblique-interface wavevector conventions. Direct calculation gives sin(theta_B)=3/sqrt(13), cos(theta_B)=2/sqrt(13), equal p-admittances, r_s=-5/13, t_s=8/13 and R_s+T_s=1; the propagating-angle and nonzero-denominator hypotheses hold.",
    "evidence": {
      "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u34.json",
      "context_sha256": "c2eddd0461c69d49579f26aeeda29ce07e1106364f63544ddc4bb5dfde1acd98",
      "post_sha256": "26dcff778f5deecc46608262b4216e6830d69aef1c17e0dcac56156a3f49212f"
    },
    "review_status": "Local adjudicator repair check only; independent rejudgment and certification remain controller duties.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_new_maintenance_finding",
    "reason": "The inspected published coordinate and inverse-tangent definitions are accurate; the defects were in assigned draft restatements. All eight direct consumers of the medium Definition(d) change are draft frontier items and their exact uses remain sound. No published or outside-frontier consumer is affected and no published carrier was edited or adjudicated. Preserve all existing maintenance findings.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "lem-em-rectangular-transverse-mode-completeness",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "initial",
    "round": 1,
    "unit": "35",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "context_sha256": "8c772889840da7ee7dcf702c8a5b6d79fd03967c325f9bd82fc6debaf622f70c",
    "post_sha256": "25fe8d6c5dd4d08ad2b02704568f6e73e9578edc5ebdb374d614a0a78884f35a",
    "disposition": "fixed",
    "reason": "Step 5.1 asserted a false coefficient conversion: with v_i=u_i/||u_i||, <f,v_i>v_i=(<f,u_i>/||u_i||^2)u_i. At L=4, f=c_0=1, ||c_0||=2 and the normalized coefficient is 2, so multiplying it by 2 yields 4c_0 rather than c_0. Repaired with the exact identity and division rule; the Statement and its already-established completeness claims are unchanged. The fatal type is logic because the displayed expansion inference was false, not a missing citation. Also corrected squared-norm terminology in step 2.3.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u35.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-em-guide-cavity-geometry",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "initial",
    "round": 1,
    "unit": "35",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "context_sha256": "14a195d123c4a14880bae2c692886b2aa380e224936b5a57b17d00504e27024d",
    "post_sha256": "78a98ea1f7338aaaf1628f2d0e23a9ee335178690ef0c084108174ae6000c794",
    "disposition": "fixed",
    "reason": "Clause (b) used E=B=0 in the conductor to replace the D,H jumps by minus the filling traces. That does not follow: def-em-polarization-magnetization(d) gives D=P and H=-M when E=B=0, with no constitutive relation fixing P,M. The stationary-jump supplier concludes sigma_f=n dot(D_cond-D_fill), K_f=n cross(H_cond-H_fill); I repaired the definition to use these general readings and to make the filling-only formulas conditional on D_cond=H_cond=0. The fatal type is logic because the missing conductor-side assumption makes the original inference invalid.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u35.json",
    "uncertain": false,
    "source_urls": [
      "https://farside.ph.utexas.edu/teaching/em/lectures/node105.html"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "pthm-em-rectangular-mode-candidates",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "initial",
    "round": 1,
    "unit": "35",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "context_sha256": "3fabfbf6585d4fa5744f94d793b4146c40ffad6c7bebf1229c61a56e668ccff4",
    "post_sha256": "7c9833df0331ebdc54e1e789a8207ec2eaa69c4458de2813c1ebddba005ddcd7",
    "disposition": "fixed",
    "reason": "The original TE H_z=h_mn and TM E_z=e_mn assigned dimensionless profiles to SI field quantities with units A/m and V/m, without a numerical-component convention. This is a physical quantity/unit interface defect (other), rather than a wrong curl calculation or missing dependency citation. Added positive real longitudinal amplitude quantities H_* (A/m) and E_* (V/m) to both field pairs and explicit units for all parameters. The proof uses scaled real profiles, so each linear eigen/divergence/curl/trace identity holds unchanged. Also repaired the nonfatal cutoff parenthetical: TE H_t and TM E_t vanish at beta=0, while both complete field pairs remain nonzero.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u35.json",
    "uncertain": false,
    "source_urls": [
      "https://farside.ph.utexas.edu/teaching/em/lectures/node105.html"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The complete direct dependency/reference inventories for the two changed interfaces contain only draft items inside the frozen frontier. No defective published use or outside-frontier consumer was found in these examined uses; preserve existing unrelated published-maintenance records without change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "physics-em-sr-40-2026-10-08-step7-initial-r1-u36-ftc-basepoint",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T04:48:03.294826+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-em-sphere-zonal-moments",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "batch": "36",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u36.json",
          "note": "F6 falsely used basepoint 0 for arbitrary [a,b], but step 4.1 actually used [-1,1], so the deduction was valid. Corrected F6 to a<b and P(u)=integral_a^u f with one-sided endpoint derivatives, and step 4.1 to basepoint -1. The spherical Jacobian, null seam, signed integrals, reflection cancellation and moment values remain valid; the Statement is byte-for-byte unchanged."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u36.json",
          "obligation": "initial:1:36:lem-em-sphere-zonal-moments"
        }
      ],
      "correction": "F6 falsely used basepoint 0 for arbitrary [a,b], but step 4.1 actually used [-1,1], so the deduction was valid. Corrected F6 to a<b and P(u)=integral_a^u f with one-sided endpoint derivatives, and step 4.1 to basepoint -1. The spherical Jacobian, null seam, signed integrals, reflection cancellation and moment values remain valid; the Statement is byte-for-byte unchanged."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "physics-em-sr-40-2026-10-08-step7-initial-r1-u36-emission-time-rate",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T04:48:03.294858+00:00",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "fatal",
      "location": "remark",
      "subject": "rem-em-radiation-reaction-limits",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "batch": "36",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u36.json",
          "note": "Clause (c) falsely denied any coordinate-time rate although Lienard (d) defines power per unit emission time and Larmor (e) identifies the instantaneous-rest fixed-sphere flux. Replaced that false assertion with the supplied laboratory-emission-time power and rest-flux convention; only the mechanical energy-loss rate and back-reaction remain unspecified. The other clauses retain nonzero/zero charge branches and the valid localized Gauss-test obstruction to a C1 sourced extension."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u36.json",
          "obligation": "initial:1:36:rem-em-radiation-reaction-limits"
        }
      ],
      "correction": "Clause (c) falsely denied any coordinate-time rate although Lienard (d) defines power per unit emission time and Larmor (e) identifies the instantaneous-rest fixed-sphere flux. Replaced that false assertion with the supplied laboratory-emission-time power and rest-flux convention; only the mechanical energy-loss rate and back-reaction remain unspecified. The other clauses retain nonzero/zero charge branches and the valid localized Gauss-test obstruction to a C1 sourced extension."
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No defective published supplier or consumer was discovered. The changed radiation scope has only one direct item consumer, the draft outside-frontier rem-em-classical-validity-limits; its exact clause (c) remains sound and is routed to consumer maintenance without editing it."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-em-relativistic-lorentz-force",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal: F8 omitted a<b in both MVT restatements, whereas cor-mean-value-theorem and thm-cauchy-mean-value explicitly require it; a=b=0 makes the asserted interior witness impossible. Restored the shared real-endpoint hypothesis. Actual uses remain valid: step 1.3 compares distinct endpoints; step 1.4 handles z=0 separately; steps 2.1-2.2 use 0<z and 0<xi<z. No conclusion or physical interface changed.",
    "repair": "Added real endpoints a<b as a shared hypothesis of both F8 mean value statements.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-em-constant-field-trajectory",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal source-attribution error: Tong §5.4.2 gives the constant-electric-field trajectory, while Beisert §9.4 ends with general force/power equations (9.70)-(9.71) and contains no such solution. Fitzpatrick nodes 126-127 give the momentum, force and power relations. Replaced the collective attribution with the sources' distinct contributions; the independently differentiated trajectory and error bounds are unchanged.",
    "repair": "Source notes now distinguish the explicit trajectory source from the general dynamics references.",
    "uncertain": false,
    "source_urls": [
      "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf",
      "https://farside.ph.utexas.edu/teaching/em/lectures/node126.html",
      "https://farside.ph.utexas.edu/teaching/em/lectures/node127.html",
      "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append_adjudication",
    "id": "exp-em-inverse-square-report",
    "model": "gpt-6.1-sol",
    "context_sha256": "220058709585f6210492ae9682f2d21894cf1cc5e68c8b7c7796f551ea762b58",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "repaired",
    "post_sha256": "ec5056a4c3311bc0fdbec47b0f9e60d69bdfe705e209dfaeb005e35093ccc67c",
    "reason": "Cavendish arts. 220-230 explicitly apply pith balls to the inner globe and art. 224 places a separate charging-level electrometer on the prime conductor. Arts. 248-249 describe charging monitors in the subsequent charge-comparison apparatus; art. 249 suspends the straw electrometer from the prime conductor. The original Setup and empirical_result.conditions wrongly made it a later inner-globe detector. This is a public apparatus/source-fidelity defect, not a failure of the qualitative null observations. Corrected both clauses without adding numerical calibration or exponent precision.",
    "uncertain": false,
    "source_urls": [
      "https://archive.org/download/electricalresea00cavegoog/electricalresea00cavegoog_djvu.txt"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append_adjudication",
    "id": "ex-em-apparatus-model-ambiguity",
    "model": "gpt-6.1-sol",
    "context_sha256": "a542b9e7dd4c4eb760711905b8af42494fffc0724a08c00dcecb762d200d6288",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "post_sha256": "21c6e0a9841790a8bbc4ea6b98c8e23b73d31a05f156323a0b485ca5e8db6dd6",
    "reason": "Clause (c) of def-em-experiment-record-contract explicitly includes declared apparatus, preparation, controls and environment descriptions. Original F2 wrongly said apparatus properties were absent from the vocabulary, confusing a declaration with a proof of its correctness. Replaced F2 with the actual clauses (c), (d), (e), (g), (h) and (i). This is nonfatal to the exact affine nonidentifiability: distributivity gives G(s+delta)+b-G delta=Gs+b; equality and radius bounds depend only on that common prediction, and fixing either parameter distinguishes members of its equal-prediction fiber.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append_adjudication",
    "id": "ex-em-ideal-and-measured-fringes",
    "model": "gpt-6.1-sol",
    "context_sha256": "e470a3131a864e9b9ae9a5e879d37e6155f589fd937b6f8b69e2784b869f770b",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "repaired",
    "post_sha256": "b64aeb4ca3c3a66f8bd7d3357d9d241c2afdd7f54b9d8ec2b4f0283ecbfa804a",
    "reason": "The bound in original Verification 2.4 already proves a finite positive numerical integral under the finite-volume constant-positive-background hypotheses; finiteness is not the missing algebraic step. However, kappa, b and R had no declared units, so the asserted physical rate and the sum kappa|alpha|^2+b lacked dimensional meaning. This fatal physical-typing defect is other, rather than a false integral inequality. Declared an arbitrary fixed accumulated-response SI unit U, dimensionless beam weights, alpha in V/m, volume in m^3, kappa in U s^-1 V^-2 m^-1, background in U s^-1 m^-3 and R in U s^-1. Step 2.4 now explicitly assumes b=b0 and derives both the finite bound and the rate units. Arbitrary measurable windows, general nonnegative backgrounds, the infinite branch and AC_omega are retained.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "reason": "No mathematical defect in a published supplier or published consumer was discovered in this unit. The only item use found for the changed Cavendish interface is a nonlogical tested_by relation in the draft pthm-em-specified-model-comparison, whose qualified comparison remains sound. No outside-frontier consumer or maintenance repair was identified.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-em-compact-variation-example",
    "finding": "SI dimensional inconsistency in Example (b), with the same implicit numerical-value convention needed in (c).",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "repaired",
    "reason": "The original quantity equations A_0=x^1 and E_1=c have incompatible SI dimensions (T m versus m, and V/m versus m/s), so the advertised SI configuration is ill-typed. The repaired example explicitly uses real numerical values in fixed coherent SI units: physical A_0(X)=(1 T)X^1, F_01=-1 T and E_1=c_phys(1 T). This is a dimensional/formulation defect, classified other; the differentiation and signs themselves were correct.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_published_consumer_update",
    "supplier": "ex-em-compact-variation-example",
    "reason": "An exact ID/reference search across items and library found no direct item consumers or published consumers. The only home-page use is draft page em-action-and-variational-formulation-examples; its normalization clarification is recorded separately for maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "def-sr-chart-tetrad-and-congruence-distinction",
    "consumer": "cex-sr-born-rigid-motion-need-not-be-killing",
    "path": "items/cex-sr-born-rigid-motion-need-not-be-killing.md",
    "affected_use": "Statement refuted, False claim: The claim quantifies over one smooth future unit field n; its counterexample does not identify n with a four-vector tuple.",
    "invalidated_claim": null,
    "minimality": "No consumer repair is necessary: clauses (a)-(d) are unchanged and this use already keeps the single time field separate.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "def-sr-chart-tetrad-and-congruence-distinction",
    "consumer": "def-sr-experiment-interface-vocabulary",
    "path": "items/def-sr-experiment-interface-vocabulary.md",
    "affected_use": "Definition (a), run descriptions: Run tuple entries include a future unit timelike vector or smooth congruence; the single-field meaning remains unchanged.",
    "invalidated_claim": null,
    "minimality": "No consumer repair is necessary: clauses (a)-(d) are unchanged and this use already keeps the single time field separate.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "def-sr-chart-tetrad-and-congruence-distinction",
    "consumer": "def-sr-observer-congruence-and-kinematics",
    "path": "items/def-sr-observer-congruence-and-kinematics.md",
    "affected_use": "Definition introduction and Remarks (b): Kinematics starts with a single congruence n, and its observers satisfy x′=n composed with x; the corrected e0 identification agrees.",
    "invalidated_claim": null,
    "minimality": "No consumer repair is necessary: clauses (a)-(d) are unchanged and this use already keeps the single time field separate.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "def-sr-chart-tetrad-and-congruence-distinction",
    "consumer": "lem-sr-fermi-walker-transport-existence-and-uniqueness",
    "path": "items/lem-sr-fermi-walker-transport-existence-and-uniqueness.md",
    "affected_use": "Statement last sentence and Proof 5.2: The prescribed tetrad is a tuple of four vectors, while E0=U/c is separately its time leg; no full-tuple congruence equality is used.",
    "invalidated_claim": null,
    "minimality": "No consumer repair is necessary: clauses (a)-(d) are unchanged and this use already keeps the single time field separate.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "def-sr-chart-tetrad-and-congruence-distinction",
    "consumer": "thm-sr-fermi-walker-and-rigid-observer-examples",
    "path": "items/thm-sr-fermi-walker-and-rigid-observer-examples.md",
    "affected_use": "Facts F7: F7 explicitly separates an ordered orthonormal tetrad from one smooth future unit congruence n, and its constructions use that separation.",
    "invalidated_claim": null,
    "minimality": "No consumer repair is necessary: clauses (a)-(d) are unchanged and this use already keeps the single time field separate.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "def-sr-chart-tetrad-and-congruence-distinction",
    "consumer": "thm-sr-local-congruence-adapted-charts-and-frobenius",
    "path": "items/thm-sr-local-congruence-adapted-charts-and-frobenius.md",
    "affected_use": "Statement (i),(iii) and Proof 1.1: The flow-box proof applies to one nowhere-zero field n, and adaptation keeps three spatial coordinates constant along its curves.",
    "invalidated_claim": null,
    "minimality": "No consumer repair is necessary: clauses (a)-(d) are unchanged and this use already keeps the single time field separate.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "def-sr-chart-tetrad-and-congruence-distinction",
    "consumer": "thm-sr-smooth-local-herglotz-noether",
    "path": "items/thm-sr-smooth-local-herglotz-noether.md",
    "affected_use": "Statement introduction, Facts F3 and Proof 1.2: The rigid-motion proof uses one smooth future unit field n=partial_s in a flow box; spatial coframe members are defined separately.",
    "invalidated_claim": null,
    "minimality": "No consumer repair is necessary: clauses (a)-(d) are unchanged and this use already keeps the single time field separate.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "lem-sr-boost-time-length-and-velocity-formulas",
    "consumer": "ex-sr-length-contraction-of-a-moving-rod",
    "path": "items/ex-sr-length-contraction-of-a-moving-rod.md",
    "affected_use": "Example, L2, Proof 1.1-1.3: The explicitly fixed endpoints x′1=0,5 have vanishing transverse coordinates, so the longitudinal supplier hypothesis holds.",
    "invalidated_claim": null,
    "minimality": "No consumer item edit is required for this interface correction; the affected use either meets the longitudinal hypothesis or consumes another unchanged clause.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "lem-sr-boost-time-length-and-velocity-formulas",
    "consumer": "ex-sr-time-dilation-at-beta-three-fifths",
    "path": "items/ex-sr-time-dilation-at-beta-three-fifths.md",
    "affected_use": "Example (b), Facts L3: Uses the unchanged clock-rate clause (i), not the corrected length clause.",
    "invalidated_claim": null,
    "minimality": "No consumer item edit is required for this interface correction; the affected use either meets the longitudinal hypothesis or consumes another unchanged clause.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "lem-sr-boost-time-length-and-velocity-formulas",
    "consumer": "ex-sr-twin-simultaneity-gap-at-the-turn",
    "path": "items/ex-sr-twin-simultaneity-gap-at-the-turn.md",
    "affected_use": "Given and Facts L1: Uses the affine boost transition and clock rate for the turn computation; no rod-length conclusion is consumed.",
    "invalidated_claim": null,
    "minimality": "No consumer item edit is required for this interface correction; the affected use either meets the longitudinal hypothesis or consumes another unchanged clause.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "lem-sr-boost-time-length-and-velocity-formulas",
    "consumer": "ex-sr-velocity-transformation-worked",
    "path": "items/ex-sr-velocity-transformation-worked.md",
    "affected_use": "Example (a)-(c), Facts L1: All three cases use the unchanged velocity transformation (iv) and positive denominators.",
    "invalidated_claim": null,
    "minimality": "No consumer item edit is required for this interface correction; the affected use either meets the longitudinal hypothesis or consumes another unchanged clause.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "lem-sr-boost-time-length-and-velocity-formulas",
    "consumer": "pthm-sr-local-stress-energy-conservation",
    "path": "items/pthm-sr-local-stress-energy-conservation.md",
    "affected_use": "Facts F4 and Proof 1.5: The volume computation explicitly contracts the parcel’s parallel length and leaves transverse lengths unchanged, so its V0/gamma conclusion stays valid.",
    "invalidated_claim": null,
    "minimality": "No consumer item edit is required for this interface correction; the affected use either meets the longitudinal hypothesis or consumes another unchanged clause.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "lem-sr-boost-time-length-and-velocity-formulas",
    "consumer": "pthm-sr-observer-time-length-and-velocity-measurements",
    "path": "items/pthm-sr-observer-time-length-and-velocity-measurements.md",
    "affected_use": "Statement (ii), Facts F1(ii), Proof 1.3: The forward half refers to the longitudinal y_a,y_b; the symmetric sentence says only a rod at rest in x has length L0/gamma, omitting alignment. A transverse rod refutes that unconstrained reading.",
    "invalidated_claim": "Unqualified symmetric length claim for a rod at rest in x.",
    "minimality": "Add along the boost direction with vanishing transverse separation to the symmetric Statement (ii), F1(ii) and matching Proof 1.3 use; the forward named endpoint construction and clauses (i),(iii),(iv),(v) need no change.",
    "disposition": "necessary_repair",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "lem-sr-boost-time-length-and-velocity-formulas",
    "consumer": "rem-sr-twin-acceleration-and-synchronization-caveats",
    "path": "items/rem-sr-twin-acceleration-and-synchronization-caveats.md",
    "affected_use": "Moving clocks run slow paragraphs, citations (i): Both references use only the unchanged clock-rate clause (i), so the synchronization discussion remains sound.",
    "invalidated_claim": null,
    "minimality": "No consumer item edit is required for this interface correction; the affected use either meets the longitudinal hypothesis or consumes another unchanged clause.",
    "disposition": "unchanged_sound",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_adjudication",
    "id": "lem-sr-closed-one-form-primitive-on-simply-connected-open-sets",
    "phase": "initial",
    "round": 1,
    "model": "gpt-6.1-sol",
    "context_sha256": "6fe9bfcef6c9f8aee4f9b15987fd35fa539173b2b199fa1181d714f3edca85ef",
    "outcome": "confirmed_fatal",
    "reason": "F9 and step 1.1 require a map R^4 to R, whereas thm-chain-rule permits only real-to-real composites. Replaced that load-bearing citation and dependency with the published thm-chain-rule-for-total-derivatives; continuous coefficient partials meet its total-differentiability hypotheses. The affine transition derivative is M, giving the stated gradient and integral invariance. The finite homotopy mesh cancels interior edges, local C1 primitives are C2, and uniqueness of path integrals defines the global primitive without Choice. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_adjudication",
    "id": "def-sr-chart-tetrad-and-congruence-distinction",
    "phase": "initial",
    "round": 1,
    "model": "gpt-6.1-sol",
    "context_sha256": "98b08f2e5c347014fb85de956edcb396c09d0fbd0dee3bfcf98289ab8cd00458",
    "outcome": "confirmed_nonfatal",
    "reason": "Clause (c) correctly defines an observer congruence as one smooth future unit vector field; clause (e) incorrectly identifies that object with an ordered four-vector coordinate frame. This is a nonfatal explanatory type error because the defining clauses (a)-(d) are unambiguous. Replaced the sentence by the separate tetrad identification and n=partial/partial x0=e0, with its constant-spatial-coordinate integral curves. No congruence, tetrad, chart or adaptation hypothesis changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_adjudication",
    "id": "def-sr-observer-congruence-and-kinematics",
    "phase": "initial",
    "round": 1,
    "model": "gpt-6.1-sol",
    "context_sha256": "3301c5aa5ae9946b8f4f99e976155bc32ac31708012dc2c3197869d4c5206f03",
    "outcome": "confirmed_fatal",
    "reason": "The observer identity x′(s)=n(x(s)) differentiates a composite with target R4, outside thm-chain-rule’s real-to-real interface. Replaced its dependency and Remarks (b) citation by thm-chain-rule-for-total-derivatives, adding thm-continuous-partial-derivatives-imply-total-differentiability to identify Dn with its Jacobian. The open integral-curve interval and smooth n meet the hypotheses; tau′=1/c then gives U=cn, U′=c Dn x′=c a and A=U′/tau′=c2 a. Projection, decomposition uniqueness and L_n h=2 theta remain valid. Definition unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_adjudication",
    "id": "lem-sr-boost-time-length-and-velocity-formulas",
    "phase": "initial",
    "round": 1,
    "model": "gpt-6.1-sol",
    "context_sha256": "45772f35fbd48c313c5b08ffa1fa62960bccd8a3292038f7b33c6d652306f72a",
    "outcome": "confirmed_fatal",
    "reason": "For x-rest worldlines with displacement (0,L0,0), equal primed times give Delta x0=0 and unchanged transverse length L0, contradicting clause (ii)(c) when v is nonzero. Completed its longitudinal hypothesis by requiring constant spatial displacement (L0,0,0); Proof 2.2 now explicitly solves Delta x0=(v/c)L0 and Delta x′1=L0/gamma. The existing claim and contract concern longitudinal rods; the new remark also computes arbitrary displacement (ell1/gamma,ell2,ell3), preserving the transverse caveat. F6 additionally overstated a scalar supplier, so replaced it by exact one-parameter derivative algebra used in Proof 2.4.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_adjudication",
    "id": "thm-sr-smooth-local-herglotz-noether",
    "phase": "initial",
    "round": 1,
    "model": "gpt-6.1-sol",
    "context_sha256": "72738280a4e02c5bdf3b6d72332b1430e0b3b5a8380918f893e00ce9f3483431",
    "outcome": "confirmed_fatal",
    "reason": "F11/F12 cited the real-to-real chain rule for maps with several inputs, including the implicit label and vector field along curves. Replaced it with published total-derivative calculus and explicitly supplied Jacobian hypotheses, coordinate-line derivative algebra, induction for smooth composites, positive square roots through the choice-free inverse function theorem, and exp smoothness/positivity. Checked the local coframe curvature and mixed identities, basic vorticity/acceleration, Cartan contraction giving da-flat=0, positive Killing rescaling, affine Killing dichotomy, and the implicit-label converse. Corrected two nonfatal proof qualifications: a local leaf is an open subset of its hyperplane, and partial_s f equals N only after evaluating at the label. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math-ph/0602018"
    ],
    "familiar": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "Every examined direct item consumer is draft. No published item was changed and no defect in a published mathematical supplier was established: the scalar chain-rule theorem is valid within its actual real-to-real interface; the defect was its assigned consumers’ attribution. The affected unqualified rod consumer is routed to its frozen-frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "supplier": "lem-sr-boost-time-length-and-velocity-formulas",
    "consumer_page": "sr-observer-measurements",
    "path": "library/special-relativity/sr-observer-measurements.md",
    "affected_use": "Measurement-consequences paragraph previously said the length comparison L0/gamma without specifying the boost-axis alignment.",
    "invalidated_claim": "A general length ratio independent of rod orientation would be false.",
    "minimality": "Changed only the owning page summary to longitudinal length comparison along the boost direction; all other page uses remain sound.",
    "disposition": "repaired_page_only",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-em-harmonic-forcing-periodic-response",
    "model": "gpt-6.1-sol",
    "context_sha256": "ad2f57496cccd897bfa0d0d7a9914dd9d1171cce9cc6ee70f8be0b5c978e745a",
    "action": "record_step7_adjudication",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal sign-substitution error in step 1.1: the imaginary coordinate of exp(-i omega t) is -sin(omega t). Replacing s=sin by s=-sin yields alpha cos+beta sin, exactly the already correct displayed forcing and particular solution. Step 2.1 independently multiplies the correct factors; the affine classification, local global extension, periodicity criterion and FTC mean remain valid without any claim change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect-ledger",
    "id": "def-em-monochromatic-source-free-phasors",
    "model": "gpt-6.1-sol",
    "context_sha256": "ffce2622aa13aa19a81231291c6e6de3568be1072317043b674dfbcca676dc2b",
    "action": "record_step7_adjudication",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The well-definedness equivalence falsely tested only the six real coordinates of E for smoothness of both E and B. On R^3, E=0 and B=(|x_1|,0,0) refute that standalone equivalence. Repaired it to test Re/Im of all three components of each field, twelve maps in total, in accord with the Euclidean C-infinity definition. The four phasor equations, domains, units and physical scope are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-em-rectangular-aperture",
    "model": "gpt-6.1-sol",
    "context_sha256": "55f681887497a58c48b92b13af9d70187faf02e0a6daa8d51b163120d8f109b0",
    "action": "record_step7_adjudication",
    "outcome": "false_positive",
    "reason": "False positive: the frozen parent pthm-em-scalar-aperture-diffraction has guard 42bc66be4295fc0797e18d75f8fcd9ff42ddad4773af43b7c8ac32590242f932, unchanged on review. Its proof 1.2 derives |R-r+n dot y|<=2a_0^2/r and |r/R-1|<=4a_0/r at r>=2a_0. Proof 2.1 combines these with |exp(i theta)-1|<=|theta| and integrates against total variation to prove exactly TV/(pi r)[a_0/r+k a_0^2/r]; Remarks records that quantitative result. F1 and example 4.1 correctly reuse this established bound with a_0=sqrt(a^2+b^2), despite the parent Statement abbreviating it as uniform O. No extra local derivation or claim weakening is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no_new_published_finding",
    "reason": "The only direct item consumer of the changed phasor Definition is draft frontier PEC scattering. Its smoothness requirements and explicit construction remain sound. No published or outside-frontier consumer finding was identified in this unit; mathematical imports were read as suppliers and left unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/published-consumer-supplier-ledger.md"
  },
  {
    "ledger": "canonical_defect_ledger",
    "id": "cex-sr-reverse-cauchy-schwarz-fails-outside-the-cone-pair",
    "model": "gpt-6.1-sol",
    "context_sha256": "28ba96f126c811bea3cb8e91c99e373cb5b7bcb93bd4a2e8c738c5e79b1d8394",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "repaired",
    "reason": "Step 2.2 falsely identifies failure of U1 with the sum leaving the future cone: (2,0,0,0)+(-1,0,0,0) is future timelike despite -2<2. The independent computations -34<16 and 1<sqrt(2) already refute U1 and U2, so the defect is nonfatal. Repaired only the extraneous equivalence, preserving both witnesses and Statement refuted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical_defect_ledger",
    "id": "def-sr-inertial-and-piecewise-inertial-worldline",
    "model": "gpt-6.1-sol",
    "context_sha256": "6610db736ec2643ac7a1cff6ff7fa590c1ebcb1f4e76cc382de78b08cc8b5dd2",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "Definition (a) asserted inertial-worldline closure under all subinterval restrictions, but a singleton J=[0,0] has fewer than the two domain elements required by the curve definition and no defined quotient derivative. Added the necessary at-least-two-elements condition, the reanchored formula x(s)=x(t0)+(s-t0)d on J, and the singleton exclusion; preserved all nondegenerate inertial and piecewise inertial claims.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical_defect_ledger",
    "id": "lem-sr-endpoint-displacement-of-a-future-timelike-worldline",
    "model": "gpt-6.1-sol",
    "context_sha256": "14894db3ef351d2c9a66a03ec72725b4ac64a6c3680f5faf15193512a14955e5",
    "outcome": "false_positive",
    "defect_type": null,
    "status": "false_positive",
    "reason": "The Statement and Given assume a future timelike worldline in the exact weak sense of def-sr-regular-causal-curve-and-worldline. Its Worldlines clause explicitly requires future timelike one-sided quotient tangents at both endpoints of every piece; thus those tangents are nonzero future causal and satisfy the integrability supplier. The example y(s)=(s^2,0,0,0) on [0,1] has zero tangent at 0 and is not such a worldline. F1 states consequences of the assumed worldline rather than replacing its definition.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical_defect_ledger",
    "id": "texp-sr-piecewise-inertial-twin-reunion",
    "model": "gpt-6.1-sol",
    "context_sha256": "b0384a9cdee905b9760b3c758a31f351dd39b3f60cfc4760b813a5642cc36b14",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "The clock postulate defines C(b)-C(a) and leaves C(a) arbitrary, so neither absolute readings 2T and 2T/gamma nor the final traveler-behind ordering followed from the original setup. For example initial traveler reading 3T reverses the ordering. The repaired preparation sets both maps to zero at p, and steps 2.2-2.3 derive their increments before using those initial settings; geometry and proper-time values are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical_published_consumer_ledger",
    "action": "no_new_published_finding",
    "reason": "All five direct item consumers identified for the two changed interfaces are draft items in the frozen frontier. No published consumer or outside-frontier item consumer was found by the complete current items/library reference search. Page preparation correction is proposed separately in page_impacts, for owner maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed-finding",
    "subject": "lem-sr-future-causal-pairing-negative",
    "source_rejection": {
      "id": "lem-sr-future-causal-pairing-negative",
      "model": "gpt-6.1-sol",
      "context_sha256": "88a554a69b720d1bfcddebc65a10f2d989eca8a13576471356adb82c5b816f97"
    },
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "Confirmed ill-typed central proof expressions: delta has domain S x S, but original L5 made x_vec a real coordinate triple and step 1.1 added it to x0 e0 in V. L3, L5 and step 1.1 now define x_vec=sum_i x^i e_i in S. Finite-sum Cauchy-Schwarz applies to its three coordinates; n0>|n_vec| and v0>=|v_vec| with v nonzero give v0>0 and eta(n,v)<0. Negation, the exhaustive future/past null split and positive normalization prove (b)-(d). Statement is unchanged.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u7.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed-finding",
    "subject": "def-sr-null-wave-covector-and-observer-frequency",
    "source_rejection": {
      "id": "def-sr-null-wave-covector-and-observer-frequency",
      "model": "gpt-6.1-sol",
      "context_sha256": "dff744d6b3a885cfea3089feca3c56c2d97d46b69f2794a419649f99b4da15c9"
    },
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "Confirmed wrong supplier interface: the causal-pairing lemma Statement (a)-(d) supplies Lorentzian sign and normalization results, not Euclidean Cauchy-Schwarz. Its internal L6 is not an exported conclusion. The angular convention now directly depends on thm-cauchy-schwarz-finite, states dot product and norm on R3 in a named frame, applies its root inequality to the three real entries, and divides by positive nonzero norms. The angular map, wave data, observer sign, units and physical scope are preserved; FTC/MVT/IVT hypotheses and the quarter-circle calculation were checked against exact suppliers.",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u7.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-review-result",
    "subjects": [
      "lem-sr-future-causal-pairing-negative",
      "def-sr-null-wave-covector-and-observer-frequency"
    ],
    "reason": "Both assigned carriers and all 13 examined direct consumers are draft frontier items. No published supplier or consumer defect was found; no outside-consumer maintenance event is required. This records the limited assigned-use check, not a new audit of imported mathematical suppliers.",
    "published_findings": [],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "def-sr-collision-datum-and-conservation",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "repaired",
    "reason": "Confirmed undefined predicate in Definition (c): an arbitrary two-leg datum, such as four zero legs, has no recorded masses. Equal-mass now requires a mass-specified two-leg datum before comparing the paired masses. Clause (d) also qualifies recorded masses as belonging to mass-specified data. Conservation, on-shell legs and all mass-sum formulas are unchanged; no choice or physical premise is used.",
    "post_sha256": "e3604aa178057e2fd5babb038013b29fc425f98585e20c1d91c5df17e34d9b18",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-sr-center-of-momentum-frame",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F1 overstated the observer momentum domain: for P=-e_0 the all-V projection h_e0 vanishes but q_e0 is undefined. Replaced F1 by the supplier definition using h_e0:V->V and stated q_e0=h_e0 only on future causal vectors. This is nonfatal because the Statement and every proof use restrict Q to future timelike or nonzero future null. Independently checked normalization, future orientation, the positive-definite three-dimensional rest space, orientation correction, the positive-energy converse, spatial basis rotations, and the null contradiction; none depends on the overstated domain.",
    "post_sha256": "94e564c2fbaa017b3447530c0340648cd63ff528830bfddba4f292741ab891c1",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "defect-ledger",
    "id": "cex-sr-massless-momentum-not-mu-at-zero-mass",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "The final inference that a massless momentum is therefore a separate model primitive is unsupported: norm calculations constrain P=mU, not the independent variables of an arbitrary physical formulation. Removed this inference, explicitly identified massless four-momentum here as a nonzero future null vector, and retained the complete refutation. For E>0, P=(E/c)(e0+e1) is nonzero future null with observer energy E; for every normalized timelike U, m=0 gives zero and m>0 gives squared norm -m^2c^2<0. The conclusion now concerns direct substitution and leaves mass-dependent limits and physical formulation choices open. Corrected the same unsupported primitive inference in the owning examples page.",
    "post_sha256": "07f4f95fbc2c7993b7175573b491d5d3081cdac9d6ff3115bbba445cb8cb064b",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-sr-equal-mass-head-on-collision-mass",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "Verification 4.1 falsely equated a mass difference to kinetic energy for arbitrary c>0, although its equation correctly gave (M-2m)c^2=T_total. The repaired step explicitly divides by c^2: M-2m=m/2=T_total/c^2>0. The Example now distinguishes mass excess from the corresponding excess rest energy, and the owning page and exact contract derivation use the correct factor. Checked the reflected input momenta, cancellation of spatial parts, Q=(5mc/2,0,0,0), M=5m/2, the displayed center-of-momentum frame, each kinetic energy mc^2/4, and the collision-lemma equality case on the explicitly mass-specified identity datum. All conclusions remain exact mathematical computations with no asserted interaction or measurement.",
    "post_sha256": "4faeae1d5f55e40029c250238b151712e68276c242dda3fc004aa2eb7778af8c",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-sr-perfectly-inelastic-collision-rest-mass",
    "status": "owner-review-required",
    "route": "frontier-owner",
    "outside_assignment": true,
    "edited": false,
    "observed_item_guard": "0f3b95e025eea6520bd48ee2bb463978910bf9eb66b30bcc22433b7e9ebb7747",
    "affected_use": "5.1 Summary: the two-into-one datum with outgoing leg $Q$ conserves and has outgoing rest mass $5m/2>2m$, the excess being the incoming kinetic energy $mc^2/2$; and the same total $Q$ is realised by the alternative outgoing pair of masses $m$ and $3m/2$ at rest, so four-momentum conservation alone fixes only the total, not the number or masses of the outgoing particles. [step 3.1, step 4.1] ∎",
    "path": "items/ex-sr-perfectly-inelastic-collision-rest-mass.md:107",
    "invalidated_claim": "Summary 5.1 calls the excess of outgoing rest mass 5m/2 over incoming mass 2m the incoming kinetic energy mc^2/2. The mass difference is m/2; the energy difference is mc^2/2. This repeats the dimensional error independently of any changed supplier formula.",
    "minimality": "Replace only the summary phrase by the mass difference m/2 or by wording that identifies excess rest energy (M-2m)c^2=mc^2/2. Its Example and F1 already state the correct quantities, so they need no change. This is a proof-only correction, so the unchanged public claim would not trigger another consumer hop.",
    "reason": "An unassigned draft frontier item has a false mass/energy identification in its final summary despite correct earlier formulas. Reported with exact use for its owner; no item, judgment or stamp was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-sr-stress-energy-tensor-and-force-density",
    "action": "record-resolved-finding",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal interface misattribution: def-sr-affine-minkowski-model defines exactly (A,V,eta,C+), without c. The opening already stipulated c>0, so the numerical formulas were valid; repaired the attribution by fixing c as an independent parameter. Clauses (a)-(d) retain the symmetric bilinear field, C1 divergence threshold and transformation theorem (iii),(iv); no conservation or physical reading is deduced.",
    "post_sha256": "dc30edc63ea6d18e4383e935d0765bd2dc16221b0e5b2eabcf8d4b342e9248ee"
  },
  {
    "ledger": "defect",
    "id": "ex-sr-static-tension-stress-balance",
    "action": "record-resolved-finding",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal title defect: with rho=0 and P(s)=-exp(s) on all A, the field is static uniaxial tension but D^1=Pprime=-exp(s) is nonzero and P varies. The Example and Verification already establish D=0 iff P is constant; corrected only the title to require local conservation. Directly checked openness of the coordinate range J, the interval hypothesis of cor-zero-derivative-implies-constant, and the separate vacuous empty-domain branch.",
    "post_sha256": "829d049ac87071f4f1e60de556ae3d6012f8feafa357f7155e616a68d6ea4e2c"
  },
  {
    "ledger": "defect",
    "id": "lem-sr-perfect-fluid-conservation-equations",
    "action": "record-resolved-finding",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "Confirmed fatal dependency-citation gap in Given: open Omega allowed empty, but force-density terminology was invoked from a definition requiring nonempty Omega. Repaired by restricting that invocation to the nonempty branch and proving the empty-domain identity/equivalence vacuously before the numbered argument. Kept all C1 data, arbitrary epsilon/P, and the original identity and equivalence. Statement now explicitly confines comparison with smooth congruence definitions to nonempty Omega; Given also distinguishes locally defined C1 formulas from smooth congruence vocabulary.",
    "post_sha256": "5fccef001f697661fc3f1cc08ef241a814da48fba4a59af790eb178fa78da973"
  },
  {
    "ledger": "defect",
    "id": "ex-sr-dust-stress-energy-under-a-boost",
    "action": "record-resolved-finding",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Confirmed fatal logic error: the passive transformation changes component columns, not the underlying dust direction. If nprime means B(beta)e0 as a vector of V, its primed column is B(beta)^2(1,0,0,0), which at beta=3/5 is (17/8,-15/8,0,0), not (5/4,-3/4,0,0). Repaired Example, Given, F1 and step2.1 to use the unchanged constant field n=e0 on all A and its primed components nprime^a=Lambda^a_0. The correct tensor components and conservation conclusion are preserved.",
    "post_sha256": "e1778c37bf80b5242357ed7755b05ab1d61d331aee8945e95603f82ca3c22b56"
  },
  {
    "ledger": "published-consumer",
    "proposed_updates": [],
    "reason": "All seventeen direct dependency/reference consumers of the two changed interfaces are draft original-frontier items. No published or outside-frontier consumer was found, so no published-consumer maintenance finding or edit is proposed."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "ex-sr-tensor-component-transformation",
  "ex-sr-time-dilation-at-beta-three-fifths",
  "ex-sr-transverse-doppler-protocols-worked",
  "ex-sr-twin-simultaneity-gap-at-the-turn",
  "lem-sr-endpoint-displacement-of-a-future-timelike-worldline",
  "lem-sr-rest-frame-of-a-future-timelike-displacement",
  "thm-sr-endpoint-proper-time-bound-and-flat-maximum",
  "ex-sr-two-leg-itinerary-versus-straight-clock",
  "ex-sr-velocity-transformation-worked",
  "exp-sr-stored-lithium-ion-doppler-time-dilation-2014",
  "lem-em-newtonian-curl-field-energy",
  "lem-em-pec-cavity-eigenfield-boundary-regularity",
  "lem-em-point-retarded-potential-and-fields",
  "lem-lorentz-exponential-map-and-rapidity",
  "lem-sr-scalar-field-hilbert-stress-energy",
  "lem-sr-scalar-field-stress-divergence-identity",
  "lem-sr-uniform-galilean-limit-of-boost-charts",
  "post-em-circuit-approximation",
  "post-em-ideal-magnetostatic-models",
  "post-em-scalar-aperture-model",
  "post-sr-free-trajectories-and-clock-hypothesis",
  "post-sr-matter-models-and-evolution",
  "post-sr-matter-isolation-and-total-stress-energy",
  "pthm-em-action-gauge-source-compatibility",
  "pthm-em-linear-superposition",
  "pthm-em-classical-interference",
  "pthm-em-covariant-stress-energy",
  "pthm-em-retarded-potentials",
  "pthm-em-dipole-radiation",
  "pthm-em-dipole-scattering-cross-section",
  "pthm-em-electric-dipole-torque",
  "pthm-em-electric-general-multipoles",
  "pthm-em-gauge-reachability",
  "thm-em-waveguide-spectral-completeness",
  "pthm-em-uniform-ohmic-modal-decay",
  "pthm-em-open-rectangular-guide-completeness",
  "pthm-em-guide-completeness",
  "pthm-em-guide-dispersion-energy",
  "pthm-em-inductance-reciprocity",
  "pthm-em-integral-maxwell",
  "thm-em-retarded-point-distributional-maxwell",
  "thm-em-retarded-root-and-fields",
  "pthm-em-lienard-wiechert",
  "pthm-em-larmor-nonrelativistic",
  "pthm-em-lienard-emitted-power",
  "pthm-em-normal-fresnel",
  "pthm-em-observer-field-and-doppler",
  "pthm-em-pec-monochromatic-exterior-scattering",
  "pthm-em-point-self-energy-divergence",
  "pthm-em-relativistic-lorentz-force",
  "pthm-em-scalar-aperture-diffraction",
  "pthm-em-specified-model-comparison",
  "pthm-em-weak-field-thomson-limit",
  "pthm-sr-local-stress-energy-conservation",
  "pthm-sr-integrated-conservation-for-isolated-matter",
  "pthm-sr-interval-and-cone-invariance",
  "pthm-sr-newtonian-p-e-correspondence",
  "pthm-sr-radar-synchronization-of-inertial-observers",
  "pthm-sr-observer-time-length-and-velocity-measurements",
  "pthm-sr-same-endpoint-clock-comparison",
  "pthm-sr-specified-model-comparison",
  "rem-em-radiation-reaction-limits",
  "rem-em-classical-validity-limits",
  "rem-sr-continuum-force-and-conservation-scope",
  "rem-sr-doppler-dimensional-restoration",
  "rem-sr-primitive-and-derived-status",
  "texp-sr-piecewise-inertial-twin-reunion",
  "rem-sr-twin-acceleration-and-synchronization-caveats",
  "texp-em-classical-orbit-instability",
  "texp-em-displacement-current-surface-choice",
  "texp-em-radiation-pressure-example",
  "texp-em-sliding-bar-emf"
]




## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

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
