# Step 5 adjudicate: initial, round 1, unit 77

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-77-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u77.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"77",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:thm-gr-auxiliary-complete-riemannian-metric, 9:def-gr-future-and-past-sets, 9:lem-gr-coordinate-ball-geodesic-convexity, 9:lem-gr-joint-exponential-diffeomorphism, 10:lem-gr-contained-geodesic-velocity-bound, 11:def-gr-normal-neighborhoods-and-position-vectors, 16:thm-gr-normal-neighborhood-causal-cone, 17:thm-gr-length-upper-semicontinuity, 20:lem-gr-basic-limit-curve, 21:thm-gr-limit-curve-two-endpoints, 21:ex-gr-null-legs-corner-push-up, 22:lem-gr-globally-hyperbolic-causal-structure, 23:lem-gr-chronological-volume-continuity, 24:thm-gr-volume-time-function, 26:lem-gr-cone-bump-functions, 27:ex-gr-flat-cone-bump-explicit, 30:rem-gr-convex-normal-neighborhoods-scope, 30:cex-gr-flat-slab-coordinate-time-flow-incomplete, 30:ex-gr-flat-slab-explicit-splitting.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-gr-auxiliary-complete-riemannian-metric",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [L7] attributes compact-metric sequential compactness to def-complete-metric-space, whose supplied interface only defines Cauchy completeness. Step 4.1 needs compactness to yield a convergent subsequence; that essential implication has no valid supplier or local proof.",
      "context_sha256": "dbc3273ecf6521f7985dc21625d8733e047111d0b9d5e06c9f1f168773c38858",
      "item_sha256": "3c6366aaae3d1e4b8439bcc454e307dd487def875513ceb7408bf62a5d177eaa",
      "at": "2026-10-12T20:31:05.475Z"
    },
    {
      "id": "def-gr-future-and-past-sets",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: circular prerequisite. This definition uses `lem-gr-chronology-openness` to justify its claims, while that lemma’s supplied interface depends on the future/past sets defined here.",
      "context_sha256": "91758af58e7504f309cce0a6470d66f1c42d9e638a18ab1b6ea2db5b6c959ee1",
      "item_sha256": "6713348e91a616b2eab12d1750821e3fe146cf552a22985b0a17b99345382884",
      "at": "2026-10-12T20:29:30.098Z"
    },
    {
      "id": "lem-gr-coordinate-ball-geodesic-convexity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims convexity of the Euclidean radius |x| along geodesics, but the proof establishes convexity only of its square |x|². These are not equivalent; no convexity estimate for |x| is proved, so the title overstates the result.",
      "context_sha256": "080fe8626a66a4770194eacfea04401742922af1211499c90233d83913cbc049",
      "item_sha256": "fdafdc70b37a31a75eeb76161633e8b1c670602c8c6f4d358e3192f104debb72",
      "at": "2026-10-12T20:29:59.350Z"
    },
    {
      "id": "lem-gr-joint-exponential-diffeomorphism",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L5 overstates the cited basis lemma: it supplies a ball centered at x(p), not x⁻¹(B_s) for an arbitrary chart. Steps 2.1–3.1 use origin-centered balls without first requiring x(p)=0, so the product neighborhoods do not follow as written.",
      "context_sha256": "1d4f6df53712ce1791e78d36178af845b6f3fb6ae644f8b5c3bc53d823b9db9e",
      "item_sha256": "64b33652e3b7d599b535423ace374589739e2f0f37e175bfffa50f4f6499a823",
      "at": "2026-10-12T20:30:18.231Z"
    },
    {
      "id": "lem-gr-contained-geodesic-velocity-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L2] overstates cor-bounded-derivative-implies-lipschitz: its interface requires |f'|≤M, while [L2] assumes only f'≥−C. The cited result does not license the reciprocal lower bound used centrally in 1.1.",
      "context_sha256": "f96f874a48f8d41265b0e9236af634409fe29f1e7d4d20c00dfdae56c78adf11",
      "item_sha256": "42650edea6b148ff8c6ad07805e56ca15206f3dc45ed166fb2113874a6c93486",
      "at": "2026-10-12T20:29:26.037Z"
    },
    {
      "id": "def-gr-normal-neighborhoods-and-position-vectors",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (b) omits convex normality as a prerequisite for strict convex normality. Minguzzi Def. 2.3 requires both it and the closure-geodesic property. [Source](https://link.springer.com/article/10.1007/s41114-019-0019-x)",
      "context_sha256": "43139afc8563d1530bfbac593a086272f77f5c2296c206863c869c74359a2ee2",
      "item_sha256": "900597d991fe29d6186f6dbaa371e91772d82f56be70455964ea1dc7fc9d206f",
      "at": "2026-10-12T20:32:13.554Z"
    },
    {
      "id": "thm-gr-normal-neighborhood-causal-cone",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.2 applies (a) to the subarc from q back to p, but (a) only gives causal position vectors for curves starting at p. It therefore does not establish a future-causal geodesic from q to p, so the uniqueness contradiction and later uses of the no-return claim are unproved.",
      "context_sha256": "6688b683c43bb0a4b893cd63ed746b7c80bb07e1c63297a4d81871c5b26e6e74",
      "item_sha256": "940500137be43e51fdcfab9dc6c5650b1307a00d4ff43a4aea017bd28f01320b",
      "at": "2026-10-12T20:32:19.440Z"
    },
    {
      "id": "thm-gr-length-upper-semicontinuity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L2 overstates lem-gr-position-vector-differential (c): its interface gives smoothness of D² and its differential, not smoothness of (p,q)↦exp_p⁻¹(q) on U×U. The joint-inverse lemma supplies only a local near-diagonal inverse, so this regularity claim is unsupported.",
      "context_sha256": "f0cc823fae175af9ad3625c911775b38983ea056260d618396acb02a4fd36afd",
      "item_sha256": "358876b8620d7a22c5716760a84aa8bc2044021c48635266a3fa5e9643ef4fac",
      "at": "2026-10-12T20:31:06.709Z"
    },
    {
      "id": "lem-gr-basic-limit-curve",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L5 falsely says that ∂0 future timelike makes every causal vector with v⁰>0 future-directed; a tilted chart can give a past-timelike vector v⁰>0. Step 6.1 cites this invalid orientation test to classify α′.",
      "context_sha256": "09494b1c75e70995c43781f593e32b2202e88afb3c91d59c9e237754573113a3",
      "item_sha256": "1621b04e187ba9c61001f6528f016148a7a5f4572487a63d7791a477eb079018",
      "at": "2026-10-12T20:34:32.744Z"
    },
    {
      "id": "thm-gr-limit-curve-two-endpoints",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited theorem makes only h'=(1+|df|_h^2)h complete and proper, componentwise; h=g+2n♭⊗n♭ need not be. The statement misidentifies h, so step 1.1's compact-ball extraction is unsupported.",
      "context_sha256": "c4f020d3e4f8278e9f5a535e2318416ea536bd8a0a091d4b4637994577a5b381",
      "item_sha256": "95ae8f66a3647a4432bb26bfc47dd1b4b9ac7200bd40119c3eca32f35c5e903e",
      "at": "2026-10-12T20:31:14.089Z"
    },
    {
      "id": "ex-gr-null-legs-corner-push-up",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] misstates the future-causal criterion as v⁰ ≥ |v_vec| > 0, excluding nonzero future-timelike vectors with zero spatial part, such as r−p=(2,0,0,0). The supplied criterion requires only v⁰ ≥ |v_vec|.",
      "context_sha256": "c4fae64c357691a3aeb4e2be651fd2bec41492dcc37f825c3e7c010278594212",
      "item_sha256": "1efa49b5de921e1147c7760c7d3a1c0ca35684aac6322a0c92bf33ceecc16860",
      "at": "2026-10-12T20:30:39.340Z"
    },
    {
      "id": "lem-gr-globally-hyperbolic-causal-structure",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 5.1 simultaneously selects εₓ for every x∈K₁ (and similarly for K₂), requiring uncountable choice. The stated ACω and DC hypotheses do not license this. Build covers from all admissible ε values or add a stronger choice hypothesis.",
      "context_sha256": "4ea102f815fea062467b690cc57ec6d4fe5b00de237e29fe74ade421aaf49a53",
      "item_sha256": "7642093988a009cae703ddabc35367d99a886267660e3265368fdd08f8a866d9",
      "at": "2026-10-12T20:30:25.457Z"
    },
    {
      "id": "lem-gr-chronological-volume-continuity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal proof gap in [L1]: with U=M, strong causality may choose V=M, so this does not show the loop violates the condition. Step 4.1 relies on the result; choose U excluding another point of the closed curve.",
      "context_sha256": "9d14f2536b613b75a04559537c618da4f5050ef1ff7c39d3e796c196bef80f01",
      "item_sha256": "de98681fcf486360ff44e224ca8b27333a05334154c349e56e2a9c264aa85377",
      "at": "2026-10-12T20:30:59.638Z"
    },
    {
      "id": "thm-gr-volume-time-function",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Dependency mismatch: [L5] says the auxiliary metric h is complete, but thm-gr-auxiliary-complete-riemannian-metric proves completeness only for h'=(1+|df|_h^2)h. Step 1.2 needs completeness of the same metric used for length and distance to obtain its endpoint limit.",
      "context_sha256": "6f0035f45939433a72e2dad28d91a6fa4641d0b40a021c8223271608c28a3c64",
      "item_sha256": "44748a9dd36adf35ec32b0d38c130601d7afbe6c1bdca7ceb01e432c038356a5",
      "at": "2026-10-12T20:31:40.146Z"
    },
    {
      "id": "lem-gr-cone-bump-functions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] incorrectly restates J^-(S_b) as the strict region t<b. Since p∈S_b and J^- is reflexive, p∈J^-(S_b) with t(p)=b; the supplied interface gives t≤b. This also undermines the proof’s claim that p∈K.",
      "context_sha256": "116f8896e175bab3ebc60cd96031c0eba182461b40cf410dfbb7f0c39327cef6",
      "item_sha256": "595c16a425bbb56209eb0f78b696de349d031c7bf3e81cc68041d91d670f1f4b",
      "at": "2026-10-12T20:30:55.178Z"
    },
    {
      "id": "ex-gr-flat-cone-bump-explicit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L5] guarantees a cutoff equal to 1 on K, not on a neighborhood of K. The item attributes this stronger property to the dependency and uses it for the plateau claim, which the supplied interface does not establish.",
      "context_sha256": "d2772a0e3eff00dd43f21a22a05db4d1668a50fa00856fcb8bfb43f653651f37",
      "item_sha256": "ce254c986f7000150b4e4b2a848ec11fda52d989405dc7650c5ee53ea9445342",
      "at": "2026-10-12T20:31:15.432Z"
    },
    {
      "id": "rem-gr-convex-normal-neighborhoods-scope",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark attributes local causality and causal-cone calculus to thm-gr-convex-normal-neighborhoods, but its supplied interface establishes normal and strict convexity and unique contained geodesics; it states no such causal results.",
      "context_sha256": "5ccb737e234b573cc47ee418100f0ba2453e44c1596a75832607ec628973e3fc",
      "item_sha256": "85c8ccb5fcf19a8fd3b3d87bd9f00d68c5a657baf20be4cf8cd98b33644acfd1",
      "at": "2026-10-12T20:30:39.301Z"
    },
    {
      "id": "cex-gr-flat-slab-coordinate-time-flow-incomplete",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 and 1.1 claim every level t=c is Cauchy, but the cited slab theorem establishes only the t=1/2 slice. No argument extends that result to arbitrary c, so the title’s Cauchy-level claim is unsupported.",
      "context_sha256": "1824114fe3d4f0242c8e10a9e58d0e8ecdc7661c2d0f86739934c9a247ebce47",
      "item_sha256": "5304441edb3b6b6f4bfa843afa79e35cae0aa8d9f05ef4304a678b7a588a5d82",
      "at": "2026-10-12T20:32:14.323Z"
    },
    {
      "id": "ex-gr-flat-slab-explicit-splitting",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 says every slice t=c is Cauchy, but the cited slab theorem’s clause (c) establishes only Σ₁/₂; the cited definitions add no such result. Step 2.1 relies on this for all T-levels without proving it.",
      "context_sha256": "23f9924435a2571c35b73d2a3f1f70300112ab08785b084389d0e8ef3708941a",
      "item_sha256": "2f64c09d0b385fe6a143fcf812d40c42c7c36b0cd36689b63a6ddadcdfed498f",
      "at": "2026-10-12T20:32:50.869Z"
    }
  ]
