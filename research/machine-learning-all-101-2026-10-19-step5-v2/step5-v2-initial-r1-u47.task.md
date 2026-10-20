# Step 5 adjudicate: initial, round 1, unit 47

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-47-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u47.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"47",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-bounded-complex-iid-matrix-norm-bound, 1:lem-hermitian-spectral-measure-is-probability, 2:lem-bounded-complex-resolvent-deterministic-equivalent, 7:cor-isotropic-minimum-norm-risk-closure-under-edge-gap, 7:ex-isotropic-sample-covariance-directional-marchenko-pastur-limit.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-bounded-complex-iid-matrix-norm-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 omits Markov’s requirement that Y be a nonnegative random variable; as written, the implication is false when Y is negative off E. This is an inaccurate dependency restatement.",
      "context_sha256": "386620e62ec3503e105f7a37bb54b6b80064d3f91fb85be50a9c45339d947868",
      "item_sha256": "ca9ac922b66b814e27936f08b5acc3ca7f3b0bb0ecc654af8de9e7ffaf71f054",
      "at": "2026-10-20T09:14:32.593Z"
    },
    {
      "id": "lem-hermitian-spectral-measure-is-probability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 misstates def-dirac-measure: its interface defines only a set function and says its probability-measure property is proved separately. That proposition is not a dependency, so the proof has not established the Dirac sums are measures.",
      "context_sha256": "305803c2b6ce02c4316773d981c56e8d7f40be006e50f95008537c2cb5437ad5",
      "item_sha256": "c440209c7eafa686eb33e807f645c5413b0a371431903529457231c30f005794",
      "at": "2026-10-20T09:32:56.600Z"
    },
    {
      "id": "lem-bounded-complex-resolvent-deterministic-equivalent",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.3 integrates F3’s fixed-t tail bound at thresholds shrinking with N (starting at N^{-1/2}). F3 does not guarantee the bound uniformly in t and n, so the claimed O(N^{-1}) second moment—and thus the stated δ3 bound—is unsupported.",
      "context_sha256": "bd2c8a76592acfeb55264565e723b2c38a6fad820fb6a1f1e85ba037b1a55594",
      "item_sha256": "a86509c66eec425c417cc376fba950093941ef72f50c5acdd64230e908edc6bb",
      "at": "2026-10-20T09:15:16.396Z"
    },
    {
      "id": "cor-isotropic-minimum-norm-risk-closure-under-edge-gap",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 does not establish the directional limit used in step 3.1: its theorem covers row covariance matrices of size n×N_n. Transposing gives p_n×n matrices, but the interface requires row size equal to the index; arbitrary p_n may repeat, so this application and F6’s restatement are",
      "context_sha256": "e3347426a8806821ea8f1bb4a5819799c05fe58de494811d9ea6bad2a4330fd9",
      "item_sha256": "37bf69a2f28c56de90140769b99186232a98a7832cebfbfe3564d5adf5237217",
      "at": "2026-10-20T09:16:34.070Z"
    },
    {
      "id": "ex-isotropic-sample-covariance-directional-marchenko-pastur-limit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4’s uniqueness requires Im u>0 for u=-(1-c)/z+cm_c(z). Step 2.1 checks only the fixed-point equation; F3 does not state this admissibility condition, so uniqueness and the identification with F_{c,δ1} do not follow as written.",
      "context_sha256": "84b630af6cfd8920ede0ba5e6e17d6cb8422efa1a73d970d4f997d145a981d08",
      "item_sha256": "fe25ca0d2ab128878eadc48f789375002e5fd5d6d8aec0b1cc8ad9bb3ccc3d55",
      "at": "2026-10-20T10:32:13.080Z"
    }
  ]
