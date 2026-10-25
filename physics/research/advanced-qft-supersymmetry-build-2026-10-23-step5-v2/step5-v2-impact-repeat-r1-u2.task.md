# Step 5 repair: impact-repeat, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/impact-repeat-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-impact-repeat-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"advanced-qft-supersymmetry-build-2026-10-23",phase:"impact-repeat",round:1,unit:"2",input_sha256:"561150fbf7e57b168ca5b9c31533ba582d70750f59aae3901bc7688fae42efab",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run advanced-qft-supersymmetry-build-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "subject": "def-qftx-n2-coulomb-branch-data",
    "run": "advanced-qft-supersymmetry-build-2026-10-23",
    "phase": "repeat",
    "round": 1,
    "unit": "33",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The unrestricted ordered-basis definition permits diag(-1,1) on the magnetic/electric basis and periods. It sends tau to -tau, contradicting the required positive imaginary part. Repaired by defining a fixed unimodular alternating orientation form and symplectic bases, restricting constant overlap changes to SL(2,Z), and stating the compatible inverse transformation of charge rows.",
    "status": "fixed",
    "evidence": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-repeat-r1-u33.json",
    "post_sha256": "158e7a8fae02055e3355579c6940d9e4324e1d3810e4b22b7248ab1770a0db9d",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "subject": "def-qftx-n2-coulomb-branch-data",
    "reason": "Every direct dependency/reference consumer is a draft within the frozen frontier. No published supplier/consumer defect was found in the examined affected uses; no published maintenance or audit claim is made.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-aqft-anomaly-matching-data",
    "proposed_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-repeat-r1-u41-effectiveness",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The rejection is correct: R_E(g,z)=zg has the nontrivial diagonal Z_3 kernel {(omega I_3,omega^-1):omega^3=1}, and the original connection backgrounds also fix this constant kernel. Thus the unrestricted spectrum S={E} did not meet the cited p=0 effectiveness clause. The repaired data explicitly admit independent, nondynamical probes in (3,0) direct-sum (1,+1). Their action is faithful on the complete compactly supported probe domain, while the functional, counterterms and anomaly problem remain in the original connection-background subalgebra; arbitrary finite S and the fixed product H are retained.",
    "evidence_path": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-repeat-r1-u41.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-aqft-mixed-background-counterterm-shift",
    "proposed_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-repeat-r1-u41-consumer-form-units",
    "severity": "nonfatal",
    "disposition": "open",
    "reason": "The Example defines A and B as one-forms and F_A as a two-form but assigns them the dimensions of their coordinate components. The current supplier explicitly distinguishes component dimensions from dimensionless forms including dx. This does not invalidate the counterterm algebra; refer the component-index notation correction to the assigned consumer owner without editing that source.",
    "evidence_path": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-repeat-r1-u41.json",
    "route": "frontier consumer owner; separate finding outside this unit's write scope"
  },
  {
    "ledger": "defect-ledger",
    "id": "def-aqft-heavy-chiral-u1-threshold-data",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "defect": "physical-scope symmetry-factor mislabel",
    "reason": "The U(1)_V-singlet scope was inconsistent with the explicitly charged fields. The item now declares SU(3)-singlet fields and U(1)_V charges +1,0,+1, with its owning manifest synchronized."
  },
  {
    "ledger": "defect-ledger",
    "id": "pthm-aqft-heavy-chiral-threshold-wess-zumino-match",
    "proposed_status": "open",
    "severity": "nonfatal",
    "defect": "incorrect supplier reference label",
    "location": "Statement references: [[def-aqft-heavy-chiral-u1-threshold-data|Selected U(1)_V-singlet model, charge, mass, regulator, and threshold conventions]]",
    "reason": "The direct consumer has the same incorrect U(1)_V-singlet label only in reference prose. Its scope, Statement and proof step 1.2 correctly use an SU(3) singlet of U(1)_V charge one. Refer the minimal label replacement to the frontier consumer owner; no consumer source was edited."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "exp-aqft-cms-global-smeft-fit-2026",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "other",
    "finding": "Essential sampling assumptions were absent from the reported experiment's Procedure.",
    "repair": "The assigned item now states the likelihood factors and explicit covariance restriction; the owning contract and manifest uncertainty mirror were updated under the shared write lock.",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subjects": [
      "def-cm-likelihood-function",
      "def-cm-statistical-test-and-size",
      "def-cm-measurement-model",
      "def-cm-confidence-set-and-coverage"
    ],
    "status": "maintenance-referral",
    "severity": "nonfatal",
    "finding": "The four published supplier Definitions inspected for this review still contain inline wikilinks, as already flagged by the bound Step-4 digest. Their statistical definitions remain adequate for this consumer; the links violate the uninterrupted-definition presentation rule.",
    "affected_use": "The assigned report uses dominated likelihoods, test vocabulary, measurement models and coverage definitions. Moving supplier links need not change any mathematical content or these uses.",
    "invalidated_claim": "No statistical claim is invalidated by these presentation findings; no whole-supplier acceptance is claimed.",
    "minimality": "Refer only the link relocation to separate published maintenance. No published source was edited and these findings do not expand Step-5 frontier obligations.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed",
    "id": "post-qftx-rigid-supersymmetric-background",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The selected internal group previously had the wrong duality and could not contain the adopted R generator. Its cover now uses right inverse multiplication for the source-labelled first factor; explicit integer matrix calculations verify the repaired identification.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0712.2824"
    ],
    "familiar": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The changed interface has three direct item consumers, all draft members of the frozen frontier. No published consumer or imported supplier requires a repair from this event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-physical-bps-charge-data",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Confirmed the assigned scalar-only BPS-sector counterexample; repaired the Definition by explicitly imposing grading and all supercharge/adjoint invariance. Owning manifest and contract were reconciled under the shared lock. The controller must retain this fatal item in repeat round 1 despite its repair.",
    "source_urls": [
      "https://arxiv.org/html/0807.4723"
    ],
    "uncertain": false,
    "familiar": false
  },
  {
    "ledger": "published-consumer-ledger",
    "ids": [
      "def-trace-class-operator",
      "def-trace-of-a-trace-class-operator"
    ],
    "status": "refer_to_mathematics_maintenance",
    "reason": "The two read-only mathematical supplier Definitions still contain inline wikilinks, as reported in the batch digest and confirmed in their current text. Their relevant trace/absolute-summability content is adequate here. Preserve imports and original mathematics; presentation maintenance requires its owning route and is outside this adjudication.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "def-qftx-suspension-pinch-map",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Corrected F2 to require a continuous fibre-constant map, exactly as the published quotient theorem requires. Verification 1.1 already establishes this hypothesis; no public interface or consumer use changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "ex-aqft-mixed-background-counterterm-shift",
  "ex-aqft-single-chiral-fundamental-polynomial",
  "pthm-aqft-selected-chiral-spectrum-anomaly-cancellation",
  "ex-aqft-vectorlike-conjugate-chiral-pair",
  "pthm-qftx-physical-bps-wall-crossing",
  "ex-qftx-physical-bps-kronecker-hall-sector"
]


