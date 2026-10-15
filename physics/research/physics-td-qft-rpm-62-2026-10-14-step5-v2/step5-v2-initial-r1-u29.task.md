# Step 5 adjudicate: initial, round 1, unit 29

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-29-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u29.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"29",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-rpm-relativistic-coulomb-phase-system, 0:lem-rpm-schwarzschild-null-geodesic-reduction, 0:pthm-rpm-schwarzschild-circular-stability, 0:pthm-rpm-static-clock-redshift, 2:ex-rpm-schwarzschild-null-critical-impact.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rpm-relativistic-coulomb-phase-system",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited IVP interface defines systems, IVPs, and interval solutions, but says nothing about maximal solutions or extensions. The claim that maximality is in its sense is unsupported by the supplied dependency interface.",
      "context_sha256": "f4cee9064af8d2ee5c95fb6ea16c83fdf5aeb01e8cf9bcf852f2f88257d1fc37",
      "item_sha256": "ab310abc1ec1c25a4f2851dc01c52144dea288c59645eb1d40b6d33c4f982560",
      "at": "2026-10-14T20:08:30.853Z"
    },
    {
      "id": "lem-rpm-schwarzschild-null-geodesic-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The stated orientation choice is not available for all such geodesics: reversing the affine parameter flips E and L together, so L/E is invariant. Counter-rotating equatorial null geodesics have L/E<0 and cannot satisfy E>0, L≥0 in the fixed φ convention; the statement overclaims",
      "context_sha256": "8ca8f019bac5e40533f158536900df9bcc17239fad58894868d3eae2a91a5162",
      "item_sha256": "084d5124059ecfd28db5f9e50325acbef568360e3127cfef87ebe74dca82dc11",
      "at": "2026-10-14T20:08:30.869Z"
    },
    {
      "id": "pthm-rpm-schwarzschild-circular-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 is dimensionally ill-typed: r−r_c and η are lengths, while w is a speed, so the Euclidean phase-space ε mixes units. The proof compares η to ε and energy (speed²) to ε² without specifying coordinate scales or nondimensionalization.",
      "context_sha256": "a8f76e4a013358fa9d27cbbf45b7d909c2ae8c84e2d63156732ec8d8dad2db13",
      "item_sha256": "1a396571f8348a6c3e259236f6ffe0a879935100dd91f5312e6bb5e46b4013f0",
      "at": "2026-10-14T20:08:22.374Z"
    },
    {
      "id": "pthm-rpm-static-clock-redshift",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 overstates the cited free-fall postulate: it applies to ideal freely falling test bodies under specified test-field, size, and self-field conditions. The static observers here are constrained and explicitly not free-falling, so this dependency restatement is inaccurate.",
      "context_sha256": "5dd5d7c3a0322c879b2436cc5f1118a5db016a2c3efa99532ac607f95e2f5c6d",
      "item_sha256": "a0165748ea30933ce87b17d659ed464d8b647bae54a2a0df4735f5bba7b90fa7",
      "at": "2026-10-14T20:08:56.794Z"
    },
    {
      "id": "ex-rpm-schwarzschild-null-critical-impact",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: no unit convention or dimensions are assigned to s, r, or b. The physical scale of the claimed Schwarzschild ray example is therefore unspecified; state these as lengths and give the unit convention.",
      "context_sha256": "3a2575c0030ca08f285efc72567303b52ad4ccbf7910cef60cf1f4bb4eb7fb43",
      "item_sha256": "e69ceb62a5c114169a8e9a9225ad4ff17e67e4f72e0f72da6906cff5fa7672ae",
      "at": "2026-10-14T20:09:26.779Z"
    }
  ]
