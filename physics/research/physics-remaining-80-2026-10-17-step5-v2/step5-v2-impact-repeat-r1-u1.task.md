# Step 5 repair: impact-repeat, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/impact-repeat-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-impact-repeat-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-remaining-80-2026-10-17",phase:"impact-repeat",round:1,unit:"1",input_sha256:"580aa47cf6c00481a85d5c917408c62eae740300ca2179ae2755815d586a1c40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record_fixed",
    "id": "pthm-emg-xs-rn-horizons",
    "location": "Facts & Assumptions [F3]; Proof 2.2",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The general Euclidean inverse-function fact omitted invertibility. F3 now requires invertible DH(a) and states the scalar equivalence with H'(a) nonzero. Proof 2.2 already supplies K'(r_H)=ell_*^{-1}>0. The public interface and consuming proof remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "id": "pthm-emg-xs-rn-horizons",
    "reason": "The published imported inverse-function supplier correctly requires an invertible derivative and was not edited. The defect was confined to this draft consumer's restatement; no defective published consumer or supplier was found in the reviewed use.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-csm-chain-analytic-interacting-model",
    "phase": "repeat",
    "round": 1,
    "status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "location": "Verification step 1.2",
    "reason": "The high-temperature series theorem cannot establish the all-positive-K pressure identity through its Statement. Directly cited the existing published periodic-chain theorem, verified its entire finite-matrix argument, and specialized it at zero field without weakening the Example.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-csm-kl-chain-disjoint",
    "status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Record the original circular finiteness justification as a fatal logical gap repaired in repeat round 1. The current proof uses prefix contraction and fixed variational tests without that circular invocation. No public interface changed; no published-consumer finding was discovered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "lem-tgr-carter-circulation",
        "status": "fixed",
        "outcome": "confirmed_fatal",
        "defect_type": "dependency_citation",
        "reason": "The smooth projection supplier was overstated at C2 state regularity; F2 now preserves its actual hypothesis and step 1.2 supplies a full local first-order derivation. This is an author repair, not independent acceptance."
      }
    ],
    "published_ledger": []
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[]


