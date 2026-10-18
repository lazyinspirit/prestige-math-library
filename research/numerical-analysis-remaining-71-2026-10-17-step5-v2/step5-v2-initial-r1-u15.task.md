# Step 5 adjudicate: initial, round 1, unit 15

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-15-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u15.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"15",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-linear-cardinal-interpolant-on-an-edge, 1:def-lexicographic-lift-tie-break, 3:def-barycentric-point-location-interpolation-and-voronoi-query, 3:lem-lifted-flip-potential-decreases, 5:alg-incremental-planar-delaunay-edge-flips, 6:thm-incremental-planar-delaunay-correctness-and-termination, 7:thm-randomized-history-dag-expected-location-cost, 7:thm-three-dimensional-delaunay-output-size-quadratic.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-linear-cardinal-interpolant-on-an-edge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims a degree-one polynomial, but the stated interpolant is only guaranteed to have degree at most one. If y₀=y₁, it is constant, so no exact degree-one polynomial interpolates the data. Change the title to “degree-at-most-one.”",
      "context_sha256": "aa07218fae0320990b9a9b67eaf9b500c9f78684194b02eea01e7548d80bab85",
      "item_sha256": "f82cc8eff4ec3229aa0a0d2b57b96e44a30188d418c3e357385e530cecd34895",
      "at": "2026-10-18T03:11:34.162Z"
    },
    {
      "id": "def-lexicographic-lift-tie-break",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For nonzero weights, the item lifts by ||p_i||²−w_i, but the determinant dependency defines its raw lifted predicate using only ||p_i||². The claimed consistency with that predicate is false for weighted sites.",
      "context_sha256": "d93d6c2e05a36c2f3d76b53f869b07c09606baa824cb56ddf54ec58ef548ba43",
      "item_sha256": "31cff9f27914e8775757324fc3139f893e3e0825cf703375f6d7373af00a237e",
      "at": "2026-10-18T03:11:53.117Z"
    },
    {
      "id": "def-barycentric-point-location-interpolation-and-voronoi-query",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition permits P=∅, a finite site set, but then no site minimizes distance; it still requires a minimizer to be returned. Require P≠∅ or define an empty-set result.",
      "context_sha256": "421b8c35609b06825f113a25a8bc5ccb0528bd385790a4dc44af8982d0ac0f52",
      "item_sha256": "a4d02b4bac12ab8c266248b8e9c400045e20ab23a896c24d8dbc50499ef4b069",
      "at": "2026-10-18T03:11:52.643Z"
    },
    {
      "id": "lem-lifted-flip-potential-decreases",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4 reverses the sign from [F2]: with δ the query height minus the plane height, [F2] gives O·P = −O²δ. Thus the orientation-normalized determinant has the opposite sign to δ, contrary to the stated relation.",
      "context_sha256": "d890fe5f380ba8b8833210d712b4cda85372fdee477f819b75790930ec248e6f",
      "item_sha256": "a0ce4202e0f85d79f1ce73877ab98aaaaa649e3aaa7a0396ec0f4a4458e90c8f",
      "at": "2026-10-18T03:12:29.856Z"
    },
    {
      "id": "alg-incremental-planar-delaunay-edge-flips",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The input allows an empty finite list, but its affine dimension is not 0, 1, or 2 and no empty-input result is specified, so the algorithm has no branch or return for an admissible input.",
      "context_sha256": "11190aeed9dcb569db57ff5a1052845c12f10fc9ee80d2967b6307876aeaaf34",
      "item_sha256": "553f4530864bf0635ab7f9c678fbcaadb939f89f6dd1b06529c7b1986663c974",
      "at": "2026-10-18T03:13:04.242Z"
    },
    {
      "id": "thm-incremental-planar-delaunay-correctness-and-termination",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "After any nonfinal insertion, an uninserted input site lies inside a current triangle. Strict convexity of ||x||² puts its lift below that triangle’s plane, so the triangle is not a lower simplex of the fixed full-universe lift, contrary to the Statement.",
      "context_sha256": "7d701310087a0a244c6f7404cbec24cdabe399d42810d1fdffb782fdf6e74efb",
      "item_sha256": "e9728bbb07bddae1b84119a410ec03fba3f8e67990a2a4e379ebb6cfafc40993",
      "at": "2026-10-18T03:12:12.777Z"
    },
    {
      "id": "thm-randomized-history-dag-expected-location-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement permits arbitrary planar coordinates, but [F2] and [F4] are supplied only for dyadic sites; the local F4 restatement drops that restriction. Step 2.2 therefore uses the lifted-plane/circumdisk equivalence beyond the cited interfaces.",
      "context_sha256": "709203c64c151b7607f9124a7634e7f139d6108c962080c5002c7c36680631e2",
      "item_sha256": "ace69c3b38f5b659e79f5af2eaa5309df49c8a5cf535af676236058016201469",
      "at": "2026-10-18T03:13:25.939Z"
    },
    {
      "id": "thm-three-dimensional-delaunay-output-size-quadratic",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal defect: [F4] is overstated. Its interface guarantees coverage and weak empty power spheres, but not that returned tetrahedra are exactly formal lower simplices. Step 1.1 needs that correspondence to inject outputs into facets of the specialized hull.",
      "context_sha256": "55fcb12dec86d87e5f5939a578351d5a3aa2673d8f478073d8ab2fe46ba75b21",
      "item_sha256": "992ff9b0fe401dc6a0df252798b26375d985e0ee36018272f506ed8e24242cb7",
      "at": "2026-10-18T03:12:09.175Z"
    }
  ]
