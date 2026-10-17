# Step 5 adjudicate: initial, round 1, unit 74

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-74-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u74.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"74",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-rosenbrock-euler-step-map, 1:lem-rosenbrock-stage-residual-certificate, 2:alg-rosenbrock-shifted-qr-solver-with-residual-certificate, 2:prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler, 3:alg-rosenbrock-euler-step, 3:alg-two-stage-rosenbrock-w-method, 4:thm-rosenbrock-computational-steps-terminate-with-finite-work, 4:cex-omitting-rosenbrock-stage-correction-loses-order-two, 4:ex-two-stage-rosenbrock-factorization-reuse, 5:thm-rosenbrock-euler-global-first-order-error.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rosenbrock-euler-step-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The exact-Jacobian branch is stated for any vector field f, but the ODE interface imposes no differentiability, and the Jacobian interface defines the Jacobian only when the relevant partial derivatives exist. Restrict the branch to points where they exist.",
      "context_sha256": "842a0ca6e32c63d96bbcd6227f48cb6a5a353df12e41cd4e295f3521132724f7",
      "item_sha256": "3e208a5c8b345de6cea732bef5baee99fc51250dddcb8cdd59e1a9feab5c473c",
      "at": "2026-10-17T01:48:48.718Z"
    },
    {
      "id": "lem-rosenbrock-stage-residual-certificate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 requires every product, rounded product, and intermediate sum to be normal. The statement's success model permits exact-zero operations, so step 1.1 applies F2 without its hypotheses (for example, a zero row of M).",
      "context_sha256": "0af37e7d2b143ba3db996fc9cc87c84f5290d4c6b1cc84cd8d3e17c3964801c8",
      "item_sha256": "c045dd696ae19a821f54d58de21b786e5b4ace2d513536c83d9ac12a2775531c",
      "at": "2026-10-17T01:49:00.035Z"
    },
    {
      "id": "alg-rosenbrock-shifted-qr-solver-with-residual-certificate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a solver for a shifted matrix, but the input is an arbitrary stored real square M with no shift relation. The procedure establishes only a reusable QR solve for arbitrary M, so the title overstates the item.",
      "context_sha256": "51a6518030639fb16d3ec69f106e3edaf55d66b68e95d7a970fe5c18a61b8e24",
      "item_sha256": "68ec8bb9fe6eed82e469f3d61cbe23142ceb80fd24fcb8013f800ee8607394ad",
      "at": "2026-10-17T01:49:07.256Z"
    },
    {
      "id": "prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits d≥1. The supplied Rosenbrock step and Newton-correction interfaces require positive dimension, so for d=0 the named step is undefined and the theorem is not well-typed.",
      "context_sha256": "c5956440885d04871195fd253482530d1c99f6457a972ab5dc3acef26e7af0a8",
      "item_sha256": "bdfe2d8147f9ca161108eeeda0c925262e85f29d7514c803e7b43ef38d2f20af",
      "at": "2026-10-17T01:49:02.236Z"
    },
    {
      "id": "alg-rosenbrock-euler-step",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied step-map definition calls this Rosenbrock–Euler only when γ=1, but the algorithm accepts every γ>0, so its title overclaims. It also omits the solver’s required d≥1 precondition.",
      "context_sha256": "fa0d01fe40122d755ea3a5e78814dc3cacb661d8d20840091ea5db1862225e41",
      "item_sha256": "03df4d744f70470c470b4389c14b8ed1ac6caffe9e2f2132c9c648d8aabf9a90",
      "at": "2026-10-17T01:49:02.536Z"
    },
    {
      "id": "alg-two-stage-rosenbrock-w-method",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The factor dependency requires a stored matrix of dimension d≥1, but the algorithm input never imposes d≥1. It therefore admits a zero-dimensional case and calls factor outside its interface.",
      "context_sha256": "c4e1c0b429c75d6aaed6c421e4b800d87d27365351cb79f861b2254cc400608f",
      "item_sha256": "c453db1c898e5bbdbae80ff12936495c69ed0484a1837bfa338a5f15fdfc4d0c",
      "at": "2026-10-17T01:49:20.586Z"
    },
    {
      "id": "thm-rosenbrock-computational-steps-terminate-with-finite-work",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The two-stage procedure must decide whether its computed stage point lies in arbitrary open D. No terminating domain-membership routine or oracle is assumed, so step 2.1’s claim that this is a finite test does not establish finite-work termination.",
      "context_sha256": "72ce49493d91f93755704fe40d0d22ebef357de00fc30d0c4389a7836d0f3e21",
      "item_sha256": "24b77b3102e28c68e2394a3e9339027feb2131b92ddcd02195b26b2c05e3dae8",
      "at": "2026-10-17T01:49:13.005Z"
    },
    {
      "id": "cex-omitting-rosenbrock-stage-correction-loses-order-two",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 only says any solution equals exp; it does not establish existence or exp(0)=1. Step 1.2 calls exp the exact IVP solution using only F3, so the exact-flow comparison is unsupported as written.",
      "context_sha256": "cf5ac5efab55f279c135b17864df64ae0853b8db6a493900e2689b26e1129959",
      "item_sha256": "63acb2c5bc37e6c77ddf7c4b6fb30d336133aed2617cd07593e3c4fbdc571d38",
      "at": "2026-10-17T01:49:13.936Z"
    },
    {
      "id": "ex-two-stage-rosenbrock-factorization-reuse",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the evaluator is stipulated to return norm bound 5 for each displayed vector norm, including ||r_hat||. The residual certificate is ||r_hat||+E; even with E≤0.31 its expression is at least 5, so a sound evaluator cannot bound it by 1/2 or certify tolerance 1.",
      "context_sha256": "fe9b713ba9930d751ba7c43c5f17763ef66d6d6d525624bfc11f26b59596c35d",
      "item_sha256": "c5b838f51b543ddcd17a0b5f935858c9ea460dc2c7c72bd3d7992c22c191761a",
      "at": "2026-10-17T01:49:54.861Z"
    },
    {
      "id": "thm-rosenbrock-euler-global-first-order-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement does not restrict d≥1, but steps 1.2 and 2.1 invoke F7 and F3, each stated only for d≥1. The proof applies dependencies outside their hypotheses; add d≥1 or handle d=0 separately.",
      "context_sha256": "577f59428cd0951b065e709c4d6671d84b4de40c5706e98fbc211d73227ec087",
      "item_sha256": "e85e558c8feec0b5b32b685d5c14b0bcf8dbc51fbda8063f573f094749675303",
      "at": "2026-10-17T01:49:38.094Z"
    }
  ]
