# Step 5 adjudicate: initial, round 1, unit 21

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-21-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u21.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"21",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-it-classical-quantum-state-and-holevo-information, 2:lem-it-relative-modular-representation, 2:ex-it-bell-pair-negative-conditional-entropy, 6:thm-it-holevo-measurement-bound.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-it-classical-quantum-state-and-holevo-information",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: Tr_X rho_XB traces out the first factor, but the cited def-qc-partial-trace defines contraction of the second factor. It does not justify the displayed equality; use the first-factor partial-trace interface.",
      "context_sha256": "c2f4dd807ee356f3c2bb2fbbbf016dd76dd72edbcfe007ac8e7a30c944e806b7",
      "item_sha256": "44a2cd867bb870a8fef529dea5652abbe1977aaaed8a091ac8cf7f6996dfcc4f",
      "at": "2026-10-18T04:24:52.096Z"
    },
    {
      "id": "lem-it-relative-modular-representation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 uses a_i,b_j for both basis vectors and scalar eigenvalues. E_{ji}x requires vectors, while b_j/a_i requires scalars, so the proof is ill-typed as written; use distinct symbols for eigenvectors and eigenvalues.",
      "context_sha256": "36233d64549a74fa9a40ea63a990a14b1354ff94ecd42d413dac992744abc39c",
      "item_sha256": "c3230a98ecb0c1dcdb41e6e9fe4b71734f628c9881bcc30d5aff6679678fc477",
      "at": "2026-10-18T04:25:01.897Z"
    },
    {
      "id": "ex-it-bell-pair-negative-conditional-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3 concludes −ln2<0 from F6, which gives only ln(1/2)=−ln2. It does not establish ln2>0; use strict increase of ln and ln1=0 from thm-natural-logarithm-laws.",
      "context_sha256": "a64532c63dc568f8c4d0d2fc88f49dabd67c6be908d219328458f750eac729a2",
      "item_sha256": "0b014b3d204b007507dd1187f313c244ce8c82ed1c8b01a258ea7640398f187c",
      "at": "2026-10-18T04:25:07.502Z"
    },
    {
      "id": "thm-it-holevo-measurement-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 proves support inclusion only when p_x>0, but concludes every D(rho_x||bar rho) is finite. A zero-weight branch can have infinite relative entropy: take p_0=1, rho_0=|0><0| and p_1=0, rho_1=|1><1|.",
      "context_sha256": "1672b012e29752a7b184849cd1796c4b7d38eb259cd984e7b006b367c319c270",
      "item_sha256": "8c048eb808b12188bbad61e6453c02d9684c132bd4e39ddd624bee7e40eb5d7d",
      "at": "2026-10-18T04:25:11.025Z"
    }
  ]
