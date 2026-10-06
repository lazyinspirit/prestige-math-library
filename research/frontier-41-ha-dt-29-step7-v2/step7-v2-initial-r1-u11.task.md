# Step 7 adjudicate: initial, round 1, unit 11

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"11",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-kronecker-pairing-is-multiplicative-under-cross-products, 0:thm-characteristic-numbers-are-cobordism-invariants, 2:lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum, 4:thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-kronecker-pairing-is-multiplicative-under-cross-products",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 attributes an Alexander–Whitney/shuffle comparison to the cohomological Kunneth theorem, but its supplied interface contains no such comparison. Step 3.1 therefore lacks the cited justification for the external cup-product convention.",
      "context_sha256": "adf8ba66c907b02bbcc8a86695985a436655bf0dd2d7e5dea19d7c711beb7ce8",
      "item_sha256": "bf9e61b8966ccc9af470fa0b451c29612504e85efee82843e25fa141364c4064",
      "at": "2026-10-06T06:57:02.409Z"
    },
    {
      "id": "thm-characteristic-numbers-are-cobordism-invariants",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 and step 1.1 misstate the collar interface: the interval products map onto collar neighborhoods, not the n-dimensional boundary parts. Only {0}×M_i maps diffeomorphically onto (∂W)_i.",
      "context_sha256": "ebe7bf1f8949e21bccc492384a30b80647c6799dad01fbe204f74a72f6daa6f5",
      "item_sha256": "5ed4df77cee23254a09612950c6d3e0438b788c7228e4db81815944a6d82239f",
      "at": "2026-10-06T06:57:06.642Z"
    },
    {
      "id": "lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1's oriented sign correction fails: external-sum normals induce (-1)^{ns} times the product tangent orientation. Applying the same orientation sign to the source and normal fibres leaves the induced tangent orientation unchanged, so it does not remove this discrepancy.",
      "context_sha256": "0e5f6597dde7d60c0f88b91293bba79c6088e2f72429cbb0758daa14ae264823",
      "item_sha256": "3d160b8c83859684526001e1b62fe7548b17a64d4cd49f08a18502086b78db38",
      "at": "2026-10-06T06:59:02.896Z"
    },
    {
      "id": "thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 attributes a controlled normal-differential comparison to [F1], but its supplied interface asserts only surjectivity and bordism invariance. It does not identify an arbitrary transverse map with the collapse of its own preimage; this essential inverse claim is unproved.",
      "context_sha256": "601ad317d50d6a51dc0cfcec46e200ebcb88357c5b69e0ab734eb2e6e9e4ca0a",
      "item_sha256": "57cda0f1345dcd2cee3440688be5c5a07ee472b78f4de78cc65f6dd3c62c6e2a",
      "at": "2026-10-06T06:57:16.073Z"
    }
  ]
