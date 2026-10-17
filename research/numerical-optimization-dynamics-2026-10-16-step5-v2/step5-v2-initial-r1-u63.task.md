# Step 5 adjudicate: initial, round 1, unit 63

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-63-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u63.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"63",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:thm-c2-ode-flow-on-common-tube, 2:lem-phase-bordered-shooting-jacobian-invertibility, 2:thm-validated-euler-flow-and-monodromy-enclosure-soundness, 3:lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse, 5:def-validated-periodic-shooting-jet-enclosure, 6:alg-validated-periodic-orbit-corrector, 6:lem-separated-simple-floquet-multiplier-perturbation-bound, 7:alg-periodic-orbit-pseudoarclength-continuation, 8:thm-floquet-multiplier-cluster-certificate-soundness, 9:thm-validated-periodic-orbit-certificate-soundness, 10:thm-orbital-stability-from-certified-floquet-multipliers, 11:ex-van-der-pol-stability-conditional-on-validated-enclosure.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-c2-ode-flow-on-common-tube",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates the supplied lemma: it gives C¹ in initial state for each fixed t, but its interface provides no uniform-in-time difference-quotient estimate. Steps 2.2 and 4.1 rely on uniform remainders and convergence to establish the second derivative and its continuity, leaving",
      "context_sha256": "d28fb176d31ff0ca93fa98f7bf194ac10329b46a71bc885e16baa29b3c8b5891",
      "item_sha256": "903b561610746cb56dbdaa1d8b5340b39c3c6aef241d46413471450bf0b26750",
      "at": "2026-10-17T01:45:24.325Z"
    },
    {
      "id": "lem-phase-bordered-shooting-jacobian-invertibility",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 inaccurately attributes the characteristic-polynomial definition of algebraic multiplicity to def-eigenvalue-eigenvector-eigenspace-and-spectrum; its supplied interface defines eigenspaces and spectrum via eigenvectors and says nothing about multiplicity.",
      "context_sha256": "49d40f2a84f203046889e4ca48e3f336d0507ead2933e5e6faa1430781086c1d",
      "item_sha256": "778ebcde280f9b42b9d1b37f43e88407431457923d53a55454d12f6cdecd1441",
      "at": "2026-10-17T01:45:11.879Z"
    },
    {
      "id": "thm-validated-euler-flow-and-monodromy-enclosure-soundness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4 invokes [F4] without establishing its required open neighborhood of initial states whose flows exist on a common compact tube. Success covers only x0∈X0, which may be closed or degenerate, so [F4] does not directly license the derivative identification there.",
      "context_sha256": "ef02a1b2177598e43bf6e75b569fff12826f59d91c4d29d36f0ec550b018d621",
      "item_sha256": "261caefb796456b241af068e5ab10c36cdc269b947fb870dee65951faccfb909",
      "at": "2026-10-17T01:45:51.739Z"
    },
    {
      "id": "lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 drops the common compact convex tube hypothesis of the cited flow lemma, which the BVP assumptions do not ensure (an orbit may wind around a hole in U). Step 2.1 relies on that sensitivity result without verifying it or patching local applications.",
      "context_sha256": "89e9b8bc40e33c671078fe133b211262772e4e0da0e7d914b60eb4d78b70fb06",
      "item_sha256": "0fc89958814dac7c9a2ac02bbfeb9e9f21b2f389f6573e77fe04997ea2331744",
      "at": "2026-10-17T01:46:01.664Z"
    },
    {
      "id": "def-validated-periodic-shooting-jet-enclosure",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The p=0 identification with def-phase-bordered-periodic-orbit-bvp fails when c=0: that interface requires c≠0, but this definition permits c=0. Require c≠0 or qualify the dependency claim.",
      "context_sha256": "3346b37e77e992d7f46ab570dd312f67559bab0cca8356a7084128b2015071d1",
      "item_sha256": "da3e71cb3f457512693d67574b10bad8393556242d427b054aeb066b45dd1f75",
      "at": "2026-10-17T01:45:30.391Z"
    },
    {
      "id": "alg-validated-periodic-orbit-corrector",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In section mode, z=(x,θ,μ), but the shooting-jet interface returns DG columns in (q,θ)=(x,μ,θ) order. The instructions append the section row without permuting columns, so Krawczyk's Jacobian may not enclose DF(z), invalidating the certificate. Reorder columns first.",
      "context_sha256": "f7d88f83907b739eb740ed62c5723264f7785d6471c7cec22ec80f81ff260048",
      "item_sha256": "8a7f9bdaf7ef9a6e8f0225c3df22dbba59311ac68632c2b8db2e2b6ba3aa50fe",
      "at": "2026-10-17T01:45:45.891Z"
    },
    {
      "id": "lem-separated-simple-floquet-multiplier-perturbation-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement says an unseparated cluster “requires the contour-count route,” but neither the proof nor any supplied dependency establishes that claim. The bound only addresses a separated simple eigenvalue, and other cluster perturbation methods exist.",
      "context_sha256": "dea5b05e303be6a402bc0a9f5c6dde4fedd88170f8c4e1191f6c6df18795acc2",
      "item_sha256": "c919024a53cebe1492122d798c26bf466fdbe1d4e11b53321f65d924bdaf1d95",
      "at": "2026-10-17T01:45:38.243Z"
    },
    {
      "id": "alg-periodic-orbit-pseudoarclength-continuation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The continuation dependency requires F to be C^3 on any subtube used for a fold check. This item assumes only C^2 f yet permits fold requests; C^2 alone does not guarantee the required C^3 shooting map.",
      "context_sha256": "00d725687e390685f94991f74e842f8c359e3e7ba2ad0a2dd69adbe6de7bbe94",
      "item_sha256": "a509c8452b9b7db22661e84025e74f3dee0b07dfc153879b7072a9d381e4c787",
      "at": "2026-10-17T01:45:59.238Z"
    },
    {
      "id": "thm-floquet-multiplier-cluster-certificate-soundness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 claims the characteristic-polynomial/eigenvalue correspondence with algebraic multiplicities, but its cited interfaces only define eigenvalues and state the polynomial root count. Step 3.1 therefore lacks a cited link from the counted roots to eigenvalues.",
      "context_sha256": "7dc1272a839aaf2c06129479ef573adb8394c3c1807eee5a5501fde9c9714aa7",
      "item_sha256": "eb77f1b2f0347a576e36d5ca8f0e99f03da7ed27fef28f016b6b7fd0c5d0daca",
      "at": "2026-10-17T01:45:23.793Z"
    },
    {
      "id": "thm-validated-periodic-orbit-certificate-soundness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 omits the dependency’s essential premise that the exact flow exists uniquely on [0, θ]. Step 2 invokes the equivalence without establishing it; F4 is cited only later. The root-to-orbit conclusion is unsupported as written.",
      "context_sha256": "f5dcbdb9a4448a2595d4606705f4fb8025e67216e39f06a725a5776b6996ffa9",
      "item_sha256": "6de6a354d369f0b6a07ea9516eacdea0ffb57aac8f6a5b79c60cc846a563bffb",
      "at": "2026-10-17T01:45:40.522Z"
    },
    {
      "id": "thm-orbital-stability-from-certified-floquet-multipliers",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 misstates [F4]: it identifies return-map eigenvalues with non-phase multipliers under later hypotheses; it does not assert that a d×d characteristic polynomial has d roots. The citation does not support this step.",
      "context_sha256": "42e06e8bade5216a1c9026cd426e400b0a15f3b5cf87fdc114f47b2d9f4ba7ff",
      "item_sha256": "747719894f92bde42a8e6e0252eb13f7e3f1cd3c2e6d927d4513869e683f2de6",
      "at": "2026-10-17T01:45:46.403Z"
    },
    {
      "id": "ex-van-der-pol-stability-conditional-on-validated-enclosure",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates the corrector interface: soundness requires `validated-root`, a complete Krawczyk partition (one unique-root box, all others root-free), outward residual/Jacobian bounds, and a verified contraction. Inclusion plus nonstationarity alone does not certify the claimed o",
      "context_sha256": "dac0aeae466506a2d223aa01d3c6ebc8c4a4271df575cd2ecb9aaa3a0aa301d4",
      "item_sha256": "c40f9300f62999ffc28b53a7c287b3b784456234d8c31c83d14bc89ecd081366",
      "at": "2026-10-17T01:45:32.483Z"
    }
  ]
