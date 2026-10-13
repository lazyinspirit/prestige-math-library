# Step 5 adjudicate: initial, round 1, unit 63

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-63-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"63",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-nrqm-photons-analyzer-projections-and-overlaps, 10:post-nrqm-photons-radiation-extension-and-transverse-mode-assignment, 11:def-nrqm-photons-framework-fixed-mode-polarization-model, 11:def-nrqm-photons-framework-radiation-sector-and-quantum-assignments, 12:def-nrqm-photons-framework-ideal-counting-and-detection-model, 13:pthm-nrqm-photons-fixed-mode-number-and-energy-statistics, 14:rem-nrqm-photons-scope-and-empirical-status, 14:ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal, 14:texp-nrqm-photons-classical-field-and-quantized-detection-comparison.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-photons-analyzer-projections-and-overlaps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F4] is an unsupported dependency restatement: the supplied projection interfaces give properties of a projection onto a specified closed subspace, but not the converse characterization of every bounded self-adjoint idempotent as the projection onto its range. Step 2.1 relies on ",
      "context_sha256": "23d76cd1d6594bf52c350f821dac79b85b12e695e3c05d0159140f172a35c595",
      "item_sha256": "590ff1c2937ab7c71019eb36f4233c3ea0d986912c1cdb742cd7a07950f4d754",
      "at": "2026-10-12T20:18:07.926Z"
    },
    {
      "id": "post-nrqm-photons-radiation-extension-and-transverse-mode-assignment",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (i) says the cited counterexample refutes strong-action convergence and finite frequency limits, but its supplied Statement asserts both limits exist. That source-backed claim is contradicted by the cited interface.",
      "context_sha256": "465a77ebf446b9a8baa31cda3e5b90d02ec202279b9a2761c4db67d84854765e",
      "item_sha256": "20b7923bb610793d43eb46f5ac50b42042414ddd879cdb6b234b52a017089d87",
      "at": "2026-10-12T20:17:47.520Z"
    },
    {
      "id": "def-nrqm-photons-framework-fixed-mode-polarization-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (e) invokes P6 (“in the sense of P1 and P6”), but P6 is absent from the declared dependencies and dependency roles. This leaves a local prerequisite undeclared.",
      "context_sha256": "93234ac371d9aef31a7a51b13854a55ae99eef18182bf5b441b18522a39dbf3b",
      "item_sha256": "e7489e2a5be4c8bcea67ee7500e531003d5669bbb9a7f63490ef318fcd50e6b5",
      "at": "2026-10-12T20:18:40.120Z"
    },
    {
      "id": "def-nrqm-photons-framework-radiation-sector-and-quantum-assignments",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The radiation postulate requires adopting P5 and P7 alongside P1, P2 and P6. This item omits P5 and P7 from its dependencies and invokes P7 in (f) without declaring it, so its local assumptions conflict with the supplied dependency interface.",
      "context_sha256": "0c1117bfc0e15b8a7d781ad15627ae35780ffa5fefadf5ef9523a965e80beb52",
      "item_sha256": "04e69bf0229b78cf1f5e35c2755fd016bc4720fb8d8ab7517c4a7eaad44e8293",
      "at": "2026-10-12T20:18:33.425Z"
    },
    {
      "id": "def-nrqm-photons-framework-ideal-counting-and-detection-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) allows any pairwise-disjoint energy-window family, but the measurement interface admits only finite or countable outcome families. An uncountable partition, such as singleton bins, does not define an admissible declared sharp measurement.",
      "context_sha256": "bd5ca59975180bff234f2a3b6e68b9178cb037d3b87d94e6b00daec15391a46f",
      "item_sha256": "bc2f237308902e327c8520c236ef428752457830af74529c3440cd59792a0830",
      "at": "2026-10-12T20:19:01.636Z"
    },
    {
      "id": "pthm-nrqm-photons-fixed-mode-number-and-energy-statistics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) says neither preparation has sharp energy without limiting that conclusion to n≥1 and z≠0. At n=0 or z=0 the preparation is the vacuum, an H_f eigenstate with zero variance; the stated conclusion is false as written.",
      "context_sha256": "0eb7db07feacc31e34a5e886eb2ac7ed019d4a58e6beb17130a696fa6ca4c4a9",
      "item_sha256": "445133588cabbf2f7d022c7d42fe63879602d5e171a7cd0c52d3146fdc4770aa",
      "at": "2026-10-12T20:18:23.024Z"
    },
    {
      "id": "rem-nrqm-photons-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The summary says all listed deductions follow from P1, P2 and the radiation extension, but the cited polarisation theorem’s repeated-analyser update also requires P3, the ideal conditional-measurement postulate. This understates a required physical premise.",
      "context_sha256": "db8d4bc06d924e2d6979f6270e1cd5855a8d9955c1d699789708c153fee2785a",
      "item_sha256": "4c5afbb5ad2a8b3fabc1cbe2cae20f5713bcef89d29062e75fc33b9cbaa666f1",
      "at": "2026-10-12T20:18:56.127Z"
    },
    {
      "id": "ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited quantities interface defines ε₀ as vacuum permittivity in F·m⁻¹; this example assigns ε₀ energy units J. That conflicts with the supplied quantity convention. Rename the effective mode energy, for example to E₀.",
      "context_sha256": "29e22787a50548abc7a5883ed878e6b5e63829b6f2f833fa369b9a0571a6e00d",
      "item_sha256": "42bdaa96dd5ca2c5e0470984fa811c28d07ff0207c70b74318c9dc645e9c792b",
      "at": "2026-10-12T20:19:07.902Z"
    },
    {
      "id": "texp-nrqm-photons-classical-field-and-quantized-detection-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In (b), each normalized law's cross-term is 2Re(…)/||a||², not the displayed unscaled term. Since a need not be unit norm, step 3.1's claim of matching coefficients is false as stated.",
      "context_sha256": "2ca2dd81485ff0155d81b8f2ca0cd717c998c5564f5b321d4bb26441aa40da7b",
      "item_sha256": "0aa2ee88e464d2a3ee916152eeacc1adf9127c8e7b9d497b649011671fee62b0",
      "at": "2026-10-12T20:18:34.634Z"
    }
  ]
