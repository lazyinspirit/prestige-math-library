# Step 5 adjudicate: initial, round 1, unit 52

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-52-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u52.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"52",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:op-ip-neural-operator-sample-complexity-for-inverse-maps, 0:ex-ip-neural-inverse-finite-samples-need-class-control, 0:ex-ip-neural-inverse-mesh-truncation-modulus.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "op-ip-neural-operator-sample-complexity-for-inverse-maps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For S=1 the architecture class is empty: even with one channel and one layer, the input lift, layer weights and bias, and output map require at least six scalar parameters. Thus no selector into that class exists, contradicting the stated assumption for every S≥1.",
      "context_sha256": "17e5dc009b30afc33c359245b4e5988628633bd29fa0fb82ec7b38ed3a8b3627",
      "item_sha256": "9c00f5e52144a11c2a23dffc7fd504378e6dda7142b0e639f2d1c55d14e86af6",
      "at": "2026-10-21T14:56:22.369Z"
    },
    {
      "id": "ex-ip-neural-inverse-finite-samples-need-class-control",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims a result about Lipschitz inverse maps, but the example only constructs arbitrary 1-Lipschitz functions [0,1]→ℝ and gives no condition making them inverse maps.",
      "context_sha256": "530731ea5596564a15dbadf60d5574fa1b8fcf0ae97b86ec80adbaa29a6f9e3a",
      "item_sha256": "c74de78460e0143c85e7d593d9882598da50263cbd99a160389c734dd29c9b32",
      "at": "2026-10-21T14:57:00.714Z"
    },
    {
      "id": "ex-ip-neural-inverse-mesh-truncation-modulus",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement only assumes m≥1, so noninteger m is allowed. For m=1.5, p=s=R=1, θ₂=1/2 and all other coordinates zero, η=0, the error is 1/2 but the claimed bound is 1/2.5. Require m∈N or adjust the tail bound.",
      "context_sha256": "c60dbf7825f944534221141e1472c237a6fc4ba67c539db8348c673e8bf6768a",
      "item_sha256": "960f80d01c2a7fa9bfb6bda8c6c4a97b564f2ccb0e7a9abd13fa2f2dbf2da6cd",
      "at": "2026-10-21T14:57:00.435Z"
    }
  ]
