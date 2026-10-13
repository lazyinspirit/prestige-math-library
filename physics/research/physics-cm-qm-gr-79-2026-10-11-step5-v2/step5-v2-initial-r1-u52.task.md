# Step 5 adjudicate: initial, round 1, unit 52

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-52-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"52",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:lem-nrqm-oscillator-unitary-transport-of-spectral-pvms, 9:def-nrqm-oscillator-framework-quadratic-potential-model, 10:def-nrqm-oscillator-coherent-states, 10:pthm-nrqm-oscillator-energy-spectrum-and-completeness, 11:ex-nrqm-oscillator-ladder-norms, 13:pthm-nrqm-oscillator-coherent-state-evolution.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-oscillator-unitary-transport-of-spectral-pvms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 5.1 applies [F3] to T and T', but the supplied spectral-support lemma requires a nonzero Hilbert space. The statement allows H=K={0}, so this dependency does not cover all cases claimed.",
      "context_sha256": "60a7ef5ca989179f4baac83db625228d9f000ef09845d765eb34cc684462f81b",
      "item_sha256": "999811e2e61fcadc2fd70b9ec8f60925f3b6b8b1c4ed43ebf2179063fafbcd96",
      "at": "2026-10-12T20:10:14.789Z"
    },
    {
      "id": "def-nrqm-oscillator-framework-quadratic-potential-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The number observable is assigned unit 1/count, so eigenvalue n reads as n per count, while the text says it records n excitation counts. Use count or dimensionless 1; the declared unit conflicts with the stated physical meaning.",
      "context_sha256": "58416ede379681e63ef722d382d8fc798bfd0c614a5d28c1b22450b01a6e9314",
      "item_sha256": "ac82b1553f60f2bf63724eca58f98f8863f9eb975f78ad349bfd5b1b13da71eb",
      "at": "2026-10-12T20:10:47.337Z"
    },
    {
      "id": "def-nrqm-oscillator-coherent-states",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) claims the position and momentum means rotate at ω based on “the coherent-state evolution result,” but that result is absent from deps. The listed convergence and scaling results do not establish this dynamical claim.",
      "context_sha256": "14f59e0eae058b8eccac0530a95210effbfc7464d52989b28bd38c8e83cb3ed7",
      "item_sha256": "02456ec2be8e83267a2270c9bb2804c209d057b49a0ff72667066b042ce61cc5",
      "at": "2026-10-12T20:11:39.670Z"
    },
    {
      "id": "pthm-nrqm-oscillator-energy-spectrum-and-completeness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (e) asserts that lab-line identification is tested under P7, but P7 is absent from deps and dependency_roles, and no supplied interface licenses that restatement. The theorem makes this status claim with an undeclared dependency.",
      "context_sha256": "caaf46bef79de8e8154a892df8d8557b26ab55a19a2a245f2602af627e5f76e5",
      "item_sha256": "fbbead3d51cdb68d7e49af8e506ef6b0f44f134fa4bb8851179a694392790666",
      "at": "2026-10-12T20:10:36.579Z"
    },
    {
      "id": "ex-nrqm-oscillator-ladder-norms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item invokes P2’s spectral outcome law but states only countable choice. P2’s supplied interface also requires the Axiom of Choice for the spectral PVM; that premise is absent from the item’s assumptions and deps, so the outcome-law claims are not licensed as stated.",
      "context_sha256": "690f4eccc4d2d60fcc2b92c9f8ee6c9f317b13bdc125fe1b50e82098e370073a",
      "item_sha256": "4d71a866428d554c83d846b7f0722cd20c97263ba807e990edc2fe2685b94b08",
      "at": "2026-10-12T20:12:08.533Z"
    },
    {
      "id": "pthm-nrqm-oscillator-coherent-state-evolution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clauses (e) and proof 4.1 say the laboratory identification is tested under P7, but P7 is absent from `deps` and `dependency_roles`. That physical-assumption claim is unsupported by the item’s dependency interface.",
      "context_sha256": "9797612c5e2951df25681a1e71d166e3d40963efdd612695dc1c931d30374063",
      "item_sha256": "0d8f30003e3efdcba8bc0065467a8bf14fefa754c865ccde184db66a973a1ea5",
      "at": "2026-10-12T20:11:07.738Z"
    }
  ]
