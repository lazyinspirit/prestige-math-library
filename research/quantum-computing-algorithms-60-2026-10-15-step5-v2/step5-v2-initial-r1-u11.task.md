# Step 5 adjudicate: initial, round 1, unit 11

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-11-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"11",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:alg-qc-two-level-unitary-elimination, 6:thm-qc-one-qubit-euler-decomposition, 11:thm-qc-multicontrolled-ancilla-resource-tradeoff, 12:alg-qc-two-level-gate-to-elementary-gates, 13:thm-qc-two-level-gate-synthesis-correct.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-qc-two-level-unitary-elimination",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The elimination steps are sound, but no proved result establishes that the returned D is diagonal and the factors reconstruct U. Algorithm conventions require correctness to be stated in a separate proved result.",
      "context_sha256": "56057785be817ddb90becdfd61df0297d1692099c97d382aa13583b02e4f8b1e",
      "item_sha256": "1580d1fd5084183c06ed3e78f759320a971bddab2b0b3ccff00540c10fcbef06",
      "at": "2026-10-16T04:49:47.548Z"
    },
    {
      "id": "thm-qc-one-qubit-euler-decomposition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F3] restates sign claims absent from its supplied interface. Step 3.1 needs those claims to place the circle parameter in [0, π/2], so the cited facts do not license that step.",
      "context_sha256": "022e687769ec89c86420745073bc0a59e16fa3750ef2823f4970b1711d5428a9",
      "item_sha256": "ea9ea38e1db651ec0e63a168543ea60b448b6d5f5201c101d2e094997b58349a",
      "at": "2026-10-16T04:49:56.276Z"
    },
    {
      "id": "thm-qc-multicontrolled-ancilla-resource-tradeoff",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 misstates its cited dependency: the supplied interface gives polar form, not a square-root theorem. Step 1.1 relies on that as a given; it must derive the root from the polar angle or cite the correct result.",
      "context_sha256": "d657e7a6d2fdd2609bb41e53d3c60524d7d5f70c422a94648221032d35b8424f",
      "item_sha256": "c8e20f30171c4f18e6e84aca92afa4a71b42fd39a64274e065539dfdf3052f36",
      "at": "2026-10-16T04:51:00.361Z"
    },
    {
      "id": "alg-qc-two-level-gate-to-elementary-gates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The algorithm never specifies how to expand a call with two or more controls. Its cited theorem gives existence and gate-count bounds, not a constructor or literal gate list, so the required chronological output is undefined.",
      "context_sha256": "196c650401b51e439ae9ed47787aed4ea61d9b235e7e9c1069e0bacdbc99cdef",
      "item_sha256": "f39572e933572437c699376c3889392b468c8cff8c928b49fad306cf420b307d",
      "at": "2026-10-16T04:50:15.219Z"
    },
    {
      "id": "thm-qc-two-level-gate-synthesis-correct",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F8's interface promises only an exact O(r) borrowed-wire circuit, not the claimed 4s−8 Toffoli ladder or balanced-call structure. F7 gives only asymptotic bounds, so the exact E/B/Q/K costs are unsupported.",
      "context_sha256": "afdaee49f674e0a8c49a6175664ed0d39e6ad10137b474fe9b3d1ec5dff6e0e1",
      "item_sha256": "02d9f66148fd801819d96a8d65b788432787ade47e456e1add0f0bc60c1144c2",
      "at": "2026-10-16T04:50:15.195Z"
    }
  ]
