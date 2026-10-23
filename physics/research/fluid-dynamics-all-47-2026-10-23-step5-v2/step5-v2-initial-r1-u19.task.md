# Step 5 adjudicate: initial, round 1, unit 19

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-batch-19-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u19.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"fluid-dynamics-all-47-2026-10-23",phase:"initial",round:1,unit:"19",input_sha256:"9be711b940a681b75640bcf998c1259c5d3eb539d47214af2cabfb73a7f7cd6d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run fluid-dynamics-all-47-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-fd-torus-mean-zero-poincare, 3:ex-fd-acoustic-energy-mode, 4:thm-fd-periodic-smooth-stability, 4:thm-fd-smooth-sobolev-continuation, 5:thm-fd-global-two-dimensional-periodic-navier-stokes.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-fd-torus-mean-zero-poincare",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates the supplied Parseval theorem: its interface gives Parseval on the torus but not the derivative-coefficient formula. Step 2.1 relies on that unstated fact for the gradient norm, so the cited dependency does not license the step.",
      "context_sha256": "b2afcb2e50e9f411adb2e85980ee2b390cf7910eb6b9f371986ef3b8643500d6",
      "item_sha256": "2daa41428967ab97ab966cf63bfba036a0f3ec01ef8c7fb1e393384f9ea91492",
      "at": "2026-10-22T22:44:57.313Z"
    },
    {
      "id": "ex-fd-acoustic-energy-mode",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For W≠0, v includes a constant transverse zero mode as well as the longitudinal ±e₁ mode. The title calls the full solution a longitudinal acoustic Fourier mode, which overstates what the example establishes.",
      "context_sha256": "e9af2ea51fc96a31fcec81e2b6c46946211a6eaf5a728db65595051d90ab27b5",
      "item_sha256": "97f081f6948df09f1610ef64203b4a53eb076025d900247badf5d114544a5d3c",
      "at": "2026-10-22T22:45:23.367Z"
    },
    {
      "id": "thm-fd-periodic-smooth-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement promises each H^m bound can be chosen independently of the viscosities. F1 gives a viscosity-independent lifespan and finite H^m bounds for each solution, but no uniform-in-viscosity bound; Step 1.1 does not establish one.",
      "context_sha256": "986c00e44bb0de69cc0429c39fd03d63f81cbb412530403dee34783b00260f69",
      "item_sha256": "fa500e52adc6bd437252ad827976c8eb7a2f8e6e9066ad3dabdc44b066121134",
      "at": "2026-10-22T22:47:22.959Z"
    },
    {
      "id": "thm-fd-smooth-sobolev-continuation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 2.1–2.2 need a uniform restart lifespan and, for Euler, a bound on the change in r. The supplied IVP interfaces give local existence and parameter dependence, but not F1’s explicit lifespan or F2’s L∞ estimate; these restatements are unlicensed.",
      "context_sha256": "3147b908d1aa5f9dba32de0dcb2de3af7ce7f9b5637053d62c8b8fe67bed6b3c",
      "item_sha256": "717e49ee2f786fef412e1f6d7f2404364e3101891169b29ddb3690f70bae5b38",
      "at": "2026-10-22T22:45:52.456Z"
    },
    {
      "id": "thm-fd-global-two-dimensional-periodic-navier-stokes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 is restated with a specific lifespan formula, T=(2C_s||u_0||_{H^s})^{-1} (or 1 for zero data), that its supplied interface does not state or license. This quantitative dependency restatement is unsupported.",
      "context_sha256": "76de05723c670dedb4475ed882a207da2279c429d3b1866c2e17e3f205ff5a12",
      "item_sha256": "6e09adf9b1bf03c78fa64bdfb0fabeedb2cb366fef92e912e20e1bff3c2572f9",
      "at": "2026-10-22T22:45:24.409Z"
    }
  ]
