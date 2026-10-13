# Step 5 adjudicate: initial, round 1, unit 21

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-21-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u21.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"21",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 13:pthm-cm05-relative-reduction, 15:post-cm05-gravity, 15:pthm-cm05-effective-potential, 15:cex-cm05-external-force-breaks-relative-reduction, 17:ex-cm05-parabolic-and-hyperbolic-branch-check, 18:ex-cm05-barycentric-orbits-check, 18:ex-cm05-gravitational-ellipse-and-period-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "pthm-cm05-relative-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof treats the radial potential as establishing that the model invokes an external-plus-pair presentation. The interactions interface makes that presentation part of the model declaration; without it, momentum-balance [L4] does not apply.",
      "context_sha256": "fb877ea47afc0c568bf268ec637547d0a550da0d215dc632cc5753d8af85bdfe",
      "item_sha256": "cc5cc0f09a21aa54b2b238457a027cc5a0cabf566dbf5a25fa79e3242f1315b9",
      "at": "2026-10-12T19:41:26.873Z"
    },
    {
      "id": "post-cm05-gravity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (iv) calls the model non-relativistic using only |v1−v2|/c. It permits both labels to share a near-c translation (weak field, zero relative speed), although the cited Newtonian-limit source requires small particle speed v/c in its chosen coordinates. Specify the comparison",
      "context_sha256": "c1c81fb06bdd04578be60997b14c2840aafd93c45cf63c8bdd8c0ee93800c5a6",
      "item_sha256": "8d76f36d8d8fb2d412f09a04800d5f59a16a60657574184b8f8c02e57ba36b83",
      "at": "2026-10-12T19:41:24.516Z"
    },
    {
      "id": "pthm-cm05-effective-potential",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 infers that equal angle derivatives imply a constant difference, but [L3] restates only the primitive corollary’s existence clause and says it is used only for the example quadrature. Its uniqueness clause would license the inference, but is neither restated nor cited th",
      "context_sha256": "f9544473e3b39b9e9cf976845214d3ed4a3cc73ebaf54680c315381bb0bf6eb9",
      "item_sha256": "2d835aad0be854fe9828ce1f136743dc00ac2bf7c557ffd4a79b109af23dc2bd",
      "at": "2026-10-12T19:41:16.565Z"
    },
    {
      "id": "cex-cm05-external-force-breaks-relative-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal scope overclaim: the remark says equal external acceleration cancels from μr'', so the reduction can hold with nonzero external forces. The witness proves only that zero total external force is insufficient; it does not establish that the no-external-force hypothesis is nec",
      "context_sha256": "02ad3b23891a43f5eaafc91b72a686fd0fd6f54dc9ffbe3af66d62e9eb9a6423",
      "item_sha256": "ef3ac1f98bcf2867eab69f2bed637a2f38356bc0119b7787d5fc98073c9105c8",
      "at": "2026-10-12T19:41:35.018Z"
    },
    {
      "id": "ex-cm05-parabolic-and-hyperbolic-branch-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The physical_scope says both periapsis distances are zeros of Ueff, but the hyperbolic calculation gives Ueff(10^6/3 m)=E=1.5×10^18 J, not 0. Only the parabolic periapsis is a zero.",
      "context_sha256": "eb0d7f481b49ea23b72337c8176ffcb4a8746ef40ad92fec8db8774997325c64",
      "item_sha256": "5f28c4bfb016a806c6591b3b6ed0e93d59db7fe3e5fe894f874a39a555532dbd",
      "at": "2026-10-12T19:41:26.073Z"
    },
    {
      "id": "ex-cm05-barycentric-orbits-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L3] drops a factor of 10^-1: its displayed product equals (640/27)×10^18, not (64/27)×10^18. The stated final value is correct only after including μ/κ = 1.25×10^-1.",
      "context_sha256": "ea8d0ea792567e6bb42494bbfbf2ec9c6a9443bb4a4ca9b3e39de6e54c3a22d6",
      "item_sha256": "a7dab160b9397ac4e63ebdef5a72ecb15fef29d60d3f16dd374057060adee0c8",
      "at": "2026-10-12T19:43:31.211Z"
    },
    {
      "id": "ex-cm05-gravitational-ellipse-and-period-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: steps 3.1 and 4.1 conflate SI numerical values with quantities: μa³/κ has dimension s², not m³, and G_N M has dimension m³s⁻², not dimensionless 1. State these as numerical-value equalities and carry units through.",
      "context_sha256": "79405733ee80667a073a2b4d7be169e66a76bf6e53851d99a321de251af40c82",
      "item_sha256": "64f47ef4da7394abbbbf39f3af682abe65d722ee966ad80bb09710cc33cb35fb",
      "at": "2026-10-12T19:41:36.725Z"
    }
  ]
