# Step 5 adjudicate: initial, round 1, unit 24

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-24-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u24.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"24",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:thm-qc-projective-chart-dimension, 9:def-qc-clean-ancilla-output-projection, 10:alg-qc-isometry-unitary-completion, 13:thm-qc-amplitude-table-precision-and-compilation, 13:ex-qc-amplitude-table-state-preparation-cost.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-qc-projective-chart-dimension",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 applies the quotient-topology continuity test to φ_j∘π on all of C^D\\{0}; that composite is undefined when z_j=0, and the ratios are undefined there. Thus continuity of φ_j is not proved as written.",
      "context_sha256": "cdfbe7968cf0acd05d664fcfcf01ebddbd48f3560bece8452cb824e5c95a9438",
      "item_sha256": "ba8b28ed6e786eb214d3f0ecbcf5e9870a0bc7c54eeb06e75b34bd1ffd6044bc",
      "at": "2026-10-16T04:59:31.048Z"
    },
    {
      "id": "def-qc-clean-ancilla-output-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied tensor interface makes the inner product linear in its first argument. Thus the Dirac bra 〈0^a| is conjugate-linear on its input: the displayed contraction is not a linear projection, and on λψ⊗|0^a〉 it yields \\bar{λ}ψ, contradicting v=λψ for general unit λ.",
      "context_sha256": "fb58cae01f71693a6839f34e26bbac23ec484d48a5b0d3b50a232657eb469436",
      "item_sha256": "64fff09fd0c9e735a6e4c9100f26e1d597f41ddc409d8f260303d274350abc70",
      "at": "2026-10-16T04:59:22.496Z"
    },
    {
      "id": "alg-qc-isometry-unitary-completion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Circular prerequisite: this algorithm lists thm-qc-isometry-completion-and-synthesis in justified_by, while that theorem claims completion by this algorithm. The theorem therefore depends on the algorithm it is used to justify.",
      "context_sha256": "af2e1c2ab1f5f8010863daed56644b5e2dd7c1bd93e237c9e673dd87abe90980",
      "item_sha256": "c246a517ff436651c88e054d2527322f1921a5dfc4dc1a893bdf3b4378ebebbb",
      "at": "2026-10-16T04:59:51.888Z"
    },
    {
      "id": "thm-qc-amplitude-table-precision-and-compilation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 is unsupported: the QSD interface gives a CNOT bound, but not the stated recursion or the U_r factor-count bound. The compiler gate-count claim relies on that unlicensed uniform factor bound.",
      "context_sha256": "8d103a9f228879d8a8e2547b640dbd497b65923245735df5f856861511768ac0",
      "item_sha256": "4035215018d5d95252e5f27e571c59bb35e60cda396a7efd59490f8b76ebca0a",
      "at": "2026-10-16T05:00:25.589Z"
    },
    {
      "id": "ex-qc-amplitude-table-state-preparation-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1's supplied interface promises exact preparation and a cost bound, but gives no subtree-norm angle formula. Step 2 cites that absent formula to assert all three angles are π/2, leaving the circuit-specific claim unsupported.",
      "context_sha256": "6877605a6ed7684e1e81747f40fd2443f5120d6e782d39bcb0c4764e5109616c",
      "item_sha256": "ef870badac4f097db98680f223ec2c8dff208e6b474e5ffc23f3eb66c18c825b",
      "at": "2026-10-16T05:00:01.360Z"
    }
  ]
