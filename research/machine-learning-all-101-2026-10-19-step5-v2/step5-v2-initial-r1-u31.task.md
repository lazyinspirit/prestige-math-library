# Step 5 adjudicate: initial, round 1, unit 31

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-31-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"31",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-fixed-support-test-function-space-is-separable, 2:lem-network-approximates-smooth-activation-convolutions, 2:cex-offset-free-sine-ridge-functions-are-not-dense, 2:cex-pointwise-uniformity-fails-for-an-essentially-bounded-activation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-fixed-support-test-function-space-is-separable",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 misstates the supplied cutoff interface: it gives a radial compactly supported cutoff, not the stated step function θ or its flatness. Thus step 1.1’s specific χ_n construction is unsupported by its cited dependency.",
      "context_sha256": "3b600d888bc2cf6adc2fdbb78c2854cf4257d0ac89b9c3008f5b9200ad9982a4",
      "item_sha256": "80ec613434711e7b862ed442368f86545c5abbf3c8bc7510c4c0fb857401a9e7",
      "at": "2026-10-20T08:48:17.147Z"
    },
    {
      "id": "lem-network-approximates-smooth-activation-convolutions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 says translation invariance makes x−C null, but x−C reflects C before translating it. The cited interface licenses translations only, so the null superset needed for completeness is not established.",
      "context_sha256": "9b4a283ab2b08dbed84597cd3139b9037c7a4945f3cf5f7c11dc826aceef479b",
      "item_sha256": "190a648eaa9417d0fc03ec94407c9c436500bc5e25fc23a37dffe06dce18f790",
      "at": "2026-10-20T08:48:33.175Z"
    },
    {
      "id": "cex-offset-free-sine-ridge-functions-are-not-dense",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof refutes density using x², but the title overclaims: constants are even targets and are represented exactly by m=0. Narrow the title to the x² obstruction or nonconstant even targets.",
      "context_sha256": "3a2735c8aff8418b63fc1bfc962fa1f15507e521b941a216cc66ad854a4a7c06",
      "item_sha256": "563ff851b7f97d69597b1b21fc5eb2cbfc26b9775493a0bf503b280d33b2142b",
      "at": "2026-10-20T08:49:14.274Z"
    },
    {
      "id": "cex-pointwise-uniformity-fails-for-an-essentially-bounded-activation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The spike definition ranges over n∈ℕ, which includes 0 by library convention, so it uses 1/0. Thus σ is not defined as stated and the counterexample cannot be checked.",
      "context_sha256": "abf3ebcacb0fb7d9ec0915e4d80d5ce9f5a6cdd8b77dfae245b6a9c1f3e6a939",
      "item_sha256": "09532269083ec42b832b3fd2f19629337d1e80d74757969d53b0b58e88b92c14",
      "at": "2026-10-20T08:49:10.463Z"
    }
  ]
