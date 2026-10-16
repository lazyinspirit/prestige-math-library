# Step 5 adjudicate: initial, round 1, unit 21

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-21-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"21",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:lem-qc-t1-truncated-exrec-witness-reduction, 18:lem-qc-planar-mw-recovery-failure-yields-half-error-path, 20:def-qc-ft-gadget-and-proper-code-contract, 20:lem-qc-verified-steane-magic-state-and-injection, 21:def-qc-level-r-good-and-bad-rectangles, 21:lem-qc-verified-steane-initialization-and-readout, 22:lem-qc-recursive-bad-rectangle-probability, 22:thm-qc-explicit-proper-code-and-universal-gadgets.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qc-t1-truncated-exrec-witness-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.2 claims every external output of a transferred EC feeds the claiming successor. The hypotheses allow logical classical ports and retained records with fan-out to other controls; port discipline does not make these outputs terminal. The owner-DAG contraction used later is ",
      "context_sha256": "c6e662181bd254a2f048add080ad77555f11de06f6d53ef7ad1d1bddd7091d62",
      "item_sha256": "fa8e8bd88e2674aa53ef9d925d36b066f38df3cf59b0810d782eb1cb7105f96b",
      "at": "2026-10-16T05:01:15.127Z"
    },
    {
      "id": "lem-qc-planar-mw-recovery-failure-yields-half-error-path",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 misstates [F2]: the full syndrome includes zero entries for Z checks; only its X-check component is ∂₁E. The claim that the syndrome vector equals ∂₁E is false as written.",
      "context_sha256": "feee5e36f6864e2f919dbdaf24c41a41a6041923ad93a4d273958b0785e2bd42",
      "item_sha256": "5ce40bf0890ac5f88573196e91d6a106a36c45a2828243a9f76c45341f5ce9cb",
      "at": "2026-10-16T04:56:09.234Z"
    },
    {
      "id": "def-qc-ft-gadget-and-proper-code-contract",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The contract calls d a located-error capacity, but requires one fixed recovery to correct channels whose Kraus supports may vary across all sets of up to d coordinates. That is unlocated-error correction; the distinction changes what the parameter promises.",
      "context_sha256": "16e8407211ede9a1890251c2007d3b397587c57399e72ae70f5f77dc5e8ea6b0",
      "item_sha256": "508a6b64954df0c41717ee2465cb035944a1497aede00b55667371122bf82a85",
      "at": "2026-10-16T04:56:46.047Z"
    },
    {
      "id": "lem-qc-verified-steane-magic-state-and-injection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied F2 interface guarantees a correction circuit, but not reusable two-candidate cat preparation, threefold parity checks, per-coordinate enables, or truth-table size bounds. Steps 2.1–4.1 and 10.1 rely on those unsupported details.",
      "context_sha256": "55eac4e6621d0e08d157f9da875d7db256d63d2e29ad8ff9d2e5f73c5995a00a",
      "item_sha256": "20a334d741f3e9cbe342af51e4e5a8f4e697ec512841ce7fd9279dce0e4566e5",
      "at": "2026-10-16T04:57:23.846Z"
    },
    {
      "id": "def-qc-level-r-good-and-bad-rectangles",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Goodness is not parameterized by a fault path F or execution. The cited interface defines F as the faulty locations, so “fault-free” at level zero—and every recursive good/bad status—has no defined truth value.",
      "context_sha256": "40a83c957642beb4ba01498abb1ec12497baee6e592369eeaf6a0c988712ed8e",
      "item_sha256": "33a04e11601e7abbb5bfc91a270d98e235ce7728a3e0552753e7f24ead923911",
      "at": "2026-10-16T04:56:16.822Z"
    },
    {
      "id": "lem-qc-verified-steane-initialization-and-readout",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3’s supplied interface gives magic-state preparation and injection, but no nearest-coset decoder f or reversible decoder circuit. Steps 1.2–5 rely on that asserted supplier for logical-label decoding and fault containment, so this key dependency is unlicensed.",
      "context_sha256": "686101dcc3727dba98d140482af8e0283f68037b1d9dd47ee727fea81bf20dbe",
      "item_sha256": "fc533952eed70a719949b5d175eea375aceade44835253ad55837d61dbcb3c53",
      "at": "2026-10-16T04:57:46.021Z"
    },
    {
      "id": "lem-qc-recursive-bad-rectangle-probability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "“Let p_r be a uniform upper bound” permits loose bounds. Step 1.2 bounds actual bad-rectangle probabilities, not an arbitrarily chosen p_{r+1}; thus the recurrence and closed form need not hold. Define p_r as the supremum probability or as recursively chosen bounds.",
      "context_sha256": "7b7f70fcdb4ac4ad6e0e852d5fc177eb3275ec5b44239298cea90974a5557778",
      "item_sha256": "b7d95c5c644c006011f9af85b31c489832bb6e919186309373873624b66474f5",
      "at": "2026-10-16T04:56:27.540Z"
    },
    {
      "id": "thm-qc-explicit-proper-code-and-universal-gadgets",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 1.1 and 3.2 rely on an exact bare encoder and its inverse, attributing them to F3. The supplied F3 interface promises a fixed magic-state factory and T injection, not an encoder for arbitrary inputs, so the declared recovery and encoder boundary are unsupported.",
      "context_sha256": "de0e2e0584a6d7881729fbe7bb913a9b8686141461c367f46269fa8aedb9cd7a",
      "item_sha256": "8990f6b7e911019d4c0f9e5e108e4c84110cabfc8d9d7551580db06fdb869d84",
      "at": "2026-10-16T04:58:30.947Z"
    }
  ]
