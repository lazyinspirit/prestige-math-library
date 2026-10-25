# Step 5 adjudicate: initial, round 1, unit 8

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-batch-8-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"advanced-qft-supersymmetry-build-2026-10-23",phase:"initial",round:1,unit:"8",input_sha256:"79ce228292c28cf4dc516ab9bc72619009c0b56046675966598cb75a0933c758",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run advanced-qft-supersymmetry-build-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-qftx-proper-closed-subgroup-has-annihilating-character, 1:lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent, 3:def-qftx-character-localization, 6:ex-qftx-borel-localization-free-circle-orbit, 6:ex-qftx-borel-localization-rotation-on-projective-line.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qftx-proper-closed-subgroup-has-annihilating-character",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its dependency: the supplied theorem gives a smooth quotient manifold, not a Lie-group structure, and G/H need not be a group for arbitrary closed H. Although H is normal here, the proof must establish smooth quotient operations before using exp_Q.",
      "context_sha256": "9848fb7260ab66ca696e3c746eda183a6b651a91b5e3bf2c988107289de22a5f",
      "item_sha256": "e30157ee75b518d56fd8ae2e0ee6c923b25e746ea206219616fa2f9d8289f1ad",
      "at": "2026-10-24T20:00:13.891Z"
    },
    {
      "id": "lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: Step 1.1 selects a finite subcover via F1, then says F4 makes that cover’s nerve homotopy equivalent to F. F4 supplies a nerve model for an existentially chosen cover; it does not license the equivalence for this independently selected cover.",
      "context_sha256": "08fedc03f363f0de29341983853df8870dfbcbb646f7c2f60afa1e646d0d711d",
      "item_sha256": "0c056359277f6bfb40948752fce3b34d60a998aad32f8694fc43786a82202c00",
      "at": "2026-10-24T20:00:41.841Z"
    },
    {
      "id": "def-qftx-character-localization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 relies on naturality of c₁ under coefficient change to derive the real character formula, but F3 attributes that property to a supplier whose interface states only tensor and dual formulas. The real formula is therefore unsupported by the cited dependency.",
      "context_sha256": "7b90be88a4c2820118ebe27b23f0164c0ab056de5689c09be7b65b1a8e1a847c",
      "item_sha256": "6ee2e5bda7c37627dc9eb6317570206ab3a4c31c212cce327cab0397a2745a39",
      "at": "2026-10-24T20:00:47.367Z"
    },
    {
      "id": "ex-qftx-borel-localization-free-circle-orbit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 misstates the supplied character-localization interface: it defines the construction for both k=Q and k=R without a readiness condition. The claim that the R interface is conditional is unsupported and conflicts with that dependency.",
      "context_sha256": "b38c0f1bbd645a7bc4c170774dcefd302ddb268099f518ce23819b86c51f9281",
      "item_sha256": "a4ae108ea2429c38d18f8b61741840cf8c3432558beac44ea48321dc261a15af",
      "at": "2026-10-24T20:00:44.569Z"
    },
    {
      "id": "ex-qftx-borel-localization-rotation-on-projective-line",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the cited Borel localization theorem assumes AC, but the example omits AC from its assumptions; F3 also restates the theorem without that hypothesis, so the isomorphism is not licensed as written.",
      "context_sha256": "44256d80da22957ad7e402021e03ac5db01fc1122f8a7f2156b14011396eaad9",
      "item_sha256": "a73ea49c9056d631e5c766940a76e5c0795b77262f93db0077f10a046f03709c",
      "at": "2026-10-24T20:00:49.386Z"
    }
  ]
