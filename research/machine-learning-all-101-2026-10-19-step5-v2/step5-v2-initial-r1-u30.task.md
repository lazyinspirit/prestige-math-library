# Step 5 adjudicate: initial, round 1, unit 30

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-30-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u30.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"30",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-finite-martingale-difference-sum-variance, 1:lem-local-sgd-virtual-progress, 2:lem-fedavg-one-round-progress, 2:ex-scaffold-control-correction, 4:lem-scaffold-nonconvex-client-drift, 6:lem-scaffold-nonconvex-round-progress, 7:thm-scaffold-convex-and-nonconvex-rates.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-finite-martingale-difference-sum-variance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof indexes coordinates by 1,…,d, but the supplied R^d interface indexes them by k<d (0,…,d−1). Thus the stated coordinates and inner-product expansion are ill-typed/off by one; use the library’s indexing consistently.",
      "context_sha256": "52848691294b7e58afdc9976195881d3ea43450483dddf5cd463db67000bcb58",
      "item_sha256": "4341fd85fa41dce57329bf9f715801c2911ae2f63a3e63870c5b7b09c4e30787",
      "at": "2026-10-20T08:45:24.464Z"
    },
    {
      "id": "lem-local-sgd-virtual-progress",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates alg-local-sgd: the local proposal is z_{t+1}^k, while x_{t+1}^k may be replaced by the synchronized average. The cited dependency restatement is inaccurate.",
      "context_sha256": "b9925269822fc3fc65e7caec7eadc32a22edf381596650222f280f220b37eeea",
      "item_sha256": "709f9aec5c0adb475e34f616dbf34b41421d716ccba15f5eb929bada867ce1fc",
      "at": "2026-10-20T08:45:17.010Z"
    },
    {
      "id": "lem-fedavg-one-round-progress",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For N=S=6, K=1, f_i(z)=z²/2, x=x*=0, let every client use the same independent-of-sample Rademacher noise ξ (variance σ²). Each query is unbiased with variance σ², but x+=−η̃ξ and E=0, so the claimed bound requires η̃²σ²≤5η̃²σ²/6. Cross-client conditional unbiasedness needed by [",
      "context_sha256": "7e8d94970228d17a9e12d91429fe197aa0a552b714a7663969b0fda4c8fa95e3",
      "item_sha256": "f49c648254a8813bf02bf305fc6c8efd954f018fbf2ff305c0f37c36aadad4c6",
      "at": "2026-10-20T08:45:46.487Z"
    },
    {
      "id": "ex-scaffold-control-correction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 uses oracle values g_i(y), but the example assumes g_i=∇f_i without stating it. The supplied interface allows stochastic oracles, so the corrected step need not be zero at y=0 and the claimed invariance does not follow.",
      "context_sha256": "f05c3a5924167bfe4a8bcbb69d3fe88ca1bb3c65e4ed298b125bf4848a90117f",
      "item_sha256": "fa1b83c757c1afa3125e562759b7e58dcc99c16330b7a4bcf9b1f0d9ce71cbeb",
      "at": "2026-10-20T08:47:15.001Z"
    },
    {
      "id": "lem-scaffold-nonconvex-client-drift",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 attributes conditional centering and the variance bound for oracle errors to probability and conditional-expectation interfaces that say nothing about oracle moments. Those properties come from the statement's oracle assumption/A1, not the cited dependencies.",
      "context_sha256": "08934cf2c3f9b589a35eebad7f881dd57fabc8d62e891288c45a3c43c5493e4d",
      "item_sha256": "e8d1ff9ef3d68dc36562da6a694b43656469a368c88447d827195e12554add8a",
      "at": "2026-10-20T08:47:03.620Z"
    },
    {
      "id": "lem-scaffold-nonconvex-round-progress",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 gives a bound on the conditional-mean update, not the exact identity E[Δ|F_{r−1}]=−t v asserted in Facts & Assumptions and step 1.1. That identity needs a separate derivation from the algorithm and sampling assumptions.",
      "context_sha256": "f005c39f1bca869c24110eb25fa09d49f2c47a02f342949fc54dc360a132885c",
      "item_sha256": "7a79d72f1c321dd1427aabef829e629c0d805eaeaaba0f31d4970ccaefc75d4c",
      "at": "2026-10-20T08:48:41.970Z"
    },
    {
      "id": "thm-scaffold-convex-and-nonconvex-rates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof adds assumption [A2] (AC) to invoke the conditional-expectation interface, but AC is absent from the Statement’s hypotheses. Add AC to the theorem statement or remove that dependency.",
      "context_sha256": "0b891a727b616f17fd760e72b54185dc78b3c5f3868ee1ee6183ec12f5572251",
      "item_sha256": "892ed88a51b317f8e9d3bd1c898615c8d137a91a6ba6d6460eab5640344cbca2",
      "at": "2026-10-20T08:47:30.171Z"
    }
  ]
