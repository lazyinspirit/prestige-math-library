# Step 5 adjudicate: initial, round 1, unit 31

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-31-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"31",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 11:post-cm15-impulse, 12:pthm-cm15-control-volume-balance, 12:pthm-cm15-impact-balance, 13:cex-cm15-momentum-alone-does-not-fix-the-impact, 13:ex-cm15-control-volume-check, 13:ex-cm15-impact-check, 13:ex-cm15-rocket-check, 17:pthm-cm15-central-scattering, 19:ex-cm15-rutherford-cutoff-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "post-cm15-impulse",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (i) requires a “motion ... of the associated first-order system,” but def-cm02-newtonian-flow defines such motions as globally C² and satisfying the force ODE on all of I. Velocities are then continuous at t* and J=0, contradicting the claimed nonzero-jump extension.",
      "context_sha256": "8b0e408394d4f5ae42b3e52b0d019275106bb660793183aabe80d2e2c97d23a7",
      "item_sha256": "550aeb1d6eb7c2b724ad6f08225a51e987ec16c2a5c6d289c022793739dcf09e",
      "at": "2026-10-12T19:53:24.496Z"
    },
    {
      "id": "pthm-cm15-control-volume-balance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title and statement call the model “smooth,” but the supplied C^k interface defines smooth as C∞. The hypotheses give only a C2 motion, C1 fields, and a continuous body force, so that regularity claim is unsupported.",
      "context_sha256": "daaa722122d5c4fd4333889a8e54909c31d5425c9e75bf984eddf7c864325999",
      "item_sha256": "d1f7eee1134fce1dce4f02814f1d3e425270e14c1169cbe75151a6f2dd2fe35e",
      "at": "2026-10-12T19:53:18.726Z"
    },
    {
      "id": "pthm-cm15-impact-balance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "post-cm15 defines the impulse trajectory as a def-cm02 “motion,” which is globally C²; its velocity is continuous, so the jump equations force J=0. The item silently weakens motion to piecewise C², leaving its nontrivial impact and extension claims unsupported.",
      "context_sha256": "fddf1f1dd141140fca02c25eb269d76d0daa6c98bb32d5aff709e2459afcaaa2",
      "item_sha256": "b1a0d884dd9c1e7b254949a82b9d183f9a2c3a103da02237bb061a87a12fc48c",
      "at": "2026-10-12T19:53:26.373Z"
    },
    {
      "id": "cex-cm15-momentum-alone-does-not-fix-the-impact",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] treats the impulse equations as sufficient for model admissibility, but post-cm15(i) also requires an actual piecewise-C² motion in Q satisfying off-impact dynamics and one-sided limits. The witness proves only algebraic jump compatibility, not admissible model runs.",
      "context_sha256": "07aef467715c6b9fa73a5cb28f9e5a7177cb6710522eecc5f00cbf90588e49ef",
      "item_sha256": "76d97f6cfdec55602696aeb3881005342a725b176b632cd7d5aed672562f8559",
      "at": "2026-10-12T19:53:58.445Z"
    },
    {
      "id": "ex-cm15-control-volume-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims “uniform expansion,” but the example assumes only α≠0. For α<0, the scale factor e^{αt} shrinks, so the model is a uniform contraction; the title overstates the stated scope.",
      "context_sha256": "3443051539907173f2e2e75c504375010813f9d5ed2b17fc057813f458cf46d3",
      "item_sha256": "8861f3a1561e114e85b7c8a8abbe43a0dc98178c7dcd610cea70c98339a04141",
      "at": "2026-10-12T19:54:18.443Z"
    },
    {
      "id": "ex-cm15-impact-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The frame remark says the centre of mass is at rest “throughout,” but the impact model only gives V⁺=V⁻ and leaves external forces unrestricted. V may accelerate before or after contact; these data establish zero centre-of-mass velocity only at the impact.",
      "context_sha256": "b6c774cefb84d2eb9dfdd4015ffeff77c3bb307873babdd323d85eb8cac73e64",
      "item_sha256": "79cdf0f16afda23bff4386c9b5436df3df268a6d44e4241cc74a6e240123602c",
      "at": "2026-10-12T19:53:02.976Z"
    },
    {
      "id": "ex-cm15-rocket-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal unit defect: m(t):=3-t kg subtracts a time from the dimensionless number 3, so it does not define a dimensionally valid mass map. Write m(t)=3 kg−(1 kg s⁻¹)t, or explicitly use dimensionless numerical time.",
      "context_sha256": "908501e67cc63187273316f94f7c9df3c8695114d21a95ffae6f743ff5926469",
      "item_sha256": "415e77ea1d00ba8b81a73314ad7f9d42fc4d0960c639a3d96ac7d4723b8fcbb4",
      "at": "2026-10-12T19:53:32.823Z"
    },
    {
      "id": "pthm-cm15-central-scattering",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause 3 takes polar data and limits θ(±∞) from r:I→R³, but I need not be all of R. Those quantities are undefined for allowed inputs; state them for the extension r̄.",
      "context_sha256": "139cbe3a8f24e9321006e1f3d64261c6b7c0f1ba04dd70f58d66126019c691ef",
      "item_sha256": "316569b0b89b8e7022c3292ec225d29962f789559af3ab2ad078c48070a9994d",
      "at": "2026-10-12T19:53:07.718Z"
    },
    {
      "id": "ex-cm15-rutherford-cutoff-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L2 attributes cot x ~ 1/x as x↓0 to the listed dependencies, but their supplied interfaces do not establish that limit, and the item gives no derivation. Step 3.2 relies on it for the claimed small-angle growth rate.",
      "context_sha256": "853ce60b5ed21b1917f429546c6fedfc2124fa6304f9703973d2d7f38fd441f3",
      "item_sha256": "180ee28c4700198216ad02d9abbef0f65aeb8dc9d5dd9be49b1a24029baad7ea",
      "at": "2026-10-12T19:53:23.483Z"
    }
  ]
