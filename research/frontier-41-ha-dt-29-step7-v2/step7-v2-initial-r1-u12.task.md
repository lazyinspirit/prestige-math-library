# Step 7 adjudicate: initial, round 1, unit 12

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u12.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"12",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 11:thm-hirzebruch-signature-theorem, 12:rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions, 13:ex-signature-of-s-two-times-s-two-is-zero.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-hirzebruch-signature-theorem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately asserts value 1 on every product of complex projective spaces. CP^1×CP^1≅S^2×S^2 has signature 0. The cited product interface applies only to products of CP^{2k_i} with k_i≥1.",
      "context_sha256": "8b762ba857116fd39442b8fccdbe8fb1c60b26e4dedcf63336bf08eb06f42777",
      "item_sha256": "9e55f0cea4bb6344e26b400b867935fa064f8e2ff59a410431c315c578d1c98a",
      "at": "2026-10-06T06:57:54.352Z"
    },
    {
      "id": "rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The remark says the Hirzebruch signature theorem is stated only in dimensions 4k and excludes zero extension from its statement. Its supplied interface explicitly includes the zero-extended signature as a homomorphism on all rational oriented bordism degrees.",
      "context_sha256": "56133ef20da968462f54b89cab782616f9d314faf8a06230e7a9eaee988a45ec",
      "item_sha256": "fc00babaae4fb611ed9e9062647fbe008a69799259cb76931d234f20417b1576",
      "at": "2026-10-06T06:57:45.641Z"
    },
    {
      "id": "ex-signature-of-s-two-times-s-two-is-zero",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F7] restates the signature formula for every closed oriented 4-manifold, omitting the smoothness hypothesis. The supplied dependency asserts it only for smooth manifolds and does not license this broader claim.",
      "context_sha256": "aa9f69b7afbbc97c1f85049ec8099d1036e0091c94cf802642f26a0d8a937022",
      "item_sha256": "6ccedbd0ee05e6daa86327a4f261ec6e2af7559393866ee0df2e6a3c0f32bc74",
      "at": "2026-10-06T06:57:52.894Z"
    }
  ]
