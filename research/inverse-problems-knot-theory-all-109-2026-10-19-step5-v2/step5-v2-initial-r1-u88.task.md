# Step 5 adjudicate: initial, round 1, unit 88

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-88-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u88.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"88",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:lem-kontsevich-morse-isotopy-decomposition, 4:thm-conway-second-coefficient-is-type-two, 7:lem-kontsevich-long-knot-closure-and-connected-sum, 8:lem-kontsevich-critical-point-normalization-and-associator, 11:lem-kontsevich-integral-finite-type-truncation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-kontsevich-morse-isotopy-decomposition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 genericizes critical-value crossings only outside the removed fold neighborhoods. Its fold model excludes crossings only between the two points born at that fold; it does not rule out tangential crossings there between a fold branch and another critical point. Step 4.1 d",
      "context_sha256": "b9d0938c7ce8263aba3f2f3b4a5c7085b916b174a15a43a23196c8c4c78f9d5a",
      "item_sha256": "3226f3303de89473a9be8c46304a947e34f0590eba4e298553100f196201246a",
      "at": "2026-10-21T15:56:37.600Z"
    },
    {
      "id": "thm-conway-second-coefficient-is-type-two",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 inaccurately restates def-conway-polynomial: the supplied interface says existence and uniqueness are a separate well-definedness obligation, but F6 claims that dependency supplies an actual unique invariant.",
      "context_sha256": "80aadf5fbe628a831e2706561122dab0423fc601f56a04999ed8358f51650ae0",
      "item_sha256": "62a83c454d3fb4331d8726dc8572036070c22590b393dc16869f4b0e7931bfd7",
      "at": "2026-10-21T15:55:42.635Z"
    },
    {
      "id": "lem-kontsevich-long-knot-closure-and-connected-sum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 is misstated: its interface only bounds terms touching a shrinking critical needle. It gives no short-chord ds/s or preceding-long-endpoint estimate, so step 2.2’s claimed uniform R-decay near critical levels—and thus the closure limit—is unsupported.",
      "context_sha256": "865b67a17d6a342628c4162c68ac961d52e5663e49a1fe547e1b8640f1ea9fcf",
      "item_sha256": "e123cb32f651bbb16963f4fedc891207bc2f2c163a0a8404eac01c439e806c41",
      "at": "2026-10-21T15:56:27.827Z"
    },
    {
      "id": "lem-kontsevich-critical-point-normalization-and-associator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 infers an analytic radial remainder from F2’s smooth-extension claim, then uses Taylor recursion for arbitrary smooth tangles; this is unsupported ([CDM §10.1.6](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)).",
      "context_sha256": "095b33b841f0ede733b113a6c3da06d7fb0be5912721e3a894e7377c58539fb0",
      "item_sha256": "cd9a36ff99d3cb5a3a8dc773125abebc9a12ca4ef1553851abf241f564c88620",
      "at": "2026-10-21T15:58:35.057Z"
    },
    {
      "id": "lem-kontsevich-integral-finite-type-truncation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The stated target is ill-typed: F5 says each unframed degree module is rational and I_m lands in its complexification, but the statement places I_{≤n} in the unframed modules themselves. The disclaimer about rational coefficients does not fix the target.",
      "context_sha256": "df2029935fbaf4e5aec6343e3698c169302220911d0d6106f0513bfa6765a355",
      "item_sha256": "3a3ec91dcb951a1c3e7fab8d51f7d5dac714b0e9b4b2a3df66a5592aee6c41d2",
      "at": "2026-10-21T15:56:30.303Z"
    }
  ]
