# Step 5 adjudicate: initial, round 1, unit 100

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-100-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u100.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"100",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-ctrl1-smooth-transcription-data, 2:def-ctrl1-runge-kutta-tableau-and-stage-collocation, 2:lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence, 4:alg-ctrl1-indirect-shooting-for-the-ode-optimality-system, 7:alg-ctrl1-runge-kutta-shooting-and-collocation-transcription, 9:alg-ctrl1-finite-budget-transcription-solver-dispatch.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-ctrl1-smooth-transcription-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title calls the data “Smooth,” but the definition requires only C^3 state/control derivatives. The cited interface defines “smooth” as C^k for every k, so the title overstates the stated regularity.",
      "context_sha256": "80272b4fb00cf2e7ff0540e14b77dbcac880af01963e75f07323e041975c591a",
      "item_sha256": "738990a2a6cc328283df039229d8b99097704ac5b48667498d8830f378301f7e",
      "at": "2026-10-17T01:58:16.194Z"
    },
    {
      "id": "def-ctrl1-runge-kutta-tableau-and-stage-collocation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The stage-time check is insufficient for evaluation: f and L are defined only for states in Ωx and controls in Ωu, but the definition neither restricts X_{j,0} and stage states to Ωx nor requires u_j∈Ωu. Thus its equations and quadrature can be undefined even when all stage times",
      "context_sha256": "84fdc5d0ffa479f40f47b5275c0e83d243987d7601b27454da3cfcb718c169d7",
      "item_sha256": "286b0238c04f5568ea80f4cc338465b63e0b839ffcdb7cbb21a891e81c014a52",
      "at": "2026-10-17T01:58:26.768Z"
    },
    {
      "id": "lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 uses Minkowski to assert the triangle inequality for vector-valued L²(0,T;ℝᵐ), but the supplied interface states only scalar Lᵖ Minkowski. Step 1.2 needs the vector result; derive it using pointwise Euclidean triangle inequality plus scalar Minkowski.",
      "context_sha256": "ae47f8e6968d29d62c4992bd5ac09fd4a6a71c8b3a68552eaf1d00bb3cb9f947",
      "item_sha256": "f5799729d0b1ccd8b4a957f6d0e2fc0e3d43c0e9c35f9a8e913e7cdaf97e54f5",
      "at": "2026-10-17T01:58:55.214Z"
    },
    {
      "id": "alg-ctrl1-indirect-shooting-for-the-ode-optimality-system",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The data may include active endpoint constraints; only active path constraints are excluded. Endpoint constraints add boundary conditions or multipliers and change transversality, so the stated BVP need not be the optimality system for admitted data. Exclude active endpoint const",
      "context_sha256": "1040a4310b40d40799c03a4d97109da60d01af728b3a113e13a22ca257ba5c64",
      "item_sha256": "ab014aa0df1a8de3760f93a47fd6f001c8d74bc8457c4b1e02bb7e63484fd97b",
      "at": "2026-10-17T01:59:06.976Z"
    },
    {
      "id": "alg-ctrl1-runge-kutta-shooting-and-collocation-transcription",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In multiple-shooting/collocation mode, the terminal node X_{N,0} can lie outside Ω_x. The algorithm then evaluates φ(X_{N,0}), though φ is defined only on Ω_x; defects need not make it equal to Φ_{N−1} at the supplied candidate.",
      "context_sha256": "452652a321c6608eb0d26395d0587790dd107811c44445e68c4d7a580b19a73e",
      "item_sha256": "63a279676050949235eabb46ace5a123a9ba39756a9611cce58cf8a77dac044d",
      "at": "2026-10-17T01:58:45.373Z"
    },
    {
      "id": "alg-ctrl1-finite-budget-transcription-solver-dispatch",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The caps are not typed as integers. In particular, N is passed to a dependency requiring an integer update cap, and R and J_max must also be integer caps; the definition admits values such as N=1/2, outside the supplier interface.",
      "context_sha256": "4d84ef05efbe52086d7371d193582b309c77e78e9f8011cc1ee7fb37b4e91f3b",
      "item_sha256": "468deac36781d2304a2238539edfe5e1ebeb9d00ddb2256e23527db02e5705c6",
      "at": "2026-10-17T01:59:32.885Z"
    }
  ]
