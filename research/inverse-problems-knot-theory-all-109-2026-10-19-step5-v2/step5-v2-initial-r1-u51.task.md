# Step 5 adjudicate: initial, round 1, unit 51

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-51-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u51.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"51",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 7:ex-ip-inversebench-black-hole-imaging, 7:ex-ip-inversebench-first-born-scattering, 7:ex-ip-inversebench-full-waveform-inversion, 7:ex-ip-inversebench-multicoil-mri.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-ip-inversebench-black-hole-imaging",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Verification 2.1 is unsupported: F1 requires a named metric and uncertainty diagnostic, but the example gives neither. Observation maps and split sizes alone do not specify those benchmark fields.",
      "context_sha256": "921076f0d5e56ae6eb4e5eff6a2b9923c83a5a578b44a9d8f9eb49436c8bb5d4",
      "item_sha256": "565f393d2632b4be541d5556847143b783685fe2f0b0d6635edd84064ff4e0a1",
      "at": "2026-10-21T14:57:52.163Z"
    },
    {
      "id": "ex-ip-inversebench-first-born-scattering",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 claims this instantiates [F1], but it omits required benchmark fields: an evaluation loss/metric, uncertainty diagnostic, compute budget, and evaluation protocol. The cosine-similarity cutoff only curates test samples; it is not a reconstruction metric.",
      "context_sha256": "50bbf41dcf656654a07424a7c6ee9c73c1c28bc7621d422d8586d19f46ffd17a",
      "item_sha256": "7671844c994d4c7cf6e013dd4bdc1cfb4b8ca280fd94c5b08c66a5f5f27f1da1",
      "at": "2026-10-21T14:56:02.225Z"
    },
    {
      "id": "ex-ip-inversebench-full-waveform-inversion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [F1] requires training/test laws (test on Y×Q), validation, loss/uncertainty diagnostics, and compute protocol/budget. This gives only solver settings and counts, yet says they define the instance and population fields; counts do not specify the required laws.",
      "context_sha256": "863a8ee59f2cc13c7a10485d7f1287f41bfef6862171b1e6ce477ab1d535c9aa",
      "item_sha256": "0dbc4a80fa8d745e87cd49de9681f12a09ed4d69cf96df4081ff163c05dda57e",
      "at": "2026-10-21T14:57:02.855Z"
    },
    {
      "id": "ex-ip-inversebench-multicoil-mri",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Verification 2.1 claims the benchmark fields in F1 are instantiated, but the example specifies no noise law or observation kernel; saying the raw data have noise and need not be Gaussian does not supply the probability model F1 requires.",
      "context_sha256": "2eb95c153c27fe0abca4ca05fec19b71faa5ee125011752c63b6a1f7c9dba64e",
      "item_sha256": "b40b077194ea4726b1411531892e0e8f63bc8eb56055d3105e0991c8e5909a1f",
      "at": "2026-10-21T14:56:30.203Z"
    }
  ]
