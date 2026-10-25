# Step 5 adjudicate: initial, round 1, unit 70

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-batch-70-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u70.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"advanced-qft-supersymmetry-build-2026-10-23",phase:"initial",round:1,unit:"70",input_sha256:"79ce228292c28cf4dc516ab9bc72619009c0b56046675966598cb75a0933c758",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run advanced-qft-supersymmetry-build-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-equivariant-finite-chart-symbol-calculus, 1:lem-equivariant-controlled-symbol-realization, 2:ex-equivariant-fourier-hardy-symbol-index.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-equivariant-finite-chart-symbol-calculus",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 12.1 reverses Sobolev nesting: as s rises, H^{m-s} shrinks, so the formal-adjoint kernel/cokernel dimension is nonincreasing, not nondecreasing. Constant index then does not force either kernel dimension to stay fixed, leaving level independence and closure regularity unprov",
      "context_sha256": "5b9c6d6f835911a3ee3bd28615fe1652d07fc69a182cbdf33a207edf970b6e5b",
      "item_sha256": "e79b320d9a038ce70635a131381f3bab276eb684fe930ec927d63705605807f4",
      "at": "2026-10-24T20:26:35.842Z"
    },
    {
      "id": "lem-equivariant-controlled-symbol-realization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The positive density is not required to be G-invariant. Then d* need not be equivariant, so D=d+d* is not a G-invariant realization; step 7.2's harmonic-kernel computation does not prove the claimed equality in R(G).",
      "context_sha256": "44b8c22dd91d4b5be168e221ea411ec5afbce22d0bb14446cb5dfa0dfcae8643",
      "item_sha256": "abd499d61948b4f6fbbddd6dede0f47b5825f20c03180c0513b7ec8b0c68da6e",
      "at": "2026-10-24T20:26:45.399Z"
    },
    {
      "id": "ex-equivariant-fourier-hardy-symbol-index",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "V may be zero-dimensional. Then L²(S¹;V)={0} and P₊ has norm 0, contradicting Verification 1.1’s claim that it is norm-one. Require V≠0 or remove that claim.",
      "context_sha256": "54f872203e142dbdb92c86d83f63503caf67329e863f24ce50289880590d5e23",
      "item_sha256": "b33d94fe0fc5cc73336ecc06cd82a040e2496222da2fcb09240f5b7990f9925c",
      "at": "2026-10-24T20:27:20.928Z"
    }
  ]
