# Step 5 adjudicate: initial, round 1, unit 9

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-9-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"9",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cyclic-affine-type-a-cartan-datum, 2:lem-integrable-rank-one-actions-force-the-quantum-serre-relations, 7:def-finite-q-wedge-space-and-normal-ordering-relations, 16:lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices, 17:def-good-and-cogood-nodes-by-residue-signature-reduction, 18:prop-the-empty-partition-generates-an-integrable-highest-weight-submodule, 18:thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable, 19:thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cyclic-affine-type-a-cartan-datum",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The level is undefined as written: the declared pairing has domain P×P^∨, but the definition and step 3.1 use ⟨c,λ⟩ with c∈P^∨ and λ∈P. No reverse-order pairing is defined; the well-typed expression is ⟨λ,c⟩.",
      "context_sha256": "d3fca14ff953952da927991f44ed84a792d2c7d2dfe4a0a77b80d1df3c495ba7",
      "item_sha256": "f0707dd90df2c323bf0cf63121aa0c0629634e8a21a563fa9a01c318a0070428",
      "at": "2026-10-11T14:57:53.065Z"
    },
    {
      "id": "lem-integrable-rank-one-actions-force-the-quantum-serre-relations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] falsely restates string decomposition as expressing every vector as a sum of highest and lowest vectors. In the supplied L_i(2), v_1 is outside span{v_0,v_2}; the dependency instead gives sums of divided-power descendants of highest vectors.",
      "context_sha256": "f0e519d0f31a5032979ead23e49876fda667de54e8bff972e5c694b7e2f4db4e",
      "item_sha256": "35e735d8d49fb6c92dcae6c07f1436b4ae0a758178b6032c59453b9214c1dfa5",
      "at": "2026-10-11T14:58:26.600Z"
    },
    {
      "id": "def-finite-q-wedge-space-and-normal-ordering-relations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The definition asserts W_0 is an internal direct sum of normal-wedge lines, but step 5.1 proves only spanning. Independence is neither established nor supplied by a direct dependency; the sibling basis theorem cannot serve as this item's proof.",
      "context_sha256": "99330ca52eba954a0ec1d96da0473e8f1c5be5b521fdd1233eb743fb22d1df7b",
      "item_sha256": "0c96794d52a3ac55f1bff79a769ac749a949cb6930f4ff088c37b64ffcf4789d",
      "at": "2026-10-11T14:58:30.767Z"
    },
    {
      "id": "lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 promotes the tensor rule on L/qL to an exact rule on partition vectors. At e=2, (1,1) has decreasing signature +-, yet its normalized lowering operator gives q/(1+q²)|(2,1)>≠0. The survivor rule holds only modulo q.",
      "context_sha256": "b0f37a0d2fb336ae62e6540cdf3473b65bbf4000b7a3d3c654fc23de4090ecbe",
      "item_sha256": "f38a7718505f52a049d6dcf8c9b6659bec571b8bb904c70f8697645395ce3b3d",
      "at": "2026-10-11T14:58:59.644Z"
    },
    {
      "id": "def-good-and-cogood-nodes-by-residue-signature-reduction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 conflates crystal arrows with actual normalized operators. At e=3, the node formulas give tilde f_2|2,1⟩=q/(1+q²)|3,1⟩≠0. Only its class modulo qF_0 vanishes, so the asserted zero on the standard vector is false.",
      "context_sha256": "13bfe8a925b9613f266e33656bffb86f2421dbc9f77b38704955b7329a0902ef",
      "item_sha256": "dadd1c03aab4ffceaed754054d4bb8b18c2475aca2ac70351b277ab53c28b54a",
      "at": "2026-10-11T14:59:08.874Z"
    },
    {
      "id": "prop-the-empty-partition-generates-an-integrable-highest-weight-submodule",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Statement asserts that M's crystal is the empty component, but step 4.1 expressly postpones this claim. The cited crystal theorem describes the ambient Fock crystal; its interface does not establish the identification for M.",
      "context_sha256": "c6fc67df3700664201c24d2864be52f3ba6062d5ea0fe0acf5e61f15cac17edf",
      "item_sha256": "3f5b1b88df2da020a97cca0ab20510632381714af5b2d338228a3b869e4a3c3d",
      "at": "2026-10-11T14:59:20.846Z"
    },
    {
      "id": "thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 incorrectly asserts a finite geometric inverse without excluding the vacuum. The supplier guarantees it only on nonvacuum weights: T fixes the vacuum, so (1-T) annihilates a nonzero vector and has no inverse on the whole Fock space.",
      "context_sha256": "a47975fa2a2e7d482ae21cb3da7f8d7b5e8813bfe9b38355626526c0207c21f8",
      "item_sha256": "40865ff1abcc92ae0e58dc2f113e08d9db39b982672390af432baa1996352ac4",
      "at": "2026-10-11T14:59:08.609Z"
    },
    {
      "id": "thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] incorrectly asserts a canonical module decomposition. The dependency supplies an isomorphism Φ after choices, not canonical summands; the two copies at k=2 can be mixed by module automorphisms.",
      "context_sha256": "b1f6d482239e055158afdc13da39e68952dcdab2910782c1b5dc55d453d0673f",
      "item_sha256": "026dadb8be5b6ff9c122b9d4216f720d927079a44d89c4df7c9185cb8c61f26d",
      "at": "2026-10-11T14:59:00.661Z"
    }
  ]
