# Step 7 adjudicate: initial, round 1, unit 2

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u2.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"2",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 6:def-spatial-rotation-of-an-inertial-frame, 7:lem-boost-is-proper-orthochronous-with-inverse, 7:lem-inertial-chart-transitions-are-affine-lorentz, 8:lem-boost-rotation-factorization, 9:lem-rapidity-parametrization-of-collinear-boosts, 9:cex-sr-noncollinear-boosts-do-not-commute, 9:ex-sr-boost-rotation-factorization-worked.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-spatial-rotation-of-an-inertial-frame",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final claim that a change of frame changes which maps are spatial rotations is false as stated: changing only the origin or spatial orthonormal basis leaves the same subgroup. The cited determinant interface makes det(R|S) basis-independent.",
      "context_sha256": "f885f28107663d96b5aad7df4419c3c49cc35ba59246c29a104a4f6f934b3048",
      "item_sha256": "29cd021d19b965fb6d09806da7373e6649dc9d6b3844c0f1f67f7f7301bcf6e0",
      "at": "2026-10-10T04:14:10.601Z"
    },
    {
      "id": "lem-boost-is-proper-orthochronous-with-inverse",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 defines e=β/b in R³ but asserts e∈S⊂V; y has the same type mismatch. No spatial embedding is defined, so span(e₀,e) and η(e,e) are undefined for general V, invalidating the decomposition and metric-preservation proof.",
      "context_sha256": "1b6f8adffff4268830abaccb1f1ef0e135d95a856ff71dfd739be7d3b0bb3b86",
      "item_sha256": "b30dbe32c89b6f1d61814d37035841d663baf8c1a991637f0c38a7fd91ad4127",
      "at": "2026-10-10T04:05:32.723Z"
    },
    {
      "id": "lem-inertial-chart-transitions-are-affine-lorentz",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (ii) and step 4.1 assert cone preservation by the affine transition, but prove it only for its linear part. With M=I and x(o')=(2,0,0,0), the transition sends future timelike (1,0,0,0) to past timelike (-1,0,0,0).",
      "context_sha256": "be80e2532bb39de8a9dbd9e54c02d3ea735299c6005b2284307a984d95ed74a9",
      "item_sha256": "ebdc84e7b23563cde5c5041cc1871cb1b531eebd2ee9744b6232e3a81ce0fc54",
      "at": "2026-10-10T04:05:55.011Z"
    },
    {
      "id": "lem-boost-rotation-factorization",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L3] asserts the displayed boost matrix for every |β|<1, but at β=0 its spatial block contains 0/0. The dependency explicitly replaces that block by I₃. This restatement omits an essential case, which occurs for L=id.",
      "context_sha256": "7884fffc8ff448f1718069ee9f952505fdbe538e03e0b564d724cc938c34c957",
      "item_sha256": "7e937a4605f992c747832031fe08a2cd26818b46fcb9abe1cafbbdcf633592b2",
      "at": "2026-10-10T04:05:20.385Z"
    },
    {
      "id": "lem-rapidity-parametrization-of-collinear-boosts",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L5] inaccurately asserts the displayed boost formula for all |β|<1, including β=0 where (γ−1)/|β|² is undefined. The dependency restricts that formula to β≠0 and separately defines B(0)=id; the local restatement omits this essential case.",
      "context_sha256": "91f6ffd0abb52558040c21b2f6f636ce9482ff8b29f927ae5c89d4f9dc57bef0",
      "item_sha256": "22cf44d8f3a91f802c263b5c36641e1a2a29aca104e3eada9b496584becab1d3",
      "at": "2026-10-10T04:12:14.970Z"
    },
    {
      "id": "cex-sr-noncollinear-boosts-do-not-commute",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L1] restates the boost formula for all |β|<1, including β=0, where (γ−1)/|β|² is undefined. The supplied definition explicitly handles β=0 separately by B(0)=id; that necessary exception is missing.",
      "context_sha256": "e5c8279674a4125db2ddfc561dded2ed18336814c36543118982c0bd5588608d",
      "item_sha256": "812731ddc133452201a0d661f70d49fa5c9397ad8e5ce9727deba685130248d8",
      "at": "2026-10-10T04:05:32.803Z"
    },
    {
      "id": "ex-sr-boost-rotation-factorization-worked",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L1] asserts the displayed boost matrix for every |β|<1, including β=0, where (γ−1)/|β|² is undefined. The supplied def-lorentz-boost interface explicitly treats β=0 separately with B(0)=id; this local restatement omits that essential exception.",
      "context_sha256": "99cca0bb6dd4d3d35e63d47fbb673b8aada0d27f9a0208bd682628738de616c5",
      "item_sha256": "3363a2c260571d801985e8019794e49bf6c4098a6f76cbf71269eb183bfdb82d",
      "at": "2026-10-10T04:05:34.504Z"
    }
  ]
