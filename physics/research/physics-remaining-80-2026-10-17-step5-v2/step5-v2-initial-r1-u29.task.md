# Step 5 adjudicate: initial, round 1, unit 29

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-29-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u29.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"29",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-csm-kl-chain-disjoint, 1:lem-csm-information-contraction-pinsker, 2:def-csm-full-marked-model, 4:thm-csm-uniform-phase-shell-entropy, 8:pthm-csm-full-interacting-phase-equivalence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-csm-kl-chain-disjoint",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The spatial-block claim that zero-occupancy blocks contribute zero is not licensed by arbitrary Q_i: for X_i={empty,occupied}, P_i=δ_empty and Q_i(occupied)=p∈(0,1), D(P_i||Q_i)=-log(1-p)>0. No conditioned-reference or singleton-space assumption is stated.",
      "context_sha256": "be980a97e3dca8a77d5f0c03322069b08ceada26b547f0247fc00acd4b0493d5",
      "item_sha256": "113e1087fb696363abd122f17b57bc0f79c8658f803bf934ef2ffd3680c5add5",
      "at": "2026-10-17T08:01:46.475Z"
    },
    {
      "id": "lem-csm-information-contraction-pinsker",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 states the variational identity for D as defined by def-tdmath-finite-region-relative-entropy, but this item uses def-kullback-leibler-divergence and supplies no identification of the two. Step 1.1 therefore does not establish contraction for the stated D.",
      "context_sha256": "97c0cc21e297bed4858dd746fa7fec1b107eb7a4fae76f080650770ef46c67e5",
      "item_sha256": "58fbc348ccd9cf23ffae572a37a3a45a92c3ef7c74e0d8cef5ebd2cc9295c820",
      "at": "2026-10-17T08:00:42.550Z"
    },
    {
      "id": "def-csm-full-marked-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The temperature scale is underdefined: k_B appears in β_phys=1/(k_BT) without a definition or cited supplier. Thus b and the temperature-dependent momentum law are not fixed by the item.",
      "context_sha256": "ea5a27387bb9fad3e1e59602e87630f3bad8c18d2eda44bb2f021226378011e5",
      "item_sha256": "62450974aa8cd61295e94fe29b7b30902812fca25e65d5fb457a5824a82715c4",
      "at": "2026-10-17T08:01:38.894Z"
    },
    {
      "id": "thm-csm-uniform-phase-shell-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 attributes nonnegativity of relative entropy to the supplied definition and chain lemma, but neither states it. Step 2 relies on that unsupported fact for D_n≥0, which is essential to the claimed limit.",
      "context_sha256": "259bac9436007b279fb004d6e28b0df5b9a36d35b7b8a50c9197bc2382bc5fcc",
      "item_sha256": "17a51ffde81e2084d49c921927a4078c337c49595baad1a5d435f98e15f3141c",
      "at": "2026-10-17T08:01:16.478Z"
    },
    {
      "id": "pthm-csm-full-interacting-phase-equivalence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] covers fixed bounded half-open cubes Δ⊂[0,∞)^d (or their translates). The item never gives its local region that geometry, yet step 2.1 applies [F2] to an unspecified region, so the momentum limits are not derived for the stated scope.",
      "context_sha256": "b9e437f33597b556aa17bd3694b994981ca567eee2c8e10185c6131ab9a636e7",
      "item_sha256": "805e543574b4c94b480cc0f18a198c7122abcc91c60d4022ab06962e1b3ba1bb",
      "at": "2026-10-17T08:00:50.413Z"
    }
  ]
