# Step 5 adjudicate: initial, round 1, unit 15

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-15-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u15.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"15",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-periodic-vector-sobolev-space-and-leray-projection, 2:lem-fourier-tail-diagonal-compact-convergence, 4:lem-cm-strong-solution-smoothness-bootstrap, 8:thm-fluid-uniqueness-and-continuous-dependence, 9:rem-local-versus-known-open-global-fluid-scope.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-periodic-vector-sobolev-space-and-leray-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final remark attributes the torus Hodge decomposition to thm-fourier-basis-and-parseval-on-the-n-torus, but its supplied interface states only Fourier basis and Parseval results; it does not state a Hodge decomposition.",
      "context_sha256": "83db815c999ed4e63936d306161b3811480e915dd49423d1e8d38b23601ba224",
      "item_sha256": "555e30e375580bbb8b907f25798f625e36a17b4a78703175a586fb346bdffb12",
      "at": "2026-10-12T19:34:11.220Z"
    },
    {
      "id": "lem-fourier-tail-diagonal-compact-convergence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the vector-valued Fourier block: with M_K frequencies and coefficients in C^3, it is C^{3M_K} ≅ R^{6M_K}, not C^{M_K} ≅ R^{2M_K}. This is an inaccurate dependency restatement.",
      "context_sha256": "7e2734a7a9d6bd22307510d23215d29f56616c3fb406dbbf2305d5456f4a20a1",
      "item_sha256": "fe35434bb66f71d2d3433ab931dbcb3fc9c1f1a78e727e66859a2442559d3fa2",
      "at": "2026-10-12T19:34:55.780Z"
    },
    {
      "id": "lem-cm-strong-solution-smoothness-bootstrap",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claim includes r=0, but the equation’s right-hand side gives u_t; it yields ∂_t^r u only after r−1 differentiations. The proof likewise defines Φ_j via j−1 differentiations, leaving Φ_0 undefined, so the advertised derivative identity is ill-formed.",
      "context_sha256": "f0a6e7a14b0f2990bfc88eb619fa7b8b1f0eba1934d477950a8b10586955b67e",
      "item_sha256": "37dc5cc368dbb5fdf6dc808739848be16a4430470a5422870875972b24a0d532",
      "at": "2026-10-12T19:35:13.918Z"
    },
    {
      "id": "thm-fluid-uniqueness-and-continuous-dependence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The “In particular” claim puts the solution map on the full H^s ball, including nonsmooth or non-divergence-free data. The cited existence result supplies only smooth divergence-free data, and no extension to that larger domain is proved.",
      "context_sha256": "b57b7536e74352123c23052a476fe3b9dd6bd53f11afe5f69670f64dd1f33fec",
      "item_sha256": "f129f86022c0232582c2b55081e37abe47fcfbe6f5ed74343de1f8c06dac4ee2",
      "at": "2026-10-12T19:36:47.541Z"
    },
    {
      "id": "rem-local-versus-known-open-global-fluid-scope",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The scope restatement omits the shared AC_ω hypothesis required by both cited theorems, making its account of their assumptions inaccurate.",
      "context_sha256": "f743bd8434358a7c007641f3325c9b63a0fa5d082ebdc506e996b8c64a5ab251",
      "item_sha256": "49f6756b4633fd1a16ef7a108a17e4e4a6492c3926421bce8b05670ecd907216",
      "at": "2026-10-12T19:35:38.347Z"
    }
  ]
