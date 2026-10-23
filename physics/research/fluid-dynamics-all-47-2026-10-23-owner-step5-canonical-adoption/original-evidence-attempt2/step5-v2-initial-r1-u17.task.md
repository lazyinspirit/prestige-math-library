# Step 5 adjudicate: initial, round 1, unit 17

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-batch-17-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u17.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"fluid-dynamics-all-47-2026-10-23",phase:"initial",round:1,unit:"17",input_sha256:"9be711b940a681b75640bcf998c1259c5d3eb539d47214af2cabfb73a7f7cd6d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run fluid-dynamics-all-47-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-fd-projected-no-slip-stokes-space, 1:lem-fd-periodic-fourier-embedding-products, 1:lem-fd-zero-trace-directional-poincare, 2:thm-fd-periodic-pressure-recovery, 3:thm-fd-rectangular-no-slip-stokes-velocity-pressure.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-fd-projected-no-slip-stokes-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 misstates its dependency: the cited definition gives inner-product axioms but does not establish that the Sobolev pairing satisfies them. Step 1.1 relies on this unsupported claim to treat H₀¹ as complete in an inner-product norm.",
      "context_sha256": "560525f5f71c1231964c29f9a3fcf70f69f0c6c75c949a4ad1f9a3de10450be6",
      "item_sha256": "c7263edcdedb67af0db105398ac8bf2d97ce0741a6039771431cf14cff885c90",
      "at": "2026-10-22T22:44:45.175Z"
    },
    {
      "id": "lem-fd-periodic-fourier-embedding-products",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 inaccurately says the Fourier coefficient completion uses Countable Choice. The supplied definition says that completion is choice-free; Countable Choice is needed for the analytic measure, integral Fourier coefficients, and L² realization.",
      "context_sha256": "6aadacc95c7b19368ec784113ffccb4060268a5ec94de93f341ea4d22391bd3f",
      "item_sha256": "8c200d77397d70edce2d7e4790107ea0bbd9d179f9212aaeeecbe94490ffba3f",
      "at": "2026-10-22T22:44:37.487Z"
    },
    {
      "id": "lem-fd-zero-trace-directional-poincare",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows Ω=∅, but its H₀¹ dependency defines the space only for nonempty Ω. The cited interface therefore does not cover every quantified case; add Ω≠∅.",
      "context_sha256": "fbb4236b7f15807daec3f86f8d44f97ef4533e327de75658dee709fe3f1a9b0b",
      "item_sha256": "eafe53464cef06122f076d7b7496a84061046b674e5950faaf9051779aa64337",
      "at": "2026-10-22T22:44:43.969Z"
    },
    {
      "id": "thm-fd-periodic-pressure-recovery",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims a smooth velocity, but the hypotheses give only u∈H^s for finite s>d/2+1, which ensures C¹ regularity, not C∞ smoothness.",
      "context_sha256": "ac8328efe171fc81a4a07eebdbc13805fe3153147365360c608c851781353a10",
      "item_sha256": "d758299189b3f2b8437a2787cafc3980219e17b2cb2f24e8ab27f279371df4c6",
      "at": "2026-10-22T22:44:35.359Z"
    },
    {
      "id": "thm-fd-rectangular-no-slip-stokes-velocity-pressure",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 relies on an “explicit map” and recursive formula for the divergence inverse, then claims an H¹ bound. The supplied dependency interface gives only fixed-support test-space continuity and no formula or H¹ estimate, so it does not license this essential H⁻¹ pressure bound",
      "context_sha256": "098106c7a48316e72eadf562feed08918271185e9954f1f9b08546dae6911fc5",
      "item_sha256": "3408cfd7d9b4cbafdaf254c52678e472b683bb61c0215262b571452f0c9550d9",
      "at": "2026-10-22T22:44:32.040Z"
    }
  ]
