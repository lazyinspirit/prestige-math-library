# Step 7 adjudicate: initial, round 1, unit 12

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u12.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"12",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-boundary-of-a-compact-one-manifold-has-even-cardinality, 4:thm-oriented-intersection-number-is-homotopy-invariant, 4:ex-two-projective-lines-have-one-mod-two-intersection, 5:rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact, 5:thm-intersection-number-under-factor-interchange.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-boundary-of-a-compact-one-manifold-has-even-cardinality",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F6] inaccurately restates the inverse function theorem: strict increase and smoothness do not ensure a smooth inverse. The map t↦t³ is strictly increasing and smooth, but its inverse is not differentiable at 0. A nonvanishing derivative is required.",
      "context_sha256": "d0b034b935aeb69eb254550421249f7e2dcf05a5c768807b3a59e2d9da32414a",
      "item_sha256": "2928a4e9e37515ea930b6f9a419364b903e0a3658f4bc6f86cd724ef58fd0000",
      "at": "2026-10-03T14:19:24.536Z"
    },
    {
      "id": "thm-oriented-intersection-number-is-homotopy-invariant",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Transversality of F and its boundary faces does not imply transversality of every slice. Take X=S¹, M=ℝ, Z={0}, F(t,θ)=t−1/2−cos(θ)/4. F is transverse, both endpoint preimages are empty, but F₃⁄₄ is nontransverse at θ=0.",
      "context_sha256": "609b667c38a7a92466e8f8e82a1affc93bebe7227a4b9fc542eed8b87410e546",
      "item_sha256": "7053e40d202d5aea27a82d6a338e370a6b876658857fb8a732fec40377f9878d",
      "at": "2026-10-03T14:20:05.476Z"
    },
    {
      "id": "ex-two-projective-lines-have-one-mod-two-intersection",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] incorrectly restates the orientability criterion without the hypothesis n≥1. RP^0 is an orientable point despite 0 being even, as the supplied dependency explicitly states.",
      "context_sha256": "9af1806579b3b4441738f30d44ca888c984cecacd48651a1a52dffba2288c5d9",
      "item_sha256": "4b9f2439a42265d73560991b8c21b8aa868409bbd72591ed22d2977c81552d6c",
      "at": "2026-10-03T14:19:17.304Z"
    },
    {
      "id": "rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that the companion counterexample exhibits escape even with proper slices contradicts its supplied interface, which asserts count preservation for proper endpoints even when the combined homotopy is not proper.",
      "context_sha256": "7a7f479056beb765d764e3bf17d858dfcff3cc5bdee09a7ae5cf03fa68561323",
      "item_sha256": "db7760f2fe9e7610affab56d52a93eb4f2003f1f59428faefafe26f3f8253e10",
      "at": "2026-10-03T14:19:19.198Z"
    },
    {
      "id": "thm-intersection-number-under-factor-interchange",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 applies the transverse-map theorem to inclusions without assuming A and B transverse. For A=B=S¹×{0} in T², their tangent sums are not direct, so the claimed local-sign comparison is undefined. The nontransverse corollary needs another argument.",
      "context_sha256": "5d0896f25d778f3c123466a26cfb7ac142a20c790abbc08dc503513a6d1ceef7",
      "item_sha256": "3495770e46fddb3b264d9422541db20e3615a878ebbfe9022adc0d1885a15c9a",
      "at": "2026-10-03T14:19:19.349Z"
    }
  ]
