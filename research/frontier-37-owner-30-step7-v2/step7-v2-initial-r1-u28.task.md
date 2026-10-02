# Step 7 adjudicate: initial, round 1, unit 28

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u28.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"28",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-holomorphic-structure-lifts-to-covering-surface, 0:ex-hyperbolic-disc-and-half-plane-geodesics, 1:def-harmonic-and-subharmonic-riemann-surface-functions, 1:lem-cocompact-free-affine-plane-action-is-a-lattice, 1:ex-three-uniformization-models-are-distinct, 2:lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces, 2:lem-locality-of-subharmonicity, 2:lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces, 2:lem-surface-green-identity-on-smooth-bordered-domain, 2:lem-weak-harmonic-limits-on-riemann-surfaces, 3:lem-green-envelope-dichotomy-and-logarithmic-pole, 4:lem-green-kernel-exists-after-removing-a-chart-disc, 4:lem-green-kernel-symmetry-on-riemann-surfaces, 5:lem-dipole-green-function-on-riemann-surface, 5:lem-green-function-uniformizes-simply-connected-surface, 9:cor-universal-cover-classification-riemann-surfaces, 9:def-poincare-metric-hyperbolic-riemann-surface, 11:ex-annulus-and-punctured-disc-hyperbolic-covers, 11:ex-genus-two-cocompact-fuchsian-quotient.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-holomorphic-structure-lifts-to-covering-surface",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title asserts a unique holomorphic atlas, but the proof establishes only a unique complex structure. Adding compatible charts or restricting chart domains gives distinct atlases for that same structure, so atlas uniqueness is false.",
      "context_sha256": "007389bee000ea5cdcc66f9f986324b653ec05f073b01915eb71e3c14fcf3cd4",
      "item_sha256": "c8f7f1ad29932a268e22e11ba0b4de4d96383c8b21a2453fc41df577096eb54b",
      "at": "2026-10-01T20:57:05.846Z"
    },
    {
      "id": "ex-hyperbolic-disc-and-half-plane-geodesics",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause 3 falsely identifies a segment with the entire circle or line inside the disc. For z=0 and w=1/2, the geodesic segment is [0,1/2], while the orthogonal real line intersects the disc in (-1,1). Clause 4 makes the same error.",
      "context_sha256": "4288d454907cac70a380b654aacbcfc4679b025ff4829a6d2990aa846f049ab1",
      "item_sha256": "b8526c615d101516dd2fd73c12396ff9030a19bccaead0105ff295bc49efd2ca",
      "at": "2026-10-01T20:57:56.002Z"
    },
    {
      "id": "def-harmonic-and-subharmonic-riemann-surface-functions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For X=C with the identity atlas and W two disjoint discs, the chart expression has disconnected domain, outside the plane subharmonic definition's interface. Overlaps can also be disconnected, so the cited biholomorphic invariance lemma does not apply as stated.",
      "context_sha256": "ae45cb9047d114886ba94ac9612d3cd0b1ea13a2e1c525db3b24b07428a7d8f5",
      "item_sha256": "1e4848a00d7feab6da4caffb074c155c5f415b038db9dfe43cd8886889ffebd7",
      "at": "2026-10-01T20:57:12.772Z"
    },
    {
      "id": "lem-cocompact-free-affine-plane-action-is-a-lattice",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1 extracts finitely many ambient discs covering a compact subset. The supplied def-compact-space interface expressly requires citing lem-compactness-of-a-subspace-is-ambient for this use; that citation is absent.",
      "context_sha256": "a3fdade695c32bd2f4a74d2034ef3c70571852130ea6ffb9cac569de2c2f5c64",
      "item_sha256": "9f2afafb0e6243bae7bf74835832387e40091588947ac22ca20903ccba38c14b",
      "at": "2026-10-01T20:57:41.741Z"
    },
    {
      "id": "ex-three-uniformization-models-are-distinct",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 applies F8 to a map from the Riemann sphere, but F8 only covers complex domains U,V⊆C. It does not license the claimed homeomorphism; a definition of biholomorphisms between Riemann surfaces is needed.",
      "context_sha256": "ad9ab5799dac04f1296f5af9c59b2fbfc5c02cc792a24da5f65301d10514fe73",
      "item_sha256": "4cdc563913274c15f997e1c1a810bb00da76e1de20ceb7b23b83ebba415476e9",
      "at": "2026-10-01T20:57:48.396Z"
    },
    {
      "id": "lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.2 falsely treats every chart domain as a disc. Take X=C, P={0}, U₁=C\\{1}, z₁=id, and u=-log|z|. All hypotheses hold, but U₁\\{0}=C\\{0,1} has noncyclic fundamental group. This invalidates the covering argument in steps 6.2–8.1.",
      "context_sha256": "3457ef8467cb4285c0cd5bea828071aa0dec37d5f14db2e95a5f9711f2389709",
      "item_sha256": "abd5e9c2eb23fc9cab1904307fd008afe0d94dd58d13d7074ff1edbca90ceaa7",
      "at": "2026-10-01T20:57:13.783Z"
    },
    {
      "id": "lem-locality-of-subharmonicity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] inaccurately restates its dependency for arbitrary topological spaces and extended-real functions. The supplied theorem covers only real-valued functions on subsets of R, so it does not license the cited level-set claims for s on a plane disc.",
      "context_sha256": "897e7d125ee7383336e9f372cffd78b6e8d98bf7548468a7ed4c40e04b0c017a",
      "item_sha256": "784ee7bd81a9f0799e713f6a2a331d75f6ebf50004619a79139bc077ef0c76de",
      "at": "2026-10-01T20:57:10.170Z"
    },
    {
      "id": "lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 21.1 and 22.1 invoke the surface gluing lemma with Ω=D and a coordinate disc B centered at ζ∈∂D. Thus B⊄D, violating that lemma's hypothesis B⊂Ω; gluing on D∩B has not been established.",
      "context_sha256": "7a979d902ff48fdef73375176d6fa9fb22fc7a71c088f4ea5915d77aeee0b0f6",
      "item_sha256": "11d878fcd7cac681a1e97af9a04d57003cff29dde404bb9edb79f2b666226672",
      "at": "2026-10-01T20:57:58.651Z"
    },
    {
      "id": "lem-surface-green-identity-on-smooth-bordered-domain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part 2 is ill-typed: when m≥1, Ω_K retains the circles ∂D_j and is not open. The cited definition defines harmonicity only on open sets, so the harmonicity hypothesis and step 11.1 are unsupported. Require harmonicity on int Ω_K.",
      "context_sha256": "d1ac9b99b55ae01db2e5fd019f5ca3bd965fde17685c67371c77b7cce4f43f21",
      "item_sha256": "6b778443a42a43ae19d1033e69e5114a1a1cb27084f36ca9638927d773c50356",
      "at": "2026-10-01T20:57:46.364Z"
    },
    {
      "id": "lem-weak-harmonic-limits-on-riemann-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 7.1 and 10.1 invoke AC_ω to choose recursively dependent subsequences. Their admissible choice sets depend on earlier selections, whereas AC_ω applies to a fixed countable family. No canonical selection or reduction to AC_ω is provided.",
      "context_sha256": "fe6fd4003c21f70fe8a22295ec527b9f9faeebe3d5d2633dc6393a7f01ce6d3b",
      "item_sha256": "1ac4d5f4b05682c53f5513b8c2ea9a588c4a5a38f338c04605fbbd43fec02b78",
      "at": "2026-10-01T20:58:28.406Z"
    },
    {
      "id": "lem-green-envelope-dichotomy-and-logarithmic-pole",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.3 evaluates z^{-1}(ζ) for ζ∈∂𝔻, although z^{-1} is defined only on 𝔻. Compactness of Ū does not guarantee a boundary extension of the chart. Thus the cited upper-semicontinuity argument establishing the pole bound is invalid.",
      "context_sha256": "b889255e63b67a37cc7f88c2765813f254af76452e21162b0197b1de319befa4",
      "item_sha256": "a1ba47ba4966d0cf8b803b7f92a80e350de760b0b6882c9db59521f51fa3fdd0",
      "at": "2026-10-01T20:57:52.676Z"
    },
    {
      "id": "lem-green-kernel-exists-after-removing-a-chart-disc",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] drops the dependency's hypothesis that the ambient surface X is noncompact. Step 3.2 applies its Dirichlet theorem with compact X, outside the supplied interface's scope, leaving the compact case unjustified.",
      "context_sha256": "9876739841b095a69ca69ce65e11ab25bc681574260f281aa355517d09df6c81",
      "item_sha256": "974e4aee4fbebf25b23d41a6c1f0cd85819c101483aaa845d73ccc19c809ba6b",
      "at": "2026-10-01T20:57:34.461Z"
    },
    {
      "id": "lem-green-kernel-symmetry-on-riemann-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 falsely restates the Riemann-surface interface: an arbitrary open subset need not be a Riemann surface. The union of two disjoint chart discs is open but disconnected, violating the supplied definition's connectedness requirement.",
      "context_sha256": "22ca115d5fa0d254a11b07e868e3733e5f1d26556f52eb020f88516ca779cc0d",
      "item_sha256": "f3ff628983662632b083b259e229ec8dc2e5af584e98428509b645098453fb9e",
      "at": "2026-10-01T20:57:56.706Z"
    },
    {
      "id": "lem-dipole-green-function-on-riemann-surface",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 4.1 and 6.1 infer kernel harmonicity and a harmonic logarithmic remainder from [F2], whose supplied interface only defines the Perron envelope. Neither [F2] nor the other cited facts establishes these essential properties.",
      "context_sha256": "c760519c710459c9b2732f13f8f01a7c26bd402fd0be472ee287e9411be8a66d",
      "item_sha256": "9eed7c1689922ebb3495eb1cf9f25c237a59cbec624ea77bbc62ce0833475763",
      "at": "2026-10-01T20:57:54.630Z"
    },
    {
      "id": "lem-green-function-uniformizes-simply-connected-surface",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] inaccurately restates the Riemann-surface interface: an arbitrary open subset need not be a Riemann surface, since it may be empty or disconnected (e.g. two disjoint discs in C). Nonemptiness and connectedness are required.",
      "context_sha256": "a5228f58dd4e695e18177fe0888e85f3ed60e2711b935b2abd6e59a0135d54a7",
      "item_sha256": "cd74e5d1b83bf0b51711306d2712e5fe7584009bebcacd3678e3e88922cbdb93",
      "at": "2026-10-01T20:57:27.903Z"
    },
    {
      "id": "cor-universal-cover-classification-riemann-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 uses ambient open covers of compact subsets without citing lem-compactness-of-a-subspace-is-ambient. The supplied def-compact-space interface explicitly forbids that use without this citation.",
      "context_sha256": "ff28a7d8cd2a1f6588fb53edc7d0f51210e86fee142c17817261c55e6df1434c",
      "item_sha256": "e7ece78d5bb904f2c45cea3539752b14efad6ab5a56fed649a899e9c74265ad0",
      "at": "2026-10-01T20:57:41.482Z"
    },
    {
      "id": "def-poincare-metric-hyperbolic-riemann-surface",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The normalization remark is false. For X=𝔻, the disc chart z=2w on |w|<1/2 gives ds_X=|dz|/(1-|z|²/4), not 2|dz|/(1-|z|²). Thus an arbitrary disc chart does not carry the surface metric to the disc metric.",
      "context_sha256": "896543dc613b5582e0509b49503d1e15076472c8ac7edfed59e5b408623bd7da",
      "item_sha256": "f451d2363c44aa610d24e0c386941c48233b97a0a6844f1bcfba8c49a5ed173b",
      "at": "2026-10-01T20:57:38.563Z"
    },
    {
      "id": "ex-annulus-and-punctured-disc-hyperbolic-covers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F21 inaccurately restates the lifting lemma for arbitrary coverings. The supplied interface covers only topological universal covers and assumes Countable Choice; it does not license the stated generalization.",
      "context_sha256": "9cb02ea678f53458606da5b34d91cfd87197f1f2a7c0816ea88950bd6b589509",
      "item_sha256": "95e472352b25b153738ee62137926120d8adcc320652b10f6102c8ccc5c66ec8",
      "at": "2026-10-01T20:57:52.099Z"
    },
    {
      "id": "ex-genus-two-cocompact-fuchsian-quotient",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 falsely upgrades the implicit function theorem to whole cylinders: X₀∩(A×ℂ) contains both (x₀,y₀) and (x₀,−y₀), while X₀∩(ℂ×B) contains all six (aₖ,0). Neither is the asserted single graph; the theorem requires local product neighbourhoods.",
      "context_sha256": "f8f5695ac93d2629746141e152cebb15663e620af4f33b8c342b039d2a7dc456",
      "item_sha256": "c767f12f413302e4be6c93a5cc94944854d9151f267a9d0ad22d617fb9b0e642",
      "at": "2026-10-01T20:57:33.475Z"
    }
  ]
