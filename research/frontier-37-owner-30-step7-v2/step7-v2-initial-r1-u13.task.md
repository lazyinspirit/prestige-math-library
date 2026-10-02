# Step 7 adjudicate: initial, round 1, unit 13

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u13.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"13",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-radial-jacobi-tensor, 0:lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete, 0:prop-flat-torus-model-geometry, 0:prop-half-space-model-geometry, 0:prop-round-sphere-model-geometry, 0:thm-no-conjugate-points-under-nonpositive-sectional-curvature, 1:def-model-space-radial-area-and-ball-volume, 1:fs-the-laplace-beltrami-definition-licenses-the-use-of-all-euclidean-harmonic-function-theory-on-manifolds, 1:lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point, 1:thm-cartan-hadamard, 2:fs-cartan-hadamard-says-exp-p-is-injective-without-simple-connectedness, 2:thm-bonnet-myers, 2:thm-sturm-comparison-for-scalar-jacobi-equations, 2:ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity, 2:ex-cartan-hadamard-for-hyperbolic-space, 3:fs-positive-ricci-curvature-without-a-uniform-lower-bound-implies-compactness, 3:thm-radial-riccati-equation, 3:ex-bonnet-myers-for-the-round-sphere, 4:lem-riccati-comparison-for-scalar-initial-shape, 4:thm-rauch-comparison-theorem-first-form, 5:fs-higher-sectional-curvature-makes-jacobi-fields-spread-faster, 5:thm-hessian-comparison-for-distance-under-sectional-curvature-bounds, 5:thm-rauch-comparison-theorem-second-form, 5:thm-relative-volume-density-comparison, 6:lem-toponogov-distance-support-inequality, 6:prop-rigidity-in-rauch-comparison, 6:rem-weak-laplacian-comparison-at-the-cut-locus, 7:prop-rigidity-in-bishop-gromov-on-an-interval, 7:thm-toponogov-hinge-comparison, 7:ex-bishop-gromov-ratio-is-constant-in-the-model-space, 7:ex-volume-growth-in-euclidean-and-hyperbolic-space, 8:thm-cheng-maximal-diameter-rigidity, 9:prop-distance-between-corresponding-side-points-in-toponogov-comparison, 9:rem-alexandrov-and-differentiable-sphere-theorems, 9:ex-equality-cases-as-diagnostics-for-all-comparison-signs, 9:ex-toponogov-comparison-on-a-round-sphere, 10:cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-radial-jacobi-tensor",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The normality argument invokes thm-algebraic-symmetries-of-the-riemann-tensor without its explicit AC_ω hypothesis. The item neither assumes AC_ω nor independently proves the last-pair skewness it needs.",
      "context_sha256": "b3d960cc7aed337b2b4fb7dffa560286a982fc8aac57d046f23b8589001206f6",
      "item_sha256": "5dfddffe9d7fc0f5fa8b33f74e12e6ab70966783836002af5619b463006a658e",
      "at": "2026-10-01T20:50:15.583Z"
    },
    {
      "id": "lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] drops Hopf–Rinow’s completeness condition when asserting minimizing geodesics between any two points. In the Euclidean punctured plane, (-1,0) and (1,0) have no minimizing geodesic, contradicting this restatement.",
      "context_sha256": "bab479b3c580be59f42c3416eb2c5c2826a9d81b13c65832033a25b60f036399",
      "item_sha256": "b527328e8aaae902fa6d98d36faa8dc0c62504f25792163689965430a930c228",
      "at": "2026-10-01T20:50:47.542Z"
    },
    {
      "id": "prop-flat-torus-model-geometry",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately restates local isometry: an isometric differential alone does not suffice. The inclusion t↦(t,0) from R to R² satisfies that condition but is not a local diffeomorphism, as the supplied definition requires.",
      "context_sha256": "f1467bcfb9e7dfbbd77c1acf462b43614d13c706a71dc0fb958c88bb43ec5f5a",
      "item_sha256": "9e6efb1a93be73033ac610c1f7e8d25b6432370a517e9f2a6fdcc87038c10657",
      "at": "2026-10-01T20:50:43.795Z"
    },
    {
      "id": "prop-half-space-model-geometry",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The geodesic classification omits constant geodesics: γ(t)=p satisfies [F2] but cannot be a nonzero affine reparametrization of either displayed unit-speed curve. Step 4.1 considers only unit initial velocities, excluding zero velocity.",
      "context_sha256": "abaee79dd819d1f3a59f7ee0f6c5ce1402aa73da9c736f10935f287f21f0e326",
      "item_sha256": "17ca02adc665bfeb5fb165da080f250c0371eed7ca630f8b429d16623b02a7d6",
      "at": "2026-10-01T20:51:00.377Z"
    },
    {
      "id": "prop-round-sphere-model-geometry",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 incorrectly asserts that every length minimizer becomes a unit-speed geodesic after arclength reparametrization. A constant minimizing curve from x to x cannot. The cited dependency explicitly requires the curve to be nonconstant.",
      "context_sha256": "77f027a9cda96977012f70dd14fb03292bf18e2e2ad03f46ba4f48562fe7e8f1",
      "item_sha256": "f2e9ead5a8ddd37a3dcdcbd1b70dd8ff9f26156c74a05cdc18ec2ece41a3e044",
      "at": "2026-10-01T20:50:55.076Z"
    },
    {
      "id": "thm-no-conjugate-points-under-nonpositive-sectional-curvature",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 and F5 omit the AC_ω hypothesis explicitly required by the supplied sectional-curvature and curvature-symmetry interfaces. The theorem invokes these dependencies without assuming AC_ω.",
      "context_sha256": "c374e0c084229b7774597fee1f74d0bdf796f9794f3c1afea14d53df8a0bef41",
      "item_sha256": "e73e1452a8862a1ead3a5ce0e6ebef87c1cd3c456fae4b098b28e53ca814e91f",
      "at": "2026-10-01T20:50:35.528Z"
    },
    {
      "id": "def-model-space-radial-area-and-ball-volume",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The polar-surface dependency explicitly assumes the Axiom of Countable Choice. This item invokes its surface-measure construction without that hypothesis, so its unconditional definition is not licensed by the supplied interface.",
      "context_sha256": "e84d006abedc2ade86c5fe9c2f827bec413ee13a6057ae3506fb4a5892e31ef1",
      "item_sha256": "ebe72f7c8904f54667cd1ff3eada0a36a5b90a78b71f71018b3a6802fb19b501",
      "at": "2026-10-01T20:50:52.219Z"
    },
    {
      "id": "fs-the-laplace-beltrami-definition-licenses-the-use-of-all-euclidean-harmonic-function-theory-on-manifolds",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately restates the zero-integral theorem, whose interface covers only real intervals. Step 2.1 applies it to S^n; that requires an additional argument that Riemannian volume is positive on every nonempty open set.",
      "context_sha256": "264b5726e182cde88b1e4a76e83a5e4f4b95f61eb38f6f5966ed3d35ab61ffb9",
      "item_sha256": "4a7736a96c10e3e4607efc2c0c95d6bb4d3121d4fa9d6a87aa3c7738e897d1df",
      "at": "2026-10-01T20:51:06.068Z"
    },
    {
      "id": "lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 invokes thm-algebraic-symmetries-of-the-riemann-tensor, whose supplied interface requires countable choice (AC_omega), but the statement and step 4.1 claim no choice hypothesis. The proof neither assumes nor eliminates that prerequisite.",
      "context_sha256": "7c7cb0d19b0fafdc8b6013ff5051521f9fa00c8f7804ffe8ca3a6783cc73e835",
      "item_sha256": "787ea59d63d282ab20b823b4ea251c77a326ab30e773a1e473d36e8de036c195",
      "at": "2026-10-01T20:50:15.051Z"
    },
    {
      "id": "thm-cartan-hadamard",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F5] incorrectly claims every immersion is a local isometry for the pullback metric. The inclusion R→R² is an isometric immersion but not a local diffeomorphism, which the supplied definition of local isometry requires.",
      "context_sha256": "5beed184064ffe01a8823f98e72f4a97b914cb3a966c797e6cd48750d018fe2c",
      "item_sha256": "ee96c73988f64f56f38c3ea16e86c978fc047fa93c55caad44059aff0df14781",
      "at": "2026-10-01T20:50:37.873Z"
    },
    {
      "id": "fs-cartan-hadamard-says-exp-p-is-injective-without-simple-connectedness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 and step 2.1 use pullback completeness to establish that exp_p is a covering, but the cited pullback lemma already requires a smooth covering map. This application is circular; Cartan–Hadamard's supplied general covering conclusion would repair it.",
      "context_sha256": "53ac23795d2c6e5296ed6add479eae8495bc7e8c16806bc352583d0f91166211",
      "item_sha256": "af1b0d6ce8c683f558f6cb2aa19180772e1d48c335fe3624f3d3ccee0e39def7",
      "at": "2026-10-01T20:51:13.823Z"
    },
    {
      "id": "thm-bonnet-myers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Nonemptiness is missing: the empty complete connected n-manifold satisfies the hypotheses, but the supplied diameter definition excludes empty sets and Hopf–Rinow requires nonemptiness. Step 1.1 also uses diameter before establishing boundedness.",
      "context_sha256": "9d97707e3fa54e82faadbf9f3e6c6bc6a7094bbb2d85d0c25839d041fdbd6598",
      "item_sha256": "7e593caad7cf28584e4e9c65add24a90d92a7af327641a4e80719497b0873bab",
      "at": "2026-10-01T20:50:37.362Z"
    },
    {
      "id": "thm-sturm-comparison-for-scalar-jacobi-equations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 claims A is nonempty from step 1.2, which establishes only positivity and u/v→1, not u≥v near 0. The subsequent comparison argument already assumes T=sup A exists, leaving its essential starting inequality unproved.",
      "context_sha256": "5d973b53baf57e3a38accbda5fddc66f09e881c084c40783f989da4965c837f1",
      "item_sha256": "e5d839990173562e3569135cc0897e9c8030cd64684645d12276e85111315463",
      "at": "2026-10-01T20:50:36.768Z"
    },
    {
      "id": "ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 falsely asserts q(v)=[x+v]. For x=(1/2,0,…,0) and v=0, q(0)=[0]≠[x]=exp_[x](0). Under the stated tangent identification, exp_[x]=q∘(v↦x+v), not q.",
      "context_sha256": "a78950918f8bdcfc1939e54481183604946bb943f9a1dcf263f53c8afc2f634c",
      "item_sha256": "c014963a2118c7dc77e4f8a877d2a032694827fa127a302203ea4452dc871591",
      "at": "2026-10-01T20:51:29.128Z"
    },
    {
      "id": "ex-cartan-hadamard-for-hyperbolic-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Example's Jacobi-field claim lacks a unit-speed hypothesis. Along γ(t)=(sinh(2t),0,cosh(2t)) in H², J(t)=(0,sinh(2t),0) is normal Jacobi with J(0)=0, but cannot equal sinh(t)E(t) with E parallel. Step 8.1 proves only the unit-speed version.",
      "context_sha256": "10d5532705ccb61134c0cbb990af5aca8cce544c6cd582cbb9ad57af37a8abc8",
      "item_sha256": "99deb6714899d5d721e571d3b1beac09effe8965e850ebbaff54151d4d9c94ba",
      "at": "2026-10-01T20:51:44.962Z"
    },
    {
      "id": "fs-positive-ricci-curvature-without-a-uniform-lower-bound-implies-compactness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.3 falsely claims an orthonormal pair in a two-dimensional tangent space is unique up to signs. Rotating the pair by π/4 gives a counterexample. The tangent two-plane is unique; its orthonormal basis is not.",
      "context_sha256": "56ea3134f78e723082cef88fe9b5f3811bc76021195342c5d74fc91b87b14ed1",
      "item_sha256": "73f5d54d4b50e7d8284e0bb03abdc727348554e38836de0b3666adaee89a2416",
      "at": "2026-10-01T20:51:31.977Z"
    },
    {
      "id": "thm-radial-riccati-equation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The hypotheses allow I=[-1,0], for example a unit-speed Euclidean geodesic. Then S has empty domain, so the asserted expansion on some (0,δ) is undefined, and step 3.1's claim of a nonempty positive interval is false. Require positive times in I.",
      "context_sha256": "1290b891248e744da7632db56ab839b92a7506fa92a29e8a55acc3130ac5613c",
      "item_sha256": "11906273bd87f793f46810d20deadc183a0be43b36aeac5b72b6cbccc4f922df",
      "at": "2026-10-01T20:50:26.343Z"
    },
    {
      "id": "ex-bonnet-myers-for-the-round-sphere",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 asserts that Euclidean space has infinite diameter. The supplied def-metric-bounded-diameter explicitly leaves diameter undefined for unbounded spaces, so this boundary-case claim contradicts the cited interface.",
      "context_sha256": "0d8ecaa854ab75804a7c94487691bdc52856d4cd737e80bc075f5d4554b175db",
      "item_sha256": "2ac21c0524c2189abaa3477aeb746896844c16541d3222bed9f7eb7a6d7a37ce",
      "at": "2026-10-01T20:51:17.639Z"
    },
    {
      "id": "lem-riccati-comparison-for-scalar-initial-shape",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part 2 covers arbitrary R2, but step 5.1 excludes singularities of Y2 before t1 only when R2=kI, using the scalar function f. The proof establishes general comparison only before min(t1,t2); it never proves t2≥t1 for general R2.",
      "context_sha256": "bb8c80bcd2d6012187f1b4055471726a264c9fe94bbf97be7a2332bdec2b422b",
      "item_sha256": "8ac58d6d8029365a87f1f156594e2c794325fc1375d958cde3f12fc5889bd8fd",
      "at": "2026-10-01T20:50:27.546Z"
    },
    {
      "id": "thm-rauch-comparison-theorem-first-form",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates def-jacobi-field as supplying a 2n-dimensional solution space and initial-data uniqueness. Its supplied interface only defines the Jacobi equation and asserts neither result.",
      "context_sha256": "92464867a4110eb25a87f0138b9784b252ef788a653c64054dc92e9eae69a32a",
      "item_sha256": "316e0eef557dd628b682ea5e663675bd98bdb5a0c0eaa4a4e9f74e48e65531c3",
      "at": "2026-10-01T20:50:52.051Z"
    },
    {
      "id": "fs-higher-sectional-curvature-makes-jacobi-fields-spread-faster",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Statement asserts the reverse inequality without Rauch's no-conjugate-point hypothesis. For constant curvatures 2 and 1, equal-initial-norm model fields at t=π have norms |sin(√2π)|/√2>0 and 0, contradicting that assertion.",
      "context_sha256": "e51b251a0e8391fb7758f438441f4807ca134dbb5357add436d9bb83fd49024a",
      "item_sha256": "c2881bec3cf55dc174dc2d0a76d2abc5b4fe7179d029302b9ccb3ae12ed20e3f",
      "at": "2026-10-01T20:51:35.659Z"
    },
    {
      "id": "thm-hessian-comparison-for-distance-under-sectional-curvature-bounds",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 reverses F4: invertibility of A(t₀) does not imply t₀<τ; A can become invertible again after a conjugate instant. F4 explicitly gives only the forward implication. Absence of conjugate instants throughout (0,t₀] must first be established.",
      "context_sha256": "2381ac4ed61cad94a3a5345f2f1ce2c3e23d75da92509179a1fc7fcc172dbf66",
      "item_sha256": "e6a6e0e9210f253416602f0e0ee4a4907d34acf212a1c1770b109cc36e20192d",
      "at": "2026-10-01T20:50:37.076Z"
    },
    {
      "id": "thm-rauch-comparison-theorem-second-form",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "A1 inaccurately attributes inherited AC_ω to the Jacobi-field and parallel-transport suppliers. Both supplied existence/uniqueness interfaces explicitly require no choice; AC_ω is inherited through the curvature dependencies instead.",
      "context_sha256": "2bda9f4a638b2f0f4305ae7ad00a80752a3b9ecac7424381b0fd018289fbedd4",
      "item_sha256": "b6265a9b20d2327ea75e052086245ff55307c504ebec920f05683100fb95e4ea",
      "at": "2026-10-01T20:51:20.163Z"
    },
    {
      "id": "thm-relative-volume-density-comparison",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 attributes c_p(v)≤τ to the invertibility lemma, whose supplied interface only proves invertibility for 0<t<τ and states no cut-time bound. This local dependency restatement is not licensed by that interface.",
      "context_sha256": "8887c33a45bf548f89059d256e1e94df89448cd6e3021b6ef9bad8affb3c8b55",
      "item_sha256": "0643efc54ff953e1818f3587da96337c292b7788b0945b24af884c734fea2d91",
      "at": "2026-10-01T20:51:15.734Z"
    },
    {
      "id": "lem-toponogov-distance-support-inequality",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 falsely infers that a conjugate endpoint is a cut point from c_q(v)≤t. On the unit sphere, t=2π is a conjugate time, but γ_v(2π)=q and Cut(q)={−q}. The supplied cut-point interface asserts only c_q(v)≤t.",
      "context_sha256": "cf448948ad5c3e09cdf054f528dbf8ffca0699057d7cbd6a9e1ed8cf7b5d9faa",
      "item_sha256": "da5ddf92fe694942b4a1ccf34e74573d8622ab7d680664cac64c4cb62ac52858",
      "at": "2026-10-01T20:51:17.168Z"
    },
    {
      "id": "prop-rigidity-in-rauch-comparison",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The second form extends sectional-curvature equality to t_f when J(t_f) may vanish. In Euclidean space, take k=0, λ=-1, T=t_f=1 and J(t)=(1-t)P_tu. All hypotheses hold, but span{J(1),γ̇(1)} is one-dimensional, so its sectional curvature is undefined.",
      "context_sha256": "e9750f494b7fdbbe0e13166e6bda6753d9e2a9a9bc822be8ce0eaa5ff33445bd",
      "item_sha256": "edc3fe2a98ba95fa446e97d65a0540cbe01c60c9933d36e5af333bd4cac4da04",
      "at": "2026-10-01T20:50:59.288Z"
    },
    {
      "id": "rem-weak-laplacian-comparison-at-the-cut-locus",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Point 2 falsely requires cut-locus tangent cones for distributional comparison. [Dai §1.3](https://web.math.ucsb.edu/~dai/Ricci-book.pdf) obtains it via barrier-to-viscosity-to-distribution equivalence, without tangent-cone analysis.",
      "context_sha256": "aed3adb833a603cc25966245ec87f7829a780fb0807f72633a5f6349ae192cac",
      "item_sha256": "2cb9bda028a6b555c243b0cbf5692e708c0a0b92a74f6f4a93f735ca76950f0b",
      "at": "2026-10-01T20:51:00.070Z"
    },
    {
      "id": "prop-rigidity-in-bishop-gromov-on-an-interval",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part 3's claimed equivalent polar metric is false with σ defined on the unit sphere and carried along. For Euclidean space (k=0), the metric is dr²+r²σ, whereas the stated formula gives dr²+σ. The correct angular factor is sn_k(r)².",
      "context_sha256": "e85620da15c53e78996f7e8d854a99f71691d3b7d1057cbe60682dfafaafa708",
      "item_sha256": "6595015c066a86e064585e3505dd9ac56a13e97df64af92383236e6aaefe27a9",
      "at": "2026-10-01T20:51:18.604Z"
    },
    {
      "id": "thm-toponogov-hinge-comparison",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4(iv) omits an essential supplier caveat: a minimizing curve with a pause in the Euclidean plane can have one-sided velocities 0 and (1,0), which are not positive multiples. The supplier restricts this conclusion to nonzero velocities.",
      "context_sha256": "125a56610a5cd1ad764a0be3c4eeb4034edb816917d1126db54c828ec443c780",
      "item_sha256": "5e6783545250339e2842978c258e7235bafde0ff9119f309dc3fc64cce274728",
      "at": "2026-10-01T20:51:37.431Z"
    },
    {
      "id": "ex-bishop-gromov-ratio-is-constant-in-the-model-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F9 falsely lists all indicator preimages: for U=(-1/2,1/2), the preimage is M\\B(p,r). In Euclidean space this is neither empty, B(p,r), nor M, contradicting the stated Borel-indicator justification.",
      "context_sha256": "ca9dbc91322148b85cc1a64526ff65778c9025f288d28d34cf2eebed92bd2657",
      "item_sha256": "4b6564c139fdefa81f5f6b41d24cf71c1b38a961cbedbd69b0dd5ef9fad603c1",
      "at": "2026-10-01T20:51:21.954Z"
    },
    {
      "id": "ex-volume-growth-in-euclidean-and-hyperbolic-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F7] falsely lists the indicator's open-set preimages. In Euclidean space, 1_{B(p,r)}^{-1}((-1/2,1/2))=M\\B(p,r), which is neither ∅, B(p,r), nor M. The Borel restatement omits this essential case.",
      "context_sha256": "e23c4b4ffca60331fcbd855cab154034500300f521f24463598bd6e8fdfe7b8d",
      "item_sha256": "94aa2b95ac28f74c88a7c1262f8334a4dc7ce64fef8ad1df2cfbd576f1d820ed",
      "at": "2026-10-01T20:51:15.271Z"
    },
    {
      "id": "thm-cheng-maximal-diameter-rigidity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "R is fixed as π/√k, but step 1.2 reassigns it to 1/√k. Steps 9–11 conflate these scales: the radius-R sphere has cut radius πR and curvature 1/R²=k/π², not k. Thus the chart identifications and final isometry are inconsistent.",
      "context_sha256": "accff6f9d2e5bbe45f66e0184fed1922e871ab2a551e0b59bd3225dc29af2e2b",
      "item_sha256": "6b8c4245cb2f7b93405834e2fda39f881ce1a112dc3e9f8cf34cda5618f03205",
      "at": "2026-10-01T20:51:01.140Z"
    },
    {
      "id": "prop-distance-between-corresponding-side-points-in-toponogov-comparison",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 falsely equates degenerate model and actual angles. On a flat cylinder of circumference 10, take p=0,q=4,r=8,W=3, with (a,b,c)=(4,2,4). Choose the minimizing Wr increasing from 3 to 8. The actual angle pWr is π; its model angle is 0.",
      "context_sha256": "4e8e1fc3e5e8b642c577f443c3943fe3b79e301caed7612ad3a6471e124dfb38",
      "item_sha256": "129b49b3e16a95da5a16a50f6e7867fc9c4cfcd8a743ee63b5d20e9f8e4d3e32",
      "at": "2026-10-01T20:52:15.873Z"
    },
    {
      "id": "rem-alexandrov-and-differentiable-sphere-theorems",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "external_dependency misstates Lang 5.12 as an equivalence for arbitrary length spaces, where sectional curvature is undefined. The theorem applies only to connected Riemannian manifolds. [Lang](https://people.math.ethz.ch/~lang/RG.pdf)",
      "context_sha256": "04d2ac5890c540a8587746e769956b4b594e47e8d4bfe58200d9f60d43699922",
      "item_sha256": "1d6a110dda81225786917362309d993f2c02600e29d492b64ba2da1f8befa8bc",
      "at": "2026-10-01T20:51:41.687Z"
    },
    {
      "id": "ex-equality-cases-as-diagnostics-for-all-comparison-signs",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.6 restates [F3] with the wrong sign: cs_k(a+b)=cs_k(a)cs_k(b)+k sn_k(a)sn_k(b). For k=1 and a=b=π/4 this gives 0=1. The addition formula requires a minus sign.",
      "context_sha256": "155340d4c95016b524e027ed0c8c697002928b6ac2822cfe76432be71867560f",
      "item_sha256": "3c1cbb2251bea0f271cb9ee54d4422426c0f26b6da0b76e6c6c38c1ddad72dbe",
      "at": "2026-10-01T20:51:40.759Z"
    },
    {
      "id": "ex-toponogov-comparison-on-a-round-sphere",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 falsely claims admissibility excludes degenerate model configurations. Set a=b=πR/4 and θ=π. Then c=πR/2 and every hinge hypothesis holds, but the model hinge is collinear and degenerate, with neither a diameter side nor perimeter 2πR.",
      "context_sha256": "7e57af25710bfbd613fa5ee71f77aa2e0366fbcc124bbb9e8a04d78f4276141c",
      "item_sha256": "1279315331c4db36273e9114e1fba3c15fe692d2214d2b88b24553be0f7ad859",
      "at": "2026-10-01T20:52:05.932Z"
    },
    {
      "id": "cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 misuses the ordered side convention: for the comparison triangle (c,b,a), the supplied definition makes c opposite the angle at bar x. Its displayed cosine law instead treats a as opposite. The key chord-limit calculation therefore uses a false identity.",
      "context_sha256": "c1239ab069319397d39a2196d0dae1d3b4745cbddbf8ce566f9bcf468536c7cf",
      "item_sha256": "a73d37e197cfb76b356f45b2dfb3ee4f0e580ea520ee023ababa56cf96865dbe",
      "at": "2026-10-01T20:52:35.689Z"
    }
  ]
