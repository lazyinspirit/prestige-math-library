# Step 5 adjudicate: initial, round 1, unit 30

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-30-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u30.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"30",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-qc-tqc-toric-excitations, 4:thm-qc-tqc-toric-gap, 4:thm-qc-tqc-toric-mutual-sign, 6:thm-qc-tqc-toric-recovery, 6:cex-qc-tqc-planar-is-not-toric.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qc-tqc-toric-excitations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 is unsupported: the cited interface defines syndrome bits from an error’s commutation signs with generators, not from check eigenvalues on an arbitrary simultaneous eigenvector. It does not establish the claimed check-eigenvalue convention.",
      "context_sha256": "51461ac5f7576849ba38ea338896725e4a44e51259b7e73ced766f35cf688d48",
      "item_sha256": "f7e892d3c5ed99ceab5f2f6304fce52585995a42177498afccd3de788d47f6ef",
      "at": "2026-10-18T04:28:34.123Z"
    },
    {
      "id": "thm-qc-tqc-toric-gap",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 uses F4 to claim energy Eg+4Je, but F4 only restates that there are two e defects; it omits the interface’s fact that the string has zero m syndrome. Without that, the energy and gap attainment are not established.",
      "context_sha256": "d74e7c99f803fb5299c215b9e5a70b5a05cb3d7eb80d69e024dca433df0fedc5",
      "item_sha256": "0cc9b6b039240d2176d0095cc528aa06c2f21afbd0c2b3a4157d34df6e59b448",
      "at": "2026-10-18T04:28:46.999Z"
    },
    {
      "id": "thm-qc-tqc-toric-mutual-sign",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 claims the cited lemma specifies which qubits carry Z(P) and X(Q), but its supplied interface states only their check syndromes. Without the operator-support identification, the path-support overlap does not establish the symplectic pairing used in step 1.1.",
      "context_sha256": "d16269105b0907b0386cf620c1675a4f7888cf4c69e00af5f055e04f960a6077",
      "item_sha256": "ac3e340eb41a804ac8f28312a59fd0afb4a0454873cc9f13411da4bd70fcb0bb",
      "at": "2026-10-18T04:28:58.285Z"
    },
    {
      "id": "thm-qc-tqc-toric-recovery",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem omits the required L≥3 hypothesis. Both toric-code dependencies establish their claims only for L≥3, so [F1] and [F3] restate them beyond their supplied interfaces.",
      "context_sha256": "97fdd2ea15ddcd16662eb8f9245bce3dcd144a99b9ad05126b5f98a22136b043",
      "item_sha256": "f17f1583194a2038d5410672d3d86b4782eaac8fdc7b839b654cf4d8bbe8cbb1",
      "at": "2026-10-18T04:28:44.220Z"
    },
    {
      "id": "cex-qc-tqc-planar-is-not-toric",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] only establishes that every nontrivial X logical class has weight at least d+1; it gives no X logical class attaining that bound. The claimed X distance 4 at d=3 is unsupported.",
      "context_sha256": "4aab6cbdaa668cfcb186729181dbbe5302f560fc4b997391d8802e99e9f26c3f",
      "item_sha256": "06a6f501d655b9c61e556c900a5d5ffdf380962ce397f9c2ef42012eab0438e9",
      "at": "2026-10-18T04:28:55.675Z"
    }
  ]
