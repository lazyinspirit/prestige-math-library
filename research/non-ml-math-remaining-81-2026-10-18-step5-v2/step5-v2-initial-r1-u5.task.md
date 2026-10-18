# Step 5 adjudicate: initial, round 1, unit 5

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-5-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"5",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-same-marginal-conditional-product-law-well-defined, 2:def-standard-borel-conditional-mutual-information, 2:ex-finite-deterministic-copy-has-mutual-information-equal-to-entropy, 3:thm-finite-alphabet-conditional-entropy-version-and-chain-rule, 3:thm-law-entropy-countable-support-characterization, 3:thm-mutual-information-and-conditional-mutual-information-equality-conditions, 4:ex-uniform-law-has-infinite-self-information-entropy.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-same-marginal-conditional-product-law-well-defined",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In 1.1, setting C equal to the whole Z space gives the (X,Y) marginal, not the Z marginal. To obtain P_Z, keep C arbitrary and set A and B to their whole spaces.",
      "context_sha256": "afa70161c9c5e51652300729784044a0ecb124fbbed68aae2bc6dcb64dd3fe03",
      "item_sha256": "9aca00e8e3dc11f18796dde5e483ea034af85efe8d5db6a489adebbe9b156d49",
      "at": "2026-10-18T04:18:13.344Z"
    },
    {
      "id": "def-standard-borel-conditional-mutual-information",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The rectangle formula places R on Z×X×Y (C×A×B), while P_XYZ is the law on X×Y×Z. Thus D(P_XYZ‖R) compares laws on different spaces; use A×B×C or permute P_XYZ.",
      "context_sha256": "e6988c09f06463b18cef2909405342714fea0400442d71e8c8e9ebac52e5cd42",
      "item_sha256": "cd232c606cb838faa77b18191c76b9cec1a83ebfb50aab5c20ec97602adbb907",
      "at": "2026-10-18T04:17:42.549Z"
    },
    {
      "id": "ex-finite-deterministic-copy-has-mutual-information-equal-to-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Statement omits AC, but the proof invokes it via the finite-KL lemma's interface, which explicitly assumes AC. The supplied AC interface says results invoking AC must state it. Add AC to the Statement or prove the identity using only the finite definitions.",
      "context_sha256": "62dad09384414a3c2fd5192b695c1b8bc3c18824035256475c869311a966695f",
      "item_sha256": "010ecf2eac5d23c45733ab5039b9a487306e6e9588921479c2315a95cf2af67c",
      "at": "2026-10-18T04:18:01.682Z"
    },
    {
      "id": "thm-finite-alphabet-conditional-entropy-version-and-chain-rule",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Statement omits AC, although A1 and the cited uniqueness and disintegration interfaces require it. The library’s choice convention requires results invoking AC to state it as a hypothesis.",
      "context_sha256": "13db64f34e706904dc29575034e7b4a52000754d9a39b8713faf05b68f1ee125",
      "item_sha256": "f1737d61d9457ed1b21540e18f9a22000df53fd569e49eec37557b16089c60e4",
      "at": "2026-10-18T04:17:41.711Z"
    },
    {
      "id": "thm-law-entropy-countable-support-characterization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Statement omits AC, but the proof uses the AC-dependent countable-algebra result and choice to enumerate atoms. [A1] cannot supply the missing hypothesis: the supplied entropy/MI interfaces do not say AC is inherited from an RN definition.",
      "context_sha256": "a3e3b1e81a349506d12ba06e29a840c30920f789071a608d890b9b6f1b2bd016",
      "item_sha256": "a116b24522827464431171b0628489bfe0b39f2153752f4ac18c42ac7ff3c995",
      "at": "2026-10-18T04:18:14.681Z"
    },
    {
      "id": "thm-mutual-information-and-conditional-mutual-information-equality-conditions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 has a coordinate-order mismatch: F3 defines R on rectangles C×A×B (Z,X,Y), while P_XYZ is the law on X×Y×Z. The proof treats these as the same rectangles and concludes equality without a coordinate permutation.",
      "context_sha256": "fbe136e39dabcd8a1d63f6a28033413c1c7f7364044466a0a738c7eb510f7732",
      "item_sha256": "5469566add3d97d01462ef69f0f16f481f8936ac13587da9b5e563002fc25383",
      "at": "2026-10-18T04:17:41.712Z"
    },
    {
      "id": "ex-uniform-law-has-infinite-self-information-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 claims the restricted Lebesgue set function is countably additive, but its cited interfaces do not establish that; the definition explicitly says this requires the omitted complete-measure theorem. Without countable additivity, P is not shown to be a probability.",
      "context_sha256": "1312fe5af95077dd48f7535b1ebc9de9622cb4a73898cf074130534b0ab11416",
      "item_sha256": "813487b98f9a8e621c83361d59b3386599c84b3f0fa4a5e45d158739334304c0",
      "at": "2026-10-18T04:17:46.884Z"
    }
  ]
