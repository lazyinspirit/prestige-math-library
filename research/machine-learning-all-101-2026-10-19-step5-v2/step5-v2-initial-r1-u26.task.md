# Step 5 adjudicate: initial, round 1, unit 26

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-26-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u26.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"26",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:alg-pc-causal-discovery, 2:lem-meek-rules-complete-for-cpdag, 2:lem-pc-fisher-transform-uniform-concentration, 3:thm-pc-oracle-correctness, 4:thm-pc-high-dimensional-consistency.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-pc-causal-discovery",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4 mutates C by orienting edges, so the declared output cannot include both the undirected skeleton C and a partially directed graph. No separate PDAG or skeleton copy is defined, making the output contract inconsistent.",
      "context_sha256": "2b382b020ab9f9c6d44172ec93f5f479a298b746741c41e11867bb4693d8ada3",
      "item_sha256": "3ad28d400faa99eb0632096a9780d9fe89af9039f9f19589f7e0c222e1c4b510",
      "at": "2026-10-20T08:39:46.711Z"
    },
    {
      "id": "lem-meek-rules-complete-for-cpdag",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.2 uses the propagation claim from 2.1 to exclude directed edges within an undirected component, but 2.1 leaves the undirected a-c case open; that case is only ruled out in 4.1–4.3. Thus the chordality argument invokes an unproved claim.",
      "context_sha256": "4f58dd1d036a40f5703294dd6f6301e85e9ec8ffd4dbf1125858ed8a37e66c21",
      "item_sha256": "506e0f2a7dc874410930ce67255379aa8bc72b99ff4a1312a6fc49a89f7bfdd4",
      "at": "2026-10-20T08:40:08.219Z"
    },
    {
      "id": "lem-pc-fisher-transform-uniform-concentration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates its cited interface: the theorem states positive definiteness and the zero-partial-correlation/conditional-independence criterion, not a block-regression residual's covariance or independence from X_S. Step 1.1 relies on this unlicensed residual law.",
      "context_sha256": "adbee0b3965e1e8fcabff669619b905ff6ee91643ca64f7d0a15c79ca55f35c5",
      "item_sha256": "712a6a98ee736de54c0fa94af91b2bd5a64039eef2cbb78253b3577c8a3b6ed2",
      "at": "2026-10-20T09:32:14.096Z"
    },
    {
      "id": "thm-pc-oracle-correctness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 adds the claim that a nonedge has a separator among one endpoint’s parents, which the cited lemma’s interface does not state. Step 2.1 relies on this to show the restricted PC search finds each separator; that inference is unlicensed.",
      "context_sha256": "f94e782a1325bc4dd6866bf47bb21da8f8f5cacdd33dc57c1ca062900c46921d",
      "item_sha256": "f031f3841803bec550b4242eec8eb94c08e7c978195d9a75d3967aa966f85ce7",
      "at": "2026-10-20T08:38:19.723Z"
    },
    {
      "id": "thm-pc-high-dimensional-consistency",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F8 claims every nonedge has a separator among one endpoint’s parents, but the supplied lemma interface guarantees only some separating set. Step 4.1 needs the parent-set bound to ensure a separator is tested by level q_n.",
      "context_sha256": "c298323d3ca7e942eeb31328efa349a20fdf895f22e8ece7129b9035f15613be",
      "item_sha256": "f097cba5c20be4cafaed29d51405b593ca1689c06135e7f9fafb20bb69278ec2",
      "at": "2026-10-20T08:38:23.659Z"
    }
  ]
