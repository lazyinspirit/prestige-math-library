# Step 7 adjudicate: initial, round 1, unit 17

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u17.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"17",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-good-and-geometric-quotients-for-group-actions, 1:lem-linearizations-powers-and-equivariant-section-ring, 2:def-invariant-section-ring-and-projective-git-quotient, 3:lem-ample-invariant-section-charts-are-affine, 3:lem-graded-invariants-of-localization-at-an-invariant-element, 4:cex-semistable-locus-depends-on-linearization, 12:ex-gm-on-projective-line-with-two-linearizations.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-good-and-geometric-quotients-for-group-actions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "π is required only to be a locally ringed-space morphism, without respecting C. For trivial G and X=Y=Spec C, complex conjugation satisfies (i)–(v), but id_X cannot factor through π by a C-morphism, contradicting the claimed categorical property.",
      "context_sha256": "3e7207afe0a66786678e1e7254475d2e26b63d015fdddf220df9f9ce1a90d4e2",
      "item_sha256": "2439a4d9fc6dafe3f6403ace72927ee765d22e19a4cf3ebbe3b97c24aa7ce27f",
      "at": "2026-10-05T19:57:15.953Z"
    },
    {
      "id": "lem-linearizations-powers-and-equivariant-section-ring",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates the scheme dependency: a nonzero line-bundle section need not have nonempty nonvanishing locus. On Spec(C[ε]/(ε²)), the nonzero section ε of O has empty nonvanishing locus; the cited interface makes no such claim.",
      "context_sha256": "4bcde304479c4f4e8e0ffe78c971a945002864d32326b1363b29a0dad4ad70cc",
      "item_sha256": "debab2578dad08a80a77fba492cb02d10b79d5189783364043cac69606bc50f4",
      "at": "2026-10-05T19:56:41.284Z"
    },
    {
      "id": "def-invariant-section-ring-and-projective-git-quotient",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The finite-generation remark promises results for the definition’s arbitrary affine G, but both cited quotient theorems require G reductive. Their interfaces do not license these promises without that additional hypothesis.",
      "context_sha256": "b4e7586210be7077a191dbebcde6355ab252038c2e2a261dc2d69f081181f0bb",
      "item_sha256": "b7cae3c8e1a8ac4b38de62242837abed2483537e5132201e789165aec6d8a17d",
      "at": "2026-10-05T19:56:57.857Z"
    },
    {
      "id": "lem-ample-invariant-section-charts-are-affine",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 invokes the definition of X^{ss}(L) for arbitrary complex affine G, but the supplied definition assumes G reductive. Add reductivity or explicitly extend the definition; the affineness argument itself is sound.",
      "context_sha256": "4dcf63ef1cd82a1483471492571cb6ddcef8d18f5019422d9c10aa7cd170825e",
      "item_sha256": "2240164098b0f2e3ff361d6672cc6e50295911ea069197604137c36bce79dedb",
      "at": "2026-10-05T19:56:56.616Z"
    },
    {
      "id": "lem-graded-invariants-of-localization-at-an-invariant-element",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 falsely asserts h/f^r∈A^G. Take trivial G, A=ℂ[t], f=t, h=1 and r=1: 1/t∉A^G=ℂ[t]. The fraction belongs to (A^G)_f, so the stated linearity justification contains a false typing claim.",
      "context_sha256": "61e1295a37146dd3351db3db4026f2e1f9c5d9baca5d452a595dd1f50a0224b3",
      "item_sha256": "ac212356e629184a542f9b8ca966f5dcc51b810ab6a19bf79044a91bbe4abf23",
      "at": "2026-10-05T19:57:06.722Z"
    },
    {
      "id": "cex-semistable-locus-depends-on-linearization",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The reductivity remark reverses the cited theorem, which assumes reductivity and proves linear reductivity. It does not license concluding that G_m is reductive from its weight decomposition; the required hypothesis needs a direct argument or a converse supplier.",
      "context_sha256": "d255d8ba40c006979aba8f02f2e87ad42a3aae1283d5677927cb1c6481e7890c",
      "item_sha256": "2e5b0cb2b6befbf81a98c75481ea7055de87fcf541482445669946449dcf1fe5",
      "at": "2026-10-05T19:56:57.242Z"
    },
    {
      "id": "ex-gm-on-projective-line-with-two-linearizations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 deduces reductivity from linear reductivity by the complete-reducibility theorem, but its supplied interface assumes reductivity and proves the opposite implication. This cited inference establishing the quotient hypotheses is not licensed.",
      "context_sha256": "9a61329f599c73dcb36cbc2670432f1187f9fef077211965b97f20f2a8455a8f",
      "item_sha256": "4b0318660a3cc71ec373aa96ccfa79d14d5ad6af9bbb90f408655b6000a8601c",
      "at": "2026-10-05T19:56:51.515Z"
    }
  ]
