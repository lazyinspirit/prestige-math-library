# Step 5 adjudicate: initial, round 1, unit 22

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-batch-22-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"fluid-dynamics-all-47-2026-10-23",phase:"initial",round:1,unit:"22",input_sha256:"9be711b940a681b75640bcf998c1259c5d3eb539d47214af2cabfb73a7f7cd6d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run fluid-dynamics-all-47-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-fd-negative-space-nonlinear-bound, 2:def-fd-weak-time-continuity, 3:def-fd-periodic-leray-hopf, 3:lem-fd-finite-mode-compactness, 3:lem-fd-no-slip-lsix, 4:thm-fd-bounded-global-weak-existence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-fd-negative-space-nonlinear-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied space definition defines P only on L². Here div(a⊗a) is merely a distribution for general a∈L²; the proof applies P_k without defining or establishing a distributional extension of P, so the stated expression is unsupported.",
      "context_sha256": "a3a1816370476247999f181803c521cb9c60687359d95740abc6b4d87496d84e",
      "item_sha256": "2fe7f9421968694ae9909a5b614a22b98530023ea138d1b7b2b20b2b45b4bfb9",
      "at": "2026-10-22T22:46:10.696Z"
    },
    {
      "id": "def-fd-weak-time-continuity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 says F1 records separability for periodic targets, but F1 states only their real Hilbert structure. The item does not establish periodic-space separability before applying its separable-target Bochner conventions.",
      "context_sha256": "8cf2afd69ebccfe7d36e543b9c54e84c8e601df503a57251f0c93cee028ce811",
      "item_sha256": "8433e6fcccca3f56c6989012678a8fab4985785bce67ef4b43c8c4010da8fe52",
      "at": "2026-10-22T22:46:20.274Z"
    },
    {
      "id": "def-fd-periodic-leray-hopf",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The periodic-space interface is an undeclared prerequisite: neither supplied dependency defines H, V, the L² norms, or ∇u, yet the proof relies on them for typing and integrability.",
      "context_sha256": "8eb54a5a2cab299a48a475013cd63eb55d9474f1201c80007160ca2476994d6b",
      "item_sha256": "ff196ead4af89d98410248ed84b19ec9145e3eaef99a87347fdedb86f55c4261",
      "at": "2026-10-22T22:47:14.197Z"
    },
    {
      "id": "lem-fd-finite-mode-compactness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 sets z=0 at exceptional times where the limiting Fourier series may not lie in V. That modification can destroy the established weak continuity and coefficient convergence, so the resulting z need not satisfy the conclusion.",
      "context_sha256": "e9276275c89c28bd0dbe9ff67c1e34a1be9023093275c40f15786c0a833c93a0",
      "item_sha256": "2b11b3ee12abf36b070d18b34311139d69a572fdc7fd571b3d2876f327d73802",
      "at": "2026-10-22T22:46:03.112Z"
    },
    {
      "id": "lem-fd-no-slip-lsix",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows Ω=∅, but its cited space definition and basis input define H and V only for nonempty bounded open Ω. Thus H and V in the time-dependent claim are undefined for an admitted case; require Ω≠∅ or define that case.",
      "context_sha256": "3e0551db49ab17323d0097818d5523aecacdef72ab28cf22e1e2eb8f5fb6116d",
      "item_sha256": "4dcafc01c8e0d16c80a245efa1d0ffbfbfc2b85c97560dbf10552e3865824914",
      "at": "2026-10-22T22:46:18.180Z"
    },
    {
      "id": "thm-fd-bounded-global-weak-existence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The hypothesis allows Ω=∅, but the cited closure-space definition and basis lemma require Ω nonempty. Steps 1.1–5.1 therefore use F2 outside its stated scope. Add Ω≠∅ or handle the empty case.",
      "context_sha256": "3ed9190da3517c54ddb021e56b726b355d7d7d7aadf4cda29934606d43f83bd1",
      "item_sha256": "0babf6a4b7ce7742db7af277d651f603b13c7ae765811601b3ae0a7b6b478066",
      "at": "2026-10-22T22:46:53.228Z"
    }
  ]
