# Step 5 adjudicate: initial, round 1, unit 11

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-11-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"11",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:alg-certified-bracketed-cdf-inversion, 0:alg-counter-based-keyed-permutation-stream, 0:alg-linear-congruential-generator-mod-power-of-two, 0:lem-box-muller-product-density-and-radius-moment, 1:alg-rational-bernoulli-rejection-from-fair-bits, 2:alg-finite-categorical-inverse-cdf, 2:ex-box-muller-finite-midpoint-tail, 3:ex-inverse-cdf-near-zero-density.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-certified-bracketed-cdf-inversion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The procedure appears mathematically sound, but asserts its bracket and residual certificate without a separate proved correctness result. The library’s algorithm convention requires correctness properties in proved lemmas; the procedure instructions are not a proof.",
      "context_sha256": "310524db7b7969fe5484900d8cfaf4170a92fce7d65bd72e7d8d968dfb86044b",
      "item_sha256": "923d339b30527eca8e5ebed6727c359297acbc1e78592d350a0dffdbf38db609",
      "at": "2026-10-16T17:48:36.846Z"
    },
    {
      "id": "alg-counter-based-keyed-permutation-stream",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The interval endpoints are not required to be integers. For example, c₀=1/2 and c₁=1 satisfy the stated bounds, but the procedure calls πₖ(1/2), which is undefined because 1/2∉S.",
      "context_sha256": "92767bb116fcc2b596c51e4928c244180f79c2bb8df89725c6aad2889615019e",
      "item_sha256": "35be1d3423c27b751662ee16bdb52f8505f971245add667374316cde10f7a71f",
      "at": "2026-10-16T17:48:03.575Z"
    },
    {
      "id": "alg-linear-congruential-generator-mod-power-of-two",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition asserts that a≡1 (mod 4) and odd c give a full-period generator, but the period property belongs in a separate proved result under the library’s algorithm convention; none is supplied or cited here.",
      "context_sha256": "c5bd1be7b71351a3c91f2c4d3b377d3ea1997faf0b6fbcdbde9be0e3775af3c8",
      "item_sha256": "f868108ca6d58cf203f1de324450916af88c91516e668ca117dff5a6f2e123ed",
      "at": "2026-10-16T17:55:07.997Z"
    },
    {
      "id": "lem-box-muller-product-density-and-radius-moment",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The change-of-variables step requires G to invert the Box–Muller map, but the cited log interface gives monotonicity and log laws only; it never supplies exp(log u)=u (or log(exp t)=t). Thus the claimed inverse and diffeomorphism are unsupported.",
      "context_sha256": "ccd4afdde11434a94d90aa404291911ef1a05a46dcaefa0de749dd076fdcf702",
      "item_sha256": "e5d1b3d46cbf46632d06ee7ae4e14e200c462bf937a3289f8bb215e3b1df826e",
      "at": "2026-10-16T17:48:31.653Z"
    },
    {
      "id": "alg-rational-bernoulli-rejection-from-fair-bits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims unbiased sampling, and the Remarks claim a capped success law and failure probability, but this item gives no corresponding proved result or citation. Algorithm conventions require correctness and other properties in separate proved results; here they are only pr",
      "context_sha256": "eee0471290e5b84b2fdac65e208cf9c4323d720237ffa7a64106752fe86122d4",
      "item_sha256": "3ada4eef6671def7145ab7e2cd4460b6522d94b7a1afb8485a7c6e6509ac44cc",
      "at": "2026-10-16T17:48:37.836Z"
    },
    {
      "id": "alg-finite-categorical-inverse-cdf",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claim covers every positive ideal input, including U=1, but the cited lemma defines its generalized inverse only for u∈(0,1). The endpoint needs separate justification or the claim must be narrowed.",
      "context_sha256": "a9ad3580cb58f51c507d924bdd6f82a164d55913b29b964b20b12d154dc35a3d",
      "item_sha256": "eb29742708766fd3cd2deac4034c67c731af1e24624801b9508436221ac1e966",
      "at": "2026-10-16T17:48:37.751Z"
    },
    {
      "id": "ex-box-muller-finite-midpoint-tail",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited midpoint theorem requires both Countable Choice and Dependent Choice, but the example records only Countable Choice in A1. Its use of that theorem to establish F1 is therefore missing a required hypothesis.",
      "context_sha256": "504c07aab85626b3d79baec61da3aa42efff1779e32898b2f261f35bda9a7ab9",
      "item_sha256": "2aaa4bba232b0b6fb55c6aa35518f14e37765ef472b945adff6198920825bfa7",
      "at": "2026-10-16T17:48:47.506Z"
    },
    {
      "id": "ex-inverse-cdf-near-zero-density",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its dependency: the interface gives a spatial-error bound when the density has a positive lower bound, but does not say that condition is generally required. The example supports a failure for this particular CDF, not the necessity claim attributed to the theorem.",
      "context_sha256": "61516986fe7135a2dbff9b10e92219781729ab19de272209eb180aec650f3703",
      "item_sha256": "32df7d0b81a065c31f3046587c0cfab5264ad85f0e8869fdadd969f496fe4eb1",
      "at": "2026-10-16T17:48:44.005Z"
    }
  ]
