# Step 7 adjudicate: initial, round 1, unit 13

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u13.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run,phase,round,unit,input_sha256:"ac52953837f71781b0c07653d319517d1817546b89ee1decf768421291c215c2",decisions:[],reviews:[],created_items:[],downstream:[]}. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters); unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input:
[
  {
    "id": "def-complexification-of-a-real-lie-algebra",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Well-definedness is justified only by a proposition whose hypotheses already invoke this definition’s complexification and bracket. The asserted non-circularity is not supplied by that interface; this is circular support for a required part of the definition.",
    "context_sha256": "239f1090fbf46a118c748e92eda8a0af354e5276f985f79117fec669cc18982a",
    "item_sha256": "2590c20c00e201cffd7b50c2b60071723ef775fbc94cc55c741cb32f2be2aeab",
    "at": "2026-09-21T13:20:57.691Z"
  },
  {
    "id": "prop-complexification-preserves-semisimplicity",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L1] inaccurately restates Cartan’s criterion without its required characteristic-zero hypothesis; as written it asserts the criterion for every finite-dimensional Lie algebra, contrary to the supplied interface.",
    "context_sha256": "470eb594254608c9adf0c737fbcf561aa89febc0025a434c0dc2e73f3c26981f",
    "item_sha256": "9421604eecf1474de868c65d785a1d8920da4bfb0cf985052a5918a634f32264",
    "at": "2026-09-21T13:21:09.769Z"
  },
  {
    "id": "thm-real-forms-correspond-to-conjugate-linear-involutions",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 4.1 proves only Aut_C(g)-orbits (conjugate real forms), not ordinary isomorphism classes. It never shows that a real Lie-algebra isomorphism g0≅g0' complexifies to an ambient complex automorphism of g, so the stated class bijection is unsupported.",
    "context_sha256": "95418c8ceb387ed668528bb3dca1ca924c6a275e47e4c4ffd7fa8b32ec703aea",
    "item_sha256": "51a44f2f0d508051a114501a59b41c0616a9288aacb85aec8d93528a078401b3",
    "at": "2026-09-21T13:21:26.043Z"
  },
  {
    "id": "thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L3] inaccurately restates its cited interface: the supplied bracket/Killing-signs proposition says nothing about B_theta or self-adjointness of ad_X. This unsupported claim is essential to step 1.1’s simultaneous diagonalisation.",
    "context_sha256": "ef613f3293653f8e6cadf04248165847e6f98bacb6ad20913195d65a123e3cd3",
    "item_sha256": "ba0e2aac4316ed73908de03ea680ecc7d312596e0af6c6ffc8286405e2e120e4",
    "at": "2026-09-21T13:21:44.895Z"
  },
  {
    "id": "def-maximal-split-abelian-subspace-and-real-rank",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The cited conjugacy theorem applies only to a Riemannian symmetric pair (G,K) of noncompact type, but this definition assumes only an arbitrary Lie algebra with Cartan involution. No construction of such a pair for the reduced summand is supplied, so it does not license independe",
    "context_sha256": "fef717a33edeeb391bca44bacf8fb15267d00e80862c2ecac1f73f8f32137ff7",
    "item_sha256": "161ec0f0029ce2ee4ba861e8e2fabbb2f835bd3b5fb445eb83345c15d3ab5dcb",
    "at": "2026-09-21T13:21:59.101Z"
  },
  {
    "id": "prop-real-cartan-subalgebras-need-not-be-conjugate",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L1] inaccurately restates def-special-linear-lie-algebra-sl-two: the supplied interface defines sl_2(C) and its complex basis, not the real Lie algebra sl_2(R) or a real basis. Thus its cited foundation for the real bracket computation is not licensed.",
    "context_sha256": "b6df66ca02e2e09a0e9eabd2d305162f0bb2a9e1bb7daa5355e475cea9bdc4f9",
    "item_sha256": "d8d01c224af64b8c86b2b34bf6cafa31896bd3c581f74bfe573e9d4cb137af96",
    "at": "2026-09-21T13:22:27.233Z"
  },
  {
    "id": "def-positive-restricted-roots-and-nilpotent-n-algebra",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "It wrongly says positivity is cut out by a linear functional on \\(\\mathfrak a\\), “namely \\(H_0\\).” But \\(H_0\\in\\mathfrak a\\), not \\(\\mathfrak a^*\\); evaluation \\(\\lambda\\mapsto\\lambda(H_0)\\) is a functional on \\(\\mathfrak a^*\\).",
    "context_sha256": "7a8fd96cf10d63f9a1cda23c141690dd4bfae27531b1c44dbdc668180ab90e85",
    "item_sha256": "336bb462dee6b11068c184b86d3c0b90b7cc5c51703a8168096c9d248ec9fe35",
    "at": "2026-09-21T13:22:29.877Z"
  },
  {
    "id": "def-theta-stable-cartan-subalgebra-and-compact-split-parts",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The final citation is inaccurate: the supplied Cayley-transform theorem mentions root transforms and extremal representatives, but states no maximality criteria involving maximal abelian subspaces of k₀ or p₀. Thus the item attributes an unsupported claim to that dependency.",
    "context_sha256": "ace045ee39767a58f14883018ebca05c47ba7181c43cc9cc9de387077e7cdd3d",
    "item_sha256": "86a7e21b6adec8ae75908500d689f64ff2c97d6afbdc4b4e5b5e4cab3156b951",
    "at": "2026-09-21T13:22:48.278Z"
  },
  {
    "id": "fs-all-real-forms-of-a-complex-semisimple-lie-algebra-are-isomorphic",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "L2 inaccurately attributes the stated Killing-form values to the supplied Cartan-subalgebra proposition: that interface contains no Killing-form computation or values. The Killing-form definition alone does not state them, so this cited fact is unsupported as presented.",
    "context_sha256": "e75c301ee0823705247fed90f9415007a1656a5fe03bf4998f83294ef42d50d9",
    "item_sha256": "9edc7074e2020c7cfd6259e0c026e23fe99355894754381a9d6fd7d61b621280",
    "at": "2026-09-21T13:23:30.305Z"
  },
  {
    "id": "ex-compact-and-split-real-forms-of-sl-two-c",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L5] inaccurately restates the compact/split definitions as applying to any real form, omitting the required ambient hypothesis that the complex Lie algebra is finite-dimensional semisimple. The proof also never establishes that sl_2(C) is semisimple before invoking [L5].",
    "context_sha256": "a43ff515c64d260cf9c5f43e21415cc0529ffaa7da73e7cf978356fae7f15b61",
    "item_sha256": "799d40b6286c379789e9e507c4df12ef8095a6580be81bc945ef3d4873c5a3e0",
    "at": "2026-09-21T13:23:50.714Z"
  },
  {
    "id": "lem-chevalley-basis-and-real-structure-constants",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L5] reverses the coroot identification: λ↦H_λ maps α^∨=2α/(α,α) to h_α, not h_α to α^∨ (and h_α is not in the stated domain E). Thus its dependency restatement is false/ill-typed.",
    "context_sha256": "ee23465d5e360eb1ddaaf1b3fb1e97e1ede78fb4b5e2a6961fe23a1a0b1873f2",
    "item_sha256": "0223f68b0bddce734de9a42902a912893cb4e16337da14164219aa92660c55bc",
    "at": "2026-09-21T13:24:15.655Z"
  },
  {
    "id": "ex-restricted-roots-of-sl-n-r",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 2.1 wrongly says step 1.1 gives \\(\\mathfrak g_0^0=\\mathfrak a\\): step 1.1 computes the centralizer only inside \\(\\mathfrak p_0\\), not in all \\(\\mathfrak g_0\\). A separate matrix argument is needed to exclude a \\(\\mathfrak k_0\\) component.",
    "context_sha256": "7de92b70ae8678c9d783fb8c151f2404d979081684d043548b442eec97a5799c",
    "item_sha256": "7fc3c467db44fb1212d39f5f6dcd9b99e1e9fedb6cbdb7d84db18f6651e264a4",
    "at": "2026-09-21T13:24:38.117Z"
  },
  {
    "id": "thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 3.2 derives the global d exp formula by differentiating an “exponential series,” which an arbitrary Lie-group exponential has not been given. L2 only gives smoothness and d exp at 0. This unlicensed formula is essential to 4.3 and the diffeomorphism.",
    "context_sha256": "b9ab6d499104d41bfbf760a7a3abd205e01e2d3c0d7cd96bad01d155f6691d73",
    "item_sha256": "3fb3419d61b78a9b44289097097e94a9100bdd9713900419efc5a4e30fff6696",
    "at": "2026-09-21T13:24:52.804Z"
  },
  {
    "id": "ex-compact-and-split-cartan-subalgebras-of-sl-two-r",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 2.1 does not establish maximal noncompactness: nonabelianness of p only makes RH maximal among abelian subspaces of p, but the supplied interface does not state that a=h∩p of every theta-stable Cartan is abelian. A separate exclusion of dim a=2 is needed.",
    "context_sha256": "39004fd27d51c757a7a0cfad7a63d5c5fe237768802435abe15baffa958826a5",
    "item_sha256": "e4cb89851501c7f7a654cbfef19ef50c894c5d635aa4540995847151be094c60",
    "at": "2026-09-21T13:25:11.900Z"
  },
  {
    "id": "thm-classification-of-real-semisimple-lie-algebras",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.2 overstates the Satake dependency: it classifies by all Satake-diagram equivalence classes, but the supplied theorem gives a bijection only onto realized Satake classes. No realization criterion is supplied.",
    "context_sha256": "92af00f567b3ce786e22ed3ba25bf4ef39124d5ab0e0d9b4c97ac4318031087a",
    "item_sha256": "e3b8583e7db4fcd779469f02d3fc173aec203d31e7860c4df413c9b2a3122385",
    "at": "2026-09-21T13:25:25.943Z"
  },
  {
    "id": "cex-two-nonconjugate-real-cartan-subalgebras",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "L4 inaccurately restates its dependency: h_B is never defined here or in the supplied interface, which only defines k=e-f=-K_0. Thus the assertion R i h_B=R K_0 is untyped/unlicensed notation.",
    "context_sha256": "125dd816e40f7f02d4774f570fc4238795fc639a4ffb12731d07cf3e5accff82",
    "item_sha256": "8455bb058008b098cd8326c00ce74d9af2c959819f6814c6cfd42d6bbdd37067",
    "at": "2026-09-21T13:25:35.525Z"
  },
  {
    "id": "lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[F7] misstates the supplied zero-based CE differential: for trivial coefficients, (dc)(x0,x1,x2)=-c([x0,x1],x2)+c([x0,x2],x1)-c([x1,x2],x0). Its displayed formula is the negative.",
    "context_sha256": "ff2aafe8c5a5e508533b80c4fbc4d71545e0d5d7643c3088b9e493eb4221e0ea",
    "item_sha256": "85472857a3e1ba8e063c6b47b53f904b6f9edc8d0277fe5283068aff5e4edfc8",
    "at": "2026-09-21T13:25:36.586Z"
  },
  {
    "id": "lem-characteristic-kernel-on-a-regular-moment-level",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[F3] inaccurately attributes X_{\\mu^\\xi}=-\\xi_M to lem-differential-of-the-moment-map-and-orbit-orthogonal-identity; its supplied interface states only kernel/image identities, not this fundamental-field equation.",
    "context_sha256": "a860c947d0952ef4790e3202e00011172ca80956ddd3c1a1b24fd09f26f47715",
    "item_sha256": "fbeca1800f0cfb8196c5e36c1be0993c1cd2b5b8e26ff3ca5afddc3bfd67841f",
    "at": "2026-09-21T13:26:17.231Z"
  },
  {
    "id": "rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The weighted-action claim omits necessary hypotheses on k,l. If gcd(k,l)>1, generic points have nontrivial stabilizer (e.g. k=l=2), so the axis stabilizers are not isolated cone points of orders k,l as claimed; weights should be positive and effective/coprime.",
    "context_sha256": "00b7e2967c79ff05a5ac84f4752e0a4a57a925a78723e7550b6df88f4300c368",
    "item_sha256": "972b23a8c8c6034ac3439d09e42d52aac0f1c4d8c6256de0da74bb8736cd28a5",
    "at": "2026-09-21T13:26:22.272Z"
  },
  {
    "id": "thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title omits the fixed Cartan involution. The proof only compares Cartans and positive systems for one fixed θ; it neither proves nor cites conjugacy/independence for different Cartan involutions. Thus the title asserts more than established.",
    "context_sha256": "a603b929cb6bf0a75ee893019df9ed9e2c09ba959b65de7250e37c0eb84e5354",
    "item_sha256": "34b8331709429c1208476782d839fc50cce31bd03614cd1c6de5f1d49895c3b3",
    "at": "2026-09-21T13:26:22.301Z"
  },
  {
    "id": "thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L2] inaccurately says the Cayley theorem supplies conjugacy of maximally split Cartans by the compact automorphism group. Its interface supplies only conjugacy by real inner automorphisms. Step 1.1 relies on this unlicensed stronger claim.",
    "context_sha256": "31e579431546c9eba340f2684c3904962ddba0acecd6c872c62789af2b2a10c4",
    "item_sha256": "d1654d4169b28c33e59c448b8fb7b937e2bfd2a837e572fdeebe0e7740ed1072",
    "at": "2026-09-21T13:26:25.997Z"
  },
  {
    "id": "thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The proof silently assumes an arbitrary semisimple g already has a Cartan subalgebra and a base of its roots. No supplied dependency establishes either existence, so it proves only the stronger-data conditional, not the stated universal existence claim.",
    "context_sha256": "a70366e28e462eadf1f3a7c19c2e5e06750adc16dc6f146edc41489a79d7d951",
    "item_sha256": "3bcce1dc35fd43a086876a104ddc3aeaa3ce70394ca3251a99bbbf38efe534ec",
    "at": "2026-09-21T13:26:34.318Z"
  },
  {
    "id": "prop-compact-group-symplectic-actions-admit-an-invariant-compatible-almost-complex-structure",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[F3] inaccurately restates its dependency: the square-root lemma requires the endomorphism to be self-adjoint as well as positive-definite. “Positive-definite endomorphism” alone need not be self-adjoint, so the stated fact is false.",
    "context_sha256": "481375402e137e7e77afc84923330c23ebbcf30c27079c1c0cb840e42b319abb",
    "item_sha256": "9305f2863889c5249afb8face98ec64ad8a212a7c55d58c672741a3c3e7d8a82",
    "at": "2026-09-21T13:27:07.715Z"
  },
  {
    "id": "ex-grassmannians-from-unitary-symplectic-reduction",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[F1] inaccurately attributes compactness of U(k) to ex-unitary-and-special-unitary-lie-groups; its supplied interface gives only Lie-group status and its Lie algebra. Compactness is then essential to the claimed properness in 4.1.",
    "context_sha256": "c60caca1e0ab9dcd554e374fdd2761ff64f581dcb52e68d088b1ec042be25172",
    "item_sha256": "1f722e7e2f7fa2a704aae4171e4d34ce3acfac6265d5bf5ce02ec0be5e3e4cb2",
    "at": "2026-09-21T13:27:15.273Z"
  },
  {
    "id": "ex-two-sphere-as-a-coadjoint-orbit-of-so-three",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F1 is not licensed by its cited interfaces: the SU(2)/SO(3) item only gives a covering and a Lie-algebra isomorphism, while the cross-product item only defines ×. Neither establishes the chosen identification’s bracket/coadjoint-rotation claims, which the proof needs.",
    "context_sha256": "11226950e26936bbb9a8e284be817b5196ce6ee000b55fe391954bc4de54d2bc",
    "item_sha256": "a79150f7d33c9a4f109e730fc43e87d036af5a13aecb1c1b0fd6987bc0d32883",
    "at": "2026-09-21T13:27:22.188Z"
  },
  {
    "id": "prop-classical-real-forms-of-the-classical-complex-lie-algebras",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The asserted exhaustive low-rank list omits \u0001mathfrak{sp}_4(\u0001mathbb R)\u0001cong\u0001mathfrak{so}(3,2) (also \u0001mathfrak{sp}(2)\u0001cong\u0001mathfrak{so}(5)). Thus “the low-rank coincidences are” is inaccurate.",
    "context_sha256": "5dc4acc07108c8a1361711d03f64c17df08f256c11fee6e2ac5517839c5d91f8",
    "item_sha256": "de9d5ffecfb08c3e32c5839b7e78ed9515a364312a61dd6107e36fbec33b4ba9",
    "at": "2026-09-21T13:28:14.201Z"
  },
  {
    "id": "ex-hyperbolic-space-as-so-zero-n-one-mod-so-n",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "L1 inaccurately restates the closed-subgroup interface: it supplies only embedded-Lie-subgroup structure, not the asserted characterization Lie(H)={X: exp(tX)∈H for all t}. Step 1.1 relies on this unlicensed addition.",
    "context_sha256": "9b96e9eced8c0cc7556159594b09e3c42cb9e17b60ad490a728d4cc468c02f69",
    "item_sha256": "f1b6673436ff5b54a6c8f29c3ede5874ca7a44efe6d1b3b07a49f10998b01e80",
    "at": "2026-09-21T13:28:16.838Z"
  },
  {
    "id": "prop-restricted-root-systems-may-be-nonreduced",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "In (c) the doubled roots are 2Ψ, so under φ they are {±2e_i}, not the claimed {±e_i}. The latter are the indivisible roots that admit doubling. Thus the concluding identification in the Statement is false as written.",
    "context_sha256": "d9c68934547be35b03a537acace45ef10abdf9ed6020f6c4fc56be0cf3c94b15",
    "item_sha256": "85414ae2ef9ca2f41765a8d1302348d29e67eecc837bcb572b9133848d520b4f",
    "at": "2026-09-21T13:29:00.102Z"
  }
]


