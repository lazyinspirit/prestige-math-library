# Step 7 adjudicate: repeat, round 1, unit 27

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/repeat-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-repeat-r1-u27.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"repeat",round:1,unit:"27",input_sha256:"486a1a26b26c0334cd5318a138fd79809b15ba99b4757ebf52f3620c8d8eed41",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-finite-etale-lifting-over-complete-dvr, 6:lem-arith-dual-and-poincare-bundle-finite-field-descent, 9:lem-arith-mumford-map-degree-is-euler-characteristic-square, 10:lem-arith-polarization-and-picard-twist-ampleness, 15:thm-good-reduction-and-smooth-proper-base-change.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-finite-etale-lifting-over-complete-dvr",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 claims AC enters only through the lifting facts, but steps 1.2 and 2.1 also invoke F2–F4, whose supplied dependency interfaces explicitly assume AC. The proof does not justify this claimed restriction of AC use.",
      "context_sha256": "d36a0185cfc633d490dc2fb9abff6ca3990c74a1f484a288b70cdfdcb3ad29e6",
      "item_sha256": "a4d9366b4e8f350912956021161342264054d1ea48129c4cf2781d9497d6eec7",
      "at": "2026-10-06T01:40:15.338Z"
    },
    {
      "id": "lem-arith-dual-and-poincare-bundle-finite-field-descent",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 attributes representation of the algebraically trivial subfunctor to the coherent Kunneth dependency, whose interface establishes only Pic^0's smoothness, properness, dimension and isogenies. This essential identification is neither supplied nor proved.",
      "context_sha256": "06f4d4247026784fa04ce4f950edeeb3062db8f3ca2f41f27e82351909ac54bb",
      "item_sha256": "596248b8b145345d1938a62352b6be61d1b684055f5f0c6f99e14ebeb7796a9e",
      "at": "2026-10-06T01:39:39.014Z"
    },
    {
      "id": "lem-arith-mumford-map-degree-is-euler-characteristic-square",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 asserts an unsupported dependency conclusion: the dual-isogeny lemma assumes an isogeny, and the homogeneous-bundle interface does not establish that finite kernel implies a finite flat isogeny. Thus step 1.1 lacks its required flatness justification.",
      "context_sha256": "ade1db078176613b9872357856d82b1a00067c42b6be18c87a43b86dc2fc5248",
      "item_sha256": "931b8890f2b95dae6a5184e0f7b7ac94e59f6fc48069edf9495e64654bad0001",
      "at": "2026-10-06T01:39:28.365Z"
    },
    {
      "id": "lem-arith-polarization-and-picard-twist-ampleness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 incorrectly attributes finite kernels for ample Mumford maps to the cited lemmas. The homogeneous-bundle interface does not establish finiteness, and the dual-isogeny interface assumes an isogeny. Step 1.1 supplies no finite-kernel argument.",
      "context_sha256": "720d1b025a2e152444edec6df522c88d836b2aa6de012fc5f5fe6854a452538b",
      "item_sha256": "a68c4e7fec437355f6f84691d2c7605b1944a648e841ef08bdf764ef5d73a41c",
      "at": "2026-10-06T01:39:15.215Z"
    },
    {
      "id": "thm-good-reduction-and-smooth-proper-base-change",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 falsely attributes flatness of direct images to lem-flat-sheaf-sections-flat-over-base. That lemma proves only flatness of F(U) for affine U; higher direct images R^q f_*F can have torsion even when F is flat over S.",
      "context_sha256": "595ad30890ad2015b9d3091e509485d2b63da1ad744825ed9b3b4ad016326f6f",
      "item_sha256": "64c7d9babf7ca0eba64a3fa17762d20396b3d7b88a82d0b665d445e0acc1e7b7",
      "at": "2026-10-06T01:41:44.755Z"
    }
  ]
