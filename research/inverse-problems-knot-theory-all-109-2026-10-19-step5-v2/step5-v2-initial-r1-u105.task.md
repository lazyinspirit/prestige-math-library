# Step 5 adjudicate: initial, round 1, unit 105

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-105-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u105.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"105",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-disconnected-projection-components-separated-by-jordan-curve, 1:lem-disconnected-link-diagram-represents-a-split-link, 4:thm-reduced-alternating-diagram-minimizes-crossings.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-disconnected-projection-components-separated-by-jordan-curve",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its dependency: the supplied lemma gives the bounded planar Jordan region as a disk, but does not supply two disk sides on S² or their separation. The cited inference is unsupported.",
      "context_sha256": "fde14883e3cb6bd4eaeac37eddaf8e8f697c6676dca1f8747458c21f754059e8",
      "item_sha256": "cbe60b9a54caaed9d0e1fcde33ee3df9ffdadffcaa5481903892c45c5a39a69a",
      "at": "2026-10-21T16:28:54.538Z"
    },
    {
      "id": "lem-disconnected-link-diagram-represents-a-split-link",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3’s supplied interface guarantees only a simple closed separator; it does not license the claimed regular-neighborhood construction or smoothness. The proof needs smoothness to apply F4 and obtain the smooth separating sphere, so that step is unsupported.",
      "context_sha256": "d79f00d3f7009122e1c3addb17d78443ea734fd24560dda4483dd0f2322024fd",
      "item_sha256": "b4f121288e394ca31f5adb2d5f264e18b50b0aa28c9de88c1aa522ddbc65728b",
      "at": "2026-10-21T16:30:11.317Z"
    },
    {
      "id": "thm-reduced-alternating-diagram-minimizes-crossings",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Connectedness convention varies ([MathWorld](https://mathworld.wolfram.com/ConnectedGraph.html)); the supplied definition does not exclude empty D. If the empty graph counts as connected, step 1's nonemptiness claim fails, so step 2 applies F5 outside its nonempty domain.",
      "context_sha256": "4a90559f2b3af5f905cc75fe915f64260186839d64e2c43718dd1c9ab7247682",
      "item_sha256": "5b7341edf577114f6af23064a7269e642dfd30fae0d97bb40e99a37fa9d7b591",
      "at": "2026-10-21T16:30:16.789Z"
    }
  ]
