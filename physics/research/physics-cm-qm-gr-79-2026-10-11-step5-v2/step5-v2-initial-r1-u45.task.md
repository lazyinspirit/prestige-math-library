# Step 5 adjudicate: initial, round 1, unit 45

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-45-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u45.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"45",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-nrqm-observables-moments-and-variance, 7:def-nrqm-observables-framework-observable-and-outcome-law, 8:pthm-nrqm-observables-position-and-momentum-outcome-laws, 10:rem-nrqm-observables-scope-and-empirical-status, 10:ex-nrqm-observables-position-mean-without-variance, 10:ex-nrqm-observables-two-level-energy-readout.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-observables-moments-and-variance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: step 2.1 applies [F2]'s absolute-first-moment criterion to any unit vector, but [F2] assumes ψ∈D(A). Thus (b) is unproved for ψ∉D(A); [F1] could supply a separate argument, but step 2.1 does not cite it.",
      "context_sha256": "6fc2a2f2599a96d10b20a681ee409d9d72d22dcc0111ac7b473ca3cbe2949d72",
      "item_sha256": "0849f433d8297f9d3c23e49930e7bb5c0ac1085144d47970ce3d010b2b3de687",
      "at": "2026-10-12T20:07:48.078Z"
    },
    {
      "id": "def-nrqm-observables-framework-observable-and-outcome-law",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The superposition remark overstates the distinction: for A=diag(0,1), (|0⟩+|1⟩)/√2 has the same 1/2–1/2 outcome law as the 50/50 mixture of |0⟩ and |1⟩. Interference can vanish; qualify the claim as generally different.",
      "context_sha256": "a1e803d59b99dabf43b941014bec834fe5f7e7e807cf0c4b9d823174facd4250",
      "item_sha256": "49dcd3f7838e098bbcd4d3b75f5b01d764d1d0f3a2cdebf39e659399b1956650",
      "at": "2026-10-12T20:07:44.090Z"
    },
    {
      "id": "pthm-nrqm-observables-position-and-momentum-outcome-laws",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "P2 requires each assigned observable to include a declared reading unit. The theorem supplies only the operators Q_j and P_j, without assigning their units, so it does not establish outcome laws for the assigned observables required by the cited interface.",
      "context_sha256": "1f54839616574786d5eae1311f094e52661f71fff3945ed0bb192a6eb65918d9",
      "item_sha256": "b5aa65ed98bf2210e0c4288b34ce294d5a6020a2de7cba3f005299c19c5151c1",
      "at": "2026-10-12T20:07:05.731Z"
    },
    {
      "id": "rem-nrqm-observables-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The scope says there is no state-determination claim, but includes a theorem proving distinct preparations have different bounded-observable statistics and that all such statistics determine the state uniquely. Qualify the denial as empirical or finite-data determination.",
      "context_sha256": "f0f81ee1a1ee45209d198339cd0edf46b4e04ca43f68c97beed34baca87d5143",
      "item_sha256": "32144aeb74aeb1799346bfc3e6cf34490a7fa587e94886adc0a237be897c3d33",
      "at": "2026-10-12T20:07:14.207Z"
    },
    {
      "id": "ex-nrqm-observables-position-mean-without-variance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: no length unit is assigned to Q₁ or t, although the observable interface requires a declared unit. The cutoff |t|≤1 and power-law profile are dimensionally underspecified as a physical preparation; state a coordinate unit or define a scale ℓ and use t/ℓ.",
      "context_sha256": "8f0b6ae89bcef541e913ba6b03416d734f284bc0c6fb7aa55560d148787946c9",
      "item_sha256": "ec632760ba6521ca7c93f99c84b6a9d2097cc09cd0e850e16b71dfd3238ea58f",
      "at": "2026-10-12T20:07:20.639Z"
    },
    {
      "id": "ex-nrqm-observables-two-level-energy-readout",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (i) says every outcome lies in σ(A), but the cited Born-law result licenses only probability one on σ(A). A probability-zero event is not logically excluded; qualify this as an almost-sure statement.",
      "context_sha256": "dae8614f72e8abdf5fb3d75867b275564361b4d2b0776e96cee1f8b07fd62be4",
      "item_sha256": "b963d75c864c9c1259bc31c778aedd0f668fe34962a7fe34ec0f6397d1016755",
      "at": "2026-10-12T20:06:58.017Z"
    }
  ]
