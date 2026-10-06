# Step 7 adjudicate: initial, round 1, unit 15

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u15.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"15",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 6:prop-h-cobordisms-admit-adapted-ordered-handle-decompositions, 7:prop-relative-handle-chain-complex-of-a-cobordism, 9:ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism, 13:def-middle-handle-intersection-matrix-of-an-h-cobordism, 16:lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically, 19:cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold, 20:cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "prop-h-cobordisms-admit-adapted-ordered-handle-decompositions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 applies F5 to the self-indexed function g, but F5 requires an excellent Morse function. When multiple critical points have the same index, g gives them equal values and is not excellent; this invocation lacks its required hypothesis.",
      "context_sha256": "28a6f5c857ed50c2ca272ed0a72879978281ca78fbeb5a57bdc5a7a84bebb33c",
      "item_sha256": "f25de4ee470d76c176d0453e65f2dc90d007f1c79de19e1d4e33eb984efe0c9e",
      "at": "2026-10-06T06:58:59.928Z"
    },
    {
      "id": "prop-relative-handle-chain-complex-of-a-cobordism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The middle-range identification with the cited matrix definition omits its connected outgoing-boundary hypothesis. The statement allows disconnected cobordisms and stages, so that identification invokes the definition outside its supplied domain.",
      "context_sha256": "272f103891a7ef445b170393b0544ef5c14057214f413be06d4057af434594eb",
      "item_sha256": "ae2d4847d15755377b91f347f544835fa6b1d0343686a31d543abd6387d91ec9",
      "at": "2026-10-06T06:59:34.191Z"
    },
    {
      "id": "ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 omits the matrix definition’s connected outgoing boundary hypothesis. Take M₀=S³⊔S³ and k=1, with a local cancelling pair on one component: the claimed matrix of the full presentation is outside the supplied definition.",
      "context_sha256": "6d85dd38285b82681c06b39a1a9981957b3e267f620a3eb0529fbcbf0319b449",
      "item_sha256": "0397e424e41aa5f8192f4cb505cf40ecb17f8d8fcb30c2409541af1e9b4bbe9a",
      "at": "2026-10-06T06:59:36.041Z"
    },
    {
      "id": "def-middle-handle-intersection-matrix-of-an-h-cobordism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Presentation changes also require stabilization: S^n×I admits both the empty presentation and one with a cancelling k/(k+1) pair, giving matrices of sizes 0 and 1. Slides, sign changes and renumbering preserve size, so the claimed dependence is false.",
      "context_sha256": "6c86e25b8238ce1e9931f63af8e6fa7475824bdc83e0e200853c52c688009710",
      "item_sha256": "4b9267e96a91053f8807a7f7a2fa7e4596832215500ce62861cfa7a121eae342",
      "at": "2026-10-06T06:59:13.035Z"
    },
    {
      "id": "lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately drops the dependency’s dimension ≥2 hypothesis. On a closed connected circle, removing two points can separate two other points, so no joining arc avoids that finite set. The stated unrestricted restatement is false.",
      "context_sha256": "0d274f2cd61564c87c0ca3c628c7f6faa08ffa7ae3f68d26f3306a004638e84f",
      "item_sha256": "417ae72c5462e94f562d58055c5ddf7ae2b87b97c3f9929d82c2b95ad8ded5b5",
      "at": "2026-10-06T06:59:20.168Z"
    },
    {
      "id": "cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 overstates its dependency: the orientability criterion is supplied for CW or admissible bases B, whereas F2 asserts it for every numerable bundle over arbitrary B. Step 1.2 validates the application to X but does not correct this restatement.",
      "context_sha256": "2dc2e1465251ebede2f805f82b90cd35ecc28de4cd3d8db2ab38558cc997af23",
      "item_sha256": "5c10caf35ea5f3eab3890f9d023fde15b6ab20d3be3346f2ab419d6c47dcff9f",
      "at": "2026-10-06T06:59:35.714Z"
    },
    {
      "id": "cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 attributes the boundary-dimension ≥5 restriction to F3, but F3 defines h-cobordisms without that restriction; its dependency allows dim W≥2. The cited fact does not license this inference.",
      "context_sha256": "0d8103ce4efb05ad03aca5880a2aede5622652fff3e95ced96090917901d48a8",
      "item_sha256": "289a11cacb011f7feac71ef56e8d3b2c8c50c887421bed5d4305c10e27906df1",
      "at": "2026-10-06T06:59:31.023Z"
    }
  ]
