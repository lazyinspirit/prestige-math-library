# Step 5 adjudicate: initial, round 1, unit 21

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-21-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u21.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"21",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:def-td-stable-tempered-continuum-preparation, 6:ex-td-forbidden-pair-beta-zero, 7:post-td-grand-variational-phase-uniqueness, 7:pthm-td-controlled-thermodynamic-ensemble-duality, 8:ex-td-nonunique-variational-phases, 9:ex-td-volume-sized-external-field, 10:pthm-td-interacting-three-ensemble-local-limit.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-td-stable-tempered-continuum-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The dependency’s partition uses the numerical potential \\hatφ in e^{-βHφ}, but this item gives β units of J⁻¹ and never maps it to the dimensionless inverse temperature E₀β. The imported Boltzmann factor is ill-typed; define and pass E₀/(k_BT).",
      "context_sha256": "b82df8e8ed1eceac38b88bb8078dd7c6d84d454de3f9a49e9de49cf66d47b10d",
      "item_sha256": "adb453b350c8fcafb2b0510ac3ee4fb6bb85665b437f5cabfa06a7e57ace37f5",
      "at": "2026-10-14T20:05:26.184Z"
    },
    {
      "id": "ex-td-forbidden-pair-beta-zero",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example leaves L and a dimensionally ambiguous, though its dependency defines coordinates as dimensionless and physical length as ℓ₀x. If a is a physical radius, |x₁−x₂|<a and 2aL−a² are dimensionally inconsistent. Specify a as a dimensionless coordinate radius or convert it ",
      "context_sha256": "47494882a92f0ce47a6b00cb339c0c09e507c08e1d66296842011d422b478b70",
      "item_sha256": "bd1a4d5af845ae028152cfefb98f69b35770c0619fe48931715bf439ee183be0",
      "at": "2026-10-14T20:04:41.792Z"
    },
    {
      "id": "post-td-grand-variational-phase-uniqueness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The opening fixes T>0 and β=(kBT)⁻¹, hence β>0, but the postulate also admits a β=0 branch. As written, that branch cannot satisfy the stated setup.",
      "context_sha256": "791ee5f6f1a47b55fc73d5b895753849bc55a09434d4a6509b35ee1fbb418f92",
      "item_sha256": "51e8dd0427667dc02e895adf188afd5fdd9cb955fae92a1a45548989c4f9e991",
      "at": "2026-10-14T20:05:01.361Z"
    },
    {
      "id": "pthm-td-controlled-thermodynamic-ensemble-duality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited duality defines pressure only for free cubes: P=lim_{L→∞}L^{-d}log Ξ_L. This item instead uses an unspecified Z(V,N) at generic volume V, while the sampling postulate permits free or periodic regions. The cited result does not establish that limit or boundary equivalenc",
      "context_sha256": "a5224d96f76b2d4dfe8e04a2d2d3d49841411401c2833c2387189d1391ccb459",
      "item_sha256": "a654dc8e20c7d91f912f7af3bc80e36336c8484c41e7a198f270a7d079fbe408",
      "at": "2026-10-14T20:04:18.848Z"
    },
    {
      "id": "ex-td-nonunique-variational-phases",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 applies [F1] beyond its interface: F1's singleton condition is on finite-intensity stationary laws, while this toy minimizes over m∈[-1,1]. The toy has two minima but does not show F1's continuum premise fails.",
      "context_sha256": "2ead2a08bc25a74004ff93cfb359ca2799c42b853f09536a9a27a01030d35653",
      "item_sha256": "10510f4f4837ebc5f17e48de0313e56ad0b5cc9343e50e299df2ac9507c103a7",
      "at": "2026-10-14T20:04:27.669Z"
    },
    {
      "id": "ex-td-volume-sized-external-field",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited preparation permits bounded regions with V=0, but the example claims a per-volume log-partition rate there, which is undefined. Restrict the example to 0<V<∞.",
      "context_sha256": "e8ec47bf8cdae22c04b1aa50332e06a56143c2de4973156057ae356bcb71d8f2",
      "item_sha256": "c63be204142c8874ddc659eceebb608be0d31a85b8ffbdea0b6f68dfd3f77997",
      "at": "2026-10-14T20:04:33.922Z"
    },
    {
      "id": "pthm-td-interacting-three-ensemble-local-limit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1]’s supplied interface guarantees an eventually defined shell and empirical-field convergence, but not that the canonical probability of the selected shell tends to one. Step 2.1 needs that extra claim to bound shell relative entropy and apply [L4], so the local-limit proof is",
      "context_sha256": "d3a95ef6c25e9ad5db20957233a40bdc292615469cb2bc30854638475822ca1f",
      "item_sha256": "08e33610e30e1713781f0179fd14bf3eb901da2601734a5821e24e7117db1dec",
      "at": "2026-10-14T20:05:21.067Z"
    }
  ]
