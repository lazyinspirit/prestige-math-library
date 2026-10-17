# Step 5 adjudicate: initial, round 1, unit 24

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-24-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u24.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"24",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-reference-finite-element-and-unisolvent-dofs, 2:lem-smooth-density-on-reference-simplex, 2:thm-reference-simplex-sobolev-extension, 3:thm-lagrange-point-evaluation-threshold-on-reference-simplex, 3:thm-reference-simplex-trace-and-gauss-green, 3:thm-zero-boundary-piecewise-polynomials-in-w10p.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-reference-finite-element-and-unisolvent-dofs",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The interpolation operator is not determined: bounded extensions need not be unique. For P=span{1}⊂X=span{1,x} on (0,1), each L_c(a+bx)=a+cb extends σ(a)=a, yielding different interpolants. Specify a chosen extension.",
      "context_sha256": "34c40e6ad80abd55371857e92f964d946d3586dc02797fc85c9408f9aa7721cc",
      "item_sha256": "91033cfd18396c2d9ce3bd0d01964134a2595951df598d4ed01b04372c2be638",
      "at": "2026-10-16T17:54:51.076Z"
    },
    {
      "id": "lem-smooth-density-on-reference-simplex",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates the affine pullback formula: for a general non-diagonal A, D^α(u∘F) mixes pulled-back derivatives of order |α|; it is not simply (DF)^α times D^αu. The cited interface gives the mixing rule. The homothety use is valid, but the restatement is inaccurate.",
      "context_sha256": "c478c823556e5fabe3ac2f92da38e4b95b5d8f36d872cd7f21b8e107ad7efe2f",
      "item_sha256": "685c9dad12ccd871dda49b5aa28c03fb13479c1905a62f13d0e71cb62135eff7",
      "at": "2026-10-16T17:54:51.146Z"
    },
    {
      "id": "thm-reference-simplex-sobolev-extension",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 5.1 attributes the extension-domain definition to [F3], which contains only cutoff, Leibniz and zero-extension lemmas. It does not cite the supplied extension-domain definition, so that conclusion is unsupported as cited.",
      "context_sha256": "98c2217fd6ba962bd04a056ce4f9e7ff3616204b18f9abe67b9dfcb0d1566033",
      "item_sha256": "b3de0bf3a038038f706173f525f18172b4c1061ff75bf31e730817bcaf6a5993",
      "at": "2026-10-16T17:55:28.571Z"
    },
    {
      "id": "thm-lagrange-point-evaluation-threshold-on-reference-simplex",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 is not licensed by the cited definition: it defines degrees of freedom on a finite-dimensional polynomial space and only conditionally grants bounded extensions to a function space. It does not identify arbitrary nodal evaluations as degrees of freedom; that consequence is uns",
      "context_sha256": "8c2ca32e3c41d3759de6d39a14c943d460bca30eeee0e58a28ae64e26727205f",
      "item_sha256": "e2a6986ed747b4049279b482ba9536d69aa2e89558a80dae72fe6632878dc826",
      "at": "2026-10-16T17:55:15.425Z"
    },
    {
      "id": "thm-reference-simplex-trace-and-gauss-green",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem does not restrict d, but [F1] claims density for every finite q while the cited lemma covers only d≥2. The approximations in steps 2.1 and 3.1 are unsupported when d=1.",
      "context_sha256": "60b6211db2c873f34165542897715e8b4539d0fea2d563667efd010625d7192f",
      "item_sha256": "cba589dc5b88dc5b5fbc6882f307e69605ef523481c67bef310bc65646c6894f",
      "at": "2026-10-16T17:55:04.655Z"
    },
    {
      "id": "thm-zero-boundary-piecewise-polynomials-in-w10p",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 and the diagonal choice use E_{1/n} and η_{1/n} as sequences over ℕ, but 0∈ℕ makes the n=0 term undefined. Reindex them as E_{1/(n+1)} and η_{1/(n+1)} before applying continuity from above.",
      "context_sha256": "92f5f53ec500dfcbb2bae6cb1cac3cd384931211d276a3c2ae17b151f4c0ab02",
      "item_sha256": "b22a0bd07add50aa8b8d3f36954397b000ac13f74385e69d4ad66b8a2fbf31bc",
      "at": "2026-10-16T17:55:49.658Z"
    }
  ]
