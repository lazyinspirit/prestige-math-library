# Step 5 adjudicate: initial, round 1, unit 7

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-7-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u7.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"7",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:lem-tensor-products-of-integrable-weight-modules-are-integrable, 7:def-highest-weight-element-and-connected-highest-weight-crystal, 9:ex-tensor-crystal-b-one-tensor-b-one-for-sl-two, 12:ex-dual-crystal-reverses-arrows-and-weights.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-tensor-products-of-integrable-weight-modules-are-integrable",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1's biconditional is false: in B(1)⊗B(1), v₀⊗v₁ has weight 0=(-λ₁)+λ₁, but v₀∉B_{-λ₁} and v₁∉B_{λ₁}. Membership in a total-weight piece does not determine the factor weights.",
      "context_sha256": "41b31bf36b2d6abc6d23c43c8e3f1d89b66a0432ebc2f51368eab74c169065f3",
      "item_sha256": "be83afcb2293f8fa824a007e6227e58524159b93ff4aa37281ee8ebbc704c3fb",
      "at": "2026-10-11T14:56:09.059Z"
    },
    {
      "id": "def-highest-weight-element-and-connected-highest-weight-crystal",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F(b) is called a subcrystal for unrestricted b, but need not be closed under raising. In the supplied B(1), F(v1)={v1}, while e_1(v1)=v0 lies outside it. Thus the definition and title assert an invalid subcrystal property.",
      "context_sha256": "f471abe91bfe0a2493974222ff2204b5d1ce463ceb4a7705bbe7f6e4ba9fe362",
      "item_sha256": "65a684967dd30b60b0d8159f135a31d74239c94083feb0f4f1371128c787918d",
      "at": "2026-10-11T14:56:00.044Z"
    },
    {
      "id": "ex-tensor-crystal-b-one-tensor-b-one-for-sl-two",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 and step 4.1 incorrectly say the B(0) vertex is fixed by both operators. Both operators send it to 0, as step 2.1 computes; fixing the vertex would contradict the weight shifts and finite-string definitions.",
      "context_sha256": "dfe2f3cedb8a8ad5a5bd9f33e5fde21c36b5c3f25cc50d721bff004220aa95a8",
      "item_sha256": "86ddd65381acc5b26a80365f154422972e6effcaa42bcde08ea0b9d4ecb27738",
      "at": "2026-10-11T14:55:54.669Z"
    },
    {
      "id": "ex-dual-crystal-reverses-arrows-and-weights",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 invokes a standard-module construction and highest-weight universality attributed to [F3]. Its supplied interface gives crystal data and tensor components, not that construction or universality, so the cited inference to V(λ₂) is unlicensed.",
      "context_sha256": "5047be77aebad8ca1b7b8d5cf3585a4ff96bc49c8115383fba8ae073e7aff433",
      "item_sha256": "4a9522e9136b77e43594ec0108530e80b389699569ca2d311fa1d822909f303a",
      "at": "2026-10-11T14:56:15.929Z"
    }
  ]
