# Step 5 adjudicate: initial, round 1, unit 23

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-23-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"23",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 9:ex-cm07-nonholonomic-unrestricted-action-fails, 12:def-cm07-action-and-mechanical-lagrangian, 16:ex-cm07-polar-coordinate-kinetic-metric-check, 16:ex-cm07-total-derivative-gauge-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-cm07-nonholonomic-unrestricted-action-fails",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates the cited FTC: thm-ftc-first-part covers a fixed [a,b] with a<b, while the curve uses ∫₀ˢ for s<0. The oriented additivity theorem thm-additivity-over-subintervals is absent from deps, so step 1.1 does not establish the motion on ℝ.",
      "context_sha256": "308a8030113d405d52dc4d82d74c12876b53e5bbb090672a9765dcd110ada3f9",
      "item_sha256": "e70bc5ae4b76597332987e91aac1d108185ef1bf78521c384f7fbc28a407ef24",
      "at": "2026-10-12T19:44:37.419Z"
    },
    {
      "id": "def-cm07-action-and-mechanical-lagrangian",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal page-promise defect: §(d) says the first-variation formula, stationarity–Euler–Lagrange equivalence, and link to the force equation are theorems of this page, but the full item contains no such theorem statements or proofs.",
      "context_sha256": "297eb939c39d46fc277bd34178662c4f09143a8b3c2dd3e92a51db20a2853fd5",
      "item_sha256": "d3b7421a1992a25add89b96503733612377147c622208b22c4c5c877a569ea54",
      "at": "2026-10-12T19:42:40.002Z"
    },
    {
      "id": "ex-cm07-polar-coordinate-kinetic-metric-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final remark says the displayed Euler–Lagrange angular equation, multiplied by r, gives m(2 ṙθ̇+rθ̈)=−(1/r)∂θŨ. That formula is obtained by dividing the displayed equation by r; multiplying it gives different terms.",
      "context_sha256": "fe3fd06ca91f5127337647ebe27ea85269ea5e21277df7896efd8e539600faed",
      "item_sha256": "073f0639f2ab2c1285b1d1ace9281c50e9b56489112ab8da3c81cf4dbfcc7042",
      "at": "2026-10-12T19:43:58.941Z"
    },
    {
      "id": "ex-cm07-total-derivative-gauge-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause 3 equates physical quantities to μ, τ and ℓ, which the units interface defines as dimension symbols, not quantities. Thus the normalized data and resulting numerical actions are ill-typed; specify reference-unit quantities such as 1 kg, 1 s and 1 m.",
      "context_sha256": "474e86023c5985176a63e7b3bbc976c868ebdf7d085cc5e3b8bc6856b466db59",
      "item_sha256": "6c85da23f775226aa4bb62a1fa56012cb697547f901fcfb3e6fa74aa640c8ba5",
      "at": "2026-10-12T19:45:08.453Z"
    }
  ]
