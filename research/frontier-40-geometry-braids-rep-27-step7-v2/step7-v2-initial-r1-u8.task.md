# Step 7 adjudicate: initial, round 1, unit 8

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"8",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-curves-and-geometric-intersection-numbers-on-the-marked-disk, 0:def-khovanov-seidel-path-ideal, 1:def-faithful-weak-categorical-action, 1:lem-geometric-intersection-numbers-are-isotopy-invariants, 2:lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action, 4:lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-curves-and-geometric-intersection-numbers-on-the-marked-disk",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The disc condition need not define K: an additional portion of c1 can cut the Jordan disk bounded by α0∪α1, leaving no component of D\\(c0∪c1) with that boundary. The condition must refer to the enclosed Jordan disk.",
      "context_sha256": "ded19cc0984b3c7377420c7b17cc5eb43cd707ac65db6e3f91903bd061c76c29",
      "item_sha256": "a6e876fddc5cc8841149110a613f96b865e6cf6f5d0af3a4d0886600b5976885",
      "at": "2026-10-05T19:32:22.128Z"
    },
    {
      "id": "def-khovanov-seidel-path-ideal",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L4] attributes a unital universal property to def-quotient-ring, whose supplied interface states only quotient multiplication and ring laws. Step 3.1 invokes this unsupported dependency restatement to obtain the factorization.",
      "context_sha256": "057e59f4233873d5d8eb5738bc4931d04cce07033fc249325f244f7afe831a84",
      "item_sha256": "d5331e082dd87e0bfc217008d5ec3ce977501b4bbde79f9c49d33f7f8b0c8eb8",
      "at": "2026-10-05T19:31:21.576Z"
    },
    {
      "id": "def-faithful-weak-categorical-action",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The first remark says a nonidentity autoequivalence may induce the identity on K_0 and cites the counterexample for this contrast. Its supplied interface asserts the opposite: identity action on K_0 implies isomorphism to the identity functor.",
      "context_sha256": "483ffa45945c9733430a21ce102bfbd3f5522c4f96be66ebe2cf853e2e26696b",
      "item_sha256": "3e77b3cce6e571d2aa241191ea52125c7e8d1937fc34f9e4017d74c81f14369b",
      "at": "2026-10-05T19:30:54.825Z"
    },
    {
      "id": "lem-geometric-intersection-numbers-are-isotopy-invariants",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.2 is false: take c0=c1 a boundary-to-marked arc. One allowed flow leaves a shared interior subarc; another moves every interior point off c1. No ambient isotopy preserving c1 can relate these pushes, invalidating the boundary-independence argument.",
      "context_sha256": "322934a7244105deb93490867c4f632316f39b3abf126c5cc3145ed345188678",
      "item_sha256": "d81d4a0e634ceae6eb3a991bfdfa178978d7c0d5d9b8fc6bd5d1d8ae62361be3",
      "at": "2026-10-05T19:31:50.468Z"
    },
    {
      "id": "lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "L2 inaccurately asserts that deck transformations act freely for general coverings. In the trivial three-sheet cover of a connected base, a nonidentity deck permutation fixes one sheet pointwise. The supplied deck-group interface does not license L2.",
      "context_sha256": "67b137643439ae958aaf55f9475155f9154bbe9ae6201a50d70b8ad0353344cc",
      "item_sha256": "3a5d006434e1d9ae7491031c491060809ba56341fb01ab77fc3ab416e3b8b648",
      "at": "2026-10-05T19:31:17.371Z"
    },
    {
      "id": "lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "L3 falsely says the half twist about b_k shifts every curve joining marked points by chi(-1,1). The dependency asserts this only for b_k itself. For m=2, twisting b_2 about b_1 changes its endpoints, whereas a deck shift preserves its underlying curve.",
      "context_sha256": "235274f2998d41af35384c953321588ca021c07d2dc328a1d356babba801bb4e",
      "item_sha256": "e63bcbff91ab7f6b714214e46dc5a8412fbade4229ff184f264529c81dbc4ed8",
      "at": "2026-10-05T19:31:23.002Z"
    }
  ]
