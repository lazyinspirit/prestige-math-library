# Step 7 adjudicate: initial, round 1, unit 3

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u3.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"3",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-logarithmic-unit-embedding, 0:def-s-integers-and-s-units-of-a-number-field, 3:lem-logarithmic-unit-image-is-discrete, 5:thm-logarithmic-unit-image-is-a-full-lattice, 7:cor-unit-ranks-by-number-field-signature, 8:ex-real-quadratic-units-and-pell, 10:ex-change-of-fundamental-units-preserves-regulator.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-logarithmic-unit-embedding",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The covolume claim is false: in signature (1,1), an undoubled unit log vector (-2t,t) becomes (-2t,2t), changing Euclidean lattice covolume by sqrt(8/5), not a power of 2. Powers of 2 apply to deleted-row determinants instead.",
      "context_sha256": "ef5bb726c8c5097d4af232e7b6fdfe3044e7db27d8f2af00e1801316e4e7bfac",
      "item_sha256": "43018d454bac673869395e06a20a3a29884b4a582104f012efd4622b4af5ee8b",
      "at": "2026-10-01T20:46:15.749Z"
    },
    {
      "id": "def-s-integers-and-s-units-of-a-number-field",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The definition of O_{K,S} evaluates v_p(x) for x=0, but v_p(x) is defined only for x in K^× and (0) is excluded from fractional ideals. Without adjoining 0 explicitly or defining v_p(0)=+∞, the purported ring is not well-defined.",
      "context_sha256": "1db308a828aac361ff592e07fa0c1f0799032cf4c2ec6b98d8c025889ccc45ac",
      "item_sha256": "79ff75d1d1598aa5f9082a0ee919fa50072bda27f411514bf7103a44dbfbf958",
      "at": "2026-10-01T20:45:50.476Z"
    },
    {
      "id": "lem-logarithmic-unit-image-is-discrete",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F8 is an ill-typed, unsupported restatement: “injective on no larger subgroup than one modulo its finite kernel” does not follow from kernel finiteness. The valid conclusion is that the induced quotient map O_K^×/μ(K)→H is injective.",
      "context_sha256": "735e4aae5f9a79e8b3b3e0e921453c58d0ae6c570005c31f4e62b7f3dc1a0de3",
      "item_sha256": "32a0ec09776b024e509e7f3ea16fac7fefe2e3cbab5674eb36322a3ef2108efa",
      "at": "2026-10-01T20:46:10.874Z"
    },
    {
      "id": "thm-logarithmic-unit-image-is-a-full-lattice",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 incorrectly calls the real-coordinate Minkowski map multiplicative without specifying transported complex multiplication. For K=Q(i), σ(i)=(0,1), whose coordinatewise square is (0,1), but σ(i²)=(-1,0).",
      "context_sha256": "a65239389ff10dc0d2ff8ae400dd4212e8aca584204000b1f348da363f53e0d8",
      "item_sha256": "5f017d205615b424ed27853b601297cdb0c38bf703e081f1e003c35cfe6c07b5",
      "at": "2026-10-01T20:46:14.676Z"
    },
    {
      "id": "cor-unit-ranks-by-number-field-signature",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 cites the quadratic ring-of-integers theorem for classification of every degree-two field as Q(√d), but its supplied interface only computes integers in fields already of that form. Step 1.4 relies on this unproved classification.",
      "context_sha256": "51701984bb493764e8f532310a618758bf3f696de970c2ddb656def7dd8e0231",
      "item_sha256": "726633c53d83b6e1f70f473d5ce0b9d272f8b0bbe344a573fd97dd3866e3daa0",
      "at": "2026-10-01T20:46:02.084Z"
    },
    {
      "id": "ex-real-quadratic-units-and-pell",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 7.2 falsely equates rational convergents with quadratic units: p_0/q_0=2 and p_1/q_1=9/4, not 2+√5 and 9+4√5. The dependency defines the convergent as p_n/q_n; the corresponding Pell element is p_n+q_n√5.",
      "context_sha256": "5f8f533b3363341ad5de10bbfd3ac3d4f71cd011c64802635092b217cdaf1611",
      "item_sha256": "bc6969bfc37f64061dcbe5fc67036574906ac2766f149f673c06f955c0ec33a5",
      "at": "2026-10-01T20:46:04.551Z"
    },
    {
      "id": "ex-change-of-fundamental-units-preserves-regulator",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 defines c=log z although z∈(-2,-1). The supplied real logarithm has domain (0,∞), so c is undefined and λ(α)=(a,b,c) is invalid. The subsequent real matrices and determinants require c=log|z|.",
      "context_sha256": "4b506d2f296fdbd09dfafc9b71d7bad1d543840ea3487069a43ad95962c2b997",
      "item_sha256": "ea5f5f42dd6fba20187111290bf272733d7adb6323e7f3f5d02402a3f4b4c75a",
      "at": "2026-10-01T20:46:06.403Z"
    }
  ]
