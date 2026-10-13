# Step 5 adjudicate: initial, round 1, unit 13

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-13-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u13.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"13",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-stable-unstable-cones-and-line-slopes, 1:lem-slope-graph-transforms-converge, 2:def-bilateral-symbol-and-bounded-sequence-space, 3:def-smooth-periodic-oscillator-pulse-model, 3:lem-bounded-bilateral-sequence-ball-is-complete, 3:lem-close-map-first-component-has-uniform-inverse, 4:lem-perturbed-scalar-recurrence-root-bounds, 4:ex-cm-chaos-pulse-and-rotation-endpoint-checks, 5:lem-symbol-locality-gives-coding-continuity, 5:thm-explicit-perturbed-horseshoe-and-transversality, 5:ex-cm-chaos-slope-transform-fixed-point-checks, 6:thm-smooth-fixed-mass-mechanical-horseshoe, 8:ex-cm-chaos-finite-word-homoclinic-code-checks.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-stable-unstable-cones-and-line-slopes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The line-field existence claim omits the companion lemma’s required aperture condition k(2L−k)≥1, and L is unintroduced here. For k=0.01, L=2, and s_n=2, an invariant slope must satisfy h=1/(4−h), whose roots 2±√3 lie outside [−k,k].",
      "context_sha256": "beaa297190c22e0f8ac1522b0ab8cd5763b8efece56d51025424e3444452318d",
      "item_sha256": "e4e6bd3823730bb00a1fc1133f583f6f4c0fc2c5edbb52f7fc4b9ee450d099d4",
      "at": "2026-10-12T19:32:30.845Z"
    },
    {
      "id": "lem-slope-graph-transforms-converge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 concludes the Cauchy slope sequences converge using F3 and F4, but those give geometric tail bounds and rules for already-convergent sequences. No cited fact establishes that Cauchy real sequences converge; add that theorem or prove it from completeness.",
      "context_sha256": "b8bde5da43982a954998a3deaaff010d32536dbbf54f035375ca098f647dd2e9",
      "item_sha256": "8f37796c7fc1842542fbaf43a580cda9893b7f115fe03d7b10911d767469c278",
      "at": "2026-10-12T19:32:10.363Z"
    },
    {
      "id": "def-bilateral-symbol-and-bounded-sequence-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition introduces B_R only for R>0, but its companion lemma claims the item’s B_R is complete for every R≥0. B_0 is undefined, so the supplied interface is ill-typed; define B_R for R≥0 or narrow the lemma.",
      "context_sha256": "19fedf2d076b6da17210c643349ae4f54384a1810d9f19f948df36213e46603c",
      "item_sha256": "63cd249e3b6a5951b1de72c3d87aca82507dcd0a3773d9a319a13041c5ef2eff",
      "at": "2026-10-12T19:32:10.404Z"
    },
    {
      "id": "def-smooth-periodic-oscillator-pulse-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cutoff lemma gives χ only on (0,1), but I=∫₀¹χ is used before any extension to [0,1] is defined. The Riemann integral is ill-typed as written; explicitly zero-extend χ first.",
      "context_sha256": "982e43b2e89d859385088fa5eeb73681a4dcb57b2480954b6f9cd448e124fd56",
      "item_sha256": "df92b83041b494281e9b62f0af812a3606a82e9d901ed4c4dc0137526a6711cd",
      "at": "2026-10-12T19:33:29.586Z"
    },
    {
      "id": "lem-bounded-bilateral-sequence-ball-is-complete",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 attributes the absolute-value triangle inequality to def-abs-value and lem-of-abs-value, but their interface assigns it to lem-of-triangle-inequality, which is not a dependency. Step 2.1 uses it to prove boundedness, so that inference lacks a licensed premise.",
      "context_sha256": "3ac44444c1ffbdb86718803dfbf7bf1b7811ec8e150f02dd6e8b378ba0d490df",
      "item_sha256": "88546d7f92d302b9bfb8509da4f0de6ed38b2e8fcaa5998c61ddeee88ae2729a",
      "at": "2026-10-12T19:31:52.842Z"
    },
    {
      "id": "lem-close-map-first-component-has-uniform-inverse",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 applies the mean-value inequality on a closed interval, but the supplied theorem requires a convex open domain. It gives the estimate only for interior endpoints; F1 does not extend it to the boundary, so the contraction claim is unproved there.",
      "context_sha256": "4a9e58e6ac97204e50e5ef3b0dbf13e84f982f42d129e6d4c48336051d26edc8",
      "item_sha256": "05191262d477d743d1c31145cd87a82f97cd2512352d7ea16e25c5fda19ed09a",
      "at": "2026-10-12T19:33:00.560Z"
    },
    {
      "id": "lem-perturbed-scalar-recurrence-root-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 uses the mean value theorem for the 3/4 root margins, and F5’s derivative-implies-monotonicity claim also depends on it. No MVT supplier appears in deps or Facts & Assumptions, leaving essential results for clause 2 unsupported.",
      "context_sha256": "acddd50c1f2e305916cabf572bf51d02f8486c7103d1077b53e42cbf56db21f2",
      "item_sha256": "dde25da219ac78af5b8e470cc35bf65b20fa835de2a3b0156ee104dd58d36a32",
      "at": "2026-10-12T19:33:29.525Z"
    },
    {
      "id": "ex-cm-chaos-pulse-and-rotation-endpoint-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: βδ is defined P-periodically on ℝ, so its support repeats every period. It does not vanish outside [π/2,P] as 3.1 claims, nor is its global support contained in (π/2,P); only its restriction to one period has that support property.",
      "context_sha256": "eb9e5cee0291f11afa6ae3489a6ecf1097c3919e394fc6d0fb69b5e2d31994aa",
      "item_sha256": "a6a534dfc64c7e0fc260c0f9de5e8441e9fdc97e3a33cd34e041fe002063f25c",
      "at": "2026-10-12T19:32:50.567Z"
    },
    {
      "id": "lem-symbol-locality-gives-coding-continuity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 attributes T_s(B_R)⊆B_R and ||T_s^m0||∞≤R to the sequence-space and completeness interfaces, which establish neither. These claims require clause 2 of lem-coded-quadratic-recurrence-is-a-contraction, so the local dependency restatement used in step 2.1 is unsupported.",
      "context_sha256": "4d254e87f80950a61ec26f5bd82735a406753bac487c7ec10b7e72c71b717dd6",
      "item_sha256": "c624969be1175248de4dbd2b2add999f05a5dcce434f7dd7d402e23ebe7aa8cc",
      "at": "2026-10-12T19:33:42.871Z"
    },
    {
      "id": "thm-explicit-perturbed-horseshoe-and-transversality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 5.2 and 6.2 apply the weighted-tail lemma, which requires C² extensions of M_u and M^H_u. The root-bounds interface supplies only C¹ maps on [-R,R]²; F1's claimed C² extensions are not licensed, so the lemma's hypotheses are unmet.",
      "context_sha256": "fb25d4c20ac59986292b8aebfe6b6b2ddeeb3d908bda887b73780b791ef8d60a",
      "item_sha256": "31ba247a9b21908f2aff62070e3ac37dfd4fcd8c1f64c6b5609916022b6de8c4",
      "at": "2026-10-12T19:33:37.057Z"
    },
    {
      "id": "ex-cm-chaos-slope-transform-fixed-point-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] overstates the supplied slope lemma: it claims cone invariance from only λ>1 and kλ>1, omitting the lemma’s required L≥2 hypothesis. That generalized dependency restatement is not licensed by the supplied interface.",
      "context_sha256": "e497f4d7aaf255ba6c37a0fda97a12d06f4f2590cd8bcbf7acaa38104c5b5232",
      "item_sha256": "9fb45adc90c34e1142fa9e42ce339446cdbd87674e844f8f7ba621b42315573c",
      "at": "2026-10-12T19:33:34.994Z"
    },
    {
      "id": "thm-smooth-fixed-mass-mechanical-horseshoe",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 misstates its cited interfaces: they define chaos, continuity, hyperbolicity, and homoclinic points, but not homeomorphism, metric compactness, or conjugacy. This unsupported dependency restatement is a defect.",
      "context_sha256": "ac412c5ed4d3de44455b08d70209f5612ff4a15e24b74c3466c46addbd9bccf1",
      "item_sha256": "11ae305491b54a93261e4597b581845c3186d11dcf429c70a138e31dc25b52a3",
      "at": "2026-10-12T19:33:40.817Z"
    },
    {
      "id": "ex-cm-chaos-finite-word-homoclinic-code-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 attributes sign(x_n(t))=t_n to the bilateral-space definition, square-roots theorem, and absolute-value definition; they do not license this coded-solution claim. The contraction lemma establishes it, but L4 omits that source, and step 2.1 relies on L4.",
      "context_sha256": "b54527697bb99b2055205fa22d268dc5e2dfc624e270eac8600cd32c4bfefaef",
      "item_sha256": "2ea6b800674db8511e1b5825715ddfdd8bbc9c3120000a5dd1ae6c654835f5c0",
      "at": "2026-10-12T19:33:32.928Z"
    }
  ]
