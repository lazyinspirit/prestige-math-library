# Step 5 adjudicate: initial, round 1, unit 42

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-42-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u42.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"42",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-borel-moore-homology, 0:def-split-augmented-simplicial-objects-and-matching-objects, 1:thm-proper-varieties-admit-smooth-projective-hyperresolutions, 21:thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree, 22:thm-mixed-hodge-weights-control-proper-cohomological-restriction-images, 22:ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-borel-moore-homology",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The pushforward argument uses compactness of f^{-1}(K) to extract a finite ambient open subcover without citing lem-compactness-of-a-subspace-is-ambient, which def-compact-space expressly requires.",
      "context_sha256": "1961474ac70f4fb9d0651cdd7bc0c02f1d8d1320c9f840e8ce58c69601212e60",
      "item_sha256": "20ba2e35df9ad48d82f707b1ddc3023a38699e4d2c525817355ec321dd43651c",
      "at": "2026-10-11T15:28:27.877Z"
    },
    {
      "id": "def-split-augmented-simplicial-objects-and-matching-objects",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The extension remark omits that the lower truncation must be split. For p=2, take X_0=Spec k, X_1=A^1_k, both faces structural, s_0 the zero section, and N=empty. This valid 1-truncation is not split, so no split extension exists.",
      "context_sha256": "f7325dbf73cb1029dbab6e91eeb464b7d730ca6b68a6b190edf1a118837869bc",
      "item_sha256": "5ba400c0a6ccb5f100f60f6446449d64e5450fc96ca6a6fc3c149dfbe649ccbb",
      "at": "2026-10-11T15:28:59.217Z"
    },
    {
      "id": "thm-proper-varieties-admit-smooth-projective-hyperresolutions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately asserts that every stage for arbitrary smooth finite-type X blows up an integral projective scheme. Take X=A² and Z a cuspidal curve: the first blowup has nonprojective source A². The cited blowup lemma requires integral projective X.",
      "context_sha256": "9373a0d5c9259c11a92032fc04d17f03b8d5b09589b28a19a87cacabb865a065",
      "item_sha256": "f685eac3bd770f262b6368d37fcdc3482ca15e937977ec859fd15da7c37faed1",
      "at": "2026-10-11T15:29:02.695Z"
    },
    {
      "id": "thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] restates descent for every bounded-below constructible complex, but the supplied dependency only asserts it for F∈D^b_c(X;k), i.e. bounded constructible complexes. This stronger restatement is not licensed.",
      "context_sha256": "81bc9e1e3c1d2ac9da973fd2baa5fd88f2c355fda79ab06194f142b67b746599",
      "item_sha256": "62f196dea50c7fb5c0c3a5230ef7287191eba1f95b9dfdca5fee7e14a9f486a8",
      "at": "2026-10-11T15:28:49.982Z"
    },
    {
      "id": "thm-mixed-hodge-weights-control-proper-cohomological-restriction-images",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] restates the compactification-image formula for every smooth projective compactification, but its supplied dependency interface establishes it only for SNC boundaries. No cited modification-image result or argument supplies the non-SNC extension.",
      "context_sha256": "f3935abc637c09394a1a8fe86510de6b415a52e64ad7788675e2f0b36cf512d7",
      "item_sha256": "be6e44a8fa8c320bf3dc49d503139b1bdbb8f58b50439b87e5ed1d34255ba5b7",
      "at": "2026-10-11T15:28:32.817Z"
    },
    {
      "id": "ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately restates its dependencies: neither supplied interface gives E2 degeneration or Gr^W_q H^n ≅ E2^{n−q,q}. Step 3.1 relies on this unsupported weight identification to conclude weight zero.",
      "context_sha256": "6d28e6da4354ddda868bc8b718ba243c4a633ba52a69f2f7d7eb71850d423593",
      "item_sha256": "9f5eb8dac107feec3fe9f2488c9fe29b3d58bf59bdbc4dd95adb3c43dbd0b73d",
      "at": "2026-10-11T15:28:54.161Z"
    }
  ]
