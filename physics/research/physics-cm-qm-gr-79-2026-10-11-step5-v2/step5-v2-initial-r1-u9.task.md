# Step 5 adjudicate: initial, round 1, unit 9

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-9-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u9.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"9",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cm-mass-distribution-and-inertia-matrix, 1:lem-cm-mass-moments-are-finite, 2:lem-cm-matrix-curve-derivative-rules, 2:lem-cm-skew-matrix-cross-product-correspondence, 5:lem-cm-euler-angle-angular-velocity, 6:thm-cm-linearized-torque-free-euler-equations.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-mass-distribution-and-inertia-matrix",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the cited finiteness lemma indexes R^3 coordinates by {1,2,3}, but this library indexes R^3 and M_3 by 0,1,2. It does not define coordinate 3 or cover coordinate 0, so it cannot justify all componentwise moments.",
      "context_sha256": "7df85b9af11393372d786ae52ff55f0524ce5064b08404e5c2f3957523e7ed30",
      "item_sha256": "37cda818c8926b2dc43257d6fed8d4530089d210cc3f0212f9b2b7ac27e61b9f",
      "at": "2026-10-12T19:28:51.378Z"
    },
    {
      "id": "lem-cm-mass-moments-are-finite",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The zero measure satisfies the hypotheses, but it is not a “mass distribution” under the supplied definition, which requires positive total mass. Thus the claimed first moment and inertia “of the definition” are outside that definition’s domain.",
      "context_sha256": "2858510014ae1e8519109e4b76fea33d0e8c71849ac196107a4ea7dce5320065",
      "item_sha256": "ecefb5f51ab5432bf28ca33788077b746c3c0f54294535f1804f4c74fbd8aead",
      "at": "2026-10-12T19:27:50.186Z"
    },
    {
      "id": "lem-cm-matrix-curve-derivative-rules",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement and proof use “trace” without defining it or citing a dependency that identifies trace as the sum of diagonal entries. Step 4.1 establishes zero diagonal, but does not justify the trace conclusion under the supplied interface.",
      "context_sha256": "ea83fa419e85758646a88dcba9c0de23022f2eaeafef1cf74eacb21dc49ab240",
      "item_sha256": "c78f471ceb3315916902a94b5fe4fc339ea125136c2d6b2e5cd9a946d81fb300",
      "at": "2026-10-12T19:28:09.832Z"
    },
    {
      "id": "lem-cm-skew-matrix-cross-product-correspondence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item uses 1-based coordinates and matrix entries (for example, $\\omega_3$ and $\\Omega_{32}$), but the supplied interfaces index vectors and matrices from 0 to 2. These are out-of-range or misidentified coordinates, so the statement and proof do not match the library’s objects",
      "context_sha256": "d38c9933325eedb7fd4c93c43da527749d2e496893cfb98b68e895c64f52ea4e",
      "item_sha256": "cbc977791ed94b057c714ecd023ac347c24d0838a58f737663cff5860c556c0b",
      "at": "2026-10-12T19:27:45.805Z"
    },
    {
      "id": "lem-cm-euler-angle-angular-velocity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 cites the power-series definition and derivative rules for sin²ψ+cos²ψ=1, but their supplied interfaces do not establish it. Step 5.1 relies on that identity without proof; derive it, for example, from Rz(ψ)ᵀRz(ψ)=I.",
      "context_sha256": "526997ed56c93f3264a784fa7a135c59a8b9be549af5bf1f27bf4ee884641193",
      "item_sha256": "44a7ca74831bf523c9ffa1f4c3ea180d732e86ea436bb1e7db00370a2ccf1ebf",
      "at": "2026-10-12T19:29:03.291Z"
    },
    {
      "id": "thm-cm-linearized-torque-free-euler-equations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: this mathematics theorem lists the physics theorem `thm-cm-euler-equations-and-torque-free-invariants` as a mathematical-premise dependency, violating the mandatory rule that mathematical items cannot depend on physics.",
      "context_sha256": "8550e61ee80f0fc8b820209adae01cb54d06aa60511fb0cabe97327f44ce4632",
      "item_sha256": "be8e37e4328a3ac885eaab377980cc28402b1ec2f7dd6e678fba8543876cc901",
      "at": "2026-10-12T19:28:22.296Z"
    }
  ]
