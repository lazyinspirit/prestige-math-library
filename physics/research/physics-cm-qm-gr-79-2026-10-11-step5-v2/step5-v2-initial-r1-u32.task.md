# Step 5 adjudicate: initial, round 1, unit 32

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-32-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u32.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"32",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:def-cm16-flow-equilibria-and-invariant-sets, 11:def-cm16-stability-and-hyperbolicity-concepts, 11:def-cm16-stroboscopic-and-poincare-maps, 12:def-cm16-chaos-list-for-model-maps, 12:pthm-cm16-energy-stability-and-instability, 12:pthm-cm16-hyperbolic-linearization, 12:pthm-cm16-variational-equation-and-linearization, 13:ex-cm16-isotropic-oscillator-return-map-check, 13:ex-cm16-linearization-and-growth-checks.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm16-flow-equilibria-and-invariant-sets",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (vi)(b) asserts a linearization spectrum at every equilibrium, but the model assumes only continuous, state-locally-Lipschitz forces. For example, F_1(x,v)=|x_1| is admissible and has an equilibrium at 0, yet DG(0) does not exist; add differentiability or make the claim co",
      "context_sha256": "7ba938d8b6089c89d7f119b55dff5f488f65a7998d6adec94534e253754152c7",
      "item_sha256": "d57b66257683f7cdb51e936b34142fd58f31136c475d90a48ed9250d0625d4a1",
      "at": "2026-10-12T19:53:08.465Z"
    },
    {
      "id": "def-cm16-stability-and-hyperbolicity-concepts",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clauses (i) and (iii) use a Euclidean norm on force-model states combining position (length) and velocity (length/time). The resulting balls add unlike dimensions. Specify nondimensional coordinates or a dimensionally valid state metric before defining these predicates.",
      "context_sha256": "cb2551f910f97e2b2eefa4b5bc7dc4b8e2221bd62e02efd0ce79c8ec786d7795",
      "item_sha256": "54324001848658bb6bc1c2184c9762eb110e92d2f7e78996bb59091392847cae",
      "at": "2026-10-12T19:53:49.304Z"
    },
    {
      "id": "def-cm16-stroboscopic-and-poincare-maps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The MIT citation is misdescribed: in the linked PDF, §7.2 is “Bifurcations,” not stroboscopic maps or Poincaré sections. This makes the item’s source reference inaccurate.",
      "context_sha256": "09d44d592f8751dbb301699ed1b4068805bfd142c26cb238189656f997bb7c4a",
      "item_sha256": "ef72747e14683737182d771a939d9e815c2e2bb40b5e85c3c1db8d15d31444fb",
      "at": "2026-10-12T19:54:20.805Z"
    },
    {
      "id": "def-cm16-chaos-list-for-model-maps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "SICM §§4.3 and 7.4 are “Homoclinic Tangle” and “Nonlinear Resonance”; they do not support the cited mixing discussion, and §4.3’s narrow caution about lobe growth does not support the claimed general warning that plots are not proofs of chaos.",
      "context_sha256": "2aba4b98fab8e41a8f7468b6c705bf7a48d56ef00d43c9d8d34379928db54cd8",
      "item_sha256": "153197d00f1e4ba2edae1b75d305d88c13d50a78d716d3c32cf9a15355a6c04a",
      "at": "2026-10-12T19:56:24.083Z"
    },
    {
      "id": "pthm-cm16-energy-stability-and-instability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims nonlinear instability for a strictly concave potential, but the proof only covers a negative definite Hessian at the equilibrium. Strict concavity need not imply this: U(x)=-x⁴ is strictly concave near 0 with U″(0)=0.",
      "context_sha256": "2b4ad62434810a8f1639f5c13a235120f0fecae0744dae63adde03cf64085ef9",
      "item_sha256": "b335677f837324a0cdc5f5f3d7bbf2770e8babbc3f35d3042cae3672fe6f3cc2",
      "at": "2026-10-12T19:53:46.261Z"
    },
    {
      "id": "pthm-cm16-hyperbolic-linearization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The state combines positions ([x]=ℓ) and velocities ([v]=ℓτ⁻¹), but the proof uses their unweighted Euclidean norm without specifying scales to make the coordinates commensurate. The resulting distances and exponential bounds are dimensionally ill-typed.",
      "context_sha256": "003a8a46758441456f693d566c9206b746860e7d19c2d9882abad1da8bd9ad87",
      "item_sha256": "b6c93373d1c71ceab3157ab7ab49c58b8ddeacf5470800894ce82f18793c7b0a",
      "at": "2026-10-12T19:53:53.659Z"
    },
    {
      "id": "pthm-cm16-variational-equation-and-linearization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The state norm mixes q (length) and v (length/time), so the claimed units for ||A|| and L and the dimensionally interpreted error bound do not follow. A common state rescaling is only mentioned conditionally, not required by the theorem.",
      "context_sha256": "37cd163dc52fe59155b215bf68d7555c078a5ba73f78a991fa63d41a8e36a798",
      "item_sha256": "c10c2e24a6fdcc765e4cd8160ccafbca8e570c7371e7982ecd2b19ccd0a392ee",
      "at": "2026-10-12T19:54:08.237Z"
    },
    {
      "id": "ex-cm16-isotropic-oscillator-return-map-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The MIT citation misstates its support: §7.2 is “Bifurcations.” Its Poincaré/stroboscopic discussion is in §7.1.4, and it does not contain the claimed warning about dense periodic points. The model calculations check out.",
      "context_sha256": "8611853ae4faf3165419391e69c4329cbcf6224141223a7854508ca2ab2cc888",
      "item_sha256": "97c73938678a7379beed35fd3e8e71f4582053887a833d8e3be41e9b648cf957",
      "at": "2026-10-12T19:55:00.311Z"
    },
    {
      "id": "ex-cm16-linearization-and-growth-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The forces F=±q and mass m=1 are called dimensionless yet claimed to be force maps of post-cm02, which requires forces in newtons and positions in metres. No scaling constants reconcile these units.",
      "context_sha256": "74728d835094f1b68f31b2930e0d39578203f16c03f6794c8268775a13004008",
      "item_sha256": "0c376f0eec71d2fe535d900e415933d883e8988334e074fb81063f0b2fce68ef",
      "at": "2026-10-12T19:55:39.501Z"
    }
  ]
