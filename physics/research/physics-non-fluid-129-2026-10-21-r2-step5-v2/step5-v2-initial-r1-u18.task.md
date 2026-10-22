# Step 5 adjudicate: initial, round 1, unit 18

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-batch-18-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"initial",round:1,unit:"18",input_sha256:"eaf0a68d231b0a7d0d042df337974eaab597dfd3432daa3ad0aaeebd32fe188c",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-emg-fx-spherical-orbit-geometry, 1:lem-emg-fx-spherical-maxwell-reduction, 2:def-emg-fx-spherical-quotient.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-emg-fx-spherical-orbit-geometry",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The SO(3) action is transitive on each S² fibre, so π_U gives the global orbit quotient M/SO(3)≅U. This contradicts the closing claim that the definition asserts no global quotient.",
      "context_sha256": "89d2808baba4c5de768fe918c015bd105bdcc600ff028b2f3ad7567b858e57fe",
      "item_sha256": "b537e3d057f3fab0b5609238621dd580ad8a3eb972a491b90eabb6cbb28c76ff",
      "at": "2026-10-22T03:37:43.189Z"
    },
    {
      "id": "lem-emg-fx-spherical-maxwell-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item is classified as mathematics but uses def-emg-xs-geometric-electrovac as a mathematical premise (F2). That dependency defines the electrovac/Maxwell physical model; a physical item cannot supply a mathematical proof dependency.",
      "context_sha256": "3d0edd8c609a310f46773dcd6875757f4ef7995be04dac8bebf4d15cd96d3cb3",
      "item_sha256": "3d259f2b4576e253835f49aab0203687bd37bde3570720ab6d8a2b07dc21935a",
      "at": "2026-10-22T03:37:19.074Z"
    },
    {
      "id": "def-emg-fx-spherical-quotient",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Maxwell reduction is restated with F = (q_e/r²)ε₂ + q_mω_S², but ε₂ and ω_S² are forms on different factors, not on M. The supplied lemma requires π_U*ε₂ and π_S*ω_S²; without those pullbacks the equation is ill-typed.",
      "context_sha256": "3740340d73b41e70ba338f9b95bad61609a836a8914b5c3f68100645f145a5a9",
      "item_sha256": "11b68de58a4d3d09bcb082a2066da591941323d78061bb24462fa2d1fecdf42a",
      "at": "2026-10-22T03:37:07.698Z"
    }
  ]
