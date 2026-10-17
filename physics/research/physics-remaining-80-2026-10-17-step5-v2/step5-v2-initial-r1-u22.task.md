# Step 5 adjudicate: initial, round 1, unit 22

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-22-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"22",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:prop-emg-xs-charged-ring-obstruction, 8:lem-emg-xs-null-barrier, 8:prop-emg-xs-kn-ergoregion, 8:ex-emg-xs-topological-charge, 9:thm-emg-xs-kn-escape.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "prop-emg-xs-charged-ring-obstruction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "prop-emg-xs-kn-invariants already states the Ricci-square blow-up, the C² extension obstruction, and the ring locus. This item repeats those conclusions using the same invariant-to-continuity argument.",
      "context_sha256": "7ae3e90029f72eb716adc8876d42de1ac7029dcdcf00e3c255a023decabd460c",
      "item_sha256": "5e3956bc984d960cebcd3ece3766032874f477b7c4fa537e91ec7f5dd7d03289",
      "at": "2026-10-17T07:57:57.614Z"
    },
    {
      "id": "lem-emg-xs-null-barrier",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal scope defect: this mathematics-library lemma depends on the physics item thm-emg-xs-kn-extension for its premises. Mathematical items cannot depend on physics, so that item cannot justify this proof.",
      "context_sha256": "116113fa9a3ced8f7a1646a7261983205df908182a715be83a534cb480825e4d",
      "item_sha256": "b0c1afe5b49fcceeac1c68168a99c9610ce7f3e09b6aec8dad39fe72c22bca14",
      "at": "2026-10-17T07:57:25.255Z"
    },
    {
      "id": "prop-emg-xs-kn-ergoregion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Allowed extremal RN case M=|q|, a=0 has g(T,T)=-(r-M)^2/r^2≤0. Its positive-norm ergoregion is empty, so the r=M stationary-limit set is not an ergosurface (the relative boundary of that region); the title overclaims.",
      "context_sha256": "cca4301c3c5e028eef8376507be094a75b739993760491b5772a1b40717ef884",
      "item_sha256": "c6c7f3a5ecb87fecece6a30b8b24a2bef5d62c0f66ce557420e86c0464adf7c8",
      "at": "2026-10-17T07:56:38.574Z"
    },
    {
      "id": "ex-emg-xs-topological-charge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The KN nonbounding claim needs dF_β=0, but the supplied prop-emg-xs-kn-dyonic-flux interface does not state closedness. [L1] inaccurately restates it as part of the exact statement; without that premise, Stokes does not force a bounding sphere’s flux to vanish.",
      "context_sha256": "e98e7979fd3209fdf91f44cd7403e775a7c0e23b25bf20dee0e0f86908a56d34",
      "item_sha256": "d9f92d4ddcd043435f6408e1e23a0ca291ea98f6365ce48ba9b2ea88275d8633",
      "at": "2026-10-17T07:57:08.733Z"
    },
    {
      "id": "thm-emg-xs-kn-escape",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 uses thm-ftc-first-part to infer that a factor product is monotone from the sign of its derivative. That interface only gives derivatives of integral functions; it does not license this load-bearing step, so the horizon-crossing exclusions are unproved.",
      "context_sha256": "685075608a267950b376d9304efe80ff054be1c1fe314beb96f9894015e4aa5e",
      "item_sha256": "7f85d836e2a32d677779befebe92c4ae190626c3aefe44bc0ed45a16187b35f5",
      "at": "2026-10-17T07:57:29.350Z"
    }
  ]
