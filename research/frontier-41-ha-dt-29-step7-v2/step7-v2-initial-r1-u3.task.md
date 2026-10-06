# Step 7 adjudicate: initial, round 1, unit 3

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u3.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"3",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-embedded-bands-joining-two-framed-spheres-exist, 1:def-handle-slide-of-one-k-handle-over-another, 2:def-geometric-cancelling-handle-pair, 7:lem-handle-slides-act-by-elementary-basis-change-on-handle-chains, 7:thm-handle-cancellation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-embedded-bands-joining-two-framed-spheres-exist",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 fails: tangency at x_i does not make the end disk's transverse coordinate zero (it can be w=-u²). Keeping that coordinate fixed while cutting off the other graph functions cannot move the end disk into S_i.",
      "context_sha256": "12fae2967be29339c4596bec0fd1581d27a4e7ecfb706d26b1971d19ff76f892",
      "item_sha256": "f1cbb05db2b5f507f681e95b60fcb53d1d1f32f341e1b693497873bc3b67aa7f",
      "at": "2026-10-06T06:53:30.544Z"
    },
    {
      "id": "def-handle-slide-of-one-k-handle-over-another",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For k=2,n=4, quotient-compatible bands can join end arcs with the same induced orientation. The band-sum traverses one old circle backwards, so its normal framing cannot agree with both old ordered framings. A transverse sign/reflection condition is missing.",
      "context_sha256": "5d47e1e7d0b6e91a659d1ab3e21ca824897a50a36a85c58706552570d40c291b",
      "item_sha256": "e7cfa69dab7484a0b2c84bcab3083c5567dbf9fa19177fbde136dde20b43d48c",
      "at": "2026-10-06T06:54:52.878Z"
    },
    {
      "id": "def-geometric-cancelling-handle-pair",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The dependency fixes W_0 as the initial collar, but the consecutive pair need not start there. Thus W_0∪h^k may be undefined: the lower handle attaches to a later stage. For a pair in positions i,i+1, use M=∂_+W_i.",
      "context_sha256": "d10a071121273f8b5ddc92ebf6b9321a2a03f408f84f2a204d4d90224c080f0e",
      "item_sha256": "c855c1c2c367a4a5ec9af83c10b89932dd6eccb6629681e03aaff4f4c0a4d83b",
      "at": "2026-10-06T06:52:49.077Z"
    },
    {
      "id": "lem-handle-slides-act-by-elementary-basis-change-on-handle-chains",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 asserts that the cited slide diffeomorphism identifies the new core with a boundary connected sum. Its supplied interface guarantees only a diffeomorphism relative to ∂₀W, with no core or lower-stage pair comparison. Step 2.1 relies on this unsupported strengthening.",
      "context_sha256": "d0ff9c55d3cea47ce503d8d6392acb280cb3ab83daf0dbd4437f73addb4ddd34",
      "item_sha256": "ad0b37d50b77f63cbec90642c4c1c26bbcaf52083788b1f025f442c7043e10c7",
      "at": "2026-10-06T06:53:21.280Z"
    },
    {
      "id": "thm-handle-cancellation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 unjustifiably shrinks the composed diffeomorphism's support to a collar of E and the handles. F2 and F3 give support near the swept attaching regions; no containment of those regions in that collar is established. Thus the stated support claim is unproved.",
      "context_sha256": "cfe1ca661831fb46d680a6385e7323c7428c9d13460ffe2a9bcf04518da2bf8a",
      "item_sha256": "9aec749f29a9b463f76a8e955fdf712fdd3bbe30836ed029dda79ffb62515131",
      "at": "2026-10-06T06:53:03.656Z"
    }
  ]
