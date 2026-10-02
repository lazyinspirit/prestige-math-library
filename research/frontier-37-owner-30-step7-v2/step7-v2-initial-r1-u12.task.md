# Step 7 adjudicate: initial, round 1, unit 12

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u12.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"12",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-riesz-potential-near-far-splitting, 1:cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint, 4:rem-fractional-integration-endpoints.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-riesz-potential-near-far-splitting",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] inaccurately restates Hölder for arbitrary complex measurable g,h; the supplied interface requires g∈L^p and h∈L^{p'}. For g=h=1 on R^n, the asserted complex integral ∫gh is undefined under the library’s integrability convention.",
      "context_sha256": "69f66a2d363c142c41549816f0499bf50fb1ea37a42f0b662e98bfe807a157a3",
      "item_sha256": "ebef520acfde7074a020a1b2f2a21d687d97474475335513f9f79c6919b15cff",
      "at": "2026-10-01T20:55:33.365Z"
    },
    {
      "id": "cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 and [F9] incorrectly map (0,e^{-1}) onto (1,∞): log(e/e^{-1})=2. Thus step 3.1's annular integral is σ(S^{n−1})[log log(e/(2|x|))−log 2], and its stated lower bound is unsupported.",
      "context_sha256": "8acbd218eb0a16248f4147a35965b84302c0ea8860220b4642f4bcb3eb005a7f",
      "item_sha256": "d076bf00508bf5b7bd7e5568e2fb95e9e5c7407d650bd068f5d6a6e8023fd464",
      "at": "2026-10-01T20:55:21.332Z"
    },
    {
      "id": "rem-fractional-integration-endpoints",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause 3 incorrectly says renormalization changes the general raw potential by a constant. For f(y)=1_{|y|>e}|y|^{-α}/log|y|, f∈L^{n/α}, but the raw integral diverges everywhere; no finite additive constant relates it to the renormalized potential.",
      "context_sha256": "24dcfa3624416be04e552d13dbbafbd562b4d5153ac476b367469c02b7bce09c",
      "item_sha256": "0b184fb5dc169cec5930980d5e8e5a47c9b5a72b77ed056279a3134d2c4f4a5a",
      "at": "2026-10-01T20:55:23.778Z"
    }
  ]
