# Step 7 adjudicate: initial, round 1, unit 11

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u11.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"11",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:cor-neumann-solutions-are-unique-modulo-componentwise-constants, 1:def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, 2:ex-one-dimensional-green-function-on-an-interval, 3:thm-minus-laplacian-of-the-fundamental-solution-is-dirac, 4:thm-newtonian-potential-solves-poisson-distributionally, 5:thm-newtonian-potential-for-holder-data-is-classical, 6:ex-newtonian-potential-of-a-radial-density.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "cor-neumann-solutions-are-unique-modulo-componentwise-constants",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Statement omits ACω, but step 2.1 invokes the first Green identity, whose supplied interface requires ACω. The Facts add that assumption, so the proof establishes the stated conclusion only under an extra hypothesis.",
    "context_sha256": "ebde36928194f0d2b187519384bd4994b19c28384cab1331691ed68b5218b75f",
    "item_sha256": "5f9bfdb4efc9e22a41855aacfc46ce982dc104aa70fe449816e59c4a33d0d68c",
    "at": "2026-09-29T11:22:54.425Z"
  },
  {
    "id": "def-laplace-fundamental-solution-with-positive-minus-laplacian-sign",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title calls Φₙ a fundamental solution for n≥2, which requires −ΔΦₙ=δ₀ by F5. The proof establishes only local integrability in those dimensions and explicitly defers the Dirac identity to a later theorem.",
    "context_sha256": "539410db70e6a4656922543de2bb89add47f273c0a59799910269803dcb0be24",
    "item_sha256": "fbf00ec3dc8e085cd8addf7b72f1d17fbceb745564487ad9453dc5c584ba7f79",
    "at": "2026-09-29T11:22:41.629Z"
  },
  {
    "id": "ex-one-dimensional-green-function-on-an-interval",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F2 inaccurately says the cited Laplace definition verifies −Φ₁″=δ₀. Its supplied interface covers n≥2 and only mentions −|x|/2 as a one-dimensional analogue; it does not establish that identity.",
    "context_sha256": "fcb46d7c3b8e2aadbc404d21658af77c7802bd7199d56564c0ae32d724784123",
    "item_sha256": "9eba439a92e3394c9aad99c8df80a394aa409f34a7068edb27fe9cc1d6994d9a",
    "at": "2026-09-29T11:23:13.255Z"
  },
  {
    "id": "thm-minus-laplacian-of-the-fundamental-solution-is-dirac",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title says the kernel has unit Dirac Laplacian, which asserts ΔT_Φ=δ₀. The statement and proof establish −ΔT_Φ=δ₀, hence ΔT_Φ=−δ₀. The title has the wrong sign.",
    "context_sha256": "487418bd99e56646ca52eb691d4da0b5a1e2b51d48b450505ef6041df7aea055",
    "item_sha256": "53c2016218dffa34d758632812237da1b3ed2ee6e25888dc5efa0207e9b6ec54",
    "at": "2026-09-29T11:22:45.633Z"
  },
  {
    "id": "thm-newtonian-potential-solves-poisson-distributionally",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F15] inaccurately restates its cited theorem: that interface covers countable unions of null subsets of R only. Step 5.1 applies it to exceptional sets in R^n with n≥2, which the cited result does not license.",
    "context_sha256": "23ffee39a6b976b2d6e4f1f3dda38825a85709bf9ccad3c01e930b2ebf7a3d65",
    "item_sha256": "a198b3fd517c81aba4227bb7e79c31e4cc802349c69fe9df00d276443378a6e6",
    "at": "2026-09-29T11:22:47.625Z"
  },
  {
    "id": "thm-newtonian-potential-for-holder-data-is-classical",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The cancellation formula quantifies 1≤i,j≤n, but the supplied Euclidean and partial-derivative interfaces index coordinates by 0≤k<n. Thus ∂_n is undefined, while the formula omits the valid coordinate 0.",
    "context_sha256": "91b5cddeed5ebcf18b4ca581af7e9c4d432921a4f456147ba41194fa69e205b6",
    "item_sha256": "9dd19a2f6f918324c6cc050c8357d0e4d712cff79b6e805c093726332896d9e4",
    "at": "2026-09-29T11:23:20.786Z"
  },
  {
    "id": "ex-newtonian-potential-of-a-radial-density",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F22] inaccurately restates its dependency: standard basis vectors are indexed 0 through n−1, so e₁ does not exist when n=1. The proof only uses n≥2, but the stated local dependency claim is false.",
    "context_sha256": "a387948ce784f678bdc88d43fe4dbbe50d2111f2df7e34935caaea4be3d01bd0",
    "item_sha256": "227595c6ae7952d5ca8dabc27707998e3b74c14e1ca32192e94ff1e553cbd2e6",
    "at": "2026-09-29T11:22:54.960Z"
  }
]


