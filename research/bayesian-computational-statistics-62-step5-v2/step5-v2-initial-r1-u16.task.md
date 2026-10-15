# Step 5 adjudicate: initial, round 1, unit 16

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-16-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u16.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"16",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-gaussian-linear-and-quadratic-statistic-tail, 0:lem-independent-observation-posterior-denominator-lower-bound, 0:lem-tight-borel-gaussian-law-has-separable-support, 0:ex-degenerate-gp-phi-does-not-bound-unknown-scale-local-mass, 1:lem-log-gaussian-density-supnorm-controls-local-likelihood-distances, 1:ex-l2-small-log-density-far-in-hellinger.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-gaussian-linear-and-quadratic-statistic-tail",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates [[thm-linear-change-of-variables-for-lebesgue-measure]]: its interface covers linear maps, not translations. Steps 1.1–1.2 translate the Gaussian integral after completing the square, which the cited dependency does not license.",
      "context_sha256": "546c1ff6c466f35781a913010eb8a6400036b672d77240d94ef52e2f089ea030",
      "item_sha256": "a4dcc834fa5c24e65fdaa8c2720108f0d70244d9dea3a867011920ce51122016",
      "at": "2026-10-15T16:10:04.518Z"
    },
    {
      "id": "lem-independent-observation-posterior-denominator-lower-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "As written, the bound is (E log LR)^2, not E[(log LR)^2], so step 1.2 lacks variance control. For n=1, ε=10, C=0, P0(a)=.03 and Q(a)=.03e^-300 (with complementary masses), KL≈8.97 and (E log LR)^2≈80.5≤100, yet P(D≥e^-200)=.97<.99.",
      "context_sha256": "ddb7d695b4e4356c4d984f00877fad18c87def0967364e5652b12b3374b9cc72",
      "item_sha256": "696b45c9381a7e6aa21b432c11eda935408a1030c640a53eb61d2bcd7866fb41",
      "at": "2026-10-15T16:10:28.107Z"
    },
    {
      "id": "lem-tight-borel-gaussian-law-has-separable-support",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 says the same map W is E-valued, but μ(E)=1 only guarantees this almost surely; W may take values outside E on a null set. A null-set modification is needed before treating W as an E-valued random element.",
      "context_sha256": "f6c2d3f5d8270c2c66f46e7ce2c5c611978150c8d8e28e7d5af934bffe3d0218",
      "item_sha256": "0b6df4954778e5b8475870199966bcd43fec15e055a4717e3893fb2f5620de70",
      "at": "2026-10-15T16:10:22.249Z"
    },
    {
      "id": "ex-degenerate-gp-phi-does-not-bound-unknown-scale-local-mass",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Verification 2.1 claims a locally bounded scale density admits separate parametric contraction, but gives no likelihood or identifiability assumptions. If scale affects only σW, then W≡0 carries no scale information. The mass calculation itself is sound.",
      "context_sha256": "c08085264147ac34a22560904fb9b4f4ab8188a5e31a50d0533b3e84b748fcaf",
      "item_sha256": "a14cb4755b2be983e4827c2dc08c130f8f89fed0596eccc3043a25af7a5fb802",
      "at": "2026-10-15T16:10:22.256Z"
    },
    {
      "id": "lem-log-gaussian-density-supnorm-controls-local-likelihood-distances",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F3] restates the MVT for a merely “differentiable” function, omitting continuity on the closed interval. The supplied interface requires that hypothesis and explicitly gives a counterexample without it; this is an inaccurate dependency restatement.",
      "context_sha256": "8f1da0bd7f3372237659ece21f8971cbfcbe06581b29d688a503678cb608afcb",
      "item_sha256": "d2da889062be74f47bb895b206b9ef896a303d1a9e8db031c07866943500a23e",
      "at": "2026-10-15T16:10:08.130Z"
    },
    {
      "id": "ex-l2-small-log-density-far-in-hellinger",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement does not restrict k to positive integers. By convention indices include 0, but k^{-4} and A_0 are undefined, so the stated family and formula for p_k are not defined at k=0. Specify k≥1.",
      "context_sha256": "5a2d2a5492d075ab5b26d3d033f930d333e0f9a884c999e18a97332153665c4c",
      "item_sha256": "b3d4c0f712a151d6b3d0b8c2076a0bd38e0567beec13db96204811f6bb31cc1a",
      "at": "2026-10-15T16:10:12.010Z"
    }
  ]
