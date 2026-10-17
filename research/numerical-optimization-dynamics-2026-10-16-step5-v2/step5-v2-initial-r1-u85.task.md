# Step 5 adjudicate: initial, round 1, unit 85

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-85-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u85.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"85",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:alg-sqp-second-order-correction, 2:def-sqp-l1-exact-penalty-merit, 2:lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature, 4:alg-sqp-merit-globalization-with-finite-budgets, 5:alg-sqp-finite-precision-kkt-qr-solve-and-residual-check, 5:thm-sqp-merit-globalization-finite-budget-status.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-sqp-second-order-correction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The minimum-norm argument is sound, but that correctness property is proved only in the algorithm item’s Proof section. The algorithm convention requires correctness and other properties in a separate proved lemma, theorem, proposition, or corollary.",
      "context_sha256": "21648779b10543458e5a13ad2494eee7dcfd05beaf0c2c10ee45e2b03ff92607",
      "item_sha256": "1be46ffcec2ce83b9c9e03767361b5cddc5505e6b1214ca3f7648678f498e0d6",
      "at": "2026-10-17T01:53:06.634Z"
    },
    {
      "id": "def-sqp-l1-exact-penalty-merit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises an exact penalty, but ρ is arbitrary: for min −x subject to x=0, ψρ(x)=−x+ρ|x| is below ψρ(0) for x>0 when 0<ρ<1, so it is not exact as stated.",
      "context_sha256": "4b17768c8069d75c865cdf218755c315877e195853934192acd4cab9da1f76e2",
      "item_sha256": "e1a630831a6e69b2c205aaf4286187b1b6441ebc7c9916e38321458014c6214c",
      "at": "2026-10-17T01:52:59.217Z"
    },
    {
      "id": "lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the dependency: its interface stacks all active inequality rows and does not say they are independent. The proof otherwise establishes the kernel argument.",
      "context_sha256": "d1dbf347ed36703aabd6a6df75c10994db4bc07d8c97c2b099d2496589fe26a3",
      "item_sha256": "1d3edfad6bb2cb2b137d1fbfcbda1a2c032cfd152daa2288d115b54c423eca0a",
      "at": "2026-10-17T01:52:25.346Z"
    },
    {
      "id": "alg-sqp-merit-globalization-with-finite-budgets",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The SOC dependency returns the corrected displacement p+w, but this algorithm treats the return as the correction w and tests x+p+w. That double-counts p; it should test the point formed by adding the returned displacement to x.",
      "context_sha256": "190fd6de4957237c4a49edd273afcf5f67610c4c22b956a0fbe4d0c4584ee52c",
      "item_sha256": "c6b3d3dadc62c7aade4c13e73157eb5bde3334dbed5a407ac143e123199332a2",
      "at": "2026-10-17T01:52:37.029Z"
    },
    {
      "id": "alg-sqp-finite-precision-kkt-qr-solve-and-residual-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof applies F2 from operation success alone, but F5 explicitly says it does not establish the distinct premise of the conditional QR theorem. That premise is unproved, so the QR perturbation bounds and the second residual bound are unsupported.",
      "context_sha256": "81441c150f46123e667f2d230f51ce243a23467f553cc6edcf4ddae6f6268c17",
      "item_sha256": "9ef84e82b012897025279b447a39f2f6446d1bee2480e0792498674da5a9abac",
      "at": "2026-10-17T01:53:10.234Z"
    },
    {
      "id": "thm-sqp-merit-globalization-finite-budget-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 claims F1 bounds the QP routine by 2^m subset tests, but F1 only bounds globalization attempts and trial tests; m is undefined. Thus the proof does not establish that the initial QP call terminates.",
      "context_sha256": "c67637368c928217d6f87e18b387da50fc9a65b10eb70c2b754bb5ff82bddd59",
      "item_sha256": "f5ed5e51233824fb84b5c6f275557faf0a475b3b5609d267584afb3807b6a07b",
      "at": "2026-10-17T01:52:53.970Z"
    }
  ]
