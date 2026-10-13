# Step 5 adjudicate: initial, round 1, unit 49

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-49-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u49.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"49",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 9:def-nrqm-interference-two-path-preparation-and-detection-model, 10:def-nrqm-interference-recorded-detector-and-sampling-model, 10:pthm-nrqm-interference-coherent-and-mixture-detection-laws, 11:ex-nrqm-interference-ideal-flat-two-path-screen-distribution, 11:ex-nrqm-interference-uniform-phase-averaging, 13:rem-nrqm-interference-examples-scope-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-interference-two-path-preparation-and-detection-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (f) promises recorded-event and sampling models “on this page,” but none appears; the item explicitly says none is asserted and defines only ideal bin probabilities. This leaves its operational-scope statement internally contradictory.",
      "context_sha256": "760a30c7a743be13e87088db9baa19d8819c8a1819387457aede0aa474c11e11",
      "item_sha256": "b05711b0b13cbe58858eff5e173f6e808b79aae1d03f5ed913f6d8f84a438acb",
      "at": "2026-10-12T20:09:17.600Z"
    },
    {
      "id": "def-nrqm-interference-recorded-detector-and-sampling-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Take A={a}, w_a=1_B for a proper finite-measure B, and a normalized ψ supported in B. Then F₀=M_{1_{Bᶜ}}≠0, but for ρ=|ψ⟩⟨ψ|, ν(0)=0. Thus “otherwise the model loses events” overclaims: loss depends on the preparation.",
      "context_sha256": "e6432b6125c616fc487cf3d4dce15a7d1e57d63d8a2ce530805181f6cc69b3a1",
      "item_sha256": "8008736c038fcb68aa6f49166443e9e4ba41d6e43b3adb203ce3f88a7cc248c3",
      "at": "2026-10-12T20:10:02.715Z"
    },
    {
      "id": "pthm-nrqm-interference-coherent-and-mixture-detection-laws",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal error in (a): since c=Re Z for Z=∫⟨ψ₁,ψ₂⟩, the denominator must be N+2 Re(e⁻ⁱᵠZ). For ψ₂=iψ₁, ‖ψ₁‖=1 and φ=π/4, the stated formula gives 2, while the actual squared norm is 2−√2.",
      "context_sha256": "c48414a3040a7c046e87c21d1380fe9c68cfdf37a8e004c2efb4a9831db8c2ec",
      "item_sha256": "28f227064d029ff1245907fee73d333a3051b5babaa3323b194105e88a4134c9",
      "at": "2026-10-12T20:09:09.761Z"
    },
    {
      "id": "ex-nrqm-interference-ideal-flat-two-path-screen-distribution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The detection-law dependency explicitly assumes both countable choice and the Axiom of Choice. The item states only countable choice while invoking those laws, so its local dependency restatement omits a required hypothesis.",
      "context_sha256": "a541baee072f60885527ac696e60cefbef46e874fb4c955cdf53d42990db5c2a",
      "item_sha256": "314f56f12b1129ea1fc947b083c7cec49a768e63f3c9e1ecf1f014308bc405fe",
      "at": "2026-10-12T20:08:54.911Z"
    },
    {
      "id": "ex-nrqm-interference-uniform-phase-averaging",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited pages do not describe averaging over a random relative phase: Tong discusses which-path tagging, while Binney discusses coarse spatial averaging of fringes. Their source titles overstate support for this finite phase-ensemble example.",
      "context_sha256": "60b846760a7af64241b2f1c6fc65918d328dc7ca173f34af2c40e723cf65d567",
      "item_sha256": "a7bf878671fb218069c0d93de2bb04c53aa7072342fdce8df6750d88d19db755",
      "at": "2026-10-12T20:09:57.904Z"
    },
    {
      "id": "rem-nrqm-interference-examples-scope-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A Borel slab bin may be a singleton inside a bright region. It meets that region but has zero measure and therefore zero coherent probability, contradicting the unqualified claim. Require positive-measure overlap.",
      "context_sha256": "7410819892d5b0c87b044db2f6dbd4187b048ad4299f4e96d21d0dd024778833",
      "item_sha256": "c42122865011848d07a73401a4900b7062286273ea0e99179f5bb23a665cc74f",
      "at": "2026-10-12T20:09:38.644Z"
    }
  ]
