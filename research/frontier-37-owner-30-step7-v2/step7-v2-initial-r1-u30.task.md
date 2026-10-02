# Step 7 adjudicate: initial, round 1, unit 30

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u30.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"30",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-dimension-of-holomorphic-germ-ring, 3:def-discriminant-and-branch-locus-weierstrass-hypersurface, 4:lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve, 4:lem-vanishing-ideal-of-a-reduced-hypersurface-germ, 6:def-regular-singular-point-analytic-hypersurface, 8:ex-ordinary-node-plane-curve-germ, 9:cor-normalisation-plane-curve-germ.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-dimension-of-holomorphic-germ-ring",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 6.1 inaccurately restates F9: the displayed map from Spec(O_m) to Spec(O) is contraction itself; its inverse is prime extension, P ↦ S⁻¹P, not contraction as claimed.",
      "context_sha256": "5cf77401cb5c429d9f89d17f7609164f8a8b9f6393ac15b7d98a0c05e9cb06c7",
      "item_sha256": "4e2abcc7fdc180197958bd7fd9122e051618a562ab39103d36d970729b76bb54",
      "at": "2026-10-01T20:58:42.002Z"
    },
    {
      "id": "def-discriminant-and-branch-locus-weierstrass-hypersurface",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The preparation theorem supplies no product neighbourhood. Zero-set agreement alone does not ensure surjectivity: for W=t²−z on V={|z|<4}, D={|t|<1}, fibres with |z|≥1 are empty. The finite-projection theorem requires its chosen representative.",
      "context_sha256": "788c235e0acfb9f3d9734033cda5c9ac64d2a18af46c9b89c991664627fd2d70",
      "item_sha256": "9c8ee93fbe955ebea0234e011e76c6ddaf3dc8b04216e129521b0c8f6c769e7a",
      "at": "2026-10-01T20:58:58.790Z"
    },
    {
      "id": "lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 strengthens the supplied finite-projection interface: it guarantees some generic coordinate change T, not T=id whenever W is y-regular. Thus step 1.1 lacks a licensed covering theorem for the fixed x-projection.",
      "context_sha256": "58ad6b64150ffb054fc02164c5126f257ee8cd8d7baf1fda6e8b87546f4b01ed",
      "item_sha256": "55211eb9fc553adc285339e408aab1706085f0a6bd2c2d4c37c7b2726c8997e5",
      "at": "2026-10-01T20:58:44.605Z"
    },
    {
      "id": "lem-vanishing-ideal-of-a-reduced-hypersurface-germ",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 and step 1.1 omit the required translation by p. For p=1 and f(z)=z−1, every invertible linear T(z)=az gives f∘T(0)=−1, a unit, contradicting the claimed order d≥1. The dependency instead prepares f(p+Tz).",
      "context_sha256": "f822b736af2c791061bafac6f3306ad32d0be70916f5cdabac3b78b1dcca5c25",
      "item_sha256": "ae5b6576605129d6602705f349418058656c8d2becb89ffa73a875debfb14cb2",
      "at": "2026-10-01T20:58:32.428Z"
    },
    {
      "id": "def-regular-singular-point-analytic-hypersurface",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The chosen neighbourhood may be disconnected. Take p=0, U=D(0,1)∪D(3,1), with f(z)=z on the first component and f=0 on the second. This defines a hypersurface germ at p, but I_3(X)=0, so the asserted reduced local equation at q=3 does not exist.",
      "context_sha256": "c620471966d98fa35a1691234f8989ba01f97163d665e0d2522ba2e0c3cb83df",
      "item_sha256": "8741abfef448d257b3ecd9efb37c63187b12598fe59cc53d3436ceb3e56be5c1",
      "at": "2026-10-01T20:58:58.357Z"
    },
    {
      "id": "ex-ordinary-node-plane-curve-germ",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.2 incorrectly infers that every point of each smooth branch is regular in X. At the origin both branches are smooth, but their union X is singular, as step 4.1 proves. [F5] requires X itself to be locally a hypersurface graph.",
      "context_sha256": "892afbc68930cc3c1a251e21da988154dfab3f5b65b4962e9cf55d106d7aaf25",
      "item_sha256": "716b8634778b47dda7e4996be623d0963e4e2110a38b5dea5d20d966136ca06d",
      "at": "2026-10-01T20:58:36.077Z"
    },
    {
      "id": "cor-normalisation-plane-curve-germ",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 assumes the prepared polynomial has degree m_i. The supplied Puiseux interface does not assert this, and preparation gives the y-order, not m_i. Their equality is unproved but essential to the field-degree argument establishing birationality.",
      "context_sha256": "5c28ff6984469a879e44bcc817678fd0401fb5a7200b8de9c5e891a6f5c84d67",
      "item_sha256": "179aedd0bb4bc2c96c1d829bc151aaef275cf2ce4ee4358bdac5b44ec2816630",
      "at": "2026-10-01T20:59:28.194Z"
    }
  ]
