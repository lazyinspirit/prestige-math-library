# Step 5 adjudicate: initial, round 1, unit 93

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-93-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u93.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"93",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:def-knot-floer-cobordism-map, 4:lem-knot-floer-cobordism-naturality-and-movie-invariance, 8:def-khovanov-cobordism-map-up-to-sign, 9:lem-barnatan-carter-saito-movie-moves-up-to-sign.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-knot-floer-cobordism-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Positive-rank triangle pieces are never required to use the small pointed Hamiltonian representative with no common intersection of the attaching families. The cited triangle lemma says varying J on the original triple may leave constant triangles nonregular, so these counts are ",
      "context_sha256": "e67abd502f2c03bfe8f3ce20869fa71633672c8d91c80e3298bfbf0efef4c07f",
      "item_sha256": "361f8b1b4138e0c5e35a6d5b39db520aabaa7d5fda9a5ec6528d0315753bfb25",
      "at": "2026-10-21T16:09:35.249Z"
    },
    {
      "id": "lem-knot-floer-cobordism-naturality-and-movie-invariance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Without requiring s1|Y_mid=s2|Y_mid, the composition is untyped: the W1 map lands in the s1|Y_mid sector, while W2's domain is the s2|Y_mid sector. An empty extension sum does not define that composition.",
      "context_sha256": "9baf91b4df2cc6e02012f5c20b87e51b0ee10e5d0b29d69754f7990121baca88",
      "item_sha256": "10bce5742005ae17b0061e7b04d21e855464fc67f3c71129a7022cf981babef5",
      "at": "2026-10-21T16:06:52.167Z"
    },
    {
      "id": "def-khovanov-cobordism-map-up-to-sign",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited generic-movie definition covers cobordisms whose endpoints are knots. This item uses it for arbitrary oriented links L₀ and L₁, so its setup exceeds the supplied dependency interface.",
      "context_sha256": "636ba19c8d3d37b12eade0c8dc360569edad563a80602162a84f7804816be158",
      "item_sha256": "353e978fd431cd13c882e702cdb2535bd818cca8d47d9c1bbccf02627e8af843",
      "at": "2026-10-21T16:05:38.805Z"
    },
    {
      "id": "lem-barnatan-carter-saito-movie-moves-up-to-sign",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F7 misstates its dependency: def-barnatan-open-tangle-cobordism-complexes defines the open category and planar totalization, but no formal crossing cubes. Steps 1.1 and 3.1 rely on those cubes and signs to identify the movie maps; the cited interface does not supply them.",
      "context_sha256": "8f13259f7ef4dcc0a5cd41e6a3527f2e1c7311d6d12c9c1a06b14dea3934158c",
      "item_sha256": "6b747ba0177d332bc450fff41363e32e561f1cddb02d068fa8333cf2d2358c1f",
      "at": "2026-10-21T16:09:32.282Z"
    }
  ]
