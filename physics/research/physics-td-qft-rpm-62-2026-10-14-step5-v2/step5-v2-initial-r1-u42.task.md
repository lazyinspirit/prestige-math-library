# Step 5 adjudicate: initial, round 1, unit 42

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-42-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u42.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"42",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-qft-dirac-projection-matrices, 3:lem-qft-dirac-fermionic-translation-spectrum, 6:lem-qft-dirac-covariance-spectrum.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qft-dirac-projection-matrices",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: Step 4.1 uses F2’s adjoint definition, which assumes a first-variable-linear inner product; F1 gives H_D a second-variable-linear pairing. Then x↦⟨Tx,g⟩ is conjugate-linear, so the cited definition does not license the adjoint or self-adjointness argument.",
      "context_sha256": "93e91b9d7eaebbc793aafcc50eceac71061eca5165106c7a87057b5478ca0f73",
      "item_sha256": "bea33e4a8c82d04af094d7f62ad974d0f37642c7d6227fb809378ec09d7c8ed6",
      "at": "2026-10-14T20:11:29.336Z"
    },
    {
      "id": "lem-qft-dirac-fermionic-translation-spectrum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement says the vacuum is the unique zero-energy vector, but every scalar multiple cΩ is also a zero-energy vector. The proof establishes only that the zero-energy eigenspace is the one-dimensional vacuum sector; state uniqueness up to scalar or for a normalized vacuum.",
      "context_sha256": "e15b2fec8e86809cd7dd49bf05c37768c2747d01617ef657556f3bbb79dbd1cc",
      "item_sha256": "3cbdd744c8fd9cf9014acc813a74324f804d0ed0f7d49c189fa60ddbaa34f179",
      "at": "2026-10-14T20:11:55.342Z"
    },
    {
      "id": "lem-qft-dirac-covariance-spectrum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 uses r=Λp in C±(Λz); that substitution gives S⁻¹C±(z)S⁻†, opposite the claimed S C±(z)S† needed in 2.1. The covariance follows with r=Λ⁻¹p, but that is not the proof given, leaving the representation argument unsupported.",
      "context_sha256": "255dae7179f32d7a9595feb0b9aec1664053c6ed8f8f189805994cee09874944",
      "item_sha256": "7420818874a0bc236ea26a2cd317d692a9f0bb8831fc312bbb4e40cd477d7eb0",
      "at": "2026-10-14T20:12:01.173Z"
    }
  ]
