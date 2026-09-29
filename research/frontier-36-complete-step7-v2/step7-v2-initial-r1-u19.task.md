# Step 7 adjudicate: initial, round 1, unit 19

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u19.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"19",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:def-invariant-polynomial-on-a-matrix-lie-algebra, 2:lem-oriented-real-two-plane-splitting-with-injective-real-pullback, 5:cex-changing-a-connection-changes-the-form-but-not-its-de-rham-class, 6:lem-first-chern-form-agrees-with-the-topological-line-class, 7:thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals, 9:ex-flat-connections-have-vanishing-positive-degree-real-chern-weil-classes.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-invariant-polynomial-on-a-matrix-lie-algebra",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Take G=GL₁(C), 𝔤=C, K=R, and P(z)=Re(z). This is a degree-one real coordinate polynomial and is G-invariant, but its polarization P₁=P is not C-linear: P₁(i)=0 while iP₁(1)=i. The definition permits this case yet asserts complex multilinearity.",
    "context_sha256": "03e1ad526d9b2bcf233fba7510ca0907585cab7f5de3019645a4a5d8d3410702",
    "item_sha256": "47ed0bfb75450be5d391068ecae7ef86f0016751b6270b6f445ecadd751c6266",
    "at": "2026-09-29T11:35:13.826Z"
  },
  {
    "id": "lem-oriented-real-two-plane-splitting-with-injective-real-pullback",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.11 falsely says the listed classes form the fiber basis. For n=4, step 1.6 gives the four classes 1, x, x², e(Q), but step 1.11 lists only three and omits e(L_V)². Leray–Hirsch cannot be applied as stated.",
    "context_sha256": "9d1202d4412f2b676eeaa89044536763e2f0afa83496c216a35c8cb319a23167",
    "item_sha256": "037cd0725d41783b0bf7896610d98c8e86f07b45cc358b443ddc089c142391b6",
    "at": "2026-09-29T11:35:52.918Z"
  },
  {
    "id": "cex-changing-a-connection-changes-the-form-but-not-its-de-rham-class",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F6 inaccurately restates its cited definition: rank there means real rank, so ℝ²×ℂ has rank 2, not rank 1. It is a complex line only after supplying the complex structure.",
    "context_sha256": "76a45be1c02b017acd8479e4999e0701ae4bbeff1a4822f4b26cc110caa60fd7",
    "item_sha256": "707ff3f526afa5ff93c69f3036d7b3fda2d7edd0ce92b4360f5952c4fb6ceb2a",
    "at": "2026-09-29T11:35:13.518Z"
  },
  {
    "id": "lem-first-chern-form-agrees-with-the-topological-line-class",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] falsely claims H₂(CP^m;ℝ)=ℝ and that restriction to CP¹ is an isomorphism for every m≥0. At m=0, CP⁰ is a point, so H₂=0 and there is no inclusion of CP¹. Step 1.3 even treats this case separately.",
    "context_sha256": "51360c35ebc2ebf54cac8103805a2484492613bb839b8bd645fce1fbd15c9b22",
    "item_sha256": "c9f311fc5db9b1527cbd25355e53e257478f96b65794bda03c450a5d3369994a",
    "at": "2026-09-29T11:35:18.907Z"
  },
  {
    "id": "thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Rank-zero Euler clause fails for the reversed orientation. On a point, the oriented zero bundle can have Thom orientation −1, so its Euler class is −1 by F11, while its Euler form is 1 by F1. Step 5.1 incorrectly treats every rank-zero orientation as the unit.",
    "context_sha256": "5586665e11ab4c20e5a06316e33a54caf301773cd8aef5e220f733fdbc3afba4",
    "item_sha256": "f05f4e4ed7665fef554a30f250aeaab47992a5d69c343b83102aee1e5b0859bb",
    "at": "2026-09-29T11:35:13.111Z"
  },
  {
    "id": "ex-flat-connections-have-vanishing-positive-degree-real-chern-weil-classes",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Clause 3 includes even rank zero. For M a point and W the zero bundle, the unique connection is flat and metric-compatible, but the supplied Euler-class convention gives e(W)=1 in H^0(M;Z), whose real image is nonzero.",
    "context_sha256": "2b613a230d63546abf4c8f1324b96ec8d570050136be00ae37fba0c64d1a4baf",
    "item_sha256": "7e05269408896f033802dd75d9bfa325176e3a7a0b7ff8bc4411aacf0043c3a9",
    "at": "2026-09-29T11:35:17.786Z"
  }
]


