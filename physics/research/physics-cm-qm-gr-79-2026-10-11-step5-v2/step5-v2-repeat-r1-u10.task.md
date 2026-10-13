# Step 5 adjudicate: repeat, round 1, unit 10

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-10-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"10",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-cm-splitting-hamiltonian-and-verlet-map, 9:def-cm-modified-log-coefficients-and-truncations, 18:rem-cm-scope-of-the-certified-verlet-estimates.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-splitting-hamiltonian-and-verlet-map",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final remark overstates the oscillator interface. For d=1, M=(1), V(q)=-q²/2 is quadratic and satisfies all hypotheses, but Verlet has trace 2+h², whereas the cited oscillator map has trace 2-h². The claimed reduction fails for h≠0.",
      "context_sha256": "15385b8bb4a467a88fae4a86739073e2c490bf4df4bff69bd02c1132eab97f93",
      "item_sha256": "9233cb93321ad8713a1e6466cff8991e8e2e2b241df51b99cf0d6a4538d7b9df",
      "at": "2026-10-13T09:23:00.362Z"
    },
    {
      "id": "def-cm-modified-log-coefficients-and-truncations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The definition asserts Δ_h^k f is holomorphic on D_k for every k≥0, but the dependency defines D_k and guarantees domain control only for k≤N. Higher iterates need not exist. Restrict this assertion to 0≤k≤N.",
      "context_sha256": "e8839d7d16fa65fc944392bd90e09ad6381fa7fa487cf0060eb192b5d8f052bd",
      "item_sha256": "3d59ebad728ae1120b350451f7d60ead3bbf9e3dd28ee21a90a064f290bdc71c",
      "at": "2026-10-13T09:23:16.519Z"
    },
    {
      "id": "rem-cm-scope-of-the-certified-verlet-estimates",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The roundoff restatement omits the required common initial state x₀=z₀. Its stated conditions do not imply the bound: for V=id and η=0, distinct initial states retain nonzero deviation while the claimed bound is zero.",
      "context_sha256": "e22b3f450a633b35238910c6bb7404871e9f70b5f5ac474f5a495b629881f857",
      "item_sha256": "3df71f4218fd13bdb4af731bf4ab61a0dda52de52ebe1ce4aeb76c0a906d09f6",
      "at": "2026-10-13T09:37:15.702Z"
    }
  ]
