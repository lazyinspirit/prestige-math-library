# Step 5 adjudicate: initial, round 1, unit 68

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-68-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u68.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"68",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 7:def-gr-curvature-tensor-and-derived-tensors, 8:def-gr-jacobi-field-and-conjugate-instant, 11:thm-gr-curvature-algebraic-symmetries, 13:ex-gr-curvature-in-a-point-normal-chart, 13:ex-gr-curvature-of-a-product-with-a-round-sphere, 14:thm-gr-conjugacy-and-local-timelike-maximum, 14:ex-gr-jacobi-fields-in-flat-space.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-curvature-tensor-and-derived-tensors",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) misstates its cited theorem: the algebraic-symmetries result assumes these objects as defined and proves pointwise identities; it does not establish tensoriality or chart independence. Those follow from curvature tensoriality and metric contractions.",
      "context_sha256": "c2c0897296959387c958c02a6523c223dfe6ad99613b2f587244b37b1b8c8ccd",
      "item_sha256": "c4561c4af5575fe32bc094e19baab27ec7acf7266cd59ebbfda6b27d8a0ce149",
      "at": "2026-10-12T20:21:12.455Z"
    },
    {
      "id": "def-gr-jacobi-field-and-conjugate-instant",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) allows any open interval J₀, but defines the variation field along F(0,s). For J₀=(1,2), F(0,s) is undefined. Require 0∈J₀ and define the field as ∂ᵣF(0,s).",
      "context_sha256": "73d6c7da699ba850cfc0f1c3f1efeca9d3d7709fb1557a757f5e3705491a7384",
      "item_sha256": "a38648d974592c4a6a15e166cac1081a537e44523bcab36888090c63fcaca73c",
      "at": "2026-10-12T20:21:18.091Z"
    },
    {
      "id": "thm-gr-curvature-algebraic-symmetries",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 wrongly treats the point-normal second-derivative expression as tensor components. It is chart-dependent, so [L2] does not transport the normal-chart calculations to arbitrary charts; the required tensoriality argument is missing.",
      "context_sha256": "410308204bc5e69444760797efc1ac4ad4b10579c493b388b847b0c431722999",
      "item_sha256": "cb7cfcdb715d1af00945c4e30b8478ebefa1f512bd704fc88e87549e82b92084",
      "at": "2026-10-12T20:21:43.117Z"
    },
    {
      "id": "ex-gr-curvature-in-a-point-normal-chart",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L5] is false as stated: along a general curve, ∇ₛγ′ has components ẍᵃ+Γᵃ_bc ẋᵇẋᶜ, not Γᵃ₀₀. The cited local dependency is inaccurately restated.",
      "context_sha256": "0ea4262e35fdeba3651339353fcb31843a5b3bff20bf5fa5b4322db43b22b740",
      "item_sha256": "ee93d18832c80bb917539555e6c121e955e1f9f4fe5c5405f2c84ccfcbc5475b",
      "at": "2026-10-12T20:22:17.402Z"
    },
    {
      "id": "ex-gr-curvature-of-a-product-with-a-round-sphere",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final remark misidentifies the equator Jacobi field’s curvature term: there T=∂₂ and J=sin(s)∂₁, so R(T,J)T=−sin(s)∂₁ on the equator, whereas R(∂₁,∂₂)∂₁=−∂₂. The cited component is not that term.",
      "context_sha256": "10d96a53470f5e28c223655b0e4e36fa82fd98c15e6957a66423c0a04dd2de97",
      "item_sha256": "b69617ce8d29a96daee37c748219278d1628ebb9e5a4333d14ff63ca576fa672",
      "at": "2026-10-12T20:23:18.609Z"
    },
    {
      "id": "thm-gr-conjugacy-and-local-timelike-maximum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L8 claims that a nonnegative continuous function with zero integral vanishes, but the cited monotonicity interface assigns that continuity result to a separate theorem, absent from deps. Step 6.1 needs it to establish the equality case.",
      "context_sha256": "55bbfc7c3d7618d42ec37750df5adf9cfa00a22560e14ccd90f1096ed7574ff5",
      "item_sha256": "d35c355a606c60377ff6334ab2bbb03ad50eee2a6a484cace6b7891375285a3b",
      "at": "2026-10-12T20:22:27.080Z"
    },
    {
      "id": "ex-gr-jacobi-fields-in-flat-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Claim 3 reverses the initial-value isomorphism: its image is the space of initial data in T_pM⊕T_pM, not the space of Jacobi fields. The fields are its domain and correspond bijectively to that data.",
      "context_sha256": "15905ee25fbece69cfbc62c12acffe23a0b2c3182483c461b4c67cf58df39d47",
      "item_sha256": "05556c28818c7474bc2ebc9e60385b8f8d999e1ef71f8cb5409825608e5e544e",
      "at": "2026-10-12T20:22:00.731Z"
    }
  ]
