# Step 5 repair: impact-initial-pass-2, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/impact-initial-pass-2-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-pass-2-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"mathematical-statistics-foundations-37",phase:"impact-initial-pass-2",round:1,unit:"1",input_sha256:"f41d202456fe834f8ac62752ccf77d1392c3ba6cfe8ee43c9a958f2bf80fa468",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run mathematical-statistics-foundations-37 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "item": "ex-known-variance-normal-mean-interval",
    "run": "mathematical-statistics-foundations-37",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "F2 retained the old statistic gloss despite Verification 3.1 using parameter-dependent sections. Replaced it with the precise family-of-measurable-maps pivot interface; the common normal law and interval coverage are unchanged.",
    "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_repair_review": false,
    "post_sha256": "4103d03bcb649b8c876774241212ccb48c0557e3798655f7659cd5ff66860b4b",
    "evidence": [
      {
        "path": "items/ex-known-variance-normal-mean-interval.md",
        "note": "F2 retained the old statistic gloss despite Verification 3.1 using parameter-dependent sections. Replaced it with the precise family-of-measurable-maps pivot interface; the common normal law and interval coverage are unchanged."
      },
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u2.json",
        "note": "Impact owner repair evidence; no independent acceptance is claimed."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "item": "ex-normal-mean-exact-likelihood-calibration",
    "run": "mathematical-statistics-foundations-37",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "severity": "nonfatal",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "The repaired Wald definition gives zero off a supplied chart, so the finite-sample identity needs a chart that contains every realized normal MLE. Verification 4.1 now specifies the valid global chart V=R with psi=mu-mu0; the original exact quadratic statistics remain unchanged.",
    "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_repair_review": false,
    "post_sha256": "f6c931379c53a12073b1193f57b38bd5a578b4d6b52b66e73ef09329ac871691",
    "evidence": [
      {
        "path": "items/ex-normal-mean-exact-likelihood-calibration.md",
        "note": "The repaired Wald definition gives zero off a supplied chart, so the finite-sample identity needs a chart that contains every realized normal MLE. Verification 4.1 now specifies the valid global chart V=R with psi=mu-mu0; the original exact quadratic statistics remain unchanged."
      },
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u2.json",
        "note": "Impact owner repair evidence; no independent acceptance is claimed."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "item": "ex-sparse-gaussian-sequence-fano-lower-bound",
    "run": "mathematical-statistics-foundations-37",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "severity": "nonfatal",
    "location": "statement",
    "disposition": "fixed",
    "reason": "Added the inherited AC assumption to the Example and Given, and restored it in F4, as required by the repaired Fano Statement. This resolves the initial unit-17 owner route without changing the packing, Gaussian model, constants or risk conclusion.",
    "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_repair_review": false,
    "post_sha256": "9ff265ae6f0b7a869d0f113b5b7cad0c316c05d4ade675129eb89bb442ac98b1",
    "evidence": [
      {
        "path": "items/ex-sparse-gaussian-sequence-fano-lower-bound.md",
        "note": "Added the inherited AC assumption to the Example and Given, and restored it in F4, as required by the repaired Fano Statement. This resolves the initial unit-17 owner route without changing the packing, Gaussian model, constants or risk conclusion."
      },
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u2.json",
        "note": "Impact owner repair evidence; no independent acceptance is claimed."
      }
    ]
  },
  {
    "defect_id": "msf37-step5-impact-initial-r1-u3-lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound-ac",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:44:19.796941+00:00",
    "class": "accuracy",
    "subclass": "missing-choice-scope",
    "severity": "nonfatal",
    "location": "statement",
    "subject": "lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound",
    "caught_at_stage": "5.2-impact",
    "caught_by_role": "frontier-owner-alpha-repair",
    "disposition": "fixed",
    "batch": "34",
    "repair_cost": "inline-fix",
    "reason": "The Fano use in F4 and Proof 2.1 and 5.1 requires AC, now explicit in its supplier Statement. Added that already inherited assumption to Statement and Given and identified Fano in axiom_use. Finite Borel classifiers, separations and finite reference KL remain unchanged; Owning batch-34 Statement mirrors and Fano contract excerpts were synchronized; the direct Huber uses are inventoried for their owners.",
    "evidence": [
      {
        "path": "items/lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound.md",
        "note": "Statement and Given now carry the existing AC assumption required by Fano; no independent repair acceptance claimed."
      },
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u3.json"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_id": "msf37-step5-impact-initial-r1-u3-lem-clean-dense-gaussian-covariance-minimax-lower-bound-ac",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:44:19.796941+00:00",
    "class": "accuracy",
    "subclass": "missing-choice-scope",
    "severity": "nonfatal",
    "location": "statement",
    "subject": "lem-clean-dense-gaussian-covariance-minimax-lower-bound",
    "caught_at_stage": "5.2-impact",
    "caught_by_role": "frontier-owner-alpha-repair",
    "disposition": "fixed",
    "batch": "34",
    "repair_cost": "inline-fix",
    "reason": "The Fano use in F5 and Proof 4.1 requires AC, now explicit in its supplier Statement. Added that already inherited assumption to Statement and Given and identified Fano in axiom_use. Finite Borel classifiers, separations and finite reference KL remain unchanged; Owning batch-34 Statement mirrors and Fano contract excerpts were synchronized; the direct Huber uses are inventoried for their owners.",
    "evidence": [
      {
        "path": "items/lem-clean-dense-gaussian-covariance-minimax-lower-bound.md",
        "note": "Statement and Given now carry the existing AC assumption required by Fano; no independent repair acceptance claimed."
      },
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u3.json"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_id": "msf37-step5-impact-initial-r1-u3-thm-huber-covariance-upper-and-lower-risk-ac-route",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:44:19.796941+00:00",
    "class": "accuracy",
    "subclass": "missing-choice-scope",
    "severity": "nonfatal",
    "location": "statement",
    "subject": "thm-huber-covariance-upper-and-lower-risk",
    "caught_at_stage": "5.2-impact",
    "caught_by_role": "frontier-owner-alpha-repair",
    "disposition": "open",
    "batch": "34",
    "reason": "F2 and Proof 1.2 use the clean all-regime lower bound at M_0=a_M min(1,p/n). Statement/Given do not explicitly carry AC; axiom_use and deps already record inherited Gaussian AC. Add explicit AC disclosure to this frontier consumer under its own lane, and retain the rate and constants.",
    "route": "ordinary frontier owner; outside unit 3 and left unchanged",
    "evidence": [
      {
        "path": "items/thm-huber-covariance-upper-and-lower-risk.md",
        "note": "F2 and Proof 1.2; Statement/Given AC disclosure."
      },
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u3.json"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_id": "msf37-step5-impact-initial-r1-u3-thm-huber-sparse-covariance-upper-and-lower-risk-ac-route",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:44:19.796941+00:00",
    "class": "accuracy",
    "subclass": "missing-choice-scope",
    "severity": "nonfatal",
    "location": "statement",
    "subject": "thm-huber-sparse-covariance-upper-and-lower-risk",
    "caught_at_stage": "5.2-impact",
    "caught_by_role": "frontier-owner-alpha-repair",
    "disposition": "open",
    "batch": "34",
    "reason": "F2 and Proof 1.2 use the clean block-sparse lower bound at M_0=b_M s log(ep/s)/n. Statement/Given do not explicitly carry AC; axiom_use and deps already record inherited Gaussian AC. Add explicit AC disclosure under its frontier owner, without changing the rate or support convention.",
    "route": "ordinary frontier owner; outside unit 3 and left unchanged",
    "evidence": [
      {
        "path": "items/thm-huber-sparse-covariance-upper-and-lower-risk.md",
        "note": "F2 and Proof 1.2; Statement/Given AC disclosure."
      },
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u3.json"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "thm-huber-covariance-upper-and-lower-risk"
]


