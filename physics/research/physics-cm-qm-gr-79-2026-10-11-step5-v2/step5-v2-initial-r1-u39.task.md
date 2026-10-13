# Step 5 adjudicate: initial, round 1, unit 39

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-39-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u39.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"39",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact, 3:thm-nrqm-coulomb-essential-spectrum, 5:thm-nrqm-coulomb-angular-radial-unitary-reduction, 7:thm-nrqm-coulomb-kummer-recurrence-and-termination, 8:thm-nrqm-coulomb-jost-volterra-solution, 8:thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, 10:thm-nrqm-coulomb-atomic-dipole-matrix-element-domain.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates dominated convergence as identifying a.e. limits of L² sequences. The cited theorem requires a.e. convergence and a common integrable dominator, and concludes L¹ and integral convergence; the quotient definitions do not remove those conditions.",
      "context_sha256": "e441beee5aa5a24a1f3bfd32768af685a2718e0a9bf8bc9926a9d7986451d2f4",
      "item_sha256": "bc11602e12d9062586476f7064489ed29d4f336ba9a3e69a997a044c0a7fdebd",
      "at": "2026-10-12T20:00:35.094Z"
    },
    {
      "id": "thm-nrqm-coulomb-essential-spectrum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Part (b) says each negative eigenvalue is isolated in ℝ. No point of the ambient real line is isolated; the cited definition requires isolation in σ(C), which the proof establishes.",
      "context_sha256": "1c826eb35c26f46b4995ff07f7ee7cddf37173f48b9365d9dd254cb585c518d6",
      "item_sha256": "fb9c1c46944bb516fefb28e4f6507a76235e186091af514a34320050aabe5442",
      "at": "2026-10-12T20:00:51.784Z"
    },
    {
      "id": "thm-nrqm-coulomb-angular-radial-unitary-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) is ill-typed: the cited sphere ONB defines each Y_lm as an L² equivalence class, but the clause evaluates it pointwise and claims smoothness. The proof never specifies the smooth representative; identify it explicitly before defining ψ.",
      "context_sha256": "b6a78f3dd784ed4ae46279b193614f7218b44a64e9f4a921bf0bb1148e3d5cf3",
      "item_sha256": "ff980090407a7c09b22f8081965435fbe90d4a16f720bf9580722278ca945cfd",
      "at": "2026-10-12T20:01:07.240Z"
    },
    {
      "id": "thm-nrqm-coulomb-kummer-recurrence-and-termination",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 uses a binomial-coefficient ratio, but F4 cites only definitions. The supplied binomial definition says coefficients are subset counts and identifies the factorial formula as a separate theorem. That missing identity is needed to establish the Laguerre recurrence.",
      "context_sha256": "6332a22f210847abc44c0c9566bded47b9a7ea3b78c6e51e0e5fd0784ca43fbf",
      "item_sha256": "1c698371a71ac34410377afde0ca72b90c2db7637729cf96974eb907d0ea24fd",
      "at": "2026-10-12T20:01:30.666Z"
    },
    {
      "id": "thm-nrqm-coulomb-jost-volterra-solution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal parameter-scope mismatch: (b) defines v and f_l only for k∈K={Re k≥k_min, Im k≥0}, but (c)–(d) assert claims for every real k>0. For 0<k<k_min, f_l is undefined; the proof silently changes k_min.",
      "context_sha256": "049135dc870a022f7b87a4b50bb06a2d1965cf7c68d7e3c9c178c22137c3b4eb",
      "item_sha256": "a015ee137662b7c44b147af649bb7fb398a313a6cba9d14464916dc807971685",
      "at": "2026-10-12T20:02:55.318Z"
    },
    {
      "id": "thm-nrqm-coulomb-laguerre-bound-energy-exhaustion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "(d) puts every negative eigenspace in the closed span of transported regular solutions, and F3(c) says those eigenspaces span the negative spectral subspace. Step 2.2 puts those solutions in that subspace, so they are complete there; the explicit no-completeness-claim caveat is f",
      "context_sha256": "405c967d7c38e633e70796386e95a90a75be3f97f92463c360f0985f0984a65c",
      "item_sha256": "dda5f984c1aecd4ca55bc8313d83f2be023b47b704c1f416d0bb443b7ca553f1",
      "at": "2026-10-12T20:01:32.959Z"
    },
    {
      "id": "thm-nrqm-coulomb-atomic-dipole-matrix-element-domain",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: (d) defines ℓ=√(ℏ/(mω)) but assumes only ω>0 and leaves m,ℏ unrestricted and undeclared. The cited oscillator scaling result requires m,ω,ℏ>0; without those hypotheses ℓ and the asserted scaling need not be defined.",
      "context_sha256": "fa9d145b471202605b32a15bb92820bc1e049df82c74a1b842c883420619a83d",
      "item_sha256": "33a360a4be187179189588ad024d21c02904ad5bf08d6f05dd025473f64c26f7",
      "at": "2026-10-12T20:00:28.333Z"
    }
  ]
