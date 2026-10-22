# Step 5 adjudicate: initial, round 1, unit 77

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-77-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u77.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"77",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-bounding-chain-torsion-linking-pairing, 0:lem-compact-support-local-coefficient-mayer-vietoris-and-cap-ladder, 0:thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice, 1:def-smooth-slice-disk-exterior, 1:lem-l2-cellular-duality-and-weak-exactness, 1:lem-von-neumann-inertia-and-coisotropic-reduction, 1:thm-finite-geometric-complex-chains-dominate-compact-manifold-chains-in-zf, 2:def-zero-surgery-on-a-knot, 2:lem-rational-homology-ball-boundary-kernel-is-linking-metabolizer, 2:thm-ptfa-group-rings-are-ore-domains, 3:lem-equivariant-intersection-pairings-are-preserved-by-collared-bordism-gluing, 4:thm-topological-finite-projective-l2-duality-and-boundary-gluing, 5:def-cyclic-zero-surgery-cover, 6:def-blanchfield-pairing-and-higher-order-rho-invariant, 6:lem-signature-additivity-under-gluing, 6:lem-zero-surgery-cyclic-cover-homology-splitting, 6:thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded, 10:lem-casson-gordon-bordism-independence-and-nonsingularity, 12:lem-casson-gordon-signature-defect-and-vanishing.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-bounding-chain-torsion-linking-pairing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It treats x,y as homology classes but uses them as chains in ∂C=nx and C·y. Both require chosen cycle representatives; as written, the boundary equality and intersection are undefined.",
      "context_sha256": "df8be9056ca9577c6f1523d414bff75e4fa9e0ebac6312234441c675a3befdcb",
      "item_sha256": "923e931bae687d0700c32d6b28099ca815611068437ccdea25d4cd3a326410fa",
      "at": "2026-10-21T15:31:27.789Z"
    },
    {
      "id": "lem-compact-support-local-coefficient-mayer-vietoris-and-cap-ladder",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its dependency: the supplied interface gives excision and Mayer–Vietoris, but not an explicit least-subdivision small-chain deformation. Steps 1.1 and 3.1 rely on that unstated result for the supported-complex comparison and cap-ladder correction.",
      "context_sha256": "093e60f52e2eae7a063aa87e59c772ae8d25fbc748afaeb0d71957dd0e9abeae",
      "item_sha256": "fde71235f348652ba9ed836fdc4269bec7950899e1f92bbdbcee57d36ae45f16",
      "at": "2026-10-21T15:33:08.622Z"
    },
    {
      "id": "thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its cited interface: an arbitrary finite union of cubes and their faces need not have disjoint open faces (for example, overlapping translated squares), so those faces need not form a CW structure. The constructed grid union is compatible, but F1 as stated is false.",
      "context_sha256": "cd7257c0fb05b415f1531b027d23ac2f1e24e135d40a77ed4f4b4aca276f7832",
      "item_sha256": "d92a14c285e0a548da3b47dd03c1e2c2550b91bc0a980a5a040c3739979cd571",
      "at": "2026-10-21T15:36:14.990Z"
    },
    {
      "id": "def-smooth-slice-disk-exterior",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "D and K are unoriented, so the definition does not determine a positive meridian: the two orientations of D induce opposite orientations on the normal circle. Specify an orientation of D (or K) before defining the meridian.",
      "context_sha256": "ecf1afb63a468dbe91673d19f78ee9e23949c1382812a114a81911c7256110b8",
      "item_sha256": "2a9cdf9f9d03a75462c43487b8a9f5e95612c7a62ad525334d2a299c867dbcd1",
      "at": "2026-10-21T15:33:31.966Z"
    },
    {
      "id": "lem-l2-cellular-duality-and-weak-exactness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The regular G-coefficient local system is not defined: on M it requires a specified monodromy homomorphism π1(M)→G (or a G-cover). Neither the statement nor its dependencies supplies one, so the cellular differentials and claimed modules are undefined for arbitrary G.",
      "context_sha256": "803ce412c6fa46cf95e3cad7908a98f6522447603767130db331f1881a7db5d0",
      "item_sha256": "c0362faa4c43fcdb8e410decb770eed25aae0beb5d7988a98055c75e5e4f7230",
      "at": "2026-10-21T15:35:13.844Z"
    },
    {
      "id": "lem-von-neumann-inertia-and-coisotropic-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its dependency: the supplied interface gives kernel and closed-image projections plus dimension rank-nullity, but does not establish matrix spectral projections. Steps 1–2 rely on those projections as module projections and on their traces.",
      "context_sha256": "1ba758ee8cb948c0f9245f1cc62d94e0a43db5420c962a17629e1bd7dae4ba0e",
      "item_sha256": "22afb537d97b032ed47505c9ecbc97d4aee9c36b90ca734acd0e92fd750440bf",
      "at": "2026-10-21T15:34:54.665Z"
    },
    {
      "id": "thm-finite-geometric-complex-chains-dominate-compact-manifold-chains-in-zf",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 materially overstates its dependency: the supplied interface gives excision and Mayer–Vietoris results, not a subdivision map ρ, homotopy D, image preservation, or R-linearity. Steps 2, 5 and 7 rely on these unlicensed operators.",
      "context_sha256": "b15bb76f2993a89bb984f2ffb56742aca9916b6c2296bce57f9bec8d3bacca0d",
      "item_sha256": "a7961e802824537047ab5e4b70c15e6463459d449ae923735cd9a5a6aa4ea728",
      "at": "2026-10-21T15:34:32.176Z"
    },
    {
      "id": "def-zero-surgery-on-a-knot",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The gluing map is defined only on ∂(D²×S¹), but the definition identifies its interior core {0}×S¹ with μ_K⊂∂E_K. Specify that the boundary longitude parallel to the core maps to μ_K, or say the core is isotopic to μ_K after filling.",
      "context_sha256": "ad1f2aa671baccf2b77480bc668261daa15186b05d6a75176605080f570223fc",
      "item_sha256": "5382d95705630db27f8d6ea2721b7ef7863df8466c5695c76c10379ccc175cde",
      "at": "2026-10-21T15:34:49.895Z"
    },
    {
      "id": "lem-rational-homology-ball-boundary-kernel-is-linking-metabolizer",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F5] is unsupported: its cited interfaces give the bounding-chain definition and nonsingularity, but neither states the Bockstein–cup evaluation formula. Step 3.2 relies on that missing bridge to prove isotropy, so the metabolizer conclusion is not established.",
      "context_sha256": "7b1e4b7e0d4d85d81f9e276563dcb85be64acca51815f4f4abf21b5209f94931",
      "item_sha256": "b8bd6f132300af10f2a863d264604e3ccb2d9014357d9df43a7a831dfcaf5844",
      "at": "2026-10-21T15:34:56.512Z"
    },
    {
      "id": "thm-ptfa-group-rings-are-ore-domains",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 1.1, 1.2, and 2.1 attribute specific constructions to [F3]–[F5] (leading coefficients and cocycle units, finite coset lifts, right-ideal map classes) that their supplied interfaces do not state. These dependency restatements are unsupported.",
      "context_sha256": "c674647e445b23563ac5561ac84c4051e20ac8c98eaf613dee7cb2f94afb9274",
      "item_sha256": "9446776aec20bc90207f751c1991ac891a8924ba3fed0c89a32e36ed750a0686",
      "at": "2026-10-21T15:35:40.285Z"
    },
    {
      "id": "lem-equivariant-intersection-pairings-are-preserved-by-collared-bordism-gluing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates the excision dependency: its interface gives induced homology and cohomology isomorphisms, not small-chain homotopy inverses or cap compatibility. Step 2.1 relies on that unsupported chain-level comparison to identify the cap with i_*p.",
      "context_sha256": "3598e8e793f065b8f5abbe16631b7bee60cbaf0442d16a2eb15af690b6f36682",
      "item_sha256": "9b205b07137c66f89b1bb169dd34264c17cc52505294b40cc0c5bda9ae2630b6",
      "at": "2026-10-21T15:36:29.812Z"
    },
    {
      "id": "thm-topological-finite-projective-l2-duality-and-boundary-gluing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates its dependencies: the supplied gluing lemma preserves same-piece pairings but gives no support/excision comparison. Step 10.1 cites that nonexistent F4 result for cross-term vanishing.",
      "context_sha256": "7483f353d753a6c021d0782181184e1f6be90b96c46e5dd41f19c5135b3c0341",
      "item_sha256": "457554787c919dcc9f8cde5e0b3680df7a4f156aa375da4a6c10639194e5ba5f",
      "at": "2026-10-21T15:38:19.540Z"
    },
    {
      "id": "def-cyclic-zero-surgery-cover",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited longitude definition explicitly asserts neither existence nor uniqueness, yet this defines zero surgery along “the preferred longitude” for every knot without supplying either. It also leaves the lifted meridian unclear: the cited cover convention specifies a closed lif",
      "context_sha256": "c9edaa7622d37100fb7cfa8e92f222ad9b66e10c29217cdb7fd4ea6e7ee33048",
      "item_sha256": "97766c38855f45e0624e333cc74e5d8f21b3751e527db24b391ac3829ea9b92b",
      "at": "2026-10-21T15:36:38.013Z"
    },
    {
      "id": "def-blanchfield-pairing-and-higher-order-rho-invariant",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The signature-defect clause permits arbitrary G, but its dependency defines sign_G^(2) only for countable discrete G. Thus the clause invokes an undefined quantity for allowed inputs; add the countability hypothesis or supply a broader dependency.",
      "context_sha256": "f0533e52e3fa1bd46a2e145a6772def62a8b04bed60290692788a0bead284541",
      "item_sha256": "9da3c6fe47f1ca595066fdf1735c64b4937893ea5ff8ead4c87f3e7bce9b4db4",
      "at": "2026-10-21T15:38:36.965Z"
    },
    {
      "id": "lem-signature-additivity-under-gluing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows any discrete Γ, but the supplied signature definition defines sign^(2)_G only for countable discrete G. Thus the L² terms for uncountable Γ are outside the cited interface, and F1 silently broadens that scope.",
      "context_sha256": "ce4ef6b38930f257bf1d3a1ec2f35fb1424dea65607f83fa8bd3f33892981090",
      "item_sha256": "026d299d383f5774bf7b322e00b1e8dcd53195afa22790900f34ef76890a242f",
      "at": "2026-10-21T15:37:06.147Z"
    },
    {
      "id": "lem-zero-surgery-cyclic-cover-homology-splitting",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F7] attributes the lifting criterion used in 1.1 to the cited covering-space classification, but its supplied interface only classifies connected covers by subgroups; it does not state a criterion for lifting a surface. This key inference is unsupported by the cited dependencies",
      "context_sha256": "6269b452b3a8450929241d7e5faf875e55e989e3d3cf1bfb7ce232ff44ca2fab",
      "item_sha256": "8e98023ead097c5bf7b724dd20f41ae6c6485508d02a907a36d39870de42fb0d",
      "at": "2026-10-21T15:38:36.132Z"
    },
    {
      "id": "thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its suppliers: their interfaces give unlabelled collapse correspondence and representatives, not controlled smoothing or relative transverse homotopies. Step 2.2 needs those homotopies to produce an actual labelled bordism, so step 4.1 and the signature comparison a",
      "context_sha256": "af334c4aef777fd938c843f0955cee09d93ba295becf2d294976482fe31e7763",
      "item_sha256": "d9ebdeaabf6b10cc845b955e9f8fa8303490dc7f399fc614f2ee58289e3ec7bd",
      "at": "2026-10-21T15:45:20.149Z"
    },
    {
      "id": "lem-casson-gordon-bordism-independence-and-nonsingularity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3 claims F1 makes the twisted boundary acyclic, but F1 only asserts nonsingularity after capping. F3 identifies its gluing form with the absolute form only for an acyclic boundary, so the proof does not establish that its glued Witt class is the stated invariant.",
      "context_sha256": "e4ec5146bd63eeaf9c1ac7a66c3b5299108bf737e330d33bdf27a8976a2ded54",
      "item_sha256": "18d7eb12d0adad9257496fb704598018ec8c14ed6fd446ef1b0a5da353b0d9f3",
      "at": "2026-10-21T15:37:35.663Z"
    },
    {
      "id": "lem-casson-gordon-signature-defect-and-vanishing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates the supplied bordism-independence lemma: its interface covers a fixed character order and does not establish compatibility with enlarging the cyclic target. Step 3.1 needs that comparison to identify the extension’s Witt class with the original character’s class.",
      "context_sha256": "83a4401f719497f7f4b0d51c97c5058ceea6f28906c198cef225456d95416d1a",
      "item_sha256": "89f18c558544ea80516f3775108980d9aea5a282a25811fbb98e1c7deb11db2d",
      "at": "2026-10-21T15:37:34.798Z"
    }
  ]
