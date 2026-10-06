# Step 7 adjudicate: initial, round 1, unit 13

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u13.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"13",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-holder-spaces-c-k-alpha-and-their-scaled-norms, 0:lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials, 0:thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators, 0:cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives, 1:def-uniformly-elliptic-nondivergence-operator, 1:thm-holder-spaces-on-bounded-domains-are-banach-spaces, 2:lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms, 2:thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations, 4:thm-boundary-schauder-estimate-for-the-dirichlet-problem, 4:cex-boundary-w-two-p-regularity-needs-c-one-one-type-control, 5:cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large, 8:thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-holder-spaces-c-k-alpha-and-their-scaled-norms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The new local class C^{2,α}(B_1) conflicts with the cited ball dependency, which defines the same notation by finite scaled norm. On B_1=(-1,1), u(x)=1/(1-x) belongs to the new class but is unbounded, so fails the dependency's definition.",
      "context_sha256": "cc1fc0591eb1a8972cfc9dd8878122c007ac13fb9890bbe2ef5b4fb31e496c73",
      "item_sha256": "96e7f074256caddd64fe64dcbf5935f2b5c380f86bf0c1674bfef1e876d69f78",
      "at": "2026-10-06T01:55:05.465Z"
    },
    {
      "id": "lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F8] inaccurately restates its dependency: the supplied interface defines only local ball quantities for 0<α<1, explicitly excluding global definitions. It does not supply the global endpoint convention or Lipschitz-to-β inclusion cited in step 3.3.",
      "context_sha256": "2ea29ff379e454d89ec1866fa573b487398e250f7343441e50721f0097f78b55",
      "item_sha256": "9e6405ac0f5b5d9ad66be7561dee2aaecbd3207a5898a470b8394a8776bf13d4",
      "at": "2026-10-06T01:55:25.396Z"
    },
    {
      "id": "thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The hypothesis only requires C<∞. Take X=Y={0}, L0=L1 the unique bijection, and C=-1. The uniform estimate holds, but every inverse has operator norm 0, contradicting the conclusion 0≤C=-1.",
      "context_sha256": "3242011d82fb7bf879112b654acc6bf3ebc472cc0b1975d6452071519b58f6cf",
      "item_sha256": "29cf45da0b7d612c4cd5d3fccbb19b50eedecb592ca695ae5aa55eafe7fc997d",
      "at": "2026-10-06T01:56:21.009Z"
    },
    {
      "id": "cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 misstates the differentiation theorem: domination of integrands alone is insufficient; derivatives must be dominated. For example, arctan(t/x) on 0<x<1 is smooth in t and uniformly bounded, but its integral has no finite derivative at t=0.",
      "context_sha256": "e1fda8cb8250d432539fe11dcd46782e456a884cce4f731b63024e604d8581dc",
      "item_sha256": "19f3d39b8b19c4e55687bf5607ef51a46e88f6d0296fd426e4220011a29035cf",
      "at": "2026-10-06T01:58:31.520Z"
    },
    {
      "id": "def-uniformly-elliptic-nondivergence-operator",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The “Two regimes” remark incorrectly equates C^{0,α}(B) with [A]_{0,α;B}<K. The dependency defines a local class: a(x)=2+½sin(1/(1-x)) on B=(-1,1) is bounded, smooth and uniformly elliptic, but its full-ball Hölder seminorm is infinite.",
      "context_sha256": "48cd2484c277896c3ba4ac7d3bc2bf5f16f966816abc0f838e5348724df6eea9",
      "item_sha256": "efe09685b54979ece63c441489f6b5ae9fac2d6324eb8ff7c7e8e369167f9fc0",
      "at": "2026-10-06T01:55:22.356Z"
    },
    {
      "id": "thm-holder-spaces-on-bounded-domains-are-banach-spaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The blanket assertion that no boundary Hölder seminorm is complete is false. For k=0 and Ω=(0,1), the boundary seminorm is |f(1)-f(0)|; every seminorm-Cauchy sequence converges in this seminorm by convergence of those differences.",
      "context_sha256": "d0da9ae4485f6c8769406a2536466e3cf2e430f58ded7657d3d77fcf5e4abfe4",
      "item_sha256": "fae450ade0280600cd5aa22daff527ca30997116b029f0101709bf55a9f2ce64",
      "at": "2026-10-06T01:55:35.488Z"
    },
    {
      "id": "lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 falsely asserts that composition preserves C^{0,α}. On [0,1], f(t)=g(t)=t^α are α-Hölder, but f∘g=t^{α²} is not α-Hölder at 0. The cited derivative algebra theorem does not license this restatement; a Lipschitz inner map is needed.",
      "context_sha256": "bcc6c3465aa438cbe13fb5ac48b70519af3d85abc82f5989d62741cbb5ae8e59",
      "item_sha256": "118d116d2f8419d92f94aa3b7a72169d209875f63998129032ca4a1beb20975d",
      "at": "2026-10-06T01:56:07.488Z"
    },
    {
      "id": "thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] gives a false Hessian product identity: the mixed term is Dη⊗Dw+Dw⊗Dη, not 2Dη⊗Dw. Locally η=x₁ and w=x₂ give D₁₂(ηw)=1, whereas the claimed mixed term equals 2. The cited cutoff interface does not license this identity.",
      "context_sha256": "98dcb07978ffd8da5d1d078b53c2ff18446b9155bd200968e0594ae81f8c4f76",
      "item_sha256": "70cf843e4a96a3ea5763aceef43f606c91b2def71b9786f9bc7649515c832244",
      "at": "2026-10-06T01:57:15.535Z"
    },
    {
      "id": "thm-boundary-schauder-estimate-for-the-dirichlet-problem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1's product bound is false. On B_ε take A=I, b=(x_1,0,…), c=0, g=x_1. Then [Lg]_α=(2ε)^(1−α), but the asserted RHS is Cε with fixed coefficient bounds. The missing derivative suprema cannot be absorbed into that constant.",
      "context_sha256": "702ff4b20f0672a2302be0370e4a0804e00d7de70dbb6feaafdc7fc8c9f54738",
      "item_sha256": "66bed564bc8d85be24b4e092c225cc053ff51e5735b0e371588ee3717dcae5c3",
      "at": "2026-10-06T01:56:39.470Z"
    },
    {
      "id": "cex-boundary-w-two-p-regularity-needs-c-one-one-type-control",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates the Sobolev definition: weak second derivatives in L^p alone do not characterize W^{2,p}. The supplied interface also requires the function and every first derivative to belong to L^p; F4 omits these conditions.",
      "context_sha256": "87c8aedbdb93a6748520fb4ccd6adbc65fdf4525494c8a65a8c5bf49095ed9eb",
      "item_sha256": "caa9866bde93b3d5670b4c0a27b570da8374468ae507820097f4a7aeacf546b6",
      "at": "2026-10-06T01:59:06.366Z"
    },
    {
      "id": "cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final remark incorrectly claims exactly the Hölder exponents strictly below 1-n/p are produced at order one. The supplied embedding explicitly includes the endpoint: p=2n gives C^{1,1/2}, not only exponents below 1/2.",
      "context_sha256": "3da98947266167a24042d0e146bf69b76617bf564a4957c9713dc71bc505a2d4",
      "item_sha256": "21b49a1730b190e62fa6f182ea1f0ef3a4dcff689ce3e1bb759ce9c438e081b3",
      "at": "2026-10-06T01:57:49.678Z"
    },
    {
      "id": "thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 invokes shifted strong solvability and W^{2,q_i} estimates at q_i≤n. The supplied [F4] interface covers only p>n and supplies no shifted solvability estimate, so it does not license the asserted quantitative bootstrap.",
      "context_sha256": "493de06cb564f7e8af30f3c040c060a744cbf9f5a21baaa69c220333fd393f41",
      "item_sha256": "9ee893159d4919360094648c71434e7edfbcf0bc4f63f71648dcebfb57f8daa1",
      "at": "2026-10-06T01:57:23.613Z"
    }
  ]
