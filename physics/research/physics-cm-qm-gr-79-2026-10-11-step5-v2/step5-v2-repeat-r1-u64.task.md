# Step 5 adjudicate: repeat, round 1, unit 64

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-64-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u64.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"64",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 15:def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength, 15:def-nrqm-light-matter-framework-spectral-transition-and-detection, 17:ex-nrqm-light-matter-two-level-dipole-drive-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (b) permits t0=t1, but (c) asserts a differential equation on that singleton interval, where the time derivative is undefined. The cited Dyson theorem explicitly excludes this case from its derivative claims. Require t0<t1 or specify only U(t0,t0)=I.",
      "context_sha256": "0d9a440beba6987e1945396801b4bbc8fbfba863bef53e85c9091e8b7a48b99a",
      "item_sha256": "56f02cbc946288c0a885f40126289d076df1afb76e12f2188d0a0572edd0b109",
      "at": "2026-10-13T09:25:58.067Z"
    },
    {
      "id": "def-nrqm-light-matter-framework-spectral-transition-and-detection",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (f) presents the point mass at Δ as a limiting law without lemma (c)'s hypotheses. An allowed pair can have Δ>Λ; every P_{b,t} is supported in (0,Λ], so weak convergence to that point mass is impossible.",
      "context_sha256": "0e93b7d73d3978b110623131d637384d1c9ca35f6b01d0f25ab300a5c6807dfe",
      "item_sha256": "9a179129840cbca80dc87c99af06cb99f83d8ccd3653d8fdf09a582e98c9d092",
      "at": "2026-10-13T09:26:00.339Z"
    },
    {
      "id": "ex-nrqm-light-matter-two-level-dipole-drive-check",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The adopted dipole-drive interface requires matter matrices compressed from Hκ and Dj on a declared subspace W of their common domain. No such subspace or realization of the freely assigned Pauli data is supplied, leaving the transition supplier's hypotheses unverified.",
      "context_sha256": "f3f1e371b0e58d588ed40aa8627817bef924df8a97fa0fafd0193ef1688454aa",
      "item_sha256": "6acc78f6d628ebe285219c13eb1982e40bc4c4d6a9ff648efc0fa7e3b54d6ab5",
      "at": "2026-10-13T09:30:40.720Z"
    }
  ]
