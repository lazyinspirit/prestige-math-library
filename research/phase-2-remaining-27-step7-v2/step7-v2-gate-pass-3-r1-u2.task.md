# Step 7 repair: gate-pass-3, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-3-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-3-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Examine every assigned downstream item, including published items. Assignment requires impact review, not an edit. Leave a sound consumer byte-for-byte unchanged and explain why it is unaffected. Repair only when the supplier change makes the consumer logically invalid or inaccurate, and then make the smallest logically sufficient change without stylistic or unrelated rewriting. Work supplier-before-consumer. Necessary published repairs are authorized by the owner for this impact wave. Reconcile only proof contracts, dependencies, page metadata and publication audit evidence actually invalidated by a necessary repair. Reference-only candidates require examination of the actual cited clause, not automatic transitive propagation; declare genuine missing load-bearing dependencies and report downstream effects of necessary repairs.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-3",round:1,unit:"2",input_sha256:"e5c672a56495aa637b7d182a9417af888edccbadd592b249323ab739259dfcf3",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

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
  "cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules",
  "cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator",
  "def-regular-root-hyperplanes",
  "cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra",
  "thm-analytic-and-root-system-weyl-groups-agree",
  "def-root-datum-of-a-compact-connected-lie-group",
  "prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group",
  "thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems",
  "thm-compact-connected-lie-groups-are-classified-by-root-data",
  "thm-highest-weight-classification-for-a-compact-connected-lie-group",
  "cor-representation-ring-has-the-dominant-character-basis",
  "thm-space-time-harmonic-functions-yield-brownian-local-martingales",
  "def-brownian-generator",
  "def-cartan-involution-of-a-real-semisimple-lie-algebra",
  "def-cayley-transform-of-a-theta-stable-cartan-subalgebra",
  "def-coefficient-groups-of-a-generalized-homology-theory",
  "def-compact-real-form-of-a-complex-semisimple-lie-algebra",
  "def-split-real-form",
  "lem-chevalley-basis-and-real-structure-constants",
  "thm-existence-of-a-compact-real-form",
  "thm-conjugacy-of-compact-real-forms",
  "thm-existence-of-a-cartan-involution",
  "thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group",
  "def-riemannian-symmetric-pair-of-noncompact-type",
  "thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k",
  "def-maximal-split-abelian-subspace-and-real-rank",
  "def-restricted-root-and-restricted-root-space",
  "thm-restricted-root-space-decomposition",
  "def-positive-restricted-roots-and-nilpotent-n-algebra",
  "def-restricted-weyl-group",
  "def-vogan-diagram",
  "def-satake-diagram",
  "def-shelah-universal-meagre-forcing",
  "def-shelah-hereditarily-ordinal-sequence-definable-model",
  "prop-central-quotients-correspond-to-intermediate-character-lattices",
  "ex-character-lattices-of-su-two-and-so-three",
  "ex-complex-k-ahss-for-spheres",
  "ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra",
  "ex-covariance-of-two-deterministic-ito-integrals",
  "ex-exit-side-probability-from-an-interval",
  "ex-expected-exit-time-from-an-interval-via-ito-formula",
  "ex-exterior-powers-and-fundamental-weights-of-sl-n",
  "ex-fourier-series-on-a-torus-as-peter-weyl",
  "ex-integral-of-the-indicator-of-a-stopping-interval",
  "thm-iwasawa-decomposition-on-the-lie-algebra-level",
  "ex-iwasawa-decomposition-of-sl-two-r",
  "ex-lil-rules-out-a-global-square-root-time-bound",
  "ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n",
  "ex-maximal-torus-and-weyl-group-of-so-three",
  "ex-rank-one-operator-adjoint-norm-and-trace",
  "ex-regular-and-singular-diagonal-elements-of-sl-n",
  "ex-restricted-roots-of-sl-n-r",
  "ex-the-root-sl-two-triple-inside-sl-n",
  "ex-root-strings-in-type-a-two",
  "ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras",
  "ex-serre-relations-for-a-two-recover-sl-three",
  "ex-simply-connected-adjoint-and-intermediate-forms-of-a-semisimple-compact-group",
  "ex-successive-brownian-hits-restart-independent-copies",
  "ex-the-adjoint-representation-and-the-highest-root",
  "ex-the-eight-dimensional-adjoint-representation-of-sl-three",
  "ex-the-killing-form-identifies-roots-with-coroot-directions"
]


