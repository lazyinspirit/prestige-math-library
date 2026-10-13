# Step 5 adjudicate: initial, round 1, unit 56

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-56-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u56.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"56",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 11:def-nrqm-bell-declared-spin-arrangement, 15:rem-nrqm-bell-selection-loss-and-fair-sampling, 16:rem-nrqm-bell-boundaries-and-comparison-scope, 17:rem-nrqm-bell-scope-and-empirical-status.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-bell-declared-spin-arrangement",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The physical scope and opening premise list omit P5, but the cited spin-s model and spin-spectra theorem used for the spin projections and outcome laws explicitly adopt P5. The stated scope understates a required physical premise.",
      "context_sha256": "c28fa90ce2f66517ac738eafd767600571a5dfbf7fbdbc67357a93233cbb5384",
      "item_sha256": "8a83f52264660b9ebb9bbf62d983c0429da340adbea277c323106c73423c80a8",
      "at": "2026-10-12T20:14:20.380Z"
    },
    {
      "id": "rem-nrqm-bell-selection-loss-and-fair-sampling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the last bullet says finite-sample fluctuations of any CHSH functional from recorded pairs are treated by texp-nrqm-bell-finite-sample-chsh, whose interface assumes IID samples from the arrangement’s unselected νρ tables; it does not cover postselected tables.",
      "context_sha256": "654c6fcf5a5639eac5c22fffe80a0d15be990682a1ebf2b548984eeceaf53f6f",
      "item_sha256": "b5050411253e14434e961f3a4a52cb506dba08fa93c19a6ef443a65a92d6e235",
      "at": "2026-10-12T20:14:36.273Z"
    },
    {
      "id": "rem-nrqm-bell-boundaries-and-comparison-scope",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The measurement-boundary remark says the CHSH bound transfers only under setting-independent selection, but the cited lemma gives only a sufficient condition. Setting-dependent selection can leave the conditional tables unchanged, so this necessity claim is false.",
      "context_sha256": "41d9b21500f278984b0a0c4453f21f9f44273d52957ff3fb6916670ce77bef2f",
      "item_sha256": "39725091cd410b6c36f4d8d597e95a35857eeac945472a29ec1610385c9af627",
      "at": "2026-10-12T20:13:25.009Z"
    },
    {
      "id": "rem-nrqm-bell-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The sentence assigning the repetitions-to-sampling-model identification to P7 clause (iii) misstates its interface: repeated-trial sampling assumptions are clause (ii); (iii) covers physical preparation, dynamics, and detector identifications.",
      "context_sha256": "0ed9d22af9ee52bd5ea8b2fd0de51b15b5ab2a820ff2d12d86c43ab350462a4e",
      "item_sha256": "c236cb34bceed4e1236884fd1e611f6ed62ef6f4d8f62a0a5cb83913071e2d65",
      "at": "2026-10-12T20:13:30.900Z"
    }
  ]
