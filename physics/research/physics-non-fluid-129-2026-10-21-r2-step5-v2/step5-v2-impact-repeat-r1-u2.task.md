# Step 5 repair: impact-repeat, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/impact-repeat-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-impact-repeat-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"impact-repeat",round:1,unit:"2",input_sha256:"106d0c53b6116116afeaa106bd8b9d0b3af6ccb673bb2d6a2efd0877f308d729",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "canonical_defect_ledger": [
      {
        "id": "def-emx-finite-energy-boundary-model",
        "outcome": "confirmed_fatal",
        "defect_type": "logic",
        "proposed_status": "fixed",
        "reason": "The former scalar-only boundary data failed to identify actual weak tangential traces; repaired by adding the independent smooth-test curl identities for E and H while retaining the energy-pair identity. This proposal does not write or close any shared ledger."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "canonical_defect_ledger": [
      {
        "id": "thm-qftx-scalar-eg-induction",
        "model": "gpt-6.1-sol",
        "context_sha256": "b2269479598d4876fa894586333b0119047a3182495dca40c111349e1a804b0f",
        "outcome": "confirmed_fatal",
        "defect_type": "logic",
        "reason": "The previous proof allowed independent field-degree extensions and Lorentz corrections, without proving compatibility with directional variation. Balanced total-coordinate differentiation does not imply this compatibility. Repaired by one zero-field numerical family and its field-shift reconstruction, including the polarized unitarity correction.",
        "uncertain": false,
        "source_urls": [
          "https://arxiv.org/pdf/hep-th/0403213"
        ],
        "familiar": false,
        "proposed_disposition": "repaired",
        "location": "Former Proof 5.1 and 8.1; repaired Proof 5.1, 6.1, 7.1, 9.1, 10.1",
        "post_sha256": "1b71224b791285c855c89c0afade286e5bef721bf3548693ed65b1b12bbda795"
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-emx-force-frequency-regime",
    "status": "fixed",
    "defect_type": "logic",
    "severity": "fatal",
    "location": "Example: phasor norm definition",
    "reason": "Confirmed the rejected coordinate-domain mismatch and replaced both sums over 1,2,3 by sums over 0,1,2. The repaired phasor norm is defined on every stated amplitude; no response formula or physical qualification was weakened.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-emx-runaway-preacceleration",
    "status": "open",
    "route": "frontier-owner",
    "location": "Proof step 1.1",
    "reason": "Outside this unit's write assignment: step 1.1 defines M=max_{1<=j<=3} sup_s |f_j(s)| although the same R^3 coordinate convention uses {0,1,2}. The displayed maximum includes an undefined coordinate and omits coordinate 0. Refer to the supplier owner for a minimal index-range repair; no supplier item, review hash, or historical decision was changed here. The generic integrating-factor uniqueness argument in steps 3.1-4.1 remains valid on the actual three coordinates and is the part used by this harmonic example.",
    "affected_use": "items/pthm-emx-runaway-preacceleration.md, Proof 1.1: M:=max_{1<=j<=3} sup_{s in R}|f_j(s)|.",
    "minimality": "Replace the maximum range by 0<=j<=2; the existing scalar kernel estimates and public Statement need no change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "id": "ex-emx-force-frequency-regime",
    "status": "no_update",
    "reason": "Current items and library references contain no direct item consumer of this example. Its only home-page use is a draft examples-list placement. No published consumer defect or published repair was identified in this scoped review.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "pthm-emx-weak-poynting-uniqueness",
  "ex-emx-impedance-sign-check"
]


