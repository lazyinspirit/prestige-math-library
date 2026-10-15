# Step 5 adjudicate: initial, round 1, unit 27

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-27-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"27",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-rpm-body-spin-size-bound, 0:lem-rpm-charge-multipole-remainder, 4:pthm-rpm-hidden-momentum, 5:ex-rpm-bmt-fw-and-g-two, 5:ex-rpm-spinless-td.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-rpm-body-spin-size-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item is classified as mathematics but depends on `def-sr-affine-minkowski-model` and `thm-sr-proper-time-and-observer-decomposition`; mathematical items may not depend on physics items.",
      "context_sha256": "d15a2c32abf1a33842cc8a3eff1174ec655bb52ccb77f76b0a988129bd15fbc4",
      "item_sha256": "738513667d7bce320a65f92b27fa3a95a8fb28dad836628b88c0e31345530019",
      "at": "2026-10-14T20:07:04.846Z"
    },
    {
      "id": "lem-rpm-charge-multipole-remainder",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 applies F2’s integral triangle inequality to the Riemann integral from the FTC. The supplied theorem covers only Lebesgue integrals of L¹ functions, so it does not license that step; no Riemann integral inequality is established.",
      "context_sha256": "8d1e221b512d6fd70c46fc4a64327246d65f5a898d1ebf1a195691df94f23134",
      "item_sha256": "4e43347ed16210d04f74e967b17c036e95496a43daa322301260e89fbbf851df",
      "at": "2026-10-14T20:07:18.545Z"
    },
    {
      "id": "pthm-rpm-hidden-momentum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In the TD branch, the statement and step 3.1 use m, but m is defined only in the Pirani branch. The TD formula therefore contains an undefined quantity; define m there (for example, m=-g(p,U)/c²) to make the deduction well-formed.",
      "context_sha256": "7e732ca969c8d7066249917d1c4625272f68ef8c41aa13dafc10fd2c09805c8b",
      "item_sha256": "03227e3b378a8b6d9e402f724978b90dc77745c0ffad1c576fc72421d786843d",
      "at": "2026-10-14T20:07:22.226Z"
    },
    {
      "id": "ex-rpm-bmt-fw-and-g-two",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[A1] misstates [[post-rpm-bmt-dipole-model]]: it adopts the BMT spin law and refers translation to an action postulate. The Lorentz-force equation follows only conditionally from [[pthm-rpm-external-charge-action-equivalence]] for stationary finite segments.",
      "context_sha256": "ca3cfb68ba998c1e657c02639e29ed51b1116d194a610542864190a9541dfe9f",
      "item_sha256": "c4694ac426639e8ce040514c7cb7bd247a3e5cac6826e01fe7096bc3727274b5",
      "at": "2026-10-14T20:08:28.925Z"
    },
    {
      "id": "ex-rpm-spinless-td",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 propagates the initial TD condition using [F1], but the cited invariant theorem assumes TD holds along the solution; its interface does not establish preservation from an initial TD state. Thus the zero-spin branch and subsequent deductions are unsupported.",
      "context_sha256": "d160fda7081a97e7897411e36208f557e01d307cee652bd9eeae384fe6e84830",
      "item_sha256": "ce5362fe1e7d34a4b8a502fdce3c58437d888284d827e858f4019cbab6c89229",
      "at": "2026-10-14T20:08:12.657Z"
    }
  ]
