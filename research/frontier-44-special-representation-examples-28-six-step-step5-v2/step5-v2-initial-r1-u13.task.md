# Step 5 adjudicate: initial, round 1, unit 13

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-13-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"13",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-murphy-elements-and-murphy-tableau-elements, 1:lem-cell-form-is-associative-and-its-radical-is-a-submodule, 1:lem-hh-quantum-presentation-and-tensor-action-descent, 9:def-type-a-hecke-specht-module-and-cell-form, 10:thm-hecke-jucys-murphy-action-is-dominance-triangular, 11:lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations, 12:def-type-a-q-schur-algebra-and-weyl-modules, 12:prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one, 13:def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras, 15:thm-q-schur-weyl-weight-space-gram-determinant-hook-product.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-murphy-elements-and-murphy-tableau-elements",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The shorthand m_t:=m_{tt} conflicts with the supplied Specht interface's m_t:=class of m_{t^λ t}. For noncanonical t these have different first indices and are distinct cellular basis elements; the page's Murphy-vector notation is inconsistent.",
      "context_sha256": "ba591ee859d6721ddcce1c7eaaf0c04997baf669c41e6a79d9fe9a60180d7001",
      "item_sha256": "9a9dfd8a1f940480056216188d4a7f763cf7dd8a6392ce3e42034338081d9c0c",
      "at": "2026-10-11T15:03:02.160Z"
    },
    {
      "id": "lem-cell-form-is-associative-and-its-radical-is-a-submodule",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Statement falsely says the right-hand side is independent of u,v. Take A=M_2(F) with one cell, c_st=E_st and transpose involution. For s=t=1 the right-hand side is E_uv, which varies with u,v. Only its scalar coefficient is independent.",
      "context_sha256": "166d8e701a702358eddc69c0f5ffe18c48ad1137b6a61116ff03eaa8e0f8d445",
      "item_sha256": "11109e1dc2eeac7c9bf42fa2873fb00bac4cfb1a546df605863c1a1cf20e1183",
      "at": "2026-10-11T15:02:50.635Z"
    },
    {
      "id": "lem-hh-quantum-presentation-and-tensor-action-descent",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 equates coproduct composites with different parenthesized codomains without an associator. The supplied tensor convention permits suppressing parentheses only after the coherence lemma, which is neither cited nor established.",
      "context_sha256": "0ff8ed382bafde9bd1bafcdadf206ff94c38f4f521967b95698ebad5f337c690",
      "item_sha256": "5c67b81c3e5226922e39239db8e7b575a45c3ade47e664f0467f2fb22afa1396",
      "at": "2026-10-11T15:03:42.265Z"
    },
    {
      "id": "def-type-a-hecke-specht-module-and-cell-form",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The diagonal-span assertion is false. For n=2 and λ=(2), the sole diagonal is m_tt=1+T_1 and m_tt T_1=q m_tt. Its R-span is a right H-submodule, contradicting the unqualified claim that diagonal elements do not span a submodule.",
      "context_sha256": "99a6117a57af1a6fe2be02e89dcfaf511c323ec0a4f7729d9648afe25800586f",
      "item_sha256": "18c94be4d366d021bda6f2ef7ec2cdf4cf7a7114b242171f2604538492053fe0",
      "at": "2026-10-11T15:03:04.200Z"
    },
    {
      "id": "thm-hecke-jucys-murphy-action-is-dominance-triangular",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 attributes a strict tableau-dominance support rule to the Murphy cellular-basis lemma, but its supplied interface gives only the cell law and Garnir identity. Step 2.2 relies essentially on this stronger rule without proving it.",
      "context_sha256": "29e582484bcac74438d77f1bd571dd94b6c63dc76399c09fb4d11a068caffb66",
      "item_sha256": "779d76595719a774d7a6fef2d6ff37b5f3bd1bd70b3c8f5512e37f2c543d57fd",
      "at": "2026-10-11T15:03:39.822Z"
    },
    {
      "id": "lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The same-column rule is false. In H_3 at z=1, s=[1 3;2], t=[1 2;3] give T_1 m_st ≡ -m_st-m_tt modulo higher shapes. Here t strictly dominates s, so the nonzero m_tt correction is forbidden by the displayed condition u◁s.",
      "context_sha256": "08d3b2e517b71573e06788a22508d92cb5237af0557f1242a087c02b0d0bd11b",
      "item_sha256": "f3d6f396d33e340f518dc3ec0cb8cafeb7545d257ee3a546d60d4c02386ea5cb",
      "at": "2026-10-11T15:04:16.534Z"
    },
    {
      "id": "def-type-a-q-schur-algebra-and-weyl-modules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The regular-type corner assertion omits d≥n. For d=1,n=2, Λ(1,2) contains only (2), so M has no regular H summand and the claimed corner evaluated at 1 does not exist. For d≥n, ω also needs zero padding to length d.",
      "context_sha256": "d5e82fe58e1f61678e6e098c79901d3d0f2d60e9baa58c7c6677f206e51393b3",
      "item_sha256": "d761c58219f38bd0989b09ac5f12cbeac460176baad01f6d1931d94ec215ee15",
      "at": "2026-10-11T15:04:18.374Z"
    },
    {
      "id": "prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates the separated-residue theorem as supplying nonsingular cell forms and split semisimplicity. Its interface supplies neither conclusion; step 3.1 invokes both without establishing them.",
      "context_sha256": "ad6bdca8dcc27dd4609d5884eda0d608cf92f0aac5a02e8f77059ef7f6329ad2",
      "item_sha256": "73a3633cf9d1c4ecbb7af8a56b2d639f3230558ecd93b9847baecb1cdb5068a0",
      "at": "2026-10-11T15:03:32.382Z"
    },
    {
      "id": "def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed corner map efe↦f|_{M^ω} is not well-defined. For R=Z, q=1, n=1, d=2, let f swap the two regular summands: efe=0, but f|_{M^ω} maps into the other summand. The correct restriction is (efe)|_{M^ω}.",
      "context_sha256": "2446253c7634f7ac3da01b9e18530925a3d187290c2e6fb1ce12685b8de22568",
      "item_sha256": "5d206e31a96b0d1ada91a535a7ef5597f26c16e91ccb076aadb816cb20fc806f",
      "at": "2026-10-11T15:02:38.350Z"
    },
    {
      "id": "thm-q-schur-weyl-weight-space-gram-determinant-hook-product",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The rewrapping equivalence is false. For λ=(4,4), (a,b,c)=(1,2,3), h_ac=3, the beta shift yields η=(3,2,2,1). Removing R_ac leaves (3,2); the added strip η/(3,2) has lowest node (4,1), in column 1, not b=2.",
      "context_sha256": "9551517ef8419cdc728592fed378c6a23b6e8e42ad68ec3c162ae31800ee7c00",
      "item_sha256": "9001f1df62e21941985c3303d90dd11528f182df0f1d31437b1b1f938ad899f8",
      "at": "2026-10-11T15:05:13.041Z"
    }
  ]
