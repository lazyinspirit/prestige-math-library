# Step 5 adjudicate: initial, round 1, unit 31

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-31-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u31.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"31",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:ex-poisson-tau-leap-negative-population-pure-death, 5:thm-density-scaled-chemical-langevin-model-error, 5:thm-poisson-tau-leap-weak-order-one-with-exit-bound.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-poisson-tau-leap-negative-population-pure-death",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 attributes the Poisson point-mass formula to the supplied lemma, whose interface gives normalization and moments but not that formula. Step 1.1 relies on this unsupported restatement to compute the negative-state probability.",
      "context_sha256": "98e78c1f732ccb94c6c6336f6510596769244239719c44fe74dc9b447be9a437",
      "item_sha256": "d482008c7c75aaa2aca49d5f1534120a5aed8b56c92ced5f9483fb63b8d9c0ec",
      "at": "2026-10-16T17:58:23.132Z"
    },
    {
      "id": "thm-density-scaled-chemical-langevin-model-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "No initial conditions are stated. Step 1.2 needs both processes to start at x₀; otherwise E[u(0,X₀)] need not equal E[g( Z̄_T)], and the claimed bound can fail.",
      "context_sha256": "32af0eada371a760a835ce524e42e658bafde19902470ffe2f8edad10ea06fe2",
      "item_sha256": "d93e4acd5ef1ab380e3b4a2655553e1ddd4f391399b4b7ad0156d6790030ea44",
      "at": "2026-10-16T17:58:04.084Z"
    },
    {
      "id": "thm-poisson-tau-leap-weak-order-one-with-exit-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The referenced algorithm requires a draw budget, but none is specified. With B<R it can return an incomplete prefix even on the first step, so K_h need not be a terminal Markov kernel and the claimed K_h^N bound does not apply.",
      "context_sha256": "1e6e96b47b1fdf541fe0e3c114068994ac0365a0644e6a38c3e8aac6838b3b4d",
      "item_sha256": "14719e7142ed9ac4ef5efda02d863f681e25dbf5080b86fbeecf0ac9d39b3619",
      "at": "2026-10-16T17:58:20.036Z"
    }
  ]
