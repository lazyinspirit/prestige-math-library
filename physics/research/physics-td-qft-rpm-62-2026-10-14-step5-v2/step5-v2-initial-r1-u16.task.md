# Step 5 adjudicate: initial, round 1, unit 16

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-16-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u16.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"16",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:rem-td-local-equilibrium-branch, 1:rem-td-transport-branch, 5:def-td-macro-versus-micro-entropy-claim, 6:ex-td-macrocell-and-gibbs-entropy, 7:rem-td-fluctuation-model-hypotheses.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "rem-td-local-equilibrium-branch",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The central local-equilibrium approximation permits any declared q:Z→E_eq, while E_eq is characterized only by calling its elements local-equilibrium constitutive states; no equilibrium criterion is supplied. It labels arbitrary states rather than giving an operational physical c",
      "context_sha256": "237bd611e094e8e61d859bd74bbdf1cc09c8ee999eaf2c0c4d63c6e9c80c75d1",
      "item_sha256": "c52a67014f3e77d57cc28466532dccb7a956d1cec542adc4fc30fcfcaa55e6d2",
      "at": "2026-10-14T20:00:43.426Z"
    },
    {
      "id": "rem-td-transport-branch",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: T is never declared as a map on a spatial domain (or as a fixed-time spatial function), yet its partial derivatives and evaluations T(x,t) define the constitutive law. The cited derivative interface requires such a domain.",
      "context_sha256": "442a9a743c2d0c9d9e4160de4b3beccc5c2784d8ed5f0eb0cf95feb503fbd3ad",
      "item_sha256": "87789d17149471c2894b27e26194cb8f7d1419cf40a01796c9e25e7fc40307ff",
      "at": "2026-10-14T20:00:02.787Z"
    },
    {
      "id": "def-td-macro-versus-micro-entropy-claim",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The source record mislocates entropy support: the cited current Likharev §§5.1–6.2 cover fluctuations and kinetics, while Arovas §§9.2 and 9.5 concern stochastic processes. These locators do not support the item’s entropy definitions, making its provenance unfaithful.",
      "context_sha256": "39fd135c6b90d448a8ffbd1c1d8cb54d6042becd4c5fabd8fdb9d43eeb7bcab6",
      "item_sha256": "e581b533b95843d75522e0da959ecb7fdf617d56ab7af8564c93a95027ef80af",
      "at": "2026-10-14T20:00:06.177Z"
    },
    {
      "id": "ex-td-macrocell-and-gibbs-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited entropy interface requires a finite microstate model (Ω, ε) with finite ε:Ω→ℝ, but the example specifies only Ω and p. It therefore has not supplied an instance of the model whose entropies it evaluates.",
      "context_sha256": "ab2e0fc46b53cb820c151b029bb4dbfb9b18f7cbdf3ba599ab726936b3a81405",
      "item_sha256": "f51030697b33bb70f48115a159b103f589f57a56010fdf74d9bdf12769302956",
      "at": "2026-10-14T20:00:16.521Z"
    },
    {
      "id": "rem-td-fluctuation-model-hypotheses",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal type mismatch: τ is declared as a duration in seconds, but def-interval defines subsets of ℝ. Thus [0,τ] is not its interval, leaving Γ, γ, and λ with ill-typed domains. Use numerical times in seconds or define a physical-time domain.",
      "context_sha256": "f5fc684a1545ec52977704ed962fdc64946571cc5210ac5329559cac45a0262f",
      "item_sha256": "8594ca00606e145da37283f4e6fc3ee0ecc0db3ef309a565984dfd1d8217cbb3",
      "at": "2026-10-14T20:01:06.283Z"
    }
  ]
