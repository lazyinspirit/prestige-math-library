# Step 5 adjudicate: initial, round 1, unit 86

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-86-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u86.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"86",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:thm-local-holonomic-constrained-hamiltonian-flow, 3:thm-rattle-exact-constraint-preservation-and-reversibility, 5:ex-nearly-dependent-constraints-amplify-rattle-residuals, 5:ex-rigid-bond-rattle-free-rotor.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-local-holonomic-constrained-hamiltonian-flow",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a unique local flow, but the proof establishes only pointwise local solutions. It does not construct a flow map on a neighborhood of initial states or establish its flow property.",
      "context_sha256": "15d955538aea99a6e2cf027f573a0e8ae28bb46ed12313c5d17ced1a85b5f352",
      "item_sha256": "d95ba6c997814d250f48eed774f5a2ecc804c7bdf6c80e15171cc708a85c9e3c",
      "at": "2026-10-17T01:53:14.651Z"
    },
    {
      "id": "thm-rattle-exact-constraint-preservation-and-reversibility",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reversibility is claimed whenever both steps remain in the regular chart, but the proof identifies the reverse solve only after shrinking to small |h| so the swapped multipliers lie in its IFT neighborhoods. Regularity of the endpoint alone does not ensure that branch selection.",
      "context_sha256": "53f10a47421b7e678611657ea83c291613547c4d33225b3389c5ca939068c411",
      "item_sha256": "2afd7bf6e89d3244cb79e7dd3f674c52c47046b03d3dc5a540f6ae4bee0c4830",
      "at": "2026-10-17T01:53:25.059Z"
    },
    {
      "id": "ex-nearly-dependent-constraints-amplify-rattle-residuals",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its dependency: the supplied theorem promises a residual-to-state constant uniform on each fixed compact chart, but does not say that the constant depends on ||A^{-1}||. That unsupported restatement connects the eigenvalue calculation to the RATTLE residual estimate",
      "context_sha256": "4bced39411b1311021a19d23894df32b198ba2fbd4984464d3e71ec78474d438",
      "item_sha256": "ebd8fdb3fdfe402d0e8b8acc1dea75db1438a8abc934859d0a506346df10461e",
      "at": "2026-10-17T01:53:24.198Z"
    },
    {
      "id": "ex-rigid-bond-rattle-free-rotor",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 inaccurately restates consistency: the cited definition also requires q∈Q_reg. The stated equalities alone do not ensure regularity.",
      "context_sha256": "208830c4f5ce7a74ce04cb938e11788f3cdd020712f2393b88844c30db2c05fd",
      "item_sha256": "4f168c9c8cd2192076347df0108459847886de3953a40ca702607894a52a98af",
      "at": "2026-10-17T01:53:18.106Z"
    }
  ]
