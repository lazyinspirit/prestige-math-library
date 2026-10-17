# Step 5 adjudicate: initial, round 1, unit 105

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-105-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u105.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"105",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-hybrid-mode-guard-reset-system, 1:lem-ode-flow-lipschitz-on-a-tube, 2:lem-reset-error-after-a-mistimed-hybrid-event, 2:thm-saltation-matrix-for-a-transverse-hybrid-reset, 10:thm-finite-hybrid-trajectory-error-under-separated-events, 11:thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted, 11:ex-two-events-between-endpoints-defeat-sign-screening.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-hybrid-mode-guard-reset-system",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The only declared mode domains are state-time sets D_m⊂R×R^d, but a reset is applied as a state vector. No state-space domain is defined, nor is it required that (τ,R_mn(τ,y(τ−)))∈D_n, so the reset’s type and admissibility are unclear.",
      "context_sha256": "4ece4cceffc66ab14e070e3c386bb2f945e927bedf22538384022ac54f008a43",
      "item_sha256": "788ec394e4991990bbda36ecebf1b0c762dd6ca51836f9b8921d3e1f4231c4e8",
      "at": "2026-10-17T02:00:01.700Z"
    },
    {
      "id": "lem-ode-flow-lipschitz-on-a-tube",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof applies [F2] on [a,T], but its interface requires at least two elements; the statement permits a=T. Handle that case directly or assume a<T before invoking [F2].",
      "context_sha256": "0b1a119fd28b0d45d7ab0f57632064f218b92db77c841d36faf82b4678ca0e24",
      "item_sha256": "1dcb49348ba783167dfe7f5754fce6bccc782b42074445e2c503354f62213fd3",
      "at": "2026-10-17T01:59:47.085Z"
    },
    {
      "id": "lem-reset-error-after-a-mistimed-hybrid-event",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title asserts a transverse event, but the statement assumes only an exact event time and gives no guard, crossing, or transversality hypothesis; the proof never establishes transversality.",
      "context_sha256": "585a3996d17066b9136426b94545d67d94dac1b33c288e3b402079433a524ff1",
      "item_sha256": "51948507d422760cf17188142867b813d070725f92a3a299d3179a22461a1925",
      "at": "2026-10-17T01:59:48.617Z"
    },
    {
      "id": "thm-saltation-matrix-for-a-transverse-hybrid-reset",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement uses d for both the state dimension and the scalar crossing derivative, then uses d as the denominator. These are different types and the symbol is not scoped; the hypothesis and formula are ill-typed. Rename the crossing derivative.",
      "context_sha256": "0b2d09e2e575fc9a4f5af017ceca8ecaa167dfe88d186e6e6e47970bdb4e905a",
      "item_sha256": "c02bc8bebd490e34ed287d05c8f84474a9354df4c3bb5dc4c514143332a8dc32",
      "at": "2026-10-17T02:00:03.275Z"
    },
    {
      "id": "thm-finite-hybrid-trajectory-error-under-separated-events",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 applies [F6], which requires the outgoing solutions through alignment to lie in a common convex tube. The theorem assumes only a common tube, so this application is unsupported under the stated hypotheses.",
      "context_sha256": "5bbbf83b86da983ae3bc7cb88828a8e322175ac8abf598a2e950e26727ce7fa8",
      "item_sha256": "4f36d89eed426cb407b6d781b5f8d5ce6b05eeace23450e5ce51e5a2686fab56",
      "at": "2026-10-17T02:00:15.281Z"
    },
    {
      "id": "thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises the locator certifies events or returns `inconclusive`, but proof step 1.5 says failure branches can return `domain-failure` or `budget-exhausted`. The title therefore asserts more than the proof establishes.",
      "context_sha256": "b4bca04799b11d9a4e4e2e8115447a30dbb400f982d8aa4c00aa2a906ad24390",
      "item_sha256": "2b3b2daf931df3c294fe8413641d9b44fb00253371891b79e62601c4b45469f6",
      "at": "2026-10-17T01:59:55.960Z"
    },
    {
      "id": "ex-two-events-between-endpoints-defeat-sign-screening",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 says complete root isolation and orientation classification justify event absence, but this example’s complete classification finds an enabled root at 2/3. The dependency licenses an absence report only when isolation finds no enabled root.",
      "context_sha256": "5353fe5428fec8cb35534bd301aca9e1b5a7cc86eb451fc8e4d6f5df3b0934dd",
      "item_sha256": "5802e9e1e681c74e65de33f808c20eedac0940b68a7feddd5ed3c19888a2ef47",
      "at": "2026-10-17T02:00:06.190Z"
    }
  ]
