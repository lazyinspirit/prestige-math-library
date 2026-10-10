# Step 7 adjudicate: initial, round 1, unit 40

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u40.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"40",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-em-harmonic-forcing-periodic-response, 9:def-em-monochromatic-source-free-phasors, 19:ex-em-rectangular-aperture.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-em-harmonic-forcing-periodic-response",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 applies F2 with s=sin(ωt), although e^{-iωt}=cos(ωt)-i sin(ωt). The stated substitution yields α_j cos(ωt)−β_j sin(ωt), not the claimed plus sign; this explicit multiplication inference is invalid.",
      "context_sha256": "ad2f57496cccd897bfa0d0d7a9914dd9d1171cce9cc6ee70f8be0b5c978e745a",
      "item_sha256": "94d11fa008847cc6b2651357af92cc4522e21c5fb76469bdc87f904271aad218",
      "at": "2026-10-10T04:19:41.900Z"
    },
    {
      "id": "def-em-monochromatic-source-free-phasors",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The smoothness restatement tests only Re/Im E_k but claims equivalence to both E and B being smooth. On D=R^3, E=0 and B=(|x_1|,0,0) make all six listed coordinates smooth while B is not C^1. Both fields' real coordinates must be tested.",
      "context_sha256": "ffce2622aa13aa19a81231291c6e6de3568be1072317043b674dfbcca676dc2b",
      "item_sha256": "f94900356620d24ee89feb2a99ee69fccf9b480de11f943bc4f38a04e27c9843",
      "at": "2026-10-10T04:19:39.869Z"
    },
    {
      "id": "ex-em-rectangular-aperture",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 and step 4.1 replace the parent's uniform O(...) Fraunhofer estimate with an explicit bound having coefficient 1/π. The supplied dependency interface does not license that constant, and no local derivation establishes it.",
      "context_sha256": "55f681887497a58c48b92b13af9d70187faf02e0a6daa8d51b163120d8f109b0",
      "item_sha256": "aabb51d15a7f0bb30f9e95c317133dd184fff9d51c6a2a2324c9212fcbec10b2",
      "at": "2026-10-10T04:19:49.465Z"
    }
  ]
