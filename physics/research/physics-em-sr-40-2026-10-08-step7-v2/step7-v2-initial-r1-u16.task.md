# Step 7 adjudicate: initial, round 1, unit 16

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u16.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"16",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-em-mean-zero-coercivity-on-a-c-one-domain, 0:lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain, 0:lem-em-zero-boundary-coercivity, 1:lem-em-lift-specified-dirichlet-existence, 1:lem-em-magnetic-dipole-remainder, 1:lem-em-spherical-harmonic-basis-and-addition, 2:lem-em-prescribed-fractional-dirichlet-existence, 2:lem-em-smooth-pec-cavity-spectral-closure, 3:lem-em-pec-cavity-eigenfield-boundary-regularity, 3:lem-em-weak-neumann-and-transmission-existence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-em-mean-zero-coercivity-on-a-c-one-domain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 uses compactness to extract a finite subcover of ambient chart/interior boxes. The supplied def-compact-space explicitly requires citing lem-compactness-of-a-subspace-is-ambient for this use; that required dependency is missing.",
      "context_sha256": "7260b67cd9b070aa7c7caa7879dcce955ae2d0c425f23d39d610acf193e88730",
      "item_sha256": "4a2ea083141ebf2c8d84fba3f1f13af74300e64b696a61971a0fd25b0a245490",
      "at": "2026-10-10T04:12:24.002Z"
    },
    {
      "id": "lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 applies intrinsic compactness to an ambient chart cover. The supplied def-compact-space explicitly requires citing lem-compactness-of-a-subspace-is-ambient for this use; that required supplier is neither cited nor listed as a dependency.",
      "context_sha256": "354b8fb0ce13f70803359636dca9c6695f10acbd6accf86d2202ca872946b4bb",
      "item_sha256": "80d97264941edffa7e9880cec32746315d9c305f83317f6f7bc4a58c496a11bc",
      "at": "2026-10-10T04:13:09.380Z"
    },
    {
      "id": "lem-em-zero-boundary-coercivity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately restates the Sobolev definition: its interface explicitly leaves the norm axioms as a separate assertion and cites no Sobolev norm theorem, whereas F1 claims those axioms are supplied by a theorem cited there.",
      "context_sha256": "37c51c1fce5e0d5baea6e9c0b5d6d23999649827e9e522d3d4053378bac0feff",
      "item_sha256": "a1e7fc8b07584d13b3caf8b26ed51fad8a79f4ebd5429556e288600b2cfe7cf2",
      "at": "2026-10-10T04:12:20.163Z"
    },
    {
      "id": "lem-em-lift-specified-dirichlet-existence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final flux-continuity claim fails for general F, which may include sheet sources. On (-1,1)^3 take ε=I for x1<0 and 2I for x1>0, G=u=|x1|, and F(v)=a(G,v). All hypotheses hold, but the normal flux jumps by 3 across x1=0.",
      "context_sha256": "42f882f69bdfdd3f4760df6c39b0e44955bce005ebe2257f0511ba6ff5d0efe4",
      "item_sha256": "9a466445acfc6affd1fd0ab5add474e98dc75f05e6b6790c36937f91b0ab77d7",
      "at": "2026-10-10T04:12:39.643Z"
    },
    {
      "id": "lem-em-magnetic-dipole-remainder",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F5] inaccurately restates thm-algebra-of-derivatives as supplying chain and power rules. Its interface supplies only sums, scalar multiples, products and quotients; the asserted rules used in steps 4.1–5.1 are not licensed by that citation.",
      "context_sha256": "541f6fe83ed00997c175725306e517ecc9d30769e57a85651c1a98b63a5d2eed",
      "item_sha256": "efae1044818f34bd0b5641362251dc603bba2aeeb90a382eaaa3cac45a247315",
      "at": "2026-10-10T04:12:30.292Z"
    },
    {
      "id": "lem-em-spherical-harmonic-basis-and-addition",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 and step 8.1 require c_l(x,·) to be a homogeneous harmonic polynomial in y. The supplied Legendre-kernel interface does not assert this (its spatial-derivative clause concerns x), and no local proof establishes it, leaving the zonal identification unsupported.",
      "context_sha256": "9f6d51b1ec9681dee7b0d7857829e4280e7c317e075dc37ec861039fb26f5648",
      "item_sha256": "1bbc059158c384f5b6a1ab1275c553c0ffa8f33ea9c18a7297cf5318990c5981",
      "at": "2026-10-10T04:12:44.521Z"
    },
    {
      "id": "lem-em-prescribed-fractional-dirichlet-existence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 and step 4.1 attribute the Poincare bound and gradient/full-norm equivalence to the lift lemma, but its supplied interface states neither. These essential estimates lack a local proof or a declared zero-boundary coercivity dependency.",
      "context_sha256": "80e705c94c2ef0c76e68eec8d8b03916f7a767788ae31d7b6aa16a1aa23e884a",
      "item_sha256": "0c7ed7b378c14dac5c2747c436a3a69577401e3d0a895817ac5b93e78d82a619",
      "at": "2026-10-10T04:13:02.912Z"
    },
    {
      "id": "lem-em-smooth-pec-cavity-spectral-closure",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 drops the mean-zero supplier’s connectedness hypothesis. On two disjoint smooth balls, a function taking different constant values on the components has zero gradient but nonzero deviation from its global mean, contradicting the restated inequality.",
      "context_sha256": "749f128b10294d2b427c8c69bcb59d6896eaa121a2dadcea43bab8c6187ff1aa",
      "item_sha256": "87e8690e15bbf3af5b3ee742d80841d2116339af13012cbb67f1732f68e5814f",
      "at": "2026-10-10T04:13:10.857Z"
    },
    {
      "id": "lem-em-pec-cavity-eigenfield-boundary-regularity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 attributes X's H1 inclusion and graph/H1 norm equivalence to the spectral-closure supplier, but its supplied interface states neither. No local proof establishes them; step 2.1 and the boundary bootstrap therefore lack an essential premise.",
      "context_sha256": "89be27d4d026647686a1ab3c37e8abb68bdbdbe7bd4af13cfc87f7a2925b9632",
      "item_sha256": "8454a49a7a371153cfff6354e0566091443b3cd4af371f656757f584426a7bd1",
      "at": "2026-10-10T04:12:58.326Z"
    },
    {
      "id": "lem-em-weak-neumann-and-transmission-existence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 and step 1.1 require a bounded trace H^1→H^{1/2}, but the cited trace theorem supplies only H^1→L^2. The Dirichlet supplier gives extensions, not this trace estimate; boundedness of ℓ for arbitrary H^{-1/2} data is therefore unproved.",
      "context_sha256": "d831d08ec9f054fe7fc844aa912b3a58dbc1d0988c570d9b6eabfa50b68ddac6",
      "item_sha256": "f19c6f608eb1771a9b5a7a335f32dcae35d1264e94723c99f3b9db8ce4b32019",
      "at": "2026-10-10T04:12:52.893Z"
    }
  ]
