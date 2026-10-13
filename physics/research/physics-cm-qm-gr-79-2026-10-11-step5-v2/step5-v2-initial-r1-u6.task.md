# Step 5 adjudicate: initial, round 1, unit 6

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-6-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"6",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-cm-finite-regularity-canonical-calculus, 2:prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, 4:cor-cm-hamiltonian-flow-preserves-phase-volume, 5:rem-cm-scope-of-complete-integrability-and-action-angle, 6:prop-cm-cylinder-shift-has-no-global-generating-function, 6:ex-cm-linear-shear-generating-function, 7:rem-cm-scope-of-canonical-methods, 7:ex-cm-cylinder-shift-obstruction-checks.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-finite-regularity-canonical-calculus",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The smooth-case agreement claim includes symplectic embeddings, but a smooth canonical map need not be one: (q,p) ↦ (√(2q)cos p, √(2q)sin p) from (0,∞)×R to R²\\{0} preserves dq∧dp yet is noninjective.",
      "context_sha256": "924777a29e862936b21ce9e50b08973c85ac1fd6fe0a554e5e878cf7ca011c1a",
      "item_sha256": "2c32794942e6b71a2e578f7e81086030c7cd9dfd8ded028364f0ad1a8277e259",
      "at": "2026-10-12T19:24:03.027Z"
    },
    {
      "id": "prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 assumes {f,g}=ω(X_f,X_g) for C² inputs. The finite-regularity definition says this equality is established by this proposition; the smooth definition does not cover general C² inputs. This makes the bracket proof circular.",
      "context_sha256": "2737d15e915b648d6cb173380a72b2fb38b7b03c5d9fab4a9bf58928a3abf98c",
      "item_sha256": "7c74f400848bed825f9f6c2f62850d7edecef9d134f186e71cb1d97e93f78fbc",
      "at": "2026-10-12T19:22:21.837Z"
    },
    {
      "id": "cor-cm-hamiltonian-flow-preserves-phase-volume",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4/step 1.1 assert a bounded Borel set has an L¹ indicator, but the supplied dependencies never establish that Borel sets are Lebesgue measurable (the Lebesgue definition leaves its σ-algebra theorem separate). Hence F3’s L¹ hypothesis is unproved.",
      "context_sha256": "52f06547cb18f6c3d10bd9f516525493cb1bfd09e9a5cccebdd0037dd17ae3ef",
      "item_sha256": "be8c46a002e5d7722ef11f384034d9fa11f908e94ce5023cdd09f0784f315b29",
      "at": "2026-10-12T19:23:58.476Z"
    },
    {
      "id": "rem-cm-scope-of-complete-integrability-and-action-angle",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark says AC_ω enters only in step 4.1, but its cited compact-flow corollary also explicitly assumes AC_ω; that corollary is omitted from this item's deps. This misstates the dependency interface.",
      "context_sha256": "feb89acbf0cd12d9aa7ece999e6f9df0d1b638a835f5f85e6300a12df61d4e17",
      "item_sha256": "750cd2a1e2713308a921275cc1092e12e8c2dbae8ca5050f133a49d3633df003",
      "at": "2026-10-12T19:23:15.536Z"
    },
    {
      "id": "prop-cm-cylinder-shift-has-no-global-generating-function",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title says there is no global generating function without specifying its kind; clause 3 and the proof exclude only a global second-kind function on T×R. They do not rule out a first-kind global generator, so the title overstates what is proved.",
      "context_sha256": "8455fadffa6c1bfaecd7049237630405951a121bcd6e0c9d0a88fa05057edb6e",
      "item_sha256": "b2155b58389f22708bb3179845f8dfad9639de0a095e44cbafe9aaee5f9d67b3",
      "at": "2026-10-12T19:25:59.682Z"
    },
    {
      "id": "ex-cm-linear-shear-generating-function",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates the dependency: the matrix identity is equivalent to preserving the two-form; the interface calls a map canonical only with a diffeomorphism hypothesis. A noninjective C1 map can satisfy the matrix identity, so F2's blanket canonicality claim is false.",
      "context_sha256": "77a061b2b3474f23d085213501d7a04f01032c386203f1086a4c896d5b87574e",
      "item_sha256": "9e00ba066d1a6e71179f9ca210fe08bb6bab0cce82a6034a81b5b59dee4595f6",
      "at": "2026-10-12T19:24:27.621Z"
    },
    {
      "id": "rem-cm-scope-of-canonical-methods",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark cites [[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]] as a dependency, but that item is absent from `deps`; the dependency restatement is undeclared.",
      "context_sha256": "461de424a541ab1653f63ff0a0f03d653d64b20200ea0dc3662943be1e1f7a30",
      "item_sha256": "9c2aa4904eafd18a21c07910b129ca617c97c589efa75c666f41412f5e28ea63",
      "at": "2026-10-12T19:23:03.013Z"
    },
    {
      "id": "ex-cm-cylinder-shift-obstruction-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The global-lift argument wrongly claims periodicity gives c(1)=c(0). From Ŝ=θP+mP+c(θ), periodicity instead gives c(1)-c(0)=-P, since θP changes by P. The cited nonexistence result is valid, but this appended argument is not.",
      "context_sha256": "7e7047272ae403f4c62db992b9b736846c4c9a9e37b5665ba4c5ad015304e0d4",
      "item_sha256": "c2d789b2c80a0c4f8f51458f782ec3a17fe90cfa290039c7b4c26d2b8911fac7",
      "at": "2026-10-12T19:23:42.105Z"
    }
  ]
