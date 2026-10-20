# Step 5 adjudicate: initial, round 1, unit 40

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-40-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u40.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"40",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:alg-stochastic-gradient-descent, 3:ex-constant-step-sgd-noise-floor, 4:ex-sgd-biased-direction-violates-alignment.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-stochastic-gradient-descent",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The input is called a discrete filtered probability space but supplies only (F_t)_{t≥1}; its cited interface requires (F_n)_{n∈N₀}. Include F₀ or specify a tail filtration and align it with that interface.",
      "context_sha256": "36064c1a22c8d8908b6ffb10d2103a321bbce85fab692c851ff32a7f1ccb9fd0",
      "item_sha256": "401745f5f97fcbe0e1aa172ea2847981fb469d32b130623e77041248aa6507ce",
      "at": "2026-10-20T09:06:36.116Z"
    },
    {
      "id": "ex-constant-step-sgd-noise-floor",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F9 and F10 overstate their cited theorems: they present abbreviated conditions as sufficient but omit the required L-Lipschitz gradient assumption (and F10 also omits the lower-bound and square-integrable-start assumptions).",
      "context_sha256": "ce1c269ee75c443081018f380d1ab7c4c426fd2ecda5c1f5f70581e4e6325e76",
      "item_sha256": "a0a205b5c760d6b9fc25f51d4063876122b4ab0122962515b59e9bc235b0520d",
      "at": "2026-10-20T09:05:48.319Z"
    },
    {
      "id": "ex-sgd-biased-direction-violates-alignment",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited SGD procedure starts at x_1 and updates only for t=1,...,N. Step 1.1 applies it at t=0 to derive x_1 from x_0, so the claimed increase f(x_1)>f(x_0) is not licensed by [F1].",
      "context_sha256": "4e811b6f17664d62c421ded062064671296822f3e6adb8fe5bfadbbdb3404627",
      "item_sha256": "48a5810017e2a19abdf9492cd9040df6359bf22649c97964681ffb644e840188",
      "at": "2026-10-20T09:05:33.308Z"
    }
  ]
