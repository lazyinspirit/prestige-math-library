# Step 5 adjudicate: initial, round 1, unit 3

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-batch-3-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u3.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"fluid-dynamics-all-47-2026-10-23",phase:"initial",round:1,unit:"3",input_sha256:"9be711b940a681b75640bcf998c1259c5d3eb539d47214af2cabfb73a7f7cd6d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run fluid-dynamics-all-47-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-fd-c1-boundary-surface-integrals, 1:def-fd-quantity-and-frame-conventions, 2:cex-fd-spin-sensitive-stress.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-fd-c1-boundary-surface-integrals",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates its dependency: the change-of-variables corollary requires the integrand's support to lie inside the map's image. F3 omits this hypothesis, so it is an inaccurate dependency restatement.",
      "context_sha256": "24fa42a27ffd38eb4ec65ab8bcc1364cd4cab48d7df736defbd04fc2580c554f",
      "item_sha256": "52cd35122fa9c99b8a428eda488bdde16b8ad2095c132df32eb4bf3db415e7c5",
      "at": "2026-10-22T22:40:58.243Z"
    },
    {
      "id": "def-fd-quantity-and-frame-conventions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It claims density construction is established by a balance-hypothesis theorem “on this page,” but the item contains no such theorem or balance hypotheses.",
      "context_sha256": "61aea22ee2477ebae779e53cd4db1d0f93d50cd06c1ef0691a494f4ba3c1ffd1",
      "item_sha256": "ab674c8978a426247bcc7da905e4f87e734a986a8ac72786ad5f7014080ea6bd",
      "at": "2026-10-22T22:41:03.644Z"
    },
    {
      "id": "cex-fd-spin-sensitive-stress",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The use of [F2] omits its material-motion hypotheses: it applies to velocity induced by a C² motion χ with diffeomorphic, positive-J slices. The item gives u=Ωx but supplies or verifies no such χ, so the transformed-velocity inference is unsupported.",
      "context_sha256": "811ca5ea211787a29ae5320af57ea2796dc12e931546724903ae95a450d8776a",
      "item_sha256": "d4c797bc548b62813b255475bfd3c542cd3eff5dd12a9f2dbd50114723b53be7",
      "at": "2026-10-22T22:41:15.138Z"
    }
  ]
