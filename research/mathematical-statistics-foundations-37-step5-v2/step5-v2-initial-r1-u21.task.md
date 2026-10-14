# Step 5 adjudicate: initial, round 1, unit 21

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-batch-21-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u21.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"mathematical-statistics-foundations-37",phase:"initial",round:1,unit:"21",input_sha256:"d09cd87bf1a789ab3aae4c9439e049e9981c7df3bd49e414cef635da1d327e21",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run mathematical-statistics-foundations-37 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:cex-continuity-alone-does-not-give-delta-method, 4:ex-log-transformation-delta-method, 4:ex-ratio-delta-method, 4:ex-second-order-delta-method-quadratic.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "cex-continuity-alone-does-not-give-delta-method",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates the dependency: its interface gives the linear expansion as a sufficient hypothesis, not a necessary requirement for every first-order limit. That unsupported “requires” claim is inaccurate.",
      "context_sha256": "c5344ee7c0be153feeb950d57e249a5ea6c9a4acd4aa546b4dd1373418e74170",
      "item_sha256": "1cafd8fc0ecfc4ba4d4194777dd0cfac7d0718e95f1ed480d3e378e533a1ce1d",
      "at": "2026-10-14T11:52:46.784Z"
    },
    {
      "id": "ex-log-transformation-delta-method",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The sequence is indexed by ℕ including 0, but T₀ uses Z/√0 and is undefined. Specify T₀ separately or index the sequence from 1.",
      "context_sha256": "a341fd3559b579b9f686281827b1a63d0b23629e3ce2f6b8fd01536b1d7c356f",
      "item_sha256": "2eb7305bea0a0b23757723e078c4b7e2c32b43cf3e12913b66c5f07ed6ddfa2e",
      "at": "2026-10-14T11:52:32.890Z"
    },
    {
      "id": "ex-ratio-delta-method",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With the library’s convention that sequences include index 0, T_0 uses 0^{-1/2} and is undefined. Thus T_n is not the stated sequence on ℕ; the denominator claim is only established for n≥1.",
      "context_sha256": "f776a3005d9313ad37269635a98275f5eae3d324fd83885a6a19b9e78f2ea932",
      "item_sha256": "bd3a1a1654f26ec96d77ec7f2bdf7e1915adbc7930bbb43afc0dabe6ed314989",
      "at": "2026-10-14T11:52:40.620Z"
    },
    {
      "id": "ex-second-order-delta-method-quadratic",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With indices starting at 0, T₀=Z/√0 is undefined, and r₀=0 violates the dependency’s rₙ>0 hypothesis. Define Tₙ for n≥1 or use n+1.",
      "context_sha256": "f0a6d76aa760073cda86ebd2fe766d92b8c1fc7e1bb2af6e34b3d577850ce057",
      "item_sha256": "3b212f1937f9c19028cd9102101434bd5840ea61c592fa8aa225487671a48e0f",
      "at": "2026-10-14T11:52:39.171Z"
    }
  ]
