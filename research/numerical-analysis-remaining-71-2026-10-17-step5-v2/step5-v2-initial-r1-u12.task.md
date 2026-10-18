# Step 5 adjudicate: initial, round 1, unit 12

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-12-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u12.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"12",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-ewald-causal-cardinal-spline-window, 0:lem-ewald-screened-coulomb-kernel-and-self-limit, 1:lem-ewald-gaussian-poisson-periodization, 1:ex-ewald-nonneutral-zero-mode-obstruction, 2:lem-ewald-pme-spline-alias-and-dft-normalization, 3:lem-ewald-pme-derivative-window-alias-bound, 4:thm-ewald-real-reciprocal-cutoff-error-bounds, 4:ex-ewald-neutral-dipole-cell, 5:ex-ewald-mesh-energy-force-consistency.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-ewald-causal-cardinal-spline-window",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "At P=1, the usual pointwise partition-of-unity claim fails: for any integer n, sum_{k∈Z} W_1(n-k)=2 because both endpoints are included. The partition claim needs an almost-everywhere qualification or a different endpoint convention.",
      "context_sha256": "86d18584d9c433383825a11dba091470de6a422cf6be3eb04a711de77cdb289a",
      "item_sha256": "d562edb463d63c684ed650117585224debf58127358db27149155b990b52d966",
      "at": "2026-10-18T03:10:14.465Z"
    },
    {
      "id": "lem-ewald-screened-coulomb-kernel-and-self-limit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 overstates its cited interface: the change-of-variables result requires an L¹ function, but the local restatement claims it for a nonnegative Lebesgue integral without that condition.",
      "context_sha256": "274e8574c928e76354f6b5f21f0c6e871b673a35b5ac108a65f6c27e9efcaf57",
      "item_sha256": "9b153734603e690cded95cd4927c8f115dc7d41e77e3835aaabb1c25abf025bc",
      "at": "2026-10-18T03:10:43.206Z"
    },
    {
      "id": "lem-ewald-gaussian-poisson-periodization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof never establishes local uniform convergence of the direct periodization. [F1] gives absolute convergence pointwise only; Schwartz decay plus a compact-set lattice majorant would prove uniform convergence, but that step is absent.",
      "context_sha256": "e06e30bf80561b08ee35bbfc0c1dcd462f31a55571460a04ffda2d2c7699b381",
      "item_sha256": "af28c16c43dedbd5ce1ec98496429abf8f6354df2297363b4ca5eba5aee72f18",
      "at": "2026-10-18T03:10:18.507Z"
    },
    {
      "id": "ex-ewald-nonneutral-zero-mode-obstruction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims the result for nonneutral periodic sources generally, but the example and proof address only a single charge q₁=1. Retitle to match that case or state and prove the general claim.",
      "context_sha256": "895730511f5a417cea1cac6047e724a6c34574508fc1abfcad61121f87db6ee6",
      "item_sha256": "5912f278f031d1b3a19c241f192192b0c32392aa56b3815f36f6ddb2cbc7fd89",
      "at": "2026-10-18T03:14:54.324Z"
    },
    {
      "id": "lem-ewald-pme-spline-alias-and-dft-normalization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The tail bound quantifies over real J≥1, but its integral comparison fails for noninteger J. For P=2, J=1.99, and u→0+, the tail divided by 2u² tends to Σₘ≥₂m⁻²≈0.645, while the bound divided by 2u² tends to 1/1.99≈0.503.",
      "context_sha256": "d18e422e00e86ede3126b29efcfb38f6df11b5ed7367e3d926208da4378ad9d6",
      "item_sha256": "20e1b4a4fcc1b2c1671985a0c71baa963909417ce6c70e54a50d8b3ec6ff4401",
      "at": "2026-10-18T03:10:39.451Z"
    },
    {
      "id": "lem-ewald-pme-derivative-window-alias-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 attributes the decreasing-power tail estimate to the cited p-series theorem, but its supplied interface states only convergence iff s>1; it does not license that estimate.",
      "context_sha256": "15b3fb03fd1435706af871c16c29d7dadaa9cf90994474aa181d4368b6d96f6f",
      "item_sha256": "8a955c781a12b03fa96148f82307cfb7c27b74a3422e50fd5a86d23d60d3f79c",
      "at": "2026-10-18T03:10:57.991Z"
    },
    {
      "id": "thm-ewald-real-reciprocal-cutoff-error-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Statement does not assume or quantify α>0, though its bounds use α⁻¹ and T₃ with β=(4α²)⁻¹. These expressions require α>0; the proof’s Given line cannot repair the missing theorem hypothesis.",
      "context_sha256": "c8afc34038c135f5c5f920ad3b47d6c78a4bc14d5ec6ba476b93486e50b2c180",
      "item_sha256": "2f316e08ba7b57574c073cd826b667d5a14bdaef8403d0608fa124c8e48671e1",
      "at": "2026-10-18T03:11:07.071Z"
    },
    {
      "id": "ex-ewald-neutral-dipole-cell",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 quantifies over any finite symmetric reciprocal mode set K, which may include 0, but [F2] defines c_k only for k≠0. Then the displayed sum is undefined; explicitly require K⊂ℤ³\\{0}.",
      "context_sha256": "5f921fc5879322ed5f7de3bc01ca8ad5bee2fc3a230b82087e768637e08b6dd5",
      "item_sha256": "82fd8243eaf835308cd80d01f63d3f181eeb131517531583d9f0f4c9ef2c61d7",
      "at": "2026-10-18T03:10:36.459Z"
    },
    {
      "id": "ex-ewald-mesh-energy-force-consistency",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example never specifies an Ewald parameter α>0. The assignment model and error theorem require one, and c_k—and thus the stated energies and certificate—depends on it.",
      "context_sha256": "e339fe0b2c5f0010894300049e8dd851a19e32e46637ae98ceeea59ab2177c37",
      "item_sha256": "9a0e4c221a34bda89e8c96af2935caff74e7c7067d2b0c3684be65349cb92224",
      "at": "2026-10-18T03:10:39.175Z"
    }
  ]
