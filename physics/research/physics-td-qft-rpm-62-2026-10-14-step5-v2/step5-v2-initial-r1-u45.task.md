# Step 5 adjudicate: initial, round 1, unit 45

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-45-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u45.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"45",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:lem-qft-qed-formal-matrix-ward, 4:cex-qft-qed-energy-fock-limit, 4:ex-qft-qed-coherent-angular, 6:lem-qft-qed-conserved-current-gauge.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qft-qed-formal-matrix-ward",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal scope violation: this mathematics lemma lists def-qft-qed-gauge-data, which supplies QED spacetime fields and SI conventions, as a direct dependency. Mathematical items may not depend on physics; the matrix proof itself is otherwise sound.",
      "context_sha256": "f1b024e588c27bf546ce8dfd82c5c4e38f241999611708d27a7dd4469d448ef6",
      "item_sha256": "d96436656bc26d1ef45d4ef590b54c6c4a7c43372afd9c408f4ddb90cfa79071",
      "at": "2026-10-14T20:12:19.471Z"
    },
    {
      "id": "cex-qft-qed-energy-fock-limit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The profile uses P_T(n) without defining it or citing a definition. Thus b is not established as a map or shown to be transverse, so the cited obstruction cannot be applied.",
      "context_sha256": "a73c9db10243405d534b8f454cb239eddc0a84fa97c5ab06637f9a15db67e34d",
      "item_sha256": "6593f53ba87bedb2d7710e7b8118e39b38e55b80d020c6df0742652827130648",
      "at": "2026-10-14T20:12:10.781Z"
    },
    {
      "id": "ex-qft-qed-coherent-angular",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the mathematics item directly depends on the QFT/Fock coherent-infrared lemma ([F1]) as a mathematical premise. A physics item cannot supply a mathematics item’s justification; the angular integral itself is correct, but this dependency is inadmissible.",
      "context_sha256": "4b83c6e36c8f73e19f17efae9320986e4fb072c713bfa97833bc1d263243e834",
      "item_sha256": "378a88a261adf5096d16f1dcfe75955e65f487500632c7db601acd524554357a",
      "at": "2026-10-14T20:12:36.349Z"
    },
    {
      "id": "lem-qft-qed-conserved-current-gauge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The polarization claim omits that the shifted current must have transfer k. The dependency proves J·l=0 for that current’s own transfer l; if l≠k, k·J need not vanish, so step 3 does not establish the universal claim.",
      "context_sha256": "c9633a678b95c899a2b62fdab6f80076e28efc4a31a8c748d995858626108431",
      "item_sha256": "7ed2dfdda8f01b7071bd8daa7ccbc71f81f3bdda2e27881cf93b81d72324d0ec",
      "at": "2026-10-14T20:12:34.286Z"
    }
  ]
