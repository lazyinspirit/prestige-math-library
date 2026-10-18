# Step 5 adjudicate: initial, round 1, unit 60

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-60-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u60.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"60",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:def-na-least-squares-poisson-first-order, 5:lem-na-hdiv-normal-trace-surjectivity, 6:rem-na-practical-dpg-roundoff-and-normal-equations, 6:cex-na-practical-dpg-too-small-test-space, 9:thm-na-practical-dpg-residual-estimator-equivalence, 9:ex-na-ideal-and-practical-dpg-test-vectors.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-na-least-squares-poisson-first-order",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited mesh/RT interface is defined for bounded connected polyhedral Lipschitz domains, but this item assumes only Lipschitz Ω and invokes RT₀(T_h). Thus X_h is undefined for allowed nonpolyhedral Ω; add a polyhedral-domain hypothesis.",
      "context_sha256": "170f30962a379faa9445f9dcc83168021123616946eaea848738057c6656e1c4",
      "item_sha256": "3183b16f0dd8a18698516bcf98d027de57f8b1fa15f392df0d7759f7ac31cf0d",
      "at": "2026-10-18T03:30:27.040Z"
    },
    {
      "id": "lem-na-hdiv-normal-trace-surjectivity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement invokes the DPG scalar trace convention for T_D=H^1(D)/H^1_0(D), but that interface defines mesh skeleton traces of global H^1_0(Ω) lifts under bounded Lipschitz polyhedral Ω assumptions; it does not license this arbitrary-open local trace interface.",
      "context_sha256": "f3ae789021778e62b9d47da580b0d00c42748ae70ef70f01cab4700d7d6b8ef1",
      "item_sha256": "945580091b0a2e4bdf1508892b7c1614f42dd3e4dc38fb10fdbaef53e75f4c6b",
      "at": "2026-10-18T03:30:43.167Z"
    },
    {
      "id": "rem-na-practical-dpg-roundoff-and-normal-equations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The matrix claim omits [F2]'s n≥1 hypothesis. Since 0∈N, an m×0 matrix has full column rank but no first or last singular value, so κ₂ is undefined and the claim is not well-formed for every full-column-rank real A.",
      "context_sha256": "aaad6ef61358e996949187051695bbd7467c2862cb3860c88be8932fd3a2e8f6",
      "item_sha256": "ec3ca8870f3cfc0da20679319352c7ac56ad60db1bbed84910ba54e0d2daafa6",
      "at": "2026-10-18T03:30:19.024Z"
    },
    {
      "id": "cex-na-practical-dpg-too-small-test-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title makes a universal claim about every smaller test space, while the statement and proof establish only one 4D-to-3D DPG example. The title overstates what this item proves.",
      "context_sha256": "30e21c8e350d9442c8fc4a876150335dd272c3074d096f07421c46e7c2fbcc60",
      "item_sha256": "3441580247efb3dc25750be8b2367e2beb0a274ba953280b44258710e2e3d747",
      "at": "2026-10-18T03:30:53.652Z"
    },
    {
      "id": "thm-na-practical-dpg-residual-estimator-equivalence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates its dependency: the supplied Riesz theorem gives representatives and norm equality, but says nothing about orthogonal projections. Step 1.1 uses a separate Hilbert-space fact, so this local dependency restatement is inaccurate.",
      "context_sha256": "71d8c43cff713c4cd21df12f8323b782e0fd650d6b91092a708571081b407fc7",
      "item_sha256": "171d85bf18b977a7fc33185add9e8ad5fad6232f382a0891b2b69a34d810f236",
      "at": "2026-10-18T03:30:39.310Z"
    },
    {
      "id": "ex-na-ideal-and-practical-dpg-test-vectors",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 is applied outside its admissible setting: it requires the specific ultraweak Poisson spaces and bilinear form, while the example gives an unrelated R² matrix model. The dependency interface does not license that application.",
      "context_sha256": "3fd49a86d83f2aa189c092e38983fb53aadf339a3f74551ca4a42ea30dd86a87",
      "item_sha256": "885fb572650e0d66a2c7513ea143fc4a8e98e53e089d1e85f9e0107f6128bbf9",
      "at": "2026-10-18T03:30:37.916Z"
    }
  ]
