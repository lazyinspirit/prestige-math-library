# Step 5 adjudicate: initial, round 1, unit 33

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-33-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u33.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"33",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-implicit-q-uniqueness-for-unreduced-hessenberg, 2:ex-real-conjugate-pair-schur-block, 4:alg-finite-budget-francis-schur-reduction, 4:lem-complex-scaled-householder-step-termination-and-status.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-implicit-q-uniqueness-for-unreduced-hessenberg",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises exact determination, but the statement proves uniqueness only up to column phases. For example, multiplying a valid Q on the right by diag(1,e^{iθ}) preserves its first column and the unreduced Hessenberg property, while changing Q.",
      "context_sha256": "38b5511baf50b730545607ba759e5f71bde91e3ab2ba580a8baabf002b33f8be",
      "item_sha256": "f9d6dc061324ebbf13702cfd1f90ec727ad8ddf268514362970b03afcd81efbe",
      "at": "2026-10-16T17:59:02.748Z"
    },
    {
      "id": "ex-real-conjugate-pair-schur-block",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the interface: each 2×2 block must be real with negative characteristic-polynomial discriminant, and T must be block upper triangular with A=QTQᵀ. As written, F1 does not license the Schur-pair conclusion.",
      "context_sha256": "77586d3cf03f02792f43b3df8107ed011d9c1bb25b7a35693106274e91ff6b51",
      "item_sha256": "39f3e81608f1c509a5320585c63f219bc0dee3afe0abc4e03ac059563fdab145",
      "at": "2026-10-16T17:59:23.674Z"
    },
    {
      "id": "alg-finite-budget-francis-schur-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1 places the full Hessenberg-pattern check inside the k-loop. After the first similarity, only column 1 is cleared; for n≥4 the trailing block can still have H_{4,2}≠0, so valid inputs prematurely return bulge-chase-invariant-failure.",
      "context_sha256": "869bb623b7e2adfca853fa10beff83a9b7856e9985c05f2563e0323d070242aa",
      "item_sha256": "71c6c775cf6395e86e9d9c5d3e3f78d79f1b199a03bae6eac33ce9bad6428dca",
      "at": "2026-10-16T18:00:16.753Z"
    },
    {
      "id": "lem-complex-scaled-householder-step-termination-and-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: it says the wrapper terminates with a unitary representative, but admitted calls can terminate with breakdown or range-failure returns, which the statement does not guarantee have one.",
      "context_sha256": "3b31adb1e0b65fcf2cf94e0a6b968de231338c8e8e352938c334dbaaf6298355",
      "item_sha256": "4ac96c8c1abcd2ddaded98a8452d92f174a4c89013b73437729089a1ad626f9a",
      "at": "2026-10-16T18:05:58.713Z"
    }
  ]
