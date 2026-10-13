# Step 5 adjudicate: repeat, round 1, unit 22

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-22-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"22",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 9:def-cm06-holonomic-constraint-model, 9:def-cm06-nonholonomic-model, 10:ex-cm06-rolling-disk-model-comparison, 11:rem-cm06-dalembert-vakonomic-distinction, 13:ex-cm06-pendulum-tension-and-reaction-power.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm06-holonomic-constraint-model",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "In (d), x_1 denotes an R^3 particle position, so G=(x_1-t)^2 is undefined and G=x_1 is not a scalar rank-1 constraint. Even interpreting x_1 as a scalar coordinate, x_1-t subtracts length and time without a declared velocity scale.",
      "context_sha256": "49e84ec0fa2b2e7f71ad49f58ff00f5545780798334b0b272a0f4c410bf47720",
      "item_sha256": "b25a1bffed4a2703e0f82246d0d57f11fb369c3691683d3c4b2a3dad3adf2a3e",
      "at": "2026-10-13T09:24:10.736Z"
    },
    {
      "id": "def-cm06-nonholonomic-model",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (e) contradicts the supplied cex-cm-dalembert-and-vakonomic-evolutions-differ interface: it claims no d'Alembert motion through the stated initial data is vakonomic, while the dependency states every such motion is vakonomic.",
      "context_sha256": "460c4f828889a20ee9d5fecb0824d05c4048f35c4ab9ed87bbf161a9b0b3cd91",
      "item_sha256": "9966095c8c1689a197d7a17c5ded0a0b7d2be45fdf5794d0156c8c09240bba6b",
      "at": "2026-10-13T09:23:07.963Z"
    },
    {
      "id": "ex-cm06-rolling-disk-model-comparison",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] inaccurately omits consistent initial position from the supplier’s equivalence. For f=0, q(t)=(1,0) solves the stated first-order system with permitted velocity, but G(q)=1, so it is not an ideal-constraint motion. The supplier requires G(t0,q0)=0.",
      "context_sha256": "7a89228d32195e113435fc4683c2df9b9528daf779342ebd0a28b5e901c83bc1",
      "item_sha256": "458e0c7afcd9eb5d6d8f69102f514e4d6ff8353d825018ccc9d6bc450a4a1c62",
      "at": "2026-10-13T09:27:47.593Z"
    },
    {
      "id": "rem-cm06-dalembert-vakonomic-distinction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The remark claims the exhibited d'Alembert motion is not vakonomic, but the supplied interface of cex-cm-dalembert-and-vakonomic-evolutions-differ states every d'Alembert motion with those initial data is vakonomic. This directly contradicts its cited dependency.",
      "context_sha256": "4d65793561d2a58418694b85bcc821b08c6942bf553e6ff2bdfe0d84526263dc",
      "item_sha256": "b22be16e10fc2a765f428ed411fd6f9c554ff234f440c9363723626c9cbe1372",
      "at": "2026-10-13T09:37:14.156Z"
    },
    {
      "id": "ex-cm06-pendulum-tension-and-reaction-power",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 infers an opposite force on the pivot, but the one-particle model determines only the bead's reaction R. A fixed circular wire may transmit its load through other supports; sole support at the pivot and the required transmission law are not specified.",
      "context_sha256": "29ccbe4ad4dd6f1c0cd400d784eb83eff9bad09190218a46297eb63a804719ba",
      "item_sha256": "38812a57181b869e3d459f0a2cd637451b36e05c6493c8c07b9d54cfed227e9a",
      "at": "2026-10-13T09:28:15.465Z"
    }
  ]
