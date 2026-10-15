# Step 5 adjudicate: initial, round 1, unit 20

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-20-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u20.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"20",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-sobolev-linear-functional-for-white-noise, 1:def-type-s-and-h-multiscale-density-priors, 2:lem-m0w-separable-and-projection-tails, 3:lem-finite-dirichlet-gamma-representation-and-bernstein-bound, 5:ex-nonlinear-functional-remainder-at-parametric-scale, 6:thm-multiscale-credible-band-holder-diameter, 7:cor-type-s-h-density-credible-band-calibration.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-sobolev-linear-functional-for-white-noise",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The white-noise clause leaves δ unrestricted, but W is H(δ)-valued only for δ>1/2: the dependency’s weight trace diverges for 0<δ≤1/2, so the claimed H(δ)-valued observation is invalid there. Restrict this clause to δ>1/2.",
      "context_sha256": "85400e83db9d149a2195e10280fc2f6ba423c0661dbaeb79d73e1bb58e73b4dc",
      "item_sha256": "f87c6e2f652631193036d9425b742cb2bbb360492fa469291da8c217ace4e587",
      "at": "2026-10-15T16:12:06.653Z"
    },
    {
      "id": "def-type-s-and-h-multiscale-density-priors",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Castillo–Nickl Theorem 3 (§3.2) requires log f₀∈C^α with α>1 for every type-S prior, including Gaussian S2. The α>1/2 condition in (24) is only a hyperparameter range, so S2’s stated source-theorem assumption is false.",
      "context_sha256": "4a75b6f98e9f44d4487e05253302af89fd93dd3f9b0d131dc8a29e491c7093fe",
      "item_sha256": "0e9a4734c7eac7600972b76666486efd48075367309e29cd37aab1b86b5065ea",
      "at": "2026-10-15T16:11:58.346Z"
    },
    {
      "id": "lem-m0w-separable-and-projection-tails",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 omits the Haar scaling coordinate, which the dependency includes in the norm with weight 1. Its stated norm formula is therefore false for that coefficient space, so the coordinate Cauchy bound does not establish completeness there.",
      "context_sha256": "3221445561f1ef3bf19907806b267a113c155ad8ed6b5a7010885e245ce8de10",
      "item_sha256": "4df747c55bd9f6c72fbc6790ec3a8c6b7b7f9d6cd0d65ee3b603c71548e51886",
      "at": "2026-10-15T16:11:38.661Z"
    },
    {
      "id": "lem-finite-dirichlet-gamma-representation-and-bernstein-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 misstates its interface: Markov’s corollary supplies only P(X≥a)≤E[X]/a, not “the exponential tail bound.” Step 3 derives that bound by applying Markov to an exponential, but the dependency restatement is inaccurate.",
      "context_sha256": "d3019415280951e205f8bcab8af96093916f8532184558b7a145cd654c146a67",
      "item_sha256": "742981e4247294d91472ace6e666daf10c5fcd84ec421bd4cc21ba8337fde7b4",
      "at": "2026-10-15T16:12:13.697Z"
    },
    {
      "id": "ex-nonlinear-functional-remainder-at-parametric-scale",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Sequences are indexed by N including 0, but h_n=n^{-1/4}v is undefined at n=0. Define h_0 separately or state the sequence is indexed by n≥1.",
      "context_sha256": "2fc412d3aed8ce5815b8bcd80cd8ba09709b9750f0c2bc77e906bed85708db35",
      "item_sha256": "417b05bb8a21c4ea61bdb26fedd7ed0fdc0df7c1820067dae5052d6cdcfc2707",
      "at": "2026-10-15T16:11:59.797Z"
    },
    {
      "id": "thm-multiscale-credible-band-holder-diameter",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The calibration theorem grants F2 only under its setup, including a bounded positive density, wavelet summability, both BvM limits, and quantile conditions. This item states none of those assumptions; citing its ball and radius does not make its coverage and O_P conclusions uncon",
      "context_sha256": "9f8aa9529f24799b45ecfde0c60effa3108ff77366ac06cc12cf6809dd991fba",
      "item_sha256": "b2147017104d7763d55c9520cf76098a1dab909b89eab5aabc70c0280bdfe87a",
      "at": "2026-10-15T16:12:31.561Z"
    },
    {
      "id": "cor-type-s-h-density-credible-band-calibration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final sentence overclaims an unscaled CDF posterior limit. [F4] proves convergence only for the posterior law of √n(F_f−F_{T_n}); the posterior law of F_f itself concentrates at F_0. State the centered, scaled law.",
      "context_sha256": "237205d6f6bb8d58e2b0a423b46273e6991c137d0149d8fe49107ba82a996580",
      "item_sha256": "dd5d8d14173794b43277d12c0681dd148d7f7bb80b362e5c5b869d1ff1d9d44d",
      "at": "2026-10-15T16:12:20.572Z"
    }
  ]
