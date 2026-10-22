# Step 5 adjudicate: initial, round 1, unit 99

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-99-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u99.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"99",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:def-boundary-slope-of-an-incompressible-surface, 5:lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber, 10:lem-figure-eight-character-and-longitude-traces, 10:lem-irreducible-sl2-character-components-have-specializing-quadratic-models, 10:lem-knot-a-polynomial-boundary-elimination, 11:lem-adjoint-twisted-slope-is-rational-on-a-character-component, 11:thm-ccgls-newton-edge-slope-is-boundary-slope, 12:thm-adjoint-logarithmic-gauss-slope-and-ideal-point, 12:ex-knot-kt-20-worked-cases, 13:thm-benard-florens-rodau-logarithmic-gauss-formula, 14:lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs, 15:thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots, 16:cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots, 16:thm-baldwin-sivek-two-boundary-slope-alternative.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-boundary-slope-of-an-incompressible-surface",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The boundary-compression disk is not required to have interior disjoint from S or to meet ∂E_K only along the stated arc. As written, this is not the standard boundary-incompressibility condition and changes which surfaces realize boundary slopes.",
      "context_sha256": "1311311cb43e19db0ffadfaaa8fe4f3a574f16cdd007657516bb6d55e9c6b07e",
      "item_sha256": "b733360eb957cb8e0bd00b918ab9cb8ef3c17c6aea1051f8b10ac7befeaedf6c",
      "at": "2026-10-21T16:13:52.423Z"
    },
    {
      "id": "lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates the supplied simplicial-approximation interface: it gives a homotopy of pairs, not one fixing the positive-dimensional boundary. Step 3.1 needs a boundary-fixed homotopy to invoke F6; that relative conclusion is not supplied by F4.",
      "context_sha256": "16e4821edfcff109820d00a6ce759198274c6ebcfaeedb8926e5a4ed2de91fd6",
      "item_sha256": "9c71c05370dbf54fb07ea36308cb54f651e8715127bf787d8bf08e3205e2ad18",
      "at": "2026-10-21T16:16:11.815Z"
    },
    {
      "id": "lem-figure-eight-character-and-longitude-traces",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.2's claimed pre-relator trace identity is false: at M=1,t=1, direct multiplication gives tr(C)=3, while its right side is 5. The proof uses this identity to establish the longitude trace.",
      "context_sha256": "6532cd8a664cf3247582081a78b0e6665b102c11d5afa4ec993e89b722b27de8",
      "item_sha256": "274ee13910aab9bbde67bb11d681a0122b9d42bea62c7b8122a6762c27d11fc5",
      "at": "2026-10-21T16:15:25.317Z"
    },
    {
      "id": "lem-irreducible-sl2-character-components-have-specializing-quadratic-models",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3's supplied interface does not assert that its B word has both off-diagonal entries nonzero (or q≠0); Facts F3 and step 1.2 claim it does, and the generic irreducibility and specialization certificates rely on that unsupported condition.",
      "context_sha256": "0ffd333fa6f070f190520e7aed836afeb1b99af27f2c078e82f464a10e7a3c0a",
      "item_sha256": "f317289dbf6317164fc3165afa3adfe1a9b288dc5eb05e46bedf508427f921df",
      "at": "2026-10-21T16:15:16.801Z"
    },
    {
      "id": "lem-knot-a-polynomial-boundary-elimination",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 overstates F4: it says the Zariski closure is Q-defined, not that the raw eigenvalue locus is automorphism-stable. That inference is unlicensed; the proof must instead justify rationality via the rational chart equations and F3.",
      "context_sha256": "0946c8250312217634b2d0673ea624921fb5a16617510b3d3fa602f46f79371d",
      "item_sha256": "f81bf5dec413c49d86452226d7e287297692b81219d63d59ae1a52f96cfd4656",
      "at": "2026-10-21T16:14:49.133Z"
    },
    {
      "id": "lem-adjoint-twisted-slope-is-rational-on-a-character-component",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 says admissibility gives a one-dimensional peripheral kernel, but the supplied slope interface only defines the slope conditional on such a kernel; it does not establish that admissibility implies it. Thus the rank-one hypothesis needed for F4, and the rationality argume",
      "context_sha256": "f591cd025324762a0529f642e9fb5928972832ddd2a9be26ffc4c270f3369196",
      "item_sha256": "9002f68d3af575f3cfd5ad3e2249dcd3b4c2fb682ab0f42f174bbcff3a408d62",
      "at": "2026-10-21T16:16:23.788Z"
    },
    {
      "id": "thm-ccgls-newton-edge-slope-is-boundary-slope",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 says F2 constructs a toric-chart DVR and selects a generic representation from an incidence fiber, neither in its interface. It also calls the model “finite-field,” though F2 gives a finite extension of C(Y), not a finite field.",
      "context_sha256": "45ccb626d83034946dddcdc4e77776e8bfc87baac5dc474a504e5edad8b15fc2",
      "item_sha256": "c4eb420da55db174ba47a181eb034a22d2586cc46dd0215e2c92685834bfc5e7",
      "at": "2026-10-21T16:15:40.435Z"
    },
    {
      "id": "thm-adjoint-logarithmic-gauss-slope-and-ideal-point",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 attributes a “Proof8.1” result to F3: treatment of a reducible-only component with peripheral curve L=1 and slope 0. The supplied F3 interface does not state that result, so this is an unsupported dependency restatement.",
      "context_sha256": "b2e0e4d1b8a91ee5eae67aff554c825c053dfc405870d8477db736fde364dbc8",
      "item_sha256": "2d92587f9eafe6052b394a6583d480d81bac59c348ddd47ecaf74ef8d0a55040",
      "at": "2026-10-21T16:16:29.557Z"
    },
    {
      "id": "ex-knot-kt-20-worked-cases",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 attributes matrix normal forms and the converse construction of representations from F=0 to lem-figure-eight-character-and-longitude-traces, but its supplied interface gives only the character curve and longitude trace. Thus step 2.2’s infinite realized-meridian family, needed",
      "context_sha256": "5f49b4cd0cbe3fb667045396ed543fc71806855f290786a53a6fe6836d582d9e",
      "item_sha256": "28a52fbcc68143e1f02cd827be3c078b8e09041ab2c14032e283e94e6fbda4ef",
      "at": "2026-10-21T16:19:42.850Z"
    },
    {
      "id": "thm-benard-florens-rodau-logarithmic-gauss-formula",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1's 2D-image contradiction is circular: it invokes [F3] for the rank-one peripheral kernel and differential annihilation, but that lemma assumes the peripheral eigenvalue image is already a curve. Thus it does not establish that Y is a component of the ordinary A-polynomia",
      "context_sha256": "3ce6301194d66d90e8e1dc05f4e62c87d5725c5384a59e7a6eced14513f58b13",
      "item_sha256": "cab58ac4020a8b9b066d8125874263dc87bfbe8b452eec6b8aa953a7f62213cd",
      "at": "2026-10-21T16:17:24.725Z"
    },
    {
      "id": "lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 5 applies [F2] to arbitrary eigenline-incidence components, but the supplied adjoint lemma covers only a 1-dimensional character component and its 1-dimensional peripheral image. It cannot rule out a 2-dimensional image, so the A-polynomial arc argument and rationality concl",
      "context_sha256": "43a5454492081b449fdac02e495aa78f4fcb18f3729255ee88996f44c1fc89e2",
      "item_sha256": "caa2d7e9e62b99713f0479de556c368152f71cfa2c3f6f6a1058a405f2b4ebe8",
      "at": "2026-10-21T16:20:44.972Z"
    },
    {
      "id": "thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 overstates its supplied dependency: the interface gives a unique rational accumulation slope, not full-set boundedness or a finite limit. Step 1.3 relies on boundedness to make transferred infinite slope sets accumulate at r(K), so that local converse chain is unlicensed.",
      "context_sha256": "f5f55a7645fe97bd06abbe1120e023ca90b61b9be568f2f69453b6c3b2d1015d",
      "item_sha256": "5920abc79a31a1221b2a1aea6db6c9e8e2d3a99bc70deee0b3cfdc898b1cbc77",
      "at": "2026-10-21T16:18:04.594Z"
    },
    {
      "id": "cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 needs the signed slope formula to infer pq=ab. The supplied Newton-polygon theorem only says thinness is equivalent to being a torus knot, and the torus-knot formula covers positive parameters; neither interface licenses the mirror/orientation transformations asserted in",
      "context_sha256": "1ed7b553ccaf2566a077b89c2d072328f640254d36c4f8c80e4a00a21d916c11",
      "item_sha256": "0cda0c93f70c40ab63ee681466ea39550da85e4b2e93e149d410d2f06dd124c9",
      "at": "2026-10-21T16:16:47.971Z"
    },
    {
      "id": "thm-baldwin-sivek-two-boundary-slope-alternative",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its dependency: the interface guarantees a strict-slope realizing surface, not a connected one. Step 2 needs a connected, nonfiber zero-slope surface; a component realizing zero could be a fiber while another component makes the full surface nonfiber.",
      "context_sha256": "4349f879587c7749f23192daa5f63952e823d80399b577cab836d3231070e356",
      "item_sha256": "c6e7e58f65b5ced24467c95983cc557fcb0344ea7e476fc58135ab1a434bc086",
      "at": "2026-10-21T16:16:55.465Z"
    }
  ]
