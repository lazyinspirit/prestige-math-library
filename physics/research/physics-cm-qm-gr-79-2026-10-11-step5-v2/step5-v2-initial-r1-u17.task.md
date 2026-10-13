# Step 5 adjudicate: initial, round 1, unit 17

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-17-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u17.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"17",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:post-cm01-worldlines, 6:def-cm01-configuration, 6:def-cm01-velocity-acceleration, 6:ex-cm01-worldline-parameter-condition, 8:rem-cm01-model-limit, 8:ex-cm01-galilean-boost-of-a-free-motion, 8:ex-cm01-rotating-basis-of-a-free-motion.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "post-cm01-worldlines",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal prerequisite cycle: this postulate lists pthm-cm01-galilean-kinematics as a dependency, while that theorem’s supplied interface assumes this postulate’s worldline assumptions. The theorem is downstream, not a valid prerequisite.",
      "context_sha256": "d68ddca8c523a999b1070d5f31daeccece627e7a4064d1d9f2f46ab8581a1e71",
      "item_sha256": "722bba087640cc533cc07f7ba650af41ee9e2d06a4b82238d36d2a3bbd9a0c94",
      "at": "2026-10-12T19:36:48.513Z"
    },
    {
      "id": "def-cm01-configuration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) misstates [[def-cm-constrained-configuration-and-mass-metric]]: the metric pulls back the mass-weighted product ⟨u,Mv⟩, not the ordinary Euclidean inner product. They differ when particle masses are unequal.",
      "context_sha256": "a334a72e7cdfda2f2bea50ac3613c08afa098209902aea34ba6304c63a93b920",
      "item_sha256": "2eb81b4f42813e934f0208972d590f160b0226823c07706b20feea5c8a57caf7",
      "at": "2026-10-12T19:37:06.788Z"
    },
    {
      "id": "def-cm01-velocity-acceleration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The text promises that a theorem proving the model-level transformation law and zero-acceleration invariance appears “later on this page,” but the supplied item ends after Remarks and contains no such theorem. This is a false page promise.",
      "context_sha256": "fa09a396e71c954c0df795399f7b58c709be6781011e91488d8b29852d7ce33e",
      "item_sha256": "79129edbd015bf4b790008ad6b86c1cfa2057df7d041eaa1c6824def70f3ba4e",
      "at": "2026-10-12T19:36:31.283Z"
    },
    {
      "id": "ex-cm01-worldline-parameter-condition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the worldline postulate assigns curves to particle labels and requires the frame-time condition; it does not make every curve satisfying that condition a model worldline. Step 1.1 claims γ is one without assigning it a particle label.",
      "context_sha256": "557a0ae6b32f4aac58736bd8a527badd460d0bad68ac73c16abd0d0778deed1c",
      "item_sha256": "0f8bc33dae5ad2c290963903684de564eeb5313a534985230a5023979833dbb2",
      "at": "2026-10-12T19:38:02.057Z"
    },
    {
      "id": "rem-cm01-model-limit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark says no energy is specified for a concrete system, but def-cm-constrained-configuration-and-mass-metric explicitly defines kinetic energy T_q(v)=1/2 G_q(v,v). It must distinguish this from a conserved or total energy.",
      "context_sha256": "74df58497f4750aba832925cb7011254b3ea77ecf1164f1fa8f9d648606fa89e",
      "item_sha256": "e2187788fda554b8999b960f695686981d39f5fe0bff14cc0040f4e26c66e621",
      "at": "2026-10-12T19:37:27.016Z"
    },
    {
      "id": "ex-cm01-galilean-boost-of-a-free-motion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 reuses a for both translation (0,3,0) and acceleration 0: with the established translation parameter, Ra=(0,3,0), not η''=0. The displayed acceleration-law check is therefore false or undefined.",
      "context_sha256": "883c4abd2de1aafb04861b1e6e0c9ab2ae2c2ad046908c4717ce0ebd32fccc66",
      "item_sha256": "e5bcb5e955fce75c3fc70c4dd0a5611adae467d8e87ac4167c26e1a2300f9e13",
      "at": "2026-10-12T19:36:31.671Z"
    },
    {
      "id": "ex-cm01-rotating-basis-of-a-free-motion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal units omission: omega is only specified as positive, yet omega s is the rotation angle while s is measured in seconds. State [omega]=tau^-1 (s^-1, radians dimensionless); otherwise the rotation and acceleration terms are dimensionally untyped.",
      "context_sha256": "daa1874e43a38d59defe76ef92238bfd31cb2e68303357b8cd0526a2afff2c2a",
      "item_sha256": "2d4509c74843ba77943eee6aea4931d37b04fa4d6d4032d1d4cb7e05e991252e",
      "at": "2026-10-12T19:36:40.519Z"
    }
  ]
