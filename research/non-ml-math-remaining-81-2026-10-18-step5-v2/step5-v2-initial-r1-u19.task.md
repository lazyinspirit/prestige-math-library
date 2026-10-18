# Step 5 adjudicate: initial, round 1, unit 19

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-19-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u19.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"19",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-finite-discrete-memoryless-network-and-code, 0:def-real-gaussian-multicast-relay-network, 0:def-real-two-user-gaussian-interference-channel, 2:lem-scalar-gaussian-channel-mutual-information-power-bound, 3:lem-real-gaussian-multiple-access-random-coding-region, 7:lem-complex-gaussian-interference-entropy-estimates, 7:thm-finite-relay-cut-set-outer-bound, 7:thm-real-gaussian-strong-interference-capacity-region, 8:thm-finite-full-feedback-relay-capacity, 8:thm-finite-strong-interference-channel-capacity, 8:ex-real-gaussian-strong-interference-region, 9:thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap, 9:ex-real-gaussian-relay-fixed-quantizer-gap.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-finite-discrete-memoryless-network-and-code",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the library convention indexes sequences from 0, but this code indexes channel uses from 1 to n and defines the first history using Y_{k,1}; its time indices conflict with the stated sequence convention.",
      "context_sha256": "61fcae0d005b536c8c33f2a99a16e5e1bb9ddf73c0e3e72b99507928b60c08bd",
      "item_sha256": "c0ecef409432aedc4b250701ac1ba16114a374ed6f4edfd19083b9a13cacd9a8",
      "at": "2026-10-18T04:23:19.504Z"
    },
    {
      "id": "def-real-gaussian-multicast-relay-network",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For every node i, the encoder is defined using M_i, but messages are assigned only to sources. Thus relay encoders are ill-typed; define M_i as a singleton for non-sources too.",
      "context_sha256": "9fc2a294e719434b3507f35aaed9241bce0dc7762be142eef9c1f0aa4dcede7e",
      "item_sha256": "48688f716f2bc4722f5921658f30466f864a47072933c12eefc7dfc33fa451ea",
      "at": "2026-10-18T04:22:51.352Z"
    },
    {
      "id": "def-real-two-user-gaussian-interference-channel",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The power constraint indexes a length-n codeword by t=1,…,n, but library convention makes sequences zero-based. This leaves coordinate n undefined and omits coordinate 0.",
      "context_sha256": "885daca9a422e429b5d3c913245fcc122033b1f6c641092f6b312a31cfade912",
      "item_sha256": "99a60642b2a53c6d5522fa3e8cb542d03734cc7e25b067a32bfdb516b3678700",
      "at": "2026-10-18T04:23:02.139Z"
    },
    {
      "id": "lem-scalar-gaussian-channel-mutual-information-power-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 inaccurately says AC is inherited from the mutual-information definition; its supplied interface defines mutual information without assuming AC. AC enters here through the Gaussian entropy bounds.",
      "context_sha256": "c662bdac1971c844b15dfcb2c67f1986d261b57e0fc05515ca455e510428ce9e",
      "item_sha256": "08998bb554dfc897c45dd2b0d00b48872e816d1ca4709d140b533f4b96a267d4",
      "at": "2026-10-18T04:23:27.808Z"
    },
    {
      "id": "lem-real-gaussian-multiple-access-random-coding-region",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement specifies codebook symbols with variance P_i, but the proof generates them with variance (1−η)P_i. Taking η→0 approaches the rate region; it does not establish the claimed codebook law.",
      "context_sha256": "6df205d070cccc500ac10ce88d33eb8f1eee4f4f01fcda4d35b4215c2ac0c789",
      "item_sha256": "db181cc980e65068efc0efc8ccc269ebc2b4b37f6eeaaec433e1927f4f6317da",
      "at": "2026-10-18T04:23:54.283Z"
    },
    {
      "id": "lem-complex-gaussian-interference-entropy-estimates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5's supplied interface states the scalar AWGN mutual-information power bound; it does not supply the Gaussian-noise density identity claimed in Facts [F5] and invoked in step 1.1. This overstates the cited dependency.",
      "context_sha256": "50e2b2878b61220b84e0a57bad38946ab0de78c96199a851c02b213226bfffc4",
      "item_sha256": "0f2a89e528b190c768384760ad3fbe484576ae7e84308ab16b6927468d361325",
      "at": "2026-10-18T04:23:14.624Z"
    },
    {
      "id": "thm-finite-relay-cut-set-outer-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] restates Fano's first bound without the required |M|≥2 hypothesis: at |M|=1, ln(|M|-1) is undefined. The dependency handles this case separately, but the supplied code assumptions do not exclude it.",
      "context_sha256": "9da1e419b7e2354ba3060711b7de18387d383515842a400e332d741285401872",
      "item_sha256": "cc9600454da86f69abd8d5b98e9836a4ac223f292b88a4220a86b0c1e42cb1c7",
      "at": "2026-10-18T04:24:05.758Z"
    },
    {
      "id": "thm-real-gaussian-strong-interference-capacity-region",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 supplies achievability at either single receiver, but the local restatement upgrades this to both simultaneously. Step 4.1 relies on an unstated joint codebook selection result, so achievability of the intersection is not licensed by the supplied interface.",
      "context_sha256": "104e6d0814b5d3b100031c131d6daa32dbd193a3f3e9c4a4e78cca6073584e3f",
      "item_sha256": "69a2534603b74a8f7ee322a2d38fa3004741ca84d12e839a57f24a930f7892d8",
      "at": "2026-10-18T04:24:09.584Z"
    },
    {
      "id": "thm-finite-full-feedback-relay-capacity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the dependency: the relay input is g_i(Y^{i-1},Y_r^{i-1}) and does not depend on the message; only the source input may use M. The supplied interface does not license the broader restatement.",
      "context_sha256": "795722c7b554b668b7ac30b2cfa23709f7189a9b1e42fe7d996e6d1de1c27ac3",
      "item_sha256": "8369b3f2ad04996bdda95a9e8c8c68dc75e3084404cd9cc107acd5dcb0b1b679",
      "at": "2026-10-18T04:27:17.420Z"
    },
    {
      "id": "thm-finite-strong-interference-channel-capacity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4’s supplied interface gives each marginal MAC’s capacity region, but does not license the added common-ensemble claim. Steps 1.2 and 4.1 need one codebook pair with vanishing error at both receivers, so achievability is unproved.",
      "context_sha256": "1e66bf3b6a1ff7d0cbb607760520478615da1d31fb6fbef8e7e86e457858f981",
      "item_sha256": "4327ce6bdb64216d87a3d2eeaa3a42ae9b51a10019204f6958c14dbe9f7c1ef4",
      "at": "2026-10-18T04:24:23.307Z"
    },
    {
      "id": "ex-real-gaussian-strong-interference-region",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[A1] misstates the supplied AC interface: it only defines the axiom and says nothing about inheritance through a Gaussian entropy theorem. Step 1.1 relies on that unsupported “Gaussian-law convention.”",
      "context_sha256": "68b815216552f76ddba090b334af2ea303cb84b233bbcccfbaf7646ea83d4234",
      "item_sha256": "e337a896c78a244ceda827b35e9cf5e3bca44e3b4c04e0e468fb174c513e4f49",
      "at": "2026-10-18T04:23:53.785Z"
    },
    {
      "id": "thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 applies F4’s o(n) Fano bound to a merely given length-n code. No vanishing-error sequence or bounded-rate assumption is stated, so the cut-set bound does not follow.",
      "context_sha256": "b043ea8fae0bc6e7fc32f19684e720d80a322e595075068f3de524a1b80bde16",
      "item_sha256": "794057fd87ee38ac9acc5dbf0cf73e752538d368f8454496d0e853a89e44936b",
      "at": "2026-10-18T04:24:37.874Z"
    },
    {
      "id": "ex-real-gaussian-relay-fixed-quantizer-gap",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misstates def-axiom-of-choice: AC concerns choice functions or products; it is not inherited through a continuous Gaussian law. Step 1.1 cites A1 for a Gaussian-law convention that it does not provide.",
      "context_sha256": "06cd8fab84a9713f6b60c3c229c7a9cf965b1c02e87c4a898cd11303505c42ec",
      "item_sha256": "352b4e7ad052db7ad5b519056ea7f0c7f4dd91c2056b80f7a2c4268b7bb16ac5",
      "at": "2026-10-18T04:24:02.248Z"
    }
  ]
