# Step 5 adjudicate: initial, round 1, unit 22

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-22-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"22",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-rpm-spacetime-observer-and-worldline, 1:lem-rpm-shell-tangent-force-ivp, 1:ex-rpm-incomplete, 2:lem-rpm-length-action-first-variation, 2:ex-rpm-clock-reunion, 3:lem-rpm-einbein-variation-and-equivalence, 5:def-rpm-mechanical-momentum-and-observer-energy, 7:pthm-rpm-mass-shell-and-force-work.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rpm-spacetime-observer-and-worldline",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The flat-case sentence restricts both worldline classes to affine (straight-line) curves. Valid accelerated C² timelike curves in Minkowski spacetime, such as x(s)=o+s e₀+s²e₁ locally, are excluded.",
      "context_sha256": "2616ab90f73ffbfbea54eb1a5f59db700d8b709de472c57374318aeca9cfb398",
      "item_sha256": "45ffc237350c20e7573e0252184d117d973037918814ff51278806f6db97b4b6",
      "at": "2026-10-14T20:04:29.186Z"
    },
    {
      "id": "lem-rpm-shell-tangent-force-ivp",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: the cited Levi–Civita theorem explicitly assumes ACω, but the statement and Facts omit it while using that theorem to supply the connection. Steps 1.1–1.2 therefore rely on an unstated premise.",
      "context_sha256": "93a5b263f4a8eca4b29dfe2abe33ebf873752c20e0f616345582e12c5ae0f985",
      "item_sha256": "9cdf391a9f43f028cbfd81db8ecc5a84e4cf74881433adc52b486cf3b40b9bd8",
      "at": "2026-10-14T20:04:59.458Z"
    },
    {
      "id": "ex-rpm-incomplete",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The physics-domain example gives no units or c=1 convention for θ, xᶦ, L, or ℓ. State a consistent convention so the line element and unit timelike tangents have operational dimensions.",
      "context_sha256": "caa115c02c7319737c42a930786d5de245c1b09a810b0092ae793e003ac26004",
      "item_sha256": "810e4e26a0379db7ce4420c8795a9927cd9cea09d93bcc8928cffa002aeb1ca7",
      "at": "2026-10-14T20:05:28.478Z"
    },
    {
      "id": "lem-rpm-length-action-first-variation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal scope gap: the cited covariant-derivative definition applies along smooth curves, but x and H are only C². The proof uses D_s(T/ℓ), D_sJ, and D_εT without defining the C² extension or strengthening the regularity.",
      "context_sha256": "9d6bd80febee4366578fb148105f4aa9432c5b0dc52410479cdf5cb95eb409b0",
      "item_sha256": "35188006ca11d48e428449bc4ffbcab180f276dc75323a3c45d9c3deb787170e",
      "at": "2026-10-14T20:05:08.573Z"
    },
    {
      "id": "ex-rpm-clock-reunion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: paths are in affine Minkowski A, while F1 uses g on (M,g,N). No assumption identifies A with M or states g=η in χ, so the clock readings do not follow. [Carroll, proper-time definition](https://arxiv.org/pdf/gr-qc/9712019).",
      "context_sha256": "49804bd4a4ace0fb16413ba7e30628b93d8db99dbb2733d59f62f9584f8a3619",
      "item_sha256": "5f83c7f432b0bf08d27bd3c1526f251b80feaf8dfbff6533c006bf228837f97d",
      "at": "2026-10-14T20:05:30.740Z"
    },
    {
      "id": "lem-rpm-einbein-variation-and-equivalence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F11 defines D_s via the pullback connection for a smooth curve, but the item assumes only a C² curve (and C² variations). Step 1.2 applies F11 outside its stated domain, leaving the covariant-derivative notation and variation argument unjustified for the claimed class.",
      "context_sha256": "3cd58ec837a7b4368486600c1682641d2c638489b1d0a75724be665da304aef6",
      "item_sha256": "92dedbd9af425fca369fae533b32d0efedf25c695fc4a72195b5a5ea8f0691ed",
      "at": "2026-10-14T20:05:03.397Z"
    },
    {
      "id": "def-rpm-mechanical-momentum-and-observer-energy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The massive-sector P is not tied to the cited action curve: U is only called “its future unit tangent,” without specifying its relation to T=dx/ds. Define U=cT/√(-g(T,T)) (equivalently dx/dτ) along an admissible massive trajectory.",
      "context_sha256": "7378d2b59c9be1fb162f87aac3f2f702e9107ec41f3aa854f70cb8fafe1bb73e",
      "item_sha256": "883a14ff152de8d96fbe13d2e8735ecbacfe0689cf1724217e85bc3451be44db",
      "at": "2026-10-14T20:04:59.325Z"
    },
    {
      "id": "pthm-rpm-mass-shell-and-force-work",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 restates the pairing rule without its smoothness hypotheses. The variable-mass clause assumes only C¹ U and applies the rule to U, so the cited interface does not license that step; the C¹ extension needs justification or stronger hypotheses.",
      "context_sha256": "6626b572764ac8e5b9d3659efe02203293ab907ca938cf84b592c6dbe49373d4",
      "item_sha256": "ca0a0b413fb1ff09edb6352cffcb7c7b898a46ddc649b52d792bf3cf33c004f7",
      "at": "2026-10-14T20:05:16.539Z"
    }
  ]
