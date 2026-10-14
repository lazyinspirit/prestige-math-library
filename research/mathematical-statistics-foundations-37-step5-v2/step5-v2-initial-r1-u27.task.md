# Step 5 adjudicate: initial, round 1, unit 27

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-batch-27-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u27.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"mathematical-statistics-foundations-37",phase:"initial",round:1,unit:"27",input_sha256:"d09cd87bf1a789ab3aae4c9439e049e9981c7df3bd49e414cef635da1d327e21",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run mathematical-statistics-foundations-37 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-natural-cubic-smoothing-spline, 1:thm-spline-polynomial-reproduction, 2:def-series-spline-least-squares, 3:thm-series-training-risk, 3:ex-uniform-mesh-linear-spline-approximation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-natural-cubic-smoothing-spline",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final sentence misstates [[def-natural-cubic-spline]]: it only says repeated observations do not create extra knots; it supplies no “distinct-input interpolation convention” for the data term, which here sums residuals over every observation.",
      "context_sha256": "a696f717d8d357f3d2b451fb63dc7edc1a19bc462d1dc90a432092072cf0bd48",
      "item_sha256": "7433b7e98484a94a99182958d71f843117e24d7ac1fdfe40b93700c80874f070",
      "at": "2026-10-14T11:54:41.653Z"
    },
    {
      "id": "thm-spline-polynomial-reproduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 uses a false identity on allowed repeated knots: for p=1, ξ_j=ξ_{j+1}, its left side is y−x but the omitted-denominator right side is 0. The cited recurrence requires ξ_{j+p}>ξ_j ([source](https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf)).",
      "context_sha256": "3d17396d1474b6f138a500111608a55f6b03e085f51cb12c7cfb4560c3a844ba",
      "item_sha256": "b006d6a21fc220df6d7f12f358af5beb7d9a11f4e13b6ac812f0112886ee5fd7",
      "at": "2026-10-14T11:57:07.389Z"
    },
    {
      "id": "def-series-spline-least-squares",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "No hypothesis requires n≥1. Since the library includes 0 in ℕ, the empty-data case is allowed, but def-fixed-design-projection-estimator requires n≥1, so the claimed identification with it is not licensed.",
      "context_sha256": "a3363cc9517d7319bf4e7e10c0c4053aac68b28f1301da02fe2e0dda681fcda2",
      "item_sha256": "6d78d032823294abab70c422f1afa0bf523fabda7248b508eae9fdb18a8e86ea",
      "at": "2026-10-14T11:54:47.268Z"
    },
    {
      "id": "thm-series-training-risk",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem allows an arbitrary spline basis p_K, but the cited estimator is defined for its specified B-spline basis. The proof identifies the estimator with the projection onto the design formed from p_K without requiring those bases to coincide; with different spans, the bound",
      "context_sha256": "055c42b0ef06c4a1cbc15893828d097a979dba85a5adc7eb6235ad2d816be93b",
      "item_sha256": "2aec66b657ff8228446d62cedbd402d13175388590b12c6c572edcb878fa3d08",
      "at": "2026-10-14T11:55:35.858Z"
    },
    {
      "id": "ex-uniform-mesh-linear-spline-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 claims M=1, but its closed one-cell neighborhoods overlap at each interior knot. The quasi-interpolant definition requires every point to lie in at most M neighborhoods, so this does not verify the claimed family.",
      "context_sha256": "f860ef603c4370b60c6ca4105fc155918a2a394d6f2e2ff4e942ea2e5e076d93",
      "item_sha256": "2f59332db1ec52ad1bc795343f69511e55de173fa1101b006e6b8b7d8fec4818",
      "at": "2026-10-14T11:55:24.585Z"
    }
  ]
