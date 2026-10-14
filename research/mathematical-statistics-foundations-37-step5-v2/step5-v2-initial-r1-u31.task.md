# Step 5 adjudicate: initial, round 1, unit 31

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-batch-31-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u31.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"mathematical-statistics-foundations-37",phase:"initial",round:1,unit:"31",input_sha256:"d09cd87bf1a789ab3aae4c9439e049e9981c7df3bd49e414cef635da1d327e21",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run mathematical-statistics-foundations-37 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-common-law-forces-two-point-tail-loss-bound, 1:def-adversarial-sample-replacement, 2:lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold, 4:def-contamination-robust-risk.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-common-law-forces-two-point-tail-loss-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] overstates def-measurable-space: its interface gives Θ a σ-algebra, but does not assert measurability of the estimator or loss sections. Those are hypotheses of the statement, not consequences of that dependency.",
      "context_sha256": "d6091c01ea83048febad906b0092d12bb877c1cc3fedbee854325aa1deb5a10d",
      "item_sha256": "469ce65decdc0f7c3756ae70bda3728ab87fdabaf72ca8989af4b6988e97baf4",
      "at": "2026-10-14T11:55:40.603Z"
    },
    {
      "id": "def-adversarial-sample-replacement",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The finite product convention indexes an N-fold product by i<N, so its coordinates are X_0,...,X_{N-1}. The definition instead uses X_1,...,X_N; for N=1, X_1 is not a coordinate of the stated X^N-valued random element.",
      "context_sha256": "3685f04de230b522f4c3c16ba34f6426470c1699dbb71657b4ffff02aea516e7",
      "item_sha256": "3ee73afbd749f6b84256d45b3b02c51c6118b6a396944429842dabda2a39e438",
      "at": "2026-10-14T11:55:58.438Z"
    },
    {
      "id": "lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates the RN dependency: absolute continuity against a σ-finite measure alone does not ensure a density for an arbitrary positive measure; the existence theorem retains its hypotheses, including σ-finiteness of the numerator. P_i meet that condition, but F3 is false as st",
      "context_sha256": "8e640c87269cab58ee4ad85a7e42740bf5235a924c4191b0dbdf17ac93358b2d",
      "item_sha256": "f1841940d5982837ca0cbf32cadb9ec127237d0a198d1aab40c6d1c5fa7b8276",
      "at": "2026-10-14T11:56:05.561Z"
    },
    {
      "id": "def-contamination-robust-risk",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The replacement risks invoke couplings from def-adversarial-sample-replacement, which requires Δ_X ∈ A⊗A. This item never assumes that condition, and statistical experiments allow arbitrary measurable spaces, so its replacement risk is undefined for permitted inputs.",
      "context_sha256": "7ad8dde1ceceff60aa5d6951d0fd24d9c6bb87872f059853205f77944cf7c915",
      "item_sha256": "256cb6c8690d735b380019387082d19bf0e97b83d2e08d04811aa1c75f745539",
      "at": "2026-10-14T11:56:01.623Z"
    }
  ]
