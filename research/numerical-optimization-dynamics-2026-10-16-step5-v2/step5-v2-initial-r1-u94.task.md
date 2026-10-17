# Step 5 adjudicate: initial, round 1, unit 94

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-94-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u94.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"94",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-finite-matrix-semilinear-variation-of-constants, 3:lem-exponential-euler-local-defect, 3:lem-exponential-integrator-interaction-picture-stability, 4:alg-certified-exponential-euler-etd2-step, 4:lem-etd2-local-defect.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-finite-matrix-semilinear-variation-of-constants",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows s=t, but step 2.1 invokes [F5], whose interface requires a<b, without handling that case separately. The identity is trivial when s=t, but the proof as written does not establish it.",
      "context_sha256": "011db2686efb1daf6a9b4fca4a8344fa9b793c7442cf2aa6ddf03544da0bdc23",
      "item_sha256": "88226529dc6533dbb01bfe6eb054aff6839fc289a90a85a1a7ecf482dfc5f692",
      "at": "2026-10-17T01:55:53.467Z"
    },
    {
      "id": "lem-exponential-euler-local-defect",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits the step-time domain required by F1 and F2: both require 0≤t and t+h≤T, while it assumes only h≤T. Thus the cited variation formula and Ψᴱ_h(t,y(t)) are not licensed for every stated case.",
      "context_sha256": "5e67f4b5234ea47b7ded8e0a5c4ff91235083e34be79abeabd1d715bdec1af61",
      "item_sha256": "9c2981bf482b490a39e72913f83feaae37c5ad532c1fcae0b6a53e2b4c74ae67",
      "at": "2026-10-17T01:56:13.063Z"
    },
    {
      "id": "lem-exponential-integrator-interaction-picture-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 uses the least-upper-bound property for subsets of ℝ, but its cited definition does not establish that ℝ is complete. The supplied interface points to thm-dedekind-complete or cor-cauchy-reals-lub-complete for that fact.",
      "context_sha256": "d6d2f8330d3be42da0b56277c0e77c8cd8439212344e968562d374d953480ec1",
      "item_sha256": "6d31abfc1084377a57ce764d75addf47d2038a1206e67716412326f700666a34",
      "at": "2026-10-17T01:56:20.476Z"
    },
    {
      "id": "alg-certified-exponential-euler-etd2-step",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Arnoldi dependency requires a threshold and reduced-action configuration (including tolerance and finite scaling/order budgets), but this algorithm neither supplies them as inputs nor specifies them in its calls. Its action requests are therefore incomplete.",
      "context_sha256": "055358cf71737319c8a8015407efb1865a7713c29720b59e0d9972c3ee8f0647",
      "item_sha256": "71ab105ae164f1289b7eb715acd76c489779fa2adc49139f1355e4778eed82c9",
      "at": "2026-10-17T01:56:41.459Z"
    },
    {
      "id": "lem-etd2-local-defect",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Statement omits the step-map domain condition t≥0 and t+h≤T. The supplied interface defines Ψ² only under that condition, so the claimed defect can be undefined for cases the Statement allows.",
      "context_sha256": "a49c5ac6a313c54aed959823dd34102b22a005c84f288508437421496483f43a",
      "item_sha256": "0094bac213fa4016bc72da951ffe19b4f74e97d8a550b35d5b8ffd03047db2fc",
      "at": "2026-10-17T01:56:24.613Z"
    }
  ]
