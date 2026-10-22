# Step 5 adjudicate: initial, round 1, unit 97

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-batch-97-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u97.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"initial",round:1,unit:"97",input_sha256:"eaf0a68d231b0a7d0d042df337974eaab597dfd3432daa3ad0aaeebd32fe188c",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:lem-csm-frontier-fk-cylinder-pressure-comparison, 3:lem-csm-frontier-fk-mixed-reflection-gluing, 8:thm-csm-frontier-fk-square-critical-point.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-csm-frontier-fk-cylinder-pressure-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 adds an order-preserving, convergent common-uniform heat-bath coupling absent from the supplied lemma interface, which gives static stochastic order and one-edge conditionals. Step 4.1 relies on that coupling to infer equality of every cylinder from edge-marginal equality, lea",
      "context_sha256": "005babd613e3cdf0799be5154e5c3ff054032faa16c00bbb74cb0485df9d86c4",
      "item_sha256": "e62050e011621bf8b853ef582e5a38204f6668b0d43064d1151a354f66487b93",
      "at": "2026-10-22T04:03:54.407Z"
    },
    {
      "id": "lem-csm-frontier-fk-mixed-reflection-gluing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 is inaccurately restated: conditioning outside F retains the original boundary partition ξ as well as exterior-open connections. The supplied interface says this explicitly; the item describes only exterior connectivity.",
      "context_sha256": "66f9c72b7bbe4602924bd6e6df2df02927040ff1106d6bced117c668ecaa8a7e",
      "item_sha256": "b883cabd70ee3f963f73ca625cae8155faf3953e07d4a34ad0b047adb8c36a10",
      "at": "2026-10-22T04:05:03.409Z"
    },
    {
      "id": "thm-csm-frontier-fk-square-critical-point",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3 claims the supplier proves stochastic domination of every cylinder-limit state by the wired state. Its interface states no such domination, so that comparison is unlicensed.",
      "context_sha256": "180723390cdc5b1dbd4efe897b1c79170a3d1ec90d7d6a71e9abbc8a0011cab8",
      "item_sha256": "dd3635ecaf731dbdcff198facbc683fb3d271b03f6eb7b4f9988b4356c354b88",
      "at": "2026-10-22T04:03:55.140Z"
    }
  ]
