# Step 7 adjudicate: initial, round 1, unit 1

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u1.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"1",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-smooth-cobordism-triad-for-morse-theory, 0:lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum, 0:lem-standard-handle-admits-an-adapted-morse-function, 1:lem-boundary-product-function-on-a-collared-cobordism, 2:lem-gluing-handle-morse-models-along-collars, 2:lem-interior-slab-handle-attachment, 2:lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods, 3:ex-relative-handle-decomposition-of-a-cylinder, 4:lem-handles-of-equal-index-can-be-attached-on-one-level, 4:thm-morse-rearrangement-by-index.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-smooth-cobordism-triad-for-morse-theory",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The collar-existence assertion invokes thm-collar-neighborhood-theorem without its required hypothesis AC_omega. Collars can be stipulated as data, but the cited interface does not license the unconditional existence claim.",
      "context_sha256": "2f5e807fb27e2328b7196d3242b6748496cbcdceda4e03491cb1b887ffd8e435",
      "item_sha256": "393e48b5a3501af18cec5169e6b4e2fc23787d14b21bccf1ba5318ae7ff10b9f",
      "at": "2026-10-06T06:51:53.066Z"
    },
    {
      "id": "lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For n=2, splitting at M creates unrounded right-angle corners at its endpoints. Thus the Y_i in 1.1 are manifolds with corners, and the smooth diffeomorphisms in 2.1 are not established. F4 only covers rounding the original attaching seam.",
      "context_sha256": "f2aa049ab06bf5f00ed73961840abba5490bd69f884cccc825d0574b6003c4c5",
      "item_sha256": "8b9576755d9d0f231a2a294e461f3936090ece6db1090a89a9d67b92413d80c3",
      "at": "2026-10-06T06:52:19.193Z"
    },
    {
      "id": "lem-standard-handle-admits-an-adapted-morse-function",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims adaptation: for n=2,k=1, the rounded handle has connected boundary, on which F takes both -1 and +1. The supplied triad definition requires each boundary component to lie in a constant endpoint face. The proof establishes only partial collar adaptation.",
      "context_sha256": "8c2d63c0b7ce6afb9e18eb39fb826c90d66ae46115105de00c73c02744465425",
      "item_sha256": "6266ab190e400c5f6f57a087d100f99349622ce59e73b105c53988a23505529d",
      "at": "2026-10-06T06:52:21.194Z"
    },
    {
      "id": "lem-boundary-product-function-on-a-collared-cobordism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 inaccurately restates the triad interface for n=0: it requires (n−1)-dimensional face submanifolds, while the dependency explicitly introduces no dimension −1 and instead sets both faces and collar domains empty.",
      "context_sha256": "1c9d514ff52078dfb5e7aa1ba83b6bbf9b2de50d4a6d436cafb1b90a7c0dfae2",
      "item_sha256": "61462f00b8991438b66b105345e26c71ec8c840dfbdfdd7ac89c54e76d9e758c",
      "at": "2026-10-06T06:51:48.820Z"
    },
    {
      "id": "lem-gluing-handle-morse-models-along-collars",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 and step 2.1 strengthen the supplied theorem: it guarantees attachment of some k-handle, but neither the prescribed framed embedding h nor a diffeomorphism fixing the incoming face. The proof does not establish these relative conclusions.",
      "context_sha256": "843737a6973cc47b487834e06364f4bcd902e5f24c5c798dfcbf37e3170beee2",
      "item_sha256": "08f30f056d8a627ea8d638c683d55d2e342d87deb367056131c805c53277b642",
      "at": "2026-10-06T06:52:29.956Z"
    },
    {
      "id": "lem-interior-slab-handle-attachment",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 2.1 and 3.2 require attachment diffeomorphisms that are identity near M0. F1/F2 supply only abstract diffeomorphism types; the asserted support property is neither supplied nor established. A collar alone does not justify extension by identity.",
      "context_sha256": "0f535240ebbd45510e546dc05cc7ae9e0219bfc1300f916d91fbc16f979528f9",
      "item_sha256": "d9a0ebeab00fcb24c3889c1707d0efba15438f36576d7f8efa036d2c85d18be1",
      "at": "2026-10-06T06:52:05.389Z"
    },
    {
      "id": "lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The hypotheses allow n=0: take two points with distinct values in (0,1) and X=0. Then f^{-1}(v)=∅, but assertion 2 calls it a closed (-1)-manifold, contrary to the triad interface's explicit convention. Require n≥1 or handle n=0 separately.",
      "context_sha256": "b96549b128b606e242044c8183ea40212c62a1e864a21cdcd547601750471e0d",
      "item_sha256": "041fb5bba5e34473117eb2ddb34f08d84fab62d7c44fb13579e1f67bff148a60",
      "at": "2026-10-06T06:52:23.489Z"
    },
    {
      "id": "ex-relative-handle-decomposition-of-a-cylinder",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately places all products in the category of def-smooth-manifold, whose interface requires manifolds without boundary. For M a point, W=[0,1] is outside that category. The proof must use the manifold-with-boundary category specified by F1.",
      "context_sha256": "b8b5e0780c71510150398cefd11e7d7205571bf662f43f2dc03a936620890223",
      "item_sha256": "497b894c9b729e86d34beb51bdc5a88ce651fee6a851fdd716d1afb213c3901d",
      "at": "2026-10-06T06:52:17.417Z"
    },
    {
      "id": "lem-handles-of-equal-index-can-be-attached-on-one-level",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 excludes other indices at c without justification. A torus with both saddles at c, disjoint from a sphere with minimum c, satisfies the Statement for k=1. Crossing c creates a new component, which attaching only 1-handles cannot do.",
      "context_sha256": "32c08bb8e17aa12ccc3cfaa497e6494aa0d945c899a71f5acd7b6929e794bdfb",
      "item_sha256": "fb73be74ff712cfb7905aa2719bbce847f8bf6d620a688cd86b3e6eddcaf112b",
      "at": "2026-10-06T06:52:30.888Z"
    },
    {
      "id": "thm-morse-rearrangement-by-index",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 unjustifiably requires f^{-1}[a,d] to avoid the fixed boundary collar. A critical-point-free collar can meet every intervening level, for example on a separate product component, so no such band need exist.",
      "context_sha256": "10a2749fddf4115b8f5562793d672fd2df5bb5071820a94f3055c4abca35c73f",
      "item_sha256": "6ef6959075456d1c7cbd784d5129488f1848a616ce8db047ca9367d50e2c09bb",
      "at": "2026-10-06T06:52:47.499Z"
    }
  ]
