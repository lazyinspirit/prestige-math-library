# Step 7 adjudicate: initial, round 1, unit 8

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"8",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 14:def-sr-collision-datum-and-conservation, 14:lem-sr-center-of-momentum-frame, 14:cex-sr-massless-momentum-not-mu-at-zero-mass, 16:ex-sr-equal-mass-head-on-collision-mass.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-sr-collision-datum-and-conservation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "In (c), equal-mass lacks a mass-specified hypothesis: arbitrary two-leg data (e.g. four zero legs) have no recorded masses, so the comparison of m_i with m'_i is undefined. Restrict this predicate to mass-specified two-leg data.",
      "context_sha256": "12be7a7da2e8d0357e37ebe60d765e2c3c3ed3bef0bd1fa0321812858b16d7fa",
      "item_sha256": "9d575700ddd9fa04a6958773fd4a10710a027e54114f1df4fdcd1a1a1c724a8f",
      "at": "2026-10-10T04:09:19.498Z"
    },
    {
      "id": "lem-sr-center-of-momentum-frame",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately defines center-of-momentum frames for every nonzero P using q_e0(P), whose domain is cl(C+). The supplied definition uses h_e0 on all V: for P=-e0, h_e0(P)=0 but q_e0(P) is undefined.",
      "context_sha256": "04395d0bce57c68adc3f85585a683f3191a84c5eccac02460eace450bf819fa3",
      "item_sha256": "7903456391bb65807c0736c4068bb55c797ff65d71d8fd9b248fd29b6e8c5f11",
      "at": "2026-10-10T04:09:23.270Z"
    },
    {
      "id": "cex-sr-massless-momentum-not-mu-at-zero-mass",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 unjustifiably concludes that massless momentum is a separate model primitive. The proof only excludes P=mU for normalized timelike U; primitive status requires a formulation premise, which the physical sibling postulate cannot supply here.",
      "context_sha256": "d05b84be4c4333139d4ec874aef025d85dc39fc1be9f265334c9f1bf9935e02e",
      "item_sha256": "a3b08170dd1730df184fff38722529a588c8e39874004ede469689d7e5f09106",
      "at": "2026-10-10T04:09:27.466Z"
    },
    {
      "id": "ex-sr-equal-mass-head-on-collision-mass",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 concludes that the mass excess equals the total kinetic energy. It proves only (M-2m)c^2=T_total; the mass excess is T_total/c^2. Since c>0 is arbitrary, the stated conclusion is false without that factor.",
      "context_sha256": "ebcf527835893c62cae03b73426d59e83155ea96a45561402aa585d1ad44d3df",
      "item_sha256": "1f0213432380ba567c0446cd5bccfbf203ce6bdcea8da8e51366af700384d329",
      "at": "2026-10-10T04:09:25.976Z"
    }
  ]
