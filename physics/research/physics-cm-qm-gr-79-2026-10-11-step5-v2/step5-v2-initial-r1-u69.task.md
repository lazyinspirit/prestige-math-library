# Step 5 adjudicate: initial, round 1, unit 69

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-69-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u69.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"69",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:def-gr-hilbert-stress-energy-tensor, 4:lem-gr-compact-variation-coefficient-vanishing, 7:def-gr-perfect-fluid-matter-model, 7:lem-gr-metric-divergence-and-density-formula, 8:prop-gr-dust-and-perfect-fluid-conservation-equations, 8:cex-gr-energy-conditions-do-not-imply-conservation, 13:pthm-gr-adopted-action-and-einstein-equations, 13:ex-gr-null-gradient-scalar-field-conservation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-hilbert-stress-energy-tensor",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Circular dependency: this definition cites `lem-gr-hilbert-tensor-uniqueness` via `justified_by`, while that lemma defines its setup by referring back to this definition. The justification must be independent of the definition.",
      "context_sha256": "5cb3021734b663de1710657cf79b3b34aa4d12b4ba954bfc39c75f96937ce6d2",
      "item_sha256": "ef2859e07e5640d78b72267ea7a6bd28dd6f07ae204a80fe0681f8e46fb982cd",
      "at": "2026-10-12T20:22:17.625Z"
    },
    {
      "id": "lem-gr-compact-variation-coefficient-vanishing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited GR interfaces require a time-oriented Lorentzian four-manifold, and the volume clause also requires an oriented chart. The statement assumes only a smooth nondegenerate symmetric tensor and an arbitrary chart, so these dependency restatements are not licensed.",
      "context_sha256": "cad9492150144600c8f735782cadaa8fa7ea863764f3ea22c13edb30f0e3c7b3",
      "item_sha256": "879133609de15fae3707cbd38a508148e6c91a95906a6f5d370ede0a7087028e",
      "at": "2026-10-12T20:22:48.795Z"
    },
    {
      "id": "def-gr-perfect-fluid-matter-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "`justified_by` is circular and irrelevant: prop-gr-dust-and-perfect-fluid-conservation-equations assumes this model and its stress tensor, then proves a conservation equivalence. It cannot establish this definition’s well-definedness.",
      "context_sha256": "6fc480b2f46546de645227cb4b7237af88a3b4fa7c6d60cb22077e322cb96cb2",
      "item_sha256": "79e7104de1d9bbe83908ee18888d609afd92ea16d3db903192fdad96d6ad211c",
      "at": "2026-10-12T20:22:39.801Z"
    },
    {
      "id": "lem-gr-metric-divergence-and-density-formula",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement covers arbitrary charts on any time-oriented Lorentzian manifold, but cites the volume-form definition of w only for oriented charts on an oriented manifold. That dependency does not support the stated scope; the claimed orientation-free use is an unstated extension",
      "context_sha256": "362ad525814309a53653b469aa2d3bf74c7c2393358cad8285b29166b37fc73d",
      "item_sha256": "f749a3047c77409e67b62bbd88fb282c3d7dd48679e8de65debbc389903724ac",
      "at": "2026-10-12T20:22:05.845Z"
    },
    {
      "id": "prop-gr-dust-and-perfect-fluid-conservation-equations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement misstates both supplied model interfaces: dust data are (ρ,u), and perfect-fluid data are (ε,p,n); T is derived in each. Calling (ρ,u,T) and (ε,p,n,T) the models is an inaccurate dependency restatement.",
      "context_sha256": "69e3432cd64a49ea965aa37105d539357dc5b958dc9ff7ba5efffe65fcd38427",
      "item_sha256": "83cc2f3e416388ec083351bc83c3ce726f1dde0acf66f1bf7bd930889e292e04",
      "at": "2026-10-12T20:22:48.353Z"
    },
    {
      "id": "cex-gr-energy-conditions-do-not-imply-conservation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal unit mismatch: the identity-chart basis is orthonormal, so the SI convention requires T_00 and T_01 to have energy-density units. But T_01=x^1 has length units, contradicting the claimed unit-free test field.",
      "context_sha256": "e8f1ce3bab393da3e288ce019d24b4ce426024fd926d5b6124c43d2e2f43e69a",
      "item_sha256": "40a5816369d60801763fc1a77ba21c041c08c3bb70a8e18e10cc387cdeacf882",
      "at": "2026-10-12T20:23:11.059Z"
    },
    {
      "id": "pthm-gr-adopted-action-and-einstein-equations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (b) says the prescribed-T consistency condition is derived on this page, but this proof does not derive it. The supplied field-law interface assigns that derivation to pthm-gr-einstein-consistency-and-energy-conditions.",
      "context_sha256": "fa420a8b0d9315f874fecdbab558a5c3c6c990d7954f3904d25655bf4e18d796",
      "item_sha256": "c465044adc514afd23078ecebeb3ece617e1d5150569ba2e5e35ff4590a91b4c",
      "at": "2026-10-12T20:23:22.367Z"
    },
    {
      "id": "ex-gr-null-gradient-scalar-field-conservation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item is classified as mathematics, but its conservation proof relies on the GR dependency prop-gr-scalar-field-stress-energy-conservation. Mathematical items cannot depend on physics.",
      "context_sha256": "e1dd3dcc423607407efdb12250a5dc1bcd1535d78ee01518433394d9afc922e6",
      "item_sha256": "b7549be82daab1dbe00064b86c6adcaa1c9408e5408a12e36d8f6fbcfa1e6ce4",
      "at": "2026-10-12T20:23:16.910Z"
    }
  ]
