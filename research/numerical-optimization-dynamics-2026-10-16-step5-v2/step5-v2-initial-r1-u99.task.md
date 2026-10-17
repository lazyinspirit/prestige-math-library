# Step 5 adjudicate: initial, round 1, unit 99

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-99-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u99.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"99",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-chaos-orthonormal-tensor-basis, 2:cex-finite-support-makes-high-degree-moment-gram-singular, 3:alg-christoffel-weighted-least-squares-collocation, 3:def-finite-chaos-orthogonal-projection, 5:thm-chaos-quadrature-coefficient-error-split, 9:ex-total-degree-versus-tensor-product-work.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-chaos-orthonormal-tensor-basis",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition uses thm-independent-polynomial-chaos-tensors-are-orthonormal to justify that ψα lies in L², but that theorem forms ψα from this definition. The well-definedness justification is circular.",
      "context_sha256": "2b004d28393ba97f1e61ba63ad666a5399c7ec4cb3c1775fe90524b11ec2a8af",
      "item_sha256": "20691d441ac01f6b670747baff9906996a5abe2cba41294cf71b59c78309d315",
      "at": "2026-10-17T01:58:00.082Z"
    },
    {
      "id": "cex-finite-support-makes-high-degree-moment-gram-singular",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited interface assumes the chosen cutoff is admissible, so its degree-2 Gram matrix is already positive definite. The two-point law at p=2 is not admissible; the stated Given/F1 fall outside the dependency’s hypotheses.",
      "context_sha256": "245a63fcbb3a61cb14fe90b4a47762dd4b1cf8d1abd019dcd49c18a07744004a",
      "item_sha256": "be8ab3b7af41d0d1539e52d44a1d3c2564f5597efd321cb01a5ccf5700b78f2c",
      "at": "2026-10-17T01:58:11.133Z"
    },
    {
      "id": "alg-christoffel-weighted-least-squares-collocation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The `justified_by` citation is circular: the lemma states KΛ and ν are “as in” this algorithm, while the algorithm relies on that lemma to make ν a probability law. State the lemma independently of the algorithm to break the cycle.",
      "context_sha256": "786c247af4b919b2a07339521ecda7e5b39d7b69bddc9620f8a454512d6cde50",
      "item_sha256": "f3e0469029d62a54bc987bcd67787cb0cb9ccfd39e88ca29df0cae06c2f7adcb",
      "at": "2026-10-17T01:58:26.919Z"
    },
    {
      "id": "def-finite-chaos-orthogonal-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition quantifies over any finite Λ, but the cited basis interface only defines ψα for indices in the admissible degree box. For finite sets containing out-of-box indices, cα and PΛu are undefined.",
      "context_sha256": "5ff8a15a2204d202639c4c60a8704669bfb26c34ef6f655cdd4aff89f04a241e",
      "item_sha256": "26cae8fd89df6e2eced8bb179b703b302e9e027c425503aa55daf05b6bb2fb47",
      "at": "2026-10-17T01:57:56.366Z"
    },
    {
      "id": "thm-chaos-quadrature-coefficient-error-split",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 omits the cited theorem’s required hypothesis 0∈Λ, then step 1.1 relies on it for arbitrary finite Λ. The supplied interface does not license that inference.",
      "context_sha256": "3b2152f78858bf2d4ed7cebf482ed1b09d2bdbee097917c5d160b6543f1929ad",
      "item_sha256": "3c7b731f0d7a9fe9492f72f538a8ebee6ce6c077ee2fec25ef8a27d6c993b107",
      "at": "2026-10-17T01:58:08.861Z"
    },
    {
      "id": "ex-total-degree-versus-tensor-product-work",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title makes an unqualified general claim that total-degree chaos uses fewer modes than a tensor product, but the example establishes this only for three inputs with cutoffs (2,2,2) and order 2.",
      "context_sha256": "6a82381142196deb81051bbef07e93e728d6af0927fb6d8f06962e70f79e03b6",
      "item_sha256": "af7e3d10694fd06292ca00bddc7b4eb40c833c4700a6d41a63e1ee1b9728ee95",
      "at": "2026-10-17T01:58:12.453Z"
    }
  ]
