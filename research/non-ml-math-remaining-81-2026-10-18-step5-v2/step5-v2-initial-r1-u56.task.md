# Step 5 adjudicate: initial, round 1, unit 56

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-56-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u56.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"56",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form, 3:lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids, 7:rem-finite-quiver-hall-counts-and-dt-bps-interpretation, 7:ex-a2-quiver-hall-wall-crossing-pentagon.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The unqualified title claims finitarity over any field. For the one-vertex quiver and an infinite field K, Hom(K,K) is infinite; the proof establishes finitarity only when K=F_q.",
      "context_sha256": "5236d4071c0488cb047ad966acdae4b3355c300a715851d2849efe3a769130a1",
      "item_sha256": "5a674444124ba27251d7559793377e3c7592c37f59f9d374fe63449f316f9e2b",
      "at": "2026-10-18T04:38:33.059Z"
    },
    {
      "id": "lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "At d=0, the geometric semistability condition is vacuous, so the quotient groupoid has one object. The dependency defines semistability only for nonzero representations, leaving the claimed finite-field groupoid without that object. Exclude d=0 or define zero as semistable.",
      "context_sha256": "e088c0eb5998362fcb9362322c4fb4733a332d41124a782e9549aa95fa0c5b5f",
      "item_sha256": "c9d18be760514475097472a58df9befd4627440ebabf8896f1ff1be9162872ec",
      "at": "2026-10-18T04:38:32.080Z"
    },
    {
      "id": "rem-finite-quiver-hall-counts-and-dt-bps-interpretation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It says the wall crossing is “proved on this page,” but this item is only a remark and cites the separate wall-crossing theorem. The item contains no such proof; replace the self-reference with a reference to that theorem.",
      "context_sha256": "130c1faa7a8ed75ed149c073519e77b2bac98ff99a4c6768b53de2a63a89143f",
      "item_sha256": "b5a979ce4ff77d66da254a268976d5edc3b4d9efdd583770a49ce4ffc77b65e3",
      "at": "2026-10-18T04:39:24.280Z"
    },
    {
      "id": "ex-a2-quiver-hall-wall-crossing-pentagon",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 is not licensed by the supplied J interface, which gives coefficient t^χ f(M)/|Aut(M)|. The stated J(κ_M)=t^χ x^d omits |Aut(M)| unless κ_M is an Aut-weighted delta, which the item never defines; for an isoclass indicator it is false.",
      "context_sha256": "e74c8403cf5fb61e6b264e28b4a149d22833e3467bb5519739ad354ac1737e08",
      "item_sha256": "731c2e6d4ede5dd7b51fd9a48db260358089cb30c2a7bb67e51d6c91213941b8",
      "at": "2026-10-18T04:39:58.710Z"
    }
  ]
