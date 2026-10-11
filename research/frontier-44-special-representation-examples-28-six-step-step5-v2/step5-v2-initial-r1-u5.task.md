# Step 5 adjudicate: initial, round 1, unit 5

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-5-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"5",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-divided-power-and-toral-quantum-binomial-reordering-identities, 1:lem-finite-support-regularization-of-quantum-label-weight-modules, 2:lem-cartan-projection-constructs-the-quantum-verma-contravariant-form, 3:lem-rational-local-quantum-halves-and-torus-specialize-at-q-one, 3:thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, 6:ex-specializing-a-quantum-highest-weight-lattice-at-q-one, 7:cex-direct-q-one-substitution-in-quantum-denominators.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-divided-power-and-toral-quantum-binomial-reordering-identities",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 and step 1.2 use quantum integers at arbitrary negative indices, but the supplied definition defines [m]_i only for m∈N. Neither cited interface supplies the integer extension, so the auxiliary identity is not well-typed as stated.",
      "context_sha256": "6f1e7293acdc696a835decff5b3d03399fbc560a432205203479b2b57e90d7d0",
      "item_sha256": "e63384ce497ce82ae0ba7beef4344e9488bf9bc3cd30b1aaa9b4f20434b6cc41",
      "at": "2026-10-11T14:54:44.604Z"
    },
    {
      "id": "lem-finite-support-regularization-of-quantum-label-weight-modules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (v) invokes classical weight-multiplicity comparisons from prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism. Its supplied interface proves only existence, isomorphism and minimal dimension; it supplies no multiplicity comparison.",
      "context_sha256": "7144ae529c82cfdef40dd1cd39ee52be6fe155a50f6bdbcba9ca2f39e1e83435",
      "item_sha256": "27a94ebc60ac712ece28fb8c39bb2e8dd5010e72750c7e13e4a146a8ea84aeab",
      "at": "2026-10-11T14:54:41.184Z"
    },
    {
      "id": "lem-cartan-projection-constructs-the-quantum-verma-contravariant-form",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 invokes uniqueness for arbitrary highest weights, but the cited interface assumes dominant integral λ. The lemma allows every λ∈P, so this invocation does not establish symmetry in its stated generality; a general uniqueness argument is needed.",
      "context_sha256": "57a7e2714f4f5debfd9623184f8aa7f054ec785a53cb7d34eac1864c6d154267",
      "item_sha256": "b7b7c78e777325d93e7dc68b138df362c9499994a8dfaa96ac42b8986ce25d69",
      "at": "2026-10-11T14:54:54.343Z"
    },
    {
      "id": "lem-rational-local-quantum-halves-and-torus-specialize-at-q-one",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 miscomputes the negative-shift character: with K=-1 and c=-1, the defining product gives T_{i,-1,1}=1, while its claimed (-1)^t binom(b+t-1,t)_i gives -1 for b=t=1. The correct negative-shift value has no prefactor (-1)^t.",
      "context_sha256": "6f16bdb4ec17ad04f34b539e9621b4de4821615e7aa8ef5ee804ce963f26366a",
      "item_sha256": "1eec7af9699e155bf85d806d5527ac577badcc531ec4b0e87f0fd57198e63b85",
      "at": "2026-10-11T14:54:57.828Z"
    },
    {
      "id": "thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] inaccurately restates the separation lemma as supplying a symmetric nondegenerate bilinear form and matching-permutation formula. Its supplied interface asserts only skew-derivation separation, so step 1.1 does not establish existence or symmetry.",
      "context_sha256": "136e7563698864def5178e8c074b8b26df6c27bc09672381974c452edbd05928",
      "item_sha256": "680e40311600beb748a64590676ff109fe3f6c1c732a3110e765586344d4a50e",
      "at": "2026-10-11T14:54:20.259Z"
    },
    {
      "id": "ex-specializing-a-quantum-highest-weight-lattice-at-q-one",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates the deformation lemma (a) as identifying the module with the classical simple module. Its supplied interface asserts equality of characters only; the fibre identification in (c) concerns the specified R-lattice.",
      "context_sha256": "8f4954ae09d0e243e5afe280f6259a2948fa65c1f27d2c46a475c673a2beb78a",
      "item_sha256": "b4a372c60642826399829c8fd1d02142173669a451886f5802e1d2584917f5f1",
      "at": "2026-10-11T14:55:06.594Z"
    },
    {
      "id": "cex-direct-q-one-substitution-in-quantum-denominators",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 asserts classical Cartan relations in the unquotiented specialization U_A⊗_A k. The cited proposition grants these only after imposing K_h=1 or on label-graded lattices; its part (d) explicitly retains toral characters in the full specialization.",
      "context_sha256": "9ecdcd1f10e8a446980771786d96fd37b1dd8e26305d42d5f3aecc28d55c2117",
      "item_sha256": "3f311daa4385008f50850be9d4a6815872cb834534c453e9f73bb6e00605fc60",
      "at": "2026-10-11T14:55:06.021Z"
    }
  ]
