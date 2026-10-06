# Step 7 adjudicate: initial, round 1, unit 23

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"23",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-model-category-and-quillen-adjunction, 1:def-simplicial-set-homotopy-and-trivial-kan-fibration, 3:lem-contractible-cosimplicial-evaluation-computes-derived-colimit, 3:thm-dold-kan-equivalence-for-simplicial-modules, 4:def-morphism-and-fibre-products-of-algebraic-spaces, 5:lem-presentation-from-surjective-etale-map, 5:lem-variable-base-cotensor-corner-and-path-objects, 7:lem-quotient-map-etale-when-quotient-is-algebraic-space, 7:lem-replacement-invariant-derived-enriched-mapping-spaces.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-model-category-and-quillen-adjunction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Simplicial L is insufficient: const:Set→sSet ⊣ vertices is Quillen for W=isos,Cof=Fib=all, but Map(L1,Δ1)=Δ1 versus discrete {0,1}. Require an enriched adjunction ([Def.2.2](https://ddd.uab.cat/pub/prepub/2008/hdl_2072_9180/Pr790.pdf)).",
      "context_sha256": "1fb72eee77c9d67fdebc1e3cc53eee0f201cdc075752da53eae65809aeb91371",
      "item_sha256": "2b57bd62ac23ec2552d2fdc25d438cd1cc7a6c8e6c1da43342f10b62d1fabaf6",
      "at": "2026-10-05T20:02:06.401Z"
    },
    {
      "id": "def-simplicial-set-homotopy-and-trivial-kan-fibration",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The boundary characterization is reversed: ∂Δ[n] consists of simplices lying in proper-face images, not those missed by them. For n=1, both vertices belong to these images, whereas id_[1] is missed by them and lies outside the boundary.",
      "context_sha256": "a1e045a06097e93a75234da64b2527b8addc3dc66f5c440a181db81af0bf8f8b",
      "item_sha256": "f15e9fa07ce5cf3e97d071713a251962022814542355bf3f9c0f5791a4b6e3f5",
      "at": "2026-10-05T20:01:00.565Z"
    },
    {
      "id": "lem-contractible-cosimplicial-evaluation-computes-derived-colimit",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 falsely infers that unaugmented free chains are chain contractible. For the one-point simplicial set over R=Z, H_0=Z, so they cannot be chain contractible. F2 only gives a chain homotopy equivalence to the point's chains.",
      "context_sha256": "c3e2aa2fda8778ad577a843373ff07c4fed91f7025fd5a11a8460a0039e71aa1",
      "item_sha256": "de0b217fac0fa757794779711d6b2dae8db9b2dbe0d087443911935ae9709a47",
      "at": "2026-10-05T20:01:11.374Z"
    },
    {
      "id": "thm-dold-kan-equivalence-for-simplicial-modules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately restates the normalization dependency as asserting that N is exact. Its supplied interface contains no exactness assertion, yet step 3.1 explicitly invokes F2 for exactness.",
      "context_sha256": "24fc6697684904219fd16d395cf0ce029c618e09b7750b28ba984f261ef7e72a",
      "item_sha256": "b1dc407882d437eb2583dafe51517198f4c25e95fc7fb68dcbcc46465ebcdfb2",
      "at": "2026-10-05T20:01:31.723Z"
    },
    {
      "id": "def-morphism-and-fibre-products-of-algebraic-spaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final paragraph asserts that the diagonal Δ:F→F×_S F is an algebraic space. It is a morphism, not an object; the claim is ill-typed. Products are algebraic spaces, while Δ is a representable morphism between them.",
      "context_sha256": "62756c14a9bcfbb819c1caad48ac366b7ab548cd4b03f25ee0eb17328ceb2d46",
      "item_sha256": "c309f8aabf165a7f34b184dcab8e2baf380d41e48150552d716ee4ffe7632457",
      "at": "2026-10-05T20:01:49.547Z"
    },
    {
      "id": "lem-presentation-from-surjective-etale-map",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 and step 2.1 invoke preservation of presheaf monomorphisms, but the sheafification interface only promises preservation of finite limits of sheaves. This does not license sheafifying the monomorphism P_{U/R}→F, since P_{U/R} need not be a sheaf.",
      "context_sha256": "52b7f133876d1e6b343b26b41dd32a49413dddc201b19bf273dd47ef363f942c",
      "item_sha256": "c0aa954aeff2936ff94232e03cfb11e5803d8f1e204ef922f28061872cb1de77",
      "at": "2026-10-05T20:01:25.755Z"
    },
    {
      "id": "lem-variable-base-cotensor-corner-and-path-objects",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 attributes an exact normalization equivalence with an explicit inverse to its citations. Neither supplied dependency interface asserts this: the normalization/prism interface gives a chain homotopy equivalence N(M)→s(M), not an equivalence of categories.",
      "context_sha256": "01f04cb52255813d857f36aa82a2f99d9034013078b907996849fc02cba9f13b",
      "item_sha256": "8f9f6fac97c788219fdce2397ea24e41b2aae00edc2182eb0da18dd76eaa5310",
      "at": "2026-10-05T20:01:45.376Z"
    },
    {
      "id": "lem-quotient-map-etale-when-quotient-is-algebraic-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 falsely states that unramifiedness is fppf-local on the source: the identity of Spec k is unramified, but after the fppf source cover A¹_k→Spec k the composite is not. The cited interfaces do not license this restatement.",
      "context_sha256": "0186ea13203573016c8c24012a39819c06a3d13acd89ddf9204fb753db6e974e",
      "item_sha256": "6fbcb493f75e1c65b5958d9c5eb35ac021e2eb6cfc4008b9df75bb227718c492",
      "at": "2026-10-05T20:01:50.107Z"
    },
    {
      "id": "lem-replacement-invariant-derived-enriched-mapping-spaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 uses D→0 as the terminal fibration in every supplied model. In the slice of unital A-algebras over nonzero B, the terminal object is B→B, and 0→B is not an object. The claimed retraction lifting square is therefore ill-typed.",
      "context_sha256": "ad4548040e61c5e06efbe72b25149e8077df8a62de3637c81056880c8fe7c91f",
      "item_sha256": "97687ddeecef57751f8b4b19cb01ed6b88afd2bd91696cf4c7b32cea0f7a213a",
      "at": "2026-10-05T20:02:34.381Z"
    }
  ]
