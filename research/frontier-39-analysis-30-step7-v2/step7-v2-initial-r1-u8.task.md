# Step 7 adjudicate: initial, round 1, unit 8

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"8",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-axis-parallel-cube-averages-and-cube-maximal-functions, 0:def-weight-and-weighted-lp-space, 0:lem-maximal-dyadic-subcubes-of-a-cube-at-a-height, 1:lem-ball-and-cube-maximal-functions-are-comparable, 2:def-muckenhoupt-a-p-and-a-one-weights, 3:lem-a-one-cube-average-and-maximal-function-forms-agree, 4:lem-a-p-weighted-average-comparison-and-density-to-mass, 9:thm-calderon-zygmund-operators-are-bounded-on-weighted-lp.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-axis-parallel-cube-averages-and-cube-maximal-functions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cube definition uses coordinates i=1,...,n, but the supplied R^n interface defines x_i=x(i) only for i<n (indices 0,...,n−1). Thus x_n is undefined and x_0 is omitted, so Q(x,r) is not well defined.",
      "context_sha256": "d9ab13ce266b5ae9c0db7b27d8f1dd63a165056e27a8882ecdf0b3f597246dea",
      "item_sha256": "55a74ad49a0afb6f3f5eb65121e09e63f42d03594f576f45b862c93520bb7f92",
      "at": "2026-10-06T01:37:17.460Z"
    },
    {
      "id": "def-weight-and-weighted-lp-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed allowance of infinite values on null sets conflicts with the cited L¹_loc definition, which applies only to C-valued, hence finite-valued, functions. Null-set normalization later does not make the original extended-valued function satisfy that interface.",
      "context_sha256": "a52516e0f28841d0ced4e6ca40a5e2ff4cdf8ebc2b977e4f46ed07833938837a",
      "item_sha256": "4b2c5638b613c368ce763de689a49560da3fccd48876d8b1b086bb99908de8e1",
      "at": "2026-10-06T01:37:40.180Z"
    },
    {
      "id": "lem-maximal-dyadic-subcubes-of-a-cube-at-a-height",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] falsely claims that Φ(D) has the same centre. For n=1, Q0=(0,2) and D=(0,1/2], Φ(y)=2y; D, Φ(D), and Q0 have centres 1/4, 1/2, and 1 respectively. The image centre is Φ(c_D).",
      "context_sha256": "e95ad442e070726cd36c0cb215965100ddd9eddbc3f45d614fc99d320a06037a",
      "item_sha256": "eb4815cf391356679bfd62bfbae39eb4d16b2157cea0d0594e67fb78f31ce263",
      "at": "2026-10-06T01:38:18.996Z"
    },
    {
      "id": "lem-ball-and-cube-maximal-functions-are-comparable",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] asserts λ(B(x,r))=v_n r^n for arbitrary centres, but the cited interfaces establish only positivity/finiteness and dilation/reflection about the origin. Translation invariance is missing; steps 2.1–3.1 use this unsupported formula.",
      "context_sha256": "ba812810366e0b071b8302f4381ea88267dfc4e8379dd81de7a1eac6caa35ae9",
      "item_sha256": "7e7fbb074eb0b537df22b40d0dabc829f990a8236f921de1a9050c45ec41ab56",
      "at": "2026-10-06T01:37:27.882Z"
    },
    {
      "id": "def-muckenhoupt-a-p-and-a-one-weights",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The A_p formula uses cube averages defined only for locally integrable functions, without extending them to nonnegative measurable functions. For n=1, w(x)=|x|^{p-1} is a weight but its reciprocal power 1/|x| is not locally integrable, so the formula is undefined.",
      "context_sha256": "173206e2ab3724045104bc80420906aac5f089b920fbc9ea5182d7d7099ce9dc",
      "item_sha256": "077b737e5291fdd11ec8fc35bf458c0d2a4e385d4d31bd60a3680182a0953808",
      "at": "2026-10-06T01:37:38.364Z"
    },
    {
      "id": "lem-a-one-cube-average-and-maximal-function-forms-agree",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 falsely asserts two-sided comparability of nested-set averages. If E⊂F, |F|=2|E|, and w equals 1 on E and K on F\\E, their average ratio is (1+K)/2, unbounded. Only the smaller-set average ≤2 times the larger-set average follows.",
      "context_sha256": "3a57aa84f76cd11958e78930d7ce9f71d60fe142b7b507e5fec9e155856b7bde",
      "item_sha256": "072a086d5b700e5a5da6c06d583f1cc664e508acd744403f8ecfeb42f1ac2248",
      "at": "2026-10-06T01:37:59.909Z"
    },
    {
      "id": "lem-a-p-weighted-average-comparison-and-density-to-mass",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] drops the cited Hölder theorem’s finite L^r and L^{r'} hypotheses. Step 1.1 applies it to arbitrary measurable f without establishing finite weighted p-integral or separately handling the infinite-integral case; the supplied interface does not license this application.",
      "context_sha256": "d247f22dd52bac2f64bfd31a6039e4f8f56eded2155a606d703ce29babf4048a",
      "item_sha256": "3809b0a5cf8cef6ab20ecda810ac55b98ced9069fd3f0c59ad05aac072541f9f",
      "at": "2026-10-06T01:37:56.320Z"
    },
    {
      "id": "thm-calderon-zygmund-operators-are-bounded-on-weighted-lp",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 and step 3.1 assert quantitative formulas for γ0 and C1 absent from the supplied good-λ interface. That interface gives only unspecified dependence, so the stated homogeneous bounds are not licensed by the citation.",
      "context_sha256": "a8e1e7ac9986635ad4c0ae62c431c0a452c93ea4b6289c26d729f0127f0c15d6",
      "item_sha256": "e647bea577d2dee5c9a868305c8f4ca471b975972d9e6c724a9ae6d7748a8359",
      "at": "2026-10-06T01:40:40.186Z"
    }
  ]
