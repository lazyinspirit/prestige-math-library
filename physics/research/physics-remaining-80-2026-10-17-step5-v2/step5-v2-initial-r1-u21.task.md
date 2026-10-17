# Step 5 adjudicate: initial, round 1, unit 21

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-21-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u21.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"21",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:alg-emg-rational-electrovac-verification, 0:def-emg-xs-geometric-electrovac, 0:def-emg-xs-rn-data, 2:lem-emg-xs-kn-rational-calculus, 2:prop-emg-xs-rn-curvature, 6:thm-emg-xs-rn-verification.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-emg-rational-electrovac-verification",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the procedure requests F^{ij} and uses F_j{}^k but never defines how to raise indices with g^{-1}, leaving required outputs and residuals underspecified.",
      "context_sha256": "3ec444df1ca4833498edb3069704636ff91b39b49d0b6ed4295d9f41352830b3",
      "item_sha256": "d59179581817e005d49420022b04a351595a0e8a419d0200279041802fa2de8a",
      "at": "2026-10-17T07:55:46.369Z"
    },
    {
      "id": "def-emg-xs-geometric-electrovac",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The reparametrization claim omits the dependency’s diffeomorphism hypothesis. A higher-degree orientation-preserving covering multiplies the pulled-back integral by its degree; specify an orientation-preserving diffeomorphism.",
      "context_sha256": "5e67ae28c7098294359ab7293458314cc61bacafd45afa2f2c65ac16ac86eec5",
      "item_sha256": "2c21b9e273f7175f6aba8c79a938f400dc7bf0488b6b6b530dad25ad0d5b95dd",
      "at": "2026-10-17T07:55:19.023Z"
    },
    {
      "id": "def-emg-xs-rn-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item is declared mathematics but depends on `def-gr-schwarzschild-exterior-model`, a GR model datum with physical parameters, as a mathematical premise. Math items cannot depend on physics.",
      "context_sha256": "08fb5802ba5e1bcfd174d6ac0f27cef3e10401fd9188f01c08d8b4293593e96a",
      "item_sha256": "71d5333fe76d50cea73422d1c97e4996c39c4452540940822963063974f70dff",
      "at": "2026-10-17T07:57:25.231Z"
    },
    {
      "id": "lem-emg-xs-kn-rational-calculus",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The mathematics-domain lemma lists [[def-emg-xs-geometric-electrovac]] as a mathematical premise (F7), but it is a physical model definition. Mathematical items cannot depend on physical items, even to obtain the definition of Q.",
      "context_sha256": "e0381800a5cb8d3bbadcbacdbc37bbf3fee763b082eb94a1d0c3ec8af17e41c6",
      "item_sha256": "08ebcf30e27e77e6916cc3f6a6c135f55abd2d3afa9f9cc11b8fcf0b3276f28e",
      "at": "2026-10-17T07:56:27.064Z"
    },
    {
      "id": "prop-emg-xs-rn-curvature",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 claims the zero-parameter metric is flat, but [F1] gives only curvature identities and [A1] only parameter assumptions. Vanishing listed invariants do not imply flatness; the needed RN metric definition is not supplied.",
      "context_sha256": "e56cc89711e054a4e5c0f7f657863f38608ced23e7360aa7b575550826537760",
      "item_sha256": "d814df17de8f6bde2dbfc453e7b7827bedd319cf2a7d2f84904c4502f16ef69d",
      "at": "2026-10-17T07:57:14.519Z"
    },
    {
      "id": "thm-emg-xs-rn-verification",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem is classified mathematics but uses lem-emg-maxwell-observer-stress (F5/step 3.1), a physics dependency with action-variation premises, as mathematical justification. Physical items cannot justify a mathematical item.",
      "context_sha256": "87d7dba80a1f3be58e067bbe940af4d6689df29b3706ce05e9daab8cb6296a69",
      "item_sha256": "3af0d94aa136a283fb624c08ec2a6f44126179d29d34b75f11fed43c29f95d27",
      "at": "2026-10-17T07:56:24.180Z"
    }
  ]
