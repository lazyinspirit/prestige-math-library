# Step 5 adjudicate: initial, round 1, unit 72

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-72-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u72.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"72",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-gr-schwarzschild-exterior-model, 9:lem-gr-schwarzschild-static-congruence-and-clock-rates, 9:ex-gr-schwarzschild-isotropic-weak-field-comparison, 10:ex-gr-schwarzschild-static-clock-ratio-explicit, 11:lem-gr-warped-spherical-christoffel-and-ricci, 12:lem-gr-schwarzschild-ricci-and-einstein-tensors, 12:lem-gr-warped-base-vacuum-reduction, 13:thm-gr-local-birkhoff-warped-product, 14:pthm-gr-schwarzschild-vacuum-model, 15:lem-gr-kruskal-model-properties, 15:pthm-gr-schwarzschild-circular-orbit-predictions, 15:cex-gr-exterior-charts-do-not-cover-the-extension, 17:rem-gr-schwarzschild-horizon-and-singularity.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-schwarzschild-exterior-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (b) claims ACω is assumed through the product-manifold supplier, but its supplied interface states the product construction under only smooth-manifold hypotheses. This is an inaccurate local dependency restatement.",
      "context_sha256": "d4975f882fa07f29f18c858f16fd927c2ff77ddd12bf31b5e4a147cecf845029",
      "item_sha256": "d0dfe550a19185c7f21eef39187245f306cb11c852b6576dffed89d40868a7f6",
      "at": "2026-10-12T20:25:25.200Z"
    },
    {
      "id": "lem-gr-schwarzschild-static-congruence-and-clock-rates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) omits Δx^0≠0. If the common interval has Δx^0=0, both proper-time increments vanish, so their ratio is undefined; step 3.1's division is invalid. Require a nonzero (or positive) interval.",
      "context_sha256": "9de417f715f4d008d5bbf0975dfe4ef3cfaf298024985ba659a3afbc60941e8d",
      "item_sha256": "44c17af1f79fac3a8f64ce27e06f418eac21ff64a09eda86805e3c71da300dc0",
      "at": "2026-10-12T20:25:15.064Z"
    },
    {
      "id": "ex-gr-schwarzschild-isotropic-weak-field-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: converting only the argument \u001b[200mrho\u001b[0m to \u001b[200mrho_0(r)\u001b[0m does not convert the radial metric component. It also requires the Jacobian factor \u001b[200m(d rho_0/dr)^2\u001b[0m, whose second-order term makes the isotropic radial coefficient agree with the areal coefficient, in",
      "context_sha256": "3c0b7142a38d7fa43c8b42d30cbba9802ffb9d9086e6fc4e2b84a8137a81f144",
      "item_sha256": "3efba38b1bbb9078ce427638401f550774128a40743061c1723649f3eb80e4be",
      "at": "2026-10-12T20:25:30.489Z"
    },
    {
      "id": "ex-gr-schwarzschild-static-clock-ratio-explicit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 infers strict increase from a positive derivative, but the cited dependencies provide neither the chain rule nor the mean value theorem needed for that inference. L3–L4 do not establish monotonicity of √f.",
      "context_sha256": "7db111e69d79d8dbb11bb7f040973c5e97115209aac1713d5df3defb2a2d865c",
      "item_sha256": "7af276dccfe17d905e1d786bf846c9fb916db866c882f08145797e34b954baad",
      "at": "2026-10-12T20:26:36.260Z"
    },
    {
      "id": "lem-gr-warped-spherical-christoffel-and-ricci",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the hypotheses allow non-time-orientable q (on an annulus, its Lorentz cones can rotate by half the polar angle), so M need not admit a time orientation N. Yet Ric(g) and the cited curvature-coordinate theorem require (M,g,N); L5 and step 3.2 use them without that hypothe",
      "context_sha256": "663e69ca96b1f5db39682e31c7c30b1bea2245e7afc51261aed19501bf24b992",
      "item_sha256": "2b207f7ca56c9ebb0c3b6ccd9faa814be9daec23e722788205f6ddcd009da666",
      "at": "2026-10-12T20:26:04.058Z"
    },
    {
      "id": "lem-gr-schwarzschild-ricci-and-einstein-tensors",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [L3] falsely says tensoriality carries component identities unchanged from one chart to every chart. The proof invokes this claim for its every-chart statement; the cited theorem gives tensorial transformation, not unchanged components.",
      "context_sha256": "725c3207c554caca47dc1c6c2521dfe2fc62fa2e5398fc279d62e54da9a7872b",
      "item_sha256": "f707c67b9bc05e76f0bf8153f9942642e3581148ca7eff91149900afce199b30",
      "at": "2026-10-12T20:25:42.517Z"
    },
    {
      "id": "lem-gr-warped-base-vacuum-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal interface mismatch: L4 applies [[def-gr-killing-field]] and its cited theorem to the 2D base q, but the supplied interfaces define/characterize Killing fields only for a 4D Lorentzian metric. Step 4.2 proves the equation, but no applicable base definition licenses (d)'s ter",
      "context_sha256": "a5a6286d2d306c0dca799df00242785301b50df07164c7171eb5e69f1946f05d",
      "item_sha256": "d6e5001ece040c9f02f76d9b63b766483d6dfc9987fa6044f7ad5181b0b81cb7",
      "at": "2026-10-12T20:27:15.724Z"
    },
    {
      "id": "thm-gr-local-birkhoff-warped-product",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: Step 3.1 uses the inverse function theorem to replace the flow-box coordinate u² by r. L4/L5 attribute that coordinate criterion to definitions and coordinate-basis facts, which do not supply the inverse function theorem; this dependency is missing.",
      "context_sha256": "78df985518052231699878526d44eff04514210c842aeb1f0c21bd5abba6d95d",
      "item_sha256": "bbac16a79eddd2f6b4d55e258d4f5a8ddb604d500324a26e3f1c41a0794b004c",
      "at": "2026-10-12T20:27:06.197Z"
    },
    {
      "id": "pthm-gr-schwarzschild-vacuum-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 attributes the general claim that any datum with G=0, T=0, and Λ=0 solves the field law to pthm-gr-einstein-consistency-and-energy-conditions clauses (a),(d). Clause (d) covers only the flat example; derive the general case directly from the field law.",
      "context_sha256": "b20aaba43fb46d019292c40852d20a4d1db356fe5c8ced72e50f28dc1d96027c",
      "item_sha256": "bc8f78c5f25d06b83fc97b0191e09c8ea089b156fa6a23b5dba0c6abcca617c9",
      "at": "2026-10-12T20:28:07.535Z"
    },
    {
      "id": "lem-gr-kruskal-model-properties",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L3] and step 3.1 apply curvature results proved for the Schwarzschild exterior r>s to the interior branch 0<r<s. The cited interfaces do not license that extension; the interior curvature identities need a local computation or a dependency covering f<0.",
      "context_sha256": "a002ffe1f19eca1fb28d92973989c4725d140a162a6b678f2d19f08f4a9b194f",
      "item_sha256": "4f383f9b7b51e6c53b6c132c331a1ac4e6bd194613d8718d4be8df1a5e48b591",
      "at": "2026-10-12T20:25:20.240Z"
    },
    {
      "id": "pthm-gr-schwarzschild-circular-orbit-predictions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 states the V_ℓ'' formula for r>3s/2 without the source lemma’s essential condition ℓ²=c²sr²/(2r−3s). It is false for general ℓ (for example, ℓ=0), so this dependency restatement fails the required interface check.",
      "context_sha256": "88e59e30c827ea2468c302a89fd578cd2bd3683bb896eb9226dee92d5140a2e0",
      "item_sha256": "26d83abd0f9a3634f18162b0cff8230521edef2108cb86248135127595763844",
      "at": "2026-10-12T20:26:27.369Z"
    },
    {
      "id": "cex-gr-exterior-charts-do-not-cover-the-extension",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 overstates cor-exponential-is-a-bijection-onto-positive-reals: its interface gives continuity and bijectivity, not strict increase. The claimed logarithm inequality and limit need monotonicity; no cited fact or proof supplies it.",
      "context_sha256": "8ea1546cdc743036983db5c44788db5faca004edadfcc1ef749be4f35a63ef4c",
      "item_sha256": "f73550f956dd9a8187a1e244014203e8cb5b22d0b17ff2bb9b98590e736b1a67",
      "at": "2026-10-12T20:26:03.550Z"
    },
    {
      "id": "rem-gr-schwarzschild-horizon-and-singularity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In Kruskal, r=s iff UV=0, so the full horizon set is the union of U=0 and V=0. Those null hypersurfaces cross at U=V=0; their union is not smooth there. The scope note incorrectly calls it a smooth null hypersurface.",
      "context_sha256": "36bc36654e3d4aa9900075e22b30c2f99b02a4a2a134e18341109cb881fd2ef9",
      "item_sha256": "fbf2017ec3deabe0819a9dc2836dfd9665bae58e646948ae9db7662b38e0a4f7",
      "at": "2026-10-12T20:28:05.529Z"
    }
  ]
