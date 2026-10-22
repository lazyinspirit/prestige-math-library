# Step 5 adjudicate: initial, round 1, unit 40

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-batch-40-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u40.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"initial",round:1,unit:"40",input_sha256:"eaf0a68d231b0a7d0d042df337974eaab597dfd3432daa3ad0aaeebd32fe188c",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-gr-fx-differentiation-under-finite-chain-integral, 4:ex-gr-fx12-1, 4:ex-gr-fx12-2.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-gr-fx-differentiation-under-finite-chain-integral",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates the supplied simplex-integral interface: it defines the value as a Jordan integral but does not establish smooth-coefficient integrability. Steps 1.1–2.1 rely on that existence, so the proof has an unmet prerequisite.",
      "context_sha256": "12ed237c7fbc374619e4658513d8bce2739920c60ed5efc75dd69e52e8ee4d07",
      "item_sha256": "6fc388b007aef9056aad9ca60c32a0be23d873d2695ef9c5cdb8105ea9649000",
      "at": "2026-10-22T03:43:56.908Z"
    },
    {
      "id": "ex-gr-fx12-1",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The mathematics-domain item depends on and cites GR-FX framework items (`def-gr-fx-*`, `prop-gr-fx-*`), contrary to the rule that mathematical items cannot depend on physics.",
      "context_sha256": "04b074e287f7218bfd7d0451a999320bf18e97dcf5bc494df20af6d3a0f65a65",
      "item_sha256": "5334c74c49dde235cdc3b8aa609445437b63e128baf3617fdbc034b29740c5ac",
      "at": "2026-10-22T03:43:46.798Z"
    },
    {
      "id": "ex-gr-fx12-2",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item is marked domain mathematics but relies on GR physics dependencies F1–F4 for its current, closure, ambiguity, and reduction claims. Physical items cannot justify a mathematical item.",
      "context_sha256": "e5f4c01e7af88d0353acb1a05a46b2bfd4f583ed8f89eda9ae22efb8587ef315",
      "item_sha256": "0083dd5bb4e881ec378460c9707b6339a98aab2e5215684a159754338c1df642",
      "at": "2026-10-22T03:44:03.662Z"
    }
  ]
