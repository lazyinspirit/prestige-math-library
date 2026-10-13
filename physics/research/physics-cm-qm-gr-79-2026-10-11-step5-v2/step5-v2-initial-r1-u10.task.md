# Step 5 adjudicate: initial, round 1, unit 10

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-10-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"10",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-cm-roundoff-accumulation-in-one-step-schemes, 2:lem-cm-verlet-local-truncation-error-is-cubic, 3:lem-cm-holomorphic-map-calculus, 4:prop-cm-drift-kick-and-verlet-preserve-the-canonical-form, 9:def-cm-modified-log-coefficients-and-truncations, 13:lem-cm-symmetric-log-parity-removes-odd-coefficients, 17:lem-cm-separate-roundoff-energy-accumulation, 18:rem-cm-scope-of-the-certified-verlet-estimates.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-cm-roundoff-accumulation-in-one-step-schemes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause 2 allows Λ<0. On a singleton X={a}, take V(a)=a, F(a)=0, L=0, η=h=1, and Λ=−1. The hypotheses hold, but at n=1 the conclusion says 0≤−1. Require Λ≥0.",
      "context_sha256": "94ba8d62d62a4f0160a2ce9705bb43ec4695622c7f6b1772eae6b8fb23a02581",
      "item_sha256": "d8711b8b3986d273195b878eac0b1b930bc9dd8c618a0e4e55a0c3f7935c4d43",
      "at": "2026-10-12T19:29:13.300Z"
    },
    {
      "id": "lem-cm-verlet-local-truncation-error-is-cubic",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 is ill-typed: W is a phase-space subset of R^{2d}, while H_V takes position inputs in Π⊂R^d. Step 3.1 applies F5 at q and q₂; convexity puts their segment in proj_q(W)⊂Π, not in W. The restatement does not license that application.",
      "context_sha256": "fc696993414d33d2bd3baf1322c04ce49382d93b2283a06660b14de8c3bca20a",
      "item_sha256": "f87ebf61dbad45b8fbfd96e231cc57bf9e79d0f9fd09232d8b2f9d50aecbd15f",
      "at": "2026-10-12T19:29:12.184Z"
    },
    {
      "id": "lem-cm-holomorphic-map-calculus",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause 4’s convergence hypothesis is out of scope for its cited interface: the locally uniform convergence remark defines it only for scalar maps on open subsets of ℂ, but the clause applies it to ℂᵖ-valued maps on D⊂ℂᵐ. No higher-dimensional, componentwise definition is supplied",
      "context_sha256": "352d55c70e3c010d59f000536f3f124615778ddcb2f73e40f543fe79d9e721d2",
      "item_sha256": "1b509ff831edf376ca8e8d19fc592a0c45d22ea82c806fccb5597cec84b9b327",
      "at": "2026-10-12T19:29:32.931Z"
    },
    {
      "id": "prop-cm-drift-kick-and-verlet-preserve-the-canonical-form",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final claim calls V_h a local C² canonical transformation without requiring its domain to be nonempty. For d=1, U=(-.1,.1)×(.9,1.1), M=1, V=0 and h=1, kicks are identity and q↦q+p leaves U everywhere, so the composition domain is empty—not a phase domain or local diffeomorphi",
      "context_sha256": "141f28743ca9f1ff211648753a24fc9d55812fc1541eb04e820965cad85e5222",
      "item_sha256": "6c53a010db1cd009b8adf98b3733947aee0aff61d481c5928064a7b28b357cf1",
      "at": "2026-10-12T19:29:06.158Z"
    },
    {
      "id": "def-cm-modified-log-coefficients-and-truncations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The counting claim is false as quantified: m ranges over all integers, but the elementary binomial count applies only for m≥0; for negative m the product gives generalized binomial coefficients. Restrict m to nonnegative integers.",
      "context_sha256": "d6965c7157d7084b58eccc4cb8c7843e635c8da241aab64fbb262958d4471e65",
      "item_sha256": "31489ddf8c546fab4dac9432ea779d6ca74d70e16c322a8e9f98331654b5748d",
      "at": "2026-10-12T19:31:32.592Z"
    },
    {
      "id": "lem-cm-symmetric-log-parity-removes-odd-coefficients",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title asserts the first correction is at order h², but the proof establishes only that this is the first possible order. For an exact splitting, such as B=0, H₃ and all later corrections vanish.",
      "context_sha256": "b23f9691850c54a87fb556c6ad7a3959340a59c6dc2e4a4e9dda31c58d261bc6",
      "item_sha256": "72714f5e1150d30bd48cafd89d2faf5585b1185b19927c93a256283d4f8a5b32",
      "at": "2026-10-12T19:29:55.127Z"
    },
    {
      "id": "lem-cm-separate-roundoff-energy-accumulation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The local-defect lemma applies only at Z∈D(ρ/8), but the statement only puts x_j in K; the two segments used for gradient estimates need not contain x_j. Thus step 1.1 applies the defect bound without its domain hypothesis.",
      "context_sha256": "677c0c36a5aff07bb38ea4c3fdae8036c0d575f2d4f54b67c53fd9f22e5236d4",
      "item_sha256": "b43b157c292731806fdc0e0c7f3a4862513233d507876e5f00bf6fec38f57a3c",
      "at": "2026-10-12T19:37:49.909Z"
    },
    {
      "id": "rem-cm-scope-of-the-certified-verlet-estimates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The roundoff energy lemma also requires η small enough that every comparison segment lies in D(ρ/8). The remark cites only analytic data and compact retained computed points, which do not ensure that condition.",
      "context_sha256": "e832997b2a9d631418bb58fca4c991eca7189cbeb0e82c8a13c890aba6d50387",
      "item_sha256": "455e1e19e92c1665dff895055731f2806e240457a102e237e472ce0c4c76c47c",
      "at": "2026-10-12T19:31:14.781Z"
    }
  ]
