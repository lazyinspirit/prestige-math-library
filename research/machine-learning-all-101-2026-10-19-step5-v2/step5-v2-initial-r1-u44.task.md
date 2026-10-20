# Step 5 adjudicate: initial, round 1, unit 44

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-44-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u44.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"44",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-homogeneous-classifier-margin-and-exponential-risk, 2:lem-recursive-hard-margin-comparison-trajectory, 3:lem-homogeneous-clarke-flow-margin-monotonicity, 4:lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-homogeneous-classifier-margin-and-exponential-risk",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Homogeneity is defined as a property but never assumed for Φ. Thus a nonhomogeneous graph can have 𝓛(0)<1, where the smoothed normalized margin divides by ‖0‖^L and is undefined. Restrict that definition to θ≠0 or require homogeneity.",
      "context_sha256": "5ac9bdce3a25127e8ff56865d211b327466d5250ed88cc422d9ee0d59fa84f6b",
      "item_sha256": "51cfe051a07fdf95b63cee18feedfb80ea70a4e92cc214cc7850439862530b3a",
      "at": "2026-10-20T09:08:48.938Z"
    },
    {
      "id": "lem-recursive-hard-margin-comparison-trajectory",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 is misstated: its supplied interface requires a nonempty set for extrema to be attained, but the local restatement omits that caveat and thus includes the empty set.",
      "context_sha256": "36b523bd5c21bee7619b2c5974eb37a8dd31c790a5dadc4557f7ff40960e7b57",
      "item_sha256": "5973c287bf4df08c4d78938d0ec415194530055b6ddc306148bed7bfb1cbcdbc",
      "at": "2026-10-20T09:09:52.434Z"
    },
    {
      "id": "lem-homogeneous-clarke-flow-margin-monotonicity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 applies only to sample-margin functions in a homogeneous-classifier model. The statement allows arbitrary homogeneous q_i, so the proof cannot invoke F4 for the risk derivative and flow decomposition without establishing that rule in this broader setting.",
      "context_sha256": "ac768b5af55237edd7ac318fb0909b0fc4c1b5671f86ec49bd56f5b3ed03202b",
      "item_sha256": "b1d025290e746cc548da7185aed5694b585a5dd675eb32f046184e6ef18244ae",
      "at": "2026-10-20T09:11:46.854Z"
    },
    {
      "id": "lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 divides an integral bound Lγ₀/k³ by d(log r)-mass 1/k, yielding only some β⁻²−1 ≤ Lγ₀/k², not 1/k². No hypothesis gives Lγ₀≤1, so the stationarity bound in step 5 is unsupported.",
      "context_sha256": "7ccd839d8fe328d14965c98f8b5b2d5c9f175539c36ab7e94c6dd4c92dac9f2c",
      "item_sha256": "ff862971a43bdd4359a317404dc535ec524900eabdb65327478a1041e62a3eb4",
      "at": "2026-10-20T09:09:34.921Z"
    }
  ]
