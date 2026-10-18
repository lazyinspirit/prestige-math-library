# Step 5 adjudicate: initial, round 1, unit 37

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-37-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u37.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"37",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-ahat-and-relative-chern-character-forms, 1:def-graded-hermitian-clifford-module-and-geometric-dirac, 2:lem-geometric-dirac-operator-is-well-defined, 2:cex-dirac-on-euclidean-space-is-not-fredholm, 3:lem-lichnerowicz-formula-for-geometric-dirac-operators, 4:lem-dirac-maximal-domain-is-h1, 8:def-spin-lift-of-oriented-orthonormal-frame-bundle, 10:lem-spinor-and-clifford-associated-bundles-are-well-defined.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-ahat-and-relative-chern-character-forms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition invokes the cited lemma’s patching result for arbitrary graded Clifford modules, but that lemma assumes a supplied Spin lift. The definition requires no lift, so the citation does not establish that its local expression patches in the stated generality.",
      "context_sha256": "7e3570279417f959a147b4e9c8810eb7762a77c5888bc358df781e79e8c3a19b",
      "item_sha256": "e872c3509622e8b9afc5e95080aef48ac718e733aaa02b7d779e1ac7b6dc059d",
      "at": "2026-10-18T04:31:29.280Z"
    },
    {
      "id": "def-graded-hermitian-clifford-module-and-geometric-dirac",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited well-definedness lemma requires Countable Choice, but the definition invokes it to justify frame independence, global well-definedness, and formal symmetry without carrying that hypothesis; the cited interface does not license those claims as stated.",
      "context_sha256": "e0233979a52def836de0159c129766980feae4f93c982b8eaebcc88ee67a7df5",
      "item_sha256": "10428fd5238a5472d5c4ddda35b9274b687cb73837b8dc409ffadaa1b3b27c8d",
      "at": "2026-10-18T04:31:46.344Z"
    },
    {
      "id": "lem-geometric-dirac-operator-is-well-defined",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 invokes [F3], whose supplied interface requires dimension n≥1, but the statement permits dimension 0. There D=0 and symmetry is trivial, yet the proof does not handle that case before applying [F3].",
      "context_sha256": "8a4354b8481662904bfd462fff2b3037e432c6a07b4f1a9454680a7293925be9",
      "item_sha256": "f2eda66d993fb03d3c61c5db507d6ea52963a4da1b8f1ead0a08f61357c6f907",
      "at": "2026-10-18T04:31:23.453Z"
    },
    {
      "id": "cex-dirac-on-euclidean-space-is-not-fredholm",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 says Countable Choice is used only through [A1] and [F2], but [F3] also requires Countable Choice in its supplied Sobolev-space interface. This is an inaccurate dependency restatement.",
      "context_sha256": "8c5797113fce5b7aacc0b077d36a6c1848cb4f1b57469eab92afd722fca4bb29",
      "item_sha256": "64d6f1d15db00bd51f452e60c766fcdeb70a4742b9a6df215adf4305c77dc752",
      "at": "2026-10-18T04:31:58.484Z"
    },
    {
      "id": "lem-lichnerowicz-formula-for-geometric-dirac-operators",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 cites def-clifford-algebra-of-a-quadratic-space for c_i c_j+c_j c_i=-2δ_ij, but its supplied interface uses the opposite, plus-Q convention. That dependency does not support the stated relation.",
      "context_sha256": "71055338f9f4f915ddd6b43bbd33e1754d50936fcf5d22bf649fc97e089dff4a",
      "item_sha256": "154227858fcdc9ee6497ba4d5ef14242d9a2a2015f04e95b8e58d113558819d3",
      "at": "2026-10-18T04:32:06.846Z"
    },
    {
      "id": "lem-dirac-maximal-domain-is-h1",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited definition interface says global well-definedness and formal symmetry are proved by lem-geometric-dirac-operator-is-well-defined, which is missing from deps. Steps 1.1–1.2 and 3.1 rely on formal symmetry; citing the definition does not supply it.",
      "context_sha256": "bab0c0c4147ecb247619fddfdc2e5f55f8328e8a29adc15c113aad47a8ed4bdd",
      "item_sha256": "9312a054db6e1189e01033b301d1ef896a8772d7c724ef7914a93d87c58a0bd3",
      "at": "2026-10-18T04:31:31.263Z"
    },
    {
      "id": "def-spin-lift-of-oriented-orthonormal-frame-bundle",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The hypotheses allow a topological bundle with a continuous metric, so Gram–Schmidt need not be smooth. For the trivial line over ℝ with metric e^{2|x|}dx², its unit frame e^{-|x|}∂x is not smooth. Drop “smooth” or assume smooth data.",
      "context_sha256": "b2ad8d515479d32ecf55cc3274b5e52485751cfb1aae895034d93b559477e4e0",
      "item_sha256": "a60ec0fe3bcd68ba235973af9c5f1e7539ba8b3aac65a71cb49729a9346cde36",
      "at": "2026-10-18T04:31:29.660Z"
    },
    {
      "id": "lem-spinor-and-clifford-associated-bundles-are-well-defined",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 supplies only a continuous section near the identity; it does not establish a two-sheeted covering or smooth inverse branches. Step 1.1 needs these to lift frame sections and prove the Spin lift’s transitions smooth, so its central smoothing step is unsupported.",
      "context_sha256": "2901fa448bfc14aabb2306e6664b8ab6e15d95d8839838f70d61e90e9245857e",
      "item_sha256": "dbad7cd8c7c13f061b8458c366b78f12cfb9c0b76634115deb61b35746539f97",
      "at": "2026-10-18T04:32:24.490Z"
    }
  ]
