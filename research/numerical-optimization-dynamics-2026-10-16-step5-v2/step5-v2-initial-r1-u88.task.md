# Step 5 adjudicate: initial, round 1, unit 88

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-88-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u88.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"88",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:alg-anchored-irgnm-with-discrepancy-stopping, 1:alg-iteratively-regularized-gauss-newton-step, 1:thm-lsqr-residual-minimizes-on-krylov-subspace, 3:lem-anchored-irgnm-fixed-reference-error-and-residual, 3:ex-landweber-semiconvergence-on-a-compact-diagonal-operator.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-anchored-irgnm-with-discrepancy-stopping",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises finite discrepancy stopping, but the procedure can return budget-exhausted without ever meeting the discrepancy test; no hypothesis guarantees a crossing.",
      "context_sha256": "3d73c08f777a3023f09b11cf96991f035acbc42f1cff1bf86514716ceef024b8",
      "item_sha256": "8dbe97f38070100fc9b0ebc63f20e2e945f55af35a7ae887770d11a26ac963ed",
      "at": "2026-10-17T01:53:58.130Z"
    },
    {
      "id": "alg-iteratively-regularized-gauss-newton-step",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The non-stopping branch only assigns x_{k+1}; it never says to advance k and repeat or what to return then. The loop control and eventual output are unspecified.",
      "context_sha256": "e5d71fc01cef0137cda8bfe6f42d7dc48630a6ee5afed69dcdabd51d19b8febd",
      "item_sha256": "dfac2b30e739879c2912ad59dd22add88166ce7c8c1ed49594e3216bb88e133b",
      "at": "2026-10-17T01:53:58.499Z"
    },
    {
      "id": "thm-lsqr-residual-minimizes-on-krylov-subspace",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 circularly claims LSQR solves the projected least-squares problem, but the supplied algorithm gives only procedure instructions and says residual minimization is a separate theorem. Step 3.1 shows rotations preserve norms and a minimizer is unique, but not that the algorithm’s",
      "context_sha256": "84182a70f21eff7f5a125bf3e60a2e64a7e14597feecc707c3bdeddd1cc96c21",
      "item_sha256": "e653238d418bdefdb6b1ebb949d1f8e6c4c33eeb370ef7b4c6a43348cf3f784d",
      "at": "2026-10-17T01:54:22.261Z"
    },
    {
      "id": "lem-anchored-irgnm-fixed-reference-error-and-residual",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The update is cited from alg-anchored-irgnm-with-discrepancy-stopping, whose inputs require the initial point x0∈U. The Statement only gives x0−x†=S^νw, so step 1.2 applies the algorithm outside its supplied interface.",
      "context_sha256": "1f10bd6a399676e2382474093fcc35a488376e9f914696c35fa1976392d4577f",
      "item_sha256": "6648629a4e1fd740bc5d0d6f946faff91828a44c0878a721b61010807b458c91",
      "at": "2026-10-17T01:54:34.853Z"
    },
    {
      "id": "ex-landweber-semiconvergence-on-a-compact-diagonal-operator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 omits the supplied dependency’s boundedness hypothesis: finite rank alone does not imply compactness for operators between Hilbert spaces. The proof uses this overbroad restatement to declare each truncation compact.",
      "context_sha256": "ed3c39b385385ba0b907782e24b63d62707efe9719b6aef07abb273a2f9c14b5",
      "item_sha256": "3232935d0078b492ccf272ffa765b59ef9f8263c3d40ba387a6f3606bb3c09e4",
      "at": "2026-10-17T01:54:02.299Z"
    }
  ]
