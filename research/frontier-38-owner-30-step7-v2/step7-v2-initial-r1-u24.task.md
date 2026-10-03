# Step 7 adjudicate: initial, round 1, unit 24

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u24.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"24",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-nonaffine-affine-and-finite-morphism-fppf-descent, 1:lem-nonaffine-affine-group-faithful-representation, 1:lem-nonaffine-commutative-torsor-norm-map, 1:lem-nonaffine-high-frobenius-smooth-image, 3:lem-nonaffine-centre-is-stable-jet-kernel, 5:thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism, 8:lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nonaffine-affine-and-finite-morphism-fppf-descent",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 falsely asserts that all refinements of a fixed affine cover are finite. The cover {Spec C[t]} has the infinite affine refinement {D(t-a): a∈C}. Quasi-compactness guarantees a finite subcover, not finiteness of every refinement.",
      "context_sha256": "d346d5505ca5603034020a1ac32ea82c3ae4396ce6d574dee31791c16fc35d6a",
      "item_sha256": "e7fac6e3a70be826163e1b2d1f259a430408a647afcbc1279ad2c98f34b04178",
      "at": "2026-10-03T14:26:36.986Z"
    },
    {
      "id": "lem-nonaffine-affine-group-faithful-representation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title omits the essential finite-type hypothesis. The affine group scheme ∏_{n≥0} G_a has no faithful finite-dimensional representation: any such representation depends on finitely many coordinates and kills the remaining factors.",
      "context_sha256": "bf9ac6fecad5e71cb71ac498d346efa2f262d89c364a84b2e4541db7ca67fe28",
      "item_sha256": "a2879c585c9f833646de67b7341c3d4df5b28afb826e473d7e123d68ebe57a04",
      "at": "2026-10-03T14:26:39.981Z"
    },
    {
      "id": "lem-nonaffine-commutative-torsor-norm-map",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 overstates its dependency: the supplied interface characterizes finite Galois extensions but does not assert existence of a Galois closure or the degree-many embedding count. Step 1.1 invokes both without establishing them.",
      "context_sha256": "6833ada4d34cb1334df5a0702ed19715b0d1115b55718f5cbf20d1e3fb106394",
      "item_sha256": "109f6fde5bd0a11a158a2efca54f46df6eb1a3399d7a366ff230749c03dda97d",
      "at": "2026-10-03T14:27:13.619Z"
    },
    {
      "id": "lem-nonaffine-high-frobenius-smooth-image",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately restates the geometric-regularity field-tests interface as also equating geometric regularity with smoothness. That interface supplies no such equivalence, so step 3.1's smoothness descent is not licensed by its citations.",
      "context_sha256": "943f9e663441deab9674f4b71a2b429ae5f577b1d9b85780a98957684d6c570c",
      "item_sha256": "bc8c92c6e3a95c3e0977a96ad23ccd7bc1e844bd199b7ab7d9f533b194189988",
      "at": "2026-10-03T14:26:36.523Z"
    },
    {
      "id": "lem-nonaffine-centre-is-stable-jet-kernel",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] drops the cited jet lemma’s scheme-faithfulness hypothesis and asserts stabilization and detection beyond its supplied interface. Conjugation need not be scheme faithful (e.g. for an abelian variety), so steps 1.1–2.1 are not licensed.",
      "context_sha256": "d0d85e688c2aa1efbf9eb77f36d4de2d87c63b4ac51ec3cf106b2088fee1aca1",
      "item_sha256": "c26003c9633db7efc1063ce464c46a2f4c6d8ffb531eca3541539a04ebfbe956",
      "at": "2026-10-03T14:27:00.563Z"
    },
    {
      "id": "thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title omits geometric integrality and is false for disconnected smooth groups. Over C, map the constant group Z/2 to an elliptic curve by e↦0 and the other element↦P with 2P≠0. This pointed morphism is not a homomorphism.",
      "context_sha256": "46351e75a1525b8a345f22077130ba29178ed15563d0bb454517364f1be2256c",
      "item_sha256": "2e903f48ab503aa875adc4887f9692ce9b28af79c0122801e62f301105f06d03",
      "at": "2026-10-03T14:27:42.952Z"
    },
    {
      "id": "lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 and step 2.1 invoke composition for arbitrary smooth morphisms, but the cited theorem covers only locally standard smooth maps. No supplied dependency or argument bridges the fibre-based definition to that hypothesis.",
      "context_sha256": "ba0a8d4723332f3451881fc8e7cc960c31e94b89a9e1005de5476d42ae24e9fc",
      "item_sha256": "17c90efbc99055ecf08901683c369f7321f7e13cb9de56b2ef15a605ff575f23",
      "at": "2026-10-03T14:26:51.389Z"
    }
  ]
