# Step 5 adjudicate: initial, round 1, unit 17

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-17-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u17.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"17",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-tdmath-finite-region-relative-entropy, 1:def-tdmath-poisson-configuration-reference, 1:lem-tdmath-relative-entropy-variational-and-chain-rules, 4:thm-tdmath-local-tame-entropy-compactness, 4:ex-tdmath-poisson-intensity-information-density.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-tdmath-finite-region-relative-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a finite-region quantity, but the definition specifies no region, restriction, marginal, or finiteness condition. It defines generic relative entropy D(P‖Q).",
      "context_sha256": "2e5395254b143d1b62933dcd08d171b23b75f3f1ba5bb24a94c133cdc993c606",
      "item_sha256": "647ad97dd05d5a00280022cfe85cbbefe5f2325cb2c2e692ed0a180ae8f411ce",
      "at": "2026-10-14T20:01:08.479Z"
    },
    {
      "id": "def-tdmath-poisson-configuration-reference",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Poisson weight uses e^{-λ} for real λ, but the cited power definition covers only integer exponents; the exponential dependency defines exp(x) and e, not e^x. The weight and its normalization are therefore ill-typed as supplied; write exp(-λ).",
      "context_sha256": "a6414e7a15323468166feb9883571d295d750844dafce6c2cad96f21a7cf6d9f",
      "item_sha256": "8ad6122545c35c13ee3eeb8f756bb67f44007964d821d03cd74524552b354044",
      "at": "2026-10-14T20:01:39.110Z"
    },
    {
      "id": "lem-tdmath-relative-entropy-variational-and-chain-rules",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misstates the conditional-density dependency: its kernel and event identities require no AC; AC is needed only for the conditional-expectation class convention. This proof invokes the kernel result, so the restatement is inaccurate.",
      "context_sha256": "806d38441137f5774eda5798abe872c5a77d48152937ac266f8bfe175b776349",
      "item_sha256": "6066ad9c8cd9d1f08ed1f4f39628153ea790a6a0865036b75ab4c9ffb1fa2ac9",
      "at": "2026-10-14T20:01:37.877Z"
    },
    {
      "id": "thm-tdmath-local-tame-entropy-compactness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A2 misstates the cited Eberlein–Šmulian interface: it requires UL/BPI, DC, and HB, but A2 attributes the equivalence to DC and HB alone.",
      "context_sha256": "9779ea8b557894c9d2b931001e04ab34954fc41d728bbc67594edcbdbc88c8cf",
      "item_sha256": "71df150cc883b99ccda0b3739f9b6de816e7e91d9c86a56023fca702c4ebe68d",
      "at": "2026-10-14T20:02:01.648Z"
    },
    {
      "id": "ex-tdmath-poisson-intensity-information-density",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4 applies thm-tdmath-specific-entropy-density without establishing that Q_z belongs to its stated class P^1_stat(Ω). F1 gives stationarity and Poisson counts, but the proof never checks the required local-tame class condition.",
      "context_sha256": "2a881606386511bd41fc67cdd829deab0100a5fd7f710fdfa7ac9a8811921862",
      "item_sha256": "75beb697df020b1c8ceb92f35be3923d0512185632977fef8343b01f027467e1",
      "at": "2026-10-14T20:02:04.943Z"
    }
  ]
