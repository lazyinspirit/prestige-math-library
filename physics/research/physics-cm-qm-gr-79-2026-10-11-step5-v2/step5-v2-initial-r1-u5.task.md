# Step 5 adjudicate: initial, round 1, unit 5

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-5-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"5",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cm-one-dimensional-action-variable, 0:def-cm-scattering-data, 0:lem-cm-cross-product-triple-identity, 0:lem-cm-planar-polar-lift, 0:lem-cm-second-order-oscillator-form, 1:lem-cm-oriented-orthonormal-triads, 1:thm-cm-differential-cross-section-density, 2:ex-cm-harmonic-oscillator-action-derivative, 3:thm-cm-coulomb-scattering, 3:thm-cm-scattering-turning-point-and-global-branches, 4:thm-cm-rutherford-cross-section, 5:thm-cm-kepler-ellipse-geometry, 7:ex-cm-kepler-ellipse-data-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-one-dimensional-action-variable",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition cites thm-of-square-roots for continuity of the square-root map, but its supplied interface establishes only existence and uniqueness of nonnegative roots. The stated well-definedness argument for continuity of the integrand is unsupported.",
      "context_sha256": "43e1483ef51f81f284a0d47c680edd89e39f1e640bf3e9bda1a8c8c22178e2c7",
      "item_sha256": "56208c3f039588a0995f46c7f3fe5bb31238e1db401efdc634649d50ef82a160",
      "at": "2026-10-12T19:21:35.125Z"
    },
    {
      "id": "def-cm-scattering-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Ω is asserted to be a measure via an integral defined only for nonnegative measurable integrands, but the cited sine item only defines its power series; no supplied dependency or inline argument establishes sin θ≥0 and Borel measurability on (0,π).",
      "context_sha256": "26bd3638c92a5382a67b08146f544d55c43bc1f87a0473b33130d61857de9f91",
      "item_sha256": "76edad1ef10f8bc409df35618ec8bf436d65b4641e9ac2af09c6fe0cd970e977",
      "at": "2026-10-12T19:21:25.676Z"
    },
    {
      "id": "lem-cm-cross-product-triple-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L2] misstates the supplied inner-product definition: in R^3 its coordinates are indexed 0,1,2 and the sum is over k<3, not k=1,…,3. The proof’s coordinate expansions therefore do not follow from the cited dependency.",
      "context_sha256": "36f112d91f747faa2920f6828c22471276bdc53c4499ece0dc3d2751a586126b",
      "item_sha256": "0641bb81a7e27975ec6c5a00414e0a5b101cad6f8e1378dcfaaa0eb64a649a20",
      "at": "2026-10-12T19:20:58.930Z"
    },
    {
      "id": "lem-cm-planar-polar-lift",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The hypothesis cites def-ck, which defines C^k maps only on open domains. I may be closed or half-open, and the item supplies no extension or interval-relative C² definition to type ρ and σ there.",
      "context_sha256": "c68176af1939ecd28eaacfdf0117b3f43556ccd279c7904f43e51b33d6f09ee8",
      "item_sha256": "df4c6ed48cb8695535762529b203efac08621e48327607303f7e92c792f287da",
      "at": "2026-10-12T19:21:44.891Z"
    },
    {
      "id": "lem-cm-second-order-oscillator-form",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For a permitted non-open interval such as [0,1], the cited C^k definition does not define “twice differentiable” for v:I→R: it defines C^k maps only on open domains. The main hypothesis is ill-typed under its supplied dependency.",
      "context_sha256": "2d6bec037f3302d65e22da5dad9bea31c68ff7f4ebfe403576499173a26ea0a1",
      "item_sha256": "d65460567a774a577f752fe44f0a07458e2386bbc1b812f4a4e8a0d55e415428",
      "at": "2026-10-12T19:21:02.970Z"
    },
    {
      "id": "lem-cm-oriented-orthonormal-triads",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 overstates the cited coordinate expansion: it claims every x∈R^n is a sum of exactly three standard-basis terms. The interface gives n terms, indexed 0,…,n−1; as written, this restatement is false unless n=3.",
      "context_sha256": "6118d4c09df1a1df5f1604ba5376744ef7710f1648a9c9b20cde1e43ace4f8b3",
      "item_sha256": "8a15d08249bf3c3c2dde533cab62d884f77b0e7d8a0be1177118ad22767f1480",
      "at": "2026-10-12T19:21:17.934Z"
    },
    {
      "id": "thm-cm-differential-cross-section-density",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L5 is not licensed by the supplied sine theorem interface, which states monotonicity intervals and ranges but not sinθ>0 on (0,π). Step 5.1 lacks the positivity needed to divide by sinθ and identify the solid-angle density.",
      "context_sha256": "c1892b8f4f92c576007fc77ead7ad1e5aab81be4f395a6557efcc816a5142c8a",
      "item_sha256": "a7796004ae5e1fa541ab26d3f6aa1b7521b598d440839cafab3f1bc7a206f68d",
      "at": "2026-10-12T19:22:03.700Z"
    },
    {
      "id": "ex-cm-harmonic-oscillator-action-derivative",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 invokes [[thm-cm-action-variable-derivative]] on (0,∞), but its interface requires finite real endpoints E₀<E₁; ∞ is not real. Restrict the data to finite energy intervals before applying the theorem.",
      "context_sha256": "c612e2af8f1ffce388974cb1e24f77745fcb38411e3b04d77a5ed0f2388e5059",
      "item_sha256": "6c7af9ae9a214e3b66c856804bae401094607ac0a20d663ba4e7e04080c94392",
      "at": "2026-10-12T19:22:26.566Z"
    },
    {
      "id": "thm-cm-coulomb-scattering",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L2] overstates thm-derivative-of-an-inverse: continuity and strict monotonicity alone do not imply a differentiable inverse. For f(x)=x^3, the inverse ∛x is not differentiable at 0; the cited result requires f differentiable with f'(c)≠0.",
      "context_sha256": "598e1a5bdf855fdd7a231f44830b0bf1350844eee50738b324b9f14abf83cd06",
      "item_sha256": "0539e77453e0b8b67b0bfff3080d7c050699ad72b5ff803c8f69423f2abb0052",
      "at": "2026-10-12T19:22:11.231Z"
    },
    {
      "id": "thm-cm-scattering-turning-point-and-global-branches",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [L4] says the free speed √(2E/μ) bounds ρ′ without restricting to the free tail. Inside the interaction range U may be negative, making E−V>E and |ρ′| exceed that speed; the stated bound is false.",
      "context_sha256": "89d95fc127f1697a15a62240e5c85ad4910b8e62c38ab6bb0228acfa4a1958f4",
      "item_sha256": "7d8db1ebe1b0694270f46e59c541f07e2018b67382a7e843fb4a90b2e1a344a4",
      "at": "2026-10-12T19:22:04.874Z"
    },
    {
      "id": "thm-cm-rutherford-cross-section",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Facts & Assumptions lists the “asserted inverse b(θ)” as given, although clause 1 must establish it; step 1.1 then uses b(θ)=(κ/2E)cot(θ/2) to verify θ_def(b(θ))=θ. The inverse claim is assumed, so it is not proved.",
      "context_sha256": "e9dca09b993d8f73152cfa7d31563ebd3d92c72452dd1e2f8c764f7c25efd94a",
      "item_sha256": "b6c0877c25791d3c2607121bbf0e1ca259ee8620c3cb31de14f19e8e99a56585",
      "at": "2026-10-12T19:22:54.132Z"
    },
    {
      "id": "thm-cm-kepler-ellipse-geometry",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "This mathematics item lists thm-cm-kepler-conic-and-eccentricity, a Classical Mechanics result about central-force trajectories, as a prerequisite. Mathematical items cannot depend on physics items, even when that prerequisite is unused in the proof.",
      "context_sha256": "aa1c954b2c64f3ae708e14a2e10a5c4bf8d09718c0c6bb5f870b6718739db9c3",
      "item_sha256": "d42e44603ff48c0e2e962bb1f08715f321667c13c75f2e7dcdce7f4a0c8cacda",
      "at": "2026-10-12T19:21:35.300Z"
    },
    {
      "id": "ex-cm-kepler-ellipse-data-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The opening claim that ACω is required by all three cited suppliers misstates the conic theorem interface, which has no ACω hypothesis. This local dependency restatement is inaccurate.",
      "context_sha256": "012f54b4288ef0bdd75eb1b9023758b6478a0a8833b315f798c85c85b348ac76",
      "item_sha256": "12967eacb5bf23d359fdf9fe2c509ca692f30253558985813e806a4a31d694b9",
      "at": "2026-10-12T19:21:54.865Z"
    }
  ]
