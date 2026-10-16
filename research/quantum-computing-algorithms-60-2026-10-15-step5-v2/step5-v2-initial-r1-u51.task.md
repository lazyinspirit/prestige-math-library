# Step 5 adjudicate: initial, round 1, unit 51

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-51-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u51.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"51",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:def-qa-27-variable-time-model, 12:def-qa-27-block-encoded-qlsp, 12:lem-qa-27-lcu-projected-block-identity, 15:thm-qa-27-pseudoinverse-polynomial-degree, 24:alg-qa-27-cks-variable-time-linear-solver, 25:lem-qa-27-cks-stopping-time-instantiation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qa-27-variable-time-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied-probability regime is not checkable: it refers to inequalities “required by its theorem,” but identifies no such theorem or inequalities. Also, q_j=r_{j-1}s_j/s_{j-1} is undefined unless s_{j-1}>0, a condition the definition omits.",
      "context_sha256": "6a8e040762fc9fa5c236941fe09a257b0a72c2ccb2c4be15f9f97c0bf05c704f",
      "item_sha256": "3e5d8737b6ef2ca668dfc05533e63eef680b600af14d2cfb1f1190fabb358fa6",
      "at": "2026-10-16T05:09:09.582Z"
    },
    {
      "id": "def-qa-27-block-encoded-qlsp",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The QLSP interface requires the support gap γ to be supplied rationally or exactly represented. This definition only assumes a real γ, so it admits inputs with no usable encoding for the algorithm.",
      "context_sha256": "abe11f6687ac99059a2d41713631191ad16d472be6446ea40eb86965598a64ca",
      "item_sha256": "d13cfbfed3bee0924fa88a7694acc08ba99456de30ab6c8b400d61ca33738fb8",
      "at": "2026-10-16T05:08:51.293Z"
    },
    {
      "id": "lem-qa-27-lcu-projected-block-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The a_j may differ, so the U_j act on different ancilla spaces. No common component register or padding is specified, leaving SELECT and the claimed all-zero component-ancilla block ill-typed. Require a shared ancilla space or explicit embeddings.",
      "context_sha256": "1924292ff2d0d68ec40c91d96493c497a7a4ea63eeb818a81721ddd4f2a03773",
      "item_sha256": "a37238e6f056614aa0d13d9b118e655d79fe67cc30f38959f234a861954f8907",
      "at": "2026-10-16T05:08:51.799Z"
    },
    {
      "id": "thm-qa-27-pseudoinverse-polynomial-degree",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement applies p^{SV} to \\bar A^\\dagger, whose supported singular values are reciprocals and can exceed 1. The proof certifies p only on singular values in [δ,1] and applies it to \\bar A, so the claimed approximation is unsupported.",
      "context_sha256": "576b9d11a1d62594cc30d071454104746ae1738b8b012ff836554d8f91da06bd",
      "item_sha256": "8f969ef74cd03be5944c7243e434fad0e962c21b0d3eea7c55fc8f0ea1d68f19",
      "at": "2026-10-16T05:08:58.879Z"
    },
    {
      "id": "alg-qa-27-cks-variable-time-linear-solver",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "ρ is specified only by 0<ρ<1/3, but the procedure passes ρ/(16n) as β to alg-qa-relative-probability-estimation, whose interface requires rational β. Thus admitted irrational or unrepresented ρ inputs do not satisfy the dependency interface.",
      "context_sha256": "a601b70a8bb74433b205b1021b3f100911c78ff767ff34890c53f26c69be484e",
      "item_sha256": "ad8a0237dcde388b8e08858deb2ca5cf361075118f76c72802d9cbd60d975a32",
      "at": "2026-10-16T05:11:21.786Z"
    },
    {
      "id": "lem-qa-27-cks-stopping-time-instantiation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 5.1 defines s_i only for 1≤i≤m but initializes r_{-1}=s_{-1}=1; its i=1 recurrence needs r_0,s_0, neither defined nor established. The induction therefore never proves the first estimator/amplifier floor required for the wrapper claim.",
      "context_sha256": "3e534d66512bfd698d7a8316154bfebdbe00765def3bb941ea3501cfdb262e8d",
      "item_sha256": "207678c917aef9f7661d926ca23118e6e2b981aae30592b30d32c63db74a3802",
      "at": "2026-10-16T05:10:38.328Z"
    }
  ]
