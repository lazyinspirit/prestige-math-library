# Step 5 adjudicate: initial, round 1, unit 103

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-103-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u103.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"103",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-coupled-simulation-finite-difference-estimator, 1:thm-likelihood-ratio-gradient-identity-on-fixed-support, 2:thm-spsa-gradient-bias-is-second-order, 2:thm-spsa-gradient-has-inverse-step-variance-bound, 3:ex-coupled-differences-reduce-variance.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-coupled-simulation-finite-difference-estimator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The dependency assumes only integrability, but the definition says the shared input fixes “their covariance,” which need not exist. For example, let H(η,ω)=X(ω) for an integrable X with infinite variance; the paired payoffs have undefined covariance. Qualify this as applying when",
      "context_sha256": "ec0164c6567970bdb886954e7103ab8da30e84572f0eb61babbbb15a45931366",
      "item_sha256": "c85fd2467d6f268a51eda91e12113e3cb4a755904af6023a298ae04655e956d5",
      "at": "2026-10-17T01:59:18.583Z"
    },
    {
      "id": "thm-likelihood-ratio-gradient-identity-on-fixed-support",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final claim that fixed support is essential is false. For a smooth compactly supported density q, let pθ(x)=q(x−θ) and H≡1. The support moves, yet J(θ)=1 and Eθ[Sθ]=−∫q′=0, so the score formula holds without a boundary correction.",
      "context_sha256": "8c9befb7a3677c57ce2b53bbc6de387f9f2f0234660ab24b5d1ecf7048973c4d",
      "item_sha256": "70d0bab2c259b7b45379364d68d3932fcf51673a4cf9480033229235c9f08dd6",
      "at": "2026-10-17T01:59:49.729Z"
    },
    {
      "id": "thm-spsa-gradient-bias-is-second-order",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal indexing mismatch: [[def-euclidean-inner-product]] defines R^d coordinates by k<d (0,…,d−1), but the estimator and proof use Δ_1,…,Δ_d and indices 1,…,d. Already at d=1, Δ_1 is not a coordinate of the stated R^1, so the estimator and gradient components are ill-typed.",
      "context_sha256": "61087f8c40104d7b58c976de45e7ae5c5a04d6a79cbb667f38883088d92955b1",
      "item_sha256": "436ffa29a23c9072460e168975f8d7144cfad4607d639a01b6471a8bd6de0e52",
      "at": "2026-10-17T01:59:46.460Z"
    },
    {
      "id": "thm-spsa-gradient-has-inverse-step-variance-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 uses F4’s tower property to infer integrability of the weighted moment, but F4 licenses tower only for integrable inputs. That is circular unless the moment is assumed integrable or an extended nonnegative tower rule is supplied.",
      "context_sha256": "350c1c463061823af3009cb4d3d4fd6a5b86d25223c4e8d8d97a1a5cc4c2cfc1",
      "item_sha256": "833e4bff50f1e629199b4adc35909cc148be0440a4a2ee8a9f30bae857228527",
      "at": "2026-10-17T01:59:54.756Z"
    },
    {
      "id": "ex-coupled-differences-reduce-variance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example never requires c>0, though [F1] requires h>0 and both estimates divide by 2c. At c=0 they are undefined. State c>0 to meet the dependency’s hypothesis and make the example valid.",
      "context_sha256": "70ad24c86aac368f3040bc17d85943b76bc2b0a1f2323d7f1ba5aea861382831",
      "item_sha256": "21728a27586317c49430d0146c4a15d5baa278ad2e863da8ca4481eae74f9109",
      "at": "2026-10-17T01:59:42.715Z"
    }
  ]
