# Step 5 adjudicate: initial, round 1, unit 34

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-34-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u34.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"34",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 12:def-cm18-calibration, 12:rem-cm18-galilean-regime, 13:rem-cm18-model-test, 13:rem-cm18-primary-report-contract, 14:ex-cm18-pendulum-calibration-proposal, 15:rem-cm18-em-bridge, 19:rem-cm18-numerical-error.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm18-calibration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause 2 permits each reference input to be fixed or random independently, potentially on separate spaces. The dependency permits either bounds for all inputs or one joint Borel deviation vector on a common probability space, so this claimed physical instance includes unsupported",
      "context_sha256": "820ac2e80a3c93d6fc2bbce1298f6e1a704af4820290fc43c1ef182ee2d40e5f",
      "item_sha256": "69379239d3559d0985efa1fa2855103c356c13c4489048028af9a04b50d09b0a",
      "at": "2026-10-12T19:56:32.341Z"
    },
    {
      "id": "rem-cm18-galilean-regime",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The observable-model interface allows a constant readout (e.g. dimensionless R≡0), whose prediction map remains identical after a frame change. Thus the categorical claim that the same protocol has a different prediction map is false.",
      "context_sha256": "5218e3ae770c37b374a26e7c81581cff004dca13f8a8851a6e1cc9b1f4185aa4",
      "item_sha256": "b28e83edd7d505c5bf1180ef0b4d2a9f073e42bd9ba7b19a46d3d4acfd3fd7f8",
      "at": "2026-10-12T19:56:58.773Z"
    },
    {
      "id": "rem-cm18-model-test",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It says a confidence set’s level is the infimum of its coverage. The cited interface defines level 1−α whenever the infimum is at least 1−α; the bound need not equal the infimum (e.g. 0.97 coverage has level 0.95).",
      "context_sha256": "af58661ba6382ddbc2c026e794b0780d483373f8adf5c5c3263368165254ad3a",
      "item_sha256": "5de92c79ed4cc98202ee54a0bca43590f2c2accdb71c1cfb6a60ed0154e833b4",
      "at": "2026-10-12T19:56:03.536Z"
    },
    {
      "id": "rem-cm18-primary-report-contract",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: §5 pairs statistical/systematic uncertainty with Type A repeated-data and Type B bounds/reference evaluations. [JCGM 100:2008 §0.7](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf) says A/B do not simply correspond to random/systematic uncertainty, so the",
      "context_sha256": "35001493f30ca2ab175e1443d27ad64b94ef28d92e50f87e170242c1fe3e7c81",
      "item_sha256": "8339f60cf3b03a4d641b407f29f4d043a71bae7fd47fb346af931658dd5af82f",
      "at": "2026-10-12T19:57:25.480Z"
    },
    {
      "id": "ex-cm18-pendulum-calibration-proposal",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [L4] overstates cor-cm-linearization-error-bounds. Its mean remainder claim omits the supplier’s finite second-moment hypothesis, and its variance bound needs a finite fourth moment. The later bounded X meets these conditions, but the dependency restatement is inaccurate.",
      "context_sha256": "f071d47ee14dd49a9290898d9a6d2c0776c5b15c7d7cb2ac40c1917afc946310",
      "item_sha256": "de0d4f5f42362f8d89b5fc1ded84ed70ffd91a5a0cd247537133277fae5055df",
      "at": "2026-10-12T19:57:10.339Z"
    },
    {
      "id": "rem-cm18-em-bridge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Item 2 overstates the required interface: a coupling may take prescribed E and B maps directly as data on a stated domain, without modeling their sources or boundary/radiation conditions. Those are needed when deriving the fields from a field model, not when applying a declared f",
      "context_sha256": "a5397b40d5f9178e52206e680106e8b8979dac6443a02326d830f13cdb40a31a",
      "item_sha256": "ffe17906247bcc4d9a199ee0371bf25917238f6560803769c095b40c357981b8",
      "at": "2026-10-12T19:56:57.994Z"
    },
    {
      "id": "rem-cm18-numerical-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The combined trajectory/readout claim mixes the finite-time Euclidean norm bound with the arbitrary metric d used for residuals and F. A common set does not make these distances comparable, so the triangle bound is unjustified; require one shared metric or a comparison bound.",
      "context_sha256": "ae40f03236895d165ec9f648a1b538b56eaa767537b6ef40bafac90be0685a37",
      "item_sha256": "01fde43471bb7757d21b193b0fd42c83fc71438c2649ee8888ab1991ac275ce0",
      "at": "2026-10-12T19:56:35.655Z"
    }
  ]
