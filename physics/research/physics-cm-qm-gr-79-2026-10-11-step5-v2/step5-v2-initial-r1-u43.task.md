# Step 5 adjudicate: initial, round 1, unit 43

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-43-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u43.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"43",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-nrqm-framework-ccr-on-the-schwartz-core, 3:def-nrqm-framework-newtonian-spacetime, 4:def-nrqm-framework-quantities-and-units, 6:def-nrqm-framework-classical-apparatus-trajectories, 7:cex-nrqm-framework-mean-position-can-fail-to-exist, 8:ex-nrqm-framework-dimension-bookkeeping, 9:rem-nrqm-framework-primitive-and-derived-status, 9:rem-nrqm-framework-examples-scope-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-framework-ccr-on-the-schwartz-core",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the proof defines approximants using n∈N, but χ_n(x)=χ(x/n), n⁻², and 1/n are undefined at n=0. Under the library’s sequence convention, these sequences need a defined zeroth term or reindexing.",
      "context_sha256": "caa3a06f719b1801c102ea89b68a1e6dae645fc2cb64c6bc8c15fbdce15b4a29",
      "item_sha256": "ae46d612e8357fbaaac936568049a9dd4d3d855d4d6d56116434e4b257f8477d",
      "at": "2026-10-12T20:05:36.442Z"
    },
    {
      "id": "def-nrqm-framework-newtonian-spacetime",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The restated arena omits the fixed orientation of K required by def-cm-affine-time-space for positively oriented adapted charts. The stated quadruple alone does not meet the cited chart-existence premise used to define coordinates and smooth structure.",
      "context_sha256": "ef808cf8241c7a00e4705fb846f8552750c4e35a56805c043e875c9dc0365f2b",
      "item_sha256": "fb8d2b636967bbf4b3c6b521725632fb82f7c1dd55e9ed8882ce9698fac41e04",
      "at": "2026-10-12T20:06:39.991Z"
    },
    {
      "id": "def-nrqm-framework-quantities-and-units",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The four-generator dimension group cannot represent SI thermodynamic temperature or entropy. Clause (d)(8) promises their dimensions under these rules, but defines no temperature dimension or convention relating kelvin to energy.",
      "context_sha256": "0a4778f3e85c76422b4c9a3d3922f7bce80d50b51d9026770e1a2262eae4211b",
      "item_sha256": "15b5373bc4a885f5ed5ebecd007e2c94499cf34b54bfb5b7eb0a25c8310fa42c",
      "at": "2026-10-12T20:05:28.987Z"
    },
    {
      "id": "def-nrqm-framework-classical-apparatus-trajectories",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition invokes a state postulate and a preparation/apparatus postulate “of this page,” but neither appears here. Its particle-state claim and apparatus-assumption reference therefore lack a defined source or interface.",
      "context_sha256": "0c9b8dc302eb5dc4171e447672c2271638c94bb1012a3c064eda332ad3ed6c5d",
      "item_sha256": "1639109e2919a5a3938dbc8846419c54a46f7ff37803f40549fc87203e8a00e7",
      "at": "2026-10-12T20:05:00.897Z"
    },
    {
      "id": "cex-nrqm-framework-mean-position-can-fail-to-exist",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The norm and moment integrals are Lebesgue integrals, but [L2] supplies only improper Riemann evaluations. No cited or local step identifies them on the truncated intervals, so MCT cannot transfer those evaluations to the claimed norm and moments.",
      "context_sha256": "8beb966af646d8c095335126f41555fb3759d1c49aaa405722badd9e8fa1c148",
      "item_sha256": "97e72a991940cf4805fcca5d2b1a29e68af608d5da536699a4f6d060fa3acac8",
      "at": "2026-10-12T20:06:22.646Z"
    },
    {
      "id": "ex-nrqm-framework-dimension-bookkeeping",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L2 restates the Schrödinger equation without its domain condition. P4 asserts norm-differentiable evolution only for initial states in D(H_op); for arbitrary L² states the derivative and equation are not asserted, so the dependency is overstated.",
      "context_sha256": "9f279bb6c83dab6dcf2e9558877912c0d3da47c571a8cfea365a732b5ef6cdfc",
      "item_sha256": "40f837235604d9fa77eb7c918c9c705dbcce288cc57b13e29a3150cd75ddfc1e",
      "at": "2026-10-12T20:06:19.055Z"
    },
    {
      "id": "rem-nrqm-framework-primitive-and-derived-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "P5 explicitly assigns the position and momentum operators and their domains in clause (iii). The remark misclassifies those same assignments as derived consequences of P5; only claims such as the CCR are mathematical consequences.",
      "context_sha256": "f33d754f828a8b1097f79b52cda764b85a862c108775d01225de4d6e79929dc7",
      "item_sha256": "6a73a72d134633e4e6437f1ec92ac396c00ebd5e2e7ed1f153f79ecac2206ff1",
      "at": "2026-10-12T20:05:27.236Z"
    },
    {
      "id": "rem-nrqm-framework-examples-scope-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The zero-mass counterexample interface guarantees a Schwartz vector with divergent kinetic-operator norm, but does not establish that it is compactly supported or normalized. The remark overstates what its dependency licenses.",
      "context_sha256": "f833d8c351cebf1f748c1f5dade71b8a2878241a87e042ad5d309c2c313e45c9",
      "item_sha256": "356aca87c488b60c49e935134df26ac96196b79b8fda3466b7c9fa4d3449612d",
      "at": "2026-10-12T20:05:45.464Z"
    }
  ]
