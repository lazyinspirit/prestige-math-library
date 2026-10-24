# Step 5 adjudicate: initial, round 1, unit 60

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-batch-60-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u60.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"advanced-qft-supersymmetry-build-2026-10-23",phase:"initial",round:1,unit:"60",input_sha256:"79ce228292c28cf4dc516ab9bc72619009c0b56046675966598cb75a0933c758",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run advanced-qft-supersymmetry-build-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:lem-qftx-raw-adhm-real-twistor-block, 10:lem-qftx-asd-penrose-kernel-vanishing, 12:thm-qftx-zero-fi-regular-adhm-asd-correspondence, 13:ex-qftx-zero-fi-flat-framed-sector.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qftx-raw-adhm-real-twistor-block",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: the cited T_C action allows arbitrary t_i∈C*, but step 5.1 treats daggers as if |t_i|=1. For t2=2, A gains a 4B2†λ2 term, not t1A; the claimed monad equivariance fails outside the compact torus.",
      "context_sha256": "00a982cdd0804caac809242c4d98f0f977fec0d71719cde5da3914a630019ba5",
      "item_sha256": "956e52fbe71f3810b6fca655169d65fd1fa9e80d7f3893b8261afe6f35b782f1",
      "at": "2026-10-24T20:21:34.602Z"
    },
    {
      "id": "lem-qftx-asd-penrose-kernel-vanishing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 applies [A1] without its stated “Assume full AC” premise, which the local restatement also omits. The supplied interface therefore does not license this unconditional Ward-bundle application.",
      "context_sha256": "fed504fc913deefdaa2d0c4dc59811dadcec6960d7634cbd55083bdd401dedb8",
      "item_sha256": "6fa5c7fc249202c07d285aab1d15919b33b4a0ca877804ccb923510f101e5a1d",
      "at": "2026-10-24T20:21:43.640Z"
    },
    {
      "id": "thm-qftx-zero-fi-regular-adhm-asd-correspondence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 (and 4.1) uses [A5] backwards: the supplied real-monad lemma starts with an ASD connection/Ward bundle and extracts regular ADHM data. It does not construct an ASD/Ward object from arbitrary regular zero-FI data, so the claimed bijection is unproved.",
      "context_sha256": "39f4c04dd0e032a089e7869da975da8f01d9bb0e2e058a5b2458ba14195cbeaa",
      "item_sha256": "cfe197077a8caf7ac5567eb75df063db597bad46d365cd49badcbe6eb8692459",
      "at": "2026-10-24T20:21:29.895Z"
    },
    {
      "id": "ex-qftx-zero-fi-flat-framed-sector",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 invokes thm-qftx-zero-fi-regular-adhm-asd-correspondence without its explicit full Axiom of Choice hypothesis; the stated Given omits AC, so the cited correspondence is not licensed.",
      "context_sha256": "eb24a81ff65c7d6d38cd2ca326bbc8d400ae66bd85302a5740e5f77055c56806",
      "item_sha256": "ed1e9a83916b513f37afd0be1e258570bf4e41f6ba58adb0a297aef188d1c6db",
      "at": "2026-10-24T20:22:22.169Z"
    }
  ]
