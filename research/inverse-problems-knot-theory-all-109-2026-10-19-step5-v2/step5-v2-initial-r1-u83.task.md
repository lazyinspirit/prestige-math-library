# Step 5 adjudicate: initial, round 1, unit 83

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-83-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u83.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"83",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:lem-bmw-descending-tangle-spanning, 4:lem-bmw-presentation-tangle-evaluation-is-well-defined, 6:lem-bmw-descending-tangle-spanning-and-independence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-bmw-descending-tangle-spanning",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A totally descending open strand can be a single Reidemeister-I curl. Regular isotopy in F1 excludes RI, so lifting cannot remove it; step 1.3 does not apply F2’s curl factor to open arcs. The claimed terminal reduction to a self-crossing-free strand is therefore unjustified.",
      "context_sha256": "d2081fa456dc6d7c1e6f4c9201bc3e5e6df34c792049d4090e2a32ec337dc9d4",
      "item_sha256": "b59cb14bb1e8b3a2ea60bff9da9e43302e08ca12adcc9bef2edcffaaa3e51f9d",
      "at": "2026-10-21T15:51:29.545Z"
    },
    {
      "id": "lem-bmw-presentation-tangle-evaluation-is-well-defined",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.2 does not verify all adjacent relations: a single reflection of the tangle diagram reverses crossing chirality, so it yields a relation with inverse crossings, not the stated positive-crossing relation. The required BMW relations remain unchecked.",
      "context_sha256": "bf5a8b0f9079d928154b33cce30a24b1f37ddf486a562029a9a7513b73e3c3f5",
      "item_sha256": "33bdb16573a3ab27488cfcabab7330edcde9a145d7209d9037365e8c5c94cffa",
      "at": "2026-10-21T15:50:29.891Z"
    },
    {
      "id": "lem-bmw-descending-tangle-spanning-and-independence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 says the chosen descending representatives span; it gives no uniqueness for a connector. Step 2.1 identifies its factorization with the chosen representative from their shared connector, leaving surjectivity—and thus the isomorphism—unproved.",
      "context_sha256": "91c054628f8086cc8299668f7595b9c0e8b5b1bf5879e5649e1f9ca45079677b",
      "item_sha256": "0ac355837b229c6e3a4b4bc2d1b53eec887e5f6ac845e3dd585417469d23670b",
      "at": "2026-10-21T15:50:34.174Z"
    }
  ]
