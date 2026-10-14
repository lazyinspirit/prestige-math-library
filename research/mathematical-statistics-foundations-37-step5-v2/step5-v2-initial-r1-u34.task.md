# Step 5 adjudicate: initial, round 1, unit 34

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-batch-34-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u34.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"mathematical-statistics-foundations-37",phase:"initial",round:1,unit:"34",input_sha256:"d09cd87bf1a789ab3aae4c9439e049e9981c7df3bd49e414cef635da1d327e21",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run mathematical-statistics-foundations-37 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-projection-slab-uniform-deviation, 4:ex-block-sparse-huber-covariance-model, 5:lem-huber-covariance-ambient-action-tail-lower-bound, 5:lem-measurable-matrix-depth-maximizer-selection.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-projection-slab-uniform-deviation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F7 overstates its cited interfaces: the norm definition and Cauchy–Schwarz theorem provide no rational coordinate approximation rule. Step 1.1 relies on rational density to reduce the supremum to a countable measurable subclass, so this needed fact is unsupported.",
      "context_sha256": "6769895410b57b2aef601b92410e707a8f7b902aadad7326755a511627f4dab1",
      "item_sha256": "4f9f43c03d08ee520443dd4f8e985eda9901e4296d9538a64bf5cc69833411d0",
      "at": "2026-10-14T11:57:54.583Z"
    },
    {
      "id": "ex-block-sparse-huber-covariance-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1 does not establish Σ∈F₄(2). The supplied block-class interface requires Σ∈Fₚ(M), but does not define Fₚ(M); the PSD, norm, and block-support checks alone do not license the claimed membership.",
      "context_sha256": "0dea2d4d89c69095adb67cf5539194ff637334f1979b723bd35c8f87eeb2934d",
      "item_sha256": "3a043698aa285784f1eddc44661ece8ecfaf12e67cba42e1204297e3468aaa42",
      "at": "2026-10-14T11:57:57.314Z"
    },
    {
      "id": "lem-huber-covariance-ambient-action-tail-lower-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 relies on the vector-norm triangle inequality, but def-inner-product-norm only defines the norm and points to a separate corollary for its norm axioms. That result is neither a dependency nor proved, leaving step 2.1 unsupported.",
      "context_sha256": "0cfd44775389bd8975a96f0b5039b0b607c899bda88c6f0e72d563c163cd62e3",
      "item_sha256": "48ab40a9e7a84a9bcaceac7a5c39a268b0daca4a22a404bccc69ce5a74c672f3",
      "at": "2026-10-14T11:57:52.944Z"
    },
    {
      "id": "lem-measurable-matrix-depth-maximizer-selection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 guarantees compact argmax fibers, not that K is compact. The proof restates it as giving compact K, then relies on compact K∩Q in 2.1 and on compact capped fibers in 5.1. That essential compactness is not licensed by the supplied interface.",
      "context_sha256": "0844e992deffef4c67e6cb9fa0ab6188b7ef8efad25cbc44e3fcf67b2ca23541",
      "item_sha256": "ff920dd527e5b070ca73f9acd6a1328e4fa908c9a64b3a48da1b7bb638556670",
      "at": "2026-10-14T11:57:42.762Z"
    }
  ]
