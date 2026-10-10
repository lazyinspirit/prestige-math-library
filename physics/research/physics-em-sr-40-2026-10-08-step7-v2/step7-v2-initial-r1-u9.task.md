# Step 7 adjudicate: initial, round 1, unit 9

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u9.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"9",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:def-sr-stress-energy-tensor-and-force-density, 11:ex-sr-static-tension-stress-balance, 13:lem-sr-perfect-fluid-conservation-equations, 13:ex-sr-dust-stress-energy-under-a-boost.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-sr-stress-energy-tensor-and-force-density",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The opening calls c the model's positive numerical constant, but def-sr-affine-minkowski-model defines exactly (A,V,η,C⁺), with no c. This inaccurately restates the dependency interface; c>0 must be introduced as an independent parameter.",
      "context_sha256": "be781470b482b7fe255189d6f121663387966b49fc65069b02e3d6448f4cabc6",
      "item_sha256": "ff6ecd60d29250c11a3b3efe368b31b7d41a3f30e1b9e4a514326f91de29e3f4",
      "at": "2026-10-10T04:09:28.263Z"
    },
    {
      "id": "ex-sr-static-tension-stress-balance",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title omits the essential local-conservation hypothesis. On Ω=A, J=R, take ρ=0 and P(s)=-exp(s): this is the stated static uniaxial tension field, but tension varies. The proof establishes constancy only when D=0.",
      "context_sha256": "92f6e43ae5d99441974377a983e78e1a8d95ffe5748ce7782babfce79ed4f714",
      "item_sha256": "d0f9105fb870c9c54c7b88b78f8312c0eb1a02ca2a158f98a8a795cdbf96f3df",
      "at": "2026-10-10T04:10:08.949Z"
    },
    {
      "id": "lem-sr-perfect-fluid-conservation-equations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Given applies def-sr-stress-energy-tensor-and-force-density to arbitrary open Ω, including ∅, although that interface requires Ω nonempty. It must restrict Ω or separate an empty-domain branch without invoking that supplier.",
      "context_sha256": "623e2a12f86f3968837211b524c8d71b298a4918766dca4cb144df98bc9dfa41",
      "item_sha256": "13f3b4404d02af6a695685ea07643d2cc8755d94b80ad85e686f9f4710324578",
      "at": "2026-10-10T04:10:11.925Z"
    },
    {
      "id": "ex-sr-dust-stress-energy-under-a-boost",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 conflates passive components with a vector image. If n'=B(beta)e_0 in V, its primed coordinates are B(beta)^2(1,0,0,0), not (gamma,-gamma beta,0,0) when beta≠0. The transformed components instead factor using the unchanged vector e_0.",
      "context_sha256": "75ee6efd535a09f4cce5f80bf6f479f7dfdcfbc712da488883e699f36484482e",
      "item_sha256": "449a895a57ff9de694669dd06146bb41b7b1679e84f6002d4b8fe65362404b18",
      "at": "2026-10-10T04:10:30.310Z"
    }
  ]
