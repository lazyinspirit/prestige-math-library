# Step 5 adjudicate: repeat, round 1, unit 10

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-10-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-repeat-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"repeat",round:1,unit:"10",input_sha256:"611b5e80297790067c6be056d7608c885bf0204ba72d0ec1318ac250ee968130",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 8:lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands, 10:thm-deformed-hard-lefschetz-for-b-x-b-s, 11:thm-hodge-riemann-for-indecomposable-soergel-bimodules.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates uniqueness as up to a positive scalar. The dependency allows arbitrary nonzero real scalars: negating an invariant form preserves invariance and nondegeneracy. Positivity is asserted only for reduced Bott–Samelson restrictions.",
      "context_sha256": "897aa299211b67e381f0fd2a09ba8956537d45b2d432a56f0c0d3e98d7b546a8",
      "item_sha256": "be996924014418a22e6f98c45bc3d368c2e6d280b0044a55e823129d1b95e650",
      "at": "2026-10-11T17:10:03.668Z"
    },
    {
      "id": "thm-deformed-hard-lefschetz-for-b-x-b-s",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The unconditional zero-parameter descent claim is not proved: step 2.1 uses F1's decomposition and matrix, which require S(x), but the failure statement omits that hypothesis. The downstream character theorem cannot supply it here.",
      "context_sha256": "e7df25c358a595fe8733450ba974aa07d1cb570f3139254810966f6c30461ebb",
      "item_sha256": "1abf9cda0db991ea948001ef4c54c5cf93882d953043674751658ce3a2f94b03",
      "at": "2026-10-11T17:12:09.436Z"
    },
    {
      "id": "thm-hodge-riemann-for-indecomposable-soergel-bimodules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates case (3): the supplied hard-Lefschetz theorem also requires HR(x), which F3 omits from its zero-parameter ascent hypotheses.",
      "context_sha256": "d1db21d66a68fbd1ac40a6efa4f173745e0e354ad3f6d58a417569fff7110958",
      "item_sha256": "b86cc8ba63d987255227d16c28943f054c43285aaac956c25869238657f681fe",
      "at": "2026-10-11T17:10:30.333Z"
    }
  ]
