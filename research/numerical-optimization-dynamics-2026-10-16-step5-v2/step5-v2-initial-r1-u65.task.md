# Step 5 adjudicate: initial, round 1, unit 65

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-65-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u65.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"65",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-implicit-residual-and-algebraic-error-units, 1:def-backward-euler-step-equation, 1:def-implicit-runge-kutta-stage-equations, 2:lem-small-step-implicit-rk-branch-and-residual-error, 3:prop-two-stage-sdirk-order-two-and-l-stability, 3:ex-newton-budget-exhaustion-with-a-unique-backward-euler-root, 4:ex-stiff-scalar-decay-and-trapezoid-ringing.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-implicit-residual-and-algebraic-error-units",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The opening rule assigns every implicit residual G(z) the units of z without requiring a normalized update equation. For G(z)=z²−a, with a in units of z², the residual has units of z²; normalization is needed before calling it an update residual.",
      "context_sha256": "9efc8b9796a97cafeb5091b9433d1b5f3861b54000db3a5204063bb6b1cbb448",
      "item_sha256": "67a1938491cf9466a67d2cc4e739cf8f3033f91f11d3db7f79dd00ada5e7ee5e",
      "at": "2026-10-17T01:45:58.469Z"
    },
    {
      "id": "def-backward-euler-step-equation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a step map, but the endpoint equation may have multiple roots. The definition therefore gives a relation, not a map.",
      "context_sha256": "cc09db694a513fa34c4d670aa4ac99d072a04a4b461355655e77ca5660be360d",
      "item_sha256": "57bdaf428dbd417d7a79e754631b5d2fbfc6df023377126d46a2d40e2b383471",
      "at": "2026-10-17T01:45:57.092Z"
    },
    {
      "id": "def-implicit-runge-kutta-stage-equations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For d=s=1, A=b=1, c=0 and f(t,x)=x², with y=0 the stage equation has Y=0 and Y=1/h, producing updates 0 and 1/h. Thus Ψ_h(t,y) is not single-valued without a branch selection rule.",
      "context_sha256": "58efdc035781917917dce040dced2e540fd79f6e19bddd8166bc0aec6e9c0718",
      "item_sha256": "b2a411e52c02e20256462fc518d8934102c25e9576c8dabe839a765b589b7f6d",
      "at": "2026-10-17T01:45:58.946Z"
    },
    {
      "id": "lem-small-step-implicit-rk-branch-and-residual-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 misstates [F5]: it lists nonnegativity among the metric axioms, but the supplied definition explicitly omits it. The proof derives nonnegativity correctly; remove the misattribution.",
      "context_sha256": "e6416bc706c2d449ab42f0666d6f1a02aab72b051eee41c61b7798d8c5f36f16",
      "item_sha256": "c35698ff8a9cee4351d0ca5d753541ac0f3325e1943aa0307b2c0ff71f2c9135",
      "at": "2026-10-17T01:46:06.252Z"
    },
    {
      "id": "prop-two-stage-sdirk-order-two-and-l-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims order two, which ordinarily means exact order two, but the proof establishes only order at least two. It never rules out order three or higher, so the title overstates what the proof shows.",
      "context_sha256": "3574b3e6a91673cff734613c3fb9bd050741fc5133d688aa77e209e1b0ca0af7",
      "item_sha256": "e6249982fa92457890ead327efad58e8e3a5d238e413e0d825d1c15ed681236f",
      "at": "2026-10-17T01:46:15.050Z"
    },
    {
      "id": "ex-newton-budget-exhaustion-with-a-unique-backward-euler-root",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the cited theorem: dissipativity alone does not ensure existence; continuity is also required. A discontinuous nonincreasing scalar field can make H(x)=x-hf(x) jump over input values. The given cubic is continuous, but the dependency restatement is false.",
      "context_sha256": "de3370c6f021d9838763384009a3a54f02a7136873dc275b6f267c37d79fa30b",
      "item_sha256": "d2cabfc6c56c2d4fd71e5feeb4602a4bfd22b4316f1a5a2447cf9f4a7fcbed01",
      "at": "2026-10-17T01:46:03.071Z"
    },
    {
      "id": "ex-stiff-scalar-decay-and-trapezoid-ringing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With the allowed initial value y_0=0, every trapezoidal iterate is 0, so the unqualified claim that successive values alternate sign is false. Require y_0≠0 or state only that the multiplier is negative.",
      "context_sha256": "b0664a1544d89f45d9de9f185c6b0728a4be44007facac2ed1587744141e81b3",
      "item_sha256": "445e89b0d9f39c1d15b604dd74da2355ba2bb1e31458e32e2dabd758e3641716",
      "at": "2026-10-17T01:46:03.165Z"
    }
  ]
