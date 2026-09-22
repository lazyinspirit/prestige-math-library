# Step 7 repair: gate-pass-3, round 1, unit 1

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-3-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-3-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Examine every assigned downstream item, including published items. Assignment requires impact review, not an edit. Leave a sound consumer byte-for-byte unchanged and explain why it is unaffected. Repair only when the supplier change makes the consumer logically invalid or inaccurate, and then make the smallest logically sufficient change without stylistic or unrelated rewriting. Work supplier-before-consumer. Necessary published repairs are authorized by the owner for this impact wave. Reconcile only proof contracts, dependencies, page metadata and publication audit evidence actually invalidated by a necessary repair. Reference-only candidates require examination of the actual cited clause, not automatic transitive propagation; declare genuine missing load-bearing dependencies and report downstream effects of necessary repairs.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-3",round:1,unit:"1",input_sha256:"e5c672a56495aa637b7d182a9417af888edccbadd592b249323ab739259dfcf3",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

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
  "lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times",
  "thm-strong-markov-property-of-brownian-motion",
  "cor-law-of-the-brownian-maximum",
  "cor-distribution-of-a-one-sided-brownian-hitting-time",
  "cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable",
  "def-absolute-value-and-singular-values-of-a-compact-operator",
  "def-trace-class-operator",
  "lem-nuclear-series-characterizes-trace-norm",
  "def-trace-of-a-trace-class-operator",
  "cex-hilbert-schmidt-does-not-imply-trace-class",
  "prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra",
  "lem-killing-length-of-a-root-is-nonzero",
  "def-coroot-of-a-lie-algebra-root",
  "def-root-reflection-from-a-coroot",
  "def-partial-order-on-weights",
  "def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra",
  "def-highest-weight-vector-and-highest-weight-module",
  "def-integral-dominant-and-strictly-dominant-weights",
  "def-dominant-integrable-highest-weight-cyclic-module",
  "thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra",
  "def-serre-lie-algebra-of-a-finite-type-cartan-matrix",
  "lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives",
  "lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient",
  "prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces",
  "lem-every-finite-dimensional-irreducible-representation-has-a-highest-weight-vector",
  "lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral",
  "prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector",
  "prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights",
  "lem-simple-root-integrability-bounds-the-dominant-cyclic-module",
  "thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda",
  "prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional",
  "thm-simple-highest-weight-modules-are-classified-by-their-highest-weight",
  "thm-highest-weight-classification-of-finite-dimensional-irreducible-representations",
  "ex-standard-and-dual-representations-of-sl-n-by-highest-weights",
  "ex-symmetric-powers-as-highest-weight-modules",
  "cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group",
  "def-germ-sigma-algebra-at-zero",
  "cex-the-natural-filtration-need-not-be-right-continuous-before-augmentation",
  "def-elementary-predictable-brownian-integrand",
  "thm-density-of-elementary-predictable-processes-in-predictable-l2",
  "def-locally-square-integrable-predictable-brownian-integrand",
  "lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative",
  "lem-cross-ito-isometry",
  "thm-ito-isometry-and-linearity-in-predictable-l2",
  "thm-ito-integral-process-has-a-continuous-martingale-version",
  "def-continuous-brownian-ito-process",
  "thm-blumenthal-zero-one-law",
  "cor-brownian-filtration-local-martingales-have-continuous-versions",
  "cor-compact-operator-iff-approximation-numbers-tend-to-zero",
  "def-skeletal-filtration-for-generalized-cohomology",
  "def-coefficient-groups-of-a-generalized-cohomology-theory",
  "prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory",
  "thm-cantor-intersection-metric",
  "cor-complex-k-theory-ahss",
  "cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams",
  "thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity",
  "cor-critical-holder-boundary-at-zero-from-the-brownian-lil",
  "thm-peter-weyl-for-compact-lie-groups",
  "cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group",
  "cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group",
  "cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group"
]


