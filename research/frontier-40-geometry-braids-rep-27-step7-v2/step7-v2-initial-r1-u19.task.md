# Step 7 adjudicate: initial, round 1, unit 19

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"19",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-abstract-root-datum-and-its-weyl-group, 6:def-parabolic-subgroup-of-an-affine-algebraic-group, 17:thm-chevalley-centralizer-radical-and-reductive-centralizers, 20:lem-reductive-center-radical-and-semisimple-quotient, 20:thm-cocharacter-limit-subgroups, 21:lem-homogeneous-curves-and-automorphisms-of-p1, 22:thm-rank-one-connected-groups, 26:thm-weyl-group-borel-chambers, 28:lem-standard-levi-subgroup, 31:ex-standard-parabolics-in-gl-n.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-abstract-root-datum-and-its-weyl-group",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The second paragraph attributes attachment of root data to split reductive groups to the torus-lattice lemma. Its supplied interface establishes only character/cocharacter duality for a split torus; it supplies no roots, coroots, or root-datum construction.",
      "context_sha256": "00433f0cd085dd4932756f8a1c5c9f317fb31373164d61f1b49ba16fa5e81d3f",
      "item_sha256": "9240bc0c14170af2e3a68de75e2cb680c3ef91352ef692221eac9acb734ee133",
      "at": "2026-10-05T19:58:45.825Z"
    },
    {
      "id": "def-parabolic-subgroup-of-an-affine-algebraic-group",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The proper⇔complete equivalence is ill-typed: def-complete-variety requires an integral scheme. Take G=(Z/2Z)_k and P=1; G/P is two disjoint copies of Spec k, hence proper but not integral, so the cited definition of completeness does not apply.",
      "context_sha256": "326bff300db738243c5790f3bd57c62d320b0d802a7f129de33650cc8014121a",
      "item_sha256": "1e159d583cdfc8694161d0c3b7febcc918a6b1738c2e0c38a91f58cf56c99ef2",
      "at": "2026-10-05T19:58:44.643Z"
    },
    {
      "id": "thm-chevalley-centralizer-radical-and-reductive-centralizers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 inaccurately asserts finite weight decompositions for all torus representations. The rational G_m-representation k[t,t^{-1}] has infinitely many weights. The cited interface guarantees finitely many weights only in finite dimension.",
      "context_sha256": "ffde055d450e0dca222566f691def744d156b413011423949f17c9304fe1893e",
      "item_sha256": "6a27b1d26b2b09246b1ed711eb4f8a59667098a832efc34f7e450b860d3a2cd8",
      "at": "2026-10-05T19:58:53.583Z"
    },
    {
      "id": "lem-reductive-center-radical-and-semisimple-quotient",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 incorrectly extends the cited eigenspace lemma to arbitrary tori. The real norm-one torus acts faithfully on R² but has no nontrivial real characters, so this representation has no character-weight decomposition over R. A splitting hypothesis is required.",
      "context_sha256": "948956c1e39343b114ed7a7efd9d171b903fd0a730a43ef573f923ca72a9ec29",
      "item_sha256": "ffc68f711e8d13daa7c7adc5cd483f135754f3f6c8a2283e18747b6c135b5776",
      "at": "2026-10-05T19:58:48.308Z"
    },
    {
      "id": "thm-cocharacter-limit-subgroups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 omits the affine hypothesis required for a unique smooth closed concentrator. For X=P¹ with t·[x:y]=[tx:y] and Z={[0:1]}, X(Z)=A¹ is not closed in X. The supplied interface asserts only a local immersion in this generality.",
      "context_sha256": "e0477068b8a2093f07702b1f3aa166aa1270afa5285e8a6d5a4234d87228d790",
      "item_sha256": "edb111820274f4e67767196f889a8a8ad441e06f0a6332ca499236eb7a211a9c",
      "at": "2026-10-05T19:58:23.385Z"
    },
    {
      "id": "lem-homogeneous-curves-and-automorphisms-of-p1",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 falsely asserts a weight decomposition over k for every torus representation. The cited interface allows nonsplit tori: the real norm-one torus acts on R² without any invariant real line, so this representation has no such decomposition.",
      "context_sha256": "9c87b0d6007a6f446a63b6cd5a0e0ed62f353511ffaa259063641aad541166d4",
      "item_sha256": "187c267b858eb61095527506baace95df31d8e4fae198ba57f494a7a6fae0b42",
      "at": "2026-10-05T19:58:08.459Z"
    },
    {
      "id": "thm-rank-one-connected-groups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3's fixed-point bound is false for arbitrary complete varieties: G_m acts on the nodal curve P^1/(0~∞) with only one fixed point. [Milne 20.12](https://www.jmilne.org/math/Books/iAG2022.pdf) applies to complete homogeneous spaces.",
      "context_sha256": "679765033eb14685cfa684837813d5236abaa69ce7d24f8947bcd2e9adf0e60a",
      "item_sha256": "5323468415ef0bd0a33bdea086a37f87dd6544f00c99e49c30ac7b23377d70fb",
      "at": "2026-10-05T19:58:48.210Z"
    },
    {
      "id": "thm-weyl-group-borel-chambers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (e) leaves B undefined and omits T⊆B. Without that hypothesis, the double-coset claim fails: for w=1, representatives 1 and t∈T(k)\\B(k) give distinct double cosets B and BtB.",
      "context_sha256": "ce8ce6c43338a79ae0b72b1ab6d82c5728206c5d3f523600ea2b8737575778db",
      "item_sha256": "0c246da2d3312a73e106422159711d2b1118548004a329110f1ad8bc810c25e6",
      "at": "2026-10-05T19:59:00.860Z"
    },
    {
      "id": "lem-standard-levi-subgroup",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (c) requires the missing hypothesis Δ=Δ(B). For G=SL₂ and I=Δ={α}, L_I=G; taking B to be the opposite Borel makes the base of B∩L_I equal to {−α}, not I.",
      "context_sha256": "191c69adf6dfecdbc94ca908e7595014447d836d96929dd2fd505dbec196362e",
      "item_sha256": "bbf81c9fe16ca8d802f82c7affefb208d4793bc34e4e64f19f8f111004fdf34c",
      "at": "2026-10-05T19:59:01.011Z"
    },
    {
      "id": "ex-standard-parabolics-in-gl-n",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The stated bijection has the wrong codomain: P_I↦I lands in the subsets of Δ, not in the smooth parabolic subgroup varieties containing B. The supplied interface gives I↦P_I as the bijection onto those parabolics.",
      "context_sha256": "7c331a9bfcce70b1e3f8a7bf9f7f84bafdd9135159ca2e7202c754e83e3a3ef2",
      "item_sha256": "9702437cdf488e6cd89c80c512761a8bb3d1ca588c7bd7e6bc32e41eb12eaa85",
      "at": "2026-10-05T19:59:01.509Z"
    }
  ]
