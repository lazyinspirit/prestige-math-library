# Step 5 adjudicate: initial, round 1, unit 7

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-7-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"7",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-emg-classical-maxwell-stress-identity, 4:lem-emg-coupled-reduced-einstein-evolution, 7:prop-emg-local-sobolev-stability-continuation, 8:thm-emg-sourcefree-smooth-maximal-development.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-emg-classical-maxwell-stress-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The mathematics item imports def-emg-electrovacuum-cauchy-system as a mathematical premise and cites its physical-model conventions in F1 for the proof. Physical items cannot supply a mathematics item's justification.",
      "context_sha256": "c29efa89f94efea4b8619261f33272bd9584bf659cada26bbf96c049be64a088",
      "item_sha256": "ef34aa7e182f9cbd971701125d4377e336f1ee31ef1e64387e218bc341a79737",
      "at": "2026-10-17T07:51:16.645Z"
    },
    {
      "id": "lem-emg-coupled-reduced-einstein-evolution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 uses [L5] to choose K,K′ around an orthogonal harmonic-data jet, but [L5] covers only such data. It does not justify the solver application for arbitrary admissible U₀∈K, as claimed.",
      "context_sha256": "50bafab5fd6c40aba7e66c166b184a7095b49ccb9d364b0c0932c36564306b24",
      "item_sha256": "aa228d77435886e3aa9c30c8027174cc83d6adaad98238012a2f3d07b853911c",
      "at": "2026-10-17T07:52:01.738Z"
    },
    {
      "id": "prop-emg-local-sobolev-stability-continuation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 5.1 applies the generic symmetric-hyperbolic supplier to the EMG reduction, but step 1.1 only asserts the displayed form; it never verifies the concrete coefficients are smooth, symmetric, and have positive-definite A^0. The supplier interface requires that separate verifica",
      "context_sha256": "5ae6c4352d686b66ac220866513b1a6a368a00ca427eefd3217b8084bb61855c",
      "item_sha256": "21549291083c313bc011958a710f2c23532779aa8f98c9b9dca3bd61d5c20965",
      "at": "2026-10-17T07:52:04.595Z"
    },
    {
      "id": "thm-emg-sourcefree-smooth-maximal-development",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 misstates [L2]: its supplied interface assumes an existing smooth solution and concludes the constraints; the constraints are not its hypotheses. This is an inaccurate dependency restatement.",
      "context_sha256": "ab1836a6f855730e0f57357f9f720c71f043c1e0577f149c83b87e1b540be6e5",
      "item_sha256": "2e78ca6fb93b3bdff8da5f45f8747e373d06437d03fa253a09da39b24a3034f7",
      "at": "2026-10-17T07:51:36.341Z"
    }
  ]
