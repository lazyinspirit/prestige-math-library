# Step 5 adjudicate: initial, round 1, unit 16

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-batch-16-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u16.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"mathematical-statistics-foundations-37",phase:"initial",round:1,unit:"16",input_sha256:"d09cd87bf1a789ab3aae4c9439e049e9981c7df3bd49e414cef635da1d327e21",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run mathematical-statistics-foundations-37 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-donsker-class-and-asymptotic-equicontinuity, 2:cex-pointwise-strong-laws-do-not-imply-uniform-law, 4:thm-empirical-process-functional-clt, 5:ex-uniform-empirical-cdf-converges-to-brownian-bridge.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-donsker-class-and-asymptotic-equicontinuity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Allowed classes need not yield an ℓ∞(F)-valued G_n: for uniform P on [0,1], take f_{x,k}=k1_{ {x} }. Envelope 0 has PF²=0, but every sample has sup_f|G_n(f)|=∞. The Donsker clause is undefined without a bounded-path condition.",
      "context_sha256": "89b5099af07fa18c46f3b18e8c7189648f186f576bd662e95bf3cd155f525d4b",
      "item_sha256": "0c9b68659bb3181b784e340ccd2b68d5a9476d944f70f23655422d7d9b47f591",
      "at": "2026-10-14T11:52:00.554Z"
    },
    {
      "id": "cex-pointwise-strong-laws-do-not-imply-uniform-law",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The empirical-process interface requires outer probability for an uncountable supremum unless a countable subclass has the same supremum a.s. No countable subclass does here: its finite sets cover only countably many points, which the sample avoids a.s. Step 2.1 uses ordinary con",
      "context_sha256": "547cda2f7c812aa9a7b73d879cf4bc9241149b571afc8e4a14f2aef7e57993a4",
      "item_sha256": "7bf8e98f27d73357aa1f862db6d96ca572e41f730612074f01ad8180263d1063",
      "at": "2026-10-14T11:51:13.945Z"
    },
    {
      "id": "thm-empirical-process-functional-clt",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 uses a normal MGF bound to invoke Dudley, but [F12]’s supplied interface gives only the characteristic function and moments. Its claimed density and integration support is not in that interface, so the required sub-Gaussian premise is unsupported.",
      "context_sha256": "98a12dc514df49023e874c416487312fe915e4f7da4cb468741c1145a137bda6",
      "item_sha256": "6d8566217c46c95fc36cd025233bf03951845e18fe89567c8cbaf254cb870615",
      "at": "2026-10-14T11:51:51.628Z"
    },
    {
      "id": "ex-uniform-empirical-cdf-converges-to-brownian-bridge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 reuses F inconsistently: the Example defines F(t)=t, but A1 says the envelope F≡1 and uses PF²=1. These cannot be the same function; name the envelope separately.",
      "context_sha256": "98d3c8890cb8198f518d093f4debb8b528665d5548a5b60f62097f7b9a8bac08",
      "item_sha256": "73beec00d0b5afb34baa543714d7afc5b2a0e1611d8a704f549d9d18925cbc4f",
      "at": "2026-10-14T11:51:16.993Z"
    }
  ]
