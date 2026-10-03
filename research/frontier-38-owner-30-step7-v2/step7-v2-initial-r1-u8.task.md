# Step 7 adjudicate: initial, round 1, unit 8

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"8",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-bruhat-covers-are-reflection-covers, 1:lem-bruhat-rank-two-intervals-are-diamonds, 1:lem-dominant-integral-dot-translates-embed-in-the-verma-module, 2:lem-bruhat-covers-give-unique-verma-embeddings, 3:thm-weak-bgg-resolution, 5:lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-bruhat-covers-are-reflection-covers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] omits the dependency's essential hypothesis γ∈Φ⁺. For w=e and γ a negative root, w⁻¹γ<0 but ℓ(sγw)=1>0=ℓ(w), contradicting its stated equivalence. The sign criteria require positive roots.",
      "context_sha256": "cac9e5c786d418736acbf3235b6fdadbc2621e1a8036ea4a5ba29b043c24b634",
      "item_sha256": "38c3655c7dcaa19c2eea6ba5723da67d4046db8737bde0d8397e6f667b419373",
      "at": "2026-10-03T14:17:13.257Z"
    },
    {
      "id": "lem-bruhat-rank-two-intervals-are-diamonds",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 claims the Bruhat-order dependency proves monotonicity of x↦x⁺, but its supplied interface states only the subword and reflection-chain characterisations. Step 2.1(c), used in 3.1, relies on this unsupported dependency restatement.",
      "context_sha256": "3f9a78c6fd9cce68d32e5b58e12c3a74dd0e4ad23ad2465216fb7f06f6a7595b",
      "item_sha256": "ab44c4ca843fc5e53b21a090b1c87884a898a0c5130a17c2af6b94c86d148f07",
      "at": "2026-10-03T14:17:37.117Z"
    },
    {
      "id": "lem-dominant-integral-dot-translates-embed-in-the-verma-module",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 omits the dependency's hypothesis β∈Φ⁺ and is false for negative roots. In A1, take β=−α and u=sα: ℓ(sβu)=0<1=ℓ(u), but u⁻¹β=α>0, contradicting F5.",
      "context_sha256": "656e43ce76b9149af34c337d001ad62285a9f3ea857713662ba8c299005955c7",
      "item_sha256": "6c4b356f5bee054ac17a02b2155ea0fddc65af15aaa6acafa5d5cd0dbf23c50d",
      "at": "2026-10-03T14:17:24.510Z"
    },
    {
      "id": "lem-bruhat-covers-give-unique-verma-embeddings",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] imports a compatible normalization absent from the dependency, which fixes submodule images but embeddings only up to scalar. Steps 2.1–3.1 therefore do not establish equality of maps: rescaling one cover embedding can change one diamond composite.",
      "context_sha256": "bcd756a929448a6a3ae9b9a224d33174bb6a6212be0959e59b4c1844ea8cf2f7",
      "item_sha256": "49568513cea64237dc774157e0f38a03d5782d5daeb3ffced7fd4590e8997622",
      "at": "2026-10-03T14:18:07.093Z"
    },
    {
      "id": "thm-weak-bgg-resolution",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 relies on F3's assertion that central-character projection is exact on O. The cited typed-cut interface establishes only Verma-filteredness and the resulting type; it does not license preservation of exactness, and no argument supplies this prerequisite.",
      "context_sha256": "69515e581a9e52f060b43ee471abd4f6ace5705f74f62b7cdf76623a5302da7d",
      "item_sha256": "11b8ea3214e9e4ebe8ea9093300c593311ea00561984434584102527d0a255cd",
      "at": "2026-10-03T14:18:21.917Z"
    },
    {
      "id": "lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title claims the differential is onto the kernel, but the statement and proof establish only injectivity on coinvariants. They prove neither surjectivity on coinvariants nor im d_{k+1}=ker d_k.",
      "context_sha256": "ab22aebec4785cdfbacf20a04f7550fa291861e7a305479d0536a3b50c162039",
      "item_sha256": "140ff3fc6bc9f497546234e98aac5aa5e5c9774cf02ccfed57da253e014b370e",
      "at": "2026-10-03T14:17:49.449Z"
    }
  ]
