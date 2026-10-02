# Step 7 adjudicate: repeat, round 1, unit 8

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/repeat-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"repeat",round:1,unit:"8",input_sha256:"e05cdf19d5e313eca8bcdfe4dd966cdf4b0c59c46fd851eb9dff4ee3cbf9156e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 11:lem-degree-pullback-divisor-finite-morphism-curves, 15:rem-duality-trace-normalization, 28:cor-degree-three-line-bundle-embeds-genus-one-plane-cubic.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-degree-pullback-divisor-finite-morphism-curves",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately restates the dependency: closed points have residue fields finite over k, not necessarily finite fields. For C=P¹ over ℂ, every closed-point residue field is ℂ and is infinite.",
      "context_sha256": "4d6746137ec7c63eb25027fb94a3fa03a14c7fc5c6193bad17d62d48c2774446",
      "item_sha256": "9251f606f9ebe0c847ab1fe3ee6086e554e0c5a688406762752204e68792dece",
      "at": "2026-10-02T05:25:45.487Z"
    },
    {
      "id": "rem-duality-trace-normalization",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The remark omits AC, but the fixed-trace definition and the duality and residue suppliers explicitly require it. Listing def-axiom-of-choice as a dependency does not establish that hypothesis, so their conclusions are invoked outside their stated scope.",
      "context_sha256": "28e67cbe28ec849f256fdf5b06a16246a7b5abc620a6b21f4ca4cff019f4381c",
      "item_sha256": "78f81c98d763ee8e73ed6eb6ded9077614068ddd90eb7e65cdafd919bf7ee164",
      "at": "2026-10-02T05:27:49.079Z"
    },
    {
      "id": "cor-degree-three-line-bundle-embeds-genus-one-plane-cubic",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims: the smooth projective genus-one model of y²=−(x⁴+1) over ℝ has no real points, whereas every real plane cubic has one. The proof establishes the embedding only under the stated additional hypotheses.",
      "context_sha256": "d38260c841fea6076cda84567ac210075124cffba818c8afffc4bc718abbddf5",
      "item_sha256": "e1f09b4b7c4ec5e99207c449809efe82d080210c8f8fd2cc283e11009d1d68a7",
      "at": "2026-10-02T05:23:38.373Z"
    }
  ]
