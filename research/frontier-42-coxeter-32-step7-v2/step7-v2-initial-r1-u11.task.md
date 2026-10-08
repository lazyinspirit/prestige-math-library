# Step 7 adjudicate: initial, round 1, unit 11

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/step7-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-42-coxeter-32",phase:"initial",round:1,unit:"11",input_sha256:"ce87a1bc88a8f056e771220d400256d1be4d20fe7e966bd5434d1ad410d4a79e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-42-coxeter-32 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:lem-cg-alexandrov-comparison-triangle-gluing, 10:lem-cg-local-geodesic-endpoint-stability, 10:ex-cg-intervals-and-metric-trees-are-cat-zero, 11:lem-cg-local-geodesic-continuation-and-path-space-covering.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-cg-alexandrov-comparison-triangle-gluing",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 asserts spherical comparison triangles exist for every length triple of perimeter <2π, omitting the dependency’s triangle inequalities. The triple (1,1,3) has perimeter 5<2π but cannot be triangle side lengths.",
      "context_sha256": "97994e686127d9b050d27afec6c80beb37731f70565703717209f4de14e4eae4",
      "item_sha256": "f9b4e2cfe218c529b29dfb5a71f0cb76cf8c58e867359b42a25d443cce7f030e",
      "at": "2026-10-08T00:56:46.384Z"
    },
    {
      "id": "lem-cg-local-geodesic-endpoint-stability",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1's P(A) includes a=b. In X=R, choose distinct u,v both within ε of c(a). No map on the singleton [a,a] can have endpoints u and v. Thus P(A₀) is false, and the induction lacks a valid base case.",
      "context_sha256": "55f01fb0889cf9ad6172acdb62a65069aa867a507fd3fc2b2a397dceb7c6f20b",
      "item_sha256": "fc34e3b5497d8e0943d58e3c18e8f342e43775a083a047c55929bf6a39aee2be",
      "at": "2026-10-08T00:56:43.680Z"
    },
    {
      "id": "ex-cg-intervals-and-metric-trees-are-cat-zero",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 falsely asserts that collinear vertices force a chosen triangle to be congruent to its comparison triangle. On a circle of circumference 4, vertices 0,1,2 have lengths 1,1,2, but choosing [0,2] through 3 makes the triangle the whole circle.",
      "context_sha256": "f8d575ec13609107c4d1db79675e576c121ce3c76a1a3e870d12e1ec5410b2eb",
      "item_sha256": "50af9bbb2ece8f19e32dcaa30d9d32bde868bb7799970163890d8a8c1d39ee68",
      "at": "2026-10-08T00:56:10.518Z"
    },
    {
      "id": "lem-cg-local-geodesic-continuation-and-path-space-covering",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.3 wrongly infers pair-convexity from F1. On the unit-circumference circle, constant c admits F1 radius ε=1/3; paths to ±3/10 have d_G=1/2 but endpoint distance 2/5. The claimed ε-ball isometry fails; a smaller CAT(0) radius is needed.",
      "context_sha256": "05d5314ef3886433d6cdcd65f1ee63fe87ec897680b3a5d88b6f8ea99d21626c",
      "item_sha256": "786e2be63b25ba284d1f7d579b72fefd356d58b563b1c96640b7c959eb46904f",
      "at": "2026-10-08T00:56:40.515Z"
    }
  ]
