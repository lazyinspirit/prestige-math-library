# Step 5 adjudicate: initial, round 1, unit 76

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-76-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u76.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"76",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:thm-local-sde-existence-and-uniqueness-until-exit, 4:thm-drift-implicit-euler-sde-strong-order-half, 4:thm-tamed-euler-strong-order-half.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-local-sde-existence-and-uniqueness-until-exit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates its cited interfaces: they give Doob and Itô-isometry bounds for scalar Brownian integrals, but the proof uses an unprovided vector-martingale, matrix-integrand estimate. The key bound is unsupported by the supplied dependencies.",
      "context_sha256": "5e729fefe562f8b51715b7d54ea0632eaf34f8c7018ca01ca75da6c36ce475da",
      "item_sha256": "256d3423cb4e53bcb24fae089f7541c6370af70649e99dd3bc59c1d268156d77",
      "at": "2026-10-17T01:50:26.454Z"
    },
    {
      "id": "thm-drift-implicit-euler-sde-strong-order-half",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 and F9 extend cited scalar, one-dimensional Itô interfaces to vector integrals against m-dimensional Brownian motion. The proof needs those extensions for ξ’s isometry and martingale-difference property, but supplies no coordinatewise derivation or matching dependency.",
      "context_sha256": "ad18ecc698fe9b71c9901ed84d8f8d1f863fe4e584a032e0b71623c94207602d",
      "item_sha256": "bb408ad2f4a294f19203fdbf524945c1bb4453b1392a1fbf8dec7b743e81e2ea",
      "at": "2026-10-17T01:50:13.489Z"
    },
    {
      "id": "thm-tamed-euler-strong-order-half",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 inaccurately says the local SDE definition supplies an adapted continuous strong solution; its interface defines local solutions and explicitly does not assert existence. Existence comes from F2, so F1 misstates its dependency.",
      "context_sha256": "0cbe2b50206e2224a59fa6a419acc9fc5834a7d19be10bd887428367e91dfc7c",
      "item_sha256": "e20855e71506307339fe52231e45f40f3e9b1845ddc3415bb76d3b71a101003f",
      "at": "2026-10-17T01:50:03.168Z"
    }
  ]
