# Step 5 adjudicate: initial, round 1, unit 22

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-22-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"22",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-certified-ivp-approximation-and-sensitivity-interface, 1:prop-multiple-shooting-residual-zero-iff-bvp-solution, 2:alg-midpoint-collocation-for-nonlinear-bvps.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-certified-ivp-approximation-and-sensitivity-interface",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition requires an approximate trajectory and uniform bound for every s∈U, yet permits evaluator failure with no bound. The paired shooting interface allows such failures, leaving the displayed supremum undefined at failed trials. Scope the bound to successful trials or r",
      "context_sha256": "32b32babd04c90a4381b83f1f173e136c08ae3bd56c61f6a4a227baf683ed07b",
      "item_sha256": "d02c608f67c17996a576720924ed720631119d2f695690c1a10550c8ebf12a04",
      "at": "2026-10-16T17:54:17.880Z"
    },
    {
      "id": "prop-multiple-shooting-residual-zero-iff-bvp-solution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3 replaces the stipulated segment starts with s_i=y(t_i), then invokes uniqueness there. Uniqueness was assumed only for the given starts, so an arbitrary BVP solution may have nonunique segment IVPs and no admissible residual tuple; the unqualified equivalence overclaims.",
      "context_sha256": "7866744572e7f6469becb2cf227d364ed989156c8024f7f1150ff0bed3950160",
      "item_sha256": "2022210038f653bd1bf0041435aaf23d902e929275d128eda275117150cdc361",
      "at": "2026-10-16T17:54:48.556Z"
    },
    {
      "id": "alg-midpoint-collocation-for-nonlinear-bvps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Norm mismatch: the residual interface defines ||G_h(Y)|| as the maximum block norm, while the Newton procedure tests the flattened Euclidean norm ||G_h(Y)||_2. The algorithm reuses τ without specifying this stricter test, so its stated root criterion does not match the procedure.",
      "context_sha256": "d4266db3595c52fa12b24145bd71b766770ab7a4b77a9ceba90a41a2375f29ad",
      "item_sha256": "d578d380e7ec8386ab89a39aaf77e65f56757038ec40eb6cb4718a42aa2dc21d",
      "at": "2026-10-16T17:54:15.119Z"
    }
  ]
