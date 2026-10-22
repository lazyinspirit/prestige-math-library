# Step 5 repair: impact-repeat, round 2, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/impact-repeat-2.json.











Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-impact-repeat-r2-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"impact-repeat",round:2,unit:"2",input_sha256:"4c48a928985f90c160c42c5e42a82ca2d3346b41bf061316d645182004b104b5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.





Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-knot-kt-49-worked-cases",
    "model": "gpt-6.1-sol",
    "context_sha256": "908fdcbd4f7818cbed76629ca3ed559c0bd63993a5a3c790df4604866bb0b518",
    "outcome": "false_positive",
    "reason": "F2 is supported by the unchanged triangulation supplier's Proof step 5.1, which explicitly constructs the product triangulation and three-edge original meridian. The shorter Statement does not negate those constructed data. No new confirmed defect or published-consumer maintenance finding was identified.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ip-gaussian-beam-null-bicharacteristic",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "proof-step",
    "locus": "4.1",
    "disposition": "fixed",
    "reason": "The j=0 norm cutoff inequality is impossible. The proof now chooses delta_0 freely and uses positive-exponent shrinking only for j>=1, with an explicit summable C^k tail estimate."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-ip-40-finite-time-invisible-perturbation",
    "disposition": "false_positive",
    "reason": "The current energy theorem proof step 4.1 supplies smooth closed-cylinder forward solutions by the time-derivative and elliptic bootstrap, and terminal solutions by reversal. The DN Well-definedness section already cites this argument; the example needs no repair."
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "thm-adjoint-logarithmic-gauss-slope-and-ideal-point",
    "action": "record-fixed-finding",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "location": "Facts F5; Proof2.1",
    "reason": "Definition supplied no dual-map witness. Explicit external carrying input now supplies the fixed vertex needed by the existing lattice lemma.",
    "post_sha256": "5fc32de57a35510ac73858dff8e2675a82c877ee069020826bd72d81abbf26cf"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "ex-knot-kt-20-worked-cases",
    "action": "record-false-positive",
    "outcome": "false_positive",
    "location": "Verification1.1; cited supplier Proof1.1–4.2",
    "reason": "The cited supplier explicitly treats every irreducible representation and proves uniqueness of its component; no extra component remains unexcluded."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "Both assigned items are draft; the sole repair preserves the exact Statement and dependencies, and no defective published consumer was discovered."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[]


