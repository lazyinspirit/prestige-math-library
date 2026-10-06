# Step 7 adjudicate: initial, round 1, unit 9

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u9.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"9",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-rouquier-complex-of-a-braid-word, 1:lem-rouquier-complexes-satisfy-far-commutativity, 1:lem-rouquier-complexes-satisfy-the-three-term-braid-relation, 2:ex-the-three-term-rouquier-braid-equivalence-in-type-a-two.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rouquier-complex-of-a-braid-word",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The comparison with [Rouquier §3.2.1](https://arxiv.org/pdf/math/0409593) omits the shift on the tensor term. F_i=[(R⊗_{R^{s_i}}R)(1)→R(1)] requires both terms shifted; shifting only the unit term makes multiplication have degree −1 instead of zero.",
      "context_sha256": "09658e5465fe6de0403637468fc28e1ac7850fbf5eb51b5cfe3da6a3e8fa448a",
      "item_sha256": "224739083c081c21ba6a4ae8932d9db8841c4f4ca02dc45ff91f5f38b7380b73",
      "at": "2026-10-05T19:32:04.858Z"
    },
    {
      "id": "lem-rouquier-complexes-satisfy-far-commutativity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately strengthens the supplied distant-commutativity interface: it asserts a specified block flip compatible with both ε and η, whereas the interface asserts only existence of a bimodule isomorphism. That naturality is not licensed by the citation.",
      "context_sha256": "6edc80e4039de4654b49000aae7c4ecbc284e88dda076ac04c255a610c16a190",
      "item_sha256": "2a92cb6e827411cdb83c2c09a1102a7d74b4f210c947119d0e8c5e877d94b687",
      "at": "2026-10-05T19:31:50.975Z"
    },
    {
      "id": "lem-rouquier-complexes-satisfy-the-three-term-braid-relation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 requires specific splitting maps J,p with pJ=1 and the stated L embedding. F2 supplies only abstract decompositions, while μ_t^a and κ_s^a are undefined here. The identity differential block needed for the first cancellation is therefore unestablished.",
      "context_sha256": "689e1cfc119ae9c9b28f06430cd802745a057478834cdd231c3ec4f4cd0f7a96",
      "item_sha256": "1f217dd070b67c6954c093d0d9d10f5e8bd34955010284324d5037ec615d7973",
      "at": "2026-10-05T19:32:31.513Z"
    },
    {
      "id": "ex-the-three-term-rouquier-braid-equivalence-in-type-a-two",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 relies on undefined maps μ_t^a, κ_s^a, κ_s and the identity pJ=1. F5 attributes these to the braid-relation dependency, but its supplied interface specifies neither these maps nor that splitting, so the essential identity pivot is unlicensed.",
      "context_sha256": "174912015af8bb7135ac09e20cb93788306bb62a34dcd2b57cc04ca646e27c03",
      "item_sha256": "5a556513f31819c7123200e9e75e9535498b7e2dc5581166d98c141891c44b06",
      "at": "2026-10-05T19:49:35.958Z"
    }
  ]
