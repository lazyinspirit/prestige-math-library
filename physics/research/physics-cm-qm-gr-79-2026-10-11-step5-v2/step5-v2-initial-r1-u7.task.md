# Step 5 adjudicate: initial, round 1, unit 7

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-7-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u7.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"7",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cm-averaging-data-and-averaged-field, 1:lem-cm-averaging-data-basic-bounds, 1:prop-cm-oscillator-degenerate-and-repulsive-cases, 1:cex-cm-nonuniqueness-without-state-lipschitz, 2:cor-cm-homogeneous-oscillator-decay, 3:thm-cm-forced-oscillator-sinusoidal-response, 3:ex-cm-averaging-oscillatory-deviation-check, 3:ex-cm-pendulum-linearization-bound-check, 4:prop-cm-oscillator-amplitude-maximum, 5:rem-cm-approximation-scope-and-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-averaging-data-and-averaged-field",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The zero-mean claim cites thm-additivity-over-subintervals for linearity in the integrand. Its supplied interface proves interval splitting, not that linearity, so the cited dependency does not license this step.",
      "context_sha256": "27da7e38a68c634a840072622f49b4e06a65b005c87ed9eec02ebb0dd4d10ef0",
      "item_sha256": "ce2e3eca12c3f8f2c46420beee526bd04c9a8d7856349b59f3012ef2a7bc2d1c",
      "at": "2026-10-12T19:23:58.033Z"
    },
    {
      "id": "lem-cm-averaging-data-basic-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In 3.1, the boundary sequence is undefined at j=0 because the library has 0∈N; as written, it cannot justify the limit. Define its zero term separately or index the approximants from 1.",
      "context_sha256": "67a8eefb9095723b7d8ef6a48ed70a43073eee9967109f60e5bb3c385f1c9a00",
      "item_sha256": "9bcc0c76dafff5dac622ab97cb6aca58a5265245b4ec3a519357eb58466b198e",
      "at": "2026-10-12T19:24:53.798Z"
    },
    {
      "id": "prop-cm-oscillator-degenerate-and-repulsive-cases",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 restates the supplied corollary’s evaluation clause for arbitrary a,t, though its interface requires a<t. Step 1.2 applies it when t<a, so that cited restatement does not justify the step.",
      "context_sha256": "69f0b5e35e5257ed5f226007094b787782a716636474c0bb9f4936481d6a048f",
      "item_sha256": "1117a09a71d6dd425134b273da7223f63934c085cf4829b2f5e1680aa8aa0945",
      "at": "2026-10-12T19:24:20.541Z"
    },
    {
      "id": "cex-cm-nonuniqueness-without-state-lipschitz",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L2]/step 1.1 cites thm-composition-with-a-continuous-function for continuity of composites, but its interface is an integrability theorem. It does not establish continuity of F, so the dependency restatement is inaccurate.",
      "context_sha256": "20e2e9077ba4d1be43b233c8e8ef9030b9624d058a12c9c7e856b5239dd4833b",
      "item_sha256": "f97aa18a9950617c268b53715ec0b4502e6d22b394b3dbc7ece813fda5b33388",
      "at": "2026-10-12T19:25:02.588Z"
    },
    {
      "id": "cor-cm-homogeneous-oscillator-decay",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Case Δ>0 infers e^{λ_-t}≤e^{λ_+t} from λ_-t≤λ_+t, assuming exp is increasing. No cited fact establishes monotonicity; the cited exponential theorem gives only limits and range, so the claimed bound is unsupported.",
      "context_sha256": "cbb85c0004642221e527cb782f41e6885ccd8ba049b25d6a2454898c7b821834",
      "item_sha256": "1baf0811745071b84731f3bdea22c2b8188a770e5381927ad99d59ab8c2d1f14",
      "at": "2026-10-12T19:24:06.237Z"
    },
    {
      "id": "thm-cm-forced-oscillator-sinusoidal-response",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The unboundedness proof reuses the fixed spring constant k as an index in t_k and never specifies k∈ℕ. The cited periodicity gives sin(π/2+2πk)=1 only for integer k, so this does not establish the claimed sequence or its divergence.",
      "context_sha256": "f861904cfebc47edd6a84cbdf97e6c975f5fb3bf10dbaed599b43a4875ac326f",
      "item_sha256": "e15f15e8fbe0d832e85bb40441a940f39abea2a480fa47d7d280b927e61b3f8b",
      "at": "2026-10-12T19:26:56.556Z"
    },
    {
      "id": "ex-cm-averaging-oscillatory-deviation-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited interfaces do not establish that cos is 2π-periodic or that sin(2π)=0. Both are needed to verify the averaging theorem’s periodicity hypothesis and the claimed zero average.",
      "context_sha256": "6be43fd13486ae2a9f2b6bbd807c4b0db50fa5583ff20a0ed4a35933187b755b",
      "item_sha256": "fe042ed8d180617354c6b747d86a57378fd4dac87efe44423d0370843d384175",
      "at": "2026-10-12T19:25:15.245Z"
    },
    {
      "id": "ex-cm-pendulum-linearization-bound-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] overstates the cited theorem: the stated bounds and smallness condition alone do not license its conclusion; the theorem also requires domain containment and continuity and local Lipschitz regularity of F.",
      "context_sha256": "8c7745e4737f1bf00d289f14a47ec59d1905b6df140997e18985113aa394ab0e",
      "item_sha256": "ec51d6dc0254a28919cbd579d2766dc9e9ac3d0a108f074a59e42108272b4622",
      "at": "2026-10-12T19:25:38.265Z"
    },
    {
      "id": "prop-cm-oscillator-amplitude-maximum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Proof technique calls both x↦1/x and x↦√x strictly decreasing. The square-root map is strictly increasing on [0,∞), as F3 and step 3.1 state, so the proof’s announced monotonicity rationale is false.",
      "context_sha256": "46b04e6ea8419de926a650f467aade111b39a33881fd13443af7b03a0fb9e91c",
      "item_sha256": "9a00c02d5dbcb08762e1e0c38a07b3f0f0256e6836dbf2d36602b594b334ea08",
      "at": "2026-10-12T19:27:36.340Z"
    },
    {
      "id": "rem-cm-approximation-scope-and-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The sinusoidal-response interface guarantees the resonant solution is unbounded only when f₀ ≠ 0. The remark omits that condition; for f₀ = 0 the stated resonant solution is identically zero.",
      "context_sha256": "98c5a01d515e09ee24c4406b605b9e729f418a40805ef7c10d424ccbe45ce5ef",
      "item_sha256": "15c335d7ac0db65a3de0d9227e52c0a5ec70cfce1ce934dc815775494ad949de",
      "at": "2026-10-12T19:25:20.557Z"
    }
  ]
