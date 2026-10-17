# Step 5 adjudicate: initial, round 1, unit 102

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-102-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u102.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"102",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:alg-finite-budget-multiplicative-d-optimal-design, 1:thm-local-parameter-perturbation-bound, 2:ex-first-order-kinetic-rates-are-confounded-by-total-decay, 4:ex-endpoint-sensors-give-a-d-optimal-linear-time-design.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-finite-budget-multiplicative-d-optimal-design",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claimed bound of at most N updates and N+1 sensitivity scans is a complexity property stated in the algorithm definition; library convention requires such properties in a separate proved result.",
      "context_sha256": "5c3c1cfc5121a286874df900da428a9f29a9db564c3980c97190a74f9ff0019a",
      "item_sha256": "4da30919e457e548e550830401f17a441f502a23bd8b1d5bea88e6033daadcfb",
      "at": "2026-10-17T01:59:21.735Z"
    },
    {
      "id": "thm-local-parameter-perturbation-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Statement omits m≥1, but step 2 applies [F5], whose supplied interface requires m≥1. For the allowed case m=0, that inference is not licensed; add the dimension hypothesis or handle that case separately.",
      "context_sha256": "d8b7174dc75522bf9cdd79ae58ae89418db25c9230118ff5f56c4cfdb8ad740f",
      "item_sha256": "36f6a8f66109fb7e567dcf70ee3cf23218eb3ee6cbbe85fe9ce1447e10a94e1c",
      "at": "2026-10-17T01:59:36.078Z"
    },
    {
      "id": "ex-first-order-kinetic-rates-are-confounded-by-total-decay",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For the allowed edge case T={0}, every observation is A₀, so the data identify no rate combination. The title claims the model identifies the sum; require at least one positive observation time or weaken the title.",
      "context_sha256": "02d3beb885f117bbb0d987b2f6796374385faca7e32e99b436394bd5d9bb332a",
      "item_sha256": "9c97f2b634fca9d3a14ac8233f7db03a785eb9ae54d5ce6a97d8e6fd7fc9e656",
      "at": "2026-10-17T01:59:13.880Z"
    },
    {
      "id": "ex-endpoint-sensors-give-a-d-optimal-linear-time-design",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 applies only to designs returned by the multiplicative algorithm. The endpoint design is never returned by it, so F4 does not license calling its zero violation a certificate; the local restatement omits this scope condition.",
      "context_sha256": "6459cc34dfeebd9b29e09a1458409acc7aba324a138890441d62ea41f0ea0b81",
      "item_sha256": "6e3a6f47e86f4325466fd2886e68da08047e9539383d192e7abf8b7efaa945d5",
      "at": "2026-10-17T01:59:18.651Z"
    }
  ]
