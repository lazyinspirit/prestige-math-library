# Step 5 adjudicate: initial, round 1, unit 74

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-74-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u74.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"74",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 6:def-gr-wave-screen-and-tt-projection, 10:lem-gr-null-phase-coordinate, 11:ex-gr-plane-wave-regauge-to-tt, 15:def-gr-linearized-wave-regime-and-detector-coupling, 16:ex-gr-sinusoidal-tt-plane-wave.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-wave-screen-and-tt-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: (a) defines n and s at one suppressed point (the observer dependency defines a single vector at p), but (d) imposes field conditions at every point relative to n,s without defining fields on the open set. Those field clauses are ill-typed.",
      "context_sha256": "cf2d03414a0f3d44c652e50c36f4a4ff30ec10900d4c68f6b71e13101461d8e0",
      "item_sha256": "f6128531ff67803e543cf8e569aeab241ec10a988539ba3b701a2571b81cf0ad",
      "at": "2026-10-12T20:27:23.060Z"
    },
    {
      "id": "lem-gr-null-phase-coordinate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement misidentifies n=du as the supplier’s “wave covector.” The interface calls n the phase differential and reserves that term for k=ωη(T,·)=−ωn; this dependency restatement is inaccurate.",
      "context_sha256": "7dc630b552ee4fe79f99621278e8a998c3b912b9b1a66abbe06bdea8fea94b44",
      "item_sha256": "e1e43a8245833d6820e40c56c8d0e2534762674789ebb3be90a0172ce3a37c09",
      "at": "2026-10-12T20:27:06.174Z"
    },
    {
      "id": "ex-gr-plane-wave-regauge-to-tt",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 overstates [[lem-gr-plane-wave-gauge-decomposition]](c): its unique TT correction formula assumes X∈V0, but L1 states it for any symmetric amplitude. For X=diag(0,1,0,0), the formula leaves X unchanged, which is not trace-free.",
      "context_sha256": "034dbf409d871d0e05724f9ab56130ffc1098accefa6b18d93cf25946d32e41d",
      "item_sha256": "f401944e3fe932daa8671bdc0fc4a2b455cc49e00756c1c67dae5a04939947e1",
      "at": "2026-10-12T20:27:47.793Z"
    },
    {
      "id": "def-gr-linearized-wave-regime-and-detector-coupling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item reuses g(λ) for η+λh, but its cited flat-linearized-family definition sets g(λ)=η+λh+λ²q(λ). For allowed nonzero q these differ, making the Lorentzian condition and D's Einstein tensor inconsistent with the dependency.",
      "context_sha256": "70172bf82009e474883782b7b2efbb89a4f1771cbb5a6c09c67f8fedc742e15b",
      "item_sha256": "18c79431400c0da4bdde47c5676de6051c3609ffcdebc87073a602bcfb21808a",
      "at": "2026-10-12T20:27:38.339Z"
    },
    {
      "id": "ex-gr-sinusoidal-tt-plane-wave",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: with η=diag(−,+,+,+), □=η^{ab}∂a∂b makes [L1]’s signs wrong: □cos=+ω²cos−ω²cos, not the displayed −ω²cos+ω²cos. The zero survives, but that equality is false. [Tong](https://www.davidtong.org/teaching/general-relativity/grhtml/S5)",
      "context_sha256": "e1aa7e265e3bce868fafdda4c20f4865e0508ee68ceb2b16ec4369c0c43ce468",
      "item_sha256": "112b79900f2bfb06476de11fd8277631deabd7f3490c82505340845ec04106f4",
      "at": "2026-10-12T20:30:06.031Z"
    }
  ]
