# Step 7 adjudicate: initial, round 1, unit 16

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u16.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"16",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions, 0:thm-banach-implicit-function-theorem-for-a-split-surjective-derivative, 2:lem-strong-ltwo-compactness-preserves-unit-normalisation, 2:lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative, 4:thm-finite-regular-constraint-lagrange-multiplier-rule, 8:cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible, 11:cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity, 12:cex-obstacle-complementarity-product-needs-extra-regularity.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 defines the compact exhaustion using 1/j, but sequence indices start at 0. For a proper open O', K_0 is undefined, so the stated exhaustion and countable-union argument are not well-defined.",
      "context_sha256": "c9794448a7b8e5b4520151d0ae0a42f083d866dab868a4603749000ac2c135b8",
      "item_sha256": "5cf7a695588f04ac62593e0eaaf3b78bfdcd358d8da506674557a7b92128d22b",
      "at": "2026-10-06T02:07:15.656Z"
    },
    {
      "id": "thm-banach-implicit-function-theorem-for-a-split-surjective-derivative",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] inaccurately restates the standard-basis interface: R^m has standard vectors e_0,...,e_{m-1}, and e_m is undefined. Thus step 1.1 cannot select u_m with DG(u)u_m=e_m; already m=1 fails.",
      "context_sha256": "886552ae809ff08afaf7ff4a3c84c52634f41ccd39d76f22358195e7680bccc9",
      "item_sha256": "8495db41c838661b92d471c993c14a1e5b59b95e204ec1ec3f8387dc134b5042",
      "at": "2026-10-06T02:05:54.878Z"
    },
    {
      "id": "lem-strong-ltwo-compactness-preserves-unit-normalisation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 omits the dependency’s real-valued hypothesis. H^1_0 allows complex scalars, so ζ=u−w need not belong to L²(Ω;ℝ). Step 2.1 must fix real scalars or apply F5 separately to the real and imaginary parts.",
      "context_sha256": "a5239821cdb97dabfc0d4ed23b1d8501cdb27f1dd4bf0bf8f005bc679ad6daba",
      "item_sha256": "27a238536b8e2902e80a9d63051f1687f86bee7c4cc0ae600b3dc82fb5f751b3",
      "at": "2026-10-06T02:05:55.770Z"
    },
    {
      "id": "lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The statement allows m=0, but F2 omits the realization lemma’s chart hypotheses, supplied by an implicit-function theorem requiring m≥1. Step 1.2 therefore lacks justification for m=0. Handle that case with c(t)=u+th, or assume m≥1.",
      "context_sha256": "6d760a1c6134fc49c9cb2f44947e88de8344cf9b8b259e0a8faaed4884a8d31b",
      "item_sha256": "b34070b867483acf9d3d3e0d14b7c9f1fc3146da8231c656903049d93ebf5097",
      "at": "2026-10-06T02:06:23.566Z"
    },
    {
      "id": "thm-finite-regular-constraint-lagrange-multiplier-rule",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F5] omits the dependency's hypothesis m≥1. The statement permits m=0, so step 2.1 applies that lemma outside its supplied scope. Add m≥1 or handle m=0 directly using step 1.1.",
      "context_sha256": "bc0958787f500857ffc3b7a0d52b4ee9e00c52cc561f22d4e0c67ea816e0ebe5",
      "item_sha256": "5d8a4e2f87fbceb08522d2a071ae5c5b1cfb25fb5894d26d898e7663e587d7b6",
      "at": "2026-10-06T02:06:32.883Z"
    },
    {
      "id": "cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited definition requires every obstacle to satisfy Tψ≤0, so ψ≡1 is not an obstacle under that interface. Every permitted obstacle has ψ⁺∈K. The example therefore cannot refute the stated claim of nonemptiness for every obstacle.",
      "context_sha256": "6193f7bc2301269922b3db6d3834e6f3e18aef8811c8220dd0d7235eb7743d24",
      "item_sha256": "961d9f9aeff246205404ac0f32cfdb88fe98d7080f7d448477bc18b0ace5f419",
      "at": "2026-10-06T02:08:46.056Z"
    },
    {
      "id": "cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 allows complex-valued χ, but K and the variational inequality are real. For χ=iη with a nonzero real cutoff η, u±εχ are not in K and the displayed order inequality is undefined. Restrict to real tests, then extend complex linearly.",
      "context_sha256": "9e4358221ea6a936d330509350d7df7478136d2dcfdf69dcf0fe03e27255e44e",
      "item_sha256": "f2de45fb319bbbbb9e246e55f44fe62551c9531f88f9e2065d1e140fe5d58a2a",
      "at": "2026-10-06T02:07:29.661Z"
    },
    {
      "id": "cex-obstacle-complementarity-product-needs-extra-regularity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 falsely claims that every measurable function vanishing on B\\{0} has zero Dirac integral. The function 1_{ {0} } vanishes there but has integral 1 against δ0. This reverses the cited null-set principle.",
      "context_sha256": "18d69d30c5c21e3567b5d1989162ed548ea570269eff948d864ade13e2ac5508",
      "item_sha256": "400a6dd1062b27452bf77da034ce14b1c3e50720ee745e699429e6a0d8e25de2",
      "at": "2026-10-06T02:08:33.982Z"
    }
  ]
