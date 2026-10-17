# Step 5 adjudicate: initial, round 1, unit 82

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-82-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u82.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"82",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-gauss-polynomial-moment-inner-product, 7:def-tensor-product-gauss-rule, 8:ex-two-node-gauss-weights-from-cardinal-squares.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gauss-polynomial-moment-inner-product",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For c=(1,0) with k=1, the coefficient list does not define a formal polynomial under the cited interface, which requires a nonzero polynomial's list to end in a nonzero coefficient. The parenthetical claim is ill-typed; trim trailing zeros or omit it.",
      "context_sha256": "cebc974674d0796f44ebf1fce339a587ecf40e249dc2932255954a3f5a604374",
      "item_sha256": "37a87496aafd2151cf6b2bfe15800b2c04c2173049df9e2d5d6c66f1d8ee34b5",
      "at": "2026-10-17T01:51:39.305Z"
    },
    {
      "id": "def-tensor-product-gauss-rule",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition applies real weights and a finite sum to “any function defined on that node set” without requiring scalar-valued outputs. The cited Gaussian-rule interface requires real-valued functions; for nonnumeric outputs, Q⊗(f) is undefined.",
      "context_sha256": "4828782b05c5b453b0edf59be691f03d4a68bf2648bcab4518f17af9868ab45c",
      "item_sha256": "2db00561b6601dde8e836901b104838b8d7cfd36c2fc87b7a00f6f058e165840",
      "at": "2026-10-17T01:51:42.808Z"
    },
    {
      "id": "ex-two-node-gauss-weights-from-cardinal-squares",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] overstates its interface: the theorem gives exactness and positive weights, but does not state ∫ℓ_i² dμ=w_i. That identity needs the rule definition and cardinal values from [F1] and [F3], so the dependency is inaccurately restated.",
      "context_sha256": "0781da4ad0004c34b718904d7e5f75fd6284c851ac2c69617d00ac786ede8d2d",
      "item_sha256": "97f8b9bef81ae76e4da7cd1d3c6898ba893b8d88221a480b7e64173b68d3c119",
      "at": "2026-10-17T01:52:06.089Z"
    }
  ]
