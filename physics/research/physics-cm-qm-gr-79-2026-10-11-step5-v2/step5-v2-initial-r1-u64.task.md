# Step 5 adjudicate: initial, round 1, unit 64

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-64-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u64.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"64",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 14:def-nrqm-light-matter-framework-finite-level-coupled-model, 15:def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength, 15:def-nrqm-light-matter-framework-spectral-transition-and-detection, 16:pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients, 17:pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading, 17:ex-nrqm-light-matter-two-level-dipole-drive-check, 18:rem-nrqm-light-matter-scope-and-empirical-status, 18:texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison, 19:rem-nrqm-light-matter-examples-scope-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-light-matter-framework-finite-level-coupled-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In (e), the autonomous flow is attributed to P4 clause (iv), but the supplied interface says (iv) concerns time-dependent Hamiltonians. The autonomous unitary group is P4 clause (ii); this misstates the dependency.",
      "context_sha256": "eb474a06054e839072c0b047a306c121c8c85f1a7c13b1f6707a5e9318f3a514",
      "item_sha256": "057929a04405d629f0810434200787dd5cfad8540c724b41cf51f7b0ecfa53b4",
      "at": "2026-10-12T20:19:04.805Z"
    },
    {
      "id": "def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) does not define or fix k, its units, or a spatial field or mode for it to describe; clause (b) supplies only E_ext:I→R³. Thus |k|L≪1 cannot be evaluated, leaving the claimed long-wavelength regime undefined.",
      "context_sha256": "9bf30216ea594401fec4af5ce184d261dcd153e104c907a6851c9689dfccd2f8",
      "item_sha256": "8fbc51d3e1702f3142764afd3ecb8461a048a8c8da16c94a6336f3d82c632af1",
      "at": "2026-10-12T20:19:16.102Z"
    },
    {
      "id": "def-nrqm-light-matter-framework-spectral-transition-and-detection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: `physical_scope` says the item asserts “no exact model probability,” but clause (e) assigns the ideal energy-window detector the exact Born probability P_{b,t}(B) in the declared one-photon preparation. The scope contract contradicts the body.",
      "context_sha256": "8ac8b2a307eb23dc389f8d9b4182ff6348c4e1ff4122b25d0468879aa8381441",
      "item_sha256": "cb399ad8f6f7487c32d9ddc0202242db48a99ee22f12de0217ed609fe864273f",
      "at": "2026-10-12T20:19:56.792Z"
    },
    {
      "id": "pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (b) includes t=0 and uses γ_b(0), but (a) and F5 define γ_b only for t>0; K_0 is undefined. The bound is not well-formed at that endpoint. Define γ_b(0)=0 or restrict (b) to t>0.",
      "context_sha256": "16b3433370402f953b75878119b82ea3e01f6ebd14933bb659f7ee0daf6575c5",
      "item_sha256": "9b8c9e905e882db3f8f99ea0fd63cd98ef0a8b29711e8c4aaf46133c00b5c5e5",
      "at": "2026-10-12T20:19:53.154Z"
    },
    {
      "id": "pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "J_b is specified only as an L¹(λ) class, yet (a) and (c) use J_b(Δ), which the class does not determine. The cited golden-rule theorem requires a representative continuous at Δ; state that representative explicitly.",
      "context_sha256": "aba8d483e50297b0b47cf4b686ffab9a0435760b44ead9637ff46830b0bc3f05",
      "item_sha256": "ae8ba3b045e15058cee17c882fa9bea42f3523b569058e8e57f7544ab64c91e3",
      "at": "2026-10-12T20:19:20.357Z"
    },
    {
      "id": "ex-nrqm-light-matter-two-level-dipole-drive-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited dipole-drive definition requires a declared characteristic matter length and long-wavelength regime, but the example specifies neither. Its claimed dipole-drive instance therefore lacks an explicit physical scope.",
      "context_sha256": "0a530281dc2327a9f35685bef1c6e1eb1cf0d98145989f0537f291d3de261e3d",
      "item_sha256": "88bd055202622f192c6e1bf5d6359e5450185e8a54794a56a2b0acc637cf5947",
      "at": "2026-10-12T20:21:29.396Z"
    },
    {
      "id": "rem-nrqm-light-matter-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: it says “no preparation … anywhere on the page,” contradicting its adopted vacuum preparation, v_a ⊗ Ω. It should say that no empirical laboratory preparation protocol is reported.",
      "context_sha256": "71cb6172a58e51e21c25d97431bc7b7103adf714149d05070c30a56cfa937b28",
      "item_sha256": "d94c94ef5cb46bbaa741c5aa837811ecb41159b587a48c057bdfe247e158665b",
      "at": "2026-10-12T20:19:29.950Z"
    },
    {
      "id": "texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "At η₀=0, explicitly allowed, the single-vertex vector is zero, so no normalized one-photon preparation or detected-photon law exists. The title and physical_scope still claim a detected-energy distinction; only the formal kernel laws differ. Qualify those claims by η₀≠0.",
      "context_sha256": "ba1a14841d5d59c2d5f113c69b76514007f549fd6bfa46d84f59356233308256",
      "item_sha256": "f15a9abab8d400c0b9034745dd8c426b64a02492bf887130206d6275b8e08ee9",
      "at": "2026-10-12T20:19:09.917Z"
    },
    {
      "id": "rem-nrqm-light-matter-examples-scope-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: “What they rest on” says all three examples depend on P1/P2/P7 and the spectral-transition and single-vertex results. The supplied hydrogen angular-factor interface is a Coulomb/dipole calculation and does not rely on those assumptions.",
      "context_sha256": "6795db2518a07ea8355fbfa91896d05d6e73cb99eaa2daab67cd68703040363a",
      "item_sha256": "32a51e7fb7fe0cd97ffe62b22b2208f0c578e4774d42a6f275ff4a1d3a3498c9",
      "at": "2026-10-12T20:20:07.428Z"
    }
  ]
