# Step 5 adjudicate: initial, round 1, unit 29

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-batch-29-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u29.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"initial",round:1,unit:"29",input_sha256:"eaf0a68d231b0a7d0d042df337974eaab597dfd3432daa3ad0aaeebd32fe188c",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-gr-fx-null-screen-geometry, 2:lem-gr-fx-null-screen-index-form, 3:lem-gr-fx-null-focal-boundary-exclusion, 4:ex-gr-fx01-2.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-fx-null-screen-geometry",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "U is only required to be open, so U=∅ is allowed. The empty map and pair then satisfy the conditions vacuously, with no generators or null hypersurface. Require U to be nonempty.",
      "context_sha256": "d01c5de88a9405c443c5ab8ff7d601c4aa778e2704b0cdba1f203fa524a3422d",
      "item_sha256": "aa73d8e4aa99afbc8f7195ba4a50b2682b42875f9b4f6d67c486d9bab3678334",
      "at": "2026-10-22T03:40:49.444Z"
    },
    {
      "id": "lem-gr-fx-null-screen-index-form",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 cites [[def-gr-fx-null-screen-geometry]], whose supplied interface scopes this geometry to a closed (compact, boundaryless) spacelike surface. The Statement assumes only an embedded surface without boundary, so the cited screen and χ facts are not licensed for every stated cas",
      "context_sha256": "477f227f247cfec7f3f19754377f5efebba3a0836d228d274f36b68c6661466a",
      "item_sha256": "e809e349067ac7f92401443b5390847194e1eabad8a04ae3568f5de10146fda8",
      "at": "2026-10-22T03:40:03.426Z"
    },
    {
      "id": "lem-gr-fx-null-focal-boundary-exclusion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates the supplied index-form interface: it guarantees a screen variational field, not an actual orthogonal variation field equal to a chosen lift. Steps 4.1–5.1 need that stronger claim to make the speed’s first s-derivative vanish and define Q/s² smoothly.",
      "context_sha256": "17f195904941b19398e52b9983ce16231372ee580e09b8895432ce1b6566dd10",
      "item_sha256": "24a4548dedd539d61101a49a42dd3a8cf44666caaa801874056b286106989c03",
      "at": "2026-10-22T03:40:29.501Z"
    },
    {
      "id": "ex-gr-fx01-2",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows noncompact S, but its cited screen-geometry dependency sets up the screen and optical objects for a closed spacelike surface, which it defines as compact and without boundary. This uses those objects outside the supplied dependency interface.",
      "context_sha256": "6c14788f1fdff4fc5f4f75bfeb8b5e9335d66216e7445ff3b932a21e47752677",
      "item_sha256": "06c130dd8d3fc2bee37be952414f032597023a5ab68bda31508bc8fb56159d1d",
      "at": "2026-10-22T03:40:04.669Z"
    }
  ]
