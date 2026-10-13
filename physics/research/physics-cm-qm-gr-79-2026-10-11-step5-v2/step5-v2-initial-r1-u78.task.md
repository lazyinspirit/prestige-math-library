# Step 5 adjudicate: initial, round 1, unit 78

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-78-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u78.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"78",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-gr-periodic-torus-and-sobolev-spaces, 1:lem-gr-periodic-fourier-differentiation-and-norm-equivalence, 2:lem-gr-periodic-sobolev-embedding, 3:lem-gr-galerkin-projection-properties, 3:cex-gr-sobolev-embedding-needs-s-minus-m-above-three-halves, 5:lem-gr-smooth-composition-and-commutator-estimates, 8:def-gr-dust-reduction-variables-and-gauge, 8:lem-gr-galerkin-compactness, 8:lem-gr-galerkin-energy-inequality, 8:cex-gr-negative-sound-speed-derivative-breaks-evolution, 9:def-gr-barotropic-enthalpy-variable, 9:lem-gr-galerkin-limit-is-classical-solution, 10:thm-gr-periodic-symmetric-hyperbolic-existence, 11:thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, 12:thm-gr-constraint-equations-in-normal-frame, 12:thm-gr-periodic-symmetric-hyperbolic-smooth-persistence, 13:lem-gr-reduced-einstein-principal-part, 14:lem-gr-barotropic-fluid-symmetric-hyperbolic-system, 14:thm-gr-reduced-einstein-local-existence, 15:ex-gr-fluid-principal-symbol-radiation, 22:lem-gr-dust-initial-data-and-tilted-initialization, 25:thm-gr-scalar-field-local-evolution, 26:thm-gr-high-regularity-selected-matter-development, 28:rem-gr-high-regularity-scope.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-periodic-torus-and-sobolev-spaces",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: in (b), q maps R³ to T³, but u is declared R³→Rᴺ, so u∘q is undefined; the stated C^m and C∞ classes are therefore not defined.",
      "context_sha256": "72fbc5004d2220061c2ca2fd612dd6f3bc920fee65b22460435f7aab053817f2",
      "item_sha256": "d16ddc22e5ffecb71adce84e851f3efe6a1b29ef73536bf717681152a5ae61c2",
      "at": "2026-10-12T20:31:10.048Z"
    },
    {
      "id": "lem-gr-periodic-fourier-differentiation-and-norm-equivalence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 uses the complex L² Fourier isometry to construct wα but never proves it is real-valued. Since H^s(T³; ℝ^N) requires real weak derivatives, the claim u∈H^s does not follow.",
      "context_sha256": "96d10c7f770d5fdabac9ae6e336b7bd9086fec973065a98fd2662e0edabe8eef",
      "item_sha256": "8d4f87e2c54239a8739ec120779541e4acb9b7b597b3e409b6f37ff8e766b1bf",
      "at": "2026-10-12T20:31:44.392Z"
    },
    {
      "id": "lem-gr-periodic-sobolev-embedding",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] strengthens the cited norm-equivalence interface to N_s(v)^2 ≤ 4^s‖v‖², but that interface supplies only unspecified constants. Steps 1.1–2.1 rely on a bound the dependency does not license.",
      "context_sha256": "6ea34ace378f62bf24b4f0e44e586a868c233136c08e942e71304790853af682",
      "item_sha256": "bd0483ceb2758e73fdb3ad1686dad4ea71e0052bc05b3d108e4c95b3f8e32fed",
      "at": "2026-10-12T20:31:47.537Z"
    },
    {
      "id": "lem-gr-galerkin-projection-properties",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title calls the Fourier-tail estimate “sharp,” but the proof establishes only an upper bound and does not show optimality, so the title overstates the result.",
      "context_sha256": "33d31b96a8aed6564b119497e76396130bc47c0170ae4a132679d73165f1b294",
      "item_sha256": "8b03a630de873cc590cd15f7cc2c293e5d512844c773aeab98c061bdcb29e5ca",
      "at": "2026-10-12T20:31:27.363Z"
    },
    {
      "id": "cex-gr-sobolev-embedding-needs-s-minus-m-above-three-halves",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 overclaims sharpness: failure at s−m=1 and success for s−m>3/2 leave 1<s−m≤3/2 unaddressed. Divergence at 1 alone does not establish the claimed optimal threshold.",
      "context_sha256": "c43278993d1eae0d2278e1f1e69501b0516177c1ba8c0e378e8ed73c6e5054d7",
      "item_sha256": "d4e42d9b53313065c8803e4512d0802170279af17b9a56363f3aa61d1aaaf781",
      "at": "2026-10-12T20:33:30.383Z"
    },
    {
      "id": "lem-gr-smooth-composition-and-commutator-estimates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L3] attributes the chain and Leibniz rules to def-ck-and-multi-index-notation-in-several-variables, but its supplied interface only defines C^k maps and derivative notation. The composition and commutator expansions rely on rules that this dependency does not license.",
      "context_sha256": "d5c7734f667df28578a71e812ba98f697f8bd7e85ce5ac657f6c169606574e4e",
      "item_sha256": "a532933299f49c2fc6ce49f9f4a14e6f4302cd6ff21b9e8bb37faecf48ff25dd",
      "at": "2026-10-12T20:32:18.709Z"
    },
    {
      "id": "def-gr-dust-reduction-variables-and-gauge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal prerequisite cycle: this definition depends on def-gr-dust-electric-magnetic-weyl-variables-and-schouten, whose supplied interface requires this definition’s reduction conventions.",
      "context_sha256": "dcdbce7684be89fae90b016ecdf2716c52a1dce852499c427aee066e5942afad",
      "item_sha256": "69b1c80c82017a2eeeb80929d91212cbca91b0862152049877794096a60d8362",
      "at": "2026-10-12T20:33:01.824Z"
    },
    {
      "id": "lem-gr-galerkin-compactness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In (b)–(c), s is only required to satisfy s≥5, but step 2.1 applies clause (a) with r=s, and (a) requires integer r. For noninteger s, the cited compactness premise is not licensed; restrict s to integers.",
      "context_sha256": "807fbb0e4299470aaab2a4b0c89ed63090ea9755f6b83dabf928bcf08ae98c37",
      "item_sha256": "b5a46c1504cb3c2015157367789b02a9c06182a1a0f151fd302406591d5861c3",
      "at": "2026-10-12T20:32:32.565Z"
    },
    {
      "id": "lem-gr-galerkin-energy-inequality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Gronwall conclusion claims the estimate for every t,t0∈J, but J is only assumed to be a subset of I0, not an interval. The derivative bound controls values along the intervening time segment; it gives no estimate between disconnected components.",
      "context_sha256": "56a31d70aa55c5e2a452733d05cefe7d02249a9146d8ab65eec280432faa858b",
      "item_sha256": "255d7347a9bcad9dd51d802e6d6e3d563246ee8d9500bb3a52900b0bdbbf12c7",
      "at": "2026-10-12T20:32:20.959Z"
    },
    {
      "id": "cex-gr-negative-sound-speed-derivative-breaks-evolution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 says the cited definition supplies the conservation equations, but its interface defines the fluid equations and reserves their equivalence to div T=0 for a separate proposition absent from deps. Thus the claimed linearization is not licensed by the cited premise.",
      "context_sha256": "ed82a84244a43ac581d321ea8a5db4893338adac2a8024250192e90c0dcf397c",
      "item_sha256": "7bfc8a016bb163e4e3d187524e045ab6deaacf554056195198a02054a7ec23dc",
      "at": "2026-10-12T20:34:13.458Z"
    },
    {
      "id": "def-gr-barotropic-enthalpy-variable",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises the symmetric form of the fluid equations, but the item only defines r and its derivative; it states no transformed equations or symmetry result. Its reference to “two displayed equivalences” does not supply them.",
      "context_sha256": "ea66af4b21f1a276cffff90249dd2bc954cdaa270f9a3577a445409426bee93e",
      "item_sha256": "ab18fef0ca270db3165a8be5e98993899b975c6bc09bf91b124540445de25bda",
      "at": "2026-10-12T20:32:20.074Z"
    },
    {
      "id": "lem-gr-galerkin-limit-is-classical-solution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement quantifies over any s≥5, but the supplied Sobolev spaces and cited results define and use only integer orders. For noninteger s, H^s and the proof’s integer-order Fourier and multi-index steps are unsupported; specify that s is an integer.",
      "context_sha256": "c0470f37bdcf8949f851e0063a9c68c0276eac5bc6246f60f93dc9a23a1a80fa",
      "item_sha256": "ceeb2b6875b8e40649413836a58655509f651f6764b0eb580d9dce873296c465",
      "at": "2026-10-12T20:32:25.321Z"
    },
    {
      "id": "thm-gr-periodic-symmetric-hyperbolic-existence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement says only “s≥5,” not that s is an integer. The supplied Sobolev and solution definitions and cited lemmas require integer s, so noninteger exponents are unsupported; the integer condition in Facts does not repair the theorem statement.",
      "context_sha256": "68638e3891650e015cc219cd96394d80254b4e4b1cebcadad293ee272f65dd6e",
      "item_sha256": "06a6898c20ca7f2dd1b67d7307c9a3c7fc16d49c1b590f2afb93be56c4839ef5",
      "at": "2026-10-12T20:34:13.439Z"
    },
    {
      "id": "thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement assumes only s≥5, but its supplied H^s interfaces and the proof’s sum over |α|≤r require integer s. For noninteger s, the stated space and derivative energy are undefined. Specify s∈ℕ, s≥5.",
      "context_sha256": "82335f80c50d931957d988cca63798692627d254509b2d9f6f1144c1622a9ae3",
      "item_sha256": "032355e7595d026fae9497b263df9731f2d4d36bd373a38cda4ebfa7fb566897",
      "at": "2026-10-12T20:33:12.163Z"
    },
    {
      "id": "thm-gr-constraint-equations-in-normal-frame",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 cites lem-gr-constraint-projections as supplying the projections under the item's pointwise field equation, but that lemma assumes G+Λg=κT on all of M. This is an invalid local dependency restatement, also cited in step 5.1.",
      "context_sha256": "69cfb1b42bd1cbd9fb8b4878f61666905265eb0a5f67ad055c653bca07314f05",
      "item_sha256": "c6c1a652a1aeb446e39772daeee2eca6514769c2412f8c8b8d61eeac077520de",
      "at": "2026-10-12T20:33:52.400Z"
    },
    {
      "id": "thm-gr-periodic-symmetric-hyperbolic-smooth-persistence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 claims the existence theorem supplies a cofinal Galerkin family with uniform bounds and a convergent subsequence, but its supplied interface guarantees only a solution and norm bounds. Steps 1–4 require that family, so this unlicensed premise leaves the main regularity argumen",
      "context_sha256": "1bc0fb05491a54503ff76dffff51f991b3ecb031874d87f793bfa1020e5d2c01",
      "item_sha256": "386360c5255d2876533cbec32b3a885a4e7be6c4cea185cf67535ae4e56a85ab",
      "at": "2026-10-12T20:33:15.249Z"
    },
    {
      "id": "lem-gr-reduced-einstein-principal-part",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In (a), L's coefficients are restricted to ĝ, ĝ⁻¹, ḡ and background curvature. Linearizing the quasilinear reduced Ricci operator also produces lower-order terms involving derivatives and curvature of ĝ, which cannot generally be expressed from that listed data.",
      "context_sha256": "d066f65674f8e42998c0aea288e91939e715b6046287b6e4ad00bbd48d938ace",
      "item_sha256": "f5ded1d2675d0b88f8be757156279f7a6855a36f4639bc7eaa69760e062a2cd7",
      "at": "2026-10-12T20:33:38.333Z"
    },
    {
      "id": "lem-gr-barotropic-fluid-symmetric-hyperbolic-system",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Part (c) gives incorrect coordinate data for a general initially orthogonal chart: with lapse α≠1, g₀₀=−α² and v₀=0, the unit normal has u⁰=1/α, not 1. The asserted initialization is valid only with an extra unit-lapse condition.",
      "context_sha256": "b154782a1310a13980b42c9e86da1b87ed21bde54523635ddf9cbc25852e953b",
      "item_sha256": "8ebcc429d1b688e57831d2690edb32d9da254a51d6692a240bb664b1992c3ba8",
      "at": "2026-10-12T20:34:19.525Z"
    },
    {
      "id": "thm-gr-reduced-einstein-local-existence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [L1] licenses the first-order reduction only for an initially orthogonal chart, but the hypotheses impose no orthogonality; g^{00}<0 and positive g^{ij} allow nonzero g_{0i}. Step 1.1 lacks its cited reduction for allowed data.",
      "context_sha256": "3af130bfe6933f5601496118b1ff4b7cff14f8bd041b0fafaab1a4d1fdf3bc89",
      "item_sha256": "2570bd52805c9c3986cad56462e90f79b3c573ee4d2652840fb852159ea2f358",
      "at": "2026-10-12T20:33:21.994Z"
    },
    {
      "id": "ex-gr-fluid-principal-symbol-radiation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited lemma requires an EOS on an open interval with ε+p>0, but no domain or state restriction is given. On ℝ, p=ε/3 has ε+p=4ε/3, which is not always positive, so the lemma’s application is unjustified.",
      "context_sha256": "e7f4ae8956f375de851064dcd1476b2a0e29e25f510f1ef6e6319f569a284b22",
      "item_sha256": "0adacf99a5ad2098e065243ebb97395b6f213711b6c4c3a00f460fe86764438f",
      "at": "2026-10-12T20:33:55.581Z"
    },
    {
      "id": "lem-gr-dust-initial-data-and-tilted-initialization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Domain defect: this mathematics lemma relies on the dust reduced-evolution and subsidiary results as premises. Those physics-model items cannot justify a mathematical item under the supplied rules.",
      "context_sha256": "1f1745385ea1fa139959111441ba3d36982d9c858ae13a713f898eeaa9e003fc",
      "item_sha256": "b060043455faeedcf9a137d7a1eaf57abe457abcd75a7502f9c5422fc721db51",
      "at": "2026-10-12T20:34:46.686Z"
    },
    {
      "id": "thm-gr-scalar-field-local-evolution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows a general smooth three-manifold, while [[thm-gr-local-geometric-development]] requires Σ to be without boundary. Step 2.1 therefore applies that dependency beyond its supplied hypotheses.",
      "context_sha256": "35a59ccb8640bd4b3a5a59b4b6f9e0638aeca40228ed436efcd609c06b736d34",
      "item_sha256": "7f5ec633467205dbbc550ae93344076271dd8f4a760c67ac63677121e08e40c4",
      "at": "2026-10-12T20:35:37.083Z"
    },
    {
      "id": "thm-gr-high-regularity-selected-matter-development",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The vacuum step does not construct compatible harmonic Cauchy data, including H|Σ=0 and the full reduced metric jet, from (h,K). The geometric-development supplier requires this initialization contract, and the reduced-existence supplier cannot be applied from the constraints alo",
      "context_sha256": "823754e559fe2ad164b2cb646b7e2428680c5d7126d1e72d8c5a950ef94aee46",
      "item_sha256": "103b8af7f3286e7a440b801a23bf97e94eed653d5a8c87ea64bcf15b76603d37",
      "at": "2026-10-12T20:33:49.164Z"
    },
    {
      "id": "rem-gr-high-regularity-scope",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark relies on thm-gr-dust-local-evolution for the reduction equation and exponential solution, but omits it from deps and dependency_roles. Its dependency manifest is incomplete.",
      "context_sha256": "015f2fd971aa0bca6afecbb07aa5f977c9bf690c555d1251febc7007f7b5e965",
      "item_sha256": "a7c58112f3bf273f8d3dde54425dea2c77e0c0aee03c708338edd3bcf35136dc",
      "at": "2026-10-12T20:33:56.135Z"
    }
  ]
