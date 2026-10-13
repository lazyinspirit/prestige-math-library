# Step 5 adjudicate: repeat, round 1, unit 45

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-45-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u45.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"45",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:rem-nrqm-observables-scope-and-empirical-status, 10:cex-nrqm-observables-plane-wave-is-not-a-preparation, 10:ex-nrqm-observables-position-mean-without-variance, 10:ex-nrqm-observables-two-level-energy-readout.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "rem-nrqm-observables-scope-and-empirical-status",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that the page adopts no physical assumption beyond P2 misstates its dependencies: the Born-law, preparation-moments and state-separation theorem interfaces explicitly require P1 as well. The remark acknowledges P5 but omits P1.",
      "context_sha256": "ae381678c801f9aae93fff6e3e1cdda29e8bc7a7aa438333c4d4e5cc4400360e",
      "item_sha256": "f4491ffd0abde97dbee4adc72533388d650f3abd501dc4ea27ae745dc4634606",
      "at": "2026-10-13T09:39:04.677Z"
    },
    {
      "id": "cex-nrqm-observables-plane-wave-is-not-a-preparation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 and steps 1.2/3.1 assert physical position probabilities under P1 and P5 alone. The cited outcome-law theorem and definition additionally require P2, which is not adopted. State-space exclusion is proved, but the operational conclusions omit a physical assumption.",
      "context_sha256": "f5cfcce50351cde9d148590c4ab6d87f2cd2dc01002b99aac4366d0868020bb3",
      "item_sha256": "7ff3970021d1810285afd80e0ef5debd92a761de87930083abe0dd2183250608",
      "at": "2026-10-13T09:22:58.272Z"
    },
    {
      "id": "ex-nrqm-observables-position-mean-without-variance",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Source misattribution: [Tong](https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf), §§1.1 and 3.3.1, pp. 3–5 and 79–81, discuss the Born rule and expectation formulas, not power-tail densities or failure of expectations to exist as claimed.",
      "context_sha256": "02be55d29befd9b990210c09adde6ae3f6ea5338944488ebb178d3b10d0b5297",
      "item_sha256": "1b2dfb52c79cfe5bf6a06897bf5be0a7d7f113b251fc4fdf73a0804a25666d69",
      "at": "2026-10-13T09:30:51.046Z"
    },
    {
      "id": "ex-nrqm-observables-two-level-energy-readout",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (ii) calls the preparation mixed for every w∈[0,1]. At w=0 or w=1 it is a rank-one projection, hence pure under the supplied state definition. The claimed mixed-state scope contradicts that dependency interface.",
      "context_sha256": "a7983b404aae4ad154b539100f25860b775b1f5ce4cb0bdc9a7995afc7567e91",
      "item_sha256": "5c3992d5da6e82c206e77207c5a6773bc93b355466c271e8887178528450b776",
      "at": "2026-10-13T09:30:30.740Z"
    }
  ]
