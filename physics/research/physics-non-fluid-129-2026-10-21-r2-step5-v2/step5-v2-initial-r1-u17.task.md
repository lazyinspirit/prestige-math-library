# Step 5 adjudicate: initial, round 1, unit 17

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-batch-17-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u17.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"initial",round:1,unit:"17",input_sha256:"eaf0a68d231b0a7d0d042df337974eaab597dfd3432daa3ad0aaeebd32fe188c",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-emg-fx-dirichlet-energy-and-trace, 0:lem-emg-fx-newtonian-holder-potential, 1:lem-emg-fx-flat-dirichlet-holder-estimate, 3:lem-emg-fx-holder-cubic-map, 5:ex-emg-fx-small-constant-field-ball.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-emg-fx-dirichlet-energy-and-trace",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims this result is for a charged constraint problem, but the statement and proof establish only a generic Poincaré inequality and a zero-boundary characterization; no charged constraint is specified or derived.",
      "context_sha256": "47c40ce98d937118435d109a58506eac497a5da94a808f86b8495b7515338b6e",
      "item_sha256": "a5d08d01fbe3f6af4fc7cfef83dbb28a18dbcf5c8b4e3096430b74b5cc8a5032",
      "at": "2026-10-22T03:37:15.106Z"
    },
    {
      "id": "lem-emg-fx-newtonian-holder-potential",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F5] overstates the supplied bump lemma: it guarantees a smooth cutoff, not a radial one. Step 2.1 relies on this unlicensed restatement when choosing its cutoff.",
      "context_sha256": "cc2e1d85029f55e1bc72377fed9c7024a5d6854277e6b479f6dd16c219477c71",
      "item_sha256": "50cd600841a6479d4957b8828b1b96fc153cd7adb367f1f57dd165a149033bb6",
      "at": "2026-10-22T03:37:08.662Z"
    },
    {
      "id": "lem-emg-fx-flat-dirichlet-holder-estimate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates the supplied bump interface: it guarantees a smooth cutoff, not a radial one. Steps 5–6 rely on radial cutoff/kernel choices, and no radialization argument is given; the dependency does not license this inference.",
      "context_sha256": "e673a1a17b09c8f479e97d071aefd712e21f713ca89891ed8c8384a21e7069e9",
      "item_sha256": "869f408c2319b18f973c6cb1659492b3b5eaee766615b3083bb1e625c1ca92bf",
      "at": "2026-10-22T03:38:00.288Z"
    },
    {
      "id": "lem-emg-fx-holder-cubic-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 omits the dependency’s explicit Countable Choice hypothesis, then step 3.1 uses Y’s Banachness to invoke F3. The item neither assumes Countable Choice nor proves completeness, so the stated Banach-space C¹ conclusion is unsupported.",
      "context_sha256": "c76e75151b6ebaa115083e3fcce6ad91751506f2165ab6dadc787afce30a98c8",
      "item_sha256": "874481900fa02b3a278135cca79754af8ff4b49aefe9cc8377b330a0be0526f0",
      "at": "2026-10-22T03:37:01.213Z"
    },
    {
      "id": "ex-emg-fx-small-constant-field-ball",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F9 drops the suppliers’ required bounded W^{k,2}-extension-domain hypothesis for the embeddings and algebra estimate. No cited fact establishes that the ball meets it, so the composition estimates and bootstrap in 2.2 are not licensed by the stated dependencies.",
      "context_sha256": "69ee8fd14bdd313c76e2306ccfa4fb2820d7d544b4eea5c9221a0e72581bbfbb",
      "item_sha256": "7ee99dcf0157fcbf4858720416ec0826e985afa4064c5bd768eab0c4a8137e2d",
      "at": "2026-10-22T03:39:33.314Z"
    }
  ]
