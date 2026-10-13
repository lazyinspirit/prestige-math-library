# Step 5 adjudicate: initial, round 1, unit 57

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-57-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u57.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"57",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 9:def-nrqm-identical-particles-framework-species-sectors-and-preparations, 10:def-nrqm-identical-particles-framework-orbital-occupation-model, 12:rem-nrqm-identical-particles-scope-and-empirical-status.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-identical-particles-framework-species-sectors-and-preparations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark says single-factor position and momentum do not preserve either sector, but clause (c) gives both sectors as H when n=1. Those operators preserve H, so the claim needs an n≥2 qualification.",
      "context_sha256": "ca8993d2b612cf0533d94320face2805f4b6ca3f50e81f923a2327effd205e60",
      "item_sha256": "4478322b65c423bbe1b741d12b66ef895397805767ffe288d3d571cbed6faaf2",
      "at": "2026-10-12T20:13:54.769Z"
    },
    {
      "id": "def-nrqm-identical-particles-framework-orbital-occupation-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "P2 and the cited outcome-law definition explicitly assume ACω and AC; this item declares only ACω while defining μ via E_{N_j^σ} under that reading. It omits an inherited hypothesis required by its stated observable-law construction.",
      "context_sha256": "786e85eeb02ef867ee2a080c8c0aa61070e721c9b0e507b564f81e26ace72835",
      "item_sha256": "af8b7abf82717bae0e4b2c7e73e02a540eec79ff1faab5b494c1ae360aeeb94d",
      "at": "2026-10-12T20:14:25.241Z"
    },
    {
      "id": "rem-nrqm-identical-particles-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It says every species has a declared charge parameter, but the sector interface assigns q only for a charged species. This misstates the adopted species-sector data.",
      "context_sha256": "e0b3e407e96147b4673aefc89773bb8909d85820db610ea0a44d3756e9ad60a4",
      "item_sha256": "e027c5f47c90a042cd92ef3e6e3a816e6bb96c4dcd3b918b8600ff949ba59ef4",
      "at": "2026-10-12T20:14:17.839Z"
    }
  ]
