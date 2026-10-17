# Step 5 adjudicate: initial, round 1, unit 17

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-17-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u17.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"17",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:alg-strong-rank-revealing-qr-with-finite-swaps, 1:thm-strong-rrqr-singular-value-comparisons, 1:ex-nearly-rank-deficient-design-matrix, 3:lem-exact-householder-bidiagonal-reduction, 6:alg-rank-thresholded-least-squares-by-svd, 6:thm-bidiagonal-svd-backward-error-under-local-stability, 7:thm-svd-thresholded-least-squares-minimum-norm-model.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-strong-rank-revealing-qr-with-finite-swaps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The finite-precision certificate never limits ε. For A=diag(0.01,1), k=1, f=1, W=I and R̂=diag(1,0), all scores are 0 and the residual is ≤1, yet the selected column has norm 0.01 while σ₁(A)=1.",
      "context_sha256": "12a75e7c443b9fc92bc3c31bf7d394849ff219e8ec9032617cc125c7258bb255",
      "item_sha256": "09f1f2283ac7f552acaf9b69f37cb460ddd9552c6c65e80bd822035a55626d73",
      "at": "2026-10-16T17:53:22.727Z"
    },
    {
      "id": "thm-strong-rrqr-singular-value-comparisons",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates the cited theorem: its interface gives invariance of spectral and Frobenius norms, not preservation of every ordered singular value. It therefore does not license the claims about σᵢ(Q* A Π) or the k=0 case.",
      "context_sha256": "df3a4b7040e2c7d32d6ed6bc2354dc0793bc80f51995765b92c7e72eee0baedf",
      "item_sha256": "b3a557ef71e967d6e5f0a384a371697b3ee98c47bf7710af1b5fcc97c02d99c8",
      "at": "2026-10-16T17:53:22.912Z"
    },
    {
      "id": "ex-nearly-rank-deficient-design-matrix",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 cites prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex, but the supplied spectral-rank interface has a different ID. The proof's key rank-count claim is therefore not licensed by its declared dependency.",
      "context_sha256": "07678d9fdb5f4e81a8b6434d6157745d98ad5fb4b7ffb0b34467bce84fc7d587",
      "item_sha256": "fda14925ac73fe8bfaacc7f0370a2aad479fe75c28f5ad4a5409f488674b5843",
      "at": "2026-10-16T17:53:07.018Z"
    },
    {
      "id": "lem-exact-householder-bidiagonal-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 upgrades the cited theorem’s existence claim to a claim about the algorithm’s selected reflector. F1 omits its construction, so step 1.1’s assertion that the selected reflector annihilates the active vector is not licensed by the stated facts.",
      "context_sha256": "e799c62682f9cc2a981e2f46175801642231cb57eccaf60dffa1d15572a8c70d",
      "item_sha256": "44f4a4ea6d4fb95c46fac6d569bf119711837909755947e3ca33bfeaf9723dc5",
      "at": "2026-10-16T17:53:04.057Z"
    },
    {
      "id": "alg-rank-thresholded-least-squares-by-svd",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Householder range-failure guarantees only partial factors and stored transformations; B and the reconstruction/orthogonality residuals are promised only on success. This algorithm requires those triplet/reports on any failure, so its inconclusive failure output is undefined.",
      "context_sha256": "6efdf743e8435e658a5eec0b217317057ce902f235e6d1d335f432bee971ff73",
      "item_sha256": "e2d8850d775d756f0db7ff37e8977c2ad4080ef5577775bbeaaca49fcba380a4",
      "at": "2026-10-16T17:52:47.112Z"
    },
    {
      "id": "thm-bidiagonal-svd-backward-error-under-local-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The concrete-implementation claim invokes the local error lemma without its required condition (r−1)u<1 for every Householder dimension. Success of the arithmetic algorithm does not establish that condition, so the stated η_H bounds are unsupported for the claimed cases.",
      "context_sha256": "d99a8a3017a38a5370e4d22678eff35b0e4099acced4c7b7880445cd76966c1e",
      "item_sha256": "520693181e333ef963ec8521ff69aa188b8c916904d9ebd67cf9baa35d63d239",
      "at": "2026-10-16T17:53:31.529Z"
    },
    {
      "id": "thm-svd-thresholded-least-squares-minimum-norm-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement calls xτ the algorithm’s output without requiring exact-arithmetic convergence or specifying a successful sweep budget. The supplied algorithm may return `inconclusive`, so that output claim is not guaranteed.",
      "context_sha256": "6460df3cc58285c44f24135e3abae89df1825ce6b6c34d63e44b781bbed1ecf2",
      "item_sha256": "e4bf18402315fdd22faef4350a8d33cb5c96f969391adf9e46b6b88609edbda0",
      "at": "2026-10-16T17:52:47.063Z"
    }
  ]
