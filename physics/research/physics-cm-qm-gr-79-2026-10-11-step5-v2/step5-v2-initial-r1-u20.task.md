# Step 5 adjudicate: initial, round 1, unit 20

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-20-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u20.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"20",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 12:def-cm04-one-dimensional-models-and-equilibria, 13:post-cm04-harmonic-model, 15:pthm-cm04-equilibrium-stability-at-a-strict-minimum, 19:ex-cm04-damped-regimes-check, 20:rem-cm04-linear-model-scope, 20:ex-cm04-resonance-response-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm04-one-dimensional-models-and-equilibria",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) calls the phase curve a “solution” without specifying an initial datum, but its cited ODE interface defines solutions for an IVP with specified (t₀,z₀). The motion/solution equivalence is therefore undefined as stated.",
      "context_sha256": "9ce7df7a89369ab06424986f7380fd9b2b963c955103cf94bd7e3b22399fa019",
      "item_sha256": "0340875ec3db1b7c824482db4c7807e3d8e68ba3e2d7e71b003fc11b639b6654",
      "at": "2026-10-12T19:40:09.332Z"
    },
    {
      "id": "post-cm04-harmonic-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Def-cm03 clause (c) allows additive time-dependent shifts that preserve the force; it does not require U(0)=0. The item misstates its optional normalization as something that clause requires.",
      "context_sha256": "93e1107fbea57dfb20d0335c1c87030b0adb319e7acc199afcc3b3193dd2a587",
      "item_sha256": "0b5807d7488a4abe66733cc58ce09db0c26baa7e00a2e7ef95b876c24ab3ebc8",
      "at": "2026-10-12T19:39:56.439Z"
    },
    {
      "id": "pthm-cm04-equilibrium-stability-at-a-strict-minimum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 overclaims equivalence: model phase curves have domains J⊆I₀, while the autonomous mechanical system is defined for all real times. Its solutions outside I₀ need not be model motions; L4 licenses only the restricted-domain equivalence.",
      "context_sha256": "7f7589a85b0a65854daef4445356badc4a1b09040ac53bea421e6b9ebe34b02e",
      "item_sha256": "1dd9f00d4e343dda593c413930a68617daa911297841736f7a32b5d2fe3180b3",
      "at": "2026-10-12T19:40:09.841Z"
    },
    {
      "id": "ex-cm04-damped-regimes-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The motions are global on ℝ, but for c=1 the zero-velocity times are t=2πn/√3 for every n∈ℤ. The energy paragraph lists only n≥0 while claiming the exceptional times, so its all-time characterization is false.",
      "context_sha256": "4dc5dbe749a01ca47584f7a396b69803be364928fae00b4a6ff0d0a35ae37529",
      "item_sha256": "81840d2f3a2bec0d6b3ff0f047b592dd5617422adda306108001c185a093ba65",
      "at": "2026-10-12T19:39:55.598Z"
    },
    {
      "id": "rem-cm04-linear-model-scope",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal scope gap: the fluctuation caveat omits Likharev’s operative condition that oscillator energy greatly exceed the fluctuation scale (in thermal equilibrium, max(kBT, ℏω₀/2)); calling it an “energy-scale condition” leaves the model’s stated regime unspecified. [Source](https:",
      "context_sha256": "0e0c681e7a0c00e12e6e81adc23685466e02ca88320a13b94b74a64cc128e4ba",
      "item_sha256": "3ae1374fe5a522a6c5fa6ad7859948ba1d7c7fb1e2fd6780556c9e4f99e01af2",
      "at": "2026-10-12T19:40:55.151Z"
    },
    {
      "id": "ex-cm04-resonance-response-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: t is defined as dimensionless numerical SI time, but dimensional ω_d (s⁻¹) appears in sin(ω_dt) and 5/ω_d while x(t) is a numerical value in metres. Normalize ω_d to its SI numerical value or use physical time throughout.",
      "context_sha256": "e6b858529d377ef0ad0e6b06adfb97f6a88dbf86623b8c52127a9a942d0cfe65",
      "item_sha256": "e65e5d591717944efbe3dc7aa93a7ac062a05d8ff0b232a8cc4b80af37c4a5a8",
      "at": "2026-10-12T19:41:02.151Z"
    }
  ]
