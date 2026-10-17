# Step 5 adjudicate: initial, round 1, unit 10

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-10-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"10",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-reaction-network-propensity-system-and-generator, 1:alg-dominating-thinning-for-time-varying-reaction-rates, 1:alg-gillespie-direct-method-for-reaction-networks, 1:alg-next-reaction-random-time-change-method, 1:thm-countable-state-reaction-networks-lyapunov-nonexplosion, 2:alg-minimum-intensity-coupling-for-reaction-networks, 3:thm-finite-state-gillespie-and-next-reaction-exactness, 3:thm-minimum-intensity-coupling-preserves-exact-marginals, 4:ex-finite-state-birth-death-reaction-simulation, 4:ex-two-chain-minimum-intensity-birth-death-coupling, 4:ex-zero-total-hazard-state-is-absorbing.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-reaction-network-propensity-system-and-generator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Allowed rates can explode: E=ℕ, d=R=1, ν=1, a(n)=(n+1)² meets the conditions, but the pure-birth chain makes infinitely many jumps in finite time. No post-explosion convention is given, so the asserted global process is unspecified.",
      "context_sha256": "d62e1ce2bda76fc8b35d29ad3f43c69f199841e4b14f83d0989b52ff6eb1dc34",
      "item_sha256": "09159ca69f1b983eb7dadc313b75f4ef93ab197208cda36d8d550ce9bb68c06c",
      "at": "2026-10-16T17:48:16.255Z"
    },
    {
      "id": "alg-dominating-thinning-for-time-varying-reaction-rates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited Lebesgue definition supplies only a restricted set function, not a probability measure; the required complete-measure theorem is absent from deps. So the claimed normalized unit-interval Lebesgue law is not licensed by the supplied interface.",
      "context_sha256": "bebc8399e43ca8959749313530cc0679877dbc41a3ec623a0866beed8374e863",
      "item_sha256": "b66e0bff6d8648c5e7e14513188026af78f27b7fd6b5b3b38e60599831ffa4c6",
      "at": "2026-10-16T17:47:52.285Z"
    },
    {
      "id": "alg-gillespie-direct-method-for-reaction-networks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claimed uniform probability law is unsupported: the Lebesgue definition leaves λ as only a restricted set function, and the box theorem gives only box measures. The needed thm-lebesgue-measure-is-a-complete-measure is absent, so the countable product source construction is no",
      "context_sha256": "9efcad73e2954fb94bb0bbfc7874eee0db883e76db9607cd8375059fa6f02062",
      "item_sha256": "269b26b6b56cd49728b9f086cfef8f153e689c3d8b768b2728de5866889777ea",
      "at": "2026-10-16T17:48:08.038Z"
    },
    {
      "id": "alg-next-reaction-random-time-change-method",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: if the next firing is at T, step 3 returns before recording it, but Y_j(u)=#{k:S_{j,k}≤u} counts that threshold at A_j(T)=S_{j,k}; the claimed pathwise random-time-change identity fails. No correctness theorem is included.",
      "context_sha256": "4649229f00949931bfa7bc3b2606d515153929fcc7fdd617a1ea5cef002ca936",
      "item_sha256": "6d4b1d3832bd8b0a714612fda7021c503d801e185066a7c26d6b6c227c8c7f78",
      "at": "2026-10-16T17:47:45.457Z"
    },
    {
      "id": "thm-countable-state-reaction-networks-lyapunov-nonexplosion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3's uniform input space is unsupported: the cited Lebesgue definition defers σ-algebra and measure status to `thm-lebesgue-measure-is-a-complete-measure`, absent from deps; the box theorem gives box measurability and volume only, not a probability space.",
      "context_sha256": "c0d7e71dbe218a5002401491e345a4e0e92db5c159cb4fdfad3c94efe5e1730f",
      "item_sha256": "d534fe940ab7fe426a73d6fba74d3552ed8d635561c4250ebe1a3123c5977251",
      "at": "2026-10-16T17:48:36.156Z"
    },
    {
      "id": "alg-minimum-intensity-coupling-for-reaction-networks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With the default B=∞, the loop has no proved termination result. For example, if the supplied positive E_n have finite sum below MT, candidate times never reach T and the procedure never returns. The required termination result is absent.",
      "context_sha256": "4c2020a72fffc45513db561d4239e57a94174ca6d48ac9b8e3123900d4082acd",
      "item_sha256": "035797deb3c867066dce26c26a0a9694ccb056f8f011d6e7257ce5009bf451b6",
      "at": "2026-10-16T17:48:46.699Z"
    },
    {
      "id": "thm-finite-state-gillespie-and-next-reaction-exactness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement never fixes or quantifies an initial state x₀, though both algorithm interfaces require x₀∈E. Finite E may be empty, leaving no such state and making Λ=max_{x∈E}λ(x) undefined; the claimed process and conclusion are not defined for all allowed inputs.",
      "context_sha256": "dd22d0666e4e190d01d0eb49f0368095a23bcf4f31642a98573aa8085dc26e2d",
      "item_sha256": "520bb05915cd59bfaa69adf2f8b69418c3d1145d640af3951f5d1311ba7e5499",
      "at": "2026-10-16T17:48:37.970Z"
    },
    {
      "id": "thm-minimum-intensity-coupling-preserves-exact-marginals",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misstates its dependency: Countable Choice selects from nonempty sets; it does not supply exponential or uniform probability laws. The algorithm attributes those laws to separate exponential-survival and Lebesgue-measure dependencies.",
      "context_sha256": "096f1152dc918340c4ba9fa1d65772293c1a49accefda26132cce4bcca35521a",
      "item_sha256": "915322fb4c8fff410a5db1d78ea74b381c8eecdeec9e6d37c07bd9a3e2962884",
      "at": "2026-10-16T17:47:44.534Z"
    },
    {
      "id": "ex-finite-state-birth-death-reaction-simulation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited finite-state theorem requires Countable Choice and Dependent Choice, but the item neither states these assumptions nor includes them in F2. Thus the cited theorem does not license the path-law and reaction-count claims as written.",
      "context_sha256": "a943866f679f4a590f11e5ecec01f706eb8ca027a9a5e6894c84a2841133eb19",
      "item_sha256": "3219b36aa580f162f5d9b5e057417734425831b845c58d38dcd4d64a6b4cf55c",
      "at": "2026-10-16T17:47:48.617Z"
    },
    {
      "id": "ex-two-chain-minimum-intensity-birth-death-coupling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 and F4 omit the cited theorems’ required Countable Choice and Dependent Choice assumptions. Without them, the supplied interfaces do not license the exact-marginal or first-event claims.",
      "context_sha256": "b4cabf7a9023947c0cc4deaac4712d812cad4cd196ddb52eb6f6526b12a6327b",
      "item_sha256": "d397cad7797cf5b933db1a74c3159119764770dcf39b900a2c845d83ea365eb6",
      "at": "2026-10-16T17:48:05.566Z"
    },
    {
      "id": "ex-zero-total-hazard-state-is-absorbing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For finite horizon T, if W≥T (probability e^{-T}), the algorithm returns status horizon before processing the event. Step 2's unqualified claim that the direct implementation returns absorbed is false; F3 applies only if zero rate is reached while the loop is running.",
      "context_sha256": "2bdf3cda8e941d2c110d47a83d33e308a0f320f446a3ff392763ba75cf72549e",
      "item_sha256": "aa536e8b4f002dfdca81a7b888b0de23c1784e4bfab287ae46e9665160415be1",
      "at": "2026-10-16T17:48:04.069Z"
    }
  ]
