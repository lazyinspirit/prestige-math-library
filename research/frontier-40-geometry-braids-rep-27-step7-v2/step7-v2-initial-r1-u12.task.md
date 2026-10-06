# Step 7 adjudicate: initial, round 1, unit 12

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u12.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"12",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-shifted-character-observables-and-profile-moments, 3:def-joint-convergence-and-normalized-cycle-character-observables, 4:lem-shifted-character-multiplication-by-p-k, 6:thm-plancherel-young-diagrams-converge-to-the-limit-shape.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-shifted-character-observables-and-profile-moments",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (c) states the scaling identity for λ⊢n without requiring n>0. The allowed case λ=∅, n=0 makes n^{-k/2} undefined; √n also fails the stated scaling hypothesis s>0.",
      "context_sha256": "c24ff5f7e7cb8f7c3f50af5b33cf138e5fb926d1f6c1780d56dff289c9e2166e",
      "item_sha256": "991da163fdb508c965561358c668fea29d8df2bc61e709696e3c85e6e97cf87d",
      "at": "2026-10-05T19:55:16.668Z"
    },
    {
      "id": "def-joint-convergence-and-normalized-cycle-character-observables",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited Plancherel definition explicitly defers normalization, so it does not establish that (Y_n,P_n) is a probability space. The random-variable and probability-law claims require prop-plancherel-weights-sum-to-one.",
      "context_sha256": "6e179c2b0c7d7d2c98f310c2dc14761927f9d8e0f671e9fbd1145f0b1badf827",
      "item_sha256": "efac40431f41efe9e4bbd458edb69025e840e6f6f124cd798b11a7ff4454bcb8",
      "at": "2026-10-05T19:55:12.501Z"
    },
    {
      "id": "lem-shifted-character-multiplication-by-p-k",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title promises exact products with p_k^#, but statement (ii) and its proof determine only the top deg_1 terms, leaving all lower-degree coefficients unspecified. The title therefore asserts more than the proof establishes.",
      "context_sha256": "32409238317e0ffefc8b2aab0bb2d1895a5e3040e7786ce530212cb664aa1959",
      "item_sha256": "1460289f91536c86fb146873262e62ca519cd4c8af0c5edf390b5f5a71bba909",
      "at": "2026-10-05T19:55:27.919Z"
    },
    {
      "id": "thm-plancherel-young-diagrams-converge-to-the-limit-shape",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 transfers the localization bound from the RSK shape of a uniform permutation to P_n. No supplied interface identifies these distributions. The missing RSK pushforward identity is essential to justify step 3.1.",
      "context_sha256": "085a81628d6efa67cc867fdecbde60803a5681b2f6f948a915a4a8fcc1b6d18d",
      "item_sha256": "569a26063fa948c4cd027181f4e1898b4b0579547b25a87db43c54f5da5b4a47",
      "at": "2026-10-05T19:55:55.843Z"
    }
  ]
