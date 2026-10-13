# Step 5 adjudicate: initial, round 1, unit 25

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-25-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u25.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"25",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 14:def-cm09-coupled-quadratic-model, 16:ex-cm09-cubic-potential-error-check, 16:ex-cm09-double-pendulum-linear-modes, 18:ex-cm09-unstable-quadratic-mode, 19:ex-cm09-degenerate-oscillator-subspace, 19:ex-cm09-forced-resonant-mode-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm09-coupled-quadratic-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The 1D remark links the model to def-cm04's physical oscillator without requiring a length-valued coordinate. This item allows arbitrary coordinate dimensions, so M and J may be rotational inertia and torque, not the mass and force required by that interface. State the needed uni",
      "context_sha256": "cdc96f746d648c96cb5c4c12cc46566292c9d4fd1a8e53a96e95694ee7d57998",
      "item_sha256": "511106912b372505bfcc1db69d16ab6fd578e55e40df269394e728eb0bab6c9f",
      "at": "2026-10-12T19:46:14.626Z"
    },
    {
      "id": "ex-cm09-cubic-potential-error-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "MIT §7.1.3 treats fixed points and forced linearization, not first-order anharmonic/secular corrections; the citation misstates its support ([PDF](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)).",
      "context_sha256": "50545a7eac909aceb40bc0eb842bf935c6747f0d25def059eabbda7e978a3954",
      "item_sha256": "a892f482ed6067254f16dadf5dbd1d3f2cdcc0760aea3a0ed5542fc79ba8ec81",
      "at": "2026-10-12T19:47:49.339Z"
    },
    {
      "id": "ex-cm09-double-pendulum-linear-modes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Closing remark misstates the Taylor data: M is the kinetic metric’s equilibrium value (zeroth order), while K is the potential Hessian; Tong expands the full Lagrangian to second order ([source](https://davidtong.org/teaching/classical-dynamics/dynhtml/S2)).",
      "context_sha256": "df5e1779af0c92cc594233bc346bdc23c23562fced49b4dab23ed276baf5bc99",
      "item_sha256": "3623ea448b76140e25df051b078a4290a5842d39d9ff188b2f18db8b99cd2456",
      "at": "2026-10-12T19:48:27.293Z"
    },
    {
      "id": "ex-cm09-unstable-quadratic-mode",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Likharev §3.2 says nonzero curvature classifies stability and flags higher terms when curvature is zero; it does not support the cited caution about nondegenerate critical points ([source](https://essentialgraduatephysics.org/Files/CM%20merged.pdf)).",
      "context_sha256": "e89db4d63a708c840fbde89489e9e53cad935b170beac82f0fe7df25c17b02a8",
      "item_sha256": "7eddf38190dfa9d43e594d3b3af2e0028a234021b2c6ee4bbeec0c38127d0c3f",
      "at": "2026-10-12T19:47:33.211Z"
    },
    {
      "id": "ex-cm09-degenerate-oscillator-subspace",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The physical_scope says the double frequency splits into k/m and (k+2c)/m. Those are modal stiffnesses (frequency squared), with units s⁻²; the frequencies are √(k/m) and √((k+2c)/m).",
      "context_sha256": "da927f9ca168b691d6f2e23f04558ab2fa03d68b325b53b10f483c64ea3f46be",
      "item_sha256": "ec75d0ce61b1a36a0d9723e5f1578686f8bc894c2e40a9cf366332b4e82246d6",
      "at": "2026-10-12T19:46:45.815Z"
    },
    {
      "id": "ex-cm09-forced-resonant-mode-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal source mismatch: Likharev §6.2 (PDF pp.128–129) treats unforced modes; cited pp.127–132 span §§6.1–6.3 and contain no driven-response analysis. [Source](https://essentialgraduatephysics.org/Files/CM%20merged.pdf)",
      "context_sha256": "4bb8a98d7416a131b8d007835a220e317b9e92d0a5d6964e455ff4355b6bc652",
      "item_sha256": "df2aebdd0feb373576642a5b05f6a210fda1bca4b59174b0a0ef21c4caa7a71c",
      "at": "2026-10-12T19:47:24.984Z"
    }
  ]
