# Step 5 adjudicate: initial, round 1, unit 6

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-6-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"6",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-emg-causal-solution-and-horizon-vocabulary, 1:def-emg-periodic-high-sobolev-state, 1:prop-emg-potential-ricci-wave-identity, 2:lem-emg-local-potential-gauge, 2:thm-emg-symmetric-hyperbolic-research-supplier, 3:lem-emg-fixed-smooth-background-harmonic-data, 3:ex-emg-nontrivial-magnetic-period.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-emg-causal-solution-and-horizon-vocabulary",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item assumes only time-oriented data but invokes [F2] and [F4], whose interfaces require an independent orientation of M. Their equivalence and EMG data are not licensed on the stated scope; add orientation or use orientation-free interfaces.",
      "context_sha256": "28c9bad7aaf2299fa6ced606bb3536035d34ff46b5b52a81b59a0e5e4a9dc289",
      "item_sha256": "01f852f9e0b58ce358ad56ceb4c673cc91df01a3c566a9fd9b362585d3716fe6",
      "at": "2026-10-17T07:51:02.406Z"
    },
    {
      "id": "def-emg-periodic-high-sobolev-state",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal scope violation: this mathematics-domain item depends on def-emg-electrovacuum-cauchy-system and invokes its electrovacuum equations. That is a physical model; library rules forbid mathematical items from depending on physics.",
      "context_sha256": "dcbafb4e7041abd3406560f6d1da54352b2ae6a80763ca91db6526c88cfd0a9e",
      "item_sha256": "11ab7e8f047b98cfe54079d0e257961857dcb2136bc3ed496b2aca6b2f1b63e1",
      "at": "2026-10-17T07:50:28.031Z"
    },
    {
      "id": "prop-emg-potential-ricci-wave-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: this mathematics item depends on `def-emg-electrovacuum-cauchy-system` and uses its Maxwell source convention in [A1]. That electrovacuum model is a physics dependency, which mathematical items cannot use; state the source equation as an explicit hypothesis and remove the ",
      "context_sha256": "160817563f7c5ffa5f92df522ce7f9cbec3f122bb14145908a81301f9c6f4cf7",
      "item_sha256": "02da63f2f1e2404fe44f97ce9a321ce4a344f0110d6bf621aead78e2e147f977",
      "at": "2026-10-17T07:50:49.875Z"
    },
    {
      "id": "lem-emg-local-potential-gauge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item is classified as mathematics but lists `def-emg-electrovacuum-cauchy-system`, a physical model definition, as a prerequisite. Mathematical items cannot depend on physics.",
      "context_sha256": "2ec34a211e20b8062328ed1bb3d0bc2830d32c57c242090de057ae0a5e601a3c",
      "item_sha256": "a80dd93103c0769bf4c8d6d13aad23f003812da096bb3b54c67fac5cb1b417b4",
      "at": "2026-10-17T07:51:30.372Z"
    },
    {
      "id": "thm-emg-symmetric-hyperbolic-research-supplier",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 omits the required hypothesis u(0)=v(0), falsely restating uniqueness for any classical solutions with a common compact value set and H^s bound. The cited theorem only gives uniqueness for solutions with equal initial data.",
      "context_sha256": "410027a71a039fc4ba9d7388af724a3cbfa1ec8453bc9d7fd332a64cacdf0568",
      "item_sha256": "e93e680b1fdd3726f230f3510fc540ecf8fc71416f48c7061e7596a84df997fd",
      "at": "2026-10-17T07:50:52.562Z"
    },
    {
      "id": "lem-emg-fixed-smooth-background-harmonic-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: def-emg-periodic-high-sobolev-state puts θ on T^3_{2π} and X=L₀θ on T^3_{2πL₀}, explicitly not as coordinates on T^3_{2π}. The statement instead identifies Σ with T^3_{2π} while treating X as its length coordinates; L₀ is unrestricted.",
      "context_sha256": "5a7ed0303b80bf2429221eb064b0f96d551b4bde17ca68c428cbb189fc053ec3",
      "item_sha256": "20ffe405dcee5a43c0e6d091097d36edf64611e714f4540481bd8f4cc6cfb652",
      "at": "2026-10-17T07:50:51.200Z"
    },
    {
      "id": "ex-emg-nontrivial-magnetic-period",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The domain: mathematics item takes two EMG/physics-scoped dependencies as mathematical premises. The supplied rule bars mathematical items from depending on physics, so those dependencies cannot justify it, despite the otherwise sound period computation.",
      "context_sha256": "0ec55b08938e98bbcf09059503240343d34c6ce6c2b7ca83dd6fdbd612f60904",
      "item_sha256": "fb5d0d46e5ee2ec9f6834b6d1e9284cdfd063c54d09df11ae93c929a9d29cff8",
      "at": "2026-10-17T07:51:23.089Z"
    }
  ]
