# Step 5 repair: impact-initial-pass-2, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/impact-initial-pass-2-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-initial-pass-2-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"impact-initial-pass-2",round:1,unit:"3",input_sha256:"df8c571b5351a3b1bcebaee425d402e77dc4b87b17d62205572fef49bd3b80a6",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "pthm-gr-high-regularity-local-development",
  "pthm-gr-local-energy-balance",
  "pthm-gr-minkowski-vacuum-model",
  "pthm-gr-plane-wave-polarizations",
  "pthm-gr-plane-wave-tidal-detector-response",
  "pthm-gr-smooth-maximal-development",
  "thm-gr-weak-field-einstein-stress-hierarchy",
  "pthm-gr-uniform-weak-slow-correspondence",
  "pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers",
  "pthm-nrqm-angular-momentum-stern-gerlach-conditional-force",
  "pthm-nrqm-angular-momentum-total-conservation",
  "pthm-nrqm-angular-momentum-two-spin-composition",
  "pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy",
  "pthm-nrqm-interference-continuity-and-local-probability-balance",
  "pthm-nrqm-kinematics-boost-covariance",
  "pthm-nrqm-uncertainty-position-momentum-incompatible",
  "rem-cm06-dalembert-vakonomic-distinction",
  "rem-cm07-scope-and-singular-warnings",
  "rem-cm12-singular-models",
  "rem-cm13-locality-topology",
  "rem-cm14-scope-of-hamilton-jacobi-and-integrability",
  "rem-cm15-model-boundaries",
  "rem-cm16-scope-of-stability-and-chaos",
  "rem-cm17-boundary-regularity-and-scope",
  "rem-cm18-em-bridge",
  "rem-cm18-galilean-regime",
  "rem-cm18-numerical-error",
  "rem-cm18-qm-bridge",
  "rem-gr-curvature-tidal-scope-and-conventions",
  "rem-gr-einstein-matter-scope-and-conventions",
  "rem-gr-high-regularity-scope",
  "rem-gr-linearized-wave-scope-and-deferred",
  "texp-nrqm-angular-momentum-stern-gerlach-splitting",
  "rem-nrqm-angular-momentum-examples-scope-limits",
  "rem-nrqm-angular-momentum-scope-and-empirical-status",
  "rem-nrqm-kinematics-scope-and-empirical-status",
  "rem-nrqm-symmetries-examples-scope-limits",
  "rem-nrqm-symmetries-scope-and-empirical-status",
  "rem-nrqm-uncertainty-energy-time-caveat",
  "rem-nrqm-uncertainty-scope-and-empirical-status",
  "texp-nrqm-uncertainty-spin-half-incompatibility"
]


