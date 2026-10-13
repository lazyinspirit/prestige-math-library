# Step 5 adjudicate: initial, round 1, unit 44

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-44-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u44.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"44",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 7:pthm-nrqm-state-geometry-mixtures-and-extremal-preparations, 7:pthm-nrqm-state-geometry-pure-preparation-phase-invariance, 7:cex-nrqm-state-geometry-zero-vector-is-not-a-preparation, 7:ex-nrqm-state-geometry-fixed-mode-two-level-states, 8:rem-nrqm-state-geometry-scope-and-empirical-status, 9:rem-nrqm-state-geometry-examples-scope-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "pthm-nrqm-state-geometry-mixtures-and-extremal-preparations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied interface for F4 states only that extreme points are exactly pure states; it does not establish the claimed explicit σ± split. Step 2.1 merely restates that unsupported claim without proving σ± are positive density operators.",
      "context_sha256": "491cc6930de322ddcfca8c745ee698de990b4705e53498c3fa8e8a0516476816",
      "item_sha256": "09b39b4115a91b078ed65b049639247e023668eca3e7d1aae12f83dc7162bc5c",
      "at": "2026-10-12T20:06:19.201Z"
    },
    {
      "id": "pthm-nrqm-state-geometry-pure-preparation-phase-invariance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In 3.1, [F3] is invoked for tr(T_{0,0})=<0,0>, but its supplied trace formula applies only to nonzero vectors (and the local F3 restatement omits trace). The zero-case trace claim is unsupported as cited.",
      "context_sha256": "11f4ccbd3d6362c2232cbfefd3a73de8c079b554dd5272a36547424dd02d5174",
      "item_sha256": "9910a65b0be3b068630783a2ab4952b708abe6adbd6018bdaa206f0c04321e60",
      "at": "2026-10-12T20:07:12.294Z"
    },
    {
      "id": "cex-nrqm-state-geometry-zero-vector-is-not-a-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 is not licensed by its cited interfaces: def-complex-numbers defines the quotient and says C's field structure is proved separately in thm-complex-numbers-form-a-field, which is absent from deps. Thus step 2.1's C-inverse claim is unsupported.",
      "context_sha256": "c833885293638ac3ea832f7b8729fa4386a6b32e7d5aecbf36ea718c6c6e3ffd",
      "item_sha256": "67898b879f0661ac140f2afd54b1f0a861fcf59cc135e71d65798ae54a2d0c94",
      "at": "2026-10-12T20:07:27.494Z"
    },
    {
      "id": "ex-nrqm-state-geometry-fixed-mode-two-level-states",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 misstates [[def-matrix-product-and-identity-matrix]]: its supplied interface defines matrix multiplication and I_n, but not trace. Both purity calculations rely on L4 for entrywise traces and tr(I)=2, so the cited dependency does not license this step.",
      "context_sha256": "817392649ea417c878b7539b46b1b8321deaefc2c26c38049d9ad0ea8d20b46c",
      "item_sha256": "2446ea440e5fcb2066796aa2579800e846869cdef8975978cc6e957e061011d7",
      "at": "2026-10-12T20:07:09.776Z"
    },
    {
      "id": "rem-nrqm-state-geometry-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Binney & Skinner §6.3, p.122, says an impure state reflects uncertainty about which state the system is in; the citation note reverses this as “not a pure state with unknown parameters,” misrepresenting a cited source.",
      "context_sha256": "9c9cde5ab90f521c5ba6776212a982202593dfb70c9b4a2d2448cf53ec212163",
      "item_sha256": "f845902e970352946530783b3c978e66a4bd470d607560e798b872f526ceacf4",
      "at": "2026-10-12T20:07:37.042Z"
    },
    {
      "id": "rem-nrqm-state-geometry-examples-scope-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The zero-vector paragraph contradicts the supplied counterexample interface’s Statement, which says every vector, including 0, determines a pure preparation and that 0/||0||=0 supplies a unit representative.",
      "context_sha256": "c7d1f8f7c523158fc0f06fc9bfc03650cfa562843ee5afe40cf08c90fef70da6",
      "item_sha256": "ccc3258fdfa962624184963f561d0963416ef631c65da3530d73ed1ff84c3a77",
      "at": "2026-10-12T20:06:32.935Z"
    }
  ]
