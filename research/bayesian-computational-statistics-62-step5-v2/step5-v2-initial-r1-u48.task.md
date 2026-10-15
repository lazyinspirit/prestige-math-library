# Step 5 adjudicate: initial, round 1, unit 48

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-48-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u48.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"48",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-near-iid-exchangeable-arrays-have-convergent-means, 3:alg-three-dimensional-variational-assimilation, 5:ex-linear-gaussian-three-dimensional-variational-analysis.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-near-iid-exchangeable-arrays-have-convergent-means",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title says the arrays are close to an iid row, but the hypotheses require only equal marginals and pairwise uncorrelatedness; they do not require independence. Thus the title asserts more than the theorem establishes.",
      "context_sha256": "949bce2799549d2c2a995e5aa384012e3a09794f9ffa06fdd1f287b9399015fc",
      "item_sha256": "8b8df691dfaedb7b3addcf88d7826b939018d85a1586a7e94f00ddf198942eaa",
      "at": "2026-10-15T16:19:42.993Z"
    },
    {
      "id": "alg-three-dimensional-variational-assimilation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The inputs do not require p≥1, so p=0 is admissible under the library’s ℕ convention. Then S is 0×0, outside the cited Cholesky theorem’s n≥1 hypothesis; the claimed factor from that theorem is unsupported.",
      "context_sha256": "94910f0b6f7a939bad830edafe131ffb739b767bd06d913156b0da4591a7ac63",
      "item_sha256": "9905f48a5635b14d50ea56587bf52eb49c98f03e3d0214717a228f1b1cc904c9",
      "at": "2026-10-15T16:20:09.380Z"
    },
    {
      "id": "ex-linear-gaussian-three-dimensional-variational-analysis",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example never assumes prior and observation error are independent, yet step 2.1 asserts the exact posterior is N(1,1/2). With Gaussian errors of variance 1 and correlation 1/2, the same data give posterior N(1,1/4), so F1 and F5 do not apply as stated.",
      "context_sha256": "0dc38b9b99a2a7f1fc193c5c6076c10bbdcd2d7d92e2f697eacda5dfc9fd3d37",
      "item_sha256": "d349836a469eea17837ed1bbc3a521018196dc1fec71383fe2a8d9226f9b9349",
      "at": "2026-10-15T16:20:33.009Z"
    }
  ]
