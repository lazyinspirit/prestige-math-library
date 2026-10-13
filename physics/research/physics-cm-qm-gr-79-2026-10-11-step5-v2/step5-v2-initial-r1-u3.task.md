# Step 5 adjudicate: initial, round 1, unit 3

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-3-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u3.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"3",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cm-bilateral-shift-space-and-cylinders, 0:def-cm-mechanical-vector-field-and-energy-in-a-chart, 1:ex-cm-jordan-block-dichotomy-computed, 2:cor-cm-flow-domain-open-and-flow-is-c1, 2:ex-cm-flow-of-a-linear-system-is-the-matrix-exponential, 4:ex-cm-planar-harmonic-oscillator-return-map.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-bilateral-shift-space-and-cylinders",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final remark overstates the cited ball comparison, which covers centered cylinders on [-m,m]. The cylinder fixing only coordinate 100 contains points differing at coordinate 0 (distance 1), but any ball around one of its points contained in it has radius at most 2^-100; this ",
      "context_sha256": "fb5b85ecffd1dad27073459a61321db7ba9305a9815dec2bc56c70540cefb57f",
      "item_sha256": "2f3780c01e810f963d48100868f39d824088defa862aee730287a9e177d85a34",
      "at": "2026-10-12T19:18:06.427Z"
    },
    {
      "id": "def-cm-mechanical-vector-field-and-energy-in-a-chart",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Indexing conflicts with the supplied interfaces: vectors in R^n use coordinates k<n (0,…,n−1), but D_qM sums k=1,…,n and uses v_n. For n=1 this references nonexistent v_1 and omits v_0, so G is not defined as stated.",
      "context_sha256": "c512891e9966c4582220b9ec24ad6101b7bf97a382f9432fab9a6a6ef683ffbe",
      "item_sha256": "c18b86848c7413bc502e6bb62a92689c13aebea1f03d984564e1fa0714584990",
      "at": "2026-10-12T19:18:32.574Z"
    },
    {
      "id": "ex-cm-jordan-block-dichotomy-computed",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L3] restates the theorem’s spectral hypothesis for eigenvalues of T, but the supplied theorem requires eigenvalues of the complexification T_C. Steps 1.2 and 2.1 do not specify v and λ over C, so they do not establish that required hypothesis as stated.",
      "context_sha256": "82744ea0ce84b9503b1ca3c3cb7cc22e7ba57070dc9d53ff294034c01ae06df4",
      "item_sha256": "fccaec4e53c59ffb5c0ad4b2e5dc56bd778b35ebecf13c855d3226723c738a37",
      "at": "2026-10-12T19:23:18.264Z"
    },
    {
      "id": "cor-cm-flow-domain-open-and-flow-is-c1",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 claims [F1] supplies a C¹ extension near the time endpoint h, but its interface guarantees regularity only on [0,T] and explicitly makes no claim outside it. The needed extension is not established.",
      "context_sha256": "2a7776c729d3e609435c5bbad60a9c8e5912e31edb9080f6f4f30214d9403271",
      "item_sha256": "86d659fb83e095ce5a2bd3ce40a967673aa9cddb3a911d77d2db5eb982d68032",
      "at": "2026-10-12T19:52:53.420Z"
    },
    {
      "id": "ex-cm-flow-of-a-linear-system-is-the-matrix-exponential",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 omits the smooth-dependence theorem’s local hypotheses: a∈B(a₀,ρ), t∈[0,T], and the trapping bounds. The supplied interface guarantees the derivative identity only on that local cylinder, so F3 overstates what the cited theorem licenses.",
      "context_sha256": "d50f840d6034607c3dda67661b9768d1491f3de838cb84731aa4565a1cc2b4ad",
      "item_sha256": "8905b046269737ec5d79da22beab78dbf317eab1d257455d1359e4558db46844",
      "at": "2026-10-12T19:22:14.170Z"
    },
    {
      "id": "ex-cm-planar-harmonic-oscillator-return-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims the return map on the whole section y=0 is x↦−x, but the proof establishes only a local map near (1,0). At (0,0) the flow is stationary, so no positive first return exists.",
      "context_sha256": "d90baa56769a18855841fc6ce0ec0c017a40e3ab22030910b42e3fad959c8469",
      "item_sha256": "50c8dbfe7d4d006776c06c05883a93fc97d1d2199e4404e1567e574c76bc1615",
      "at": "2026-10-12T19:22:19.291Z"
    }
  ]
