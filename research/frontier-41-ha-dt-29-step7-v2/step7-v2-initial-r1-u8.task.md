# Step 7 adjudicate: initial, round 1, unit 8

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"8",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-local-fixed-point-index, 0:lem-a-closed-discrete-subset-of-a-compact-space-is-finite, 1:lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover, 5:lem-the-local-intersection-sign-of-the-graph-and-diagonal, 6:rem-isolated-does-not-imply-nondegenerate, 7:def-algebraic-lefschetz-number, 9:lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace, 12:cor-lefschetz-number-of-the-identity-is-the-euler-characteristic.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-local-fixed-point-index",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The chart is not required to belong to the smooth atlas. Under the cited chart definition it may be merely a homeomorphism, so the normalized sphere map need not be smooth and radial interpolation need not satisfy the cited smooth-homotopy theorem.",
      "context_sha256": "83af43b137c8d49bf3b11d9827ddd6a34efecd9067d8b9426c2b5e49b771fde0",
      "item_sha256": "0b1686edc8b4b6ae9759db0577822551f64f467056b5fc49cb12c630baff2ce0",
      "at": "2026-10-06T06:55:33.891Z"
    },
    {
      "id": "lem-a-closed-discrete-subset-of-a-compact-space-is-finite",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] inaccurately restates compactness: for X=∅, the empty open cover has no members U_0,…,U_n. The dependency explicitly allows an empty subcover, but [F1] omits that case.",
      "context_sha256": "ab7720d5c01aceecce02eba25ba2799874db00d8516b2c9efcc70ed558e840da",
      "item_sha256": "366dafa094f90b57e7c0535fb5a1c2e0343791d35efeb5d0c7f7c2319cdbbe75",
      "at": "2026-10-06T06:54:59.973Z"
    },
    {
      "id": "lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The orientable-case remark fails for M=∅, explicitly allowed by the dependency interface: its orientation cover is empty and connected, and f∘π has exactly one lift, not four. The claim requires M≠∅.",
      "context_sha256": "465abfe6ed150183f665dc5d6c5154c779b2fd3e769581cb2fe29bc60849bca7",
      "item_sha256": "68d43075403137b3ea11b9406dae70d9bc6529ed010f1974d599ef195177e454",
      "at": "2026-10-06T06:55:21.266Z"
    },
    {
      "id": "lem-the-local-intersection-sign-of-the-graph-and-diagonal",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title claims the local sign equals det(I-Df), rather than sign det(I-Df). For f(z)=z³ on S¹, all fixed points are nondegenerate, with det(I-Df)=-2 but local intersection sign -1. The statement and proof establish only the sign formula.",
      "context_sha256": "4d1834b0afe05f9bfffaebad739fe39a617ea59ffe171e33496292cdc16dc7e7",
      "item_sha256": "5f016076f473cf3e3c696d1f53998ae883974731b8a07749d0e5b9ae1b035d12",
      "at": "2026-10-06T06:55:17.104Z"
    },
    {
      "id": "rem-isolated-does-not-imply-nondegenerate",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The generic perturbation claim needs a quadratic or holomorphic restriction. Arbitrarily small smooth perturbations f_t(z)=z+z²+t·conj(z), t>0, have four nondegenerate fixed points with indices -1,+1,+1,+1; this configuration persists under small perturbations.",
      "context_sha256": "e4b6ae2d5cae50effc4dc8dc3606462ae5f0c378654a641311ec1b5755b2eff9",
      "item_sha256": "7960781baff5b893f0e37f849591f1982c8c23a6b1f6b35a032ecdda0a0b3f4c",
      "at": "2026-10-06T06:56:01.947Z"
    },
    {
      "id": "def-algebraic-lefschetz-number",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The geometric-comparison remark claims equality for maps with isolated fixed points without requiring smoothness or n≥1. For M a point and f=id, the fixed point is isolated but I(f) is undefined under the supplied interface; the cited theorem excludes this case.",
      "context_sha256": "340c36b92e5abb71eaf0ac66d0b4ede94e679e3a6d1ea6505c58838835b0e671",
      "item_sha256": "1d6bfb5235605403ef7f7152eab7cebc420974733cc4b0a757920e55b5f4d883",
      "at": "2026-10-06T06:55:28.896Z"
    },
    {
      "id": "lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 invokes a relative eigenspace/descent version of F1, but its supplied interface covers only absolute cohomology. No relative descent argument is given, so the supported class u_Delta is not established by the cited facts.",
      "context_sha256": "1dea9c27a73671d93d8f17905b5c4b0b4eea9841806ebed009a02f323efe8ec8",
      "item_sha256": "533a9038ad6032b4e223b0e730a3db31def2acd4e2c846ccc360ec5d18e259d7",
      "at": "2026-10-06T06:55:53.760Z"
    },
    {
      "id": "cor-lefschetz-number-of-the-identity-is-the-euler-characteristic",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 fails for the empty n-manifold with n≥1: the identity has no fixed points, and the supplied geometric definition gives I(id)=0. The claim that its fixed points are non-isolated and its geometric index sum undefined requires M≠∅.",
      "context_sha256": "f0294de8cc5cf6ed84dd30574c0bf84a4a90664c97ce6cf90d087ad26a9303f2",
      "item_sha256": "d2ddf56142b572e7101e246cf9152a6a0971d7c0c3043073de8bedd72dc0daba",
      "at": "2026-10-06T06:55:24.665Z"
    }
  ]
