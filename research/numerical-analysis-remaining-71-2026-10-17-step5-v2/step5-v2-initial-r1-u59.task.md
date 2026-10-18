# Step 5 adjudicate: initial, round 1, unit 59

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-59-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u59.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"59",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:lem-orthogonal-fv-compressible-viscous-flux-consistency, 5:thm-orthogonal-fv-compressible-viscous-entropy-dissipation, 5:ex-sbp-inviscid-versus-viscous-entropy-budget, 7:thm-fixed-mesh-forward-euler-error-for-compressible-sbp.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-orthogonal-fv-compressible-viscous-flux-consistency",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 needs v∈C³(G), but neither supplied dependency interface asserts that regularity. F2 identifies the viscous block and flux; it does not license the O(h²) centered difference estimate.",
      "context_sha256": "9f6b3c1c9b1249f21e00e99341babe4da331d67659907c9dda9ea4c20beaf7ee",
      "item_sha256": "16cc73d4699009329fd45d33f29f8db1ff62232828d6f61e26303d5f6b6c7633",
      "at": "2026-10-18T03:30:20.093Z"
    },
    {
      "id": "thm-orthogonal-fv-compressible-viscous-entropy-dissipation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 uses v_i^T·dot U_i = dη(U_i)/dt, but neither cited interface nor Given states v=∇_Uη; F1 only defines v_i=v(U_i). The entropy identity is therefore unlicensed.",
      "context_sha256": "4bfb68f25b1329dee5c4ef5aab7767ed408c5386737a975c216b3b3318185405",
      "item_sha256": "39d01f7c1bc38747065259596de5c59bc2d2c993b0d8ca63f840f845a3c1b1ef",
      "at": "2026-10-18T03:29:58.980Z"
    },
    {
      "id": "ex-sbp-inviscid-versus-viscous-entropy-budget",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] gives flux symmetry and the entropy-potential identity, not the entropy-variable formula. Step 2.1 therefore does not establish the stated v_E and v_m values or the gradients needed for the claimed rate.",
      "context_sha256": "7c7829e4c83dd4db807ce9b0a20692b5622535c7e4084d1ba7ba1f89e5621dd0",
      "item_sha256": "04742a3d9ad6083c32818f2951b7107dc438f2b7ca3beafc70b1a2d6e85cb1f1",
      "at": "2026-10-18T03:30:15.553Z"
    },
    {
      "id": "thm-fixed-mesh-forward-euler-error-for-compressible-sbp",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1’s key inference is unlicensed: the scheme contains D_k v(U), but no supplied interface asserts v is locally Lipschitz. F3 concerns K only, so the claimed Lipschitz bound for L_h—and the later error recurrence—does not follow.",
      "context_sha256": "911c53fc169b2b5d5658a8e9fb27fe39ce853c768eca4aa38185103d8b253831",
      "item_sha256": "ca3d63f22ae0179f704c0611bcfbad93aa914c4f6289353f745507a1e973f970",
      "at": "2026-10-18T03:30:25.276Z"
    }
  ]
