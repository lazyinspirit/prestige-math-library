# Step 5 adjudicate: initial, round 1, unit 35

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-35-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u35.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"35",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 20:lem-qa-11-good-bad-decomposition, 22:prop-qa-11-known-count-random-selection-bit-cost, 23:thm-qa-11-integer-iteration-regime, 24:thm-qa-11-known-count-success-bound, 25:thm-qa-11-known-count-query-cost.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qa-11-good-bad-decomposition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof’s final step assumes |s⟩=N^{-1/2}∑_{x∈D_n}|x⟩, but neither the statement nor a supplied dependency interface defines the uniform state that way. Without that characterization, the decomposition is unproved.",
      "context_sha256": "848c2b1d5c6a72395c5df0a9aea30d28c65919dc0ea16be03d3c86d1a116cecf",
      "item_sha256": "81d0d0591c355a782e43cdc939b3b9bd2489415ee0144855dd3822c671c8f96c",
      "at": "2026-10-16T05:02:45.739Z"
    },
    {
      "id": "prop-qa-11-known-count-random-selection-bit-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 misstates lem-of-square-monotone: its supplied interface gives monotonicity of squaring, not square-root order. Step 1.1 relies on this unsupported restatement to bound √(N/t); derive that order from root uniqueness and square monotonicity or cite a suitable result.",
      "context_sha256": "b7cfdd5d9a14d34d7218d83527e67883015e8b58e9cdc1de91de343283504876",
      "item_sha256": "97f361640a6ead510248e10c23bebc9003f9ed75d86dae60cdac224131225159",
      "at": "2026-10-16T05:02:42.778Z"
    },
    {
      "id": "thm-qa-11-integer-iteration-regime",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its dependency: the formula is supplied only for 0<t<N; t=N is handled separately. The all-k restatement is inaccurate, and step 4.1 applies it when a=1.",
      "context_sha256": "530dc1f9795284847b78336149690d8c60952bb7c520fca569341de2bacb8533",
      "item_sha256": "b4e44f24a3de0d78423e682e938054b00a429242c70509db2dcef5b5a04919ac",
      "at": "2026-10-16T05:02:47.768Z"
    },
    {
      "id": "thm-qa-11-known-count-success-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F4] falsely attributes the recurrence/sine identity to the preprocessing-cost proposition, whose interface only specifies the recurrence and its bit cost. The maximizing-list-to-success inference needs a separate derivation.",
      "context_sha256": "7964c79d6f1c3495df33b751927409338cc5c249a0afedc14d25b74724c55617",
      "item_sha256": "a4ccad7d0450633d21024a3b0ec258ed2ad85bbdfbbaaed7a89665f3b4560de9",
      "at": "2026-10-16T05:02:41.653Z"
    },
    {
      "id": "thm-qa-11-known-count-query-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 omits the algorithm’s t=0 early return, yet step 3.1 claims that F1 records it. F4 guarantees the output is none, not that no query is made, so the stated facts do not support the t=0 query-cost claim.",
      "context_sha256": "9cf505ff72a7f572b2b21ea1d0e8bb44efd1bd113fe8b9ca282dbd9168267bff",
      "item_sha256": "ebb1b1fda9539a555907393fe0b200a53aeb9380820103ed59e739aed3d17fa9",
      "at": "2026-10-16T05:02:44.649Z"
    }
  ]
