# Step 7 repair: impact-repeat, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/impact-repeat-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/step7-v2-impact-repeat-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-42-coxeter-32",phase:"impact-repeat",round:1,unit:"2",input_sha256:"e513bd5d991e4d62303300d517155cfe290607a82acb20a46fc614e21286848d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-42-coxeter-32 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "subject": "thm-cg-affine-alcove-transitivity-presentation-and-length",
    "location": "Facts & Assumptions F2",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Confirmed nonfatal misquotation: highest-root lemma (2) makes each A_i the interior of a bounded geometric simplex, and (3) makes A their product. In A1 the root coordinate of A is (0,1), whereas its geometric-simplex closure is [0,1]. F2 now says interiors of bounded geometric simplices. Steps 1.3 and 2.1 use closure facets; 4.1 uses the open product; 5.1 uses the empty/rank-one conventions. Compact simplices in 2.1 and 3.2 are constructed separately using F14, so the error does not invalidate transitivity, presentation or length.",
    "adjudication_ref": "research/frontier-42-coxeter-32-step7-v2/step7-v2-repeat-r1-u24.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_frontier_owner",
    "subject": "lem-cg-affine-generic-gallery-paths-and-disk-moves",
    "location": "Facts & Assumptions F3; Proof 1.5",
    "severity": "nonfatal",
    "disposition": "reported_read_only",
    "affected_use": "F3 calls the open fundamental alcove a product of bounded geometric simplices; step 1.5 instead uses the simplex closure facets meeting in codimension two.",
    "invalidated_claim": "Only the F3 restatement is false: A1 has open root interval (0,1), while the geometric simplex closure is [0,1]. The closure-facet argument remains sound.",
    "minimality": "Insert interiors of in the description of A, or state the product-of-simplices assertion for its closure. Preserve the Statement and the rank-two argument.",
    "reason": "Same elementary interior/closure mismatch as the assigned rejection, outside this unit ownership. Reported without editing or adjudicating the supplier; route to its ordinary frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[]


