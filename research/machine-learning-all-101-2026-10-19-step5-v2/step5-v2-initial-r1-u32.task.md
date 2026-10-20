# Step 5 adjudicate: initial, round 1, unit 32

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-32-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u32.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"32",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-univariate-relu-affine-interval-count, 3:lem-relu-rank-sensitive-region-recursion, 5:thm-yarotsky-fixed-architecture-sobolev-approximation-rate, 5:ex-linear-regions-do-not-guarantee-learning, 6:ex-target-specific-vs-target-independent-approximation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-univariate-relu-affine-interval-count",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title calls this a depth-H network, but the cited definition counts input and output layers, so H hidden layers have depth H+2. The theorem proves a bound in terms of hidden-layer count, not network depth H.",
      "context_sha256": "1d6881e976af989d5558a308321d2af61b0b14ff5cd812144010fd85d5b80dc1",
      "item_sha256": "47131fbcd1586121b6d954b06551dff5525debfc61767131ab04b2a894cf9db8",
      "at": "2026-10-20T08:50:15.931Z"
    },
    {
      "id": "lem-relu-rank-sensitive-region-recursion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement counts activation cells without requiring full dimension, but step 1.1 bounds only full-dimensional patterns and discards boundary-only patterns. The supplied definition allows lower-dimensional activation-pattern cells, so this proof does not establish the stated c",
      "context_sha256": "599d1b3cb583dd8edd911b75d226f49f553e45e4b2cbfcab31e053d5b2fbac9a",
      "item_sha256": "76ec9b48f9f69002d3c649282ef4f8c9d772941e327d7122d453da8dd63ac0c9",
      "at": "2026-10-20T08:52:17.411Z"
    },
    {
      "id": "thm-yarotsky-fixed-architecture-sobolev-approximation-rate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2's off-support zero claim is unsupported: the product dependency guarantees axis cancellation only on [-M,M]^2, while the polynomial-network input can be unbounded off the hat support. The asserted all-real cancellation is absent from the supplied interface, so the local ",
      "context_sha256": "5a8382620a881f4577e095e84d164ada1a56d1acced6bce2896e5c4496b08132",
      "item_sha256": "cf5c557a32de4d4ca9de8e7ee47526705a5afcd1556b5a1ac75647b180d41478",
      "at": "2026-10-20T08:52:41.225Z"
    },
    {
      "id": "ex-linear-regions-do-not-guarantee-learning",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 inaccurately omits direct input-coordinate terms: def-relu-network allows output units to be affine in both inputs and hidden values. Zeroing all output coefficients still proves the claim, but does not make this dependency restatement accurate.",
      "context_sha256": "299934433fd0b1c8060d00c1d806f4843581e257e8f879a12cb4539032ec53ad",
      "item_sha256": "8aa59430e617c1ec7016d2bf4465e6a724086ed1b9f5394f574df0008092b565",
      "at": "2026-10-20T08:56:37.347Z"
    },
    {
      "id": "ex-target-specific-vs-target-independent-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2/F3 give only upper bounds on architecture sizes. Step 2.1 calls the quotient of those bounds the architectures’ size ratio; the actual ratio is unconstrained without a lower bound on the target-independent architecture. Only the ratio of the rate expressions is O(log^-2).",
      "context_sha256": "42906e80476b3167b71c43e21892b43628dc059921ac46c6257bba53717b41a5",
      "item_sha256": "5d8e7292482eba0cef3a875b53771ef10df2f21a22ad5e1206387a1e5e5a24aa",
      "at": "2026-10-20T08:52:19.694Z"
    }
  ]
