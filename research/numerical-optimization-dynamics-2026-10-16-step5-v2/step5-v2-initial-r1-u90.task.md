# Step 5 adjudicate: initial, round 1, unit 90

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-90-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u90.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"90",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-chebyshev-polynomials-orthogonal-in-arcsine-weight, 2:def-legendre-weighted-sobolev-scale, 2:ex-analytic-and-nonsmooth-chebyshev-coefficient-decay, 4:def-chebyshev-gauss-lobatto-collocation-grid, 8:thm-gaussian-orthogonal-polynomial-galerkin-mass-matrix-exact.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-chebyshev-polynomials-orthogonal-in-arcsine-weight",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 3.1 and 4.1 use that cos maps [0,π] onto [-1,1] to turn h(x₀)≠0 into positive norm. The supplied dependencies establish endpoint values and continuity, but not this surjectivity; it needs the intermediate value theorem or an equivalent result.",
      "context_sha256": "cdc30547a785da5c2b0d1656de1bae27108b208513c76ec1bb3c2e1cb706f0c2",
      "item_sha256": "8eb16f2f65848280fea045895e7b5f2e44fd776984ce02c991e6db3b8c3db2dc",
      "at": "2026-10-17T01:54:58.105Z"
    },
    {
      "id": "def-legendre-weighted-sobolev-scale",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claim that the weights increase with n is false: at s=0, w_n=2/(2n+1), which strictly decreases. Monotonicity of the power factor does not imply monotonicity of the full weight.",
      "context_sha256": "828e66a4fbd5a00700f52919f114db8ef9b49484e645a6399d85a28d1bdd60ff",
      "item_sha256": "dada9169a95c1b446917f569df9d27a4120bc5fcc093a862d4d7f5378df289a9",
      "at": "2026-10-17T01:54:41.271Z"
    },
    {
      "id": "ex-analytic-and-nonsmooth-chebyshev-coefficient-decay",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 establishes only holomorphy. The library reserves “analytic” for a local power-series property; no such expansion or theorem is shown, so the title and statement’s analytic-data claim is unsupported.",
      "context_sha256": "fef4ad0cb06fb8b3e6679281382d24521899c4aa407e246bab4cf14b8a2b49cf",
      "item_sha256": "63869522de2b7719c9f18ba5878d051c41c5fbf3e6a7c718e38c1340aca8418a",
      "at": "2026-10-17T01:55:09.873Z"
    },
    {
      "id": "def-chebyshev-gauss-lobatto-collocation-grid",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The data U_j and function f are not specified as real-valued, but the cited cardinal-interpolation definition accepts only real data. Thus I_N^L U and I_N^L f are not well-typed as written.",
      "context_sha256": "21d68bfc6f6252fc848e17e8564d09ad5fdd0b07408cb22086db624a5d84df89",
      "item_sha256": "f871ad5c03393d51dc119de549735b806f20bb756f36be714f9789315d9d99d6",
      "at": "2026-10-17T01:54:29.836Z"
    },
    {
      "id": "thm-gaussian-orthogonal-polynomial-galerkin-mass-matrix-exact",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof invokes [F2] for a measure with only N+2 support points, but the supplied interface requires infinite relative support and a compact-interval Borel measure. Step 2 is therefore not licensed under the stated hypotheses.",
      "context_sha256": "d53a2086a24d4e8a9b47085a879fbabe5ccb9a73e9c1c7db7025624efc2795e9",
      "item_sha256": "0af5da02e20d3fb042d5ae9441246b41df2e27460957462d0991a21bb8bfd3e9",
      "at": "2026-10-17T01:54:52.900Z"
    }
  ]
