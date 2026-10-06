# Step 7 adjudicate: initial, round 1, unit 7

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u7.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"7",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-lusin-area-function-for-a-fixed-admissible-kernel, 0:def-rademacher-functions-on-the-unit-interval, 0:lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, 1:def-inhomogeneous-dyadic-frequency-partition, 3:cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-lusin-area-function-for-a-fixed-admissible-kernel",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that different pairs (a,ψ) give different functionals is false: ψ and −ψ are distinct admissible kernels, but |f*(−ψ)_t|²=|f*ψ_t|², so A_{a,−ψ}=A_{a,ψ} for every f.",
      "context_sha256": "0e116a2ff36691790871cf363a306cce3a37e12464dcf7cca0a5b53bf9beddd5",
      "item_sha256": "375b378267f2d1d6dc6b87669914d9008e7714d02fffcb5753e0ab8497ff30bd",
      "at": "2026-10-06T01:36:20.125Z"
    },
    {
      "id": "def-rademacher-functions-on-the-unit-interval",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Claim 3 interprets ∫₀¹ ε_j via def-integral-over-a-measurable-set, whose interface only defines integrals for nonnegative functions. Each ε_j equals −1 on a set of measure 1/2, so that definition does not license the displayed signed integral.",
      "context_sha256": "f65e6e0e517d2e2764f43a834fca7bfab09469bfc1d1e6c010218a57a4472d34",
      "item_sha256": "e53bb2b0f1755bee8541bb610e9db50ea0aaf2ba653b42e055c66fc288770204",
      "at": "2026-10-06T01:35:00.921Z"
    },
    {
      "id": "lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 restates the cutoff lemma as a scaling identity for every smooth h, but the supplied interface guarantees it only for its constructed χ. Step 4.2 applies this unsupported generalization to arbitrary ψ.",
      "context_sha256": "64cd7bfeae477d4ee1d396ced2d69a633b864f595d826b8e46244561b557a924",
      "item_sha256": "808abc2d7e66f27c46da15ce16b8d92dcfb91892502fc676640af97956248338",
      "at": "2026-10-06T01:35:26.808Z"
    },
    {
      "id": "def-inhomogeneous-dyadic-frequency-partition",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1's rescaling law lacks the restriction j≥1: taking j=0, k=1 and ξ=0 gives φ0(0)=φ1(0), whereas these values are 1 and 0. Its unqualified inner-ball vanishing claim likewise fails for j=0.",
      "context_sha256": "462d18182b2e8012360fce4aa326182e969a4eda31f006675df8b27d95b2fbe7",
      "item_sha256": "f633d7b4a68010e381191aea325363f5a9826c1861e7715ee9fc571083b0eff1",
      "at": "2026-10-06T01:35:37.372Z"
    },
    {
      "id": "cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 lacks a bounded-overlap hypothesis: f(x)=x^{-2} and c_m=2m give ∫_m^{c_m}f=1/(2m)≥1/[2(m+1)], yet ∫_1^∞f=1. Thus its general divergence claim is false and is not licensed by the cited interfaces.",
      "context_sha256": "ab43a2690a998a213477f0b6487382d3161f01eab5cb4a0e98144e1042113618",
      "item_sha256": "1f8b80a1e012377a1f1e8b00ac8ef0d076fd1c14aea1b83cf2904c4171d6c5c7",
      "at": "2026-10-06T01:37:07.364Z"
    }
  ]
