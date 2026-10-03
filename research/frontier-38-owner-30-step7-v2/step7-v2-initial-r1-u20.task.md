# Step 7 adjudicate: initial, round 1, unit 20

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u20.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"20",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-hardy-radial-means-are-monotone, 3:def-blaschke-product, 5:def-inner-singular-inner-and-outer-functions, 6:lem-outer-function-properties.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-hardy-radial-means-are-monotone",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L2] defines the boundary approximation by φ_n=u|∂D+1/n. Sequences are indexed by all of ℕ, including 0, so φ_0 is undefined. This is not a valid boundary approximation under the supplied definition.",
      "context_sha256": "758349ac18854d0daf9ec2c25102891c8c3d1cb1a3da445319f776cd7b4c2344",
      "item_sha256": "e07417f6a3bd8f2594230106c0b0fc8c5d0eb15870be8ca8ea30e76426a777fa",
      "at": "2026-10-03T14:24:48.810Z"
    },
    {
      "id": "def-blaschke-product",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The stipulated sequence domain includes index 0, but the definition and product omit a_0. For a_0=0 and a_n=1−2^{−n} (n≥1), the displayed product is nonzero at 0, so it fails to reproduce the sequence’s zero at a_0.",
      "context_sha256": "cc2be0e00ea9fe6e860c8af67659b94506d7e4bc2496da58e86d0da6f9b3140a",
      "item_sha256": "915e62bd7fe41b493e02bc3e4399b35e6c17e190aca9e003d3fedba3193ec5e6",
      "at": "2026-10-03T14:25:29.037Z"
    },
    {
      "id": "def-inner-singular-inner-and-outer-functions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (c) attributes its arbitrary-holomorphic outer equivalence to lem-outer-function-properties, whose interface requires h∈L^p and g∈H^p for some p>0. Neither hypothesis is supplied, so the cited lemma does not license that equivalence.",
      "context_sha256": "7c6ba8be61201025cfd1bc3cbd82e2c72d75edcf79d439f58af6111a923e752d",
      "item_sha256": "d0559b74d6228f04b5e48c8e433b46120c3d970593fa5ae809ea73af1df4b83e",
      "at": "2026-10-03T14:25:05.007Z"
    },
    {
      "id": "lem-outer-function-properties",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "L3 drops Jensen’s required integrability of t. On (0,1), t(s)=-1/s has e^t integrable but ∫t=-∞, so the displayed exponential of a real expectation is undefined. Neither supplied Jensen interface licenses this restatement.",
      "context_sha256": "aaa4f4eda421cc0c80a6e103681da2432de18ff7173c1b543e3fe2a2a4b242d7",
      "item_sha256": "5ac0d9d5cbe616b3fab9963b58b547fb7b3ea32e0844612709b22ed3e1f8e39e",
      "at": "2026-10-03T14:25:22.071Z"
    }
  ]
