# Step 5 adjudicate: initial, round 1, unit 29

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-29-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u29.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"29",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-antithetic-randomized-sampling, 0:def-stratified-monte-carlo-estimator, 1:thm-same-sample-control-coefficient-remainder-is-op-one-over-n, 2:ex-independent-pilot-control-variate.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-antithetic-randomized-sampling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "P is introduced as a probability law on X, then applied to input events {U_ij≤t}. That is ill-typed unless the input probability space is X, which is not assumed; use a separate underlying probability measure.",
      "context_sha256": "9c8f4ee68c2f8f9df8fa0b05b5890e2c6c73b2e371ad6a14488154d0acf75e6f",
      "item_sha256": "49525b51b12c0ec56d0b728501f91f3a8ef8cc2d0517979a06c9ae42b190e2a8",
      "at": "2026-10-15T16:13:50.360Z"
    },
    {
      "id": "def-stratified-monte-carlo-estimator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Measurability alone does not ensure Pf exists. For uniform P on [0,1], f(x)=1/(x−1/2), defined arbitrarily at 1/2, has both positive and negative parts with infinite integrals, so Pf is undefined although the item calls the sample average an estimator of Pf. Require f∈L¹(P).",
      "context_sha256": "aab412421ea59e40151d98b2f40ab2165b2baa213adcac3c56e0c8c4ddf02941",
      "item_sha256": "e88e5a51d6b0435a1d73f9170834cfc305c40ebe2389f145d972adf775d43bb3",
      "at": "2026-10-15T16:13:46.630Z"
    },
    {
      "id": "thm-same-sample-control-coefficient-remainder-is-op-one-over-n",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 defines the estimator only for a fixed coefficient, but the statement and step 3.1 use it with the same-sample random coefficient β̂ₙ. That notation is not defined or licensed by the supplied interface; define the plug-in estimator explicitly.",
      "context_sha256": "d42d3a8a57a454a20031d768d73c78bef1945d285980b4beca169da227d82215",
      "item_sha256": "e170c0ff90f47e952868b7e2d4832e5c1375f0e6561642bab625ce2b76b2fdeb",
      "at": "2026-10-15T16:14:01.999Z"
    },
    {
      "id": "ex-independent-pilot-control-variate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 misstates def-control-variate-estimator: its interface defines the estimator only for a fixed coefficient, while this example’s β̂ is random. The theorem licenses the random-coefficient estimator, but that does not make F2 an accurate restatement.",
      "context_sha256": "a222387cec76aa1106eda1a030378b3d66b1bc6ad7a9cab6dcb535c284d2e958",
      "item_sha256": "37ef0fffd05594f60c69adb0c51a79cbf03da4130037024ba03d852074eb1349",
      "at": "2026-10-15T16:13:59.901Z"
    }
  ]
