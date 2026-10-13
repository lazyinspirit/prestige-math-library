# Step 5 adjudicate: initial, round 1, unit 30

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-30-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u30.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"30",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 21:pthm-cm14-hamilton-jacobi-characteristics, 23:def-cm14-involution, 24:def-cm14-complete-integrability, 26:cex-cm14-harmonic-model-critical-fibre, 27:cex-cm14-free-particle-noncompact-fibre, 27:ex-cm14-harmonic-oscillator-hamilton-jacobi-check, 27:ex-cm14-kepler-radial-action-check, 28:rem-cm14-scope-of-hamilton-jacobi-and-integrability.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "pthm-cm14-hamilton-jacobi-characteristics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: presentations may have residual forces d≠0, but the proof identifies HJ characteristics with model motions only when d≡0. Otherwise they solve the unforced Hamilton system, not necessarily the model's forced equations.",
      "context_sha256": "8b2ba18beb3e8c6395c4d730b8e5c665ce3ae8e1a96eb13b23c7de5b06c207ca",
      "item_sha256": "2ac1f3de9ef8751ed0a062d32a54d19b898e7d08a2eb3a8f0c1185e2f66bb04d",
      "at": "2026-10-12T19:51:53.916Z"
    },
    {
      "id": "def-cm14-involution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) overstates [[pthm-cm13-observable-evolution]]: its supplied clause 2 proves only that bracket vanishing along a solution implies constancy. It does not establish the converse or pointwise vanishing on all of W₀; no local-existence result is cited to bridge that gap.",
      "context_sha256": "2cac7898ad01dbe85b3262cd31448e962cbfaee35a905d99d8af25c32d48cc78",
      "item_sha256": "e60131e4ffb1cb84fef8390f4656ea1cd949bfbf9f09bb86a53bf41628071a2e",
      "at": "2026-10-12T19:51:21.633Z"
    },
    {
      "id": "def-cm14-complete-integrability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: W₀ may be any momentum phase domain, including a generalized-coordinate chart, but clause (a) sets F₁=H|W₀. The supplied interface defines H on the Cartesian chart and names the generalized-chart Hamiltonian H̃, so F₁ is undefined there.",
      "context_sha256": "22c7b52de752456c5e3b6ce8ff6cbb4daf82cfb454c7ed0630134ba1d6f25c8d",
      "item_sha256": "77db20d82c88d329b2865ea078132acaea1773aab3fa92651ed386ddaa26cecf",
      "at": "2026-10-12T19:51:59.440Z"
    },
    {
      "id": "cex-cm14-harmonic-model-critical-fibre",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited CM12 Cartesian presentation uses Q⊆R^{3N} for N labels in R³, so its phase domain has dimension 6N. This scalar model uses Q=R and phase space R²; the supplied interfaces do not identify it as a datum of that presentation.",
      "context_sha256": "58ce3b60cb170cc2cfcf96a2342805a8713fe716b1b07a8c961441ae5f6c54b1",
      "item_sha256": "25a11addb8a9346ed4b9ff179654e2f62d244ac13c0c651e1ce6c9394f378d1f",
      "at": "2026-10-12T19:52:45.849Z"
    },
    {
      "id": "cex-cm14-free-particle-noncompact-fibre",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2's claimed physical R^3 action is ill-typed: a p*/m is a velocity, while b e1 and c e2 translate position. The item assigns no time unit to a or length units to b,c, so its no-period-lattice claim lacks a defined physical action.",
      "context_sha256": "e08021f86dd87efa46c9261ca0f57e25291d1a85845540afc8d4a734b9cbea78",
      "item_sha256": "0a70028030d0f17f5f67649a1ce0d5d588d8301710497f7bbceaaf37c91727cc",
      "at": "2026-10-12T19:55:53.174Z"
    },
    {
      "id": "ex-cm14-harmonic-oscillator-hamilton-jacobi-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1/L5 invokes [[pthm-cm14-action-angle]] clause 4 without establishing its hypotheses: a completely integrable datum, compact regular fibre, and proper-submersion neighbourhood. The cited theorem therefore does not license the claimed motion correspondence and evolution.",
      "context_sha256": "b02ca7b4b40e259ebb49efd8501ce8b3523011bef0c9292907618a92f4cf74d8",
      "item_sha256": "b4c6561d37a976776899dbfa2095c8f86d932d76146c71411c799ab71b852913",
      "at": "2026-10-12T19:53:14.093Z"
    },
    {
      "id": "ex-cm14-kepler-radial-action-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item starts with a motion x:I→Q on an unspecified interval, yet claims its radial coordinate has a least positive period and uses θ:R→R. The cited Kepler-period result gives periodicity only for the unique global extension; that extension is not made part of the claim.",
      "context_sha256": "c9c410cd6a5ade05c0d01f5744cb2b37be724c52869a356831b9cfca167b0e62",
      "item_sha256": "0db37d0ece177046f2c97b9e1c9961b5cd5d0afbaa51fee91bd69f85a5e55d8b",
      "at": "2026-10-12T19:52:48.817Z"
    },
    {
      "id": "rem-cm14-scope-of-hamilton-jacobi-and-integrability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claim that the regular-tori result uses countable choice through a published lattice lemma conflicts with the supplied scope interface, which says choice enters only in the repaired action-angle proof’s counterexample sequence (step 4.1).",
      "context_sha256": "26979f29d3fc01e1f344eea5b3c846acad30753a23ebb3d39245735bc5145b85",
      "item_sha256": "b087b26d6aacf2fe5d3e4ec74e2b95f10c41ae701df412d08f1cbd2ae008f126",
      "at": "2026-10-12T19:53:14.396Z"
    }
  ]
