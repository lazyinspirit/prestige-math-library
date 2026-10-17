# Step 5 adjudicate: initial, round 1, unit 101

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-101-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u101.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"101",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-pde-box-control-set, 1:def-linear-elliptic-pde-constrained-control-problem, 1:thm-fem-control-active-set-box-quadratic-solve-sound-finite, 4:thm-linear-elliptic-control-existence-and-variational-inequality, 5:alg-fem-control-proximal-gradient-certified-residual, 6:ex-distributed-heat-source-control-with-an-exact-box-optimum, 7:alg-fem-control-active-set-sqp-with-finite-residual-status, 7:thm-variational-fem-control-o-h2-error, 8:thm-fem-control-active-set-sqp-finite-budget-certificate.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-pde-box-control-set",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title asserts that the box is closed in the L² norm, but the definition gives no argument establishing closedness.",
      "context_sha256": "50c467b29482be9251a43b60737fe5e1087b2315b49f32459c139529e6c17ab5",
      "item_sha256": "a56eea2292916ca71a77e647c0070ac6831f391ea4ef9b5254e203ca2968fcc9",
      "at": "2026-10-17T01:58:38.545Z"
    },
    {
      "id": "def-linear-elliptic-pde-constrained-control-problem",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition never supplies bounds q_a,q_b or fixes Q_ad as Q_ad(q_a,q_b). The cited interface defines a family of boxes from such bounds, so the set over which the objective is minimized is unspecified.",
      "context_sha256": "e05715fdfc6d0b09ae4d56b81cf4e3508c801f98009072a84b7df88e8ee14a68",
      "item_sha256": "5f2b90ab779bb0da657e8224661e8728a3fd8f4439947bac403a6c9823fe9c46",
      "at": "2026-10-17T01:58:40.703Z"
    },
    {
      "id": "thm-fem-control-active-set-box-quadratic-solve-sound-finite",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 inaccurately restates the algorithm’s retention rule: it omits the requirement that free coordinates lie strictly inside the box. For [0,1], H=1, c=0, the free solve gives x=0 with zero gradient and weak box feasibility, yet the algorithm rejects it.",
      "context_sha256": "0c5bbc5c6273e0be1865ef43a0111b6102f81941d3a399fb1e3cec2d8b124f23",
      "item_sha256": "06a25123f366b14502ddc45b636e4b41455bbd4c2d3f4a888b35752ce0c6043b",
      "at": "2026-10-17T01:59:06.945Z"
    },
    {
      "id": "thm-linear-elliptic-control-existence-and-variational-inequality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The minimizing-sequence selection uses 1/n for n∈ℕ, but the library indexes sequences from 0, so the n=0 tolerance is undefined. The stated countable-choice step does not construct a sequence; use 1/(n+1) or explicitly reindex positive n.",
      "context_sha256": "60d04b41bcb33c16af4802bc4aa9bd7d435ac3be884fd81e6f784762083d444b",
      "item_sha256": "316fb4f5076f2ce08779d58d112d21b2d77d3f5a5a56872970895cb12c078900",
      "at": "2026-10-17T01:58:45.931Z"
    },
    {
      "id": "alg-fem-control-proximal-gradient-certified-residual",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the Definition claims its finite outputs certify the exact objective’s projected-gradient residual, but gives no separate correctness result proving that guarantee. Algorithm conventions require correctness properties in proved result items; procedure steps alone are not ",
      "context_sha256": "b40ab1d96521fca03db86f45a5cbce996409fc6984ad8d7f5aa78bc2e8ad9ad6",
      "item_sha256": "e7df765d6e4e1f883bcb0ec23a6ce0b9731bf4f9bf7365d223f80ae34962d2c3",
      "at": "2026-10-17T01:59:07.983Z"
    },
    {
      "id": "ex-distributed-heat-source-control-with-an-exact-box-optimum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [F2] reverses the supplied corollary. Its interface gives the clipped-adjoint formula for an already-unique minimizer; it does not say a feasible control satisfying it is optimal. Step 2.1 therefore lacks a licensed sufficiency result.",
      "context_sha256": "f961621a84ba72aaa8233e5d4f2bcc53593597b88ab225cf6ff29dfb227ab38b",
      "item_sha256": "d5227b9856f52b4f23b52b43589c679920b523eee732c0179b7acf229a47acc0",
      "at": "2026-10-17T01:58:54.483Z"
    },
    {
      "id": "alg-fem-control-active-set-sqp-with-finite-residual-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1 cites reduced-curvature applicability conditions from the exact-Hessian dependency, but its interface states only J_A nonsingularity and rank-or-solve failure. That does not supply the positive reduced-curvature precondition required by QR, so the cited gate is unsupported",
      "context_sha256": "5ab131b474d3ed2ef7c59bcfe23482365c0a4863c2cec8f85fce7d96d4a2de86",
      "item_sha256": "92b447393bc89a205a3bc5cabca40b0b0b7d10d1351f860468c91bd81c81079f",
      "at": "2026-10-17T02:00:09.658Z"
    },
    {
      "id": "thm-variational-fem-control-o-h2-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof needs the explicit uniform O(h²) state/adjoint L² error bound, including all defects; H² regularity alone does not supply it, as the statement itself notes. The title promises the rate under H² regularity without this essential condition.",
      "context_sha256": "4303219f29e0c3d3b2cf9ed479c9510b8911672d88cfd52b851bb188345e209b",
      "item_sha256": "7b434b092c031b7c78b5cdd074c5be319d1e5f045117c774036feaec5c905601",
      "at": "2026-10-17T01:59:07.225Z"
    },
    {
      "id": "thm-fem-control-active-set-sqp-finite-budget-certificate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 wrongly infers an affine active KKT map from a quadratic objective and affine box constraints. The supplied algorithm permits nonlinear equality constraints; their KKT terms can make F_A nonlinear, so the linear solve residual need not equal the next-point KKT residual.",
      "context_sha256": "072b7f27a989b6858fe2e6bb9d5db1d775565d61a27f28c52da4e756719defc5",
      "item_sha256": "ee1ca8e61bb7e08c9fb6721249704800d2e24d02d2db71726f5aa64685186196",
      "at": "2026-10-17T01:59:09.834Z"
    }
  ]
