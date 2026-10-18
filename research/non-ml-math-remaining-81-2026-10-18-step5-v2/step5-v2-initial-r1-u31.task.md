# Step 5 adjudicate: initial, round 1, unit 31

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-31-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u31.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"31",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 8:lem-qa-37-local-braid-acts-trivially-on-spectators, 9:def-qa-37-finite-adiabatic-braid-input, 9:def-qa-37-fusion-input-encoding, 9:def-qa-37-resource-cost-model, 12:def-qa-37-fibonacci-braid-gate-set, 12:ex-qa-37-fusion-measurement-branches, 13:ex-qa-37-approximate-b6-target, 14:thm-qa-37-su2-compiler-error-length, 16:ex-qa-37-fibonacci-budget.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qa-37-local-braid-acts-trivially-on-spectators",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 conflicts with the supplied convention: positive σ_i is represented by R_i, while precomposition by the inverse positive braid acts by R_i^{-1} on a multiplicity-free channel. Step 2.1 therefore cannot identify f_i∘b^{-1} with ρ_{a_i}(b).",
      "context_sha256": "4012ae5e174dfaff00634fd02d76ff0312ee0d90ecd34e1893e4b2636a78f1b0",
      "item_sha256": "c62d2c5a7ba04bfe6fa4802b493eb61063787c7eb66faadfa8b015bc4c9a2900",
      "at": "2026-10-18T04:29:57.987Z"
    },
    {
      "id": "def-qa-37-finite-adiabatic-braid-input",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The physical-braid interface ties ρ(b) to the band only through unitary identifications and a transported-action phase relation. This input supplies neither, yet calls ρ(b) its physical action.",
      "context_sha256": "24f30310d5b5e040a3cc4a1841e67f38616e19324db118f9186ec89e38839a80",
      "item_sha256": "c9e8326672b5bc264d910445f034a97adcb7abc89bff812de31a98806fa84b8c",
      "at": "2026-10-18T04:29:28.332Z"
    },
    {
      "id": "def-qa-37-fusion-input-encoding",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The encoding claims to record the isometry as finite classical data, but permits arbitrary complex isometries and gives no code for their entries. A finite binary input cannot exactly encode all such choices; the dependency defines J only as an abstract isometry.",
      "context_sha256": "bcc97aba0c9f78a919f673d75643025e4617854250b068dd409ab49bb0a98ad6",
      "item_sha256": "9cc98b47d279a89731a339ceaac58fb43bbae9f025bec94efd57d3b328afae75",
      "at": "2026-10-18T04:29:15.308Z"
    },
    {
      "id": "def-qa-37-resource-cost-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The ledger delegates circuit costs to the QC model but has no coordinates for circuit description length, wire count or depth, or nonoracle gate count; N_prep covers preparation only. Solvers with arbitrarily different computation circuits can therefore have the same tuple, leavi",
      "context_sha256": "7a95599ee56b0b584e3ef2d4d5587398e39732c7b9383f293778f7843d007362",
      "item_sha256": "127721839612f2106c2ca5ad691c1a654187ac1b94b8a1dd172ea7660194932f",
      "at": "2026-10-18T04:30:12.749Z"
    },
    {
      "id": "def-qa-37-fibonacci-braid-gate-set",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the claim that algebraic root-isolation data are required by finite-precision SK is unsupported. The cited Dawson–Nielsen paper explicitly says it ignores finite-precision arithmetic (§3), so it cannot license that requirement ([paper](https://arxiv.org/pdf/quant-ph/05050",
      "context_sha256": "5274410fce9b60d697b2286fedce3c1474ebec50bffb9dea8be7daa62d19bd78",
      "item_sha256": "2e688b2d7ff6f3179030540c48d4f618f3d33b55c6274c300c1f19c29c3b6fc2",
      "at": "2026-10-18T04:30:10.509Z"
    },
    {
      "id": "ex-qa-37-fusion-measurement-branches",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 wrongly says the surviving conditional branch is the basis vector: for a normalized superposition with a zero coefficient, the other amplitude may be e^{iθ}, so the branch is e^{iθ}|a⟩. No phase restriction is stated for these boundary cases.",
      "context_sha256": "0e3eebb7f1b8588c4dad658aed9d7c6edcf07fe46f0cf3de0b578f4bc1d8ba5f",
      "item_sha256": "1f03394a6c6ed5a240498efbbbca7b48b9aac50ee2449838302fed6bd10460e6",
      "at": "2026-10-18T04:29:41.797Z"
    },
    {
      "id": "ex-qa-37-approximate-b6-target",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 gives logical-error and leakage bounds for the approximating braid it supplies for each δ. It does not establish those bounds for every word with matching blocks, so it cannot yield the empty word’s zero error and leakage as claimed.",
      "context_sha256": "c50dcbce8026f6b531b056e1e2c031945f1070c9054bbc0438786d0fae1fcb8a",
      "item_sha256": "e6ffc2f001606fd07240d44ba68c2496445e90a9bcbe3e2fbb7e645c0ae0d577",
      "at": "2026-10-18T04:30:10.575Z"
    },
    {
      "id": "thm-qa-37-su2-compiler-error-length",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the gate-set interface: it says the finite alphabet itself is dense in SU(2), while the interface gives density only for the subgroup it generates. A finite subset cannot be dense, so Step 1.1 cites an unsupported premise.",
      "context_sha256": "95c6bdce3a5785c9c93c6fe5de879ff21b3e7fbcb89c493a1b4bba4aa28384ce",
      "item_sha256": "4831749eaa2f27fd0db6de259acec449dcf72e1c487f1c3fa4942c1f9f5e1c0e",
      "at": "2026-10-18T04:29:52.767Z"
    },
    {
      "id": "ex-qa-37-fibonacci-budget",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 asserts every QSD factor is realized within δ, but F3 gives only an exact factorization and F1 compiles SU(2) targets; neither supplies δ-approximations for the arbitrary one-qubit and CNOT factors. Thus F4 cannot establish the claimed product-error bound.",
      "context_sha256": "02a1489122b77190a432325ad1c1055184b3ab88d7758fdd4e397550b2c98de4",
      "item_sha256": "792e4a4305e6dcb93746036d23ec4afe8e8552732ee33238f4d1a29f17b2b302",
      "at": "2026-10-18T04:30:10.381Z"
    }
  ]
