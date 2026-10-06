# Step 7 adjudicate: initial, round 1, unit 20

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u20.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"20",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:prop-characteristics-for-a-one-dimensional-scalar-conservation-law, 3:lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds, 4:lem-viscous-scalar-laws-contract-spatial-translates-in-lone, 5:cor-global-lone-contraction-from-the-local-kruzhkov-estimate, 6:cor-linfinity-maximum-bound-for-scalar-entropy-solutions, 7:thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension, 7:cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux, 7:ex-burgers-shock-riemann-solution.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "prop-characteristics-for-a-one-dimensional-scalar-conservation-law",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] inaccurately restates the regularity dependencies: C² regularity guarantees only continuity of second derivatives and of f''. It does not imply that expressions involving p_t, p_x and f''(u) are C¹, as claimed.",
      "context_sha256": "47c3c7c7c51ab23de954b3ddd4d28bdc8fb6492e833cd3aff97be1fdbaab2387",
      "item_sha256": "8d763315e0b37a79610fdd76d4cec41221bc223d06709a9a83e98df80f66c7be",
      "at": "2026-10-06T02:20:52.680Z"
    },
    {
      "id": "lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 restates the cited integration-by-parts theorem as applying on multidimensional balls, but its interface covers only one-dimensional Riemann integrals. The spatial integrations in steps 1.2–1.3 require an unestablished extension.",
      "context_sha256": "c7509a79fe99725c985c0204871dd5df01c8c89738e13829a438357e87a3ac3a",
      "item_sha256": "1375ab01db8c9d1957ba41df2fe30b61e32cd22f9b0d66ae2f1a3f7ee03c2554",
      "at": "2026-10-06T02:21:44.336Z"
    },
    {
      "id": "lem-viscous-scalar-laws-contract-spatial-translates-in-lone",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1's first equality is false: the bracket already equals −w div a, but the outside term subtracts wη′ div a again. This double-counts the cancellation, so the displayed middle expression does not yield the asserted modulus balance.",
      "context_sha256": "c9a9000754558e3a0f9f5dda53690fd43b4118104e6215cd9ca200392bd43808",
      "item_sha256": "b360951d16e93c5f6460ebe1a46e0a535bb0c65a9d74d274b1b2bb6575552a36",
      "at": "2026-10-06T02:21:47.537Z"
    },
    {
      "id": "cor-global-lone-contraction-from-the-local-kruzhkov-estimate",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 weakens the cited theorem’s hypothesis: Lipschitz continuity with constant L on the common essential range does not imply the required bound for all a,b in [-M,M]. Thus step 1.1 is not licensed; using an interval Lipschitz constant would repair it.",
      "context_sha256": "a0c993b70b238e559652274bde29f020ccdf7f1d549e4357f87328517af7c278",
      "item_sha256": "6ab2c37419b6a1fef691d346b6a82904ba35c1057eef4c80203f000a6157c94e",
      "at": "2026-10-06T02:22:29.469Z"
    },
    {
      "id": "cor-linfinity-maximum-bound-for-scalar-entropy-solutions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] inaccurately restates its dependency: the supplied definition concerns the essential supremum of |f|, not signed essential extrema, and explicitly defers attainment of the least bound to a later proposition. Step 1.1 relies on this unsupported restatement.",
      "context_sha256": "91c2e86367c50cb88c9f5e332c5e65df59430bd9af731e78b1440fe943561f17",
      "item_sha256": "a9588e3b4003fa0aedca2aff93614db8e334159425cbdfc0d1ad2b117e0da176",
      "at": "2026-10-06T02:23:54.988Z"
    },
    {
      "id": "thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 asserts a common local time modulus not supplied by its dependency interfaces or proved here. Step 2.1 relies on it to upgrade space–time L1 convergence to uniform-in-time convergence; continuity of the limit alone does not justify that upgrade.",
      "context_sha256": "415ae81028ec3da59498e86c76ddc777291d458ed700c71046e31762757bc438",
      "item_sha256": "7600e19b86b29775960dec7d47b4d543dfd0e49747071285f54437c04a362d09",
      "at": "2026-10-06T02:23:37.904Z"
    },
    {
      "id": "cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 asserts that the concave-hull composite is the entropy solution. F2 and step 2.1 only rule out the single shock; the cited definitions establish neither the hull construction nor its entropy admissibility.",
      "context_sha256": "5ff49728f26c50210dab3815ffae6ad5110bedd52614a96e894bda6b5f7b9e07",
      "item_sha256": "c3ca0de47e68b4480b338add25afb168d094a73327b3ce242095fb2b099b0ea9",
      "at": "2026-10-06T02:25:16.507Z"
    },
    {
      "id": "ex-burgers-shock-riemann-solution",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 omits the weak-solution hypothesis required for Rankine–Hugoniot. A stationary Burgers jump from 1 to 0 has s[u]=0 but [f]=-1/2. Step 1.1 invokes this condition before establishing that the profile is a weak solution.",
      "context_sha256": "6aefe9f9ed9b4d8a94c1e2c66eab0b0d19202b5a09630ae4cb4c9d3a94d7a41b",
      "item_sha256": "80f38d076e6c97a3b9b7a245d0f1a4f474c137bd3e2adddadd78dca726c47c56",
      "at": "2026-10-06T02:24:19.836Z"
    }
  ]
