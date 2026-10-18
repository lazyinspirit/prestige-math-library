# Step 5 adjudicate: repeat, round 3, unit 31

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/repeat-3.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-31-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-repeat-r3-u31.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"repeat",round:3,unit:"31",input_sha256:"a1259cda9671218fe1246997414f671bb460916753792f59823637e45748fb8b",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 11:thm-qa-37-exhaustive-b6-compiler-terminates, 12:alg-qa-37-su2-solovay-kitaev-compiler, 13:thm-qa-37-su2-compiler-error-length.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-qa-37-exhaustive-b6-compiler-terminates",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The statement allows every positive rational ε, but the compiler and certified-input interfaces require a positive binary-rational tolerance. For ε=1/3 the invocation is outside that domain; no conversion to a smaller admissible tolerance is specified.",
      "context_sha256": "2a8d320d15903369d5b67f8e7de3b4daa3d696ee4edc2ffb7f336752cbc39b4a",
      "item_sha256": "07a6ffe57eef1467398756443b62cd5f58fef1fea09987a297467a5961f0b8bf",
      "at": "2026-10-18T09:04:51.715Z"
    },
    {
      "id": "alg-qa-37-su2-solovay-kitaev-compiler",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The finite branch does not require rational η₀, but the cited bit-complexity theorem does. No conversion to a rational certified radius is specified, so that theorem does not license the procedure for every admitted input.",
      "context_sha256": "9938a0140d4660dc9767382bfb51178dda45deb47c1c8cd5e97b1a4a40e4426c",
      "item_sha256": "aa27ac93a76c94129152d73527156558ba6aacdc78359aac26f962228459d156",
      "at": "2026-10-18T09:01:31.290Z"
    },
    {
      "id": "thm-qa-37-su2-compiler-error-length",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 invokes the bit-complexity theorem, which requires a rational base-net radius η₀. This item allows irrational η₀ and neither assumes rationality nor constructs a rational-radius replacement certificate, so the cited theorem does not directly apply.",
      "context_sha256": "087073d871d4a6c7980092cfd7bf4ef56f3e7f7ea2cbbc88787a59032cd9ef1c",
      "item_sha256": "751fb1549942cc549b097544f713e8637277a6b7c43794ec13fa406ba1e072a6",
      "at": "2026-10-18T09:04:38.250Z"
    }
  ]
