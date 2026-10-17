# Step 5 adjudicate: initial, round 1, unit 89

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-89-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u89.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"89",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-one-dimensional-zero-boundary-poincare, 1:def-geometry-lift-and-tensor-discrepancy, 1:thm-first-strang-lemma-for-conforming-perturbed-galerkin, 1:thm-second-strang-lemma-for-nonconforming-galerkin, 2:ex-nonconforming-residual-breaks-galerkin-orthogonality.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-one-dimensional-zero-boundary-poincare",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 supplies the FTC only for the Darboux integral, but step 1.1 bounds that integral using F3/F5's Lebesgue integral. No cited fact identifies them, so the pointwise bound is not established.",
      "context_sha256": "037d38d522af56408644d46b1c6c7a4822c20a878b261da8aa8d3a794cafd2f5",
      "item_sha256": "a2bb32c261aeca28f46cec0850cfce713b6a5071362bb59b7f4f6c45829029e5",
      "at": "2026-10-17T01:54:27.500Z"
    },
    {
      "id": "def-geometry-lift-and-tensor-discrepancy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The lifted form need not be finite on the stated gradient-square-integrable class. For Ωₕ=(0,∞), Ω=ℝ, Φ(y)=log y, A=1, we get B(y)=y. The H¹ function v(y)=sin(y)/(1+y)^{3/4} has ∫|v′|²<∞ but ∫y|v′|²=∞, so aₕ^lift(v,v) is not a finite form value.",
      "context_sha256": "4ec55d0cb05e54d0f7bae0368927705d4c3db2dacc4cda4da1f0303ae7568ef4",
      "item_sha256": "87eb49772bd254c09c40400843c60c4a481695142c28ea95c704a546be0a9936",
      "at": "2026-10-17T01:54:28.006Z"
    },
    {
      "id": "thm-first-strang-lemma-for-conforming-perturbed-galerkin",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The hypotheses never require a_h to be sesquilinear (bilinear over R). Boundedness and diagonal coercivity alone do not license Lax–Milgram or guarantee a unique discrete solution, so step 1.2 and the existence claim fail.",
      "context_sha256": "e49aabd45c803b63d81d9063dcaf770333cff4f013d2172f0e994ad832862665",
      "item_sha256": "5cdc604768025351f08b7dfa7b2019b33ded0856f578310fdcccb5559ede43ac",
      "at": "2026-10-17T01:54:19.387Z"
    },
    {
      "id": "thm-second-strang-lemma-for-nonconforming-galerkin",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The stated definition of δ_h^nc omits the dependency’s convention that it is zero when V_h={0}. Since the theorem permits the zero space, its displayed supremum is empty and the statement is not well-defined in that case.",
      "context_sha256": "e34a3ed1178af7f776462c76ddb9a79ba96d342dabefafc19cee8053f06a1851",
      "item_sha256": "ebe7d79544c9234ab9f0777356fb53807735aa941bdf12cb8e603c3522660ba2",
      "at": "2026-10-17T01:54:12.134Z"
    },
    {
      "id": "ex-nonconforming-residual-breaks-galerkin-orthogonality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "U_{ω_h} is assigned on both closed cells: at x=1/2 its left/right values are s_L/2 and −s_R/2, generally unequal (for φ_L: 1 and 0). Thus it is not a function as defined, so F_h and the residual are undefined without an endpoint or broken-integral convention.",
      "context_sha256": "32fe62994e0f703150f20ce0a9cc6d4db24d6bcf79c4e05b9496b0bf07a894e8",
      "item_sha256": "5204322fe58b7b106cffa8dc3dfeea622f7d5f1abda3ce9022099a4af1c113c2",
      "at": "2026-10-17T01:54:57.950Z"
    }
  ]
