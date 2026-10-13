# Step 5 adjudicate: repeat, round 1, unit 77

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-77-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u77.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"77",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 11:def-gr-normal-neighborhoods-and-position-vectors, 13:lem-gr-position-vector-differential, 22:lem-gr-globally-hyperbolic-causal-structure, 25:lem-gr-compact-future-cone-intersections, 26:lem-gr-cone-bump-functions.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-normal-neighborhoods-and-position-vectors",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (d) uses P(p,q) on an arbitrary normal neighborhood, but (c) defines P only for pairs in a convex normal set. Normal neighborhoods need not be convex, so these causal-character assertions use an undefined vector.",
      "context_sha256": "822377cb5655b44d4809a03ab97afa034f52c55ef70374540652e410c3f74c2c",
      "item_sha256": "b7b2374ce9498c5be2d030132caa13601c9deba1d47d54a26a340bf826140f45",
      "at": "2026-10-13T09:24:59.090Z"
    },
    {
      "id": "lem-gr-position-vector-differential",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (b)'s 'in particular' fails for the fixed inverse at p. On a flat Lorentzian cylinder its star-shaped normal domain can select a long arc, although p,q share a small strictly convex normal set whose inverse selects the short arc. Reversal then fails.",
      "context_sha256": "da9afa7bdfb77299d4adefb6773090c1232b2d692d6f653665a1f60a4113b5aa",
      "item_sha256": "530f086086c16244cbee629270acbe9c228c7a3a3cf4579c3b91be9e1ba3cf0b",
      "at": "2026-10-13T09:33:29.276Z"
    },
    {
      "id": "lem-gr-globally-hyperbolic-causal-structure",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1 uses ambient open-cover compactness for K₁ and K₂. def-compact-space explicitly requires citing lem-compactness-of-a-subspace-is-ambient for this inference; that dependency is absent, and no intrinsic subspace-cover argument is given.",
      "context_sha256": "54f77df757eda47898bf93ca62e0117d6fe0e32f0c675badaf7bff3de4e41ccc",
      "item_sha256": "c5656a7bd236eab4d5f85f80b49254d0ffea0848a080cc13fdd45afe5ba3d65f",
      "at": "2026-10-13T09:32:19.244Z"
    },
    {
      "id": "lem-gr-compact-future-cone-intersections",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 applies compactness to the ambient cover by I⁺(z). The supplied def-compact-space expressly requires citing lem-compactness-of-a-subspace-is-ambient for this reading; that dependency is absent, and no intrinsic subspace-cover argument is given.",
      "context_sha256": "a0395ca7da99a1fc66c843519b3e2d684d3726aada100d188f910462dccb0811",
      "item_sha256": "5326d245e67f1bc82a2b2d021f68e48c13c234895b2ceebea5b2429c8e41ac22",
      "at": "2026-10-13T09:31:59.939Z"
    },
    {
      "id": "lem-gr-cone-bump-functions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims timelikeness on the truncated past cone: its vertex p' belongs to J^+(p')∩J^-(S_b), but the constructed bump has ∇h_p(p')=0. The proof establishes timelikeness only where h_p>0.",
      "context_sha256": "11c50999c35955add3572e304077daf096cdfe6224cd94c43344244b8a598f61",
      "item_sha256": "6e0ed99c7c2b85c1ac74c455aa150194c04cad7c8249c0d785b87125fecb8027",
      "at": "2026-10-13T09:32:07.573Z"
    }
  ]
