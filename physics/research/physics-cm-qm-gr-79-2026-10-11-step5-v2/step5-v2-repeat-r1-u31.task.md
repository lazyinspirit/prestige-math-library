# Step 5 adjudicate: repeat, round 1, unit 31

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-31-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u31.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"31",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 11:post-cm15-impulse, 13:ex-cm15-impact-check, 17:pthm-cm15-central-scattering, 18:cex-cm15-deflection-need-not-decrease.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "post-cm15-impulse",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Status falsely rules out matter exchange at constant mass. Clause (iii) permits m=1, r_in=r_out=1, F=0, w_in=a≠0, w_out=0 and v(t)=ta: both adopted balances hold, with constant mass but nonzero matter exchange and momentum flux.",
      "context_sha256": "7bda728c55df09edf512bd9e2b7f5050b2249607e0f7256424c042bdc757c393",
      "item_sha256": "e878a0564ad4baf3a7f0ad24fa1f0e29b4e0a47866628b27904d83d469ede1d0",
      "at": "2026-10-13T09:34:34.637Z"
    },
    {
      "id": "ex-cm15-impact-check",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Units remark misstates def-cm01-units: the mass-dimension generator is μ, while 𝖬 denotes the mass operator. No dimension symbol 𝖬 is defined, so the displayed dimension identities for P, J and K are ill-typed.",
      "context_sha256": "453f0fdd4f42dadc6ed2a9600f3eecd5bdf2f233a4431c60bc44d707a8b58ce7",
      "item_sha256": "12f9f9056793e499d784d4420a520facf0135c50b311661336b2626d6eab0997",
      "at": "2026-10-13T09:28:34.577Z"
    },
    {
      "id": "pthm-cm15-central-scattering",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title asserts deflection π−2Δ without qualification. H1–H2 permit Δ>π/2, making this negative, whereas the defined scattering angle is arccos(cos(π−2Δ))≥0. The proof establishes the title's formula only when 0<Δ<π/2.",
      "context_sha256": "fcb66613ed3ca944550d85301071c0c97a214cec37eb5183d55943b9e4db2797",
      "item_sha256": "b1ca4e9ac0590990cd56ea6b1fa3d06d294520bf43392ac432abf5037293268b",
      "at": "2026-10-13T09:36:37.676Z"
    },
    {
      "id": "cex-cm15-deflection-need-not-decrease",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L3] asserts arcsin differentiability and its derivative, but its cited interfaces provide no inverse-derivative result. The inverse definition supplies continuity only, and no local derivation is given; step 3.1's increasing-branch claim is therefore unproved.",
      "context_sha256": "746ecff35b5e99fb1acc86d533a1f1b400ac091d9ee3d3198e8452b3aeeb1982",
      "item_sha256": "f5539e8123ab635f6e1a1bd8d04031e5f4117b060a8830af487c478df7242f8d",
      "at": "2026-10-13T09:22:53.377Z"
    }
  ]
