# Step 5 adjudicate: initial, round 1, unit 1

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-1-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u1.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"1",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:alg-balanced-pairwise-summation, 1:alg-bounded-mixed-precision-iterative-refinement, 1:alg-rounded-cholesky-with-failure-status, 1:alg-two-sum-error-free-transform.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-balanced-pairwise-summation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition returns immediately when an addition fails, so that execution uses fewer than 2^d−1 additions. Its unconditional claim that it terminates after 2^d−1 additions is false; the proof establishes only a finite bound.",
      "context_sha256": "5c6e3a773af4f198e4bdc44ed2df4b9d3a4d1cd359db393450f48517f0fbbce1",
      "item_sha256": "9f2691da81e34e77f67700be729771d53601c405fe842bfc57911a4ee65b4dfe",
      "at": "2026-10-16T17:28:02.462Z"
    },
    {
      "id": "alg-bounded-mixed-precision-iterative-refinement",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claimed contraction certificate omits additive defects ξ_r, ξ_w, and the checked defect bounds scale with x and b, not the error x*−x. With η_r=η_w=0 and exact factors, it can certify q=0 while an allowed nonzero residual defect leaves the next error nonzero.",
      "context_sha256": "1a5152715ff2e382e92757a4e080987b0b1a3a7041fb2aa4cbedb3bf9f1bd229",
      "item_sha256": "20958df249d1b55c3ea9078c5fe0f6c4b7b567dc55ccdd9751c8c2625ed8bd31",
      "at": "2026-10-16T17:30:35.949Z"
    },
    {
      "id": "alg-rounded-cholesky-with-failure-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Termination is claimed in the algorithm definition and proved in its Proof section. The library’s algorithm convention requires termination to be stated and proved in a separate lemma, theorem, proposition, or corollary.",
      "context_sha256": "2e17f9028a22654edcead6be69397ee644591700feebb0710b20f48864950dee",
      "item_sha256": "7869a1755ecb6d6668934c898fb19cc4e43e68cd38b7e6510ab7ff3a5e49e796",
      "at": "2026-10-16T17:30:35.242Z"
    },
    {
      "id": "alg-two-sum-error-free-transform",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises an error-free transformation, but the item proves only termination and explicitly leaves exact recovery to a separate theorem; no such theorem is included or cited.",
      "context_sha256": "cb3bf75a1f2f69c5bb442eb6454f0ae6b43eadd0667074ff91d8f1338132fc0c",
      "item_sha256": "66f53b2831eaf1fbbd9e4d89524e2e930250be30380679105f136e053c5dce47",
      "at": "2026-10-16T17:28:15.223Z"
    }
  ]
