# Step 7 adjudicate: initial, round 1, unit 25

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u25.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"25",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-poisson-integral-of-finite-boundary-measure, 1:lem-circle-maximal-weak-one-one, 1:thm-poisson-nontangential-maximal-bound, 2:thm-harnack-convergence-positive-harmonic-functions, 2:ex-poisson-extension-of-an-indicator-arc, 3:cex-radial-boundary-limit-does-not-force-tangential-limit.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-poisson-integral-of-finite-boundary-measure",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited RN integration theorem covers only simple g. The item invokes it for every bounded measurable g, including P(z,·), without proving the required extension by simple-function approximation.",
      "context_sha256": "f30f095db5f18db65493590175318084fc25e1fcd5ebfa319d7d45d844ca3e35",
      "item_sha256": "c20ab678418db4ee0c2334edfe5a20e7aad729cc6948363593807591274d3720",
      "at": "2026-10-01T20:56:24.965Z"
    },
    {
      "id": "lem-circle-maximal-weak-one-one",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 asserts a false inequality at h=1/2. Take ζ_n=ζ and η its antipode: η belongs to I_{1/2}(ζ)=T, but d(ζ_n,η)=1/2 never becomes <h. The whole-circle endpoint requires a separate argument.",
      "context_sha256": "44fac681ecf69ca09754e41b9d417630752d920f1f8ec4eb5a2a06539b36264d",
      "item_sha256": "6d25b2e72b46119ff62647971f1bea96780509b15a9d2503ce9002f686732098",
      "at": "2026-10-01T20:56:23.155Z"
    },
    {
      "id": "thm-poisson-nontangential-maximal-bound",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 falsely asserts |P[μ](0)|=|μ|(𝕋). For μ=δ₁−δ₋₁, P[μ](0)=μ(𝕋)=0 but |μ|(𝕋)=2. The cited total-variation bound licenses only an inequality.",
      "context_sha256": "883e455923984af903111eb67a9ab1005bcf4c72b7541d2d992c2eea04b2b1c2",
      "item_sha256": "7cc79d3258c399af93e4ea34037443b70306852bd713db8d86132058e0955b7f",
      "at": "2026-10-01T20:56:07.546Z"
    },
    {
      "id": "thm-harnack-convergence-positive-harmonic-functions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 1.3 and 11.1 use compactness for ambient open covers without citing lem-compactness-is-intrinsic. The supplied def-metric-compactness interface expressly forbids that inference without this citation.",
      "context_sha256": "d0749ec2ef3dde932f097d146b4611cc54c642fa2c3e3367513076ac9ea35edc",
      "item_sha256": "24c1169a2dcd1d4045cdd013fa5faa3122be8c2b1d8d8dd14e2bd912d4adf8f3",
      "at": "2026-10-01T20:56:43.178Z"
    },
    {
      "id": "ex-poisson-extension-of-an-indicator-arc",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.3 asserts the false equality {s∈[0,1):d([s],[0])<h}=(-h,h). The supplied arc interface gives [0,h)∪(1-h,1). The change of integration interval requires periodic unfolding, which the stated equality does not justify.",
      "context_sha256": "961cd8e61c48e521c24ed83e3a3fe18823b2e355c42df6cb5b55ad955b87782c",
      "item_sha256": "b556c4f8a1777c43589606d457c25ae3b177550b585b082240f07eb62f4c5cde",
      "at": "2026-10-01T20:56:24.019Z"
    },
    {
      "id": "cex-radial-boundary-limit-does-not-force-tangential-limit",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L1] inaccurately restates the arc definition at h=1/2: {η:d(ζ,η)<1/2} excludes the antipode, while the supplied dependency explicitly defines I_{1/2}(ζ)=𝕋.",
      "context_sha256": "d55c0ecbbff1e302dd095f0948423e701aad44ed8e1980817694b16553e8cce0",
      "item_sha256": "231f7487b34036e70c0892ffc869316ef3ddc0e3b4465966e54040e76d744e97",
      "at": "2026-10-01T20:56:14.837Z"
    }
  ]
