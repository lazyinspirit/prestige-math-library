# Step 5 adjudicate: initial, round 1, unit 73

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-73-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u73.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"73",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-multicusped-dehn-filling, 2:cex-knot-kt-19-boundary-case, 3:thm-small-augmented-holonomy-deformations-have-smooth-geometric-fillings, 5:lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup, 7:thm-thurston-hyperbolic-dehn-filling, 7:ex-knot-kt-19-worked-cases.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-multicusped-dehn-filling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Thurston’s cited generalized surgery invariant is defined only up to simultaneous sign, so its parameter space identifies g with −g. The item asserts unquotiented ℝ²∪{∞} without specifying a sign choice.",
      "context_sha256": "a6fa0fdddddb65c6b08f3e6d30a640942737de308272d3487d045c748be04360",
      "item_sha256": "1f988136ba08fd4dfee8f24f9902369d76196c165c076d79123f8e6bf5676cae",
      "at": "2026-10-21T15:27:20.676Z"
    },
    {
      "id": "cex-knot-kt-19-boundary-case",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 drops the interface’s realization condition: the angle and core direction are specified only for a realized generalized parameter. No deformation realizing g=(2,0) is given, so step 2.1’s cone-angle and orbifold conclusion is unlicensed.",
      "context_sha256": "5ecc90c8b3795cf68c3cdb487ffa6ea70ac61e092865dbe0022a3fa9d911dfc3",
      "item_sha256": "c547b81244195f78fb7d0842fa01eb82095f5dbfac3b8c3d58f06f1be5b789f2",
      "at": "2026-10-21T15:28:19.333Z"
    },
    {
      "id": "thm-small-augmented-holonomy-deformations-have-smooth-geometric-fillings",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The holonomy interface gives conjugacy classes and logarithms, but does not supply the holomorphic representative family or affine cusp translations asserted in F1, including b_i/a_i=τ_i on u_i=0. Steps 1.2 and 2.2 rely on these unlicensed facts for the end map and its equivarian",
      "context_sha256": "0367e013b0e70130857250eec23a25ef379362b13c645e86e182df263a91183f",
      "item_sha256": "2d9e04cb14689cc1a290e18b72e0664cdbd108b9d83cc8a32198eaf15ebd271b",
      "at": "2026-10-21T15:28:24.732Z"
    },
    {
      "id": "lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4’s supplied interfaces do not establish proper discontinuity of the deck action. Steps 2.1, 3.1, and 4.1 rely on it for cocompactness arguments, excluding parabolics, and discreteness of the centralizer’s translation image.",
      "context_sha256": "909c2ecd9311885fc444409c7563390e3a4bcd906d9802a06a1d860dbaff6b80",
      "item_sha256": "66568faf2af5bed25bcff1286f396643d5fd41286cb7f42ac1c8d897cbbe1848",
      "at": "2026-10-21T15:28:06.717Z"
    },
    {
      "id": "thm-thurston-hyperbolic-dehn-filling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal gap: [[lem-dehn-filling-deformation-and-completeness]] only guarantees a complete structure if the nearby filling data satisfy the holonomy equations. It does not establish solutions for every nearby primitive tuple, as F1 and step 1.1 claim.",
      "context_sha256": "a37a7ef180ea2a143c6c76a6e62c391bf8cd56d51d5a3b8a8b29dd2cfc8aabad",
      "item_sha256": "3de7db3688f34dc8ae495976ee59945c12463a2e946693b12819cefd8cdc138b",
      "at": "2026-10-21T15:28:16.581Z"
    },
    {
      "id": "ex-knot-kt-19-worked-cases",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 is inaccurately restated: its interface assumes ACω and requires a closed, connected, orientable 3-manifold, but the item states neither condition in F5. The restatement claims more than the cited dependency supplies.",
      "context_sha256": "face7b6107719eedb4bc429833334b671382a90a1ce390e476243aa52666f26b",
      "item_sha256": "08db1b1409b0d300628729b2c97d9f63372a826dc410945cfefb8b1499fa4611",
      "at": "2026-10-21T15:33:20.384Z"
    }
  ]
