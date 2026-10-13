# Step 5 adjudicate: initial, round 1, unit 46

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-46-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u46.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"46",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 9:def-nrqm-measurement-framework-declared-measurements-and-instruments, 11:ex-nrqm-measurement-serial-stern-gerlach-filters, 11:ex-nrqm-measurement-three-polarizer-chain, 12:pthm-nrqm-measurement-finite-effects-dilation, 12:ex-nrqm-measurement-degenerate-coarse-versus-fine-update, 13:ex-nrqm-measurement-absorption-instrument.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-measurement-framework-declared-measurements-and-instruments",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It adopts P2 and cites its outcome-law interface but states only ACω. That interface requires full AC for the spectral PVM in clause (ii); inherit AC or narrow the dependency claim to the projective law supplied by P3 alone.",
      "context_sha256": "249fdb7578ddc8c26b3419919890e1a35137386e99db31db830651f29731a291",
      "item_sha256": "4b731e2884b1595c470618cad88b8233824a2315a3c8541ae82ca9a112d39669",
      "at": "2026-10-12T20:08:20.326Z"
    },
    {
      "id": "ex-nrqm-measurement-serial-stern-gerlach-filters",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item assigns spin readouts S_i=ℏJ_i but never states their units or defines ℏ's dimensions. The required physical units are angular momentum (ℏ in J·s), leaving the readouts physically underspecified.",
      "context_sha256": "d998be467395a48a63d20f90730c703dd16c135fdb866b763f5453a7ccb30700",
      "item_sha256": "6778806196816eff518f3f646bba35bcf81be1defa9259e35777771b78ca2456",
      "at": "2026-10-12T20:09:03.528Z"
    },
    {
      "id": "ex-nrqm-measurement-three-polarizer-chain",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item identifies its two-level system as an idealization of a fixed-mode polarization degree of freedom, while its state-space dependency restricts the system to the declared massive-matter sector. This scope mismatch puts the stated physical model outside the supplied framewo",
      "context_sha256": "37925ecfa8a44653418a273dea6e4204ad0d508e9f2a0e1d06589bc2c1902f4f",
      "item_sha256": "ed50f2604014f48d4484ad550334069914c09e3605e779b4e5ed8dbb26c9e128",
      "at": "2026-10-12T20:08:52.578Z"
    },
    {
      "id": "pthm-nrqm-measurement-finite-effects-dilation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (e) imports the P7 claim that laboratory identification is tested with uncertainty, but P7 is absent from deps. Step 5.1 only describes the mathematical construction and does not establish that claim.",
      "context_sha256": "da6abcd4aa2d3d25adcb4c9ca10327cb761d738368cde732c76e5dbddc59defb",
      "item_sha256": "712d13201fc3418c7727f99fcd2b3387afcb89b2c2c9cfb94e74d710ba85ac1a",
      "at": "2026-10-12T20:07:54.092Z"
    },
    {
      "id": "ex-nrqm-measurement-degenerate-coarse-versus-fine-update",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 broadens its cited theorem: pthm covers P=E_A({λ}) for an eigenvalue of a bounded assigned sharp observable. The example applies it to its declared P without supplying such an observable, so step 1.1's appeal is unlicensed.",
      "context_sha256": "7f1693d14a724850f60e3e2243fe7a1044c1c1b31ab141d53d81585170551a17",
      "item_sha256": "5fecabbe32fab333545ff3d64e5b97bda8759b606c18a04cfbcba25e9af4d4a9",
      "at": "2026-10-12T20:07:50.377Z"
    },
    {
      "id": "ex-nrqm-measurement-absorption-instrument",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 omits the declared-instrument framework’s required assumptions: adopted postulates P1–P3 and countable choice. The example uses its probability and update rules without stating those premises, so the physical conclusions exceed the supplied interface.",
      "context_sha256": "aed7f0767566519c193fcbcc53f5e2bd7deae2ef34cb730ffc0d820cc7176c2e",
      "item_sha256": "3407d758dcd3aa7f53c79b9370d0c2b02a88a540f70c3d3bcb1aad8bd5869666",
      "at": "2026-10-12T20:08:02.361Z"
    }
  ]
