# Step 5 adjudicate: initial, round 1, unit 27

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-27-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u27.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"27",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-boys-function-and-coulomb-auxiliary-recurrence, 0:def-cartesian-gaussian-primitives-and-contractions, 1:lem-cartesian-gaussian-moments-and-parameter-derivatives, 1:thm-boys-integral-identities-series-and-incomplete-gamma, 2:lem-boys-upward-downward-recurrence-error-amplification, 2:thm-cartesian-gaussian-integrals-absolutely-convergent, 3:thm-positive-coulomb-bilinear-cauchy-schwarz-screening, 6:alg-certified-boys-finite-budget-branch-evaluation, 8:alg-finite-gaussian-basis-integral-recurrence-evaluation, 10:ex-screened-coulomb-blocks-accumulate-error.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-boys-function-and-coulomb-auxiliary-recurrence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It says “the finite evaluator below” accepts no negative argument, but this item defines no evaluator. The claimed input restriction is attached to an absent object; remove the reference or include the evaluator.",
      "context_sha256": "f5aec44b67305ac66e3f27d06fec1ede8d328085f8fc753f177a8071e9b31a59",
      "item_sha256": "c9250158ced18a01525f8eb064af71e0bccc7b8cce0575f2c428b4de0773e5e1",
      "at": "2026-10-18T03:18:07.864Z"
    },
    {
      "id": "def-cartesian-gaussian-primitives-and-contractions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Expanding G gives an integrand containing φ(x)\\overline{ψ(x)}\\overline{ρ(y)}σ(y)/|x−y|. This conjugates ψ rather than φ in the first orbital pair, contradicting “Bras are conjugated” and the S, T, and V_C conventions.",
      "context_sha256": "8241398e4247f06ac19db6d921c2fccbdeb8396d9f47f574ce30fc99d2d6f7dd",
      "item_sha256": "f20099dc97604969f3123b8f408aa4c7e3620381ae7d2200cebeb350b6e6af4f",
      "at": "2026-10-18T03:18:01.524Z"
    },
    {
      "id": "lem-cartesian-gaussian-moments-and-parameter-derivatives",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F7 overstates the supplied substitution theorem: monotone differentiability alone does not license substitution; the interface also requires locally Riemann-integrable φ′ and proper change-of-variable hypotheses on compact truncations.",
      "context_sha256": "733b95b04d4c28d067ca7affa6e7944bc5b9583df63136cc5a33c399e76cdf06",
      "item_sha256": "0031f0ede192609a4f11ae839a805744c0a729ba8c07d095893d395fa2a84b19",
      "at": "2026-10-18T03:18:01.080Z"
    },
    {
      "id": "thm-boys-integral-identities-series-and-incomplete-gamma",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 is restated as if monotonicity and differentiability alone suffice for improper substitution. The supplied theorem also requires local integrability and proper change-of-variable hypotheses; the restatement is overbroad.",
      "context_sha256": "7b21a381874f283d2cf285d759dfc9d2d058df80127b39b2c3eb60db2f8f3749",
      "item_sha256": "e1d1edf9aca1f89d23413b5ee62cf7548c95b6c7c01ed7e486d5f2a1881c63b9",
      "at": "2026-10-18T03:17:58.762Z"
    },
    {
      "id": "lem-boys-upward-downward-recurrence-error-amplification",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 is overstated: on overflow it can return a finite endpoint (Nmax or −Nmax), but the error bound is +∞. It does not provide the finite rounding-error bound claimed in the restatement.",
      "context_sha256": "d40a92122ad0c32e2d1d137099cccb106067e4199d7ffb516f786625c27c651a",
      "item_sha256": "bc0ea2042c2b6a3545b0e43c03ec19c8dde7fb624fc2250c5892e74355cc0bad",
      "at": "2026-10-18T03:17:58.009Z"
    },
    {
      "id": "thm-cartesian-gaussian-integrals-absolutely-convergent",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 claims a uniform Gaussian envelope for center or spatial derivatives when exponents are only bounded below. For ∂_A e^{-a|x-A|²}, values near |x−A|=a^{-1/2} grow like √a, so no such uniform envelope exists as a→∞.",
      "context_sha256": "441f233db245f84ebb77dbc34ed11b710b32f25ff1472c4590ea88f87a37dc92",
      "item_sha256": "29f7cf90d0f08b5eab0881407b6a43c0703bbf36176d6f8cacb540b933f93974",
      "at": "2026-10-18T03:18:17.351Z"
    },
    {
      "id": "thm-positive-coulomb-bilinear-cauchy-schwarz-screening",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The screening claim never identifies energy tensor entries G_abcd with Coulomb integrals of the stated Gaussian basis. The dependency permits arbitrary G: set G_1111=G_2222=0 and G_1122=100, with W_11=W_22=1. Omitting (1,1,2,2) gives B_S=0 but contribution 50.",
      "context_sha256": "510ea064b373430059af6096577c657ab66ce9f823f82db832e1b31eea98721b",
      "item_sha256": "afc7f3774e44653f882f11ba63cf854c6cdb1134bc91a3c26e5a2d7db11768ba",
      "at": "2026-10-18T03:18:13.785Z"
    },
    {
      "id": "alg-certified-boys-finite-budget-branch-evaluation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The input only requires ε_a>0, but the large-argument branch passes ε_a/2^(k+2) to alg-certified-gamma-loggamma-evaluation, whose interface requires an exact rational tolerance. Valid non-rational tolerances therefore cannot be passed as specified.",
      "context_sha256": "726d8beb3a4f4c302bf82909945830277b3dd84a514eef16336bfdd25c00c05c",
      "item_sha256": "af9ef3b5e03e6f7e5d3ab8e541534de5c06ee816a03b21b3cd1243293aee622e",
      "at": "2026-10-18T03:18:22.992Z"
    },
    {
      "id": "alg-finite-gaussian-basis-integral-recurrence-evaluation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition promises that every success encloses the full input-box range, but provides no separate correctness theorem proving the combined recurrence, screening, and energy/gradient enclosures; the procedure itself is not a phase proof.",
      "context_sha256": "48607e4d4c7f26f50797e88fbba566562881df90390198f1dcde463471f6ae11",
      "item_sha256": "bcace5da278b879d0910045ae10a8f128baf257f9ae9c6cf9ebc72b4bfe49f1e",
      "at": "2026-10-18T03:19:15.751Z"
    },
    {
      "id": "ex-screened-coulomb-blocks-accumulate-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 says a block is skipped only if adding its bound stays within τ; it does not say every eligible block is skipped. Step 1.1 therefore cannot establish that the first two are skipped or that the reported bound is 0.8τ.",
      "context_sha256": "b44c51e0e310ee69d9d9cea5929b4e6d94a127f75799178c5639ab9e909e19f5",
      "item_sha256": "54047c5bd463adcae951ef4cc4d2e8d4f4682724991fe41e8bb2ea5ff49fe8ed",
      "at": "2026-10-18T03:19:00.689Z"
    }
  ]
