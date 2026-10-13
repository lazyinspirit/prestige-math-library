# Step 5 adjudicate: initial, round 1, unit 61

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-61-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u61.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"61",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-nrqm-scattering-three-dimensional-current-and-flux, 4:lem-nrqm-scattering-model-scaling-correspondence, 10:def-nrqm-scattering-framework-short-range-model, 11:def-nrqm-scattering-stationary-beam-and-cross-section-model, 11:pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness, 12:def-nrqm-scattering-partial-wave-and-phase-shift-readings, 13:def-nrqm-scattering-single-channel-resonance-model, 14:def-nrqm-scattering-coulomb-dollard-model, 15:rem-nrqm-scattering-scope-and-empirical-status.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-scattering-three-dimensional-current-and-flux",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: clause (c) uses C¹(S²) without defining regularity on the non-open sphere or citing a sphere chart interface. The supplied Cᵏ definition covers open Euclidean domains, so step 1.5's regularity claim is unsupported.",
      "context_sha256": "7229e73a96850e3b4a08a63f2c35e107f2a17b783cfe64fd59577936047ae6a9",
      "item_sha256": "bab2b83ab94dc7228b8fb48d7c7ae47affd7e75e716d928bc36d38f31ffd6395",
      "at": "2026-10-12T20:17:45.900Z"
    },
    {
      "id": "lem-nrqm-scattering-model-scaling-correspondence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F5] falsely says the unbounded operator f(E) is the operator-norm limit of its bounded truncations. The cited definition gives only vector-norm convergence on D(f(E)); for multiplication by x, the truncations do not converge in operator norm.",
      "context_sha256": "9906af8bf52ea9947f32651dec74e05e67a467b85e877738d97dca38a2d81b95",
      "item_sha256": "0c68d1f9533ea7d252adc5c4601d96744488c8b3390c47cadd71ede2fd8d4a4a",
      "at": "2026-10-12T20:15:49.964Z"
    },
    {
      "id": "def-nrqm-scattering-framework-short-range-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Class 2 permits unbounded V₂∈L², but the cited free-plus-potential theorem covers only bounded V. H is assigned as a sharp observable without proving D(Hfree)⊂D(M_V) or self-adjointness; the claimed on-page/A-page proof is absent and uncited.",
      "context_sha256": "1e2e52ceacf3e9273f8881566bcaa5d3b211fb8e818b0a052da62a08289af9c8",
      "item_sha256": "1341c47548680a0bd89545b7a8f0bb2ae604d6334b50aecb42cb482a5fa4084d",
      "at": "2026-10-12T20:17:02.038Z"
    },
    {
      "id": "def-nrqm-scattering-stationary-beam-and-cross-section-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the equation is imposed only on R^3\\supp V. For compactly supported V with support containing the origin, e^{ikd·x}+c e^{ikr}/r is an admissible exterior field for arbitrary c and can be extended arbitrarily inside; thus f_k and σ are undetermined.",
      "context_sha256": "78554582de9178b7e36ebec6d8345f0e08ede823848b936e6bc63f7892b9ac47",
      "item_sha256": "a08f767e546408ac0104552dc7be299fdcce409c02aa96fc7cb8b434d89f0c6a",
      "at": "2026-10-12T20:16:16.012Z"
    },
    {
      "id": "pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the scaling lemma: with c=E_* and ℏ'=1, it gives τ=tE_*, not tE_*/ℏ. The restatement needs an explicit time rescaling or the choice ℏ'=ℏ, m'=ℏ²/(2E_*).",
      "context_sha256": "7768201a275b96a6833a2fcf4ed9f6e63688cdc4f2729563d887e11ec278adbd",
      "item_sha256": "b5e03350dccda8cd2654c8f84e96d88204389bf7397df93fa3ed6a4c254d03a5",
      "at": "2026-10-12T20:17:09.212Z"
    },
    {
      "id": "def-nrqm-scattering-partial-wave-and-phase-shift-readings",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) says existence, |S_l|=1, and summability are proved “on this page,” but this definition contains no proof; they are supplied by its cited convergence-theorem dependency. Its proof-status claim is false.",
      "context_sha256": "e0c6d2f415b940aeac7000f896387c1287834bfed14521607c395e0eefadaa08",
      "item_sha256": "4fe1be268d10164ea386160f88100f6e137077d4421e52f83e6ae1308ef20af9",
      "at": "2026-10-12T20:17:02.344Z"
    },
    {
      "id": "def-nrqm-scattering-single-channel-resonance-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: clause (a) calls l a channel label in the sense of cited clause (b), which defines the label as (l,m). The formula then includes (2l+1), summing over m; the claimed single-channel scope does not match the cited interface.",
      "context_sha256": "012c371507b2c41284940220fc87e2c7242a082ece7f2717ee030d5dcf92e95e",
      "item_sha256": "5b794da4b548a0cee3d2fb7a277745f8a1c644b2662d09a9a55d944c9b96317b",
      "at": "2026-10-12T20:16:57.550Z"
    },
    {
      "id": "def-nrqm-scattering-coulomb-dollard-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) says modified completeness is established on this page, but (c) defines the wave operators only conditionally (“when both exist”). No existence or completeness theorem or proof is supplied, so this asserts an unsupported scattering result.",
      "context_sha256": "2dff6137d362d99e6ae6fe5733eec6a2cf13c81dafdf684406187883664bd3dc",
      "item_sha256": "b0a94e3e7741cb04306783dfbe9a1cd4a29425aae5d9af90a6fe7c0c0f7ccedc",
      "at": "2026-10-12T20:16:31.583Z"
    },
    {
      "id": "rem-nrqm-scattering-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal dependency defect: the remark cites the resolvent-tail completeness theorem for its completeness claim, but that theorem is missing from deps and dependency_roles.",
      "context_sha256": "686ccccee7459f9953e8856ec60ad39f8afcab6116102906c2e1dc75b6e4926f",
      "item_sha256": "dea3b0870a91020b48c6637667cdb8d2761414abe90955bf329c10ceb7bb5d8b",
      "at": "2026-10-12T20:16:38.553Z"
    }
  ]
