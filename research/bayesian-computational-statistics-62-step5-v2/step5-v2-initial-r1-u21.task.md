# Step 5 adjudicate: initial, round 1, unit 21

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-21-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u21.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"21",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-gaussian-sequence-hyperrectangle-class, 1:lem-gaussian-sequence-empirical-bayes-posterior-formula, 2:lem-empirical-bayes-maximizer-bracket-on-polished-tails, 4:ex-sparse-gap-sequence-is-hyperrectangular-but-undercovered.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gaussian-sequence-hyperrectangle-class",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With the library’s N={0,1,...}, ℓ²(N,R) includes θ₀, but the supremum starts at i≥1. Thus θ₀ is unconstrained, adding a free coordinate absent from the cited positive-index hyperrectangle. Use positive-index ℓ² or reindex the bound.",
      "context_sha256": "41e9f7ab5e3af976ca384311fb1b0e09145113e5cd41673e925886007f8b9884",
      "item_sha256": "c41d636539097e3d11bee154b6d5f62f1b369cda20bc594861636469675eee54",
      "at": "2026-10-15T16:12:12.757Z"
    },
    {
      "id": "lem-gaussian-sequence-empirical-bayes-posterior-formula",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows n≥1 and any finite α “in the procedure,” but the cited procedure only defines the model for n≥3 and 0<α≤A_n. It therefore claims cases outside its dependency interface.",
      "context_sha256": "4e90d6af6460ed95102b2571639e6bff88638d0eb7f851d188667ba6a9468bf5",
      "item_sha256": "8d79d2816f544a54a34bf9bcec221d3134b4f135dc6afaf70eeff6b6c110a847",
      "at": "2026-10-15T16:12:50.917Z"
    },
    {
      "id": "lem-empirical-bayes-maximizer-bracket-on-polished-tails",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the procedure interface: a global maximizer is not supplied unconditionally; it requires a chosen domain with almost-sure coverage and an assumed measurable selector. The theorem omits these hypotheses, so F1 does not license the maximizer argument.",
      "context_sha256": "90c18a0d9f45318d021d3bd18e5573f7ff13c2a0dde49201f35ec401731e1c86",
      "item_sha256": "7abd245dd9b63519dac0a8240d9df4107a90203c9661cc7cd7140c70a1cdd1fe",
      "at": "2026-10-15T16:12:49.585Z"
    },
    {
      "id": "ex-sparse-gap-sequence-is-hyperrectangular-but-undercovered",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example omits the required observation-operator hypothesis C⁻²i⁻²ᵖ ≤ κᵢ² ≤ C²i⁻²ᵖ. Its dependency’s undercoverage result assumes this, but the example fixes no κ sequence; F2 also restates the result without that condition.",
      "context_sha256": "2dd008e3a44968fae21fa92f3296e659f6834dd200a9696cde51aae6778ebd6a",
      "item_sha256": "bad812e4cc2a31ac9cd51224b26d7fa4ba3ebca1394ecc823f934ae402ad75fb",
      "at": "2026-10-15T16:12:18.924Z"
    }
  ]
