# Step 5 adjudicate: initial, round 1, unit 29

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-29-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u29.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"29",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:ex-cm13-determinant-tests-for-linear-canonical-maps, 16:def-cm13-two-form, 18:def-cm13-canonical-form, 20:def-cm13-canonical-map, 20:pthm-cm13-hamiltonian-field-integrates-the-model-equations, 22:pthm-cm13-dynamics-transport-under-canonical-maps, 22:pthm-cm13-liouville, 22:pthm-cm13-observable-evolution, 23:ex-cm13-fundamental-brackets-and-evolution-checks, 24:rem-cm13-locality-topology.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-cm13-determinant-tests-for-linear-canonical-maps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title and step 2.1 call det A=1 strictly weaker than canonicity in 4D, which requires proving canonical ⇒ det A=1. The cited proposition supplies only |det DC|=1; the shear shows only that det DC=1 does not imply canonicity.",
      "context_sha256": "0c6dd2fff790cd4bc72bb039c10df9dd46a43f51151145b54ea6492c01bb0238",
      "item_sha256": "39a1fd603a195b6d4f9a082f8c33b9ffccd39adbd255001b5484faf0c2243488",
      "at": "2026-10-12T19:51:43.212Z"
    },
    {
      "id": "def-cm13-two-form",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item never assumes Q is nonempty, but its configuration dependency permits Q=∅ (the Lagrangian interface handles that case). Then W=Q×R^{3N}=∅, contradicting the claim that W is a nonempty open phase domain.",
      "context_sha256": "5e813e43a801cbacde816c9decf83b8435d34fc784c5cfab1e76229dc784b06d",
      "item_sha256": "8cb3aacff229d279dce6326915b895510b2d65c4faa96b786d0f1d8163952d9e",
      "at": "2026-10-12T19:51:05.493Z"
    },
    {
      "id": "def-cm13-canonical-form",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In (a), for W₀⊂Ω×ℝʳ the dependency defines ω_X, not ω; ω|W₀ is therefore ill-typed unless the source form is specified. Also, general θ coordinates lack unit assignments, so the action dimension of each canonical pair is unstated.",
      "context_sha256": "4055c379277ab1220b41bb3faef09a61d0e456e4799ead1b8385e76f0fe40c09",
      "item_sha256": "6bd7d37f580415365ed00c959ebd2acd194805a13a311ea6893fbe78e9e44fb3",
      "at": "2026-10-12T19:49:58.931Z"
    },
    {
      "id": "def-cm13-canonical-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) relies on the flow and generating-function theorems, but neither is in deps, and both depend on this definition. Their claims cannot supply its examples without creating circular dependencies.",
      "context_sha256": "578a0b1e1bb82185a74c50e5cbf541966bb2841c7680081e06ba49a41b98a22a",
      "item_sha256": "baad6991cb561d42424fdbce5560947fae1be256bc34115797f30d9064c13573",
      "at": "2026-10-12T19:50:39.394Z"
    },
    {
      "id": "pthm-cm13-hamiltonian-field-integrates-the-model-equations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates pthm-cm12-hamilton-equivalence: motions satisfy Hamilton’s equations of H only on the d≡0 potential branch. Its unqualified restatement that model motions do so is false with residual forces, violating the dependency-restatement check.",
      "context_sha256": "c31af3f3c8c3a086fd78d96b15ee709eabf79251204d4905c494795eeb38ce4a",
      "item_sha256": "933dbd367fd73d34f06c1f5af5cd4b2ab26c791717959ffae610e8e7e81db1bd",
      "at": "2026-10-12T19:51:00.609Z"
    },
    {
      "id": "pthm-cm13-dynamics-transport-under-canonical-maps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal gap: clause 4 claims first- and second-kind generating maps satisfy the C² canonical-map hypotheses, but pthm-cm13-generating-functions is absent from deps. Cited F3 links Hamiltonian fields to model motions; it proves no such map property.",
      "context_sha256": "1a77f40c9add0e440b233e77f104f2a3b65aa5415635be71e1541c6406a65a2d",
      "item_sha256": "107d27895866a34bc1e1e9c033640b5ce7c3f14b133fdb37b3c24d36d1c55ebe",
      "at": "2026-10-12T19:56:37.104Z"
    },
    {
      "id": "pthm-cm13-liouville",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.2 misuses [F1]: it gives |det DΦ_t|=1 for Hamiltonian time maps, not arbitrary chart transitions Θ. The proof does not establish Θ is canonical before applying the determinant test.",
      "context_sha256": "8593887bcd3ba1a7cedd226b9e9860d115f24d9a478085b0bfc4eb7ac6b88d9c",
      "item_sha256": "0d13041573396a98e5a43037a7d649bdedb6a036affd6a21cf4ad45ef93eac4a",
      "at": "2026-10-12T19:51:26.025Z"
    },
    {
      "id": "pthm-cm13-observable-evolution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: the motion equivalence in clause 1 and [F2] omits d≡0. The cited integrator theorem licenses that equivalence only when residual forces vanish; with d≠0, model motions include the extra force and need not solve the Hamiltonian system.",
      "context_sha256": "b29152b848e656c49ce02e4227842f2c3ba85a4284f32a214f63fdb1785302e1",
      "item_sha256": "cd8986c9eb3fe269de4348d76e12dc50c47997e9ea2e682916265fcbdea11938",
      "at": "2026-10-12T19:50:29.249Z"
    },
    {
      "id": "ex-cm13-fundamental-brackets-and-evolution-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: Tong §§4.3–4.4, pp. 93–101 (PDF 99–107), cover the bracket/evolution material and canonical transformations, not the cited oscillator computations; the simple harmonic oscillator is §4.5.1, p.105. The source annotation misattributes support.",
      "context_sha256": "4779140d7f541ee79c5bd59208358b5fb3ff408712568d9defadfda33bee8136",
      "item_sha256": "940f57edc71b18e90dfce6612fb7209cde6c57512b1a2c517ce8e3ecfbb203eb",
      "at": "2026-10-12T19:52:04.031Z"
    },
    {
      "id": "rem-cm13-locality-topology",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claim that all presentation phase domains are open in R^{6N} is false: the cited interfaces also allow generalized-coordinate domains Ω×R^r for r<3N, of dimension 2r.",
      "context_sha256": "c71c379f0e9cdbefef91775b0bbae0c53dd7b79916297ea7ccbf2fec64277b6e",
      "item_sha256": "785b9365ff7428b3b4474acbde4715b7b1f206a2497b8bbf20a41d64a1d85c58",
      "at": "2026-10-12T19:51:45.614Z"
    }
  ]
