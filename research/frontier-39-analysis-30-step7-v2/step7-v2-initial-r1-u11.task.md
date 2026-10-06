# Step 7 adjudicate: initial, round 1, unit 11

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"11",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, 8:def-symmetric-elliptic-weak-eigenpair, 8:lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded, 8:lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation, 12:thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue, 13:ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue, 14:cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 defines K_m using 1/m when Ω is a proper nonempty open set. Under the stipulated zero-based sequence convention, K_0 requires division by zero. No separate K_0 or reindexing is supplied, so the exhaustion sequence is undefined.",
      "context_sha256": "c67ec23e73097f31aa6085a6303c370bf400298934635b8a82460f3b0f720eea",
      "item_sha256": "4bb0ee48c6ede03b5feaf9e958a84afb4ce7411d039a58cbffcfe361d06cafe0",
      "at": "2026-10-06T01:49:01.753Z"
    },
    {
      "id": "def-symmetric-elliptic-weak-eigenpair",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The stated equivalence omits u≠0 on its right-hand side: 0∈D(L) and L0=λ0 for every real λ, yet (λ,0) is expressly excluded from weak eigenpairs. Add u≠0 to the operator conditions.",
      "context_sha256": "8fb99a1aa1192d4594f8e903d2673c072b9643014a91b8124d1dd1555c483155",
      "item_sha256": "309233a29ad4c831ff61a46736f886defd274fc66c766544124dd40427600d79",
      "at": "2026-10-06T01:49:16.063Z"
    },
    {
      "id": "lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] inaccurately restates the double-orthogonal-complement theorem for arbitrary subsets; the dependency requires a linear subspace. For S={x} with x≠0, 0 belongs to S⊥⊥ but not to its closure.",
      "context_sha256": "8608975b60378c0012030cde306d181d7904eb2cf9e4cd6c7b1c0e97f23b9081",
      "item_sha256": "693d6978cf05e243861e5c41d21a33a945bb8c0fb1a7cfec3790126a5f81e954",
      "at": "2026-10-06T01:48:59.679Z"
    },
    {
      "id": "lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims compactness for arbitrary open Ω. For Ω=R, L=-d²/dx² and μ=1, Kμ is not compact on L²: translations of a nonzero Kμf have no norm-convergent subsequence. The title must include the bounded-domain restriction.",
      "context_sha256": "a2063b3129032802b4c328eb588ca3e5e562c57d364a257f7435b34fb11e7024",
      "item_sha256": "f2bce61ce352b7f64847607a2a878c87651f9c2d607dfa5f97aefcdac159af77",
      "at": "2026-10-06T01:48:28.716Z"
    },
    {
      "id": "thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately restates the dependency: E_{λ₁} contains 0, whereas def-symmetric-elliptic-weak-eigenpair requires weak eigenfunctions to be nonzero. The weak eigenfunctions are exactly E_{λ₁}\\{0}.",
      "context_sha256": "b07da76769fa05bb0412f254ed42ece5e14d2666886f68e5bd561f09a4656526",
      "item_sha256": "a9cef7c4188c9c3099707b2811d2949e202943fdf49b043589b49b57e06b886c",
      "at": "2026-10-06T01:49:48.125Z"
    },
    {
      "id": "ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] misidentifies the complexified inverse as the library resolvent. The supplied definition uses (λ−L̃)⁻¹, whereas Rλ complexifies to (L̃−λ)⁻¹, its negative. Equality of norms does not justify this restatement.",
      "context_sha256": "57f8579a0c57984441a1b7f8bb5d97e02796e552f1062daba21a75bcd7278350",
      "item_sha256": "68b5cd4685653b75178b810c46592ded3b53db137f34188a318b28b0197cb36e",
      "at": "2026-10-06T01:51:11.703Z"
    },
    {
      "id": "cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 defines N as the kernel of a(u,v)=∫u′v′, which is {0}. Steps 1.1–2.1 instead identify N with the kernel of a−k²(·,·). The shifted form is never introduced, so the claimed kernel identification and Fredholm application do not follow as written.",
      "context_sha256": "f5bd479a3dfc2d8cc2cb13ac476e1c6b40c4d3891b6450f4fe6bbc8463645777",
      "item_sha256": "c66d11399a7b21bd99a9dcf998a204869e15301cefaa5c68b892b9a55c484e72",
      "at": "2026-10-06T01:50:42.416Z"
    }
  ]
