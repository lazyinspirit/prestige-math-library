# Step 5 adjudicate: initial, round 1, unit 36

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-36-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u36.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"36",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-qsm-finite-gibbs-kms, 1:lem-qsm-matrix-exponential-response, 2:def-qsm-relative-entropy-domain, 2:post-qsm-normal-measurement-state, 3:thm-qsm-finite-gibbs-circuit-marginal-error, 3:thm-qsm-finite-gibbs-variational, 3:thm-qsm-trace-cross-log-inequality, 6:ex-qsm-oscillator-trace-gibbs.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qsm-finite-gibbs-kms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For an allowed singular density \u001b[rho\u001b[0m, step 2.1 writes Tr(ρ log ρ), but the supplied interface defines log ρ only on its positive support and assigns no value at zero. The entropy expression is therefore undefined without an explicit 0 log 0 convention or extension.",
      "context_sha256": "4e730b5225f4d2f4bde009ab65a12a2f1e29a20ba72f2cd114d9b7b622fcecf9",
      "item_sha256": "524f9881c00d4b0cc15ee533356ebc8c6cb3f41aa278adb28443b352e5d6f7d7",
      "at": "2026-10-17T08:04:09.661Z"
    },
    {
      "id": "lem-qsm-matrix-exponential-response",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 attributes cyclic trace to the supplied dependency, whose interface defines trace and states basis independence but provides no cyclic-trace result. Steps 2.1 and 3.1 rely on that unsupported restatement.",
      "context_sha256": "5a3e3f90efc2a6ddf80ad1ae61e478200f392a88ec2235d15a9ce008ba832552",
      "item_sha256": "b8bf98e7be60640e02c8907e2e76a61aa7b6f1193ca422e62a2cd5ef848453eb",
      "at": "2026-10-17T08:04:15.946Z"
    },
    {
      "id": "def-qsm-relative-entropy-domain",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The infinite-dimensional clause never assigns D=+∞ when supp ρ⊄supp σ, unlike the finite-dimensional clause, leaving D undefined for valid density pairs whose supports fail inclusion.",
      "context_sha256": "4505e16ce426057aa8df558216c963a9c25f0625420caa48f8cb4d6f1baedcbe",
      "item_sha256": "2d4dbf5abc8c8e13e0613d72d611b8b5ec4d35fdadc2b637d63e224137bf5e6b",
      "at": "2026-10-17T08:04:48.761Z"
    },
    {
      "id": "post-qsm-normal-measurement-state",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [Watrous §2.3](https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf) treats measurements on finite-dimensional spaces; this postulate extends the law to all separable Hilbert spaces and unbounded self-adjoint observables without source support.",
      "context_sha256": "bf5ca0723d8b77057f5c117253dbf5cd6ecf64e4c8a5013aa6d6803c7b4f5fac",
      "item_sha256": "f48f6bad5737249f1688da6738982a0524aee96cae0beeb8ca88e17abde21b25",
      "at": "2026-10-17T08:05:02.082Z"
    },
    {
      "id": "thm-qsm-finite-gibbs-circuit-marginal-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F8 says lem-qsm-matrix-state-calculus supplies trace cyclicity, but its supplied interface does not state this. Step 1.2 relies on that unsupported dependency restatement.",
      "context_sha256": "1630eaa5f84861d7ff523c0e8a8d170619e3ef157c8c5ae0a98cfb413ca027d0",
      "item_sha256": "ebaf02736e455caf6e7d14f21ddb2c3c25e3e011e493d917e561333f507a7ea8",
      "at": "2026-10-17T08:04:28.068Z"
    },
    {
      "id": "thm-qsm-finite-gibbs-variational",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 applies [L1] without its stated Countable Choice hypothesis, which is absent from Given. The supplied interface does not license that inference.",
      "context_sha256": "5b6a7b4b52ec297fdb6ff072de2af79416315b5f484a0a845f08ac5661e11b50",
      "item_sha256": "66b9897c04a9d45f423359eaf2cb37bdc12368832cdb2cdb204b83bfec4bc03a",
      "at": "2026-10-17T08:05:14.710Z"
    },
    {
      "id": "thm-qsm-trace-cross-log-inequality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 sums over 1≤i≤N, omitting index 0. Under the library’s zero-based sequence convention, a_N therefore tends to 1−p_0, not 1, so the claimed entropy bound and finite-entropy conclusion do not follow.",
      "context_sha256": "1bc04010d01eb8ccdf645e4f12fde5b2fd33612e30eefbe80075fd6db99fbd99",
      "item_sha256": "382001161f0b81a851b31b05f6af6ed16f25cc5bb340ee2847eee54bb0045f24",
      "at": "2026-10-17T08:04:15.137Z"
    },
    {
      "id": "ex-qsm-oscillator-trace-gibbs",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 uses (1+λ_n²)e^{-bλ_n}, adding dimensionless 1 to λ_n² in J². That makes the convergence comparison dimensionally ill-typed under the stated units.",
      "context_sha256": "81304cc992448787167bc9a782fd12963638c409776fc185c6576fa6f2dfdd4f",
      "item_sha256": "e5867b8740af08fe7a1084fe98190e3dc4fa7cef760aebc4d356cf7698d28fbe",
      "at": "2026-10-17T08:04:53.772Z"
    }
  ]
