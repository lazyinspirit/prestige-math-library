# Step 5 adjudicate: initial, round 1, unit 33

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-batch-33-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u33.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"advanced-qft-supersymmetry-build-2026-10-23",phase:"initial",round:1,unit:"33",input_sha256:"79ce228292c28cf4dc516ab9bc72619009c0b56046675966598cb75a0933c758",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run advanced-qft-supersymmetry-build-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-qftx-susy-vacuum-moduli-data, 6:def-qftx-n2-coulomb-branch-data, 8:ex-qftx-n2-monopole-perturbed-vacuum, 11:pthm-qftx-n2-linear-monopole-bps-vortex-bound.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qftx-susy-vacuum-moduli-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the stated scalar kinetic term uses ordinary ∂μφ, so it is not invariant under local G gauge transformations. A gauge theory requires a covariant derivative; see [Tong §4.2](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf).",
      "context_sha256": "b2ef7026fefd6e02533a5a82f9709ef5c49c8109c7809f7efb0073c5fe0c14c3",
      "item_sha256": "d1f44660f50c2339fddd1d4009ddc74e26e79a707bace8cfa81fb625582e4f46",
      "at": "2026-10-24T20:10:11.389Z"
    },
    {
      "id": "def-qftx-n2-coulomb-branch-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: it states the quantum weak-coupling relation as u=a²/2. Bilal gives only u~a²/2, with a²/2−u=O(1/u); equality fails at finite quantum u. State this as an asymptotic normalization ([source](https://arxiv.org/abs/hep-th/9601007)).",
      "context_sha256": "a9113b7763549539ea21744dd8e54b138ef96fe2801894cf75766c9bfa796efe",
      "item_sha256": "74857d0d9eba8e81f044591876f8aba9cb9ee4e2af80799da28f8a44acf0e51a",
      "at": "2026-10-24T20:10:53.534Z"
    },
    {
      "id": "ex-qftx-n2-monopole-perturbed-vacuum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 says [F2] applies after rescaling A_D, but [F2] also requires polynomial W. Here u is only assumed holomorphic and may be nonpolynomial; the rescaling fixes the kinetic term, not this unmet dependency hypothesis.",
      "context_sha256": "27c1f2273fb8c8aa4e65e0f9405e8b369ae2080345f4ca89fc6b06a530d68cc8",
      "item_sha256": "33c7d8b93736bc7e763cc1738232ba4a33a8d7e58ab5db93cf7b1c286367faac",
      "at": "2026-10-24T20:11:20.577Z"
    },
    {
      "id": "pthm-qftx-n2-linear-monopole-bps-vortex-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The local model dependency [F1] restricts validity to field values within its patch and below its effective cutoff. The theorem allows competitors with unrestricted a in the core, so its claimed full-model minimum and cylinder bounds exceed the supplied model's physical regime.",
      "context_sha256": "9cdfd134de13d40d38968c72e3f805476ff492ac94dd28d0aa18bd612c658457",
      "item_sha256": "8a8b8cf6f8457307488a05b8e9cb689dddccf2d5a779f6111398fac2512948a2",
      "at": "2026-10-24T20:11:19.668Z"
    }
  ]
