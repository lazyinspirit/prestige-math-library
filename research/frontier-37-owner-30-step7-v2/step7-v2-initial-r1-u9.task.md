# Step 7 adjudicate: initial, round 1, unit 9

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u9.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"9",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, 0:cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control, 3:lem-ball-poisson-kernel-is-positive-and-normalised, 5:thm-dirichlet-problem-on-a-ball-by-the-poisson-integral, 6:thm-interior-derivative-estimates-for-harmonic-functions, 6:ex-poisson-extension-of-a-coordinate-function-on-a-ball.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-local-holder-and-c-two-alpha-norms-on-euclidean-balls",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The hypothesis n≥1 is missing. For n=0, there are no multi-indices of order 1 or 2, so the displayed maxima are over empty sets and the claimed C^{2,α} norm is undefined.",
      "context_sha256": "eef9cedaeaba7a72d5faccf79f5b3e767cb97aee19a17dfc201b36dfdd469ee4",
      "item_sha256": "b72dac8b8963118ff14636bb6cbece1eb9d45769accbf0de097dc686a769ee70",
      "at": "2026-10-01T20:48:00.601Z"
    },
    {
      "id": "cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Both dependency interfaces assume Countable Choice, which the item never assumes. F1 and F2 omit that hypothesis, so step 2.2 invokes harmonicity without meeting the cited lemma's prerequisites.",
      "context_sha256": "97c71ef177cef575f51d9bfefba099c2ec96b7ba8225cf3d8c7c56d7d2a91910",
      "item_sha256": "9b2bf3b9a27ca8236c135bbd3d06e2d333e8b7fcf8aadd31c145227c54798cab",
      "at": "2026-10-01T20:47:42.418Z"
    },
    {
      "id": "lem-ball-poisson-kernel-is-positive-and-normalised",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] incorrectly identifies the outward boundary-slot normal derivative of G with P. The supplied interface states P=-∂νG; hence ∂νG=-P. Since P>0, this sign error is an inaccurate dependency restatement.",
      "context_sha256": "1c3247a9191aab264187d2abc00c9fe0675e99a62662fb031f00a3f2ccfee729",
      "item_sha256": "b439064eab81c0030b314ecce2561af1fd5040e0f35a0014e482f3013f124089",
      "at": "2026-10-01T20:47:12.521Z"
    },
    {
      "id": "thm-dirichlet-problem-on-a-ball-by-the-poisson-integral",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 omits the cited theorem's integrable-slice hypothesis. For f(s,t)=1/s on X=(0,1), the derivative in t is zero and dominated by G=0, yet the integral is infinite, so the asserted derivative is undefined.",
      "context_sha256": "e9e90b9e89f986ebf237e37386365af843d0531d01551036bae15c0de1b83bbd",
      "item_sha256": "9a1a55fcf61e7808f94f926a2232a1bc42024c0a188ee63363406e1dbfcdb313",
      "at": "2026-10-01T20:47:42.433Z"
    },
    {
      "id": "thm-interior-derivative-estimates-for-harmonic-functions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 omits n≥3 from its continuous-data Poisson existence/uniqueness claim. The cited interfaces establish that claim only for n≥3; F4 covers n=2 only for smooth real data.",
      "context_sha256": "becf7139d20471dd6064430d3817ee84a79f54394e7995c961f0a1210caca589",
      "item_sha256": "fc6f8feffdb3020b50d1201209f1afb9b5c533c710f6524cb9ef5ee416928485",
      "at": "2026-10-01T20:47:32.884Z"
    },
    {
      "id": "ex-poisson-extension-of-a-coordinate-function-on-a-ball",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 misstates the derivative identity under the supplied canonical indexing: x_1=x_0^{can}, so ∂_0 x_1=1, but δ_{01}=0. The item reindexes coordinate labels without reindexing partial derivatives; the correct identity is ∂_i x_j=δ_{i,j−1}.",
      "context_sha256": "84bdb7833bcd06f552d125ba332aa5d5628f2a828fd163c292a16ae1277563d6",
      "item_sha256": "db6121922f389d46d1a0c1f69ac39fedbfa24570f33a04029896a848761dea56",
      "at": "2026-10-01T20:47:49.494Z"
    }
  ]
