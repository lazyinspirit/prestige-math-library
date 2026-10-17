# Step 5 adjudicate: initial, round 1, unit 8

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-8-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"8",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-rare-event-efficiency-criteria, 1:ex-importance-sampling-finite-mean-infinite-second-moment, 2:cex-sir-l2-bound-from-conditional-means-is-false, 3:ex-sir-zero-particle-prefix-positive-event.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rare-event-efficiency-criteria",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claim that logarithmic efficiency is weaker than bounded relative error fails as defined: BRE allows signed estimators. For p→0, let the estimate be −p or 3p with equal probability. It is unbiased with RE=2, but fails the required nonnegativity for logarithmic efficiency.",
      "context_sha256": "8d4e0e24176570b236ad5c170b5d766d6f79005bb151d61ad03118e60af4b689",
      "item_sha256": "d8d0fc591607b074643e335a986758969a26a07f155371d30f2ac5ff38f073d5",
      "at": "2026-10-16T17:46:25.016Z"
    },
    {
      "id": "ex-importance-sampling-finite-mean-infinite-second-moment",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With the library convention 0∈ℕ, Ω=ℕ includes k=0, where P(k)=c₂/k² and Q(k)=c₃/k³ are undefined. Thus the stated probability mass functions are not defined on Ω.",
      "context_sha256": "1a9eb906ed4a203602c530bb5f61e72f24b5edccf6effe1bbe1c5f006aad1b07",
      "item_sha256": "dac0ea95524d0fd0fb5c2a2438df5ce6bdb9cc5482a8f99fb8d58a3723886dce",
      "at": "2026-10-16T17:46:44.115Z"
    },
    {
      "id": "cex-sir-l2-bound-from-conditional-means-is-false",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 and axiom_use say the SIR supplier is stated under AC, but neither supplied SIR interface imposes or mentions AC. This is an unsupported dependency restatement; the counterexample calculation itself is sound.",
      "context_sha256": "b947ea85f315dc72b6ff44d58b7e663a3a59c5c8a5d66cb55f2dd0e52f6f280d",
      "item_sha256": "dc1f94d865e880193dca388859401886f7ab8b84687c9858b7dc98fb677f6828",
      "at": "2026-10-16T17:46:55.507Z"
    },
    {
      "id": "ex-sir-zero-particle-prefix-positive-event",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement calls this an “all-zero initial potential” branch, but the algorithm defines the initial potential as G₀≡1. Only the first event potential G₁=1_{A₁} is all zero when both particles miss A₁; the claim is false as written.",
      "context_sha256": "8a2743304f930b72480ec87ee7670af11cc7834a6dbf130078ed792e3e1e565d",
      "item_sha256": "566f65e965b2cab965197a9c52510f7bed15cc24375219de3758f6c3ffb19204",
      "at": "2026-10-16T17:47:03.140Z"
    }
  ]
