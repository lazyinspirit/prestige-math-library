# Step 5 adjudicate: initial, round 1, unit 53

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-53-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"53",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 9:def-nrqm-symmetries-framework-symmetry-groups-and-conservation, 10:post-nrqm-symmetries-prescribed-external-coupling, 10:pthm-nrqm-symmetries-generator-conservation, 12:cex-nrqm-symmetries-nonconstant-potential-breaks-translation, 12:ex-nrqm-symmetries-free-translation-and-momentum, 12:ex-nrqm-symmetries-parity-selection-rule, 13:rem-nrqm-symmetries-examples-scope-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-symmetries-framework-symmetry-groups-and-conservation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (b) says flow commutation and conservation are proved results of this page, and (f) says its conditional results decide symmetry; the full item contains only definitions and remarks, with no such results.",
      "context_sha256": "8c563190edea86f39c7a9b4b50065fd19655b2ba48eae46902c329eeaaa8d5b9",
      "item_sha256": "f65e451880842eeb1b311d44002eb90edf31b3a58ac07af15942263c4df825bf",
      "at": "2026-10-12T20:12:53.842Z"
    },
    {
      "id": "post-nrqm-symmetries-prescribed-external-coupling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (vi) and the scope summary say covariance, symmetry, and propagator results are proved on this page, but the supplied full item contains no such results—only the postulate and scope. This misstates the item's proof status.",
      "context_sha256": "6ae921935f5093ade8ee1776c54a2f36fa3181d086f12fa8c0f5928999ce5dec",
      "item_sha256": "616a05027190e2de7755a52a119558ef167f57407994e86cae0c141fd99d9840",
      "at": "2026-10-12T20:12:12.132Z"
    },
    {
      "id": "pthm-nrqm-symmetries-generator-conservation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) assumes only that S is a self-adjoint unitary symmetry. P2 requires an assigned observable pair with a declared unit; neither S’s assignment nor u_S is given, so its outcome law is undefined. State that assignment as a hypothesis.",
      "context_sha256": "c783fe36cf2de92081e19a4256973458d58fc79fc74c7775cb780054e32db1df",
      "item_sha256": "68bd8136e83daf3a419ef3995a2ebe653ed906a44400036eb887348b591ec4b5",
      "at": "2026-10-12T20:11:36.757Z"
    },
    {
      "id": "cex-nrqm-symmetries-nonconstant-potential-breaks-translation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "V₀=1_{B(0,1)} is dimensionless, but M_V is added to kinetic energy. The declared SI model requires V to carry energy units, so this is not the stated Hamiltonian without an energy scale, such as E_*·1_B.",
      "context_sha256": "220989ae16e0f3e3419f55adf7c048eb3996588372a7e4dfdab3c35fe67799ec",
      "item_sha256": "68e78155db54855a90408ebf6e5873f800070e4ded1f0e055f7d5c30ebf7eecc",
      "at": "2026-10-12T20:11:42.644Z"
    },
    {
      "id": "ex-nrqm-symmetries-free-translation-and-momentum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Teschl §8.1 pp. 173–175 covers position/momentum and conservation; free evolution’s Fourier multiplier is in §7.3 p. 169 (H₀’s multiplier: §7.2). The cited source claim is misattributed. [Teschl](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf)",
      "context_sha256": "4cf166dc97d6e54b4a46e2409e4b465b61f7af5f2db66d3c03a418c7f5d278d7",
      "item_sha256": "47e511906be892e90ae53132f948047f6d11ef9d13bd017b257e35bf6517a1f2",
      "at": "2026-10-12T20:12:53.478Z"
    },
    {
      "id": "ex-nrqm-symmetries-parity-selection-rule",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited pthm-nrqm-symmetries-rotational-and-parity-invariance assumes Dependent Choice, but this item omits def-dependent-choice from deps. Its parity-invariance restatement therefore omits a required prerequisite.",
      "context_sha256": "d5a4ae8a753594df1bf1b85ed3ed0e61b6532b2898708371eb93454de0bb14b2",
      "item_sha256": "603162d0ba03e72de7b0ff457f7925e8847e919894db2f1621ace465326002d1",
      "at": "2026-10-12T20:11:29.647Z"
    },
    {
      "id": "rem-nrqm-symmetries-examples-scope-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The counterexample restatement conflicts with its supplied interface: the interface’s Statement says every nonzero translation symmetrizes every bounded nonconstant V, including 1_B(0,1), while this remark says none do.",
      "context_sha256": "984f9ba601b67377bb6bdc656e0e0c81ddc5c1cbe5d903902cd760e7769e7d26",
      "item_sha256": "7bdb81114a6a95db2e4df55a01568db48cd4b0c9e5c9d23dbb11c0d9869e4d89",
      "at": "2026-10-12T20:11:36.871Z"
    }
  ]
