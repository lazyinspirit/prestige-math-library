# Step 5 adjudicate: initial, round 1, unit 34

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-34-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u34.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"34",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 16:alg-qa-finite-abelian-hidden-subgroup-reconstruction, 16:lem-qa-hidden-coset-state-law, 19:thm-qa-finite-abelian-hidden-subgroup-cost.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-qa-finite-abelian-hidden-subgroup-reconstruction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The algorithm’s input omits the exact supplied circuits required by the sample dependency (P_G, O_F, Q_G, with declared access/costs). Its repeated calls therefore lack specified inputs; include these circuits in this algorithm’s input.",
      "context_sha256": "62bb07cc758bce8e34791b80401d21099cee0de8221cc98031d049423820b917",
      "item_sha256": "3cd3864b45001c92b997bdabb85786d3fd72af214d7d473fb6d84a7ed6d8ab3c",
      "at": "2026-10-16T05:02:19.791Z"
    },
    {
      "id": "lem-qa-hidden-coset-state-law",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 omits the supplied definition’s self-adjointness requirement for a nonnegative operator. Step 2.1 checks only the quadratic form, so the proof does not establish that the coset projectors—or their sum—are nonnegative density operators.",
      "context_sha256": "3d9beed2f764e76a3ecca01214281eed36bf310aab90d21c970ab9e9394e3287",
      "item_sha256": "01fcad4f639103226ae02b537b87dfb4bf49d468f4c64abe7df0edfb2884ece0",
      "at": "2026-10-16T05:02:35.823Z"
    },
    {
      "id": "thm-qa-finite-abelian-hidden-subgroup-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 and F5 omit the reconstruction/sample procedures’ N=1 early-return branch. As stated, they falsely claim M sample calls and an oracle invocation per sample for the trivial group, contrary to the supplied interfaces.",
      "context_sha256": "48f6b5cd89264382c52f48e1d39fd9c423e66743896d3262fa5a2875d9b23cf1",
      "item_sha256": "1450fe403d6d660119d19760153957c75d16121a27ad476e7b0c34b7b41d59d5",
      "at": "2026-10-16T05:02:29.857Z"
    }
  ]
