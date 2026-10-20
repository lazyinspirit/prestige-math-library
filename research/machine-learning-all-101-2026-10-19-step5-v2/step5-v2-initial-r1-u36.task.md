# Step 5 adjudicate: initial, round 1, unit 36

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-36-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u36.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"36",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-positional-encoding-and-causal-mask, 1:def-hahn-hard-soft-attention-sequence-model, 4:lem-yun-transformer-grid-lookup, 5:thm-fixed-width-transformer-lp-universality.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-positional-encoding-and-causal-mask",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The mask's allowed-key description is off by one under the library's zero-based sequence indexing: row i allows keys 0 through i, including key 0 when i=0, not keys 1 through i.",
      "context_sha256": "89cd66bff48ce96e52c89a6610b7b55c9bf67172e3887e3591bb2a47e2d4cd51",
      "item_sha256": "9e6fd470cb3a580b6bc47b657de36384c4a3197e2fc7696363960e82153b6ce3",
      "at": "2026-10-20T08:56:18.026Z"
    },
    {
      "id": "def-hahn-hard-soft-attention-sequence-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The dependency reference claims a finite feedforward graph evaluates the model’s positionwise maps, but F_k may be arbitrary functions in the hard case. The supplied graph interface only licenses maps built from its affine and activation nodes.",
      "context_sha256": "1dae2d8d9cb965bed2ab10f3d0bb99a6929c1e719024a3f44081d5fdc2c432dc",
      "item_sha256": "59763476b84690b0ef783398be0991e0ac9648c2f971f0bf82e044651290b689",
      "at": "2026-10-20T09:00:19.011Z"
    },
    {
      "id": "lem-yun-transformer-grid-lookup",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claimed clipping does not follow from the residual update: for a negative coordinate x, ReLU(x)=0, so x+w ReLU(x)=x for every w. Invalid tokens therefore are not sent to zero as required.",
      "context_sha256": "a8442d62ae1cb916d60e2ffa668f6db0e9b5a3351146331d2d59ee184a3e1496",
      "item_sha256": "32aac22e1fbda74cf94aaba27864dc620fa98aad42ff353510e11074b48ff928",
      "at": "2026-10-20T09:01:03.476Z"
    },
    {
      "id": "thm-fixed-width-transformer-lp-universality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 asserts the ReLU/softmax simulation fixes zero exactly, but F3 guarantees only that the modified lookup does. The sentinel filter sends the unbounded exterior to zero; any nonzero simulation output there makes the global Lp error infinite.",
      "context_sha256": "da62885afe784735015733025e33de04e4572dfdd5596217d19f5e9cf9cde986",
      "item_sha256": "ea84bc2e441964b34f64d4b44958d4b7b8dd697e15451032db680c2c82b341d7",
      "at": "2026-10-20T08:59:40.272Z"
    }
  ]
