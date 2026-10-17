# Step 5 adjudicate: initial, round 1, unit 83

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-83-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u83.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"83",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-stiefel-grassmann-optimization-conventions, 3:ex-trace-eigenspace-optimization-with-lanczos-start-angle, 4:def-stiefel-qr-polar-retractions, 6:alg-riemannian-trust-region.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-stiefel-grassmann-optimization-conventions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition sets sym(M) for an arbitrary matrix, but M+M^T is undefined unless M is square. Restrict M to square matrices.",
      "context_sha256": "b784bd083f208b32fe6553fdb6332a8fb4a0eae1a9c13c7cd05778ac34720a0d",
      "item_sha256": "f14b3ff409d86a10e31d766b983cb52ee4220b42fc15a496b05a20aadd30abf6",
      "at": "2026-10-17T01:52:07.531Z"
    },
    {
      "id": "ex-trace-eigenspace-optimization-with-lanczos-start-angle",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem bounds the maximal Ritz value θ₂, not this candidate’s quotient. Since the candidate quotient is ≤θ₂, its gap is ≥ the Ritz gap. The candidate’s 4/9 gap is separately ≤5/8, but the cited bound does not establish that comparison.",
      "context_sha256": "bcec00f3db720a6d188f1001d4888097496f13963b85ca720129041c7eb632bf",
      "item_sha256": "5ec2bec1ff1722b24cda093a6020441e9ab1b55ac865d7628546a5da5117ac73",
      "at": "2026-10-17T01:52:51.981Z"
    },
    {
      "id": "def-stiefel-qr-polar-retractions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title calls these retractions, but the proof only establishes full rank, orthonormal outputs, and frame independence. It never verifies the retraction conditions R_X(0)=X and dR_X(0)=id.",
      "context_sha256": "3e0420f7df1883c2adb6cdd97c7a3502ab0948371dda9f08e047b01c100c6260",
      "item_sha256": "8ab86b91df71e2286711ed9614cdb962373a6a460cfffd1d56199e52da4bf2c9",
      "at": "2026-10-17T01:52:05.572Z"
    },
    {
      "id": "alg-riemannian-trust-region",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 2–3 use B_{x_k}, but the algorithm never supplies a family or rule for choosing these operators. The bound M_B only constrains them; it does not determine them, so the procedure is not executable from its stated inputs.",
      "context_sha256": "07b11b36841ae9d28381ea979e20a82b42e0e244901d9535f90754d53892ad5f",
      "item_sha256": "dc5c2e294f714dfaa47fe3001d11523d3213f7e5efb9aff9d18da6b7c17ddeea",
      "at": "2026-10-17T01:52:48.708Z"
    }
  ]
