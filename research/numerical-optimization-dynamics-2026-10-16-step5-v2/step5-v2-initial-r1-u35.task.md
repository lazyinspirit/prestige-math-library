# Step 5 adjudicate: initial, round 1, unit 35

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-35-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u35.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"35",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-explicit-runge-kutta-tableau-and-stage-map, 2:alg-rkc1-chebyshev, 2:alg-rkc2-linear-chebyshev, 2:alg-ssprk33, 2:def-euler-midpoint-rk4-tableaus, 4:ex-euler-midpoint-rk4-fixed-time-error-slopes, 4:ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-explicit-runge-kutta-tableau-and-stage-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "This gives an executable stage-by-stage procedure with inputs, queries, branches, and outputs, so it is an algorithm under the library convention. It must use kind: algorithm and an alg- ID; its current kind and ID misclassify it.",
      "context_sha256": "f81fa82c655f26d0fff0922ee8505fa199a1b4e21bddee91f57576be908f9e9c",
      "item_sha256": "359883f7bc2e86e951198d77add97534065a591679e77c6cbe62692767df31e1",
      "at": "2026-10-16T18:00:01.055Z"
    },
    {
      "id": "alg-rkc1-chebyshev",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims a first-order stabilized method, but this item only defines the recurrence and explicitly asserts no order or stability result. Those properties need a separate proved result before the title is supported.",
      "context_sha256": "a17f96d52d1aeec887c8af41be249f6ecfe8e6254de5ea4b70238e4896c06094",
      "item_sha256": "24a70f38388db168cc585d72a740e8bd4f5e9d4002cd93f3d94be578c2877205",
      "at": "2026-10-16T18:00:23.139Z"
    },
    {
      "id": "alg-rkc2-linear-chebyshev",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title asserts second-order accuracy, but the item only defines the recurrence and supplies no proved order result; algorithm properties such as order must be stated in a separate proved result.",
      "context_sha256": "cc51454ef0bbe140fae48f4e2d3ea6edfd66197696de57719e7f527b3b171ca1",
      "item_sha256": "dd2dbec8957df577acb586fcd8d69372b4476fe462050d3f552cd5b79dc667b5",
      "at": "2026-10-16T18:00:01.923Z"
    },
    {
      "id": "alg-ssprk33",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title asserts third-order accuracy and SSP, but this item only defines the procedure. Algorithm properties must be established in separate proved results; none is supplied.",
      "context_sha256": "4e9a3d011ae4e5b8c40b2dc1c27af75490dd83a3e2a91fd4f893d9ff7002d5a9",
      "item_sha256": "60c2b9921abe1cb9b130a044f1be889661a6923312ad2cc2e6c5fca63d130ebe",
      "at": "2026-10-16T18:00:06.874Z"
    },
    {
      "id": "def-euler-midpoint-rk4-tableaus",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title calls the RK4 tableau fourth-order, but this item only defines coefficients and explicitly leaves order to a separate proof. Its dependency interface does not establish fourth order.",
      "context_sha256": "935485f9c1050618116bd8e9d61cee0ea8e19754f7c5dd8762fb1bd69be64520",
      "item_sha256": "3c7b33c62f14e19b752f49c94d970584f15773eac6d27f189090fea2a5e1e52d",
      "at": "2026-10-16T17:59:53.900Z"
    },
    {
      "id": "ex-euler-midpoint-rk4-fixed-time-error-slopes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 misstates its dependency: the supplied lemma gives 1+x≤exp(x), not exp(0)=1. Although exp(0)=1 follows from the cited power-series definition, the local dependency restatement is inaccurate.",
      "context_sha256": "3beef7913b412e715120825c7d6c25a25baec0accf635b8b184e48b5d5c5598b",
      "item_sha256": "4911cfa3ffabb04c80b80c0019f937d2e4cefc5c81321916ca90b6cf5a8f8fb2",
      "at": "2026-10-16T18:00:30.465Z"
    },
    {
      "id": "ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates alg-rkc1-chebyshev as establishing the scalar stability polynomial; its interface says that polynomial is established separately. The prop interface licenses the formula, but F1’s dependency restatement is inaccurate.",
      "context_sha256": "ea67eff6091af62f6205d7811ed62e64656d91bea4c33d5442867ea6773faaa7",
      "item_sha256": "85fb474db7c546a5779301d2828d4da20bdabad1715d08ded26bcecb047bbc35",
      "at": "2026-10-16T18:00:12.328Z"
    }
  ]
