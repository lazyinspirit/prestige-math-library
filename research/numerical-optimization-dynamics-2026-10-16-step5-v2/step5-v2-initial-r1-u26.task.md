# Step 5 adjudicate: initial, round 1, unit 26

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-26-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u26.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"26",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:alg-revised-simplex-residual-audit, 2:alg-revised-primal-simplex-bland-rule, 2:prop-revised-simplex-sparse-pricing-operation-count, 2:thm-revised-simplex-primal-dual-residual-gap, 4:ex-revised-simplex-primal-dual-trace, 4:ex-revised-simplex-unbounded-ray, 5:ex-revised-simplex-degenerate-cycle-prevented-by-bland, 6:thm-revised-simplex-phase-one-extraction-and-farkas.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-revised-simplex-residual-audit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The algorithm returns `verified-optimal-for-stored-data` but supplies no separate proved correctness result showing its certificate conditions imply optimality. The library’s algorithm convention requires correctness to be stated in a proved lemma or theorem.",
      "context_sha256": "c34106754fa504e6b4bf8acae473869aab916f7a4a018f33fa10c331132e0701",
      "item_sha256": "aeb257df57482247335143941c2c8aa31a017191165df3faeead0c25a85ec2d8",
      "at": "2026-10-16T17:55:54.378Z"
    },
    {
      "id": "alg-revised-primal-simplex-bland-rule",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition asserts a complexity result (“no polynomial iteration bound”) inline; algorithm conventions require complexity claims in a separate proved result, and this item supplies none.",
      "context_sha256": "2a044464ea4a57082e0493f2093a1fd541e0334565d0632e1b9db814d35f386a",
      "item_sha256": "ec1555cdb60c05fde0ef3965c335a8eb873027f44ebe17c8d88f5c9e2e7a7ca0",
      "at": "2026-10-16T17:56:14.093Z"
    },
    {
      "id": "prop-revised-simplex-sparse-pricing-operation-count",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "CSR column indices run from 0 to n−1, but the basis dictionary indexes columns 1 to n. Thus w_{c_t} can address coordinate 0, and c−w is not identified with the dictionary’s reduced costs without an explicit reindexing.",
      "context_sha256": "abf2fb80f9df3af4e001180868477c997427b49ffc8ba153de0137b9c101967f",
      "item_sha256": "8ce605fa5f8b6b703d852ab1a50c40a3e6ebdac5ec49a8cda1fd2a4d848e136d",
      "at": "2026-10-16T17:55:36.239Z"
    },
    {
      "id": "thm-revised-simplex-primal-dual-residual-gap",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem quantifies over arbitrary real standard-form data and finite x,y, but the audit accepts only dimension-matched, finite binary-floating-point stored data and candidates. It is undefined for the stated general inputs; F2 omits this restriction.",
      "context_sha256": "3b7ac0bca56e380bc5d808cfb2f1c104e88f709fb0140230da57d46414c61eaf",
      "item_sha256": "d63fa1f3450b8cfcf0506ab783b8d269ff814a72c10a1473b1e068e92fb0b147",
      "at": "2026-10-16T17:55:41.591Z"
    },
    {
      "id": "ex-revised-simplex-primal-dual-trace",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3’s restatement omits the theorem’s hypotheses that the basis is dual feasible and row i has x_{B_i}<0. Without them, the claimed q need not satisfy Aᵀq≥0 or bᵀq<0.",
      "context_sha256": "7d132f2095b6946d437aaffbc42ae7abb1d7ae6219e3d134f8a09c7898ec1e02",
      "item_sha256": "d02a55d99b706148acef1845cb173f89f6bc34835e20967dc8457aa7d292d056",
      "at": "2026-10-16T17:55:49.654Z"
    },
    {
      "id": "ex-revised-simplex-unbounded-ray",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 omits the dependency’s essential hypotheses: B must be primal-feasible and j nonbasic with reduced cost <0. As written, it claims d_i≤0 alone guarantees an improving feasible ray, which the interface does not license.",
      "context_sha256": "2ec6865f775ef75e4dfea730e868c953b769fab47e814d7cbde32ae928bf3b4e",
      "item_sha256": "53c268c9486ec2d64249c16a7c5b38b3b90f8671d755df954d275aaee8078a63",
      "at": "2026-10-16T17:55:42.443Z"
    },
    {
      "id": "ex-revised-simplex-degenerate-cycle-prevented-by-bland",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 7.1 says the other variables are zero, but for basis (5,1,3) the basic vector (2,1,1) gives x5=2. This contradicts the stated solution.",
      "context_sha256": "32b51cb77db2a89e4e9d52dedc4b8af9a67b19fbef98a9f2a59387aed27a0054",
      "item_sha256": "6c634e3badc592e986c3ff35a1a4978be8bff90ad1ca609ff755ad19fd7a018e",
      "at": "2026-10-16T17:56:08.843Z"
    },
    {
      "id": "thm-revised-simplex-phase-one-extraction-and-farkas",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 needs a dual-feasible terminal basis, but F2 guarantees only an optimal basis. In a degenerate LP, an optimal basic feasible point can have negative reduced costs; F3 only defines them. Thus the proof does not show the returned multiplier yields the claimed Farkas certif",
      "context_sha256": "ecbc62a766992bad5cbc08a879b79b5bc910625c3d09a05f233fcfeb2370d21b",
      "item_sha256": "9f3fcb4d1ed99fc700a7eb819dd72be7d67f8bd471e7071ee2a1e55aaa40a622",
      "at": "2026-10-16T17:56:09.800Z"
    }
  ]
