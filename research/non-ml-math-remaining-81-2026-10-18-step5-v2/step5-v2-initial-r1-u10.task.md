# Step 5 adjudicate: initial, round 1, unit 10

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-10-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"10",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-finite-block-information-and-entropy, 0:lem-triangular-information-averages, 1:def-ams-source-and-stationary-mean, 2:def-general-process-information-rate, 4:thm-stationary-expected-prefix-code-rate, 5:lem-infinite-past-conditional-block-information-rate, 6:cor-smb-limit-is-conditional-entropy-under-ac, 7:cor-fixed-rate-lossless-coding-stationary-ergodic, 8:cor-fixed-rate-lossless-coding-ams-ergodic.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-finite-block-information-and-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The conditional-entropy clause uses H₂(P_{U|V=v}) without defining H₂ on probability laws; only Hₙ⁽²⁾ for the given block law was defined, so this clause is not well-typed.",
      "context_sha256": "bf579e2f677403287230a8a4dd91efbb6d1a2494ad99700723ec52460dfde5c9",
      "item_sha256": "a774b537a0b44186d0e23069d01c40e00bbb5154a13ea40b246a5850814f7cf4",
      "at": "2026-10-18T04:19:03.885Z"
    },
    {
      "id": "lem-triangular-information-averages",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims a result about finite-past information, but the hypotheses cover only arbitrary nonnegative functions with an integrable envelope; no information-theoretic structure or relation to pasts is stated or proved.",
      "context_sha256": "c4b8e602e1b9ba569fc9b72255a3a02e07bb9d9d631da153df5f3c291f8ae144",
      "item_sha256": "2324d5bac011825ce6c63875ec310abd62273563238bdc6496c106f6ba47ea6d",
      "at": "2026-10-18T04:19:11.501Z"
    },
    {
      "id": "def-ams-source-and-stationary-mean",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item leaves the alphabet unrestricted, but its only cited stationarity interface applies to a finite nonempty alphabet. Thus the claim that the mean is stationary “in the sense of” that interface is unsupported for the stated scope.",
      "context_sha256": "a37aeefe9e660d04b0a29414c5cb3f44efb191b3662d1b50e1d9068e667b3ff5",
      "item_sha256": "7b3700f9fd1fd2ece5ed441ecd4e12d77816a130c73eaa0d4ebf727f17ca4c03",
      "at": "2026-10-18T04:19:01.457Z"
    },
    {
      "id": "def-general-process-information-rate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item identifies H_n with the dependency but drops its bit-unit notation H_n^(2), while the interface distinguishes the library’s nat-valued entropy. If H_n is nat-valued, the displayed KL identity −H_n+log₂N is false. Specify H_n=H_n^(2) or convert units.",
      "context_sha256": "bb01888da70f6c7191c8d682f67a829a95840ab64d07a333399d85f7bb5d11d9",
      "item_sha256": "f9865d31b6bca8b1b620527d7228afb7bb5c7b34f3114abf77764d7dde68706b",
      "at": "2026-10-18T04:19:09.438Z"
    },
    {
      "id": "thm-stationary-expected-prefix-code-rate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof mixes units: [F2] bounds bit lengths using entropy in bits, while [F3] gives the library entropy rate in nats. The squeeze yields a limit of h/ln 2 bits per symbol, not h; the statement or proof must convert units.",
      "context_sha256": "d03a22c255e9d73ec5b46aa44289c9f72fbb326d69cf4bd30bd834e0309c0105",
      "item_sha256": "0227cd000053e75d850b64def777ea753d0cc905d9519756808408e62c7f3d79",
      "at": "2026-10-18T04:19:20.149Z"
    },
    {
      "id": "lem-infinite-past-conditional-block-information-rate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1's supplied interface proves convergence and an integrable envelope, but does not identify the limit's mean with the entropy rate h. Step 3.1 therefore gets Birkhoff's limit ∫g∞, not h; the claimed rate is unsupported.",
      "context_sha256": "e04a08b7fb06a7ed0601ea1d78c7284d293eefaba59044477ab9e574c50e5297",
      "item_sha256": "b934a018dd5859b61c9c746921ff36200eee245068237a3613601e4e6bc1be50",
      "at": "2026-10-18T04:19:38.133Z"
    },
    {
      "id": "cor-smb-limit-is-conditional-entropy-under-ac",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 says F1 gives g∞∈L¹, but the supplied interface only gives L¹ convergence of block information to its Birkhoff limit; it does not state g∞ is integrable. F2 requires an L¹ input, so its application lacks a stated hypothesis.",
      "context_sha256": "1834d321c571e898f5ea4454a5db05810ee7c864b67c73b1a554c8b0bb3ff6f8",
      "item_sha256": "40cb219509f04c490fe0284bf720fd624dc2eabf6ee0c69f98c7a3f557ae850b",
      "at": "2026-10-18T04:19:38.797Z"
    },
    {
      "id": "cor-fixed-rate-lossless-coding-stationary-ergodic",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 only says vanishing error is impossible below h; it does not imply success tends to zero. Step 2.1 claims that stronger conclusion without proof. Add an AEP and code-size bound or weaken the claim.",
      "context_sha256": "5499175d5d617972f4598b100ea21e216d09df874532dff92f10c097912ae28c",
      "item_sha256": "179d6ab55809059b04976a316e7ec0bd1d4c31d0b20328b5bc427853f420f63b",
      "at": "2026-10-18T04:19:27.289Z"
    },
    {
      "id": "cor-fixed-rate-lossless-coding-ams-ergodic",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] only says vanishing block error is impossible for R<h; it does not establish success probability tends to zero. Step 2 claims this stronger converse without proving it.",
      "context_sha256": "7edabf83d692de8c2703ca8f8043f6140a04b8ec8d20f20bd42342dd5c57eaf4",
      "item_sha256": "44a35eea322f283fc9b3041b5789f409dfd3b52bccfd22aa824025e879b93690",
      "at": "2026-10-18T04:19:44.460Z"
    }
  ]
