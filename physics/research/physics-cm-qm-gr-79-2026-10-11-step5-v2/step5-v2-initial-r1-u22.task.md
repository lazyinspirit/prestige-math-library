# Step 5 adjudicate: initial, round 1, unit 22

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-22-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"22",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 7:def-cm06-moving-frame, 9:def-cm06-holonomic-constraint-model, 9:def-cm06-nonholonomic-model, 10:pthm-cm06-inertial-forces, 10:ex-cm06-rolling-disk-model-comparison, 11:rem-cm06-dalembert-vakonomic-distinction, 11:ex-cm06-rotating-chart-inertial-terms.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm06-moving-frame",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (f) says an inertial-forces theorem “of this page” proves the exact vanishing criterion, but the supplied item contains no such theorem and lists no dependency establishing it. Clause (d) instead points to the next item.",
      "context_sha256": "5a67b9378e0075253dc938f1c8d1b49c207d694f994088b07fff65305389b01f",
      "item_sha256": "15a32123e07dec5f7368112b756d3019ba231aaf4fc026aa2dbac6dbd46f532c",
      "at": "2026-10-12T19:42:44.051Z"
    },
    {
      "id": "def-cm06-holonomic-constraint-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal regularity gap: G is only C², but the cited regular-level-set theorem requires a smooth (C∞) map and the supplied submanifold definition is smooth; a regular C² fibre need not be a smooth embedded submanifold.",
      "context_sha256": "1983e426daf459296dd9b0079bf0fb699656724766436c3788eb8f823f4b55c3",
      "item_sha256": "a5da2dea07e88b2bd71b397a5a57124a95c2a96011ac0c05e247b17f2579df48",
      "at": "2026-10-12T19:42:18.337Z"
    },
    {
      "id": "def-cm06-nonholonomic-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (e) says the cited counterexample proves the unique d'Alembert motion is not vakonomic. Its supplied interface says every such d'Alembert motion is vakonomic, so the dependency is restated contradictorily.",
      "context_sha256": "3586e0c11312d276aad690b5378d0af4227d6ffca6ec0d63f0e4b7cab5c7bfd6",
      "item_sha256": "a9a560ce619034622f2dcdefd3e0084bbb0f03b72c77244c69e42a8e2fdf2c85",
      "at": "2026-10-12T19:41:37.906Z"
    },
    {
      "id": "pthm-cm06-inertial-forces",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Proof 1.1 says [L1, L2] make τ depend on the label’s mass. τ depends on chart data and (y, ẏ); mass enters only through Fᵢᶦⁿ = mᵢτ. This is an inaccurate dependency restatement.",
      "context_sha256": "f2500bbb5af2a9552c10f341bf0cb1844eb0e5db0d91e2643837353e13366a11",
      "item_sha256": "e47df0f44e834524e494b21daf4a6c6ae84e8a792f2e518f063f95cc533eb290",
      "at": "2026-10-12T19:42:10.247Z"
    },
    {
      "id": "ex-cm06-rolling-disk-model-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates the cited result: x′−aθ′=0 gives x−aθ=c, not necessarily 0. The velocity law matches M1’s fixed constraint G=0 only with an initial level condition; step 1.1 conflates these.",
      "context_sha256": "8dcc6583b59e1b2f3ac4e3a46b52775d1ff2799779e082bad5a2122abea6de5e",
      "item_sha256": "4322ef62b05dd8782a10ca15e835835185fbd719b526a28c674a0ea572b4fb0d",
      "at": "2026-10-12T19:42:40.348Z"
    },
    {
      "id": "rem-cm06-dalembert-vakonomic-distinction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark says the cited counterexample proves the d'Alembert motion is not vakonomic, but the supplied counterexample interface states that every such d'Alembert motion is vakonomic. This direct dependency-interface contradiction is fatal.",
      "context_sha256": "cac97a76083dc5933d2a47dc61127719d7ab994095aac1b6b5548c74d4fe8fd5",
      "item_sha256": "ebf69e5bf8f25ccefe5b1e456565ca1d8ba4fb3a0a239df650a4bf45d9c84c55",
      "at": "2026-10-12T19:41:35.369Z"
    },
    {
      "id": "ex-cm06-rotating-chart-inertial-terms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause 2 calls ÿ the inertial-chart acceleration, but y is the moving-chart coordinate; the inertial-chart acceleration is ẍ=0. The computed −3e₁−e₂ is the moving-chart acceleration, so the example misidentifies its central quantity.",
      "context_sha256": "cabac027d50e85145af190345a398022d2d276bb6d6978b92e2eb73fba5af53c",
      "item_sha256": "ac98f1ec7a7ef8e10a9f9b4caa6718e1c2b9d4bc2ba351c76f539c4fc8b5108c",
      "at": "2026-10-12T19:42:22.366Z"
    }
  ]
