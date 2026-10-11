# Step 5 adjudicate: initial, round 1, unit 28

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-28-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u28.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"28",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-compatible-refinement-for-tuple-indexed-coverings, 8:lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology, 11:lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-compatible-refinement-for-tuple-indexed-coverings",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.2 extracts a finite ambient-open subcover of Σ from intrinsic compactness. The def-compact-space interface expressly requires citing lem-compactness-of-a-subspace-is-ambient for this inference; that dependency is absent.",
      "context_sha256": "589145da98e7a7a1c8ebb3e28a7d4f64cd336d0a8a307b537474440ac433153a",
      "item_sha256": "01ee2e23ab0a4b9b4f3762b7a8cf79fd6cc41246d70942491ac35abb1770f148",
      "at": "2026-10-11T15:24:44.532Z"
    },
    {
      "id": "lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 and step 3.3 extend resolution-independence to Godement resolutions, but the supplied interface guarantees it only for injective resolutions. Compatibility of the Godement identification with sheaf-cohomology connecting maps is therefore unproved.",
      "context_sha256": "11886a8bab1cbc9eb0de83b234ea40fe2c89c807e4e064fb6ff571512e771a59",
      "item_sha256": "9c29013b1cd48145fdf63526fa53889cf90085f5f0f32fc38cc43cb8547c08e7",
      "at": "2026-10-11T15:24:52.280Z"
    },
    {
      "id": "lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The second remark falsely claims that one finite cover of order ≤d+1 forces Čech vanishing. For d=0, S¹ has the cover {S¹} of order 1, but refinement-limit Čech H¹(S¹,ℤ)=ℤ for the constant sheaf. Cofinal such refinements are essential.",
      "context_sha256": "78fa68e74292cca79560221a78350d3c199fa86a9f9379b72b038b57931ab800",
      "item_sha256": "6707ca02cf7b7b3adb3c71030daa8bae4f609dcae14c6fa2b2772873140372fc",
      "at": "2026-10-11T15:25:04.630Z"
    }
  ]
