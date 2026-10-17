# Step 5 adjudicate: initial, round 1, unit 47

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-47-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u47.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"47",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:thm-qsm-dt-normal-state-kubo, 4:thm-qsm-dt-spectral-fdt, 5:lem-qsm-dt-trace-gibbs-correlation-series, 5:ex-qsm-dt-bounded-oscillator-response, 6:thm-qsm-dt-trace-gibbs-correlation-measure, 9:thm-qsm-dt-variance-green-kubo.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-qsm-dt-normal-state-kubo",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.3 drops ε: conjugation by the F6 solution W_ε has derivative ε(i h/ℏ)[B_t,·], and the integral comparison is bounded by |ε|C_T‖ρ−ρ_N‖₁, not C_T‖ρ−ρ_N‖₁. The claimed identification is not established as written.",
      "context_sha256": "23099ee226c6bb18000d5995a2c97e1a7667ed232fa801f8546305d00806639e",
      "item_sha256": "118b30ab7f6f1a8b913c5dda4ab68bb7ebad692bba01dc496118d46626cef514",
      "at": "2026-10-17T08:07:51.214Z"
    },
    {
      "id": "thm-qsm-dt-spectral-fdt",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates lem-qsm-matrix-state-calculus: its supplied interface defines Tr and says step 3.1 proves basis independence, but does not establish cyclicity. The dependency restatement is unsupported.",
      "context_sha256": "2b4e5d5ee840e1ed2bfdf3deca67c81afcc5f50f1f761e8ced665ab785c397ae",
      "item_sha256": "6655d5ced1ab745eb965686da323f817b8c4b0fe242233fad4ccedffc9dc5997",
      "at": "2026-10-17T08:08:51.417Z"
    },
    {
      "id": "lem-qsm-dt-trace-gibbs-correlation-series",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F1] overstates the supplied thm-qsm-trace-gibbs-variational interface: it gives Gibbs normalization and density, not a complete energy eigenbasis. The proof relies on that unsupported basis claim for its expansions.",
      "context_sha256": "79354c8f2fa0316b3a72e2670b5ad29deef58c255129c1cab12809ca48e60cf9",
      "item_sha256": "1737ceed27052d48aab87e4c7da086768bb6767ce3a5dea18d57d80c2dbd5e36",
      "at": "2026-10-17T08:08:32.672Z"
    },
    {
      "id": "ex-qsm-dt-bounded-oscillator-response",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 is misstated as giving the response formula from B’s domain and commutator conditions alone. The supplied theorem also requires a stationary density, a bounded self-adjoint A, continuous h, and other hypotheses; this local restatement does not match its interface.",
      "context_sha256": "65ff2eb9ee06a0ee7c0bb65716050971479e3182ede753e368b0963c0aca0c48",
      "item_sha256": "1b74cc5875f420b8b57a1baa20480438454757959a1046af327c09e3c35185be",
      "at": "2026-10-17T08:09:11.818Z"
    },
    {
      "id": "thm-qsm-dt-trace-gibbs-correlation-measure",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 overstates its dependency: the supplied interfaces say the Gibbs theorem assumes AC, but do not establish that full AC is the exact assumption of an unbounded spectral theorem or that it is necessary. This is an inaccurate local dependency restatement.",
      "context_sha256": "f0689707f1b7ad1645dd805c2d54b4acbc90b0acc3492d78c150fb2d464d123f",
      "item_sha256": "629fa33ec3214aef7c96b3061592d1f5176deb7149226474beb62f79bcc54a59",
      "at": "2026-10-17T08:08:11.435Z"
    },
    {
      "id": "thm-qsm-dt-variance-green-kubo",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Classified as mathematics, the proof relies on thm-qsm-dt-algebraic-kubo for its spin-model dynamics and state assumptions. That physical result cannot supply a mathematical item's justification.",
      "context_sha256": "8f5111277c27b3b0b93777b6733562b8927cb31530eb52580704f2d82a0b41ff",
      "item_sha256": "50759bef4d7bb0df6783caf5bcacd84ecedd18b1d8d1460689c2b977992091ca",
      "at": "2026-10-17T08:08:19.258Z"
    }
  ]
