# Step 5 adjudicate: initial, round 1, unit 24

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-24-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u24.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"24",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-degenerate-affine-hecke-algebra, 0:lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties, 1:lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize, 5:thm-ordered-monomial-pbw-basis-for-the-shifted-yangian, 5:thm-skryabins-equivalence-for-the-type-a-whittaker-pair, 32:def-the-whittaker-functor-from-the-relevant-parabolic-o-summand, 34:cex-a-hecke-action-alone-does-not-imply-double-centralizer, 38:thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-degenerate-affine-hecke-algebra",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed uniqueness of the quotient isomorphism fails for d=3: composing the constructed map with conjugation by (1 2) fixes every specified image a+J_j but changes the image of s_2 from (2 3) to (1 3).",
      "context_sha256": "4e6852b47f8485e41c9d20bd208080fd564bc7731ce66d8f2deae837144197e3",
      "item_sha256": "98c9def3b520f49d373c53bfbdb49caa6104094d255f31c24ffd0331231c6a5c",
      "at": "2026-10-11T15:13:28.269Z"
    },
    {
      "id": "lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 misidentifies the fibres. For dim U=1, dim W=2 and nonzero A,B with BA=0, the fibre over BA has dimension 3, while its ordinary centralizer has dimension 1 and the pair stabilizer dimension 2. The required numerator is Z_GL(U)(BA)×GL(W).",
      "context_sha256": "2f9667ce962771db5e6aa45eaea466e51ebaa6a344fdaaff568d3528fadaa687",
      "item_sha256": "2335ec6b0d2dfd94701776cfa45c7409c8de048e64c4f7331e6e778f017abe4f",
      "at": "2026-10-11T15:15:17.371Z"
    },
    {
      "id": "lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 and step 4.1 invoke complete reducibility for rational GL(V)-modules, but the cited Weyl theorem covers only semisimple Lie algebras. Since gl(V) is not semisimple, a reduction establishing the required invariant lifting is missing.",
      "context_sha256": "3dd79afbac668b758ccc72ee17d18af227246c1b178c305583b0f1cb1c0199e0",
      "item_sha256": "122ed1d4fd0733b86f479b3a5033d84fe940f0bbb1411dc00252922afd87cdfb",
      "at": "2026-10-11T15:15:16.911Z"
    },
    {
      "id": "thm-ordered-monomial-pbw-basis-for-the-shifted-yangian",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Statement unconditionally calls the finite loop associated graded noncommutative. For n=1 and p_1=1, W=C[D_1^(1)] and its loop associated graded is commutative, concentrated in degree zero. This allowed case contradicts the claim.",
      "context_sha256": "316e8abd783fc87ce43d71cffac0db79a8b81cc8170e0fd21dbc1988387bb3b3",
      "item_sha256": "8032c1e46124e30b1ec622fa3f3fab94686e2484f6e07ad429cb5cf96629fd05",
      "at": "2026-10-11T15:18:15.495Z"
    },
    {
      "id": "thm-skryabins-equivalence-for-the-type-a-whittaker-pair",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 claims the cohomology supplier proves Qχ is right-free over W(λ), but its supplied interface makes no such assertion. This inaccurately restates the dependency used to justify exactness.",
      "context_sha256": "82069599b91ff0b02540ba4caa6bb21b5009404c62f802b5edbaf9278cb4eb1b",
      "item_sha256": "fb4994e0589f9536876a9828593673f0097ca49f89e93c7e4c9df8c250554175",
      "at": "2026-10-11T15:15:17.056Z"
    },
    {
      "id": "def-the-whittaker-functor-from-the-relevant-parabolic-o-summand",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 3.2–5.1 allow arbitrary finite-dimensional tensor factors, including central Jordan blocks. For gl_1, take N=C and Z with E_11 acting by a nonzero nilpotent Jordan block. Then N⊗Z is not Cartan-semisimple, lies outside genuine O, and V(N⊗Z) is undefined.",
      "context_sha256": "9d3bd35084b8115427b4f1590e50887a4d6e36da6ca9e500f5848dc2815ad96f",
      "item_sha256": "6eb790e7119cdebe1363fcaacb7694a61c255e9efe72e6527c3fe45f8d9178c4",
      "at": "2026-10-11T15:15:41.421Z"
    },
    {
      "id": "cex-a-hecke-action-alone-does-not-imply-double-centralizer",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 incorrectly calls the deformed W/cyclotomic setup equivalent to the U(g^e)/truncated semidirect setup. The cited theorem identifies only associated graded image algebras; it does not identify these actions. The centralizer calculations themselves are sound.",
      "context_sha256": "0b5031df6ebfcf9a53d24d89dd3cfe48207a756f159ab4a72f48ad32c7ea5459",
      "item_sha256": "781a03ec52668823a019baf0d7e748f7d83c8f155e6960a000620df5a3586db9",
      "at": "2026-10-11T15:18:15.146Z"
    },
    {
      "id": "thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause 2 conflates raw Whittaker vectors with the supplier's continuous-dual functor V. For the one-row, two-column pyramid, c=(0,0), d=0, Wh(P_c)=0 (the negative root acts freely), while pi(P_c)=C. Thus its displayed isomorphism fails.",
      "context_sha256": "9199b1ab1670c21877e693193dd027181b764c295bbfb4662b2b87871dcbd46e",
      "item_sha256": "69ef365e4c87675d336e82d3ccb5342aceda4f8344857d7a45eb5bd4dd9bd861",
      "at": "2026-10-11T15:18:15.218Z"
    }
  ]
