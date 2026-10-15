# Step 5 adjudicate: initial, round 1, unit 43

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-43-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u43.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"43",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:alg-rauch-tung-striebel-smoother, 4:thm-rauch-tung-striebel-fixed-interval-recursion.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-rauch-tung-striebel-smoother",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition says “the theorem on this page” establishes the conditional-moment semantics, but no theorem or proof is present. The supplied Kalman-filter interface defines its procedure, not the RTS smoothing result, so the key correctness claim is unsupported.",
      "context_sha256": "d770906be877462b5959fa80d7a1ce9daa8e94a6df4e5298f2ab3c5df52c4981",
      "item_sha256": "6e7fbd01cd303bcc410463547f6540f5587ee5b6331f3294e2c848fca5a7b169",
      "at": "2026-10-15T16:18:22.501Z"
    },
    {
      "id": "thm-rauch-tung-striebel-fixed-interval-recursion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 uses [F9] to identify the kernel mixture with the law of an affine function of independent (W,U) for every Borel set. The interface gives product-measure values on rectangles, not iterated integration over arbitrary Borel preimages; no extension argument is provided, so ",
      "context_sha256": "b93ddcf80381ae64e212c779eb56a1b9f70df87012716a1627ee54faf43ab3ec",
      "item_sha256": "48cb0f90c48ce9631ff9e31369b27052ece16cb126f589a8395019a9d936679b",
      "at": "2026-10-15T16:19:20.374Z"
    }
  ]
