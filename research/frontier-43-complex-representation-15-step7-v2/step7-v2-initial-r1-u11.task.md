# Step 7 adjudicate: initial, round 1, unit 11

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-43-complex-representation-15",phase:"initial",round:1,unit:"11",input_sha256:"213f49668fe9a1811f00252dbb37991fb060239cf233142dbaebe75405f52be9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-43-complex-representation-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity, 10:lem-dbar-solvability-criterion-for-a-smooth-zero-one-form, 15:def-period-pairing-and-period-lattice, 22:lem-abel-jacobi-map-is-well-defined-and-base-point-independent, 24:thm-jacobi-inversion, 27:ex-abel-image-in-its-jacobian.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F8] omits the essential nonzero hypothesis: the identically zero meromorphic function on a compact Riemann surface has infinitely many zeros, each of order +∞ under the supplied divisor interface. Thus this dependency restatement is false.",
      "context_sha256": "0415da6b596721f73ef8548609d4a3628aa227c843c9e6a0fb5e26a02fda01fc",
      "item_sha256": "d598f3ec4a0f212c4c1061b618a6cdd79ac2f15a3fb0e9c0b860d7523481fc6d",
      "at": "2026-10-08T06:47:42.122Z"
    },
    {
      "id": "lem-dbar-solvability-criterion-for-a-smooth-zero-one-form",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 claims the Stokes calculation is choice-free and AC is used only for duality and metrics. But step 1.2 invokes the supplied Stokes theorem, which explicitly assumes countable choice. The stated choice bookkeeping is inaccurate.",
      "context_sha256": "b94cb72f059dfe00a562aa42a59602cc8d5743189fa55c89ff6d45e2523e8f84",
      "item_sha256": "6c5559a711105ee30c9638a2eb437f88d2159ebe4b34b29c00828dc8c3dadd0d",
      "at": "2026-10-08T06:47:45.744Z"
    },
    {
      "id": "def-period-pairing-and-period-lattice",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title calls the object a period lattice, but the definition and verification establish only a period subgroup and explicitly defer discreteness and fullness. The title therefore asserts more than this item establishes.",
      "context_sha256": "d9eeeb095c1b8b39b6bedaf62baf0f84c4726e7af0b7a2233c5456166365b11b",
      "item_sha256": "ea5dea010f89710fb12b41f2ec137a51804a222413de4d58694a3919809f94f0",
      "at": "2026-10-08T06:47:37.300Z"
    },
    {
      "id": "lem-abel-jacobi-map-is-well-defined-and-base-point-independent",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims base-point independence: the point map satisfies u_q0(p)=u_p0(p)-u_p0(q0), generally a nonzero translation, as on an elliptic curve. The proof establishes independence only for the degree-zero divisor extension.",
      "context_sha256": "a22d2f7e9806ba59b59dbecc4b0574043838b3715be8bae1e9ee1347cc11b028",
      "item_sha256": "ddd15363fa53c926d9eb88193b581997c37d71396d9bdd133ca8c4d764333b4d",
      "at": "2026-10-08T06:47:52.203Z"
    },
    {
      "id": "thm-jacobi-inversion",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 asserts nonzero evaluation at every point under the given hypothesis g≥0, but the cited separation lemma requires g≥1. For g=0, Ω(X)=0 and every evaluation is zero; thus F1 is an inaccurate dependency restatement.",
      "context_sha256": "fb6ba82321f14e0173b38f1e1905ad479b94c8e613d59435dad162b478ee5087",
      "item_sha256": "b64e0bc3ef5799b33ebf03b1dc06c08a214bbe1c7966e09f19e37cf57bcd2d2f",
      "at": "2026-10-08T06:47:56.425Z"
    },
    {
      "id": "ex-abel-image-in-its-jacobian",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Claim 3 names the pentagon curve X_0 but asserts Jac(X)=C²/Λ for the arbitrary X in the hypotheses. Taking g=1 contradicts dim_C Jac(X)=g. Neither the statement nor step 1.2 identifies X with X_0.",
      "context_sha256": "6856d88d2ca11594e3461fc3f6f40cf8a7d6a0697abf54305a6e21cb35a7888a",
      "item_sha256": "38750384a18baccbe03b36f1114e0e907909ebe878f9a0005830f2f10608e1ed",
      "at": "2026-10-08T06:48:05.273Z"
    }
  ]
