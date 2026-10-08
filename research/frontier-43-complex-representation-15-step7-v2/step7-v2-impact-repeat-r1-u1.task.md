# Step 7 repair: impact-repeat, round 1, unit 1

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/impact-repeat-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/step7-v2-impact-repeat-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-43-complex-representation-15",phase:"impact-repeat",round:1,unit:"1",input_sha256:"4e149fd5d682c8f709c62f1904979ea37ea7896cc9b82259ba3a34a8fd072a63",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-43-complex-representation-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-polar-decomposition-and-nonzero-partial-isometries-in-factors",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "Confirmed nonfatal citation error: lem-spectrum-of-a-positive-operator-is-nonnegative states Countable Choice, not AC, and def-c-star-algebra-generated-by-a-normal-operator also states Countable Choice. The lemma already assumes AC, which supplies both hypotheses by restriction to countable families, so neither the polar construction nor the factor argument loses a prerequisite. Corrected F1, axiom_use, axiom_audit and the owning manifest axiom_use; retained the full AC assumption.",
    "evidence": "Original raw item SHA-256 fa5e2984345cd0f343086d6fe9151808c782d8a93bd8f12c3897a18bb2471580 matches the rejected carrier. F1 mislabeled the positive-spectrum hypothesis; axiom_use and axiom_audit mislabeled the generated-C*-algebra hypothesis. Both actual suppliers state Countable Choice. The explicit AC assumption makes the mathematics valid; all three item descriptions and the manifest mirror are corrected. No published-consumer defect was found in this assigned review.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "frontier-43-complex-representation-15-step7-repeat-r1-u2-1",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:54:00.400862+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "statement",
      "subject": "cor-folner-sequences-for-second-countable-compactly-generated-groups",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Confirmed only a nonfatal convention mismatch: the explicitly one-based construction and its limit are mathematically sound up to a shift, as def-sequence Remarks explains, but the library uses sequences with domain N including 0. The Statement and converse now index F_n by n>=0; step 2.2 chooses witnesses for K_{n+1} at tolerance 1/(n+1), defining F_0, and step 3.1 uses n>=2m-1. Compact exhaustion, positive finite mass, all compact tests, the converse, and the AC/AComega use are preserved.",
      "source": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-repeat-r1-u2.json",
      "batch": "2",
      "item_sha256": "6ff43ab5ca494191f21bba77e7ba8bd0924faa05b63e7eb3f67d643be7a2f0de"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-lie-bialgebra-and-root-graded-manin-triple",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "location": "definition",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "finding": "The defining double form paired each opposite-degree restriction perfectly but omitted orthogonality for all other degrees. Isotropy does not supply the missing orthogonality, so the asserted degreewise perfect cross pairing did not follow. Explicitly required B(d_alpha,d_beta)=0 for alpha+beta nonzero and justified both cross-pairing radicals by the perfect double restrictions.",
    "evidence": "The abelian four-dimensional example with degrees 1,2,-1,-2 and cross matrix [[1,1],[0,1]] satisfies the preceding hypotheses but pairs e1 with f2 nontrivially. Exact inverse replay of the two replacement strings recovers the rejected raw hash 11e60cd02195d2da71dd61935853226e237ca3f21d76e4dbcba4243109464cd3. Repaired itemHashGuard e1f7e72bdea8ad6f81500bf854413796272aa04c6bc21bfcbae512fb217967b0; local render, strict contract and layout checks passed; definition precheck correctly reports not-applicable. This is a proposal for controller integration, not a written judgment or independent audit.",
    "uncertain": false,
    "source_urls": [
      "https://categorified.net/LieQuantumGroups.pdf"
    ],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "thm-root-graded-manin-triple-gives-dual-lie-bialgebras"
]


