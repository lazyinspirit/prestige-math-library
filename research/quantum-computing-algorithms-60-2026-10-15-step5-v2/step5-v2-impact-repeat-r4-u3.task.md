# Step 5 repair: impact-repeat, round 4, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/impact-repeat-4.json.





Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-repeat-r4-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"impact-repeat",round:4,unit:"3",input_sha256:"a59d14469c1308807f1084cb7ebdeea5bdb1f345ac9cf4b97910c37743bc439b",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-qc-explicit-proper-code-and-universal-gadgets",
    "model": "gpt-6.1-sol",
    "context_sha256": "f2309e956cbf511eb1dcfc22ae6d0dc200b46f674bf229b2b5a214b5f7f2a575",
    "outcome": "false_positive",
    "reason": "The disputed C wiring is explicitly constructed in lem-qc-four-round-verified-shor-correction, Proof 1.2-2.2, with its relevant cases proved in 3.1-7.2. The consumer uses that witness and adds the finite port-substitution reasoning in 5.2-9.1. A summary interface omitting those construction details does not make the linked constructive proof unavailable.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/quant-ph/9611025"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-qa-18-reversible-search-cost",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "status": "fixed",
    "reason": "The unqualified F2 eigenvalue maximum has an empty indexing set for a permitted one-state chain. Added the explicit gap-1 case without changing the Statement; the nonstationary phase estimates remain vacuously true in that case.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-qa-18-element-distinctness-unique-collision",
    "outcome": "false_positive",
    "status": "not-a-defect",
    "reason": "The cited query theorem proof 3.1 explicitly counts two stationary preparations. Its own supplier proof 7.1 and algorithm wrapper steps 1-3 justify the count independently of the displayed asymptotic expression. Preserve the example unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-qa-34-tang-recommendation-sampler",
    "reason": "The rejected Gram premise is established in the explicitly cited ModFKV supplier proof 1.1 and 2.1, at failure budget delta/3; the deterministic two-sketch proof then supplies exactly the near-isometry needed in steps 4.1 and 5.1. No confirmed defect or published-consumer change was found.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1807.04271v3"
    ],
    "familiar": false
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[]


