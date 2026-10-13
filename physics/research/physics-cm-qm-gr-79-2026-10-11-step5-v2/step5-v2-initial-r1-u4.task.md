# Step 5 adjudicate: initial, round 1, unit 4

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-4-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u4.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"4",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cm-holonomic-constraint-and-ideal-reactions, 0:def-cm-time-dependent-lagrangian-and-action, 1:def-cm-nonholonomic-velocity-constraint-law, 2:prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets, 2:thm-cm-endpoint-action-differential, 2:thm-cm-stationarity-iff-euler-lagrange, 3:prop-cm-hamiltonian-branch-identities, 3:ex-cm-ideal-pendulum-equation-and-stability, 4:rem-cm-scope-of-the-legendre-map, 6:rem-cm-scope-of-point-symmetry.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-holonomic-constraint-and-ideal-reactions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The text assigns uniqueness of the resulting acceleration to the cited lemma, but that lemma gives a unique multiplier for a given reaction. Acceleration is determined only after twice differentiating the constraint, as the proposition’s interface says.",
      "context_sha256": "910d494df55a341bc75f75dbc1b70a95b1511824b5d60b88ae92337974c742a5",
      "item_sha256": "7a5e367a775036554222410f997d4f36d88aa2d86b64dd0ccbf1a964d838a265",
      "at": "2026-10-12T19:18:47.243Z"
    },
    {
      "id": "def-cm-time-dependent-lagrangian-and-action",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "False local dependency restatement: def-ck-and-multi-index-notation defines C^k only on open domains and gives no closed-interval extension convention, so the claim that this is “exactly” its convention is unsupported.",
      "context_sha256": "ed5726caf837c1c0e4845e12de5649d9842770a98e178a3171d6c21bffd90558",
      "item_sha256": "ca588973d56435ea0efaefd10f62ad4ee1d47ea09495ea55577f750675b249b1",
      "at": "2026-10-12T19:20:52.007Z"
    },
    {
      "id": "def-cm-nonholonomic-velocity-constraint-law",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A vakonomic motion on all of I0 is defined by stationarity on only some [a,b]⊂I0. A curve constant on that subinterval but arbitrary outside it qualifies, even if it violates the constraint elsewhere; stationarity must cover the claimed motion domain.",
      "context_sha256": "b5cd260dead191ca2c44fe36eaf17588c6da67dfde67e99f6043a491a48998aa",
      "item_sha256": "6fdb1bb24e803be75ccb1e77b19ae4e5aee785063076dd922f9d0846b50841a0",
      "at": "2026-10-12T19:19:02.889Z"
    },
    {
      "id": "prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: this mathematics item depends on the physics definition `def-cm-nonholonomic-velocity-constraint-law`, contrary to the rule that mathematical items cannot depend on physics. Its bracket proof is otherwise sound.",
      "context_sha256": "0a1cd91f4061a1b432ce5c4fad844f4263230dd35c52712ccc42410904292fb2",
      "item_sha256": "258e3fab08bc35cf7e8b722763cece53ce85c7ebc65087a261b19a51a8110122",
      "at": "2026-10-12T19:19:55.882Z"
    },
    {
      "id": "thm-cm-endpoint-action-differential",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For allowed t<t₀, W uses an oriented integral, but the dependencies omit def-oriented-integral. def-darboux-integral defines ∫ₐᵇ only for a<b, so W is undefined on part of the stated domain and the differentiation argument cannot cover it.",
      "context_sha256": "d839a9ca920e24d31c1e06501dea5e45c687063363ffb30470da3feccd8adf93",
      "item_sha256": "fd0a3957f84fc53bb8ccf2b427d80a2f1060a2ca8b2d01eb776fbbfed1ad99b6",
      "at": "2026-10-12T19:20:54.694Z"
    },
    {
      "id": "thm-cm-stationarity-iff-euler-lagrange",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 attributes closure of C² interval functions under sums and scalar multiples to def-ck, whose supplied interface only defines C^k Euclidean maps and states no such closure result. This is an unsupported local dependency restatement.",
      "context_sha256": "effe5521c9884ee1c22261d037b6b9c7c95c820670b64b42f5872fa47cc71af3",
      "item_sha256": "0f1d0d1d8a3b9fea43d9db7ca570762524f738ebcce22f9a40dabf58d99c2db3",
      "at": "2026-10-12T19:20:47.631Z"
    },
    {
      "id": "prop-cm-hamiltonian-branch-identities",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 misstates the cited definition: its extension-based C² convention is for curves q:[a,b]→U, but this item uses q:I→U on an open interval, which need not extend past I’s endpoints. The stated dependency therefore does not license that restatement.",
      "context_sha256": "98762d8b40385579cc5dc52561e8c6c75ee0ba95119a56e455f591c6bfa74d8e",
      "item_sha256": "937417e5cb9656d9956373480a6dad9a94753151d54ff10f36afceafb2e113e0",
      "at": "2026-10-12T19:20:06.795Z"
    },
    {
      "id": "ex-cm-ideal-pendulum-equation-and-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause 2 is false as stated: I is never required to be an interval. On a disconnected domain, two solution segments can have different energies; the equation holds on each component, but energy need not be constant on all of I. The cited d’Alembert corollary also requires I to be",
      "context_sha256": "bcecaf4e3e48936a41936708713804dcf064b2fd4a6ee55063356d03cd1c54be",
      "item_sha256": "95b0c8c7962d28b5acfb7ebedd67ed0df543706582d2e8b32d0ebbc901714c8f",
      "at": "2026-10-12T19:20:20.004Z"
    },
    {
      "id": "rem-cm-scope-of-the-legendre-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark cites and restates thm-cm-hamilton-phase-action-stationarity for its elimination claim, but omits it from deps and dependency_roles, leaving its prerequisite graph incomplete.",
      "context_sha256": "43a012d41686324e39f3bb35c679d5e0c851c487806820b6fde94975a46b1273",
      "item_sha256": "8da656abead58dc62a05c89d37d3344bf7d6f82ad9c99455af6360d993f313f1",
      "at": "2026-10-12T19:20:37.296Z"
    },
    {
      "id": "rem-cm-scope-of-point-symmetry",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The first remark overstates the supplied definition: it allows an arbitrary Lagrangian chart and defines no kinetic/potential split. The point-symmetry identity need not involve both, so this local restatement is inaccurate.",
      "context_sha256": "68ecea6f112176a01efa11fd9d68610426936be23ccc42156c013f1f04b17f52",
      "item_sha256": "8a1052f4d25e4740f014ad30f2977fcc5188261841ad9d83b0a21b40aa40a29c",
      "at": "2026-10-12T19:20:27.447Z"
    }
  ]
