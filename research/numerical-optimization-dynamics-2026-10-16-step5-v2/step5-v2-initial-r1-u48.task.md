# Step 5 adjudicate: initial, round 1, unit 48

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-48-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u48.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"48",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-projective-determinant-is-homogeneous-and-scale-invariant, 3:lem-qz-two-sided-local-computed-update-bound, 4:alg-finite-budget-qz-iteration-with-deflation-and-residual, 6:thm-computed-qz-pair-has-certified-backward-error.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-projective-determinant-is-homogeneous-and-scale-invariant",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title says the determinant is scale invariant on projective pairs, but its value scales by c^n; for example, with n=1, A=1, B=0, and (α,β)=(0,1), scaling by 2 changes p from 1 to 2. Only its zero condition is invariant.",
      "context_sha256": "d4095d0e4ca8dcc390906003933a8de3ea931e2e17f46bf66e21f1dd12ef43c3",
      "item_sha256": "6d1f40f1ad3060538951d88b23ed8914787ed9e85f52b3f98d38c023f9f51eaa",
      "at": "2026-10-16T18:06:36.859Z"
    },
    {
      "id": "lem-qz-two-sided-local-computed-update-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2's supplied interface gives raw coefficient v and complete overwrite-inclusive η_G=2v+u+2q, but no bound h=u+2q+v on the zero write itself. Steps 1.1 and 2.1 rely on that unsupported decomposition, so the stated write and ledger guarantees do not follow.",
      "context_sha256": "75f41a9d53c5e4e443260ceaac062b2c2fe685c363969a0b3237784fafe2978c",
      "item_sha256": "baf8a811e3d5f89a7a853181744b302d4fb3252c5a2b6d29897296b93acb897c",
      "at": "2026-10-16T18:07:13.452Z"
    },
    {
      "id": "alg-finite-budget-qz-iteration-with-deflation-and-residual",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3's right rotation on columns j,j+1 generally creates T_{j+1,j}≠0 from upper-triangular T. Its following left rotations are chosen from H entries, so they do not generally remove that T bulge. The zero chase loses triangularity and can make invalid isolation/QZ steps.",
      "context_sha256": "a312cd3f2509e82007e941b69a124b6a8dff4497601f88c055319772b6644e28",
      "item_sha256": "4a474194f4e9b26dd29945aa7717f72e4055dc5e32444a23c55e466b5decd890",
      "at": "2026-10-16T18:07:31.269Z"
    },
    {
      "id": "thm-computed-qz-pair-has-certified-backward-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The concrete bound drops the algorithm’s “other” explicit zero writes, which its interface puts in the D_j ledger. The accumulation lemma requires their norms in the sum; step 2.1 cannot reduce that ledger to tolerance writes alone.",
      "context_sha256": "4b788250d4bba2a8103ed9f47c9dfc25676754fbaba839a4dde5180ba3187757",
      "item_sha256": "037f53275305d730ff81cc96c3adc2664be5fd6ae06909e5cc5551b2e369238d",
      "at": "2026-10-16T18:07:11.090Z"
    }
  ]
