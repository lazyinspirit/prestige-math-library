# Step 5 adjudicate: initial, round 1, unit 36

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-36-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u36.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"36",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-square-integrable-markov-transition-conditional-expectation, 1:lem-geometrically-ergodic-chain-has-standard-borel-observation-factor, 3:lem-bounded-vector-log-cubed-gaussian-coupling, 3:lem-heterogeneous-bounded-atom-vector-log-cubed-gaussian-coupling.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-square-integrable-markov-transition-conditional-expectation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement treats g∈L²(π), an a.e. equivalence class, as a pointwise function in g(X), Pg(x), and P(g²)(x), without choosing a representative. Specify a measurable representative or define these expressions as induced π-a.e. classes.",
      "context_sha256": "17c3eb21b219dc266ce51bf7b11f61f2c1b9160afd26c8bc965d1199972a2a6d",
      "item_sha256": "7e2d0624b5ae06045254e0f2b84d76953e66f51bd90c94ddd90808c03e9ee313",
      "at": "2026-10-15T16:15:43.721Z"
    },
    {
      "id": "lem-geometrically-ergodic-chain-has-standard-borel-observation-factor",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F9 overstates its dependencies: the supplied corollary says Gδ subspaces of Polish spaces are Polish, not that arbitrary Borel subsets are standard Borel. Steps 5–6 and 8 rely on that unsupported claim for S and D^ℕ, so the construction is not established.",
      "context_sha256": "4b2185813faa27ce14b1a864ff0f0edd3edd7451ca670de7e9c3418d9336a22c",
      "item_sha256": "b11213ed8e182601f294e14b22c2b2c4853e8140645e5366eeb0a1aaad322a62",
      "at": "2026-10-15T16:16:28.399Z"
    },
    {
      "id": "lem-bounded-vector-log-cubed-gaussian-coupling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a coupling for bounded independent vector rows without a dimension limit, but the statement and proof cover only 1≤d≤2; the title overstates the result.",
      "context_sha256": "94c8fc3acd53722c91dfc83940fb509fa3f0fda29043ad4c53c574dade893276",
      "item_sha256": "cadd47b953cb9686d42a2f625b778af5c70b385667cbbfecdf5454d6e846ae53",
      "at": "2026-10-15T16:17:51.385Z"
    },
    {
      "id": "lem-heterogeneous-bounded-atom-vector-log-cubed-gaussian-coupling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 8's induction fails: the existing Gaussian odd coordinates can depend on frozen raw evens because the step 3.1 transport uses the whole Gaussian row. F7's one-side-kernel condition is unmet. Retaining target odds instead changes the anchor row, which step 9.1 does not justif",
      "context_sha256": "0a4f69d3b6547d45feea059bab4fb02750d84ad7566d7591848f68d327abe978",
      "item_sha256": "f40d722cb6c92bb713e44b647b70ed49d0c08f52133b075431602db8fa29c23e",
      "at": "2026-10-15T16:18:26.871Z"
    }
  ]
