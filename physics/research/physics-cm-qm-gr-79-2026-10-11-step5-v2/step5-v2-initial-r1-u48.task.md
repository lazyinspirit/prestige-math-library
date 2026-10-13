# Step 5 adjudicate: initial, round 1, unit 48

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-48-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u48.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"48",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:ex-nrqm-kinematics-plane-wave-generalized-eigenfunction, 3:lem-nrqm-kinematics-componentwise-position-and-momentum, 8:texp-nrqm-kinematics-dirichlet-momentum-warning, 10:ex-nrqm-kinematics-gaussian-position-momentum-packet, 11:rem-nrqm-kinematics-examples-scope-limits, 12:rem-nrqm-kinematics-scope-and-empirical-status.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-nrqm-kinematics-plane-wave-generalized-eigenfunction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The delta-normalization remark fails for the stated general d: with k,x∈R^d, (k−k')x is ill-typed; the d-dimensional formula uses a dot product and (2π)^dδ^(d)(k−k').",
      "context_sha256": "40d3ae77bde2e6d430fb65d403c29de0143d078dec4e2521197de7f8454992af",
      "item_sha256": "c42f84bbf4e1e84e79bc5a59b7e6d050729779028b73c9a1583d8b240e9cc5d6",
      "at": "2026-10-12T20:08:51.682Z"
    },
    {
      "id": "lem-nrqm-kinematics-componentwise-position-and-momentum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Facts [F2] misstates the cited interface: clause (c)'s tensor-amplification identities use Θ from H⊗ℂʳ, not Ψ₀ from ⊕ₗH. The asserted Ψ₀-to-Mₐ⊗I and Tₐ⊗I restatement is ill-typed and unsupported.",
      "context_sha256": "330feadc2c70f90ed35e3d76b9aed0c67add05a442d63668d2c4e8c462b641cb",
      "item_sha256": "351bd0a3443373d16bbbc682abedba31e448bb5670cadbc0c52396519486224b",
      "at": "2026-10-12T20:08:37.985Z"
    },
    {
      "id": "texp-nrqm-kinematics-dirichlet-momentum-warning",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 attributes the essential claim that C_c^∞(0,L) is dense in L² to the supplied Sobolev definition and integration-by-parts lemma, but neither interface establishes it. Step 1.1 therefore does not show T is densely defined, leaving the adjoint and observability conclusions unsup",
      "context_sha256": "5d740f5a970f0abdbd7f71784e969c9c39c033de0fc763cfa5d6008a766e7e41",
      "item_sha256": "5bf404b40da6dec789492c30e947bb45aeb4c3d4fb269ce20ca7f496f7bd13ae",
      "at": "2026-10-12T20:11:09.060Z"
    },
    {
      "id": "ex-nrqm-kinematics-gaussian-position-momentum-packet",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] claims the integral formula for Uφ for every φ∈L¹∩L², but the cited momentum interfaces give it only for Schwartz functions. That broader claim is unsupported; narrow it to Schwartz, which suffices here.",
      "context_sha256": "40ad391ab02b69a802ef25a1ec310bf925657b6d8fc69748bd570a9ab0d2e21e",
      "item_sha256": "cdbfaa1dcdd65510888bf8212605e9baac8934c6e1e5b24abbd03140c46e7e55",
      "at": "2026-10-12T20:08:33.032Z"
    },
    {
      "id": "rem-nrqm-kinematics-examples-scope-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The bounded-CCR restatement contradicts its supplied dependency statement: that interface says bounded A,B exist with AB−BA=iℏI, while this remark says no such pair exists.",
      "context_sha256": "e338f0714305f1dc8ac963c27ccfdc8b4d836897d44316c2281e812371fc8cff",
      "item_sha256": "f88f32fc762a5318a186c465b2ec5d39113f584d18d05703ac586e1584c47cf2",
      "at": "2026-10-12T20:08:22.796Z"
    },
    {
      "id": "rem-nrqm-kinematics-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The parameter paragraph misstates P6: its supplied interface assigns a declared spin representation and bosonic or fermionic sectors, but not species mass or couplings with empirical uncertainty. P5 declares the mass parameter m>0.",
      "context_sha256": "5dd78a110c1f04a344c8b9e1fcb37c0b0e69b9b9f5f06472cf1719710d5104dc",
      "item_sha256": "baf9aa53a4d3504b20ddb9babec8005fa956cada018ece2993d1531e8b9660eb",
      "at": "2026-10-12T20:08:20.765Z"
    }
  ]
