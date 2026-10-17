# Step 5 adjudicate: initial, round 1, unit 26

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-26-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u26.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"26",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-csm-statistical-state-observable, 1:thm-csm-regular-shell-coarea, 2:thm-csm-exponential-normalization-covariance, 3:post-csm-canonical-preparation, 3:post-csm-grand-preparation, 3:post-csm-isobaric-preparation, 3:post-csm-microcanonical-preparation, 4:pthm-csm-canonical-momentum-equipartition, 4:pthm-csm-grand-response-identities, 4:pthm-csm-isobaric-response-identities, 5:ex-csm-ideal-canonical-grand, 5:ex-csm-ideal-isobaric.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-csm-statistical-state-observable",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The closing sentence uses “macrocell” and an entropy assigned to it without defining either or specifying a measurable cell or entropy assignment. With arbitrary (Y,G), singleton fibres of M need not be measurable, so the macrocell-measure construction is not well-typed.",
      "context_sha256": "82ea9d6fc00dd87e1160dbb3cfd1b00f22981ca985e2b2b4618c91d0d423f1bf",
      "item_sha256": "9552bde61c9a66de00ded2e81ccd0f98399d0fe0e0767e442ce3ea157acd83a0",
      "at": "2026-10-17T07:58:55.216Z"
    },
    {
      "id": "thm-csm-regular-shell-coarea",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.2 integrates f∘Φ_t over Γ for arbitrary q∈C_c(J), but A3 defines Φ_t only on one compact band. The integrand may be undefined outside it; the argument must localize q to that band’s interior.",
      "context_sha256": "6978761f089a54b86796157dc15a2d4efe03f136a7ec96364c1ac53f056c8dc2",
      "item_sha256": "d996d68ddf80d046197875a3480297e2d6913f914d2a658e0550e30f7ce6382f",
      "at": "2026-10-17T07:59:00.345Z"
    },
    {
      "id": "thm-csm-exponential-normalization-covariance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 cites [F4] to identify the covariance, but the supplied definition applies only to phase-reference spaces (Γ_N, F_N, m_N). The theorem assumes an arbitrary (Ω, F, m), so that dependency does not license the identification.",
      "context_sha256": "49520becbc810c729e1f3bdb15241a172b044d8b56ac3e95d0b9a90b3130bb45",
      "item_sha256": "d096c82771128fe0b9dd3b1b182fe1e1e70bd4dcf5465d011b9b72ac8a3140a9",
      "at": "2026-10-17T07:58:10.570Z"
    },
    {
      "id": "post-csm-canonical-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A label-dependent measurable H is allowed, but its Gibbs density need not be permutation-invariant. The counting dependency says a labelled density represents a physical quotient state only if invariant almost everywhere; add this condition or narrow the scope.",
      "context_sha256": "823637794474dc1115e8b45e9b943cc14429fc8ee794276b786bcd8ea6a4eb54",
      "item_sha256": "54f8ebec3c0bc95e789abf14e7476fe8ac44e10e8231ed540609ece94fe6c9f8",
      "at": "2026-10-17T07:58:39.215Z"
    },
    {
      "id": "post-csm-grand-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "H_N need not be invariant under within-species permutations, so ρ may depend on labels. The cited counting interface says such a density does not define a physical state on the indistinguishable-particle quotient. Require invariance or narrow the scope.",
      "context_sha256": "405719cb3d6ca11fbc15b370e1f1fa1638754573de7c321cd4d19671e9d52a6a",
      "item_sha256": "7c77da0b535a23524de21ab41e633976d98a8aa37bb4d45e47a5dc88a301ce0a",
      "at": "2026-10-17T07:58:43.396Z"
    },
    {
      "id": "post-csm-isobaric-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "ν_N already includes dV/V0 on the full (V,y,p) space, so the extra ∫₀∞ in Δ_N double-counts volume and invalidates normalization. The N! indistinguishable-particle convention also requires permutation-invariant H_N, which is not assumed.",
      "context_sha256": "944520531331cc9b564c3d61d63545049a829fef35ef24c5277dd4f52f22f085",
      "item_sha256": "19a00c9ee26690749cf3e54d070f3243c55599253851d574480376407c6e84e0",
      "at": "2026-10-17T07:59:49.909Z"
    },
    {
      "id": "post-csm-microcanonical-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited indistinguishable-particle interface requires H to be G-invariant for its law to descend to the quotient. This postulate permits arbitrary H, so P_E or P_B need not be a physical quotient state.",
      "context_sha256": "5f1011353f7b0de00f5d042ca1d3aab1936e343e7d77b4d751a55488ee06034e",
      "item_sha256": "34689b4dee13423f26eb09c1692df6723c79bc1b0504af37bb2302cf3d5d25aa",
      "at": "2026-10-17T07:58:59.219Z"
    },
    {
      "id": "pthm-csm-canonical-momentum-equipartition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A2 misstates the counting interface: it defines m_N^phys on the whole labelled phase space Γ_N, while A2 calls it the restriction to C_N×R^n. The state density vanishes outside that support; the reference measure itself is not restricted.",
      "context_sha256": "e9bd6ca5922d177a2182e895f18b32436f14085107427f40cd60afceaa1d8683",
      "item_sha256": "bdc8c214c415e6f74cbbfda1170f0f45863c76fceae8176d53d43a196eef45a4",
      "at": "2026-10-17T07:58:25.867Z"
    },
    {
      "id": "pthm-csm-grand-response-identities",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 attributes the local exponential-envelope bounds to [[post-csm-grand-preparation]], but that postulate supplies only finite normalization and the grand density. Although the Statement separately assumes those bounds, A1's dependency restatement is inaccurate.",
      "context_sha256": "2a8cd42b3dc4ab077ba624426e969836afa57328f19c3f55aca2b972475ce884",
      "item_sha256": "2fcb9fe5adc1a889ffb6db4687d8aa25e2e755fa51b283cce6a04d82269abe96",
      "at": "2026-10-17T07:58:46.469Z"
    },
    {
      "id": "pthm-csm-isobaric-response-identities",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The prerequisite allows any d≥1, assigning V units m^d and P_ext units J m^-d; def-td-si-quantities assigns volume m³ and pressure J m^-3. This theorem never restricts the preparation to d=3, so its inherited physical units conflict for d≠3.",
      "context_sha256": "504f0b757915d084ef84fdffddc67e8a437a161edde52004db16d9a9b6c38332",
      "item_sha256": "57d6bc99298cf5e3b9e59944565dfbbe691a40b3a0c8d5e5d547d74640582179",
      "at": "2026-10-17T07:59:07.307Z"
    },
    {
      "id": "ex-csm-ideal-canonical-grand",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With arbitrary d, def-td-si-quantities fixes V in m³ while λ_T^d has units m^d; V/λ_T^d is dimensionless only when d=3, contradicting the stated scope and remark.",
      "context_sha256": "94f55090302ca3e76bf9ba4050150afb775795f0dc871eebf6b4998493163536",
      "item_sha256": "a4ac07b4039bf27fc27ca071a1531ccf45eaa0f24db1da1838d8d492cb667c4a",
      "at": "2026-10-17T07:58:58.928Z"
    },
    {
      "id": "ex-csm-ideal-isobaric",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 invokes the response theorem, whose hypothesis is local exponential envelopes for (B,V), but justifies them from V’s tail and polynomial moments only. This does not establish exponential integrability of K; prove the Gaussian envelope or omit the theorem.",
      "context_sha256": "55b1376e76fb3e298672f2569c98142b6fea9545da5baa584688209ec1e7b96d",
      "item_sha256": "eb9cebfaa4985cebc272e0949dd43df6b661872580d6efcd3ba74f758347af8e",
      "at": "2026-10-17T07:58:56.994Z"
    }
  ]
