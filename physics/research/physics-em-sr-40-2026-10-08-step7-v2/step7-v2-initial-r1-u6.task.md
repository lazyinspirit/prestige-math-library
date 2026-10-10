# Step 7 adjudicate: initial, round 1, unit 6

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"6",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 7:cex-sr-reverse-cauchy-schwarz-fails-outside-the-cone-pair, 8:def-sr-inertial-and-piecewise-inertial-worldline, 9:lem-sr-endpoint-displacement-of-a-future-timelike-worldline, 13:texp-sr-piecewise-inertial-twin-reunion.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "cex-sr-reverse-cauchy-schwarz-fails-outside-the-cone-pair",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 unjustifiably equates (U1)'s failure with the sum leaving the future cone. For v=(2,0,0,0), w=(-1,0,0,0), (U1) fails (-2<2), yet v+w is future timelike. Cone closure does not apply to oppositely oriented inputs.",
      "context_sha256": "28ba96f126c811bea3cb8e91c99e373cb5b7bcb93bd4a2e8c738c5e79b1d8394",
      "item_sha256": "31c7e528a8a9f8d1d365c3c6783adea746e7e8c3ba869086d4e16f0444b28744",
      "at": "2026-10-10T04:08:24.151Z"
    },
    {
      "id": "def-sr-inertial-and-piecewise-inertial-worldline",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (a)'s unrestricted subinterval claim is false: for x(s)=p+sd on [0,1], restriction to [0,0] is not a curve/worldline under the cited definition, which requires at least two domain elements. The claim needs a nondegenerate-subinterval hypothesis.",
      "context_sha256": "6610db736ec2643ac7a1cff6ff7fa590c1ebcb1f4e76cc382de78b08cc8b5dd2",
      "item_sha256": "f92526bda678630f94957f3fb02046d640a2384ac5648daddda553779abeb147",
      "at": "2026-10-10T04:07:58.112Z"
    },
    {
      "id": "lem-sr-endpoint-displacement-of-a-future-timelike-worldline",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 applies the integrability supplier without establishing its required nonzero future causal one-sided endpoint tangents. F1 states only finiteness there; timelike interior tangents can have zero endpoint derivative, e.g. y(s)=(s²,0,0,0).",
      "context_sha256": "14894db3ef351d2c9a66a03ec72725b4ac64a6c3680f5faf15193512a14955e5",
      "item_sha256": "528b247dff2741341436c58f30024e557a57e7c3296a2c2cfd870b7bc9f7ba50",
      "at": "2026-10-10T04:08:46.717Z"
    },
    {
      "id": "texp-sr-piecewise-inertial-twin-reunion",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 infers the traveler is behind at q without assuming equal initial readings at p. The clock postulate fixes only increments and permits independent offsets; setting the traveler's initial reading to 3T reverses the claimed reunion ordering.",
      "context_sha256": "b0384a9cdee905b9760b3c758a31f351dd39b3f60cfc4760b813a5642cc36b14",
      "item_sha256": "074f22a87d6534759fe79d318b014f95ee08ec150c970d2792aa0761349e1c69",
      "at": "2026-10-10T04:08:13.927Z"
    }
  ]
