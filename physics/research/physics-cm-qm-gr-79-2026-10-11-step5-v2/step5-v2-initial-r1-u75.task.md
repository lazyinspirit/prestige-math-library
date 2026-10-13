# Step 5 adjudicate: initial, round 1, unit 75

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-75-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u75.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"75",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:def-gr-causal-curves-and-reachability, 4:def-gr-causal-conditions-and-global-hyperbolicity, 8:def-gr-geodesic-congruence-and-kinematics, 8:def-gr-spacelike-initial-data-and-constraints, 9:lem-gr-kinematic-decomposition-identities, 11:thm-gr-minkowski-cauchy-and-global-hyperbolicity, 12:thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice, 12:cex-gr-achronal-set-need-not-be-acausal, 12:cex-gr-spacelike-hypersurface-need-not-be-cauchy, 13:ex-gr-flat-slab-vertical-line-proper-time.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-causal-curves-and-reachability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition lists lem-gr-causal-curve-calculus and lem-gr-maximal-geodesics-and-extension as prerequisites, but both interfaces themselves require this definition. These prerequisite cycles prevent the cited lemmas from justifying this item.",
      "context_sha256": "3f025ab90cb81e1e87ab0748df7421676719369b58ab2e51cece451d6470e4a3",
      "item_sha256": "fdc88681a7e23c75dc5cc1d9d23ec1f14b356e252fa853427b8ee0fdfedaa577",
      "at": "2026-10-12T20:28:42.191Z"
    },
    {
      "id": "def-gr-causal-conditions-and-global-hyperbolicity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) cites def-continuity-real for continuity of u:M→R, but its supplied interface defines continuity only for f:A⊆R→R. It does not justify continuity on a manifold domain.",
      "context_sha256": "02f27d0d67df3fe423899d59262b02f5d58a5d6d9f3fb700c0ab9c1516528d12",
      "item_sha256": "321428cadc6ebfd51cdc3b6b19a1790a76b00f6a3ae480585c0fefdfda5385b9",
      "at": "2026-10-12T20:28:30.465Z"
    },
    {
      "id": "def-gr-geodesic-congruence-and-kinematics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal circular justification: justified_by cites a lemma whose statement assumes B, θ, σ, ω and h are already defined here, so it cannot justify this definition’s well-definedness.",
      "context_sha256": "9dbe3c53f766fc305e42d16455bae2794e0921c5be334f01c67a641c9a85659a",
      "item_sha256": "77e5728ad8d523cf19324dfeeeb8649084f56a3a3afcd28b27c8ad5652a75e4b",
      "at": "2026-10-12T20:28:14.227Z"
    },
    {
      "id": "def-gr-spacelike-initial-data-and-constraints",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal dependency cycle: `justified_by` cites `lem-gr-constraint-projections`, whose supplied statement depends on this definition’s clause (b). The definition cannot be justified by a result that presupposes it.",
      "context_sha256": "3f46c23a1f03d2cba89c781d9fe658ef880ee46bdb6087bd4824f8c8fb2e7ada",
      "item_sha256": "be98d7198228bf8dfd4dcd1d15542754762e8b49b5e9c91f15505c90307e1cc9",
      "at": "2026-10-12T20:28:15.665Z"
    },
    {
      "id": "lem-gr-kinematic-decomposition-identities",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 attributes positive definiteness of the rest space to def-gr-observer-and-rest-space, whose interface says this is proved separately in lem-gr-observer-projection-decomposition. That lemma is absent from deps, so the orthonormal rest-space basis used in 2.1 and 4.1 is unjustif",
      "context_sha256": "e66fbe1bfe0016996422508df7f36aa1fe2898c03e9c34eeb8568a840ba434e9",
      "item_sha256": "f3dd7425c4b603c5f43f8e56ec144ee629d0a26211937584397474717f14a103",
      "at": "2026-10-12T20:27:36.119Z"
    },
    {
      "id": "thm-gr-minkowski-cauchy-and-global-hyperbolicity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L4] incorrectly says x is a slice chart for Σ_c: the definition requires coordinates R^3×{0}, while x(Σ_c)={c}×R^3. A reordered chart establishes embeddedness, but the cited restatement used in (b) is false.",
      "context_sha256": "63ef55f2b707f8f3f4992ed3a6023c97d59a2c80a1f3a6f9ea6d25f169446a61",
      "item_sha256": "dedc61f03858ad063c8e694273a8c83237b5f11f4994ca95193f0f864e17916c",
      "at": "2026-10-12T20:29:10.693Z"
    },
    {
      "id": "thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark claims logical independence, but this slab proves only that global hyperbolicity does not imply geodesic completeness. It gives no complete, non-globally-hyperbolic example to establish the converse non-implication.",
      "context_sha256": "a71b7b2ecbb4f7339039299aa72907c49a181857233a9bb88df7805a0b2e7c12",
      "item_sha256": "bb0db32180975acb1d1f8d8ddef03419ddd8d6034e6c32f0108fa7480d4dee7d",
      "at": "2026-10-12T20:29:32.947Z"
    },
    {
      "id": "cex-gr-achronal-set-need-not-be-acausal",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 says the straight path realizes causal reachability for all events when the displacement lies in the closed cone. For u=v, the constant path has zero velocity everywhere, so it is not a future causal curve under the cited definition, despite u≤u by equality.",
      "context_sha256": "8497505372f34f1896a810c4458476127723aaad51cc439b5271fe6281e807ea",
      "item_sha256": "9e723a0133b8dc8410523352b9ec33adbd53584aac873ba59f6fd57ec72b6bcb",
      "at": "2026-10-12T20:29:12.868Z"
    },
    {
      "id": "cex-gr-spacelike-hypersurface-need-not-be-cauchy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 falsely says x=(t,z) is a slice chart for Σ: the supplied definition requires image R³×{0}, but x(Σ)={0}×B. A permuted chart would work, but the cited interface is misstated.",
      "context_sha256": "b2ccf7ba838956ae7a61812d454d4d6aee477b6244068e28c59e4e7621263d3a",
      "item_sha256": "205316f18c57f2f74fffe2fe28a6fe8bf69a5ec6697042c527da399afbf6828e",
      "at": "2026-10-12T20:28:50.612Z"
    },
    {
      "id": "ex-gr-flat-slab-vertical-line-proper-time",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The mathematics item asserts that an ideal clock’s reading difference equals the metric proper-time increment by invoking a physics postulate. Mathematical items cannot depend on physics, and that postulate is absent from deps.",
      "context_sha256": "8e1a704e161caa1f01980611026c10c6bb83801a3f1f2299a14eb1cec2a4bb1b",
      "item_sha256": "0765da04d02a62f980c3ae603f1639803902f07439a5f283983e7cbcb973c45a",
      "at": "2026-10-12T20:28:30.458Z"
    }
  ]
