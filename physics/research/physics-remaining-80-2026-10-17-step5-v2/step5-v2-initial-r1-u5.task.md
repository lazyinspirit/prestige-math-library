# Step 5 adjudicate: initial, round 1, unit 5

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-5-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"5",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-emg-charged-dust-model, 2:post-emg-einstein-maxwell-equations, 8:cex-emg-flat-nonzero-field-coupling, 9:ex-emg-classical-scalar-background-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-emg-charged-dust-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Tong §4.5.4 discusses perfect fluids and pressureless dust, but does not state this charged-dust closure or its caustic/multistream validity limits as the citation locator claims.",
      "context_sha256": "ee6625461d264f2fecf6f3dc4097ee58cc47036441d9bf9a21c70319b0ae958a",
      "item_sha256": "ce277ec4b597c1c03cba7ef48d498ae113e4215f1486adc0d97b0920da775697",
      "at": "2026-10-17T07:50:42.606Z"
    },
    {
      "id": "post-emg-einstein-maxwell-equations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Carroll locator is false: (4.69)–(4.72) concern curvature variation and determinant identities; the Hilbert stress tensor is (4.81) and WEC is (4.83), so the citation misstates its support ([source](https://arxiv.org/pdf/gr-qc/9712019v1)).",
      "context_sha256": "beab077339e58cd01ed6f1a69dbf572ccd66def9c7ece3dc602b4091c2d7a1a3",
      "item_sha256": "0cff5f52edafea05b3d4683ad5695136b6da8f34ad4374ac3ab93b5f6b772ef4",
      "at": "2026-10-17T07:50:18.115Z"
    },
    {
      "id": "cex-emg-flat-nonzero-field-coupling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Carroll’s cited locator is inaccurate: Ch. 4 (4.69–4.72) covers generic Hilbert stress/EFE and WEC; its Maxwell stress tensor is Ch. 7 (7.107) [Carroll](https://arxiv.org/pdf/gr-qc/9712019v1). The deduction itself is sound.",
      "context_sha256": "1cbedc5b9473aee343db55bab8c55804802a3b73a1560cf291a794cd73f32eb0",
      "item_sha256": "144b79e93f1f661f751c6b8a155b6b3d6e6967ca7386e0914876922535f73ba2",
      "at": "2026-10-17T07:51:42.425Z"
    },
    {
      "id": "ex-emg-classical-scalar-background-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With dimensionless C, φ is dimensionless and P_a has units m⁻¹. Kφ and λ have no stated units, so the physical units of Tφ and j, and their consistency with the Einstein and Maxwell equations, cannot be checked.",
      "context_sha256": "fe31d356ab32adced904c9d75da8cc97aef2a36e1281f1a1872051654924c7d0",
      "item_sha256": "ff1689201eeb10f7dd2cfd3d0c65b700e59775d72826ad2785303d30161760d2",
      "at": "2026-10-17T07:51:08.320Z"
    }
  ]
