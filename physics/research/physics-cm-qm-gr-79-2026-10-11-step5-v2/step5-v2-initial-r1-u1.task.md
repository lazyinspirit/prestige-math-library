# Step 5 adjudicate: initial, round 1, unit 1

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-1-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"1",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cm-affine-time-space, 0:def-cm-constrained-configuration-and-mass-metric, 0:def-cm-traction-and-stress, 0:ex-cm-closed-one-form-radial-primitive, 1:def-cm-hyperbolic-equilibrium-and-limit-cycles, 1:def-cm-orbital-and-linear-stability, 1:lem-cm-moving-frame-acceleration-identity, 1:lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold, 2:cex-cm-collinear-labeling-admits-a-nontrivial-rotation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-affine-time-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The coordinates conflict with the supplied R^3 interface: it is the function space on {0,1,2}, but the item indexes coordinates and basis vectors from 1 to 3. Reindex the coordinate formula from 0 to 2.",
      "context_sha256": "6190ed9e5c427e0b3e8ee60fa61e7c213ea85df45e634181dee8a22444b024f5",
      "item_sha256": "b73dcdb4030309b934190e4d29f078a820b9f8202951794debd6066949cb206b",
      "at": "2026-10-12T19:17:24.711Z"
    },
    {
      "id": "def-cm-constrained-configuration-and-mass-metric",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited differential is typed into T_{X(q)}R^{3N}, but the definition applies M and the Euclidean inner product directly to its values as elements of R^{3N}. It never states the tangent-space identification needed to make G well-typed.",
      "context_sha256": "17c3ebc8763dc4174386dc429c4a7f49707e6b7ba72209c4d697614cc064c675",
      "item_sha256": "546654573020a3a8d8a909b2955aeb29ea5ad1fb8517e24c37c19f25194e2a4c",
      "at": "2026-10-12T19:17:05.671Z"
    },
    {
      "id": "def-cm-traction-and-stress",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The defining equation t(n)=σn is ill-typed under the supplied interfaces: the cited product definition multiplies matrices, but this item defines no matrix–vector product or embedding of n∈ℝ³ as a 3×1 matrix.",
      "context_sha256": "a274c736991fc963a386edb51caa27b4f27b67ab2804c1e14373f38f9b3b97d7",
      "item_sha256": "e0c20083fc995728ef7bbb651d97c8ddf15b50334c4622dfb064e7697e023097",
      "at": "2026-10-12T19:17:20.004Z"
    },
    {
      "id": "ex-cm-closed-one-form-radial-primitive",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item restates [L2] with one-based components and partial derivatives, but def-closed-and-exact-c1-vector-fields explicitly indexes coordinates and partials from 0 throughout.",
      "context_sha256": "15ab295be8f04ce4ecdadf9cb9b8d19c7048550179b92db2e36cfd10125472fc",
      "item_sha256": "3828284c9f345cdf528e3193b21c97d08036c37c1ee15aa8f1cba05e087da675",
      "at": "2026-10-12T19:49:00.503Z"
    },
    {
      "id": "def-cm-hyperbolic-equilibrium-and-limit-cycles",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark defines W⁺(z*) by convergence without specifying which solution through z is meant. The stated hypotheses allow nonunique solutions, so the same initial point can have trajectories with different limits; W⁺ is not well-defined as written.",
      "context_sha256": "aac27e62e1778a30a18a7d18d12234c8da77b66078a3d64145f55c97f3daf6eb",
      "item_sha256": "bfc924fb1f735fe7b80a60239b71a0bb79a5ea3a12c73f48a8a905bf662438f3",
      "at": "2026-10-12T19:17:29.725Z"
    },
    {
      "id": "def-cm-orbital-and-linear-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The limit-cycle example is not licensed by the hypotheses: a periodic solution gives one trajectory through each point of its image, but without uniqueness other maximal solutions may leave that image. It therefore need not be forward invariant, as orbital stability requires.",
      "context_sha256": "03bc25e62856e0c842968105faa1d516d1512aad5818c9050713102fe68abd54",
      "item_sha256": "2a5f550ca67f0f50bb6f8a7a31c66c639db892925b67814d5d5154c6f49b894b",
      "at": "2026-10-12T19:16:57.797Z"
    },
    {
      "id": "lem-cm-moving-frame-acceleration-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [L1] attributes the twice differentiability of R’s entries to def-cm-special-orthogonal-group, which only defines SO(3). Smoothness comes from the statement’s hypotheses, so [L1] inaccurately restates its dependency.",
      "context_sha256": "93da70e17fb78108df3722ff767ea5052df4a2005d251d30b94126c82095ec84",
      "item_sha256": "de3d2d82defb5d5e972f631acff8abd75a76d9926122d28afa0ab003003018ee",
      "at": "2026-10-12T19:16:57.556Z"
    },
    {
      "id": "lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 overstates its supplied interface: it gives an open subset a restricted smooth structure, but does not assert embeddedness in M₃ or equality of tangent spaces. Step 4.1 relies on both claims to establish clauses 1–2.",
      "context_sha256": "74603a8044ef8e542d860e6af1084d76ebf862df575628c5da7ed238f871afff",
      "item_sha256": "52c4ec942f4df5bca7527925e205c355b0cd95f9dd0f30b33bd73df37013aef8",
      "at": "2026-10-12T19:17:21.321Z"
    },
    {
      "id": "cex-cm-collinear-labeling-admits-a-nontrivial-rotation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L2 attributes det(diag(a,b,c))=abc to the cited dependencies, but neither supplied interface states or licenses the diagonal determinant formula; multiplicativity alone does not establish it.",
      "context_sha256": "42e80bf04c3e7759e8cbe68d31d99d911d3067246818f746f419a711ca1d9822",
      "item_sha256": "5034460521dc4fc8dbd129bd5aa850cd047614951fb0864050f493f1cb50b566",
      "at": "2026-10-12T19:51:14.706Z"
    }
  ]
