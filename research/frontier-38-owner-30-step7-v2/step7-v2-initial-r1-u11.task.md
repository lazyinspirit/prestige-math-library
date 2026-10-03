# Step 7 adjudicate: initial, round 1, unit 11

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"11",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations, 0:lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero, 2:lem-compact-group-matrix-coefficients-separate-points, 3:thm-uniform-peter-weyl-density, 5:cor-parseval-and-fourier-inversion-for-compact-groups.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F6] inaccurately restates def-complex-numbers-and-arithmetic: its supplied interface defines the quotient field construction, imaginary unit and real map, but neither conjugation nor modulus, so it does not license the asserted identities.",
      "context_sha256": "a6d181f58a69ce07f26ac12f12b64a684cc75c5a94da6782170e02d314caa72d",
      "item_sha256": "310ab5ad47cd2b5ca167a984e445804b7ef4ba83337bcd2001c7453c18a870d7",
      "at": "2026-10-03T14:18:28.071Z"
    },
    {
      "id": "lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 defines U_n=(-1/n,1/n) for every sequence index n, but library sequences start at 0. U_0 and hence e_0 are undefined. The sequence used in step 3.1 is therefore not defined; use U_n=(-1/(n+1),1/(n+1)).",
      "context_sha256": "ca8cdd0dfb04bdffa3687a9378a7a3679aaf434fc81397116fdba4cbb6d4848d",
      "item_sha256": "5bb503ed37962f0953171dec8171064476a8bc8c52b484e655a717cb3d169538",
      "at": "2026-10-03T14:18:45.014Z"
    },
    {
      "id": "lem-compact-group-matrix-coefficients-separate-points",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] incorrectly extends convolution from C_c(G) to arbitrary continuous functions on G. For G=R and f=g=1, its integral diverges. The cited dependency requires compact support; this local restatement omits that essential hypothesis.",
      "context_sha256": "77e8c7d101384ec6acc96bd25a2fabdc0f3ebd35d7e1ca4fe8ab80b6ccd14fdb",
      "item_sha256": "67901deb884f1cf03c4b932e2120adf2ce6cb15fc93cfbda0a67ebea29283a31",
      "at": "2026-10-03T14:18:50.761Z"
    },
    {
      "id": "thm-uniform-peter-weyl-density",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] drops the separation lemma’s hypothesis that K carries a normalized Haar probability μ. No such measure is assumed or its existence established, so step 1.1 invokes that dependency without satisfying its prerequisites.",
      "context_sha256": "224ebf8f0bb0525be6d37b22d231efe91a69f2fa87d205dfc9417d5027874ba2",
      "item_sha256": "744566d5f343b75fb0485a02211263824ba654e2cdaaeea0acb2b280b6b9a9c4",
      "at": "2026-10-03T14:18:22.477Z"
    },
    {
      "id": "cor-parseval-and-fourier-inversion-for-compact-groups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 and step 1.1 invoke the Bochner integrability criterion, but neither cited interface supplies it. The definition explicitly defers the integrable-norm characterization to a later theorem, so this dependency restatement is unsupported.",
      "context_sha256": "f7b6debcd7953ef48377a69893051fc80a3c24b9019b32099af5a1bf55f63b28",
      "item_sha256": "98dcb99f291ef8bc9c738890afccc59b4d2bfda365501f085ac79d29d57747ed",
      "at": "2026-10-03T14:18:56.705Z"
    }
  ]
