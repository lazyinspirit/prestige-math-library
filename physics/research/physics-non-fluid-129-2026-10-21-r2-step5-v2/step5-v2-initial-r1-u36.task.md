# Step 5 adjudicate: initial, round 1, unit 36

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-batch-36-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u36.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"initial",round:1,unit:"36",input_sha256:"eaf0a68d231b0a7d0d042df337974eaab597dfd3432daa3ad0aaeebd32fe188c",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-gr-fx-scalar-dominant-energy, 2:lem-gr-fx-schwarzschild-gaussian-beam-concentration, 5:ex-gr-fx08-1.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-gr-fx-scalar-dominant-energy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited causal-classification interface defines causal character but not future direction or a time cone. So F4's same-cone claim, and step 1.2's essential α≥0, lack support from the supplied dependencies.",
      "context_sha256": "52646ad5f97265ffdafd94dd93148e95aa1f3faf5200db3fed46a72a67c528a2",
      "item_sha256": "6bacb9b909f558cf123fc920f8a52edb45c65aeed404a1a645ffd2dd1482bdee",
      "at": "2026-10-22T03:42:14.725Z"
    },
    {
      "id": "lem-gr-fx-schwarzschild-gaussian-beam-concentration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 reuses the model’s fixed c (the speed-of-light constant) as a freely chosen length offset in x(r)=r+s log(r/s−1)−c. Thus x(r₀)=0 is not justified, invalidating the later expansion at x=0.",
      "context_sha256": "47de59c4b95117dc49fb03fb3e8a5e35717e91b19cb1aa0260b9917a18ce8427",
      "item_sha256": "4586f12d298bafb9ab45db026458d3070fcafd0fcb28dfd83dce8e2eec9f2e14",
      "at": "2026-10-22T03:43:40.896Z"
    },
    {
      "id": "ex-gr-fx08-1",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal dependency defect: steps 2.1 and 3.1 rely on lem-gr-fx-kerr-horizon-modal-flux, a physical flux law, to justify an item classified as mathematics. A physical item cannot justify a mathematical item.",
      "context_sha256": "f02b66d9abd3fd9d968a3f65faf90ca0a09f10e53167893c3143c8a94a036752",
      "item_sha256": "a360cc6b5d07405719459869f7a3e8699c3d5e17001f7fcf850c13407395d416",
      "at": "2026-10-22T03:42:31.243Z"
    }
  ]
