# Step 7 adjudicate: initial, round 1, unit 14

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u14.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"14",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-whitney-circle-for-a-pair-of-intersection-points, 0:lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points, 0:lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball, 0:lem-metastable-embedding-for-maps-from-a-compact-manifold, 0:rem-nonsimply-connected-whitney-tricks-carry-group-ring-and-whitney-disk-obstructions, 1:lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle, 1:lem-opposite-local-signs-give-the-compatible-whitney-circle-framing, 2:def-whitney-disk-and-clean-framed-whitney-disk, 3:lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range, 8:prop-surgery-below-the-middle-dimension-improves-connectivity.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-whitney-circle-for-a-pair-of-intersection-points",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed equivalence omits avoidance of other intersection points. In R², take A as the x-axis and B as circles of radii 1 and 1/2. The outer diameter plus outer semicircle satisfies the equivalent description but crosses the inner circle.",
      "context_sha256": "65808aee50346e06e3c0e987cb12551c1c25634d11a0fce09884bd774ba1fb5d",
      "item_sha256": "8ae507b222d54d6f411751d1a94ad1a8a449c6c0876b0a484cc9df7346933640",
      "at": "2026-10-06T06:58:33.387Z"
    },
    {
      "id": "lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 inaccurately restates the dependencies: an immersion need not be a Riemannian isometry onto its image. For example, e(t)=(cos t,sin t) is an immersion but is not injective. The supplied isometry definition requires a diffeomorphism.",
      "context_sha256": "04dfcf4307f54170af3544fb420558da52c28df755dc6177fe0586b3912fbdb4",
      "item_sha256": "ba48f58902186718f3376571f1700a0e91509ae39b2e554dd39e230b0ec3f067",
      "at": "2026-10-06T06:58:09.205Z"
    },
    {
      "id": "lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] asserts its transfer sequence for an arbitrary covering, but exactness requires a two-sheeted cover. For the identity covering of a point, there are no two distinct lifts and the displayed short exact sequence cannot exist.",
      "context_sha256": "aa69463e1235d7c150542d385a574ca541693f5fce267947649a0f4ddd6867dd",
      "item_sha256": "54204b6238395fb2ad61810e08971fde3c9989c9e735ac29258970ad34d401a9",
      "at": "2026-10-06T06:58:19.524Z"
    },
    {
      "id": "lem-metastable-embedding-for-maps-from-a-compact-manifold",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 omits an essential dependency hypothesis: the supplied ambient tubular-neighbourhood theorem requires a closed embedded submanifold, whereas F1 restates it for any smooth embedded submanifold.",
      "context_sha256": "9f7111985d16c1d3a5ebd301c5cbfd298b040505234c5107e5004475b705de77",
      "item_sha256": "8b884d764bf2e7cd4e612435de15920e13918246e631a34ec659b0ece5fc35d6",
      "at": "2026-10-06T06:58:37.867Z"
    },
    {
      "id": "rem-nonsimply-connected-whitney-tricks-carry-group-ring-and-whitney-disk-obstructions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (iv) incorrectly makes complement π1-injectivity necessary. A local Whitney pair beside an unknotted S³ in X=S¹×R⁴ has a clean disk, although the complement meridian is nontrivial and maps to 1 in π1(X).",
      "context_sha256": "a845ae0d285c7a4d091b883f8f7394202cde93b4904370e8ec886280bb28c086",
      "item_sha256": "6d209809e5f68be627ea1c8eb4292d6ca2b94b3d76b56be98c088a775f6d3b99",
      "at": "2026-10-06T06:58:57.423Z"
    },
    {
      "id": "lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (iii) invokes signed intersection coefficients I(p),I(q) in Z[π1(X)] without orienting X,A,B. The cited intersection-sign interface requires all three to be oriented; nonorientable cases need orientation data or twisted coefficients absent here.",
      "context_sha256": "f88965cd632407be093df6fc90b0359daeae740ac85fdc37248248ad47951c12",
      "item_sha256": "6c4488f69108748a182b405b2c4fb2229ee8b9cb72230cd5ad75b157926d4a17",
      "at": "2026-10-06T06:58:34.767Z"
    },
    {
      "id": "lem-opposite-local-signs-give-the-compatible-whitney-circle-framing",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 omits the supplier’s closed-submanifold hypothesis. Step 4.1 also applies that theorem to a disk with boundary and corners, outside its supplied interface, without extending the disk to a suitable smooth submanifold.",
      "context_sha256": "660d24f3e124bb3ce8211eb8ab0a1e9ff44b8aacef440a98c2145b449ab64312",
      "item_sha256": "04173eebccedd760a10c69c5280a2751cb7df224bd55f5df9608afdc5007847f",
      "at": "2026-10-06T06:58:36.000Z"
    },
    {
      "id": "def-whitney-disk-and-clean-framed-whitney-disk",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Precompose a clean disk with a smooth self-map constant on an interior patch and equal to the identity near the boundary. This satisfies the Whitney-disk definition but has rank-zero differential there, so the asserted rank-(m−2) normal bundle is undefined.",
      "context_sha256": "5cd291424c7be76cf22a47ede4ad13bf0db26e641076e4e758173b18aecd1cbc",
      "item_sha256": "41a5389f61bb4199814f038d4c397c2d0e7026eca3a527e4fcbae1146c12e312",
      "at": "2026-10-06T06:58:40.093Z"
    },
    {
      "id": "lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 attributes explicit radial complement transport to the Stiefel lemma, but its supplied interface asserts only nonemptiness, path connectivity and simple connectivity. Step 3.1 relies on this unsupported strengthening to trivialize the disk normal bundle.",
      "context_sha256": "0457951def13cb1de93278ed90fabd3f9da8f8101ce2335142e2766874f07c90",
      "item_sha256": "c3f59369116de2539c4f09b70ccc9cef1f69970833431aec206ad473f3a194ba",
      "at": "2026-10-06T06:58:38.217Z"
    },
    {
      "id": "prop-surgery-below-the-middle-dimension-improves-connectivity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F13 omits the cited Hurewicz theorem’s restriction n≥2. For the connected CW pair (S¹∨S¹,*), the subspace is simply connected, but the first relative homotopy is F₂, whereas H₁ is Z²; they do not agree.",
      "context_sha256": "ad0e3c22e7abd5194dde50e31783c1d87e364499b71c6d666c3b0ebc53c7d7b1",
      "item_sha256": "259d1e92dd78e51c7e7b928c534aed7c9c474dbae07299e33a86b96c3b06b42b",
      "at": "2026-10-06T06:58:51.231Z"
    }
  ]
