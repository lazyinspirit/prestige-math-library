# Step 5 adjudicate: initial, round 1, unit 40

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-40-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"40",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:thm-nrqm-controlled-dynamics-cook-domain-criterion, 0:thm-nrqm-controlled-dynamics-liouville-turning-point-transformation, 1:thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining, 1:thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, 1:thm-nrqm-controlled-dynamics-wkb-explicit-error, 2:thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients, 3:thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness, 4:ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation, 7:thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues, 10:thm-nrqm-controlled-dynamics-controlled-born-amplitude-error, 10:thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-nrqm-controlled-dynamics-cook-domain-criterion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates the supplied resolvent interface: it gives nonreal resolvent existence and bounds, but not R_z^*=R_{\\bar z} or commuting resolvent identities. Step 1.1 relies on these imported facts without deriving them.",
      "context_sha256": "438ac58599de907fffa2c3fa5d95b303175704ad3242935b0193f6936b1f4fd7",
      "item_sha256": "854341421103318e32783103db04713008571ca3fa014f12bd9ae2f553c115d1",
      "at": "2026-10-12T20:01:54.857Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-liouville-turning-point-transformation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1’s integral formula for b and F2’s differentiation of the defining integral both use the fundamental theorem of calculus. No supplied dependency states it, and it is not proved locally; the derivative definition, chain rule, and dominated convergence do not license those steps.",
      "context_sha256": "89579f28445aec5d387bcd1e3975458e1d25a5b89b170eb0582b971ab08577de",
      "item_sha256": "7171e236c884a3db97fa7b4f441a6247eadddc218a128018e45a2254596ca8d1",
      "at": "2026-10-12T20:03:00.228Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement uses H for both the Hilbert space and the interacting self-adjoint operator, despite claiming to adopt the prerequisite’s notation separating them. The hypotheses and operators “on H” are not well-typed as written.",
      "context_sha256": "85da6551ad078523747bb27b15367f70d9a8114492ae5bbecd494df29dc2acb9",
      "item_sha256": "99d7cdae4a30763f3a78e101c4716b73aafef01276ba1b160811bceb8c30ed91",
      "at": "2026-10-12T20:02:34.033Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 selects the “least eligible reciprocal-integer value,” but once the error bound holds for all sufficiently small 1/m, those eligible values have no least positive member. The stated selection does not construct the sequence needed for the a.e. limit.",
      "context_sha256": "89594df86ca3869aae5f9e0fbbf77fa773ef494241727a7f3bad931a50fae0ad",
      "item_sha256": "9b793151975726ec1f9ae6bcb9f8ef529cc69c6748d4334699bcce4073a5cdef",
      "at": "2026-10-12T20:01:46.086Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-wkb-explicit-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 attributes integral Gronwall to `def-derivative` and `def-continuity-real`, whose interfaces do not state or prove it. Step 1.1 cites F2, leaving that dependency claim unsupported.",
      "context_sha256": "c4587c49fdf7e6e36d0678ae55dbe48d0363906e22726cecff9fa57c5e6bbf9e",
      "item_sha256": "cc9930d33b55a1493a7e4e43b818535c5c5d6a3d20871e4b51030cb8fdebb87b",
      "at": "2026-10-12T20:01:33.794Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.2 attributes B's stationary-phase remainder to an estimate “proved in [F1],” but F1's interface gives only A's representation and asymptotics, not that localized estimate or error bounds for B's amplitudes. The stated O(Z^-7/4) and O(Z^-5/4) errors lack the cited premise.",
      "context_sha256": "bfc4f65b6d03188beecb2c30461394465fc679ca59586f17073edf7d48491dda",
      "item_sha256": "0feed411e1c5e58b1eb88de11e292fee666be2698b80a27e76e6a746820bcf93",
      "at": "2026-10-12T20:03:45.477Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof indexes J_n=[1/n,n] from n=0 by library convention, so J_0 is undefined. Step 1.2 also uses radius 1/n at n=0. The spectral exhaustions and sequence construction are invalid as written.",
      "context_sha256": "2589967d8e475197e70a95db20fe18613bb44eedff28c9dfbd059a3b8ce6053d",
      "item_sha256": "3d8d80494fcfdeea61b71023793a1fd6e2faf22668897f73660d0b0079049ccb",
      "at": "2026-10-12T20:07:24.788Z"
    },
    {
      "id": "ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example never establishes that L²((1,2)), hence H, is complete. The cited Hilbert-space item is only a definition, and the Lp quotient item gives no completeness result, so the PVM and perturbation-theorem Hilbert-space hypotheses are unverified.",
      "context_sha256": "155fcc0e4f703d5d249197181a0ae4d731c261d652bbb8bd219cfc1819e3498f",
      "item_sha256": "6bf06117e878ecc85d29845c85d53c284588aa64d0754f68fa8ffb0a53124eef",
      "at": "2026-10-12T20:03:43.609Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the cited interface: clause (c) gives conjugation identities, not the associated-polynomial formula. The formula appears in the supplier’s defining setup, so this dependency restatement is inaccurate.",
      "context_sha256": "3b070eb44cc0476d5c854cf294e0cecadaff5abb5935f8d08101f76800408d5d",
      "item_sha256": "cf3b0040dc282d1ad3a36e5bb3904dcf6b9db8e7e0815e492e1cf8bcee7bd2ae",
      "at": "2026-10-12T20:02:38.084Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-controlled-born-amplitude-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 identifies f_k with L_Ω(u) via the stationary outgoing integral-and-flux item, a physics result. Mathematical items cannot use physics items as prerequisites, so this dependency does not justify the amplitude estimate.",
      "context_sha256": "8ed4661dd2579d098e01535347aecc79d199ad7f39a360e301ccd3f46c427870",
      "item_sha256": "7189fe5d39d1321fd0d7d42396b606d18b22e7c31d8d62295a7f8f16a89b019b",
      "at": "2026-10-12T20:02:42.739Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its cited interfaces: they construct Ψ via the invertible Lippmann–Schwinger equation, but do not assert uniqueness among all outgoing PDE solutions. Step 1.1 relies on that stronger uniqueness to infer rotational symmetry.",
      "context_sha256": "4735274bf2bfb6da689c3e0c86ec5804f57c7c55ae60f092a67be885dda6f37c",
      "item_sha256": "fbad59c556d27f96340ae8805012843b2bd75b7a9bfc4922d5473bb9c86834b5",
      "at": "2026-10-12T20:04:13.770Z"
    }
  ]
