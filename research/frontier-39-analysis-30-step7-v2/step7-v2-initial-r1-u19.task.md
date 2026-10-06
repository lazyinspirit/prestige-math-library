# Step 7 adjudicate: initial, round 1, unit 19

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u19.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"19",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-discontinuous-viscosity-solution, 2:lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary, 3:cor-hopf-lax-preserves-a-modulus-of-continuity, 3:lem-doubling-variables-maximum-localisation, 3:prop-classical-solutions-are-viscosity-solutions, 3:thm-half-relaxed-limit-stability-for-viscosity-solutions, 3:thm-stability-of-viscosity-solutions-under-local-uniform-convergence, 3:cex-hopf-lax-without-convex-superlinear-coercivity, 4:ex-eikonal-equation-as-a-viscosity-equation, 5:cor-finite-speed-of-dependence-for-lipschitz-hamiltonians, 5:cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions, 5:ex-distance-to-the-boundary-is-the-viscosity-solution-of-the-unit-eikonal-dirichlet-problem, 6:thm-perron-method-for-hamilton-jacobi-equations, 6:thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-discontinuous-viscosity-solution",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The remark incorrectly calls u_* the least semicontinuous function below u. The cited lemma makes it the greatest lower semicontinuous minorant: for u≡0, the continuous minorant −1 lies below u_*=0.",
      "context_sha256": "a3ee746f748dcb6c3b2f3ce38670e1618837e62d0a8e8d1319275e255032dd1e",
      "item_sha256": "baa2a20f51ae971ac77a934b873e19ebec40c73058185730f0e22fee4c7d8443",
      "at": "2026-10-06T02:16:46.076Z"
    },
    {
      "id": "lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The first remark falsely bounds the change in the viscosity inequality by η/T². The penalty shifts the test time derivative by η/(T−t)², which exceeds η/T² for t>0 and diverges as t approaches T.",
      "context_sha256": "399d73094da51a04ca7de1dcb875df9064778d4b69170e4861dfd89cf28964e9",
      "item_sha256": "042f8b8e87ea6249862ff05a8731024a81dc38daebb313a4628dfbbc8f37e1d3",
      "at": "2026-10-06T02:17:43.973Z"
    },
    {
      "id": "cor-hopf-lax-preserves-a-modulus-of-continuity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates def-metric-uniform-continuity as defining a modulus of continuity; the supplied interface defines only epsilon-delta uniform continuity and contains no modulus definition. The translation argument itself is valid.",
      "context_sha256": "5f0007038dcb0ffddd3d5fcf031653d2d7fe160733120dfd42a951913ca0bf24",
      "item_sha256": "6af65e94a376e9bddf0711cf4c85b7a1c5f1fd01de57ecae4a4f1416609cf666",
      "at": "2026-10-06T02:18:54.664Z"
    },
    {
      "id": "lem-doubling-variables-maximum-localisation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title promises jets at the maximiser, but u(x,t)=-t and v(y,s)=s give a maximiser at t=s=0. The supplied jet interface requires an open domain; the proof establishes only relative contacts and does not justify boundary jets.",
      "context_sha256": "5476dbed2199e44d6cfb0227707e5261f53c03638206c81aa6f27a67b3e66461",
      "item_sha256": "ae4397d08cc2b7459b5e02067f4988ca268b87c91bbed92d3b7c23e1ce27d454",
      "at": "2026-10-06T02:17:40.791Z"
    },
    {
      "id": "prop-classical-solutions-are-viscosity-solutions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 replaces the required joint limits as (y,s)→(x,0) with time-only limits as s↓0. Step 2.1's continuous extension to the initial face does not follow from this weaker restatement.",
      "context_sha256": "343bd68c26721829d6eab2db989c36c8bc88d5f897aec316ab77f60b60f1fd89",
      "item_sha256": "17d326515324bcb0edd612f1eade1cc29bde5af080e7067789411eafa57aac08",
      "at": "2026-10-06T02:17:09.114Z"
    },
    {
      "id": "thm-half-relaxed-limit-stability-for-viscosity-solutions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 applies F6 to ambient balls covering the annulus. The compactness interface explicitly forbids this ambient reading without citing lem-compactness-is-intrinsic; that citation is absent. Step 2.1 repeats the unsupported use.",
      "context_sha256": "d736fafb7986664f290e75f479202c0c3f935bd20df41527a730c1df8cfa99fa",
      "item_sha256": "679edf3e69b427bfa05a66b2f15cd8e75b7c08dd783b9214a9b5c57f461d2fb1",
      "at": "2026-10-06T02:17:28.159Z"
    },
    {
      "id": "thm-stability-of-viscosity-solutions-under-local-uniform-convergence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] misstates its dependency support: def-metric-uniform-continuity defines uniform continuity of one map, not uniform or locally uniform convergence of a sequence; def-metric-compactness supplies no convergence definition either.",
      "context_sha256": "829460bdaf517741b617316df1436bbfdf3a4e2369edbc7a553719e4c8c993a9",
      "item_sha256": "797c57f72aa431da811e27865ec6ff0f4d1bcd06412c766c185f15a871afbfd9",
      "at": "2026-10-06T02:17:12.672Z"
    },
    {
      "id": "cex-hopf-lax-without-convex-superlinear-coercivity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 restates def-hopf-lax-operator without its convexity and superlinearity hypotheses, then invokes its Q_t for both excluded Hamiltonians. The computations are correct, but the item must explicitly define an extension of the infimum formula.",
      "context_sha256": "2eb82be9a2571ddcdf95688d3867160fa95f6c91da130d533eb1b99ab3325461",
      "item_sha256": "5181909370947cd804761117392a6e6f9b404469dc83b6dad05e545d87b215f9",
      "at": "2026-10-06T02:20:17.782Z"
    },
    {
      "id": "ex-eikonal-equation-as-a-viscosity-equation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 and the Example use φ(x)=εx₁ for every n≥1. The supplied Euclidean-space interface indexes coordinates by k<n, so x₁ is undefined when n=1. The stated lower test is therefore ill-typed in an included case; use x₀.",
      "context_sha256": "936ca75966a0600bc6d49bcf590c58aea761e2b0f4310d0da26d668e2132a23d",
      "item_sha256": "516362e231c3efaeba4113a9dfea71eb0cc05c7c947facb26395d410b5c2fe21",
      "at": "2026-10-06T02:19:44.009Z"
    },
    {
      "id": "cor-finite-speed-of-dependence-for-lipschitz-hamiltonians",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The equality clause fails: take H=0, u(x,0)=v(x,0)=0, and u(x,t)=-1, v(x,t)=1 for t>0. They satisfy the stated semicontinuity and solve the interior PDE. Swapping them requires additional semicontinuity at t=0.",
      "context_sha256": "1a95b59e631191dc8244de2948c855c5ee86ec63a3078ec2d04e882a372c6d86",
      "item_sha256": "2ab06bf811c7f68a01750927860dad18731f01f7fbb5664bfa8851abdcfd1b91",
      "at": "2026-10-06T02:19:58.375Z"
    },
    {
      "id": "cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately attributes Cauchy-problem boundedness and relaxed initial traces to def-metric-uniform-continuity. Its supplied interface defines only uniform continuity and licenses neither assertion.",
      "context_sha256": "9f116ed0299d6039581d074eabe54c70108b9e75a96be36cd407929ce57a2f16",
      "item_sha256": "f5bbce9d60201aa472d54fd82f36fa2555da205f98be9d58dbd1b9aaf521215f",
      "at": "2026-10-06T02:17:58.514Z"
    },
    {
      "id": "ex-distance-to-the-boundary-is-the-viscosity-solution-of-the-unit-eikonal-dirichlet-problem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The statement omits n≥1, required by the sphere and viscosity interfaces. For n=0, Ω=ℝ⁰={0} has empty boundary, so d(0)=1 cannot equal dist(0,∂Ω), and the proof’s unit-vector arguments are unavailable.",
      "context_sha256": "3acb3ea88abb64dd3321e9a8025268a28eb6c5f197ec0f4a0f1d03120da7e57d",
      "item_sha256": "040c9f74f73450a5b1a66a32fb4c8427d242229a55ec640f45f9dd7c4b12abe4",
      "at": "2026-10-06T02:20:33.692Z"
    },
    {
      "id": "thm-perron-method-for-hamilton-jacobi-equations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 incorrectly claims Wκ>w near the failure point; the interface guarantees strict increase only somewhere. For H=0, w=1 for t≤t₀ and 0 afterward is a USC subsolution whose lower envelope fails supersolution, but no local bump can raise w at t₀.",
      "context_sha256": "aa92a25ed0c84e36df62b673f26735d0a33f445c059a192534659bd27260e317",
      "item_sha256": "0282a33fa9fbb192d011805abc01836e266184b3d5c42fa36bdd1d4274118550",
      "at": "2026-10-06T02:18:40.800Z"
    },
    {
      "id": "thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 and step 3.1 use ambient open-ball covers of compact K. The supplied def-metric-compactness explicitly requires citing lem-compactness-is-intrinsic for this use; that dependency is absent.",
      "context_sha256": "c28a0950a8082ebcc11d2f2809a4a5ae521420a38b038a65b0441a637adeb086",
      "item_sha256": "03567d69f19c57a181ec7e728a6f5add5bb6d49cd05c8688d350eb16ad5a0ffc",
      "at": "2026-10-06T02:19:26.953Z"
    }
  ]
