# Step 5 adjudicate: initial, round 1, unit 35

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-35-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u35.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"35",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:alg-radix-two-fft, 0:thm-cauchy-root-grid-matvec-numerical-cost, 2:thm-hippo-leg-matrices-have-low-rank-structure, 4:thm-s4-convolution-filter-complexity.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-radix-two-fft",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition claims the recursion returns the specified DFT, but gives no separate proved correctness result. The algorithm convention requires correctness to be established in a lemma or theorem; the required even/odd split identity is only asserted here.",
      "context_sha256": "cb6992f2ce930f220ec30ca05d9f31737185ec5be3e7fc78b85b73251f29cbc1",
      "item_sha256": "c0e003506607fd412bd6dfea3a3e8327d3e0712540aeacbb089dde45cf64f86c",
      "at": "2026-10-20T08:54:24.997Z"
    },
    {
      "id": "thm-cauchy-root-grid-matvec-numerical-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 initializes each target power t_k only once, then updates it through every depth without resetting it. At later depths t_k carries products from earlier nodes, so the accumulated terms are not the claimed geometric expansions.",
      "context_sha256": "5dd91168b99f4a312bf95eb6d63e64bfa59ea7ba3b99b722fa81b9d824a6d8af",
      "item_sha256": "9d80a7c232955b8f614158b1e4448b2f242ee8449b947a6c3b125fdde27cc29a",
      "at": "2026-10-20T08:57:15.250Z"
    },
    {
      "id": "thm-hippo-leg-matrices-have-low-rank-structure",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: the proof establishes normal-plus-low-rank form for the diagonally similar LegT matrix S₀⁻¹GᵀS₀, not for the raw LegT generator.",
      "context_sha256": "60b85bd4ffdb1e6edd790bd53c62c2f5c3b963b0a707bddb86e752cf7e730629",
      "item_sha256": "d60c83740afc2cc0ba808bbb9755e384cd60cdaccefcaaf104c732f57ff0abfa",
      "at": "2026-10-20T08:55:32.258Z"
    },
    {
      "id": "thm-s4-convolution-filter-complexity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the final sentence claims applicability to the stated HiPPO generators, including LegS. The supplied interface says LegS’s coefficient ODE uses G^S/t and is not time-invariant; this theorem’s fixed-A bilinear filter does not cover that dynamics. Step 1.1 repeats the overc",
      "context_sha256": "c7e095b57191f736cbfd3e91345c6d208d67765e9fd0919359ae4efcaf7ce48a",
      "item_sha256": "77ac3eb23b9b6f07f839c8e4b8f7de597667245bd4aa4c46510f66791c032140",
      "at": "2026-10-20T08:57:14.687Z"
    }
  ]
