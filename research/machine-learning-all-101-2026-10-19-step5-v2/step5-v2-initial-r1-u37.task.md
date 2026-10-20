# Step 5 adjudicate: initial, round 1, unit 37

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-37-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u37.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"37",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-discretization-invariant-operator-family, 0:def-physics-informed-neural-network-loss, 0:def-shin-elliptic-divergence-form-operator, 0:def-shin-parabolic-operator-and-boundary, 0:lem-neural-operator-compact-union-under-uniform-convergence, 1:def-neural-operator, 1:def-neural-operator-activation-classes, 1:lem-finite-sampling-reconstruction-bridge-for-neural-operator-quadratures, 1:lem-shin-elliptic-energy-estimate, 2:alg-neural-operator-mesh-discretization, 2:def-fourier-neural-operator-layer, 2:lem-pinn-residual-loss-from-fill-distance, 2:lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap, 3:thm-neural-operator-discretization-invariance, 3:thm-pinn-regularized-loss-consistency, 3:thm-shin-elliptic-dirichlet-existence-and-residual-stability, 3:thm-shin-parabolic-initial-boundary-existence-and-residual-stability, 5:cex-neural-operator-sup-norm-discretization-does-not-control-c1.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-discretization-invariant-operator-family",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The compact-uniform clause includes K=∅, which is compact by the supplied interface, but sup over the empty set is undefined in ℝ. Exclude empty K or define that supremum as 0.",
      "context_sha256": "fbe4d284d75a315e3b5d43f9ca49a61351c60d95296a5996f586f6f93d73b3f9",
      "item_sha256": "fe0f4bc2b3c818795162faf0f09de364a507407fee17899b854cc52a356e5696",
      "at": "2026-10-20T08:58:17.733Z"
    },
    {
      "id": "def-physics-informed-neural-network-loss",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For d≥2, Γ may be a singleton. Then there are no pairs x≠y, so the displayed supremum has no specified value and the boundary penalty, hence the regularized loss, is undefined. Specify the seminorm as 0 on such sets or exclude them.",
      "context_sha256": "c4707a7baa8c7561d8bf45cacebf325268c130730b07b0031ddec1c3c3db6bb2",
      "item_sha256": "c791a923ed2a1199342710d6e69496876a34e8e5643e77678c13850df06d5714",
      "at": "2026-10-20T08:59:50.769Z"
    },
    {
      "id": "def-shin-elliptic-divergence-form-operator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title calls this elliptic, but the definition imposes no ellipticity condition on a_{ij} (for example, a_{ij}=0 is allowed). The stated “positive” convention fixes only the divergence-term sign, so the definition does not specify an elliptic operator.",
      "context_sha256": "38f91488b48c933badb38de00601eed55894b43aea9dc17148d15be283189735",
      "item_sha256": "d57bbd79151faacdbe7aab799465bf406f74b9e886ad8e67ff297c3cfa299d3f",
      "at": "2026-10-20T08:59:02.177Z"
    },
    {
      "id": "def-shin-parabolic-operator-and-boundary",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition allows any bounded U, including a singleton, but D_i and C_{2+α}(Q) require an open spatial domain. The supplied parabolic-cylinder interface also requires U to be nonempty and open.",
      "context_sha256": "548205e5f4db9797709f24df02a6bf90e6d526d1abbf372b7b43adfd1f54845e",
      "item_sha256": "98e3e6108dce2fc71f578fc1d633e93bcda26c05db5a44123f264a6e8a21ff25",
      "at": "2026-10-20T09:00:19.375Z"
    },
    {
      "id": "lem-neural-operator-compact-union-under-uniform-convergence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 is restated as though compact subsets use ambient open covers, contrary to def-metric-compactness, which defines compactness intrinsically. Steps 1.1, 2.1 and 4.1 invoke it on ambient covers without citing lem-compactness-is-intrinsic or restricting the cover to the subspace.",
      "context_sha256": "425259321b2f4905832b0f6d7a87eed5a73ef9bfcb4ff16c8718cb39b9d67628",
      "item_sha256": "a633b465ce8b52c4a46d5bc289846378cd3372ed90c4526ea59d696dbad01608",
      "at": "2026-10-20T08:59:26.688Z"
    },
    {
      "id": "def-neural-operator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The assumed continuous inclusions into C(\\bar D) and C(\\bar D') are ill-typed: the supplied C-space definition gives only sets, not target topologies or norms. Specify a topology, such as the supremum norm, before asserting continuity.",
      "context_sha256": "75fb9f505477709eea31d72bbcfbfa03203a3ebf1cc5e222b506bcf38ee40f55",
      "item_sha256": "d4dd2091c3c24d098037f908d5f22e334d9970acc387593a9837a9b9a411f8d2",
      "at": "2026-10-20T09:00:37.462Z"
    },
    {
      "id": "def-neural-operator-activation-classes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For K={e₁}, diam₂(K)=0. Taking C=0 and ε<1 makes the global bound force f(e₁)=0, contradicting |f(e₁)−e₁|₂≤ε. Thus BA_q is empty for every q, so its promised separate nonemptiness check cannot hold.",
      "context_sha256": "4895798561972ebc7534ea9c153c22ea083d4c79dec7c2e6765eef62d618c1d5",
      "item_sha256": "8dcebecb610b0eaa521ad76f2e894487b9d02a5997495ea5b13b75f6addbdcd2",
      "at": "2026-10-20T09:01:16.815Z"
    },
    {
      "id": "lem-finite-sampling-reconstruction-bridge-for-neural-operator-quadratures",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The first clause overstates [def-discretization-invariant-operator-family]: it allows arbitrary Banach spaces X,U and arbitrary finite-dimensional S_n, while the definition requires function spaces on bounded domains, defined point-evaluation sampling, and function-valued output ",
      "context_sha256": "471f9cf1720f26e1c87bc639c1bef2a68db66ebfdec5332f0bd1ac3fc222bd8b",
      "item_sha256": "1445bd76bd518ecbe596959bebe2d869286b97adb9e329749733a92a2f6a532b",
      "at": "2026-10-20T09:00:37.804Z"
    },
    {
      "id": "lem-shin-elliptic-energy-estimate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 bounds the first-order terms by √2λ₀v‖e‖₂‖∇e‖₂, but the coefficient bound yields √2λ₀|v|‖e‖₂‖∇e‖₂. The statement allows v<0, making the claimed bound false. Use |v| or assume v≥0.",
      "context_sha256": "32562dc47f5cf703a6b4d322416ca179e1573bb45a91747622c17391cf56b026",
      "item_sha256": "06dfd87e179e2d2c72beaa3670effe7f9c685caf1f4c6c65d72dfc58d1f7b94c",
      "at": "2026-10-20T09:00:39.089Z"
    },
    {
      "id": "alg-neural-operator-mesh-discretization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For distinct input and output domains, the supplied interface requires the final layer’s local matrix to be zero. This algorithm applies the same formula at x∈D′, including Wₜvₜ(x), although vₜ is defined only on D, and gives no zero-local-term branch; the promised query output c",
      "context_sha256": "b74143462e24c9ef279f8d7569a6c6d3de3782e09238365412b85dd00d21fc69",
      "item_sha256": "d78ab9015419a982ef36648bb1a5a081b8208586dac702b4595c52b178070afb",
      "at": "2026-10-20T09:00:56.230Z"
    },
    {
      "id": "def-fourier-neural-operator-layer",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited locator is wrong: in the linked Kovachki et al. paper, §5.3 equation (22) is a multipole transition; the FNO formula appears in §4.4 equation (26).",
      "context_sha256": "ae025a7f9ae81d015c2bf76d1403de2530a1fe5691cd0ba30b60e654ed1b9ccb",
      "item_sha256": "8b1212eec474ec6b9ee3dccc6229fc72a94bee97fa76f11037e8f74a470e8c1d",
      "at": "2026-10-20T09:02:18.356Z"
    },
    {
      "id": "lem-pinn-residual-loss-from-fill-distance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited definition introduces these PINN losses only for bounded Lipschitz U and closed Γ⊆∂U. The statement allows arbitrary measurable U and Γ, so it applies the cited loss notation outside its supplied interface.",
      "context_sha256": "9e25a5ccfe10d1a647662b0660a3f2431ac7eb127ed70520677ca6101db0d022",
      "item_sha256": "20d660bd092ffff02c066ef70d11ef897b7c1a6e214928b56a73307a7a777d91",
      "at": "2026-10-20T09:02:28.326Z"
    },
    {
      "id": "lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 overstates its cited interface: def-wkp-zero explicitly makes no trace characterization. In 1.3, zero face trace of tangential derivatives is used to meet the H_0^1(H) hypothesis of the H2 lemmas, but no half-space trace-kernel result is supplied; the cited kernel theorem cove",
      "context_sha256": "c9fada977d79f2d2450b8a68fc50c75598a23875480718bb3a74f55d898a04ee",
      "item_sha256": "e352b32c8569fe5b1c6e3434e3f40aad5e79a44ff6d036ed4e993483592cf35c",
      "at": "2026-10-20T09:03:37.898Z"
    },
    {
      "id": "thm-neural-operator-discretization-invariance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final finite-sampling claim omits a locality condition on general Banach liftings. A continuous nonlocal lift L(a)=∫₀¹a(s)ds followed by an integral-only layer fits the stated spaces, but its raw maps depend on L(a), so they need not factor through the original finite tag sam",
      "context_sha256": "dc87703900be1af5b1171c695da883dbbd73cbe3063a880e6da97b373d20c789",
      "item_sha256": "2feab40eecac8f2a30d45bffd87bcd94406906b1f256733350e81a602bd88d76",
      "at": "2026-10-20T09:02:19.150Z"
    },
    {
      "id": "thm-pinn-regularized-loss-consistency",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem makes the Lipschitz-domain assumptions optional, but the cited PINN-loss definition requires U to be a bounded Lipschitz domain and Γ to be closed in ∂U. The prescribed objective is therefore not licensed for all stated cases.",
      "context_sha256": "1052c3aa49b9942d86fbbf2b7d09bbec006017998f012b53cb6a3e7cb78cb65d",
      "item_sha256": "007b46370558e736cdce7ecfd76bac7da902a057caed8487b114d8e381527ea0",
      "at": "2026-10-20T09:03:12.789Z"
    },
    {
      "id": "thm-shin-elliptic-dirichlet-existence-and-residual-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 states a residual norm estimate, not a comparison principle. Steps 1.7 and 1.12 infer z≤0 from L_jz≥0 and boundary z≤0; that sign conclusion is not licensed, leaving the uniform bound and boundary attainment—and thus existence—unproved.",
      "context_sha256": "0ef48fd62a14160c77dbc251d3f86f635b6565dc482c93239f1629e1f7375da9",
      "item_sha256": "e3cef0ded6a46c39b21a09081e93c2e78289a07ea4d7c77ed912e5578eab6e98",
      "at": "2026-10-20T09:03:28.071Z"
    },
    {
      "id": "thm-shin-parabolic-initial-boundary-existence-and-residual-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The energy clause assumes residuals are locally Hölder on Q, but F3 requires local Hölder regularity up to the final-time face. Step 5 applies F3 on [0,T] and claims its hypotheses hold; bounded residuals may oscillate as t→T, so that invocation is unsupported.",
      "context_sha256": "20e5cd63be32c0e43f23630dc3ccbab68a2d1271a73d06f9d3c74f43327b0ab6",
      "item_sha256": "48dff575c7d02598ded7a79b30c9e5cf7ee061332b3442d3aa506487ec582439",
      "at": "2026-10-20T09:02:03.651Z"
    },
    {
      "id": "cex-neural-operator-sup-norm-discretization-does-not-control-c1",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F3] does not establish that σ or ReLU belongs to every finite-dimensional A₀/A₀ᴸ class; its interface gives density only for activations already in M_pt. The asserted class membership is an unsupported dependency inference.",
      "context_sha256": "c74bdb39fa571a14cbe71d0cd438827601058076703cb00a9624ec8886b7655e",
      "item_sha256": "4939cc0283b0073a2537ce2228345dc2efaa74e5fd361f8664b35bfd538eb16f",
      "at": "2026-10-20T09:04:46.813Z"
    }
  ]
