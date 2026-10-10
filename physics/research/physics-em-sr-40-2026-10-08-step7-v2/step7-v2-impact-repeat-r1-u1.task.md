# Step 7 repair: impact-repeat, round 1, unit 1

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/impact-repeat-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-impact-repeat-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"impact-repeat",round:1,unit:"1",input_sha256:"3f3aec1f63c0ffadaf0a166d136dfc09c3d7431d8b04e43b67fd637d958fd66a",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposal",
    "defect_id": "physics-em-sr-40-2026-10-08-step7-repeat-r1-u1-orientation-class-summary",
    "run": "physics-em-sr-40-2026-10-08",
    "subject": "ex-sr-constructing-an-oriented-inertial-frame",
    "class": "accuracy",
    "subclass": "false-claim",
    "severity": "nonfatal",
    "location": "Facts & Assumptions [L4]",
    "caught_at_stage": "7.5",
    "caught_by_role": "alpha-adjudicate",
    "batch": "1",
    "disposition": "fixed",
    "evidence": [
      {
        "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-repeat-r1-u1.json",
        "note": "The rejection is correct: in standard-oriented R^4 the orthonormal bases with coordinate matrices diag(-1,1,1,1) and diag(-1,-1,-1,1) are both negative, while their change-of-basis determinant is +1. The published orientation Definition classifies bases by the sign of their relative determinant, not by joint positivity. This is nonfatal because steps 1.1, 1.2 and 2.1 already use the correct preservation/reversal rule and the construction remains valid. Repaired L4 to state same versus different orientation classes, exactly two classes in positive dimension, and the chosen positive class."
      }
    ],
    "correction": "Replaced same positive class by same orientation class, explicitly distinguished negative determinant, and supplied the positive-dimension two-class hypothesis and positive/negative conventions."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_adjudication_record",
    "id": "lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "repeat",
    "round": 1,
    "unit": "16",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "post_sha256": "082586a84448e3d1c688d4277868c1525e651a32f8de5b71074c629b9af0c6e4",
    "reason": "The empty compact set is admitted by the Statement, but its nonnegative time seminorms had no defined value under the real least-upper-bound convention. The repaired Statement explicitly assigns 0 to empty-set seminorms; step 9.2 proves 0 <= C_m*0 and retains the original pointwise bound for every nonempty compact K.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "record_no_published_consumer_effect",
    "id": "lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain",
    "reason": "The Statement changes only by defining empty-index nonnegative seminorms. All five direct item consumers are draft members of the frozen frontier; each consumes unchanged ambient extension or boundary-jet matching. No published or outside-frontier consumer was found, no published item was edited, and no new published maintenance defect is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "id": "thm-em-spherical-multipole-basis",
    "model": "gpt-6.1-sol",
    "context_sha256": "40278f1005517a2a7d4c6fb448bea6da044ad4b03f403013bea36716efcf675a",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "resolved": true,
    "post_sha256": "95e20f47fc8a0ef1d8100baba6e5ff4a0ec73919b3dd978b5fd8c955f3fd0ad3",
    "reason": "Record the false L2 supplier restatement as a repaired dependency-citation defect: homogeneous harmonic polynomials, including zero, supply the 2l+1-dimensional degree space; general exact-degree harmonic polynomials do not. Preserve original rejection evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "id": "thm-em-spherical-multipole-basis",
    "reason": "No published-supplier defect or consumer maintenance finding was identified. This assigned item is draft and only its Facts restatement changed; its mathematical Statement is byte-for-byte unchanged, so no public-interface event or downstream inventory is required.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "lem-boost-is-proper-orthochronous-with-inverse",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "repeat",
    "round": 1,
    "unit": "2",
    "model": "gpt-6.1-sol",
    "context_sha256": "d30b85a94f03838bdf6bc6fcdf82e90988329c3c958be6fcb691c518c975532d",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "post_sha256": "168289a69ee02915cda82188ac877674619c7b22b8997b8e12fd23377bdba84c",
    "reason": "The Euclidean supplier defines spatial columns as functions on {0,1,2}; its a_3 is undefined. Step 1.1 therefore did not define J or its adapted decomposition. Repaired L2 by declaring the one-based labels a_i:=a(i-1) for i=1,2,3 and the corresponding dot-product sum; the isometry J and all later calculations are now well-typed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "lem-inertial-chart-transitions-are-affine-lorentz",
    "run": "physics-em-sr-40-2026-10-08",
    "phase": "repeat",
    "round": 1,
    "unit": "2",
    "model": "gpt-6.1-sol",
    "context_sha256": "6fb85b0704da7969aa24ff650e809f6e66c0b997600d28460b95c0f97d0e69d6",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "post_sha256": "6bf56685e4bde91669449a607255017b5396c0fd1cea506efb50d0c4f590536f",
    "reason": "Step 4.1 applied the coordinate operator A^{-1}:R^4->R^4 to e_0 in V, so z was undefined and the following time-component identity did not follow. Repaired the step by defining epsilon_0=(1,0,0,0) in R^4, z=A^{-1}epsilon_0=M epsilon_0, and E(z)=Le_0=e'_0 in C^+. The Cauchy-Schwarz bound and the inverse argument then establish preservation of the entire closed future coordinate cone.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "Both repairs concern assigned draft mathematical items and leave their Statement sections byte-for-byte unchanged. No published consumer defect was discovered in the assigned review; there is no supplier-interface event to route to consumer maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "id": "def-lorentz-boost",
    "status": "outside_lane",
    "reason": "The draft supplier's component labels beta_i (i=1,2,3) need a stated index convention, and its 1+1 shorthand boldbeta=beta e_1 conflates a spatial coordinate column with a frame vector in V. Route to its frozen-frontier owner; the assigned repairs use the vector formula with their own explicit convention and do not rely on the shorthand.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-em-lab-geometry",
    "model": "gpt-6.1-sol",
    "context_sha256": "e6db5bce45deabdf5e6581211ffa452cc49ba552f15df0585e529257b5ee9442",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "Clause (c) admitted target dimension zero but its C^k supplier only defines positive target dimensions. The local singleton-valued C^infinity and zero-derivative convention now covers m=0 while preserving every positive-dimensional definition and all field ranks.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-em-vacuum-maxwell",
    "model": "gpt-6.1-sol",
    "context_sha256": "ee50b59a2894532bcdd96c0119ccac763a0ca88451eb359c67a7df7ed7621173",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "The weak equations require only the componentwise regular-functional construction and its continuity, not injectivity. The embedding supplier explicitly says its continuity estimate is choice-free; proof step 1.1 establishes distribution existence using the compact-support bound and the finite-order characterization. Countable Choice enters only the injectivity argument in steps 2.1-3.1, which this postulate does not use. Its current owning contract explicitly restricts the citation to that choice-free part.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "ex-em-infinite-line-normalization",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "location": "F6 and Verification steps 1.1, 5.1, 6.1",
    "disposition": "fixed",
    "reason": "The Fubini supplier assumes product L1 and cannot justify its own missing hypothesis from an iterated bound. The declared published Tonelli supplier now proves absolute product integrability for jointly Borel point-field/test-derivative integrands, using finite-box sigma-finiteness, the null axis and the explicit transverse 1/rho majorant. Prior independent records and original round evidence are preserved.",
    "post_sha256": "a579f65939256905364c5e4c7cb849f78ade75b5f077a72ca0c09617ab7c72f0",
    "evidence_path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-repeat-r1-u25.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "id": "ex-em-infinite-line-normalization",
    "reason": "No published supplier or consumer was repaired and no potentially defective published use was found. The existing published Tonelli statement and point-charge clause supply exactly the uses recorded here; public claims of the draft example remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "id": "pthm-em-inductance-reciprocity",
    "outcome": "confirmed_nonfatal",
    "reason": "F17 omitted the nonnegative-function hypothesis of its published mathematical definition. Restored the exact measure-space domain and nonnegative-integral convention; step 2.2 already satisfies them, so this is a nonfatal supplier-restatement defect.",
    "correction": "Replace the arbitrary measurable-f formulation of F17 by f:X→[0,+∞] on (X,A,mu), with E∈A and the nonnegative integral on the right.",
    "post_sha256": "7025d9ded83ec06c4eb4742938e2ca5149629dd8423593204f9a0f71e476f94b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "em-sr40-step7-repeat-r1-u5-boost-restatement",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T06:04:54Z",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "thm-sr-future-cone-and-flat-domain-of-dependence",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "5",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-repeat-r1-u5.json",
          "note": "Confirmed inaccurate dependency restatement: L7 states that every boost acts in the (0,1)-plane, although def-lorentz-boost defines a vector parameter in R3 and reserves the scalar formulas for the first spatial axis. For beta=(0,1/2,0), B(beta)e0 has coordinates (2/sqrt(3),0,-1/sqrt(3),0), so the asserted plane is false. Step 3.2 needs the general time formula gamma(x0-beta dot x_vec). Replaced L7 by that exact formula, including parameter domain, scalar product, map type and the zero-parameter identity; the existing boost lemma supplies metric preservation, inverse and normalization. This is dependency_citation because the purported supplier restatement is false; no stronger claim or new prerequisite is required."
        }
      ],
      "correction": "Replace axis-specific scalar formulas by the general boost time-coordinate formula already used in Proof 3.2, with explicit beta in R3 and B(0)=identity."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "em-sr40-step7-repeat-r1-u5-partition-knots",
      "run": "physics-em-sr-40-2026-10-08",
      "at": "2026-10-10T06:04:54Z",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-sr-future-cone-and-flat-domain-of-dependence",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "5",
      "evidence": [
        {
          "path": "research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-repeat-r1-u5.json",
          "note": "Step 5.1 sums increments over partition knots s_k, whereas the earlier partition is named by a_i,b_i. Given now explicitly identifies s_0=a and s_i=b_i, leaving the argument unchanged."
        }
      ],
      "correction": "Define the equivalent partition-knot notation in Given before its use in step 5.1."
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published supplier or consumer defect was discovered. This assigned draft repair preserves its Statement exactly, so it produces no consumer-maintenance interface event."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_record",
    "id": "lem-sr-null-covector-frame-data",
    "outcome": "confirmed_nonfatal",
    "location": "Proof step 1.3 and Facts & Assumptions [L1]",
    "reason": "The vector-only citation [L4] did not justify the covector terminology. The existing Definition (c) supplies the exact criterion, now explicitly restated in [L1] and cited in the converse; no Statement or Definition changed.",
    "repair": "Completed local citation and fact repair with matching owning-contract updates; controller should merge this evidence without altering original round evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_update",
    "reason": "No published supplier or consumer defect was discovered in this assigned review. Only the draft lemma facts and proof citation changed, with its public Statement unchanged; no published maintenance finding or consumer-interface event is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "def-em-si-conventions",
  "def-em-fields",
  "def-em-sources",
  "post-em-vacuum-maxwell",
  "def-em-weak-sources",
  "def-em-electrostatic-regime",
  "def-em-electric-moments",
  "def-em-electromagnetic-tensor",
  "def-em-fixed-test-geometry",
  "def-em-vacuum-energy-flux",
  "def-em-experiment-record-contract",
  "post-em-minkowski-physical-model",
  "def-em-relativistic-worldlines-frames",
  "def-em-field-action-definition",
  "def-em-gauge-transformation",
  "post-em-coarse-graining",
  "def-em-polarization-magnetization",
  "pthm-em-macroscopic-maxwell",
  "pthm-em-material-stationary-jumps",
  "def-em-guide-cavity-geometry",
  "post-em-material-closure",
  "def-em-medium-wave-parameters",
  "def-em-moving-circuit-geometry",
  "def-em-plane-wave-definition",
  "post-em-distributional-vacuum-maxwell",
  "post-em-radiation-selection",
  "def-em-retarded-point-geometry",
  "pthm-em-charge-continuity",
  "def-em-steady-current-regime",
  "def-em-vacuum-stress-momentum"
]


