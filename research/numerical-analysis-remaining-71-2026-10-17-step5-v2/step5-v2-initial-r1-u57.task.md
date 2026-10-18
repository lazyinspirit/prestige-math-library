# Step 5 adjudicate: initial, round 1, unit 57

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-57-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u57.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"57",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-bem-plane-poisson-kernel-fourier-transform, 1:lem-bem-newtonian-kernel-is-fundamental-solution, 1:thm-bem-logarithmic-capacity-homothety-and-layer-scale, 2:ex-bem-logarithmic-capacity-and-scale-on-a-circle, 3:lem-pe18-outgoing-spherical-mode-expansion, 4:lem-bem-far-panel-quadrature-residual, 4:lem-bem-p0-negative-half-order-approximation, 4:thm-bem-helmholtz-layer-jumps-match-laplace-jumps, 5:lem-bem-helmholtz-double-layer-conormal-jump, 5:lem-bem-lipschitz-transmission-kernel-representation, 5:lem-bem-polyhedral-edge-kernel-representation, 5:thm-bem-exterior-helmholtz-dirichlet-uniqueness, 5:thm-bem-smooth-helmholtz-operator-compact-perturbation, 7:cor-bem-p0-galerkin-rate-for-h1-density, 7:lem-bem-panel-pair-duffy-certificates, 8:alg-bem-certified-inexact-matrix-assembly.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-bem-plane-poisson-kernel-fourier-transform",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "`axiom_use` says Countable Choice enters only through Fourier constructions, but Step 1's normalization uses the polar-coordinate theorem and chart-measure lemma, whose supplied interfaces also assume Countable Choice.",
      "context_sha256": "afe7aec5e7b22948acde063b9d268ea79a0ee41bef89b96c2f0450f2c5219e62",
      "item_sha256": "024abd7b6335b395a3a59d73b2d8e340c4820970819aa2dfe142f47188020101",
      "at": "2026-10-18T03:29:11.310Z"
    },
    {
      "id": "lem-bem-newtonian-kernel-is-fundamental-solution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 says full AC is required by the divergence theorem, but its interface assumes only AC_ω. Full AC suffices, yet this misstates the cited dependency.",
      "context_sha256": "47f79c763e775a313de9ce6c1cd949a50ebe2a2b527f2810b8b16880820150fe",
      "item_sha256": "3e3a7aa3ddf80566e249e9e0812e16686ffa95150e162f3fc0d20df023bb6fa9",
      "at": "2026-10-18T03:29:10.508Z"
    },
    {
      "id": "thm-bem-logarithmic-capacity-homothety-and-layer-scale",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The capacity dependency defines cap(K) only for compact K, but the theorem assumes only K⊂R² with positive finite capacity. Add compactness to make the capacity claim well-typed under the supplied conventions.",
      "context_sha256": "b7285f7c1ee7824306147428dea4c90bb0e787c69ffd3cae6cacf72783e06e60",
      "item_sha256": "95c67ec6041028783353441a050fdc2dad386811b9e362edaecf5e1fdf354260",
      "at": "2026-10-18T03:28:48.359Z"
    },
    {
      "id": "ex-bem-logarithmic-capacity-and-scale-on-a-circle",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title asserts a rank-one change for every s>0, but s=1 is allowed and gives log s=0, so the correction has rank zero. The proof correctly establishes rank at most one; the title overclaims.",
      "context_sha256": "7948ff37376dff674c1e9dc19cec81cf00d9c71c80e51e8a5aa717dd77793fd2",
      "item_sha256": "ca38c15b092d20562596ce8a5529624c09fcb04660002ce121fc9cb90d28cc03",
      "at": "2026-10-18T03:29:24.420Z"
    },
    {
      "id": "lem-pe18-outgoing-spherical-mode-expansion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 omits the supplied recurrence’s restriction ℓ≥1, so at ℓ=0 it invokes undefined h₋₁. Step 2.1 also uses that recurrence for every degree; the supplied interface does not support this claim.",
      "context_sha256": "7e35e9e3d8a27570fcfc4c54c66e9e392e51298dd2b2e3e342c2f6c2dc9cf59a",
      "item_sha256": "a7029902854d68b02a82cf02f62d9646adbbacac0685681c3241410a809a0d3e",
      "at": "2026-10-18T03:28:58.213Z"
    },
    {
      "id": "lem-bem-far-panel-quadrature-residual",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 and axiom_use misstate def-countable-choice: its supplied interface defines ACω but does not say it is inherited through the mesh context, and the mesh interface asserts no such inheritance. The proof uses no choice.",
      "context_sha256": "d9c5db177d2fbe77f75a1fa21e3479404fc8016c883ef68a735a5096ecaba764",
      "item_sha256": "659122b3547105d55f6b5c93379bc45c6c349b4354c1104b67d58a20a5411bfa",
      "at": "2026-10-18T03:29:13.691Z"
    },
    {
      "id": "lem-bem-p0-negative-half-order-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The stated family-independent C is not obtained: step 1.1 uses |T|≥πρ_T² and h_T/ρ_T≤K, yielding a constant proportional to the family's shape-regularity bound K². No uniform bound over all shape-regular families is assumed.",
      "context_sha256": "92bdf52b9086c19d39351a1e8b88e94ffc035672b1e9300080fe176edb65ca8e",
      "item_sha256": "cfe8f3030f10a77f729a746ef9c5f5de522435a2e700ea477d346c65c83087f3",
      "at": "2026-10-18T03:30:06.927Z"
    },
    {
      "id": "thm-bem-helmholtz-layer-jumps-match-laplace-jumps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F90 omits the explicit choice hypotheses required by both cited polar-measure dependencies, and the theorem’s assumptions do not supply them. The proof therefore uses those results without licensed hypotheses.",
      "context_sha256": "53a12b26d14d515d3d54e4504ee920a7ece5c53e171e5667c078057a88ff23f2",
      "item_sha256": "63f9e894ab830d817b619bfd0893ce989a6a02ba616cd22d952f3a2e2dfe8d9c",
      "at": "2026-10-18T03:29:12.909Z"
    },
    {
      "id": "lem-bem-helmholtz-double-layer-conormal-jump",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its cited interface: the supplier does not provide the double-layer trace jump or either layer’s distributional source identity. Steps 1.1 and 2.1 rely on those missing facts, so the cited dependency does not support the proof.",
      "context_sha256": "65e243f00c9e1ba3a86232a1b1a957234d54f2b4a399c6b5cd52b52248e8c9e5",
      "item_sha256": "bda8631e81f70f0b96fb051d91ebd80fac28bede3351ea27f24a54f67fb84b62",
      "at": "2026-10-18T03:29:06.485Z"
    },
    {
      "id": "lem-bem-lipschitz-transmission-kernel-representation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misattributes smooth approximation in Lipschitz charts to lem-bem-lipschitz-trace-and-lifting; its interface supplies extensions and traces, while chartwise approximation is stated in the graph-Green dependency. This is an inaccurate dependency restatement.",
      "context_sha256": "ff8a101a029e8c08e516242006ff65c7694a58bff9c8e929b5846f8ae31abb04",
      "item_sha256": "5d3e0f8821c4ac762cdbea83e08b391a36a05a5057431dfb58c289f0d595ef99",
      "at": "2026-10-18T03:29:48.402Z"
    },
    {
      "id": "lem-bem-polyhedral-edge-kernel-representation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 inaccurately attributes “smooth approximation in flattened polyhedral charts” to lem-bem-lipschitz-trace-and-lifting. Its supplied interface gives trace and extension results, but states no such approximation; steps 2.1 and 4.1 rely on it.",
      "context_sha256": "cfd23d3c76e3e6f947def981785f759e9b10aef5e07aa4086487dab2b22e5726",
      "item_sha256": "545e5c91f77b2781782ae062e16fd75dd2c664694c3430a6a231e3be44b49946",
      "at": "2026-10-18T03:29:25.297Z"
    },
    {
      "id": "thm-bem-exterior-helmholtz-dirichlet-uniqueness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 uses a weak Green identity for arbitrary weak Helmholtz solutions and their conormals. The cited lemma grants that identity only for its layer-potential restrictions, so F1 overstates the interface and does not license the key flux identity.",
      "context_sha256": "48b44c463d6bf0d5270bafb01ba0017551ec5013c143535d8de751687ea67f01",
      "item_sha256": "6e8533572c10ec741f73833a54a97e8052bd70e56ca1b5041922ae6b7a1b65ba",
      "at": "2026-10-18T03:29:18.810Z"
    },
    {
      "id": "thm-bem-smooth-helmholtz-operator-compact-perturbation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its cited dependency: the supplied jump theorem gives only the double-layer trace difference, not γ⁺Dₖφ=½φ+Kₖφ or a definition of Kₖ. The proof relies on that unsupported formula, and Kₖ is otherwise undefined.",
      "context_sha256": "adc3e846fbc65d6fdfd71d4bb36267d7c8711db2f728f325cf03044e4a5b52f5",
      "item_sha256": "bcfdc5c632c603c5fecfab0ad19a7636f27e078680d7b56c7b4649c974511d1b",
      "at": "2026-10-18T03:29:09.580Z"
    },
    {
      "id": "cor-bem-p0-galerkin-rate-for-h1-density",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited quasioptimality theorem explicitly assumes AC and Countable Choice, but the corollary invokes only its mesh and coercivity hypotheses. Thus F1 does not license the estimate under the stated assumptions.",
      "context_sha256": "31d2ad99df71ce0acc382311784606d52d77bf65edabd2f2a515b7314a8b19a6",
      "item_sha256": "17aeaa31cc3f80c70135276e604af38abdfcf27c974df2c0776aa8cdaf29e435",
      "at": "2026-10-18T03:29:21.105Z"
    },
    {
      "id": "lem-bem-panel-pair-duffy-certificates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[A1] misstates its cited interface: def-countable-choice defines ACω but does not assume it in the mesh context or supply Gaussian rules and refinement procedures. Those rules come from separate dependencies, violating the required dependency-restatement accuracy.",
      "context_sha256": "7387d236ebca17d99a57e557ff87d3e78ebfaaffcb97cbecc10ef05eadc340e0",
      "item_sha256": "52417121c1e68057c9fab5eda0e6b4d20c5e23027f3ba189e1c4387036b5486d",
      "at": "2026-10-18T03:30:34.905Z"
    },
    {
      "id": "alg-bem-certified-inexact-matrix-assembly",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Circular prerequisite: this algorithm uses thm-bem-matrix-perturbation-transfer as justified_by, but that theorem depends on and proves termination/correctness for this algorithm. The cycle prevents the theorem from establishing the algorithm’s well-definedness.",
      "context_sha256": "f90df90f016c589e64b671d6068f0f5a6a5e03479f861f650bd53036d882661a",
      "item_sha256": "d41f5d537de1ad25590647012bbcb785f768ea848da8111f94e0e00a16ecd15c",
      "at": "2026-10-18T03:29:36.671Z"
    }
  ]
