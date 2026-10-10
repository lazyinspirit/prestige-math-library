# Step 7 adjudicate: initial, round 1, unit 23

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"23",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 6:def-em-lab-geometry, 13:post-em-vacuum-maxwell, 17:post-em-lorentz-coupling.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-em-lab-geometry",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (c) asserts partial derivatives for C^k fields without requiring k≥1; its dependency allows k=0. On Ω=R³, I=R, F(y,t)=|y₁| is C⁰, but at y₁=0 its difference quotient has one-sided limits +1 and −1, so ∂_{y₁}F does not exist.",
      "context_sha256": "829bd0a7c3bb3a2ccbda0dc0ed9290ce7a37b7b717c0d21ff813023c7423e069",
      "item_sha256": "943e3f64e6f90d18c391c64c596b346c24924d966e04d9c7a15fee22afea7d5b",
      "at": "2026-10-10T04:14:12.680Z"
    },
    {
      "id": "post-em-vacuum-maxwell",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Unsupported source provenance: the [Tong PDF](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf) identifies itself as “Lent Term, 2015”; the claimed “2026 printing” and stamped-source reading are not substantiated.",
      "context_sha256": "63f7cb75a1f8b402de52e058cf80532ec027be1d2328c37c9a1296a45530ae81",
      "item_sha256": "47eec77d1a5fb2e33e75b3519cd339434366a21b9e5577123e080b90cbdb4f43",
      "at": "2026-10-10T04:14:42.426Z"
    },
    {
      "id": "post-em-lorentz-coupling",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed exact Griffiths source passage is incorrect: §8.1.1 pp.345–348 does not contain the force-density formulation. That appears in §8.2.2 p.351; power density J·E appears in §8.1.2 p.346. The asserted full-text locator fails source fidelity.",
      "context_sha256": "ccda29fec83d040113d1a268db2612af4bb22bd6cd63c4c99e72717528be1336",
      "item_sha256": "d75712411f8fdeb3a21ffefd768be82081ebe55aa1bdd30c1fdb1f8487937c91",
      "at": "2026-10-10T04:15:14.016Z"
    }
  ]
