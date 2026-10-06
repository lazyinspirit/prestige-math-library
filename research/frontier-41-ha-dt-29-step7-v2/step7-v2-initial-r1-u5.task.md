# Step 7 adjudicate: initial, round 1, unit 5

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"5",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-breaking-length-is-bounded-by-index-drop, 6:def-signed-morse-differential-over-the-integers, 6:lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli, 7:thm-integral-morse-differential-squares-to-zero.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-breaking-length-is-bounded-by-index-drop",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 asserts that every string with a nonpositive index drop contributes an empty term by F3. For repeated consecutive points this requires M(x,x), which the supplied interface leaves undefined; F3 applies only to distinct points.",
      "context_sha256": "fd43c22d1e99ae9f132afd59b73dc557dd57493752f5b2daffa43c3730d975c2",
      "item_sha256": "87c2f0ab597f32bc21c239330c076d59d7915d29184076c69fa836f1d506162d",
      "at": "2026-10-06T06:53:49.400Z"
    },
    {
      "id": "def-signed-morse-differential-over-the-integers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited orientation lemma requires X to be downward gradient-like in normalized Morse coordinates. The definition assumes only Morse–Smale and closedness, so it invokes the comparison signs without establishing that additional hypothesis.",
      "context_sha256": "902926b89b2e26c9d6bb774bad57f1283802858e2c2e3769e5f38cd615e6d7cd",
      "item_sha256": "0b9c94c7b631c21c724f82d068763e8e6c95eb67575822f04b0f738a1a542a4d",
      "at": "2026-10-06T06:53:52.997Z"
    },
    {
      "id": "lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] attributes a radial passage chart and a transverse smooth stable-slice intersection to the gluing lemma. Its supplied interface gives only a topological collar smooth for s>0. Steps 1.1–2.1 rely on these unprovided geometric assertions.",
      "context_sha256": "3c319ad2959c40d8eca920ea1e4ac94ff5a475bbbaf7da90e147bf245393cf24",
      "item_sha256": "630969c50222e3755accab94d9e8a52e2e4d93f65c940c35e8881a646b47b77e",
      "at": "2026-10-06T06:53:47.956Z"
    },
    {
      "id": "thm-integral-morse-differential-squares-to-zero",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 uses the boundary-orientation lemma without its normalized Morse-coordinate hypothesis. The Morse–Smale interface also admits nonnormalized metric gradients; the theorem neither assumes normalization nor proves a reduction to it.",
      "context_sha256": "32fb1a6f165991f663825b0e38cf2c31a15f86649e36bd8bff90ef3261f64c80",
      "item_sha256": "26f12bbc9d6223c3314647693ce4e3ed6a3e8cb1cf6c89dbe28cf3c439163c41",
      "at": "2026-10-06T06:53:39.589Z"
    }
  ]
