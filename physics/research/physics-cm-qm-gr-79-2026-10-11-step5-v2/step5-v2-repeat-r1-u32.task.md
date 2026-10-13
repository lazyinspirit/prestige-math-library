# Step 5 adjudicate: repeat, round 1, unit 32

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-32-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u32.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"32",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:def-cm16-flow-equilibria-and-invariant-sets, 12:pthm-cm16-energy-stability-and-instability, 13:ex-cm16-isotropic-oscillator-return-map-check, 13:ex-cm16-linearization-and-growth-checks.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm16-flow-equilibria-and-invariant-sets",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (vi)(b)'s blanket chart invariance of asymptotic properties is false. For free motion x=te₁,v=e₁ and invariant S={v=0}, d(z(t),S)=1. Under the smooth diffeomorphism h(x,v)=(x,e^(-x₁)v), d(h(z(t)),h(S))=e^(-t)→0.",
      "context_sha256": "6778247b42ae140d7c25a58718c06ea7a00796c3efcdae42779632d25f60f399",
      "item_sha256": "3584073d78966a5e42c67a3a0db733db3ffcae0097fe781cf026659a88999e5b",
      "at": "2026-10-13T09:24:11.383Z"
    },
    {
      "id": "pthm-cm16-energy-stability-and-instability",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause 2 and step 2.1 misstate def-variational-equation-along-an-ode-solution: its solutions are matrix curves A with A(t0)=I. The proposed Y is vector-valued with arbitrary initial data, so it solves only the associated vector equation.",
      "context_sha256": "f91ac114973ac8826bff59832b302f9d66d56375c3a9d140c0ea3fb3ca6333b6",
      "item_sha256": "53cab0c0429e650ca76ceb9d68d344e678675a930f092d06c65a39e3e549bef0",
      "at": "2026-10-13T09:35:41.117Z"
    },
    {
      "id": "ex-cm16-isotropic-oscillator-return-map-check",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L2] inaccurately restates its suppliers: the sine/cosine interface supplies derivatives and values at 0, not values at pi or 2pi. Step 2.1 relies on these additional values, while step 2.2 also requires an unsupplied characterization of sine's zeros.",
      "context_sha256": "dd669078efa87be5b625376dc85426a2bd28fc7721a070394bc3b277a27658f2",
      "item_sha256": "8965b0d87d9b0486b1e72b4adb5598de8d394a110a52b565b47b98d332e38460",
      "at": "2026-10-13T09:28:31.532Z"
    },
    {
      "id": "ex-cm16-linearization-and-growth-checks",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "False source attribution: [Stewart](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) Chapter 5 is 'Perturbation Theory,' pp.92–103, not the claimed pp.60–103 linearisation treatment.",
      "context_sha256": "0019e8b30a13aae2f9b421b10a2866b6f7916d0b2dac3b01c6703f0eb0e5b4ca",
      "item_sha256": "87bab7fe3f24e58fda6b75632c7cb44e45d60f3d35953fb34e92ea8e85b39184",
      "at": "2026-10-13T09:29:24.347Z"
    }
  ]
