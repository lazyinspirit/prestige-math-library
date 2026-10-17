# Step 5 adjudicate: initial, round 1, unit 68

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-68-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u68.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"68",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:alg-exact-jordan-block-analytic-evaluation, 3:thm-frechet-exponential-integral-and-block-function-identity, 3:thm-principal-matrix-logarithm-and-square-root-exist, 4:alg-pade-denominator-solve-by-householder-qr, 5:rem-matrix-function-condition-estimates-are-not-certified-bounds, 7:alg-pade-scaling-and-squaring-exponential, 7:alg-schur-parlett-matrix-function, 7:thm-newton-matrix-sign-convergence-and-quadratic-rate, 7:thm-newton-polar-factor-quadratic-convergence, 8:thm-schur-parlett-recurrence-correctness, 9:thm-matrix-function-finite-algorithms-termination-and-budget-status.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-exact-jordan-block-analytic-evaluation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The algorithm returns status `exact`, but has no separate correctness result establishing that a successful run returns f(A). Procedure instructions alone do not establish correctness under the algorithm convention.",
      "context_sha256": "dfd0df544a58d963d16fd7f5a56b94c1a8f50c17d056a53879c59d7953d0bae4",
      "item_sha256": "2cb7e3fb509aa517d0502a2c60c8a4a1caba5231b2f6265c847648f72ba755cc",
      "at": "2026-10-17T01:46:46.226Z"
    },
    {
      "id": "thm-frechet-exponential-integral-and-block-function-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits n≥1. With the library’s 0-inclusive naturals, n=0 is allowed, but the cited primary-function contour theorem requires n≥1, so it does not license the claim in that case.",
      "context_sha256": "787337fd5bc4d93561e9ee97ca8a607f9f2b830bb47723b318a8980a32e1af4b",
      "item_sha256": "d960d78c83146a928da1f26d1ef9473cac7ab94e3ac18e2d5f6f3040823cff3d",
      "at": "2026-10-17T01:47:03.478Z"
    },
    {
      "id": "thm-principal-matrix-logarithm-and-square-root-exist",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 expands the inner function as λ+…, but on a λ-Jordan block its constant term is g(λ), generally not λ (for example, g=Log). The stated jet substitution therefore does not establish the composition identities used later.",
      "context_sha256": "74967a4d1a2673d366f5e3c6b675b65b0ef4da7f4f26d64f8fff96f8e2769a6c",
      "item_sha256": "865686d0ee6c61554afa2d57945f6a412c5fa33834df109e73aa620937607c9b",
      "at": "2026-10-17T01:46:59.403Z"
    },
    {
      "id": "alg-pade-denominator-solve-by-householder-qr",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a Padé-denominator solve, but the algorithm accepts arbitrary M and C and gives no Padé-system construction or hypothesis linking the solution to denominator coefficients. It specifies only a generic square-system candidate solve.",
      "context_sha256": "9bb9abc0582d5d3ce5644d5f340466c6fd510e19f08faec2ccd7d25a61712458",
      "item_sha256": "274a5c9aa87e2d46b1fbc8e0fc1f1b01fbe8fb0f83c7a09f0b64368ece3366b1",
      "at": "2026-10-17T01:47:38.702Z"
    },
    {
      "id": "rem-matrix-function-condition-estimates-are-not-certified-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The closing sentence claims how “the finite procedure” handles unavailable certificates or solves, but no such procedure is defined or supplied by the sole dependency; the contour-bound theorem licenses no return-status behavior.",
      "context_sha256": "9858589f7618595004354a248e3fb9e0eeebabd0b545442328657e00f5224fdf",
      "item_sha256": "ac85c4db137950e9b7d7670fd7028419b4b35609ab404ea559d7a71944721808",
      "at": "2026-10-17T01:46:46.846Z"
    },
    {
      "id": "alg-pade-scaling-and-squaring-exponential",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The input never requires n≥1, but step 2 calls the Householder solver, whose interface requires n,r≥1. Since 0 is natural, the 0×0 case is admitted; that call and step 3’s maximum over rows are undefined.",
      "context_sha256": "58f689b9e83067c5c475d8bcc9995b72bd9112ea01e788a1beb96b963e4a3700",
      "item_sha256": "42a5469c07738c6a24d4d97dde420491f6bb1cb611da4d1583c4a9c1cea2ec01",
      "at": "2026-10-17T01:47:32.855Z"
    },
    {
      "id": "alg-schur-parlett-matrix-function",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 3–4 assign only diagonal and upper blocks of F; nothing sets the lower blocks to zero or defines F as block upper triangular. Step 5 therefore returns an incompletely specified matrix.",
      "context_sha256": "7acb552507c2ec261f96541d67ac2a8772cc0618bbb21ac8ad6322abf0f6524a",
      "item_sha256": "c741cade6b500872aec9a2e5f7b45488c9216cffd4d40ed097d873fdd4551356",
      "at": "2026-10-17T01:47:16.952Z"
    },
    {
      "id": "thm-newton-matrix-sign-convergence-and-quadratic-rate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 misstates its cited dependency: alg-newton-matrix-sign-iteration specifies a finite-budget floating-point procedure using a verified solve and rounded updates; it does not establish the exact inverse update used in this proof.",
      "context_sha256": "c9905e481af600b1cfd52355b457a2d8e804e48108d866fb0afeba65eb75f14a",
      "item_sha256": "5a703745ee4b84d9d8e478d89ba35c93023f96430a92d0d87c0e40d4476ad36f",
      "at": "2026-10-17T01:47:17.181Z"
    },
    {
      "id": "thm-newton-polar-factor-quadratic-convergence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F3] misstates the cited algorithm: it specifies a finite-budget floating-point procedure with solver calls and rounding, and expressly leaves the exact Newton sequence to separate analysis. It does not supply the exact recurrence claimed there.",
      "context_sha256": "9cb9af8feefa5c7090e79f07c09a6aab3b188d17ce426c951577730f3aa59629",
      "item_sha256": "b512290bf46e80383b16077507335f740e6e026842c868c48fd3ece06ef727c9",
      "at": "2026-10-17T01:46:52.106Z"
    },
    {
      "id": "thm-schur-parlett-recurrence-correctness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof establishes only F’s diagonal and upper off-diagonal blocks. The supplied algorithm interface never says its lower blocks are zero, and [F1] does not supply that property; step 3’s claim F=f(T) therefore does not follow.",
      "context_sha256": "a80dfcdfa902f1ed7576fc5942f05e2f00bd11525f8bef6867b7817f5cfee85c",
      "item_sha256": "55e8b1aa3c4b9377487485ddc707b4857525418a55913d951be1b6ba50ab7cc0",
      "at": "2026-10-17T01:47:04.213Z"
    },
    {
      "id": "thm-matrix-function-finite-algorithms-termination-and-budget-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof claims each Padé square checks the squaring budget before every primitive, but the supplied procedure’s step 3 only says to compute the square and return on range failure. A budget input alone does not establish that enforcement, so the stated budget guarantee is unsupp",
      "context_sha256": "1b7546ca017c7af56a83ab69a8d26e135097629d4a6cd527cf0f2e5a470aabbb",
      "item_sha256": "79bdf63e2cc89e7e2a81378ed8ea58ee570528e34e9d5fb138a1fc5e31088a48",
      "at": "2026-10-17T01:47:12.710Z"
    }
  ]
