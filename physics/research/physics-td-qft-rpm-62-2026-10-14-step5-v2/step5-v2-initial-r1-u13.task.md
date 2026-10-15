# Step 5 adjudicate: initial, round 1, unit 13

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-13-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u13.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"13",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:ex-td-finite-two-state-partition-smooth, 7:pthm-td-fixed-tp-reaction-potential-minimum, 9:ex-td-phase-fraction-lever-rule, 9:ex-td-phase-rule-single-component, 9:ex-td-reactive-phase-rule-three-component, 10:pthm-td-regular-gibbs-phase-rule, 11:ex-td-clapeyron-linear-branches.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-td-finite-two-state-partition-smooth",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 establishes only C∞ smoothness, then concludes there is no nonanalytic free-energy point. C∞ does not imply real analyticity; that conclusion needs an analytic-function argument or weaker wording.",
      "context_sha256": "e18d245915c881206959b943dbe8b305d6e668f4f70e552eb4c863d58a2e768a",
      "item_sha256": "c031145879ef1518d46cf2b40c633c2198e1416810eb5f75ae233615a64df1d2",
      "at": "2026-10-14T19:57:19.674Z"
    },
    {
      "id": "pthm-td-fixed-tp-reaction-potential-minimum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The extension is not shown to meet the second-law dependency’s scope: an admitted closed record in P_cl with zero compound center-of-mass kinetic-energy and external-field-energy changes. Those conditions on P_s do not establish them for the compound, so F3 and the entropy inequa",
      "context_sha256": "d3313964b0b0ef55f00b53df3f83722d2ab8001da9688f609e777925ff89c3bd",
      "item_sha256": "30a4537271aca21252e852396071d803d29f3ab014fd14fec5fbb469acc2f625",
      "at": "2026-10-14T19:56:00.129Z"
    },
    {
      "id": "ex-td-phase-fraction-lever-rule",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 assumes each phase volume is nᵢvᵢ for arbitrary nᵢ. The cited phase-branch interface allows vᵢ=Vᵢ/nᵢ to depend on amount; additivity between phases does not imply scaling within a phase. The one-mole values therefore do not determine the fractions.",
      "context_sha256": "235ed0b8db7c9d4746b611ff6e52bb11a4e84d33d8d54da4ceb5821087e0b5c0",
      "item_sha256": "1c28d9a75dadfa9ffaf9c33c44e61ed1485e1dfd3f7187439821139606d72087",
      "at": "2026-10-14T19:56:52.140Z"
    },
    {
      "id": "ex-td-phase-rule-single-component",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The construction uses \\(\\mathcal O\\) in \\(\\chi(\\mathcal O)\\) without defining it or its positive amount domain. Thus \\(O_c\\) and the induced entropy domain are unspecified; the fixed-amount chart does not supply that missing domain.",
      "context_sha256": "7286da87a29f4aab9c60e500d54ccede6df71b64e3064761e978777bfeb8ca8c",
      "item_sha256": "4f8b5205d7571bda63c9bbbb7e516806c978265a001828d012617441261cc108",
      "at": "2026-10-14T19:57:38.412Z"
    },
    {
      "id": "ex-td-reactive-phase-rule-three-component",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 reuses q, already defined as a parameter with units m³/mol, as the dimensionless equation count C(P−1)=3. Thus q+R=4 is ill-typed; rename one use.",
      "context_sha256": "dac7bcd96d90af7c7bcd1861b0f4bcedede4365a8179f0e1ac03e791f2b7c8aa",
      "item_sha256": "f2a81afbcfbc05e9c85942133b4cc4ad940571c3b184ec4fc7fbebcfb33a9a2f",
      "at": "2026-10-14T19:58:54.874Z"
    },
    {
      "id": "pthm-td-regular-gibbs-phase-rule",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 invokes [F1], which requires each pairwise transfer to be feasible in both directions while all other state coordinates are fixed. The statement assumes bilateral exchanges but omits that condition, so [F1] does not establish its phase-equality equations.",
      "context_sha256": "e9a4c875ab639e1200e11965c3d014d69f7beed4fe26c64d7d0f023efab7e8fe",
      "item_sha256": "f68a20ba4a3bfda5a19a4c62cc374a12685f6d297a745f87e06af0ed78fbff05",
      "at": "2026-10-14T19:56:54.744Z"
    },
    {
      "id": "ex-td-clapeyron-linear-branches",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 is restated for “C1 branches,” but the supplied theorem also requires a local C2 energy representation. The cited C1 inverse function theorem establishes only a C1 inverse, so the proof does not verify that required regularity.",
      "context_sha256": "7b78d0350b5fc7f380022b03ec88a7417e8f40e0006aa2293381828e8280cb0c",
      "item_sha256": "a6213923c86d53b81ecf38a621e97d7683b2e6efb5484871ed542fd692981769",
      "at": "2026-10-14T20:00:32.911Z"
    }
  ]
