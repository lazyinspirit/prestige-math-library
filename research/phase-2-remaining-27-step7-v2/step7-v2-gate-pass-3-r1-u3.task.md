# Step 7 repair: gate-pass-3, round 1, unit 3

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-3-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-3-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Examine every assigned downstream item, including published items. Assignment requires impact review, not an edit. Leave a sound consumer byte-for-byte unchanged and explain why it is unaffected. Repair only when the supplier change makes the consumer logically invalid or inaccurate, and then make the smallest logically sufficient change without stylistic or unrelated rewriting. Work supplier-before-consumer. Necessary published repairs are authorized by the owner for this impact wave. Reconcile only proof contracts, dependencies, page metadata and publication audit evidence actually invalidated by a necessary repair. Reference-only candidates require examination of the actual cited clause, not automatic transitive propagation; declare genuine missing load-bearing dependencies and report downstream effects of necessary repairs.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-3",round:1,unit:"3",input_sha256:"e5c672a56495aa637b7d182a9417af888edccbadd592b249323ab739259dfcf3",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Owner repair units run in parallel with disjoint item ownership. Follow the shared metadata lock protocol in briefs/step7-owner-repair.md before editing pages, contracts, manifests, registry/index or the published-consumer-supplier ledger; reread shared files after acquiring the lock and release promptly. Maintain the canonical deduplicated classification index and exact supplier/evidence links. Resolve supplied ledger proposals; do not silently discard them. Do not write judge verdicts or shared adjudication JSONL. Unit 1 also reconciles initial-adjudicator ledger proposals whose item has no downstream owner assignment. Record unresolved ledger work honestly in your report; it blocks the final gate.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "id": "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "defect_id": "phase-2-remaining-27-fa-countable-recharting-lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "attribution": "supervising operator: routing only, not mathematical adjudication",
    "reason": "Open published gate finding: examine countable cover refinement versus numerable recharting; resolve the actual claim and affected consumers before certification. See gate-1-operator-routing.md."
  },
  {
    "id": "thm-cantor-intersection-metric",
    "defect_id": "phase-2-remaining-27-fa-e-cantor-choice-interface",
    "attribution": "supervising operator: routing only, not mathematical adjudication",
    "reason": "Open published gate finding: examine clause 1 against the proof's countable point-selection assumption, minimally reconcile its interface and affected consumers. See gate-1-operator-routing.md."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input:
[
  "prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights",
  "ex-the-peter-weyl-decomposition-of-l-two-su-two",
  "ex-time-changed-quadratic-variation-of-an-ito-integral",
  "ex-verma-modules-for-sl-two",
  "prop-root-reflections-are-induced-by-inner-automorphisms",
  "ex-weyl-reflection-in-sl-two",
  "thm-conjugacy-of-cartan-involutions",
  "fs-a-plain-dynkin-diagram-classifies-real-forms",
  "fs-a-root-system-determines-a-compact-connected-semisimple-group-up-to-isomorphism",
  "fs-all-integer-multiples-of-a-root-are-roots",
  "fs-dominance-is-defined-without-choosing-positive-roots",
  "fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form",
  "fs-every-highest-weight-lambda-gives-a-finite-dimensional-simple-module",
  "fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional",
  "fs-every-verma-module-is-finite-dimensional",
  "fs-every-weight-vector-is-a-highest-weight-vector",
  "fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k",
  "fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root",
  "prop-restricted-root-systems-may-be-nonreduced",
  "fs-restricted-root-systems-are-always-reduced",
  "fs-root-spaces-can-have-arbitrary-dimension-in-a-complex-semisimple-lie-algebra",
  "lem-shelah-real-name-capture-and-coded-meagre-unions",
  "lem-shelah-homogeneous-truth-has-baire-representatives",
  "fs-the-baire-property-model-needs-an-inaccessible",
  "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
  "lem-brownian-step-potential-resolvent-at-zero",
  "thm-multiplicative-ahss-for-a-multiplicative-generalized-theory",
  "lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions",
  "lem-good-tree-watson-omega-sequence-closure",
  "lem-homological-ahss-exact-couple-from-the-skeletal-filtration",
  "lem-simple-reflections-preserve-weight-multiplicities",
  "lem-weyl-denominator-and-anti-invariant-orbit-sum-basis",
  "thm-weyl-integration-formula",
  "lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator",
  "prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k",
  "prop-highest-weight-of-the-dual-representation",
  "prop-the-adjoint-representation-has-highest-weight-the-highest-root",
  "prop-top-highest-weight-summand-in-a-tensor-product",
  "thm-relative-consistency-dc-without-stone",
  "rem-stone-exact-choice-strength-open-status",
  "rem-choice-strength-ledger-baire-urysohn-stone-tychonoff",
  "rem-dynkin-diagrams-do-not-classify-global-lie-groups",
  "thm-homological-atiyah-hirzebruch-spectral-sequence",
  "rem-finite-cw-ahss-convergence-does-not-automatically-extend-to-infinite-cw-complexes",
  "rem-general-semimartingale-calculus-is-outside-this-block",
  "rem-raw-versus-usual-filtration-in-the-strong-markov-theorem",
  "rem-schatten-p-classes",
  "rem-self-adjoint-extensions-and-deficiency-indices",
  "thm-brownian-markov-property",
  "thm-brownian-positive-occupation-proportion-has-the-arcsine-law",
  "thm-brownian-zero-set-has-no-isolated-points",
  "thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space",
  "thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form",
  "thm-first-possible-complex-k-ahss-differential-is-integral-sq-three",
  "thm-gleason-kahane-zelazko",
  "thm-integration-by-parts-for-brownian-ito-processes",
  "thm-levy-characterization-of-brownian-motion",
  "thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system",
  "thm-trace-class-is-a-two-sided-banach-operator-ideal",
  "thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues",
  "thm-weyl-character-formula-for-compact-connected-lie-groups"
]


