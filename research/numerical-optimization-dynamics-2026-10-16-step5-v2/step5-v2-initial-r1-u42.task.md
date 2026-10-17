# Step 5 adjudicate: initial, round 1, unit 42

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-42-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u42.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"42",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-characteristic-roots-stay-in-separated-neighborhoods, 0:thm-hyperbolic-local-map-stability, 1:lem-hopf-weighted-trajectory-space-is-banach, 3:lem-hopf-first-lyapunov-coefficient-from-multilinear-data, 3:thm-scalar-fold-transcritical-pitchfork-local-normal-forms, 4:thm-hopf-local-branch-and-stability, 5:thm-local-hopf-certificate-is-sound, 5:ex-supercritical-hopf-cubic-normal-form.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-characteristic-roots-stay-in-separated-neighborhoods",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Statement allows d=0, but the proof uses a root bound with max_{k<d} and invokes the positive-degree root theorem to list d roots. The supplied interface defines χ_A=1 in dimension zero; handle that case separately or require d≥1.",
      "context_sha256": "f62b6c44a4a94f03098e307bcdc4472959e651dacff85c156941c7f52f0e3205",
      "item_sha256": "8946682e336d41ab9251cd804022fad3b8305984c6ac9b468d2fbb766b77a385",
      "at": "2026-10-16T18:03:17.849Z"
    },
    {
      "id": "thm-hyperbolic-local-map-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 supplies a Lipschitz bound only for Euclidean norms, but step 2.1 applies it to the Jordan-adapted norm. The resulting contraction is not licensed, so local asymptotic stability is unproved.",
      "context_sha256": "11d3958809898f1f55a0f81a680fc491e69ed767b7f9ed5d304cde662469da25",
      "item_sha256": "6df026e0a900c7680ab9cbec09453db278e5d3647e3bbcd51d22e56e6903a180",
      "at": "2026-10-16T18:03:40.869Z"
    },
    {
      "id": "lem-hopf-weighted-trajectory-space-is-banach",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 misstates thm-euclidean-space-complete as covering any finite-dimensional Euclidean space; its supplied interface proves completeness only for ℝ and ℝⁿ with n≥1. The hypothesis already gives completeness of E, but the dependency restatement is inaccurate.",
      "context_sha256": "6e831a311c347fc920a00132181363ffbaacd4481c2b109abd49c72920ae02ff",
      "item_sha256": "b8f1fc691f39db19af46f68ea73e6215393a8533b48ffb2e1592903b7fd199ca",
      "at": "2026-10-16T18:03:11.448Z"
    },
    {
      "id": "lem-hopf-first-lyapunov-coefficient-from-multilinear-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title equates ℓ₁ with the resonant cubic coefficient, but the Statement gives ℓ₁=Re(G₂₁)/(2ω₀), while the complex resonant coefficient is G₂₁/2. The item therefore overclaims in its title.",
      "context_sha256": "8c9829846733d24db5545059e13b6b30818193726e494cd5a88be01a93af4714",
      "item_sha256": "aeec109feaca53f6699e40e492322bd49b7e0a1fa6fbcc0aee108fe74a5b050b",
      "at": "2026-10-16T18:04:01.336Z"
    },
    {
      "id": "thm-scalar-fold-transcritical-pitchfork-local-normal-forms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 is misstated as guaranteeing a C5 branch from a nonzero derivative alone. The proof only establishes G is C4, so that restatement does not license the IFT applications; the supplied interface’s k=4 version would repair them.",
      "context_sha256": "9464e4cb8b098f67d58551c97268f754a5e24f38f34effb91d5c76442f1ce2df",
      "item_sha256": "c7bda7d27935de84e460aacd36fae4bc4d5fd684bf8b8eba419bcbcec871c9bf",
      "at": "2026-10-16T18:03:54.923Z"
    },
    {
      "id": "thm-hopf-local-branch-and-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4’s interface gives normal-form remainder and state-derivative bounds, but not a C²-in-β coordinate change or a jointly C¹ radial field. Step 2.1 relies on that extra regularity for [F6] and for the parameterized IFT in step 3.1; this key regularity is unproved.",
      "context_sha256": "8d79d7897c5bf301570cbc83dd11a732290113e6a5ee5cb1263911ef53965c98",
      "item_sha256": "36e93a0a85b2bb8d05fab45238029c9a99b04ebf4fd6048fce82d269153218a9",
      "at": "2026-10-16T18:04:12.645Z"
    },
    {
      "id": "thm-local-hopf-certificate-is-sound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 infers every noncritical eigenvalue is off the imaginary axis from multiplicity-cover evidence. That evidence enumerates roots; the cited facts never require their enclosures to be strictly off-axis, so a hypothesis of F3 remains unproved.",
      "context_sha256": "6ffb51ae98470901800e2360ad77b6cfc58b23fdbb3935c464922a3042dca1fb",
      "item_sha256": "bdec18cd37b54ece0b84112d871bfc0907f9ae4ad4adecbcac7efbe3721321c9",
      "at": "2026-10-16T18:04:15.231Z"
    },
    {
      "id": "ex-supercritical-hopf-cubic-normal-form",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates the branch theorem: β'(0)≠0 and ℓ₁≠0 alone do not suffice; it also requires a simple imaginary pair, no other imaginary-axis spectrum, and the stated local equilibrium and eigenvalue branches. This is an inaccurate dependency restatement.",
      "context_sha256": "c5b03505bad4af5edfce22a9db08a79977ea454f988435bb6bedffc18263cd35",
      "item_sha256": "1b7567b25935c35b34b3816281b1a901933d32cdf737b573bef911cd97a960d3",
      "at": "2026-10-16T18:03:57.573Z"
    }
  ]
