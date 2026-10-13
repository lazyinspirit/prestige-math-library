# Step 5 adjudicate: repeat, round 1, unit 29

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-29-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u29.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"29",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:ex-cm13-determinant-tests-for-linear-canonical-maps, 20:pthm-cm13-hamiltonian-field-integrates-the-model-equations, 22:pthm-cm13-dynamics-transport-under-canonical-maps, 24:rem-cm13-locality-topology.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-cm13-determinant-tests-for-linear-canonical-maps",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 drops the diffeomorphism hypothesis from the canonical-transformation interface. DCᵀJDC=J guarantees two-form preservation but allows noninjective maps, so the asserted equivalence for arbitrary C¹ maps is not licensed.",
      "context_sha256": "78f251f1e238c42a8760515864ef33d41b4f7ef0485dc40f19bd6ca586c03c08",
      "item_sha256": "f714e3947c028644ee372dc60288599fd5ae925c21c51278ff7673cd57f3435f",
      "at": "2026-10-13T09:28:14.351Z"
    },
    {
      "id": "pthm-cm13-hamiltonian-field-integrates-the-model-equations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims equivalence in every chart. With Q=R^3, m=1, U=x_2, d=0 and X(q)=(q,0,0), constant reduced Hamiltonian integral curves violate Newton's equation x''=(0,-1,0). Clause 2 establishes only the declared Lagrange equations.",
      "context_sha256": "8e2d78e0ef8d23f2ffe9635956478e2bfbd79906a1e8db81e2846ae2d6e4be12",
      "item_sha256": "b3426974051d441bd9601dc6bacf414816d2b4a6790452c2478c3e180950038d",
      "at": "2026-10-13T09:35:24.262Z"
    },
    {
      "id": "pthm-cm13-dynamics-transport-under-canonical-maps",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 incorrectly identifies solutions for arbitrary C² H with model motions when d=0. The cited theorem licenses this only for the mechanical branch Hamiltonian. For H=0, stationary (x,p≠0) solves the system but violates p=Mx′.",
      "context_sha256": "0ea808d4335ab86dee7794ef2e1c2e6cf7ca9787ac2661fb0a80b2bb6552d935",
      "item_sha256": "514da629c543b0c492a12019851e93c456d8ebe4d58b0764dd9e0eeb786e451e",
      "at": "2026-10-13T09:35:25.586Z"
    },
    {
      "id": "rem-cm13-locality-topology",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The blanket claim that form-level statements are choice-free drops a supplied hypothesis: the cylinder-shift proposition explicitly assumes AC_ω for its torus construction, yet its form and topology conclusions are restated without that qualification.",
      "context_sha256": "e793c3a06180792eb603911b49a1c47ffc2ab3dffb7bf443a37d39f635f8eaea",
      "item_sha256": "ce3bb88d6d80fe0139d2f54dbac1fbdf14cb2695dda3991d14cc75f804fcf00d",
      "at": "2026-10-13T09:37:32.741Z"
    }
  ]
