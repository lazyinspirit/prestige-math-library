# Step 7 adjudicate: initial, round 1, unit 6

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"6",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-bmo-seminorm-and-quotient-by-constants, 1:lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically, 3:cex-bmo-functions-need-not-be-globally-integrable, 8:lem-hone-functional-has-compatible-local-ltwo-representatives, 9:lem-finite-atomic-sums-are-dense-in-hone.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-bmo-seminorm-and-quotient-by-constants",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final subset inequality lacks integrability on F: for n=1, b(x)=x and F=⋃_{k≥1}[k,k+k⁻²], F has finite positive measure but ∫_F b=∞, so b_F is undefined. Require integrability on F or restrict to bounded sets.",
      "context_sha256": "0cdaa93720ce8d773b4c0bf8ddc6c7e09858ef6f38dd9f398a01420e27b51434",
      "item_sha256": "dfd892fc2d174f85edb7b8466f2ebb1098b30f0f701905db28656d6c395ef23f",
      "at": "2026-10-06T01:19:23.205Z"
    },
    {
      "id": "lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 asserts a strict bound <4^n‖b‖BMO, which is false for constant b: both sides are zero. Constants are allowed by the dependency interface. Replace the strict inequality by ≤ or handle zero seminorm separately.",
      "context_sha256": "024d4faba7ebfb6fee2f5d752019ac9103c13e43522f49902cc6b7f0c76f0514",
      "item_sha256": "c7473cbbde6ce63211ef639e5198ef999b69c2273a135defdb1f899ef0376c9e",
      "at": "2026-10-06T01:19:08.753Z"
    },
    {
      "id": "cex-bmo-functions-need-not-be-globally-integrable",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The asserted consequence about pairings is false: with b(x)=log|x| and f(x)=e^{-|x|²}, the global integral ∫|fb| is finite, although f has no cancellation. Divergence of ∫|b| does not preclude global Lebesgue pairings.",
      "context_sha256": "a9a53a015ff247616b6d005228c21d0dad437f446103bb0743ec9737d06f1ccf",
      "item_sha256": "0aeaec5b83ad4c8a17e1d46a6183f6b7283ea3317e35038a5ec22628dde65764",
      "at": "2026-10-06T01:34:50.250Z"
    },
    {
      "id": "lem-hone-functional-has-compatible-local-ltwo-representatives",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cube interface allows degenerate cubes, such as Q={0}. In step 3.1, mean_Q(h) is undefined because |Q|=0. The proof must handle zero-volume cubes separately or restrict its hypotheses to nondegenerate cubes.",
      "context_sha256": "b14eba7feb57130367473a62c746b0ac63b56fde2908c56102e30e2c6c5a8b54",
      "item_sha256": "bf17f9e0c3add346d52b0a207974fa18a58572c62419920829974a369dae3083",
      "at": "2026-10-06T01:19:16.069Z"
    },
    {
      "id": "lem-finite-atomic-sums-are-dense-in-hone",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "With sequence indices starting at 0, S_N includes λ₀a₀. Step 2.1 incorrectly identifies it with the combination of a₁,…,a_N. The statement likewise uses a₀ in its sum without supplying it; the finite sums must be reindexed.",
      "context_sha256": "39dd2812f0d80fbf4822882b86b19d1f5378511e67cb9ac8f8f7ccd85bffa77f",
      "item_sha256": "29fc9af4be6d925b761f53ef4a15e5daeb8d7c30ee52996ea7656b9d000b574f",
      "at": "2026-10-06T01:19:18.689Z"
    }
  ]
