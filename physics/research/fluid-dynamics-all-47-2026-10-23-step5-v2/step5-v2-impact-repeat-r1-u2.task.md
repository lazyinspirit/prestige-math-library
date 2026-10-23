# Step 5 repair: impact-repeat, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/impact-repeat-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-impact-repeat-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"fluid-dynamics-all-47-2026-10-23",phase:"impact-repeat",round:1,unit:"2",input_sha256:"17899f1731fb6050f392e9262c67604f0429e55d3cdbd8e951e265187f99b581",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run fluid-dynamics-all-47-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-fd-conservation-system",
    "proposed_status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "finding": "The candidate-dependent integrability proviso could erase all nonzero initial test traces and admit the singular Burgers field for arbitrary prescribed U0.",
    "correction": "Require state/flux absolute integrability up to t=0 on every compact spatial slab and impose the identity for every initial-boundary test; item and owning mirrors repaired.",
    "uncertain": false,
    "source_urls": [
      "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "def-distributional-derivative",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "affected_use": "Imported mathematical supplier read to verify the assigned definition’s regular-distribution and derivative conventions.",
    "source_excerpt": "in the convention of [[def-distribution]]",
    "invalidated_claim": "No mathematical claim invalidated; inline links interrupt the complete published Definition.",
    "minimality": "The mathematical original/import is read-only. Refer the hyperlink relocation to the mathematics owner; do not edit or adjudicate it in this Step 5 frontier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "def-regular-distribution-from-a-locally-integrable-function",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "affected_use": "Imported mathematical supplier read to verify the assigned definition’s regular-distribution and derivative conventions.",
    "source_excerpt": "For a test $\\varphi$ as in [[def-test-function-space-d-of-an-open-set]]",
    "invalidated_claim": "No mathematical claim invalidated; inline links interrupt the complete published Definition.",
    "minimality": "The mathematical original/import is read-only. Refer the hyperlink relocation to the mathematics owner; do not edit or adjudicate it in this Step 5 frontier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "pthm-fd-conservation-jump-laws",
    "phase": "repeat",
    "round": 1,
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "Open-side positivity of T does not imply traces of q/T. At a stationary plane take T=x3^4 and tangential q=(x3^4 sin(1/x3),0,0), extended by zero at the plane. Both are C1 up to each side, but q/T has no trace. With rho=1 and u=e=s=b=r=sigma=0, every side and weak balance holds; the displayed entropy jump is undefined. Repair retains all conservation conclusions and adds the missing C1 extension assumption only to the entropy characterization. Its source remains merely locally integrable, handled by a zero-source integration identity and a thin-tube integral bound.",
    "correction": "Add a C1 one-sided extension hypothesis for q/T only to the entropy jump characterization. Proof 2.2 uses the zero-source integration identity then adds the locally integrable entropy source; Proof 4.1 replaces the invalid bounded-residual estimate with an L1 thin-tube bound. Synchronize only this item’s owning manifest statement and contract derivations/citations/risk review.",
    "post_sha256": "b87d8bd3e8a798b50f47cdd2eae326cfd618e46698e8f2c41eda6b1f32906ff4",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-repeat-r1-u9.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "subject": "pthm-fd-conservation-jump-laws",
    "reason": "The current exact-ID dependency/reference scan of items and library found no item consumer of this theorem. The sole library occurrence is the unchanged frontmatter inventory in fd-f02; no published supplier or consumer defect was found or repaired in this dispatch."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "thm-fd-convex-scalar-riemann",
  "cex-fd-expansion-shock",
  "cex-fd-shock-point-values",
  "ex-fd-burgers-fan"
]


