# Step 5 adjudicate: initial, round 1, unit 16

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-16-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u16.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"16",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:alg-certified-hermitian-one-and-two-by-two-ldl-kernel, 1:alg-threshold-partial-pivot-sparse-lu, 2:alg-symmetric-indefinite-block-ldl-star, 2:def-elimination-tree-and-column-reach, 3:thm-block-ldl-star-residual-with-actual-growth, 4:thm-sparse-cholesky-structural-pattern-without-cancellation, 7:ex-two-dimensional-poisson-nested-dissection-cost.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-certified-hermitian-one-and-two-by-two-ldl-kernel",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The failure test treats Vc⁻ as a lower bound on |BD⁻¹|, but cancellation invalidates it. For D=[[1,-1/2],[-1/2,1]], B=[1,-1], θ=1, BD⁻¹=[2/3,-2/3], while Vc⁻ approaches (2,2) as u→0, falsely returning pivot-failure.",
      "context_sha256": "d41649ad2f045ac40d1642e21feb18c521507e4de293bcc95d3f64a5e1fd61f7",
      "item_sha256": "1952d1eda67a25a2dd207723806c02d55b735462fd2c3102e98a6b85401f2e46",
      "at": "2026-10-16T17:52:08.805Z"
    },
    {
      "id": "alg-threshold-partial-pivot-sparse-lu",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: A may be any real matrix (for example, A=[√2]), but initialization stores PAPᵀ in the finite binary format. The cited model gives no input conversion rule, so the procedure is undefined for permitted inputs whose entries are not representable.",
      "context_sha256": "bacbdf2b7b1cde687965c0470166ad1e2ca5da1e33b4b7d48f8ced22369f2fdf",
      "item_sha256": "fe6ccdf15deb085eb0bfbc5eb172931cfec8cfdf2cd466e452a5f73f0c7d1231",
      "at": "2026-10-16T17:52:04.012Z"
    },
    {
      "id": "alg-symmetric-indefinite-block-ldl-star",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition asserts that the exact branch returns factors satisfying PAP*=LD_blkL*, but algorithm correctness must be established in a separate proved theorem or lemma; none is supplied for this item.",
      "context_sha256": "0342b65b3cf608891541f17474f9b044ab779d4602b619a850375d02550c3e0c",
      "item_sha256": "9c006575362cbcddea1578da09c3aacf567debc5371ca73053b78a3b6f1bc107",
      "at": "2026-10-16T17:52:13.532Z"
    },
    {
      "id": "def-elimination-tree-and-column-reach",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited graph definition defines how to use a chosen elimination ordering; it supplies no particular ordering. Without one, the filled graphs, parent map, and thus the column sets and reach are not determined.",
      "context_sha256": "8aef981edbd5496e0e0f1459093b162aa2cccdbb3731397d430e840ad381c3cb",
      "item_sha256": "7ec754c718c1583fdf16049a911080bf9a1620092645c2894f4291087d6feac3",
      "at": "2026-10-16T17:51:35.166Z"
    },
    {
      "id": "thm-block-ldl-star-residual-with-actual-growth",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The stored-factor identity is ill-typed for r>1: the local lemma's F_r is only (k_r+t_r)×(k_r+t_r), while Ŵ_r is n×n. Define F_r as zero-padded into full permuted coordinates before writing Ŵ_r F_r Ŵ_r*.",
      "context_sha256": "80befc02110f224c3dc1c946c5afc1e878ca1adb0eece1c4ee1c255bdd15b326",
      "item_sha256": "f1912d27f770ebca9612f050fdcc696d696ec0af4f3dfe55777f419207bcf549",
      "at": "2026-10-16T17:52:15.423Z"
    },
    {
      "id": "thm-sparse-cholesky-structural-pattern-without-cancellation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3's induction is circular for omitted positions: F1 sets unfilled l_ij=0, but the proof has not shown R_ij=0 before claiming each column equals R. Step 4 needs that claim to identify ν_ij with S^j_ij, so F2 cannot repair the gap as cited.",
      "context_sha256": "b37eba940ca44759508b3beb7d47c16a719ecf4db4f7f81f0f1ff76d2ce0f491",
      "item_sha256": "9757ef93f3d9748a5f08b5445cfe9d69be17248cfd402f6797f609a73eca6001",
      "at": "2026-10-16T17:52:07.345Z"
    },
    {
      "id": "ex-two-dimensional-poisson-nested-dissection-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 bounds work and symbolic storage for exact scalar multifrontal Cholesky. The item restates this as a cost of the ordering without naming that factorization, then claims the bound; that broader inference is not licensed.",
      "context_sha256": "20e2ef87fa373fb95ab8d442364e5bcf991cb2e461d99095f142972c34518d5b",
      "item_sha256": "14c75c91207a386d06c9b5dad71549ffc47ff4e730bd8d6d0060919dadad06c9",
      "at": "2026-10-16T17:52:10.508Z"
    }
  ]
