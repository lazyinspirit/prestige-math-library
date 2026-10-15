# Step 5 adjudicate: initial, round 1, unit 26

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-26-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u26.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"26",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-rpm-h-first-class-constraint-family, 2:thm-rpm-h-local-hamilton-jacobi, 3:ex-rpm-h-two-shell-consistency-obstruction, 5:thm-rpm-h-killing-shell-first-integral, 6:thm-rpm-h-complete-integral-coordinates, 9:pthm-rpm-h-classical-orbit-evolution.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rpm-h-first-class-constraint-family",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition allows any symplectic manifold P, but its cited bracket convention is supplied only for cotangent phase spaces T*Q. The dependency does not license that broader scope; restrict P or define the bracket for general (P,ω).",
      "context_sha256": "47ed20f1d118a2d5aa3d485584e7423cb4a0911b124f60a0a8e2853b57dd62f2",
      "item_sha256": "37284d7cb8eb554d9415607bcef898cdeb3f4b85951a9fa33d498ff213116aaf",
      "at": "2026-10-14T20:06:50.281Z"
    },
    {
      "id": "thm-rpm-h-local-hamilton-jacobi",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The SI-unit claim lacks a premise that S₀ has action units. As stated, it adds arbitrary real-valued S₀ to an action integral, so the formula does not establish [S]=J·s. Require [S₀]=J·s or omit the unit claim.",
      "context_sha256": "806c5e5a2809884b5f432eb5ca354044b8c15ad82eabe20714e43da36096159d",
      "item_sha256": "e9cd864a0c5491813e4aa2003b4d8c0da13321707dcda2fe4c2b406ea9cbf5ef",
      "at": "2026-10-14T20:07:26.392Z"
    },
    {
      "id": "ex-rpm-h-two-shell-consistency-obstruction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims generic failure, but the proof shows nonclosure only for V(z)=λz, λ>0, at specific regular points. It defines no notion of genericity or proves a genericity result, so the title overstates the item.",
      "context_sha256": "ed9688ad47e6c20dba9b7ef96d4bd30b8bc476e4696c0cf7f0667bd2e6a01e46",
      "item_sha256": "aeb41a7e397900f9c676ed493b49191453dba3ef882aa6995e1a21e83a863a44",
      "at": "2026-10-14T20:06:48.412Z"
    },
    {
      "id": "thm-rpm-h-killing-shell-first-integral",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 invokes [F1], whose interface assumes an oriented, time-oriented Lorentzian four-manifold. The statement allows an arbitrary Lorentzian manifold, so that cited implication is unavailable under its hypotheses.",
      "context_sha256": "c45450dd1a9a287eb9c46d07653d8f5e5fc2c13ba41cea9e47338b4f59e4bf0d",
      "item_sha256": "c8a5f5272720480e01d053613508416ddc39047aa3003c541f53dca31c7416e4",
      "at": "2026-10-14T20:07:25.528Z"
    },
    {
      "id": "thm-rpm-h-complete-integral-coordinates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: H is quantified as an arbitrary smooth Hamiltonian, but the relativistic claim and proof step 1.2 identify it with the shell-reduced H=-cp₀ from [L2]. No hypothesis makes that identification, so the covariant-shell conclusion does not follow for the stated H.",
      "context_sha256": "9c561b3e7f88150a0ee835e451b89cc7ca3fca239966ec844c24b0c6cce7f508",
      "item_sha256": "920a6d2bc8d184569d219c57432f7acfcf117c18bd9b099f72cfc1589f75fac6",
      "at": "2026-10-14T20:07:39.675Z"
    },
    {
      "id": "pthm-rpm-h-classical-orbit-evolution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 misstates the supplied positive-spin-orbit interface as conditional on H10, which it does not include. This inaccurate dependency restatement is a defect.",
      "context_sha256": "0d0ca9367f4463c7f8ce49063c4bd432605a947d0003615a3d5bc2d2c2f08287",
      "item_sha256": "80c6c4d7437edc7683df637e47f0858c13519ed16c2868412d3ce5924c82f766",
      "at": "2026-10-14T20:07:31.488Z"
    }
  ]
