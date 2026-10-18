# Step 5 adjudicate: initial, round 1, unit 20

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-20-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u20.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"20",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:thm-galerkin-coarse-correction-is-energy-orthogonal-projector, 2:alg-aggregation-based-algebraic-multigrid-hierarchy, 3:thm-two-grid-energy-contraction-under-joint-estimate.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-galerkin-coarse-correction-is-energy-orthogonal-projector",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem omits the dependency’s required 1≤m≤n. For m=0, a 0-column P is full-column-rank, but def-galerkin-coarse-grid-correction—and thus C—is outside its stated domain. Add 1≤m≤n.",
      "context_sha256": "b57b0fd63355b8d7f698c7d4138d840a9f4c2badce11d9826e13fbfec4fd791e",
      "item_sha256": "62d1c4db1f0cc28b352a171a08524693720af416cc48d17ba19e4e95ffb8ed34",
      "at": "2026-10-18T03:13:59.064Z"
    },
    {
      "id": "alg-aggregation-based-algebraic-multigrid-hierarchy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 5 returns to step 1, whose first instruction resets ℓ=0. After any successful aggregation, the procedure restarts from A₀ and can repeat forever; initialization must be separated from the per-level check.",
      "context_sha256": "b4cfca2d4efa3608075cd17b66c59b33838d79f4d8680a4de1ef67debb9739b4",
      "item_sha256": "a7887b1ec6c44f8aff6147a58bad7bd14614257f9609bab6da293fb1f4aae2cb",
      "at": "2026-10-18T03:14:13.589Z"
    },
    {
      "id": "thm-two-grid-energy-contraction-under-joint-estimate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 asserts the domain is nonzero to invoke [F6], but no hypothesis excludes n=0. For the allowed zero-dimensional case [F6] gives no attained unit-vector maximum; handle it separately using the zero-domain norm convention.",
      "context_sha256": "99f757cdf7a0e82feaa1cd765e85e88f6464c14e875047638d749b83f0a12999",
      "item_sha256": "6687d8eddcb47367d15d7e549e2c934cfb7bb4b5ead1fbbeceadca119410d625",
      "at": "2026-10-18T03:13:57.503Z"
    }
  ]
