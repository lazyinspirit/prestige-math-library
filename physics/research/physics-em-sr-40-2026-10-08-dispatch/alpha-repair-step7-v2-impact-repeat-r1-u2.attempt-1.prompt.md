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
label: step7-v2-impact-repeat-r1-u2
covers: 2
output: research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-impact-repeat-r1-u2.json

# Step 7 repair: impact-repeat, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/impact-repeat-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-impact-repeat-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"impact-repeat",round:1,unit:"2",input_sha256:"3f3aec1f63c0ffadaf0a166d136dfc09c3d7431d8b04e43b67fd637d958fd66a",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposal",
    "defect_id": "physics-em-sr-40-2026-10-08-step7-repeat-r1-u1-orientation-class-summary",
    "run": "physics-em-sr-40-2026-10-08",
    "subject": "ex-sr-constructing-an-oriented-inertial-frame",
    "class": "accuracy",
    "subclass": "false-claim",
    "severity": "nonfatal",
    "location": "Facts & Assumptions [L4]",
    "caught_at_stage": "7.5",
    "caught_by_role": "alpha-adjudicate",
    "batch": "1",
    "disposition": "fixed",
    "evidence": [
      {
        "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-repeat-r1-u1.json",
        "note": "The rejection is correct: in standard-oriented R^4 the orthonormal bases with coordinate matrices diag(-1,1,1,1) and diag(-1,-1,-1,1) are both negative, while their change-of-basis determinant is +1. The published orientation Definition classifies bases by the sign of their relative determinant, not by joint positivity. This is nonfatal because steps 1.1, 1.2 and 2.1 already use the correct preservation/reversal rule and the construction remains valid. Repaired L4 to state same versus different orientation classes, exactly two classes in positive dimension, and the chosen positive class."
      }
    ],
    "correction": "Replaced same positive class by same orientation class, explicitly distinguished negative determinant, and supplied the positive-dimension two-class hypothesis and positive/negative conventions."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_adjudication_record",
    "id": "lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "repeat",
    "round": 1,
    "unit": "16",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "post_sha256": "082586a84448e3d1c688d4277868c1525e651a32f8de5b71074c629b9af0c6e4",
    "reason": "The empty compact set is admitted by the Statement, but its nonnegative time seminorms had no defined value under the real least-upper-bound convention. The repaired Statement explicitly assigns 0 to empty-set seminorms; step 9.2 proves 0 <= C_m*0 and retains the original pointwise bound for every nonempty compact K.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "record_no_published_consumer_effect",
    "id": "lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain",
    "reason": "The Statement changes only by defining empty-index nonnegative seminorms. All five direct item consumers are draft members of the frozen frontier; each consumes unchanged ambient extension or boundary-jet matching. No published or outside-frontier consumer was found, no published item was edited, and no new published maintenance defect is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "id": "thm-em-spherical-multipole-basis",
    "model": "gpt-6.1-sol",
    "context_sha256": "40278f1005517a2a7d4c6fb448bea6da044ad4b03f403013bea36716efcf675a",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "resolved": true,
    "post_sha256": "95e20f47fc8a0ef1d8100baba6e5ff4a0ec73919b3dd978b5fd8c955f3fd0ad3",
    "reason": "Record the false L2 supplier restatement as a repaired dependency-citation defect: homogeneous harmonic polynomials, including zero, supply the 2l+1-dimensional degree space; general exact-degree harmonic polynomials do not. Preserve original rejection evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "id": "thm-em-spherical-multipole-basis",
    "reason": "No published-supplier defect or consumer maintenance finding was identified. This assigned item is draft and only its Facts restatement changed; its mathematical Statement is byte-for-byte unchanged, so no public-interface event or downstream inventory is required.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "lem-boost-is-proper-orthochronous-with-inverse",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "repeat",
    "round": 1,
    "unit": "2",
    "model": "gpt-6.1-sol",
    "context_sha256": "d30b85a94f03838bdf6bc6fcdf82e90988329c3c958be6fcb691c518c975532d",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "post_sha256": "168289a69ee02915cda82188ac877674619c7b22b8997b8e12fd23377bdba84c",
    "reason": "The Euclidean supplier defines spatial columns as functions on {0,1,2}; its a_3 is undefined. Step 1.1 therefore did not define J or its adapted decomposition. Repaired L2 by declaring the one-based labels a_i:=a(i-1) for i=1,2,3 and the corresponding dot-product sum; the isometry J and all later calculations are now well-typed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "lem-inertial-chart-transitions-are-affine-lorentz",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "repeat",
    "round": 1,
    "unit": "2",
    "model": "gpt-6.1-sol",
    "context_sha256": "6fb85b0704da7969aa24ff650e809f6e66c0b997600d28460b95c0f97d0e69d6",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "post_sha256": "6bf56685e4bde91669449a607255017b5396c0fd1cea506efb50d0c4f590536f",
    "reason": "Step 4.1 applied the coordinate operator A^{-1}:R^4->R^4 to e_0 in V, so z was undefined and the following time-component identity did not follow. Repaired the step by defining epsilon_0=(1,0,0,0) in R^4, z=A^{-1}epsilon_0=M epsilon_0, and E(z)=Le_0=e'_0 in C^+. The Cauchy-Schwarz bound and the inverse argument then establish preservation of the entire closed future coordinate cone.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "Both repairs concern assigned draft mathematical items and leave their Statement sections byte-for-byte unchanged. No published consumer defect was discovered in the assigned review; there is no supplier-interface event to route to consumer maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "id": "def-lorentz-boost",
    "status": "outside_lane",
    "reason": "The draft supplier's component labels beta_i (i=1,2,3) need a stated index convention, and its 1+1 shorthand boldbeta=beta e_1 conflates a spatial coordinate column with a frame vector in V. Route to its frozen-frontier owner; the assigned repairs use the vector formula with their own explicit convention and do not rely on the shorthand.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-em-lab-geometry",
    "model": "gpt-6.1-sol",
    "context_sha256": "e6db5bce45deabdf5e6581211ffa452cc49ba552f15df0585e529257b5ee9442",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "Clause (c) admitted target dimension zero but its C^k supplier only defines positive target dimensions. The local singleton-valued C^infinity and zero-derivative convention now covers m=0 while preserving every positive-dimensional definition and all field ranks.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-em-vacuum-maxwell",
    "model": "gpt-6.1-sol",
    "context_sha256": "ee50b59a2894532bcdd96c0119ccac763a0ca88451eb359c67a7df7ed7621173",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "The weak equations require only the componentwise regular-functional construction and its continuity, not injectivity. The embedding supplier explicitly says its continuity estimate is choice-free; proof step 1.1 establishes distribution existence using the compact-support bound and the finite-order characterization. Countable Choice enters only the injectivity argument in steps 2.1-3.1, which this postulate does not use. Its current owning contract explicitly restricts the citation to that choice-free part.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "ex-em-infinite-line-normalization",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "location": "F6 and Verification steps 1.1, 5.1, 6.1",
    "disposition": "fixed",
    "reason": "The Fubini supplier assumes product L1 and cannot justify its own missing hypothesis from an iterated bound. The declared published Tonelli supplier now proves absolute product integrability for jointly Borel point-field/test-derivative integrands, using finite-box sigma-finiteness, the null axis and the explicit transverse 1/rho majorant. Prior independent records and original round evidence are preserved.",
    "post_sha256": "a579f65939256905364c5e4c7cb849f78ade75b5f077a72ca0c09617ab7c72f0",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-repeat-r1-u25.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "id": "ex-em-infinite-line-normalization",
    "reason": "No published supplier or consumer was repaired and no potentially defective published use was found. The existing published Tonelli statement and point-charge clause supply exactly the uses recorded here; public claims of the draft example remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "id": "pthm-em-inductance-reciprocity",
    "outcome": "confirmed_nonfatal",
    "reason": "F17 omitted the nonnegative-function hypothesis of its published mathematical definition. Restored the exact measure-space domain and nonnegative-integral convention; step 2.2 already satisfies them, so this is a nonfatal supplier-restatement defect.",
    "correction": "Replace the arbitrary measurable-f formulation of F17 by f:X→[0,+∞] on (X,A,mu), with E∈A and the nonnegative integral on the right.",
    "post_sha256": "7025d9ded83ec06c4eb4742938e2ca5149629dd8423593204f9a0f71e476f94b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "em-sr40-step7-repeat-r1-u5-boost-restatement",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T06:04:54Z",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "thm-sr-future-cone-and-flat-domain-of-dependence",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "5",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-repeat-r1-u5.json",
          "note": "Confirmed inaccurate dependency restatement: L7 states that every boost acts in the (0,1)-plane, although def-lorentz-boost defines a vector parameter in R3 and reserves the scalar formulas for the first spatial axis. For beta=(0,1/2,0), B(beta)e0 has coordinates (2/sqrt(3),0,-1/sqrt(3),0), so the asserted plane is false. Step 3.2 needs the general time formula gamma(x0-beta dot x_vec). Replaced L7 by that exact formula, including parameter domain, scalar product, map type and the zero-parameter identity; the existing boost lemma supplies metric preservation, inverse and normalization. This is dependency_citation because the purported supplier restatement is false; no stronger claim or new prerequisite is required."
        }
      ],
      "correction": "Replace axis-specific scalar formulas by the general boost time-coordinate formula already used in Proof 3.2, with explicit beta in R3 and B(0)=identity."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "em-sr40-step7-repeat-r1-u5-partition-knots",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T06:04:54Z",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-sr-future-cone-and-flat-domain-of-dependence",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "5",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-repeat-r1-u5.json",
          "note": "Step 5.1 sums increments over partition knots s_k, whereas the earlier partition is named by a_i,b_i. Given now explicitly identifies s_0=a and s_i=b_i, leaving the argument unchanged."
        }
      ],
      "correction": "Define the equivalent partition-knot notation in Given before its use in step 5.1."
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published supplier or consumer defect was discovered. This assigned draft repair preserves its Statement exactly, so it produces no consumer-maintenance interface event."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_record",
    "id": "lem-sr-null-covector-frame-data",
    "outcome": "confirmed_nonfatal",
    "location": "Proof step 1.3 and Facts & Assumptions [L1]",
    "reason": "The vector-only citation [L4] did not justify the covector terminology. The existing Definition (c) supplies the exact criterion, now explicitly restated in [L1] and cited in the converse; no Statement or Definition changed.",
    "repair": "Completed local citation and fact repair with matching owning-contract updates; controller should merge this evidence without altering original round evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_update",
    "reason": "No published supplier or consumer defect was discovered in this assigned review. Only the draft lemma facts and proof citation changed, with its public Statement unchanged; no published maintenance finding or consumer-interface event is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "pthm-em-tensor-maxwell-equivalence",
  "pthm-em-lorentz-field-transform",
  "ex-em-boosted-fields-example",
  "ex-em-constitutive-unit-counterexample",
  "ex-em-dielectric-interface-example",
  "ex-em-dielectric-sphere-example",
  "pthm-em-coulomb-solution",
  "ex-em-infinite-line-normalization",
  "pthm-em-vacuum-wave-equation",
  "ex-em-polarization-examples",
  "ex-em-quadrupole-symmetry",
  "ex-em-stationary-not-minimum",
  "ex-em-two-charge-dipole",
  "pthm-em-electrostatic-work",
  "pthm-em-electrostatic-field-energy",
  "ex-em-uniform-ball-coulomb",
  "pthm-em-poynting-balance",
  "ex-em-vacuum-energy-flow-example",
  "lem-em-smooth-domain-elliptic-regularity",
  "lem-em-exterior-vector-helmholtz-mixed-boundary-existence",
  "lem-em-parameter-dependent-smooth-poisson-boundary-solvers",
  "lem-em-pec-cavity-eigenfield-boundary-regularity",
  "post-em-circuit-approximation",
  "post-em-electrostatic-conductor-model",
  "post-em-ideal-magnetostatic-models",
  "post-em-scalar-aperture-model",
  "pthm-em-action-gauge-source-compatibility",
  "pthm-em-restricted-material-energy",
  "pthm-em-medium-plane-wave-fields",
  "pthm-em-conducting-skin-depth"
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
