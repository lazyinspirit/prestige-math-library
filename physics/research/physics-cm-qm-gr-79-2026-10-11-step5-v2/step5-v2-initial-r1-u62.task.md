# Step 5 adjudicate: initial, round 1, unit 62

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-62-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u62.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"62",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-nrqm-many-body-spectral-mean-and-defined-trace-product, 10:def-nrqm-many-body-framework-declared-fixed-n-model, 11:def-nrqm-many-body-framework-entropy-and-free-energy, 11:pthm-nrqm-many-body-exchange-energy-splitting, 11:pthm-nrqm-many-body-noninteracting-sector-diagonalization, 13:pthm-nrqm-many-body-thermal-occupation-predictions, 13:ex-nrqm-many-body-two-site-bond-thermal-ensemble, 14:rem-nrqm-many-body-scope-and-empirical-status, 15:rem-nrqm-many-body-examples-scope-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-many-body-spectral-mean-and-defined-trace-product",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 misstates the Zorn application for the empty chain: its union is empty, so it need not be an extension containing the eigenfamily and is not an upper bound in that poset. The empty-chain case needs a separate bound.",
      "context_sha256": "92259249c5750f04523807e8cc149f3464c0a2d632c8a3562019020015433bdc",
      "item_sha256": "2c9a8637ea4e1135921506e4b22ebbf45eab10fc2620ab65745715b0920e1a1b",
      "at": "2026-10-12T20:17:38.129Z"
    },
    {
      "id": "def-nrqm-many-body-framework-declared-fixed-n-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (a) says AC is assumed only for Coulomb self-adjointness, but the cited P2 observable postulate explicitly assumes AC for the spectral PVM used in (e). This misstates a direct dependency’s choice hypothesis.",
      "context_sha256": "996b1a6bac217c3b432997cf7d4c40f607edb8e6cd507a8f98d1c8bcde45355b",
      "item_sha256": "eb005e1bf9b4d6bc9c585b0a8223e1ee45be8b7afed1e3a9fb9988814a08a81c",
      "at": "2026-10-12T20:18:27.907Z"
    },
    {
      "id": "def-nrqm-many-body-framework-entropy-and-free-energy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) invokes P7 to characterize temperature assignment as experimentally tested, but P7 is absent from deps and dependency_roles. The supplied observable interface licenses P7 for identifying observables with laboratory quantities, not for temperature identification.",
      "context_sha256": "d3a11c9d85228ea5205cf51b8413c5804768443262222cfad807c27e8f426372",
      "item_sha256": "eebd2abaed6cef72908f5cc6f7177246821d8e5ea32c34d2d7bf59941e94ff89",
      "at": "2026-10-12T20:19:07.695Z"
    },
    {
      "id": "pthm-nrqm-many-body-exchange-energy-splitting",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The bounded case allows nonmeasurable W, but the cited direct/exchange result requires measurable W; its integrals may then be undefined. V_ext also lacks the measurability required by the cited operator realization.",
      "context_sha256": "2a73823b2328c5833ca8b8584fc68f3c47826ce502696f2034ee8d93e2f7e9f4",
      "item_sha256": "25af5432d80bc53f4c341bccc2e8649d9ab43c0f4448fa3d36244a1342c0ac0b",
      "at": "2026-10-12T20:17:23.043Z"
    },
    {
      "id": "pthm-nrqm-many-body-noninteracting-sector-diagonalization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: energies are read in joules, but β is quantified only as a positive scalar. Then βλ in exp(−βλ) is dimensionful; the partition sum is ill-typed unless β is specified in J⁻¹ or otherwise defined as inverse energy.",
      "context_sha256": "d6bda3115e234e75890909f7da2829cba8c92eaab2e125df7fafd067269cc968",
      "item_sha256": "60fe1c7ba06f0eb8b45353730fd60729561c78fb8b05fecbd616c9a57a25c56d",
      "at": "2026-10-12T20:20:00.965Z"
    },
    {
      "id": "pthm-nrqm-many-body-thermal-occupation-predictions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.3 declares G on an undefined number-variable occupation space indexed by b_n. F5 supplies fixed-N occupation bases, not the complete fermionic grand-canonical Hilbert basis; self-adjointness and the trace required by the ensemble postulate are therefore not established for",
      "context_sha256": "8db281e48ca7dd35fffcd54fd8b2352ba2555e846871d9475032a8af15710acd",
      "item_sha256": "2a5a0be106d4c3c14da00a171ca1b7bc4a97176145a577bac34c0af6d67d234e",
      "at": "2026-10-12T20:18:32.445Z"
    },
    {
      "id": "ex-nrqm-many-body-two-site-bond-thermal-ensemble",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The opening sentence misstates the dependency readings: the observable definition adopts P2, and the entropy definition adopts P2/P4; neither adopts P1 or P7. Those postulates are separate inputs, so this restatement is inaccurate.",
      "context_sha256": "fb7910deba5301a608f582c8fb35e2e27761441cce82bbb7e194a98022748366",
      "item_sha256": "f67f336de2f3f7a0857489b745b15c4015106247d1a8c51c10810e59a4d52997",
      "at": "2026-10-12T20:17:40.061Z"
    },
    {
      "id": "rem-nrqm-many-body-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The opening says every result concerns the declared fixed-N model, but the cited thermal-occupation theorem also covers variable-number Fock and countably many mode models, including chemical-potential shifts. That scope is not licensed by the fixed-N definition.",
      "context_sha256": "e3c1708e9d2954f12f113e97e957620ebd224759e10ec3428380a477877a5c26",
      "item_sha256": "d3e58ffb9a796e152726f048d3d0fed0fa333c90e0da555d43781dbda5ea0935",
      "at": "2026-10-12T20:18:11.351Z"
    },
    {
      "id": "rem-nrqm-many-body-examples-scope-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the supplied texp interface states preparation and readout results but no entropy conservation, and it does not depend on pthm-unitary-evolution-preserves-entropy. Saying that result is “used in the thought experiment” misstates the sibling.",
      "context_sha256": "95d2d32edfe37d89dd1d4c721e0a3f394558bddef27b4c179adddda33e322653",
      "item_sha256": "bc762e193334a9a3944425cbbdb4688511a8f8225009c92089c117b4eb44af7e",
      "at": "2026-10-12T20:18:19.165Z"
    }
  ]
