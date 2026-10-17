# Step 5 adjudicate: initial, round 1, unit 27

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-27-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u27.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"27",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:thm-csm-ising-chain-convergent-series, 1:def-csm-gibbs-physical-parameters, 1:def-csm-lattice-gibbs-specification, 1:lem-csm-chain-markov-bridge, 2:lem-csm-peierls-energy-injection, 2:thm-csm-lattice-dlr-existence, 3:lem-csm-stationary-dlr-construction, 4:thm-csm-lattice-dlr-variational-pressure, 4:ex-csm-chain-analytic-interacting-model, 5:thm-csm-ising-high-temperature-state, 6:pthm-csm-ising-equilibrium-phases, 7:ex-csm-high-low-temperature-regimes.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-csm-ising-chain-convergent-series",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 uses exp(log(4/3))=4/3 “by F2,” but none of the supplied cited interfaces states or proves that exp and log are inverses. This unsupported bound is essential to the convergence argument.",
      "context_sha256": "6936a99b0c6a6d2b574be7538624046a32cb8f4b55348dd4595137ee701ee635",
      "item_sha256": "2333e1cac8b1892da94f31a8ee9feb6bedf896ec759952194465189033fd3b4c",
      "at": "2026-10-17T08:00:19.381Z"
    },
    {
      "id": "def-csm-gibbs-physical-parameters",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited interaction interface defines both free-volume and exterior-conditioned energies, but the definition never says which is H_Λ in Z_Λ. Since they differ at the boundary, Z_Λ and p_Λ are ambiguous.",
      "context_sha256": "342675fdad077dffde021daeea883f917531907dbf0ca903435e505f43d829ad",
      "item_sha256": "396840eb179920c01651cf0879515957719d9448a4474557c92cb1811ab2825a",
      "at": "2026-10-17T07:59:30.139Z"
    },
    {
      "id": "def-csm-lattice-gibbs-specification",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Circular well-definedness: this definition’s justified_by lemma is meant to establish the Gibbs formula’s kernel properties, but its supplied interface already assumes the conditional Gibbs formula of this definition. It cannot justify its own prerequisite.",
      "context_sha256": "7585f67d4d3770977784a487b75d4a5ed969b043ad84c03ff037752448391272",
      "item_sha256": "94f2253c890059975f92e458421fc2c88bcfffaef49c4df93bfcc786ed35a8c5",
      "at": "2026-10-17T08:00:13.256Z"
    },
    {
      "id": "lem-csm-chain-markov-bridge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a Markov bridge, conventionally a chain conditioned on fixed endpoints ([MathWorld](https://mathworld.wolfram.com/MarkovBridge.html)); the statement constructs only an unconditioned stationary two-sided Markov law, so the title overclaims.",
      "context_sha256": "bf78e2c1f0410f833db2ce3607ad261886a1ba774d691db0a873f1dbdb645bd6",
      "item_sha256": "6e11b78c636d913f62e01482e0ca1c787b5ba87b05797feb6dc9d55a69cf3c87",
      "at": "2026-10-17T08:00:16.873Z"
    },
    {
      "id": "lem-csm-peierls-energy-injection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement does not restrict n, but the parity-contour dependency assumes n≥1. Step 1.1 uses that dependency to place Cγ inside Bn, so the proof applies it outside its supplied hypotheses (including n=0 under the library’s natural-number convention).",
      "context_sha256": "eed2c90245452c6c7d285cb8c7026daa212b99a6361f7c13e700a804e9bdedeb",
      "item_sha256": "405fe96ef2c54a086e16a607c7660e2f2f07e8de045cc6301ea29af99978980a",
      "at": "2026-10-17T08:00:10.815Z"
    },
    {
      "id": "thm-csm-lattice-dlr-existence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misstates its cited dependency: def-countable-choice defines ACω but contains no measure extension. The extension is supplied by the compactness lemma, so A1's local dependency restatement is inaccurate.",
      "context_sha256": "91a7b80bfa17827e090716101fa5557f741add4fb90a3ebd80d24afdf8660008",
      "item_sha256": "5ad5a71135d9ed6556198286239c5f1bdcf8a75129ecd0abb574bb5aa493b678",
      "at": "2026-10-17T07:59:27.494Z"
    },
    {
      "id": "lem-csm-stationary-dlr-construction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates thm-csm-lattice-dlr-existence: its interface gives subsequences for specified finite-volume Gibbs sequences and says the DLR set is closed, not sequentially compact. Step 3.1 therefore lacks a licensed compactness premise for the averaged DLR sequence.",
      "context_sha256": "daed64cd6c7ec4146fbbe9653d46215d2db86724beebd06821b55496908dded3",
      "item_sha256": "09628726ba1cb56fbf21898885208beda366c94e29f5f5918e7ba8babfff6b15",
      "at": "2026-10-17T07:59:29.034Z"
    },
    {
      "id": "thm-csm-lattice-dlr-variational-pressure",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited stationary-DLR lemma assumes a nonempty DLR state set, but F4 drops that premise and the statement supplies no existence proof or dependency. Step 3.1 therefore does not establish attainment or the supremum claim.",
      "context_sha256": "e116ec1089ec47bff9369599a060372e46792da23b846dad11c3aff5e364b5d5",
      "item_sha256": "6ad9238cfdb0001b63de7299138972dadc36ebdc18c798d907246a71f60d75ba",
      "at": "2026-10-17T07:59:35.044Z"
    },
    {
      "id": "ex-csm-chain-analytic-interacting-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited theorem defines P(K) as dimensionless pressure per site on periodic chains. Calling it “thermodynamic pressure” without that normalization or units conflates it with physical pressure; no lattice volume is specified for a physical-pressure conversion.",
      "context_sha256": "8b66662443ceefcc15432eeca5096e9663f2297fa13241b601e84efffcf2b556",
      "item_sha256": "72dfdd842a7bd4d8fc9c58d9a51613bcadf84874f4be932193e0d41971e34e62",
      "at": "2026-10-17T08:00:43.413Z"
    },
    {
      "id": "thm-csm-ising-high-temperature-state",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 cites only the definition of ACω, which does not state a DLR-existence theorem. The specification interface points to a separate product-measure compactness lemma; the proof supplies no licensed existence premise for its “exactly one” claim.",
      "context_sha256": "e12b1437907e9ae1181a7434c67a129c542a4a964f0b15eafb1c4b744f08bcce",
      "item_sha256": "b94f75f0eb7ed026aa74860242f45f8512e088421e1b2a8283b9ef4900bdfc14",
      "at": "2026-10-17T08:00:14.656Z"
    },
    {
      "id": "pthm-csm-ising-equilibrium-phases",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F3] is restated too broadly: the supplied coexistence theorem requires a zero-field, nearest-neighbor ferromagnet on ℤ² with J>0, as well as βJ≥2. The local premise omits these conditions and does not faithfully state the cited result.",
      "context_sha256": "7d8235e863d94c48c4d2259fb07318df75d6b72128bfb266f492a5ece20aa37f",
      "item_sha256": "8fee17e1807f2c5841ac152ef0042b9cfc5bacfab7d3d22d1755494c0f23137a",
      "at": "2026-10-17T08:05:54.816Z"
    },
    {
      "id": "ex-csm-high-low-temperature-regimes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Low-temperature coexistence requires h=0 ([Friedli–Velenik §3.7.2](https://www.unige.ch/~velenik/smbook/Ising_Model.pdf)); the item states only J>0,T>0, so its scope wrongly includes nonzero-field models.",
      "context_sha256": "89b17c0c459e01a882bb3b4bea17aeb7453eba795071418ff11346248f04c828",
      "item_sha256": "a94ba3ac3fed1c82a60874a2582da41f6f5c110ddd266c51712a8c83ad48d291",
      "at": "2026-10-17T08:00:46.237Z"
    }
  ]
