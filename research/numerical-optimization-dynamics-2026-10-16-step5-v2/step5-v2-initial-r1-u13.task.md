# Step 5 adjudicate: initial, round 1, unit 13

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-13-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u13.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"13",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-finite-straight-line-computational-program, 1:alg-forward-mode-automatic-differentiation, 1:lem-finite-straight-line-program-defines-c1-map, 2:alg-forward-over-reverse-hessian-vector-product, 3:thm-finite-iteration-sensitivity-bound-and-residual-limitation, 3:thm-forward-over-reverse-computes-hessian-vector-product, 3:ex-implicit-linear-solve-adjoint, 4:rem-real-arithmetic-graph-versus-rounded-execution.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-finite-straight-line-computational-program",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Parent references are ill-typed: E_j is defined only for operation nodes, yet U_j uses E_{p_{j,k}} when a parent is an input. Inputs also have no node indices, so the requirement that every parent index be less than j is undefined for them.",
      "context_sha256": "9191a8c7ec77237fd13646de8545554f51b6e8c05dce618b716a60733dc50dc0",
      "item_sha256": "11838f3863203becffc86bb1946ac064e447c1add1acada6f46e96c231c4a456",
      "at": "2026-10-16T17:49:17.319Z"
    },
    {
      "id": "alg-forward-mode-automatic-differentiation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "No result proves the returned tangent equals Df(x)v. The algorithm convention requires correctness in a separate proved lemma; the title’s “automatic differentiation” claim is unsupported.",
      "context_sha256": "efabf96f2019aea5a13a38c696093fbd9569af238a8827be620fe6c4641381cc",
      "item_sha256": "63efcc67f298df88ed760da02d83b502a7e936cd6e26baae31d6c51b52fbdae7",
      "at": "2026-10-16T17:49:39.217Z"
    },
    {
      "id": "lem-finite-straight-line-program-defines-c1-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims C1 on the full admissible domain, which can include specified branch-boundary values. The proof only establishes C1 on strict branches and explicitly makes no derivative assertion at boundaries.",
      "context_sha256": "2bef3373f2ed889723a1b1e3fcda51b33e468b80c1d6df4d4c50cf19d5d30a99",
      "item_sha256": "ae330c8b27853c6759082a08cfcc3eba1a6259b2da242597f3cfafa738449fde",
      "at": "2026-10-16T17:49:15.909Z"
    },
    {
      "id": "alg-forward-over-reverse-hessian-vector-product",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The graph interface also returns NONDIFFERENTIABLE for ambiguous branch selection, which can occur away from a branch boundary (for example, overlapping open branches). This algorithm handles boundaries only, leaving that case without a defined result.",
      "context_sha256": "f3b0230d067a911ce656d453f5c211eea59bf860eb48fbae546fcd5de9c7020b",
      "item_sha256": "a8caa53e702e885ca3b86ad35d2bd9fc4376cad513a75c03b0c083c079959769",
      "at": "2026-10-16T17:49:32.935Z"
    },
    {
      "id": "thm-finite-iteration-sensitivity-bound-and-residual-limitation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: finite-iteration sensitivities need not differ from the implicit sensitivity. The proved bound permits zero error, for example when z₀(θ₀)=z* and e₀=s*. The example establishes only that they can differ.",
      "context_sha256": "8817a7d6923fa3ad9cb48e1a6b81276426e96b2450db2bb6c3f03a413fdd4495",
      "item_sha256": "a3856aa15de760505403370b6ea6a2174759118148798d532284a7aae37f85a7",
      "at": "2026-10-16T17:49:34.287Z"
    },
    {
      "id": "thm-forward-over-reverse-computes-hessian-vector-product",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates its cited interface: the forward-mode theorem guarantees the derivative of the scalar output, not every internal node. Step 1.1 relies on this stronger claim for parent directions.",
      "context_sha256": "b66f160b31b2025494441cebbf0592abb45f0880157c453242ab33fe43a5a2ed",
      "item_sha256": "365ea1b346d90c7b7d559c2e130536f08278243e932308ffd035cfe65b6fe805",
      "at": "2026-10-16T17:50:17.948Z"
    },
    {
      "id": "ex-implicit-linear-solve-adjoint",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 5 overclaims: F2's zero fixed-map discrepancy does not certify exact rounded cotangents; its error bound still has t=gamma_2||I||_F>0. The supplied interface does not establish that representable operations round exactly, so the computed -1 is unproved.",
      "context_sha256": "4468bb91fad394faa09f7eec6ed798cc0c087400e049cd676170f5835ba4b882",
      "item_sha256": "384fa2d0f57312d3cc20bab5620b74d383c8614b31d8482f6e8f55fe38c1e73f",
      "at": "2026-10-16T17:50:49.948Z"
    },
    {
      "id": "rem-real-arithmetic-graph-versus-rounded-execution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final assertion is unsupported: the item and dependencies never specify the implicit example’s output or cotangent. A(0)=I, B=I, and x̂=(2,1) establish zero solve residuals, but do not determine an adjoint derivative of −1 or exactness of its rounded outer product.",
      "context_sha256": "29bc674fbcfe8eff055b35982ac4e864d3328abcf4bdf212b637e204a7051821",
      "item_sha256": "cf524ec93c749d9e3fcceaa24aead793b10e636df01d360285c70505bb5dd871",
      "at": "2026-10-16T17:50:10.878Z"
    }
  ]
